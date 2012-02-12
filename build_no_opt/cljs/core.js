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
var or__3548__auto____7255 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
} else
{var or__3548__auto____7259 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7259))
{return or__3548__auto____7259;
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
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7337 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{var or__3548__auto____7339 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7601 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7341 = this$;

if(cljs.core.truth_(and__3546__auto____7341))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7341;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7345 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7345))
{return or__3548__auto____7345;
} else
{var or__3548__auto____7347 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7347))
{return or__3548__auto____7347;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7602 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7349 = this$;

if(cljs.core.truth_(and__3546__auto____7349))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7349;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7603 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7358 = this$;

if(cljs.core.truth_(and__3546__auto____7358))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7358;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7360 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{var or__3548__auto____7363 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7604 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{var or__3548__auto____7372 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7605 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7374 = this$;

if(cljs.core.truth_(and__3546__auto____7374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7376 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7376))
{return or__3548__auto____7376;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7607 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7381 = this$;

if(cljs.core.truth_(and__3546__auto____7381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7385 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{var or__3548__auto____7387 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7608 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7391 = this$;

if(cljs.core.truth_(and__3546__auto____7391))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7391;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{var or__3548__auto____7395 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7609 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7398 = this$;

if(cljs.core.truth_(and__3546__auto____7398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7610 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7407 = this$;

if(cljs.core.truth_(and__3546__auto____7407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{var or__3548__auto____7415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7611 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7418 = this$;

if(cljs.core.truth_(and__3546__auto____7418))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7418;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7422 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7422))
{return or__3548__auto____7422;
} else
{var or__3548__auto____7425 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7612 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7430 = this$;

if(cljs.core.truth_(and__3546__auto____7430))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7430;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7434 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7434))
{return or__3548__auto____7434;
} else
{var or__3548__auto____7436 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7436))
{return or__3548__auto____7436;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7454 = this$;

if(cljs.core.truth_(and__3546__auto____7454))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7454;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7491 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7491))
{return or__3548__auto____7491;
} else
{var or__3548__auto____7493 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7493))
{return or__3548__auto____7493;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7507 = this$;

if(cljs.core.truth_(and__3546__auto____7507))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7507;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7516 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{var or__3548__auto____7530 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7539 = this$;

if(cljs.core.truth_(and__3546__auto____7539))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7539;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7541 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
} else
{var or__3548__auto____7544 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7544))
{return or__3548__auto____7544;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7547 = this$;

if(cljs.core.truth_(and__3546__auto____7547))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7547;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7556 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{var or__3548__auto____7568 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7575 = this$;

if(cljs.core.truth_(and__3546__auto____7575))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7575;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7581 = this$;

if(cljs.core.truth_(and__3546__auto____7581))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7581;
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
var _invoke__7621 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7587 = this$;

if(cljs.core.truth_(and__3546__auto____7587))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7587;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7589 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7589))
{return or__3548__auto____7589;
} else
{var or__3548__auto____7590 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7622 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7593 = this$;

if(cljs.core.truth_(and__3546__auto____7593))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7593;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
return _invoke__7607.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7608.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7609.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7610.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7611.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7612.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7613.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7614.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7616.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7618.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7621.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7622.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7695 = coll;

if(cljs.core.truth_(and__3546__auto____7695))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7695;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7697 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7697))
{return or__3548__auto____7697;
} else
{var or__3548__auto____7698 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7699 = coll;

if(cljs.core.truth_(and__3546__auto____7699))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7699;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7701 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7701))
{return or__3548__auto____7701;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7797 = coll;

if(cljs.core.truth_(and__3546__auto____7797))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7797;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{var or__3548__auto____7800 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
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
var _nth__7866 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7816 = coll;

if(cljs.core.truth_(and__3546__auto____7816))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7816;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7818 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7818))
{return or__3548__auto____7818;
} else
{var or__3548__auto____7821 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7821))
{return or__3548__auto____7821;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7867 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7824 = coll;

if(cljs.core.truth_(and__3546__auto____7824))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7824;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7828 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
} else
{var or__3548__auto____7829 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
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
return _nth__7866.call(this,coll,n);
case  3 :
return _nth__7867.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7877 = coll;

if(cljs.core.truth_(and__3546__auto____7877))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7877;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7878 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{var or__3548__auto____7879 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7879))
{return or__3548__auto____7879;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7880 = coll;

if(cljs.core.truth_(and__3546__auto____7880))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7880;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7881 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7881))
{return or__3548__auto____7881;
} else
{var or__3548__auto____7882 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
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
var _lookup__7901 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7892 = o;

if(cljs.core.truth_(and__3546__auto____7892))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7892;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7895 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{var or__3548__auto____7896 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7896))
{return or__3548__auto____7896;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7902 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = o;

if(cljs.core.truth_(and__3546__auto____7897))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7897;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7898 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{var or__3548__auto____7899 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
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
return _lookup__7901.call(this,o,k);
case  3 :
return _lookup__7902.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7910 = coll;

if(cljs.core.truth_(and__3546__auto____7910))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7910;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7913 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{var or__3548__auto____7914 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
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
{return (function (){var or__3548__auto____7918 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{var or__3548__auto____7920 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = coll;

if(cljs.core.truth_(and__3546__auto____7930))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7930;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7931 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{var or__3548__auto____7932 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7937 = coll;

if(cljs.core.truth_(and__3546__auto____7937))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7937;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7940 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
} else
{var or__3548__auto____7941 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7946 = coll;

if(cljs.core.truth_(and__3546__auto____7946))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7946;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7949 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{var or__3548__auto____7950 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7968 = coll;

if(cljs.core.truth_(and__3546__auto____7968))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7968;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7988 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____7990 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7990))
{return or__3548__auto____7990;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8006 = coll;

if(cljs.core.truth_(and__3546__auto____8006))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8006;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8011 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8011))
{return or__3548__auto____8011;
} else
{var or__3548__auto____8013 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8020 = o;

if(cljs.core.truth_(and__3546__auto____8020))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8020;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8023 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{var or__3548__auto____8025 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8032 = o;

if(cljs.core.truth_(and__3546__auto____8032))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8032;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8034 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8034))
{return or__3548__auto____8034;
} else
{var or__3548__auto____8036 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8036))
{return or__3548__auto____8036;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8041 = o;

if(cljs.core.truth_(and__3546__auto____8041))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8041;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8045 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8045))
{return or__3548__auto____8045;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8049 = o;

if(cljs.core.truth_(and__3546__auto____8049))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8049;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8051 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{var or__3548__auto____8052 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8052))
{return or__3548__auto____8052;
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
var _reduce__8069 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8058 = coll;

if(cljs.core.truth_(and__3546__auto____8058))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8058;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8060 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
} else
{var or__3548__auto____8061 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8070 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = coll;

if(cljs.core.truth_(and__3546__auto____8063))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8063;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8067 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
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
return _reduce__8069.call(this,coll,f);
case  3 :
return _reduce__8070.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8078 = o;

if(cljs.core.truth_(and__3546__auto____8078))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8078;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8080 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{var or__3548__auto____8081 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8086 = o;

if(cljs.core.truth_(and__3546__auto____8086))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8086;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8093 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = o;

if(cljs.core.truth_(and__3546__auto____8094))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8094;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8096 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{var or__3548__auto____8097 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8097))
{return or__3548__auto____8097;
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
if(cljs.core.truth_((function (){var and__3546__auto____8116 = o;

if(cljs.core.truth_(and__3546__auto____8116))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8116;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8117 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{var or__3548__auto____8118 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8118))
{return or__3548__auto____8118;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8128 = d;

if(cljs.core.truth_(and__3546__auto____8128))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8128;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8129 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{var or__3548__auto____8133 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8133))
{return or__3548__auto____8133;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = this$;

if(cljs.core.truth_(and__3546__auto____8141))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8141;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8145 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{var or__3548__auto____8147 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8153 = this$;

if(cljs.core.truth_(and__3546__auto____8153))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8153;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8157 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
} else
{var or__3548__auto____8159 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8159))
{return or__3548__auto____8159;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8164 = this$;

if(cljs.core.truth_(and__3546__auto____8164))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8164;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8165 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8165))
{return or__3548__auto____8165;
} else
{var or__3548__auto____8167 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8167))
{return or__3548__auto____8167;
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
var G__8245 = null;
var G__8245__8246 = (function (o,k){
return null;
});
var G__8245__8247 = (function (o,k,not_found){
return not_found;
});
G__8245 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8245__8246.call(this,o,k);
case  3 :
return G__8245__8247.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8245;
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
var G__8249 = null;
var G__8249__8250 = (function (_,f){
return f.call(null);
});
var G__8249__8251 = (function (_,f,start){
return start;
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
var G__8259 = null;
var G__8259__8260 = (function (_,n){
return null;
});
var G__8259__8261 = (function (_,n,not_found){
return not_found;
});
G__8259 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8259__8260.call(this,_,n);
case  3 :
return G__8259__8261.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8259;
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
var ci_reduce__8332 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8313 = cljs.core._nth.call(null,cicoll,0);
var n__8315 = 1;

while(true){
if(cljs.core.truth_((n__8315 < cljs.core._count.call(null,cicoll))))
{{
var G__8340 = f.call(null,val__8313,cljs.core._nth.call(null,cicoll,n__8315));
var G__8341 = (n__8315 + 1);
val__8313 = G__8340;
n__8315 = G__8341;
continue;
}
} else
{return val__8313;
}
break;
}
}
});
var ci_reduce__8333 = (function (cicoll,f,val){
var val__8319 = val;
var n__8320 = 0;

while(true){
if(cljs.core.truth_((n__8320 < cljs.core._count.call(null,cicoll))))
{{
var G__8345 = f.call(null,val__8319,cljs.core._nth.call(null,cicoll,n__8320));
var G__8346 = (n__8320 + 1);
val__8319 = G__8345;
n__8320 = G__8346;
continue;
}
} else
{return val__8319;
}
break;
}
});
var ci_reduce__8335 = (function (cicoll,f,val,idx){
var val__8324 = val;
var n__8325 = idx;

while(true){
if(cljs.core.truth_((n__8325 < cljs.core._count.call(null,cicoll))))
{{
var G__8350 = f.call(null,val__8324,cljs.core._nth.call(null,cicoll,n__8325));
var G__8351 = (n__8325 + 1);
val__8324 = G__8350;
n__8325 = G__8351;
continue;
}
} else
{return val__8324;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8332.call(this,cicoll,f);
case  3 :
return ci_reduce__8333.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8335.call(this,cicoll,f,val,idx);
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
var this__8364 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8401 = null;
var G__8401__8403 = (function (_,f){
var this__8366 = this;
return cljs.core.ci_reduce.call(null,this__8366.a,f,(this__8366.a[this__8366.i]),(this__8366.i + 1));
});
var G__8401__8404 = (function (_,f,start){
var this__8370 = this;
return cljs.core.ci_reduce.call(null,this__8370.a,f,start,this__8370.i);
});
G__8401 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8401__8403.call(this,_,f);
case  3 :
return G__8401__8404.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8401;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8371 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8373 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8410 = null;
var G__8410__8411 = (function (coll,n){
var this__8379 = this;
var i__8381 = (n + this__8379.i);

if(cljs.core.truth_((i__8381 < this__8379.a.length)))
{return (this__8379.a[i__8381]);
} else
{return null;
}
});
var G__8410__8412 = (function (coll,n,not_found){
var this__8382 = this;
var i__8384 = (n + this__8382.i);

if(cljs.core.truth_((i__8384 < this__8382.a.length)))
{return (this__8382.a[i__8384]);
} else
{return not_found;
}
});
G__8410 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8410__8411.call(this,coll,n);
case  3 :
return G__8410__8412.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8410;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8386 = this;
return (this__8386.a.length - this__8386.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8388 = this;
return (this__8388.a[this__8388.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8394 = this;
if(cljs.core.truth_(((this__8394.i + 1) < this__8394.a.length)))
{return (new cljs.core.IndexedSeq(this__8394.a,(this__8394.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8397 = this;
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
var G__8430 = null;
var G__8430__8431 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8430__8432 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8430 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8430__8431.call(this,array,f);
case  3 :
return G__8430__8432.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8430;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8438 = null;
var G__8438__8439 = (function (array,k){
return (array[k]);
});
var G__8438__8440 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8438 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8438__8439.call(this,array,k);
case  3 :
return G__8438__8440.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8438;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8442 = null;
var G__8442__8443 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8442__8444 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8442 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8442__8443.call(this,array,n);
case  3 :
return G__8442__8444.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8442;
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
var temp__3698__auto____8448 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8448))
{var s__8449 = temp__3698__auto____8448;

return cljs.core._first.call(null,s__8449);
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
var G__8495 = cljs.core.next.call(null,s);
s = G__8495;
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
var s__8498 = cljs.core.seq.call(null,x);
var n__8499 = 0;

while(true){
if(cljs.core.truth_(s__8498))
{{
var G__8502 = cljs.core.next.call(null,s__8498);
var G__8503 = (n__8499 + 1);
s__8498 = G__8502;
n__8499 = G__8503;
continue;
}
} else
{return n__8499;
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
var conj__8511 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8512 = (function() { 
var G__8515__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8516 = conj.call(null,coll,x);
var G__8517 = cljs.core.first.call(null,xs);
var G__8518 = cljs.core.next.call(null,xs);
coll = G__8516;
x = G__8517;
xs = G__8518;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8515 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8515__delegate.call(this, coll, x, xs);
};
G__8515.cljs$lang$maxFixedArity = 2;
G__8515.cljs$lang$applyTo = (function (arglist__8519){
var coll = cljs.core.first(arglist__8519);
var x = cljs.core.first(cljs.core.next(arglist__8519));
var xs = cljs.core.rest(cljs.core.next(arglist__8519));
return G__8515__delegate.call(this, coll, x, xs);
});
return G__8515;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8511.call(this,coll,x);
default:
return conj__8512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8512.cljs$lang$applyTo;
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
var nth__8526 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8528 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8526.call(this,coll,n);
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
var get__8536 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8537 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8536.call(this,o,k);
case  3 :
return get__8537.call(this,o,k,not_found);
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
var assoc__8542 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8543 = (function() { 
var G__8555__delegate = function (coll,k,v,kvs){
while(true){
var ret__8540 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8556 = ret__8540;
var G__8557 = cljs.core.first.call(null,kvs);
var G__8558 = cljs.core.second.call(null,kvs);
var G__8559 = cljs.core.nnext.call(null,kvs);
coll = G__8556;
k = G__8557;
v = G__8558;
kvs = G__8559;
continue;
}
} else
{return ret__8540;
}
break;
}
};
var G__8555 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8555__delegate.call(this, coll, k, v, kvs);
};
G__8555.cljs$lang$maxFixedArity = 3;
G__8555.cljs$lang$applyTo = (function (arglist__8565){
var coll = cljs.core.first(arglist__8565);
var k = cljs.core.first(cljs.core.next(arglist__8565));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8565)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8565)));
return G__8555__delegate.call(this, coll, k, v, kvs);
});
return G__8555;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8542.call(this,coll,k,v);
default:
return assoc__8543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8543.cljs$lang$applyTo;
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
var dissoc__8576 = (function (coll){
return coll;
});
var dissoc__8577 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8578 = (function() { 
var G__8584__delegate = function (coll,k,ks){
while(true){
var ret__8571 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8585 = ret__8571;
var G__8586 = cljs.core.first.call(null,ks);
var G__8587 = cljs.core.next.call(null,ks);
coll = G__8585;
k = G__8586;
ks = G__8587;
continue;
}
} else
{return ret__8571;
}
break;
}
};
var G__8584 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8584__delegate.call(this, coll, k, ks);
};
G__8584.cljs$lang$maxFixedArity = 2;
G__8584.cljs$lang$applyTo = (function (arglist__8589){
var coll = cljs.core.first(arglist__8589);
var k = cljs.core.first(cljs.core.next(arglist__8589));
var ks = cljs.core.rest(cljs.core.next(arglist__8589));
return G__8584__delegate.call(this, coll, k, ks);
});
return G__8584;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8576.call(this,coll);
case  2 :
return dissoc__8577.call(this,coll,k);
default:
return dissoc__8578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8578.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8597 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8599 = x__445__auto____8597;

if(cljs.core.truth_(and__3546__auto____8599))
{var and__3546__auto____8601 = x__445__auto____8597.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8601))
{return cljs.core.not.call(null,x__445__auto____8597.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8601;
}
} else
{return and__3546__auto____8599;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8597);
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
var disj__8670 = (function (coll){
return coll;
});
var disj__8671 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8672 = (function() { 
var G__8677__delegate = function (coll,k,ks){
while(true){
var ret__8669 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8680 = ret__8669;
var G__8681 = cljs.core.first.call(null,ks);
var G__8682 = cljs.core.next.call(null,ks);
coll = G__8680;
k = G__8681;
ks = G__8682;
continue;
}
} else
{return ret__8669;
}
break;
}
};
var G__8677 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8677__delegate.call(this, coll, k, ks);
};
G__8677.cljs$lang$maxFixedArity = 2;
G__8677.cljs$lang$applyTo = (function (arglist__8683){
var coll = cljs.core.first(arglist__8683);
var k = cljs.core.first(cljs.core.next(arglist__8683));
var ks = cljs.core.rest(cljs.core.next(arglist__8683));
return G__8677__delegate.call(this, coll, k, ks);
});
return G__8677;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8670.call(this,coll);
case  2 :
return disj__8671.call(this,coll,k);
default:
return disj__8672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8672.cljs$lang$applyTo;
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
{var x__445__auto____8696 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8698 = x__445__auto____8696;

if(cljs.core.truth_(and__3546__auto____8698))
{var and__3546__auto____8702 = x__445__auto____8696.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8702))
{return cljs.core.not.call(null,x__445__auto____8696.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8702;
}
} else
{return and__3546__auto____8698;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8696);
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
{var x__445__auto____8720 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8726 = x__445__auto____8720;

if(cljs.core.truth_(and__3546__auto____8726))
{var and__3546__auto____8730 = x__445__auto____8720.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8730))
{return cljs.core.not.call(null,x__445__auto____8720.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8730;
}
} else
{return and__3546__auto____8726;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8720);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8742 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8743 = x__445__auto____8742;

if(cljs.core.truth_(and__3546__auto____8743))
{var and__3546__auto____8758 = x__445__auto____8742.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8758))
{return cljs.core.not.call(null,x__445__auto____8742.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8758;
}
} else
{return and__3546__auto____8743;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8742);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8763 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8765 = x__445__auto____8763;

if(cljs.core.truth_(and__3546__auto____8765))
{var and__3546__auto____8767 = x__445__auto____8763.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8767))
{return cljs.core.not.call(null,x__445__auto____8763.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8767;
}
} else
{return and__3546__auto____8765;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8763);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8774 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8778 = x__445__auto____8774;

if(cljs.core.truth_(and__3546__auto____8778))
{var and__3546__auto____8782 = x__445__auto____8774.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8782))
{return cljs.core.not.call(null,x__445__auto____8774.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8782;
}
} else
{return and__3546__auto____8778;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8774);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8789 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8790 = x__445__auto____8789;

if(cljs.core.truth_(and__3546__auto____8790))
{var and__3546__auto____8799 = x__445__auto____8789.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8799))
{return cljs.core.not.call(null,x__445__auto____8789.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8799;
}
} else
{return and__3546__auto____8790;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8789);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8805 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8806 = x__445__auto____8805;

if(cljs.core.truth_(and__3546__auto____8806))
{var and__3546__auto____8808 = x__445__auto____8805.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8808))
{return cljs.core.not.call(null,x__445__auto____8805.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8808;
}
} else
{return and__3546__auto____8806;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8805);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8817 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8817.push(key);
}));
return keys__8817;
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
{var x__445__auto____8833 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8834 = x__445__auto____8833;

if(cljs.core.truth_(and__3546__auto____8834))
{var and__3546__auto____8837 = x__445__auto____8833.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8837))
{return cljs.core.not.call(null,x__445__auto____8833.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8837;
}
} else
{return and__3546__auto____8834;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8833);
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
var and__3546__auto____8850 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8850))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8852 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8852))
{return or__3548__auto____8852;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8850;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8859 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8859))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8859;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8863 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8863))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8863;
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
var and__3546__auto____8892 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8892))
{return (n == n.toFixed());
} else
{return and__3546__auto____8892;
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
if(cljs.core.truth_((function (){var and__3546__auto____8899 = coll;

if(cljs.core.truth_(and__3546__auto____8899))
{var and__3546__auto____8900 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8900))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8900;
}
} else
{return and__3546__auto____8899;
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
var distinct_QMARK___8913 = (function (x){
return true;
});
var distinct_QMARK___8914 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8915 = (function() { 
var G__8917__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8906 = cljs.core.set([y,x]);
var xs__8907 = more;

while(true){
var x__8909 = cljs.core.first.call(null,xs__8907);
var etc__8911 = cljs.core.next.call(null,xs__8907);

if(cljs.core.truth_(xs__8907))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8906,x__8909)))
{return false;
} else
{{
var G__8919 = cljs.core.conj.call(null,s__8906,x__8909);
var G__8920 = etc__8911;
s__8906 = G__8919;
xs__8907 = G__8920;
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
var G__8917 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8917__delegate.call(this, x, y, more);
};
G__8917.cljs$lang$maxFixedArity = 2;
G__8917.cljs$lang$applyTo = (function (arglist__8921){
var x = cljs.core.first(arglist__8921);
var y = cljs.core.first(cljs.core.next(arglist__8921));
var more = cljs.core.rest(cljs.core.next(arglist__8921));
return G__8917__delegate.call(this, x, y, more);
});
return G__8917;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8913.call(this,x);
case  2 :
return distinct_QMARK___8914.call(this,x,y);
default:
return distinct_QMARK___8915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8915.cljs$lang$applyTo;
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
var r__8983 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8983)))
{return r__8983;
} else
{if(cljs.core.truth_(r__8983))
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
var sort__8996 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8997 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8992 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8992,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8992);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8996.call(this,comp);
case  2 :
return sort__8997.call(this,comp,coll);
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
var sort_by__9004 = (function (keyfn,coll){
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
return sort_by__9004.call(this,keyfn,comp);
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
var reduce__9010 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9011 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9010.call(this,f,val);
case  3 :
return reduce__9011.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9028 = (function (f,coll){
var temp__3695__auto____9019 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9019))
{var s__9020 = temp__3695__auto____9019;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9020),cljs.core.next.call(null,s__9020));
} else
{return f.call(null);
}
});
var seq_reduce__9029 = (function (f,val,coll){
var val__9021 = val;
var coll__9022 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9022))
{{
var G__9036 = f.call(null,val__9021,cljs.core.first.call(null,coll__9022));
var G__9037 = cljs.core.next.call(null,coll__9022);
val__9021 = G__9036;
coll__9022 = G__9037;
continue;
}
} else
{return val__9021;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9028.call(this,f,val);
case  3 :
return seq_reduce__9029.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9043 = null;
var G__9043__9044 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9043__9045 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9043 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9043__9044.call(this,coll,f);
case  3 :
return G__9043__9045.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9043;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9055 = (function (){
return 0;
});
var _PLUS___9056 = (function (x){
return x;
});
var _PLUS___9057 = (function (x,y){
return (x + y);
});
var _PLUS___9058 = (function() { 
var G__9066__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9066 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9066__delegate.call(this, x, y, more);
};
G__9066.cljs$lang$maxFixedArity = 2;
G__9066.cljs$lang$applyTo = (function (arglist__9069){
var x = cljs.core.first(arglist__9069);
var y = cljs.core.first(cljs.core.next(arglist__9069));
var more = cljs.core.rest(cljs.core.next(arglist__9069));
return G__9066__delegate.call(this, x, y, more);
});
return G__9066;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9055.call(this);
case  1 :
return _PLUS___9056.call(this,x);
case  2 :
return _PLUS___9057.call(this,x,y);
default:
return _PLUS___9058.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9058.cljs$lang$applyTo;
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
var ___9078 = (function (x){
return (- x);
});
var ___9079 = (function (x,y){
return (x - y);
});
var ___9080 = (function() { 
var G__9086__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9086 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9086__delegate.call(this, x, y, more);
};
G__9086.cljs$lang$maxFixedArity = 2;
G__9086.cljs$lang$applyTo = (function (arglist__9088){
var x = cljs.core.first(arglist__9088);
var y = cljs.core.first(cljs.core.next(arglist__9088));
var more = cljs.core.rest(cljs.core.next(arglist__9088));
return G__9086__delegate.call(this, x, y, more);
});
return G__9086;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9078.call(this,x);
case  2 :
return ___9079.call(this,x,y);
default:
return ___9080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9080.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9132 = (function (){
return 1;
});
var _STAR___9133 = (function (x){
return x;
});
var _STAR___9134 = (function (x,y){
return (x * y);
});
var _STAR___9135 = (function() { 
var G__9141__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9141 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9141__delegate.call(this, x, y, more);
};
G__9141.cljs$lang$maxFixedArity = 2;
G__9141.cljs$lang$applyTo = (function (arglist__9148){
var x = cljs.core.first(arglist__9148);
var y = cljs.core.first(cljs.core.next(arglist__9148));
var more = cljs.core.rest(cljs.core.next(arglist__9148));
return G__9141__delegate.call(this, x, y, more);
});
return G__9141;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9132.call(this);
case  1 :
return _STAR___9133.call(this,x);
case  2 :
return _STAR___9134.call(this,x,y);
default:
return _STAR___9135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9135.cljs$lang$applyTo;
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
var _SLASH___9163 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9164 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9165 = (function() { 
var G__9167__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9167 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9167__delegate.call(this, x, y, more);
};
G__9167.cljs$lang$maxFixedArity = 2;
G__9167.cljs$lang$applyTo = (function (arglist__9168){
var x = cljs.core.first(arglist__9168);
var y = cljs.core.first(cljs.core.next(arglist__9168));
var more = cljs.core.rest(cljs.core.next(arglist__9168));
return G__9167__delegate.call(this, x, y, more);
});
return G__9167;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9163.call(this,x);
case  2 :
return _SLASH___9164.call(this,x,y);
default:
return _SLASH___9165.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9165.cljs$lang$applyTo;
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
var _LT___9175 = (function (x){
return true;
});
var _LT___9176 = (function (x,y){
return (x < y);
});
var _LT___9177 = (function() { 
var G__9179__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9180 = y;
var G__9181 = cljs.core.first.call(null,more);
var G__9182 = cljs.core.next.call(null,more);
x = G__9180;
y = G__9181;
more = G__9182;
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
var G__9179 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9179__delegate.call(this, x, y, more);
};
G__9179.cljs$lang$maxFixedArity = 2;
G__9179.cljs$lang$applyTo = (function (arglist__9183){
var x = cljs.core.first(arglist__9183);
var y = cljs.core.first(cljs.core.next(arglist__9183));
var more = cljs.core.rest(cljs.core.next(arglist__9183));
return G__9179__delegate.call(this, x, y, more);
});
return G__9179;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9175.call(this,x);
case  2 :
return _LT___9176.call(this,x,y);
default:
return _LT___9177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9177.cljs$lang$applyTo;
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
var _LT__EQ___9190 = (function (x){
return true;
});
var _LT__EQ___9191 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9194 = (function() { 
var G__9201__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9202 = y;
var G__9203 = cljs.core.first.call(null,more);
var G__9204 = cljs.core.next.call(null,more);
x = G__9202;
y = G__9203;
more = G__9204;
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
var G__9201 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9201__delegate.call(this, x, y, more);
};
G__9201.cljs$lang$maxFixedArity = 2;
G__9201.cljs$lang$applyTo = (function (arglist__9207){
var x = cljs.core.first(arglist__9207);
var y = cljs.core.first(cljs.core.next(arglist__9207));
var more = cljs.core.rest(cljs.core.next(arglist__9207));
return G__9201__delegate.call(this, x, y, more);
});
return G__9201;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9190.call(this,x);
case  2 :
return _LT__EQ___9191.call(this,x,y);
default:
return _LT__EQ___9194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9194.cljs$lang$applyTo;
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
var _GT___9216 = (function (x){
return true;
});
var _GT___9217 = (function (x,y){
return (x > y);
});
var _GT___9218 = (function() { 
var G__9220__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9221 = y;
var G__9222 = cljs.core.first.call(null,more);
var G__9223 = cljs.core.next.call(null,more);
x = G__9221;
y = G__9222;
more = G__9223;
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
var G__9220 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9220__delegate.call(this, x, y, more);
};
G__9220.cljs$lang$maxFixedArity = 2;
G__9220.cljs$lang$applyTo = (function (arglist__9231){
var x = cljs.core.first(arglist__9231);
var y = cljs.core.first(cljs.core.next(arglist__9231));
var more = cljs.core.rest(cljs.core.next(arglist__9231));
return G__9220__delegate.call(this, x, y, more);
});
return G__9220;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9216.call(this,x);
case  2 :
return _GT___9217.call(this,x,y);
default:
return _GT___9218.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9218.cljs$lang$applyTo;
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
var _GT__EQ___9236 = (function (x){
return true;
});
var _GT__EQ___9239 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9240 = (function() { 
var G__9247__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9249 = y;
var G__9250 = cljs.core.first.call(null,more);
var G__9251 = cljs.core.next.call(null,more);
x = G__9249;
y = G__9250;
more = G__9251;
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
var G__9247 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9247__delegate.call(this, x, y, more);
};
G__9247.cljs$lang$maxFixedArity = 2;
G__9247.cljs$lang$applyTo = (function (arglist__9253){
var x = cljs.core.first(arglist__9253);
var y = cljs.core.first(cljs.core.next(arglist__9253));
var more = cljs.core.rest(cljs.core.next(arglist__9253));
return G__9247__delegate.call(this, x, y, more);
});
return G__9247;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9236.call(this,x);
case  2 :
return _GT__EQ___9239.call(this,x,y);
default:
return _GT__EQ___9240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9240.cljs$lang$applyTo;
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
var max__9271 = (function (x){
return x;
});
var max__9272 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9273 = (function() { 
var G__9275__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9275 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9275__delegate.call(this, x, y, more);
};
G__9275.cljs$lang$maxFixedArity = 2;
G__9275.cljs$lang$applyTo = (function (arglist__9276){
var x = cljs.core.first(arglist__9276);
var y = cljs.core.first(cljs.core.next(arglist__9276));
var more = cljs.core.rest(cljs.core.next(arglist__9276));
return G__9275__delegate.call(this, x, y, more);
});
return G__9275;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9271.call(this,x);
case  2 :
return max__9272.call(this,x,y);
default:
return max__9273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9273.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9290 = (function (x){
return x;
});
var min__9291 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9292 = (function() { 
var G__9295__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9295 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9295__delegate.call(this, x, y, more);
};
G__9295.cljs$lang$maxFixedArity = 2;
G__9295.cljs$lang$applyTo = (function (arglist__9297){
var x = cljs.core.first(arglist__9297);
var y = cljs.core.first(cljs.core.next(arglist__9297));
var more = cljs.core.rest(cljs.core.next(arglist__9297));
return G__9295__delegate.call(this, x, y, more);
});
return G__9295;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9290.call(this,x);
case  2 :
return min__9291.call(this,x,y);
default:
return min__9292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9292.cljs$lang$applyTo;
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
var rem__9425 = (n % d);

return cljs.core.fix.call(null,((n - rem__9425) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9428 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9428));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9433 = (function (){
return Math.random.call(null);
});
var rand__9434 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9433.call(this);
case  1 :
return rand__9434.call(this,n);
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
var _EQ__EQ___9456 = (function (x){
return true;
});
var _EQ__EQ___9457 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9458 = (function() { 
var G__9464__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9466 = y;
var G__9467 = cljs.core.first.call(null,more);
var G__9468 = cljs.core.next.call(null,more);
x = G__9466;
y = G__9467;
more = G__9468;
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
var G__9464 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9464__delegate.call(this, x, y, more);
};
G__9464.cljs$lang$maxFixedArity = 2;
G__9464.cljs$lang$applyTo = (function (arglist__9472){
var x = cljs.core.first(arglist__9472);
var y = cljs.core.first(cljs.core.next(arglist__9472));
var more = cljs.core.rest(cljs.core.next(arglist__9472));
return G__9464__delegate.call(this, x, y, more);
});
return G__9464;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9456.call(this,x);
case  2 :
return _EQ__EQ___9457.call(this,x,y);
default:
return _EQ__EQ___9458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9458.cljs$lang$applyTo;
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
var n__9594 = n;
var xs__9595 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9596 = xs__9595;

if(cljs.core.truth_(and__3546__auto____9596))
{return (n__9594 > 0);
} else
{return and__3546__auto____9596;
}
})()))
{{
var G__9599 = (n__9594 - 1);
var G__9600 = cljs.core.next.call(null,xs__9595);
n__9594 = G__9599;
xs__9595 = G__9600;
continue;
}
} else
{return xs__9595;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9614 = null;
var G__9614__9615 = (function (coll,n){
var temp__3695__auto____9604 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9604))
{var xs__9605 = temp__3695__auto____9604;

return cljs.core.first.call(null,xs__9605);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9614__9616 = (function (coll,n,not_found){
var temp__3695__auto____9608 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9608))
{var xs__9609 = temp__3695__auto____9608;

return cljs.core.first.call(null,xs__9609);
} else
{return not_found;
}
});
G__9614 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9614__9615.call(this,coll,n);
case  3 :
return G__9614__9616.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9614;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9626 = (function (){
return "";
});
var str_STAR___9627 = (function (x){
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
var str_STAR___9628 = (function() { 
var G__9631__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9632 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9633 = cljs.core.next.call(null,more);
sb = G__9632;
more = G__9633;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9631 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9631__delegate.call(this, x, ys);
};
G__9631.cljs$lang$maxFixedArity = 1;
G__9631.cljs$lang$applyTo = (function (arglist__9639){
var x = cljs.core.first(arglist__9639);
var ys = cljs.core.rest(arglist__9639);
return G__9631__delegate.call(this, x, ys);
});
return G__9631;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9626.call(this);
case  1 :
return str_STAR___9627.call(this,x);
default:
return str_STAR___9628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9628.cljs$lang$applyTo;
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
var str__9665 = (function (){
return "";
});
var str__9666 = (function (x){
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
var str__9667 = (function() { 
var G__9669__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9669 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9669__delegate.call(this, x, ys);
};
G__9669.cljs$lang$maxFixedArity = 1;
G__9669.cljs$lang$applyTo = (function (arglist__9672){
var x = cljs.core.first(arglist__9672);
var ys = cljs.core.rest(arglist__9672);
return G__9669__delegate.call(this, x, ys);
});
return G__9669;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9665.call(this);
case  1 :
return str__9666.call(this,x);
default:
return str__9667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9667.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9674 = (function (s,start){
return s.substring(start);
});
var subs__9675 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9674.call(this,s,start);
case  3 :
return subs__9675.call(this,s,start,end);
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
var symbol__9685 = (function (name){
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
var symbol__9687 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9685.call(this,ns);
case  2 :
return symbol__9687.call(this,ns,name);
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
var keyword__9736 = (function (name){
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
var keyword__9737 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9736.call(this,ns);
case  2 :
return keyword__9737.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9745 = cljs.core.seq.call(null,x);
var ys__9746 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9745)))
{return cljs.core.nil_QMARK_.call(null,ys__9746);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9746)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9745),cljs.core.first.call(null,ys__9746))))
{{
var G__9752 = cljs.core.next.call(null,xs__9745);
var G__9753 = cljs.core.next.call(null,ys__9746);
xs__9745 = G__9752;
ys__9746 = G__9753;
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
return cljs.core.reduce.call(null,(function (p1__9756_SHARP_,p2__9758_SHARP_){
return cljs.core.hash_combine.call(null,p1__9756_SHARP_,cljs.core.hash.call(null,p2__9758_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9766__9767 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9766__9767))
{var G__9769__9771 = cljs.core.first.call(null,G__9766__9767);
var vec__9770__9772 = G__9769__9771;
var key_name__9773 = cljs.core.nth.call(null,vec__9770__9772,0,null);
var f__9774 = cljs.core.nth.call(null,vec__9770__9772,1,null);
var G__9766__9775 = G__9766__9767;

var G__9769__9776 = G__9769__9771;
var G__9766__9777 = G__9766__9775;

while(true){
var vec__9778__9779 = G__9769__9776;
var key_name__9780 = cljs.core.nth.call(null,vec__9778__9779,0,null);
var f__9781 = cljs.core.nth.call(null,vec__9778__9779,1,null);
var G__9766__9782 = G__9766__9777;

var str_name__9783 = cljs.core.name.call(null,key_name__9780);

obj[str_name__9783] = f__9781;
var temp__3698__auto____9784 = cljs.core.next.call(null,G__9766__9782);

if(cljs.core.truth_(temp__3698__auto____9784))
{var G__9766__9785 = temp__3698__auto____9784;

{
var G__9793 = cljs.core.first.call(null,G__9766__9785);
var G__9795 = G__9766__9785;
G__9769__9776 = G__9793;
G__9766__9777 = G__9795;
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
var this__9808 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9811 = this;
return (new cljs.core.List(this__9811.meta,o,coll,(this__9811.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9812 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9813 = this;
return this__9813.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9814 = this;
return this__9814.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9815 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9816 = this;
return this__9816.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9817 = this;
return this__9817.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9818 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9901 = this;
return (new cljs.core.List(meta,this__9901.first,this__9901.rest,this__9901.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9903 = this;
return this__9903.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9905 = this;
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
var this__9914 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9917 = this;
return (new cljs.core.List(this__9917.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9919 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9921 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9924 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9926 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9927 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9928 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9929 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9930 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9931 = this;
return this__9931.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9932 = this;
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
list.cljs$lang$applyTo = (function (arglist__9976){
var items = cljs.core.seq( arglist__9976 );;
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
var this__9983 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9985 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9987 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9988 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9988.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9989 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9990 = this;
return this__9990.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9991 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9991.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9991.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9992 = this;
return this__9992.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9993 = this;
return (new cljs.core.Cons(meta,this__9993.first,this__9993.rest));
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
var G__10033 = null;
var G__10033__10034 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10033__10035 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10033 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10033__10034.call(this,string,f);
case  3 :
return G__10033__10035.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10033;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10037 = null;
var G__10037__10038 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10037__10039 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10037 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10037__10038.call(this,string,k);
case  3 :
return G__10037__10039.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10037;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10041 = null;
var G__10041__10042 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10041__10043 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10041 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10041__10042.call(this,string,n);
case  3 :
return G__10041__10043.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10041;
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
var G__10056 = null;
var G__10056__10057 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10056__10058 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10056 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10056__10057.call(this,this$,coll);
case  3 :
return G__10056__10058.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10056;
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
var x__10078 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10078;
} else
{lazy_seq.x = x__10078.call(null);
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
var this__10081 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10082 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10084 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10084.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10085 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10090 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10091 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10094 = this;
return this__10094.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10098 = this;
return (new cljs.core.LazySeq(meta,this__10098.realized,this__10098.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10115 = cljs.core.array.call(null);

var s__10116 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10116)))
{ary__10115.push(cljs.core.first.call(null,s__10116));
{
var G__10117 = cljs.core.next.call(null,s__10116);
s__10116 = G__10117;
continue;
}
} else
{return ary__10115;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10119 = s;
var i__10143 = n;
var sum__10144 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10145 = (i__10143 > 0);

if(cljs.core.truth_(and__3546__auto____10145))
{return cljs.core.seq.call(null,s__10119);
} else
{return and__3546__auto____10145;
}
})()))
{{
var G__10147 = cljs.core.next.call(null,s__10119);
var G__10148 = (i__10143 - 1);
var G__10149 = (sum__10144 + 1);
s__10119 = G__10147;
i__10143 = G__10148;
sum__10144 = G__10149;
continue;
}
} else
{return sum__10144;
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
var concat__10166 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10167 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10168 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10153 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10153))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10153),concat.call(null,cljs.core.rest.call(null,s__10153),y));
} else
{return y;
}
})));
});
var concat__10169 = (function() { 
var G__10172__delegate = function (x,y,zs){
var cat__10162 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10158 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10158))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10158),cat.call(null,cljs.core.rest.call(null,xys__10158),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10162.call(null,concat.call(null,x,y),zs);
};
var G__10172 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10172__delegate.call(this, x, y, zs);
};
G__10172.cljs$lang$maxFixedArity = 2;
G__10172.cljs$lang$applyTo = (function (arglist__10173){
var x = cljs.core.first(arglist__10173);
var y = cljs.core.first(cljs.core.next(arglist__10173));
var zs = cljs.core.rest(cljs.core.next(arglist__10173));
return G__10172__delegate.call(this, x, y, zs);
});
return G__10172;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10166.call(this);
case  1 :
return concat__10167.call(this,x);
case  2 :
return concat__10168.call(this,x,y);
default:
return concat__10169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10169.cljs$lang$applyTo;
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
var list_STAR___10180 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10181 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10182 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10184 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10185 = (function() { 
var G__10188__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10188 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10188__delegate.call(this, a, b, c, d, more);
};
G__10188.cljs$lang$maxFixedArity = 4;
G__10188.cljs$lang$applyTo = (function (arglist__10190){
var a = cljs.core.first(arglist__10190);
var b = cljs.core.first(cljs.core.next(arglist__10190));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10190)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10190))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10190))));
return G__10188__delegate.call(this, a, b, c, d, more);
});
return G__10188;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10180.call(this,a);
case  2 :
return list_STAR___10181.call(this,a,b);
case  3 :
return list_STAR___10182.call(this,a,b,c);
case  4 :
return list_STAR___10184.call(this,a,b,c,d);
default:
return list_STAR___10185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10185.cljs$lang$applyTo;
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
var fixed_arity__10195 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10195 + 1)) <= fixed_arity__10195)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10216 = (function (f,x,args){
var arglist__10199 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10200 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10199,fixed_arity__10200) <= fixed_arity__10200)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10199));
} else
{return f.cljs$lang$applyTo(arglist__10199);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10199));
}
});
var apply__10217 = (function (f,x,y,args){
var arglist__10201 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10202 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10201,fixed_arity__10202) <= fixed_arity__10202)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10201));
} else
{return f.cljs$lang$applyTo(arglist__10201);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10201));
}
});
var apply__10218 = (function (f,x,y,z,args){
var arglist__10209 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10210 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10209,fixed_arity__10210) <= fixed_arity__10210)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10209));
} else
{return f.cljs$lang$applyTo(arglist__10209);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10209));
}
});
var apply__10219 = (function() { 
var G__10225__delegate = function (f,a,b,c,d,args){
var arglist__10213 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10214 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10213,fixed_arity__10214) <= fixed_arity__10214)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10213));
} else
{return f.cljs$lang$applyTo(arglist__10213);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10213));
}
};
var G__10225 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10225__delegate.call(this, f, a, b, c, d, args);
};
G__10225.cljs$lang$maxFixedArity = 5;
G__10225.cljs$lang$applyTo = (function (arglist__10227){
var f = cljs.core.first(arglist__10227);
var a = cljs.core.first(cljs.core.next(arglist__10227));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10227)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10227))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10227)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10227)))));
return G__10225__delegate.call(this, f, a, b, c, d, args);
});
return G__10225;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10235){
var obj = cljs.core.first(arglist__10235);
var f = cljs.core.first(cljs.core.next(arglist__10235));
var args = cljs.core.rest(cljs.core.next(arglist__10235));
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
var not_EQ___10336 = (function (x){
return false;
});
var not_EQ___10337 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10338 = (function() { 
var G__10340__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10340 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10340__delegate.call(this, x, y, more);
};
G__10340.cljs$lang$maxFixedArity = 2;
G__10340.cljs$lang$applyTo = (function (arglist__10341){
var x = cljs.core.first(arglist__10341);
var y = cljs.core.first(cljs.core.next(arglist__10341));
var more = cljs.core.rest(cljs.core.next(arglist__10341));
return G__10340__delegate.call(this, x, y, more);
});
return G__10340;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10336.call(this,x);
case  2 :
return not_EQ___10337.call(this,x,y);
default:
return not_EQ___10338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10338.cljs$lang$applyTo;
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
var G__10352 = pred;
var G__10353 = cljs.core.next.call(null,coll);
pred = G__10352;
coll = G__10353;
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
{var or__3548__auto____10358 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10358))
{return or__3548__auto____10358;
} else
{{
var G__10361 = pred;
var G__10362 = cljs.core.next.call(null,coll);
pred = G__10361;
coll = G__10362;
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
var G__10380 = null;
var G__10380__10381 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10380__10382 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10380__10384 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10380__10385 = (function() { 
var G__10388__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10388 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10388__delegate.call(this, x, y, zs);
};
G__10388.cljs$lang$maxFixedArity = 2;
G__10388.cljs$lang$applyTo = (function (arglist__10390){
var x = cljs.core.first(arglist__10390);
var y = cljs.core.first(cljs.core.next(arglist__10390));
var zs = cljs.core.rest(cljs.core.next(arglist__10390));
return G__10388__delegate.call(this, x, y, zs);
});
return G__10388;
})()
;
G__10380 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10380__10381.call(this);
case  1 :
return G__10380__10382.call(this,x);
case  2 :
return G__10380__10384.call(this,x,y);
default:
return G__10380__10385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10380.cljs$lang$maxFixedArity = 2;
G__10380.cljs$lang$applyTo = G__10380__10385.cljs$lang$applyTo;
return G__10380;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10393__delegate = function (args){
return x;
};
var G__10393 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10393__delegate.call(this, args);
};
G__10393.cljs$lang$maxFixedArity = 0;
G__10393.cljs$lang$applyTo = (function (arglist__10394){
var args = cljs.core.seq( arglist__10394 );;
return G__10393__delegate.call(this, args);
});
return G__10393;
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
var comp__10468 = (function (){
return cljs.core.identity;
});
var comp__10469 = (function (f){
return f;
});
var comp__10470 = (function (f,g){
return (function() {
var G__10474 = null;
var G__10474__10476 = (function (){
return f.call(null,g.call(null));
});
var G__10474__10477 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10474__10478 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10474__10479 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10474__10480 = (function() { 
var G__10572__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10572 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10572__delegate.call(this, x, y, z, args);
};
G__10572.cljs$lang$maxFixedArity = 3;
G__10572.cljs$lang$applyTo = (function (arglist__10573){
var x = cljs.core.first(arglist__10573);
var y = cljs.core.first(cljs.core.next(arglist__10573));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10573)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10573)));
return G__10572__delegate.call(this, x, y, z, args);
});
return G__10572;
})()
;
G__10474 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10474__10476.call(this);
case  1 :
return G__10474__10477.call(this,x);
case  2 :
return G__10474__10478.call(this,x,y);
case  3 :
return G__10474__10479.call(this,x,y,z);
default:
return G__10474__10480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10474.cljs$lang$maxFixedArity = 3;
G__10474.cljs$lang$applyTo = G__10474__10480.cljs$lang$applyTo;
return G__10474;
})()
});
var comp__10471 = (function (f,g,h){
return (function() {
var G__10574 = null;
var G__10574__10575 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10574__10576 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10574__10577 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10574__10578 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10574__10579 = (function() { 
var G__10582__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10582 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10582__delegate.call(this, x, y, z, args);
};
G__10582.cljs$lang$maxFixedArity = 3;
G__10582.cljs$lang$applyTo = (function (arglist__10584){
var x = cljs.core.first(arglist__10584);
var y = cljs.core.first(cljs.core.next(arglist__10584));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10584)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10584)));
return G__10582__delegate.call(this, x, y, z, args);
});
return G__10582;
})()
;
G__10574 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10574__10575.call(this);
case  1 :
return G__10574__10576.call(this,x);
case  2 :
return G__10574__10577.call(this,x,y);
case  3 :
return G__10574__10578.call(this,x,y,z);
default:
return G__10574__10579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10574.cljs$lang$maxFixedArity = 3;
G__10574.cljs$lang$applyTo = G__10574__10579.cljs$lang$applyTo;
return G__10574;
})()
});
var comp__10472 = (function() { 
var G__10585__delegate = function (f1,f2,f3,fs){
var fs__10460 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10586__delegate = function (args){
var ret__10462 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10460),args);
var fs__10464 = cljs.core.next.call(null,fs__10460);

while(true){
if(cljs.core.truth_(fs__10464))
{{
var G__10587 = cljs.core.first.call(null,fs__10464).call(null,ret__10462);
var G__10588 = cljs.core.next.call(null,fs__10464);
ret__10462 = G__10587;
fs__10464 = G__10588;
continue;
}
} else
{return ret__10462;
}
break;
}
};
var G__10586 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10586__delegate.call(this, args);
};
G__10586.cljs$lang$maxFixedArity = 0;
G__10586.cljs$lang$applyTo = (function (arglist__10589){
var args = cljs.core.seq( arglist__10589 );;
return G__10586__delegate.call(this, args);
});
return G__10586;
})()
;
};
var G__10585 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10585__delegate.call(this, f1, f2, f3, fs);
};
G__10585.cljs$lang$maxFixedArity = 3;
G__10585.cljs$lang$applyTo = (function (arglist__10590){
var f1 = cljs.core.first(arglist__10590);
var f2 = cljs.core.first(cljs.core.next(arglist__10590));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10590)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10590)));
return G__10585__delegate.call(this, f1, f2, f3, fs);
});
return G__10585;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10468.call(this);
case  1 :
return comp__10469.call(this,f1);
case  2 :
return comp__10470.call(this,f1,f2);
case  3 :
return comp__10471.call(this,f1,f2,f3);
default:
return comp__10472.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10472.cljs$lang$applyTo;
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
var partial__10601 = (function (f,arg1){
return (function() { 
var G__10606__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10606 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10606__delegate.call(this, args);
};
G__10606.cljs$lang$maxFixedArity = 0;
G__10606.cljs$lang$applyTo = (function (arglist__10607){
var args = cljs.core.seq( arglist__10607 );;
return G__10606__delegate.call(this, args);
});
return G__10606;
})()
;
});
var partial__10602 = (function (f,arg1,arg2){
return (function() { 
var G__10608__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10608 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10608__delegate.call(this, args);
};
G__10608.cljs$lang$maxFixedArity = 0;
G__10608.cljs$lang$applyTo = (function (arglist__10609){
var args = cljs.core.seq( arglist__10609 );;
return G__10608__delegate.call(this, args);
});
return G__10608;
})()
;
});
var partial__10603 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10610__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10610 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10610__delegate.call(this, args);
};
G__10610.cljs$lang$maxFixedArity = 0;
G__10610.cljs$lang$applyTo = (function (arglist__10611){
var args = cljs.core.seq( arglist__10611 );;
return G__10610__delegate.call(this, args);
});
return G__10610;
})()
;
});
var partial__10604 = (function() { 
var G__10612__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10613__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10613 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10613__delegate.call(this, args);
};
G__10613.cljs$lang$maxFixedArity = 0;
G__10613.cljs$lang$applyTo = (function (arglist__10619){
var args = cljs.core.seq( arglist__10619 );;
return G__10613__delegate.call(this, args);
});
return G__10613;
})()
;
};
var G__10612 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10612__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10612.cljs$lang$maxFixedArity = 4;
G__10612.cljs$lang$applyTo = (function (arglist__10626){
var f = cljs.core.first(arglist__10626);
var arg1 = cljs.core.first(cljs.core.next(arglist__10626));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10626)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10626))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10626))));
return G__10612__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10612;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10601.call(this,f,arg1);
case  3 :
return partial__10602.call(this,f,arg1,arg2);
case  4 :
return partial__10603.call(this,f,arg1,arg2,arg3);
default:
return partial__10604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10604.cljs$lang$applyTo;
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
var fnil__10666 = (function (f,x){
return (function() {
var G__10671 = null;
var G__10671__10672 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10671__10673 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10671__10674 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10671__10675 = (function() { 
var G__10678__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10678 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10678__delegate.call(this, a, b, c, ds);
};
G__10678.cljs$lang$maxFixedArity = 3;
G__10678.cljs$lang$applyTo = (function (arglist__10681){
var a = cljs.core.first(arglist__10681);
var b = cljs.core.first(cljs.core.next(arglist__10681));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10681)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10681)));
return G__10678__delegate.call(this, a, b, c, ds);
});
return G__10678;
})()
;
G__10671 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10671__10672.call(this,a);
case  2 :
return G__10671__10673.call(this,a,b);
case  3 :
return G__10671__10674.call(this,a,b,c);
default:
return G__10671__10675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10671.cljs$lang$maxFixedArity = 3;
G__10671.cljs$lang$applyTo = G__10671__10675.cljs$lang$applyTo;
return G__10671;
})()
});
var fnil__10667 = (function (f,x,y){
return (function() {
var G__10684 = null;
var G__10684__10685 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10684__10686 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10684__10687 = (function() { 
var G__10690__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10690 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10690__delegate.call(this, a, b, c, ds);
};
G__10690.cljs$lang$maxFixedArity = 3;
G__10690.cljs$lang$applyTo = (function (arglist__10692){
var a = cljs.core.first(arglist__10692);
var b = cljs.core.first(cljs.core.next(arglist__10692));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10692)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10692)));
return G__10690__delegate.call(this, a, b, c, ds);
});
return G__10690;
})()
;
G__10684 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10684__10685.call(this,a,b);
case  3 :
return G__10684__10686.call(this,a,b,c);
default:
return G__10684__10687.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10684.cljs$lang$maxFixedArity = 3;
G__10684.cljs$lang$applyTo = G__10684__10687.cljs$lang$applyTo;
return G__10684;
})()
});
var fnil__10668 = (function (f,x,y,z){
return (function() {
var G__10695 = null;
var G__10695__10696 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10695__10697 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10695__10698 = (function() { 
var G__10709__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10709 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10709__delegate.call(this, a, b, c, ds);
};
G__10709.cljs$lang$maxFixedArity = 3;
G__10709.cljs$lang$applyTo = (function (arglist__10717){
var a = cljs.core.first(arglist__10717);
var b = cljs.core.first(cljs.core.next(arglist__10717));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10717)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10717)));
return G__10709__delegate.call(this, a, b, c, ds);
});
return G__10709;
})()
;
G__10695 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10695__10696.call(this,a,b);
case  3 :
return G__10695__10697.call(this,a,b,c);
default:
return G__10695__10698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10695.cljs$lang$maxFixedArity = 3;
G__10695.cljs$lang$applyTo = G__10695__10698.cljs$lang$applyTo;
return G__10695;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10666.call(this,f,x);
case  3 :
return fnil__10667.call(this,f,x,y);
case  4 :
return fnil__10668.call(this,f,x,y,z);
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
var mapi__10732 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10727 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10727))
{var s__10729 = temp__3698__auto____10727;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10729)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10729)));
} else
{return null;
}
})));
});

return mapi__10732.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10753 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10753))
{var s__10754 = temp__3698__auto____10753;

var x__10755 = f.call(null,cljs.core.first.call(null,s__10754));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10755)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10754));
} else
{return cljs.core.cons.call(null,x__10755,keep.call(null,f,cljs.core.rest.call(null,s__10754)));
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
var keepi__10810 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10806 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10806))
{var s__10808 = temp__3698__auto____10806;

var x__10809 = f.call(null,idx,cljs.core.first.call(null,s__10808));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10809)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10808));
} else
{return cljs.core.cons.call(null,x__10809,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10808)));
}
} else
{return null;
}
})));
});

return keepi__10810.call(null,0,coll);
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
var every_pred__11201 = (function (p){
return (function() {
var ep1 = null;
var ep1__11206 = (function (){
return true;
});
var ep1__11207 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11208 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10818 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10818))
{return p.call(null,y);
} else
{return and__3546__auto____10818;
}
})());
});
var ep1__11210 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10828 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10828))
{var and__3546__auto____10829 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10829))
{return p.call(null,z);
} else
{return and__3546__auto____10829;
}
} else
{return and__3546__auto____10828;
}
})());
});
var ep1__11212 = (function() { 
var G__11217__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10830 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10830))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10830;
}
})());
};
var G__11217 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11217__delegate.call(this, x, y, z, args);
};
G__11217.cljs$lang$maxFixedArity = 3;
G__11217.cljs$lang$applyTo = (function (arglist__11225){
var x = cljs.core.first(arglist__11225);
var y = cljs.core.first(cljs.core.next(arglist__11225));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11225)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11225)));
return G__11217__delegate.call(this, x, y, z, args);
});
return G__11217;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11206.call(this);
case  1 :
return ep1__11207.call(this,x);
case  2 :
return ep1__11208.call(this,x,y);
case  3 :
return ep1__11210.call(this,x,y,z);
default:
return ep1__11212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11212.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11202 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11226 = (function (){
return true;
});
var ep2__11227 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10833 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10833))
{return p2.call(null,x);
} else
{return and__3546__auto____10833;
}
})());
});
var ep2__11228 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10834 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10834))
{var and__3546__auto____10838 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10838))
{var and__3546__auto____10845 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10845))
{return p2.call(null,y);
} else
{return and__3546__auto____10845;
}
} else
{return and__3546__auto____10838;
}
} else
{return and__3546__auto____10834;
}
})());
});
var ep2__11229 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10852 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10852))
{var and__3546__auto____10854 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10854))
{var and__3546__auto____10855 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10855))
{var and__3546__auto____10856 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10856))
{var and__3546__auto____10858 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10858))
{return p2.call(null,z);
} else
{return and__3546__auto____10858;
}
} else
{return and__3546__auto____10856;
}
} else
{return and__3546__auto____10855;
}
} else
{return and__3546__auto____10854;
}
} else
{return and__3546__auto____10852;
}
})());
});
var ep2__11230 = (function() { 
var G__11233__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10866 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10866))
{return cljs.core.every_QMARK_.call(null,(function (p1__10778_SHARP_){
var and__3546__auto____10867 = p1.call(null,p1__10778_SHARP_);

if(cljs.core.truth_(and__3546__auto____10867))
{return p2.call(null,p1__10778_SHARP_);
} else
{return and__3546__auto____10867;
}
}),args);
} else
{return and__3546__auto____10866;
}
})());
};
var G__11233 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11233__delegate.call(this, x, y, z, args);
};
G__11233.cljs$lang$maxFixedArity = 3;
G__11233.cljs$lang$applyTo = (function (arglist__11236){
var x = cljs.core.first(arglist__11236);
var y = cljs.core.first(cljs.core.next(arglist__11236));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11236)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11236)));
return G__11233__delegate.call(this, x, y, z, args);
});
return G__11233;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11226.call(this);
case  1 :
return ep2__11227.call(this,x);
case  2 :
return ep2__11228.call(this,x,y);
case  3 :
return ep2__11229.call(this,x,y,z);
default:
return ep2__11230.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11230.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11203 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11243 = (function (){
return true;
});
var ep3__11244 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10986 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10986))
{var and__3546__auto____10987 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10987))
{return p3.call(null,x);
} else
{return and__3546__auto____10987;
}
} else
{return and__3546__auto____10986;
}
})());
});
var ep3__11245 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10990 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10990))
{var and__3546__auto____10992 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10992))
{var and__3546__auto____10994 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10994))
{var and__3546__auto____10997 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10997))
{var and__3546__auto____11002 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11002))
{return p3.call(null,y);
} else
{return and__3546__auto____11002;
}
} else
{return and__3546__auto____10997;
}
} else
{return and__3546__auto____10994;
}
} else
{return and__3546__auto____10992;
}
} else
{return and__3546__auto____10990;
}
})());
});
var ep3__11246 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11010 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11010))
{var and__3546__auto____11011 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11011))
{var and__3546__auto____11013 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11013))
{var and__3546__auto____11015 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11015))
{var and__3546__auto____11019 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11019))
{var and__3546__auto____11022 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11022))
{var and__3546__auto____11026 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11026))
{var and__3546__auto____11029 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11029))
{return p3.call(null,z);
} else
{return and__3546__auto____11029;
}
} else
{return and__3546__auto____11026;
}
} else
{return and__3546__auto____11022;
}
} else
{return and__3546__auto____11019;
}
} else
{return and__3546__auto____11015;
}
} else
{return and__3546__auto____11013;
}
} else
{return and__3546__auto____11011;
}
} else
{return and__3546__auto____11010;
}
})());
});
var ep3__11247 = (function() { 
var G__11266__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11037 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11037))
{return cljs.core.every_QMARK_.call(null,(function (p1__10785_SHARP_){
var and__3546__auto____11040 = p1.call(null,p1__10785_SHARP_);

if(cljs.core.truth_(and__3546__auto____11040))
{var and__3546__auto____11043 = p2.call(null,p1__10785_SHARP_);

if(cljs.core.truth_(and__3546__auto____11043))
{return p3.call(null,p1__10785_SHARP_);
} else
{return and__3546__auto____11043;
}
} else
{return and__3546__auto____11040;
}
}),args);
} else
{return and__3546__auto____11037;
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
G__11266.cljs$lang$applyTo = (function (arglist__11269){
var x = cljs.core.first(arglist__11269);
var y = cljs.core.first(cljs.core.next(arglist__11269));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11269)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11269)));
return G__11266__delegate.call(this, x, y, z, args);
});
return G__11266;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11243.call(this);
case  1 :
return ep3__11244.call(this,x);
case  2 :
return ep3__11245.call(this,x,y);
case  3 :
return ep3__11246.call(this,x,y,z);
default:
return ep3__11247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11247.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11204 = (function() { 
var G__11270__delegate = function (p1,p2,p3,ps){
var ps__11049 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11271 = (function (){
return true;
});
var epn__11272 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10788_SHARP_){
return p1__10788_SHARP_.call(null,x);
}),ps__11049);
});
var epn__11274 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10790_SHARP_){
var and__3546__auto____11055 = p1__10790_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11055))
{return p1__10790_SHARP_.call(null,y);
} else
{return and__3546__auto____11055;
}
}),ps__11049);
});
var epn__11275 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10792_SHARP_){
var and__3546__auto____11062 = p1__10792_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11062))
{var and__3546__auto____11064 = p1__10792_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11064))
{return p1__10792_SHARP_.call(null,z);
} else
{return and__3546__auto____11064;
}
} else
{return and__3546__auto____11062;
}
}),ps__11049);
});
var epn__11276 = (function() { 
var G__11284__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11197 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11197))
{return cljs.core.every_QMARK_.call(null,(function (p1__10795_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10795_SHARP_,args);
}),ps__11049);
} else
{return and__3546__auto____11197;
}
})());
};
var G__11284 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11284__delegate.call(this, x, y, z, args);
};
G__11284.cljs$lang$maxFixedArity = 3;
G__11284.cljs$lang$applyTo = (function (arglist__11294){
var x = cljs.core.first(arglist__11294);
var y = cljs.core.first(cljs.core.next(arglist__11294));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11294)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11294)));
return G__11284__delegate.call(this, x, y, z, args);
});
return G__11284;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11271.call(this);
case  1 :
return epn__11272.call(this,x);
case  2 :
return epn__11274.call(this,x,y);
case  3 :
return epn__11275.call(this,x,y,z);
default:
return epn__11276.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11276.cljs$lang$applyTo;
return epn;
})()
};
var G__11270 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11270__delegate.call(this, p1, p2, p3, ps);
};
G__11270.cljs$lang$maxFixedArity = 3;
G__11270.cljs$lang$applyTo = (function (arglist__11299){
var p1 = cljs.core.first(arglist__11299);
var p2 = cljs.core.first(cljs.core.next(arglist__11299));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11299)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11299)));
return G__11270__delegate.call(this, p1, p2, p3, ps);
});
return G__11270;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11201.call(this,p1);
case  2 :
return every_pred__11202.call(this,p1,p2);
case  3 :
return every_pred__11203.call(this,p1,p2,p3);
default:
return every_pred__11204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11204.cljs$lang$applyTo;
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
var some_fn__11430 = (function (p){
return (function() {
var sp1 = null;
var sp1__11435 = (function (){
return null;
});
var sp1__11436 = (function (x){
return p.call(null,x);
});
var sp1__11437 = (function (x,y){
var or__3548__auto____11311 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11311))
{return or__3548__auto____11311;
} else
{return p.call(null,y);
}
});
var sp1__11438 = (function (x,y,z){
var or__3548__auto____11313 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11313))
{return or__3548__auto____11313;
} else
{var or__3548__auto____11315 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11315))
{return or__3548__auto____11315;
} else
{return p.call(null,z);
}
}
});
var sp1__11439 = (function() { 
var G__11442__delegate = function (x,y,z,args){
var or__3548__auto____11318 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11318))
{return or__3548__auto____11318;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11442 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11442__delegate.call(this, x, y, z, args);
};
G__11442.cljs$lang$maxFixedArity = 3;
G__11442.cljs$lang$applyTo = (function (arglist__11443){
var x = cljs.core.first(arglist__11443);
var y = cljs.core.first(cljs.core.next(arglist__11443));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11443)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11443)));
return G__11442__delegate.call(this, x, y, z, args);
});
return G__11442;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11435.call(this);
case  1 :
return sp1__11436.call(this,x);
case  2 :
return sp1__11437.call(this,x,y);
case  3 :
return sp1__11438.call(this,x,y,z);
default:
return sp1__11439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11439.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11431 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11446 = (function (){
return null;
});
var sp2__11447 = (function (x){
var or__3548__auto____11322 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11322))
{return or__3548__auto____11322;
} else
{return p2.call(null,x);
}
});
var sp2__11448 = (function (x,y){
var or__3548__auto____11325 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11326 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{var or__3548__auto____11328 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11328))
{return or__3548__auto____11328;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11449 = (function (x,y,z){
var or__3548__auto____11330 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
} else
{var or__3548__auto____11332 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11332))
{return or__3548__auto____11332;
} else
{var or__3548__auto____11334 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11334))
{return or__3548__auto____11334;
} else
{var or__3548__auto____11335 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11335))
{return or__3548__auto____11335;
} else
{var or__3548__auto____11337 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11337))
{return or__3548__auto____11337;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11450 = (function() { 
var G__11575__delegate = function (x,y,z,args){
var or__3548__auto____11338 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11338))
{return or__3548__auto____11338;
} else
{return cljs.core.some.call(null,(function (p1__10811_SHARP_){
var or__3548__auto____11340 = p1.call(null,p1__10811_SHARP_);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{return p2.call(null,p1__10811_SHARP_);
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
G__11575.cljs$lang$applyTo = (function (arglist__11576){
var x = cljs.core.first(arglist__11576);
var y = cljs.core.first(cljs.core.next(arglist__11576));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11576)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11576)));
return G__11575__delegate.call(this, x, y, z, args);
});
return G__11575;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11446.call(this);
case  1 :
return sp2__11447.call(this,x);
case  2 :
return sp2__11448.call(this,x,y);
case  3 :
return sp2__11449.call(this,x,y,z);
default:
return sp2__11450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11450.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11432 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11582 = (function (){
return null;
});
var sp3__11583 = (function (x){
var or__3548__auto____11345 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11345))
{return or__3548__auto____11345;
} else
{var or__3548__auto____11346 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
} else
{return p3.call(null,x);
}
}
});
var sp3__11584 = (function (x,y){
var or__3548__auto____11349 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11349))
{return or__3548__auto____11349;
} else
{var or__3548__auto____11351 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11351))
{return or__3548__auto____11351;
} else
{var or__3548__auto____11352 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11352))
{return or__3548__auto____11352;
} else
{var or__3548__auto____11354 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11354))
{return or__3548__auto____11354;
} else
{var or__3548__auto____11355 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11355))
{return or__3548__auto____11355;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11585 = (function (x,y,z){
var or__3548__auto____11367 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11367))
{return or__3548__auto____11367;
} else
{var or__3548__auto____11371 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11371))
{return or__3548__auto____11371;
} else
{var or__3548__auto____11372 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11372))
{return or__3548__auto____11372;
} else
{var or__3548__auto____11373 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11373))
{return or__3548__auto____11373;
} else
{var or__3548__auto____11374 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11374))
{return or__3548__auto____11374;
} else
{var or__3548__auto____11375 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11375))
{return or__3548__auto____11375;
} else
{var or__3548__auto____11376 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11376))
{return or__3548__auto____11376;
} else
{var or__3548__auto____11378 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11378))
{return or__3548__auto____11378;
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
var sp3__11586 = (function() { 
var G__11597__delegate = function (x,y,z,args){
var or__3548__auto____11395 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11395))
{return or__3548__auto____11395;
} else
{return cljs.core.some.call(null,(function (p1__10812_SHARP_){
var or__3548__auto____11396 = p1.call(null,p1__10812_SHARP_);

if(cljs.core.truth_(or__3548__auto____11396))
{return or__3548__auto____11396;
} else
{var or__3548__auto____11397 = p2.call(null,p1__10812_SHARP_);

if(cljs.core.truth_(or__3548__auto____11397))
{return or__3548__auto____11397;
} else
{return p3.call(null,p1__10812_SHARP_);
}
}
}),args);
}
};
var G__11597 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11597__delegate.call(this, x, y, z, args);
};
G__11597.cljs$lang$maxFixedArity = 3;
G__11597.cljs$lang$applyTo = (function (arglist__11601){
var x = cljs.core.first(arglist__11601);
var y = cljs.core.first(cljs.core.next(arglist__11601));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11601)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11601)));
return G__11597__delegate.call(this, x, y, z, args);
});
return G__11597;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11582.call(this);
case  1 :
return sp3__11583.call(this,x);
case  2 :
return sp3__11584.call(this,x,y);
case  3 :
return sp3__11585.call(this,x,y,z);
default:
return sp3__11586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11586.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11433 = (function() { 
var G__11603__delegate = function (p1,p2,p3,ps){
var ps__11398 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11604 = (function (){
return null;
});
var spn__11605 = (function (x){
return cljs.core.some.call(null,(function (p1__10813_SHARP_){
return p1__10813_SHARP_.call(null,x);
}),ps__11398);
});
var spn__11606 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10814_SHARP_){
var or__3548__auto____11411 = p1__10814_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11411))
{return or__3548__auto____11411;
} else
{return p1__10814_SHARP_.call(null,y);
}
}),ps__11398);
});
var spn__11607 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10815_SHARP_){
var or__3548__auto____11412 = p1__10815_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11412))
{return or__3548__auto____11412;
} else
{var or__3548__auto____11415 = p1__10815_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11415))
{return or__3548__auto____11415;
} else
{return p1__10815_SHARP_.call(null,z);
}
}
}),ps__11398);
});
var spn__11610 = (function() { 
var G__11622__delegate = function (x,y,z,args){
var or__3548__auto____11417 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11417))
{return or__3548__auto____11417;
} else
{return cljs.core.some.call(null,(function (p1__10816_SHARP_){
return cljs.core.some.call(null,p1__10816_SHARP_,args);
}),ps__11398);
}
};
var G__11622 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11622__delegate.call(this, x, y, z, args);
};
G__11622.cljs$lang$maxFixedArity = 3;
G__11622.cljs$lang$applyTo = (function (arglist__11631){
var x = cljs.core.first(arglist__11631);
var y = cljs.core.first(cljs.core.next(arglist__11631));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11631)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11631)));
return G__11622__delegate.call(this, x, y, z, args);
});
return G__11622;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11604.call(this);
case  1 :
return spn__11605.call(this,x);
case  2 :
return spn__11606.call(this,x,y);
case  3 :
return spn__11607.call(this,x,y,z);
default:
return spn__11610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11610.cljs$lang$applyTo;
return spn;
})()
};
var G__11603 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11603__delegate.call(this, p1, p2, p3, ps);
};
G__11603.cljs$lang$maxFixedArity = 3;
G__11603.cljs$lang$applyTo = (function (arglist__11635){
var p1 = cljs.core.first(arglist__11635);
var p2 = cljs.core.first(cljs.core.next(arglist__11635));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11635)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11635)));
return G__11603__delegate.call(this, p1, p2, p3, ps);
});
return G__11603;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11430.call(this,p1);
case  2 :
return some_fn__11431.call(this,p1,p2);
case  3 :
return some_fn__11432.call(this,p1,p2,p3);
default:
return some_fn__11433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11433.cljs$lang$applyTo;
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
var map__11678 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11642 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11642))
{var s__11644 = temp__3698__auto____11642;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11644)),map.call(null,f,cljs.core.rest.call(null,s__11644)));
} else
{return null;
}
})));
});
var map__11679 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11647 = cljs.core.seq.call(null,c1);
var s2__11648 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11649 = s1__11647;

if(cljs.core.truth_(and__3546__auto____11649))
{return s2__11648;
} else
{return and__3546__auto____11649;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11647),cljs.core.first.call(null,s2__11648)),map.call(null,f,cljs.core.rest.call(null,s1__11647),cljs.core.rest.call(null,s2__11648)));
} else
{return null;
}
})));
});
var map__11681 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11652 = cljs.core.seq.call(null,c1);
var s2__11654 = cljs.core.seq.call(null,c2);
var s3__11655 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11657 = s1__11652;

if(cljs.core.truth_(and__3546__auto____11657))
{var and__3546__auto____11659 = s2__11654;

if(cljs.core.truth_(and__3546__auto____11659))
{return s3__11655;
} else
{return and__3546__auto____11659;
}
} else
{return and__3546__auto____11657;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11652),cljs.core.first.call(null,s2__11654),cljs.core.first.call(null,s3__11655)),map.call(null,f,cljs.core.rest.call(null,s1__11652),cljs.core.rest.call(null,s2__11654),cljs.core.rest.call(null,s3__11655)));
} else
{return null;
}
})));
});
var map__11682 = (function() { 
var G__11697__delegate = function (f,c1,c2,c3,colls){
var step__11672 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11661 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11661)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11661),step.call(null,map.call(null,cljs.core.rest,ss__11661)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11307_SHARP_){
return cljs.core.apply.call(null,f,p1__11307_SHARP_);
}),step__11672.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11697 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11697__delegate.call(this, f, c1, c2, c3, colls);
};
G__11697.cljs$lang$maxFixedArity = 4;
G__11697.cljs$lang$applyTo = (function (arglist__11723){
var f = cljs.core.first(arglist__11723);
var c1 = cljs.core.first(cljs.core.next(arglist__11723));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11723)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11723))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11723))));
return G__11697__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11697;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11678.call(this,f,c1);
case  3 :
return map__11679.call(this,f,c1,c2);
case  4 :
return map__11681.call(this,f,c1,c2,c3);
default:
return map__11682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11682.cljs$lang$applyTo;
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
{var temp__3698__auto____11729 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11729))
{var s__11730 = temp__3698__auto____11729;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11730),take.call(null,(n - 1),cljs.core.rest.call(null,s__11730)));
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
var step__11746 = (function (n,coll){
while(true){
var s__11741 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11743 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11743))
{return s__11741;
} else
{return and__3546__auto____11743;
}
})()))
{{
var G__11750 = (n - 1);
var G__11751 = cljs.core.rest.call(null,s__11741);
n = G__11750;
coll = G__11751;
continue;
}
} else
{return s__11741;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11746.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11756 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11758 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11756.call(this,n);
case  2 :
return drop_last__11758.call(this,n,s);
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
var s__11765 = cljs.core.seq.call(null,coll);
var lead__11766 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11766))
{{
var G__11786 = cljs.core.next.call(null,s__11765);
var G__11787 = cljs.core.next.call(null,lead__11766);
s__11765 = G__11786;
lead__11766 = G__11787;
continue;
}
} else
{return s__11765;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11795 = (function (pred,coll){
while(true){
var s__11791 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11792 = s__11791;

if(cljs.core.truth_(and__3546__auto____11792))
{return pred.call(null,cljs.core.first.call(null,s__11791));
} else
{return and__3546__auto____11792;
}
})()))
{{
var G__11803 = pred;
var G__11804 = cljs.core.rest.call(null,s__11791);
pred = G__11803;
coll = G__11804;
continue;
}
} else
{return s__11791;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11795.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11812))
{var s__11814 = temp__3698__auto____11812;

return cljs.core.concat.call(null,s__11814,cycle.call(null,s__11814));
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
var repeat__11821 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11822 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11821.call(this,n);
case  2 :
return repeat__11822.call(this,n,x);
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
var repeatedly__11832 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11833 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11832.call(this,n);
case  2 :
return repeatedly__11833.call(this,n,f);
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
var interleave__11855 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11845 = cljs.core.seq.call(null,c1);
var s2__11847 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11851 = s1__11845;

if(cljs.core.truth_(and__3546__auto____11851))
{return s2__11847;
} else
{return and__3546__auto____11851;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11845),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11847),interleave.call(null,cljs.core.rest.call(null,s1__11845),cljs.core.rest.call(null,s2__11847))));
} else
{return null;
}
})));
});
var interleave__11856 = (function() { 
var G__11863__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11854 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11854)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11854),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11854)));
} else
{return null;
}
})));
};
var G__11863 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11863__delegate.call(this, c1, c2, colls);
};
G__11863.cljs$lang$maxFixedArity = 2;
G__11863.cljs$lang$applyTo = (function (arglist__11865){
var c1 = cljs.core.first(arglist__11865);
var c2 = cljs.core.first(cljs.core.next(arglist__11865));
var colls = cljs.core.rest(cljs.core.next(arglist__11865));
return G__11863__delegate.call(this, c1, c2, colls);
});
return G__11863;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11855.call(this,c1,c2);
default:
return interleave__11856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11856.cljs$lang$applyTo;
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
var cat__11947 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11941 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11941))
{var coll__11942 = temp__3695__auto____11941;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11942),cat.call(null,cljs.core.rest.call(null,coll__11942),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11947.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11953 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11954 = (function() { 
var G__11958__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11958 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11958__delegate.call(this, f, coll, colls);
};
G__11958.cljs$lang$maxFixedArity = 2;
G__11958.cljs$lang$applyTo = (function (arglist__11963){
var f = cljs.core.first(arglist__11963);
var coll = cljs.core.first(cljs.core.next(arglist__11963));
var colls = cljs.core.rest(cljs.core.next(arglist__11963));
return G__11958__delegate.call(this, f, coll, colls);
});
return G__11958;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11953.call(this,f,coll);
default:
return mapcat__11954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11954.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11967 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11967))
{var s__11968 = temp__3698__auto____11967;

var f__11969 = cljs.core.first.call(null,s__11968);
var r__11970 = cljs.core.rest.call(null,s__11968);

if(cljs.core.truth_(pred.call(null,f__11969)))
{return cljs.core.cons.call(null,f__11969,filter.call(null,pred,r__11970));
} else
{return filter.call(null,pred,r__11970);
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
var walk__11983 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11983.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11982_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11982_SHARP_));
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
var partition__12025 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12026 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12014 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12014))
{var s__12016 = temp__3698__auto____12014;

var p__12017 = cljs.core.take.call(null,n,s__12016);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12017))))
{return cljs.core.cons.call(null,p__12017,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12016)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12027 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12020 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12020))
{var s__12021 = temp__3698__auto____12020;

var p__12022 = cljs.core.take.call(null,n,s__12021);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12022))))
{return cljs.core.cons.call(null,p__12022,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12021)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12022,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12025.call(this,n,step);
case  3 :
return partition__12026.call(this,n,step,pad);
case  4 :
return partition__12027.call(this,n,step,pad,coll);
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
var get_in__12036 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12037 = (function (m,ks,not_found){
var sentinel__12032 = cljs.core.lookup_sentinel;
var m__12033 = m;
var ks__12034 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12034))
{var m__12035 = cljs.core.get.call(null,m__12033,cljs.core.first.call(null,ks__12034),sentinel__12032);

if(cljs.core.truth_((sentinel__12032 === m__12035)))
{return not_found;
} else
{{
var G__12039 = sentinel__12032;
var G__12040 = m__12035;
var G__12041 = cljs.core.next.call(null,ks__12034);
sentinel__12032 = G__12039;
m__12033 = G__12040;
ks__12034 = G__12041;
continue;
}
}
} else
{return m__12033;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12036.call(this,m,ks);
case  3 :
return get_in__12037.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12045,v){
var vec__12046__12047 = p__12045;
var k__12048 = cljs.core.nth.call(null,vec__12046__12047,0,null);
var ks__12049 = cljs.core.nthnext.call(null,vec__12046__12047,1);

if(cljs.core.truth_(ks__12049))
{return cljs.core.assoc.call(null,m,k__12048,assoc_in.call(null,cljs.core.get.call(null,m,k__12048),ks__12049,v));
} else
{return cljs.core.assoc.call(null,m,k__12048,v);
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
var update_in__delegate = function (m,p__12056,f,args){
var vec__12057__12058 = p__12056;
var k__12059 = cljs.core.nth.call(null,vec__12057__12058,0,null);
var ks__12060 = cljs.core.nthnext.call(null,vec__12057__12058,1);

if(cljs.core.truth_(ks__12060))
{return cljs.core.assoc.call(null,m,k__12059,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12059),ks__12060,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12059,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12059),args));
}
};
var update_in = function (m,p__12056,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12056, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12076){
var m = cljs.core.first(arglist__12076);
var p__12056 = cljs.core.first(cljs.core.next(arglist__12076));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12076)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12076)));
return update_in__delegate.call(this, m, p__12056, f, args);
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
var this__12080 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12132 = null;
var G__12132__12133 = (function (coll,k){
var this__12081 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12132__12134 = (function (coll,k,not_found){
var this__12082 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12132 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12132__12133.call(this,coll,k);
case  3 :
return G__12132__12134.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12132;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12083 = this;
var new_array__12090 = cljs.core.aclone.call(null,this__12083.array);

(new_array__12090[k] = v);
return (new cljs.core.Vector(this__12083.meta,new_array__12090));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12136 = null;
var G__12136__12137 = (function (coll,k){
var this__12093 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12136__12138 = (function (coll,k,not_found){
var this__12094 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12136 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12136__12137.call(this,coll,k);
case  3 :
return G__12136__12138.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12136;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12095 = this;
var new_array__12096 = cljs.core.aclone.call(null,this__12095.array);

new_array__12096.push(o);
return (new cljs.core.Vector(this__12095.meta,new_array__12096));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12143 = null;
var G__12143__12145 = (function (v,f){
var this__12100 = this;
return cljs.core.ci_reduce.call(null,this__12100.array,f);
});
var G__12143__12146 = (function (v,f,start){
var this__12102 = this;
return cljs.core.ci_reduce.call(null,this__12102.array,f,start);
});
G__12143 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12143__12145.call(this,v,f);
case  3 :
return G__12143__12146.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12143;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12104 = this;
if(cljs.core.truth_((this__12104.array.length > 0)))
{var vector_seq__12106 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12104.array.length)))
{return cljs.core.cons.call(null,(this__12104.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12106.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12107 = this;
return this__12107.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12108 = this;
var count__12109 = this__12108.array.length;

if(cljs.core.truth_((count__12109 > 0)))
{return (this__12108.array[(count__12109 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12110 = this;
if(cljs.core.truth_((this__12110.array.length > 0)))
{var new_array__12112 = cljs.core.aclone.call(null,this__12110.array);

new_array__12112.pop();
return (new cljs.core.Vector(this__12110.meta,new_array__12112));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12116 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12117 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12119 = this;
return (new cljs.core.Vector(meta,this__12119.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12122 = this;
return this__12122.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12164 = null;
var G__12164__12165 = (function (coll,n){
var this__12123 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12124 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12124))
{return (n < this__12123.array.length);
} else
{return and__3546__auto____12124;
}
})()))
{return (this__12123.array[n]);
} else
{return null;
}
});
var G__12164__12166 = (function (coll,n,not_found){
var this__12125 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12126 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12126))
{return (n < this__12125.array.length);
} else
{return and__3546__auto____12126;
}
})()))
{return (this__12125.array[n]);
} else
{return not_found;
}
});
G__12164 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12164__12165.call(this,coll,n);
case  3 :
return G__12164__12166.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12164;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12131 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12131.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12197){
var args = cljs.core.seq( arglist__12197 );;
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
var this__12203 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12340 = null;
var G__12340__12341 = (function (coll,k){
var this__12204 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12340__12343 = (function (coll,k,not_found){
var this__12207 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12340 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12340__12341.call(this,coll,k);
case  3 :
return G__12340__12343.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12340;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12211 = this;
var v_pos__12212 = (this__12211.start + key);

return (new cljs.core.Subvec(this__12211.meta,cljs.core._assoc.call(null,this__12211.v,v_pos__12212,val),this__12211.start,((this__12211.end > (v_pos__12212 + 1)) ? this__12211.end : (v_pos__12212 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12345 = null;
var G__12345__12346 = (function (coll,k){
var this__12213 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12345__12347 = (function (coll,k,not_found){
var this__12309 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12345 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12345__12346.call(this,coll,k);
case  3 :
return G__12345__12347.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12345;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12313 = this;
return (new cljs.core.Subvec(this__12313.meta,cljs.core._assoc_n.call(null,this__12313.v,this__12313.end,o),this__12313.start,(this__12313.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12352 = null;
var G__12352__12353 = (function (coll,f){
var this__12315 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12352__12354 = (function (coll,f,start){
var this__12316 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12352 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12352__12353.call(this,coll,f);
case  3 :
return G__12352__12354.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12352;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12317 = this;
var subvec_seq__12318 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12317.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12317.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12318.call(null,this__12317.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12319 = this;
return (this__12319.end - this__12319.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12320 = this;
return cljs.core._nth.call(null,this__12320.v,(this__12320.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12321 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12321.start,this__12321.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12321.meta,this__12321.v,this__12321.start,(this__12321.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12326 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12328 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12330 = this;
return (new cljs.core.Subvec(meta,this__12330.v,this__12330.start,this__12330.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12331 = this;
return this__12331.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12363 = null;
var G__12363__12364 = (function (coll,n){
var this__12332 = this;
return cljs.core._nth.call(null,this__12332.v,(this__12332.start + n));
});
var G__12363__12365 = (function (coll,n,not_found){
var this__12334 = this;
return cljs.core._nth.call(null,this__12334.v,(this__12334.start + n),not_found);
});
G__12363 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12363__12364.call(this,coll,n);
case  3 :
return G__12363__12365.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12363;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12336 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12336.meta);
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
var subvec__12367 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12368 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12367.call(this,v,start);
case  3 :
return subvec__12368.call(this,v,start,end);
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
var this__12386 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12388 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12390 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12392 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12392.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12431 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12432 = this;
return cljs.core._first.call(null,this__12432.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12433 = this;
var temp__3695__auto____12434 = cljs.core.next.call(null,this__12433.front);

if(cljs.core.truth_(temp__3695__auto____12434))
{var f1__12435 = temp__3695__auto____12434;

return (new cljs.core.PersistentQueueSeq(this__12433.meta,f1__12435,this__12433.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12433.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12433.meta,this__12433.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12436 = this;
return this__12436.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12437 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12437.front,this__12437.rear));
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
var this__12483 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12487 = this;
if(cljs.core.truth_(this__12487.front))
{return (new cljs.core.PersistentQueue(this__12487.meta,(this__12487.count + 1),this__12487.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12491 = this__12487.rear;

if(cljs.core.truth_(or__3548__auto____12491))
{return or__3548__auto____12491;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12487.meta,(this__12487.count + 1),cljs.core.conj.call(null,this__12487.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12496 = this;
var rear__12497 = cljs.core.seq.call(null,this__12496.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12500 = this__12496.front;

if(cljs.core.truth_(or__3548__auto____12500))
{return or__3548__auto____12500;
} else
{return rear__12497;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12496.front,cljs.core.seq.call(null,rear__12497)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12501 = this;
return this__12501.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12502 = this;
return cljs.core._first.call(null,this__12502.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12504 = this;
if(cljs.core.truth_(this__12504.front))
{var temp__3695__auto____12506 = cljs.core.next.call(null,this__12504.front);

if(cljs.core.truth_(temp__3695__auto____12506))
{var f1__12507 = temp__3695__auto____12506;

return (new cljs.core.PersistentQueue(this__12504.meta,(this__12504.count - 1),f1__12507,this__12504.rear));
} else
{return (new cljs.core.PersistentQueue(this__12504.meta,(this__12504.count - 1),cljs.core.seq.call(null,this__12504.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12510 = this;
return cljs.core.first.call(null,this__12510.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12511 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12513 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12515 = this;
return (new cljs.core.PersistentQueue(meta,this__12515.count,this__12515.front,this__12515.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12516 = this;
return this__12516.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12518 = this;
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
var this__12578 = this;
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
var len__12599 = array.length;

var i__12601 = 0;

while(true){
if(cljs.core.truth_((i__12601 < len__12599)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12601]))))
{return i__12601;
} else
{{
var G__12607 = (i__12601 + incr);
i__12601 = G__12607;
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
var obj_map_contains_key_QMARK___12614 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12615 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12611 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12611))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12611;
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
return obj_map_contains_key_QMARK___12614.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12615.call(this,k,strobj,true_val,false_val);
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
var this__12639 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12730 = null;
var G__12730__12732 = (function (coll,k){
var this__12642 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12730__12733 = (function (coll,k,not_found){
var this__12644 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12644.strobj,(this__12644.strobj[k]),not_found);
});
G__12730 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12730__12732.call(this,coll,k);
case  3 :
return G__12730__12733.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12730;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12647 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12688 = goog.object.clone.call(null,this__12647.strobj);
var overwrite_QMARK___12689 = new_strobj__12688.hasOwnProperty(k);

(new_strobj__12688[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12689))
{return (new cljs.core.ObjMap(this__12647.meta,this__12647.keys,new_strobj__12688));
} else
{var new_keys__12691 = cljs.core.aclone.call(null,this__12647.keys);

new_keys__12691.push(k);
return (new cljs.core.ObjMap(this__12647.meta,new_keys__12691,new_strobj__12688));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12647.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12694 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12694.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12743 = null;
var G__12743__12745 = (function (coll,k){
var this__12696 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12743__12746 = (function (coll,k,not_found){
var this__12697 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12743 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12743__12745.call(this,coll,k);
case  3 :
return G__12743__12746.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12743;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12699 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12702 = this;
if(cljs.core.truth_((this__12702.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12619_SHARP_){
return cljs.core.vector.call(null,p1__12619_SHARP_,(this__12702.strobj[p1__12619_SHARP_]));
}),this__12702.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12707 = this;
return this__12707.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12708 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12715 = this;
return (new cljs.core.ObjMap(meta,this__12715.keys,this__12715.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12717 = this;
return this__12717.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12718 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12718.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12720 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12722 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12722))
{return this__12720.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12722;
}
})()))
{var new_keys__12725 = cljs.core.aclone.call(null,this__12720.keys);
var new_strobj__12726 = goog.object.clone.call(null,this__12720.strobj);

new_keys__12725.splice(cljs.core.scan_array.call(null,1,k,new_keys__12725),1);
cljs.core.js_delete.call(null,new_strobj__12726,k);
return (new cljs.core.ObjMap(this__12720.meta,new_keys__12725,new_strobj__12726));
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
var this__12789 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12881 = null;
var G__12881__12883 = (function (coll,k){
var this__12792 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12881__12885 = (function (coll,k,not_found){
var this__12794 = this;
var bucket__12797 = (this__12794.hashobj[cljs.core.hash.call(null,k)]);
var i__12799 = (cljs.core.truth_(bucket__12797)?cljs.core.scan_array.call(null,2,k,bucket__12797):null);

if(cljs.core.truth_(i__12799))
{return (bucket__12797[(i__12799 + 1)]);
} else
{return not_found;
}
});
G__12881 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12881__12883.call(this,coll,k);
case  3 :
return G__12881__12885.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12881;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12801 = this;
var h__12804 = cljs.core.hash.call(null,k);
var bucket__12805 = (this__12801.hashobj[h__12804]);

if(cljs.core.truth_(bucket__12805))
{var new_bucket__12806 = cljs.core.aclone.call(null,bucket__12805);
var new_hashobj__12809 = goog.object.clone.call(null,this__12801.hashobj);

(new_hashobj__12809[h__12804] = new_bucket__12806);
var temp__3695__auto____12811 = cljs.core.scan_array.call(null,2,k,new_bucket__12806);

if(cljs.core.truth_(temp__3695__auto____12811))
{var i__12814 = temp__3695__auto____12811;

(new_bucket__12806[(i__12814 + 1)] = v);
return (new cljs.core.HashMap(this__12801.meta,this__12801.count,new_hashobj__12809));
} else
{new_bucket__12806.push(k,v);
return (new cljs.core.HashMap(this__12801.meta,(this__12801.count + 1),new_hashobj__12809));
}
} else
{var new_hashobj__12820 = goog.object.clone.call(null,this__12801.hashobj);

(new_hashobj__12820[h__12804] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12801.meta,(this__12801.count + 1),new_hashobj__12820));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12822 = this;
var bucket__12826 = (this__12822.hashobj[cljs.core.hash.call(null,k)]);
var i__12827 = (cljs.core.truth_(bucket__12826)?cljs.core.scan_array.call(null,2,k,bucket__12826):null);

if(cljs.core.truth_(i__12827))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12895 = null;
var G__12895__12896 = (function (coll,k){
var this__12828 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12895__12897 = (function (coll,k,not_found){
var this__12829 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12895 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12895__12896.call(this,coll,k);
case  3 :
return G__12895__12897.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12895;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12830 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12832 = this;
if(cljs.core.truth_((this__12832.count > 0)))
{var hashes__12835 = cljs.core.js_keys.call(null,this__12832.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12767_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12832.hashobj[p1__12767_SHARP_])));
}),hashes__12835);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12836 = this;
return this__12836.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12837 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12838 = this;
return (new cljs.core.HashMap(meta,this__12838.count,this__12838.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12840 = this;
return this__12840.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12863 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12863.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12865 = this;
var h__12867 = cljs.core.hash.call(null,k);
var bucket__12871 = (this__12865.hashobj[h__12867]);
var i__12872 = (cljs.core.truth_(bucket__12871)?cljs.core.scan_array.call(null,2,k,bucket__12871):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12872)))
{return coll;
} else
{var new_hashobj__12874 = goog.object.clone.call(null,this__12865.hashobj);

if(cljs.core.truth_((3 > bucket__12871.length)))
{cljs.core.js_delete.call(null,new_hashobj__12874,h__12867);
} else
{var new_bucket__12876 = cljs.core.aclone.call(null,bucket__12871);

new_bucket__12876.splice(i__12872,2);
(new_hashobj__12874[h__12867] = new_bucket__12876);
}
return (new cljs.core.HashMap(this__12865.meta,(this__12865.count - 1),new_hashobj__12874));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12928 = ks.length;

var i__12931 = 0;
var out__12933 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12931 < len__12928)))
{{
var G__12941 = (i__12931 + 1);
var G__12942 = cljs.core.assoc.call(null,out__12933,(ks[i__12931]),(vs[i__12931]));
i__12931 = G__12941;
out__12933 = G__12942;
continue;
}
} else
{return out__12933;
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
var in$__12947 = cljs.core.seq.call(null,keyvals);
var out__12948 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12947))
{{
var G__12956 = cljs.core.nnext.call(null,in$__12947);
var G__12957 = cljs.core.assoc.call(null,out__12948,cljs.core.first.call(null,in$__12947),cljs.core.second.call(null,in$__12947));
in$__12947 = G__12956;
out__12948 = G__12957;
continue;
}
} else
{return out__12948;
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
hash_map.cljs$lang$applyTo = (function (arglist__12958){
var keyvals = cljs.core.seq( arglist__12958 );;
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
{return cljs.core.reduce.call(null,(function (p1__12962_SHARP_,p2__12963_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12970 = p1__12962_SHARP_;

if(cljs.core.truth_(or__3548__auto____12970))
{return or__3548__auto____12970;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12963_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12976){
var maps = cljs.core.seq( arglist__12976 );;
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
{var merge_entry__12980 = (function (m,e){
var k__12978 = cljs.core.first.call(null,e);
var v__12979 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12978)))
{return cljs.core.assoc.call(null,m,k__12978,f.call(null,cljs.core.get.call(null,m,k__12978),v__12979));
} else
{return cljs.core.assoc.call(null,m,k__12978,v__12979);
}
});
var merge2__12986 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12980,(function (){var or__3548__auto____12982 = m1;

if(cljs.core.truth_(or__3548__auto____12982))
{return or__3548__auto____12982;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12986,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12988){
var f = cljs.core.first(arglist__12988);
var maps = cljs.core.rest(arglist__12988);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12992 = cljs.core.ObjMap.fromObject([],{});
var keys__12993 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12993))
{var key__12994 = cljs.core.first.call(null,keys__12993);
var entry__12995 = cljs.core.get.call(null,map,key__12994,"﷐'user/not-found");

{
var G__13010 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12995,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12992,key__12994,entry__12995):ret__12992);
var G__13011 = cljs.core.next.call(null,keys__12993);
ret__12992 = G__13010;
keys__12993 = G__13011;
continue;
}
} else
{return ret__12992;
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
var this__13019 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13074 = null;
var G__13074__13075 = (function (coll,v){
var this__13022 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13074__13076 = (function (coll,v,not_found){
var this__13023 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13023.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13074 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13074__13075.call(this,coll,v);
case  3 :
return G__13074__13076.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13074;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13082 = null;
var G__13082__13084 = (function (coll,k){
var this__13028 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13082__13085 = (function (coll,k,not_found){
var this__13032 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13082 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13082__13084.call(this,coll,k);
case  3 :
return G__13082__13085.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13082;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13036 = this;
return (new cljs.core.Set(this__13036.meta,cljs.core.assoc.call(null,this__13036.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13038 = this;
return cljs.core.keys.call(null,this__13038.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13041 = this;
return (new cljs.core.Set(this__13041.meta,cljs.core.dissoc.call(null,this__13041.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13047 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13050 = this;
var and__3546__auto____13055 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13055))
{var and__3546__auto____13058 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13058))
{return cljs.core.every_QMARK_.call(null,(function (p1__12989_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12989_SHARP_);
}),other);
} else
{return and__3546__auto____13058;
}
} else
{return and__3546__auto____13055;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13062 = this;
return (new cljs.core.Set(meta,this__13062.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13066 = this;
return this__13066.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13068 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13068.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13131 = cljs.core.seq.call(null,coll);
var out__13132 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13131))))
{{
var G__13139 = cljs.core.rest.call(null,in$__13131);
var G__13140 = cljs.core.conj.call(null,out__13132,cljs.core.first.call(null,in$__13131));
in$__13131 = G__13139;
out__13132 = G__13140;
continue;
}
} else
{return out__13132;
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
{var n__13150 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13152 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13152))
{var e__13154 = temp__3695__auto____13152;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13154));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13150,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13129_SHARP_){
var temp__3695__auto____13158 = cljs.core.find.call(null,smap,p1__13129_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13158))
{var e__13160 = temp__3695__auto____13158;

return cljs.core.second.call(null,e__13160);
} else
{return p1__13129_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13251 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13240,seen){
while(true){
var vec__13241__13243 = p__13240;
var f__13244 = cljs.core.nth.call(null,vec__13241__13243,0,null);
var xs__13245 = vec__13241__13243;

var temp__3698__auto____13247 = cljs.core.seq.call(null,xs__13245);

if(cljs.core.truth_(temp__3698__auto____13247))
{var s__13248 = temp__3698__auto____13247;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13244)))
{{
var G__13254 = cljs.core.rest.call(null,s__13248);
var G__13256 = seen;
p__13240 = G__13254;
seen = G__13256;
continue;
}
} else
{return cljs.core.cons.call(null,f__13244,step.call(null,cljs.core.rest.call(null,s__13248),cljs.core.conj.call(null,seen,f__13244)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13251.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13259 = cljs.core.Vector.fromArray([]);
var s__13260 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13260)))
{{
var G__13261 = cljs.core.conj.call(null,ret__13259,cljs.core.first.call(null,s__13260));
var G__13262 = cljs.core.next.call(null,s__13260);
ret__13259 = G__13261;
s__13260 = G__13262;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13259);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13264 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13264))
{return or__3548__auto____13264;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13265 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13265 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13265 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13271 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13271))
{return or__3548__auto____13271;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13274 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13274 > -1)))
{return cljs.core.subs.call(null,x,2,i__13274);
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
var map__13280 = cljs.core.ObjMap.fromObject([],{});
var ks__13281 = cljs.core.seq.call(null,keys);
var vs__13282 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13283 = ks__13281;

if(cljs.core.truth_(and__3546__auto____13283))
{return vs__13282;
} else
{return and__3546__auto____13283;
}
})()))
{{
var G__13286 = cljs.core.assoc.call(null,map__13280,cljs.core.first.call(null,ks__13281),cljs.core.first.call(null,vs__13282));
var G__13287 = cljs.core.next.call(null,ks__13281);
var G__13288 = cljs.core.next.call(null,vs__13282);
map__13280 = G__13286;
ks__13281 = G__13287;
vs__13282 = G__13288;
continue;
}
} else
{return map__13280;
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
var max_key__13299 = (function (k,x){
return x;
});
var max_key__13300 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13301 = (function() { 
var G__13304__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13278_SHARP_,p2__13279_SHARP_){
return max_key.call(null,k,p1__13278_SHARP_,p2__13279_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13304 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13304__delegate.call(this, k, x, y, more);
};
G__13304.cljs$lang$maxFixedArity = 3;
G__13304.cljs$lang$applyTo = (function (arglist__13305){
var k = cljs.core.first(arglist__13305);
var x = cljs.core.first(cljs.core.next(arglist__13305));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13305)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13305)));
return G__13304__delegate.call(this, k, x, y, more);
});
return G__13304;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13299.call(this,k,x);
case  3 :
return max_key__13300.call(this,k,x,y);
default:
return max_key__13301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13301.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13312 = (function (k,x){
return x;
});
var min_key__13313 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13314 = (function() { 
var G__13317__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13291_SHARP_,p2__13292_SHARP_){
return min_key.call(null,k,p1__13291_SHARP_,p2__13292_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13317 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13317__delegate.call(this, k, x, y, more);
};
G__13317.cljs$lang$maxFixedArity = 3;
G__13317.cljs$lang$applyTo = (function (arglist__13335){
var k = cljs.core.first(arglist__13335);
var x = cljs.core.first(cljs.core.next(arglist__13335));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13335)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13335)));
return G__13317__delegate.call(this, k, x, y, more);
});
return G__13317;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13312.call(this,k,x);
case  3 :
return min_key__13313.call(this,k,x,y);
default:
return min_key__13314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13314.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13349 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13350 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13343 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13343))
{var s__13344 = temp__3698__auto____13343;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13344),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13344)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13349.call(this,n,step);
case  3 :
return partition_all__13350.call(this,n,step,coll);
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
var temp__3698__auto____13363 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13363))
{var s__13365 = temp__3698__auto____13363;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13365))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13365),take_while.call(null,pred,cljs.core.rest.call(null,s__13365)));
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
var this__13384 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13390 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13440 = null;
var G__13440__13441 = (function (rng,f){
var this__13392 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13440__13442 = (function (rng,f,s){
var this__13394 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13440 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13440__13441.call(this,rng,f);
case  3 :
return G__13440__13442.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13440;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13398 = this;
var comp__13400 = (cljs.core.truth_((this__13398.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13400.call(null,this__13398.start,this__13398.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13401 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13401.end - this__13401.start) / this__13401.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13411 = this;
return this__13411.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13413 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13413.meta,(this__13413.start + this__13413.step),this__13413.end,this__13413.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13422 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13423 = this;
return (new cljs.core.Range(meta,this__13423.start,this__13423.end,this__13423.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13424 = this;
return this__13424.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13469 = null;
var G__13469__13470 = (function (rng,n){
var this__13426 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13426.start + (n * this__13426.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13428 = (this__13426.start > this__13426.end);

if(cljs.core.truth_(and__3546__auto____13428))
{return cljs.core._EQ_.call(null,this__13426.step,0);
} else
{return and__3546__auto____13428;
}
})()))
{return this__13426.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13469__13471 = (function (rng,n,not_found){
var this__13429 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13429.start + (n * this__13429.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13431 = (this__13429.start > this__13429.end);

if(cljs.core.truth_(and__3546__auto____13431))
{return cljs.core._EQ_.call(null,this__13429.step,0);
} else
{return and__3546__auto____13431;
}
})()))
{return this__13429.start;
} else
{return not_found;
}
}
});
G__13469 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13469__13470.call(this,rng,n);
case  3 :
return G__13469__13471.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13469;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13433 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13433.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13485 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13486 = (function (end){
return range.call(null,0,end,1);
});
var range__13487 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13488 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13485.call(this);
case  1 :
return range__13486.call(this,start);
case  2 :
return range__13487.call(this,start,end);
case  3 :
return range__13488.call(this,start,end,step);
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
var temp__3698__auto____13507 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13507))
{var s__13510 = temp__3698__auto____13507;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13510),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13510)));
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
var temp__3698__auto____13531 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13531))
{var s__13533 = temp__3698__auto____13531;

var fst__13537 = cljs.core.first.call(null,s__13533);
var fv__13538 = f.call(null,fst__13537);
var run__13540 = cljs.core.cons.call(null,fst__13537,cljs.core.take_while.call(null,(function (p1__13517_SHARP_){
return cljs.core._EQ_.call(null,fv__13538,f.call(null,p1__13517_SHARP_));
}),cljs.core.next.call(null,s__13533)));

return cljs.core.cons.call(null,run__13540,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13540),s__13533))));
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
var reductions__13588 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13579 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13579))
{var s__13580 = temp__3695__auto____13579;

return reductions.call(null,f,cljs.core.first.call(null,s__13580),cljs.core.rest.call(null,s__13580));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13589 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13584 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13584))
{var s__13585 = temp__3698__auto____13584;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13585)),cljs.core.rest.call(null,s__13585));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13588.call(this,f,init);
case  3 :
return reductions__13589.call(this,f,init,coll);
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
var juxt__13715 = (function (f){
return (function() {
var G__13720 = null;
var G__13720__13721 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13720__13722 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13720__13723 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13720__13724 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13720__13725 = (function() { 
var G__13729__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13729 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13729__delegate.call(this, x, y, z, args);
};
G__13729.cljs$lang$maxFixedArity = 3;
G__13729.cljs$lang$applyTo = (function (arglist__13734){
var x = cljs.core.first(arglist__13734);
var y = cljs.core.first(cljs.core.next(arglist__13734));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13734)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13734)));
return G__13729__delegate.call(this, x, y, z, args);
});
return G__13729;
})()
;
G__13720 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13720__13721.call(this);
case  1 :
return G__13720__13722.call(this,x);
case  2 :
return G__13720__13723.call(this,x,y);
case  3 :
return G__13720__13724.call(this,x,y,z);
default:
return G__13720__13725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13720.cljs$lang$maxFixedArity = 3;
G__13720.cljs$lang$applyTo = G__13720__13725.cljs$lang$applyTo;
return G__13720;
})()
});
var juxt__13716 = (function (f,g){
return (function() {
var G__13735 = null;
var G__13735__13736 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13735__13737 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13735__13738 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13735__13739 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13735__13740 = (function() { 
var G__13742__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13742 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13742__delegate.call(this, x, y, z, args);
};
G__13742.cljs$lang$maxFixedArity = 3;
G__13742.cljs$lang$applyTo = (function (arglist__13743){
var x = cljs.core.first(arglist__13743);
var y = cljs.core.first(cljs.core.next(arglist__13743));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13743)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13743)));
return G__13742__delegate.call(this, x, y, z, args);
});
return G__13742;
})()
;
G__13735 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13735__13736.call(this);
case  1 :
return G__13735__13737.call(this,x);
case  2 :
return G__13735__13738.call(this,x,y);
case  3 :
return G__13735__13739.call(this,x,y,z);
default:
return G__13735__13740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13735.cljs$lang$maxFixedArity = 3;
G__13735.cljs$lang$applyTo = G__13735__13740.cljs$lang$applyTo;
return G__13735;
})()
});
var juxt__13717 = (function (f,g,h){
return (function() {
var G__13840 = null;
var G__13840__13841 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13840__13842 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13840__13843 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13840__13844 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13840__13845 = (function() { 
var G__13856__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13856 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13856__delegate.call(this, x, y, z, args);
};
G__13856.cljs$lang$maxFixedArity = 3;
G__13856.cljs$lang$applyTo = (function (arglist__13857){
var x = cljs.core.first(arglist__13857);
var y = cljs.core.first(cljs.core.next(arglist__13857));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13857)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13857)));
return G__13856__delegate.call(this, x, y, z, args);
});
return G__13856;
})()
;
G__13840 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13840__13841.call(this);
case  1 :
return G__13840__13842.call(this,x);
case  2 :
return G__13840__13843.call(this,x,y);
case  3 :
return G__13840__13844.call(this,x,y,z);
default:
return G__13840__13845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13840.cljs$lang$maxFixedArity = 3;
G__13840.cljs$lang$applyTo = G__13840__13845.cljs$lang$applyTo;
return G__13840;
})()
});
var juxt__13718 = (function() { 
var G__13858__delegate = function (f,g,h,fs){
var fs__13620 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13860 = null;
var G__13860__13861 = (function (){
return cljs.core.reduce.call(null,(function (p1__13563_SHARP_,p2__13564_SHARP_){
return cljs.core.conj.call(null,p1__13563_SHARP_,p2__13564_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13620);
});
var G__13860__13862 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13565_SHARP_,p2__13566_SHARP_){
return cljs.core.conj.call(null,p1__13565_SHARP_,p2__13566_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13620);
});
var G__13860__13863 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13567_SHARP_,p2__13568_SHARP_){
return cljs.core.conj.call(null,p1__13567_SHARP_,p2__13568_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13620);
});
var G__13860__13864 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13571_SHARP_,p2__13572_SHARP_){
return cljs.core.conj.call(null,p1__13571_SHARP_,p2__13572_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13620);
});
var G__13860__13865 = (function() { 
var G__13874__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13575_SHARP_,p2__13576_SHARP_){
return cljs.core.conj.call(null,p1__13575_SHARP_,cljs.core.apply.call(null,p2__13576_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13620);
};
var G__13874 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13874__delegate.call(this, x, y, z, args);
};
G__13874.cljs$lang$maxFixedArity = 3;
G__13874.cljs$lang$applyTo = (function (arglist__13877){
var x = cljs.core.first(arglist__13877);
var y = cljs.core.first(cljs.core.next(arglist__13877));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13877)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13877)));
return G__13874__delegate.call(this, x, y, z, args);
});
return G__13874;
})()
;
G__13860 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13860__13861.call(this);
case  1 :
return G__13860__13862.call(this,x);
case  2 :
return G__13860__13863.call(this,x,y);
case  3 :
return G__13860__13864.call(this,x,y,z);
default:
return G__13860__13865.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13860.cljs$lang$maxFixedArity = 3;
G__13860.cljs$lang$applyTo = G__13860__13865.cljs$lang$applyTo;
return G__13860;
})()
};
var G__13858 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13858__delegate.call(this, f, g, h, fs);
};
G__13858.cljs$lang$maxFixedArity = 3;
G__13858.cljs$lang$applyTo = (function (arglist__13880){
var f = cljs.core.first(arglist__13880);
var g = cljs.core.first(cljs.core.next(arglist__13880));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13880)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13880)));
return G__13858__delegate.call(this, f, g, h, fs);
});
return G__13858;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13715.call(this,f);
case  2 :
return juxt__13716.call(this,f,g);
case  3 :
return juxt__13717.call(this,f,g,h);
default:
return juxt__13718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13718.cljs$lang$applyTo;
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
var dorun__13887 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13892 = cljs.core.next.call(null,coll);
coll = G__13892;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13888 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13885 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13885))
{return (n > 0);
} else
{return and__3546__auto____13885;
}
})()))
{{
var G__13893 = (n - 1);
var G__13894 = cljs.core.next.call(null,coll);
n = G__13893;
coll = G__13894;
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
return dorun__13887.call(this,n);
case  2 :
return dorun__13888.call(this,n,coll);
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
var doall__13898 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13899 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13898.call(this,n);
case  2 :
return doall__13899.call(this,n,coll);
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
var matches__13906 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13906),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13906),1)))
{return cljs.core.first.call(null,matches__13906);
} else
{return cljs.core.vec.call(null,matches__13906);
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
var matches__13933 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13933)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13933),1)))
{return cljs.core.first.call(null,matches__13933);
} else
{return cljs.core.vec.call(null,matches__13933);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13952 = cljs.core.re_find.call(null,re,s);
var match_idx__13953 = s.search(re);
var match_str__13954 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13952))?cljs.core.first.call(null,match_data__13952):match_data__13952);
var post_match__13956 = cljs.core.subs.call(null,s,(match_idx__13953 + cljs.core.count.call(null,match_str__13954)));

if(cljs.core.truth_(match_data__13952))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13952,re_seq.call(null,re,post_match__13956));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13969_SHARP_){
return print_one.call(null,p1__13969_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14036 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14036))
{var and__3546__auto____14047 = (function (){var x__445__auto____14042 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14044 = x__445__auto____14042;

if(cljs.core.truth_(and__3546__auto____14044))
{var and__3546__auto____14046 = x__445__auto____14042.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14046))
{return cljs.core.not.call(null,x__445__auto____14042.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14046;
}
} else
{return and__3546__auto____14044;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14042);
}
})();

if(cljs.core.truth_(and__3546__auto____14047))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14047;
}
} else
{return and__3546__auto____14036;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14055 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14056 = x__445__auto____14055;

if(cljs.core.truth_(and__3546__auto____14056))
{var and__3546__auto____14059 = x__445__auto____14055.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14059))
{return cljs.core.not.call(null,x__445__auto____14055.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14059;
}
} else
{return and__3546__auto____14056;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14055);
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
var first_obj__14086 = cljs.core.first.call(null,objs);
var sb__14087 = (new goog.string.StringBuffer());

var G__14088__14089 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14088__14089))
{var obj__14091 = cljs.core.first.call(null,G__14088__14089);
var G__14088__14092 = G__14088__14089;

while(true){
if(cljs.core.truth_((obj__14091 === first_obj__14086)))
{} else
{sb__14087.append(" ");
}
var G__14098__14100 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14091,opts));

if(cljs.core.truth_(G__14098__14100))
{var string__14102 = cljs.core.first.call(null,G__14098__14100);
var G__14098__14103 = G__14098__14100;

while(true){
sb__14087.append(string__14102);
var temp__3698__auto____14107 = cljs.core.next.call(null,G__14098__14103);

if(cljs.core.truth_(temp__3698__auto____14107))
{var G__14098__14109 = temp__3698__auto____14107;

{
var G__14118 = cljs.core.first.call(null,G__14098__14109);
var G__14119 = G__14098__14109;
string__14102 = G__14118;
G__14098__14103 = G__14119;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14110 = cljs.core.next.call(null,G__14088__14092);

if(cljs.core.truth_(temp__3698__auto____14110))
{var G__14088__14111 = temp__3698__auto____14110;

{
var G__14124 = cljs.core.first.call(null,G__14088__14111);
var G__14125 = G__14088__14111;
obj__14091 = G__14124;
G__14088__14092 = G__14125;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14087);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14126 = cljs.core.first.call(null,objs);

var G__14127__14128 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14127__14128))
{var obj__14129 = cljs.core.first.call(null,G__14127__14128);
var G__14127__14130 = G__14127__14128;

while(true){
if(cljs.core.truth_((obj__14129 === first_obj__14126)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14134__14135 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14129,opts));

if(cljs.core.truth_(G__14134__14135))
{var string__14136 = cljs.core.first.call(null,G__14134__14135);
var G__14134__14137 = G__14134__14135;

while(true){
cljs.core.string_print.call(null,string__14136);
var temp__3698__auto____14138 = cljs.core.next.call(null,G__14134__14137);

if(cljs.core.truth_(temp__3698__auto____14138))
{var G__14134__14139 = temp__3698__auto____14138;

{
var G__14143 = cljs.core.first.call(null,G__14134__14139);
var G__14145 = G__14134__14139;
string__14136 = G__14143;
G__14134__14137 = G__14145;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14141 = cljs.core.next.call(null,G__14127__14130);

if(cljs.core.truth_(temp__3698__auto____14141))
{var G__14127__14142 = temp__3698__auto____14141;

{
var G__14146 = cljs.core.first.call(null,G__14127__14142);
var G__14147 = G__14127__14142;
obj__14129 = G__14146;
G__14127__14130 = G__14147;
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
pr_str.cljs$lang$applyTo = (function (arglist__14153){
var objs = cljs.core.seq( arglist__14153 );;
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
pr.cljs$lang$applyTo = (function (arglist__14154){
var objs = cljs.core.seq( arglist__14154 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14242){
var objs = cljs.core.seq( arglist__14242 );;
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
println.cljs$lang$applyTo = (function (arglist__14247){
var objs = cljs.core.seq( arglist__14247 );;
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
prn.cljs$lang$applyTo = (function (arglist__14254){
var objs = cljs.core.seq( arglist__14254 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14266 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14266,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14280 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14280))
{var nspc__14281 = temp__3698__auto____14280;

return cljs.core.str.call(null,nspc__14281,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14286 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14286))
{var nspc__14289 = temp__3698__auto____14286;

return cljs.core.str.call(null,nspc__14289,"/");
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
var pr_pair__14302 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14302,"{",", ","}",opts,coll);
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
var this__14380 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14381 = this;
var G__14382__14383 = cljs.core.seq.call(null,this__14381.watches);

if(cljs.core.truth_(G__14382__14383))
{var G__14385__14388 = cljs.core.first.call(null,G__14382__14383);
var vec__14386__14389 = G__14385__14388;
var key__14531 = cljs.core.nth.call(null,vec__14386__14389,0,null);
var f__14533 = cljs.core.nth.call(null,vec__14386__14389,1,null);
var G__14382__14534 = G__14382__14383;

var G__14385__14535 = G__14385__14388;
var G__14382__14536 = G__14382__14534;

while(true){
var vec__14537__14538 = G__14385__14535;
var key__14539 = cljs.core.nth.call(null,vec__14537__14538,0,null);
var f__14540 = cljs.core.nth.call(null,vec__14537__14538,1,null);
var G__14382__14541 = G__14382__14536;

f__14540.call(null,key__14539,this$,oldval,newval);
var temp__3698__auto____14542 = cljs.core.next.call(null,G__14382__14541);

if(cljs.core.truth_(temp__3698__auto____14542))
{var G__14382__14543 = temp__3698__auto____14542;

{
var G__14568 = cljs.core.first.call(null,G__14382__14543);
var G__14569 = G__14382__14543;
G__14385__14535 = G__14568;
G__14382__14536 = G__14569;
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
var this__14550 = this;
return this$.watches = cljs.core.assoc.call(null,this__14550.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14552 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14552.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14557 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14557.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14559 = this;
return this__14559.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14562 = this;
return this__14562.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14563 = this;
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
var atom__14597 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14598 = (function() { 
var G__14601__delegate = function (x,p__14586){
var map__14588__14589 = p__14586;
var map__14588__14591 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14588__14589))?cljs.core.apply.call(null,cljs.core.hash_map,map__14588__14589):map__14588__14589);
var validator__14592 = cljs.core.get.call(null,map__14588__14591,"﷐'validator");
var meta__14594 = cljs.core.get.call(null,map__14588__14591,"﷐'meta");

return (new cljs.core.Atom(x,meta__14594,validator__14592,null));
};
var G__14601 = function (x,var_args){
var p__14586 = null;
if (goog.isDef(var_args)) {
  p__14586 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14601__delegate.call(this, x, p__14586);
};
G__14601.cljs$lang$maxFixedArity = 1;
G__14601.cljs$lang$applyTo = (function (arglist__14605){
var x = cljs.core.first(arglist__14605);
var p__14586 = cljs.core.rest(arglist__14605);
return G__14601__delegate.call(this, x, p__14586);
});
return G__14601;
})()
;
atom = function(x,var_args){
var p__14586 = var_args;
switch(arguments.length){
case  1 :
return atom__14597.call(this,x);
default:
return atom__14598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14598.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14606 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14606))
{var validate__14608 = temp__3698__auto____14606;

if(cljs.core.truth_(validate__14608.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14609 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14609,new_value);
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
var swap_BANG___14653 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14654 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14655 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14656 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14657 = (function() { 
var G__14661__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14661 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14661__delegate.call(this, a, f, x, y, z, more);
};
G__14661.cljs$lang$maxFixedArity = 5;
G__14661.cljs$lang$applyTo = (function (arglist__14662){
var a = cljs.core.first(arglist__14662);
var f = cljs.core.first(cljs.core.next(arglist__14662));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14662)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14662))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14662)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14662)))));
return G__14661__delegate.call(this, a, f, x, y, z, more);
});
return G__14661;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14653.call(this,a,f);
case  3 :
return swap_BANG___14654.call(this,a,f,x);
case  4 :
return swap_BANG___14655.call(this,a,f,x,y);
case  5 :
return swap_BANG___14656.call(this,a,f,x,y,z);
default:
return swap_BANG___14657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14657.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14690){
var iref = cljs.core.first(arglist__14690);
var f = cljs.core.first(cljs.core.next(arglist__14690));
var args = cljs.core.rest(cljs.core.next(arglist__14690));
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
var gensym__14714 = (function (){
return gensym.call(null,"G__");
});
var gensym__14715 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14714.call(this);
case  1 :
return gensym__14715.call(this,prefix_string);
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
var this__14739 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14739.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14743 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14743.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14743.state,this__14743.f);
}
return cljs.core.deref.call(null,this__14743.state);
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
delay.cljs$lang$applyTo = (function (arglist__14765){
var body = cljs.core.seq( arglist__14765 );;
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
var map__14778__14779 = options;
var map__14778__14780 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14778__14779))?cljs.core.apply.call(null,cljs.core.hash_map,map__14778__14779):map__14778__14779);
var keywordize_keys__14781 = cljs.core.get.call(null,map__14778__14780,"﷐'keywordize-keys");
var keyfn__14782 = (cljs.core.truth_(keywordize_keys__14781)?cljs.core.keyword:cljs.core.str);
var f__14794 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14793 = (function iter__14785(s__14786){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14786__14787 = s__14786;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14786__14787)))
{var k__14789 = cljs.core.first.call(null,s__14786__14787);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14782.call(null,k__14789),thisfn.call(null,(x[k__14789]))]),iter__14785.call(null,cljs.core.rest.call(null,s__14786__14787)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14793.call(null,cljs.core.js_keys.call(null,x));
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

return f__14794.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14809){
var x = cljs.core.first(arglist__14809);
var options = cljs.core.rest(arglist__14809);
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
var mem__14817 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14824__delegate = function (args){
var temp__3695__auto____14818 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14817),args);

if(cljs.core.truth_(temp__3695__auto____14818))
{var v__14819 = temp__3695__auto____14818;

return v__14819;
} else
{var ret__14820 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14817,cljs.core.assoc,args,ret__14820);
return ret__14820;
}
};
var G__14824 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14824__delegate.call(this, args);
};
G__14824.cljs$lang$maxFixedArity = 0;
G__14824.cljs$lang$applyTo = (function (arglist__14825){
var args = cljs.core.seq( arglist__14825 );;
return G__14824__delegate.call(this, args);
});
return G__14824;
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
var trampoline__14833 = (function (f){
while(true){
var ret__14828 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14828)))
{{
var G__14839 = ret__14828;
f = G__14839;
continue;
}
} else
{return ret__14828;
}
break;
}
});
var trampoline__14835 = (function() { 
var G__14845__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14845 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14845__delegate.call(this, f, args);
};
G__14845.cljs$lang$maxFixedArity = 1;
G__14845.cljs$lang$applyTo = (function (arglist__14846){
var f = cljs.core.first(arglist__14846);
var args = cljs.core.rest(arglist__14846);
return G__14845__delegate.call(this, f, args);
});
return G__14845;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14833.call(this,f);
default:
return trampoline__14835.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14835.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14868 = (function (){
return rand.call(null,1);
});
var rand__14869 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14868.call(this);
case  1 :
return rand__14869.call(this,n);
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
var k__14880 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14880,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14880,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14941 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14942 = (function (h,child,parent){
var or__3548__auto____14883 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14883))
{return or__3548__auto____14883;
} else
{var or__3548__auto____14884 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14884))
{return or__3548__auto____14884;
} else
{var and__3546__auto____14885 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14885))
{var and__3546__auto____14886 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14886))
{var and__3546__auto____14890 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14890))
{var ret__14891 = true;
var i__14892 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14894 = cljs.core.not.call(null,ret__14891);

if(cljs.core.truth_(or__3548__auto____14894))
{return or__3548__auto____14894;
} else
{return cljs.core._EQ_.call(null,i__14892,cljs.core.count.call(null,parent));
}
})()))
{return ret__14891;
} else
{{
var G__14944 = isa_QMARK_.call(null,h,child.call(null,i__14892),parent.call(null,i__14892));
var G__14945 = (i__14892 + 1);
ret__14891 = G__14944;
i__14892 = G__14945;
continue;
}
}
break;
}
} else
{return and__3546__auto____14890;
}
} else
{return and__3546__auto____14886;
}
} else
{return and__3546__auto____14885;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14941.call(this,h,child);
case  3 :
return isa_QMARK___14942.call(this,h,child,parent);
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
var parents__15004 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15005 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15004.call(this,h);
case  2 :
return parents__15005.call(this,h,tag);
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
var ancestors__15011 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15012 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15011.call(this,h);
case  2 :
return ancestors__15012.call(this,h,tag);
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
var descendants__15019 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15020 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15019.call(this,h);
case  2 :
return descendants__15020.call(this,h,tag);
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
var derive__15073 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15074 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15041 = "﷐'parents".call(null,h);
var td__15042 = "﷐'descendants".call(null,h);
var ta__15043 = "﷐'ancestors".call(null,h);
var tf__15071 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15072 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15041.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15043.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15043.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15041,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15071.call(null,"﷐'ancestors".call(null,h),tag,td__15042,parent,ta__15043),"﷐'descendants":tf__15071.call(null,"﷐'descendants".call(null,h),parent,ta__15043,tag,td__15042)});
})());

if(cljs.core.truth_(or__3548__auto____15072))
{return or__3548__auto____15072;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15073.call(this,h,tag);
case  3 :
return derive__15074.call(this,h,tag,parent);
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
var underive__15094 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15097 = (function (h,tag,parent){
var parentMap__15087 = "﷐'parents".call(null,h);
var childsParents__15089 = (cljs.core.truth_(parentMap__15087.call(null,tag))?cljs.core.disj.call(null,parentMap__15087.call(null,tag),parent):cljs.core.set([]));
var newParents__15090 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15089))?cljs.core.assoc.call(null,parentMap__15087,tag,childsParents__15089):cljs.core.dissoc.call(null,parentMap__15087,tag));
var deriv_seq__15092 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15032_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15032_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15032_SHARP_),cljs.core.second.call(null,p1__15032_SHARP_)));
}),cljs.core.seq.call(null,newParents__15090)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15087.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15034_SHARP_,p2__15035_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15034_SHARP_,p2__15035_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15092));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15094.call(this,h,tag);
case  3 :
return underive__15097.call(this,h,tag,parent);
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
var xprefs__15105 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15107 = (cljs.core.truth_((function (){var and__3546__auto____15106 = xprefs__15105;

if(cljs.core.truth_(and__3546__auto____15106))
{return xprefs__15105.call(null,y);
} else
{return and__3546__auto____15106;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15107))
{return or__3548__auto____15107;
} else
{var or__3548__auto____15112 = (function (){var ps__15111 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15111) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15111),prefer_table)))
{} else
{}
{
var G__15121 = cljs.core.rest.call(null,ps__15111);
ps__15111 = G__15121;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15112))
{return or__3548__auto____15112;
} else
{var or__3548__auto____15114 = (function (){var ps__15113 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15113) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15113),y,prefer_table)))
{} else
{}
{
var G__15122 = cljs.core.rest.call(null,ps__15113);
ps__15113 = G__15122;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15114))
{return or__3548__auto____15114;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15142 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15142))
{return or__3548__auto____15142;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15158 = cljs.core.reduce.call(null,(function (be,p__15145){
var vec__15146__15148 = p__15145;
var k__15150 = cljs.core.nth.call(null,vec__15146__15148,0,null);
var ___15152 = cljs.core.nth.call(null,vec__15146__15148,1,null);
var e__15153 = vec__15146__15148;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15150)))
{var be2__15155 = (cljs.core.truth_((function (){var or__3548__auto____15154 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15154))
{return or__3548__auto____15154;
} else
{return cljs.core.dominates.call(null,k__15150,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15153:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15155),k__15150,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15150," and ",cljs.core.first.call(null,be2__15155),", and neither is preferred")));
}
return be2__15155;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15158))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15158));
return cljs.core.second.call(null,best_entry__15158);
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
if(cljs.core.truth_((function (){var and__3546__auto____15177 = mf;

if(cljs.core.truth_(and__3546__auto____15177))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15177;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15178 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15178))
{return or__3548__auto____15178;
} else
{var or__3548__auto____15181 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15181))
{return or__3548__auto____15181;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15185 = mf;

if(cljs.core.truth_(and__3546__auto____15185))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15185;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15187 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15187))
{return or__3548__auto____15187;
} else
{var or__3548__auto____15190 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15190))
{return or__3548__auto____15190;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15192 = mf;

if(cljs.core.truth_(and__3546__auto____15192))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15192;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15198 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15198))
{return or__3548__auto____15198;
} else
{var or__3548__auto____15199 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15199))
{return or__3548__auto____15199;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15201 = mf;

if(cljs.core.truth_(and__3546__auto____15201))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15201;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15202 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15202))
{return or__3548__auto____15202;
} else
{var or__3548__auto____15203 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15203))
{return or__3548__auto____15203;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15204 = mf;

if(cljs.core.truth_(and__3546__auto____15204))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15204;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15205 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15205))
{return or__3548__auto____15205;
} else
{var or__3548__auto____15208 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15208))
{return or__3548__auto____15208;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15214 = mf;

if(cljs.core.truth_(and__3546__auto____15214))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15214;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15218 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15218))
{return or__3548__auto____15218;
} else
{var or__3548__auto____15219 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15219))
{return or__3548__auto____15219;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15223 = mf;

if(cljs.core.truth_(and__3546__auto____15223))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15223;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15224 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15224))
{return or__3548__auto____15224;
} else
{var or__3548__auto____15225 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15225))
{return or__3548__auto____15225;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15228 = mf;

if(cljs.core.truth_(and__3546__auto____15228))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15228;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15229 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15229))
{return or__3548__auto____15229;
} else
{var or__3548__auto____15230 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15230))
{return or__3548__auto____15230;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15258 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15259 = cljs.core._get_method.call(null,mf,dispatch_val__15258);

if(cljs.core.truth_(target_fn__15259))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15258)));
}
return cljs.core.apply.call(null,target_fn__15259,args);
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
var this__15264 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15266 = this;
cljs.core.swap_BANG_.call(null,this__15266.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15266.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15266.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15266.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15269 = this;
cljs.core.swap_BANG_.call(null,this__15269.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15269.method_cache,this__15269.method_table,this__15269.cached_hierarchy,this__15269.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15272 = this;
cljs.core.swap_BANG_.call(null,this__15272.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15272.method_cache,this__15272.method_table,this__15272.cached_hierarchy,this__15272.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15273 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15273.cached_hierarchy),cljs.core.deref.call(null,this__15273.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15273.method_cache,this__15273.method_table,this__15273.cached_hierarchy,this__15273.hierarchy);
}
var temp__3695__auto____15276 = cljs.core.deref.call(null,this__15273.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15276))
{var target_fn__15277 = temp__3695__auto____15276;

return target_fn__15277;
} else
{var temp__3695__auto____15279 = cljs.core.find_and_cache_best_method.call(null,this__15273.name,dispatch_val,this__15273.hierarchy,this__15273.method_table,this__15273.prefer_table,this__15273.method_cache,this__15273.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15279))
{var target_fn__15280 = temp__3695__auto____15279;

return target_fn__15280;
} else
{return cljs.core.deref.call(null,this__15273.method_table).call(null,this__15273.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15281 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15281.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15281.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15281.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15281.method_cache,this__15281.method_table,this__15281.cached_hierarchy,this__15281.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15286 = this;
return cljs.core.deref.call(null,this__15286.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15287 = this;
return cljs.core.deref.call(null,this__15287.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15288 = this;
return cljs.core.do_dispatch.call(null,mf,this__15288.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15310__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15310 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15310__delegate.call(this, _, args);
};
G__15310.cljs$lang$maxFixedArity = 1;
G__15310.cljs$lang$applyTo = (function (arglist__15311){
var _ = cljs.core.first(arglist__15311);
var args = cljs.core.rest(arglist__15311);
return G__15310__delegate.call(this, _, args);
});
return G__15310;
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
