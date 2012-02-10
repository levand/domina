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
var or__3548__auto____7204 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7204))
{return or__3548__auto____7204;
} else
{var or__3548__auto____7205 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7205))
{return or__3548__auto____7205;
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
var _invoke__7538 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7234 = this$;

if(cljs.core.truth_(and__3546__auto____7234))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7234;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7236 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7236))
{return or__3548__auto____7236;
} else
{var or__3548__auto____7238 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7238))
{return or__3548__auto____7238;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7540 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7242 = this$;

if(cljs.core.truth_(and__3546__auto____7242))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7242;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7245 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7245))
{return or__3548__auto____7245;
} else
{var or__3548__auto____7246 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7246))
{return or__3548__auto____7246;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7541 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7251 = this$;

if(cljs.core.truth_(and__3546__auto____7251))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7251;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7253 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7253))
{return or__3548__auto____7253;
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
var _invoke__7542 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7257 = this$;

if(cljs.core.truth_(and__3546__auto____7257))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7257;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7259 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7259))
{return or__3548__auto____7259;
} else
{var or__3548__auto____7261 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7261))
{return or__3548__auto____7261;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7543 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7270 = this$;

if(cljs.core.truth_(and__3546__auto____7270))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7270;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7275 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{var or__3548__auto____7277 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7277))
{return or__3548__auto____7277;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7544 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7281 = this$;

if(cljs.core.truth_(and__3546__auto____7281))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7281;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7285 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
} else
{var or__3548__auto____7288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7545 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7292 = this$;

if(cljs.core.truth_(and__3546__auto____7292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7546 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = this$;

if(cljs.core.truth_(and__3546__auto____7301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7547 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7311 = this$;

if(cljs.core.truth_(and__3546__auto____7311))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7311;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7315 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{var or__3548__auto____7317 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7317))
{return or__3548__auto____7317;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7548 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7319 = this$;

if(cljs.core.truth_(and__3546__auto____7319))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7319;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7321 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{var or__3548__auto____7323 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7323))
{return or__3548__auto____7323;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7549 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7325 = this$;

if(cljs.core.truth_(and__3546__auto____7325))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7325;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7327 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{var or__3548__auto____7329 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7329))
{return or__3548__auto____7329;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7550 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7389 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{var or__3548__auto____7391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7551 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7398 = this$;

if(cljs.core.truth_(and__3546__auto____7398))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7398;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7401 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{var or__3548__auto____7404 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7552 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7409 = this$;

if(cljs.core.truth_(and__3546__auto____7409))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7409;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{var or__3548__auto____7412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7553 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7414 = this$;

if(cljs.core.truth_(and__3546__auto____7414))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7414;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7418 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{var or__3548__auto____7420 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7554 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7423 = this$;

if(cljs.core.truth_(and__3546__auto____7423))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7423;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
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
var _invoke__7555 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7454 = this$;

if(cljs.core.truth_(and__3546__auto____7454))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7454;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7458 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{var or__3548__auto____7460 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7556 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7463 = this$;

if(cljs.core.truth_(and__3546__auto____7463))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7463;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7469 = this$;

if(cljs.core.truth_(and__3546__auto____7469))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7469;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7470 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{var or__3548__auto____7471 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7473 = this$;

if(cljs.core.truth_(and__3546__auto____7473))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7473;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7477 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7477))
{return or__3548__auto____7477;
} else
{var or__3548__auto____7478 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7559 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7481 = this$;

if(cljs.core.truth_(and__3546__auto____7481))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7481;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7533 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{var or__3548__auto____7535 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7535))
{return or__3548__auto____7535;
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
return _invoke__7538.call(this,this$);
case  2 :
return _invoke__7540.call(this,this$,a);
case  3 :
return _invoke__7541.call(this,this$,a,b);
case  4 :
return _invoke__7542.call(this,this$,a,b,c);
case  5 :
return _invoke__7543.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7544.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7545.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7546.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7547.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7548.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7549.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7550.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7551.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7552.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7553.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7554.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7555.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7556.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7557.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7559.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7814 = coll;

if(cljs.core.truth_(and__3546__auto____7814))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7814;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7816 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{var or__3548__auto____7818 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7818))
{return or__3548__auto____7818;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7829 = coll;

if(cljs.core.truth_(and__3546__auto____7829))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7829;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7831 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7831))
{return or__3548__auto____7831;
} else
{var or__3548__auto____7832 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7843 = coll;

if(cljs.core.truth_(and__3546__auto____7843))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7843;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7844 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{var or__3548__auto____7846 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7846))
{return or__3548__auto____7846;
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
var _nth__7870 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = coll;

if(cljs.core.truth_(and__3546__auto____7856))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7856;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7858 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{var or__3548__auto____7860 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7871 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7863 = coll;

if(cljs.core.truth_(and__3546__auto____7863))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7863;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7865 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7865))
{return or__3548__auto____7865;
} else
{var or__3548__auto____7868 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
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
return _nth__7870.call(this,coll,n);
case  3 :
return _nth__7871.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7883 = coll;

if(cljs.core.truth_(and__3546__auto____7883))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7883;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7884 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7884))
{return or__3548__auto____7884;
} else
{var or__3548__auto____7886 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7892 = coll;

if(cljs.core.truth_(and__3546__auto____7892))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7892;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7895 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7895))
{return or__3548__auto____7895;
} else
{var or__3548__auto____7896 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7896))
{return or__3548__auto____7896;
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
var _lookup__7918 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7908 = o;

if(cljs.core.truth_(and__3546__auto____7908))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7908;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7911 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7911))
{return or__3548__auto____7911;
} else
{var or__3548__auto____7913 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7919 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7915 = o;

if(cljs.core.truth_(and__3546__auto____7915))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7915;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7916 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{var or__3548__auto____7917 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7917))
{return or__3548__auto____7917;
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
return _lookup__7918.call(this,o,k);
case  3 :
return _lookup__7919.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7946 = coll;

if(cljs.core.truth_(and__3546__auto____7946))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7946;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7949 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7949))
{return or__3548__auto____7949;
} else
{var or__3548__auto____7951 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7951))
{return or__3548__auto____7951;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7955 = coll;

if(cljs.core.truth_(and__3546__auto____7955))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7955;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7956 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{var or__3548__auto____7957 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7967 = coll;

if(cljs.core.truth_(and__3546__auto____7967))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7967;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7969 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{var or__3548__auto____7971 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7975 = coll;

if(cljs.core.truth_(and__3546__auto____7975))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7975;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7979 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{var or__3548__auto____7981 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7993 = coll;

if(cljs.core.truth_(and__3546__auto____7993))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7993;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____8000 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8007 = coll;

if(cljs.core.truth_(and__3546__auto____8007))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8007;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8009 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{var or__3548__auto____8011 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8011))
{return or__3548__auto____8011;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8015 = coll;

if(cljs.core.truth_(and__3546__auto____8015))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8015;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8016 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{var or__3548__auto____8018 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8040 = o;

if(cljs.core.truth_(and__3546__auto____8040))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8040;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8044 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8048 = o;

if(cljs.core.truth_(and__3546__auto____8048))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8048;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8051 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8056 = o;

if(cljs.core.truth_(and__3546__auto____8056))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8056;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8058 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{var or__3548__auto____8059 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8068 = o;

if(cljs.core.truth_(and__3546__auto____8068))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8068;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8071 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8073 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
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
var _reduce__8091 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8078 = coll;

if(cljs.core.truth_(and__3546__auto____8078))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8078;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8079 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{var or__3548__auto____8080 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8092 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = coll;

if(cljs.core.truth_(and__3546__auto____8081))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8081;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8087 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8087))
{return or__3548__auto____8087;
} else
{var or__3548__auto____8089 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
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
return _reduce__8091.call(this,coll,f);
case  3 :
return _reduce__8092.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8103 = o;

if(cljs.core.truth_(and__3546__auto____8103))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8103;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8105 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{var or__3548__auto____8108 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8108))
{return or__3548__auto____8108;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8112 = o;

if(cljs.core.truth_(and__3546__auto____8112))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8112;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8113 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{var or__3548__auto____8114 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
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
if(cljs.core.truth_((function (){var and__3546__auto____8121 = o;

if(cljs.core.truth_(and__3546__auto____8121))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8121;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8122 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
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
if(cljs.core.truth_((function (){var and__3546__auto____8124 = d;

if(cljs.core.truth_(and__3546__auto____8124))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8124;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8125 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{var or__3548__auto____8126 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8127 = this$;

if(cljs.core.truth_(and__3546__auto____8127))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8127;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8128 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8128))
{return or__3548__auto____8128;
} else
{var or__3548__auto____8129 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8130 = this$;

if(cljs.core.truth_(and__3546__auto____8130))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8130;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8131 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{var or__3548__auto____8132 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8137 = this$;

if(cljs.core.truth_(and__3546__auto____8137))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8137;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8138 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{var or__3548__auto____8139 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8139))
{return or__3548__auto____8139;
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
var G__8176 = null;
var G__8176__8177 = (function (o,k){
return null;
});
var G__8176__8178 = (function (o,k,not_found){
return not_found;
});
G__8176 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8176__8177.call(this,o,k);
case  3 :
return G__8176__8178.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8176;
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
var G__8180 = null;
var G__8180__8181 = (function (_,f){
return f.call(null);
});
var G__8180__8182 = (function (_,f,start){
return start;
});
G__8180 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8180__8181.call(this,_,f);
case  3 :
return G__8180__8182.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8180;
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
var G__8184 = null;
var G__8184__8185 = (function (_,n){
return null;
});
var G__8184__8186 = (function (_,n,not_found){
return not_found;
});
G__8184 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8184__8185.call(this,_,n);
case  3 :
return G__8184__8186.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8184;
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
var ci_reduce__8228 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8213 = cljs.core._nth.call(null,cicoll,0);
var n__8216 = 1;

while(true){
if(cljs.core.truth_((n__8216 < cljs.core._count.call(null,cicoll))))
{{
var G__8234 = f.call(null,val__8213,cljs.core._nth.call(null,cicoll,n__8216));
var G__8235 = (n__8216 + 1);
val__8213 = G__8234;
n__8216 = G__8235;
continue;
}
} else
{return val__8213;
}
break;
}
}
});
var ci_reduce__8229 = (function (cicoll,f,val){
var val__8221 = val;
var n__8223 = 0;

while(true){
if(cljs.core.truth_((n__8223 < cljs.core._count.call(null,cicoll))))
{{
var G__8238 = f.call(null,val__8221,cljs.core._nth.call(null,cicoll,n__8223));
var G__8239 = (n__8223 + 1);
val__8221 = G__8238;
n__8223 = G__8239;
continue;
}
} else
{return val__8221;
}
break;
}
});
var ci_reduce__8230 = (function (cicoll,f,val,idx){
var val__8224 = val;
var n__8225 = idx;

while(true){
if(cljs.core.truth_((n__8225 < cljs.core._count.call(null,cicoll))))
{{
var G__8240 = f.call(null,val__8224,cljs.core._nth.call(null,cicoll,n__8225));
var G__8241 = (n__8225 + 1);
val__8224 = G__8240;
n__8225 = G__8241;
continue;
}
} else
{return val__8224;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8228.call(this,cicoll,f);
case  3 :
return ci_reduce__8229.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8230.call(this,cicoll,f,val,idx);
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
var this__8268 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8399 = null;
var G__8399__8400 = (function (_,f){
var this__8271 = this;
return cljs.core.ci_reduce.call(null,this__8271.a,f,(this__8271.a[this__8271.i]),(this__8271.i + 1));
});
var G__8399__8401 = (function (_,f,start){
var this__8275 = this;
return cljs.core.ci_reduce.call(null,this__8275.a,f,start,this__8275.i);
});
G__8399 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8399__8400.call(this,_,f);
case  3 :
return G__8399__8401.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8399;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8277 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8279 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8419 = null;
var G__8419__8420 = (function (coll,n){
var this__8282 = this;
var i__8382 = (n + this__8282.i);

if(cljs.core.truth_((i__8382 < this__8282.a.length)))
{return (this__8282.a[i__8382]);
} else
{return null;
}
});
var G__8419__8421 = (function (coll,n,not_found){
var this__8383 = this;
var i__8384 = (n + this__8383.i);

if(cljs.core.truth_((i__8384 < this__8383.a.length)))
{return (this__8383.a[i__8384]);
} else
{return not_found;
}
});
G__8419 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8419__8420.call(this,coll,n);
case  3 :
return G__8419__8421.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8419;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8385 = this;
return (this__8385.a.length - this__8385.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8386 = this;
return (this__8386.a[this__8386.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8388 = this;
if(cljs.core.truth_(((this__8388.i + 1) < this__8388.a.length)))
{return (new cljs.core.IndexedSeq(this__8388.a,(this__8388.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8394 = this;
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
var G__8493 = null;
var G__8493__8496 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8493__8497 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8493 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8493__8496.call(this,array,f);
case  3 :
return G__8493__8497.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8493;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8505 = null;
var G__8505__8506 = (function (array,k){
return (array[k]);
});
var G__8505__8507 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8505 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8505__8506.call(this,array,k);
case  3 :
return G__8505__8507.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8505;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8511 = null;
var G__8511__8513 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8511__8514 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8511 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8511__8513.call(this,array,n);
case  3 :
return G__8511__8514.call(this,array,n,not_found);
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
var temp__3698__auto____8517 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8517))
{var s__8518 = temp__3698__auto____8517;

return cljs.core._first.call(null,s__8518);
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
var G__8562 = cljs.core.next.call(null,s);
s = G__8562;
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
var s__8564 = cljs.core.seq.call(null,x);
var n__8565 = 0;

while(true){
if(cljs.core.truth_(s__8564))
{{
var G__8566 = cljs.core.next.call(null,s__8564);
var G__8567 = (n__8565 + 1);
s__8564 = G__8566;
n__8565 = G__8567;
continue;
}
} else
{return n__8565;
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
var conj__8570 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8571 = (function() { 
var G__8573__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8574 = conj.call(null,coll,x);
var G__8575 = cljs.core.first.call(null,xs);
var G__8576 = cljs.core.next.call(null,xs);
coll = G__8574;
x = G__8575;
xs = G__8576;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8573 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8573__delegate.call(this, coll, x, xs);
};
G__8573.cljs$lang$maxFixedArity = 2;
G__8573.cljs$lang$applyTo = (function (arglist__8577){
var coll = cljs.core.first(arglist__8577);
var x = cljs.core.first(cljs.core.next(arglist__8577));
var xs = cljs.core.rest(cljs.core.next(arglist__8577));
return G__8573__delegate.call(this, coll, x, xs);
});
return G__8573;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8570.call(this,coll,x);
default:
return conj__8571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8571.cljs$lang$applyTo;
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
var nth__8580 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8581 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8580.call(this,coll,n);
case  3 :
return nth__8581.call(this,coll,n,not_found);
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
var get__8584 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8585 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8584.call(this,o,k);
case  3 :
return get__8585.call(this,o,k,not_found);
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
var assoc__8595 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8596 = (function() { 
var G__8601__delegate = function (coll,k,v,kvs){
while(true){
var ret__8588 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8602 = ret__8588;
var G__8603 = cljs.core.first.call(null,kvs);
var G__8604 = cljs.core.second.call(null,kvs);
var G__8605 = cljs.core.nnext.call(null,kvs);
coll = G__8602;
k = G__8603;
v = G__8604;
kvs = G__8605;
continue;
}
} else
{return ret__8588;
}
break;
}
};
var G__8601 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8601__delegate.call(this, coll, k, v, kvs);
};
G__8601.cljs$lang$maxFixedArity = 3;
G__8601.cljs$lang$applyTo = (function (arglist__8607){
var coll = cljs.core.first(arglist__8607);
var k = cljs.core.first(cljs.core.next(arglist__8607));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8607)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8607)));
return G__8601__delegate.call(this, coll, k, v, kvs);
});
return G__8601;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8595.call(this,coll,k,v);
default:
return assoc__8596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8596.cljs$lang$applyTo;
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
var dissoc__8633 = (function (coll){
return coll;
});
var dissoc__8634 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8635 = (function() { 
var G__8637__delegate = function (coll,k,ks){
while(true){
var ret__8630 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8638 = ret__8630;
var G__8639 = cljs.core.first.call(null,ks);
var G__8640 = cljs.core.next.call(null,ks);
coll = G__8638;
k = G__8639;
ks = G__8640;
continue;
}
} else
{return ret__8630;
}
break;
}
};
var G__8637 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8637__delegate.call(this, coll, k, ks);
};
G__8637.cljs$lang$maxFixedArity = 2;
G__8637.cljs$lang$applyTo = (function (arglist__8646){
var coll = cljs.core.first(arglist__8646);
var k = cljs.core.first(cljs.core.next(arglist__8646));
var ks = cljs.core.rest(cljs.core.next(arglist__8646));
return G__8637__delegate.call(this, coll, k, ks);
});
return G__8637;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8633.call(this,coll);
case  2 :
return dissoc__8634.call(this,coll,k);
default:
return dissoc__8635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8635.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8676 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8681 = x__445__auto____8676;

if(cljs.core.truth_(and__3546__auto____8681))
{var and__3546__auto____8683 = x__445__auto____8676.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8683))
{return cljs.core.not.call(null,x__445__auto____8676.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8683;
}
} else
{return and__3546__auto____8681;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8676);
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
var disj__8720 = (function (coll){
return coll;
});
var disj__8721 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8722 = (function() { 
var G__8724__delegate = function (coll,k,ks){
while(true){
var ret__8704 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8725 = ret__8704;
var G__8726 = cljs.core.first.call(null,ks);
var G__8727 = cljs.core.next.call(null,ks);
coll = G__8725;
k = G__8726;
ks = G__8727;
continue;
}
} else
{return ret__8704;
}
break;
}
};
var G__8724 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8724__delegate.call(this, coll, k, ks);
};
G__8724.cljs$lang$maxFixedArity = 2;
G__8724.cljs$lang$applyTo = (function (arglist__8729){
var coll = cljs.core.first(arglist__8729);
var k = cljs.core.first(cljs.core.next(arglist__8729));
var ks = cljs.core.rest(cljs.core.next(arglist__8729));
return G__8724__delegate.call(this, coll, k, ks);
});
return G__8724;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8720.call(this,coll);
case  2 :
return disj__8721.call(this,coll,k);
default:
return disj__8722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8722.cljs$lang$applyTo;
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
{var x__445__auto____8744 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8746 = x__445__auto____8744;

if(cljs.core.truth_(and__3546__auto____8746))
{var and__3546__auto____8747 = x__445__auto____8744.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8747))
{return cljs.core.not.call(null,x__445__auto____8744.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8747;
}
} else
{return and__3546__auto____8746;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8744);
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
{var x__445__auto____8757 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8761 = x__445__auto____8757;

if(cljs.core.truth_(and__3546__auto____8761))
{var and__3546__auto____8762 = x__445__auto____8757.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8762))
{return cljs.core.not.call(null,x__445__auto____8757.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8762;
}
} else
{return and__3546__auto____8761;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8757);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8773 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8775 = x__445__auto____8773;

if(cljs.core.truth_(and__3546__auto____8775))
{var and__3546__auto____8776 = x__445__auto____8773.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8776))
{return cljs.core.not.call(null,x__445__auto____8773.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8776;
}
} else
{return and__3546__auto____8775;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8773);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8785 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8786 = x__445__auto____8785;

if(cljs.core.truth_(and__3546__auto____8786))
{var and__3546__auto____8787 = x__445__auto____8785.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8787))
{return cljs.core.not.call(null,x__445__auto____8785.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8787;
}
} else
{return and__3546__auto____8786;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8785);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8793 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8795 = x__445__auto____8793;

if(cljs.core.truth_(and__3546__auto____8795))
{var and__3546__auto____8797 = x__445__auto____8793.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8797))
{return cljs.core.not.call(null,x__445__auto____8793.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8797;
}
} else
{return and__3546__auto____8795;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8793);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8803 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8804 = x__445__auto____8803;

if(cljs.core.truth_(and__3546__auto____8804))
{var and__3546__auto____8806 = x__445__auto____8803.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8806))
{return cljs.core.not.call(null,x__445__auto____8803.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8806;
}
} else
{return and__3546__auto____8804;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8803);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8811 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8812 = x__445__auto____8811;

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8815 = x__445__auto____8811.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8815))
{return cljs.core.not.call(null,x__445__auto____8811.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8815;
}
} else
{return and__3546__auto____8812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8811);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8818 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8818.push(key);
}));
return keys__8818;
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
{var x__445__auto____8835 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8836 = x__445__auto____8835;

if(cljs.core.truth_(and__3546__auto____8836))
{var and__3546__auto____8837 = x__445__auto____8835.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8837))
{return cljs.core.not.call(null,x__445__auto____8835.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8837;
}
} else
{return and__3546__auto____8836;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8835);
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
var and__3546__auto____8842 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8842))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8843 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8843))
{return or__3548__auto____8843;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8842;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8848 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8848))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8848;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8852 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8852))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8852;
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
var and__3546__auto____8877 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8877))
{return (n == n.toFixed());
} else
{return and__3546__auto____8877;
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
if(cljs.core.truth_((function (){var and__3546__auto____8884 = coll;

if(cljs.core.truth_(and__3546__auto____8884))
{var and__3546__auto____8890 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8890))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8890;
}
} else
{return and__3546__auto____8884;
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
var distinct_QMARK___8903 = (function (x){
return true;
});
var distinct_QMARK___8904 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8905 = (function() { 
var G__8909__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8897 = cljs.core.set([y,x]);
var xs__8898 = more;

while(true){
var x__8900 = cljs.core.first.call(null,xs__8898);
var etc__8901 = cljs.core.next.call(null,xs__8898);

if(cljs.core.truth_(xs__8898))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8897,x__8900)))
{return false;
} else
{{
var G__8910 = cljs.core.conj.call(null,s__8897,x__8900);
var G__8911 = etc__8901;
s__8897 = G__8910;
xs__8898 = G__8911;
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
var G__8909 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8909__delegate.call(this, x, y, more);
};
G__8909.cljs$lang$maxFixedArity = 2;
G__8909.cljs$lang$applyTo = (function (arglist__8913){
var x = cljs.core.first(arglist__8913);
var y = cljs.core.first(cljs.core.next(arglist__8913));
var more = cljs.core.rest(cljs.core.next(arglist__8913));
return G__8909__delegate.call(this, x, y, more);
});
return G__8909;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8903.call(this,x);
case  2 :
return distinct_QMARK___8904.call(this,x,y);
default:
return distinct_QMARK___8905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8905.cljs$lang$applyTo;
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
var r__9027 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9027)))
{return r__9027;
} else
{if(cljs.core.truth_(r__9027))
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
var sort__9035 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9036 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9031 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9031,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9031);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9035.call(this,comp);
case  2 :
return sort__9036.call(this,comp,coll);
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
var sort_by__9048 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9049 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9048.call(this,keyfn,comp);
case  3 :
return sort_by__9049.call(this,keyfn,comp,coll);
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
var reduce__9057 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9058 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9057.call(this,f,val);
case  3 :
return reduce__9058.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9080 = (function (f,coll){
var temp__3695__auto____9073 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9073))
{var s__9076 = temp__3695__auto____9073;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9076),cljs.core.next.call(null,s__9076));
} else
{return f.call(null);
}
});
var seq_reduce__9081 = (function (f,val,coll){
var val__9078 = val;
var coll__9079 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9079))
{{
var G__9083 = f.call(null,val__9078,cljs.core.first.call(null,coll__9079));
var G__9084 = cljs.core.next.call(null,coll__9079);
val__9078 = G__9083;
coll__9079 = G__9084;
continue;
}
} else
{return val__9078;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9080.call(this,f,val);
case  3 :
return seq_reduce__9081.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9088 = null;
var G__9088__9089 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9088__9090 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9088 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9088__9089.call(this,coll,f);
case  3 :
return G__9088__9090.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9088;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9103 = (function (){
return 0;
});
var _PLUS___9104 = (function (x){
return x;
});
var _PLUS___9105 = (function (x,y){
return (x + y);
});
var _PLUS___9106 = (function() { 
var G__9108__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9108 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9108__delegate.call(this, x, y, more);
};
G__9108.cljs$lang$maxFixedArity = 2;
G__9108.cljs$lang$applyTo = (function (arglist__9109){
var x = cljs.core.first(arglist__9109);
var y = cljs.core.first(cljs.core.next(arglist__9109));
var more = cljs.core.rest(cljs.core.next(arglist__9109));
return G__9108__delegate.call(this, x, y, more);
});
return G__9108;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9103.call(this);
case  1 :
return _PLUS___9104.call(this,x);
case  2 :
return _PLUS___9105.call(this,x,y);
default:
return _PLUS___9106.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9106.cljs$lang$applyTo;
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
var ___9116 = (function (x){
return (- x);
});
var ___9117 = (function (x,y){
return (x - y);
});
var ___9118 = (function() { 
var G__9120__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9120 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9120__delegate.call(this, x, y, more);
};
G__9120.cljs$lang$maxFixedArity = 2;
G__9120.cljs$lang$applyTo = (function (arglist__9121){
var x = cljs.core.first(arglist__9121);
var y = cljs.core.first(cljs.core.next(arglist__9121));
var more = cljs.core.rest(cljs.core.next(arglist__9121));
return G__9120__delegate.call(this, x, y, more);
});
return G__9120;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9116.call(this,x);
case  2 :
return ___9117.call(this,x,y);
default:
return ___9118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9118.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9213 = (function (){
return 1;
});
var _STAR___9214 = (function (x){
return x;
});
var _STAR___9215 = (function (x,y){
return (x * y);
});
var _STAR___9216 = (function() { 
var G__9220__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9220 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9220__delegate.call(this, x, y, more);
};
G__9220.cljs$lang$maxFixedArity = 2;
G__9220.cljs$lang$applyTo = (function (arglist__9225){
var x = cljs.core.first(arglist__9225);
var y = cljs.core.first(cljs.core.next(arglist__9225));
var more = cljs.core.rest(cljs.core.next(arglist__9225));
return G__9220__delegate.call(this, x, y, more);
});
return G__9220;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9213.call(this);
case  1 :
return _STAR___9214.call(this,x);
case  2 :
return _STAR___9215.call(this,x,y);
default:
return _STAR___9216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9216.cljs$lang$applyTo;
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
var _SLASH___9237 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9238 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9239 = (function() { 
var G__9242__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9242 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9242__delegate.call(this, x, y, more);
};
G__9242.cljs$lang$maxFixedArity = 2;
G__9242.cljs$lang$applyTo = (function (arglist__9244){
var x = cljs.core.first(arglist__9244);
var y = cljs.core.first(cljs.core.next(arglist__9244));
var more = cljs.core.rest(cljs.core.next(arglist__9244));
return G__9242__delegate.call(this, x, y, more);
});
return G__9242;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9237.call(this,x);
case  2 :
return _SLASH___9238.call(this,x,y);
default:
return _SLASH___9239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9239.cljs$lang$applyTo;
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
var _LT___9259 = (function (x){
return true;
});
var _LT___9260 = (function (x,y){
return (x < y);
});
var _LT___9261 = (function() { 
var G__9263__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9264 = y;
var G__9265 = cljs.core.first.call(null,more);
var G__9266 = cljs.core.next.call(null,more);
x = G__9264;
y = G__9265;
more = G__9266;
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
var G__9263 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9263__delegate.call(this, x, y, more);
};
G__9263.cljs$lang$maxFixedArity = 2;
G__9263.cljs$lang$applyTo = (function (arglist__9271){
var x = cljs.core.first(arglist__9271);
var y = cljs.core.first(cljs.core.next(arglist__9271));
var more = cljs.core.rest(cljs.core.next(arglist__9271));
return G__9263__delegate.call(this, x, y, more);
});
return G__9263;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9259.call(this,x);
case  2 :
return _LT___9260.call(this,x,y);
default:
return _LT___9261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9261.cljs$lang$applyTo;
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
var _LT__EQ___9286 = (function (x){
return true;
});
var _LT__EQ___9287 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9288 = (function() { 
var G__9294__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9296 = y;
var G__9297 = cljs.core.first.call(null,more);
var G__9298 = cljs.core.next.call(null,more);
x = G__9296;
y = G__9297;
more = G__9298;
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
var G__9294 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9294__delegate.call(this, x, y, more);
};
G__9294.cljs$lang$maxFixedArity = 2;
G__9294.cljs$lang$applyTo = (function (arglist__9302){
var x = cljs.core.first(arglist__9302);
var y = cljs.core.first(cljs.core.next(arglist__9302));
var more = cljs.core.rest(cljs.core.next(arglist__9302));
return G__9294__delegate.call(this, x, y, more);
});
return G__9294;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9286.call(this,x);
case  2 :
return _LT__EQ___9287.call(this,x,y);
default:
return _LT__EQ___9288.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9288.cljs$lang$applyTo;
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
var _GT___9317 = (function (x){
return true;
});
var _GT___9318 = (function (x,y){
return (x > y);
});
var _GT___9319 = (function() { 
var G__9322__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9323 = y;
var G__9324 = cljs.core.first.call(null,more);
var G__9325 = cljs.core.next.call(null,more);
x = G__9323;
y = G__9324;
more = G__9325;
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
var G__9322 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9322__delegate.call(this, x, y, more);
};
G__9322.cljs$lang$maxFixedArity = 2;
G__9322.cljs$lang$applyTo = (function (arglist__9331){
var x = cljs.core.first(arglist__9331);
var y = cljs.core.first(cljs.core.next(arglist__9331));
var more = cljs.core.rest(cljs.core.next(arglist__9331));
return G__9322__delegate.call(this, x, y, more);
});
return G__9322;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9317.call(this,x);
case  2 :
return _GT___9318.call(this,x,y);
default:
return _GT___9319.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9319.cljs$lang$applyTo;
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
var _GT__EQ___9347 = (function (x){
return true;
});
var _GT__EQ___9348 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9349 = (function() { 
var G__9351__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9352 = y;
var G__9353 = cljs.core.first.call(null,more);
var G__9354 = cljs.core.next.call(null,more);
x = G__9352;
y = G__9353;
more = G__9354;
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
var G__9351 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9351__delegate.call(this, x, y, more);
};
G__9351.cljs$lang$maxFixedArity = 2;
G__9351.cljs$lang$applyTo = (function (arglist__9361){
var x = cljs.core.first(arglist__9361);
var y = cljs.core.first(cljs.core.next(arglist__9361));
var more = cljs.core.rest(cljs.core.next(arglist__9361));
return G__9351__delegate.call(this, x, y, more);
});
return G__9351;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9347.call(this,x);
case  2 :
return _GT__EQ___9348.call(this,x,y);
default:
return _GT__EQ___9349.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9349.cljs$lang$applyTo;
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
var max__9410 = (function (x){
return x;
});
var max__9412 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9413 = (function() { 
var G__9416__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9416 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9416__delegate.call(this, x, y, more);
};
G__9416.cljs$lang$maxFixedArity = 2;
G__9416.cljs$lang$applyTo = (function (arglist__9417){
var x = cljs.core.first(arglist__9417);
var y = cljs.core.first(cljs.core.next(arglist__9417));
var more = cljs.core.rest(cljs.core.next(arglist__9417));
return G__9416__delegate.call(this, x, y, more);
});
return G__9416;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9410.call(this,x);
case  2 :
return max__9412.call(this,x,y);
default:
return max__9413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9413.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9419 = (function (x){
return x;
});
var min__9420 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9421 = (function() { 
var G__9427__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9427 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9427__delegate.call(this, x, y, more);
};
G__9427.cljs$lang$maxFixedArity = 2;
G__9427.cljs$lang$applyTo = (function (arglist__9428){
var x = cljs.core.first(arglist__9428);
var y = cljs.core.first(cljs.core.next(arglist__9428));
var more = cljs.core.rest(cljs.core.next(arglist__9428));
return G__9427__delegate.call(this, x, y, more);
});
return G__9427;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9419.call(this,x);
case  2 :
return min__9420.call(this,x,y);
default:
return min__9421.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9421.cljs$lang$applyTo;
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
var rem__9433 = (n % d);

return cljs.core.fix.call(null,((n - rem__9433) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9434 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9434));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9435 = (function (){
return Math.random.call(null);
});
var rand__9436 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9435.call(this);
case  1 :
return rand__9436.call(this,n);
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
var _EQ__EQ___9461 = (function (x){
return true;
});
var _EQ__EQ___9462 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9463 = (function() { 
var G__9465__delegate = function (x,y,more){
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
var G__9465 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9465__delegate.call(this, x, y, more);
};
G__9465.cljs$lang$maxFixedArity = 2;
G__9465.cljs$lang$applyTo = (function (arglist__9471){
var x = cljs.core.first(arglist__9471);
var y = cljs.core.first(cljs.core.next(arglist__9471));
var more = cljs.core.rest(cljs.core.next(arglist__9471));
return G__9465__delegate.call(this, x, y, more);
});
return G__9465;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9461.call(this,x);
case  2 :
return _EQ__EQ___9462.call(this,x,y);
default:
return _EQ__EQ___9463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9463.cljs$lang$applyTo;
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
var n__9485 = n;
var xs__9487 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9489 = xs__9487;

if(cljs.core.truth_(and__3546__auto____9489))
{return (n__9485 > 0);
} else
{return and__3546__auto____9489;
}
})()))
{{
var G__9494 = (n__9485 - 1);
var G__9495 = cljs.core.next.call(null,xs__9487);
n__9485 = G__9494;
xs__9487 = G__9495;
continue;
}
} else
{return xs__9487;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9504 = null;
var G__9504__9505 = (function (coll,n){
var temp__3695__auto____9496 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9496))
{var xs__9497 = temp__3695__auto____9496;

return cljs.core.first.call(null,xs__9497);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9504__9506 = (function (coll,n,not_found){
var temp__3695__auto____9498 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9498))
{var xs__9499 = temp__3695__auto____9498;

return cljs.core.first.call(null,xs__9499);
} else
{return not_found;
}
});
G__9504 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9504__9505.call(this,coll,n);
case  3 :
return G__9504__9506.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9504;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9530 = (function (){
return "";
});
var str_STAR___9531 = (function (x){
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
var str_STAR___9532 = (function() { 
var G__9534__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9535 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9536 = cljs.core.next.call(null,more);
sb = G__9535;
more = G__9536;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9534 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9534__delegate.call(this, x, ys);
};
G__9534.cljs$lang$maxFixedArity = 1;
G__9534.cljs$lang$applyTo = (function (arglist__9537){
var x = cljs.core.first(arglist__9537);
var ys = cljs.core.rest(arglist__9537);
return G__9534__delegate.call(this, x, ys);
});
return G__9534;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9530.call(this);
case  1 :
return str_STAR___9531.call(this,x);
default:
return str_STAR___9532.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9532.cljs$lang$applyTo;
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
var str__9538 = (function (){
return "";
});
var str__9539 = (function (x){
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
var str__9540 = (function() { 
var G__9543__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9543 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9543__delegate.call(this, x, ys);
};
G__9543.cljs$lang$maxFixedArity = 1;
G__9543.cljs$lang$applyTo = (function (arglist__9546){
var x = cljs.core.first(arglist__9546);
var ys = cljs.core.rest(arglist__9546);
return G__9543__delegate.call(this, x, ys);
});
return G__9543;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9538.call(this);
case  1 :
return str__9539.call(this,x);
default:
return str__9540.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9540.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9581 = (function (s,start){
return s.substring(start);
});
var subs__9582 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9581.call(this,s,start);
case  3 :
return subs__9582.call(this,s,start,end);
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
var symbol__9592 = (function (name){
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
var symbol__9593 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9592.call(this,ns);
case  2 :
return symbol__9593.call(this,ns,name);
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
var keyword__9602 = (function (name){
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
var keyword__9603 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9602.call(this,ns);
case  2 :
return keyword__9603.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9611 = cljs.core.seq.call(null,x);
var ys__9612 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9611)))
{return cljs.core.nil_QMARK_.call(null,ys__9612);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9612)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9611),cljs.core.first.call(null,ys__9612))))
{{
var G__9622 = cljs.core.next.call(null,xs__9611);
var G__9623 = cljs.core.next.call(null,ys__9612);
xs__9611 = G__9622;
ys__9612 = G__9623;
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
return cljs.core.reduce.call(null,(function (p1__9625_SHARP_,p2__9626_SHARP_){
return cljs.core.hash_combine.call(null,p1__9625_SHARP_,cljs.core.hash.call(null,p2__9626_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9639__9640 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9639__9640))
{var G__9642__9644 = cljs.core.first.call(null,G__9639__9640);
var vec__9643__9645 = G__9642__9644;
var key_name__9646 = cljs.core.nth.call(null,vec__9643__9645,0,null);
var f__9647 = cljs.core.nth.call(null,vec__9643__9645,1,null);
var G__9639__9648 = G__9639__9640;

var G__9642__9649 = G__9642__9644;
var G__9639__9650 = G__9639__9648;

while(true){
var vec__9651__9653 = G__9642__9649;
var key_name__9657 = cljs.core.nth.call(null,vec__9651__9653,0,null);
var f__9658 = cljs.core.nth.call(null,vec__9651__9653,1,null);
var G__9639__9659 = G__9639__9650;

var str_name__9660 = cljs.core.name.call(null,key_name__9657);

obj[str_name__9660] = f__9658;
var temp__3698__auto____9664 = cljs.core.next.call(null,G__9639__9659);

if(cljs.core.truth_(temp__3698__auto____9664))
{var G__9639__9666 = temp__3698__auto____9664;

{
var G__9673 = cljs.core.first.call(null,G__9639__9666);
var G__9674 = G__9639__9666;
G__9642__9649 = G__9673;
G__9639__9650 = G__9674;
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
var this__9752 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9753 = this;
return (new cljs.core.List(this__9753.meta,o,coll,(this__9753.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9754 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9756 = this;
return this__9756.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9757 = this;
return this__9757.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9759 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9761 = this;
return this__9761.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9764 = this;
return this__9764.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9766 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9769 = this;
return (new cljs.core.List(meta,this__9769.first,this__9769.rest,this__9769.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9771 = this;
return this__9771.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9776 = this;
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
var this__9800 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9803 = this;
return (new cljs.core.List(this__9803.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9805 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9807 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9809 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9810 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9811 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9813 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9817 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9819 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9823 = this;
return this__9823.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9827 = this;
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
list.cljs$lang$applyTo = (function (arglist__9846){
var items = cljs.core.seq( arglist__9846 );;
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
var this__9853 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9855 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9858 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9927 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9927.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9930 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9932 = this;
return this__9932.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9933 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9933.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9933.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9934 = this;
return this__9934.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9935 = this;
return (new cljs.core.Cons(meta,this__9935.first,this__9935.rest));
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
var G__9955 = null;
var G__9955__9956 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9955__9957 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9955 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9955__9956.call(this,string,f);
case  3 :
return G__9955__9957.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9955;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9959 = null;
var G__9959__9960 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9959__9961 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9959 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9959__9960.call(this,string,k);
case  3 :
return G__9959__9961.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9959;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9963 = null;
var G__9963__9964 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9963__9965 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9963 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9963__9964.call(this,string,n);
case  3 :
return G__9963__9965.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9963;
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
var G__9978 = null;
var G__9978__9979 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9978__9980 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9978 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9978__9979.call(this,this$,coll);
case  3 :
return G__9978__9980.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9978;
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
var x__9987 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9987;
} else
{lazy_seq.x = x__9987.call(null);
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
var this__10145 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10147 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10148 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10156 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10156.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10157 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10159 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10160 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10162 = this;
return this__10162.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10163 = this;
return (new cljs.core.LazySeq(meta,this__10163.realized,this__10163.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10171 = cljs.core.array.call(null);

var s__10172 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10172)))
{ary__10171.push(cljs.core.first.call(null,s__10172));
{
var G__10175 = cljs.core.next.call(null,s__10172);
s__10172 = G__10175;
continue;
}
} else
{return ary__10171;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10186 = s;
var i__10187 = n;
var sum__10188 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10191 = (i__10187 > 0);

if(cljs.core.truth_(and__3546__auto____10191))
{return cljs.core.seq.call(null,s__10186);
} else
{return and__3546__auto____10191;
}
})()))
{{
var G__10195 = cljs.core.next.call(null,s__10186);
var G__10196 = (i__10187 - 1);
var G__10197 = (sum__10188 + 1);
s__10186 = G__10195;
i__10187 = G__10196;
sum__10188 = G__10197;
continue;
}
} else
{return sum__10188;
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
var concat__10223 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10224 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10225 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10204 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10204))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10204),concat.call(null,cljs.core.rest.call(null,s__10204),y));
} else
{return y;
}
})));
});
var concat__10226 = (function() { 
var G__10228__delegate = function (x,y,zs){
var cat__10208 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10207 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10207))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10207),cat.call(null,cljs.core.rest.call(null,xys__10207),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10208.call(null,concat.call(null,x,y),zs);
};
var G__10228 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10228__delegate.call(this, x, y, zs);
};
G__10228.cljs$lang$maxFixedArity = 2;
G__10228.cljs$lang$applyTo = (function (arglist__10229){
var x = cljs.core.first(arglist__10229);
var y = cljs.core.first(cljs.core.next(arglist__10229));
var zs = cljs.core.rest(cljs.core.next(arglist__10229));
return G__10228__delegate.call(this, x, y, zs);
});
return G__10228;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10223.call(this);
case  1 :
return concat__10224.call(this,x);
case  2 :
return concat__10225.call(this,x,y);
default:
return concat__10226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10226.cljs$lang$applyTo;
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
var list_STAR___10230 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10231 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10232 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10233 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10234 = (function() { 
var G__10236__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10236 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10236__delegate.call(this, a, b, c, d, more);
};
G__10236.cljs$lang$maxFixedArity = 4;
G__10236.cljs$lang$applyTo = (function (arglist__10237){
var a = cljs.core.first(arglist__10237);
var b = cljs.core.first(cljs.core.next(arglist__10237));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10237)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10237))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10237))));
return G__10236__delegate.call(this, a, b, c, d, more);
});
return G__10236;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10230.call(this,a);
case  2 :
return list_STAR___10231.call(this,a,b);
case  3 :
return list_STAR___10232.call(this,a,b,c);
case  4 :
return list_STAR___10233.call(this,a,b,c,d);
default:
return list_STAR___10234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10234.cljs$lang$applyTo;
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
var apply__10248 = (function (f,args){
var fixed_arity__10238 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10238 + 1)) <= fixed_arity__10238)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10249 = (function (f,x,args){
var arglist__10239 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10240 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10239,fixed_arity__10240) <= fixed_arity__10240)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10239));
} else
{return f.cljs$lang$applyTo(arglist__10239);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10239));
}
});
var apply__10250 = (function (f,x,y,args){
var arglist__10241 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10242 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10241,fixed_arity__10242) <= fixed_arity__10242)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10241));
} else
{return f.cljs$lang$applyTo(arglist__10241);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10241));
}
});
var apply__10251 = (function (f,x,y,z,args){
var arglist__10243 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10244 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10243,fixed_arity__10244) <= fixed_arity__10244)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10243));
} else
{return f.cljs$lang$applyTo(arglist__10243);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10243));
}
});
var apply__10252 = (function() { 
var G__10352__delegate = function (f,a,b,c,d,args){
var arglist__10246 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10247 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10246,fixed_arity__10247) <= fixed_arity__10247)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10246));
} else
{return f.cljs$lang$applyTo(arglist__10246);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10246));
}
};
var G__10352 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10352__delegate.call(this, f, a, b, c, d, args);
};
G__10352.cljs$lang$maxFixedArity = 5;
G__10352.cljs$lang$applyTo = (function (arglist__10355){
var f = cljs.core.first(arglist__10355);
var a = cljs.core.first(cljs.core.next(arglist__10355));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10355)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10355))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10355)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10355)))));
return G__10352__delegate.call(this, f, a, b, c, d, args);
});
return G__10352;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10248.call(this,f,a);
case  3 :
return apply__10249.call(this,f,a,b);
case  4 :
return apply__10250.call(this,f,a,b,c);
case  5 :
return apply__10251.call(this,f,a,b,c,d);
default:
return apply__10252.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10252.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10359){
var obj = cljs.core.first(arglist__10359);
var f = cljs.core.first(cljs.core.next(arglist__10359));
var args = cljs.core.rest(cljs.core.next(arglist__10359));
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
var not_EQ___10365 = (function (x){
return false;
});
var not_EQ___10366 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10367 = (function() { 
var G__10370__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10370 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10370__delegate.call(this, x, y, more);
};
G__10370.cljs$lang$maxFixedArity = 2;
G__10370.cljs$lang$applyTo = (function (arglist__10371){
var x = cljs.core.first(arglist__10371);
var y = cljs.core.first(cljs.core.next(arglist__10371));
var more = cljs.core.rest(cljs.core.next(arglist__10371));
return G__10370__delegate.call(this, x, y, more);
});
return G__10370;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10365.call(this,x);
case  2 :
return not_EQ___10366.call(this,x,y);
default:
return not_EQ___10367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10367.cljs$lang$applyTo;
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
var G__10387 = pred;
var G__10388 = cljs.core.next.call(null,coll);
pred = G__10387;
coll = G__10388;
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
{var or__3548__auto____10391 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10391))
{return or__3548__auto____10391;
} else
{{
var G__10395 = pred;
var G__10396 = cljs.core.next.call(null,coll);
pred = G__10395;
coll = G__10396;
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
var G__10454 = null;
var G__10454__10455 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10454__10456 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10454__10457 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10454__10458 = (function() { 
var G__10460__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10460 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10460__delegate.call(this, x, y, zs);
};
G__10460.cljs$lang$maxFixedArity = 2;
G__10460.cljs$lang$applyTo = (function (arglist__10461){
var x = cljs.core.first(arglist__10461);
var y = cljs.core.first(cljs.core.next(arglist__10461));
var zs = cljs.core.rest(cljs.core.next(arglist__10461));
return G__10460__delegate.call(this, x, y, zs);
});
return G__10460;
})()
;
G__10454 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10454__10455.call(this);
case  1 :
return G__10454__10456.call(this,x);
case  2 :
return G__10454__10457.call(this,x,y);
default:
return G__10454__10458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10454.cljs$lang$maxFixedArity = 2;
G__10454.cljs$lang$applyTo = G__10454__10458.cljs$lang$applyTo;
return G__10454;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10462__delegate = function (args){
return x;
};
var G__10462 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10462__delegate.call(this, args);
};
G__10462.cljs$lang$maxFixedArity = 0;
G__10462.cljs$lang$applyTo = (function (arglist__10463){
var args = cljs.core.seq( arglist__10463 );;
return G__10462__delegate.call(this, args);
});
return G__10462;
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
var comp__10469 = (function (){
return cljs.core.identity;
});
var comp__10470 = (function (f){
return f;
});
var comp__10471 = (function (f,g){
return (function() {
var G__10476 = null;
var G__10476__10477 = (function (){
return f.call(null,g.call(null));
});
var G__10476__10478 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10476__10479 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10476__10480 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10476__10481 = (function() { 
var G__10485__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10485 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10485__delegate.call(this, x, y, z, args);
};
G__10485.cljs$lang$maxFixedArity = 3;
G__10485.cljs$lang$applyTo = (function (arglist__10486){
var x = cljs.core.first(arglist__10486);
var y = cljs.core.first(cljs.core.next(arglist__10486));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10486)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10486)));
return G__10485__delegate.call(this, x, y, z, args);
});
return G__10485;
})()
;
G__10476 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10476__10477.call(this);
case  1 :
return G__10476__10478.call(this,x);
case  2 :
return G__10476__10479.call(this,x,y);
case  3 :
return G__10476__10480.call(this,x,y,z);
default:
return G__10476__10481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10476.cljs$lang$maxFixedArity = 3;
G__10476.cljs$lang$applyTo = G__10476__10481.cljs$lang$applyTo;
return G__10476;
})()
});
var comp__10472 = (function (f,g,h){
return (function() {
var G__10487 = null;
var G__10487__10488 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10487__10489 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10487__10490 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10487__10491 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10487__10492 = (function() { 
var G__10506__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10506 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10506__delegate.call(this, x, y, z, args);
};
G__10506.cljs$lang$maxFixedArity = 3;
G__10506.cljs$lang$applyTo = (function (arglist__10508){
var x = cljs.core.first(arglist__10508);
var y = cljs.core.first(cljs.core.next(arglist__10508));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10508)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10508)));
return G__10506__delegate.call(this, x, y, z, args);
});
return G__10506;
})()
;
G__10487 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10487__10488.call(this);
case  1 :
return G__10487__10489.call(this,x);
case  2 :
return G__10487__10490.call(this,x,y);
case  3 :
return G__10487__10491.call(this,x,y,z);
default:
return G__10487__10492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10487.cljs$lang$maxFixedArity = 3;
G__10487.cljs$lang$applyTo = G__10487__10492.cljs$lang$applyTo;
return G__10487;
})()
});
var comp__10473 = (function() { 
var G__10509__delegate = function (f1,f2,f3,fs){
var fs__10466 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10511__delegate = function (args){
var ret__10467 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10466),args);
var fs__10468 = cljs.core.next.call(null,fs__10466);

while(true){
if(cljs.core.truth_(fs__10468))
{{
var G__10513 = cljs.core.first.call(null,fs__10468).call(null,ret__10467);
var G__10514 = cljs.core.next.call(null,fs__10468);
ret__10467 = G__10513;
fs__10468 = G__10514;
continue;
}
} else
{return ret__10467;
}
break;
}
};
var G__10511 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10511__delegate.call(this, args);
};
G__10511.cljs$lang$maxFixedArity = 0;
G__10511.cljs$lang$applyTo = (function (arglist__10515){
var args = cljs.core.seq( arglist__10515 );;
return G__10511__delegate.call(this, args);
});
return G__10511;
})()
;
};
var G__10509 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10509__delegate.call(this, f1, f2, f3, fs);
};
G__10509.cljs$lang$maxFixedArity = 3;
G__10509.cljs$lang$applyTo = (function (arglist__10518){
var f1 = cljs.core.first(arglist__10518);
var f2 = cljs.core.first(cljs.core.next(arglist__10518));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10518)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10518)));
return G__10509__delegate.call(this, f1, f2, f3, fs);
});
return G__10509;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10469.call(this);
case  1 :
return comp__10470.call(this,f1);
case  2 :
return comp__10471.call(this,f1,f2);
case  3 :
return comp__10472.call(this,f1,f2,f3);
default:
return comp__10473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10473.cljs$lang$applyTo;
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
var partial__10668 = (function (f,arg1){
return (function() { 
var G__10675__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10675 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10675__delegate.call(this, args);
};
G__10675.cljs$lang$maxFixedArity = 0;
G__10675.cljs$lang$applyTo = (function (arglist__10678){
var args = cljs.core.seq( arglist__10678 );;
return G__10675__delegate.call(this, args);
});
return G__10675;
})()
;
});
var partial__10669 = (function (f,arg1,arg2){
return (function() { 
var G__10679__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10679 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10679__delegate.call(this, args);
};
G__10679.cljs$lang$maxFixedArity = 0;
G__10679.cljs$lang$applyTo = (function (arglist__10680){
var args = cljs.core.seq( arglist__10680 );;
return G__10679__delegate.call(this, args);
});
return G__10679;
})()
;
});
var partial__10670 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10682__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10682 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10682__delegate.call(this, args);
};
G__10682.cljs$lang$maxFixedArity = 0;
G__10682.cljs$lang$applyTo = (function (arglist__10683){
var args = cljs.core.seq( arglist__10683 );;
return G__10682__delegate.call(this, args);
});
return G__10682;
})()
;
});
var partial__10672 = (function() { 
var G__10685__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10686__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10686 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10686__delegate.call(this, args);
};
G__10686.cljs$lang$maxFixedArity = 0;
G__10686.cljs$lang$applyTo = (function (arglist__10687){
var args = cljs.core.seq( arglist__10687 );;
return G__10686__delegate.call(this, args);
});
return G__10686;
})()
;
};
var G__10685 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10685__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10685.cljs$lang$maxFixedArity = 4;
G__10685.cljs$lang$applyTo = (function (arglist__10691){
var f = cljs.core.first(arglist__10691);
var arg1 = cljs.core.first(cljs.core.next(arglist__10691));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10691)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10691))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10691))));
return G__10685__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10685;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10668.call(this,f,arg1);
case  3 :
return partial__10669.call(this,f,arg1,arg2);
case  4 :
return partial__10670.call(this,f,arg1,arg2,arg3);
default:
return partial__10672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10672.cljs$lang$applyTo;
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
var fnil__10699 = (function (f,x){
return (function() {
var G__10703 = null;
var G__10703__10704 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10703__10705 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10703__10706 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10703__10707 = (function() { 
var G__10712__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10712 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10712__delegate.call(this, a, b, c, ds);
};
G__10712.cljs$lang$maxFixedArity = 3;
G__10712.cljs$lang$applyTo = (function (arglist__10713){
var a = cljs.core.first(arglist__10713);
var b = cljs.core.first(cljs.core.next(arglist__10713));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10713)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10713)));
return G__10712__delegate.call(this, a, b, c, ds);
});
return G__10712;
})()
;
G__10703 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10703__10704.call(this,a);
case  2 :
return G__10703__10705.call(this,a,b);
case  3 :
return G__10703__10706.call(this,a,b,c);
default:
return G__10703__10707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10703.cljs$lang$maxFixedArity = 3;
G__10703.cljs$lang$applyTo = G__10703__10707.cljs$lang$applyTo;
return G__10703;
})()
});
var fnil__10700 = (function (f,x,y){
return (function() {
var G__10714 = null;
var G__10714__10715 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10714__10716 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10714__10717 = (function() { 
var G__10720__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10720 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10720__delegate.call(this, a, b, c, ds);
};
G__10720.cljs$lang$maxFixedArity = 3;
G__10720.cljs$lang$applyTo = (function (arglist__10724){
var a = cljs.core.first(arglist__10724);
var b = cljs.core.first(cljs.core.next(arglist__10724));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10724)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10724)));
return G__10720__delegate.call(this, a, b, c, ds);
});
return G__10720;
})()
;
G__10714 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10714__10715.call(this,a,b);
case  3 :
return G__10714__10716.call(this,a,b,c);
default:
return G__10714__10717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10714.cljs$lang$maxFixedArity = 3;
G__10714.cljs$lang$applyTo = G__10714__10717.cljs$lang$applyTo;
return G__10714;
})()
});
var fnil__10701 = (function (f,x,y,z){
return (function() {
var G__10727 = null;
var G__10727__10728 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10727__10729 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10727__10730 = (function() { 
var G__10734__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10734 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10734__delegate.call(this, a, b, c, ds);
};
G__10734.cljs$lang$maxFixedArity = 3;
G__10734.cljs$lang$applyTo = (function (arglist__10736){
var a = cljs.core.first(arglist__10736);
var b = cljs.core.first(cljs.core.next(arglist__10736));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10736)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10736)));
return G__10734__delegate.call(this, a, b, c, ds);
});
return G__10734;
})()
;
G__10727 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10727__10728.call(this,a,b);
case  3 :
return G__10727__10729.call(this,a,b,c);
default:
return G__10727__10730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10727.cljs$lang$maxFixedArity = 3;
G__10727.cljs$lang$applyTo = G__10727__10730.cljs$lang$applyTo;
return G__10727;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10699.call(this,f,x);
case  3 :
return fnil__10700.call(this,f,x,y);
case  4 :
return fnil__10701.call(this,f,x,y,z);
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
var mapi__10824 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10820 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10820))
{var s__10821 = temp__3698__auto____10820;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10821)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10821)));
} else
{return null;
}
})));
});

return mapi__10824.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10838 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10838))
{var s__10839 = temp__3698__auto____10838;

var x__10840 = f.call(null,cljs.core.first.call(null,s__10839));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10840)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10839));
} else
{return cljs.core.cons.call(null,x__10840,keep.call(null,f,cljs.core.rest.call(null,s__10839)));
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
var keepi__10881 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10877 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10877))
{var s__10879 = temp__3698__auto____10877;

var x__10880 = f.call(null,idx,cljs.core.first.call(null,s__10879));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10880)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10879));
} else
{return cljs.core.cons.call(null,x__10880,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10879)));
}
} else
{return null;
}
})));
});

return keepi__10881.call(null,0,coll);
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
var ep1__11134 = (function (){
return true;
});
var ep1__11135 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11136 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10914 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10914))
{return p.call(null,y);
} else
{return and__3546__auto____10914;
}
})());
});
var ep1__11137 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10919 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10919))
{var and__3546__auto____10920 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10920))
{return p.call(null,z);
} else
{return and__3546__auto____10920;
}
} else
{return and__3546__auto____10919;
}
})());
});
var ep1__11138 = (function() { 
var G__11148__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10922 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10922))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10922;
}
})());
};
var G__11148 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11148__delegate.call(this, x, y, z, args);
};
G__11148.cljs$lang$maxFixedArity = 3;
G__11148.cljs$lang$applyTo = (function (arglist__11150){
var x = cljs.core.first(arglist__11150);
var y = cljs.core.first(cljs.core.next(arglist__11150));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11150)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11150)));
return G__11148__delegate.call(this, x, y, z, args);
});
return G__11148;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11134.call(this);
case  1 :
return ep1__11135.call(this,x);
case  2 :
return ep1__11136.call(this,x,y);
case  3 :
return ep1__11137.call(this,x,y,z);
default:
return ep1__11138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11138.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11128 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11155 = (function (){
return true;
});
var ep2__11156 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10928 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10928))
{return p2.call(null,x);
} else
{return and__3546__auto____10928;
}
})());
});
var ep2__11157 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10939 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10939))
{var and__3546__auto____10940 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10940))
{var and__3546__auto____10942 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10942))
{return p2.call(null,y);
} else
{return and__3546__auto____10942;
}
} else
{return and__3546__auto____10940;
}
} else
{return and__3546__auto____10939;
}
})());
});
var ep2__11158 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10943 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10943))
{var and__3546__auto____10946 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10946))
{var and__3546__auto____10953 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10953))
{var and__3546__auto____10954 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10954))
{var and__3546__auto____10955 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10955))
{return p2.call(null,z);
} else
{return and__3546__auto____10955;
}
} else
{return and__3546__auto____10954;
}
} else
{return and__3546__auto____10953;
}
} else
{return and__3546__auto____10946;
}
} else
{return and__3546__auto____10943;
}
})());
});
var ep2__11159 = (function() { 
var G__11171__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10957 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10957))
{return cljs.core.every_QMARK_.call(null,(function (p1__10861_SHARP_){
var and__3546__auto____10959 = p1.call(null,p1__10861_SHARP_);

if(cljs.core.truth_(and__3546__auto____10959))
{return p2.call(null,p1__10861_SHARP_);
} else
{return and__3546__auto____10959;
}
}),args);
} else
{return and__3546__auto____10957;
}
})());
};
var G__11171 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11171__delegate.call(this, x, y, z, args);
};
G__11171.cljs$lang$maxFixedArity = 3;
G__11171.cljs$lang$applyTo = (function (arglist__11173){
var x = cljs.core.first(arglist__11173);
var y = cljs.core.first(cljs.core.next(arglist__11173));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11173)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11173)));
return G__11171__delegate.call(this, x, y, z, args);
});
return G__11171;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11155.call(this);
case  1 :
return ep2__11156.call(this,x);
case  2 :
return ep2__11157.call(this,x,y);
case  3 :
return ep2__11158.call(this,x,y,z);
default:
return ep2__11159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11159.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11129 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11181 = (function (){
return true;
});
var ep3__11182 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10964 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10964))
{var and__3546__auto____10966 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10966))
{return p3.call(null,x);
} else
{return and__3546__auto____10966;
}
} else
{return and__3546__auto____10964;
}
})());
});
var ep3__11183 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10967 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10967))
{var and__3546__auto____10969 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10969))
{var and__3546__auto____10970 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10970))
{var and__3546__auto____10971 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10971))
{var and__3546__auto____10976 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10976))
{return p3.call(null,y);
} else
{return and__3546__auto____10976;
}
} else
{return and__3546__auto____10971;
}
} else
{return and__3546__auto____10970;
}
} else
{return and__3546__auto____10969;
}
} else
{return and__3546__auto____10967;
}
})());
});
var ep3__11184 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10979 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10979))
{var and__3546__auto____10980 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10980))
{var and__3546__auto____10982 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10982))
{var and__3546__auto____10983 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10983))
{var and__3546__auto____10984 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10984))
{var and__3546__auto____10985 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10985))
{var and__3546__auto____10987 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10987))
{var and__3546__auto____10988 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10988))
{return p3.call(null,z);
} else
{return and__3546__auto____10988;
}
} else
{return and__3546__auto____10987;
}
} else
{return and__3546__auto____10985;
}
} else
{return and__3546__auto____10984;
}
} else
{return and__3546__auto____10983;
}
} else
{return and__3546__auto____10982;
}
} else
{return and__3546__auto____10980;
}
} else
{return and__3546__auto____10979;
}
})());
});
var ep3__11185 = (function() { 
var G__11197__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10989 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10989))
{return cljs.core.every_QMARK_.call(null,(function (p1__10869_SHARP_){
var and__3546__auto____11019 = p1.call(null,p1__10869_SHARP_);

if(cljs.core.truth_(and__3546__auto____11019))
{var and__3546__auto____11020 = p2.call(null,p1__10869_SHARP_);

if(cljs.core.truth_(and__3546__auto____11020))
{return p3.call(null,p1__10869_SHARP_);
} else
{return and__3546__auto____11020;
}
} else
{return and__3546__auto____11019;
}
}),args);
} else
{return and__3546__auto____10989;
}
})());
};
var G__11197 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11197__delegate.call(this, x, y, z, args);
};
G__11197.cljs$lang$maxFixedArity = 3;
G__11197.cljs$lang$applyTo = (function (arglist__11201){
var x = cljs.core.first(arglist__11201);
var y = cljs.core.first(cljs.core.next(arglist__11201));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11201)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11201)));
return G__11197__delegate.call(this, x, y, z, args);
});
return G__11197;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11181.call(this);
case  1 :
return ep3__11182.call(this,x);
case  2 :
return ep3__11183.call(this,x,y);
case  3 :
return ep3__11184.call(this,x,y,z);
default:
return ep3__11185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11185.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11130 = (function() { 
var G__11202__delegate = function (p1,p2,p3,ps){
var ps__11022 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11203 = (function (){
return true;
});
var epn__11204 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10871_SHARP_){
return p1__10871_SHARP_.call(null,x);
}),ps__11022);
});
var epn__11205 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10872_SHARP_){
var and__3546__auto____11031 = p1__10872_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11031))
{return p1__10872_SHARP_.call(null,y);
} else
{return and__3546__auto____11031;
}
}),ps__11022);
});
var epn__11206 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10874_SHARP_){
var and__3546__auto____11036 = p1__10874_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11036))
{var and__3546__auto____11039 = p1__10874_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11039))
{return p1__10874_SHARP_.call(null,z);
} else
{return and__3546__auto____11039;
}
} else
{return and__3546__auto____11036;
}
}),ps__11022);
});
var epn__11207 = (function() { 
var G__11213__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11045 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11045))
{return cljs.core.every_QMARK_.call(null,(function (p1__10875_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10875_SHARP_,args);
}),ps__11022);
} else
{return and__3546__auto____11045;
}
})());
};
var G__11213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11213__delegate.call(this, x, y, z, args);
};
G__11213.cljs$lang$maxFixedArity = 3;
G__11213.cljs$lang$applyTo = (function (arglist__11216){
var x = cljs.core.first(arglist__11216);
var y = cljs.core.first(cljs.core.next(arglist__11216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11216)));
return G__11213__delegate.call(this, x, y, z, args);
});
return G__11213;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11203.call(this);
case  1 :
return epn__11204.call(this,x);
case  2 :
return epn__11205.call(this,x,y);
case  3 :
return epn__11206.call(this,x,y,z);
default:
return epn__11207.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11207.cljs$lang$applyTo;
return epn;
})()
};
var G__11202 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11202__delegate.call(this, p1, p2, p3, ps);
};
G__11202.cljs$lang$maxFixedArity = 3;
G__11202.cljs$lang$applyTo = (function (arglist__11218){
var p1 = cljs.core.first(arglist__11218);
var p2 = cljs.core.first(cljs.core.next(arglist__11218));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11218)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11218)));
return G__11202__delegate.call(this, p1, p2, p3, ps);
});
return G__11202;
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
var some_fn__11392 = (function (p){
return (function() {
var sp1 = null;
var sp1__11398 = (function (){
return null;
});
var sp1__11399 = (function (x){
return p.call(null,x);
});
var sp1__11400 = (function (x,y){
var or__3548__auto____11223 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11223))
{return or__3548__auto____11223;
} else
{return p.call(null,y);
}
});
var sp1__11401 = (function (x,y,z){
var or__3548__auto____11224 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11224))
{return or__3548__auto____11224;
} else
{var or__3548__auto____11225 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11225))
{return or__3548__auto____11225;
} else
{return p.call(null,z);
}
}
});
var sp1__11402 = (function() { 
var G__11409__delegate = function (x,y,z,args){
var or__3548__auto____11226 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11226))
{return or__3548__auto____11226;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11409 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11409__delegate.call(this, x, y, z, args);
};
G__11409.cljs$lang$maxFixedArity = 3;
G__11409.cljs$lang$applyTo = (function (arglist__11410){
var x = cljs.core.first(arglist__11410);
var y = cljs.core.first(cljs.core.next(arglist__11410));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11410)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11410)));
return G__11409__delegate.call(this, x, y, z, args);
});
return G__11409;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11398.call(this);
case  1 :
return sp1__11399.call(this,x);
case  2 :
return sp1__11400.call(this,x,y);
case  3 :
return sp1__11401.call(this,x,y,z);
default:
return sp1__11402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11402.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11393 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11412 = (function (){
return null;
});
var sp2__11413 = (function (x){
var or__3548__auto____11227 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11227))
{return or__3548__auto____11227;
} else
{return p2.call(null,x);
}
});
var sp2__11414 = (function (x,y){
var or__3548__auto____11229 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11229))
{return or__3548__auto____11229;
} else
{var or__3548__auto____11232 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11232))
{return or__3548__auto____11232;
} else
{var or__3548__auto____11235 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11235))
{return or__3548__auto____11235;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11415 = (function (x,y,z){
var or__3548__auto____11237 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11237))
{return or__3548__auto____11237;
} else
{var or__3548__auto____11238 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11238))
{return or__3548__auto____11238;
} else
{var or__3548__auto____11239 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11239))
{return or__3548__auto____11239;
} else
{var or__3548__auto____11240 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11240))
{return or__3548__auto____11240;
} else
{var or__3548__auto____11242 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11242))
{return or__3548__auto____11242;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11416 = (function() { 
var G__11429__delegate = function (x,y,z,args){
var or__3548__auto____11244 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11244))
{return or__3548__auto____11244;
} else
{return cljs.core.some.call(null,(function (p1__10886_SHARP_){
var or__3548__auto____11246 = p1.call(null,p1__10886_SHARP_);

if(cljs.core.truth_(or__3548__auto____11246))
{return or__3548__auto____11246;
} else
{return p2.call(null,p1__10886_SHARP_);
}
}),args);
}
};
var G__11429 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11429__delegate.call(this, x, y, z, args);
};
G__11429.cljs$lang$maxFixedArity = 3;
G__11429.cljs$lang$applyTo = (function (arglist__11440){
var x = cljs.core.first(arglist__11440);
var y = cljs.core.first(cljs.core.next(arglist__11440));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11440)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11440)));
return G__11429__delegate.call(this, x, y, z, args);
});
return G__11429;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11412.call(this);
case  1 :
return sp2__11413.call(this,x);
case  2 :
return sp2__11414.call(this,x,y);
case  3 :
return sp2__11415.call(this,x,y,z);
default:
return sp2__11416.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11416.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11394 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11453 = (function (){
return null;
});
var sp3__11454 = (function (x){
var or__3548__auto____11248 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11248))
{return or__3548__auto____11248;
} else
{var or__3548__auto____11249 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11249))
{return or__3548__auto____11249;
} else
{return p3.call(null,x);
}
}
});
var sp3__11455 = (function (x,y){
var or__3548__auto____11251 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11251))
{return or__3548__auto____11251;
} else
{var or__3548__auto____11253 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11253))
{return or__3548__auto____11253;
} else
{var or__3548__auto____11255 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11255))
{return or__3548__auto____11255;
} else
{var or__3548__auto____11257 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11257))
{return or__3548__auto____11257;
} else
{var or__3548__auto____11258 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11258))
{return or__3548__auto____11258;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11456 = (function (x,y,z){
var or__3548__auto____11260 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11260))
{return or__3548__auto____11260;
} else
{var or__3548__auto____11262 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11262))
{return or__3548__auto____11262;
} else
{var or__3548__auto____11264 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11264))
{return or__3548__auto____11264;
} else
{var or__3548__auto____11266 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11266))
{return or__3548__auto____11266;
} else
{var or__3548__auto____11268 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11268))
{return or__3548__auto____11268;
} else
{var or__3548__auto____11269 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11269))
{return or__3548__auto____11269;
} else
{var or__3548__auto____11270 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11270))
{return or__3548__auto____11270;
} else
{var or__3548__auto____11272 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11272))
{return or__3548__auto____11272;
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
var sp3__11457 = (function() { 
var G__11473__delegate = function (x,y,z,args){
var or__3548__auto____11274 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11274))
{return or__3548__auto____11274;
} else
{return cljs.core.some.call(null,(function (p1__10889_SHARP_){
var or__3548__auto____11275 = p1.call(null,p1__10889_SHARP_);

if(cljs.core.truth_(or__3548__auto____11275))
{return or__3548__auto____11275;
} else
{var or__3548__auto____11277 = p2.call(null,p1__10889_SHARP_);

if(cljs.core.truth_(or__3548__auto____11277))
{return or__3548__auto____11277;
} else
{return p3.call(null,p1__10889_SHARP_);
}
}
}),args);
}
};
var G__11473 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11473__delegate.call(this, x, y, z, args);
};
G__11473.cljs$lang$maxFixedArity = 3;
G__11473.cljs$lang$applyTo = (function (arglist__11477){
var x = cljs.core.first(arglist__11477);
var y = cljs.core.first(cljs.core.next(arglist__11477));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11477)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11477)));
return G__11473__delegate.call(this, x, y, z, args);
});
return G__11473;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11453.call(this);
case  1 :
return sp3__11454.call(this,x);
case  2 :
return sp3__11455.call(this,x,y);
case  3 :
return sp3__11456.call(this,x,y,z);
default:
return sp3__11457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11457.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11395 = (function() { 
var G__11480__delegate = function (p1,p2,p3,ps){
var ps__11279 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11482 = (function (){
return null;
});
var spn__11485 = (function (x){
return cljs.core.some.call(null,(function (p1__10890_SHARP_){
return p1__10890_SHARP_.call(null,x);
}),ps__11279);
});
var spn__11486 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10891_SHARP_){
var or__3548__auto____11285 = p1__10891_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{return p1__10891_SHARP_.call(null,y);
}
}),ps__11279);
});
var spn__11487 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10895_SHARP_){
var or__3548__auto____11374 = p1__10895_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11374))
{return or__3548__auto____11374;
} else
{var or__3548__auto____11377 = p1__10895_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11377))
{return or__3548__auto____11377;
} else
{return p1__10895_SHARP_.call(null,z);
}
}
}),ps__11279);
});
var spn__11488 = (function() { 
var G__11503__delegate = function (x,y,z,args){
var or__3548__auto____11380 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11380))
{return or__3548__auto____11380;
} else
{return cljs.core.some.call(null,(function (p1__10898_SHARP_){
return cljs.core.some.call(null,p1__10898_SHARP_,args);
}),ps__11279);
}
};
var G__11503 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11503__delegate.call(this, x, y, z, args);
};
G__11503.cljs$lang$maxFixedArity = 3;
G__11503.cljs$lang$applyTo = (function (arglist__11506){
var x = cljs.core.first(arglist__11506);
var y = cljs.core.first(cljs.core.next(arglist__11506));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11506)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11506)));
return G__11503__delegate.call(this, x, y, z, args);
});
return G__11503;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11482.call(this);
case  1 :
return spn__11485.call(this,x);
case  2 :
return spn__11486.call(this,x,y);
case  3 :
return spn__11487.call(this,x,y,z);
default:
return spn__11488.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11488.cljs$lang$applyTo;
return spn;
})()
};
var G__11480 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11480__delegate.call(this, p1, p2, p3, ps);
};
G__11480.cljs$lang$maxFixedArity = 3;
G__11480.cljs$lang$applyTo = (function (arglist__11513){
var p1 = cljs.core.first(arglist__11513);
var p2 = cljs.core.first(cljs.core.next(arglist__11513));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11513)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11513)));
return G__11480__delegate.call(this, p1, p2, p3, ps);
});
return G__11480;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11392.call(this,p1);
case  2 :
return some_fn__11393.call(this,p1,p2);
case  3 :
return some_fn__11394.call(this,p1,p2,p3);
default:
return some_fn__11395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11395.cljs$lang$applyTo;
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
var map__11714 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11525 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11525))
{var s__11527 = temp__3698__auto____11525;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11527)),map.call(null,f,cljs.core.rest.call(null,s__11527)));
} else
{return null;
}
})));
});
var map__11715 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11531 = cljs.core.seq.call(null,c1);
var s2__11532 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11533 = s1__11531;

if(cljs.core.truth_(and__3546__auto____11533))
{return s2__11532;
} else
{return and__3546__auto____11533;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11531),cljs.core.first.call(null,s2__11532)),map.call(null,f,cljs.core.rest.call(null,s1__11531),cljs.core.rest.call(null,s2__11532)));
} else
{return null;
}
})));
});
var map__11716 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11556 = cljs.core.seq.call(null,c1);
var s2__11559 = cljs.core.seq.call(null,c2);
var s3__11560 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11561 = s1__11556;

if(cljs.core.truth_(and__3546__auto____11561))
{var and__3546__auto____11563 = s2__11559;

if(cljs.core.truth_(and__3546__auto____11563))
{return s3__11560;
} else
{return and__3546__auto____11563;
}
} else
{return and__3546__auto____11561;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11556),cljs.core.first.call(null,s2__11559),cljs.core.first.call(null,s3__11560)),map.call(null,f,cljs.core.rest.call(null,s1__11556),cljs.core.rest.call(null,s2__11559),cljs.core.rest.call(null,s3__11560)));
} else
{return null;
}
})));
});
var map__11717 = (function() { 
var G__11735__delegate = function (f,c1,c2,c3,colls){
var step__11579 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11570 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11570)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11570),step.call(null,map.call(null,cljs.core.rest,ss__11570)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11222_SHARP_){
return cljs.core.apply.call(null,f,p1__11222_SHARP_);
}),step__11579.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11735 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11735__delegate.call(this, f, c1, c2, c3, colls);
};
G__11735.cljs$lang$maxFixedArity = 4;
G__11735.cljs$lang$applyTo = (function (arglist__11737){
var f = cljs.core.first(arglist__11737);
var c1 = cljs.core.first(cljs.core.next(arglist__11737));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11737)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11737))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11737))));
return G__11735__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11735;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11714.call(this,f,c1);
case  3 :
return map__11715.call(this,f,c1,c2);
case  4 :
return map__11716.call(this,f,c1,c2,c3);
default:
return map__11717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11717.cljs$lang$applyTo;
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
{var temp__3698__auto____11746 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11746))
{var s__11747 = temp__3698__auto____11746;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11747),take.call(null,(n - 1),cljs.core.rest.call(null,s__11747)));
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
var step__11754 = (function (n,coll){
while(true){
var s__11751 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11752 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11752))
{return s__11751;
} else
{return and__3546__auto____11752;
}
})()))
{{
var G__11761 = (n - 1);
var G__11762 = cljs.core.rest.call(null,s__11751);
n = G__11761;
coll = G__11762;
continue;
}
} else
{return s__11751;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11754.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11769 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11770 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11769.call(this,n);
case  2 :
return drop_last__11770.call(this,n,s);
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
var s__11779 = cljs.core.seq.call(null,coll);
var lead__11781 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11781))
{{
var G__11784 = cljs.core.next.call(null,s__11779);
var G__11785 = cljs.core.next.call(null,lead__11781);
s__11779 = G__11784;
lead__11781 = G__11785;
continue;
}
} else
{return s__11779;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11793 = (function (pred,coll){
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
var G__11795 = pred;
var G__11796 = cljs.core.rest.call(null,s__11791);
pred = G__11795;
coll = G__11796;
continue;
}
} else
{return s__11791;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11793.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11809 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11809))
{var s__11810 = temp__3698__auto____11809;

return cljs.core.concat.call(null,s__11810,cycle.call(null,s__11810));
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
var repeatedly__11830 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11831 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11830.call(this,n);
case  2 :
return repeatedly__11831.call(this,n,f);
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
var interleave__11847 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11841 = cljs.core.seq.call(null,c1);
var s2__11842 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11843 = s1__11841;

if(cljs.core.truth_(and__3546__auto____11843))
{return s2__11842;
} else
{return and__3546__auto____11843;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11841),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11842),interleave.call(null,cljs.core.rest.call(null,s1__11841),cljs.core.rest.call(null,s2__11842))));
} else
{return null;
}
})));
});
var interleave__11850 = (function() { 
var G__11853__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11845 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11845)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11845),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11845)));
} else
{return null;
}
})));
};
var G__11853 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11853__delegate.call(this, c1, c2, colls);
};
G__11853.cljs$lang$maxFixedArity = 2;
G__11853.cljs$lang$applyTo = (function (arglist__11854){
var c1 = cljs.core.first(arglist__11854);
var c2 = cljs.core.first(cljs.core.next(arglist__11854));
var colls = cljs.core.rest(cljs.core.next(arglist__11854));
return G__11853__delegate.call(this, c1, c2, colls);
});
return G__11853;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11847.call(this,c1,c2);
default:
return interleave__11850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11850.cljs$lang$applyTo;
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
var cat__11863 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11860 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11860))
{var coll__11861 = temp__3695__auto____11860;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11861),cat.call(null,cljs.core.rest.call(null,coll__11861),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11863.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11916 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11917 = (function() { 
var G__11919__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11919 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11919__delegate.call(this, f, coll, colls);
};
G__11919.cljs$lang$maxFixedArity = 2;
G__11919.cljs$lang$applyTo = (function (arglist__11921){
var f = cljs.core.first(arglist__11921);
var coll = cljs.core.first(cljs.core.next(arglist__11921));
var colls = cljs.core.rest(cljs.core.next(arglist__11921));
return G__11919__delegate.call(this, f, coll, colls);
});
return G__11919;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11916.call(this,f,coll);
default:
return mapcat__11917.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11917.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11973 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11973))
{var s__11974 = temp__3698__auto____11973;

var f__11975 = cljs.core.first.call(null,s__11974);
var r__11979 = cljs.core.rest.call(null,s__11974);

if(cljs.core.truth_(pred.call(null,f__11975)))
{return cljs.core.cons.call(null,f__11975,filter.call(null,pred,r__11979));
} else
{return filter.call(null,pred,r__11979);
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
var walk__11985 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11985.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11983_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11983_SHARP_));
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
var partition__12004 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12005 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11995 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11995))
{var s__11996 = temp__3698__auto____11995;

var p__11997 = cljs.core.take.call(null,n,s__11996);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11997))))
{return cljs.core.cons.call(null,p__11997,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11996)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12006 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11998 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11998))
{var s__11999 = temp__3698__auto____11998;

var p__12000 = cljs.core.take.call(null,n,s__11999);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12000))))
{return cljs.core.cons.call(null,p__12000,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11999)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12000,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12004.call(this,n,step);
case  3 :
return partition__12005.call(this,n,step,pad);
case  4 :
return partition__12006.call(this,n,step,pad,coll);
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
var get_in__12057 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12058 = (function (m,ks,not_found){
var sentinel__12017 = cljs.core.lookup_sentinel;
var m__12018 = m;
var ks__12019 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12019))
{var m__12020 = cljs.core.get.call(null,m__12018,cljs.core.first.call(null,ks__12019),sentinel__12017);

if(cljs.core.truth_((sentinel__12017 === m__12020)))
{return not_found;
} else
{{
var G__12063 = sentinel__12017;
var G__12065 = m__12020;
var G__12066 = cljs.core.next.call(null,ks__12019);
sentinel__12017 = G__12063;
m__12018 = G__12065;
ks__12019 = G__12066;
continue;
}
}
} else
{return m__12018;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12057.call(this,m,ks);
case  3 :
return get_in__12058.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12068,v){
var vec__12069__12070 = p__12068;
var k__12071 = cljs.core.nth.call(null,vec__12069__12070,0,null);
var ks__12072 = cljs.core.nthnext.call(null,vec__12069__12070,1);

if(cljs.core.truth_(ks__12072))
{return cljs.core.assoc.call(null,m,k__12071,assoc_in.call(null,cljs.core.get.call(null,m,k__12071),ks__12072,v));
} else
{return cljs.core.assoc.call(null,m,k__12071,v);
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
var update_in__delegate = function (m,p__12080,f,args){
var vec__12081__12082 = p__12080;
var k__12083 = cljs.core.nth.call(null,vec__12081__12082,0,null);
var ks__12084 = cljs.core.nthnext.call(null,vec__12081__12082,1);

if(cljs.core.truth_(ks__12084))
{return cljs.core.assoc.call(null,m,k__12083,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12083),ks__12084,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12083,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12083),args));
}
};
var update_in = function (m,p__12080,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12080, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12092){
var m = cljs.core.first(arglist__12092);
var p__12080 = cljs.core.first(cljs.core.next(arglist__12092));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12092)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12092)));
return update_in__delegate.call(this, m, p__12080, f, args);
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
var this__12097 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12220 = null;
var G__12220__12222 = (function (coll,k){
var this__12101 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12220__12223 = (function (coll,k,not_found){
var this__12102 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12220 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12220__12222.call(this,coll,k);
case  3 :
return G__12220__12223.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12220;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12105 = this;
var new_array__12107 = cljs.core.aclone.call(null,this__12105.array);

(new_array__12107[k] = v);
return (new cljs.core.Vector(this__12105.meta,new_array__12107));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12229 = null;
var G__12229__12230 = (function (coll,k){
var this__12108 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12229__12232 = (function (coll,k,not_found){
var this__12164 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12229 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12229__12230.call(this,coll,k);
case  3 :
return G__12229__12232.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12229;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12165 = this;
var new_array__12166 = cljs.core.aclone.call(null,this__12165.array);

new_array__12166.push(o);
return (new cljs.core.Vector(this__12165.meta,new_array__12166));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12238 = null;
var G__12238__12239 = (function (v,f){
var this__12167 = this;
return cljs.core.ci_reduce.call(null,this__12167.array,f);
});
var G__12238__12240 = (function (v,f,start){
var this__12168 = this;
return cljs.core.ci_reduce.call(null,this__12168.array,f,start);
});
G__12238 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12238__12239.call(this,v,f);
case  3 :
return G__12238__12240.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12238;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12169 = this;
if(cljs.core.truth_((this__12169.array.length > 0)))
{var vector_seq__12173 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12169.array.length)))
{return cljs.core.cons.call(null,(this__12169.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12173.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12175 = this;
return this__12175.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12177 = this;
var count__12180 = this__12177.array.length;

if(cljs.core.truth_((count__12180 > 0)))
{return (this__12177.array[(count__12180 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12185 = this;
if(cljs.core.truth_((this__12185.array.length > 0)))
{var new_array__12187 = cljs.core.aclone.call(null,this__12185.array);

new_array__12187.pop();
return (new cljs.core.Vector(this__12185.meta,new_array__12187));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12193 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12194 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12196 = this;
return (new cljs.core.Vector(meta,this__12196.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12199 = this;
return this__12199.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12260 = null;
var G__12260__12261 = (function (coll,n){
var this__12203 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12205 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12205))
{return (n < this__12203.array.length);
} else
{return and__3546__auto____12205;
}
})()))
{return (this__12203.array[n]);
} else
{return null;
}
});
var G__12260__12262 = (function (coll,n,not_found){
var this__12207 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12209 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12209))
{return (n < this__12207.array.length);
} else
{return and__3546__auto____12209;
}
})()))
{return (this__12207.array[n]);
} else
{return not_found;
}
});
G__12260 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12260__12261.call(this,coll,n);
case  3 :
return G__12260__12262.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12260;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12212 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12212.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12283){
var args = cljs.core.seq( arglist__12283 );;
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
var this__12299 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12397 = null;
var G__12397__12398 = (function (coll,k){
var this__12303 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12397__12399 = (function (coll,k,not_found){
var this__12304 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12397 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12397__12398.call(this,coll,k);
case  3 :
return G__12397__12399.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12397;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12305 = this;
var v_pos__12311 = (this__12305.start + key);

return (new cljs.core.Subvec(this__12305.meta,cljs.core._assoc.call(null,this__12305.v,v_pos__12311,val),this__12305.start,((this__12305.end > (v_pos__12311 + 1)) ? this__12305.end : (v_pos__12311 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12408 = null;
var G__12408__12409 = (function (coll,k){
var this__12314 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12408__12410 = (function (coll,k,not_found){
var this__12315 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12408 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12408__12409.call(this,coll,k);
case  3 :
return G__12408__12410.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12408;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12320 = this;
return (new cljs.core.Subvec(this__12320.meta,cljs.core._assoc_n.call(null,this__12320.v,this__12320.end,o),this__12320.start,(this__12320.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12417 = null;
var G__12417__12420 = (function (coll,f){
var this__12321 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12417__12421 = (function (coll,f,start){
var this__12322 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12417 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12417__12420.call(this,coll,f);
case  3 :
return G__12417__12421.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12417;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12323 = this;
var subvec_seq__12330 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12323.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12323.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12330.call(null,this__12323.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12333 = this;
return (this__12333.end - this__12333.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12338 = this;
return cljs.core._nth.call(null,this__12338.v,(this__12338.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12366 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12366.start,this__12366.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12366.meta,this__12366.v,this__12366.start,(this__12366.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12370 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12373 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12376 = this;
return (new cljs.core.Subvec(meta,this__12376.v,this__12376.start,this__12376.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12380 = this;
return this__12380.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12449 = null;
var G__12449__12450 = (function (coll,n){
var this__12383 = this;
return cljs.core._nth.call(null,this__12383.v,(this__12383.start + n));
});
var G__12449__12451 = (function (coll,n,not_found){
var this__12387 = this;
return cljs.core._nth.call(null,this__12387.v,(this__12387.start + n),not_found);
});
G__12449 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12449__12450.call(this,coll,n);
case  3 :
return G__12449__12451.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12449;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12391 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12391.meta);
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
var subvec__12476 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12477 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12476.call(this,v,start);
case  3 :
return subvec__12477.call(this,v,start,end);
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
var this__12492 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12494 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12498 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12499 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12499.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12500 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12506 = this;
return cljs.core._first.call(null,this__12506.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12508 = this;
var temp__3695__auto____12511 = cljs.core.next.call(null,this__12508.front);

if(cljs.core.truth_(temp__3695__auto____12511))
{var f1__12512 = temp__3695__auto____12511;

return (new cljs.core.PersistentQueueSeq(this__12508.meta,f1__12512,this__12508.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12508.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12508.meta,this__12508.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12513 = this;
return this__12513.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12518 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12518.front,this__12518.rear));
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
var this__12526 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12528 = this;
if(cljs.core.truth_(this__12528.front))
{return (new cljs.core.PersistentQueue(this__12528.meta,(this__12528.count + 1),this__12528.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12530 = this__12528.rear;

if(cljs.core.truth_(or__3548__auto____12530))
{return or__3548__auto____12530;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12528.meta,(this__12528.count + 1),cljs.core.conj.call(null,this__12528.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12533 = this;
var rear__12534 = cljs.core.seq.call(null,this__12533.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12535 = this__12533.front;

if(cljs.core.truth_(or__3548__auto____12535))
{return or__3548__auto____12535;
} else
{return rear__12534;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12533.front,cljs.core.seq.call(null,rear__12534)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12538 = this;
return this__12538.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12539 = this;
return cljs.core._first.call(null,this__12539.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12541 = this;
if(cljs.core.truth_(this__12541.front))
{var temp__3695__auto____12543 = cljs.core.next.call(null,this__12541.front);

if(cljs.core.truth_(temp__3695__auto____12543))
{var f1__12544 = temp__3695__auto____12543;

return (new cljs.core.PersistentQueue(this__12541.meta,(this__12541.count - 1),f1__12544,this__12541.rear));
} else
{return (new cljs.core.PersistentQueue(this__12541.meta,(this__12541.count - 1),cljs.core.seq.call(null,this__12541.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12547 = this;
return cljs.core.first.call(null,this__12547.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12548 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12550 = this;
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
var this__12559 = this;
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
var this__12589 = this;
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
var len__12606 = array.length;

var i__12607 = 0;

while(true){
if(cljs.core.truth_((i__12607 < len__12606)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12607]))))
{return i__12607;
} else
{{
var G__12612 = (i__12607 + incr);
i__12607 = G__12612;
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
var obj_map_contains_key_QMARK___12617 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12618 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12616 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12616))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12616;
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
return obj_map_contains_key_QMARK___12617.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12618.call(this,k,strobj,true_val,false_val);
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
var this__12636 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12692 = null;
var G__12692__12694 = (function (coll,k){
var this__12640 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12692__12695 = (function (coll,k,not_found){
var this__12642 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12642.strobj,(this__12642.strobj[k]),not_found);
});
G__12692 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12692__12694.call(this,coll,k);
case  3 :
return G__12692__12695.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12692;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12645 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12648 = goog.object.clone.call(null,this__12645.strobj);
var overwrite_QMARK___12649 = new_strobj__12648.hasOwnProperty(k);

(new_strobj__12648[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12649))
{return (new cljs.core.ObjMap(this__12645.meta,this__12645.keys,new_strobj__12648));
} else
{var new_keys__12654 = cljs.core.aclone.call(null,this__12645.keys);

new_keys__12654.push(k);
return (new cljs.core.ObjMap(this__12645.meta,new_keys__12654,new_strobj__12648));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12645.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12657 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12657.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12703 = null;
var G__12703__12704 = (function (coll,k){
var this__12658 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12703__12705 = (function (coll,k,not_found){
var this__12660 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12703 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12703__12704.call(this,coll,k);
case  3 :
return G__12703__12705.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12703;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12664 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12667 = this;
if(cljs.core.truth_((this__12667.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12620_SHARP_){
return cljs.core.vector.call(null,p1__12620_SHARP_,(this__12667.strobj[p1__12620_SHARP_]));
}),this__12667.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12672 = this;
return this__12672.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12675 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12677 = this;
return (new cljs.core.ObjMap(meta,this__12677.keys,this__12677.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12679 = this;
return this__12679.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12681 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12681.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12684 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12686 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12686))
{return this__12684.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12686;
}
})()))
{var new_keys__12688 = cljs.core.aclone.call(null,this__12684.keys);
var new_strobj__12689 = goog.object.clone.call(null,this__12684.strobj);

new_keys__12688.splice(cljs.core.scan_array.call(null,1,k,new_keys__12688),1);
cljs.core.js_delete.call(null,new_strobj__12689,k);
return (new cljs.core.ObjMap(this__12684.meta,new_keys__12688,new_strobj__12689));
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
var this__12731 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12846 = null;
var G__12846__12847 = (function (coll,k){
var this__12732 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12846__12848 = (function (coll,k,not_found){
var this__12734 = this;
var bucket__12736 = (this__12734.hashobj[cljs.core.hash.call(null,k)]);
var i__12737 = (cljs.core.truth_(bucket__12736)?cljs.core.scan_array.call(null,2,k,bucket__12736):null);

if(cljs.core.truth_(i__12737))
{return (bucket__12736[(i__12737 + 1)]);
} else
{return not_found;
}
});
G__12846 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12846__12847.call(this,coll,k);
case  3 :
return G__12846__12848.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12846;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12739 = this;
var h__12741 = cljs.core.hash.call(null,k);
var bucket__12742 = (this__12739.hashobj[h__12741]);

if(cljs.core.truth_(bucket__12742))
{var new_bucket__12744 = cljs.core.aclone.call(null,bucket__12742);
var new_hashobj__12745 = goog.object.clone.call(null,this__12739.hashobj);

(new_hashobj__12745[h__12741] = new_bucket__12744);
var temp__3695__auto____12746 = cljs.core.scan_array.call(null,2,k,new_bucket__12744);

if(cljs.core.truth_(temp__3695__auto____12746))
{var i__12747 = temp__3695__auto____12746;

(new_bucket__12744[(i__12747 + 1)] = v);
return (new cljs.core.HashMap(this__12739.meta,this__12739.count,new_hashobj__12745));
} else
{new_bucket__12744.push(k,v);
return (new cljs.core.HashMap(this__12739.meta,(this__12739.count + 1),new_hashobj__12745));
}
} else
{var new_hashobj__12748 = goog.object.clone.call(null,this__12739.hashobj);

(new_hashobj__12748[h__12741] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12739.meta,(this__12739.count + 1),new_hashobj__12748));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12749 = this;
var bucket__12752 = (this__12749.hashobj[cljs.core.hash.call(null,k)]);
var i__12753 = (cljs.core.truth_(bucket__12752)?cljs.core.scan_array.call(null,2,k,bucket__12752):null);

if(cljs.core.truth_(i__12753))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12868 = null;
var G__12868__12869 = (function (coll,k){
var this__12802 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12868__12870 = (function (coll,k,not_found){
var this__12804 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12868 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12868__12869.call(this,coll,k);
case  3 :
return G__12868__12870.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12868;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12806 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12810 = this;
if(cljs.core.truth_((this__12810.count > 0)))
{var hashes__12819 = cljs.core.js_keys.call(null,this__12810.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12720_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12810.hashobj[p1__12720_SHARP_])));
}),hashes__12819);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12823 = this;
return this__12823.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12825 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12827 = this;
return (new cljs.core.HashMap(meta,this__12827.count,this__12827.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12829 = this;
return this__12829.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12832 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12832.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12833 = this;
var h__12835 = cljs.core.hash.call(null,k);
var bucket__12836 = (this__12833.hashobj[h__12835]);
var i__12837 = (cljs.core.truth_(bucket__12836)?cljs.core.scan_array.call(null,2,k,bucket__12836):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12837)))
{return coll;
} else
{var new_hashobj__12838 = goog.object.clone.call(null,this__12833.hashobj);

if(cljs.core.truth_((3 > bucket__12836.length)))
{cljs.core.js_delete.call(null,new_hashobj__12838,h__12835);
} else
{var new_bucket__12840 = cljs.core.aclone.call(null,bucket__12836);

new_bucket__12840.splice(i__12837,2);
(new_hashobj__12838[h__12835] = new_bucket__12840);
}
return (new cljs.core.HashMap(this__12833.meta,(this__12833.count - 1),new_hashobj__12838));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12911 = ks.length;

var i__12912 = 0;
var out__12913 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12912 < len__12911)))
{{
var G__12920 = (i__12912 + 1);
var G__12922 = cljs.core.assoc.call(null,out__12913,(ks[i__12912]),(vs[i__12912]));
i__12912 = G__12920;
out__12913 = G__12922;
continue;
}
} else
{return out__12913;
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
var in$__12930 = cljs.core.seq.call(null,keyvals);
var out__12931 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12930))
{{
var G__12944 = cljs.core.nnext.call(null,in$__12930);
var G__12945 = cljs.core.assoc.call(null,out__12931,cljs.core.first.call(null,in$__12930),cljs.core.second.call(null,in$__12930));
in$__12930 = G__12944;
out__12931 = G__12945;
continue;
}
} else
{return out__12931;
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
hash_map.cljs$lang$applyTo = (function (arglist__12949){
var keyvals = cljs.core.seq( arglist__12949 );;
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
{return cljs.core.reduce.call(null,(function (p1__12952_SHARP_,p2__12953_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12959 = p1__12952_SHARP_;

if(cljs.core.truth_(or__3548__auto____12959))
{return or__3548__auto____12959;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12953_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13006){
var maps = cljs.core.seq( arglist__13006 );;
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
{var merge_entry__13015 = (function (m,e){
var k__13010 = cljs.core.first.call(null,e);
var v__13012 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13010)))
{return cljs.core.assoc.call(null,m,k__13010,f.call(null,cljs.core.get.call(null,m,k__13010),v__13012));
} else
{return cljs.core.assoc.call(null,m,k__13010,v__13012);
}
});
var merge2__13022 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13015,(function (){var or__3548__auto____13018 = m1;

if(cljs.core.truth_(or__3548__auto____13018))
{return or__3548__auto____13018;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13022,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13041){
var f = cljs.core.first(arglist__13041);
var maps = cljs.core.rest(arglist__13041);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13051 = cljs.core.ObjMap.fromObject([],{});
var keys__13053 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13053))
{var key__13054 = cljs.core.first.call(null,keys__13053);
var entry__13055 = cljs.core.get.call(null,map,key__13054,"﷐'user/not-found");

{
var G__13063 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13055,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13051,key__13054,entry__13055):ret__13051);
var G__13064 = cljs.core.next.call(null,keys__13053);
ret__13051 = G__13063;
keys__13053 = G__13064;
continue;
}
} else
{return ret__13051;
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
var this__13080 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13108 = null;
var G__13108__13109 = (function (coll,v){
var this__13083 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13108__13110 = (function (coll,v,not_found){
var this__13085 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13085.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13108 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13108__13109.call(this,coll,v);
case  3 :
return G__13108__13110.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13108;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13112 = null;
var G__13112__13113 = (function (coll,k){
var this__13087 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13112__13114 = (function (coll,k,not_found){
var this__13088 = this;
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
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13090 = this;
return (new cljs.core.Set(this__13090.meta,cljs.core.assoc.call(null,this__13090.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13093 = this;
return cljs.core.keys.call(null,this__13093.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13099 = this;
return (new cljs.core.Set(this__13099.meta,cljs.core.dissoc.call(null,this__13099.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13100 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13102 = this;
var and__3546__auto____13103 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13103))
{var and__3546__auto____13104 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13104))
{return cljs.core.every_QMARK_.call(null,(function (p1__13046_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13046_SHARP_);
}),other);
} else
{return and__3546__auto____13104;
}
} else
{return and__3546__auto____13103;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13105 = this;
return (new cljs.core.Set(meta,this__13105.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13106 = this;
return this__13106.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13107 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13107.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13167 = cljs.core.seq.call(null,coll);
var out__13168 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13167))))
{{
var G__13170 = cljs.core.rest.call(null,in$__13167);
var G__13171 = cljs.core.conj.call(null,out__13168,cljs.core.first.call(null,in$__13167));
in$__13167 = G__13170;
out__13168 = G__13171;
continue;
}
} else
{return out__13168;
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
{var n__13223 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13224 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13224))
{var e__13226 = temp__3695__auto____13224;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13226));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13223,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13123_SHARP_){
var temp__3695__auto____13230 = cljs.core.find.call(null,smap,p1__13123_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13230))
{var e__13231 = temp__3695__auto____13230;

return cljs.core.second.call(null,e__13231);
} else
{return p1__13123_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13239 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13232,seen){
while(true){
var vec__13233__13234 = p__13232;
var f__13235 = cljs.core.nth.call(null,vec__13233__13234,0,null);
var xs__13236 = vec__13233__13234;

var temp__3698__auto____13237 = cljs.core.seq.call(null,xs__13236);

if(cljs.core.truth_(temp__3698__auto____13237))
{var s__13238 = temp__3698__auto____13237;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13235)))
{{
var G__13242 = cljs.core.rest.call(null,s__13238);
var G__13243 = seen;
p__13232 = G__13242;
seen = G__13243;
continue;
}
} else
{return cljs.core.cons.call(null,f__13235,step.call(null,cljs.core.rest.call(null,s__13238),cljs.core.conj.call(null,seen,f__13235)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13239.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13247 = cljs.core.Vector.fromArray([]);
var s__13248 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13248)))
{{
var G__13251 = cljs.core.conj.call(null,ret__13247,cljs.core.first.call(null,s__13248));
var G__13252 = cljs.core.next.call(null,s__13248);
ret__13247 = G__13251;
s__13248 = G__13252;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13247);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13256 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13256))
{return or__3548__auto____13256;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13257 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13257 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13257 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13261 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13261))
{return or__3548__auto____13261;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13262 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13262 > -1)))
{return cljs.core.subs.call(null,x,2,i__13262);
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
var map__13269 = cljs.core.ObjMap.fromObject([],{});
var ks__13271 = cljs.core.seq.call(null,keys);
var vs__13272 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13274 = ks__13271;

if(cljs.core.truth_(and__3546__auto____13274))
{return vs__13272;
} else
{return and__3546__auto____13274;
}
})()))
{{
var G__13293 = cljs.core.assoc.call(null,map__13269,cljs.core.first.call(null,ks__13271),cljs.core.first.call(null,vs__13272));
var G__13294 = cljs.core.next.call(null,ks__13271);
var G__13295 = cljs.core.next.call(null,vs__13272);
map__13269 = G__13293;
ks__13271 = G__13294;
vs__13272 = G__13295;
continue;
}
} else
{return map__13269;
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
var max_key__13311 = (function (k,x){
return x;
});
var max_key__13313 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13314 = (function() { 
var G__13317__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13266_SHARP_,p2__13267_SHARP_){
return max_key.call(null,k,p1__13266_SHARP_,p2__13267_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13317 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13317__delegate.call(this, k, x, y, more);
};
G__13317.cljs$lang$maxFixedArity = 3;
G__13317.cljs$lang$applyTo = (function (arglist__13320){
var k = cljs.core.first(arglist__13320);
var x = cljs.core.first(cljs.core.next(arglist__13320));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13320)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13320)));
return G__13317__delegate.call(this, k, x, y, more);
});
return G__13317;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13311.call(this,k,x);
case  3 :
return max_key__13313.call(this,k,x,y);
default:
return max_key__13314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13314.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13336 = (function (k,x){
return x;
});
var min_key__13337 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13338 = (function() { 
var G__13347__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13300_SHARP_,p2__13301_SHARP_){
return min_key.call(null,k,p1__13300_SHARP_,p2__13301_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13347 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13347__delegate.call(this, k, x, y, more);
};
G__13347.cljs$lang$maxFixedArity = 3;
G__13347.cljs$lang$applyTo = (function (arglist__13349){
var k = cljs.core.first(arglist__13349);
var x = cljs.core.first(cljs.core.next(arglist__13349));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13349)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13349)));
return G__13347__delegate.call(this, k, x, y, more);
});
return G__13347;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13336.call(this,k,x);
case  3 :
return min_key__13337.call(this,k,x,y);
default:
return min_key__13338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13338.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13374 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13375 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13359 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13359))
{var s__13364 = temp__3698__auto____13359;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13364),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13364)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13374.call(this,n,step);
case  3 :
return partition_all__13375.call(this,n,step,coll);
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
var temp__3698__auto____13384 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13384))
{var s__13385 = temp__3698__auto____13384;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13385))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13385),take_while.call(null,pred,cljs.core.rest.call(null,s__13385)));
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
var this__13412 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13414 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13466 = null;
var G__13466__13468 = (function (rng,f){
var this__13417 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13466__13469 = (function (rng,f,s){
var this__13422 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13466 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13466__13468.call(this,rng,f);
case  3 :
return G__13466__13469.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13466;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13424 = this;
var comp__13430 = (cljs.core.truth_((this__13424.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13430.call(null,this__13424.start,this__13424.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13435 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13435.end - this__13435.start) / this__13435.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13440 = this;
return this__13440.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13442 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13442.meta,(this__13442.start + this__13442.step),this__13442.end,this__13442.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13447 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13449 = this;
return (new cljs.core.Range(meta,this__13449.start,this__13449.end,this__13449.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13450 = this;
return this__13450.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13484 = null;
var G__13484__13485 = (function (rng,n){
var this__13451 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13451.start + (n * this__13451.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13454 = (this__13451.start > this__13451.end);

if(cljs.core.truth_(and__3546__auto____13454))
{return cljs.core._EQ_.call(null,this__13451.step,0);
} else
{return and__3546__auto____13454;
}
})()))
{return this__13451.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13484__13487 = (function (rng,n,not_found){
var this__13456 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13456.start + (n * this__13456.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13458 = (this__13456.start > this__13456.end);

if(cljs.core.truth_(and__3546__auto____13458))
{return cljs.core._EQ_.call(null,this__13456.step,0);
} else
{return and__3546__auto____13458;
}
})()))
{return this__13456.start;
} else
{return not_found;
}
}
});
G__13484 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13484__13485.call(this,rng,n);
case  3 :
return G__13484__13487.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13484;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13459 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13459.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13534 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13535 = (function (end){
return range.call(null,0,end,1);
});
var range__13537 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13538 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13534.call(this);
case  1 :
return range__13535.call(this,start);
case  2 :
return range__13537.call(this,start,end);
case  3 :
return range__13538.call(this,start,end,step);
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
var temp__3698__auto____13549 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13549))
{var s__13550 = temp__3698__auto____13549;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13550),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13550)));
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
var temp__3698__auto____13583 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13583))
{var s__13587 = temp__3698__auto____13583;

var fst__13593 = cljs.core.first.call(null,s__13587);
var fv__13594 = f.call(null,fst__13593);
var run__13596 = cljs.core.cons.call(null,fst__13593,cljs.core.take_while.call(null,(function (p1__13562_SHARP_){
return cljs.core._EQ_.call(null,fv__13594,f.call(null,p1__13562_SHARP_));
}),cljs.core.next.call(null,s__13587)));

return cljs.core.cons.call(null,run__13596,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13596),s__13587))));
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
var reductions__13638 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13631 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13631))
{var s__13632 = temp__3695__auto____13631;

return reductions.call(null,f,cljs.core.first.call(null,s__13632),cljs.core.rest.call(null,s__13632));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13639 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13636 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13636))
{var s__13637 = temp__3698__auto____13636;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13637)),cljs.core.rest.call(null,s__13637));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13638.call(this,f,init);
case  3 :
return reductions__13639.call(this,f,init,coll);
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
var juxt__13705 = (function (f){
return (function() {
var G__13711 = null;
var G__13711__13712 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13711__13713 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13711__13714 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13711__13715 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13711__13716 = (function() { 
var G__13722__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13722 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13722__delegate.call(this, x, y, z, args);
};
G__13722.cljs$lang$maxFixedArity = 3;
G__13722.cljs$lang$applyTo = (function (arglist__13724){
var x = cljs.core.first(arglist__13724);
var y = cljs.core.first(cljs.core.next(arglist__13724));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13724)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13724)));
return G__13722__delegate.call(this, x, y, z, args);
});
return G__13722;
})()
;
G__13711 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13711__13712.call(this);
case  1 :
return G__13711__13713.call(this,x);
case  2 :
return G__13711__13714.call(this,x,y);
case  3 :
return G__13711__13715.call(this,x,y,z);
default:
return G__13711__13716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13711.cljs$lang$maxFixedArity = 3;
G__13711.cljs$lang$applyTo = G__13711__13716.cljs$lang$applyTo;
return G__13711;
})()
});
var juxt__13706 = (function (f,g){
return (function() {
var G__13726 = null;
var G__13726__13727 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13726__13728 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13726__13729 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13726__13730 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13726__13731 = (function() { 
var G__13735__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13735 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13735__delegate.call(this, x, y, z, args);
};
G__13735.cljs$lang$maxFixedArity = 3;
G__13735.cljs$lang$applyTo = (function (arglist__13741){
var x = cljs.core.first(arglist__13741);
var y = cljs.core.first(cljs.core.next(arglist__13741));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13741)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13741)));
return G__13735__delegate.call(this, x, y, z, args);
});
return G__13735;
})()
;
G__13726 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13726__13727.call(this);
case  1 :
return G__13726__13728.call(this,x);
case  2 :
return G__13726__13729.call(this,x,y);
case  3 :
return G__13726__13730.call(this,x,y,z);
default:
return G__13726__13731.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13726.cljs$lang$maxFixedArity = 3;
G__13726.cljs$lang$applyTo = G__13726__13731.cljs$lang$applyTo;
return G__13726;
})()
});
var juxt__13707 = (function (f,g,h){
return (function() {
var G__13742 = null;
var G__13742__13743 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13742__13744 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13742__13745 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13742__13746 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13742__13747 = (function() { 
var G__13754__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13754 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13754__delegate.call(this, x, y, z, args);
};
G__13754.cljs$lang$maxFixedArity = 3;
G__13754.cljs$lang$applyTo = (function (arglist__13757){
var x = cljs.core.first(arglist__13757);
var y = cljs.core.first(cljs.core.next(arglist__13757));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13757)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13757)));
return G__13754__delegate.call(this, x, y, z, args);
});
return G__13754;
})()
;
G__13742 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13742__13743.call(this);
case  1 :
return G__13742__13744.call(this,x);
case  2 :
return G__13742__13745.call(this,x,y);
case  3 :
return G__13742__13746.call(this,x,y,z);
default:
return G__13742__13747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13742.cljs$lang$maxFixedArity = 3;
G__13742.cljs$lang$applyTo = G__13742__13747.cljs$lang$applyTo;
return G__13742;
})()
});
var juxt__13708 = (function() { 
var G__13759__delegate = function (f,g,h,fs){
var fs__13680 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13760 = null;
var G__13760__13761 = (function (){
return cljs.core.reduce.call(null,(function (p1__13619_SHARP_,p2__13620_SHARP_){
return cljs.core.conj.call(null,p1__13619_SHARP_,p2__13620_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13680);
});
var G__13760__13762 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13621_SHARP_,p2__13622_SHARP_){
return cljs.core.conj.call(null,p1__13621_SHARP_,p2__13622_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13680);
});
var G__13760__13763 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13623_SHARP_,p2__13624_SHARP_){
return cljs.core.conj.call(null,p1__13623_SHARP_,p2__13624_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13680);
});
var G__13760__13764 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13625_SHARP_,p2__13626_SHARP_){
return cljs.core.conj.call(null,p1__13625_SHARP_,p2__13626_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13680);
});
var G__13760__13765 = (function() { 
var G__13771__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13627_SHARP_,p2__13628_SHARP_){
return cljs.core.conj.call(null,p1__13627_SHARP_,cljs.core.apply.call(null,p2__13628_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13680);
};
var G__13771 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13771__delegate.call(this, x, y, z, args);
};
G__13771.cljs$lang$maxFixedArity = 3;
G__13771.cljs$lang$applyTo = (function (arglist__13776){
var x = cljs.core.first(arglist__13776);
var y = cljs.core.first(cljs.core.next(arglist__13776));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13776)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13776)));
return G__13771__delegate.call(this, x, y, z, args);
});
return G__13771;
})()
;
G__13760 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13760__13761.call(this);
case  1 :
return G__13760__13762.call(this,x);
case  2 :
return G__13760__13763.call(this,x,y);
case  3 :
return G__13760__13764.call(this,x,y,z);
default:
return G__13760__13765.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13760.cljs$lang$maxFixedArity = 3;
G__13760.cljs$lang$applyTo = G__13760__13765.cljs$lang$applyTo;
return G__13760;
})()
};
var G__13759 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13759__delegate.call(this, f, g, h, fs);
};
G__13759.cljs$lang$maxFixedArity = 3;
G__13759.cljs$lang$applyTo = (function (arglist__13777){
var f = cljs.core.first(arglist__13777);
var g = cljs.core.first(cljs.core.next(arglist__13777));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13777)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13777)));
return G__13759__delegate.call(this, f, g, h, fs);
});
return G__13759;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13705.call(this,f);
case  2 :
return juxt__13706.call(this,f,g);
case  3 :
return juxt__13707.call(this,f,g,h);
default:
return juxt__13708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13708.cljs$lang$applyTo;
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
var dorun__13786 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13789 = cljs.core.next.call(null,coll);
coll = G__13789;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13787 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13778 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13778))
{return (n > 0);
} else
{return and__3546__auto____13778;
}
})()))
{{
var G__13792 = (n - 1);
var G__13793 = cljs.core.next.call(null,coll);
n = G__13792;
coll = G__13793;
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
return dorun__13786.call(this,n);
case  2 :
return dorun__13787.call(this,n,coll);
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
var doall__13795 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13798 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13795.call(this,n);
case  2 :
return doall__13798.call(this,n,coll);
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
var matches__13800 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13800),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13800),1)))
{return cljs.core.first.call(null,matches__13800);
} else
{return cljs.core.vec.call(null,matches__13800);
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
var matches__13812 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13812)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13812),1)))
{return cljs.core.first.call(null,matches__13812);
} else
{return cljs.core.vec.call(null,matches__13812);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13842 = cljs.core.re_find.call(null,re,s);
var match_idx__13843 = s.search(re);
var match_str__13844 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13842))?cljs.core.first.call(null,match_data__13842):match_data__13842);
var post_match__13845 = cljs.core.subs.call(null,s,(match_idx__13843 + cljs.core.count.call(null,match_str__13844)));

if(cljs.core.truth_(match_data__13842))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13842,re_seq.call(null,re,post_match__13845));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13888_SHARP_){
return print_one.call(null,p1__13888_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13949 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13949))
{var and__3546__auto____13963 = (function (){var x__445__auto____13959 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13960 = x__445__auto____13959;

if(cljs.core.truth_(and__3546__auto____13960))
{var and__3546__auto____13962 = x__445__auto____13959.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13962))
{return cljs.core.not.call(null,x__445__auto____13959.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13962;
}
} else
{return and__3546__auto____13960;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13959);
}
})();

if(cljs.core.truth_(and__3546__auto____13963))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13963;
}
} else
{return and__3546__auto____13949;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13965 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13966 = x__445__auto____13965;

if(cljs.core.truth_(and__3546__auto____13966))
{var and__3546__auto____13967 = x__445__auto____13965.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13967))
{return cljs.core.not.call(null,x__445__auto____13965.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13967;
}
} else
{return and__3546__auto____13966;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13965);
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
var first_obj__14009 = cljs.core.first.call(null,objs);
var sb__14010 = (new goog.string.StringBuffer());

var G__14013__14014 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14013__14014))
{var obj__14016 = cljs.core.first.call(null,G__14013__14014);
var G__14013__14017 = G__14013__14014;

while(true){
if(cljs.core.truth_((obj__14016 === first_obj__14009)))
{} else
{sb__14010.append(" ");
}
var G__14026__14029 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14016,opts));

if(cljs.core.truth_(G__14026__14029))
{var string__14030 = cljs.core.first.call(null,G__14026__14029);
var G__14026__14031 = G__14026__14029;

while(true){
sb__14010.append(string__14030);
var temp__3698__auto____14040 = cljs.core.next.call(null,G__14026__14031);

if(cljs.core.truth_(temp__3698__auto____14040))
{var G__14026__14043 = temp__3698__auto____14040;

{
var G__14062 = cljs.core.first.call(null,G__14026__14043);
var G__14063 = G__14026__14043;
string__14030 = G__14062;
G__14026__14031 = G__14063;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14045 = cljs.core.next.call(null,G__14013__14017);

if(cljs.core.truth_(temp__3698__auto____14045))
{var G__14013__14047 = temp__3698__auto____14045;

{
var G__14071 = cljs.core.first.call(null,G__14013__14047);
var G__14072 = G__14013__14047;
obj__14016 = G__14071;
G__14013__14017 = G__14072;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14010);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14080 = cljs.core.first.call(null,objs);

var G__14085__14088 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14085__14088))
{var obj__14090 = cljs.core.first.call(null,G__14085__14088);
var G__14085__14091 = G__14085__14088;

while(true){
if(cljs.core.truth_((obj__14090 === first_obj__14080)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14092__14097 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14090,opts));

if(cljs.core.truth_(G__14092__14097))
{var string__14098 = cljs.core.first.call(null,G__14092__14097);
var G__14092__14099 = G__14092__14097;

while(true){
cljs.core.string_print.call(null,string__14098);
var temp__3698__auto____14201 = cljs.core.next.call(null,G__14092__14099);

if(cljs.core.truth_(temp__3698__auto____14201))
{var G__14092__14202 = temp__3698__auto____14201;

{
var G__14216 = cljs.core.first.call(null,G__14092__14202);
var G__14217 = G__14092__14202;
string__14098 = G__14216;
G__14092__14099 = G__14217;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14204 = cljs.core.next.call(null,G__14085__14091);

if(cljs.core.truth_(temp__3698__auto____14204))
{var G__14085__14207 = temp__3698__auto____14204;

{
var G__14219 = cljs.core.first.call(null,G__14085__14207);
var G__14220 = G__14085__14207;
obj__14090 = G__14219;
G__14085__14091 = G__14220;
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
pr_str.cljs$lang$applyTo = (function (arglist__14233){
var objs = cljs.core.seq( arglist__14233 );;
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
pr.cljs$lang$applyTo = (function (arglist__14236){
var objs = cljs.core.seq( arglist__14236 );;
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
prn.cljs$lang$applyTo = (function (arglist__14253){
var objs = cljs.core.seq( arglist__14253 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14264 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14264,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14315 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14315))
{var nspc__14317 = temp__3698__auto____14315;

return cljs.core.str.call(null,nspc__14317,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14322 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14322))
{var nspc__14324 = temp__3698__auto____14322;

return cljs.core.str.call(null,nspc__14324,"/");
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
var pr_pair__14393 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14393,"{",", ","}",opts,coll);
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
var this__14421 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14422 = this;
var G__14423__14424 = cljs.core.seq.call(null,this__14422.watches);

if(cljs.core.truth_(G__14423__14424))
{var G__14426__14430 = cljs.core.first.call(null,G__14423__14424);
var vec__14428__14431 = G__14426__14430;
var key__14432 = cljs.core.nth.call(null,vec__14428__14431,0,null);
var f__14434 = cljs.core.nth.call(null,vec__14428__14431,1,null);
var G__14423__14435 = G__14423__14424;

var G__14426__14436 = G__14426__14430;
var G__14423__14437 = G__14423__14435;

while(true){
var vec__14438__14440 = G__14426__14436;
var key__14441 = cljs.core.nth.call(null,vec__14438__14440,0,null);
var f__14443 = cljs.core.nth.call(null,vec__14438__14440,1,null);
var G__14423__14444 = G__14423__14437;

f__14443.call(null,key__14441,this$,oldval,newval);
var temp__3698__auto____14445 = cljs.core.next.call(null,G__14423__14444);

if(cljs.core.truth_(temp__3698__auto____14445))
{var G__14423__14446 = temp__3698__auto____14445;

{
var G__14513 = cljs.core.first.call(null,G__14423__14446);
var G__14514 = G__14423__14446;
G__14426__14436 = G__14513;
G__14423__14437 = G__14514;
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
var this__14447 = this;
return this$.watches = cljs.core.assoc.call(null,this__14447.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14448 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14448.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14497 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14497.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14500 = this;
return this__14500.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14501 = this;
return this__14501.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14504 = this;
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
var atom__14573 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14574 = (function() { 
var G__14602__delegate = function (x,p__14555){
var map__14556__14559 = p__14555;
var map__14556__14560 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14556__14559))?cljs.core.apply.call(null,cljs.core.hash_map,map__14556__14559):map__14556__14559);
var validator__14565 = cljs.core.get.call(null,map__14556__14560,"﷐'validator");
var meta__14567 = cljs.core.get.call(null,map__14556__14560,"﷐'meta");

return (new cljs.core.Atom(x,meta__14567,validator__14565,null));
};
var G__14602 = function (x,var_args){
var p__14555 = null;
if (goog.isDef(var_args)) {
  p__14555 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14602__delegate.call(this, x, p__14555);
};
G__14602.cljs$lang$maxFixedArity = 1;
G__14602.cljs$lang$applyTo = (function (arglist__14608){
var x = cljs.core.first(arglist__14608);
var p__14555 = cljs.core.rest(arglist__14608);
return G__14602__delegate.call(this, x, p__14555);
});
return G__14602;
})()
;
atom = function(x,var_args){
var p__14555 = var_args;
switch(arguments.length){
case  1 :
return atom__14573.call(this,x);
default:
return atom__14574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14574.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14609 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14609))
{var validate__14610 = temp__3698__auto____14609;

if(cljs.core.truth_(validate__14610.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14612 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14612,new_value);
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
var swap_BANG___14620 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14621 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14622 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14623 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14624 = (function() { 
var G__14626__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14626 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14626__delegate.call(this, a, f, x, y, z, more);
};
G__14626.cljs$lang$maxFixedArity = 5;
G__14626.cljs$lang$applyTo = (function (arglist__14627){
var a = cljs.core.first(arglist__14627);
var f = cljs.core.first(cljs.core.next(arglist__14627));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14627)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14627))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14627)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14627)))));
return G__14626__delegate.call(this, a, f, x, y, z, more);
});
return G__14626;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14620.call(this,a,f);
case  3 :
return swap_BANG___14621.call(this,a,f,x);
case  4 :
return swap_BANG___14622.call(this,a,f,x,y);
case  5 :
return swap_BANG___14623.call(this,a,f,x,y,z);
default:
return swap_BANG___14624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14624.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14639){
var iref = cljs.core.first(arglist__14639);
var f = cljs.core.first(cljs.core.next(arglist__14639));
var args = cljs.core.rest(cljs.core.next(arglist__14639));
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
var gensym__14668 = (function (){
return gensym.call(null,"G__");
});
var gensym__14669 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14668.call(this);
case  1 :
return gensym__14669.call(this,prefix_string);
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
var this__14694 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14694.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14696 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14696.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14696.state,this__14696.f);
}
return cljs.core.deref.call(null,this__14696.state);
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
delay.cljs$lang$applyTo = (function (arglist__14706){
var body = cljs.core.seq( arglist__14706 );;
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
var map__14723__14724 = options;
var map__14723__14725 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14723__14724))?cljs.core.apply.call(null,cljs.core.hash_map,map__14723__14724):map__14723__14724);
var keywordize_keys__14726 = cljs.core.get.call(null,map__14723__14725,"﷐'keywordize-keys");
var keyfn__14728 = (cljs.core.truth_(keywordize_keys__14726)?cljs.core.keyword:cljs.core.str);
var f__14739 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14738 = (function iter__14732(s__14733){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14733__14734 = s__14733;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14733__14734)))
{var k__14736 = cljs.core.first.call(null,s__14733__14734);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14728.call(null,k__14736),thisfn.call(null,(x[k__14736]))]),iter__14732.call(null,cljs.core.rest.call(null,s__14733__14734)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14738.call(null,cljs.core.js_keys.call(null,x));
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

return f__14739.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14743){
var x = cljs.core.first(arglist__14743);
var options = cljs.core.rest(arglist__14743);
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
var mem__14762 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14770__delegate = function (args){
var temp__3695__auto____14766 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14762),args);

if(cljs.core.truth_(temp__3695__auto____14766))
{var v__14767 = temp__3695__auto____14766;

return v__14767;
} else
{var ret__14768 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14762,cljs.core.assoc,args,ret__14768);
return ret__14768;
}
};
var G__14770 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14770__delegate.call(this, args);
};
G__14770.cljs$lang$maxFixedArity = 0;
G__14770.cljs$lang$applyTo = (function (arglist__14774){
var args = cljs.core.seq( arglist__14774 );;
return G__14770__delegate.call(this, args);
});
return G__14770;
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
var trampoline__14795 = (function (f){
while(true){
var ret__14784 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14784)))
{{
var G__14805 = ret__14784;
f = G__14805;
continue;
}
} else
{return ret__14784;
}
break;
}
});
var trampoline__14797 = (function() { 
var G__14806__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14806 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14806__delegate.call(this, f, args);
};
G__14806.cljs$lang$maxFixedArity = 1;
G__14806.cljs$lang$applyTo = (function (arglist__14808){
var f = cljs.core.first(arglist__14808);
var args = cljs.core.rest(arglist__14808);
return G__14806__delegate.call(this, f, args);
});
return G__14806;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14795.call(this,f);
default:
return trampoline__14797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14797.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14816 = (function (){
return rand.call(null,1);
});
var rand__14817 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14816.call(this);
case  1 :
return rand__14817.call(this,n);
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
var k__14831 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14831,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14831,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14873 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14874 = (function (h,child,parent){
var or__3548__auto____14851 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14851))
{return or__3548__auto____14851;
} else
{var or__3548__auto____14853 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14853))
{return or__3548__auto____14853;
} else
{var and__3546__auto____14855 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14855))
{var and__3546__auto____14858 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14858))
{var and__3546__auto____14859 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14859))
{var ret__14860 = true;
var i__14861 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14862 = cljs.core.not.call(null,ret__14860);

if(cljs.core.truth_(or__3548__auto____14862))
{return or__3548__auto____14862;
} else
{return cljs.core._EQ_.call(null,i__14861,cljs.core.count.call(null,parent));
}
})()))
{return ret__14860;
} else
{{
var G__14889 = isa_QMARK_.call(null,h,child.call(null,i__14861),parent.call(null,i__14861));
var G__14890 = (i__14861 + 1);
ret__14860 = G__14889;
i__14861 = G__14890;
continue;
}
}
break;
}
} else
{return and__3546__auto____14859;
}
} else
{return and__3546__auto____14858;
}
} else
{return and__3546__auto____14855;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14873.call(this,h,child);
case  3 :
return isa_QMARK___14874.call(this,h,child,parent);
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
var parents__14926 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14927 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14926.call(this,h);
case  2 :
return parents__14927.call(this,h,tag);
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
var ancestors__14941 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14942 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14941.call(this,h);
case  2 :
return ancestors__14942.call(this,h,tag);
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
var descendants__14947 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14948 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14947.call(this,h);
case  2 :
return descendants__14948.call(this,h,tag);
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
var derive__14972 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14973 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14961 = "﷐'parents".call(null,h);
var td__14962 = "﷐'descendants".call(null,h);
var ta__14963 = "﷐'ancestors".call(null,h);
var tf__14966 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14968 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14961.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14963.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14963.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14961,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14966.call(null,"﷐'ancestors".call(null,h),tag,td__14962,parent,ta__14963),"﷐'descendants":tf__14966.call(null,"﷐'descendants".call(null,h),parent,ta__14963,tag,td__14962)});
})());

if(cljs.core.truth_(or__3548__auto____14968))
{return or__3548__auto____14968;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14972.call(this,h,tag);
case  3 :
return derive__14973.call(this,h,tag,parent);
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
var underive__15000 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15001 = (function (h,tag,parent){
var parentMap__14984 = "﷐'parents".call(null,h);
var childsParents__14986 = (cljs.core.truth_(parentMap__14984.call(null,tag))?cljs.core.disj.call(null,parentMap__14984.call(null,tag),parent):cljs.core.set([]));
var newParents__14989 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14986))?cljs.core.assoc.call(null,parentMap__14984,tag,childsParents__14986):cljs.core.dissoc.call(null,parentMap__14984,tag));
var deriv_seq__14991 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14953_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14953_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14953_SHARP_),cljs.core.second.call(null,p1__14953_SHARP_)));
}),cljs.core.seq.call(null,newParents__14989)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14984.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14954_SHARP_,p2__14957_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14954_SHARP_,p2__14957_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14991));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15000.call(this,h,tag);
case  3 :
return underive__15001.call(this,h,tag,parent);
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
var xprefs__15021 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15025 = (cljs.core.truth_((function (){var and__3546__auto____15022 = xprefs__15021;

if(cljs.core.truth_(and__3546__auto____15022))
{return xprefs__15021.call(null,y);
} else
{return and__3546__auto____15022;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15025))
{return or__3548__auto____15025;
} else
{var or__3548__auto____15028 = (function (){var ps__15027 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15027) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15027),prefer_table)))
{} else
{}
{
var G__15042 = cljs.core.rest.call(null,ps__15027);
ps__15027 = G__15042;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15028))
{return or__3548__auto____15028;
} else
{var or__3548__auto____15035 = (function (){var ps__15031 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15031) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15031),y,prefer_table)))
{} else
{}
{
var G__15046 = cljs.core.rest.call(null,ps__15031);
ps__15031 = G__15046;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15035))
{return or__3548__auto____15035;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15055 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15055))
{return or__3548__auto____15055;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15070 = cljs.core.reduce.call(null,(function (be,p__15059){
var vec__15060__15061 = p__15059;
var k__15062 = cljs.core.nth.call(null,vec__15060__15061,0,null);
var ___15063 = cljs.core.nth.call(null,vec__15060__15061,1,null);
var e__15064 = vec__15060__15061;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15062)))
{var be2__15069 = (cljs.core.truth_((function (){var or__3548__auto____15068 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15068))
{return or__3548__auto____15068;
} else
{return cljs.core.dominates.call(null,k__15062,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15064:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15069),k__15062,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15062," and ",cljs.core.first.call(null,be2__15069),", and neither is preferred")));
}
return be2__15069;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15070))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15070));
return cljs.core.second.call(null,best_entry__15070);
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
if(cljs.core.truth_((function (){var and__3546__auto____15078 = mf;

if(cljs.core.truth_(and__3546__auto____15078))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15078;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15080 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15080))
{return or__3548__auto____15080;
} else
{var or__3548__auto____15082 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15082))
{return or__3548__auto____15082;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15086 = mf;

if(cljs.core.truth_(and__3546__auto____15086))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15086;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15087 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15087))
{return or__3548__auto____15087;
} else
{var or__3548__auto____15088 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15088))
{return or__3548__auto____15088;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15092 = mf;

if(cljs.core.truth_(and__3546__auto____15092))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15092;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15094 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15094))
{return or__3548__auto____15094;
} else
{var or__3548__auto____15097 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15097))
{return or__3548__auto____15097;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15103 = mf;

if(cljs.core.truth_(and__3546__auto____15103))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15103;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15106 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15106))
{return or__3548__auto____15106;
} else
{var or__3548__auto____15107 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15107))
{return or__3548__auto____15107;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15113 = mf;

if(cljs.core.truth_(and__3546__auto____15113))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15113;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15114 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15114))
{return or__3548__auto____15114;
} else
{var or__3548__auto____15115 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15115))
{return or__3548__auto____15115;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15116 = mf;

if(cljs.core.truth_(and__3546__auto____15116))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15116;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15117 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15117))
{return or__3548__auto____15117;
} else
{var or__3548__auto____15119 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15119))
{return or__3548__auto____15119;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15125 = mf;

if(cljs.core.truth_(and__3546__auto____15125))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15125;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15131 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15131))
{return or__3548__auto____15131;
} else
{var or__3548__auto____15133 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15133))
{return or__3548__auto____15133;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15134 = mf;

if(cljs.core.truth_(and__3546__auto____15134))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15134;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15140 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15140))
{return or__3548__auto____15140;
} else
{var or__3548__auto____15142 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15142))
{return or__3548__auto____15142;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15169 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15171 = cljs.core._get_method.call(null,mf,dispatch_val__15169);

if(cljs.core.truth_(target_fn__15171))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15169)));
}
return cljs.core.apply.call(null,target_fn__15171,args);
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
var this__15181 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15182 = this;
cljs.core.swap_BANG_.call(null,this__15182.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15182.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15182.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15182.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15185 = this;
cljs.core.swap_BANG_.call(null,this__15185.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15185.method_cache,this__15185.method_table,this__15185.cached_hierarchy,this__15185.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15210 = this;
cljs.core.swap_BANG_.call(null,this__15210.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15210.method_cache,this__15210.method_table,this__15210.cached_hierarchy,this__15210.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15213 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15213.cached_hierarchy),cljs.core.deref.call(null,this__15213.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15213.method_cache,this__15213.method_table,this__15213.cached_hierarchy,this__15213.hierarchy);
}
var temp__3695__auto____15215 = cljs.core.deref.call(null,this__15213.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15215))
{var target_fn__15216 = temp__3695__auto____15215;

return target_fn__15216;
} else
{var temp__3695__auto____15217 = cljs.core.find_and_cache_best_method.call(null,this__15213.name,dispatch_val,this__15213.hierarchy,this__15213.method_table,this__15213.prefer_table,this__15213.method_cache,this__15213.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15217))
{var target_fn__15221 = temp__3695__auto____15217;

return target_fn__15221;
} else
{return cljs.core.deref.call(null,this__15213.method_table).call(null,this__15213.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15224 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15224.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15224.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15224.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15224.method_cache,this__15224.method_table,this__15224.cached_hierarchy,this__15224.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15259 = this;
return cljs.core.deref.call(null,this__15259.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15261 = this;
return cljs.core.deref.call(null,this__15261.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15262 = this;
return cljs.core.do_dispatch.call(null,mf,this__15262.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15286__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15286 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15286__delegate.call(this, _, args);
};
G__15286.cljs$lang$maxFixedArity = 1;
G__15286.cljs$lang$applyTo = (function (arglist__15288){
var _ = cljs.core.first(arglist__15288);
var args = cljs.core.rest(arglist__15288);
return G__15286__delegate.call(this, _, args);
});
return G__15286;
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
