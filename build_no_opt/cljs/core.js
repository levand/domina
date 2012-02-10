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
var or__3548__auto____7200 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7200))
{return or__3548__auto____7200;
} else
{var or__3548__auto____7201 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7201))
{return or__3548__auto____7201;
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
var _invoke__7523 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7212 = this$;

if(cljs.core.truth_(and__3546__auto____7212))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7212;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7215 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7215))
{return or__3548__auto____7215;
} else
{var or__3548__auto____7216 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7216))
{return or__3548__auto____7216;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7524 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7219 = this$;

if(cljs.core.truth_(and__3546__auto____7219))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7219;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7222 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7222))
{return or__3548__auto____7222;
} else
{var or__3548__auto____7225 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7225))
{return or__3548__auto____7225;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7525 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7228 = this$;

if(cljs.core.truth_(and__3546__auto____7228))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7228;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7232 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7232))
{return or__3548__auto____7232;
} else
{var or__3548__auto____7234 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7234))
{return or__3548__auto____7234;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7526 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7237 = this$;

if(cljs.core.truth_(and__3546__auto____7237))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7237;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7241 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7241))
{return or__3548__auto____7241;
} else
{var or__3548__auto____7243 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7243))
{return or__3548__auto____7243;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7527 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7245 = this$;

if(cljs.core.truth_(and__3546__auto____7245))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7245;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7247 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7247))
{return or__3548__auto____7247;
} else
{var or__3548__auto____7249 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7249))
{return or__3548__auto____7249;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7528 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7251 = this$;

if(cljs.core.truth_(and__3546__auto____7251))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7251;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{var or__3548__auto____7262 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7529 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7264 = this$;

if(cljs.core.truth_(and__3546__auto____7264))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7264;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7273 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
} else
{var or__3548__auto____7275 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7530 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7277 = this$;

if(cljs.core.truth_(and__3546__auto____7277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7279 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7279))
{return or__3548__auto____7279;
} else
{var or__3548__auto____7281 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7531 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7283 = this$;

if(cljs.core.truth_(and__3546__auto____7283))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7283;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7532 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7290 = this$;

if(cljs.core.truth_(and__3546__auto____7290))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7290;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7292 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7292))
{return or__3548__auto____7292;
} else
{var or__3548__auto____7293 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7293))
{return or__3548__auto____7293;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7533 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7297 = this$;

if(cljs.core.truth_(and__3546__auto____7297))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7297;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7300 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
} else
{var or__3548__auto____7301 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7534 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7312 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
} else
{var or__3548__auto____7314 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7314))
{return or__3548__auto____7314;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7535 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7320 = this$;

if(cljs.core.truth_(and__3546__auto____7320))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7320;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7536 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7537 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7342 = this$;

if(cljs.core.truth_(and__3546__auto____7342))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7342;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7538 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7352 = this$;

if(cljs.core.truth_(and__3546__auto____7352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7354 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7354))
{return or__3548__auto____7354;
} else
{var or__3548__auto____7356 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7356))
{return or__3548__auto____7356;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7539 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7360 = this$;

if(cljs.core.truth_(and__3546__auto____7360))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7360;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7363 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{var or__3548__auto____7364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7540 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7368 = this$;

if(cljs.core.truth_(and__3546__auto____7368))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7368;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7370 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{var or__3548__auto____7372 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7541 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7376 = this$;

if(cljs.core.truth_(and__3546__auto____7376))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7376;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7379 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{var or__3548__auto____7381 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7381))
{return or__3548__auto____7381;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7542 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7386 = this$;

if(cljs.core.truth_(and__3546__auto____7386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7543 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7396 = this$;

if(cljs.core.truth_(and__3546__auto____7396))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7396;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{var or__3548__auto____7401 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
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
return _invoke__7523.call(this,this$);
case  2 :
return _invoke__7524.call(this,this$,a);
case  3 :
return _invoke__7525.call(this,this$,a,b);
case  4 :
return _invoke__7526.call(this,this$,a,b,c);
case  5 :
return _invoke__7527.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7528.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7529.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7530.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7531.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7532.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7533.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7534.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7535.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7536.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7537.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7538.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7539.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7540.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7541.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7542.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7543.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7666 = coll;

if(cljs.core.truth_(and__3546__auto____7666))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7666;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7667 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7667))
{return or__3548__auto____7667;
} else
{var or__3548__auto____7668 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
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
if(cljs.core.truth_((function (){var and__3546__auto____7672 = coll;

if(cljs.core.truth_(and__3546__auto____7672))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7672;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7674 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7674))
{return or__3548__auto____7674;
} else
{var or__3548__auto____7675 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7675))
{return or__3548__auto____7675;
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
var _nth__7704 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7696 = coll;

if(cljs.core.truth_(and__3546__auto____7696))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7696;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7697 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7697))
{return or__3548__auto____7697;
} else
{var or__3548__auto____7698 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7705 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7699 = coll;

if(cljs.core.truth_(and__3546__auto____7699))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7699;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7700 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{var or__3548__auto____7702 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
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
return _nth__7704.call(this,coll,n);
case  3 :
return _nth__7705.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7713 = coll;

if(cljs.core.truth_(and__3546__auto____7713))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7713;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7715 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
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
if(cljs.core.truth_((function (){var and__3546__auto____7717 = coll;

if(cljs.core.truth_(and__3546__auto____7717))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7717;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7718 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{var or__3548__auto____7719 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
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
var _lookup__7789 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7753 = o;

if(cljs.core.truth_(and__3546__auto____7753))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7753;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7757 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
} else
{var or__3548__auto____7760 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7790 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7763 = o;

if(cljs.core.truth_(and__3546__auto____7763))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7763;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7787 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
} else
{var or__3548__auto____7788 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7788))
{return or__3548__auto____7788;
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
return _lookup__7789.call(this,o,k);
case  3 :
return _lookup__7790.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7876 = coll;

if(cljs.core.truth_(and__3546__auto____7876))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7876;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7878 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{var or__3548__auto____7881 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7881))
{return or__3548__auto____7881;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7887 = coll;

if(cljs.core.truth_(and__3546__auto____7887))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7887;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7889 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7889))
{return or__3548__auto____7889;
} else
{var or__3548__auto____7891 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7897 = coll;

if(cljs.core.truth_(and__3546__auto____7897))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7897;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7902 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{var or__3548__auto____7903 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7910 = coll;

if(cljs.core.truth_(and__3546__auto____7910))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7910;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7914 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
} else
{var or__3548__auto____7915 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7921 = coll;

if(cljs.core.truth_(and__3546__auto____7921))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7921;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7926 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{var or__3548__auto____7929 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7931 = coll;

if(cljs.core.truth_(and__3546__auto____7931))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7931;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7934 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
} else
{var or__3548__auto____7935 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7953 = coll;

if(cljs.core.truth_(and__3546__auto____7953))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7953;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7957 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{var or__3548__auto____7960 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7960))
{return or__3548__auto____7960;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7968 = o;

if(cljs.core.truth_(and__3546__auto____7968))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7968;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7971 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{var or__3548__auto____7972 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = o;

if(cljs.core.truth_(and__3546__auto____7980))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7980;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{var or__3548__auto____7983 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7989 = o;

if(cljs.core.truth_(and__3546__auto____7989))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7989;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7991 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
} else
{var or__3548__auto____7992 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7998 = o;

if(cljs.core.truth_(and__3546__auto____7998))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7998;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8000 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{var or__3548__auto____8001 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
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
var _reduce__8017 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8006 = coll;

if(cljs.core.truth_(and__3546__auto____8006))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8006;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8009 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{var or__3548__auto____8011 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8011))
{return or__3548__auto____8011;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8018 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8012 = coll;

if(cljs.core.truth_(and__3546__auto____8012))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8012;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8013 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{var or__3548__auto____8015 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
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
return _reduce__8017.call(this,coll,f);
case  3 :
return _reduce__8018.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8030 = o;

if(cljs.core.truth_(and__3546__auto____8030))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8030;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8031 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8031))
{return or__3548__auto____8031;
} else
{var or__3548__auto____8034 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8034))
{return or__3548__auto____8034;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8040 = o;

if(cljs.core.truth_(and__3546__auto____8040))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8040;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
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
if(cljs.core.truth_((function (){var and__3546__auto____8050 = o;

if(cljs.core.truth_(and__3546__auto____8050))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8050;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8051 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{var or__3548__auto____8053 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
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
{return (function (){var or__3548__auto____8063 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{var or__3548__auto____8065 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8071 = d;

if(cljs.core.truth_(and__3546__auto____8071))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8071;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8072 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{var or__3548__auto____8073 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8077 = this$;

if(cljs.core.truth_(and__3546__auto____8077))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8077;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8078 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{var or__3548__auto____8079 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = this$;

if(cljs.core.truth_(and__3546__auto____8094))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8094;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8095 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{var or__3548__auto____8097 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8097))
{return or__3548__auto____8097;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8100 = this$;

if(cljs.core.truth_(and__3546__auto____8100))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8100;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8105 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{var or__3548__auto____8106 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
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
var G__8144 = null;
var G__8144__8146 = (function (o,k){
return null;
});
var G__8144__8147 = (function (o,k,not_found){
return not_found;
});
G__8144 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8144__8146.call(this,o,k);
case  3 :
return G__8144__8147.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8144;
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
var G__8151 = null;
var G__8151__8152 = (function (_,f){
return f.call(null);
});
var G__8151__8153 = (function (_,f,start){
return start;
});
G__8151 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8151__8152.call(this,_,f);
case  3 :
return G__8151__8153.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8151;
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
var G__8165 = null;
var G__8165__8166 = (function (_,n){
return null;
});
var G__8165__8167 = (function (_,n,not_found){
return not_found;
});
G__8165 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8165__8166.call(this,_,n);
case  3 :
return G__8165__8167.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8165;
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
var ci_reduce__8194 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8185 = cljs.core._nth.call(null,cicoll,0);
var n__8186 = 1;

while(true){
if(cljs.core.truth_((n__8186 < cljs.core._count.call(null,cicoll))))
{{
var G__8198 = f.call(null,val__8185,cljs.core._nth.call(null,cicoll,n__8186));
var G__8199 = (n__8186 + 1);
val__8185 = G__8198;
n__8186 = G__8199;
continue;
}
} else
{return val__8185;
}
break;
}
}
});
var ci_reduce__8195 = (function (cicoll,f,val){
var val__8187 = val;
var n__8188 = 0;

while(true){
if(cljs.core.truth_((n__8188 < cljs.core._count.call(null,cicoll))))
{{
var G__8202 = f.call(null,val__8187,cljs.core._nth.call(null,cicoll,n__8188));
var G__8203 = (n__8188 + 1);
val__8187 = G__8202;
n__8188 = G__8203;
continue;
}
} else
{return val__8187;
}
break;
}
});
var ci_reduce__8196 = (function (cicoll,f,val,idx){
var val__8190 = val;
var n__8191 = idx;

while(true){
if(cljs.core.truth_((n__8191 < cljs.core._count.call(null,cicoll))))
{{
var G__8209 = f.call(null,val__8190,cljs.core._nth.call(null,cicoll,n__8191));
var G__8210 = (n__8191 + 1);
val__8190 = G__8209;
n__8191 = G__8210;
continue;
}
} else
{return val__8190;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8194.call(this,cicoll,f);
case  3 :
return ci_reduce__8195.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8196.call(this,cicoll,f,val,idx);
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
var this__8232 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8262 = null;
var G__8262__8263 = (function (_,f){
var this__8234 = this;
return cljs.core.ci_reduce.call(null,this__8234.a,f,(this__8234.a[this__8234.i]),(this__8234.i + 1));
});
var G__8262__8264 = (function (_,f,start){
var this__8236 = this;
return cljs.core.ci_reduce.call(null,this__8236.a,f,start,this__8236.i);
});
G__8262 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8262__8263.call(this,_,f);
case  3 :
return G__8262__8264.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8262;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8237 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8238 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8270 = null;
var G__8270__8273 = (function (coll,n){
var this__8240 = this;
var i__8245 = (n + this__8240.i);

if(cljs.core.truth_((i__8245 < this__8240.a.length)))
{return (this__8240.a[i__8245]);
} else
{return null;
}
});
var G__8270__8274 = (function (coll,n,not_found){
var this__8248 = this;
var i__8250 = (n + this__8248.i);

if(cljs.core.truth_((i__8250 < this__8248.a.length)))
{return (this__8248.a[i__8250]);
} else
{return not_found;
}
});
G__8270 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8270__8273.call(this,coll,n);
case  3 :
return G__8270__8274.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8270;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8251 = this;
return (this__8251.a.length - this__8251.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8254 = this;
return (this__8254.a[this__8254.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8255 = this;
if(cljs.core.truth_(((this__8255.i + 1) < this__8255.a.length)))
{return (new cljs.core.IndexedSeq(this__8255.a,(this__8255.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8257 = this;
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
var G__8303 = null;
var G__8303__8304 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8303__8305 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8303 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8303__8304.call(this,array,f);
case  3 :
return G__8303__8305.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8303;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8307 = null;
var G__8307__8308 = (function (array,k){
return (array[k]);
});
var G__8307__8309 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8307 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8307__8308.call(this,array,k);
case  3 :
return G__8307__8309.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8307;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8315 = null;
var G__8315__8316 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8315__8317 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8315 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8315__8316.call(this,array,n);
case  3 :
return G__8315__8317.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8315;
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
var temp__3698__auto____8374 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8374))
{var s__8375 = temp__3698__auto____8374;

return cljs.core._first.call(null,s__8375);
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
var G__8389 = cljs.core.next.call(null,s);
s = G__8389;
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
var s__8390 = cljs.core.seq.call(null,x);
var n__8391 = 0;

while(true){
if(cljs.core.truth_(s__8390))
{{
var G__8398 = cljs.core.next.call(null,s__8390);
var G__8399 = (n__8391 + 1);
s__8390 = G__8398;
n__8391 = G__8399;
continue;
}
} else
{return n__8391;
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
var conj__8404 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8405 = (function() { 
var G__8407__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8408 = conj.call(null,coll,x);
var G__8410 = cljs.core.first.call(null,xs);
var G__8411 = cljs.core.next.call(null,xs);
coll = G__8408;
x = G__8410;
xs = G__8411;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8407 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8407__delegate.call(this, coll, x, xs);
};
G__8407.cljs$lang$maxFixedArity = 2;
G__8407.cljs$lang$applyTo = (function (arglist__8412){
var coll = cljs.core.first(arglist__8412);
var x = cljs.core.first(cljs.core.next(arglist__8412));
var xs = cljs.core.rest(cljs.core.next(arglist__8412));
return G__8407__delegate.call(this, coll, x, xs);
});
return G__8407;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8404.call(this,coll,x);
default:
return conj__8405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8405.cljs$lang$applyTo;
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
var nth__8426 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8427 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8426.call(this,coll,n);
case  3 :
return nth__8427.call(this,coll,n,not_found);
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
var assoc__8439 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8440 = (function() { 
var G__8442__delegate = function (coll,k,v,kvs){
while(true){
var ret__8438 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8443 = ret__8438;
var G__8444 = cljs.core.first.call(null,kvs);
var G__8445 = cljs.core.second.call(null,kvs);
var G__8446 = cljs.core.nnext.call(null,kvs);
coll = G__8443;
k = G__8444;
v = G__8445;
kvs = G__8446;
continue;
}
} else
{return ret__8438;
}
break;
}
};
var G__8442 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8442__delegate.call(this, coll, k, v, kvs);
};
G__8442.cljs$lang$maxFixedArity = 3;
G__8442.cljs$lang$applyTo = (function (arglist__8450){
var coll = cljs.core.first(arglist__8450);
var k = cljs.core.first(cljs.core.next(arglist__8450));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8450)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8450)));
return G__8442__delegate.call(this, coll, k, v, kvs);
});
return G__8442;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8439.call(this,coll,k,v);
default:
return assoc__8440.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8440.cljs$lang$applyTo;
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
var dissoc__8456 = (function (coll){
return coll;
});
var dissoc__8457 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8458 = (function() { 
var G__8460__delegate = function (coll,k,ks){
while(true){
var ret__8451 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8461 = ret__8451;
var G__8462 = cljs.core.first.call(null,ks);
var G__8463 = cljs.core.next.call(null,ks);
coll = G__8461;
k = G__8462;
ks = G__8463;
continue;
}
} else
{return ret__8451;
}
break;
}
};
var G__8460 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8460__delegate.call(this, coll, k, ks);
};
G__8460.cljs$lang$maxFixedArity = 2;
G__8460.cljs$lang$applyTo = (function (arglist__8485){
var coll = cljs.core.first(arglist__8485);
var k = cljs.core.first(cljs.core.next(arglist__8485));
var ks = cljs.core.rest(cljs.core.next(arglist__8485));
return G__8460__delegate.call(this, coll, k, ks);
});
return G__8460;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8456.call(this,coll);
case  2 :
return dissoc__8457.call(this,coll,k);
default:
return dissoc__8458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8458.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8487 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8488 = x__445__auto____8487;

if(cljs.core.truth_(and__3546__auto____8488))
{var and__3546__auto____8492 = x__445__auto____8487.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8492))
{return cljs.core.not.call(null,x__445__auto____8487.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8492;
}
} else
{return and__3546__auto____8488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8487);
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
var disj__8525 = (function (coll){
return coll;
});
var disj__8526 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8527 = (function() { 
var G__8531__delegate = function (coll,k,ks){
while(true){
var ret__8519 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8545 = ret__8519;
var G__8546 = cljs.core.first.call(null,ks);
var G__8547 = cljs.core.next.call(null,ks);
coll = G__8545;
k = G__8546;
ks = G__8547;
continue;
}
} else
{return ret__8519;
}
break;
}
};
var G__8531 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8531__delegate.call(this, coll, k, ks);
};
G__8531.cljs$lang$maxFixedArity = 2;
G__8531.cljs$lang$applyTo = (function (arglist__8549){
var coll = cljs.core.first(arglist__8549);
var k = cljs.core.first(cljs.core.next(arglist__8549));
var ks = cljs.core.rest(cljs.core.next(arglist__8549));
return G__8531__delegate.call(this, coll, k, ks);
});
return G__8531;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8525.call(this,coll);
case  2 :
return disj__8526.call(this,coll,k);
default:
return disj__8527.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8527.cljs$lang$applyTo;
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
{var x__445__auto____8563 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8564 = x__445__auto____8563;

if(cljs.core.truth_(and__3546__auto____8564))
{var and__3546__auto____8565 = x__445__auto____8563.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8565))
{return cljs.core.not.call(null,x__445__auto____8563.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8565;
}
} else
{return and__3546__auto____8564;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8563);
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
{var x__445__auto____8567 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8570 = x__445__auto____8567;

if(cljs.core.truth_(and__3546__auto____8570))
{var and__3546__auto____8640 = x__445__auto____8567.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8640))
{return cljs.core.not.call(null,x__445__auto____8567.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8640;
}
} else
{return and__3546__auto____8570;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8567);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8643 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8645 = x__445__auto____8643;

if(cljs.core.truth_(and__3546__auto____8645))
{var and__3546__auto____8647 = x__445__auto____8643.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8647))
{return cljs.core.not.call(null,x__445__auto____8643.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8647;
}
} else
{return and__3546__auto____8645;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8643);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8712 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8715 = x__445__auto____8712;

if(cljs.core.truth_(and__3546__auto____8715))
{var and__3546__auto____8716 = x__445__auto____8712.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8716))
{return cljs.core.not.call(null,x__445__auto____8712.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8716;
}
} else
{return and__3546__auto____8715;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8712);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8719 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8721 = x__445__auto____8719;

if(cljs.core.truth_(and__3546__auto____8721))
{var and__3546__auto____8722 = x__445__auto____8719.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8722))
{return cljs.core.not.call(null,x__445__auto____8719.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8722;
}
} else
{return and__3546__auto____8721;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8719);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8726 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8727 = x__445__auto____8726;

if(cljs.core.truth_(and__3546__auto____8727))
{var and__3546__auto____8728 = x__445__auto____8726.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8728))
{return cljs.core.not.call(null,x__445__auto____8726.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8728;
}
} else
{return and__3546__auto____8727;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8726);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8734 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8735 = x__445__auto____8734;

if(cljs.core.truth_(and__3546__auto____8735))
{var and__3546__auto____8736 = x__445__auto____8734.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8736))
{return cljs.core.not.call(null,x__445__auto____8734.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8736;
}
} else
{return and__3546__auto____8735;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8734);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8747 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8747.push(key);
}));
return keys__8747;
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
{var x__445__auto____8767 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8800 = x__445__auto____8767;

if(cljs.core.truth_(and__3546__auto____8800))
{var and__3546__auto____8803 = x__445__auto____8767.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8803))
{return cljs.core.not.call(null,x__445__auto____8767.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8803;
}
} else
{return and__3546__auto____8800;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8767);
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
var and__3546__auto____8812 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8812))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8816 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8816))
{return or__3548__auto____8816;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8812;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8832 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8832))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8832;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8835 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8835))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8835;
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
var and__3546__auto____8840 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8840))
{return (n == n.toFixed());
} else
{return and__3546__auto____8840;
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
if(cljs.core.truth_((function (){var and__3546__auto____8845 = coll;

if(cljs.core.truth_(and__3546__auto____8845))
{var and__3546__auto____8847 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8847))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8847;
}
} else
{return and__3546__auto____8845;
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
var distinct_QMARK___8859 = (function (x){
return true;
});
var distinct_QMARK___8860 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8861 = (function() { 
var G__8864__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8853 = cljs.core.set([y,x]);
var xs__8854 = more;

while(true){
var x__8855 = cljs.core.first.call(null,xs__8854);
var etc__8856 = cljs.core.next.call(null,xs__8854);

if(cljs.core.truth_(xs__8854))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8853,x__8855)))
{return false;
} else
{{
var G__8866 = cljs.core.conj.call(null,s__8853,x__8855);
var G__8867 = etc__8856;
s__8853 = G__8866;
xs__8854 = G__8867;
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
var G__8864 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8864__delegate.call(this, x, y, more);
};
G__8864.cljs$lang$maxFixedArity = 2;
G__8864.cljs$lang$applyTo = (function (arglist__8868){
var x = cljs.core.first(arglist__8868);
var y = cljs.core.first(cljs.core.next(arglist__8868));
var more = cljs.core.rest(cljs.core.next(arglist__8868));
return G__8864__delegate.call(this, x, y, more);
});
return G__8864;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8859.call(this,x);
case  2 :
return distinct_QMARK___8860.call(this,x,y);
default:
return distinct_QMARK___8861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8861.cljs$lang$applyTo;
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
var r__8874 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8874)))
{return r__8874;
} else
{if(cljs.core.truth_(r__8874))
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
var sort__8905 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8907 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8902 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8902,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8902);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8905.call(this,comp);
case  2 :
return sort__8907.call(this,comp,coll);
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
var sort_by__8915 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8916 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8915.call(this,keyfn,comp);
case  3 :
return sort_by__8916.call(this,keyfn,comp,coll);
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
var reduce__8927 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8928 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8927.call(this,f,val);
case  3 :
return reduce__8928.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8952 = (function (f,coll){
var temp__3695__auto____8942 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8942))
{var s__8944 = temp__3695__auto____8942;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8944),cljs.core.next.call(null,s__8944));
} else
{return f.call(null);
}
});
var seq_reduce__8953 = (function (f,val,coll){
var val__8947 = val;
var coll__8950 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8950))
{{
var G__8957 = f.call(null,val__8947,cljs.core.first.call(null,coll__8950));
var G__8958 = cljs.core.next.call(null,coll__8950);
val__8947 = G__8957;
coll__8950 = G__8958;
continue;
}
} else
{return val__8947;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8952.call(this,f,val);
case  3 :
return seq_reduce__8953.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8971 = null;
var G__8971__8972 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8971__8973 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8971 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8971__8972.call(this,coll,f);
case  3 :
return G__8971__8973.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8971;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8989 = (function (){
return 0;
});
var _PLUS___8990 = (function (x){
return x;
});
var _PLUS___8992 = (function (x,y){
return (x + y);
});
var _PLUS___8993 = (function() { 
var G__8995__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8995 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8995__delegate.call(this, x, y, more);
};
G__8995.cljs$lang$maxFixedArity = 2;
G__8995.cljs$lang$applyTo = (function (arglist__8996){
var x = cljs.core.first(arglist__8996);
var y = cljs.core.first(cljs.core.next(arglist__8996));
var more = cljs.core.rest(cljs.core.next(arglist__8996));
return G__8995__delegate.call(this, x, y, more);
});
return G__8995;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8989.call(this);
case  1 :
return _PLUS___8990.call(this,x);
case  2 :
return _PLUS___8992.call(this,x,y);
default:
return _PLUS___8993.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8993.cljs$lang$applyTo;
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
var ___9007 = (function (x){
return (- x);
});
var ___9008 = (function (x,y){
return (x - y);
});
var ___9009 = (function() { 
var G__9011__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9011 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9011__delegate.call(this, x, y, more);
};
G__9011.cljs$lang$maxFixedArity = 2;
G__9011.cljs$lang$applyTo = (function (arglist__9012){
var x = cljs.core.first(arglist__9012);
var y = cljs.core.first(cljs.core.next(arglist__9012));
var more = cljs.core.rest(cljs.core.next(arglist__9012));
return G__9011__delegate.call(this, x, y, more);
});
return G__9011;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9007.call(this,x);
case  2 :
return ___9008.call(this,x,y);
default:
return ___9009.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9009.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9019 = (function (){
return 1;
});
var _STAR___9020 = (function (x){
return x;
});
var _STAR___9021 = (function (x,y){
return (x * y);
});
var _STAR___9022 = (function() { 
var G__9085__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9085 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9085__delegate.call(this, x, y, more);
};
G__9085.cljs$lang$maxFixedArity = 2;
G__9085.cljs$lang$applyTo = (function (arglist__9086){
var x = cljs.core.first(arglist__9086);
var y = cljs.core.first(cljs.core.next(arglist__9086));
var more = cljs.core.rest(cljs.core.next(arglist__9086));
return G__9085__delegate.call(this, x, y, more);
});
return G__9085;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9019.call(this);
case  1 :
return _STAR___9020.call(this,x);
case  2 :
return _STAR___9021.call(this,x,y);
default:
return _STAR___9022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9022.cljs$lang$applyTo;
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
var _SLASH___9091 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9092 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9093 = (function() { 
var G__9095__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9095 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9095__delegate.call(this, x, y, more);
};
G__9095.cljs$lang$maxFixedArity = 2;
G__9095.cljs$lang$applyTo = (function (arglist__9100){
var x = cljs.core.first(arglist__9100);
var y = cljs.core.first(cljs.core.next(arglist__9100));
var more = cljs.core.rest(cljs.core.next(arglist__9100));
return G__9095__delegate.call(this, x, y, more);
});
return G__9095;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9091.call(this,x);
case  2 :
return _SLASH___9092.call(this,x,y);
default:
return _SLASH___9093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9093.cljs$lang$applyTo;
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
var _LT___9107 = (function (x){
return true;
});
var _LT___9108 = (function (x,y){
return (x < y);
});
var _LT___9109 = (function() { 
var G__9111__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9112 = y;
var G__9113 = cljs.core.first.call(null,more);
var G__9114 = cljs.core.next.call(null,more);
x = G__9112;
y = G__9113;
more = G__9114;
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
var G__9111 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9111__delegate.call(this, x, y, more);
};
G__9111.cljs$lang$maxFixedArity = 2;
G__9111.cljs$lang$applyTo = (function (arglist__9115){
var x = cljs.core.first(arglist__9115);
var y = cljs.core.first(cljs.core.next(arglist__9115));
var more = cljs.core.rest(cljs.core.next(arglist__9115));
return G__9111__delegate.call(this, x, y, more);
});
return G__9111;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9107.call(this,x);
case  2 :
return _LT___9108.call(this,x,y);
default:
return _LT___9109.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9109.cljs$lang$applyTo;
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
var _LT__EQ___9125 = (function (x){
return true;
});
var _LT__EQ___9126 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9127 = (function() { 
var G__9130__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9131 = y;
var G__9132 = cljs.core.first.call(null,more);
var G__9133 = cljs.core.next.call(null,more);
x = G__9131;
y = G__9132;
more = G__9133;
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
var G__9130 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9130__delegate.call(this, x, y, more);
};
G__9130.cljs$lang$maxFixedArity = 2;
G__9130.cljs$lang$applyTo = (function (arglist__9134){
var x = cljs.core.first(arglist__9134);
var y = cljs.core.first(cljs.core.next(arglist__9134));
var more = cljs.core.rest(cljs.core.next(arglist__9134));
return G__9130__delegate.call(this, x, y, more);
});
return G__9130;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9125.call(this,x);
case  2 :
return _LT__EQ___9126.call(this,x,y);
default:
return _LT__EQ___9127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9127.cljs$lang$applyTo;
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
var _GT___9150 = (function (x){
return true;
});
var _GT___9151 = (function (x,y){
return (x > y);
});
var _GT___9152 = (function() { 
var G__9155__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9156 = y;
var G__9157 = cljs.core.first.call(null,more);
var G__9158 = cljs.core.next.call(null,more);
x = G__9156;
y = G__9157;
more = G__9158;
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
var G__9155 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9155__delegate.call(this, x, y, more);
};
G__9155.cljs$lang$maxFixedArity = 2;
G__9155.cljs$lang$applyTo = (function (arglist__9159){
var x = cljs.core.first(arglist__9159);
var y = cljs.core.first(cljs.core.next(arglist__9159));
var more = cljs.core.rest(cljs.core.next(arglist__9159));
return G__9155__delegate.call(this, x, y, more);
});
return G__9155;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9150.call(this,x);
case  2 :
return _GT___9151.call(this,x,y);
default:
return _GT___9152.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9152.cljs$lang$applyTo;
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
var _GT__EQ___9175 = (function (x){
return true;
});
var _GT__EQ___9176 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9177 = (function() { 
var G__9179__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
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
{return (y >= cljs.core.first.call(null,more));
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
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9175.call(this,x);
case  2 :
return _GT__EQ___9176.call(this,x,y);
default:
return _GT__EQ___9177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9177.cljs$lang$applyTo;
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
var max__9237 = (function (x){
return x;
});
var max__9238 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9239 = (function() { 
var G__9242__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
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
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9237.call(this,x);
case  2 :
return max__9238.call(this,x,y);
default:
return max__9239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9239.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9249 = (function (x){
return x;
});
var min__9250 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9251 = (function() { 
var G__9255__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9255 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9255__delegate.call(this, x, y, more);
};
G__9255.cljs$lang$maxFixedArity = 2;
G__9255.cljs$lang$applyTo = (function (arglist__9259){
var x = cljs.core.first(arglist__9259);
var y = cljs.core.first(cljs.core.next(arglist__9259));
var more = cljs.core.rest(cljs.core.next(arglist__9259));
return G__9255__delegate.call(this, x, y, more);
});
return G__9255;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9249.call(this,x);
case  2 :
return min__9250.call(this,x,y);
default:
return min__9251.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9251.cljs$lang$applyTo;
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
var rem__9268 = (n % d);

return cljs.core.fix.call(null,((n - rem__9268) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9276 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9276));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9277 = (function (){
return Math.random.call(null);
});
var rand__9278 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9277.call(this);
case  1 :
return rand__9278.call(this,n);
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
var _EQ__EQ___9399 = (function (x){
return true;
});
var _EQ__EQ___9400 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9401 = (function() { 
var G__9404__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9412 = y;
var G__9413 = cljs.core.first.call(null,more);
var G__9414 = cljs.core.next.call(null,more);
x = G__9412;
y = G__9413;
more = G__9414;
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
var G__9404 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9404__delegate.call(this, x, y, more);
};
G__9404.cljs$lang$maxFixedArity = 2;
G__9404.cljs$lang$applyTo = (function (arglist__9416){
var x = cljs.core.first(arglist__9416);
var y = cljs.core.first(cljs.core.next(arglist__9416));
var more = cljs.core.rest(cljs.core.next(arglist__9416));
return G__9404__delegate.call(this, x, y, more);
});
return G__9404;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9399.call(this,x);
case  2 :
return _EQ__EQ___9400.call(this,x,y);
default:
return _EQ__EQ___9401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9401.cljs$lang$applyTo;
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
var n__9431 = n;
var xs__9432 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9433 = xs__9432;

if(cljs.core.truth_(and__3546__auto____9433))
{return (n__9431 > 0);
} else
{return and__3546__auto____9433;
}
})()))
{{
var G__9434 = (n__9431 - 1);
var G__9435 = cljs.core.next.call(null,xs__9432);
n__9431 = G__9434;
xs__9432 = G__9435;
continue;
}
} else
{return xs__9432;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9446 = null;
var G__9446__9447 = (function (coll,n){
var temp__3695__auto____9442 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9442))
{var xs__9443 = temp__3695__auto____9442;

return cljs.core.first.call(null,xs__9443);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9446__9448 = (function (coll,n,not_found){
var temp__3695__auto____9444 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9444))
{var xs__9445 = temp__3695__auto____9444;

return cljs.core.first.call(null,xs__9445);
} else
{return not_found;
}
});
G__9446 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9446__9447.call(this,coll,n);
case  3 :
return G__9446__9448.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9446;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9450 = (function (){
return "";
});
var str_STAR___9451 = (function (x){
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
var str_STAR___9452 = (function() { 
var G__9459__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9461 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9463 = cljs.core.next.call(null,more);
sb = G__9461;
more = G__9463;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9459 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9459__delegate.call(this, x, ys);
};
G__9459.cljs$lang$maxFixedArity = 1;
G__9459.cljs$lang$applyTo = (function (arglist__9467){
var x = cljs.core.first(arglist__9467);
var ys = cljs.core.rest(arglist__9467);
return G__9459__delegate.call(this, x, ys);
});
return G__9459;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9450.call(this);
case  1 :
return str_STAR___9451.call(this,x);
default:
return str_STAR___9452.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9452.cljs$lang$applyTo;
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
var str__9469 = (function (){
return "";
});
var str__9470 = (function (x){
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
var str__9471 = (function() { 
var G__9519__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9519 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9519__delegate.call(this, x, ys);
};
G__9519.cljs$lang$maxFixedArity = 1;
G__9519.cljs$lang$applyTo = (function (arglist__9521){
var x = cljs.core.first(arglist__9521);
var ys = cljs.core.rest(arglist__9521);
return G__9519__delegate.call(this, x, ys);
});
return G__9519;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9469.call(this);
case  1 :
return str__9470.call(this,x);
default:
return str__9471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9471.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9527 = (function (s,start){
return s.substring(start);
});
var subs__9528 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9527.call(this,s,start);
case  3 :
return subs__9528.call(this,s,start,end);
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
var symbol__9541 = (function (name){
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
var symbol__9542 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9541.call(this,ns);
case  2 :
return symbol__9542.call(this,ns,name);
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
var keyword__9579 = (function (name){
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
var keyword__9580 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9579.call(this,ns);
case  2 :
return keyword__9580.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9588 = cljs.core.seq.call(null,x);
var ys__9589 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9588)))
{return cljs.core.nil_QMARK_.call(null,ys__9589);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9589)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9588),cljs.core.first.call(null,ys__9589))))
{{
var G__9593 = cljs.core.next.call(null,xs__9588);
var G__9594 = cljs.core.next.call(null,ys__9589);
xs__9588 = G__9593;
ys__9589 = G__9594;
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
return cljs.core.reduce.call(null,(function (p1__9595_SHARP_,p2__9596_SHARP_){
return cljs.core.hash_combine.call(null,p1__9595_SHARP_,cljs.core.hash.call(null,p2__9596_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9688__9691 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9688__9691))
{var G__9693__9695 = cljs.core.first.call(null,G__9688__9691);
var vec__9694__9696 = G__9693__9695;
var key_name__9697 = cljs.core.nth.call(null,vec__9694__9696,0,null);
var f__9698 = cljs.core.nth.call(null,vec__9694__9696,1,null);
var G__9688__9699 = G__9688__9691;

var G__9693__9700 = G__9693__9695;
var G__9688__9701 = G__9688__9699;

while(true){
var vec__9703__9705 = G__9693__9700;
var key_name__9706 = cljs.core.nth.call(null,vec__9703__9705,0,null);
var f__9707 = cljs.core.nth.call(null,vec__9703__9705,1,null);
var G__9688__9708 = G__9688__9701;

var str_name__9709 = cljs.core.name.call(null,key_name__9706);

obj[str_name__9709] = f__9707;
var temp__3698__auto____9713 = cljs.core.next.call(null,G__9688__9708);

if(cljs.core.truth_(temp__3698__auto____9713))
{var G__9688__9714 = temp__3698__auto____9713;

{
var G__9726 = cljs.core.first.call(null,G__9688__9714);
var G__9727 = G__9688__9714;
G__9693__9700 = G__9726;
G__9688__9701 = G__9727;
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
var this__9739 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9740 = this;
return (new cljs.core.List(this__9740.meta,o,coll,(this__9740.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9741 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9742 = this;
return this__9742.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9743 = this;
return this__9743.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9745 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9749 = this;
return this__9749.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9750 = this;
return this__9750.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9751 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9756 = this;
return (new cljs.core.List(meta,this__9756.first,this__9756.rest,this__9756.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9761 = this;
return this__9761.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9766 = this;
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
var this__9792 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9793 = this;
return (new cljs.core.List(this__9793.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9794 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9795 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9796 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9797 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9868 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9869 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9870 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9873 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9875 = this;
return this__9875.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9878 = this;
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
list.cljs$lang$applyTo = (function (arglist__9890){
var items = cljs.core.seq( arglist__9890 );;
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
var this__9891 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9893 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9894 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9895 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9895.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9896 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9897 = this;
return this__9897.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9898 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9898.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9898.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9899 = this;
return this__9899.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9900 = this;
return (new cljs.core.Cons(meta,this__9900.first,this__9900.rest));
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
var G__9921 = null;
var G__9921__9923 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9921__9924 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9921 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9921__9923.call(this,string,f);
case  3 :
return G__9921__9924.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9921;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9928 = null;
var G__9928__9930 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9928__9931 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9928 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9928__9930.call(this,string,k);
case  3 :
return G__9928__9931.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9928;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9935 = null;
var G__9935__9936 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9935__9937 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9935 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9935__9936.call(this,string,n);
case  3 :
return G__9935__9937.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9935;
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
var G__9970 = null;
var G__9970__9971 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9970__9972 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9970 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9970__9971.call(this,this$,coll);
case  3 :
return G__9970__9972.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9970;
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
var x__9978 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9978;
} else
{lazy_seq.x = x__9978.call(null);
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
var this__9983 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9984 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9985 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9987 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9987.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9988 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9989 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9990 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9991 = this;
return this__9991.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9992 = this;
return (new cljs.core.LazySeq(meta,this__9992.realized,this__9992.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10004 = cljs.core.array.call(null);

var s__10006 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10006)))
{ary__10004.push(cljs.core.first.call(null,s__10006));
{
var G__10007 = cljs.core.next.call(null,s__10006);
s__10006 = G__10007;
continue;
}
} else
{return ary__10004;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10008 = s;
var i__10009 = n;
var sum__10010 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10045 = (i__10009 > 0);

if(cljs.core.truth_(and__3546__auto____10045))
{return cljs.core.seq.call(null,s__10008);
} else
{return and__3546__auto____10045;
}
})()))
{{
var G__10049 = cljs.core.next.call(null,s__10008);
var G__10050 = (i__10009 - 1);
var G__10051 = (sum__10010 + 1);
s__10008 = G__10049;
i__10009 = G__10050;
sum__10010 = G__10051;
continue;
}
} else
{return sum__10010;
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
var concat__10070 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10071 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10072 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10056 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10056))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10056),concat.call(null,cljs.core.rest.call(null,s__10056),y));
} else
{return y;
}
})));
});
var concat__10073 = (function() { 
var G__10079__delegate = function (x,y,zs){
var cat__10067 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10062 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10062))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10062),cat.call(null,cljs.core.rest.call(null,xys__10062),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10067.call(null,concat.call(null,x,y),zs);
};
var G__10079 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10079__delegate.call(this, x, y, zs);
};
G__10079.cljs$lang$maxFixedArity = 2;
G__10079.cljs$lang$applyTo = (function (arglist__10080){
var x = cljs.core.first(arglist__10080);
var y = cljs.core.first(cljs.core.next(arglist__10080));
var zs = cljs.core.rest(cljs.core.next(arglist__10080));
return G__10079__delegate.call(this, x, y, zs);
});
return G__10079;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10070.call(this);
case  1 :
return concat__10071.call(this,x);
case  2 :
return concat__10072.call(this,x,y);
default:
return concat__10073.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10073.cljs$lang$applyTo;
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
var list_STAR___10106 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10107 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10108 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10109 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10110 = (function() { 
var G__10112__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10112 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10112__delegate.call(this, a, b, c, d, more);
};
G__10112.cljs$lang$maxFixedArity = 4;
G__10112.cljs$lang$applyTo = (function (arglist__10113){
var a = cljs.core.first(arglist__10113);
var b = cljs.core.first(cljs.core.next(arglist__10113));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10113)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10113))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10113))));
return G__10112__delegate.call(this, a, b, c, d, more);
});
return G__10112;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10106.call(this,a);
case  2 :
return list_STAR___10107.call(this,a,b);
case  3 :
return list_STAR___10108.call(this,a,b,c);
case  4 :
return list_STAR___10109.call(this,a,b,c,d);
default:
return list_STAR___10110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10110.cljs$lang$applyTo;
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
var apply__10256 = (function (f,args){
var fixed_arity__10154 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10154 + 1)) <= fixed_arity__10154)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10257 = (function (f,x,args){
var arglist__10155 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10156 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10155,fixed_arity__10156) <= fixed_arity__10156)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10155));
} else
{return f.cljs$lang$applyTo(arglist__10155);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10155));
}
});
var apply__10258 = (function (f,x,y,args){
var arglist__10242 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10243 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10242,fixed_arity__10243) <= fixed_arity__10243)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10242));
} else
{return f.cljs$lang$applyTo(arglist__10242);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10242));
}
});
var apply__10259 = (function (f,x,y,z,args){
var arglist__10244 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10245 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10244,fixed_arity__10245) <= fixed_arity__10245)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10244));
} else
{return f.cljs$lang$applyTo(arglist__10244);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10244));
}
});
var apply__10260 = (function() { 
var G__10267__delegate = function (f,a,b,c,d,args){
var arglist__10252 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10253 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10252,fixed_arity__10253) <= fixed_arity__10253)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10252));
} else
{return f.cljs$lang$applyTo(arglist__10252);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10252));
}
};
var G__10267 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10267__delegate.call(this, f, a, b, c, d, args);
};
G__10267.cljs$lang$maxFixedArity = 5;
G__10267.cljs$lang$applyTo = (function (arglist__10268){
var f = cljs.core.first(arglist__10268);
var a = cljs.core.first(cljs.core.next(arglist__10268));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10268)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10268))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10268)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10268)))));
return G__10267__delegate.call(this, f, a, b, c, d, args);
});
return G__10267;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10256.call(this,f,a);
case  3 :
return apply__10257.call(this,f,a,b);
case  4 :
return apply__10258.call(this,f,a,b,c);
case  5 :
return apply__10259.call(this,f,a,b,c,d);
default:
return apply__10260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10260.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10274){
var obj = cljs.core.first(arglist__10274);
var f = cljs.core.first(cljs.core.next(arglist__10274));
var args = cljs.core.rest(cljs.core.next(arglist__10274));
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
var not_EQ___10283 = (function (x){
return false;
});
var not_EQ___10284 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10285 = (function() { 
var G__10288__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10288 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10288__delegate.call(this, x, y, more);
};
G__10288.cljs$lang$maxFixedArity = 2;
G__10288.cljs$lang$applyTo = (function (arglist__10290){
var x = cljs.core.first(arglist__10290);
var y = cljs.core.first(cljs.core.next(arglist__10290));
var more = cljs.core.rest(cljs.core.next(arglist__10290));
return G__10288__delegate.call(this, x, y, more);
});
return G__10288;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10283.call(this,x);
case  2 :
return not_EQ___10284.call(this,x,y);
default:
return not_EQ___10285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10285.cljs$lang$applyTo;
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
var G__10293 = pred;
var G__10294 = cljs.core.next.call(null,coll);
pred = G__10293;
coll = G__10294;
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
{var or__3548__auto____10295 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10295))
{return or__3548__auto____10295;
} else
{{
var G__10300 = pred;
var G__10301 = cljs.core.next.call(null,coll);
pred = G__10300;
coll = G__10301;
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
var G__10362 = null;
var G__10362__10364 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10362__10365 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10362__10366 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10362__10367 = (function() { 
var G__10395__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10395 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10395__delegate.call(this, x, y, zs);
};
G__10395.cljs$lang$maxFixedArity = 2;
G__10395.cljs$lang$applyTo = (function (arglist__10398){
var x = cljs.core.first(arglist__10398);
var y = cljs.core.first(cljs.core.next(arglist__10398));
var zs = cljs.core.rest(cljs.core.next(arglist__10398));
return G__10395__delegate.call(this, x, y, zs);
});
return G__10395;
})()
;
G__10362 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10362__10364.call(this);
case  1 :
return G__10362__10365.call(this,x);
case  2 :
return G__10362__10366.call(this,x,y);
default:
return G__10362__10367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10362.cljs$lang$maxFixedArity = 2;
G__10362.cljs$lang$applyTo = G__10362__10367.cljs$lang$applyTo;
return G__10362;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10401__delegate = function (args){
return x;
};
var G__10401 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10401__delegate.call(this, args);
};
G__10401.cljs$lang$maxFixedArity = 0;
G__10401.cljs$lang$applyTo = (function (arglist__10402){
var args = cljs.core.seq( arglist__10402 );;
return G__10401__delegate.call(this, args);
});
return G__10401;
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
var comp__10413 = (function (){
return cljs.core.identity;
});
var comp__10414 = (function (f){
return f;
});
var comp__10415 = (function (f,g){
return (function() {
var G__10420 = null;
var G__10420__10421 = (function (){
return f.call(null,g.call(null));
});
var G__10420__10422 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10420__10423 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10420__10424 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10420__10425 = (function() { 
var G__10427__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10427 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10427__delegate.call(this, x, y, z, args);
};
G__10427.cljs$lang$maxFixedArity = 3;
G__10427.cljs$lang$applyTo = (function (arglist__10429){
var x = cljs.core.first(arglist__10429);
var y = cljs.core.first(cljs.core.next(arglist__10429));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10429)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10429)));
return G__10427__delegate.call(this, x, y, z, args);
});
return G__10427;
})()
;
G__10420 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10420__10421.call(this);
case  1 :
return G__10420__10422.call(this,x);
case  2 :
return G__10420__10423.call(this,x,y);
case  3 :
return G__10420__10424.call(this,x,y,z);
default:
return G__10420__10425.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10420.cljs$lang$maxFixedArity = 3;
G__10420.cljs$lang$applyTo = G__10420__10425.cljs$lang$applyTo;
return G__10420;
})()
});
var comp__10416 = (function (f,g,h){
return (function() {
var G__10447 = null;
var G__10447__10475 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10447__10476 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10447__10477 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10447__10478 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10447__10479 = (function() { 
var G__10485__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10485 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10485__delegate.call(this, x, y, z, args);
};
G__10485.cljs$lang$maxFixedArity = 3;
G__10485.cljs$lang$applyTo = (function (arglist__10487){
var x = cljs.core.first(arglist__10487);
var y = cljs.core.first(cljs.core.next(arglist__10487));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10487)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10487)));
return G__10485__delegate.call(this, x, y, z, args);
});
return G__10485;
})()
;
G__10447 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10447__10475.call(this);
case  1 :
return G__10447__10476.call(this,x);
case  2 :
return G__10447__10477.call(this,x,y);
case  3 :
return G__10447__10478.call(this,x,y,z);
default:
return G__10447__10479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10447.cljs$lang$maxFixedArity = 3;
G__10447.cljs$lang$applyTo = G__10447__10479.cljs$lang$applyTo;
return G__10447;
})()
});
var comp__10417 = (function() { 
var G__10489__delegate = function (f1,f2,f3,fs){
var fs__10403 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10490__delegate = function (args){
var ret__10410 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10403),args);
var fs__10411 = cljs.core.next.call(null,fs__10403);

while(true){
if(cljs.core.truth_(fs__10411))
{{
var G__10491 = cljs.core.first.call(null,fs__10411).call(null,ret__10410);
var G__10492 = cljs.core.next.call(null,fs__10411);
ret__10410 = G__10491;
fs__10411 = G__10492;
continue;
}
} else
{return ret__10410;
}
break;
}
};
var G__10490 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10490__delegate.call(this, args);
};
G__10490.cljs$lang$maxFixedArity = 0;
G__10490.cljs$lang$applyTo = (function (arglist__10493){
var args = cljs.core.seq( arglist__10493 );;
return G__10490__delegate.call(this, args);
});
return G__10490;
})()
;
};
var G__10489 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10489__delegate.call(this, f1, f2, f3, fs);
};
G__10489.cljs$lang$maxFixedArity = 3;
G__10489.cljs$lang$applyTo = (function (arglist__10495){
var f1 = cljs.core.first(arglist__10495);
var f2 = cljs.core.first(cljs.core.next(arglist__10495));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10495)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10495)));
return G__10489__delegate.call(this, f1, f2, f3, fs);
});
return G__10489;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10413.call(this);
case  1 :
return comp__10414.call(this,f1);
case  2 :
return comp__10415.call(this,f1,f2);
case  3 :
return comp__10416.call(this,f1,f2,f3);
default:
return comp__10417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10417.cljs$lang$applyTo;
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
var partial__10514 = (function (f,arg1){
return (function() { 
var G__10520__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10520 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10520__delegate.call(this, args);
};
G__10520.cljs$lang$maxFixedArity = 0;
G__10520.cljs$lang$applyTo = (function (arglist__10522){
var args = cljs.core.seq( arglist__10522 );;
return G__10520__delegate.call(this, args);
});
return G__10520;
})()
;
});
var partial__10515 = (function (f,arg1,arg2){
return (function() { 
var G__10529__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10529 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10529__delegate.call(this, args);
};
G__10529.cljs$lang$maxFixedArity = 0;
G__10529.cljs$lang$applyTo = (function (arglist__10530){
var args = cljs.core.seq( arglist__10530 );;
return G__10529__delegate.call(this, args);
});
return G__10529;
})()
;
});
var partial__10516 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10531__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10531 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10531__delegate.call(this, args);
};
G__10531.cljs$lang$maxFixedArity = 0;
G__10531.cljs$lang$applyTo = (function (arglist__10534){
var args = cljs.core.seq( arglist__10534 );;
return G__10531__delegate.call(this, args);
});
return G__10531;
})()
;
});
var partial__10517 = (function() { 
var G__10535__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10537__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10537 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10537__delegate.call(this, args);
};
G__10537.cljs$lang$maxFixedArity = 0;
G__10537.cljs$lang$applyTo = (function (arglist__10538){
var args = cljs.core.seq( arglist__10538 );;
return G__10537__delegate.call(this, args);
});
return G__10537;
})()
;
};
var G__10535 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10535__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10535.cljs$lang$maxFixedArity = 4;
G__10535.cljs$lang$applyTo = (function (arglist__10540){
var f = cljs.core.first(arglist__10540);
var arg1 = cljs.core.first(cljs.core.next(arglist__10540));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10540)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10540))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10540))));
return G__10535__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10535;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10514.call(this,f,arg1);
case  3 :
return partial__10515.call(this,f,arg1,arg2);
case  4 :
return partial__10516.call(this,f,arg1,arg2,arg3);
default:
return partial__10517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10517.cljs$lang$applyTo;
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
var fnil__10576 = (function (f,x){
return (function() {
var G__10580 = null;
var G__10580__10595 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10580__10596 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10580__10597 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10580__10598 = (function() { 
var G__10605__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10605 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10605__delegate.call(this, a, b, c, ds);
};
G__10605.cljs$lang$maxFixedArity = 3;
G__10605.cljs$lang$applyTo = (function (arglist__10606){
var a = cljs.core.first(arglist__10606);
var b = cljs.core.first(cljs.core.next(arglist__10606));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10606)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10606)));
return G__10605__delegate.call(this, a, b, c, ds);
});
return G__10605;
})()
;
G__10580 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10580__10595.call(this,a);
case  2 :
return G__10580__10596.call(this,a,b);
case  3 :
return G__10580__10597.call(this,a,b,c);
default:
return G__10580__10598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10580.cljs$lang$maxFixedArity = 3;
G__10580.cljs$lang$applyTo = G__10580__10598.cljs$lang$applyTo;
return G__10580;
})()
});
var fnil__10577 = (function (f,x,y){
return (function() {
var G__10607 = null;
var G__10607__10608 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10607__10609 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10607__10610 = (function() { 
var G__10612__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10612 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10612__delegate.call(this, a, b, c, ds);
};
G__10612.cljs$lang$maxFixedArity = 3;
G__10612.cljs$lang$applyTo = (function (arglist__10614){
var a = cljs.core.first(arglist__10614);
var b = cljs.core.first(cljs.core.next(arglist__10614));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10614)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10614)));
return G__10612__delegate.call(this, a, b, c, ds);
});
return G__10612;
})()
;
G__10607 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10607__10608.call(this,a,b);
case  3 :
return G__10607__10609.call(this,a,b,c);
default:
return G__10607__10610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10607.cljs$lang$maxFixedArity = 3;
G__10607.cljs$lang$applyTo = G__10607__10610.cljs$lang$applyTo;
return G__10607;
})()
});
var fnil__10578 = (function (f,x,y,z){
return (function() {
var G__10616 = null;
var G__10616__10617 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10616__10618 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10616__10619 = (function() { 
var G__10621__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10621 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10621__delegate.call(this, a, b, c, ds);
};
G__10621.cljs$lang$maxFixedArity = 3;
G__10621.cljs$lang$applyTo = (function (arglist__10626){
var a = cljs.core.first(arglist__10626);
var b = cljs.core.first(cljs.core.next(arglist__10626));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10626)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10626)));
return G__10621__delegate.call(this, a, b, c, ds);
});
return G__10621;
})()
;
G__10616 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10616__10617.call(this,a,b);
case  3 :
return G__10616__10618.call(this,a,b,c);
default:
return G__10616__10619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10616.cljs$lang$maxFixedArity = 3;
G__10616.cljs$lang$applyTo = G__10616__10619.cljs$lang$applyTo;
return G__10616;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10576.call(this,f,x);
case  3 :
return fnil__10577.call(this,f,x,y);
case  4 :
return fnil__10578.call(this,f,x,y,z);
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
var mapi__10642 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10635 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10635))
{var s__10636 = temp__3698__auto____10635;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10636)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10636)));
} else
{return null;
}
})));
});

return mapi__10642.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10653 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10653))
{var s__10654 = temp__3698__auto____10653;

var x__10656 = f.call(null,cljs.core.first.call(null,s__10654));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10656)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10654));
} else
{return cljs.core.cons.call(null,x__10656,keep.call(null,f,cljs.core.rest.call(null,s__10654)));
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
var keepi__10784 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10681 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10681))
{var s__10682 = temp__3698__auto____10681;

var x__10683 = f.call(null,idx,cljs.core.first.call(null,s__10682));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10683)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10682));
} else
{return cljs.core.cons.call(null,x__10683,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10682)));
}
} else
{return null;
}
})));
});

return keepi__10784.call(null,0,coll);
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
var every_pred__10899 = (function (p){
return (function() {
var ep1 = null;
var ep1__10908 = (function (){
return true;
});
var ep1__10909 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10910 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10796 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10796))
{return p.call(null,y);
} else
{return and__3546__auto____10796;
}
})());
});
var ep1__10911 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10797 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10797))
{var and__3546__auto____10798 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10798))
{return p.call(null,z);
} else
{return and__3546__auto____10798;
}
} else
{return and__3546__auto____10797;
}
})());
});
var ep1__10912 = (function() { 
var G__10917__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10799 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10799))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10799;
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
G__10917.cljs$lang$applyTo = (function (arglist__10919){
var x = cljs.core.first(arglist__10919);
var y = cljs.core.first(cljs.core.next(arglist__10919));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10919)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10919)));
return G__10917__delegate.call(this, x, y, z, args);
});
return G__10917;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10908.call(this);
case  1 :
return ep1__10909.call(this,x);
case  2 :
return ep1__10910.call(this,x,y);
case  3 :
return ep1__10911.call(this,x,y,z);
default:
return ep1__10912.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10912.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10900 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10922 = (function (){
return true;
});
var ep2__10923 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10800 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10800))
{return p2.call(null,x);
} else
{return and__3546__auto____10800;
}
})());
});
var ep2__10924 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10803 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10803))
{var and__3546__auto____10807 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10807))
{var and__3546__auto____10809 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10809))
{return p2.call(null,y);
} else
{return and__3546__auto____10809;
}
} else
{return and__3546__auto____10807;
}
} else
{return and__3546__auto____10803;
}
})());
});
var ep2__10925 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10810 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10810))
{var and__3546__auto____10815 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10815))
{var and__3546__auto____10818 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10818))
{var and__3546__auto____10825 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10825))
{var and__3546__auto____10827 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10827))
{return p2.call(null,z);
} else
{return and__3546__auto____10827;
}
} else
{return and__3546__auto____10825;
}
} else
{return and__3546__auto____10818;
}
} else
{return and__3546__auto____10815;
}
} else
{return and__3546__auto____10810;
}
})());
});
var ep2__11008 = (function() { 
var G__11017__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10829 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10829))
{return cljs.core.every_QMARK_.call(null,(function (p1__10666_SHARP_){
var and__3546__auto____10831 = p1.call(null,p1__10666_SHARP_);

if(cljs.core.truth_(and__3546__auto____10831))
{return p2.call(null,p1__10666_SHARP_);
} else
{return and__3546__auto____10831;
}
}),args);
} else
{return and__3546__auto____10829;
}
})());
};
var G__11017 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11017__delegate.call(this, x, y, z, args);
};
G__11017.cljs$lang$maxFixedArity = 3;
G__11017.cljs$lang$applyTo = (function (arglist__11020){
var x = cljs.core.first(arglist__11020);
var y = cljs.core.first(cljs.core.next(arglist__11020));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11020)));
return G__11017__delegate.call(this, x, y, z, args);
});
return G__11017;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10922.call(this);
case  1 :
return ep2__10923.call(this,x);
case  2 :
return ep2__10924.call(this,x,y);
case  3 :
return ep2__10925.call(this,x,y,z);
default:
return ep2__11008.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11008.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10901 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11022 = (function (){
return true;
});
var ep3__11023 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10845 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10845))
{var and__3546__auto____10849 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10849))
{return p3.call(null,x);
} else
{return and__3546__auto____10849;
}
} else
{return and__3546__auto____10845;
}
})());
});
var ep3__11024 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10850 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10850))
{var and__3546__auto____10851 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10851))
{var and__3546__auto____10853 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10853))
{var and__3546__auto____10854 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10854))
{var and__3546__auto____10856 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10856))
{return p3.call(null,y);
} else
{return and__3546__auto____10856;
}
} else
{return and__3546__auto____10854;
}
} else
{return and__3546__auto____10853;
}
} else
{return and__3546__auto____10851;
}
} else
{return and__3546__auto____10850;
}
})());
});
var ep3__11025 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10858 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10858))
{var and__3546__auto____10863 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10863))
{var and__3546__auto____10864 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10864))
{var and__3546__auto____10866 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10866))
{var and__3546__auto____10867 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10867))
{var and__3546__auto____10869 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10869))
{var and__3546__auto____10871 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10871))
{var and__3546__auto____10875 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10875))
{return p3.call(null,z);
} else
{return and__3546__auto____10875;
}
} else
{return and__3546__auto____10871;
}
} else
{return and__3546__auto____10869;
}
} else
{return and__3546__auto____10867;
}
} else
{return and__3546__auto____10866;
}
} else
{return and__3546__auto____10864;
}
} else
{return and__3546__auto____10863;
}
} else
{return and__3546__auto____10858;
}
})());
});
var ep3__11026 = (function() { 
var G__11042__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10878 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10878))
{return cljs.core.every_QMARK_.call(null,(function (p1__10672_SHARP_){
var and__3546__auto____10879 = p1.call(null,p1__10672_SHARP_);

if(cljs.core.truth_(and__3546__auto____10879))
{var and__3546__auto____10880 = p2.call(null,p1__10672_SHARP_);

if(cljs.core.truth_(and__3546__auto____10880))
{return p3.call(null,p1__10672_SHARP_);
} else
{return and__3546__auto____10880;
}
} else
{return and__3546__auto____10879;
}
}),args);
} else
{return and__3546__auto____10878;
}
})());
};
var G__11042 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11042__delegate.call(this, x, y, z, args);
};
G__11042.cljs$lang$maxFixedArity = 3;
G__11042.cljs$lang$applyTo = (function (arglist__11043){
var x = cljs.core.first(arglist__11043);
var y = cljs.core.first(cljs.core.next(arglist__11043));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11043)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11043)));
return G__11042__delegate.call(this, x, y, z, args);
});
return G__11042;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11022.call(this);
case  1 :
return ep3__11023.call(this,x);
case  2 :
return ep3__11024.call(this,x,y);
case  3 :
return ep3__11025.call(this,x,y,z);
default:
return ep3__11026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11026.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10902 = (function() { 
var G__11045__delegate = function (p1,p2,p3,ps){
var ps__10882 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11047 = (function (){
return true;
});
var epn__11048 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10675_SHARP_){
return p1__10675_SHARP_.call(null,x);
}),ps__10882);
});
var epn__11049 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10677_SHARP_){
var and__3546__auto____10888 = p1__10677_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10888))
{return p1__10677_SHARP_.call(null,y);
} else
{return and__3546__auto____10888;
}
}),ps__10882);
});
var epn__11050 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10678_SHARP_){
var and__3546__auto____10890 = p1__10678_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10890))
{var and__3546__auto____10891 = p1__10678_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10891))
{return p1__10678_SHARP_.call(null,z);
} else
{return and__3546__auto____10891;
}
} else
{return and__3546__auto____10890;
}
}),ps__10882);
});
var epn__11051 = (function() { 
var G__11060__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10893 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10893))
{return cljs.core.every_QMARK_.call(null,(function (p1__10680_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10680_SHARP_,args);
}),ps__10882);
} else
{return and__3546__auto____10893;
}
})());
};
var G__11060 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11060__delegate.call(this, x, y, z, args);
};
G__11060.cljs$lang$maxFixedArity = 3;
G__11060.cljs$lang$applyTo = (function (arglist__11063){
var x = cljs.core.first(arglist__11063);
var y = cljs.core.first(cljs.core.next(arglist__11063));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11063)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11063)));
return G__11060__delegate.call(this, x, y, z, args);
});
return G__11060;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11047.call(this);
case  1 :
return epn__11048.call(this,x);
case  2 :
return epn__11049.call(this,x,y);
case  3 :
return epn__11050.call(this,x,y,z);
default:
return epn__11051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11051.cljs$lang$applyTo;
return epn;
})()
};
var G__11045 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11045__delegate.call(this, p1, p2, p3, ps);
};
G__11045.cljs$lang$maxFixedArity = 3;
G__11045.cljs$lang$applyTo = (function (arglist__11065){
var p1 = cljs.core.first(arglist__11065);
var p2 = cljs.core.first(cljs.core.next(arglist__11065));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11065)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11065)));
return G__11045__delegate.call(this, p1, p2, p3, ps);
});
return G__11045;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10899.call(this,p1);
case  2 :
return every_pred__10900.call(this,p1,p2);
case  3 :
return every_pred__10901.call(this,p1,p2,p3);
default:
return every_pred__10902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10902.cljs$lang$applyTo;
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
var some_fn__11492 = (function (p){
return (function() {
var sp1 = null;
var sp1__11498 = (function (){
return null;
});
var sp1__11499 = (function (x){
return p.call(null,x);
});
var sp1__11500 = (function (x,y){
var or__3548__auto____11075 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11075))
{return or__3548__auto____11075;
} else
{return p.call(null,y);
}
});
var sp1__11584 = (function (x,y,z){
var or__3548__auto____11078 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11078))
{return or__3548__auto____11078;
} else
{var or__3548__auto____11079 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11079))
{return or__3548__auto____11079;
} else
{return p.call(null,z);
}
}
});
var sp1__11585 = (function() { 
var G__11591__delegate = function (x,y,z,args){
var or__3548__auto____11080 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11080))
{return or__3548__auto____11080;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11591 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11591__delegate.call(this, x, y, z, args);
};
G__11591.cljs$lang$maxFixedArity = 3;
G__11591.cljs$lang$applyTo = (function (arglist__11595){
var x = cljs.core.first(arglist__11595);
var y = cljs.core.first(cljs.core.next(arglist__11595));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11595)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11595)));
return G__11591__delegate.call(this, x, y, z, args);
});
return G__11591;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11498.call(this);
case  1 :
return sp1__11499.call(this,x);
case  2 :
return sp1__11500.call(this,x,y);
case  3 :
return sp1__11584.call(this,x,y,z);
default:
return sp1__11585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11585.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11493 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11605 = (function (){
return null;
});
var sp2__11606 = (function (x){
var or__3548__auto____11081 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11081))
{return or__3548__auto____11081;
} else
{return p2.call(null,x);
}
});
var sp2__11607 = (function (x,y){
var or__3548__auto____11083 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11083))
{return or__3548__auto____11083;
} else
{var or__3548__auto____11084 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11084))
{return or__3548__auto____11084;
} else
{var or__3548__auto____11085 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11085))
{return or__3548__auto____11085;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11608 = (function (x,y,z){
var or__3548__auto____11087 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11087))
{return or__3548__auto____11087;
} else
{var or__3548__auto____11088 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11088))
{return or__3548__auto____11088;
} else
{var or__3548__auto____11089 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11089))
{return or__3548__auto____11089;
} else
{var or__3548__auto____11090 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11090))
{return or__3548__auto____11090;
} else
{var or__3548__auto____11092 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11092))
{return or__3548__auto____11092;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11609 = (function() { 
var G__11617__delegate = function (x,y,z,args){
var or__3548__auto____11093 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11093))
{return or__3548__auto____11093;
} else
{return cljs.core.some.call(null,(function (p1__10788_SHARP_){
var or__3548__auto____11097 = p1.call(null,p1__10788_SHARP_);

if(cljs.core.truth_(or__3548__auto____11097))
{return or__3548__auto____11097;
} else
{return p2.call(null,p1__10788_SHARP_);
}
}),args);
}
};
var G__11617 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11617__delegate.call(this, x, y, z, args);
};
G__11617.cljs$lang$maxFixedArity = 3;
G__11617.cljs$lang$applyTo = (function (arglist__11618){
var x = cljs.core.first(arglist__11618);
var y = cljs.core.first(cljs.core.next(arglist__11618));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11618)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11618)));
return G__11617__delegate.call(this, x, y, z, args);
});
return G__11617;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11605.call(this);
case  1 :
return sp2__11606.call(this,x);
case  2 :
return sp2__11607.call(this,x,y);
case  3 :
return sp2__11608.call(this,x,y,z);
default:
return sp2__11609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11609.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11494 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11620 = (function (){
return null;
});
var sp3__11621 = (function (x){
var or__3548__auto____11102 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11102))
{return or__3548__auto____11102;
} else
{var or__3548__auto____11103 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11103))
{return or__3548__auto____11103;
} else
{return p3.call(null,x);
}
}
});
var sp3__11622 = (function (x,y){
var or__3548__auto____11320 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11320))
{return or__3548__auto____11320;
} else
{var or__3548__auto____11321 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11321))
{return or__3548__auto____11321;
} else
{var or__3548__auto____11322 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11322))
{return or__3548__auto____11322;
} else
{var or__3548__auto____11323 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11323))
{return or__3548__auto____11323;
} else
{var or__3548__auto____11324 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11324))
{return or__3548__auto____11324;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11623 = (function (x,y,z){
var or__3548__auto____11325 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11326 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{var or__3548__auto____11328 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11328))
{return or__3548__auto____11328;
} else
{var or__3548__auto____11329 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11329))
{return or__3548__auto____11329;
} else
{var or__3548__auto____11330 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
} else
{var or__3548__auto____11331 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11331))
{return or__3548__auto____11331;
} else
{var or__3548__auto____11333 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11333))
{return or__3548__auto____11333;
} else
{var or__3548__auto____11334 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11334))
{return or__3548__auto____11334;
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
var sp3__11624 = (function() { 
var G__11639__delegate = function (x,y,z,args){
var or__3548__auto____11339 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11339))
{return or__3548__auto____11339;
} else
{return cljs.core.some.call(null,(function (p1__10790_SHARP_){
var or__3548__auto____11342 = p1.call(null,p1__10790_SHARP_);

if(cljs.core.truth_(or__3548__auto____11342))
{return or__3548__auto____11342;
} else
{var or__3548__auto____11343 = p2.call(null,p1__10790_SHARP_);

if(cljs.core.truth_(or__3548__auto____11343))
{return or__3548__auto____11343;
} else
{return p3.call(null,p1__10790_SHARP_);
}
}
}),args);
}
};
var G__11639 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11639__delegate.call(this, x, y, z, args);
};
G__11639.cljs$lang$maxFixedArity = 3;
G__11639.cljs$lang$applyTo = (function (arglist__11645){
var x = cljs.core.first(arglist__11645);
var y = cljs.core.first(cljs.core.next(arglist__11645));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11645)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11645)));
return G__11639__delegate.call(this, x, y, z, args);
});
return G__11639;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11620.call(this);
case  1 :
return sp3__11621.call(this,x);
case  2 :
return sp3__11622.call(this,x,y);
case  3 :
return sp3__11623.call(this,x,y,z);
default:
return sp3__11624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11624.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11495 = (function() { 
var G__11650__delegate = function (p1,p2,p3,ps){
var ps__11390 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11653 = (function (){
return null;
});
var spn__11654 = (function (x){
return cljs.core.some.call(null,(function (p1__10791_SHARP_){
return p1__10791_SHARP_.call(null,x);
}),ps__11390);
});
var spn__11655 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10792_SHARP_){
var or__3548__auto____11393 = p1__10792_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11393))
{return or__3548__auto____11393;
} else
{return p1__10792_SHARP_.call(null,y);
}
}),ps__11390);
});
var spn__11656 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10793_SHARP_){
var or__3548__auto____11456 = p1__10793_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11456))
{return or__3548__auto____11456;
} else
{var or__3548__auto____11457 = p1__10793_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11457))
{return or__3548__auto____11457;
} else
{return p1__10793_SHARP_.call(null,z);
}
}
}),ps__11390);
});
var spn__11657 = (function() { 
var G__11663__delegate = function (x,y,z,args){
var or__3548__auto____11475 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11475))
{return or__3548__auto____11475;
} else
{return cljs.core.some.call(null,(function (p1__10795_SHARP_){
return cljs.core.some.call(null,p1__10795_SHARP_,args);
}),ps__11390);
}
};
var G__11663 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11663__delegate.call(this, x, y, z, args);
};
G__11663.cljs$lang$maxFixedArity = 3;
G__11663.cljs$lang$applyTo = (function (arglist__11664){
var x = cljs.core.first(arglist__11664);
var y = cljs.core.first(cljs.core.next(arglist__11664));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11664)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11664)));
return G__11663__delegate.call(this, x, y, z, args);
});
return G__11663;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11653.call(this);
case  1 :
return spn__11654.call(this,x);
case  2 :
return spn__11655.call(this,x,y);
case  3 :
return spn__11656.call(this,x,y,z);
default:
return spn__11657.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11657.cljs$lang$applyTo;
return spn;
})()
};
var G__11650 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11650__delegate.call(this, p1, p2, p3, ps);
};
G__11650.cljs$lang$maxFixedArity = 3;
G__11650.cljs$lang$applyTo = (function (arglist__11670){
var p1 = cljs.core.first(arglist__11670);
var p2 = cljs.core.first(cljs.core.next(arglist__11670));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11670)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11670)));
return G__11650__delegate.call(this, p1, p2, p3, ps);
});
return G__11650;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11492.call(this,p1);
case  2 :
return some_fn__11493.call(this,p1,p2);
case  3 :
return some_fn__11494.call(this,p1,p2,p3);
default:
return some_fn__11495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11495.cljs$lang$applyTo;
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
var map__11703 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11671 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11671))
{var s__11672 = temp__3698__auto____11671;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11672)),map.call(null,f,cljs.core.rest.call(null,s__11672)));
} else
{return null;
}
})));
});
var map__11704 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11674 = cljs.core.seq.call(null,c1);
var s2__11675 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11676 = s1__11674;

if(cljs.core.truth_(and__3546__auto____11676))
{return s2__11675;
} else
{return and__3546__auto____11676;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11674),cljs.core.first.call(null,s2__11675)),map.call(null,f,cljs.core.rest.call(null,s1__11674),cljs.core.rest.call(null,s2__11675)));
} else
{return null;
}
})));
});
var map__11705 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11682 = cljs.core.seq.call(null,c1);
var s2__11685 = cljs.core.seq.call(null,c2);
var s3__11686 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11688 = s1__11682;

if(cljs.core.truth_(and__3546__auto____11688))
{var and__3546__auto____11689 = s2__11685;

if(cljs.core.truth_(and__3546__auto____11689))
{return s3__11686;
} else
{return and__3546__auto____11689;
}
} else
{return and__3546__auto____11688;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11682),cljs.core.first.call(null,s2__11685),cljs.core.first.call(null,s3__11686)),map.call(null,f,cljs.core.rest.call(null,s1__11682),cljs.core.rest.call(null,s2__11685),cljs.core.rest.call(null,s3__11686)));
} else
{return null;
}
})));
});
var map__11706 = (function() { 
var G__11729__delegate = function (f,c1,c2,c3,colls){
var step__11695 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11693 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11693)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11693),step.call(null,map.call(null,cljs.core.rest,ss__11693)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11068_SHARP_){
return cljs.core.apply.call(null,f,p1__11068_SHARP_);
}),step__11695.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11729 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11729__delegate.call(this, f, c1, c2, c3, colls);
};
G__11729.cljs$lang$maxFixedArity = 4;
G__11729.cljs$lang$applyTo = (function (arglist__11738){
var f = cljs.core.first(arglist__11738);
var c1 = cljs.core.first(cljs.core.next(arglist__11738));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11738)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11738))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11738))));
return G__11729__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11729;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11703.call(this,f,c1);
case  3 :
return map__11704.call(this,f,c1,c2);
case  4 :
return map__11705.call(this,f,c1,c2,c3);
default:
return map__11706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11706.cljs$lang$applyTo;
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
var step__11763 = (function (n,coll){
while(true){
var s__11759 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11761 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11761))
{return s__11759;
} else
{return and__3546__auto____11761;
}
})()))
{{
var G__11770 = (n - 1);
var G__11771 = cljs.core.rest.call(null,s__11759);
n = G__11770;
coll = G__11771;
continue;
}
} else
{return s__11759;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11763.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11776 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11777 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11776.call(this,n);
case  2 :
return drop_last__11777.call(this,n,s);
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
var s__11787 = cljs.core.seq.call(null,coll);
var lead__11788 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11788))
{{
var G__11790 = cljs.core.next.call(null,s__11787);
var G__11791 = cljs.core.next.call(null,lead__11788);
s__11787 = G__11790;
lead__11788 = G__11791;
continue;
}
} else
{return s__11787;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11803 = (function (pred,coll){
while(true){
var s__11798 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11799 = s__11798;

if(cljs.core.truth_(and__3546__auto____11799))
{return pred.call(null,cljs.core.first.call(null,s__11798));
} else
{return and__3546__auto____11799;
}
})()))
{{
var G__11807 = pred;
var G__11808 = cljs.core.rest.call(null,s__11798);
pred = G__11807;
coll = G__11808;
continue;
}
} else
{return s__11798;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11803.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11812))
{var s__11813 = temp__3698__auto____11812;

return cljs.core.concat.call(null,s__11813,cycle.call(null,s__11813));
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
var repeat__11827 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11828 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11827.call(this,n);
case  2 :
return repeat__11828.call(this,n,x);
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
var repeatedly__11850 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11851 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11850.call(this,n);
case  2 :
return repeatedly__11851.call(this,n,f);
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
var interleave__11895 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11886 = cljs.core.seq.call(null,c1);
var s2__11887 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11888 = s1__11886;

if(cljs.core.truth_(and__3546__auto____11888))
{return s2__11887;
} else
{return and__3546__auto____11888;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11886),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11887),interleave.call(null,cljs.core.rest.call(null,s1__11886),cljs.core.rest.call(null,s2__11887))));
} else
{return null;
}
})));
});
var interleave__11896 = (function() { 
var G__11907__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11892 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11892)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11892),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11892)));
} else
{return null;
}
})));
};
var G__11907 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11907__delegate.call(this, c1, c2, colls);
};
G__11907.cljs$lang$maxFixedArity = 2;
G__11907.cljs$lang$applyTo = (function (arglist__11913){
var c1 = cljs.core.first(arglist__11913);
var c2 = cljs.core.first(cljs.core.next(arglist__11913));
var colls = cljs.core.rest(cljs.core.next(arglist__11913));
return G__11907__delegate.call(this, c1, c2, colls);
});
return G__11907;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11895.call(this,c1,c2);
default:
return interleave__11896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11896.cljs$lang$applyTo;
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
var cat__11991 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11987 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11987))
{var coll__11988 = temp__3695__auto____11987;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11988),cat.call(null,cljs.core.rest.call(null,coll__11988),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11991.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12004 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12005 = (function() { 
var G__12007__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12007 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12007__delegate.call(this, f, coll, colls);
};
G__12007.cljs$lang$maxFixedArity = 2;
G__12007.cljs$lang$applyTo = (function (arglist__12008){
var f = cljs.core.first(arglist__12008);
var coll = cljs.core.first(cljs.core.next(arglist__12008));
var colls = cljs.core.rest(cljs.core.next(arglist__12008));
return G__12007__delegate.call(this, f, coll, colls);
});
return G__12007;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12004.call(this,f,coll);
default:
return mapcat__12005.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12005.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12012 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12012))
{var s__12014 = temp__3698__auto____12012;

var f__12016 = cljs.core.first.call(null,s__12014);
var r__12017 = cljs.core.rest.call(null,s__12014);

if(cljs.core.truth_(pred.call(null,f__12016)))
{return cljs.core.cons.call(null,f__12016,filter.call(null,pred,r__12017));
} else
{return filter.call(null,pred,r__12017);
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
var walk__12036 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12036.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12035_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12035_SHARP_));
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
var partition__12066 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12067 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12049 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12049))
{var s__12050 = temp__3698__auto____12049;

var p__12051 = cljs.core.take.call(null,n,s__12050);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12051))))
{return cljs.core.cons.call(null,p__12051,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12050)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12069 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12055))
{var s__12057 = temp__3698__auto____12055;

var p__12060 = cljs.core.take.call(null,n,s__12057);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12060))))
{return cljs.core.cons.call(null,p__12060,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12057)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12060,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12066.call(this,n,step);
case  3 :
return partition__12067.call(this,n,step,pad);
case  4 :
return partition__12069.call(this,n,step,pad,coll);
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
var get_in__12171 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12172 = (function (m,ks,not_found){
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
var G__12178 = sentinel__12082;
var G__12179 = m__12085;
var G__12180 = cljs.core.next.call(null,ks__12084);
sentinel__12082 = G__12178;
m__12083 = G__12179;
ks__12084 = G__12180;
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
return get_in__12171.call(this,m,ks);
case  3 :
return get_in__12172.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12181,v){
var vec__12182__12183 = p__12181;
var k__12184 = cljs.core.nth.call(null,vec__12182__12183,0,null);
var ks__12185 = cljs.core.nthnext.call(null,vec__12182__12183,1);

if(cljs.core.truth_(ks__12185))
{return cljs.core.assoc.call(null,m,k__12184,assoc_in.call(null,cljs.core.get.call(null,m,k__12184),ks__12185,v));
} else
{return cljs.core.assoc.call(null,m,k__12184,v);
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
var update_in__delegate = function (m,p__12189,f,args){
var vec__12190__12191 = p__12189;
var k__12192 = cljs.core.nth.call(null,vec__12190__12191,0,null);
var ks__12193 = cljs.core.nthnext.call(null,vec__12190__12191,1);

if(cljs.core.truth_(ks__12193))
{return cljs.core.assoc.call(null,m,k__12192,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12192),ks__12193,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12192,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12192),args));
}
};
var update_in = function (m,p__12189,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12189, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12197){
var m = cljs.core.first(arglist__12197);
var p__12189 = cljs.core.first(cljs.core.next(arglist__12197));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12197)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12197)));
return update_in__delegate.call(this, m, p__12189, f, args);
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
var this__12225 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12274 = null;
var G__12274__12275 = (function (coll,k){
var this__12226 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12274__12276 = (function (coll,k,not_found){
var this__12227 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12274 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12274__12275.call(this,coll,k);
case  3 :
return G__12274__12276.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12274;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12228 = this;
var new_array__12229 = cljs.core.aclone.call(null,this__12228.array);

(new_array__12229[k] = v);
return (new cljs.core.Vector(this__12228.meta,new_array__12229));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12279 = null;
var G__12279__12280 = (function (coll,k){
var this__12231 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12279__12281 = (function (coll,k,not_found){
var this__12232 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12279 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12279__12280.call(this,coll,k);
case  3 :
return G__12279__12281.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12279;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12233 = this;
var new_array__12234 = cljs.core.aclone.call(null,this__12233.array);

new_array__12234.push(o);
return (new cljs.core.Vector(this__12233.meta,new_array__12234));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12283 = null;
var G__12283__12284 = (function (v,f){
var this__12235 = this;
return cljs.core.ci_reduce.call(null,this__12235.array,f);
});
var G__12283__12285 = (function (v,f,start){
var this__12247 = this;
return cljs.core.ci_reduce.call(null,this__12247.array,f,start);
});
G__12283 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12283__12284.call(this,v,f);
case  3 :
return G__12283__12285.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12283;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12248 = this;
if(cljs.core.truth_((this__12248.array.length > 0)))
{var vector_seq__12252 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12248.array.length)))
{return cljs.core.cons.call(null,(this__12248.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12252.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12254 = this;
return this__12254.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12256 = this;
var count__12257 = this__12256.array.length;

if(cljs.core.truth_((count__12257 > 0)))
{return (this__12256.array[(count__12257 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12258 = this;
if(cljs.core.truth_((this__12258.array.length > 0)))
{var new_array__12260 = cljs.core.aclone.call(null,this__12258.array);

new_array__12260.pop();
return (new cljs.core.Vector(this__12258.meta,new_array__12260));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12264 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12265 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12266 = this;
return (new cljs.core.Vector(meta,this__12266.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12267 = this;
return this__12267.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12476 = null;
var G__12476__12477 = (function (coll,n){
var this__12268 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12269 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12269))
{return (n < this__12268.array.length);
} else
{return and__3546__auto____12269;
}
})()))
{return (this__12268.array[n]);
} else
{return null;
}
});
var G__12476__12478 = (function (coll,n,not_found){
var this__12270 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12271 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12271))
{return (n < this__12270.array.length);
} else
{return and__3546__auto____12271;
}
})()))
{return (this__12270.array[n]);
} else
{return not_found;
}
});
G__12476 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12476__12477.call(this,coll,n);
case  3 :
return G__12476__12478.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12476;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12272 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12272.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12496){
var args = cljs.core.seq( arglist__12496 );;
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
var this__12516 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12572 = null;
var G__12572__12573 = (function (coll,k){
var this__12517 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12572__12574 = (function (coll,k,not_found){
var this__12518 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12572 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12572__12573.call(this,coll,k);
case  3 :
return G__12572__12574.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12572;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12520 = this;
var v_pos__12524 = (this__12520.start + key);

return (new cljs.core.Subvec(this__12520.meta,cljs.core._assoc.call(null,this__12520.v,v_pos__12524,val),this__12520.start,((this__12520.end > (v_pos__12524 + 1)) ? this__12520.end : (v_pos__12524 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12619 = null;
var G__12619__12620 = (function (coll,k){
var this__12527 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12619__12621 = (function (coll,k,not_found){
var this__12530 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12619 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12619__12620.call(this,coll,k);
case  3 :
return G__12619__12621.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12619;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12533 = this;
return (new cljs.core.Subvec(this__12533.meta,cljs.core._assoc_n.call(null,this__12533.v,this__12533.end,o),this__12533.start,(this__12533.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12623 = null;
var G__12623__12624 = (function (coll,f){
var this__12535 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12623__12625 = (function (coll,f,start){
var this__12537 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12623 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12623__12624.call(this,coll,f);
case  3 :
return G__12623__12625.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12623;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12539 = this;
var subvec_seq__12544 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12539.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12539.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12544.call(null,this__12539.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12547 = this;
return (this__12547.end - this__12547.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12550 = this;
return cljs.core._nth.call(null,this__12550.v,(this__12550.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12554 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12554.start,this__12554.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12554.meta,this__12554.v,this__12554.start,(this__12554.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12557 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12558 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12559 = this;
return (new cljs.core.Subvec(meta,this__12559.v,this__12559.start,this__12559.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12560 = this;
return this__12560.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12647 = null;
var G__12647__12648 = (function (coll,n){
var this__12561 = this;
return cljs.core._nth.call(null,this__12561.v,(this__12561.start + n));
});
var G__12647__12649 = (function (coll,n,not_found){
var this__12562 = this;
return cljs.core._nth.call(null,this__12562.v,(this__12562.start + n),not_found);
});
G__12647 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12647__12648.call(this,coll,n);
case  3 :
return G__12647__12649.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12647;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12567 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12567.meta);
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
var subvec__12665 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12666 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12665.call(this,v,start);
case  3 :
return subvec__12666.call(this,v,start,end);
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
var this__12675 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12676 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12677 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12678 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12678.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12679 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12680 = this;
return cljs.core._first.call(null,this__12680.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12681 = this;
var temp__3695__auto____12682 = cljs.core.next.call(null,this__12681.front);

if(cljs.core.truth_(temp__3695__auto____12682))
{var f1__12686 = temp__3695__auto____12682;

return (new cljs.core.PersistentQueueSeq(this__12681.meta,f1__12686,this__12681.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12681.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12681.meta,this__12681.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12689 = this;
return this__12689.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12690 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12690.front,this__12690.rear));
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
var this__12773 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12775 = this;
if(cljs.core.truth_(this__12775.front))
{return (new cljs.core.PersistentQueue(this__12775.meta,(this__12775.count + 1),this__12775.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12778 = this__12775.rear;

if(cljs.core.truth_(or__3548__auto____12778))
{return or__3548__auto____12778;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12775.meta,(this__12775.count + 1),cljs.core.conj.call(null,this__12775.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12781 = this;
var rear__12783 = cljs.core.seq.call(null,this__12781.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12784 = this__12781.front;

if(cljs.core.truth_(or__3548__auto____12784))
{return or__3548__auto____12784;
} else
{return rear__12783;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12781.front,cljs.core.seq.call(null,rear__12783)));
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
var this__12787 = this;
return cljs.core._first.call(null,this__12787.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12788 = this;
if(cljs.core.truth_(this__12788.front))
{var temp__3695__auto____12789 = cljs.core.next.call(null,this__12788.front);

if(cljs.core.truth_(temp__3695__auto____12789))
{var f1__12790 = temp__3695__auto____12789;

return (new cljs.core.PersistentQueue(this__12788.meta,(this__12788.count - 1),f1__12790,this__12788.rear));
} else
{return (new cljs.core.PersistentQueue(this__12788.meta,(this__12788.count - 1),cljs.core.seq.call(null,this__12788.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12791 = this;
return cljs.core.first.call(null,this__12791.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12792 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12793 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12794 = this;
return (new cljs.core.PersistentQueue(meta,this__12794.count,this__12794.front,this__12794.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12796 = this;
return this__12796.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12797 = this;
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
var this__12803 = this;
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
var len__12929 = array.length;

var i__12930 = 0;

while(true){
if(cljs.core.truth_((i__12930 < len__12929)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12930]))))
{return i__12930;
} else
{{
var G__12933 = (i__12930 + incr);
i__12930 = G__12933;
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
var obj_map_contains_key_QMARK___12937 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12939 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12935 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12935))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12935;
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
return obj_map_contains_key_QMARK___12937.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12939.call(this,k,strobj,true_val,false_val);
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
var this__12957 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13041 = null;
var G__13041__13042 = (function (coll,k){
var this__12958 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13041__13043 = (function (coll,k,not_found){
var this__12959 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12959.strobj,(this__12959.strobj[k]),not_found);
});
G__13041 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13041__13042.call(this,coll,k);
case  3 :
return G__13041__13043.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13041;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12962 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12964 = goog.object.clone.call(null,this__12962.strobj);
var overwrite_QMARK___12965 = new_strobj__12964.hasOwnProperty(k);

(new_strobj__12964[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12965))
{return (new cljs.core.ObjMap(this__12962.meta,this__12962.keys,new_strobj__12964));
} else
{var new_keys__12973 = cljs.core.aclone.call(null,this__12962.keys);

new_keys__12973.push(k);
return (new cljs.core.ObjMap(this__12962.meta,new_keys__12973,new_strobj__12964));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12962.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12975 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12975.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13057 = null;
var G__13057__13059 = (function (coll,k){
var this__12980 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13057__13060 = (function (coll,k,not_found){
var this__12982 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13057 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13057__13059.call(this,coll,k);
case  3 :
return G__13057__13060.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13057;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12983 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12986 = this;
if(cljs.core.truth_((this__12986.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12942_SHARP_){
return cljs.core.vector.call(null,p1__12942_SHARP_,(this__12986.strobj[p1__12942_SHARP_]));
}),this__12986.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13009 = this;
return this__13009.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13012 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13015 = this;
return (new cljs.core.ObjMap(meta,this__13015.keys,this__13015.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13019 = this;
return this__13019.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13023 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13023.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13026 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13029 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13029))
{return this__13026.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13029;
}
})()))
{var new_keys__13033 = cljs.core.aclone.call(null,this__13026.keys);
var new_strobj__13034 = goog.object.clone.call(null,this__13026.strobj);

new_keys__13033.splice(cljs.core.scan_array.call(null,1,k,new_keys__13033),1);
cljs.core.js_delete.call(null,new_strobj__13034,k);
return (new cljs.core.ObjMap(this__13026.meta,new_keys__13033,new_strobj__13034));
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
var this__13099 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13149 = null;
var G__13149__13150 = (function (coll,k){
var this__13101 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13149__13151 = (function (coll,k,not_found){
var this__13102 = this;
var bucket__13103 = (this__13102.hashobj[cljs.core.hash.call(null,k)]);
var i__13104 = (cljs.core.truth_(bucket__13103)?cljs.core.scan_array.call(null,2,k,bucket__13103):null);

if(cljs.core.truth_(i__13104))
{return (bucket__13103[(i__13104 + 1)]);
} else
{return not_found;
}
});
G__13149 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13149__13150.call(this,coll,k);
case  3 :
return G__13149__13151.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13149;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13106 = this;
var h__13108 = cljs.core.hash.call(null,k);
var bucket__13109 = (this__13106.hashobj[h__13108]);

if(cljs.core.truth_(bucket__13109))
{var new_bucket__13111 = cljs.core.aclone.call(null,bucket__13109);
var new_hashobj__13112 = goog.object.clone.call(null,this__13106.hashobj);

(new_hashobj__13112[h__13108] = new_bucket__13111);
var temp__3695__auto____13114 = cljs.core.scan_array.call(null,2,k,new_bucket__13111);

if(cljs.core.truth_(temp__3695__auto____13114))
{var i__13116 = temp__3695__auto____13114;

(new_bucket__13111[(i__13116 + 1)] = v);
return (new cljs.core.HashMap(this__13106.meta,this__13106.count,new_hashobj__13112));
} else
{new_bucket__13111.push(k,v);
return (new cljs.core.HashMap(this__13106.meta,(this__13106.count + 1),new_hashobj__13112));
}
} else
{var new_hashobj__13119 = goog.object.clone.call(null,this__13106.hashobj);

(new_hashobj__13119[h__13108] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13106.meta,(this__13106.count + 1),new_hashobj__13119));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13122 = this;
var bucket__13123 = (this__13122.hashobj[cljs.core.hash.call(null,k)]);
var i__13124 = (cljs.core.truth_(bucket__13123)?cljs.core.scan_array.call(null,2,k,bucket__13123):null);

if(cljs.core.truth_(i__13124))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13154 = null;
var G__13154__13155 = (function (coll,k){
var this__13125 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13154__13156 = (function (coll,k,not_found){
var this__13126 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13154 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13154__13155.call(this,coll,k);
case  3 :
return G__13154__13156.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13154;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13131 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13132 = this;
if(cljs.core.truth_((this__13132.count > 0)))
{var hashes__13133 = cljs.core.js_keys.call(null,this__13132.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13073_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13132.hashobj[p1__13073_SHARP_])));
}),hashes__13133);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13134 = this;
return this__13134.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13139 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13140 = this;
return (new cljs.core.HashMap(meta,this__13140.count,this__13140.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13141 = this;
return this__13141.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13142 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13142.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13143 = this;
var h__13144 = cljs.core.hash.call(null,k);
var bucket__13145 = (this__13143.hashobj[h__13144]);
var i__13146 = (cljs.core.truth_(bucket__13145)?cljs.core.scan_array.call(null,2,k,bucket__13145):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13146)))
{return coll;
} else
{var new_hashobj__13147 = goog.object.clone.call(null,this__13143.hashobj);

if(cljs.core.truth_((3 > bucket__13145.length)))
{cljs.core.js_delete.call(null,new_hashobj__13147,h__13144);
} else
{var new_bucket__13148 = cljs.core.aclone.call(null,bucket__13145);

new_bucket__13148.splice(i__13146,2);
(new_hashobj__13147[h__13144] = new_bucket__13148);
}
return (new cljs.core.HashMap(this__13143.meta,(this__13143.count - 1),new_hashobj__13147));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13278 = ks.length;

var i__13280 = 0;
var out__13281 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13280 < len__13278)))
{{
var G__13284 = (i__13280 + 1);
var G__13285 = cljs.core.assoc.call(null,out__13281,(ks[i__13280]),(vs[i__13280]));
i__13280 = G__13284;
out__13281 = G__13285;
continue;
}
} else
{return out__13281;
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
var in$__13297 = cljs.core.seq.call(null,keyvals);
var out__13298 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13297))
{{
var G__13307 = cljs.core.nnext.call(null,in$__13297);
var G__13308 = cljs.core.assoc.call(null,out__13298,cljs.core.first.call(null,in$__13297),cljs.core.second.call(null,in$__13297));
in$__13297 = G__13307;
out__13298 = G__13308;
continue;
}
} else
{return out__13298;
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
hash_map.cljs$lang$applyTo = (function (arglist__13311){
var keyvals = cljs.core.seq( arglist__13311 );;
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
{return cljs.core.reduce.call(null,(function (p1__13321_SHARP_,p2__13323_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13332 = p1__13321_SHARP_;

if(cljs.core.truth_(or__3548__auto____13332))
{return or__3548__auto____13332;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13323_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13335){
var maps = cljs.core.seq( arglist__13335 );;
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
{var merge_entry__13343 = (function (m,e){
var k__13336 = cljs.core.first.call(null,e);
var v__13337 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13336)))
{return cljs.core.assoc.call(null,m,k__13336,f.call(null,cljs.core.get.call(null,m,k__13336),v__13337));
} else
{return cljs.core.assoc.call(null,m,k__13336,v__13337);
}
});
var merge2__13348 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13343,(function (){var or__3548__auto____13344 = m1;

if(cljs.core.truth_(or__3548__auto____13344))
{return or__3548__auto____13344;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13348,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13379){
var f = cljs.core.first(arglist__13379);
var maps = cljs.core.rest(arglist__13379);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13384 = cljs.core.ObjMap.fromObject([],{});
var keys__13385 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13385))
{var key__13388 = cljs.core.first.call(null,keys__13385);
var entry__13389 = cljs.core.get.call(null,map,key__13388,"﷐'user/not-found");

{
var G__13394 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13389,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13384,key__13388,entry__13389):ret__13384);
var G__13395 = cljs.core.next.call(null,keys__13385);
ret__13384 = G__13394;
keys__13385 = G__13395;
continue;
}
} else
{return ret__13384;
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
var this__13436 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13533 = null;
var G__13533__13537 = (function (coll,v){
var this__13438 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13533__13538 = (function (coll,v,not_found){
var this__13440 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13440.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13533 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13533__13537.call(this,coll,v);
case  3 :
return G__13533__13538.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13533;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13540 = null;
var G__13540__13541 = (function (coll,k){
var this__13441 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13540__13542 = (function (coll,k,not_found){
var this__13442 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13540 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13540__13541.call(this,coll,k);
case  3 :
return G__13540__13542.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13540;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13443 = this;
return (new cljs.core.Set(this__13443.meta,cljs.core.assoc.call(null,this__13443.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13444 = this;
return cljs.core.keys.call(null,this__13444.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13520 = this;
return (new cljs.core.Set(this__13520.meta,cljs.core.dissoc.call(null,this__13520.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13521 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13522 = this;
var and__3546__auto____13523 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13523))
{var and__3546__auto____13525 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13525))
{return cljs.core.every_QMARK_.call(null,(function (p1__13382_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13382_SHARP_);
}),other);
} else
{return and__3546__auto____13525;
}
} else
{return and__3546__auto____13523;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13528 = this;
return (new cljs.core.Set(meta,this__13528.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13529 = this;
return this__13529.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13530 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13530.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13551 = cljs.core.seq.call(null,coll);
var out__13552 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13551))))
{{
var G__13555 = cljs.core.rest.call(null,in$__13551);
var G__13556 = cljs.core.conj.call(null,out__13552,cljs.core.first.call(null,in$__13551));
in$__13551 = G__13555;
out__13552 = G__13556;
continue;
}
} else
{return out__13552;
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
{var n__13557 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13558 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13558))
{var e__13560 = temp__3695__auto____13558;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13560));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13557,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13550_SHARP_){
var temp__3695__auto____13564 = cljs.core.find.call(null,smap,p1__13550_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13564))
{var e__13565 = temp__3695__auto____13564;

return cljs.core.second.call(null,e__13565);
} else
{return p1__13550_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13580 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13567,seen){
while(true){
var vec__13569__13570 = p__13567;
var f__13572 = cljs.core.nth.call(null,vec__13569__13570,0,null);
var xs__13573 = vec__13569__13570;

var temp__3698__auto____13576 = cljs.core.seq.call(null,xs__13573);

if(cljs.core.truth_(temp__3698__auto____13576))
{var s__13578 = temp__3698__auto____13576;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13572)))
{{
var G__13610 = cljs.core.rest.call(null,s__13578);
var G__13611 = seen;
p__13567 = G__13610;
seen = G__13611;
continue;
}
} else
{return cljs.core.cons.call(null,f__13572,step.call(null,cljs.core.rest.call(null,s__13578),cljs.core.conj.call(null,seen,f__13572)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13580.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13634 = cljs.core.Vector.fromArray([]);
var s__13635 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13635)))
{{
var G__13642 = cljs.core.conj.call(null,ret__13634,cljs.core.first.call(null,s__13635));
var G__13643 = cljs.core.next.call(null,s__13635);
ret__13634 = G__13642;
s__13635 = G__13643;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13634);
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
if(cljs.core.truth_((function (){var or__3548__auto____13667 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13667))
{return or__3548__auto____13667;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13668 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13668 > -1)))
{return cljs.core.subs.call(null,x,2,i__13668);
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
var map__13677 = cljs.core.ObjMap.fromObject([],{});
var ks__13678 = cljs.core.seq.call(null,keys);
var vs__13679 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13680 = ks__13678;

if(cljs.core.truth_(and__3546__auto____13680))
{return vs__13679;
} else
{return and__3546__auto____13680;
}
})()))
{{
var G__13686 = cljs.core.assoc.call(null,map__13677,cljs.core.first.call(null,ks__13678),cljs.core.first.call(null,vs__13679));
var G__13687 = cljs.core.next.call(null,ks__13678);
var G__13688 = cljs.core.next.call(null,vs__13679);
map__13677 = G__13686;
ks__13678 = G__13687;
vs__13679 = G__13688;
continue;
}
} else
{return map__13677;
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
var max_key__13696 = (function (k,x){
return x;
});
var max_key__13697 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13698 = (function() { 
var G__13701__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13675_SHARP_,p2__13676_SHARP_){
return max_key.call(null,k,p1__13675_SHARP_,p2__13676_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13701 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13701__delegate.call(this, k, x, y, more);
};
G__13701.cljs$lang$maxFixedArity = 3;
G__13701.cljs$lang$applyTo = (function (arglist__13702){
var k = cljs.core.first(arglist__13702);
var x = cljs.core.first(cljs.core.next(arglist__13702));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13702)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13702)));
return G__13701__delegate.call(this, k, x, y, more);
});
return G__13701;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13696.call(this,k,x);
case  3 :
return max_key__13697.call(this,k,x,y);
default:
return max_key__13698.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13698.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13707 = (function (k,x){
return x;
});
var min_key__13708 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13709 = (function() { 
var G__13711__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13689_SHARP_,p2__13690_SHARP_){
return min_key.call(null,k,p1__13689_SHARP_,p2__13690_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13711 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13711__delegate.call(this, k, x, y, more);
};
G__13711.cljs$lang$maxFixedArity = 3;
G__13711.cljs$lang$applyTo = (function (arglist__13713){
var k = cljs.core.first(arglist__13713);
var x = cljs.core.first(cljs.core.next(arglist__13713));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13713)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13713)));
return G__13711__delegate.call(this, k, x, y, more);
});
return G__13711;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13707.call(this,k,x);
case  3 :
return min_key__13708.call(this,k,x,y);
default:
return min_key__13709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13709.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13719 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13721 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13715 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13715))
{var s__13717 = temp__3698__auto____13715;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13717),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13717)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13719.call(this,n,step);
case  3 :
return partition_all__13721.call(this,n,step,coll);
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
var temp__3698__auto____13785 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13785))
{var s__13787 = temp__3698__auto____13785;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13787))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13787),take_while.call(null,pred,cljs.core.rest.call(null,s__13787)));
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
var this__13790 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13793 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13854 = null;
var G__13854__13855 = (function (rng,f){
var this__13794 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13854__13856 = (function (rng,f,s){
var this__13796 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13854 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13854__13855.call(this,rng,f);
case  3 :
return G__13854__13856.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13854;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13799 = this;
var comp__13802 = (cljs.core.truth_((this__13799.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13802.call(null,this__13799.start,this__13799.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13804 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13804.end - this__13804.start) / this__13804.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13808 = this;
return this__13808.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13811 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13811.meta,(this__13811.start + this__13811.step),this__13811.end,this__13811.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13824 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13829 = this;
return (new cljs.core.Range(meta,this__13829.start,this__13829.end,this__13829.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13832 = this;
return this__13832.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13876 = null;
var G__13876__13877 = (function (rng,n){
var this__13833 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13833.start + (n * this__13833.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13834 = (this__13833.start > this__13833.end);

if(cljs.core.truth_(and__3546__auto____13834))
{return cljs.core._EQ_.call(null,this__13833.step,0);
} else
{return and__3546__auto____13834;
}
})()))
{return this__13833.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13876__13878 = (function (rng,n,not_found){
var this__13839 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13839.start + (n * this__13839.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13845 = (this__13839.start > this__13839.end);

if(cljs.core.truth_(and__3546__auto____13845))
{return cljs.core._EQ_.call(null,this__13839.step,0);
} else
{return and__3546__auto____13845;
}
})()))
{return this__13839.start;
} else
{return not_found;
}
}
});
G__13876 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13876__13877.call(this,rng,n);
case  3 :
return G__13876__13878.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13876;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13846 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13846.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13900 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13901 = (function (end){
return range.call(null,0,end,1);
});
var range__13902 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13903 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13900.call(this);
case  1 :
return range__13901.call(this,start);
case  2 :
return range__13902.call(this,start,end);
case  3 :
return range__13903.call(this,start,end,step);
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
var temp__3698__auto____13982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13982))
{var s__13986 = temp__3698__auto____13982;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13986),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13986)));
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
var run__14001 = cljs.core.cons.call(null,fst__13999,cljs.core.take_while.call(null,(function (p1__13994_SHARP_){
return cljs.core._EQ_.call(null,fv__14000,f.call(null,p1__13994_SHARP_));
}),cljs.core.next.call(null,s__13998)));

return cljs.core.cons.call(null,run__14001,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14001),s__13998))));
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
var reductions__14023 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14017 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14017))
{var s__14018 = temp__3695__auto____14017;

return reductions.call(null,f,cljs.core.first.call(null,s__14018),cljs.core.rest.call(null,s__14018));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14024 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14020 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14020))
{var s__14021 = temp__3698__auto____14020;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14021)),cljs.core.rest.call(null,s__14021));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14023.call(this,f,init);
case  3 :
return reductions__14024.call(this,f,init,coll);
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
var juxt__14082 = (function (f){
return (function() {
var G__14087 = null;
var G__14087__14088 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14087__14089 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14087__14090 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14087__14092 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14087__14093 = (function() { 
var G__14096__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14096 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14096__delegate.call(this, x, y, z, args);
};
G__14096.cljs$lang$maxFixedArity = 3;
G__14096.cljs$lang$applyTo = (function (arglist__14097){
var x = cljs.core.first(arglist__14097);
var y = cljs.core.first(cljs.core.next(arglist__14097));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14097)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14097)));
return G__14096__delegate.call(this, x, y, z, args);
});
return G__14096;
})()
;
G__14087 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14087__14088.call(this);
case  1 :
return G__14087__14089.call(this,x);
case  2 :
return G__14087__14090.call(this,x,y);
case  3 :
return G__14087__14092.call(this,x,y,z);
default:
return G__14087__14093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14087.cljs$lang$maxFixedArity = 3;
G__14087.cljs$lang$applyTo = G__14087__14093.cljs$lang$applyTo;
return G__14087;
})()
});
var juxt__14083 = (function (f,g){
return (function() {
var G__14098 = null;
var G__14098__14099 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14098__14100 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14098__14101 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14098__14102 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14098__14103 = (function() { 
var G__14108__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14108 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14108__delegate.call(this, x, y, z, args);
};
G__14108.cljs$lang$maxFixedArity = 3;
G__14108.cljs$lang$applyTo = (function (arglist__14115){
var x = cljs.core.first(arglist__14115);
var y = cljs.core.first(cljs.core.next(arglist__14115));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14115)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14115)));
return G__14108__delegate.call(this, x, y, z, args);
});
return G__14108;
})()
;
G__14098 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14098__14099.call(this);
case  1 :
return G__14098__14100.call(this,x);
case  2 :
return G__14098__14101.call(this,x,y);
case  3 :
return G__14098__14102.call(this,x,y,z);
default:
return G__14098__14103.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14098.cljs$lang$maxFixedArity = 3;
G__14098.cljs$lang$applyTo = G__14098__14103.cljs$lang$applyTo;
return G__14098;
})()
});
var juxt__14084 = (function (f,g,h){
return (function() {
var G__14116 = null;
var G__14116__14118 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14116__14119 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14116__14120 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14116__14121 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14116__14122 = (function() { 
var G__14132__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14132 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14132__delegate.call(this, x, y, z, args);
};
G__14132.cljs$lang$maxFixedArity = 3;
G__14132.cljs$lang$applyTo = (function (arglist__14133){
var x = cljs.core.first(arglist__14133);
var y = cljs.core.first(cljs.core.next(arglist__14133));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14133)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14133)));
return G__14132__delegate.call(this, x, y, z, args);
});
return G__14132;
})()
;
G__14116 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14116__14118.call(this);
case  1 :
return G__14116__14119.call(this,x);
case  2 :
return G__14116__14120.call(this,x,y);
case  3 :
return G__14116__14121.call(this,x,y,z);
default:
return G__14116__14122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14116.cljs$lang$maxFixedArity = 3;
G__14116.cljs$lang$applyTo = G__14116__14122.cljs$lang$applyTo;
return G__14116;
})()
});
var juxt__14085 = (function() { 
var G__14135__delegate = function (f,g,h,fs){
var fs__14030 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14136 = null;
var G__14136__14137 = (function (){
return cljs.core.reduce.call(null,(function (p1__14006_SHARP_,p2__14007_SHARP_){
return cljs.core.conj.call(null,p1__14006_SHARP_,p2__14007_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14030);
});
var G__14136__14138 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14008_SHARP_,p2__14009_SHARP_){
return cljs.core.conj.call(null,p1__14008_SHARP_,p2__14009_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14030);
});
var G__14136__14139 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14010_SHARP_,p2__14011_SHARP_){
return cljs.core.conj.call(null,p1__14010_SHARP_,p2__14011_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14030);
});
var G__14136__14140 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14013_SHARP_,p2__14014_SHARP_){
return cljs.core.conj.call(null,p1__14013_SHARP_,p2__14014_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14030);
});
var G__14136__14141 = (function() { 
var G__14152__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14015_SHARP_,p2__14016_SHARP_){
return cljs.core.conj.call(null,p1__14015_SHARP_,cljs.core.apply.call(null,p2__14016_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14030);
};
var G__14152 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14152__delegate.call(this, x, y, z, args);
};
G__14152.cljs$lang$maxFixedArity = 3;
G__14152.cljs$lang$applyTo = (function (arglist__14153){
var x = cljs.core.first(arglist__14153);
var y = cljs.core.first(cljs.core.next(arglist__14153));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14153)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14153)));
return G__14152__delegate.call(this, x, y, z, args);
});
return G__14152;
})()
;
G__14136 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14136__14137.call(this);
case  1 :
return G__14136__14138.call(this,x);
case  2 :
return G__14136__14139.call(this,x,y);
case  3 :
return G__14136__14140.call(this,x,y,z);
default:
return G__14136__14141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14136.cljs$lang$maxFixedArity = 3;
G__14136.cljs$lang$applyTo = G__14136__14141.cljs$lang$applyTo;
return G__14136;
})()
};
var G__14135 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14135__delegate.call(this, f, g, h, fs);
};
G__14135.cljs$lang$maxFixedArity = 3;
G__14135.cljs$lang$applyTo = (function (arglist__14154){
var f = cljs.core.first(arglist__14154);
var g = cljs.core.first(cljs.core.next(arglist__14154));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14154)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14154)));
return G__14135__delegate.call(this, f, g, h, fs);
});
return G__14135;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14082.call(this,f);
case  2 :
return juxt__14083.call(this,f,g);
case  3 :
return juxt__14084.call(this,f,g,h);
default:
return juxt__14085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14085.cljs$lang$applyTo;
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
var dorun__14171 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14175 = cljs.core.next.call(null,coll);
coll = G__14175;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14172 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14166 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14166))
{return (n > 0);
} else
{return and__3546__auto____14166;
}
})()))
{{
var G__14179 = (n - 1);
var G__14180 = cljs.core.next.call(null,coll);
n = G__14179;
coll = G__14180;
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
return dorun__14171.call(this,n);
case  2 :
return dorun__14172.call(this,n,coll);
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
var doall__14202 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14203 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14202.call(this,n);
case  2 :
return doall__14203.call(this,n,coll);
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
var matches__14278 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14278),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14278),1)))
{return cljs.core.first.call(null,matches__14278);
} else
{return cljs.core.vec.call(null,matches__14278);
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
var matches__14282 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14282)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14282),1)))
{return cljs.core.first.call(null,matches__14282);
} else
{return cljs.core.vec.call(null,matches__14282);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14285 = cljs.core.re_find.call(null,re,s);
var match_idx__14286 = s.search(re);
var match_str__14287 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14285))?cljs.core.first.call(null,match_data__14285):match_data__14285);
var post_match__14288 = cljs.core.subs.call(null,s,(match_idx__14286 + cljs.core.count.call(null,match_str__14287)));

if(cljs.core.truth_(match_data__14285))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14285,re_seq.call(null,re,post_match__14288));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14296_SHARP_){
return print_one.call(null,p1__14296_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14309 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14309))
{var and__3546__auto____14315 = (function (){var x__445__auto____14311 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14312 = x__445__auto____14311;

if(cljs.core.truth_(and__3546__auto____14312))
{var and__3546__auto____14313 = x__445__auto____14311.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14313))
{return cljs.core.not.call(null,x__445__auto____14311.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14313;
}
} else
{return and__3546__auto____14312;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14311);
}
})();

if(cljs.core.truth_(and__3546__auto____14315))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14315;
}
} else
{return and__3546__auto____14309;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14317 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14318 = x__445__auto____14317;

if(cljs.core.truth_(and__3546__auto____14318))
{var and__3546__auto____14319 = x__445__auto____14317.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14319))
{return cljs.core.not.call(null,x__445__auto____14317.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14319;
}
} else
{return and__3546__auto____14318;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14317);
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
var first_obj__14325 = cljs.core.first.call(null,objs);
var sb__14327 = (new goog.string.StringBuffer());

var G__14329__14331 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14329__14331))
{var obj__14333 = cljs.core.first.call(null,G__14329__14331);
var G__14329__14334 = G__14329__14331;

while(true){
if(cljs.core.truth_((obj__14333 === first_obj__14325)))
{} else
{sb__14327.append(" ");
}
var G__14336__14337 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14333,opts));

if(cljs.core.truth_(G__14336__14337))
{var string__14338 = cljs.core.first.call(null,G__14336__14337);
var G__14336__14339 = G__14336__14337;

while(true){
sb__14327.append(string__14338);
var temp__3698__auto____14341 = cljs.core.next.call(null,G__14336__14339);

if(cljs.core.truth_(temp__3698__auto____14341))
{var G__14336__14343 = temp__3698__auto____14341;

{
var G__14355 = cljs.core.first.call(null,G__14336__14343);
var G__14356 = G__14336__14343;
string__14338 = G__14355;
G__14336__14339 = G__14356;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14344 = cljs.core.next.call(null,G__14329__14334);

if(cljs.core.truth_(temp__3698__auto____14344))
{var G__14329__14346 = temp__3698__auto____14344;

{
var G__14358 = cljs.core.first.call(null,G__14329__14346);
var G__14359 = G__14329__14346;
obj__14333 = G__14358;
G__14329__14334 = G__14359;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14327);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14362 = cljs.core.first.call(null,objs);

var G__14364__14365 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14364__14365))
{var obj__14447 = cljs.core.first.call(null,G__14364__14365);
var G__14364__14448 = G__14364__14365;

while(true){
if(cljs.core.truth_((obj__14447 === first_obj__14362)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14450__14453 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14447,opts));

if(cljs.core.truth_(G__14450__14453))
{var string__14455 = cljs.core.first.call(null,G__14450__14453);
var G__14450__14457 = G__14450__14453;

while(true){
cljs.core.string_print.call(null,string__14455);
var temp__3698__auto____14459 = cljs.core.next.call(null,G__14450__14457);

if(cljs.core.truth_(temp__3698__auto____14459))
{var G__14450__14461 = temp__3698__auto____14459;

{
var G__14469 = cljs.core.first.call(null,G__14450__14461);
var G__14470 = G__14450__14461;
string__14455 = G__14469;
G__14450__14457 = G__14470;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14463 = cljs.core.next.call(null,G__14364__14448);

if(cljs.core.truth_(temp__3698__auto____14463))
{var G__14364__14464 = temp__3698__auto____14463;

{
var G__14473 = cljs.core.first.call(null,G__14364__14464);
var G__14474 = G__14364__14464;
obj__14447 = G__14473;
G__14364__14448 = G__14474;
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
pr_str.cljs$lang$applyTo = (function (arglist__14476){
var objs = cljs.core.seq( arglist__14476 );;
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
pr.cljs$lang$applyTo = (function (arglist__14479){
var objs = cljs.core.seq( arglist__14479 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14483){
var objs = cljs.core.seq( arglist__14483 );;
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
println.cljs$lang$applyTo = (function (arglist__14490){
var objs = cljs.core.seq( arglist__14490 );;
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
prn.cljs$lang$applyTo = (function (arglist__14501){
var objs = cljs.core.seq( arglist__14501 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14507 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14507,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14509 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14509))
{var nspc__14510 = temp__3698__auto____14509;

return cljs.core.str.call(null,nspc__14510,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14512 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14512))
{var nspc__14513 = temp__3698__auto____14512;

return cljs.core.str.call(null,nspc__14513,"/");
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
var pr_pair__14518 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14518,"{",", ","}",opts,coll);
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
var this__14571 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14572 = this;
var G__14573__14574 = cljs.core.seq.call(null,this__14572.watches);

if(cljs.core.truth_(G__14573__14574))
{var G__14576__14578 = cljs.core.first.call(null,G__14573__14574);
var vec__14577__14579 = G__14576__14578;
var key__14580 = cljs.core.nth.call(null,vec__14577__14579,0,null);
var f__14582 = cljs.core.nth.call(null,vec__14577__14579,1,null);
var G__14573__14583 = G__14573__14574;

var G__14576__14585 = G__14576__14578;
var G__14573__14586 = G__14573__14583;

while(true){
var vec__14587__14588 = G__14576__14585;
var key__14589 = cljs.core.nth.call(null,vec__14587__14588,0,null);
var f__14590 = cljs.core.nth.call(null,vec__14587__14588,1,null);
var G__14573__14591 = G__14573__14586;

f__14590.call(null,key__14589,this$,oldval,newval);
var temp__3698__auto____14594 = cljs.core.next.call(null,G__14573__14591);

if(cljs.core.truth_(temp__3698__auto____14594))
{var G__14573__14595 = temp__3698__auto____14594;

{
var G__14666 = cljs.core.first.call(null,G__14573__14595);
var G__14667 = G__14573__14595;
G__14576__14585 = G__14666;
G__14573__14586 = G__14667;
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
var this__14597 = this;
return this$.watches = cljs.core.assoc.call(null,this__14597.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14598 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14598.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14599 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14599.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14600 = this;
return this__14600.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14601 = this;
return this__14601.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14659 = this;
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
var atom__14693 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14694 = (function() { 
var G__14696__delegate = function (x,p__14673){
var map__14675__14681 = p__14673;
var map__14675__14682 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14675__14681))?cljs.core.apply.call(null,cljs.core.hash_map,map__14675__14681):map__14675__14681);
var validator__14684 = cljs.core.get.call(null,map__14675__14682,"﷐'validator");
var meta__14685 = cljs.core.get.call(null,map__14675__14682,"﷐'meta");

return (new cljs.core.Atom(x,meta__14685,validator__14684,null));
};
var G__14696 = function (x,var_args){
var p__14673 = null;
if (goog.isDef(var_args)) {
  p__14673 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14696__delegate.call(this, x, p__14673);
};
G__14696.cljs$lang$maxFixedArity = 1;
G__14696.cljs$lang$applyTo = (function (arglist__14701){
var x = cljs.core.first(arglist__14701);
var p__14673 = cljs.core.rest(arglist__14701);
return G__14696__delegate.call(this, x, p__14673);
});
return G__14696;
})()
;
atom = function(x,var_args){
var p__14673 = var_args;
switch(arguments.length){
case  1 :
return atom__14693.call(this,x);
default:
return atom__14694.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14694.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14703 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14703))
{var validate__14704 = temp__3698__auto____14703;

if(cljs.core.truth_(validate__14704.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14707 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14707,new_value);
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
var swap_BANG___14710 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14711 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14712 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14713 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14714 = (function() { 
var G__14720__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14720 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14720__delegate.call(this, a, f, x, y, z, more);
};
G__14720.cljs$lang$maxFixedArity = 5;
G__14720.cljs$lang$applyTo = (function (arglist__14722){
var a = cljs.core.first(arglist__14722);
var f = cljs.core.first(cljs.core.next(arglist__14722));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14722)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14722))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14722)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14722)))));
return G__14720__delegate.call(this, a, f, x, y, z, more);
});
return G__14720;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14710.call(this,a,f);
case  3 :
return swap_BANG___14711.call(this,a,f,x);
case  4 :
return swap_BANG___14712.call(this,a,f,x,y);
case  5 :
return swap_BANG___14713.call(this,a,f,x,y,z);
default:
return swap_BANG___14714.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14714.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14764){
var iref = cljs.core.first(arglist__14764);
var f = cljs.core.first(cljs.core.next(arglist__14764));
var args = cljs.core.rest(cljs.core.next(arglist__14764));
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
var gensym__14771 = (function (){
return gensym.call(null,"G__");
});
var gensym__14772 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14771.call(this);
case  1 :
return gensym__14772.call(this,prefix_string);
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
var this__14782 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14782.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14783 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14783.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14783.state,this__14783.f);
}
return cljs.core.deref.call(null,this__14783.state);
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
delay.cljs$lang$applyTo = (function (arglist__14784){
var body = cljs.core.seq( arglist__14784 );;
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
var map__14785__14786 = options;
var map__14785__14787 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14785__14786))?cljs.core.apply.call(null,cljs.core.hash_map,map__14785__14786):map__14785__14786);
var keywordize_keys__14788 = cljs.core.get.call(null,map__14785__14787,"﷐'keywordize-keys");
var keyfn__14789 = (cljs.core.truth_(keywordize_keys__14788)?cljs.core.keyword:cljs.core.str);
var f__14795 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14794 = (function iter__14790(s__14791){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14791__14792 = s__14791;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14791__14792)))
{var k__14793 = cljs.core.first.call(null,s__14791__14792);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14789.call(null,k__14793),thisfn.call(null,(x[k__14793]))]),iter__14790.call(null,cljs.core.rest.call(null,s__14791__14792)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14794.call(null,cljs.core.js_keys.call(null,x));
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

return f__14795.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14806){
var x = cljs.core.first(arglist__14806);
var options = cljs.core.rest(arglist__14806);
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
var mem__14807 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14815__delegate = function (args){
var temp__3695__auto____14808 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14807),args);

if(cljs.core.truth_(temp__3695__auto____14808))
{var v__14809 = temp__3695__auto____14808;

return v__14809;
} else
{var ret__14810 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14807,cljs.core.assoc,args,ret__14810);
return ret__14810;
}
};
var G__14815 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14815__delegate.call(this, args);
};
G__14815.cljs$lang$maxFixedArity = 0;
G__14815.cljs$lang$applyTo = (function (arglist__14903){
var args = cljs.core.seq( arglist__14903 );;
return G__14815__delegate.call(this, args);
});
return G__14815;
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
var trampoline__14919 = (function (f){
while(true){
var ret__14918 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14918)))
{{
var G__14922 = ret__14918;
f = G__14922;
continue;
}
} else
{return ret__14918;
}
break;
}
});
var trampoline__14920 = (function() { 
var G__14923__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14923 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14923__delegate.call(this, f, args);
};
G__14923.cljs$lang$maxFixedArity = 1;
G__14923.cljs$lang$applyTo = (function (arglist__14924){
var f = cljs.core.first(arglist__14924);
var args = cljs.core.rest(arglist__14924);
return G__14923__delegate.call(this, f, args);
});
return G__14923;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14919.call(this,f);
default:
return trampoline__14920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14920.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14925 = (function (){
return rand.call(null,1);
});
var rand__14926 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14925.call(this);
case  1 :
return rand__14926.call(this,n);
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
var k__14934 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14934,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14934,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14945 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14946 = (function (h,child,parent){
var or__3548__auto____14937 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14937))
{return or__3548__auto____14937;
} else
{var or__3548__auto____14938 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14938))
{return or__3548__auto____14938;
} else
{var and__3546__auto____14939 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14939))
{var and__3546__auto____14940 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14940))
{var and__3546__auto____14941 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14941))
{var ret__14942 = true;
var i__14943 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14944 = cljs.core.not.call(null,ret__14942);

if(cljs.core.truth_(or__3548__auto____14944))
{return or__3548__auto____14944;
} else
{return cljs.core._EQ_.call(null,i__14943,cljs.core.count.call(null,parent));
}
})()))
{return ret__14942;
} else
{{
var G__14948 = isa_QMARK_.call(null,h,child.call(null,i__14943),parent.call(null,i__14943));
var G__14950 = (i__14943 + 1);
ret__14942 = G__14948;
i__14943 = G__14950;
continue;
}
}
break;
}
} else
{return and__3546__auto____14941;
}
} else
{return and__3546__auto____14940;
}
} else
{return and__3546__auto____14939;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14945.call(this,h,child);
case  3 :
return isa_QMARK___14946.call(this,h,child,parent);
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
var parents__14951 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14952 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14951.call(this,h);
case  2 :
return parents__14952.call(this,h,tag);
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
var ancestors__15032 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15033 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15032.call(this,h);
case  2 :
return ancestors__15033.call(this,h,tag);
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
var descendants__15035 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15036 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15035.call(this,h);
case  2 :
return descendants__15036.call(this,h,tag);
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
var derive__15059 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15060 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15042 = "﷐'parents".call(null,h);
var td__15043 = "﷐'descendants".call(null,h);
var ta__15045 = "﷐'ancestors".call(null,h);
var tf__15048 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15053 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15042.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15045.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15045.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15042,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15048.call(null,"﷐'ancestors".call(null,h),tag,td__15043,parent,ta__15045),"﷐'descendants":tf__15048.call(null,"﷐'descendants".call(null,h),parent,ta__15045,tag,td__15043)});
})());

if(cljs.core.truth_(or__3548__auto____15053))
{return or__3548__auto____15053;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15059.call(this,h,tag);
case  3 :
return derive__15060.call(this,h,tag,parent);
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
var underive__15087 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15088 = (function (h,tag,parent){
var parentMap__15079 = "﷐'parents".call(null,h);
var childsParents__15080 = (cljs.core.truth_(parentMap__15079.call(null,tag))?cljs.core.disj.call(null,parentMap__15079.call(null,tag),parent):cljs.core.set([]));
var newParents__15081 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15080))?cljs.core.assoc.call(null,parentMap__15079,tag,childsParents__15080):cljs.core.dissoc.call(null,parentMap__15079,tag));
var deriv_seq__15083 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15038_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15038_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15038_SHARP_),cljs.core.second.call(null,p1__15038_SHARP_)));
}),cljs.core.seq.call(null,newParents__15081)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15079.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15039_SHARP_,p2__15040_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15039_SHARP_,p2__15040_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15083));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15087.call(this,h,tag);
case  3 :
return underive__15088.call(this,h,tag,parent);
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
var xprefs__15101 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15103 = (cljs.core.truth_((function (){var and__3546__auto____15102 = xprefs__15101;

if(cljs.core.truth_(and__3546__auto____15102))
{return xprefs__15101.call(null,y);
} else
{return and__3546__auto____15102;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15103))
{return or__3548__auto____15103;
} else
{var or__3548__auto____15106 = (function (){var ps__15105 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15105) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15105),prefer_table)))
{} else
{}
{
var G__15110 = cljs.core.rest.call(null,ps__15105);
ps__15105 = G__15110;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15106))
{return or__3548__auto____15106;
} else
{var or__3548__auto____15109 = (function (){var ps__15107 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15107) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15107),y,prefer_table)))
{} else
{}
{
var G__15116 = cljs.core.rest.call(null,ps__15107);
ps__15107 = G__15116;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15109))
{return or__3548__auto____15109;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15121 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15121))
{return or__3548__auto____15121;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15130 = cljs.core.reduce.call(null,(function (be,p__15122){
var vec__15123__15124 = p__15122;
var k__15125 = cljs.core.nth.call(null,vec__15123__15124,0,null);
var ___15126 = cljs.core.nth.call(null,vec__15123__15124,1,null);
var e__15127 = vec__15123__15124;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15125)))
{var be2__15129 = (cljs.core.truth_((function (){var or__3548__auto____15128 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15128))
{return or__3548__auto____15128;
} else
{return cljs.core.dominates.call(null,k__15125,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15127:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15129),k__15125,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15125," and ",cljs.core.first.call(null,be2__15129),", and neither is preferred")));
}
return be2__15129;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15130))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15130));
return cljs.core.second.call(null,best_entry__15130);
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
if(cljs.core.truth_((function (){var and__3546__auto____15176 = mf;

if(cljs.core.truth_(and__3546__auto____15176))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15176;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15181 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15181))
{return or__3548__auto____15181;
} else
{var or__3548__auto____15183 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15183))
{return or__3548__auto____15183;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15191 = mf;

if(cljs.core.truth_(and__3546__auto____15191))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15191;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15193 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15193))
{return or__3548__auto____15193;
} else
{var or__3548__auto____15194 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15194))
{return or__3548__auto____15194;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15196 = mf;

if(cljs.core.truth_(and__3546__auto____15196))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15196;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15197 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15197))
{return or__3548__auto____15197;
} else
{var or__3548__auto____15198 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15198))
{return or__3548__auto____15198;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15199 = mf;

if(cljs.core.truth_(and__3546__auto____15199))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15199;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15200 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15200))
{return or__3548__auto____15200;
} else
{var or__3548__auto____15201 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15201))
{return or__3548__auto____15201;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15203 = mf;

if(cljs.core.truth_(and__3546__auto____15203))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15203;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15204 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15204))
{return or__3548__auto____15204;
} else
{var or__3548__auto____15206 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15206))
{return or__3548__auto____15206;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15241 = mf;

if(cljs.core.truth_(and__3546__auto____15241))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15241;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15242 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15242))
{return or__3548__auto____15242;
} else
{var or__3548__auto____15243 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15243))
{return or__3548__auto____15243;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15244 = mf;

if(cljs.core.truth_(and__3546__auto____15244))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15244;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15245 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15245))
{return or__3548__auto____15245;
} else
{var or__3548__auto____15247 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15247))
{return or__3548__auto____15247;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15249 = mf;

if(cljs.core.truth_(and__3546__auto____15249))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15249;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15251 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15251))
{return or__3548__auto____15251;
} else
{var or__3548__auto____15254 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15254))
{return or__3548__auto____15254;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15292 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15293 = cljs.core._get_method.call(null,mf,dispatch_val__15292);

if(cljs.core.truth_(target_fn__15293))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15292)));
}
return cljs.core.apply.call(null,target_fn__15293,args);
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
var this__15304 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15305 = this;
cljs.core.swap_BANG_.call(null,this__15305.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15305.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15305.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15305.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15306 = this;
cljs.core.swap_BANG_.call(null,this__15306.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15306.method_cache,this__15306.method_table,this__15306.cached_hierarchy,this__15306.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15307 = this;
cljs.core.swap_BANG_.call(null,this__15307.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15307.method_cache,this__15307.method_table,this__15307.cached_hierarchy,this__15307.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15308 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15308.cached_hierarchy),cljs.core.deref.call(null,this__15308.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15308.method_cache,this__15308.method_table,this__15308.cached_hierarchy,this__15308.hierarchy);
}
var temp__3695__auto____15311 = cljs.core.deref.call(null,this__15308.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15311))
{var target_fn__15313 = temp__3695__auto____15311;

return target_fn__15313;
} else
{var temp__3695__auto____15315 = cljs.core.find_and_cache_best_method.call(null,this__15308.name,dispatch_val,this__15308.hierarchy,this__15308.method_table,this__15308.prefer_table,this__15308.method_cache,this__15308.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15315))
{var target_fn__15316 = temp__3695__auto____15315;

return target_fn__15316;
} else
{return cljs.core.deref.call(null,this__15308.method_table).call(null,this__15308.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15319 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15319.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15319.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15319.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15319.method_cache,this__15319.method_table,this__15319.cached_hierarchy,this__15319.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15325 = this;
return cljs.core.deref.call(null,this__15325.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15326 = this;
return cljs.core.deref.call(null,this__15326.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15328 = this;
return cljs.core.do_dispatch.call(null,mf,this__15328.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15355__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15355 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15355__delegate.call(this, _, args);
};
G__15355.cljs$lang$maxFixedArity = 1;
G__15355.cljs$lang$applyTo = (function (arglist__15356){
var _ = cljs.core.first(arglist__15356);
var args = cljs.core.rest(arglist__15356);
return G__15355__delegate.call(this, _, args);
});
return G__15355;
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
