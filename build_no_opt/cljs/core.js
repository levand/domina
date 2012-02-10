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
var or__3548__auto____7225 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7225))
{return or__3548__auto____7225;
} else
{var or__3548__auto____7227 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7227))
{return or__3548__auto____7227;
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
var _invoke__7600 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7240 = this$;

if(cljs.core.truth_(and__3546__auto____7240))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7240;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7241 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7241))
{return or__3548__auto____7241;
} else
{var or__3548__auto____7242 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7242))
{return or__3548__auto____7242;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7601 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7244 = this$;

if(cljs.core.truth_(and__3546__auto____7244))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7244;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7247 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7247))
{return or__3548__auto____7247;
} else
{var or__3548__auto____7248 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7248))
{return or__3548__auto____7248;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7602 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7250 = this$;

if(cljs.core.truth_(and__3546__auto____7250))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7250;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7252 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
} else
{var or__3548__auto____7254 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7603 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7256 = this$;

if(cljs.core.truth_(and__3546__auto____7256))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7256;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7258 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
} else
{var or__3548__auto____7260 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7604 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7263 = this$;

if(cljs.core.truth_(and__3546__auto____7263))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7263;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7319 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{var or__3548__auto____7322 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7605 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7327 = this$;

if(cljs.core.truth_(and__3546__auto____7327))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7327;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7331 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{var or__3548__auto____7334 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7606 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7338 = this$;

if(cljs.core.truth_(and__3546__auto____7338))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7338;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7341 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7341))
{return or__3548__auto____7341;
} else
{var or__3548__auto____7343 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7607 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7349 = this$;

if(cljs.core.truth_(and__3546__auto____7349))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7349;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7353 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7353))
{return or__3548__auto____7353;
} else
{var or__3548__auto____7355 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7608 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7360 = this$;

if(cljs.core.truth_(and__3546__auto____7360))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7360;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
} else
{var or__3548__auto____7370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7609 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7374 = this$;

if(cljs.core.truth_(and__3546__auto____7374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{var or__3548__auto____7385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7610 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7388 = this$;

if(cljs.core.truth_(and__3546__auto____7388))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7388;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7392 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7392))
{return or__3548__auto____7392;
} else
{var or__3548__auto____7395 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7611 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7400 = this$;

if(cljs.core.truth_(and__3546__auto____7400))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7400;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{var or__3548__auto____7406 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7406))
{return or__3548__auto____7406;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7612 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7410 = this$;

if(cljs.core.truth_(and__3546__auto____7410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{var or__3548__auto____7416 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7422 = this$;

if(cljs.core.truth_(and__3546__auto____7422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7434 = this$;

if(cljs.core.truth_(and__3546__auto____7434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7437 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{var or__3548__auto____7440 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7445 = this$;

if(cljs.core.truth_(and__3546__auto____7445))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7445;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7457 = this$;

if(cljs.core.truth_(and__3546__auto____7457))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7457;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7463 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7491 = this$;

if(cljs.core.truth_(and__3546__auto____7491))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7491;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7493 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7493))
{return or__3548__auto____7493;
} else
{var or__3548__auto____7494 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7494))
{return or__3548__auto____7494;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7497 = this$;

if(cljs.core.truth_(and__3546__auto____7497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7569 = this$;

if(cljs.core.truth_(and__3546__auto____7569))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7569;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7570 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7570))
{return or__3548__auto____7570;
} else
{var or__3548__auto____7571 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7571))
{return or__3548__auto____7571;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7574 = this$;

if(cljs.core.truth_(and__3546__auto____7574))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7574;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7576 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7576))
{return or__3548__auto____7576;
} else
{var or__3548__auto____7577 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7577))
{return or__3548__auto____7577;
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
return _invoke__7600.call(this,this$);
case  2 :
return _invoke__7601.call(this,this$,a);
case  3 :
return _invoke__7602.call(this,this$,a,b);
case  4 :
return _invoke__7603.call(this,this$,a,b,c);
case  5 :
return _invoke__7604.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7605.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7606.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7607.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7608.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7609.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7610.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7611.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7612.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7613.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7614.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7616.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7618.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7619.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7628 = coll;

if(cljs.core.truth_(and__3546__auto____7628))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7628;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7629 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7629))
{return or__3548__auto____7629;
} else
{var or__3548__auto____7630 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7630))
{return or__3548__auto____7630;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7634 = coll;

if(cljs.core.truth_(and__3546__auto____7634))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7634;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7635 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7635))
{return or__3548__auto____7635;
} else
{var or__3548__auto____7636 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7636))
{return or__3548__auto____7636;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7667 = coll;

if(cljs.core.truth_(and__3546__auto____7667))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7667;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7669 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7669))
{return or__3548__auto____7669;
} else
{var or__3548__auto____7671 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7671))
{return or__3548__auto____7671;
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
var _nth__7694 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7674 = coll;

if(cljs.core.truth_(and__3546__auto____7674))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7674;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7677 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7677))
{return or__3548__auto____7677;
} else
{var or__3548__auto____7680 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7680))
{return or__3548__auto____7680;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7695 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7684 = coll;

if(cljs.core.truth_(and__3546__auto____7684))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7684;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7688 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7688))
{return or__3548__auto____7688;
} else
{var or__3548__auto____7690 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7690))
{return or__3548__auto____7690;
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
return _nth__7694.call(this,coll,n);
case  3 :
return _nth__7695.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7708 = coll;

if(cljs.core.truth_(and__3546__auto____7708))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7708;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7716 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7720 = coll;

if(cljs.core.truth_(and__3546__auto____7720))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7720;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7724 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{var or__3548__auto____7726 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
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
var _lookup__7751 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7734 = o;

if(cljs.core.truth_(and__3546__auto____7734))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7734;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7738 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
} else
{var or__3548__auto____7741 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7753 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7742 = o;

if(cljs.core.truth_(and__3546__auto____7742))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7742;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7746 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{var or__3548__auto____7748 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
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
return _lookup__7751.call(this,o,k);
case  3 :
return _lookup__7753.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7764 = coll;

if(cljs.core.truth_(and__3546__auto____7764))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7764;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7768 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
} else
{var or__3548__auto____7769 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7769))
{return or__3548__auto____7769;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7773 = coll;

if(cljs.core.truth_(and__3546__auto____7773))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7773;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7782 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{var or__3548__auto____7783 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7796 = coll;

if(cljs.core.truth_(and__3546__auto____7796))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7796;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{var or__3548__auto____7799 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7810 = coll;

if(cljs.core.truth_(and__3546__auto____7810))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7810;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7812 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
} else
{var or__3548__auto____7815 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7820 = coll;

if(cljs.core.truth_(and__3546__auto____7820))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7820;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7822 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7822))
{return or__3548__auto____7822;
} else
{var or__3548__auto____7825 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7832 = coll;

if(cljs.core.truth_(and__3546__auto____7832))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7832;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7834 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7834))
{return or__3548__auto____7834;
} else
{var or__3548__auto____7835 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7841 = coll;

if(cljs.core.truth_(and__3546__auto____7841))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7841;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7843 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{var or__3548__auto____7845 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = o;

if(cljs.core.truth_(and__3546__auto____7856))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7856;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7857 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{var or__3548__auto____7858 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7868 = o;

if(cljs.core.truth_(and__3546__auto____7868))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7868;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7869 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7869))
{return or__3548__auto____7869;
} else
{var or__3548__auto____7870 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7870))
{return or__3548__auto____7870;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7880 = o;

if(cljs.core.truth_(and__3546__auto____7880))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7880;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7882 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{var or__3548__auto____7883 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7890 = o;

if(cljs.core.truth_(and__3546__auto____7890))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7890;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7892 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{var or__3548__auto____7895 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
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
var _reduce__7916 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7902 = coll;

if(cljs.core.truth_(and__3546__auto____7902))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7902;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7904 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{var or__3548__auto____7907 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7918 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7909 = coll;

if(cljs.core.truth_(and__3546__auto____7909))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7909;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7912 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{var or__3548__auto____7914 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
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
return _reduce__7916.call(this,coll,f);
case  3 :
return _reduce__7918.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7925 = o;

if(cljs.core.truth_(and__3546__auto____7925))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7925;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7927 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{var or__3548__auto____7928 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7928))
{return or__3548__auto____7928;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7934 = o;

if(cljs.core.truth_(and__3546__auto____7934))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7934;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7935 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{var or__3548__auto____7936 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7950 = o;

if(cljs.core.truth_(and__3546__auto____7950))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7950;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7954 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{var or__3548__auto____7955 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
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
if(cljs.core.truth_((function (){var and__3546__auto____7972 = o;

if(cljs.core.truth_(and__3546__auto____7972))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7972;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7977 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{var or__3548__auto____7978 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7978))
{return or__3548__auto____7978;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7988 = d;

if(cljs.core.truth_(and__3546__auto____7988))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7988;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7990 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7990))
{return or__3548__auto____7990;
} else
{var or__3548__auto____7991 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8006 = this$;

if(cljs.core.truth_(and__3546__auto____8006))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8006;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8009 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{var or__3548__auto____8010 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8015 = this$;

if(cljs.core.truth_(and__3546__auto____8015))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8015;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8016 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{var or__3548__auto____8019 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8025 = this$;

if(cljs.core.truth_(and__3546__auto____8025))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8025;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8027 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{var or__3548__auto____8029 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
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
var G__8085 = null;
var G__8085__8086 = (function (o,k){
return null;
});
var G__8085__8087 = (function (o,k,not_found){
return not_found;
});
G__8085 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8085__8086.call(this,o,k);
case  3 :
return G__8085__8087.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8085;
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
var G__8091 = null;
var G__8091__8092 = (function (_,f){
return f.call(null);
});
var G__8091__8093 = (function (_,f,start){
return start;
});
G__8091 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8091__8092.call(this,_,f);
case  3 :
return G__8091__8093.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8091;
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
var G__8096 = null;
var G__8096__8098 = (function (_,n){
return null;
});
var G__8096__8099 = (function (_,n,not_found){
return not_found;
});
G__8096 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8096__8098.call(this,_,n);
case  3 :
return G__8096__8099.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8096;
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
var ci_reduce__8204 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8196 = cljs.core._nth.call(null,cicoll,0);
var n__8197 = 1;

while(true){
if(cljs.core.truth_((n__8197 < cljs.core._count.call(null,cicoll))))
{{
var G__8208 = f.call(null,val__8196,cljs.core._nth.call(null,cicoll,n__8197));
var G__8209 = (n__8197 + 1);
val__8196 = G__8208;
n__8197 = G__8209;
continue;
}
} else
{return val__8196;
}
break;
}
}
});
var ci_reduce__8205 = (function (cicoll,f,val){
var val__8198 = val;
var n__8199 = 0;

while(true){
if(cljs.core.truth_((n__8199 < cljs.core._count.call(null,cicoll))))
{{
var G__8210 = f.call(null,val__8198,cljs.core._nth.call(null,cicoll,n__8199));
var G__8211 = (n__8199 + 1);
val__8198 = G__8210;
n__8199 = G__8211;
continue;
}
} else
{return val__8198;
}
break;
}
});
var ci_reduce__8206 = (function (cicoll,f,val,idx){
var val__8201 = val;
var n__8202 = idx;

while(true){
if(cljs.core.truth_((n__8202 < cljs.core._count.call(null,cicoll))))
{{
var G__8212 = f.call(null,val__8201,cljs.core._nth.call(null,cicoll,n__8202));
var G__8213 = (n__8202 + 1);
val__8201 = G__8212;
n__8202 = G__8213;
continue;
}
} else
{return val__8201;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8204.call(this,cicoll,f);
case  3 :
return ci_reduce__8205.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8206.call(this,cicoll,f,val,idx);
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
var this__8214 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8227 = null;
var G__8227__8228 = (function (_,f){
var this__8215 = this;
return cljs.core.ci_reduce.call(null,this__8215.a,f,(this__8215.a[this__8215.i]),(this__8215.i + 1));
});
var G__8227__8229 = (function (_,f,start){
var this__8216 = this;
return cljs.core.ci_reduce.call(null,this__8216.a,f,start,this__8216.i);
});
G__8227 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8227__8228.call(this,_,f);
case  3 :
return G__8227__8229.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8227;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8217 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8218 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8231 = null;
var G__8231__8232 = (function (coll,n){
var this__8219 = this;
var i__8220 = (n + this__8219.i);

if(cljs.core.truth_((i__8220 < this__8219.a.length)))
{return (this__8219.a[i__8220]);
} else
{return null;
}
});
var G__8231__8233 = (function (coll,n,not_found){
var this__8221 = this;
var i__8222 = (n + this__8221.i);

if(cljs.core.truth_((i__8222 < this__8221.a.length)))
{return (this__8221.a[i__8222]);
} else
{return not_found;
}
});
G__8231 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8231__8232.call(this,coll,n);
case  3 :
return G__8231__8233.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8231;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8223 = this;
return (this__8223.a.length - this__8223.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8224 = this;
return (this__8224.a[this__8224.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8225 = this;
if(cljs.core.truth_(((this__8225.i + 1) < this__8225.a.length)))
{return (new cljs.core.IndexedSeq(this__8225.a,(this__8225.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8226 = this;
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
var G__8264 = null;
var G__8264__8266 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8264__8296 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8264 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8264__8266.call(this,array,f);
case  3 :
return G__8264__8296.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8264;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8302 = null;
var G__8302__8303 = (function (array,k){
return (array[k]);
});
var G__8302__8304 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8302 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8302__8303.call(this,array,k);
case  3 :
return G__8302__8304.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8302;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8306 = null;
var G__8306__8307 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8306__8308 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8306 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8306__8307.call(this,array,n);
case  3 :
return G__8306__8308.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8306;
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
var G__8478 = cljs.core.next.call(null,s);
s = G__8478;
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
var s__8484 = cljs.core.seq.call(null,x);
var n__8485 = 0;

while(true){
if(cljs.core.truth_(s__8484))
{{
var G__8486 = cljs.core.next.call(null,s__8484);
var G__8487 = (n__8485 + 1);
s__8484 = G__8486;
n__8485 = G__8487;
continue;
}
} else
{return n__8485;
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
var conj__8491 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8492 = (function() { 
var G__8496__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8497 = conj.call(null,coll,x);
var G__8498 = cljs.core.first.call(null,xs);
var G__8499 = cljs.core.next.call(null,xs);
coll = G__8497;
x = G__8498;
xs = G__8499;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8496 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8496__delegate.call(this, coll, x, xs);
};
G__8496.cljs$lang$maxFixedArity = 2;
G__8496.cljs$lang$applyTo = (function (arglist__8506){
var coll = cljs.core.first(arglist__8506);
var x = cljs.core.first(cljs.core.next(arglist__8506));
var xs = cljs.core.rest(cljs.core.next(arglist__8506));
return G__8496__delegate.call(this, coll, x, xs);
});
return G__8496;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8491.call(this,coll,x);
default:
return conj__8492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8492.cljs$lang$applyTo;
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
var nth__8527 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8528 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8527.call(this,coll,n);
case  3 :
return nth__8528.call(this,coll,n,not_found);
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
var get__8535 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8536 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8535.call(this,o,k);
case  3 :
return get__8536.call(this,o,k,not_found);
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
var assoc__8545 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8546 = (function() { 
var G__8548__delegate = function (coll,k,v,kvs){
while(true){
var ret__8541 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8646 = ret__8541;
var G__8647 = cljs.core.first.call(null,kvs);
var G__8648 = cljs.core.second.call(null,kvs);
var G__8649 = cljs.core.nnext.call(null,kvs);
coll = G__8646;
k = G__8647;
v = G__8648;
kvs = G__8649;
continue;
}
} else
{return ret__8541;
}
break;
}
};
var G__8548 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8548__delegate.call(this, coll, k, v, kvs);
};
G__8548.cljs$lang$maxFixedArity = 3;
G__8548.cljs$lang$applyTo = (function (arglist__8652){
var coll = cljs.core.first(arglist__8652);
var k = cljs.core.first(cljs.core.next(arglist__8652));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8652)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8652)));
return G__8548__delegate.call(this, coll, k, v, kvs);
});
return G__8548;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8545.call(this,coll,k,v);
default:
return assoc__8546.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8546.cljs$lang$applyTo;
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
var dissoc__8663 = (function (coll){
return coll;
});
var dissoc__8664 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8665 = (function() { 
var G__8668__delegate = function (coll,k,ks){
while(true){
var ret__8661 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8669 = ret__8661;
var G__8670 = cljs.core.first.call(null,ks);
var G__8671 = cljs.core.next.call(null,ks);
coll = G__8669;
k = G__8670;
ks = G__8671;
continue;
}
} else
{return ret__8661;
}
break;
}
};
var G__8668 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8668__delegate.call(this, coll, k, ks);
};
G__8668.cljs$lang$maxFixedArity = 2;
G__8668.cljs$lang$applyTo = (function (arglist__8672){
var coll = cljs.core.first(arglist__8672);
var k = cljs.core.first(cljs.core.next(arglist__8672));
var ks = cljs.core.rest(cljs.core.next(arglist__8672));
return G__8668__delegate.call(this, coll, k, ks);
});
return G__8668;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8663.call(this,coll);
case  2 :
return dissoc__8664.call(this,coll,k);
default:
return dissoc__8665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8665.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8683 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8684 = x__445__auto____8683;

if(cljs.core.truth_(and__3546__auto____8684))
{var and__3546__auto____8685 = x__445__auto____8683.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8685))
{return cljs.core.not.call(null,x__445__auto____8683.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8685;
}
} else
{return and__3546__auto____8684;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8683);
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
var disj__8753 = (function (coll){
return coll;
});
var disj__8754 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8755 = (function() { 
var G__8758__delegate = function (coll,k,ks){
while(true){
var ret__8749 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8760 = ret__8749;
var G__8761 = cljs.core.first.call(null,ks);
var G__8762 = cljs.core.next.call(null,ks);
coll = G__8760;
k = G__8761;
ks = G__8762;
continue;
}
} else
{return ret__8749;
}
break;
}
};
var G__8758 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8758__delegate.call(this, coll, k, ks);
};
G__8758.cljs$lang$maxFixedArity = 2;
G__8758.cljs$lang$applyTo = (function (arglist__8766){
var coll = cljs.core.first(arglist__8766);
var k = cljs.core.first(cljs.core.next(arglist__8766));
var ks = cljs.core.rest(cljs.core.next(arglist__8766));
return G__8758__delegate.call(this, coll, k, ks);
});
return G__8758;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8753.call(this,coll);
case  2 :
return disj__8754.call(this,coll,k);
default:
return disj__8755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8755.cljs$lang$applyTo;
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
{var x__445__auto____8782 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8784 = x__445__auto____8782;

if(cljs.core.truth_(and__3546__auto____8784))
{var and__3546__auto____8785 = x__445__auto____8782.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8785))
{return cljs.core.not.call(null,x__445__auto____8782.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8785;
}
} else
{return and__3546__auto____8784;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8782);
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
{var x__445__auto____8796 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8800 = x__445__auto____8796;

if(cljs.core.truth_(and__3546__auto____8800))
{var and__3546__auto____8803 = x__445__auto____8796.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8803))
{return cljs.core.not.call(null,x__445__auto____8796.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8803;
}
} else
{return and__3546__auto____8800;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8796);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8809 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8810 = x__445__auto____8809;

if(cljs.core.truth_(and__3546__auto____8810))
{var and__3546__auto____8811 = x__445__auto____8809.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8811))
{return cljs.core.not.call(null,x__445__auto____8809.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8811;
}
} else
{return and__3546__auto____8810;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8809);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8824 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8825 = x__445__auto____8824;

if(cljs.core.truth_(and__3546__auto____8825))
{var and__3546__auto____8826 = x__445__auto____8824.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8826))
{return cljs.core.not.call(null,x__445__auto____8824.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8826;
}
} else
{return and__3546__auto____8825;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8824);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8840 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8841 = x__445__auto____8840;

if(cljs.core.truth_(and__3546__auto____8841))
{var and__3546__auto____8842 = x__445__auto____8840.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8842))
{return cljs.core.not.call(null,x__445__auto____8840.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8842;
}
} else
{return and__3546__auto____8841;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8840);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8855 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8856 = x__445__auto____8855;

if(cljs.core.truth_(and__3546__auto____8856))
{var and__3546__auto____8857 = x__445__auto____8855.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8857))
{return cljs.core.not.call(null,x__445__auto____8855.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8857;
}
} else
{return and__3546__auto____8856;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8855);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8867 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8868 = x__445__auto____8867;

if(cljs.core.truth_(and__3546__auto____8868))
{var and__3546__auto____8870 = x__445__auto____8867.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8870))
{return cljs.core.not.call(null,x__445__auto____8867.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8870;
}
} else
{return and__3546__auto____8868;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8867);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8878 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8878.push(key);
}));
return keys__8878;
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
{var x__445__auto____8889 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8890 = x__445__auto____8889;

if(cljs.core.truth_(and__3546__auto____8890))
{var and__3546__auto____8892 = x__445__auto____8889.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8892))
{return cljs.core.not.call(null,x__445__auto____8889.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8892;
}
} else
{return and__3546__auto____8890;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8889);
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
var and__3546__auto____8902 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8902))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8905 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8905))
{return or__3548__auto____8905;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8902;
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
var and__3546__auto____8920 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8920))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8920;
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
var and__3546__auto____8926 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8926))
{return (n == n.toFixed());
} else
{return and__3546__auto____8926;
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
if(cljs.core.truth_((function (){var and__3546__auto____8938 = coll;

if(cljs.core.truth_(and__3546__auto____8938))
{var and__3546__auto____8939 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8939))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8939;
}
} else
{return and__3546__auto____8938;
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
var distinct_QMARK___8953 = (function (x){
return true;
});
var distinct_QMARK___8954 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8955 = (function() { 
var G__8961__delegate = function (x,y,more){
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
var G__8961 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8961__delegate.call(this, x, y, more);
};
G__8961.cljs$lang$maxFixedArity = 2;
G__8961.cljs$lang$applyTo = (function (arglist__8970){
var x = cljs.core.first(arglist__8970);
var y = cljs.core.first(cljs.core.next(arglist__8970));
var more = cljs.core.rest(cljs.core.next(arglist__8970));
return G__8961__delegate.call(this, x, y, more);
});
return G__8961;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8953.call(this,x);
case  2 :
return distinct_QMARK___8954.call(this,x,y);
default:
return distinct_QMARK___8955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8955.cljs$lang$applyTo;
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
var r__8979 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8979)))
{return r__8979;
} else
{if(cljs.core.truth_(r__8979))
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
var sort__9026 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9027 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9020 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9020,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9020);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9026.call(this,comp);
case  2 :
return sort__9027.call(this,comp,coll);
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
var sort_by__9037 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9038 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9037.call(this,keyfn,comp);
case  3 :
return sort_by__9038.call(this,keyfn,comp,coll);
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
var reduce__9043 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9044 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9043.call(this,f,val);
case  3 :
return reduce__9044.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9054 = (function (f,coll){
var temp__3695__auto____9050 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9050))
{var s__9051 = temp__3695__auto____9050;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9051),cljs.core.next.call(null,s__9051));
} else
{return f.call(null);
}
});
var seq_reduce__9055 = (function (f,val,coll){
var val__9052 = val;
var coll__9053 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9053))
{{
var G__9062 = f.call(null,val__9052,cljs.core.first.call(null,coll__9053));
var G__9063 = cljs.core.next.call(null,coll__9053);
val__9052 = G__9062;
coll__9053 = G__9063;
continue;
}
} else
{return val__9052;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9054.call(this,f,val);
case  3 :
return seq_reduce__9055.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9066 = null;
var G__9066__9067 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9066__9068 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9066 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9066__9067.call(this,coll,f);
case  3 :
return G__9066__9068.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9066;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9070 = (function (){
return 0;
});
var _PLUS___9071 = (function (x){
return x;
});
var _PLUS___9072 = (function (x,y){
return (x + y);
});
var _PLUS___9073 = (function() { 
var G__9075__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9075 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9075__delegate.call(this, x, y, more);
};
G__9075.cljs$lang$maxFixedArity = 2;
G__9075.cljs$lang$applyTo = (function (arglist__9080){
var x = cljs.core.first(arglist__9080);
var y = cljs.core.first(cljs.core.next(arglist__9080));
var more = cljs.core.rest(cljs.core.next(arglist__9080));
return G__9075__delegate.call(this, x, y, more);
});
return G__9075;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9070.call(this);
case  1 :
return _PLUS___9071.call(this,x);
case  2 :
return _PLUS___9072.call(this,x,y);
default:
return _PLUS___9073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9073.cljs$lang$applyTo;
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
var ___9083 = (function (x){
return (- x);
});
var ___9084 = (function (x,y){
return (x - y);
});
var ___9085 = (function() { 
var G__9087__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9087 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9087__delegate.call(this, x, y, more);
};
G__9087.cljs$lang$maxFixedArity = 2;
G__9087.cljs$lang$applyTo = (function (arglist__9088){
var x = cljs.core.first(arglist__9088);
var y = cljs.core.first(cljs.core.next(arglist__9088));
var more = cljs.core.rest(cljs.core.next(arglist__9088));
return G__9087__delegate.call(this, x, y, more);
});
return G__9087;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9083.call(this,x);
case  2 :
return ___9084.call(this,x,y);
default:
return ___9085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9085.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9089 = (function (){
return 1;
});
var _STAR___9090 = (function (x){
return x;
});
var _STAR___9091 = (function (x,y){
return (x * y);
});
var _STAR___9092 = (function() { 
var G__9094__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9094 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9094__delegate.call(this, x, y, more);
};
G__9094.cljs$lang$maxFixedArity = 2;
G__9094.cljs$lang$applyTo = (function (arglist__9095){
var x = cljs.core.first(arglist__9095);
var y = cljs.core.first(cljs.core.next(arglist__9095));
var more = cljs.core.rest(cljs.core.next(arglist__9095));
return G__9094__delegate.call(this, x, y, more);
});
return G__9094;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9089.call(this);
case  1 :
return _STAR___9090.call(this,x);
case  2 :
return _STAR___9091.call(this,x,y);
default:
return _STAR___9092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9092.cljs$lang$applyTo;
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
var _SLASH___9144 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9145 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9146 = (function() { 
var G__9151__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9151 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9151__delegate.call(this, x, y, more);
};
G__9151.cljs$lang$maxFixedArity = 2;
G__9151.cljs$lang$applyTo = (function (arglist__9156){
var x = cljs.core.first(arglist__9156);
var y = cljs.core.first(cljs.core.next(arglist__9156));
var more = cljs.core.rest(cljs.core.next(arglist__9156));
return G__9151__delegate.call(this, x, y, more);
});
return G__9151;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9144.call(this,x);
case  2 :
return _SLASH___9145.call(this,x,y);
default:
return _SLASH___9146.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9146.cljs$lang$applyTo;
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
var _LT___9187 = (function (x){
return true;
});
var _LT___9188 = (function (x,y){
return (x < y);
});
var _LT___9189 = (function() { 
var G__9194__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9196 = y;
var G__9197 = cljs.core.first.call(null,more);
var G__9198 = cljs.core.next.call(null,more);
x = G__9196;
y = G__9197;
more = G__9198;
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
var G__9194 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9194__delegate.call(this, x, y, more);
};
G__9194.cljs$lang$maxFixedArity = 2;
G__9194.cljs$lang$applyTo = (function (arglist__9199){
var x = cljs.core.first(arglist__9199);
var y = cljs.core.first(cljs.core.next(arglist__9199));
var more = cljs.core.rest(cljs.core.next(arglist__9199));
return G__9194__delegate.call(this, x, y, more);
});
return G__9194;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9187.call(this,x);
case  2 :
return _LT___9188.call(this,x,y);
default:
return _LT___9189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9189.cljs$lang$applyTo;
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
var _LT__EQ___9223 = (function (x){
return true;
});
var _LT__EQ___9224 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9225 = (function() { 
var G__9227__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9228 = y;
var G__9229 = cljs.core.first.call(null,more);
var G__9230 = cljs.core.next.call(null,more);
x = G__9228;
y = G__9229;
more = G__9230;
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
var G__9227 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9227__delegate.call(this, x, y, more);
};
G__9227.cljs$lang$maxFixedArity = 2;
G__9227.cljs$lang$applyTo = (function (arglist__9247){
var x = cljs.core.first(arglist__9247);
var y = cljs.core.first(cljs.core.next(arglist__9247));
var more = cljs.core.rest(cljs.core.next(arglist__9247));
return G__9227__delegate.call(this, x, y, more);
});
return G__9227;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9223.call(this,x);
case  2 :
return _LT__EQ___9224.call(this,x,y);
default:
return _LT__EQ___9225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9225.cljs$lang$applyTo;
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
var _GT___9296 = (function (x){
return true;
});
var _GT___9297 = (function (x,y){
return (x > y);
});
var _GT___9298 = (function() { 
var G__9307__delegate = function (x,y,more){
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
var G__9307 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9307__delegate.call(this, x, y, more);
};
G__9307.cljs$lang$maxFixedArity = 2;
G__9307.cljs$lang$applyTo = (function (arglist__9311){
var x = cljs.core.first(arglist__9311);
var y = cljs.core.first(cljs.core.next(arglist__9311));
var more = cljs.core.rest(cljs.core.next(arglist__9311));
return G__9307__delegate.call(this, x, y, more);
});
return G__9307;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9296.call(this,x);
case  2 :
return _GT___9297.call(this,x,y);
default:
return _GT___9298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9298.cljs$lang$applyTo;
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
var _GT__EQ___9313 = (function (x){
return true;
});
var _GT__EQ___9314 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9315 = (function() { 
var G__9317__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9318 = y;
var G__9319 = cljs.core.first.call(null,more);
var G__9320 = cljs.core.next.call(null,more);
x = G__9318;
y = G__9319;
more = G__9320;
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
var G__9317 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9317__delegate.call(this, x, y, more);
};
G__9317.cljs$lang$maxFixedArity = 2;
G__9317.cljs$lang$applyTo = (function (arglist__9330){
var x = cljs.core.first(arglist__9330);
var y = cljs.core.first(cljs.core.next(arglist__9330));
var more = cljs.core.rest(cljs.core.next(arglist__9330));
return G__9317__delegate.call(this, x, y, more);
});
return G__9317;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9313.call(this,x);
case  2 :
return _GT__EQ___9314.call(this,x,y);
default:
return _GT__EQ___9315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9315.cljs$lang$applyTo;
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
var max__9342 = (function (x){
return x;
});
var max__9343 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9344 = (function() { 
var G__9346__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9346 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9346__delegate.call(this, x, y, more);
};
G__9346.cljs$lang$maxFixedArity = 2;
G__9346.cljs$lang$applyTo = (function (arglist__9347){
var x = cljs.core.first(arglist__9347);
var y = cljs.core.first(cljs.core.next(arglist__9347));
var more = cljs.core.rest(cljs.core.next(arglist__9347));
return G__9346__delegate.call(this, x, y, more);
});
return G__9346;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9342.call(this,x);
case  2 :
return max__9343.call(this,x,y);
default:
return max__9344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9344.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9362 = (function (x){
return x;
});
var min__9363 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9364 = (function() { 
var G__9366__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9366 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9366__delegate.call(this, x, y, more);
};
G__9366.cljs$lang$maxFixedArity = 2;
G__9366.cljs$lang$applyTo = (function (arglist__9369){
var x = cljs.core.first(arglist__9369);
var y = cljs.core.first(cljs.core.next(arglist__9369));
var more = cljs.core.rest(cljs.core.next(arglist__9369));
return G__9366__delegate.call(this, x, y, more);
});
return G__9366;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9362.call(this,x);
case  2 :
return min__9363.call(this,x,y);
default:
return min__9364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9364.cljs$lang$applyTo;
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
var rem__9385 = (n % d);

return cljs.core.fix.call(null,((n - rem__9385) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9390 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9390));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9395 = (function (){
return Math.random.call(null);
});
var rand__9396 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9395.call(this);
case  1 :
return rand__9396.call(this,n);
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
var _EQ__EQ___9458 = (function (x){
return true;
});
var _EQ__EQ___9459 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9460 = (function() { 
var G__9462__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9463 = y;
var G__9464 = cljs.core.first.call(null,more);
var G__9465 = cljs.core.next.call(null,more);
x = G__9463;
y = G__9464;
more = G__9465;
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
var G__9462 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9462__delegate.call(this, x, y, more);
};
G__9462.cljs$lang$maxFixedArity = 2;
G__9462.cljs$lang$applyTo = (function (arglist__9467){
var x = cljs.core.first(arglist__9467);
var y = cljs.core.first(cljs.core.next(arglist__9467));
var more = cljs.core.rest(cljs.core.next(arglist__9467));
return G__9462__delegate.call(this, x, y, more);
});
return G__9462;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9458.call(this,x);
case  2 :
return _EQ__EQ___9459.call(this,x,y);
default:
return _EQ__EQ___9460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9460.cljs$lang$applyTo;
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
var n__9481 = n;
var xs__9482 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9483 = xs__9482;

if(cljs.core.truth_(and__3546__auto____9483))
{return (n__9481 > 0);
} else
{return and__3546__auto____9483;
}
})()))
{{
var G__9486 = (n__9481 - 1);
var G__9488 = cljs.core.next.call(null,xs__9482);
n__9481 = G__9486;
xs__9482 = G__9488;
continue;
}
} else
{return xs__9482;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9495 = null;
var G__9495__9496 = (function (coll,n){
var temp__3695__auto____9490 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9490))
{var xs__9491 = temp__3695__auto____9490;

return cljs.core.first.call(null,xs__9491);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9495__9497 = (function (coll,n,not_found){
var temp__3695__auto____9492 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9492))
{var xs__9494 = temp__3695__auto____9492;

return cljs.core.first.call(null,xs__9494);
} else
{return not_found;
}
});
G__9495 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9495__9496.call(this,coll,n);
case  3 :
return G__9495__9497.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9495;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9508 = (function (){
return "";
});
var str_STAR___9509 = (function (x){
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
var str_STAR___9510 = (function() { 
var G__9606__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9611 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9612 = cljs.core.next.call(null,more);
sb = G__9611;
more = G__9612;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9606 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9606__delegate.call(this, x, ys);
};
G__9606.cljs$lang$maxFixedArity = 1;
G__9606.cljs$lang$applyTo = (function (arglist__9613){
var x = cljs.core.first(arglist__9613);
var ys = cljs.core.rest(arglist__9613);
return G__9606__delegate.call(this, x, ys);
});
return G__9606;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9508.call(this);
case  1 :
return str_STAR___9509.call(this,x);
default:
return str_STAR___9510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9510.cljs$lang$applyTo;
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
var str__9683 = (function (){
return "";
});
var str__9685 = (function (x){
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
var str__9686 = (function() { 
var G__9688__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9688 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9688__delegate.call(this, x, ys);
};
G__9688.cljs$lang$maxFixedArity = 1;
G__9688.cljs$lang$applyTo = (function (arglist__9690){
var x = cljs.core.first(arglist__9690);
var ys = cljs.core.rest(arglist__9690);
return G__9688__delegate.call(this, x, ys);
});
return G__9688;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9683.call(this);
case  1 :
return str__9685.call(this,x);
default:
return str__9686.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9686.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9691 = (function (s,start){
return s.substring(start);
});
var subs__9692 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9691.call(this,s,start);
case  3 :
return subs__9692.call(this,s,start,end);
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
var symbol__9694 = (function (name){
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
var symbol__9695 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9694.call(this,ns);
case  2 :
return symbol__9695.call(this,ns,name);
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
var keyword__9710 = (function (name){
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
var keyword__9711 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9710.call(this,ns);
case  2 :
return keyword__9711.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9715 = cljs.core.seq.call(null,x);
var ys__9716 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9715)))
{return cljs.core.nil_QMARK_.call(null,ys__9716);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9716)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9715),cljs.core.first.call(null,ys__9716))))
{{
var G__9722 = cljs.core.next.call(null,xs__9715);
var G__9723 = cljs.core.next.call(null,ys__9716);
xs__9715 = G__9722;
ys__9716 = G__9723;
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
return cljs.core.reduce.call(null,(function (p1__9724_SHARP_,p2__9725_SHARP_){
return cljs.core.hash_combine.call(null,p1__9724_SHARP_,cljs.core.hash.call(null,p2__9725_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9737__9739 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9737__9739))
{var G__9741__9744 = cljs.core.first.call(null,G__9737__9739);
var vec__9742__9745 = G__9741__9744;
var key_name__9746 = cljs.core.nth.call(null,vec__9742__9745,0,null);
var f__9747 = cljs.core.nth.call(null,vec__9742__9745,1,null);
var G__9737__9748 = G__9737__9739;

var G__9741__9750 = G__9741__9744;
var G__9737__9751 = G__9737__9748;

while(true){
var vec__9752__9754 = G__9741__9750;
var key_name__9755 = cljs.core.nth.call(null,vec__9752__9754,0,null);
var f__9756 = cljs.core.nth.call(null,vec__9752__9754,1,null);
var G__9737__9757 = G__9737__9751;

var str_name__9759 = cljs.core.name.call(null,key_name__9755);

obj[str_name__9759] = f__9756;
var temp__3698__auto____9761 = cljs.core.next.call(null,G__9737__9757);

if(cljs.core.truth_(temp__3698__auto____9761))
{var G__9737__9762 = temp__3698__auto____9761;

{
var G__9763 = cljs.core.first.call(null,G__9737__9762);
var G__9764 = G__9737__9762;
G__9741__9750 = G__9763;
G__9737__9751 = G__9764;
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
var this__9766 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9768 = this;
return (new cljs.core.List(this__9768.meta,o,coll,(this__9768.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9771 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9773 = this;
return this__9773.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9777 = this;
return this__9777.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9780 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9782 = this;
return this__9782.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9783 = this;
return this__9783.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9784 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9785 = this;
return (new cljs.core.List(meta,this__9785.first,this__9785.rest,this__9785.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9786 = this;
return this__9786.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9787 = this;
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
var this__9825 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9827 = this;
return (new cljs.core.List(this__9827.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9830 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9831 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9832 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9834 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9836 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9838 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9842 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9843 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9844 = this;
return this__9844.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9845 = this;
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
list.cljs$lang$applyTo = (function (arglist__9853){
var items = cljs.core.seq( arglist__9853 );;
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
var this__9896 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9897 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9899 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9901 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9901.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9912 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9913 = this;
return this__9913.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9914 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9914.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9914.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9916 = this;
return this__9916.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9950 = this;
return (new cljs.core.Cons(meta,this__9950.first,this__9950.rest));
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
var G__9973 = null;
var G__9973__9974 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9973__9975 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9973 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9973__9974.call(this,string,f);
case  3 :
return G__9973__9975.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9973;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9983 = null;
var G__9983__9984 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9983__9985 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9983 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9983__9984.call(this,string,k);
case  3 :
return G__9983__9985.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9983;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9994 = null;
var G__9994__9995 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9994__9996 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9994 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9994__9995.call(this,string,n);
case  3 :
return G__9994__9996.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9994;
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
var G__10009 = null;
var G__10009__10010 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10009__10011 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10009 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10009__10010.call(this,this$,coll);
case  3 :
return G__10009__10011.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10009;
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
var x__10016 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10016;
} else
{lazy_seq.x = x__10016.call(null);
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
var this__10071 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10072 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10074 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10076 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10076.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10079 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10081 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10082 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10085 = this;
return this__10085.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10107 = this;
return (new cljs.core.LazySeq(meta,this__10107.realized,this__10107.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10139 = cljs.core.array.call(null);

var s__10140 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10140)))
{ary__10139.push(cljs.core.first.call(null,s__10140));
{
var G__10147 = cljs.core.next.call(null,s__10140);
s__10140 = G__10147;
continue;
}
} else
{return ary__10139;
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
var G__10205 = cljs.core.next.call(null,s__10148);
var G__10206 = (i__10149 - 1);
var G__10207 = (sum__10150 + 1);
s__10148 = G__10205;
i__10149 = G__10206;
sum__10150 = G__10207;
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
var concat__10231 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10232 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10233 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10221 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10221))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10221),concat.call(null,cljs.core.rest.call(null,s__10221),y));
} else
{return y;
}
})));
});
var concat__10234 = (function() { 
var G__10238__delegate = function (x,y,zs){
var cat__10224 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10222 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10222))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10222),cat.call(null,cljs.core.rest.call(null,xys__10222),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10224.call(null,concat.call(null,x,y),zs);
};
var G__10238 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10238__delegate.call(this, x, y, zs);
};
G__10238.cljs$lang$maxFixedArity = 2;
G__10238.cljs$lang$applyTo = (function (arglist__10240){
var x = cljs.core.first(arglist__10240);
var y = cljs.core.first(cljs.core.next(arglist__10240));
var zs = cljs.core.rest(cljs.core.next(arglist__10240));
return G__10238__delegate.call(this, x, y, zs);
});
return G__10238;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10231.call(this);
case  1 :
return concat__10232.call(this,x);
case  2 :
return concat__10233.call(this,x,y);
default:
return concat__10234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10234.cljs$lang$applyTo;
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
var list_STAR___10254 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10255 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10256 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10257 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10258 = (function() { 
var G__10260__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10260 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10260__delegate.call(this, a, b, c, d, more);
};
G__10260.cljs$lang$maxFixedArity = 4;
G__10260.cljs$lang$applyTo = (function (arglist__10261){
var a = cljs.core.first(arglist__10261);
var b = cljs.core.first(cljs.core.next(arglist__10261));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10261)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10261))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10261))));
return G__10260__delegate.call(this, a, b, c, d, more);
});
return G__10260;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10254.call(this,a);
case  2 :
return list_STAR___10255.call(this,a,b);
case  3 :
return list_STAR___10256.call(this,a,b,c);
case  4 :
return list_STAR___10257.call(this,a,b,c,d);
default:
return list_STAR___10258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10258.cljs$lang$applyTo;
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
var apply__10281 = (function (f,args){
var fixed_arity__10262 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10262 + 1)) <= fixed_arity__10262)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10282 = (function (f,x,args){
var arglist__10264 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10265 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10264,fixed_arity__10265) <= fixed_arity__10265)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10264));
} else
{return f.cljs$lang$applyTo(arglist__10264);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10264));
}
});
var apply__10283 = (function (f,x,y,args){
var arglist__10268 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10269 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10268,fixed_arity__10269) <= fixed_arity__10269)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10268));
} else
{return f.cljs$lang$applyTo(arglist__10268);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10268));
}
});
var apply__10284 = (function (f,x,y,z,args){
var arglist__10275 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10276 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10275,fixed_arity__10276) <= fixed_arity__10276)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10275));
} else
{return f.cljs$lang$applyTo(arglist__10275);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10275));
}
});
var apply__10285 = (function() { 
var G__10293__delegate = function (f,a,b,c,d,args){
var arglist__10278 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10279 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10278,fixed_arity__10279) <= fixed_arity__10279)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10278));
} else
{return f.cljs$lang$applyTo(arglist__10278);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10278));
}
};
var G__10293 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10293__delegate.call(this, f, a, b, c, d, args);
};
G__10293.cljs$lang$maxFixedArity = 5;
G__10293.cljs$lang$applyTo = (function (arglist__10294){
var f = cljs.core.first(arglist__10294);
var a = cljs.core.first(cljs.core.next(arglist__10294));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10294)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10294))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10294)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10294)))));
return G__10293__delegate.call(this, f, a, b, c, d, args);
});
return G__10293;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10281.call(this,f,a);
case  3 :
return apply__10282.call(this,f,a,b);
case  4 :
return apply__10283.call(this,f,a,b,c);
case  5 :
return apply__10284.call(this,f,a,b,c,d);
default:
return apply__10285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10285.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10309){
var obj = cljs.core.first(arglist__10309);
var f = cljs.core.first(cljs.core.next(arglist__10309));
var args = cljs.core.rest(cljs.core.next(arglist__10309));
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
var not_EQ___10313 = (function (x){
return false;
});
var not_EQ___10314 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10315 = (function() { 
var G__10317__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10317 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10317__delegate.call(this, x, y, more);
};
G__10317.cljs$lang$maxFixedArity = 2;
G__10317.cljs$lang$applyTo = (function (arglist__10318){
var x = cljs.core.first(arglist__10318);
var y = cljs.core.first(cljs.core.next(arglist__10318));
var more = cljs.core.rest(cljs.core.next(arglist__10318));
return G__10317__delegate.call(this, x, y, more);
});
return G__10317;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10313.call(this,x);
case  2 :
return not_EQ___10314.call(this,x,y);
default:
return not_EQ___10315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10315.cljs$lang$applyTo;
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
{var or__3548__auto____10477 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10477))
{return or__3548__auto____10477;
} else
{{
var G__10581 = pred;
var G__10582 = cljs.core.next.call(null,coll);
pred = G__10581;
coll = G__10582;
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
var G__10583 = null;
var G__10583__10584 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10583__10585 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10583__10586 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10583__10587 = (function() { 
var G__10589__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10589 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10589__delegate.call(this, x, y, zs);
};
G__10589.cljs$lang$maxFixedArity = 2;
G__10589.cljs$lang$applyTo = (function (arglist__10590){
var x = cljs.core.first(arglist__10590);
var y = cljs.core.first(cljs.core.next(arglist__10590));
var zs = cljs.core.rest(cljs.core.next(arglist__10590));
return G__10589__delegate.call(this, x, y, zs);
});
return G__10589;
})()
;
G__10583 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10583__10584.call(this);
case  1 :
return G__10583__10585.call(this,x);
case  2 :
return G__10583__10586.call(this,x,y);
default:
return G__10583__10587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10583.cljs$lang$maxFixedArity = 2;
G__10583.cljs$lang$applyTo = G__10583__10587.cljs$lang$applyTo;
return G__10583;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10591__delegate = function (args){
return x;
};
var G__10591 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10591__delegate.call(this, args);
};
G__10591.cljs$lang$maxFixedArity = 0;
G__10591.cljs$lang$applyTo = (function (arglist__10592){
var args = cljs.core.seq( arglist__10592 );;
return G__10591__delegate.call(this, args);
});
return G__10591;
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
var comp__10629 = (function (){
return cljs.core.identity;
});
var comp__10630 = (function (f){
return f;
});
var comp__10631 = (function (f,g){
return (function() {
var G__10636 = null;
var G__10636__10637 = (function (){
return f.call(null,g.call(null));
});
var G__10636__10638 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10636__10639 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10636__10640 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10636__10641 = (function() { 
var G__10646__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10646__delegate.call(this, x, y, z, args);
};
G__10646.cljs$lang$maxFixedArity = 3;
G__10646.cljs$lang$applyTo = (function (arglist__10647){
var x = cljs.core.first(arglist__10647);
var y = cljs.core.first(cljs.core.next(arglist__10647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10647)));
return G__10646__delegate.call(this, x, y, z, args);
});
return G__10646;
})()
;
G__10636 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10636__10637.call(this);
case  1 :
return G__10636__10638.call(this,x);
case  2 :
return G__10636__10639.call(this,x,y);
case  3 :
return G__10636__10640.call(this,x,y,z);
default:
return G__10636__10641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10636.cljs$lang$maxFixedArity = 3;
G__10636.cljs$lang$applyTo = G__10636__10641.cljs$lang$applyTo;
return G__10636;
})()
});
var comp__10632 = (function (f,g,h){
return (function() {
var G__10650 = null;
var G__10650__10666 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10650__10668 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10650__10669 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10650__10670 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10650__10672 = (function() { 
var G__10698__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10698 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10698__delegate.call(this, x, y, z, args);
};
G__10698.cljs$lang$maxFixedArity = 3;
G__10698.cljs$lang$applyTo = (function (arglist__10701){
var x = cljs.core.first(arglist__10701);
var y = cljs.core.first(cljs.core.next(arglist__10701));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10701)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10701)));
return G__10698__delegate.call(this, x, y, z, args);
});
return G__10698;
})()
;
G__10650 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10650__10666.call(this);
case  1 :
return G__10650__10668.call(this,x);
case  2 :
return G__10650__10669.call(this,x,y);
case  3 :
return G__10650__10670.call(this,x,y,z);
default:
return G__10650__10672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10650.cljs$lang$maxFixedArity = 3;
G__10650.cljs$lang$applyTo = G__10650__10672.cljs$lang$applyTo;
return G__10650;
})()
});
var comp__10633 = (function() { 
var G__10708__delegate = function (f1,f2,f3,fs){
var fs__10617 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10714__delegate = function (args){
var ret__10619 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10617),args);
var fs__10622 = cljs.core.next.call(null,fs__10617);

while(true){
if(cljs.core.truth_(fs__10622))
{{
var G__10717 = cljs.core.first.call(null,fs__10622).call(null,ret__10619);
var G__10718 = cljs.core.next.call(null,fs__10622);
ret__10619 = G__10717;
fs__10622 = G__10718;
continue;
}
} else
{return ret__10619;
}
break;
}
};
var G__10714 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10714__delegate.call(this, args);
};
G__10714.cljs$lang$maxFixedArity = 0;
G__10714.cljs$lang$applyTo = (function (arglist__10721){
var args = cljs.core.seq( arglist__10721 );;
return G__10714__delegate.call(this, args);
});
return G__10714;
})()
;
};
var G__10708 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10708__delegate.call(this, f1, f2, f3, fs);
};
G__10708.cljs$lang$maxFixedArity = 3;
G__10708.cljs$lang$applyTo = (function (arglist__10723){
var f1 = cljs.core.first(arglist__10723);
var f2 = cljs.core.first(cljs.core.next(arglist__10723));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10723)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10723)));
return G__10708__delegate.call(this, f1, f2, f3, fs);
});
return G__10708;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10629.call(this);
case  1 :
return comp__10630.call(this,f1);
case  2 :
return comp__10631.call(this,f1,f2);
case  3 :
return comp__10632.call(this,f1,f2,f3);
default:
return comp__10633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10633.cljs$lang$applyTo;
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
var partial__10748 = (function (f,arg1){
return (function() { 
var G__10753__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10753 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10753__delegate.call(this, args);
};
G__10753.cljs$lang$maxFixedArity = 0;
G__10753.cljs$lang$applyTo = (function (arglist__10754){
var args = cljs.core.seq( arglist__10754 );;
return G__10753__delegate.call(this, args);
});
return G__10753;
})()
;
});
var partial__10749 = (function (f,arg1,arg2){
return (function() { 
var G__10755__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10755 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10755__delegate.call(this, args);
};
G__10755.cljs$lang$maxFixedArity = 0;
G__10755.cljs$lang$applyTo = (function (arglist__10756){
var args = cljs.core.seq( arglist__10756 );;
return G__10755__delegate.call(this, args);
});
return G__10755;
})()
;
});
var partial__10750 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10757__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10757 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10757__delegate.call(this, args);
};
G__10757.cljs$lang$maxFixedArity = 0;
G__10757.cljs$lang$applyTo = (function (arglist__10758){
var args = cljs.core.seq( arglist__10758 );;
return G__10757__delegate.call(this, args);
});
return G__10757;
})()
;
});
var partial__10751 = (function() { 
var G__10759__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10760__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10760 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10760__delegate.call(this, args);
};
G__10760.cljs$lang$maxFixedArity = 0;
G__10760.cljs$lang$applyTo = (function (arglist__10761){
var args = cljs.core.seq( arglist__10761 );;
return G__10760__delegate.call(this, args);
});
return G__10760;
})()
;
};
var G__10759 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10759__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10759.cljs$lang$maxFixedArity = 4;
G__10759.cljs$lang$applyTo = (function (arglist__10762){
var f = cljs.core.first(arglist__10762);
var arg1 = cljs.core.first(cljs.core.next(arglist__10762));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10762)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10762))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10762))));
return G__10759__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10759;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10748.call(this,f,arg1);
case  3 :
return partial__10749.call(this,f,arg1,arg2);
case  4 :
return partial__10750.call(this,f,arg1,arg2,arg3);
default:
return partial__10751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10751.cljs$lang$applyTo;
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
var fnil__10802 = (function (f,x){
return (function() {
var G__10806 = null;
var G__10806__10808 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10806__10809 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10806__10810 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10806__10811 = (function() { 
var G__10816__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10816 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10816__delegate.call(this, a, b, c, ds);
};
G__10816.cljs$lang$maxFixedArity = 3;
G__10816.cljs$lang$applyTo = (function (arglist__10818){
var a = cljs.core.first(arglist__10818);
var b = cljs.core.first(cljs.core.next(arglist__10818));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10818)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10818)));
return G__10816__delegate.call(this, a, b, c, ds);
});
return G__10816;
})()
;
G__10806 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10806__10808.call(this,a);
case  2 :
return G__10806__10809.call(this,a,b);
case  3 :
return G__10806__10810.call(this,a,b,c);
default:
return G__10806__10811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10806.cljs$lang$maxFixedArity = 3;
G__10806.cljs$lang$applyTo = G__10806__10811.cljs$lang$applyTo;
return G__10806;
})()
});
var fnil__10803 = (function (f,x,y){
return (function() {
var G__10819 = null;
var G__10819__10820 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10819__10821 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10819__10822 = (function() { 
var G__10826__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10826 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10826__delegate.call(this, a, b, c, ds);
};
G__10826.cljs$lang$maxFixedArity = 3;
G__10826.cljs$lang$applyTo = (function (arglist__10834){
var a = cljs.core.first(arglist__10834);
var b = cljs.core.first(cljs.core.next(arglist__10834));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10834)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10834)));
return G__10826__delegate.call(this, a, b, c, ds);
});
return G__10826;
})()
;
G__10819 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10819__10820.call(this,a,b);
case  3 :
return G__10819__10821.call(this,a,b,c);
default:
return G__10819__10822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10819.cljs$lang$maxFixedArity = 3;
G__10819.cljs$lang$applyTo = G__10819__10822.cljs$lang$applyTo;
return G__10819;
})()
});
var fnil__10804 = (function (f,x,y,z){
return (function() {
var G__10840 = null;
var G__10840__10841 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10840__10843 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10840__10844 = (function() { 
var G__10852__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10852 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10852__delegate.call(this, a, b, c, ds);
};
G__10852.cljs$lang$maxFixedArity = 3;
G__10852.cljs$lang$applyTo = (function (arglist__10862){
var a = cljs.core.first(arglist__10862);
var b = cljs.core.first(cljs.core.next(arglist__10862));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10862)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10862)));
return G__10852__delegate.call(this, a, b, c, ds);
});
return G__10852;
})()
;
G__10840 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10840__10841.call(this,a,b);
case  3 :
return G__10840__10843.call(this,a,b,c);
default:
return G__10840__10844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10840.cljs$lang$maxFixedArity = 3;
G__10840.cljs$lang$applyTo = G__10840__10844.cljs$lang$applyTo;
return G__10840;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10802.call(this,f,x);
case  3 :
return fnil__10803.call(this,f,x,y);
case  4 :
return fnil__10804.call(this,f,x,y,z);
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
var mapi__10887 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10874))
{var s__10875 = temp__3698__auto____10874;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10875)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10875)));
} else
{return null;
}
})));
});

return mapi__10887.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10892 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10892))
{var s__10897 = temp__3698__auto____10892;

var x__10899 = f.call(null,cljs.core.first.call(null,s__10897));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10899)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10897));
} else
{return cljs.core.cons.call(null,x__10899,keep.call(null,f,cljs.core.rest.call(null,s__10897)));
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
var keepi__10929 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10925))
{var s__10926 = temp__3698__auto____10925;

var x__10927 = f.call(null,idx,cljs.core.first.call(null,s__10926));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10927)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10926));
} else
{return cljs.core.cons.call(null,x__10927,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10926)));
}
} else
{return null;
}
})));
});

return keepi__10929.call(null,0,coll);
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
var every_pred__11051 = (function (p){
return (function() {
var ep1 = null;
var ep1__11056 = (function (){
return true;
});
var ep1__11057 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11058 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10955 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10955))
{return p.call(null,y);
} else
{return and__3546__auto____10955;
}
})());
});
var ep1__11059 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10958 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10958))
{var and__3546__auto____10961 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10961))
{return p.call(null,z);
} else
{return and__3546__auto____10961;
}
} else
{return and__3546__auto____10958;
}
})());
});
var ep1__11060 = (function() { 
var G__11062__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10963 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10963))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10963;
}
})());
};
var G__11062 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11062__delegate.call(this, x, y, z, args);
};
G__11062.cljs$lang$maxFixedArity = 3;
G__11062.cljs$lang$applyTo = (function (arglist__11063){
var x = cljs.core.first(arglist__11063);
var y = cljs.core.first(cljs.core.next(arglist__11063));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11063)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11063)));
return G__11062__delegate.call(this, x, y, z, args);
});
return G__11062;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11056.call(this);
case  1 :
return ep1__11057.call(this,x);
case  2 :
return ep1__11058.call(this,x,y);
case  3 :
return ep1__11059.call(this,x,y,z);
default:
return ep1__11060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11060.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11052 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11065 = (function (){
return true;
});
var ep2__11066 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10967 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10967))
{return p2.call(null,x);
} else
{return and__3546__auto____10967;
}
})());
});
var ep2__11067 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10970 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10970))
{var and__3546__auto____10974 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10974))
{var and__3546__auto____10975 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10975))
{return p2.call(null,y);
} else
{return and__3546__auto____10975;
}
} else
{return and__3546__auto____10974;
}
} else
{return and__3546__auto____10970;
}
})());
});
var ep2__11068 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10976 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10976))
{var and__3546__auto____10977 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10977))
{var and__3546__auto____10979 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10979))
{var and__3546__auto____10981 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10981))
{var and__3546__auto____10982 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10982))
{return p2.call(null,z);
} else
{return and__3546__auto____10982;
}
} else
{return and__3546__auto____10981;
}
} else
{return and__3546__auto____10979;
}
} else
{return and__3546__auto____10977;
}
} else
{return and__3546__auto____10976;
}
})());
});
var ep2__11069 = (function() { 
var G__11071__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10985 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10985))
{return cljs.core.every_QMARK_.call(null,(function (p1__10909_SHARP_){
var and__3546__auto____10987 = p1.call(null,p1__10909_SHARP_);

if(cljs.core.truth_(and__3546__auto____10987))
{return p2.call(null,p1__10909_SHARP_);
} else
{return and__3546__auto____10987;
}
}),args);
} else
{return and__3546__auto____10985;
}
})());
};
var G__11071 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11071__delegate.call(this, x, y, z, args);
};
G__11071.cljs$lang$maxFixedArity = 3;
G__11071.cljs$lang$applyTo = (function (arglist__11113){
var x = cljs.core.first(arglist__11113);
var y = cljs.core.first(cljs.core.next(arglist__11113));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11113)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11113)));
return G__11071__delegate.call(this, x, y, z, args);
});
return G__11071;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11065.call(this);
case  1 :
return ep2__11066.call(this,x);
case  2 :
return ep2__11067.call(this,x,y);
case  3 :
return ep2__11068.call(this,x,y,z);
default:
return ep2__11069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11069.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11053 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11117 = (function (){
return true;
});
var ep3__11118 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10989 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10989))
{var and__3546__auto____11020 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11020))
{return p3.call(null,x);
} else
{return and__3546__auto____11020;
}
} else
{return and__3546__auto____10989;
}
})());
});
var ep3__11119 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11021 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11021))
{var and__3546__auto____11022 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11022))
{var and__3546__auto____11023 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11023))
{var and__3546__auto____11024 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11024))
{var and__3546__auto____11025 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11025))
{return p3.call(null,y);
} else
{return and__3546__auto____11025;
}
} else
{return and__3546__auto____11024;
}
} else
{return and__3546__auto____11023;
}
} else
{return and__3546__auto____11022;
}
} else
{return and__3546__auto____11021;
}
})());
});
var ep3__11120 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11026 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11026))
{var and__3546__auto____11028 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11028))
{var and__3546__auto____11030 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11030))
{var and__3546__auto____11032 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11032))
{var and__3546__auto____11033 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11033))
{var and__3546__auto____11034 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11034))
{var and__3546__auto____11035 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11035))
{var and__3546__auto____11036 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11036))
{return p3.call(null,z);
} else
{return and__3546__auto____11036;
}
} else
{return and__3546__auto____11035;
}
} else
{return and__3546__auto____11034;
}
} else
{return and__3546__auto____11033;
}
} else
{return and__3546__auto____11032;
}
} else
{return and__3546__auto____11030;
}
} else
{return and__3546__auto____11028;
}
} else
{return and__3546__auto____11026;
}
})());
});
var ep3__11121 = (function() { 
var G__11325__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11037 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11037))
{return cljs.core.every_QMARK_.call(null,(function (p1__10911_SHARP_){
var and__3546__auto____11038 = p1.call(null,p1__10911_SHARP_);

if(cljs.core.truth_(and__3546__auto____11038))
{var and__3546__auto____11039 = p2.call(null,p1__10911_SHARP_);

if(cljs.core.truth_(and__3546__auto____11039))
{return p3.call(null,p1__10911_SHARP_);
} else
{return and__3546__auto____11039;
}
} else
{return and__3546__auto____11038;
}
}),args);
} else
{return and__3546__auto____11037;
}
})());
};
var G__11325 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11325__delegate.call(this, x, y, z, args);
};
G__11325.cljs$lang$maxFixedArity = 3;
G__11325.cljs$lang$applyTo = (function (arglist__11332){
var x = cljs.core.first(arglist__11332);
var y = cljs.core.first(cljs.core.next(arglist__11332));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11332)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11332)));
return G__11325__delegate.call(this, x, y, z, args);
});
return G__11325;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11117.call(this);
case  1 :
return ep3__11118.call(this,x);
case  2 :
return ep3__11119.call(this,x,y);
case  3 :
return ep3__11120.call(this,x,y,z);
default:
return ep3__11121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11121.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11054 = (function() { 
var G__11334__delegate = function (p1,p2,p3,ps){
var ps__11040 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11337 = (function (){
return true;
});
var epn__11338 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10913_SHARP_){
return p1__10913_SHARP_.call(null,x);
}),ps__11040);
});
var epn__11339 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10914_SHARP_){
var and__3546__auto____11047 = p1__10914_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11047))
{return p1__10914_SHARP_.call(null,y);
} else
{return and__3546__auto____11047;
}
}),ps__11040);
});
var epn__11340 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10915_SHARP_){
var and__3546__auto____11048 = p1__10915_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11048))
{var and__3546__auto____11049 = p1__10915_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11049))
{return p1__10915_SHARP_.call(null,z);
} else
{return and__3546__auto____11049;
}
} else
{return and__3546__auto____11048;
}
}),ps__11040);
});
var epn__11341 = (function() { 
var G__11356__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11050 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11050))
{return cljs.core.every_QMARK_.call(null,(function (p1__10916_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10916_SHARP_,args);
}),ps__11040);
} else
{return and__3546__auto____11050;
}
})());
};
var G__11356 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11356__delegate.call(this, x, y, z, args);
};
G__11356.cljs$lang$maxFixedArity = 3;
G__11356.cljs$lang$applyTo = (function (arglist__11362){
var x = cljs.core.first(arglist__11362);
var y = cljs.core.first(cljs.core.next(arglist__11362));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11362)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11362)));
return G__11356__delegate.call(this, x, y, z, args);
});
return G__11356;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11337.call(this);
case  1 :
return epn__11338.call(this,x);
case  2 :
return epn__11339.call(this,x,y);
case  3 :
return epn__11340.call(this,x,y,z);
default:
return epn__11341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11341.cljs$lang$applyTo;
return epn;
})()
};
var G__11334 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11334__delegate.call(this, p1, p2, p3, ps);
};
G__11334.cljs$lang$maxFixedArity = 3;
G__11334.cljs$lang$applyTo = (function (arglist__11368){
var p1 = cljs.core.first(arglist__11368);
var p2 = cljs.core.first(cljs.core.next(arglist__11368));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11368)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11368)));
return G__11334__delegate.call(this, p1, p2, p3, ps);
});
return G__11334;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11051.call(this,p1);
case  2 :
return every_pred__11052.call(this,p1,p2);
case  3 :
return every_pred__11053.call(this,p1,p2,p3);
default:
return every_pred__11054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11054.cljs$lang$applyTo;
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
var some_fn__11608 = (function (p){
return (function() {
var sp1 = null;
var sp1__11620 = (function (){
return null;
});
var sp1__11621 = (function (x){
return p.call(null,x);
});
var sp1__11622 = (function (x,y){
var or__3548__auto____11383 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11383))
{return or__3548__auto____11383;
} else
{return p.call(null,y);
}
});
var sp1__11623 = (function (x,y,z){
var or__3548__auto____11386 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11386))
{return or__3548__auto____11386;
} else
{var or__3548__auto____11388 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11388))
{return or__3548__auto____11388;
} else
{return p.call(null,z);
}
}
});
var sp1__11624 = (function() { 
var G__11627__delegate = function (x,y,z,args){
var or__3548__auto____11390 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11390))
{return or__3548__auto____11390;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11627 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11627__delegate.call(this, x, y, z, args);
};
G__11627.cljs$lang$maxFixedArity = 3;
G__11627.cljs$lang$applyTo = (function (arglist__11629){
var x = cljs.core.first(arglist__11629);
var y = cljs.core.first(cljs.core.next(arglist__11629));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11629)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11629)));
return G__11627__delegate.call(this, x, y, z, args);
});
return G__11627;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11620.call(this);
case  1 :
return sp1__11621.call(this,x);
case  2 :
return sp1__11622.call(this,x,y);
case  3 :
return sp1__11623.call(this,x,y,z);
default:
return sp1__11624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11624.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11609 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11631 = (function (){
return null;
});
var sp2__11633 = (function (x){
var or__3548__auto____11393 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11393))
{return or__3548__auto____11393;
} else
{return p2.call(null,x);
}
});
var sp2__11634 = (function (x,y){
var or__3548__auto____11396 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11396))
{return or__3548__auto____11396;
} else
{var or__3548__auto____11400 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11400))
{return or__3548__auto____11400;
} else
{var or__3548__auto____11404 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11404))
{return or__3548__auto____11404;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11635 = (function (x,y,z){
var or__3548__auto____11412 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11412))
{return or__3548__auto____11412;
} else
{var or__3548__auto____11413 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11413))
{return or__3548__auto____11413;
} else
{var or__3548__auto____11415 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11415))
{return or__3548__auto____11415;
} else
{var or__3548__auto____11416 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11416))
{return or__3548__auto____11416;
} else
{var or__3548__auto____11417 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11417))
{return or__3548__auto____11417;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11636 = (function() { 
var G__11646__delegate = function (x,y,z,args){
var or__3548__auto____11420 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11420))
{return or__3548__auto____11420;
} else
{return cljs.core.some.call(null,(function (p1__10938_SHARP_){
var or__3548__auto____11426 = p1.call(null,p1__10938_SHARP_);

if(cljs.core.truth_(or__3548__auto____11426))
{return or__3548__auto____11426;
} else
{return p2.call(null,p1__10938_SHARP_);
}
}),args);
}
};
var G__11646 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11646__delegate.call(this, x, y, z, args);
};
G__11646.cljs$lang$maxFixedArity = 3;
G__11646.cljs$lang$applyTo = (function (arglist__11649){
var x = cljs.core.first(arglist__11649);
var y = cljs.core.first(cljs.core.next(arglist__11649));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11649)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11649)));
return G__11646__delegate.call(this, x, y, z, args);
});
return G__11646;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11631.call(this);
case  1 :
return sp2__11633.call(this,x);
case  2 :
return sp2__11634.call(this,x,y);
case  3 :
return sp2__11635.call(this,x,y,z);
default:
return sp2__11636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11636.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11610 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11654 = (function (){
return null;
});
var sp3__11655 = (function (x){
var or__3548__auto____11431 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11431))
{return or__3548__auto____11431;
} else
{var or__3548__auto____11432 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11432))
{return or__3548__auto____11432;
} else
{return p3.call(null,x);
}
}
});
var sp3__11657 = (function (x,y){
var or__3548__auto____11435 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11435))
{return or__3548__auto____11435;
} else
{var or__3548__auto____11436 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11436))
{return or__3548__auto____11436;
} else
{var or__3548__auto____11437 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11437))
{return or__3548__auto____11437;
} else
{var or__3548__auto____11439 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11439))
{return or__3548__auto____11439;
} else
{var or__3548__auto____11441 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11441))
{return or__3548__auto____11441;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11658 = (function (x,y,z){
var or__3548__auto____11460 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11460))
{return or__3548__auto____11460;
} else
{var or__3548__auto____11461 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11461))
{return or__3548__auto____11461;
} else
{var or__3548__auto____11462 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11462))
{return or__3548__auto____11462;
} else
{var or__3548__auto____11466 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{var or__3548__auto____11467 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11467))
{return or__3548__auto____11467;
} else
{var or__3548__auto____11468 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11468))
{return or__3548__auto____11468;
} else
{var or__3548__auto____11469 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11469))
{return or__3548__auto____11469;
} else
{var or__3548__auto____11470 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11470))
{return or__3548__auto____11470;
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
var sp3__11659 = (function() { 
var G__11671__delegate = function (x,y,z,args){
var or__3548__auto____11472 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11472))
{return or__3548__auto____11472;
} else
{return cljs.core.some.call(null,(function (p1__10939_SHARP_){
var or__3548__auto____11475 = p1.call(null,p1__10939_SHARP_);

if(cljs.core.truth_(or__3548__auto____11475))
{return or__3548__auto____11475;
} else
{var or__3548__auto____11476 = p2.call(null,p1__10939_SHARP_);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
} else
{return p3.call(null,p1__10939_SHARP_);
}
}
}),args);
}
};
var G__11671 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11671__delegate.call(this, x, y, z, args);
};
G__11671.cljs$lang$maxFixedArity = 3;
G__11671.cljs$lang$applyTo = (function (arglist__11676){
var x = cljs.core.first(arglist__11676);
var y = cljs.core.first(cljs.core.next(arglist__11676));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11676)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11676)));
return G__11671__delegate.call(this, x, y, z, args);
});
return G__11671;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11654.call(this);
case  1 :
return sp3__11655.call(this,x);
case  2 :
return sp3__11657.call(this,x,y);
case  3 :
return sp3__11658.call(this,x,y,z);
default:
return sp3__11659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11659.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11611 = (function() { 
var G__11680__delegate = function (p1,p2,p3,ps){
var ps__11480 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11682 = (function (){
return null;
});
var spn__11684 = (function (x){
return cljs.core.some.call(null,(function (p1__10942_SHARP_){
return p1__10942_SHARP_.call(null,x);
}),ps__11480);
});
var spn__11685 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10943_SHARP_){
var or__3548__auto____11538 = p1__10943_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11538))
{return or__3548__auto____11538;
} else
{return p1__10943_SHARP_.call(null,y);
}
}),ps__11480);
});
var spn__11686 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10944_SHARP_){
var or__3548__auto____11601 = p1__10944_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11601))
{return or__3548__auto____11601;
} else
{var or__3548__auto____11602 = p1__10944_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11602))
{return or__3548__auto____11602;
} else
{return p1__10944_SHARP_.call(null,z);
}
}
}),ps__11480);
});
var spn__11687 = (function() { 
var G__11699__delegate = function (x,y,z,args){
var or__3548__auto____11603 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11603))
{return or__3548__auto____11603;
} else
{return cljs.core.some.call(null,(function (p1__10945_SHARP_){
return cljs.core.some.call(null,p1__10945_SHARP_,args);
}),ps__11480);
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
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11682.call(this);
case  1 :
return spn__11684.call(this,x);
case  2 :
return spn__11685.call(this,x,y);
case  3 :
return spn__11686.call(this,x,y,z);
default:
return spn__11687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11687.cljs$lang$applyTo;
return spn;
})()
};
var G__11680 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11680__delegate.call(this, p1, p2, p3, ps);
};
G__11680.cljs$lang$maxFixedArity = 3;
G__11680.cljs$lang$applyTo = (function (arglist__11703){
var p1 = cljs.core.first(arglist__11703);
var p2 = cljs.core.first(cljs.core.next(arglist__11703));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11703)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11703)));
return G__11680__delegate.call(this, p1, p2, p3, ps);
});
return G__11680;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11608.call(this,p1);
case  2 :
return some_fn__11609.call(this,p1,p2);
case  3 :
return some_fn__11610.call(this,p1,p2,p3);
default:
return some_fn__11611.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11611.cljs$lang$applyTo;
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
var map__11842 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11709 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11709))
{var s__11711 = temp__3698__auto____11709;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11711)),map.call(null,f,cljs.core.rest.call(null,s__11711)));
} else
{return null;
}
})));
});
var map__11843 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11715 = cljs.core.seq.call(null,c1);
var s2__11716 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11823 = s1__11715;

if(cljs.core.truth_(and__3546__auto____11823))
{return s2__11716;
} else
{return and__3546__auto____11823;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11715),cljs.core.first.call(null,s2__11716)),map.call(null,f,cljs.core.rest.call(null,s1__11715),cljs.core.rest.call(null,s2__11716)));
} else
{return null;
}
})));
});
var map__11844 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11826 = cljs.core.seq.call(null,c1);
var s2__11827 = cljs.core.seq.call(null,c2);
var s3__11828 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11829 = s1__11826;

if(cljs.core.truth_(and__3546__auto____11829))
{var and__3546__auto____11830 = s2__11827;

if(cljs.core.truth_(and__3546__auto____11830))
{return s3__11828;
} else
{return and__3546__auto____11830;
}
} else
{return and__3546__auto____11829;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11826),cljs.core.first.call(null,s2__11827),cljs.core.first.call(null,s3__11828)),map.call(null,f,cljs.core.rest.call(null,s1__11826),cljs.core.rest.call(null,s2__11827),cljs.core.rest.call(null,s3__11828)));
} else
{return null;
}
})));
});
var map__11845 = (function() { 
var G__11852__delegate = function (f,c1,c2,c3,colls){
var step__11837 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11833 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11833)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11833),step.call(null,map.call(null,cljs.core.rest,ss__11833)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11380_SHARP_){
return cljs.core.apply.call(null,f,p1__11380_SHARP_);
}),step__11837.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11852 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11852__delegate.call(this, f, c1, c2, c3, colls);
};
G__11852.cljs$lang$maxFixedArity = 4;
G__11852.cljs$lang$applyTo = (function (arglist__11853){
var f = cljs.core.first(arglist__11853);
var c1 = cljs.core.first(cljs.core.next(arglist__11853));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11853)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11853))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11853))));
return G__11852__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11852;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11842.call(this,f,c1);
case  3 :
return map__11843.call(this,f,c1,c2);
case  4 :
return map__11844.call(this,f,c1,c2,c3);
default:
return map__11845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11845.cljs$lang$applyTo;
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
{var temp__3698__auto____11856 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11856))
{var s__11857 = temp__3698__auto____11856;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11857),take.call(null,(n - 1),cljs.core.rest.call(null,s__11857)));
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
var step__11866 = (function (n,coll){
while(true){
var s__11864 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11865 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11865))
{return s__11864;
} else
{return and__3546__auto____11865;
}
})()))
{{
var G__11907 = (n - 1);
var G__11939 = cljs.core.rest.call(null,s__11864);
n = G__11907;
coll = G__11939;
continue;
}
} else
{return s__11864;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11866.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11944 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11945 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11944.call(this,n);
case  2 :
return drop_last__11945.call(this,n,s);
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
var s__11951 = cljs.core.seq.call(null,coll);
var lead__11952 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11952))
{{
var G__11960 = cljs.core.next.call(null,s__11951);
var G__11961 = cljs.core.next.call(null,lead__11952);
s__11951 = G__11960;
lead__11952 = G__11961;
continue;
}
} else
{return s__11951;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11968 = (function (pred,coll){
while(true){
var s__11962 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11964 = s__11962;

if(cljs.core.truth_(and__3546__auto____11964))
{return pred.call(null,cljs.core.first.call(null,s__11962));
} else
{return and__3546__auto____11964;
}
})()))
{{
var G__11974 = pred;
var G__11975 = cljs.core.rest.call(null,s__11962);
pred = G__11974;
coll = G__11975;
continue;
}
} else
{return s__11962;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11968.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11977 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11977))
{var s__11978 = temp__3698__auto____11977;

return cljs.core.concat.call(null,s__11978,cycle.call(null,s__11978));
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
var repeat__11983 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11984 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11983.call(this,n);
case  2 :
return repeat__11984.call(this,n,x);
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
var repeatedly__11993 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11994 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11993.call(this,n);
case  2 :
return repeatedly__11994.call(this,n,f);
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
var interleave__12017 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12004 = cljs.core.seq.call(null,c1);
var s2__12005 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12007 = s1__12004;

if(cljs.core.truth_(and__3546__auto____12007))
{return s2__12005;
} else
{return and__3546__auto____12007;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12004),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12005),interleave.call(null,cljs.core.rest.call(null,s1__12004),cljs.core.rest.call(null,s2__12005))));
} else
{return null;
}
})));
});
var interleave__12018 = (function() { 
var G__12025__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12013 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12013)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12013),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12013)));
} else
{return null;
}
})));
};
var G__12025 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12025__delegate.call(this, c1, c2, colls);
};
G__12025.cljs$lang$maxFixedArity = 2;
G__12025.cljs$lang$applyTo = (function (arglist__12029){
var c1 = cljs.core.first(arglist__12029);
var c2 = cljs.core.first(cljs.core.next(arglist__12029));
var colls = cljs.core.rest(cljs.core.next(arglist__12029));
return G__12025__delegate.call(this, c1, c2, colls);
});
return G__12025;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12017.call(this,c1,c2);
default:
return interleave__12018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12018.cljs$lang$applyTo;
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
var cat__12036 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12034 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12034))
{var coll__12035 = temp__3695__auto____12034;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12035),cat.call(null,cljs.core.rest.call(null,coll__12035),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12036.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12045 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12046 = (function() { 
var G__12049__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12049 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12049__delegate.call(this, f, coll, colls);
};
G__12049.cljs$lang$maxFixedArity = 2;
G__12049.cljs$lang$applyTo = (function (arglist__12051){
var f = cljs.core.first(arglist__12051);
var coll = cljs.core.first(cljs.core.next(arglist__12051));
var colls = cljs.core.rest(cljs.core.next(arglist__12051));
return G__12049__delegate.call(this, f, coll, colls);
});
return G__12049;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12045.call(this,f,coll);
default:
return mapcat__12046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12046.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12055))
{var s__12060 = temp__3698__auto____12055;

var f__12062 = cljs.core.first.call(null,s__12060);
var r__12063 = cljs.core.rest.call(null,s__12060);

if(cljs.core.truth_(pred.call(null,f__12062)))
{return cljs.core.cons.call(null,f__12062,filter.call(null,pred,r__12063));
} else
{return filter.call(null,pred,r__12063);
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
var walk__12075 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12075.call(null,root);
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
var partition__12196 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12197 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12186 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12186))
{var s__12188 = temp__3698__auto____12186;

var p__12191 = cljs.core.take.call(null,n,s__12188);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12191))))
{return cljs.core.cons.call(null,p__12191,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12188)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12198 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12193 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12193))
{var s__12194 = temp__3698__auto____12193;

var p__12195 = cljs.core.take.call(null,n,s__12194);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12195))))
{return cljs.core.cons.call(null,p__12195,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12194)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12195,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12196.call(this,n,step);
case  3 :
return partition__12197.call(this,n,step,pad);
case  4 :
return partition__12198.call(this,n,step,pad,coll);
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
var get_in__12291 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12292 = (function (m,ks,not_found){
var sentinel__12208 = cljs.core.lookup_sentinel;
var m__12209 = m;
var ks__12211 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12211))
{var m__12212 = cljs.core.get.call(null,m__12209,cljs.core.first.call(null,ks__12211),sentinel__12208);

if(cljs.core.truth_((sentinel__12208 === m__12212)))
{return not_found;
} else
{{
var G__12295 = sentinel__12208;
var G__12296 = m__12212;
var G__12297 = cljs.core.next.call(null,ks__12211);
sentinel__12208 = G__12295;
m__12209 = G__12296;
ks__12211 = G__12297;
continue;
}
}
} else
{return m__12209;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12291.call(this,m,ks);
case  3 :
return get_in__12292.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12302,v){
var vec__12303__12304 = p__12302;
var k__12306 = cljs.core.nth.call(null,vec__12303__12304,0,null);
var ks__12307 = cljs.core.nthnext.call(null,vec__12303__12304,1);

if(cljs.core.truth_(ks__12307))
{return cljs.core.assoc.call(null,m,k__12306,assoc_in.call(null,cljs.core.get.call(null,m,k__12306),ks__12307,v));
} else
{return cljs.core.assoc.call(null,m,k__12306,v);
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
var update_in__delegate = function (m,p__12320,f,args){
var vec__12322__12323 = p__12320;
var k__12324 = cljs.core.nth.call(null,vec__12322__12323,0,null);
var ks__12325 = cljs.core.nthnext.call(null,vec__12322__12323,1);

if(cljs.core.truth_(ks__12325))
{return cljs.core.assoc.call(null,m,k__12324,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12324),ks__12325,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12324,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12324),args));
}
};
var update_in = function (m,p__12320,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12320, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12332){
var m = cljs.core.first(arglist__12332);
var p__12320 = cljs.core.first(cljs.core.next(arglist__12332));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12332)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12332)));
return update_in__delegate.call(this, m, p__12320, f, args);
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
var this__12341 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12459 = null;
var G__12459__12460 = (function (coll,k){
var this__12342 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12459__12461 = (function (coll,k,not_found){
var this__12347 = this;
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
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12348 = this;
var new_array__12366 = cljs.core.aclone.call(null,this__12348.array);

(new_array__12366[k] = v);
return (new cljs.core.Vector(this__12348.meta,new_array__12366));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12471 = null;
var G__12471__12472 = (function (coll,k){
var this__12368 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12471__12473 = (function (coll,k,not_found){
var this__12370 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12471 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12471__12472.call(this,coll,k);
case  3 :
return G__12471__12473.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12471;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12374 = this;
var new_array__12375 = cljs.core.aclone.call(null,this__12374.array);

new_array__12375.push(o);
return (new cljs.core.Vector(this__12374.meta,new_array__12375));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12482 = null;
var G__12482__12483 = (function (v,f){
var this__12378 = this;
return cljs.core.ci_reduce.call(null,this__12378.array,f);
});
var G__12482__12484 = (function (v,f,start){
var this__12380 = this;
return cljs.core.ci_reduce.call(null,this__12380.array,f,start);
});
G__12482 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12482__12483.call(this,v,f);
case  3 :
return G__12482__12484.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12482;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12382 = this;
if(cljs.core.truth_((this__12382.array.length > 0)))
{var vector_seq__12389 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12382.array.length)))
{return cljs.core.cons.call(null,(this__12382.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12389.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12425 = this;
return this__12425.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12426 = this;
var count__12432 = this__12426.array.length;

if(cljs.core.truth_((count__12432 > 0)))
{return (this__12426.array[(count__12432 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12435 = this;
if(cljs.core.truth_((this__12435.array.length > 0)))
{var new_array__12438 = cljs.core.aclone.call(null,this__12435.array);

new_array__12438.pop();
return (new cljs.core.Vector(this__12435.meta,new_array__12438));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12439 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12440 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12441 = this;
return (new cljs.core.Vector(meta,this__12441.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12442 = this;
return this__12442.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12512 = null;
var G__12512__12513 = (function (coll,n){
var this__12443 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12445 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12445))
{return (n < this__12443.array.length);
} else
{return and__3546__auto____12445;
}
})()))
{return (this__12443.array[n]);
} else
{return null;
}
});
var G__12512__12514 = (function (coll,n,not_found){
var this__12447 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12450 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12450))
{return (n < this__12447.array.length);
} else
{return and__3546__auto____12450;
}
})()))
{return (this__12447.array[n]);
} else
{return not_found;
}
});
G__12512 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12512__12513.call(this,coll,n);
case  3 :
return G__12512__12514.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12512;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12456 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12456.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12535){
var args = cljs.core.seq( arglist__12535 );;
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
var this__12562 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12640 = null;
var G__12640__12641 = (function (coll,k){
var this__12565 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12640__12642 = (function (coll,k,not_found){
var this__12571 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12640 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12640__12641.call(this,coll,k);
case  3 :
return G__12640__12642.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12640;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12574 = this;
var v_pos__12577 = (this__12574.start + key);

return (new cljs.core.Subvec(this__12574.meta,cljs.core._assoc.call(null,this__12574.v,v_pos__12577,val),this__12574.start,((this__12574.end > (v_pos__12577 + 1)) ? this__12574.end : (v_pos__12577 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12652 = null;
var G__12652__12653 = (function (coll,k){
var this__12585 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12652__12654 = (function (coll,k,not_found){
var this__12587 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12652 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12652__12653.call(this,coll,k);
case  3 :
return G__12652__12654.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12652;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12589 = this;
return (new cljs.core.Subvec(this__12589.meta,cljs.core._assoc_n.call(null,this__12589.v,this__12589.end,o),this__12589.start,(this__12589.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12676 = null;
var G__12676__12677 = (function (coll,f){
var this__12590 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12676__12678 = (function (coll,f,start){
var this__12592 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12676 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12676__12677.call(this,coll,f);
case  3 :
return G__12676__12678.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12676;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12593 = this;
var subvec_seq__12610 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12593.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12593.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12610.call(null,this__12593.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12613 = this;
return (this__12613.end - this__12613.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12614 = this;
return cljs.core._nth.call(null,this__12614.v,(this__12614.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12617 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12617.start,this__12617.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12617.meta,this__12617.v,this__12617.start,(this__12617.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12625 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12628 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12630 = this;
return (new cljs.core.Subvec(meta,this__12630.v,this__12630.start,this__12630.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12631 = this;
return this__12631.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12690 = null;
var G__12690__12691 = (function (coll,n){
var this__12632 = this;
return cljs.core._nth.call(null,this__12632.v,(this__12632.start + n));
});
var G__12690__12692 = (function (coll,n,not_found){
var this__12633 = this;
return cljs.core._nth.call(null,this__12633.v,(this__12633.start + n),not_found);
});
G__12690 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12690__12691.call(this,coll,n);
case  3 :
return G__12690__12692.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12690;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12634 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12634.meta);
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
var subvec__12704 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12705 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12704.call(this,v,start);
case  3 :
return subvec__12705.call(this,v,start,end);
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
var this__12719 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12723 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12724 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12727 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12727.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12730 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12732 = this;
return cljs.core._first.call(null,this__12732.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12733 = this;
var temp__3695__auto____12735 = cljs.core.next.call(null,this__12733.front);

if(cljs.core.truth_(temp__3695__auto____12735))
{var f1__12737 = temp__3695__auto____12735;

return (new cljs.core.PersistentQueueSeq(this__12733.meta,f1__12737,this__12733.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12733.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12733.meta,this__12733.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12739 = this;
return this__12739.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12741 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12741.front,this__12741.rear));
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
var this__12767 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12770 = this;
if(cljs.core.truth_(this__12770.front))
{return (new cljs.core.PersistentQueue(this__12770.meta,(this__12770.count + 1),this__12770.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12774 = this__12770.rear;

if(cljs.core.truth_(or__3548__auto____12774))
{return or__3548__auto____12774;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12770.meta,(this__12770.count + 1),cljs.core.conj.call(null,this__12770.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12778 = this;
var rear__12782 = cljs.core.seq.call(null,this__12778.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12784 = this__12778.front;

if(cljs.core.truth_(or__3548__auto____12784))
{return or__3548__auto____12784;
} else
{return rear__12782;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12778.front,cljs.core.seq.call(null,rear__12782)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12786 = this;
return this__12786.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12788 = this;
return cljs.core._first.call(null,this__12788.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12790 = this;
if(cljs.core.truth_(this__12790.front))
{var temp__3695__auto____12791 = cljs.core.next.call(null,this__12790.front);

if(cljs.core.truth_(temp__3695__auto____12791))
{var f1__12792 = temp__3695__auto____12791;

return (new cljs.core.PersistentQueue(this__12790.meta,(this__12790.count - 1),f1__12792,this__12790.rear));
} else
{return (new cljs.core.PersistentQueue(this__12790.meta,(this__12790.count - 1),cljs.core.seq.call(null,this__12790.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12798 = this;
return cljs.core.first.call(null,this__12798.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12799 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12803 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12804 = this;
return (new cljs.core.PersistentQueue(meta,this__12804.count,this__12804.front,this__12804.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12805 = this;
return this__12805.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12807 = this;
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
var this__12836 = this;
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
var len__12852 = array.length;

var i__12853 = 0;

while(true){
if(cljs.core.truth_((i__12853 < len__12852)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12853]))))
{return i__12853;
} else
{{
var G__12875 = (i__12853 + incr);
i__12853 = G__12875;
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
var obj_map_contains_key_QMARK___12879 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12880 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12877 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12877))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12877;
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
return obj_map_contains_key_QMARK___12879.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12880.call(this,k,strobj,true_val,false_val);
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
var this__12912 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13036 = null;
var G__13036__13037 = (function (coll,k){
var this__12917 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13036__13038 = (function (coll,k,not_found){
var this__12978 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12978.strobj,(this__12978.strobj[k]),not_found);
});
G__13036 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13036__13037.call(this,coll,k);
case  3 :
return G__13036__13038.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13036;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12981 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12983 = goog.object.clone.call(null,this__12981.strobj);
var overwrite_QMARK___12984 = new_strobj__12983.hasOwnProperty(k);

(new_strobj__12983[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12984))
{return (new cljs.core.ObjMap(this__12981.meta,this__12981.keys,new_strobj__12983));
} else
{var new_keys__12989 = cljs.core.aclone.call(null,this__12981.keys);

new_keys__12989.push(k);
return (new cljs.core.ObjMap(this__12981.meta,new_keys__12989,new_strobj__12983));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12981.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12997 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12997.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13044 = null;
var G__13044__13045 = (function (coll,k){
var this__13002 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13044__13046 = (function (coll,k,not_found){
var this__13004 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13044 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13044__13045.call(this,coll,k);
case  3 :
return G__13044__13046.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13044;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13008 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13010 = this;
if(cljs.core.truth_((this__13010.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12886_SHARP_){
return cljs.core.vector.call(null,p1__12886_SHARP_,(this__13010.strobj[p1__12886_SHARP_]));
}),this__13010.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13014 = this;
return this__13014.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13017 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13020 = this;
return (new cljs.core.ObjMap(meta,this__13020.keys,this__13020.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13026 = this;
return this__13026.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13027 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13027.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13028 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13031 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13031))
{return this__13028.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13031;
}
})()))
{var new_keys__13034 = cljs.core.aclone.call(null,this__13028.keys);
var new_strobj__13035 = goog.object.clone.call(null,this__13028.strobj);

new_keys__13034.splice(cljs.core.scan_array.call(null,1,k,new_keys__13034),1);
cljs.core.js_delete.call(null,new_strobj__13035,k);
return (new cljs.core.ObjMap(this__13028.meta,new_keys__13034,new_strobj__13035));
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
var this__13124 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13286 = null;
var G__13286__13287 = (function (coll,k){
var this__13127 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13286__13289 = (function (coll,k,not_found){
var this__13129 = this;
var bucket__13134 = (this__13129.hashobj[cljs.core.hash.call(null,k)]);
var i__13136 = (cljs.core.truth_(bucket__13134)?cljs.core.scan_array.call(null,2,k,bucket__13134):null);

if(cljs.core.truth_(i__13136))
{return (bucket__13134[(i__13136 + 1)]);
} else
{return not_found;
}
});
G__13286 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13286__13287.call(this,coll,k);
case  3 :
return G__13286__13289.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13286;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13137 = this;
var h__13138 = cljs.core.hash.call(null,k);
var bucket__13140 = (this__13137.hashobj[h__13138]);

if(cljs.core.truth_(bucket__13140))
{var new_bucket__13169 = cljs.core.aclone.call(null,bucket__13140);
var new_hashobj__13171 = goog.object.clone.call(null,this__13137.hashobj);

(new_hashobj__13171[h__13138] = new_bucket__13169);
var temp__3695__auto____13173 = cljs.core.scan_array.call(null,2,k,new_bucket__13169);

if(cljs.core.truth_(temp__3695__auto____13173))
{var i__13174 = temp__3695__auto____13173;

(new_bucket__13169[(i__13174 + 1)] = v);
return (new cljs.core.HashMap(this__13137.meta,this__13137.count,new_hashobj__13171));
} else
{new_bucket__13169.push(k,v);
return (new cljs.core.HashMap(this__13137.meta,(this__13137.count + 1),new_hashobj__13171));
}
} else
{var new_hashobj__13177 = goog.object.clone.call(null,this__13137.hashobj);

(new_hashobj__13177[h__13138] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13137.meta,(this__13137.count + 1),new_hashobj__13177));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13184 = this;
var bucket__13185 = (this__13184.hashobj[cljs.core.hash.call(null,k)]);
var i__13186 = (cljs.core.truth_(bucket__13185)?cljs.core.scan_array.call(null,2,k,bucket__13185):null);

if(cljs.core.truth_(i__13186))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13303 = null;
var G__13303__13304 = (function (coll,k){
var this__13192 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13303__13305 = (function (coll,k,not_found){
var this__13193 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13303 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13303__13304.call(this,coll,k);
case  3 :
return G__13303__13305.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13303;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13257 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13259 = this;
if(cljs.core.truth_((this__13259.count > 0)))
{var hashes__13263 = cljs.core.js_keys.call(null,this__13259.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13100_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13259.hashobj[p1__13100_SHARP_])));
}),hashes__13263);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13264 = this;
return this__13264.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13265 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13269 = this;
return (new cljs.core.HashMap(meta,this__13269.count,this__13269.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13270 = this;
return this__13270.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13271 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13271.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13272 = this;
var h__13275 = cljs.core.hash.call(null,k);
var bucket__13276 = (this__13272.hashobj[h__13275]);
var i__13277 = (cljs.core.truth_(bucket__13276)?cljs.core.scan_array.call(null,2,k,bucket__13276):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13277)))
{return coll;
} else
{var new_hashobj__13278 = goog.object.clone.call(null,this__13272.hashobj);

if(cljs.core.truth_((3 > bucket__13276.length)))
{cljs.core.js_delete.call(null,new_hashobj__13278,h__13275);
} else
{var new_bucket__13279 = cljs.core.aclone.call(null,bucket__13276);

new_bucket__13279.splice(i__13277,2);
(new_hashobj__13278[h__13275] = new_bucket__13279);
}
return (new cljs.core.HashMap(this__13272.meta,(this__13272.count - 1),new_hashobj__13278));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13325 = ks.length;

var i__13326 = 0;
var out__13327 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13326 < len__13325)))
{{
var G__13328 = (i__13326 + 1);
var G__13329 = cljs.core.assoc.call(null,out__13327,(ks[i__13326]),(vs[i__13326]));
i__13326 = G__13328;
out__13327 = G__13329;
continue;
}
} else
{return out__13327;
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
var in$__13335 = cljs.core.seq.call(null,keyvals);
var out__13336 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13335))
{{
var G__13337 = cljs.core.nnext.call(null,in$__13335);
var G__13338 = cljs.core.assoc.call(null,out__13336,cljs.core.first.call(null,in$__13335),cljs.core.second.call(null,in$__13335));
in$__13335 = G__13337;
out__13336 = G__13338;
continue;
}
} else
{return out__13336;
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
hash_map.cljs$lang$applyTo = (function (arglist__13339){
var keyvals = cljs.core.seq( arglist__13339 );;
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
{return cljs.core.reduce.call(null,(function (p1__13345_SHARP_,p2__13346_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13349 = p1__13345_SHARP_;

if(cljs.core.truth_(or__3548__auto____13349))
{return or__3548__auto____13349;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13346_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13360){
var maps = cljs.core.seq( arglist__13360 );;
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
{var merge_entry__13372 = (function (m,e){
var k__13369 = cljs.core.first.call(null,e);
var v__13370 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13369)))
{return cljs.core.assoc.call(null,m,k__13369,f.call(null,cljs.core.get.call(null,m,k__13369),v__13370));
} else
{return cljs.core.assoc.call(null,m,k__13369,v__13370);
}
});
var merge2__13380 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13372,(function (){var or__3548__auto____13374 = m1;

if(cljs.core.truth_(or__3548__auto____13374))
{return or__3548__auto____13374;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13380,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13388){
var f = cljs.core.first(arglist__13388);
var maps = cljs.core.rest(arglist__13388);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13398 = cljs.core.ObjMap.fromObject([],{});
var keys__13399 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13399))
{var key__13400 = cljs.core.first.call(null,keys__13399);
var entry__13401 = cljs.core.get.call(null,map,key__13400,"﷐'user/not-found");

{
var G__13434 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13401,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13398,key__13400,entry__13401):ret__13398);
var G__13435 = cljs.core.next.call(null,keys__13399);
ret__13398 = G__13434;
keys__13399 = G__13435;
continue;
}
} else
{return ret__13398;
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
var this__13441 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13464 = null;
var G__13464__13465 = (function (coll,v){
var this__13442 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13464__13466 = (function (coll,v,not_found){
var this__13444 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13444.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13464 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13464__13465.call(this,coll,v);
case  3 :
return G__13464__13466.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13464;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13468 = null;
var G__13468__13469 = (function (coll,k){
var this__13448 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13468__13470 = (function (coll,k,not_found){
var this__13449 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13468 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13468__13469.call(this,coll,k);
case  3 :
return G__13468__13470.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13468;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13454 = this;
return (new cljs.core.Set(this__13454.meta,cljs.core.assoc.call(null,this__13454.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13455 = this;
return cljs.core.keys.call(null,this__13455.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13456 = this;
return (new cljs.core.Set(this__13456.meta,cljs.core.dissoc.call(null,this__13456.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13457 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13458 = this;
var and__3546__auto____13459 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13459))
{var and__3546__auto____13460 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13460))
{return cljs.core.every_QMARK_.call(null,(function (p1__13393_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13393_SHARP_);
}),other);
} else
{return and__3546__auto____13460;
}
} else
{return and__3546__auto____13459;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13461 = this;
return (new cljs.core.Set(meta,this__13461.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13462 = this;
return this__13462.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13463 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13463.meta);
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
var G__13497 = cljs.core.rest.call(null,in$__13493);
var G__13498 = cljs.core.conj.call(null,out__13494,cljs.core.first.call(null,in$__13493));
in$__13493 = G__13497;
out__13494 = G__13498;
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
{var n__13499 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13501 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13501))
{var e__13502 = temp__3695__auto____13501;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13502));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13499,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13491_SHARP_){
var temp__3695__auto____13509 = cljs.core.find.call(null,smap,p1__13491_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13509))
{var e__13510 = temp__3695__auto____13509;

return cljs.core.second.call(null,e__13510);
} else
{return p1__13491_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13527 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13514,seen){
while(true){
var vec__13515__13516 = p__13514;
var f__13519 = cljs.core.nth.call(null,vec__13515__13516,0,null);
var xs__13520 = vec__13515__13516;

var temp__3698__auto____13522 = cljs.core.seq.call(null,xs__13520);

if(cljs.core.truth_(temp__3698__auto____13522))
{var s__13523 = temp__3698__auto____13522;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13519)))
{{
var G__13531 = cljs.core.rest.call(null,s__13523);
var G__13532 = seen;
p__13514 = G__13531;
seen = G__13532;
continue;
}
} else
{return cljs.core.cons.call(null,f__13519,step.call(null,cljs.core.rest.call(null,s__13523),cljs.core.conj.call(null,seen,f__13519)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13527.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13534 = cljs.core.Vector.fromArray([]);
var s__13535 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13535)))
{{
var G__13671 = cljs.core.conj.call(null,ret__13534,cljs.core.first.call(null,s__13535));
var G__13672 = cljs.core.next.call(null,s__13535);
ret__13534 = G__13671;
s__13535 = G__13672;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13534);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13675 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13675))
{return or__3548__auto____13675;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13676 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13676 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13676 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13687 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13687))
{return or__3548__auto____13687;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13691 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13691 > -1)))
{return cljs.core.subs.call(null,x,2,i__13691);
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
var map__13708 = cljs.core.ObjMap.fromObject([],{});
var ks__13710 = cljs.core.seq.call(null,keys);
var vs__13712 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13716 = ks__13710;

if(cljs.core.truth_(and__3546__auto____13716))
{return vs__13712;
} else
{return and__3546__auto____13716;
}
})()))
{{
var G__13722 = cljs.core.assoc.call(null,map__13708,cljs.core.first.call(null,ks__13710),cljs.core.first.call(null,vs__13712));
var G__13723 = cljs.core.next.call(null,ks__13710);
var G__13725 = cljs.core.next.call(null,vs__13712);
map__13708 = G__13722;
ks__13710 = G__13723;
vs__13712 = G__13725;
continue;
}
} else
{return map__13708;
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
var max_key__13736 = (function (k,x){
return x;
});
var max_key__13737 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13738 = (function() { 
var G__13741__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13704_SHARP_,p2__13705_SHARP_){
return max_key.call(null,k,p1__13704_SHARP_,p2__13705_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13741 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13741__delegate.call(this, k, x, y, more);
};
G__13741.cljs$lang$maxFixedArity = 3;
G__13741.cljs$lang$applyTo = (function (arglist__13747){
var k = cljs.core.first(arglist__13747);
var x = cljs.core.first(cljs.core.next(arglist__13747));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13747)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13747)));
return G__13741__delegate.call(this, k, x, y, more);
});
return G__13741;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13736.call(this,k,x);
case  3 :
return max_key__13737.call(this,k,x,y);
default:
return max_key__13738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13738.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13753 = (function (k,x){
return x;
});
var min_key__13754 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13755 = (function() { 
var G__13757__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13728_SHARP_,p2__13730_SHARP_){
return min_key.call(null,k,p1__13728_SHARP_,p2__13730_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13757 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13757__delegate.call(this, k, x, y, more);
};
G__13757.cljs$lang$maxFixedArity = 3;
G__13757.cljs$lang$applyTo = (function (arglist__13764){
var k = cljs.core.first(arglist__13764);
var x = cljs.core.first(cljs.core.next(arglist__13764));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13764)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13764)));
return G__13757__delegate.call(this, k, x, y, more);
});
return G__13757;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13753.call(this,k,x);
case  3 :
return min_key__13754.call(this,k,x,y);
default:
return min_key__13755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13755.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13771 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13772 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13769 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13769))
{var s__13770 = temp__3698__auto____13769;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13770),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13770)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13771.call(this,n,step);
case  3 :
return partition_all__13772.call(this,n,step,coll);
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
var temp__3698__auto____13784 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13784))
{var s__13785 = temp__3698__auto____13784;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13785))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13785),take_while.call(null,pred,cljs.core.rest.call(null,s__13785)));
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
var this__13835 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13892 = null;
var G__13892__13893 = (function (rng,f){
var this__13837 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13892__13894 = (function (rng,f,s){
var this__13839 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13892 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13892__13893.call(this,rng,f);
case  3 :
return G__13892__13894.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13892;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13846 = this;
var comp__13848 = (cljs.core.truth_((this__13846.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13848.call(null,this__13846.start,this__13846.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13851 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13851.end - this__13851.start) / this__13851.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13854 = this;
return this__13854.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13862 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13862.meta,(this__13862.start + this__13862.step),this__13862.end,this__13862.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13867 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13869 = this;
return (new cljs.core.Range(meta,this__13869.start,this__13869.end,this__13869.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13872 = this;
return this__13872.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13903 = null;
var G__13903__13904 = (function (rng,n){
var this__13875 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13875.start + (n * this__13875.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13878 = (this__13875.start > this__13875.end);

if(cljs.core.truth_(and__3546__auto____13878))
{return cljs.core._EQ_.call(null,this__13875.step,0);
} else
{return and__3546__auto____13878;
}
})()))
{return this__13875.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13903__13905 = (function (rng,n,not_found){
var this__13880 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13880.start + (n * this__13880.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13881 = (this__13880.start > this__13880.end);

if(cljs.core.truth_(and__3546__auto____13881))
{return cljs.core._EQ_.call(null,this__13880.step,0);
} else
{return and__3546__auto____13881;
}
})()))
{return this__13880.start;
} else
{return not_found;
}
}
});
G__13903 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13903__13904.call(this,rng,n);
case  3 :
return G__13903__13905.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13903;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13882 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13882.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13926 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13927 = (function (end){
return range.call(null,0,end,1);
});
var range__13928 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13929 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13926.call(this);
case  1 :
return range__13927.call(this,start);
case  2 :
return range__13928.call(this,start,end);
case  3 :
return range__13929.call(this,start,end,step);
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
var temp__3698__auto____13948 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13948))
{var s__13949 = temp__3698__auto____13948;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13949),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13949)));
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
var temp__3698__auto____13963 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13963))
{var s__14013 = temp__3698__auto____13963;

var fst__14014 = cljs.core.first.call(null,s__14013);
var fv__14015 = f.call(null,fst__14014);
var run__14016 = cljs.core.cons.call(null,fst__14014,cljs.core.take_while.call(null,(function (p1__13954_SHARP_){
return cljs.core._EQ_.call(null,fv__14015,f.call(null,p1__13954_SHARP_));
}),cljs.core.next.call(null,s__14013)));

return cljs.core.cons.call(null,run__14016,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14016),s__14013))));
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
var reductions__14078 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14059 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14059))
{var s__14060 = temp__3695__auto____14059;

return reductions.call(null,f,cljs.core.first.call(null,s__14060),cljs.core.rest.call(null,s__14060));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14079 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14065 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14065))
{var s__14067 = temp__3698__auto____14065;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14067)),cljs.core.rest.call(null,s__14067));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14078.call(this,f,init);
case  3 :
return reductions__14079.call(this,f,init,coll);
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
var juxt__14141 = (function (f){
return (function() {
var G__14146 = null;
var G__14146__14148 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14146__14149 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14146__14151 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14146__14152 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14146__14154 = (function() { 
var G__14158__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14158 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14158__delegate.call(this, x, y, z, args);
};
G__14158.cljs$lang$maxFixedArity = 3;
G__14158.cljs$lang$applyTo = (function (arglist__14160){
var x = cljs.core.first(arglist__14160);
var y = cljs.core.first(cljs.core.next(arglist__14160));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14160)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14160)));
return G__14158__delegate.call(this, x, y, z, args);
});
return G__14158;
})()
;
G__14146 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14146__14148.call(this);
case  1 :
return G__14146__14149.call(this,x);
case  2 :
return G__14146__14151.call(this,x,y);
case  3 :
return G__14146__14152.call(this,x,y,z);
default:
return G__14146__14154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14146.cljs$lang$maxFixedArity = 3;
G__14146.cljs$lang$applyTo = G__14146__14154.cljs$lang$applyTo;
return G__14146;
})()
});
var juxt__14142 = (function (f,g){
return (function() {
var G__14162 = null;
var G__14162__14189 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14162__14190 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14162__14191 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14162__14192 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14162__14193 = (function() { 
var G__14200__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14200 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14200__delegate.call(this, x, y, z, args);
};
G__14200.cljs$lang$maxFixedArity = 3;
G__14200.cljs$lang$applyTo = (function (arglist__14208){
var x = cljs.core.first(arglist__14208);
var y = cljs.core.first(cljs.core.next(arglist__14208));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14208)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14208)));
return G__14200__delegate.call(this, x, y, z, args);
});
return G__14200;
})()
;
G__14162 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14162__14189.call(this);
case  1 :
return G__14162__14190.call(this,x);
case  2 :
return G__14162__14191.call(this,x,y);
case  3 :
return G__14162__14192.call(this,x,y,z);
default:
return G__14162__14193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14162.cljs$lang$maxFixedArity = 3;
G__14162.cljs$lang$applyTo = G__14162__14193.cljs$lang$applyTo;
return G__14162;
})()
});
var juxt__14143 = (function (f,g,h){
return (function() {
var G__14209 = null;
var G__14209__14210 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14209__14211 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14209__14212 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14209__14213 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14209__14214 = (function() { 
var G__14218__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14218 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14218__delegate.call(this, x, y, z, args);
};
G__14218.cljs$lang$maxFixedArity = 3;
G__14218.cljs$lang$applyTo = (function (arglist__14227){
var x = cljs.core.first(arglist__14227);
var y = cljs.core.first(cljs.core.next(arglist__14227));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14227)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14227)));
return G__14218__delegate.call(this, x, y, z, args);
});
return G__14218;
})()
;
G__14209 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14209__14210.call(this);
case  1 :
return G__14209__14211.call(this,x);
case  2 :
return G__14209__14212.call(this,x,y);
case  3 :
return G__14209__14213.call(this,x,y,z);
default:
return G__14209__14214.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14209.cljs$lang$maxFixedArity = 3;
G__14209.cljs$lang$applyTo = G__14209__14214.cljs$lang$applyTo;
return G__14209;
})()
});
var juxt__14144 = (function() { 
var G__14228__delegate = function (f,g,h,fs){
var fs__14125 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14229 = null;
var G__14229__14230 = (function (){
return cljs.core.reduce.call(null,(function (p1__14041_SHARP_,p2__14042_SHARP_){
return cljs.core.conj.call(null,p1__14041_SHARP_,p2__14042_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14125);
});
var G__14229__14231 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14043_SHARP_,p2__14044_SHARP_){
return cljs.core.conj.call(null,p1__14043_SHARP_,p2__14044_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14125);
});
var G__14229__14232 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14045_SHARP_,p2__14046_SHARP_){
return cljs.core.conj.call(null,p1__14045_SHARP_,p2__14046_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14125);
});
var G__14229__14233 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14048_SHARP_,p2__14049_SHARP_){
return cljs.core.conj.call(null,p1__14048_SHARP_,p2__14049_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14125);
});
var G__14229__14234 = (function() { 
var G__14240__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14050_SHARP_,p2__14051_SHARP_){
return cljs.core.conj.call(null,p1__14050_SHARP_,cljs.core.apply.call(null,p2__14051_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14125);
};
var G__14240 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14240__delegate.call(this, x, y, z, args);
};
G__14240.cljs$lang$maxFixedArity = 3;
G__14240.cljs$lang$applyTo = (function (arglist__14242){
var x = cljs.core.first(arglist__14242);
var y = cljs.core.first(cljs.core.next(arglist__14242));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14242)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14242)));
return G__14240__delegate.call(this, x, y, z, args);
});
return G__14240;
})()
;
G__14229 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14229__14230.call(this);
case  1 :
return G__14229__14231.call(this,x);
case  2 :
return G__14229__14232.call(this,x,y);
case  3 :
return G__14229__14233.call(this,x,y,z);
default:
return G__14229__14234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14229.cljs$lang$maxFixedArity = 3;
G__14229.cljs$lang$applyTo = G__14229__14234.cljs$lang$applyTo;
return G__14229;
})()
};
var G__14228 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14228__delegate.call(this, f, g, h, fs);
};
G__14228.cljs$lang$maxFixedArity = 3;
G__14228.cljs$lang$applyTo = (function (arglist__14247){
var f = cljs.core.first(arglist__14247);
var g = cljs.core.first(cljs.core.next(arglist__14247));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14247)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14247)));
return G__14228__delegate.call(this, f, g, h, fs);
});
return G__14228;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14141.call(this,f);
case  2 :
return juxt__14142.call(this,f,g);
case  3 :
return juxt__14143.call(this,f,g,h);
default:
return juxt__14144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14144.cljs$lang$applyTo;
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
var dorun__14257 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14262 = cljs.core.next.call(null,coll);
coll = G__14262;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14258 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14250 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14250))
{return (n > 0);
} else
{return and__3546__auto____14250;
}
})()))
{{
var G__14263 = (n - 1);
var G__14264 = cljs.core.next.call(null,coll);
n = G__14263;
coll = G__14264;
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
return dorun__14257.call(this,n);
case  2 :
return dorun__14258.call(this,n,coll);
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
var doall__14282 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14283 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14282.call(this,n);
case  2 :
return doall__14283.call(this,n,coll);
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
var matches__14294 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14294),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14294),1)))
{return cljs.core.first.call(null,matches__14294);
} else
{return cljs.core.vec.call(null,matches__14294);
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
var matches__14301 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14301)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14301),1)))
{return cljs.core.first.call(null,matches__14301);
} else
{return cljs.core.vec.call(null,matches__14301);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14315 = cljs.core.re_find.call(null,re,s);
var match_idx__14318 = s.search(re);
var match_str__14354 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14315))?cljs.core.first.call(null,match_data__14315):match_data__14315);
var post_match__14355 = cljs.core.subs.call(null,s,(match_idx__14318 + cljs.core.count.call(null,match_str__14354)));

if(cljs.core.truth_(match_data__14315))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14315,re_seq.call(null,re,post_match__14355));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14360_SHARP_){
return print_one.call(null,p1__14360_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14421 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14421))
{var and__3546__auto____14425 = (function (){var x__445__auto____14422 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14423 = x__445__auto____14422;

if(cljs.core.truth_(and__3546__auto____14423))
{var and__3546__auto____14424 = x__445__auto____14422.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14424))
{return cljs.core.not.call(null,x__445__auto____14422.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14424;
}
} else
{return and__3546__auto____14423;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14422);
}
})();

if(cljs.core.truth_(and__3546__auto____14425))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14425;
}
} else
{return and__3546__auto____14421;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14430 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14431 = x__445__auto____14430;

if(cljs.core.truth_(and__3546__auto____14431))
{var and__3546__auto____14436 = x__445__auto____14430.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14436))
{return cljs.core.not.call(null,x__445__auto____14430.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14436;
}
} else
{return and__3546__auto____14431;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14430);
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
var first_obj__14452 = cljs.core.first.call(null,objs);
var sb__14455 = (new goog.string.StringBuffer());

var G__14456__14457 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14456__14457))
{var obj__14459 = cljs.core.first.call(null,G__14456__14457);
var G__14456__14460 = G__14456__14457;

while(true){
if(cljs.core.truth_((obj__14459 === first_obj__14452)))
{} else
{sb__14455.append(" ");
}
var G__14461__14462 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14459,opts));

if(cljs.core.truth_(G__14461__14462))
{var string__14463 = cljs.core.first.call(null,G__14461__14462);
var G__14461__14464 = G__14461__14462;

while(true){
sb__14455.append(string__14463);
var temp__3698__auto____14469 = cljs.core.next.call(null,G__14461__14464);

if(cljs.core.truth_(temp__3698__auto____14469))
{var G__14461__14472 = temp__3698__auto____14469;

{
var G__14481 = cljs.core.first.call(null,G__14461__14472);
var G__14482 = G__14461__14472;
string__14463 = G__14481;
G__14461__14464 = G__14482;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14474 = cljs.core.next.call(null,G__14456__14460);

if(cljs.core.truth_(temp__3698__auto____14474))
{var G__14456__14475 = temp__3698__auto____14474;

{
var G__14483 = cljs.core.first.call(null,G__14456__14475);
var G__14485 = G__14456__14475;
obj__14459 = G__14483;
G__14456__14460 = G__14485;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14455);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14486 = cljs.core.first.call(null,objs);

var G__14487__14488 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14487__14488))
{var obj__14489 = cljs.core.first.call(null,G__14487__14488);
var G__14487__14490 = G__14487__14488;

while(true){
if(cljs.core.truth_((obj__14489 === first_obj__14486)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14492__14494 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14489,opts));

if(cljs.core.truth_(G__14492__14494))
{var string__14495 = cljs.core.first.call(null,G__14492__14494);
var G__14492__14496 = G__14492__14494;

while(true){
cljs.core.string_print.call(null,string__14495);
var temp__3698__auto____14497 = cljs.core.next.call(null,G__14492__14496);

if(cljs.core.truth_(temp__3698__auto____14497))
{var G__14492__14499 = temp__3698__auto____14497;

{
var G__14503 = cljs.core.first.call(null,G__14492__14499);
var G__14504 = G__14492__14499;
string__14495 = G__14503;
G__14492__14496 = G__14504;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14500 = cljs.core.next.call(null,G__14487__14490);

if(cljs.core.truth_(temp__3698__auto____14500))
{var G__14487__14501 = temp__3698__auto____14500;

{
var G__14506 = cljs.core.first.call(null,G__14487__14501);
var G__14507 = G__14487__14501;
obj__14489 = G__14506;
G__14487__14490 = G__14507;
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
pr_str.cljs$lang$applyTo = (function (arglist__14512){
var objs = cljs.core.seq( arglist__14512 );;
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
pr.cljs$lang$applyTo = (function (arglist__14514){
var objs = cljs.core.seq( arglist__14514 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14523){
var objs = cljs.core.seq( arglist__14523 );;
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
println.cljs$lang$applyTo = (function (arglist__14537){
var objs = cljs.core.seq( arglist__14537 );;
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
prn.cljs$lang$applyTo = (function (arglist__14545){
var objs = cljs.core.seq( arglist__14545 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14547 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14547,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14627 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14627))
{var nspc__14631 = temp__3698__auto____14627;

return cljs.core.str.call(null,nspc__14631,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14633 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14633))
{var nspc__14640 = temp__3698__auto____14633;

return cljs.core.str.call(null,nspc__14640,"/");
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
var this__14678 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14679 = this;
var G__14680__14681 = cljs.core.seq.call(null,this__14679.watches);

if(cljs.core.truth_(G__14680__14681))
{var G__14683__14688 = cljs.core.first.call(null,G__14680__14681);
var vec__14687__14689 = G__14683__14688;
var key__14690 = cljs.core.nth.call(null,vec__14687__14689,0,null);
var f__14691 = cljs.core.nth.call(null,vec__14687__14689,1,null);
var G__14680__14692 = G__14680__14681;

var G__14683__14693 = G__14683__14688;
var G__14680__14694 = G__14680__14692;

while(true){
var vec__14695__14696 = G__14683__14693;
var key__14697 = cljs.core.nth.call(null,vec__14695__14696,0,null);
var f__14698 = cljs.core.nth.call(null,vec__14695__14696,1,null);
var G__14680__14699 = G__14680__14694;

f__14698.call(null,key__14697,this$,oldval,newval);
var temp__3698__auto____14700 = cljs.core.next.call(null,G__14680__14699);

if(cljs.core.truth_(temp__3698__auto____14700))
{var G__14680__14701 = temp__3698__auto____14700;

{
var G__14719 = cljs.core.first.call(null,G__14680__14701);
var G__14720 = G__14680__14701;
G__14683__14693 = G__14719;
G__14680__14694 = G__14720;
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
var this__14708 = this;
return this$.watches = cljs.core.assoc.call(null,this__14708.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14709 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14709.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14712 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14712.state,opts),">");
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
var atom__14731 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14732 = (function() { 
var G__14734__delegate = function (x,p__14721){
var map__14722__14724 = p__14721;
var map__14722__14728 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14722__14724))?cljs.core.apply.call(null,cljs.core.hash_map,map__14722__14724):map__14722__14724);
var validator__14729 = cljs.core.get.call(null,map__14722__14728,"﷐'validator");
var meta__14730 = cljs.core.get.call(null,map__14722__14728,"﷐'meta");

return (new cljs.core.Atom(x,meta__14730,validator__14729,null));
};
var G__14734 = function (x,var_args){
var p__14721 = null;
if (goog.isDef(var_args)) {
  p__14721 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14734__delegate.call(this, x, p__14721);
};
G__14734.cljs$lang$maxFixedArity = 1;
G__14734.cljs$lang$applyTo = (function (arglist__14736){
var x = cljs.core.first(arglist__14736);
var p__14721 = cljs.core.rest(arglist__14736);
return G__14734__delegate.call(this, x, p__14721);
});
return G__14734;
})()
;
atom = function(x,var_args){
var p__14721 = var_args;
switch(arguments.length){
case  1 :
return atom__14731.call(this,x);
default:
return atom__14732.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14732.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14738 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14738))
{var validate__14739 = temp__3698__auto____14738;

if(cljs.core.truth_(validate__14739.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14740 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14740,new_value);
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
var swap_BANG___14758 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14759 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14761 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14763 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14764 = (function() { 
var G__14773__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14773 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14773__delegate.call(this, a, f, x, y, z, more);
};
G__14773.cljs$lang$maxFixedArity = 5;
G__14773.cljs$lang$applyTo = (function (arglist__14779){
var a = cljs.core.first(arglist__14779);
var f = cljs.core.first(cljs.core.next(arglist__14779));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14779)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14779))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14779)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14779)))));
return G__14773__delegate.call(this, a, f, x, y, z, more);
});
return G__14773;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14758.call(this,a,f);
case  3 :
return swap_BANG___14759.call(this,a,f,x);
case  4 :
return swap_BANG___14761.call(this,a,f,x,y);
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14810){
var iref = cljs.core.first(arglist__14810);
var f = cljs.core.first(cljs.core.next(arglist__14810));
var args = cljs.core.rest(cljs.core.next(arglist__14810));
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
var gensym__14826 = (function (){
return gensym.call(null,"G__");
});
var gensym__14827 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14826.call(this);
case  1 :
return gensym__14827.call(this,prefix_string);
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
var this__14867 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14867.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14874 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14874.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14874.state,this__14874.f);
}
return cljs.core.deref.call(null,this__14874.state);
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
delay.cljs$lang$applyTo = (function (arglist__14912){
var body = cljs.core.seq( arglist__14912 );;
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
var map__14923__14924 = options;
var map__14923__14925 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14923__14924))?cljs.core.apply.call(null,cljs.core.hash_map,map__14923__14924):map__14923__14924);
var keywordize_keys__14926 = cljs.core.get.call(null,map__14923__14925,"﷐'keywordize-keys");
var keyfn__14927 = (cljs.core.truth_(keywordize_keys__14926)?cljs.core.keyword:cljs.core.str);
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14940 = (function iter__14934(s__14935){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14935__14937 = s__14935;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14935__14937)))
{var k__14938 = cljs.core.first.call(null,s__14935__14937);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14927.call(null,k__14938),thisfn.call(null,(x[k__14938]))]),iter__14934.call(null,cljs.core.rest.call(null,s__14935__14937)));
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
js__GT_clj.cljs$lang$applyTo = (function (arglist__14957){
var x = cljs.core.first(arglist__14957);
var options = cljs.core.rest(arglist__14957);
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
var mem__14961 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14966__delegate = function (args){
var temp__3695__auto____14962 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14961),args);

if(cljs.core.truth_(temp__3695__auto____14962))
{var v__14963 = temp__3695__auto____14962;

return v__14963;
} else
{var ret__14965 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14961,cljs.core.assoc,args,ret__14965);
return ret__14965;
}
};
var G__14966 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14966__delegate.call(this, args);
};
G__14966.cljs$lang$maxFixedArity = 0;
G__14966.cljs$lang$applyTo = (function (arglist__14969){
var args = cljs.core.seq( arglist__14969 );;
return G__14966__delegate.call(this, args);
});
return G__14966;
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
var trampoline__14974 = (function (f){
while(true){
var ret__14973 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14973)))
{{
var G__14977 = ret__14973;
f = G__14977;
continue;
}
} else
{return ret__14973;
}
break;
}
});
var trampoline__14975 = (function() { 
var G__14978__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14978 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14978__delegate.call(this, f, args);
};
G__14978.cljs$lang$maxFixedArity = 1;
G__14978.cljs$lang$applyTo = (function (arglist__14979){
var f = cljs.core.first(arglist__14979);
var args = cljs.core.rest(arglist__14979);
return G__14978__delegate.call(this, f, args);
});
return G__14978;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14974.call(this,f);
default:
return trampoline__14975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14975.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15007 = (function (){
return rand.call(null,1);
});
var rand__15009 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15007.call(this);
case  1 :
return rand__15009.call(this,n);
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
var k__15012 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15012,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15012,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15050 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15051 = (function (h,child,parent){
var or__3548__auto____15026 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15026))
{return or__3548__auto____15026;
} else
{var or__3548__auto____15032 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15032))
{return or__3548__auto____15032;
} else
{var and__3546__auto____15034 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15034))
{var and__3546__auto____15036 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15036))
{var and__3546__auto____15039 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15039))
{var ret__15040 = true;
var i__15041 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15042 = cljs.core.not.call(null,ret__15040);

if(cljs.core.truth_(or__3548__auto____15042))
{return or__3548__auto____15042;
} else
{return cljs.core._EQ_.call(null,i__15041,cljs.core.count.call(null,parent));
}
})()))
{return ret__15040;
} else
{{
var G__15064 = isa_QMARK_.call(null,h,child.call(null,i__15041),parent.call(null,i__15041));
var G__15065 = (i__15041 + 1);
ret__15040 = G__15064;
i__15041 = G__15065;
continue;
}
}
break;
}
} else
{return and__3546__auto____15039;
}
} else
{return and__3546__auto____15036;
}
} else
{return and__3546__auto____15034;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15050.call(this,h,child);
case  3 :
return isa_QMARK___15051.call(this,h,child,parent);
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
var parents__15072 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15073 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15072.call(this,h);
case  2 :
return parents__15073.call(this,h,tag);
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
var ancestors__15089 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15090 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15089.call(this,h);
case  2 :
return ancestors__15090.call(this,h,tag);
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
var descendants__15100 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15101 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15100.call(this,h);
case  2 :
return descendants__15101.call(this,h,tag);
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
var derive__15116 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15118 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15106 = "﷐'parents".call(null,h);
var td__15107 = "﷐'descendants".call(null,h);
var ta__15108 = "﷐'ancestors".call(null,h);
var tf__15109 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15114 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15106.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15108.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15108.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15106,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15109.call(null,"﷐'ancestors".call(null,h),tag,td__15107,parent,ta__15108),"﷐'descendants":tf__15109.call(null,"﷐'descendants".call(null,h),parent,ta__15108,tag,td__15107)});
})());

if(cljs.core.truth_(or__3548__auto____15114))
{return or__3548__auto____15114;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15116.call(this,h,tag);
case  3 :
return derive__15118.call(this,h,tag,parent);
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
var underive__15145 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15146 = (function (h,tag,parent){
var parentMap__15129 = "﷐'parents".call(null,h);
var childsParents__15130 = (cljs.core.truth_(parentMap__15129.call(null,tag))?cljs.core.disj.call(null,parentMap__15129.call(null,tag),parent):cljs.core.set([]));
var newParents__15133 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15130))?cljs.core.assoc.call(null,parentMap__15129,tag,childsParents__15130):cljs.core.dissoc.call(null,parentMap__15129,tag));
var deriv_seq__15139 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15103_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15103_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15103_SHARP_),cljs.core.second.call(null,p1__15103_SHARP_)));
}),cljs.core.seq.call(null,newParents__15133)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15129.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15104_SHARP_,p2__15105_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15104_SHARP_,p2__15105_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15139));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15145.call(this,h,tag);
case  3 :
return underive__15146.call(this,h,tag,parent);
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
var xprefs__15163 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15167 = (cljs.core.truth_((function (){var and__3546__auto____15165 = xprefs__15163;

if(cljs.core.truth_(and__3546__auto____15165))
{return xprefs__15163.call(null,y);
} else
{return and__3546__auto____15165;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15167))
{return or__3548__auto____15167;
} else
{var or__3548__auto____15173 = (function (){var ps__15169 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15169) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15169),prefer_table)))
{} else
{}
{
var G__15183 = cljs.core.rest.call(null,ps__15169);
ps__15169 = G__15183;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15173))
{return or__3548__auto____15173;
} else
{var or__3548__auto____15176 = (function (){var ps__15174 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15174) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15174),y,prefer_table)))
{} else
{}
{
var G__15186 = cljs.core.rest.call(null,ps__15174);
ps__15174 = G__15186;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15176))
{return or__3548__auto____15176;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15189 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15189))
{return or__3548__auto____15189;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15208 = cljs.core.reduce.call(null,(function (be,p__15193){
var vec__15194__15195 = p__15193;
var k__15197 = cljs.core.nth.call(null,vec__15194__15195,0,null);
var ___15198 = cljs.core.nth.call(null,vec__15194__15195,1,null);
var e__15199 = vec__15194__15195;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15197)))
{var be2__15203 = (cljs.core.truth_((function (){var or__3548__auto____15201 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15201))
{return or__3548__auto____15201;
} else
{return cljs.core.dominates.call(null,k__15197,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15199:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15203),k__15197,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15197," and ",cljs.core.first.call(null,be2__15203),", and neither is preferred")));
}
return be2__15203;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15208))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15208));
return cljs.core.second.call(null,best_entry__15208);
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
if(cljs.core.truth_((function (){var and__3546__auto____15227 = mf;

if(cljs.core.truth_(and__3546__auto____15227))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15227;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15228 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15228))
{return or__3548__auto____15228;
} else
{var or__3548__auto____15229 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15229))
{return or__3548__auto____15229;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15234 = mf;

if(cljs.core.truth_(and__3546__auto____15234))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15234;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15237 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15237))
{return or__3548__auto____15237;
} else
{var or__3548__auto____15239 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15239))
{return or__3548__auto____15239;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15241 = mf;

if(cljs.core.truth_(and__3546__auto____15241))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15241;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15248 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
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
if(cljs.core.truth_((function (){var and__3546__auto____15253 = mf;

if(cljs.core.truth_(and__3546__auto____15253))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15253;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15256 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15256))
{return or__3548__auto____15256;
} else
{var or__3548__auto____15259 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15259))
{return or__3548__auto____15259;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15261 = mf;

if(cljs.core.truth_(and__3546__auto____15261))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15261;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15263 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15263))
{return or__3548__auto____15263;
} else
{var or__3548__auto____15265 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15265))
{return or__3548__auto____15265;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15270 = mf;

if(cljs.core.truth_(and__3546__auto____15270))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15270;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15272 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15272))
{return or__3548__auto____15272;
} else
{var or__3548__auto____15274 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15274))
{return or__3548__auto____15274;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15333 = mf;

if(cljs.core.truth_(and__3546__auto____15333))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15333;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15334 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15334))
{return or__3548__auto____15334;
} else
{var or__3548__auto____15336 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15336))
{return or__3548__auto____15336;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15338 = mf;

if(cljs.core.truth_(and__3546__auto____15338))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15338;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15342 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15342))
{return or__3548__auto____15342;
} else
{var or__3548__auto____15344 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15344))
{return or__3548__auto____15344;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15366 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15367 = cljs.core._get_method.call(null,mf,dispatch_val__15366);

if(cljs.core.truth_(target_fn__15367))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15366)));
}
return cljs.core.apply.call(null,target_fn__15367,args);
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
var this__15374 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15376 = this;
cljs.core.swap_BANG_.call(null,this__15376.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15376.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15376.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15376.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15381 = this;
cljs.core.swap_BANG_.call(null,this__15381.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15381.method_cache,this__15381.method_table,this__15381.cached_hierarchy,this__15381.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15383 = this;
cljs.core.swap_BANG_.call(null,this__15383.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15383.method_cache,this__15383.method_table,this__15383.cached_hierarchy,this__15383.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15385 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15385.cached_hierarchy),cljs.core.deref.call(null,this__15385.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15385.method_cache,this__15385.method_table,this__15385.cached_hierarchy,this__15385.hierarchy);
}
var temp__3695__auto____15389 = cljs.core.deref.call(null,this__15385.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15389))
{var target_fn__15391 = temp__3695__auto____15389;

return target_fn__15391;
} else
{var temp__3695__auto____15392 = cljs.core.find_and_cache_best_method.call(null,this__15385.name,dispatch_val,this__15385.hierarchy,this__15385.method_table,this__15385.prefer_table,this__15385.method_cache,this__15385.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15392))
{var target_fn__15393 = temp__3695__auto____15392;

return target_fn__15393;
} else
{return cljs.core.deref.call(null,this__15385.method_table).call(null,this__15385.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15394 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15394.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15394.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15394.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15394.method_cache,this__15394.method_table,this__15394.cached_hierarchy,this__15394.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15402 = this;
return cljs.core.deref.call(null,this__15402.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15403 = this;
return cljs.core.deref.call(null,this__15403.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15406 = this;
return cljs.core.do_dispatch.call(null,mf,this__15406.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15420__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15420 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15420__delegate.call(this, _, args);
};
G__15420.cljs$lang$maxFixedArity = 1;
G__15420.cljs$lang$applyTo = (function (arglist__15422){
var _ = cljs.core.first(arglist__15422);
var args = cljs.core.rest(arglist__15422);
return G__15420__delegate.call(this, _, args);
});
return G__15420;
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
