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
var _invoke__7613 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7278 = this$;

if(cljs.core.truth_(and__3546__auto____7278))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7278;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7281 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{var or__3548__auto____7282 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7614 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7284 = this$;

if(cljs.core.truth_(and__3546__auto____7284))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7284;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7285 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
} else
{var or__3548__auto____7286 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7286))
{return or__3548__auto____7286;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7615 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7287 = this$;

if(cljs.core.truth_(and__3546__auto____7287))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7287;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7289 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
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
var _invoke__7616 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7293 = this$;

if(cljs.core.truth_(and__3546__auto____7293))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7293;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7617 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7298 = this$;

if(cljs.core.truth_(and__3546__auto____7298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7306 = this$;

if(cljs.core.truth_(and__3546__auto____7306))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7306;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7346 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{var or__3548__auto____7348 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7351 = this$;

if(cljs.core.truth_(and__3546__auto____7351))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7351;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7360 = this$;

if(cljs.core.truth_(and__3546__auto____7360))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7360;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7365 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7365))
{return or__3548__auto____7365;
} else
{var or__3548__auto____7368 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7621 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7373 = this$;

if(cljs.core.truth_(and__3546__auto____7373))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7373;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7622 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7386 = this$;

if(cljs.core.truth_(and__3546__auto____7386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{var or__3548__auto____7392 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7392))
{return or__3548__auto____7392;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7623 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7398 = this$;

if(cljs.core.truth_(and__3546__auto____7398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{var or__3548__auto____7405 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7624 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7410 = this$;

if(cljs.core.truth_(and__3546__auto____7410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{var or__3548__auto____7417 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7625 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7422 = this$;

if(cljs.core.truth_(and__3546__auto____7422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{var or__3548__auto____7429 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7434 = this$;

if(cljs.core.truth_(and__3546__auto____7434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7438 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{var or__3548__auto____7440 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = this$;

if(cljs.core.truth_(and__3546__auto____7444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7484 = this$;

if(cljs.core.truth_(and__3546__auto____7484))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7484;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7506 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7506))
{return or__3548__auto____7506;
} else
{var or__3548__auto____7510 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7510))
{return or__3548__auto____7510;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7514 = this$;

if(cljs.core.truth_(and__3546__auto____7514))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7514;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7532 = this$;

if(cljs.core.truth_(and__3546__auto____7532))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7532;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7538 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7538))
{return or__3548__auto____7538;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7582 = this$;

if(cljs.core.truth_(and__3546__auto____7582))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7582;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7583 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7583))
{return or__3548__auto____7583;
} else
{var or__3548__auto____7584 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7584))
{return or__3548__auto____7584;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7607 = this$;

if(cljs.core.truth_(and__3546__auto____7607))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7607;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7610 = this$;

if(cljs.core.truth_(and__3546__auto____7610))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7610;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7613.call(this,this$);
case  2 :
return _invoke__7614.call(this,this$,a);
case  3 :
return _invoke__7615.call(this,this$,a,b);
case  4 :
return _invoke__7616.call(this,this$,a,b,c);
case  5 :
return _invoke__7617.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7618.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7619.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7621.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7622.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7623.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7624.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7625.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7626.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7728 = coll;

if(cljs.core.truth_(and__3546__auto____7728))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7728;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7729 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{var or__3548__auto____7730 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7734 = coll;

if(cljs.core.truth_(and__3546__auto____7734))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7734;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7783 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{var or__3548__auto____7784 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7785 = coll;

if(cljs.core.truth_(and__3546__auto____7785))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7785;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7787 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
} else
{var or__3548__auto____7789 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
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
var _nth__7800 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7791 = coll;

if(cljs.core.truth_(and__3546__auto____7791))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7791;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7793 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
} else
{var or__3548__auto____7795 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7795))
{return or__3548__auto____7795;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7801 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7797 = coll;

if(cljs.core.truth_(and__3546__auto____7797))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7797;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{var or__3548__auto____7799 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
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
return _nth__7800.call(this,coll,n);
case  3 :
return _nth__7801.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7806 = coll;

if(cljs.core.truth_(and__3546__auto____7806))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7806;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7808 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
} else
{var or__3548__auto____7810 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7812 = coll;

if(cljs.core.truth_(and__3546__auto____7812))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7812;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7813 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7813))
{return or__3548__auto____7813;
} else
{var or__3548__auto____7814 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
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
if(cljs.core.truth_((function (){var and__3546__auto____7818 = o;

if(cljs.core.truth_(and__3546__auto____7818))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7818;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7819 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
} else
{var or__3548__auto____7820 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7820))
{return or__3548__auto____7820;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7843 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7821 = o;

if(cljs.core.truth_(and__3546__auto____7821))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7821;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7823 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7823))
{return or__3548__auto____7823;
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
if(cljs.core.truth_((function (){var and__3546__auto____7849 = coll;

if(cljs.core.truth_(and__3546__auto____7849))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7849;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7851 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
} else
{var or__3548__auto____7853 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7853))
{return or__3548__auto____7853;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = coll;

if(cljs.core.truth_(and__3546__auto____7856))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7856;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7863 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7863))
{return or__3548__auto____7863;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7873 = coll;

if(cljs.core.truth_(and__3546__auto____7873))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7873;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7892 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{var or__3548__auto____7895 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7899 = coll;

if(cljs.core.truth_(and__3546__auto____7899))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7899;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7900 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{var or__3548__auto____7902 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7914 = coll;

if(cljs.core.truth_(and__3546__auto____7914))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7914;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
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
{return (function (){var or__3548__auto____7923 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{var or__3548__auto____7925 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7941 = coll;

if(cljs.core.truth_(and__3546__auto____7941))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7941;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7946 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7947 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7954 = o;

if(cljs.core.truth_(and__3546__auto____7954))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7954;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7956 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
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
if(cljs.core.truth_((function (){var and__3546__auto____7968 = o;

if(cljs.core.truth_(and__3546__auto____7968))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7968;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7969 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
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
if(cljs.core.truth_((function (){var and__3546__auto____7979 = o;

if(cljs.core.truth_(and__3546__auto____7979))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7979;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7983 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{var or__3548__auto____7985 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7993 = o;

if(cljs.core.truth_(and__3546__auto____7993))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7993;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7999 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
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
var _reduce__8022 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8011 = coll;

if(cljs.core.truth_(and__3546__auto____8011))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8011;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8015 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{var or__3548__auto____8016 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8023 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8018 = coll;

if(cljs.core.truth_(and__3546__auto____8018))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8018;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8020 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{var or__3548__auto____8021 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
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
return _reduce__8022.call(this,coll,f);
case  3 :
return _reduce__8023.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8031 = o;

if(cljs.core.truth_(and__3546__auto____8031))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8031;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8035 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{var or__3548__auto____8039 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8044 = o;

if(cljs.core.truth_(and__3546__auto____8044))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8044;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8046 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{var or__3548__auto____8048 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8058 = o;

if(cljs.core.truth_(and__3546__auto____8058))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8058;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8059 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
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
if(cljs.core.truth_((function (){var and__3546__auto____8069 = o;

if(cljs.core.truth_(and__3546__auto____8069))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8069;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8072 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{var or__3548__auto____8075 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = d;

if(cljs.core.truth_(and__3546__auto____8108))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8108;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8116 = this$;

if(cljs.core.truth_(and__3546__auto____8116))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8116;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8119 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{var or__3548__auto____8120 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8121 = this$;

if(cljs.core.truth_(and__3546__auto____8121))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8121;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8122 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
} else
{var or__3548__auto____8123 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8123))
{return or__3548__auto____8123;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8124 = this$;

if(cljs.core.truth_(and__3546__auto____8124))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8124;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8126 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{var or__3548__auto____8127 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
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
var G__8158 = null;
var G__8158__8159 = (function (o,k){
return null;
});
var G__8158__8161 = (function (o,k,not_found){
return not_found;
});
G__8158 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8158__8159.call(this,o,k);
case  3 :
return G__8158__8161.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8158;
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
var G__8165 = null;
var G__8165__8166 = (function (_,f){
return f.call(null);
});
var G__8165__8167 = (function (_,f,start){
return start;
});
G__8165 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8165__8166.call(this,_,f);
case  3 :
return G__8165__8167.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8165;
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
var G__8175 = null;
var G__8175__8176 = (function (_,n){
return null;
});
var G__8175__8177 = (function (_,n,not_found){
return not_found;
});
G__8175 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8175__8176.call(this,_,n);
case  3 :
return G__8175__8177.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8175;
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
var ci_reduce__8208 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8197 = cljs.core._nth.call(null,cicoll,0);
var n__8198 = 1;

while(true){
if(cljs.core.truth_((n__8198 < cljs.core._count.call(null,cicoll))))
{{
var G__8214 = f.call(null,val__8197,cljs.core._nth.call(null,cicoll,n__8198));
var G__8215 = (n__8198 + 1);
val__8197 = G__8214;
n__8198 = G__8215;
continue;
}
} else
{return val__8197;
}
break;
}
}
});
var ci_reduce__8209 = (function (cicoll,f,val){
var val__8199 = val;
var n__8200 = 0;

while(true){
if(cljs.core.truth_((n__8200 < cljs.core._count.call(null,cicoll))))
{{
var G__8217 = f.call(null,val__8199,cljs.core._nth.call(null,cicoll,n__8200));
var G__8218 = (n__8200 + 1);
val__8199 = G__8217;
n__8200 = G__8218;
continue;
}
} else
{return val__8199;
}
break;
}
});
var ci_reduce__8210 = (function (cicoll,f,val,idx){
var val__8205 = val;
var n__8206 = idx;

while(true){
if(cljs.core.truth_((n__8206 < cljs.core._count.call(null,cicoll))))
{{
var G__8224 = f.call(null,val__8205,cljs.core._nth.call(null,cicoll,n__8206));
var G__8225 = (n__8206 + 1);
val__8205 = G__8224;
n__8206 = G__8225;
continue;
}
} else
{return val__8205;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8208.call(this,cicoll,f);
case  3 :
return ci_reduce__8209.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8210.call(this,cicoll,f,val,idx);
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
var this__8230 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8249 = null;
var G__8249__8250 = (function (_,f){
var this__8231 = this;
return cljs.core.ci_reduce.call(null,this__8231.a,f,(this__8231.a[this__8231.i]),(this__8231.i + 1));
});
var G__8249__8251 = (function (_,f,start){
var this__8232 = this;
return cljs.core.ci_reduce.call(null,this__8232.a,f,start,this__8232.i);
});
G__8249 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8249__8250.call(this,_,f);
case  3 :
return G__8249__8251.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8249;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8233 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8234 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8263 = null;
var G__8263__8264 = (function (coll,n){
var this__8235 = this;
var i__8236 = (n + this__8235.i);

if(cljs.core.truth_((i__8236 < this__8235.a.length)))
{return (this__8235.a[i__8236]);
} else
{return null;
}
});
var G__8263__8265 = (function (coll,n,not_found){
var this__8237 = this;
var i__8238 = (n + this__8237.i);

if(cljs.core.truth_((i__8238 < this__8237.a.length)))
{return (this__8237.a[i__8238]);
} else
{return not_found;
}
});
G__8263 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8263__8264.call(this,coll,n);
case  3 :
return G__8263__8265.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8263;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8239 = this;
return (this__8239.a.length - this__8239.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8240 = this;
return (this__8240.a[this__8240.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8241 = this;
if(cljs.core.truth_(((this__8241.i + 1) < this__8241.a.length)))
{return (new cljs.core.IndexedSeq(this__8241.a,(this__8241.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8245 = this;
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
var G__8291 = null;
var G__8291__8292 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8291__8294 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8291 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8291__8292.call(this,array,f);
case  3 :
return G__8291__8294.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8291;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8296 = null;
var G__8296__8297 = (function (array,k){
return (array[k]);
});
var G__8296__8298 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8296 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8296__8297.call(this,array,k);
case  3 :
return G__8296__8298.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8296;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8304 = null;
var G__8304__8305 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8304__8306 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8304 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8304__8305.call(this,array,n);
case  3 :
return G__8304__8306.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8304;
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
var temp__3698__auto____8312 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8312))
{var s__8315 = temp__3698__auto____8312;

return cljs.core._first.call(null,s__8315);
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
var G__8365 = cljs.core.next.call(null,s);
s = G__8365;
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
var s__8374 = cljs.core.seq.call(null,x);
var n__8375 = 0;

while(true){
if(cljs.core.truth_(s__8374))
{{
var G__8379 = cljs.core.next.call(null,s__8374);
var G__8380 = (n__8375 + 1);
s__8374 = G__8379;
n__8375 = G__8380;
continue;
}
} else
{return n__8375;
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
var conj__8412 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8413 = (function() { 
var G__8415__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8416 = conj.call(null,coll,x);
var G__8417 = cljs.core.first.call(null,xs);
var G__8418 = cljs.core.next.call(null,xs);
coll = G__8416;
x = G__8417;
xs = G__8418;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8415 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8415__delegate.call(this, coll, x, xs);
};
G__8415.cljs$lang$maxFixedArity = 2;
G__8415.cljs$lang$applyTo = (function (arglist__8419){
var coll = cljs.core.first(arglist__8419);
var x = cljs.core.first(cljs.core.next(arglist__8419));
var xs = cljs.core.rest(cljs.core.next(arglist__8419));
return G__8415__delegate.call(this, coll, x, xs);
});
return G__8415;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8412.call(this,coll,x);
default:
return conj__8413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8413.cljs$lang$applyTo;
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
var nth__8422 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8423 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8422.call(this,coll,n);
case  3 :
return nth__8423.call(this,coll,n,not_found);
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
var get__8433 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8434 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8433.call(this,o,k);
case  3 :
return get__8434.call(this,o,k,not_found);
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
var assoc__8535 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8536 = (function() { 
var G__8539__delegate = function (coll,k,v,kvs){
while(true){
var ret__8526 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8541 = ret__8526;
var G__8542 = cljs.core.first.call(null,kvs);
var G__8543 = cljs.core.second.call(null,kvs);
var G__8544 = cljs.core.nnext.call(null,kvs);
coll = G__8541;
k = G__8542;
v = G__8543;
kvs = G__8544;
continue;
}
} else
{return ret__8526;
}
break;
}
};
var G__8539 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8539__delegate.call(this, coll, k, v, kvs);
};
G__8539.cljs$lang$maxFixedArity = 3;
G__8539.cljs$lang$applyTo = (function (arglist__8545){
var coll = cljs.core.first(arglist__8545);
var k = cljs.core.first(cljs.core.next(arglist__8545));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8545)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8545)));
return G__8539__delegate.call(this, coll, k, v, kvs);
});
return G__8539;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8535.call(this,coll,k,v);
default:
return assoc__8536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8536.cljs$lang$applyTo;
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
var dissoc__8550 = (function (coll){
return coll;
});
var dissoc__8551 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8552 = (function() { 
var G__8557__delegate = function (coll,k,ks){
while(true){
var ret__8549 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8558 = ret__8549;
var G__8559 = cljs.core.first.call(null,ks);
var G__8560 = cljs.core.next.call(null,ks);
coll = G__8558;
k = G__8559;
ks = G__8560;
continue;
}
} else
{return ret__8549;
}
break;
}
};
var G__8557 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8557__delegate.call(this, coll, k, ks);
};
G__8557.cljs$lang$maxFixedArity = 2;
G__8557.cljs$lang$applyTo = (function (arglist__8561){
var coll = cljs.core.first(arglist__8561);
var k = cljs.core.first(cljs.core.next(arglist__8561));
var ks = cljs.core.rest(cljs.core.next(arglist__8561));
return G__8557__delegate.call(this, coll, k, ks);
});
return G__8557;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8550.call(this,coll);
case  2 :
return dissoc__8551.call(this,coll,k);
default:
return dissoc__8552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8552.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8569 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8574 = x__445__auto____8569;

if(cljs.core.truth_(and__3546__auto____8574))
{var and__3546__auto____8575 = x__445__auto____8569.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8575))
{return cljs.core.not.call(null,x__445__auto____8569.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8575;
}
} else
{return and__3546__auto____8574;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8569);
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
var disj__8599 = (function (coll){
return coll;
});
var disj__8600 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8601 = (function() { 
var G__8605__delegate = function (coll,k,ks){
while(true){
var ret__8593 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8607 = ret__8593;
var G__8608 = cljs.core.first.call(null,ks);
var G__8609 = cljs.core.next.call(null,ks);
coll = G__8607;
k = G__8608;
ks = G__8609;
continue;
}
} else
{return ret__8593;
}
break;
}
};
var G__8605 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8605__delegate.call(this, coll, k, ks);
};
G__8605.cljs$lang$maxFixedArity = 2;
G__8605.cljs$lang$applyTo = (function (arglist__8611){
var coll = cljs.core.first(arglist__8611);
var k = cljs.core.first(cljs.core.next(arglist__8611));
var ks = cljs.core.rest(cljs.core.next(arglist__8611));
return G__8605__delegate.call(this, coll, k, ks);
});
return G__8605;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8599.call(this,coll);
case  2 :
return disj__8600.call(this,coll,k);
default:
return disj__8601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8601.cljs$lang$applyTo;
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
{var x__445__auto____8621 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8622 = x__445__auto____8621;

if(cljs.core.truth_(and__3546__auto____8622))
{var and__3546__auto____8623 = x__445__auto____8621.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8623))
{return cljs.core.not.call(null,x__445__auto____8621.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8623;
}
} else
{return and__3546__auto____8622;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8621);
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
{var x__445__auto____8642 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8643 = x__445__auto____8642;

if(cljs.core.truth_(and__3546__auto____8643))
{var and__3546__auto____8644 = x__445__auto____8642.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8644))
{return cljs.core.not.call(null,x__445__auto____8642.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8644;
}
} else
{return and__3546__auto____8643;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8642);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8654 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8656 = x__445__auto____8654;

if(cljs.core.truth_(and__3546__auto____8656))
{var and__3546__auto____8658 = x__445__auto____8654.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8658))
{return cljs.core.not.call(null,x__445__auto____8654.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8658;
}
} else
{return and__3546__auto____8656;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8654);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8664 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8666 = x__445__auto____8664;

if(cljs.core.truth_(and__3546__auto____8666))
{var and__3546__auto____8668 = x__445__auto____8664.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8668))
{return cljs.core.not.call(null,x__445__auto____8664.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8668;
}
} else
{return and__3546__auto____8666;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8664);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8673 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8674 = x__445__auto____8673;

if(cljs.core.truth_(and__3546__auto____8674))
{var and__3546__auto____8675 = x__445__auto____8673.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8675))
{return cljs.core.not.call(null,x__445__auto____8673.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8675;
}
} else
{return and__3546__auto____8674;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8673);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8678 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8680 = x__445__auto____8678;

if(cljs.core.truth_(and__3546__auto____8680))
{var and__3546__auto____8681 = x__445__auto____8678.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8681))
{return cljs.core.not.call(null,x__445__auto____8678.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8681;
}
} else
{return and__3546__auto____8680;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8678);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8687 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8688 = x__445__auto____8687;

if(cljs.core.truth_(and__3546__auto____8688))
{var and__3546__auto____8691 = x__445__auto____8687.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8691))
{return cljs.core.not.call(null,x__445__auto____8687.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8691;
}
} else
{return and__3546__auto____8688;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8687);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8704 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8704.push(key);
}));
return keys__8704;
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
{var x__445__auto____8715 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8720 = x__445__auto____8715;

if(cljs.core.truth_(and__3546__auto____8720))
{var and__3546__auto____8722 = x__445__auto____8715.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8722))
{return cljs.core.not.call(null,x__445__auto____8715.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8722;
}
} else
{return and__3546__auto____8720;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8715);
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
var and__3546__auto____8741 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8741))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8743 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8743))
{return or__3548__auto____8743;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8741;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8747 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8747))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8747;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8748 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8748))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8748;
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
var and__3546__auto____8766 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8766))
{return (n == n.toFixed());
} else
{return and__3546__auto____8766;
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
if(cljs.core.truth_((function (){var and__3546__auto____8775 = coll;

if(cljs.core.truth_(and__3546__auto____8775))
{var and__3546__auto____8780 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8780))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8780;
}
} else
{return and__3546__auto____8775;
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
var distinct_QMARK___8798 = (function (x){
return true;
});
var distinct_QMARK___8799 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8800 = (function() { 
var G__8802__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8787 = cljs.core.set([y,x]);
var xs__8788 = more;

while(true){
var x__8791 = cljs.core.first.call(null,xs__8788);
var etc__8792 = cljs.core.next.call(null,xs__8788);

if(cljs.core.truth_(xs__8788))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8787,x__8791)))
{return false;
} else
{{
var G__8804 = cljs.core.conj.call(null,s__8787,x__8791);
var G__8806 = etc__8792;
s__8787 = G__8804;
xs__8788 = G__8806;
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
var G__8802 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8802__delegate.call(this, x, y, more);
};
G__8802.cljs$lang$maxFixedArity = 2;
G__8802.cljs$lang$applyTo = (function (arglist__8808){
var x = cljs.core.first(arglist__8808);
var y = cljs.core.first(cljs.core.next(arglist__8808));
var more = cljs.core.rest(cljs.core.next(arglist__8808));
return G__8802__delegate.call(this, x, y, more);
});
return G__8802;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8798.call(this,x);
case  2 :
return distinct_QMARK___8799.call(this,x,y);
default:
return distinct_QMARK___8800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8800.cljs$lang$applyTo;
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
var r__8819 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8819)))
{return r__8819;
} else
{if(cljs.core.truth_(r__8819))
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
var sort__8841 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8842 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8840 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8840,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8840);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8841.call(this,comp);
case  2 :
return sort__8842.call(this,comp,coll);
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
var sort_by__8854 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8855 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8854.call(this,keyfn,comp);
case  3 :
return sort_by__8855.call(this,keyfn,comp,coll);
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
var reduce__8864 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8865 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8864.call(this,f,val);
case  3 :
return reduce__8865.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8875 = (function (f,coll){
var temp__3695__auto____8869 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8869))
{var s__8871 = temp__3695__auto____8869;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8871),cljs.core.next.call(null,s__8871));
} else
{return f.call(null);
}
});
var seq_reduce__8876 = (function (f,val,coll){
var val__8872 = val;
var coll__8873 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8873))
{{
var G__8878 = f.call(null,val__8872,cljs.core.first.call(null,coll__8873));
var G__8879 = cljs.core.next.call(null,coll__8873);
val__8872 = G__8878;
coll__8873 = G__8879;
continue;
}
} else
{return val__8872;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8875.call(this,f,val);
case  3 :
return seq_reduce__8876.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8881 = null;
var G__8881__8882 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8881__8883 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8881 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8881__8882.call(this,coll,f);
case  3 :
return G__8881__8883.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8881;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8900 = (function (){
return 0;
});
var _PLUS___8901 = (function (x){
return x;
});
var _PLUS___8902 = (function (x,y){
return (x + y);
});
var _PLUS___8903 = (function() { 
var G__8908__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8908 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8908__delegate.call(this, x, y, more);
};
G__8908.cljs$lang$maxFixedArity = 2;
G__8908.cljs$lang$applyTo = (function (arglist__8911){
var x = cljs.core.first(arglist__8911);
var y = cljs.core.first(cljs.core.next(arglist__8911));
var more = cljs.core.rest(cljs.core.next(arglist__8911));
return G__8908__delegate.call(this, x, y, more);
});
return G__8908;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8900.call(this);
case  1 :
return _PLUS___8901.call(this,x);
case  2 :
return _PLUS___8902.call(this,x,y);
default:
return _PLUS___8903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8903.cljs$lang$applyTo;
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
var ___8915 = (function (x){
return (- x);
});
var ___8916 = (function (x,y){
return (x - y);
});
var ___8917 = (function() { 
var G__8923__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8923 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8923__delegate.call(this, x, y, more);
};
G__8923.cljs$lang$maxFixedArity = 2;
G__8923.cljs$lang$applyTo = (function (arglist__8925){
var x = cljs.core.first(arglist__8925);
var y = cljs.core.first(cljs.core.next(arglist__8925));
var more = cljs.core.rest(cljs.core.next(arglist__8925));
return G__8923__delegate.call(this, x, y, more);
});
return G__8923;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8915.call(this,x);
case  2 :
return ___8916.call(this,x,y);
default:
return ___8917.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8917.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8935 = (function (){
return 1;
});
var _STAR___8936 = (function (x){
return x;
});
var _STAR___8937 = (function (x,y){
return (x * y);
});
var _STAR___8938 = (function() { 
var G__8943__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8943 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8943__delegate.call(this, x, y, more);
};
G__8943.cljs$lang$maxFixedArity = 2;
G__8943.cljs$lang$applyTo = (function (arglist__8946){
var x = cljs.core.first(arglist__8946);
var y = cljs.core.first(cljs.core.next(arglist__8946));
var more = cljs.core.rest(cljs.core.next(arglist__8946));
return G__8943__delegate.call(this, x, y, more);
});
return G__8943;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8935.call(this);
case  1 :
return _STAR___8936.call(this,x);
case  2 :
return _STAR___8937.call(this,x,y);
default:
return _STAR___8938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8938.cljs$lang$applyTo;
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
var _SLASH___8947 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8948 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8949 = (function() { 
var G__8952__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8952 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8952__delegate.call(this, x, y, more);
};
G__8952.cljs$lang$maxFixedArity = 2;
G__8952.cljs$lang$applyTo = (function (arglist__8955){
var x = cljs.core.first(arglist__8955);
var y = cljs.core.first(cljs.core.next(arglist__8955));
var more = cljs.core.rest(cljs.core.next(arglist__8955));
return G__8952__delegate.call(this, x, y, more);
});
return G__8952;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8947.call(this,x);
case  2 :
return _SLASH___8948.call(this,x,y);
default:
return _SLASH___8949.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8949.cljs$lang$applyTo;
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
var _LT___9018 = (function (x){
return true;
});
var _LT___9019 = (function (x,y){
return (x < y);
});
var _LT___9020 = (function() { 
var G__9026__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9027 = y;
var G__9028 = cljs.core.first.call(null,more);
var G__9029 = cljs.core.next.call(null,more);
x = G__9027;
y = G__9028;
more = G__9029;
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
var G__9026 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9026__delegate.call(this, x, y, more);
};
G__9026.cljs$lang$maxFixedArity = 2;
G__9026.cljs$lang$applyTo = (function (arglist__9030){
var x = cljs.core.first(arglist__9030);
var y = cljs.core.first(cljs.core.next(arglist__9030));
var more = cljs.core.rest(cljs.core.next(arglist__9030));
return G__9026__delegate.call(this, x, y, more);
});
return G__9026;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9018.call(this,x);
case  2 :
return _LT___9019.call(this,x,y);
default:
return _LT___9020.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9020.cljs$lang$applyTo;
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
var _LT__EQ___9035 = (function (x){
return true;
});
var _LT__EQ___9036 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9037 = (function() { 
var G__9040__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9042 = y;
var G__9044 = cljs.core.first.call(null,more);
var G__9046 = cljs.core.next.call(null,more);
x = G__9042;
y = G__9044;
more = G__9046;
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
var G__9040 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9040__delegate.call(this, x, y, more);
};
G__9040.cljs$lang$maxFixedArity = 2;
G__9040.cljs$lang$applyTo = (function (arglist__9052){
var x = cljs.core.first(arglist__9052);
var y = cljs.core.first(cljs.core.next(arglist__9052));
var more = cljs.core.rest(cljs.core.next(arglist__9052));
return G__9040__delegate.call(this, x, y, more);
});
return G__9040;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9035.call(this,x);
case  2 :
return _LT__EQ___9036.call(this,x,y);
default:
return _LT__EQ___9037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9037.cljs$lang$applyTo;
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
var _GT___9058 = (function (x){
return true;
});
var _GT___9059 = (function (x,y){
return (x > y);
});
var _GT___9060 = (function() { 
var G__9066__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9067 = y;
var G__9068 = cljs.core.first.call(null,more);
var G__9069 = cljs.core.next.call(null,more);
x = G__9067;
y = G__9068;
more = G__9069;
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
var G__9066 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9066__delegate.call(this, x, y, more);
};
G__9066.cljs$lang$maxFixedArity = 2;
G__9066.cljs$lang$applyTo = (function (arglist__9079){
var x = cljs.core.first(arglist__9079);
var y = cljs.core.first(cljs.core.next(arglist__9079));
var more = cljs.core.rest(cljs.core.next(arglist__9079));
return G__9066__delegate.call(this, x, y, more);
});
return G__9066;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9058.call(this,x);
case  2 :
return _GT___9059.call(this,x,y);
default:
return _GT___9060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9060.cljs$lang$applyTo;
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
var _GT__EQ___9157 = (function (x){
return true;
});
var _GT__EQ___9158 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9159 = (function() { 
var G__9161__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9162 = y;
var G__9163 = cljs.core.first.call(null,more);
var G__9164 = cljs.core.next.call(null,more);
x = G__9162;
y = G__9163;
more = G__9164;
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
var G__9161 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9161__delegate.call(this, x, y, more);
};
G__9161.cljs$lang$maxFixedArity = 2;
G__9161.cljs$lang$applyTo = (function (arglist__9171){
var x = cljs.core.first(arglist__9171);
var y = cljs.core.first(cljs.core.next(arglist__9171));
var more = cljs.core.rest(cljs.core.next(arglist__9171));
return G__9161__delegate.call(this, x, y, more);
});
return G__9161;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9157.call(this,x);
case  2 :
return _GT__EQ___9158.call(this,x,y);
default:
return _GT__EQ___9159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9159.cljs$lang$applyTo;
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
var max__9192 = (function (x){
return x;
});
var max__9193 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9194 = (function() { 
var G__9196__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9196 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9196__delegate.call(this, x, y, more);
};
G__9196.cljs$lang$maxFixedArity = 2;
G__9196.cljs$lang$applyTo = (function (arglist__9197){
var x = cljs.core.first(arglist__9197);
var y = cljs.core.first(cljs.core.next(arglist__9197));
var more = cljs.core.rest(cljs.core.next(arglist__9197));
return G__9196__delegate.call(this, x, y, more);
});
return G__9196;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9192.call(this,x);
case  2 :
return max__9193.call(this,x,y);
default:
return max__9194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9194.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9218 = (function (x){
return x;
});
var min__9219 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9220 = (function() { 
var G__9227__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9227__delegate.call(this, x, y, more);
};
G__9227.cljs$lang$maxFixedArity = 2;
G__9227.cljs$lang$applyTo = (function (arglist__9230){
var x = cljs.core.first(arglist__9230);
var y = cljs.core.first(cljs.core.next(arglist__9230));
var more = cljs.core.rest(cljs.core.next(arglist__9230));
return G__9227__delegate.call(this, x, y, more);
});
return G__9227;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9218.call(this,x);
case  2 :
return min__9219.call(this,x,y);
default:
return min__9220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9220.cljs$lang$applyTo;
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
var rem__9244 = (n % d);

return cljs.core.fix.call(null,((n - rem__9244) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9245 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9245));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9257 = (function (){
return Math.random.call(null);
});
var rand__9258 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9257.call(this);
case  1 :
return rand__9258.call(this,n);
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
var _EQ__EQ___9367 = (function (x){
return true;
});
var _EQ__EQ___9368 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9369 = (function() { 
var G__9373__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9374 = y;
var G__9375 = cljs.core.first.call(null,more);
var G__9376 = cljs.core.next.call(null,more);
x = G__9374;
y = G__9375;
more = G__9376;
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
var G__9373 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9373__delegate.call(this, x, y, more);
};
G__9373.cljs$lang$maxFixedArity = 2;
G__9373.cljs$lang$applyTo = (function (arglist__9382){
var x = cljs.core.first(arglist__9382);
var y = cljs.core.first(cljs.core.next(arglist__9382));
var more = cljs.core.rest(cljs.core.next(arglist__9382));
return G__9373__delegate.call(this, x, y, more);
});
return G__9373;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9367.call(this,x);
case  2 :
return _EQ__EQ___9368.call(this,x,y);
default:
return _EQ__EQ___9369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9369.cljs$lang$applyTo;
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
var n__9397 = n;
var xs__9398 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9399 = xs__9398;

if(cljs.core.truth_(and__3546__auto____9399))
{return (n__9397 > 0);
} else
{return and__3546__auto____9399;
}
})()))
{{
var G__9410 = (n__9397 - 1);
var G__9412 = cljs.core.next.call(null,xs__9398);
n__9397 = G__9410;
xs__9398 = G__9412;
continue;
}
} else
{return xs__9398;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9424 = null;
var G__9424__9425 = (function (coll,n){
var temp__3695__auto____9416 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9416))
{var xs__9417 = temp__3695__auto____9416;

return cljs.core.first.call(null,xs__9417);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9424__9426 = (function (coll,n,not_found){
var temp__3695__auto____9420 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9420))
{var xs__9421 = temp__3695__auto____9420;

return cljs.core.first.call(null,xs__9421);
} else
{return not_found;
}
});
G__9424 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9424__9425.call(this,coll,n);
case  3 :
return G__9424__9426.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9424;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9457 = (function (){
return "";
});
var str_STAR___9458 = (function (x){
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
var str_STAR___9459 = (function() { 
var G__9462__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9466 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9467 = cljs.core.next.call(null,more);
sb = G__9466;
more = G__9467;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9462 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9462__delegate.call(this, x, ys);
};
G__9462.cljs$lang$maxFixedArity = 1;
G__9462.cljs$lang$applyTo = (function (arglist__9468){
var x = cljs.core.first(arglist__9468);
var ys = cljs.core.rest(arglist__9468);
return G__9462__delegate.call(this, x, ys);
});
return G__9462;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9457.call(this);
case  1 :
return str_STAR___9458.call(this,x);
default:
return str_STAR___9459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9459.cljs$lang$applyTo;
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
var str__9476 = (function (){
return "";
});
var str__9477 = (function (x){
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
var str__9478 = (function() { 
var G__9484__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9484 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9484__delegate.call(this, x, ys);
};
G__9484.cljs$lang$maxFixedArity = 1;
G__9484.cljs$lang$applyTo = (function (arglist__9486){
var x = cljs.core.first(arglist__9486);
var ys = cljs.core.rest(arglist__9486);
return G__9484__delegate.call(this, x, ys);
});
return G__9484;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9476.call(this);
case  1 :
return str__9477.call(this,x);
default:
return str__9478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9478.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9488 = (function (s,start){
return s.substring(start);
});
var subs__9490 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9488.call(this,s,start);
case  3 :
return subs__9490.call(this,s,start,end);
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
var symbol__9498 = (function (name){
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
var symbol__9499 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9498.call(this,ns);
case  2 :
return symbol__9499.call(this,ns,name);
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
var keyword__9512 = (function (name){
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
var keyword__9513 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9512.call(this,ns);
case  2 :
return keyword__9513.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9527 = cljs.core.seq.call(null,x);
var ys__9529 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9527)))
{return cljs.core.nil_QMARK_.call(null,ys__9529);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9529)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9527),cljs.core.first.call(null,ys__9529))))
{{
var G__9556 = cljs.core.next.call(null,xs__9527);
var G__9557 = cljs.core.next.call(null,ys__9529);
xs__9527 = G__9556;
ys__9529 = G__9557;
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
return cljs.core.reduce.call(null,(function (p1__9559_SHARP_,p2__9560_SHARP_){
return cljs.core.hash_combine.call(null,p1__9559_SHARP_,cljs.core.hash.call(null,p2__9560_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9571__9572 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9571__9572))
{var G__9574__9577 = cljs.core.first.call(null,G__9571__9572);
var vec__9575__9580 = G__9574__9577;
var key_name__9582 = cljs.core.nth.call(null,vec__9575__9580,0,null);
var f__9583 = cljs.core.nth.call(null,vec__9575__9580,1,null);
var G__9571__9584 = G__9571__9572;

var G__9574__9585 = G__9574__9577;
var G__9571__9586 = G__9571__9584;

while(true){
var vec__9587__9589 = G__9574__9585;
var key_name__9591 = cljs.core.nth.call(null,vec__9587__9589,0,null);
var f__9593 = cljs.core.nth.call(null,vec__9587__9589,1,null);
var G__9571__9594 = G__9571__9586;

var str_name__9595 = cljs.core.name.call(null,key_name__9591);

obj[str_name__9595] = f__9593;
var temp__3698__auto____9597 = cljs.core.next.call(null,G__9571__9594);

if(cljs.core.truth_(temp__3698__auto____9597))
{var G__9571__9598 = temp__3698__auto____9597;

{
var G__9599 = cljs.core.first.call(null,G__9571__9598);
var G__9600 = G__9571__9598;
G__9574__9585 = G__9599;
G__9571__9586 = G__9600;
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
var this__9612 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9613 = this;
return (new cljs.core.List(this__9613.meta,o,coll,(this__9613.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9614 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9617 = this;
return this__9617.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9618 = this;
return this__9618.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9619 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9622 = this;
return this__9622.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9624 = this;
return this__9624.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9627 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9628 = this;
return (new cljs.core.List(meta,this__9628.first,this__9628.rest,this__9628.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9629 = this;
return this__9629.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9630 = this;
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
var this__9660 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9661 = this;
return (new cljs.core.List(this__9661.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9663 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9667 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9668 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9669 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9671 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9672 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9673 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9674 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9675 = this;
return this__9675.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9678 = this;
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
list.cljs$lang$applyTo = (function (arglist__9727){
var items = cljs.core.seq( arglist__9727 );;
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
var this__9737 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9738 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9739 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9743 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9743.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9744 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9746 = this;
return this__9746.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9750 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9750.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9750.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9751 = this;
return this__9751.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9752 = this;
return (new cljs.core.Cons(meta,this__9752.first,this__9752.rest));
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
var G__9767 = null;
var G__9767__9768 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9767__9769 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9767 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9767__9768.call(this,string,f);
case  3 :
return G__9767__9769.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9767;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9771 = null;
var G__9771__9772 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9771__9773 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9771 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9771__9772.call(this,string,k);
case  3 :
return G__9771__9773.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9771;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9775 = null;
var G__9775__9776 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9775__9777 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9775 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9775__9776.call(this,string,n);
case  3 :
return G__9775__9777.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9775;
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
var G__9879 = null;
var G__9879__9881 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9879__9882 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9879 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9879__9881.call(this,this$,coll);
case  3 :
return G__9879__9882.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9879;
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
var x__9890 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9890;
} else
{lazy_seq.x = x__9890.call(null);
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
var this__9905 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9915 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9918 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9922 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9922.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9925 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9928 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9930 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9932 = this;
return this__9932.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9934 = this;
return (new cljs.core.LazySeq(meta,this__9934.realized,this__9934.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9946 = cljs.core.array.call(null);

var s__9947 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9947)))
{ary__9946.push(cljs.core.first.call(null,s__9947));
{
var G__9954 = cljs.core.next.call(null,s__9947);
s__9947 = G__9954;
continue;
}
} else
{return ary__9946;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9957 = s;
var i__9958 = n;
var sum__9959 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9961 = (i__9958 > 0);

if(cljs.core.truth_(and__3546__auto____9961))
{return cljs.core.seq.call(null,s__9957);
} else
{return and__3546__auto____9961;
}
})()))
{{
var G__9967 = cljs.core.next.call(null,s__9957);
var G__9968 = (i__9958 - 1);
var G__9969 = (sum__9959 + 1);
s__9957 = G__9967;
i__9958 = G__9968;
sum__9959 = G__9969;
continue;
}
} else
{return sum__9959;
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
var concat__10054 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10055 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10056 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10046 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10046))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10046),concat.call(null,cljs.core.rest.call(null,s__10046),y));
} else
{return y;
}
})));
});
var concat__10057 = (function() { 
var G__10062__delegate = function (x,y,zs){
var cat__10051 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10049 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10049))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10049),cat.call(null,cljs.core.rest.call(null,xys__10049),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10051.call(null,concat.call(null,x,y),zs);
};
var G__10062 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10062__delegate.call(this, x, y, zs);
};
G__10062.cljs$lang$maxFixedArity = 2;
G__10062.cljs$lang$applyTo = (function (arglist__10065){
var x = cljs.core.first(arglist__10065);
var y = cljs.core.first(cljs.core.next(arglist__10065));
var zs = cljs.core.rest(cljs.core.next(arglist__10065));
return G__10062__delegate.call(this, x, y, zs);
});
return G__10062;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10054.call(this);
case  1 :
return concat__10055.call(this,x);
case  2 :
return concat__10056.call(this,x,y);
default:
return concat__10057.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10057.cljs$lang$applyTo;
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
var list_STAR___10073 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10074 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10075 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10076 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10077 = (function() { 
var G__10079__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10079 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10079__delegate.call(this, a, b, c, d, more);
};
G__10079.cljs$lang$maxFixedArity = 4;
G__10079.cljs$lang$applyTo = (function (arglist__10080){
var a = cljs.core.first(arglist__10080);
var b = cljs.core.first(cljs.core.next(arglist__10080));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10080)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10080))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10080))));
return G__10079__delegate.call(this, a, b, c, d, more);
});
return G__10079;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10073.call(this,a);
case  2 :
return list_STAR___10074.call(this,a,b);
case  3 :
return list_STAR___10075.call(this,a,b,c);
case  4 :
return list_STAR___10076.call(this,a,b,c,d);
default:
return list_STAR___10077.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10077.cljs$lang$applyTo;
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
var apply__10143 = (function (f,args){
var fixed_arity__10081 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10081 + 1)) <= fixed_arity__10081)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10144 = (function (f,x,args){
var arglist__10086 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10087 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10086,fixed_arity__10087) <= fixed_arity__10087)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10086));
} else
{return f.cljs$lang$applyTo(arglist__10086);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10086));
}
});
var apply__10145 = (function (f,x,y,args){
var arglist__10092 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10094 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10092,fixed_arity__10094) <= fixed_arity__10094)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10092));
} else
{return f.cljs$lang$applyTo(arglist__10092);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10092));
}
});
var apply__10146 = (function (f,x,y,z,args){
var arglist__10098 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10099 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10098,fixed_arity__10099) <= fixed_arity__10099)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10098));
} else
{return f.cljs$lang$applyTo(arglist__10098);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10098));
}
});
var apply__10147 = (function() { 
var G__10160__delegate = function (f,a,b,c,d,args){
var arglist__10100 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10101 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10100,fixed_arity__10101) <= fixed_arity__10101)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10100));
} else
{return f.cljs$lang$applyTo(arglist__10100);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10100));
}
};
var G__10160 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10160__delegate.call(this, f, a, b, c, d, args);
};
G__10160.cljs$lang$maxFixedArity = 5;
G__10160.cljs$lang$applyTo = (function (arglist__10161){
var f = cljs.core.first(arglist__10161);
var a = cljs.core.first(cljs.core.next(arglist__10161));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10161)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10161))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10161)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10161)))));
return G__10160__delegate.call(this, f, a, b, c, d, args);
});
return G__10160;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10143.call(this,f,a);
case  3 :
return apply__10144.call(this,f,a,b);
case  4 :
return apply__10145.call(this,f,a,b,c);
case  5 :
return apply__10146.call(this,f,a,b,c,d);
default:
return apply__10147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10147.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10194){
var obj = cljs.core.first(arglist__10194);
var f = cljs.core.first(cljs.core.next(arglist__10194));
var args = cljs.core.rest(cljs.core.next(arglist__10194));
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
var not_EQ___10207 = (function (x){
return false;
});
var not_EQ___10208 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10209 = (function() { 
var G__10216__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10216 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10216__delegate.call(this, x, y, more);
};
G__10216.cljs$lang$maxFixedArity = 2;
G__10216.cljs$lang$applyTo = (function (arglist__10217){
var x = cljs.core.first(arglist__10217);
var y = cljs.core.first(cljs.core.next(arglist__10217));
var more = cljs.core.rest(cljs.core.next(arglist__10217));
return G__10216__delegate.call(this, x, y, more);
});
return G__10216;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10207.call(this,x);
case  2 :
return not_EQ___10208.call(this,x,y);
default:
return not_EQ___10209.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10209.cljs$lang$applyTo;
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
var G__10221 = pred;
var G__10222 = cljs.core.next.call(null,coll);
pred = G__10221;
coll = G__10222;
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
{var or__3548__auto____10228 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10228))
{return or__3548__auto____10228;
} else
{{
var G__10229 = pred;
var G__10230 = cljs.core.next.call(null,coll);
pred = G__10229;
coll = G__10230;
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
var G__10300 = null;
var G__10300__10301 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10300__10302 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10300__10303 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10300__10304 = (function() { 
var G__10306__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10306 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10306__delegate.call(this, x, y, zs);
};
G__10306.cljs$lang$maxFixedArity = 2;
G__10306.cljs$lang$applyTo = (function (arglist__10311){
var x = cljs.core.first(arglist__10311);
var y = cljs.core.first(cljs.core.next(arglist__10311));
var zs = cljs.core.rest(cljs.core.next(arglist__10311));
return G__10306__delegate.call(this, x, y, zs);
});
return G__10306;
})()
;
G__10300 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10300__10301.call(this);
case  1 :
return G__10300__10302.call(this,x);
case  2 :
return G__10300__10303.call(this,x,y);
default:
return G__10300__10304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10300.cljs$lang$maxFixedArity = 2;
G__10300.cljs$lang$applyTo = G__10300__10304.cljs$lang$applyTo;
return G__10300;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10314__delegate = function (args){
return x;
};
var G__10314 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10314__delegate.call(this, args);
};
G__10314.cljs$lang$maxFixedArity = 0;
G__10314.cljs$lang$applyTo = (function (arglist__10316){
var args = cljs.core.seq( arglist__10316 );;
return G__10314__delegate.call(this, args);
});
return G__10314;
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
var comp__10333 = (function (){
return cljs.core.identity;
});
var comp__10334 = (function (f){
return f;
});
var comp__10335 = (function (f,g){
return (function() {
var G__10344 = null;
var G__10344__10345 = (function (){
return f.call(null,g.call(null));
});
var G__10344__10346 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10344__10347 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10344__10348 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10344__10349 = (function() { 
var G__10352__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10352 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10352__delegate.call(this, x, y, z, args);
};
G__10352.cljs$lang$maxFixedArity = 3;
G__10352.cljs$lang$applyTo = (function (arglist__10353){
var x = cljs.core.first(arglist__10353);
var y = cljs.core.first(cljs.core.next(arglist__10353));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10353)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10353)));
return G__10352__delegate.call(this, x, y, z, args);
});
return G__10352;
})()
;
G__10344 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10344__10345.call(this);
case  1 :
return G__10344__10346.call(this,x);
case  2 :
return G__10344__10347.call(this,x,y);
case  3 :
return G__10344__10348.call(this,x,y,z);
default:
return G__10344__10349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10344.cljs$lang$maxFixedArity = 3;
G__10344.cljs$lang$applyTo = G__10344__10349.cljs$lang$applyTo;
return G__10344;
})()
});
var comp__10336 = (function (f,g,h){
return (function() {
var G__10355 = null;
var G__10355__10356 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10355__10358 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10355__10359 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10355__10360 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10355__10361 = (function() { 
var G__10364__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10364 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10364__delegate.call(this, x, y, z, args);
};
G__10364.cljs$lang$maxFixedArity = 3;
G__10364.cljs$lang$applyTo = (function (arglist__10366){
var x = cljs.core.first(arglist__10366);
var y = cljs.core.first(cljs.core.next(arglist__10366));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10366)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10366)));
return G__10364__delegate.call(this, x, y, z, args);
});
return G__10364;
})()
;
G__10355 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10355__10356.call(this);
case  1 :
return G__10355__10358.call(this,x);
case  2 :
return G__10355__10359.call(this,x,y);
case  3 :
return G__10355__10360.call(this,x,y,z);
default:
return G__10355__10361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10355.cljs$lang$maxFixedArity = 3;
G__10355.cljs$lang$applyTo = G__10355__10361.cljs$lang$applyTo;
return G__10355;
})()
});
var comp__10337 = (function() { 
var G__10367__delegate = function (f1,f2,f3,fs){
var fs__10325 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10373__delegate = function (args){
var ret__10326 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10325),args);
var fs__10327 = cljs.core.next.call(null,fs__10325);

while(true){
if(cljs.core.truth_(fs__10327))
{{
var G__10374 = cljs.core.first.call(null,fs__10327).call(null,ret__10326);
var G__10375 = cljs.core.next.call(null,fs__10327);
ret__10326 = G__10374;
fs__10327 = G__10375;
continue;
}
} else
{return ret__10326;
}
break;
}
};
var G__10373 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10373__delegate.call(this, args);
};
G__10373.cljs$lang$maxFixedArity = 0;
G__10373.cljs$lang$applyTo = (function (arglist__10376){
var args = cljs.core.seq( arglist__10376 );;
return G__10373__delegate.call(this, args);
});
return G__10373;
})()
;
};
var G__10367 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10367__delegate.call(this, f1, f2, f3, fs);
};
G__10367.cljs$lang$maxFixedArity = 3;
G__10367.cljs$lang$applyTo = (function (arglist__10377){
var f1 = cljs.core.first(arglist__10377);
var f2 = cljs.core.first(cljs.core.next(arglist__10377));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10377)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10377)));
return G__10367__delegate.call(this, f1, f2, f3, fs);
});
return G__10367;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10333.call(this);
case  1 :
return comp__10334.call(this,f1);
case  2 :
return comp__10335.call(this,f1,f2);
case  3 :
return comp__10336.call(this,f1,f2,f3);
default:
return comp__10337.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10337.cljs$lang$applyTo;
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
var partial__10384 = (function (f,arg1){
return (function() { 
var G__10389__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10389 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10389__delegate.call(this, args);
};
G__10389.cljs$lang$maxFixedArity = 0;
G__10389.cljs$lang$applyTo = (function (arglist__10390){
var args = cljs.core.seq( arglist__10390 );;
return G__10389__delegate.call(this, args);
});
return G__10389;
})()
;
});
var partial__10385 = (function (f,arg1,arg2){
return (function() { 
var G__10391__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10391 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10391__delegate.call(this, args);
};
G__10391.cljs$lang$maxFixedArity = 0;
G__10391.cljs$lang$applyTo = (function (arglist__10392){
var args = cljs.core.seq( arglist__10392 );;
return G__10391__delegate.call(this, args);
});
return G__10391;
})()
;
});
var partial__10386 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10393__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10393 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10393__delegate.call(this, args);
};
G__10393.cljs$lang$maxFixedArity = 0;
G__10393.cljs$lang$applyTo = (function (arglist__10398){
var args = cljs.core.seq( arglist__10398 );;
return G__10393__delegate.call(this, args);
});
return G__10393;
})()
;
});
var partial__10387 = (function() { 
var G__10439__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10440__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10440 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10440__delegate.call(this, args);
};
G__10440.cljs$lang$maxFixedArity = 0;
G__10440.cljs$lang$applyTo = (function (arglist__10441){
var args = cljs.core.seq( arglist__10441 );;
return G__10440__delegate.call(this, args);
});
return G__10440;
})()
;
};
var G__10439 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10439__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10439.cljs$lang$maxFixedArity = 4;
G__10439.cljs$lang$applyTo = (function (arglist__10442){
var f = cljs.core.first(arglist__10442);
var arg1 = cljs.core.first(cljs.core.next(arglist__10442));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10442)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10442))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10442))));
return G__10439__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10439;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10384.call(this,f,arg1);
case  3 :
return partial__10385.call(this,f,arg1,arg2);
case  4 :
return partial__10386.call(this,f,arg1,arg2,arg3);
default:
return partial__10387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10387.cljs$lang$applyTo;
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
var fnil__10471 = (function (f,x){
return (function() {
var G__10475 = null;
var G__10475__10476 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10475__10477 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10475__10478 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10475__10479 = (function() { 
var G__10485__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10485 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10485__delegate.call(this, a, b, c, ds);
};
G__10485.cljs$lang$maxFixedArity = 3;
G__10485.cljs$lang$applyTo = (function (arglist__10486){
var a = cljs.core.first(arglist__10486);
var b = cljs.core.first(cljs.core.next(arglist__10486));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10486)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10486)));
return G__10485__delegate.call(this, a, b, c, ds);
});
return G__10485;
})()
;
G__10475 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10475__10476.call(this,a);
case  2 :
return G__10475__10477.call(this,a,b);
case  3 :
return G__10475__10478.call(this,a,b,c);
default:
return G__10475__10479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10475.cljs$lang$maxFixedArity = 3;
G__10475.cljs$lang$applyTo = G__10475__10479.cljs$lang$applyTo;
return G__10475;
})()
});
var fnil__10472 = (function (f,x,y){
return (function() {
var G__10496 = null;
var G__10496__10497 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10496__10498 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10496__10499 = (function() { 
var G__10502__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10502 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10502__delegate.call(this, a, b, c, ds);
};
G__10502.cljs$lang$maxFixedArity = 3;
G__10502.cljs$lang$applyTo = (function (arglist__10514){
var a = cljs.core.first(arglist__10514);
var b = cljs.core.first(cljs.core.next(arglist__10514));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10514)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10514)));
return G__10502__delegate.call(this, a, b, c, ds);
});
return G__10502;
})()
;
G__10496 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10496__10497.call(this,a,b);
case  3 :
return G__10496__10498.call(this,a,b,c);
default:
return G__10496__10499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10496.cljs$lang$maxFixedArity = 3;
G__10496.cljs$lang$applyTo = G__10496__10499.cljs$lang$applyTo;
return G__10496;
})()
});
var fnil__10473 = (function (f,x,y,z){
return (function() {
var G__10516 = null;
var G__10516__10517 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10516__10518 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10516__10519 = (function() { 
var G__10523__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10523 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10523__delegate.call(this, a, b, c, ds);
};
G__10523.cljs$lang$maxFixedArity = 3;
G__10523.cljs$lang$applyTo = (function (arglist__10524){
var a = cljs.core.first(arglist__10524);
var b = cljs.core.first(cljs.core.next(arglist__10524));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10524)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10524)));
return G__10523__delegate.call(this, a, b, c, ds);
});
return G__10523;
})()
;
G__10516 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10516__10517.call(this,a,b);
case  3 :
return G__10516__10518.call(this,a,b,c);
default:
return G__10516__10519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10516.cljs$lang$maxFixedArity = 3;
G__10516.cljs$lang$applyTo = G__10516__10519.cljs$lang$applyTo;
return G__10516;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10471.call(this,f,x);
case  3 :
return fnil__10472.call(this,f,x,y);
case  4 :
return fnil__10473.call(this,f,x,y,z);
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
var mapi__10542 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10540 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10540))
{var s__10541 = temp__3698__auto____10540;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10541)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10541)));
} else
{return null;
}
})));
});

return mapi__10542.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10551 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10551))
{var s__10552 = temp__3698__auto____10551;

var x__10553 = f.call(null,cljs.core.first.call(null,s__10552));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10553)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10552));
} else
{return cljs.core.cons.call(null,x__10553,keep.call(null,f,cljs.core.rest.call(null,s__10552)));
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
var keepi__10631 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10626 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10626))
{var s__10628 = temp__3698__auto____10626;

var x__10629 = f.call(null,idx,cljs.core.first.call(null,s__10628));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10629)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10628));
} else
{return cljs.core.cons.call(null,x__10629,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10628)));
}
} else
{return null;
}
})));
});

return keepi__10631.call(null,0,coll);
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
var every_pred__10806 = (function (p){
return (function() {
var ep1 = null;
var ep1__10811 = (function (){
return true;
});
var ep1__10812 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10813 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10653 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10653))
{return p.call(null,y);
} else
{return and__3546__auto____10653;
}
})());
});
var ep1__10814 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10654 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10654))
{var and__3546__auto____10716 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10716))
{return p.call(null,z);
} else
{return and__3546__auto____10716;
}
} else
{return and__3546__auto____10654;
}
})());
});
var ep1__10815 = (function() { 
var G__10819__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10719 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10719))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10719;
}
})());
};
var G__10819 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10819__delegate.call(this, x, y, z, args);
};
G__10819.cljs$lang$maxFixedArity = 3;
G__10819.cljs$lang$applyTo = (function (arglist__10821){
var x = cljs.core.first(arglist__10821);
var y = cljs.core.first(cljs.core.next(arglist__10821));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10821)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10821)));
return G__10819__delegate.call(this, x, y, z, args);
});
return G__10819;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10811.call(this);
case  1 :
return ep1__10812.call(this,x);
case  2 :
return ep1__10813.call(this,x,y);
case  3 :
return ep1__10814.call(this,x,y,z);
default:
return ep1__10815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10815.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10807 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10822 = (function (){
return true;
});
var ep2__10824 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10722 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10722))
{return p2.call(null,x);
} else
{return and__3546__auto____10722;
}
})());
});
var ep2__10826 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10737 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10737))
{var and__3546__auto____10738 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10738))
{var and__3546__auto____10739 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10739))
{return p2.call(null,y);
} else
{return and__3546__auto____10739;
}
} else
{return and__3546__auto____10738;
}
} else
{return and__3546__auto____10737;
}
})());
});
var ep2__10829 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10740 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10740))
{var and__3546__auto____10741 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10741))
{var and__3546__auto____10742 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10742))
{var and__3546__auto____10743 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10743))
{var and__3546__auto____10744 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10744))
{return p2.call(null,z);
} else
{return and__3546__auto____10744;
}
} else
{return and__3546__auto____10743;
}
} else
{return and__3546__auto____10742;
}
} else
{return and__3546__auto____10741;
}
} else
{return and__3546__auto____10740;
}
})());
});
var ep2__10830 = (function() { 
var G__10955__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10745 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10745))
{return cljs.core.every_QMARK_.call(null,(function (p1__10567_SHARP_){
var and__3546__auto____10746 = p1.call(null,p1__10567_SHARP_);

if(cljs.core.truth_(and__3546__auto____10746))
{return p2.call(null,p1__10567_SHARP_);
} else
{return and__3546__auto____10746;
}
}),args);
} else
{return and__3546__auto____10745;
}
})());
};
var G__10955 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10955__delegate.call(this, x, y, z, args);
};
G__10955.cljs$lang$maxFixedArity = 3;
G__10955.cljs$lang$applyTo = (function (arglist__10958){
var x = cljs.core.first(arglist__10958);
var y = cljs.core.first(cljs.core.next(arglist__10958));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10958)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10958)));
return G__10955__delegate.call(this, x, y, z, args);
});
return G__10955;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10822.call(this);
case  1 :
return ep2__10824.call(this,x);
case  2 :
return ep2__10826.call(this,x,y);
case  3 :
return ep2__10829.call(this,x,y,z);
default:
return ep2__10830.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10830.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10808 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10961 = (function (){
return true;
});
var ep3__10962 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10747 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10747))
{var and__3546__auto____10748 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10748))
{return p3.call(null,x);
} else
{return and__3546__auto____10748;
}
} else
{return and__3546__auto____10747;
}
})());
});
var ep3__10963 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10749 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10749))
{var and__3546__auto____10750 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10750))
{var and__3546__auto____10751 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10751))
{var and__3546__auto____10752 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10752))
{var and__3546__auto____10753 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10753))
{return p3.call(null,y);
} else
{return and__3546__auto____10753;
}
} else
{return and__3546__auto____10752;
}
} else
{return and__3546__auto____10751;
}
} else
{return and__3546__auto____10750;
}
} else
{return and__3546__auto____10749;
}
})());
});
var ep3__10964 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10754 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10754))
{var and__3546__auto____10755 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10755))
{var and__3546__auto____10756 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10756))
{var and__3546__auto____10757 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10757))
{var and__3546__auto____10758 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10758))
{var and__3546__auto____10759 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10759))
{var and__3546__auto____10760 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10760))
{var and__3546__auto____10761 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10761))
{return p3.call(null,z);
} else
{return and__3546__auto____10761;
}
} else
{return and__3546__auto____10760;
}
} else
{return and__3546__auto____10759;
}
} else
{return and__3546__auto____10758;
}
} else
{return and__3546__auto____10757;
}
} else
{return and__3546__auto____10756;
}
} else
{return and__3546__auto____10755;
}
} else
{return and__3546__auto____10754;
}
})());
});
var ep3__10965 = (function() { 
var G__10974__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10762 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10762))
{return cljs.core.every_QMARK_.call(null,(function (p1__10569_SHARP_){
var and__3546__auto____10796 = p1.call(null,p1__10569_SHARP_);

if(cljs.core.truth_(and__3546__auto____10796))
{var and__3546__auto____10798 = p2.call(null,p1__10569_SHARP_);

if(cljs.core.truth_(and__3546__auto____10798))
{return p3.call(null,p1__10569_SHARP_);
} else
{return and__3546__auto____10798;
}
} else
{return and__3546__auto____10796;
}
}),args);
} else
{return and__3546__auto____10762;
}
})());
};
var G__10974 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10974__delegate.call(this, x, y, z, args);
};
G__10974.cljs$lang$maxFixedArity = 3;
G__10974.cljs$lang$applyTo = (function (arglist__10976){
var x = cljs.core.first(arglist__10976);
var y = cljs.core.first(cljs.core.next(arglist__10976));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10976)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10976)));
return G__10974__delegate.call(this, x, y, z, args);
});
return G__10974;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10961.call(this);
case  1 :
return ep3__10962.call(this,x);
case  2 :
return ep3__10963.call(this,x,y);
case  3 :
return ep3__10964.call(this,x,y,z);
default:
return ep3__10965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10965.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10809 = (function() { 
var G__10979__delegate = function (p1,p2,p3,ps){
var ps__10799 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10980 = (function (){
return true;
});
var epn__10981 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10570_SHARP_){
return p1__10570_SHARP_.call(null,x);
}),ps__10799);
});
var epn__10982 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10571_SHARP_){
var and__3546__auto____10800 = p1__10571_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10800))
{return p1__10571_SHARP_.call(null,y);
} else
{return and__3546__auto____10800;
}
}),ps__10799);
});
var epn__10983 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10572_SHARP_){
var and__3546__auto____10802 = p1__10572_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10802))
{var and__3546__auto____10804 = p1__10572_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10804))
{return p1__10572_SHARP_.call(null,z);
} else
{return and__3546__auto____10804;
}
} else
{return and__3546__auto____10802;
}
}),ps__10799);
});
var epn__10984 = (function() { 
var G__10990__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10805 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10805))
{return cljs.core.every_QMARK_.call(null,(function (p1__10573_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10573_SHARP_,args);
}),ps__10799);
} else
{return and__3546__auto____10805;
}
})());
};
var G__10990 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10990__delegate.call(this, x, y, z, args);
};
G__10990.cljs$lang$maxFixedArity = 3;
G__10990.cljs$lang$applyTo = (function (arglist__10991){
var x = cljs.core.first(arglist__10991);
var y = cljs.core.first(cljs.core.next(arglist__10991));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10991)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10991)));
return G__10990__delegate.call(this, x, y, z, args);
});
return G__10990;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10980.call(this);
case  1 :
return epn__10981.call(this,x);
case  2 :
return epn__10982.call(this,x,y);
case  3 :
return epn__10983.call(this,x,y,z);
default:
return epn__10984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10984.cljs$lang$applyTo;
return epn;
})()
};
var G__10979 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10979__delegate.call(this, p1, p2, p3, ps);
};
G__10979.cljs$lang$maxFixedArity = 3;
G__10979.cljs$lang$applyTo = (function (arglist__10994){
var p1 = cljs.core.first(arglist__10994);
var p2 = cljs.core.first(cljs.core.next(arglist__10994));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10994)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10994)));
return G__10979__delegate.call(this, p1, p2, p3, ps);
});
return G__10979;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10806.call(this,p1);
case  2 :
return every_pred__10807.call(this,p1,p2);
case  3 :
return every_pred__10808.call(this,p1,p2,p3);
default:
return every_pred__10809.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10809.cljs$lang$applyTo;
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
var some_fn__11141 = (function (p){
return (function() {
var sp1 = null;
var sp1__11147 = (function (){
return null;
});
var sp1__11148 = (function (x){
return p.call(null,x);
});
var sp1__11149 = (function (x,y){
var or__3548__auto____10999 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10999))
{return or__3548__auto____10999;
} else
{return p.call(null,y);
}
});
var sp1__11150 = (function (x,y,z){
var or__3548__auto____11000 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11000))
{return or__3548__auto____11000;
} else
{var or__3548__auto____11001 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11001))
{return or__3548__auto____11001;
} else
{return p.call(null,z);
}
}
});
var sp1__11151 = (function() { 
var G__11157__delegate = function (x,y,z,args){
var or__3548__auto____11002 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11002))
{return or__3548__auto____11002;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11157 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11157__delegate.call(this, x, y, z, args);
};
G__11157.cljs$lang$maxFixedArity = 3;
G__11157.cljs$lang$applyTo = (function (arglist__11207){
var x = cljs.core.first(arglist__11207);
var y = cljs.core.first(cljs.core.next(arglist__11207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11207)));
return G__11157__delegate.call(this, x, y, z, args);
});
return G__11157;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11147.call(this);
case  1 :
return sp1__11148.call(this,x);
case  2 :
return sp1__11149.call(this,x,y);
case  3 :
return sp1__11150.call(this,x,y,z);
default:
return sp1__11151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11151.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11142 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11211 = (function (){
return null;
});
var sp2__11212 = (function (x){
var or__3548__auto____11005 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11005))
{return or__3548__auto____11005;
} else
{return p2.call(null,x);
}
});
var sp2__11213 = (function (x,y){
var or__3548__auto____11009 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11009))
{return or__3548__auto____11009;
} else
{var or__3548__auto____11011 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11011))
{return or__3548__auto____11011;
} else
{var or__3548__auto____11012 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11012))
{return or__3548__auto____11012;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11214 = (function (x,y,z){
var or__3548__auto____11014 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11014))
{return or__3548__auto____11014;
} else
{var or__3548__auto____11016 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11016))
{return or__3548__auto____11016;
} else
{var or__3548__auto____11018 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11018))
{return or__3548__auto____11018;
} else
{var or__3548__auto____11021 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11021))
{return or__3548__auto____11021;
} else
{var or__3548__auto____11022 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11022))
{return or__3548__auto____11022;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11215 = (function() { 
var G__11230__delegate = function (x,y,z,args){
var or__3548__auto____11026 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11026))
{return or__3548__auto____11026;
} else
{return cljs.core.some.call(null,(function (p1__10640_SHARP_){
var or__3548__auto____11028 = p1.call(null,p1__10640_SHARP_);

if(cljs.core.truth_(or__3548__auto____11028))
{return or__3548__auto____11028;
} else
{return p2.call(null,p1__10640_SHARP_);
}
}),args);
}
};
var G__11230 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11230__delegate.call(this, x, y, z, args);
};
G__11230.cljs$lang$maxFixedArity = 3;
G__11230.cljs$lang$applyTo = (function (arglist__11236){
var x = cljs.core.first(arglist__11236);
var y = cljs.core.first(cljs.core.next(arglist__11236));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11236)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11236)));
return G__11230__delegate.call(this, x, y, z, args);
});
return G__11230;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11211.call(this);
case  1 :
return sp2__11212.call(this,x);
case  2 :
return sp2__11213.call(this,x,y);
case  3 :
return sp2__11214.call(this,x,y,z);
default:
return sp2__11215.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11215.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11143 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11240 = (function (){
return null;
});
var sp3__11241 = (function (x){
var or__3548__auto____11064 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11064))
{return or__3548__auto____11064;
} else
{var or__3548__auto____11065 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11065))
{return or__3548__auto____11065;
} else
{return p3.call(null,x);
}
}
});
var sp3__11242 = (function (x,y){
var or__3548__auto____11067 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11067))
{return or__3548__auto____11067;
} else
{var or__3548__auto____11068 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11068))
{return or__3548__auto____11068;
} else
{var or__3548__auto____11070 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11070))
{return or__3548__auto____11070;
} else
{var or__3548__auto____11073 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11073))
{return or__3548__auto____11073;
} else
{var or__3548__auto____11075 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11075))
{return or__3548__auto____11075;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11243 = (function (x,y,z){
var or__3548__auto____11077 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11077))
{return or__3548__auto____11077;
} else
{var or__3548__auto____11078 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11078))
{return or__3548__auto____11078;
} else
{var or__3548__auto____11079 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11079))
{return or__3548__auto____11079;
} else
{var or__3548__auto____11080 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11080))
{return or__3548__auto____11080;
} else
{var or__3548__auto____11086 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11086))
{return or__3548__auto____11086;
} else
{var or__3548__auto____11087 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11087))
{return or__3548__auto____11087;
} else
{var or__3548__auto____11094 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11094))
{return or__3548__auto____11094;
} else
{var or__3548__auto____11095 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11095))
{return or__3548__auto____11095;
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
var sp3__11244 = (function() { 
var G__11257__delegate = function (x,y,z,args){
var or__3548__auto____11097 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11097))
{return or__3548__auto____11097;
} else
{return cljs.core.some.call(null,(function (p1__10641_SHARP_){
var or__3548__auto____11098 = p1.call(null,p1__10641_SHARP_);

if(cljs.core.truth_(or__3548__auto____11098))
{return or__3548__auto____11098;
} else
{var or__3548__auto____11102 = p2.call(null,p1__10641_SHARP_);

if(cljs.core.truth_(or__3548__auto____11102))
{return or__3548__auto____11102;
} else
{return p3.call(null,p1__10641_SHARP_);
}
}
}),args);
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
G__11257.cljs$lang$applyTo = (function (arglist__11260){
var x = cljs.core.first(arglist__11260);
var y = cljs.core.first(cljs.core.next(arglist__11260));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11260)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11260)));
return G__11257__delegate.call(this, x, y, z, args);
});
return G__11257;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11240.call(this);
case  1 :
return sp3__11241.call(this,x);
case  2 :
return sp3__11242.call(this,x,y);
case  3 :
return sp3__11243.call(this,x,y,z);
default:
return sp3__11244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11244.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11144 = (function() { 
var G__11262__delegate = function (p1,p2,p3,ps){
var ps__11104 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11263 = (function (){
return null;
});
var spn__11264 = (function (x){
return cljs.core.some.call(null,(function (p1__10643_SHARP_){
return p1__10643_SHARP_.call(null,x);
}),ps__11104);
});
var spn__11265 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10644_SHARP_){
var or__3548__auto____11117 = p1__10644_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11117))
{return or__3548__auto____11117;
} else
{return p1__10644_SHARP_.call(null,y);
}
}),ps__11104);
});
var spn__11266 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10645_SHARP_){
var or__3548__auto____11125 = p1__10645_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11125))
{return or__3548__auto____11125;
} else
{var or__3548__auto____11126 = p1__10645_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11126))
{return or__3548__auto____11126;
} else
{return p1__10645_SHARP_.call(null,z);
}
}
}),ps__11104);
});
var spn__11267 = (function() { 
var G__11270__delegate = function (x,y,z,args){
var or__3548__auto____11128 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11128))
{return or__3548__auto____11128;
} else
{return cljs.core.some.call(null,(function (p1__10646_SHARP_){
return cljs.core.some.call(null,p1__10646_SHARP_,args);
}),ps__11104);
}
};
var G__11270 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11270__delegate.call(this, x, y, z, args);
};
G__11270.cljs$lang$maxFixedArity = 3;
G__11270.cljs$lang$applyTo = (function (arglist__11272){
var x = cljs.core.first(arglist__11272);
var y = cljs.core.first(cljs.core.next(arglist__11272));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11272)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11272)));
return G__11270__delegate.call(this, x, y, z, args);
});
return G__11270;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11263.call(this);
case  1 :
return spn__11264.call(this,x);
case  2 :
return spn__11265.call(this,x,y);
case  3 :
return spn__11266.call(this,x,y,z);
default:
return spn__11267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11267.cljs$lang$applyTo;
return spn;
})()
};
var G__11262 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11262__delegate.call(this, p1, p2, p3, ps);
};
G__11262.cljs$lang$maxFixedArity = 3;
G__11262.cljs$lang$applyTo = (function (arglist__11277){
var p1 = cljs.core.first(arglist__11277);
var p2 = cljs.core.first(cljs.core.next(arglist__11277));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11277)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11277)));
return G__11262__delegate.call(this, p1, p2, p3, ps);
});
return G__11262;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11141.call(this,p1);
case  2 :
return some_fn__11142.call(this,p1,p2);
case  3 :
return some_fn__11143.call(this,p1,p2,p3);
default:
return some_fn__11144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11144.cljs$lang$applyTo;
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
var map__11323 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11279))
{var s__11280 = temp__3698__auto____11279;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11280)),map.call(null,f,cljs.core.rest.call(null,s__11280)));
} else
{return null;
}
})));
});
var map__11326 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11286 = cljs.core.seq.call(null,c1);
var s2__11293 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11294 = s1__11286;

if(cljs.core.truth_(and__3546__auto____11294))
{return s2__11293;
} else
{return and__3546__auto____11294;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11286),cljs.core.first.call(null,s2__11293)),map.call(null,f,cljs.core.rest.call(null,s1__11286),cljs.core.rest.call(null,s2__11293)));
} else
{return null;
}
})));
});
var map__11327 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11300 = cljs.core.seq.call(null,c1);
var s2__11301 = cljs.core.seq.call(null,c2);
var s3__11304 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11306 = s1__11300;

if(cljs.core.truth_(and__3546__auto____11306))
{var and__3546__auto____11307 = s2__11301;

if(cljs.core.truth_(and__3546__auto____11307))
{return s3__11304;
} else
{return and__3546__auto____11307;
}
} else
{return and__3546__auto____11306;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11300),cljs.core.first.call(null,s2__11301),cljs.core.first.call(null,s3__11304)),map.call(null,f,cljs.core.rest.call(null,s1__11300),cljs.core.rest.call(null,s2__11301),cljs.core.rest.call(null,s3__11304)));
} else
{return null;
}
})));
});
var map__11328 = (function() { 
var G__11349__delegate = function (f,c1,c2,c3,colls){
var step__11320 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11318 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11318)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11318),step.call(null,map.call(null,cljs.core.rest,ss__11318)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10998_SHARP_){
return cljs.core.apply.call(null,f,p1__10998_SHARP_);
}),step__11320.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11349 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11349__delegate.call(this, f, c1, c2, c3, colls);
};
G__11349.cljs$lang$maxFixedArity = 4;
G__11349.cljs$lang$applyTo = (function (arglist__11350){
var f = cljs.core.first(arglist__11350);
var c1 = cljs.core.first(cljs.core.next(arglist__11350));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11350)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11350))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11350))));
return G__11349__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11349;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11323.call(this,f,c1);
case  3 :
return map__11326.call(this,f,c1,c2);
case  4 :
return map__11327.call(this,f,c1,c2,c3);
default:
return map__11328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11328.cljs$lang$applyTo;
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
{var temp__3698__auto____11460 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11460))
{var s__11461 = temp__3698__auto____11460;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11461),take.call(null,(n - 1),cljs.core.rest.call(null,s__11461)));
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
var step__11478 = (function (n,coll){
while(true){
var s__11472 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11474 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11474))
{return s__11472;
} else
{return and__3546__auto____11474;
}
})()))
{{
var G__11484 = (n - 1);
var G__11485 = cljs.core.rest.call(null,s__11472);
n = G__11484;
coll = G__11485;
continue;
}
} else
{return s__11472;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11478.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11498 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11499 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11498.call(this,n);
case  2 :
return drop_last__11499.call(this,n,s);
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
var s__11511 = cljs.core.seq.call(null,coll);
var lead__11513 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11513))
{{
var G__11522 = cljs.core.next.call(null,s__11511);
var G__11525 = cljs.core.next.call(null,lead__11513);
s__11511 = G__11522;
lead__11513 = G__11525;
continue;
}
} else
{return s__11511;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11536 = (function (pred,coll){
while(true){
var s__11531 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11533 = s__11531;

if(cljs.core.truth_(and__3546__auto____11533))
{return pred.call(null,cljs.core.first.call(null,s__11531));
} else
{return and__3546__auto____11533;
}
})()))
{{
var G__11542 = pred;
var G__11543 = cljs.core.rest.call(null,s__11531);
pred = G__11542;
coll = G__11543;
continue;
}
} else
{return s__11531;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11536.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11549 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11549))
{var s__11551 = temp__3698__auto____11549;

return cljs.core.concat.call(null,s__11551,cycle.call(null,s__11551));
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
var repeat__11559 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11560 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11559.call(this,n);
case  2 :
return repeat__11560.call(this,n,x);
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
var repeatedly__11565 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11566 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11565.call(this,n);
case  2 :
return repeatedly__11566.call(this,n,f);
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
var interleave__11595 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11570 = cljs.core.seq.call(null,c1);
var s2__11571 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11575 = s1__11570;

if(cljs.core.truth_(and__3546__auto____11575))
{return s2__11571;
} else
{return and__3546__auto____11575;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11570),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11571),interleave.call(null,cljs.core.rest.call(null,s1__11570),cljs.core.rest.call(null,s2__11571))));
} else
{return null;
}
})));
});
var interleave__11596 = (function() { 
var G__11608__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11585 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11585)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11585),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11585)));
} else
{return null;
}
})));
};
var G__11608 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11608__delegate.call(this, c1, c2, colls);
};
G__11608.cljs$lang$maxFixedArity = 2;
G__11608.cljs$lang$applyTo = (function (arglist__11613){
var c1 = cljs.core.first(arglist__11613);
var c2 = cljs.core.first(cljs.core.next(arglist__11613));
var colls = cljs.core.rest(cljs.core.next(arglist__11613));
return G__11608__delegate.call(this, c1, c2, colls);
});
return G__11608;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11595.call(this,c1,c2);
default:
return interleave__11596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11596.cljs$lang$applyTo;
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
var cat__11629 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11626 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11626))
{var coll__11627 = temp__3695__auto____11626;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11627),cat.call(null,cljs.core.rest.call(null,coll__11627),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11629.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11790 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11791 = (function() { 
var G__11794__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11794 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11794__delegate.call(this, f, coll, colls);
};
G__11794.cljs$lang$maxFixedArity = 2;
G__11794.cljs$lang$applyTo = (function (arglist__11795){
var f = cljs.core.first(arglist__11795);
var coll = cljs.core.first(cljs.core.next(arglist__11795));
var colls = cljs.core.rest(cljs.core.next(arglist__11795));
return G__11794__delegate.call(this, f, coll, colls);
});
return G__11794;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11790.call(this,f,coll);
default:
return mapcat__11791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11791.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11797 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11797))
{var s__11799 = temp__3698__auto____11797;

var f__11800 = cljs.core.first.call(null,s__11799);
var r__11801 = cljs.core.rest.call(null,s__11799);

if(cljs.core.truth_(pred.call(null,f__11800)))
{return cljs.core.cons.call(null,f__11800,filter.call(null,pred,r__11801));
} else
{return filter.call(null,pred,r__11801);
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
var walk__11815 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11815.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11811_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11811_SHARP_));
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
var partition__11870 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11871 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11850 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11850))
{var s__11852 = temp__3698__auto____11850;

var p__11855 = cljs.core.take.call(null,n,s__11852);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11855))))
{return cljs.core.cons.call(null,p__11855,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11852)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11872 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11861 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11861))
{var s__11863 = temp__3698__auto____11861;

var p__11865 = cljs.core.take.call(null,n,s__11863);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11865))))
{return cljs.core.cons.call(null,p__11865,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11863)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11865,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11870.call(this,n,step);
case  3 :
return partition__11871.call(this,n,step,pad);
case  4 :
return partition__11872.call(this,n,step,pad,coll);
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
var get_in__11917 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11918 = (function (m,ks,not_found){
var sentinel__11913 = cljs.core.lookup_sentinel;
var m__11914 = m;
var ks__11915 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11915))
{var m__11916 = cljs.core.get.call(null,m__11914,cljs.core.first.call(null,ks__11915),sentinel__11913);

if(cljs.core.truth_((sentinel__11913 === m__11916)))
{return not_found;
} else
{{
var G__11922 = sentinel__11913;
var G__11923 = m__11916;
var G__11924 = cljs.core.next.call(null,ks__11915);
sentinel__11913 = G__11922;
m__11914 = G__11923;
ks__11915 = G__11924;
continue;
}
}
} else
{return m__11914;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11917.call(this,m,ks);
case  3 :
return get_in__11918.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11926,v){
var vec__11927__11928 = p__11926;
var k__11929 = cljs.core.nth.call(null,vec__11927__11928,0,null);
var ks__11930 = cljs.core.nthnext.call(null,vec__11927__11928,1);

if(cljs.core.truth_(ks__11930))
{return cljs.core.assoc.call(null,m,k__11929,assoc_in.call(null,cljs.core.get.call(null,m,k__11929),ks__11930,v));
} else
{return cljs.core.assoc.call(null,m,k__11929,v);
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
var update_in__delegate = function (m,p__11938,f,args){
var vec__11940__11941 = p__11938;
var k__11942 = cljs.core.nth.call(null,vec__11940__11941,0,null);
var ks__11943 = cljs.core.nthnext.call(null,vec__11940__11941,1);

if(cljs.core.truth_(ks__11943))
{return cljs.core.assoc.call(null,m,k__11942,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11942),ks__11943,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11942,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11942),args));
}
};
var update_in = function (m,p__11938,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11938, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11944){
var m = cljs.core.first(arglist__11944);
var p__11938 = cljs.core.first(cljs.core.next(arglist__11944));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11944)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11944)));
return update_in__delegate.call(this, m, p__11938, f, args);
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
var this__11947 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12018 = null;
var G__12018__12019 = (function (coll,k){
var this__11950 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12018__12020 = (function (coll,k,not_found){
var this__11951 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12018 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12018__12019.call(this,coll,k);
case  3 :
return G__12018__12020.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12018;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11955 = this;
var new_array__11966 = cljs.core.aclone.call(null,this__11955.array);

(new_array__11966[k] = v);
return (new cljs.core.Vector(this__11955.meta,new_array__11966));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12029 = null;
var G__12029__12030 = (function (coll,k){
var this__11976 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12029__12031 = (function (coll,k,not_found){
var this__11979 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12029 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12029__12030.call(this,coll,k);
case  3 :
return G__12029__12031.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12029;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11981 = this;
var new_array__11982 = cljs.core.aclone.call(null,this__11981.array);

new_array__11982.push(o);
return (new cljs.core.Vector(this__11981.meta,new_array__11982));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12037 = null;
var G__12037__12038 = (function (v,f){
var this__11984 = this;
return cljs.core.ci_reduce.call(null,this__11984.array,f);
});
var G__12037__12039 = (function (v,f,start){
var this__11986 = this;
return cljs.core.ci_reduce.call(null,this__11986.array,f,start);
});
G__12037 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12037__12038.call(this,v,f);
case  3 :
return G__12037__12039.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12037;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11989 = this;
if(cljs.core.truth_((this__11989.array.length > 0)))
{var vector_seq__11993 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11989.array.length)))
{return cljs.core.cons.call(null,(this__11989.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11993.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11994 = this;
return this__11994.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11995 = this;
var count__11996 = this__11995.array.length;

if(cljs.core.truth_((count__11996 > 0)))
{return (this__11995.array[(count__11996 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11997 = this;
if(cljs.core.truth_((this__11997.array.length > 0)))
{var new_array__11998 = cljs.core.aclone.call(null,this__11997.array);

new_array__11998.pop();
return (new cljs.core.Vector(this__11997.meta,new_array__11998));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11999 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12000 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12001 = this;
return (new cljs.core.Vector(meta,this__12001.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12005 = this;
return this__12005.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12154 = null;
var G__12154__12158 = (function (coll,n){
var this__12006 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12007 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12007))
{return (n < this__12006.array.length);
} else
{return and__3546__auto____12007;
}
})()))
{return (this__12006.array[n]);
} else
{return null;
}
});
var G__12154__12159 = (function (coll,n,not_found){
var this__12008 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12009 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12009))
{return (n < this__12008.array.length);
} else
{return and__3546__auto____12009;
}
})()))
{return (this__12008.array[n]);
} else
{return not_found;
}
});
G__12154 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12154__12158.call(this,coll,n);
case  3 :
return G__12154__12159.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12154;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12011 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12011.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12199){
var args = cljs.core.seq( arglist__12199 );;
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
var this__12289 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12361 = null;
var G__12361__12362 = (function (coll,k){
var this__12291 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12361__12363 = (function (coll,k,not_found){
var this__12294 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12361 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12361__12362.call(this,coll,k);
case  3 :
return G__12361__12363.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12361;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12297 = this;
var v_pos__12312 = (this__12297.start + key);

return (new cljs.core.Subvec(this__12297.meta,cljs.core._assoc.call(null,this__12297.v,v_pos__12312,val),this__12297.start,((this__12297.end > (v_pos__12312 + 1)) ? this__12297.end : (v_pos__12312 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12406 = null;
var G__12406__12408 = (function (coll,k){
var this__12321 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12406__12409 = (function (coll,k,not_found){
var this__12322 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12406 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12406__12408.call(this,coll,k);
case  3 :
return G__12406__12409.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12406;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12323 = this;
return (new cljs.core.Subvec(this__12323.meta,cljs.core._assoc_n.call(null,this__12323.v,this__12323.end,o),this__12323.start,(this__12323.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12439 = null;
var G__12439__12440 = (function (coll,f){
var this__12328 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12439__12441 = (function (coll,f,start){
var this__12329 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12439 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12439__12440.call(this,coll,f);
case  3 :
return G__12439__12441.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12439;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12337 = this;
var subvec_seq__12345 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12337.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12337.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12345.call(null,this__12337.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12346 = this;
return (this__12346.end - this__12346.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12347 = this;
return cljs.core._nth.call(null,this__12347.v,(this__12347.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12348 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12348.start,this__12348.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12348.meta,this__12348.v,this__12348.start,(this__12348.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12350 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12351 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12356 = this;
return (new cljs.core.Subvec(meta,this__12356.v,this__12356.start,this__12356.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12357 = this;
return this__12357.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12456 = null;
var G__12456__12457 = (function (coll,n){
var this__12358 = this;
return cljs.core._nth.call(null,this__12358.v,(this__12358.start + n));
});
var G__12456__12458 = (function (coll,n,not_found){
var this__12359 = this;
return cljs.core._nth.call(null,this__12359.v,(this__12359.start + n),not_found);
});
G__12456 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12456__12457.call(this,coll,n);
case  3 :
return G__12456__12458.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12456;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12360 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12360.meta);
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
var subvec__12481 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12483 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12481.call(this,v,start);
case  3 :
return subvec__12483.call(this,v,start,end);
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
var this__12500 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12501 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12502 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12503 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12503.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12504 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12505 = this;
return cljs.core._first.call(null,this__12505.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12507 = this;
var temp__3695__auto____12510 = cljs.core.next.call(null,this__12507.front);

if(cljs.core.truth_(temp__3695__auto____12510))
{var f1__12513 = temp__3695__auto____12510;

return (new cljs.core.PersistentQueueSeq(this__12507.meta,f1__12513,this__12507.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12507.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12507.meta,this__12507.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12520 = this;
return this__12520.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12532 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12532.front,this__12532.rear));
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
var this__12538 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12539 = this;
if(cljs.core.truth_(this__12539.front))
{return (new cljs.core.PersistentQueue(this__12539.meta,(this__12539.count + 1),this__12539.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12540 = this__12539.rear;

if(cljs.core.truth_(or__3548__auto____12540))
{return or__3548__auto____12540;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12539.meta,(this__12539.count + 1),cljs.core.conj.call(null,this__12539.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12542 = this;
var rear__12543 = cljs.core.seq.call(null,this__12542.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12544 = this__12542.front;

if(cljs.core.truth_(or__3548__auto____12544))
{return or__3548__auto____12544;
} else
{return rear__12543;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12542.front,cljs.core.seq.call(null,rear__12543)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12545 = this;
return this__12545.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12546 = this;
return cljs.core._first.call(null,this__12546.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12547 = this;
if(cljs.core.truth_(this__12547.front))
{var temp__3695__auto____12548 = cljs.core.next.call(null,this__12547.front);

if(cljs.core.truth_(temp__3695__auto____12548))
{var f1__12549 = temp__3695__auto____12548;

return (new cljs.core.PersistentQueue(this__12547.meta,(this__12547.count - 1),f1__12549,this__12547.rear));
} else
{return (new cljs.core.PersistentQueue(this__12547.meta,(this__12547.count - 1),cljs.core.seq.call(null,this__12547.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12550 = this;
return cljs.core.first.call(null,this__12550.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12552 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12554 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12555 = this;
return (new cljs.core.PersistentQueue(meta,this__12555.count,this__12555.front,this__12555.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12557 = this;
return this__12557.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12558 = this;
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
var this__12678 = this;
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
var len__12688 = array.length;

var i__12689 = 0;

while(true){
if(cljs.core.truth_((i__12689 < len__12688)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12689]))))
{return i__12689;
} else
{{
var G__12694 = (i__12689 + incr);
i__12689 = G__12694;
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
var obj_map_contains_key_QMARK___12700 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12701 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12699 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12699))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12699;
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
return obj_map_contains_key_QMARK___12700.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12701.call(this,k,strobj,true_val,false_val);
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
var this__12714 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12781 = null;
var G__12781__12782 = (function (coll,k){
var this__12715 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12781__12783 = (function (coll,k,not_found){
var this__12716 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12716.strobj,(this__12716.strobj[k]),not_found);
});
G__12781 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12781__12782.call(this,coll,k);
case  3 :
return G__12781__12783.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12781;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12717 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12718 = goog.object.clone.call(null,this__12717.strobj);
var overwrite_QMARK___12719 = new_strobj__12718.hasOwnProperty(k);

(new_strobj__12718[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12719))
{return (new cljs.core.ObjMap(this__12717.meta,this__12717.keys,new_strobj__12718));
} else
{var new_keys__12720 = cljs.core.aclone.call(null,this__12717.keys);

new_keys__12720.push(k);
return (new cljs.core.ObjMap(this__12717.meta,new_keys__12720,new_strobj__12718));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12717.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12755 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12755.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12790 = null;
var G__12790__12791 = (function (coll,k){
var this__12757 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12790__12792 = (function (coll,k,not_found){
var this__12758 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12790 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12790__12791.call(this,coll,k);
case  3 :
return G__12790__12792.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12790;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12759 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12760 = this;
if(cljs.core.truth_((this__12760.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12707_SHARP_){
return cljs.core.vector.call(null,p1__12707_SHARP_,(this__12760.strobj[p1__12707_SHARP_]));
}),this__12760.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12763 = this;
return this__12763.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12764 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12766 = this;
return (new cljs.core.ObjMap(meta,this__12766.keys,this__12766.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12767 = this;
return this__12767.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12769 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12769.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12772 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12773 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12773))
{return this__12772.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12773;
}
})()))
{var new_keys__12775 = cljs.core.aclone.call(null,this__12772.keys);
var new_strobj__12776 = goog.object.clone.call(null,this__12772.strobj);

new_keys__12775.splice(cljs.core.scan_array.call(null,1,k,new_keys__12775),1);
cljs.core.js_delete.call(null,new_strobj__12776,k);
return (new cljs.core.ObjMap(this__12772.meta,new_keys__12775,new_strobj__12776));
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
var this__12848 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12911 = null;
var G__12911__12912 = (function (coll,k){
var this__12849 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12911__12913 = (function (coll,k,not_found){
var this__12850 = this;
var bucket__12851 = (this__12850.hashobj[cljs.core.hash.call(null,k)]);
var i__12852 = (cljs.core.truth_(bucket__12851)?cljs.core.scan_array.call(null,2,k,bucket__12851):null);

if(cljs.core.truth_(i__12852))
{return (bucket__12851[(i__12852 + 1)]);
} else
{return not_found;
}
});
G__12911 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12911__12912.call(this,coll,k);
case  3 :
return G__12911__12913.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12911;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12853 = this;
var h__12854 = cljs.core.hash.call(null,k);
var bucket__12855 = (this__12853.hashobj[h__12854]);

if(cljs.core.truth_(bucket__12855))
{var new_bucket__12856 = cljs.core.aclone.call(null,bucket__12855);
var new_hashobj__12857 = goog.object.clone.call(null,this__12853.hashobj);

(new_hashobj__12857[h__12854] = new_bucket__12856);
var temp__3695__auto____12859 = cljs.core.scan_array.call(null,2,k,new_bucket__12856);

if(cljs.core.truth_(temp__3695__auto____12859))
{var i__12860 = temp__3695__auto____12859;

(new_bucket__12856[(i__12860 + 1)] = v);
return (new cljs.core.HashMap(this__12853.meta,this__12853.count,new_hashobj__12857));
} else
{new_bucket__12856.push(k,v);
return (new cljs.core.HashMap(this__12853.meta,(this__12853.count + 1),new_hashobj__12857));
}
} else
{var new_hashobj__12865 = goog.object.clone.call(null,this__12853.hashobj);

(new_hashobj__12865[h__12854] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12853.meta,(this__12853.count + 1),new_hashobj__12865));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12867 = this;
var bucket__12870 = (this__12867.hashobj[cljs.core.hash.call(null,k)]);
var i__12872 = (cljs.core.truth_(bucket__12870)?cljs.core.scan_array.call(null,2,k,bucket__12870):null);

if(cljs.core.truth_(i__12872))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12971 = null;
var G__12971__12972 = (function (coll,k){
var this__12875 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12971__12974 = (function (coll,k,not_found){
var this__12877 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12971 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12971__12972.call(this,coll,k);
case  3 :
return G__12971__12974.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12971;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12878 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12881 = this;
if(cljs.core.truth_((this__12881.count > 0)))
{var hashes__12886 = cljs.core.js_keys.call(null,this__12881.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12847_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12881.hashobj[p1__12847_SHARP_])));
}),hashes__12886);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12888 = this;
return this__12888.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12889 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12891 = this;
return (new cljs.core.HashMap(meta,this__12891.count,this__12891.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12892 = this;
return this__12892.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12893 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12893.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12895 = this;
var h__12897 = cljs.core.hash.call(null,k);
var bucket__12898 = (this__12895.hashobj[h__12897]);
var i__12900 = (cljs.core.truth_(bucket__12898)?cljs.core.scan_array.call(null,2,k,bucket__12898):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12900)))
{return coll;
} else
{var new_hashobj__12901 = goog.object.clone.call(null,this__12895.hashobj);

if(cljs.core.truth_((3 > bucket__12898.length)))
{cljs.core.js_delete.call(null,new_hashobj__12901,h__12897);
} else
{var new_bucket__12904 = cljs.core.aclone.call(null,bucket__12898);

new_bucket__12904.splice(i__12900,2);
(new_hashobj__12901[h__12897] = new_bucket__12904);
}
return (new cljs.core.HashMap(this__12895.meta,(this__12895.count - 1),new_hashobj__12901));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12981 = ks.length;

var i__12982 = 0;
var out__12984 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12982 < len__12981)))
{{
var G__12987 = (i__12982 + 1);
var G__12988 = cljs.core.assoc.call(null,out__12984,(ks[i__12982]),(vs[i__12982]));
i__12982 = G__12987;
out__12984 = G__12988;
continue;
}
} else
{return out__12984;
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
var in$__12994 = cljs.core.seq.call(null,keyvals);
var out__12995 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12994))
{{
var G__13002 = cljs.core.nnext.call(null,in$__12994);
var G__13004 = cljs.core.assoc.call(null,out__12995,cljs.core.first.call(null,in$__12994),cljs.core.second.call(null,in$__12994));
in$__12994 = G__13002;
out__12995 = G__13004;
continue;
}
} else
{return out__12995;
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
hash_map.cljs$lang$applyTo = (function (arglist__13009){
var keyvals = cljs.core.seq( arglist__13009 );;
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
{return cljs.core.reduce.call(null,(function (p1__13013_SHARP_,p2__13014_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13023 = p1__13013_SHARP_;

if(cljs.core.truth_(or__3548__auto____13023))
{return or__3548__auto____13023;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13014_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13028){
var maps = cljs.core.seq( arglist__13028 );;
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
{var merge_entry__13035 = (function (m,e){
var k__13031 = cljs.core.first.call(null,e);
var v__13032 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13031)))
{return cljs.core.assoc.call(null,m,k__13031,f.call(null,cljs.core.get.call(null,m,k__13031),v__13032));
} else
{return cljs.core.assoc.call(null,m,k__13031,v__13032);
}
});
var merge2__13039 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13035,(function (){var or__3548__auto____13038 = m1;

if(cljs.core.truth_(or__3548__auto____13038))
{return or__3548__auto____13038;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13039,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13105){
var f = cljs.core.first(arglist__13105);
var maps = cljs.core.rest(arglist__13105);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13145 = cljs.core.ObjMap.fromObject([],{});
var keys__13147 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13147))
{var key__13149 = cljs.core.first.call(null,keys__13147);
var entry__13150 = cljs.core.get.call(null,map,key__13149,"﷐'user/not-found");

{
var G__13156 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13150,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13145,key__13149,entry__13150):ret__13145);
var G__13157 = cljs.core.next.call(null,keys__13147);
ret__13145 = G__13156;
keys__13147 = G__13157;
continue;
}
} else
{return ret__13145;
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
var this__13163 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13184 = null;
var G__13184__13185 = (function (coll,v){
var this__13164 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13184__13186 = (function (coll,v,not_found){
var this__13165 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13165.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13184 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13184__13185.call(this,coll,v);
case  3 :
return G__13184__13186.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13184;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13192 = null;
var G__13192__13193 = (function (coll,k){
var this__13166 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13192__13194 = (function (coll,k,not_found){
var this__13167 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13192 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13192__13193.call(this,coll,k);
case  3 :
return G__13192__13194.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13192;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13168 = this;
return (new cljs.core.Set(this__13168.meta,cljs.core.assoc.call(null,this__13168.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13169 = this;
return cljs.core.keys.call(null,this__13169.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13170 = this;
return (new cljs.core.Set(this__13170.meta,cljs.core.dissoc.call(null,this__13170.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13171 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13172 = this;
var and__3546__auto____13174 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13174))
{var and__3546__auto____13175 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13175))
{return cljs.core.every_QMARK_.call(null,(function (p1__13141_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13141_SHARP_);
}),other);
} else
{return and__3546__auto____13175;
}
} else
{return and__3546__auto____13174;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13178 = this;
return (new cljs.core.Set(meta,this__13178.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13180 = this;
return this__13180.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13182 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13182.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13239 = cljs.core.seq.call(null,coll);
var out__13240 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13239))))
{{
var G__13241 = cljs.core.rest.call(null,in$__13239);
var G__13242 = cljs.core.conj.call(null,out__13240,cljs.core.first.call(null,in$__13239));
in$__13239 = G__13241;
out__13240 = G__13242;
continue;
}
} else
{return out__13240;
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
{var n__13244 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13246 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13246))
{var e__13247 = temp__3695__auto____13246;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13247));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13244,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13237_SHARP_){
var temp__3695__auto____13248 = cljs.core.find.call(null,smap,p1__13237_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13248))
{var e__13251 = temp__3695__auto____13248;

return cljs.core.second.call(null,e__13251);
} else
{return p1__13237_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13266 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13256,seen){
while(true){
var vec__13257__13258 = p__13256;
var f__13259 = cljs.core.nth.call(null,vec__13257__13258,0,null);
var xs__13260 = vec__13257__13258;

var temp__3698__auto____13261 = cljs.core.seq.call(null,xs__13260);

if(cljs.core.truth_(temp__3698__auto____13261))
{var s__13262 = temp__3698__auto____13261;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13259)))
{{
var G__13323 = cljs.core.rest.call(null,s__13262);
var G__13324 = seen;
p__13256 = G__13323;
seen = G__13324;
continue;
}
} else
{return cljs.core.cons.call(null,f__13259,step.call(null,cljs.core.rest.call(null,s__13262),cljs.core.conj.call(null,seen,f__13259)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13266.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13329 = cljs.core.Vector.fromArray([]);
var s__13330 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13330)))
{{
var G__13333 = cljs.core.conj.call(null,ret__13329,cljs.core.first.call(null,s__13330));
var G__13334 = cljs.core.next.call(null,s__13330);
ret__13329 = G__13333;
s__13330 = G__13334;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13329);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13338 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13338))
{return or__3548__auto____13338;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13340 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13340 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13340 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13348 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13348))
{return or__3548__auto____13348;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13349 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13349 > -1)))
{return cljs.core.subs.call(null,x,2,i__13349);
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
var map__13388 = cljs.core.ObjMap.fromObject([],{});
var ks__13389 = cljs.core.seq.call(null,keys);
var vs__13391 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13395 = ks__13389;

if(cljs.core.truth_(and__3546__auto____13395))
{return vs__13391;
} else
{return and__3546__auto____13395;
}
})()))
{{
var G__13396 = cljs.core.assoc.call(null,map__13388,cljs.core.first.call(null,ks__13389),cljs.core.first.call(null,vs__13391));
var G__13397 = cljs.core.next.call(null,ks__13389);
var G__13398 = cljs.core.next.call(null,vs__13391);
map__13388 = G__13396;
ks__13389 = G__13397;
vs__13391 = G__13398;
continue;
}
} else
{return map__13388;
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
var max_key__13401 = (function (k,x){
return x;
});
var max_key__13402 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13403 = (function() { 
var G__13405__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13386_SHARP_,p2__13387_SHARP_){
return max_key.call(null,k,p1__13386_SHARP_,p2__13387_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13405 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13405__delegate.call(this, k, x, y, more);
};
G__13405.cljs$lang$maxFixedArity = 3;
G__13405.cljs$lang$applyTo = (function (arglist__13406){
var k = cljs.core.first(arglist__13406);
var x = cljs.core.first(cljs.core.next(arglist__13406));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13406)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13406)));
return G__13405__delegate.call(this, k, x, y, more);
});
return G__13405;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13401.call(this,k,x);
case  3 :
return max_key__13402.call(this,k,x,y);
default:
return max_key__13403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13403.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13412 = (function (k,x){
return x;
});
var min_key__13413 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13414 = (function() { 
var G__13416__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13399_SHARP_,p2__13400_SHARP_){
return min_key.call(null,k,p1__13399_SHARP_,p2__13400_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13416 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13416__delegate.call(this, k, x, y, more);
};
G__13416.cljs$lang$maxFixedArity = 3;
G__13416.cljs$lang$applyTo = (function (arglist__13417){
var k = cljs.core.first(arglist__13417);
var x = cljs.core.first(cljs.core.next(arglist__13417));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13417)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13417)));
return G__13416__delegate.call(this, k, x, y, more);
});
return G__13416;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13412.call(this,k,x);
case  3 :
return min_key__13413.call(this,k,x,y);
default:
return min_key__13414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13414.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13421 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13422 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13419 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13419))
{var s__13420 = temp__3698__auto____13419;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13420),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13420)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13421.call(this,n,step);
case  3 :
return partition_all__13422.call(this,n,step,coll);
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
var temp__3698__auto____13424 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13424))
{var s__13426 = temp__3698__auto____13424;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13426))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13426),take_while.call(null,pred,cljs.core.rest.call(null,s__13426)));
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
var this__13504 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13507 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13556 = null;
var G__13556__13557 = (function (rng,f){
var this__13513 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13556__13558 = (function (rng,f,s){
var this__13514 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13556 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13556__13557.call(this,rng,f);
case  3 :
return G__13556__13558.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13556;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13516 = this;
var comp__13517 = (cljs.core.truth_((this__13516.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13517.call(null,this__13516.start,this__13516.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13521 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13521.end - this__13521.start) / this__13521.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13524 = this;
return this__13524.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13525 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13525.meta,(this__13525.start + this__13525.step),this__13525.end,this__13525.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13527 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13531 = this;
return (new cljs.core.Range(meta,this__13531.start,this__13531.end,this__13531.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13537 = this;
return this__13537.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13567 = null;
var G__13567__13568 = (function (rng,n){
var this__13540 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13540.start + (n * this__13540.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13543 = (this__13540.start > this__13540.end);

if(cljs.core.truth_(and__3546__auto____13543))
{return cljs.core._EQ_.call(null,this__13540.step,0);
} else
{return and__3546__auto____13543;
}
})()))
{return this__13540.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13567__13569 = (function (rng,n,not_found){
var this__13544 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13544.start + (n * this__13544.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13547 = (this__13544.start > this__13544.end);

if(cljs.core.truth_(and__3546__auto____13547))
{return cljs.core._EQ_.call(null,this__13544.step,0);
} else
{return and__3546__auto____13547;
}
})()))
{return this__13544.start;
} else
{return not_found;
}
}
});
G__13567 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13567__13568.call(this,rng,n);
case  3 :
return G__13567__13569.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13567;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13551 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13551.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13575 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13576 = (function (end){
return range.call(null,0,end,1);
});
var range__13577 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13578 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13575.call(this);
case  1 :
return range__13576.call(this,start);
case  2 :
return range__13577.call(this,start,end);
case  3 :
return range__13578.call(this,start,end,step);
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
var temp__3698__auto____13592 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13592))
{var s__13593 = temp__3698__auto____13592;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13593),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13593)));
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
var temp__3698__auto____13606 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13606))
{var s__13609 = temp__3698__auto____13606;

var fst__13611 = cljs.core.first.call(null,s__13609);
var fv__13612 = f.call(null,fst__13611);
var run__13613 = cljs.core.cons.call(null,fst__13611,cljs.core.take_while.call(null,(function (p1__13599_SHARP_){
return cljs.core._EQ_.call(null,fv__13612,f.call(null,p1__13599_SHARP_));
}),cljs.core.next.call(null,s__13609)));

return cljs.core.cons.call(null,run__13613,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13613),s__13609))));
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
var reductions__13650 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13639 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13639))
{var s__13640 = temp__3695__auto____13639;

return reductions.call(null,f,cljs.core.first.call(null,s__13640),cljs.core.rest.call(null,s__13640));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13651 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13644 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13644))
{var s__13645 = temp__3698__auto____13644;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13645)),cljs.core.rest.call(null,s__13645));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13650.call(this,f,init);
case  3 :
return reductions__13651.call(this,f,init,coll);
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
var juxt__13759 = (function (f){
return (function() {
var G__13764 = null;
var G__13764__13766 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13764__13767 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13764__13768 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13764__13769 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13764__13770 = (function() { 
var G__13775__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13775 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13775__delegate.call(this, x, y, z, args);
};
G__13775.cljs$lang$maxFixedArity = 3;
G__13775.cljs$lang$applyTo = (function (arglist__13776){
var x = cljs.core.first(arglist__13776);
var y = cljs.core.first(cljs.core.next(arglist__13776));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13776)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13776)));
return G__13775__delegate.call(this, x, y, z, args);
});
return G__13775;
})()
;
G__13764 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13764__13766.call(this);
case  1 :
return G__13764__13767.call(this,x);
case  2 :
return G__13764__13768.call(this,x,y);
case  3 :
return G__13764__13769.call(this,x,y,z);
default:
return G__13764__13770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13764.cljs$lang$maxFixedArity = 3;
G__13764.cljs$lang$applyTo = G__13764__13770.cljs$lang$applyTo;
return G__13764;
})()
});
var juxt__13760 = (function (f,g){
return (function() {
var G__13781 = null;
var G__13781__13782 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13781__13783 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13781__13784 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13781__13785 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13781__13786 = (function() { 
var G__13792__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13792 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13792__delegate.call(this, x, y, z, args);
};
G__13792.cljs$lang$maxFixedArity = 3;
G__13792.cljs$lang$applyTo = (function (arglist__13793){
var x = cljs.core.first(arglist__13793);
var y = cljs.core.first(cljs.core.next(arglist__13793));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13793)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13793)));
return G__13792__delegate.call(this, x, y, z, args);
});
return G__13792;
})()
;
G__13781 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13781__13782.call(this);
case  1 :
return G__13781__13783.call(this,x);
case  2 :
return G__13781__13784.call(this,x,y);
case  3 :
return G__13781__13785.call(this,x,y,z);
default:
return G__13781__13786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13781.cljs$lang$maxFixedArity = 3;
G__13781.cljs$lang$applyTo = G__13781__13786.cljs$lang$applyTo;
return G__13781;
})()
});
var juxt__13761 = (function (f,g,h){
return (function() {
var G__13794 = null;
var G__13794__13796 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13794__13797 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13794__13798 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13794__13799 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13794__13800 = (function() { 
var G__13803__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13803 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13803__delegate.call(this, x, y, z, args);
};
G__13803.cljs$lang$maxFixedArity = 3;
G__13803.cljs$lang$applyTo = (function (arglist__13804){
var x = cljs.core.first(arglist__13804);
var y = cljs.core.first(cljs.core.next(arglist__13804));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13804)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13804)));
return G__13803__delegate.call(this, x, y, z, args);
});
return G__13803;
})()
;
G__13794 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13794__13796.call(this);
case  1 :
return G__13794__13797.call(this,x);
case  2 :
return G__13794__13798.call(this,x,y);
case  3 :
return G__13794__13799.call(this,x,y,z);
default:
return G__13794__13800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13794.cljs$lang$maxFixedArity = 3;
G__13794.cljs$lang$applyTo = G__13794__13800.cljs$lang$applyTo;
return G__13794;
})()
});
var juxt__13762 = (function() { 
var G__13805__delegate = function (f,g,h,fs){
var fs__13675 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13806 = null;
var G__13806__13807 = (function (){
return cljs.core.reduce.call(null,(function (p1__13625_SHARP_,p2__13626_SHARP_){
return cljs.core.conj.call(null,p1__13625_SHARP_,p2__13626_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13675);
});
var G__13806__13808 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13627_SHARP_,p2__13629_SHARP_){
return cljs.core.conj.call(null,p1__13627_SHARP_,p2__13629_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13675);
});
var G__13806__13809 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13630_SHARP_,p2__13631_SHARP_){
return cljs.core.conj.call(null,p1__13630_SHARP_,p2__13631_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13675);
});
var G__13806__13810 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13632_SHARP_,p2__13633_SHARP_){
return cljs.core.conj.call(null,p1__13632_SHARP_,p2__13633_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13675);
});
var G__13806__13811 = (function() { 
var G__13815__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13635_SHARP_,p2__13636_SHARP_){
return cljs.core.conj.call(null,p1__13635_SHARP_,cljs.core.apply.call(null,p2__13636_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13675);
};
var G__13815 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13815__delegate.call(this, x, y, z, args);
};
G__13815.cljs$lang$maxFixedArity = 3;
G__13815.cljs$lang$applyTo = (function (arglist__13816){
var x = cljs.core.first(arglist__13816);
var y = cljs.core.first(cljs.core.next(arglist__13816));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13816)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13816)));
return G__13815__delegate.call(this, x, y, z, args);
});
return G__13815;
})()
;
G__13806 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13806__13807.call(this);
case  1 :
return G__13806__13808.call(this,x);
case  2 :
return G__13806__13809.call(this,x,y);
case  3 :
return G__13806__13810.call(this,x,y,z);
default:
return G__13806__13811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13806.cljs$lang$maxFixedArity = 3;
G__13806.cljs$lang$applyTo = G__13806__13811.cljs$lang$applyTo;
return G__13806;
})()
};
var G__13805 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13805__delegate.call(this, f, g, h, fs);
};
G__13805.cljs$lang$maxFixedArity = 3;
G__13805.cljs$lang$applyTo = (function (arglist__13819){
var f = cljs.core.first(arglist__13819);
var g = cljs.core.first(cljs.core.next(arglist__13819));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13819)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13819)));
return G__13805__delegate.call(this, f, g, h, fs);
});
return G__13805;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13759.call(this,f);
case  2 :
return juxt__13760.call(this,f,g);
case  3 :
return juxt__13761.call(this,f,g,h);
default:
return juxt__13762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13762.cljs$lang$applyTo;
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
var dorun__13823 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13827 = cljs.core.next.call(null,coll);
coll = G__13827;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13824 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13822 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13822))
{return (n > 0);
} else
{return and__3546__auto____13822;
}
})()))
{{
var G__13834 = (n - 1);
var G__13836 = cljs.core.next.call(null,coll);
n = G__13834;
coll = G__13836;
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
return dorun__13823.call(this,n);
case  2 :
return dorun__13824.call(this,n,coll);
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
var doall__13837 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13838 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13837.call(this,n);
case  2 :
return doall__13838.call(this,n,coll);
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
var matches__13842 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13842),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13842),1)))
{return cljs.core.first.call(null,matches__13842);
} else
{return cljs.core.vec.call(null,matches__13842);
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
var matches__13853 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13853)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13853),1)))
{return cljs.core.first.call(null,matches__13853);
} else
{return cljs.core.vec.call(null,matches__13853);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13858 = cljs.core.re_find.call(null,re,s);
var match_idx__13859 = s.search(re);
var match_str__13860 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13858))?cljs.core.first.call(null,match_data__13858):match_data__13858);
var post_match__13861 = cljs.core.subs.call(null,s,(match_idx__13859 + cljs.core.count.call(null,match_str__13860)));

if(cljs.core.truth_(match_data__13858))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13858,re_seq.call(null,re,post_match__13861));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13867_SHARP_){
return print_one.call(null,p1__13867_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13881 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13881))
{var and__3546__auto____13889 = (function (){var x__445__auto____13884 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13885 = x__445__auto____13884;

if(cljs.core.truth_(and__3546__auto____13885))
{var and__3546__auto____13888 = x__445__auto____13884.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13888))
{return cljs.core.not.call(null,x__445__auto____13884.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13888;
}
} else
{return and__3546__auto____13885;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13884);
}
})();

if(cljs.core.truth_(and__3546__auto____13889))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13889;
}
} else
{return and__3546__auto____13881;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13892 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13893 = x__445__auto____13892;

if(cljs.core.truth_(and__3546__auto____13893))
{var and__3546__auto____13898 = x__445__auto____13892.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13898))
{return cljs.core.not.call(null,x__445__auto____13892.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13898;
}
} else
{return and__3546__auto____13893;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13892);
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
var first_obj__13925 = cljs.core.first.call(null,objs);
var sb__13926 = (new goog.string.StringBuffer());

var G__13927__13931 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13927__13931))
{var obj__13933 = cljs.core.first.call(null,G__13927__13931);
var G__13927__13934 = G__13927__13931;

while(true){
if(cljs.core.truth_((obj__13933 === first_obj__13925)))
{} else
{sb__13926.append(" ");
}
var G__13935__13936 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13933,opts));

if(cljs.core.truth_(G__13935__13936))
{var string__13937 = cljs.core.first.call(null,G__13935__13936);
var G__13935__13938 = G__13935__13936;

while(true){
sb__13926.append(string__13937);
var temp__3698__auto____13943 = cljs.core.next.call(null,G__13935__13938);

if(cljs.core.truth_(temp__3698__auto____13943))
{var G__13935__13945 = temp__3698__auto____13943;

{
var G__13959 = cljs.core.first.call(null,G__13935__13945);
var G__13960 = G__13935__13945;
string__13937 = G__13959;
G__13935__13938 = G__13960;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13952 = cljs.core.next.call(null,G__13927__13934);

if(cljs.core.truth_(temp__3698__auto____13952))
{var G__13927__13953 = temp__3698__auto____13952;

{
var G__13965 = cljs.core.first.call(null,G__13927__13953);
var G__13966 = G__13927__13953;
obj__13933 = G__13965;
G__13927__13934 = G__13966;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13926);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13968 = cljs.core.first.call(null,objs);

var G__13971__13973 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13971__13973))
{var obj__13974 = cljs.core.first.call(null,G__13971__13973);
var G__13971__13975 = G__13971__13973;

while(true){
if(cljs.core.truth_((obj__13974 === first_obj__13968)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13976__13977 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13974,opts));

if(cljs.core.truth_(G__13976__13977))
{var string__13982 = cljs.core.first.call(null,G__13976__13977);
var G__13976__13983 = G__13976__13977;

while(true){
cljs.core.string_print.call(null,string__13982);
var temp__3698__auto____13988 = cljs.core.next.call(null,G__13976__13983);

if(cljs.core.truth_(temp__3698__auto____13988))
{var G__13976__13996 = temp__3698__auto____13988;

{
var G__14006 = cljs.core.first.call(null,G__13976__13996);
var G__14007 = G__13976__13996;
string__13982 = G__14006;
G__13976__13983 = G__14007;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13997 = cljs.core.next.call(null,G__13971__13975);

if(cljs.core.truth_(temp__3698__auto____13997))
{var G__13971__13999 = temp__3698__auto____13997;

{
var G__14008 = cljs.core.first.call(null,G__13971__13999);
var G__14009 = G__13971__13999;
obj__13974 = G__14008;
G__13971__13975 = G__14009;
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
pr_str.cljs$lang$applyTo = (function (arglist__14013){
var objs = cljs.core.seq( arglist__14013 );;
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
pr.cljs$lang$applyTo = (function (arglist__14172){
var objs = cljs.core.seq( arglist__14172 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14223){
var objs = cljs.core.seq( arglist__14223 );;
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
println.cljs$lang$applyTo = (function (arglist__14224){
var objs = cljs.core.seq( arglist__14224 );;
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
prn.cljs$lang$applyTo = (function (arglist__14234){
var objs = cljs.core.seq( arglist__14234 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14252 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14252,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14292 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14292))
{var nspc__14294 = temp__3698__auto____14292;

return cljs.core.str.call(null,nspc__14294,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14296 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14296))
{var nspc__14297 = temp__3698__auto____14296;

return cljs.core.str.call(null,nspc__14297,"/");
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
var pr_pair__14317 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14317,"{",", ","}",opts,coll);
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
var this__14458 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14459 = this;
var G__14460__14461 = cljs.core.seq.call(null,this__14459.watches);

if(cljs.core.truth_(G__14460__14461))
{var G__14465__14468 = cljs.core.first.call(null,G__14460__14461);
var vec__14467__14469 = G__14465__14468;
var key__14470 = cljs.core.nth.call(null,vec__14467__14469,0,null);
var f__14471 = cljs.core.nth.call(null,vec__14467__14469,1,null);
var G__14460__14472 = G__14460__14461;

var G__14465__14473 = G__14465__14468;
var G__14460__14474 = G__14460__14472;

while(true){
var vec__14475__14476 = G__14465__14473;
var key__14477 = cljs.core.nth.call(null,vec__14475__14476,0,null);
var f__14478 = cljs.core.nth.call(null,vec__14475__14476,1,null);
var G__14460__14479 = G__14460__14474;

f__14478.call(null,key__14477,this$,oldval,newval);
var temp__3698__auto____14480 = cljs.core.next.call(null,G__14460__14479);

if(cljs.core.truth_(temp__3698__auto____14480))
{var G__14460__14481 = temp__3698__auto____14480;

{
var G__14499 = cljs.core.first.call(null,G__14460__14481);
var G__14500 = G__14460__14481;
G__14465__14473 = G__14499;
G__14460__14474 = G__14500;
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
var this__14485 = this;
return this$.watches = cljs.core.assoc.call(null,this__14485.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14486 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14486.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14487 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14487.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14488 = this;
return this__14488.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14489 = this;
return this__14489.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14492 = this;
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
var atom__14512 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14513 = (function() { 
var G__14521__delegate = function (x,p__14503){
var map__14504__14505 = p__14503;
var map__14504__14506 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14504__14505))?cljs.core.apply.call(null,cljs.core.hash_map,map__14504__14505):map__14504__14505);
var validator__14507 = cljs.core.get.call(null,map__14504__14506,"﷐'validator");
var meta__14508 = cljs.core.get.call(null,map__14504__14506,"﷐'meta");

return (new cljs.core.Atom(x,meta__14508,validator__14507,null));
};
var G__14521 = function (x,var_args){
var p__14503 = null;
if (goog.isDef(var_args)) {
  p__14503 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14521__delegate.call(this, x, p__14503);
};
G__14521.cljs$lang$maxFixedArity = 1;
G__14521.cljs$lang$applyTo = (function (arglist__14526){
var x = cljs.core.first(arglist__14526);
var p__14503 = cljs.core.rest(arglist__14526);
return G__14521__delegate.call(this, x, p__14503);
});
return G__14521;
})()
;
atom = function(x,var_args){
var p__14503 = var_args;
switch(arguments.length){
case  1 :
return atom__14512.call(this,x);
default:
return atom__14513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14513.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14533 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14533))
{var validate__14535 = temp__3698__auto____14533;

if(cljs.core.truth_(validate__14535.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14536 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14536,new_value);
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
var swap_BANG___14552 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14553 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14554 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14555 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14556 = (function() { 
var G__14568__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14568 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14568__delegate.call(this, a, f, x, y, z, more);
};
G__14568.cljs$lang$maxFixedArity = 5;
G__14568.cljs$lang$applyTo = (function (arglist__14571){
var a = cljs.core.first(arglist__14571);
var f = cljs.core.first(cljs.core.next(arglist__14571));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14571)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14571))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14571)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14571)))));
return G__14568__delegate.call(this, a, f, x, y, z, more);
});
return G__14568;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14552.call(this,a,f);
case  3 :
return swap_BANG___14553.call(this,a,f,x);
case  4 :
return swap_BANG___14554.call(this,a,f,x,y);
case  5 :
return swap_BANG___14555.call(this,a,f,x,y,z);
default:
return swap_BANG___14556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14556.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14661){
var iref = cljs.core.first(arglist__14661);
var f = cljs.core.first(cljs.core.next(arglist__14661));
var args = cljs.core.rest(cljs.core.next(arglist__14661));
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
var gensym__14673 = (function (){
return gensym.call(null,"G__");
});
var gensym__14675 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14673.call(this);
case  1 :
return gensym__14675.call(this,prefix_string);
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
var this__14685 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14685.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14686 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14686.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14686.state,this__14686.f);
}
return cljs.core.deref.call(null,this__14686.state);
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
delay.cljs$lang$applyTo = (function (arglist__14694){
var body = cljs.core.seq( arglist__14694 );;
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
var map__14701__14702 = options;
var map__14701__14703 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14701__14702))?cljs.core.apply.call(null,cljs.core.hash_map,map__14701__14702):map__14701__14702);
var keywordize_keys__14704 = cljs.core.get.call(null,map__14701__14703,"﷐'keywordize-keys");
var keyfn__14705 = (cljs.core.truth_(keywordize_keys__14704)?cljs.core.keyword:cljs.core.str);
var f__14713 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14711 = (function iter__14706(s__14707){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14707__14708 = s__14707;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14707__14708)))
{var k__14709 = cljs.core.first.call(null,s__14707__14708);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14705.call(null,k__14709),thisfn.call(null,(x[k__14709]))]),iter__14706.call(null,cljs.core.rest.call(null,s__14707__14708)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14711.call(null,cljs.core.js_keys.call(null,x));
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

return f__14713.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14727){
var x = cljs.core.first(arglist__14727);
var options = cljs.core.rest(arglist__14727);
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
var mem__14739 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14750__delegate = function (args){
var temp__3695__auto____14743 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14739),args);

if(cljs.core.truth_(temp__3695__auto____14743))
{var v__14745 = temp__3695__auto____14743;

return v__14745;
} else
{var ret__14747 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14739,cljs.core.assoc,args,ret__14747);
return ret__14747;
}
};
var G__14750 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14750__delegate.call(this, args);
};
G__14750.cljs$lang$maxFixedArity = 0;
G__14750.cljs$lang$applyTo = (function (arglist__14752){
var args = cljs.core.seq( arglist__14752 );;
return G__14750__delegate.call(this, args);
});
return G__14750;
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
var trampoline__14758 = (function (f){
while(true){
var ret__14755 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14755)))
{{
var G__14761 = ret__14755;
f = G__14761;
continue;
}
} else
{return ret__14755;
}
break;
}
});
var trampoline__14759 = (function() { 
var G__14762__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14762 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14762__delegate.call(this, f, args);
};
G__14762.cljs$lang$maxFixedArity = 1;
G__14762.cljs$lang$applyTo = (function (arglist__14763){
var f = cljs.core.first(arglist__14763);
var args = cljs.core.rest(arglist__14763);
return G__14762__delegate.call(this, f, args);
});
return G__14762;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14758.call(this,f);
default:
return trampoline__14759.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14759.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14766 = (function (){
return rand.call(null,1);
});
var rand__14767 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14766.call(this);
case  1 :
return rand__14767.call(this,n);
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
var k__14777 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14777,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14777,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14812 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14813 = (function (h,child,parent){
var or__3548__auto____14802 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14802))
{return or__3548__auto____14802;
} else
{var or__3548__auto____14803 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14803))
{return or__3548__auto____14803;
} else
{var and__3546__auto____14804 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14804))
{var and__3546__auto____14805 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14805))
{var and__3546__auto____14806 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14806))
{var ret__14807 = true;
var i__14808 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14809 = cljs.core.not.call(null,ret__14807);

if(cljs.core.truth_(or__3548__auto____14809))
{return or__3548__auto____14809;
} else
{return cljs.core._EQ_.call(null,i__14808,cljs.core.count.call(null,parent));
}
})()))
{return ret__14807;
} else
{{
var G__14815 = isa_QMARK_.call(null,h,child.call(null,i__14808),parent.call(null,i__14808));
var G__14816 = (i__14808 + 1);
ret__14807 = G__14815;
i__14808 = G__14816;
continue;
}
}
break;
}
} else
{return and__3546__auto____14806;
}
} else
{return and__3546__auto____14805;
}
} else
{return and__3546__auto____14804;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14812.call(this,h,child);
case  3 :
return isa_QMARK___14813.call(this,h,child,parent);
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
var parents__14837 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14839 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14837.call(this,h);
case  2 :
return parents__14839.call(this,h,tag);
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
var ancestors__14854 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14855 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14854.call(this,h);
case  2 :
return ancestors__14855.call(this,h,tag);
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
var descendants__14866 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14867 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14866.call(this,h);
case  2 :
return descendants__14867.call(this,h,tag);
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
var derive__14896 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14897 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14882 = "﷐'parents".call(null,h);
var td__14883 = "﷐'descendants".call(null,h);
var ta__14884 = "﷐'ancestors".call(null,h);
var tf__14887 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14895 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14882.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14884.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14884.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14882,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14887.call(null,"﷐'ancestors".call(null,h),tag,td__14883,parent,ta__14884),"﷐'descendants":tf__14887.call(null,"﷐'descendants".call(null,h),parent,ta__14884,tag,td__14883)});
})());

if(cljs.core.truth_(or__3548__auto____14895))
{return or__3548__auto____14895;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14896.call(this,h,tag);
case  3 :
return derive__14897.call(this,h,tag,parent);
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
var underive__14950 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14951 = (function (h,tag,parent){
var parentMap__14908 = "﷐'parents".call(null,h);
var childsParents__14914 = (cljs.core.truth_(parentMap__14908.call(null,tag))?cljs.core.disj.call(null,parentMap__14908.call(null,tag),parent):cljs.core.set([]));
var newParents__14916 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14914))?cljs.core.assoc.call(null,parentMap__14908,tag,childsParents__14914):cljs.core.dissoc.call(null,parentMap__14908,tag));
var deriv_seq__14917 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14873_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14873_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14873_SHARP_),cljs.core.second.call(null,p1__14873_SHARP_)));
}),cljs.core.seq.call(null,newParents__14916)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14908.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14878_SHARP_,p2__14879_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14878_SHARP_,p2__14879_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14917));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14950.call(this,h,tag);
case  3 :
return underive__14951.call(this,h,tag,parent);
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
var xprefs__14964 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14966 = (cljs.core.truth_((function (){var and__3546__auto____14965 = xprefs__14964;

if(cljs.core.truth_(and__3546__auto____14965))
{return xprefs__14964.call(null,y);
} else
{return and__3546__auto____14965;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14966))
{return or__3548__auto____14966;
} else
{var or__3548__auto____14969 = (function (){var ps__14968 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14968) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14968),prefer_table)))
{} else
{}
{
var G__14972 = cljs.core.rest.call(null,ps__14968);
ps__14968 = G__14972;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14969))
{return or__3548__auto____14969;
} else
{var or__3548__auto____14971 = (function (){var ps__14970 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14970) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14970),y,prefer_table)))
{} else
{}
{
var G__14979 = cljs.core.rest.call(null,ps__14970);
ps__14970 = G__14979;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14971))
{return or__3548__auto____14971;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14986 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14986))
{return or__3548__auto____14986;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15002 = cljs.core.reduce.call(null,(function (be,p__14991){
var vec__14992__14993 = p__14991;
var k__14994 = cljs.core.nth.call(null,vec__14992__14993,0,null);
var ___14996 = cljs.core.nth.call(null,vec__14992__14993,1,null);
var e__14998 = vec__14992__14993;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14994)))
{var be2__15001 = (cljs.core.truth_((function (){var or__3548__auto____15000 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15000))
{return or__3548__auto____15000;
} else
{return cljs.core.dominates.call(null,k__14994,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14998:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15001),k__14994,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14994," and ",cljs.core.first.call(null,be2__15001),", and neither is preferred")));
}
return be2__15001;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15002))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15002));
return cljs.core.second.call(null,best_entry__15002);
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
if(cljs.core.truth_((function (){var and__3546__auto____15057 = mf;

if(cljs.core.truth_(and__3546__auto____15057))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15057;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15058 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15058))
{return or__3548__auto____15058;
} else
{var or__3548__auto____15060 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15060))
{return or__3548__auto____15060;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15065 = mf;

if(cljs.core.truth_(and__3546__auto____15065))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15065;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15069 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15069))
{return or__3548__auto____15069;
} else
{var or__3548__auto____15070 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15070))
{return or__3548__auto____15070;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15074 = mf;

if(cljs.core.truth_(and__3546__auto____15074))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15074;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15075 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15075))
{return or__3548__auto____15075;
} else
{var or__3548__auto____15077 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15077))
{return or__3548__auto____15077;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15079 = mf;

if(cljs.core.truth_(and__3546__auto____15079))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15079;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15081 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15081))
{return or__3548__auto____15081;
} else
{var or__3548__auto____15085 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15085))
{return or__3548__auto____15085;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15091 = mf;

if(cljs.core.truth_(and__3546__auto____15091))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15091;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15096 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15096))
{return or__3548__auto____15096;
} else
{var or__3548__auto____15097 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15097))
{return or__3548__auto____15097;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15098 = mf;

if(cljs.core.truth_(and__3546__auto____15098))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15098;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15105 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15105))
{return or__3548__auto____15105;
} else
{var or__3548__auto____15106 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15106))
{return or__3548__auto____15106;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15108 = mf;

if(cljs.core.truth_(and__3546__auto____15108))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15108;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15111 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15111))
{return or__3548__auto____15111;
} else
{var or__3548__auto____15112 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15112))
{return or__3548__auto____15112;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15116 = mf;

if(cljs.core.truth_(and__3546__auto____15116))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15116;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15121 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15121))
{return or__3548__auto____15121;
} else
{var or__3548__auto____15124 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15124))
{return or__3548__auto____15124;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15174 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15175 = cljs.core._get_method.call(null,mf,dispatch_val__15174);

if(cljs.core.truth_(target_fn__15175))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15174)));
}
return cljs.core.apply.call(null,target_fn__15175,args);
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
var this__15182 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15183 = this;
cljs.core.swap_BANG_.call(null,this__15183.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15183.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15183.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15183.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15190 = this;
cljs.core.swap_BANG_.call(null,this__15190.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15190.method_cache,this__15190.method_table,this__15190.cached_hierarchy,this__15190.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15194 = this;
cljs.core.swap_BANG_.call(null,this__15194.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15194.method_cache,this__15194.method_table,this__15194.cached_hierarchy,this__15194.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15221 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15221.cached_hierarchy),cljs.core.deref.call(null,this__15221.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15221.method_cache,this__15221.method_table,this__15221.cached_hierarchy,this__15221.hierarchy);
}
var temp__3695__auto____15225 = cljs.core.deref.call(null,this__15221.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15225))
{var target_fn__15226 = temp__3695__auto____15225;

return target_fn__15226;
} else
{var temp__3695__auto____15228 = cljs.core.find_and_cache_best_method.call(null,this__15221.name,dispatch_val,this__15221.hierarchy,this__15221.method_table,this__15221.prefer_table,this__15221.method_cache,this__15221.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15228))
{var target_fn__15231 = temp__3695__auto____15228;

return target_fn__15231;
} else
{return cljs.core.deref.call(null,this__15221.method_table).call(null,this__15221.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15233 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15233.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15233.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15233.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15233.method_cache,this__15233.method_table,this__15233.cached_hierarchy,this__15233.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15242 = this;
return cljs.core.deref.call(null,this__15242.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15273 = this;
return cljs.core.deref.call(null,this__15273.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15274 = this;
return cljs.core.do_dispatch.call(null,mf,this__15274.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15343__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15343 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15343__delegate.call(this, _, args);
};
G__15343.cljs$lang$maxFixedArity = 1;
G__15343.cljs$lang$applyTo = (function (arglist__15344){
var _ = cljs.core.first(arglist__15344);
var args = cljs.core.rest(arglist__15344);
return G__15343__delegate.call(this, _, args);
});
return G__15343;
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
