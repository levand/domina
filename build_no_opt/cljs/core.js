goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
cljs.core._STAR_unchecked_if_STAR_ = false;
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
void 0;
void 0;
void 0;
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
var or__3548__auto____9067 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____9067))
{return or__3548__auto____9067;
} else
{var or__3548__auto____9069 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____9069))
{return or__3548__auto____9069;
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
return Error("No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
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
cljs.core.make_array = (function make_array(n){
return new Array(n);
});
void 0;
/**
* Returns the value at the index.
* @param {...*} var_args
*/
cljs.core.aget = (function() {
var aget = null;
var aget__2 = (function (array,i){
return (array[i]);
});
var aget__3 = (function() { 
var G__9102__delegate = function (array,i,idxs){
return cljs.core.apply.__3(aget,aget.call(null,array,i),idxs);
};
var G__9102 = function (array,i,var_args){
var idxs = null;
if (goog.isDef(var_args)) {
  idxs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9102__delegate.call(this, array, i, idxs);
};
G__9102.cljs$lang$maxFixedArity = 2;
G__9102.cljs$lang$applyTo = (function (arglist__9104){
var array = cljs.core.first(arglist__9104);
var i = cljs.core.first(cljs.core.next(arglist__9104));
var idxs = cljs.core.rest(cljs.core.next(arglist__9104));
return G__9102__delegate.call(this, array, i, idxs);
});
return G__9102;
})()
;
aget = function(array,i,var_args){
var idxs = var_args;
switch(arguments.length){
case  2 :
return aget__2.call(this,array,i);
default:
return aget__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
aget.cljs$lang$maxFixedArity = 2;
aget.cljs$lang$applyTo = aget__3.cljs$lang$applyTo;
aget.__2 = aget__2;
aget.__3 = aget__3;
return aget;
})()
;
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
void 0;
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__1 = (function (this$){
if(((function (){var and__3546__auto____9119 = this$;

if((and__3546__auto____9119))
{return this$.cljs$core$IFn$_invoke__1;
} else
{return and__3546__auto____9119;
}
})()))
{return this$.cljs$core$IFn$_invoke__1(this$);
} else
{return (function (){var or__3548__auto____9121 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9121))
{return or__3548__auto____9121;
} else
{var or__3548__auto____9123 = (cljs.core._invoke["_"]);

if((or__3548__auto____9123))
{return or__3548__auto____9123;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__2 = (function (this$,a){
if(((function (){var and__3546__auto____9146 = this$;

if((and__3546__auto____9146))
{return this$.cljs$core$IFn$_invoke__2;
} else
{return and__3546__auto____9146;
}
})()))
{return this$.cljs$core$IFn$_invoke__2(this$,a);
} else
{return (function (){var or__3548__auto____9150 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9150))
{return or__3548__auto____9150;
} else
{var or__3548__auto____9153 = (cljs.core._invoke["_"]);

if((or__3548__auto____9153))
{return or__3548__auto____9153;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3 = (function (this$,a,b){
if(((function (){var and__3546__auto____9157 = this$;

if((and__3546__auto____9157))
{return this$.cljs$core$IFn$_invoke__3;
} else
{return and__3546__auto____9157;
}
})()))
{return this$.cljs$core$IFn$_invoke__3(this$,a,b);
} else
{return (function (){var or__3548__auto____9163 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9163))
{return or__3548__auto____9163;
} else
{var or__3548__auto____9165 = (cljs.core._invoke["_"]);

if((or__3548__auto____9165))
{return or__3548__auto____9165;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__4 = (function (this$,a,b,c){
if(((function (){var and__3546__auto____9169 = this$;

if((and__3546__auto____9169))
{return this$.cljs$core$IFn$_invoke__4;
} else
{return and__3546__auto____9169;
}
})()))
{return this$.cljs$core$IFn$_invoke__4(this$,a,b,c);
} else
{return (function (){var or__3548__auto____9174 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9174))
{return or__3548__auto____9174;
} else
{var or__3548__auto____9177 = (cljs.core._invoke["_"]);

if((or__3548__auto____9177))
{return or__3548__auto____9177;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5 = (function (this$,a,b,c,d){
if(((function (){var and__3546__auto____9181 = this$;

if((and__3546__auto____9181))
{return this$.cljs$core$IFn$_invoke__5;
} else
{return and__3546__auto____9181;
}
})()))
{return this$.cljs$core$IFn$_invoke__5(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____9185 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9185))
{return or__3548__auto____9185;
} else
{var or__3548__auto____9188 = (cljs.core._invoke["_"]);

if((or__3548__auto____9188))
{return or__3548__auto____9188;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6 = (function (this$,a,b,c,d,e){
if(((function (){var and__3546__auto____9193 = this$;

if((and__3546__auto____9193))
{return this$.cljs$core$IFn$_invoke__6;
} else
{return and__3546__auto____9193;
}
})()))
{return this$.cljs$core$IFn$_invoke__6(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____9197 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9197))
{return or__3548__auto____9197;
} else
{var or__3548__auto____9200 = (cljs.core._invoke["_"]);

if((or__3548__auto____9200))
{return or__3548__auto____9200;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7 = (function (this$,a,b,c,d,e,f){
if(((function (){var and__3546__auto____9203 = this$;

if((and__3546__auto____9203))
{return this$.cljs$core$IFn$_invoke__7;
} else
{return and__3546__auto____9203;
}
})()))
{return this$.cljs$core$IFn$_invoke__7(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____9206 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9206))
{return or__3548__auto____9206;
} else
{var or__3548__auto____9209 = (cljs.core._invoke["_"]);

if((or__3548__auto____9209))
{return or__3548__auto____9209;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__8 = (function (this$,a,b,c,d,e,f,g){
if(((function (){var and__3546__auto____9212 = this$;

if((and__3546__auto____9212))
{return this$.cljs$core$IFn$_invoke__8;
} else
{return and__3546__auto____9212;
}
})()))
{return this$.cljs$core$IFn$_invoke__8(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____9215 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9215))
{return or__3548__auto____9215;
} else
{var or__3548__auto____9218 = (cljs.core._invoke["_"]);

if((or__3548__auto____9218))
{return or__3548__auto____9218;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__9 = (function (this$,a,b,c,d,e,f,g,h){
if(((function (){var and__3546__auto____9221 = this$;

if((and__3546__auto____9221))
{return this$.cljs$core$IFn$_invoke__9;
} else
{return and__3546__auto____9221;
}
})()))
{return this$.cljs$core$IFn$_invoke__9(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____9225 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9225))
{return or__3548__auto____9225;
} else
{var or__3548__auto____9227 = (cljs.core._invoke["_"]);

if((or__3548__auto____9227))
{return or__3548__auto____9227;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__10 = (function (this$,a,b,c,d,e,f,g,h,i){
if(((function (){var and__3546__auto____9229 = this$;

if((and__3546__auto____9229))
{return this$.cljs$core$IFn$_invoke__10;
} else
{return and__3546__auto____9229;
}
})()))
{return this$.cljs$core$IFn$_invoke__10(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____9231 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9231))
{return or__3548__auto____9231;
} else
{var or__3548__auto____9233 = (cljs.core._invoke["_"]);

if((or__3548__auto____9233))
{return or__3548__auto____9233;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(((function (){var and__3546__auto____9235 = this$;

if((and__3546__auto____9235))
{return this$.cljs$core$IFn$_invoke__11;
} else
{return and__3546__auto____9235;
}
})()))
{return this$.cljs$core$IFn$_invoke__11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____9263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if((or__3548__auto____9263))
{return or__3548__auto____9263;
} else
{var or__3548__auto____9266 = (cljs.core._invoke["_"]);

if((or__3548__auto____9266))
{return or__3548__auto____9266;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____9340 = this$;

if(cljs.core.truth_(and__3546__auto____9340))
{return this$.cljs$core$IFn$_invoke__12;
} else
{return and__3546__auto____9340;
}
})()))
{return this$.cljs$core$IFn$_invoke__12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____9345 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9345))
{return or__3548__auto____9345;
} else
{var or__3548__auto____9347 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9347))
{return or__3548__auto____9347;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____9351 = this$;

if(cljs.core.truth_(and__3546__auto____9351))
{return this$.cljs$core$IFn$_invoke__13;
} else
{return and__3546__auto____9351;
}
})()))
{return this$.cljs$core$IFn$_invoke__13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____9355 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9355))
{return or__3548__auto____9355;
} else
{var or__3548__auto____9357 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9357))
{return or__3548__auto____9357;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____9359 = this$;

if(cljs.core.truth_(and__3546__auto____9359))
{return this$.cljs$core$IFn$_invoke__14;
} else
{return and__3546__auto____9359;
}
})()))
{return this$.cljs$core$IFn$_invoke__14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____9361 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9361))
{return or__3548__auto____9361;
} else
{var or__3548__auto____9363 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9363))
{return or__3548__auto____9363;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____9365 = this$;

if(cljs.core.truth_(and__3546__auto____9365))
{return this$.cljs$core$IFn$_invoke__15;
} else
{return and__3546__auto____9365;
}
})()))
{return this$.cljs$core$IFn$_invoke__15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____9367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9367))
{return or__3548__auto____9367;
} else
{var or__3548__auto____9369 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9369))
{return or__3548__auto____9369;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____9373 = this$;

if(cljs.core.truth_(and__3546__auto____9373))
{return this$.cljs$core$IFn$_invoke__16;
} else
{return and__3546__auto____9373;
}
})()))
{return this$.cljs$core$IFn$_invoke__16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____9378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9378))
{return or__3548__auto____9378;
} else
{var or__3548__auto____9381 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9381))
{return or__3548__auto____9381;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____9385 = this$;

if(cljs.core.truth_(and__3546__auto____9385))
{return this$.cljs$core$IFn$_invoke__17;
} else
{return and__3546__auto____9385;
}
})()))
{return this$.cljs$core$IFn$_invoke__17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____9389 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9389))
{return or__3548__auto____9389;
} else
{var or__3548__auto____9392 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9392))
{return or__3548__auto____9392;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____9397 = this$;

if(cljs.core.truth_(and__3546__auto____9397))
{return this$.cljs$core$IFn$_invoke__18;
} else
{return and__3546__auto____9397;
}
})()))
{return this$.cljs$core$IFn$_invoke__18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____9401 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9401))
{return or__3548__auto____9401;
} else
{var or__3548__auto____9403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9403))
{return or__3548__auto____9403;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____9408 = this$;

if(cljs.core.truth_(and__3546__auto____9408))
{return this$.cljs$core$IFn$_invoke__19;
} else
{return and__3546__auto____9408;
}
})()))
{return this$.cljs$core$IFn$_invoke__19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____9411 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9411))
{return or__3548__auto____9411;
} else
{var or__3548__auto____9414 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9414))
{return or__3548__auto____9414;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____9417 = this$;

if(cljs.core.truth_(and__3546__auto____9417))
{return this$.cljs$core$IFn$_invoke__20;
} else
{return and__3546__auto____9417;
}
})()))
{return this$.cljs$core$IFn$_invoke__20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____9420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9420))
{return or__3548__auto____9420;
} else
{var or__3548__auto____9422 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9422))
{return or__3548__auto____9422;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____9427 = this$;

if(cljs.core.truth_(and__3546__auto____9427))
{return this$.cljs$core$IFn$_invoke__21;
} else
{return and__3546__auto____9427;
}
})()))
{return this$.cljs$core$IFn$_invoke__21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____9433 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____9433))
{return or__3548__auto____9433;
} else
{var or__3548__auto____9435 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____9435))
{return or__3548__auto____9435;
} else
{throw cljs.core.missing_protocol("IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__1.call(this,this$);
case  2 :
return _invoke__2.call(this,this$,a);
case  3 :
return _invoke__3.call(this,this$,a,b);
case  4 :
return _invoke__4.call(this,this$,a,b,c);
case  5 :
return _invoke__5.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__8.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__9.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
_invoke.__1 = _invoke__1;
_invoke.__2 = _invoke__2;
_invoke.__3 = _invoke__3;
_invoke.__4 = _invoke__4;
_invoke.__5 = _invoke__5;
_invoke.__6 = _invoke__6;
_invoke.__7 = _invoke__7;
_invoke.__8 = _invoke__8;
_invoke.__9 = _invoke__9;
_invoke.__10 = _invoke__10;
_invoke.__11 = _invoke__11;
_invoke.__12 = _invoke__12;
_invoke.__13 = _invoke__13;
_invoke.__14 = _invoke__14;
_invoke.__15 = _invoke__15;
_invoke.__16 = _invoke__16;
_invoke.__17 = _invoke__17;
_invoke.__18 = _invoke__18;
_invoke.__19 = _invoke__19;
_invoke.__20 = _invoke__20;
_invoke.__21 = _invoke__21;
return _invoke;
})()
;
void 0;
void 0;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(((function (){var and__3546__auto____9975 = coll;

if(cljs.core.truth_(and__3546__auto____9975))
{return coll.cljs$core$ICounted$_count__1;
} else
{return and__3546__auto____9975;
}
})()))
{return coll.cljs$core$ICounted$_count__1(coll);
} else
{return (function (){var or__3548__auto____10012 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10012))
{return or__3548__auto____10012;
} else
{var or__3548__auto____10014 = (cljs.core._count["_"]);

if((or__3548__auto____10014))
{return or__3548__auto____10014;
} else
{throw cljs.core.missing_protocol("ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
void 0;
void 0;
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(((function (){var and__3546__auto____10037 = coll;

if(cljs.core.truth_(and__3546__auto____10037))
{return coll.cljs$core$IEmptyableCollection$_empty__1;
} else
{return and__3546__auto____10037;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty__1(coll);
} else
{return (function (){var or__3548__auto____10044 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10044))
{return or__3548__auto____10044;
} else
{var or__3548__auto____10046 = (cljs.core._empty["_"]);

if((or__3548__auto____10046))
{return or__3548__auto____10046;
} else
{throw cljs.core.missing_protocol("IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
void 0;
void 0;
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(((function (){var and__3546__auto____10068 = coll;

if((and__3546__auto____10068))
{return coll.cljs$core$ICollection$_conj__2;
} else
{return and__3546__auto____10068;
}
})()))
{return coll.cljs$core$ICollection$_conj__2(coll,o);
} else
{return (function (){var or__3548__auto____10075 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10075))
{return or__3548__auto____10075;
} else
{var or__3548__auto____10077 = (cljs.core._conj["_"]);

if((or__3548__auto____10077))
{return or__3548__auto____10077;
} else
{throw cljs.core.missing_protocol("ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
void 0;
void 0;
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2 = (function (coll,n){
if(((function (){var and__3546__auto____10103 = coll;

if(cljs.core.truth_(and__3546__auto____10103))
{return coll.cljs$core$IIndexed$_nth__2;
} else
{return and__3546__auto____10103;
}
})()))
{return coll.cljs$core$IIndexed$_nth__2(coll,n);
} else
{return (function (){var or__3548__auto____10110 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10110))
{return or__3548__auto____10110;
} else
{var or__3548__auto____10113 = (cljs.core._nth["_"]);

if((or__3548__auto____10113))
{return or__3548__auto____10113;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____10118 = coll;

if((and__3546__auto____10118))
{return coll.cljs$core$IIndexed$_nth__3;
} else
{return and__3546__auto____10118;
}
})()))
{return coll.cljs$core$IIndexed$_nth__3(coll,n,not_found);
} else
{return (function (){var or__3548__auto____10122 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____10122))
{return or__3548__auto____10122;
} else
{var or__3548__auto____10124 = (cljs.core._nth["_"]);

if((or__3548__auto____10124))
{return or__3548__auto____10124;
} else
{throw cljs.core.missing_protocol("IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2.call(this,coll,n);
case  3 :
return _nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_nth.__2 = _nth__2;
_nth.__3 = _nth__3;
return _nth;
})()
;
void 0;
void 0;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____10154 = coll;

if(cljs.core.truth_(and__3546__auto____10154))
{return coll.cljs$core$ISeq$_first__1;
} else
{return and__3546__auto____10154;
}
})()))
{return coll.cljs$core$ISeq$_first__1(coll);
} else
{return (function (){var or__3548__auto____10161 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____10161))
{return or__3548__auto____10161;
} else
{var or__3548__auto____10164 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____10164))
{return or__3548__auto____10164;
} else
{throw cljs.core.missing_protocol("ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(((function (){var and__3546__auto____10168 = coll;

if((and__3546__auto____10168))
{return coll.cljs$core$ISeq$_rest__1;
} else
{return and__3546__auto____10168;
}
})()))
{return coll.cljs$core$ISeq$_rest__1(coll);
} else
{return (function (){var or__3548__auto____10173 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10173))
{return or__3548__auto____10173;
} else
{var or__3548__auto____10176 = (cljs.core._rest["_"]);

if((or__3548__auto____10176))
{return or__3548__auto____10176;
} else
{throw cljs.core.missing_protocol("ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
void 0;
void 0;
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2 = (function (o,k){
if(((function (){var and__3546__auto____10207 = o;

if((and__3546__auto____10207))
{return o.cljs$core$ILookup$_lookup__2;
} else
{return and__3546__auto____10207;
}
})()))
{return o.cljs$core$ILookup$_lookup__2(o,k);
} else
{return (function (){var or__3548__auto____10214 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if((or__3548__auto____10214))
{return or__3548__auto____10214;
} else
{var or__3548__auto____10217 = (cljs.core._lookup["_"]);

if((or__3548__auto____10217))
{return or__3548__auto____10217;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____10221 = o;

if(cljs.core.truth_(and__3546__auto____10221))
{return o.cljs$core$ILookup$_lookup__3;
} else
{return and__3546__auto____10221;
}
})()))
{return o.cljs$core$ILookup$_lookup__3(o,k,not_found);
} else
{return (function (){var or__3548__auto____10225 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____10225))
{return or__3548__auto____10225;
} else
{var or__3548__auto____10229 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____10229))
{return or__3548__auto____10229;
} else
{throw cljs.core.missing_protocol("ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2.call(this,o,k);
case  3 :
return _lookup__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
_lookup.__2 = _lookup__2;
_lookup.__3 = _lookup__3;
return _lookup;
})()
;
void 0;
void 0;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____10259 = coll;

if((and__3546__auto____10259))
{return coll.cljs$core$IAssociative$_contains_key_QMARK___2;
} else
{return and__3546__auto____10259;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK___2(coll,k);
} else
{return (function (){var or__3548__auto____10264 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____10264))
{return or__3548__auto____10264;
} else
{var or__3548__auto____10267 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____10267))
{return or__3548__auto____10267;
} else
{throw cljs.core.missing_protocol("IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(((function (){var and__3546__auto____10271 = coll;

if((and__3546__auto____10271))
{return coll.cljs$core$IAssociative$_assoc__3;
} else
{return and__3546__auto____10271;
}
})()))
{return coll.cljs$core$IAssociative$_assoc__3(coll,k,v);
} else
{return (function (){var or__3548__auto____10273 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10273))
{return or__3548__auto____10273;
} else
{var or__3548__auto____10276 = (cljs.core._assoc["_"]);

if((or__3548__auto____10276))
{return or__3548__auto____10276;
} else
{throw cljs.core.missing_protocol("IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
void 0;
void 0;
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____10300 = coll;

if((and__3546__auto____10300))
{return coll.cljs$core$IMap$_dissoc__2;
} else
{return and__3546__auto____10300;
}
})()))
{return coll.cljs$core$IMap$_dissoc__2(coll,k);
} else
{return (function (){var or__3548__auto____10302 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10302))
{return or__3548__auto____10302;
} else
{var or__3548__auto____10305 = (cljs.core._dissoc["_"]);

if((or__3548__auto____10305))
{return or__3548__auto____10305;
} else
{throw cljs.core.missing_protocol("IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
void 0;
void 0;
cljs.core.IMapEntry = {};
cljs.core._key = (function _key(coll){
if(((function (){var and__3546__auto____10323 = coll;

if(cljs.core.truth_(and__3546__auto____10323))
{return coll.cljs$core$IMapEntry$_key__1;
} else
{return and__3546__auto____10323;
}
})()))
{return coll.cljs$core$IMapEntry$_key__1(coll);
} else
{return (function (){var or__3548__auto____10328 = (cljs.core._key[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10328))
{return or__3548__auto____10328;
} else
{var or__3548__auto____10331 = (cljs.core._key["_"]);

if((or__3548__auto____10331))
{return or__3548__auto____10331;
} else
{throw cljs.core.missing_protocol("IMapEntry.-key",coll);
}
}
})().call(null,coll);
}
});
cljs.core._val = (function _val(coll){
if(((function (){var and__3546__auto____10338 = coll;

if(cljs.core.truth_(and__3546__auto____10338))
{return coll.cljs$core$IMapEntry$_val__1;
} else
{return and__3546__auto____10338;
}
})()))
{return coll.cljs$core$IMapEntry$_val__1(coll);
} else
{return (function (){var or__3548__auto____10345 = (cljs.core._val[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10345))
{return or__3548__auto____10345;
} else
{var or__3548__auto____10349 = (cljs.core._val["_"]);

if(cljs.core.truth_(or__3548__auto____10349))
{return or__3548__auto____10349;
} else
{throw cljs.core.missing_protocol("IMapEntry.-val",coll);
}
}
})().call(null,coll);
}
});
void 0;
void 0;
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(((function (){var and__3546__auto____10512 = coll;

if(cljs.core.truth_(and__3546__auto____10512))
{return coll.cljs$core$ISet$_disjoin__2;
} else
{return and__3546__auto____10512;
}
})()))
{return coll.cljs$core$ISet$_disjoin__2(coll,v);
} else
{return (function (){var or__3548__auto____10517 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10517))
{return or__3548__auto____10517;
} else
{var or__3548__auto____10801 = (cljs.core._disjoin["_"]);

if((or__3548__auto____10801))
{return or__3548__auto____10801;
} else
{throw cljs.core.missing_protocol("ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
void 0;
void 0;
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(((function (){var and__3546__auto____10816 = coll;

if((and__3546__auto____10816))
{return coll.cljs$core$IStack$_peek__1;
} else
{return and__3546__auto____10816;
}
})()))
{return coll.cljs$core$IStack$_peek__1(coll);
} else
{return (function (){var or__3548__auto____10818 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10818))
{return or__3548__auto____10818;
} else
{var or__3548__auto____10819 = (cljs.core._peek["_"]);

if((or__3548__auto____10819))
{return or__3548__auto____10819;
} else
{throw cljs.core.missing_protocol("IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(((function (){var and__3546__auto____10822 = coll;

if((and__3546__auto____10822))
{return coll.cljs$core$IStack$_pop__1;
} else
{return and__3546__auto____10822;
}
})()))
{return coll.cljs$core$IStack$_pop__1(coll);
} else
{return (function (){var or__3548__auto____10823 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10823))
{return or__3548__auto____10823;
} else
{var or__3548__auto____10824 = (cljs.core._pop["_"]);

if((or__3548__auto____10824))
{return or__3548__auto____10824;
} else
{throw cljs.core.missing_protocol("IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
void 0;
void 0;
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____10837 = coll;

if(cljs.core.truth_(and__3546__auto____10837))
{return coll.cljs$core$IVector$_assoc_n__3;
} else
{return and__3546__auto____10837;
}
})()))
{return coll.cljs$core$IVector$_assoc_n__3(coll,n,val);
} else
{return (function (){var or__3548__auto____10863 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____10863))
{return or__3548__auto____10863;
} else
{var or__3548__auto____10865 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____10865))
{return or__3548__auto____10865;
} else
{throw cljs.core.missing_protocol("IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
void 0;
void 0;
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____10876 = o;

if((and__3546__auto____10876))
{return o.cljs$core$IDeref$_deref__1;
} else
{return and__3546__auto____10876;
}
})()))
{return o.cljs$core$IDeref$_deref__1(o);
} else
{return (function (){var or__3548__auto____10877 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____10877))
{return or__3548__auto____10877;
} else
{var or__3548__auto____10880 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____10880))
{return or__3548__auto____10880;
} else
{throw cljs.core.missing_protocol("IDeref.-deref",o);
}
}
})().call(null,o);
}
});
void 0;
void 0;
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____10897 = o;

if((and__3546__auto____10897))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout__3;
} else
{return and__3546__auto____10897;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout__3(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____10903 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____10903))
{return or__3548__auto____10903;
} else
{var or__3548__auto____10909 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____10909))
{return or__3548__auto____10909;
} else
{throw cljs.core.missing_protocol("IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
void 0;
void 0;
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____10921 = o;

if((and__3546__auto____10921))
{return o.cljs$core$IMeta$_meta__1;
} else
{return and__3546__auto____10921;
}
})()))
{return o.cljs$core$IMeta$_meta__1(o);
} else
{return (function (){var or__3548__auto____10925 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____10925))
{return or__3548__auto____10925;
} else
{var or__3548__auto____10929 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____10929))
{return or__3548__auto____10929;
} else
{throw cljs.core.missing_protocol("IMeta.-meta",o);
}
}
})().call(null,o);
}
});
void 0;
void 0;
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____10944 = o;

if(cljs.core.truth_(and__3546__auto____10944))
{return o.cljs$core$IWithMeta$_with_meta__2;
} else
{return and__3546__auto____10944;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta__2(o,meta);
} else
{return (function (){var or__3548__auto____10957 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____10957))
{return or__3548__auto____10957;
} else
{var or__3548__auto____10958 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____10958))
{return or__3548__auto____10958;
} else
{throw cljs.core.missing_protocol("IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
void 0;
void 0;
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2 = (function (coll,f){
if(((function (){var and__3546__auto____10965 = coll;

if((and__3546__auto____10965))
{return coll.cljs$core$IReduce$_reduce__2;
} else
{return and__3546__auto____10965;
}
})()))
{return coll.cljs$core$IReduce$_reduce__2(coll,f);
} else
{return (function (){var or__3548__auto____10966 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10966))
{return or__3548__auto____10966;
} else
{var or__3548__auto____10968 = (cljs.core._reduce["_"]);

if((or__3548__auto____10968))
{return or__3548__auto____10968;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3 = (function (coll,f,start){
if(((function (){var and__3546__auto____10969 = coll;

if((and__3546__auto____10969))
{return coll.cljs$core$IReduce$_reduce__3;
} else
{return and__3546__auto____10969;
}
})()))
{return coll.cljs$core$IReduce$_reduce__3(coll,f,start);
} else
{return (function (){var or__3548__auto____10970 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if((or__3548__auto____10970))
{return or__3548__auto____10970;
} else
{var or__3548__auto____10971 = (cljs.core._reduce["_"]);

if((or__3548__auto____10971))
{return or__3548__auto____10971;
} else
{throw cljs.core.missing_protocol("IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2.call(this,coll,f);
case  3 :
return _reduce__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
_reduce.__2 = _reduce__2;
_reduce.__3 = _reduce__3;
return _reduce;
})()
;
void 0;
void 0;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(((function (){var and__3546__auto____10986 = o;

if((and__3546__auto____10986))
{return o.cljs$core$IEquiv$_equiv__2;
} else
{return and__3546__auto____10986;
}
})()))
{return o.cljs$core$IEquiv$_equiv__2(o,other);
} else
{return (function (){var or__3548__auto____10987 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if((or__3548__auto____10987))
{return or__3548__auto____10987;
} else
{var or__3548__auto____10989 = (cljs.core._equiv["_"]);

if((or__3548__auto____10989))
{return or__3548__auto____10989;
} else
{throw cljs.core.missing_protocol("IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
void 0;
void 0;
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(((function (){var and__3546__auto____11004 = o;

if((and__3546__auto____11004))
{return o.cljs$core$IHash$_hash__1;
} else
{return and__3546__auto____11004;
}
})()))
{return o.cljs$core$IHash$_hash__1(o);
} else
{return (function (){var or__3548__auto____11010 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if((or__3548__auto____11010))
{return or__3548__auto____11010;
} else
{var or__3548__auto____11012 = (cljs.core._hash["_"]);

if((or__3548__auto____11012))
{return or__3548__auto____11012;
} else
{throw cljs.core.missing_protocol("IHash.-hash",o);
}
}
})().call(null,o);
}
});
void 0;
void 0;
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(((function (){var and__3546__auto____11044 = o;

if((and__3546__auto____11044))
{return o.cljs$core$ISeqable$_seq__1;
} else
{return and__3546__auto____11044;
}
})()))
{return o.cljs$core$ISeqable$_seq__1(o);
} else
{return (function (){var or__3548__auto____11045 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if((or__3548__auto____11045))
{return or__3548__auto____11045;
} else
{var or__3548__auto____11048 = (cljs.core._seq["_"]);

if((or__3548__auto____11048))
{return or__3548__auto____11048;
} else
{throw cljs.core.missing_protocol("ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
void 0;
void 0;
cljs.core.ISequential = {};
void 0;
void 0;
cljs.core.IList = {};
void 0;
void 0;
cljs.core.IRecord = {};
void 0;
void 0;
cljs.core.IReversible = {};
cljs.core._rseq = (function _rseq(coll){
if(((function (){var and__3546__auto____11058 = coll;

if((and__3546__auto____11058))
{return coll.cljs$core$IReversible$_rseq__1;
} else
{return and__3546__auto____11058;
}
})()))
{return coll.cljs$core$IReversible$_rseq__1(coll);
} else
{return (function (){var or__3548__auto____11060 = (cljs.core._rseq[goog.typeOf.call(null,coll)]);

if((or__3548__auto____11060))
{return or__3548__auto____11060;
} else
{var or__3548__auto____11062 = (cljs.core._rseq["_"]);

if((or__3548__auto____11062))
{return or__3548__auto____11062;
} else
{throw cljs.core.missing_protocol("IReversible.-rseq",coll);
}
}
})().call(null,coll);
}
});
void 0;
void 0;
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(((function (){var and__3546__auto____11073 = o;

if((and__3546__auto____11073))
{return o.cljs$core$IPrintable$_pr_seq__2;
} else
{return and__3546__auto____11073;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq__2(o,opts);
} else
{return (function (){var or__3548__auto____11078 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if((or__3548__auto____11078))
{return or__3548__auto____11078;
} else
{var or__3548__auto____11079 = (cljs.core._pr_seq["_"]);

if((or__3548__auto____11079))
{return or__3548__auto____11079;
} else
{throw cljs.core.missing_protocol("IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
void 0;
void 0;
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(((function (){var and__3546__auto____11095 = d;

if((and__3546__auto____11095))
{return d.cljs$core$IPending$_realized_QMARK___1;
} else
{return and__3546__auto____11095;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK___1(d);
} else
{return (function (){var or__3548__auto____11098 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if((or__3548__auto____11098))
{return or__3548__auto____11098;
} else
{var or__3548__auto____11099 = (cljs.core._realized_QMARK_["_"]);

if((or__3548__auto____11099))
{return or__3548__auto____11099;
} else
{throw cljs.core.missing_protocol("IPending.-realized?",d);
}
}
})().call(null,d);
}
});
void 0;
void 0;
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(((function (){var and__3546__auto____11110 = this$;

if((and__3546__auto____11110))
{return this$.cljs$core$IWatchable$_notify_watches__3;
} else
{return and__3546__auto____11110;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches__3(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____11112 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if((or__3548__auto____11112))
{return or__3548__auto____11112;
} else
{var or__3548__auto____11114 = (cljs.core._notify_watches["_"]);

if((or__3548__auto____11114))
{return or__3548__auto____11114;
} else
{throw cljs.core.missing_protocol("IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(((function (){var and__3546__auto____11115 = this$;

if((and__3546__auto____11115))
{return this$.cljs$core$IWatchable$_add_watch__3;
} else
{return and__3546__auto____11115;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch__3(this$,key,f);
} else
{return (function (){var or__3548__auto____11117 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if((or__3548__auto____11117))
{return or__3548__auto____11117;
} else
{var or__3548__auto____11119 = (cljs.core._add_watch["_"]);

if((or__3548__auto____11119))
{return or__3548__auto____11119;
} else
{throw cljs.core.missing_protocol("IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(((function (){var and__3546__auto____11129 = this$;

if((and__3546__auto____11129))
{return this$.cljs$core$IWatchable$_remove_watch__2;
} else
{return and__3546__auto____11129;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch__2(this$,key);
} else
{return (function (){var or__3548__auto____11130 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if((or__3548__auto____11130))
{return or__3548__auto____11130;
} else
{var or__3548__auto____11133 = (cljs.core._remove_watch["_"]);

if((or__3548__auto____11133))
{return or__3548__auto____11133;
} else
{throw cljs.core.missing_protocol("IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
void 0;
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
void 0;
void 0;
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
* @param {...*} var_args
*/
cljs.core._EQ_ = (function() {
var _EQ_ = null;
var _EQ___1 = (function (x){
return true;
});
var _EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ___3 = (function() { 
var G__11173__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(cljs.core._equiv(x,y)))
{if(cljs.core.truth_(cljs.core.next(more)))
{{
var G__11176 = y;
var G__11177 = cljs.core.first(more);
var G__11178 = cljs.core.next(more);
x = G__11176;
y = G__11177;
more = G__11178;
continue;
}
} else
{return cljs.core._equiv(y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__11173 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11173__delegate.call(this, x, y, more);
};
G__11173.cljs$lang$maxFixedArity = 2;
G__11173.cljs$lang$applyTo = (function (arglist__11181){
var x = cljs.core.first(arglist__11181);
var y = cljs.core.first(cljs.core.next(arglist__11181));
var more = cljs.core.rest(cljs.core.next(arglist__11181));
return G__11173__delegate.call(this, x, y, more);
});
return G__11173;
})()
;
_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ___1.call(this,x);
case  2 :
return _EQ___2.call(this,x,y);
default:
return _EQ___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ_.cljs$lang$maxFixedArity = 2;
_EQ_.cljs$lang$applyTo = _EQ___3.cljs$lang$applyTo;
_EQ_.__1 = _EQ___1;
_EQ_.__2 = _EQ___2;
_EQ_.__3 = _EQ___3;
return _EQ_;
})()
;
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
if(((function (){var or__3548__auto____11183 = (x === null);

if((or__3548__auto____11183))
{return or__3548__auto____11183;
} else
{return (void 0 === x);
}
})()))
{return null;
} else
{return (x).constructor;
}
});
void 0;
void 0;
void 0;
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__11196 = null;
var G__11196__2 = (function (o,k){
return null;
});
var G__11196__3 = (function (o,k,not_found){
return not_found;
});
G__11196 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__11196__2.call(this,o,k);
case  3 :
return G__11196__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11196;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map(k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list(o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__11203 = null;
var G__11203__2 = (function (_,f){
return f.call(null);
});
var G__11203__3 = (function (_,f,start){
return start;
});
G__11203 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__11203__2.call(this,_,f);
case  3 :
return G__11203__3.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11203;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list("nil");
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
return cljs.core.list();
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return (o === null);
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
var G__11208 = null;
var G__11208__2 = (function (_,n){
return null;
});
var G__11208__3 = (function (_,n,not_found){
return not_found;
});
G__11208 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__11208__2.call(this,_,n);
case  3 :
return G__11208__3.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11208;
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
Date.prototype.cljs$core$IEquiv$_equiv__2 = (function (o,other){
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
var ci_reduce__2 = (function (cicoll,f){
if((cljs.core._EQ_.__2(0,cljs.core._count(cicoll))))
{return f.call(null);
} else
{var val__11220 = cljs.core._nth.__2(cicoll,0);
var n__11221 = 1;

while(true){
if(((n__11221 < cljs.core._count(cicoll))))
{{
var G__11235 = f.call(null,val__11220,cljs.core._nth.__2(cicoll,n__11221));
var G__11236 = (n__11221 + 1);
val__11220 = G__11235;
n__11221 = G__11236;
continue;
}
} else
{return val__11220;
}
break;
}
}
});
var ci_reduce__3 = (function (cicoll,f,val){
var val__11223 = val;
var n__11224 = 0;

while(true){
if(((n__11224 < cljs.core._count(cicoll))))
{{
var G__11238 = f.call(null,val__11223,cljs.core._nth.__2(cicoll,n__11224));
var G__11239 = (n__11224 + 1);
val__11223 = G__11238;
n__11224 = G__11239;
continue;
}
} else
{return val__11223;
}
break;
}
});
var ci_reduce__4 = (function (cicoll,f,val,idx){
var val__11225 = val;
var n__11226 = idx;

while(true){
if(((n__11226 < cljs.core._count(cicoll))))
{{
var G__11241 = f.call(null,val__11225,cljs.core._nth.__2(cicoll,n__11226));
var G__11242 = (n__11226 + 1);
val__11225 = G__11241;
n__11226 = G__11242;
continue;
}
} else
{return val__11225;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2.call(this,cicoll,f);
case  3 :
return ci_reduce__3.call(this,cicoll,f,val);
case  4 :
return ci_reduce__4.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
ci_reduce.__2 = ci_reduce__2;
ci_reduce.__3 = ci_reduce__3;
ci_reduce.__4 = ci_reduce__4;
return ci_reduce;
})()
;
void 0;
void 0;
void 0;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__11243 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__11244 = this;
return cljs.core.cons(o,coll);
});
cljs.core.IndexedSeq.prototype.toString = (function (){
var this__11245 = this;
var this$__11247 = this;

return cljs.core.pr_str(this$__11247);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce__2 = (function (_,f){
var this__11268 = this;
return cljs.core.ci_reduce.__4(this__11268.a,f,(this__11268.a[this__11268.i]),(this__11268.i + 1));
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce__3 = (function (_,f,start){
var this__11272 = this;
return cljs.core.ci_reduce.__4(this__11272.a,f,start,this__11272.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq__1 = (function (this$){
var this__11275 = this;
return this$;
});
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count__1 = (function (_){
var this__11277 = this;
return (this__11277.a.length - this__11277.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first__1 = (function (_){
var this__11278 = this;
return (this__11278.a[this__11278.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest__1 = (function (_){
var this__11279 = this;
if((((this__11279.i + 1) < this__11279.a.length)))
{return (new cljs.core.IndexedSeq(this__11279.a,(this__11279.i + 1)));
} else
{return cljs.core.list();
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__11280 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth__2 = (function (coll,n){
var this__11281 = this;
var i__11282 = (n + this__11281.i);

if(((i__11282 < this__11281.a.length)))
{return (this__11281.a[i__11282]);
} else
{return null;
}
});
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth__3 = (function (coll,n,not_found){
var this__11284 = this;
var i__11286 = (n + this__11284.i);

if(((i__11286 < this__11284.a.length)))
{return (this__11284.a[i__11286]);
} else
{return not_found;
}
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if((cljs.core._EQ_.__2(0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq(array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__11333 = null;
var G__11333__2 = (function (array,f){
return cljs.core.ci_reduce.__2(array,f);
});
var G__11333__3 = (function (array,f,start){
return cljs.core.ci_reduce.__3(array,f,start);
});
G__11333 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__11333__2.call(this,array,f);
case  3 :
return G__11333__3.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11333;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__11336 = null;
var G__11336__2 = (function (array,k){
return (array[k]);
});
var G__11336__3 = (function (array,k,not_found){
return cljs.core._nth.__3(array,k,not_found);
});
G__11336 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__11336__2.call(this,array,k);
case  3 :
return G__11336__3.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11336;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__11338 = null;
var G__11338__2 = (function (array,n){
if(((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__11338__3 = (function (array,n,not_found){
if(((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__11338 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__11338__2.call(this,array,n);
case  3 :
return G__11338__3.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11338;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq(array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq(coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____11352 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____11352))
{var s__11354 = temp__3698__auto____11352;

return cljs.core._first(s__11354);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest(cljs.core.seq(coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq(cljs.core.rest(coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first(cljs.core.first(coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next(cljs.core.first(coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first(cljs.core.next(coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next(cljs.core.next(coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next(s)))
{{
var G__11489 = cljs.core.next(s);
s = G__11489;
continue;
}
} else
{return cljs.core.first(s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__11493 = cljs.core.seq(x);
var n__11494 = 0;

while(true){
if(cljs.core.truth_(s__11493))
{{
var G__11500 = cljs.core.next(s__11493);
var G__11501 = (n__11494 + 1);
s__11493 = G__11500;
n__11494 = G__11501;
continue;
}
} else
{return n__11494;
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
var conj__2 = (function (coll,x){
return cljs.core._conj(coll,x);
});
var conj__3 = (function() { 
var G__11516__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__11518 = conj.call(null,coll,x);
var G__11519 = cljs.core.first(xs);
var G__11520 = cljs.core.next(xs);
coll = G__11518;
x = G__11519;
xs = G__11520;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__11516 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11516__delegate.call(this, coll, x, xs);
};
G__11516.cljs$lang$maxFixedArity = 2;
G__11516.cljs$lang$applyTo = (function (arglist__11522){
var coll = cljs.core.first(arglist__11522);
var x = cljs.core.first(cljs.core.next(arglist__11522));
var xs = cljs.core.rest(cljs.core.next(arglist__11522));
return G__11516__delegate.call(this, coll, x, xs);
});
return G__11516;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2.call(this,coll,x);
default:
return conj__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3.cljs$lang$applyTo;
conj.__2 = conj__2;
conj.__3 = conj__3;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty(coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count(coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2 = (function (coll,n){
return cljs.core._nth.__2(coll,Math.floor(n));
});
var nth__3 = (function (coll,n,not_found){
return cljs.core._nth.__3(coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2.call(this,coll,n);
case  3 :
return nth__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
nth.__2 = nth__2;
nth.__3 = nth__3;
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2 = (function (o,k){
return cljs.core._lookup.__2(o,k);
});
var get__3 = (function (o,k,not_found){
return cljs.core._lookup.__3(o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2.call(this,o,k);
case  3 :
return get__3.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get.__2 = get__2;
get.__3 = get__3;
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
var assoc__3 = (function (coll,k,v){
return cljs.core._assoc(coll,k,v);
});
var assoc__4 = (function() { 
var G__11561__delegate = function (coll,k,v,kvs){
while(true){
var ret__11550 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__11563 = ret__11550;
var G__11564 = cljs.core.first(kvs);
var G__11565 = cljs.core.second(kvs);
var G__11566 = cljs.core.nnext(kvs);
coll = G__11563;
k = G__11564;
v = G__11565;
kvs = G__11566;
continue;
}
} else
{return ret__11550;
}
break;
}
};
var G__11561 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11561__delegate.call(this, coll, k, v, kvs);
};
G__11561.cljs$lang$maxFixedArity = 3;
G__11561.cljs$lang$applyTo = (function (arglist__11569){
var coll = cljs.core.first(arglist__11569);
var k = cljs.core.first(cljs.core.next(arglist__11569));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11569)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11569)));
return G__11561__delegate.call(this, coll, k, v, kvs);
});
return G__11561;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3.call(this,coll,k,v);
default:
return assoc__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__4.cljs$lang$applyTo;
assoc.__3 = assoc__3;
assoc.__4 = assoc__4;
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
var dissoc__1 = (function (coll){
return coll;
});
var dissoc__2 = (function (coll,k){
return cljs.core._dissoc(coll,k);
});
var dissoc__3 = (function() { 
var G__11595__delegate = function (coll,k,ks){
while(true){
var ret__11588 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__11598 = ret__11588;
var G__11599 = cljs.core.first(ks);
var G__11600 = cljs.core.next(ks);
coll = G__11598;
k = G__11599;
ks = G__11600;
continue;
}
} else
{return ret__11588;
}
break;
}
};
var G__11595 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11595__delegate.call(this, coll, k, ks);
};
G__11595.cljs$lang$maxFixedArity = 2;
G__11595.cljs$lang$applyTo = (function (arglist__11601){
var coll = cljs.core.first(arglist__11601);
var k = cljs.core.first(cljs.core.next(arglist__11601));
var ks = cljs.core.rest(cljs.core.next(arglist__11601));
return G__11595__delegate.call(this, coll, k, ks);
});
return G__11595;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__1.call(this,coll);
case  2 :
return dissoc__2.call(this,coll,k);
default:
return dissoc__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3.cljs$lang$applyTo;
dissoc.__1 = dissoc__1;
dissoc.__2 = dissoc__2;
dissoc.__3 = dissoc__3;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta(o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__462__auto____11613 = o;

if(cljs.core.truth_((function (){var and__3546__auto____11615 = x__462__auto____11613;

if(cljs.core.truth_(and__3546__auto____11615))
{var and__3546__auto____11616 = x__462__auto____11613.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____11616))
{return cljs.core.not(x__462__auto____11613.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____11616;
}
} else
{return and__3546__auto____11615;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,x__462__auto____11613);
}
})()))
{return cljs.core._meta(o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek(coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop(coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__1 = (function (coll){
return coll;
});
var disj__2 = (function (coll,k){
return cljs.core._disjoin(coll,k);
});
var disj__3 = (function() { 
var G__11645__delegate = function (coll,k,ks){
while(true){
var ret__11638 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__11652 = ret__11638;
var G__11653 = cljs.core.first(ks);
var G__11654 = cljs.core.next(ks);
coll = G__11652;
k = G__11653;
ks = G__11654;
continue;
}
} else
{return ret__11638;
}
break;
}
};
var G__11645 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11645__delegate.call(this, coll, k, ks);
};
G__11645.cljs$lang$maxFixedArity = 2;
G__11645.cljs$lang$applyTo = (function (arglist__11660){
var coll = cljs.core.first(arglist__11660);
var k = cljs.core.first(cljs.core.next(arglist__11660));
var ks = cljs.core.rest(cljs.core.next(arglist__11660));
return G__11645__delegate.call(this, coll, k, ks);
});
return G__11645;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__1.call(this,coll);
case  2 :
return disj__2.call(this,coll,k);
default:
return disj__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3.cljs$lang$applyTo;
disj.__1 = disj__1;
disj.__2 = disj__2;
disj.__3 = disj__3;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash(o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not(cljs.core.seq(coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(((x === null)))
{return false;
} else
{var x__462__auto____11676 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11677 = x__462__auto____11676;

if(cljs.core.truth_(and__3546__auto____11677))
{var and__3546__auto____11678 = x__462__auto____11676.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____11678))
{return cljs.core.not(x__462__auto____11676.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____11678;
}
} else
{return and__3546__auto____11677;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.ICollection,x__462__auto____11676);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(((x === null)))
{return false;
} else
{var x__462__auto____11689 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11735 = x__462__auto____11689;

if(cljs.core.truth_(and__3546__auto____11735))
{var and__3546__auto____11737 = x__462__auto____11689.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____11737))
{return cljs.core.not(x__462__auto____11689.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____11737;
}
} else
{return and__3546__auto____11735;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.ISet,x__462__auto____11689);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__462__auto____11752 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11753 = x__462__auto____11752;

if(cljs.core.truth_(and__3546__auto____11753))
{var and__3546__auto____11754 = x__462__auto____11752.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____11754))
{return cljs.core.not(x__462__auto____11752.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____11754;
}
} else
{return and__3546__auto____11753;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IAssociative,x__462__auto____11752);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__462__auto____11766 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11768 = x__462__auto____11766;

if(cljs.core.truth_(and__3546__auto____11768))
{var and__3546__auto____11769 = x__462__auto____11766.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____11769))
{return cljs.core.not(x__462__auto____11766.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____11769;
}
} else
{return and__3546__auto____11768;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.ISequential,x__462__auto____11766);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__462__auto____11784 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11786 = x__462__auto____11784;

if(cljs.core.truth_(and__3546__auto____11786))
{var and__3546__auto____11787 = x__462__auto____11784.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____11787))
{return cljs.core.not(x__462__auto____11784.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____11787;
}
} else
{return and__3546__auto____11786;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.ICounted,x__462__auto____11784);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(((x === null)))
{return false;
} else
{var x__462__auto____11795 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11797 = x__462__auto____11795;

if(cljs.core.truth_(and__3546__auto____11797))
{var and__3546__auto____11800 = x__462__auto____11795.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____11800))
{return cljs.core.not(x__462__auto____11795.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____11800;
}
} else
{return and__3546__auto____11797;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IMap,x__462__auto____11795);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__462__auto____11816 = x;

if(cljs.core.truth_((function (){var and__3546__auto____11817 = x__462__auto____11816;

if(cljs.core.truth_(and__3546__auto____11817))
{var and__3546__auto____11818 = x__462__auto____11816.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____11818))
{return cljs.core.not(x__462__auto____11816.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____11818;
}
} else
{return and__3546__auto____11817;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IVector,x__462__auto____11816);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__11890 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__11890.push(key);
}));
return keys__11890;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj();
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
if(((s === null)))
{return false;
} else
{var x__462__auto____11903 = s;

if(cljs.core.truth_((function (){var and__3546__auto____11904 = x__462__auto____11903;

if(cljs.core.truth_(and__3546__auto____11904))
{var and__3546__auto____11905 = x__462__auto____11903.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____11905))
{return cljs.core.not(x__462__auto____11903.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____11905;
}
} else
{return and__3546__auto____11904;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.ISeq,x__462__auto____11903);
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
var and__3546__auto____11922 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____11922))
{return cljs.core.not((function (){var or__3548__auto____11925 = cljs.core._EQ_.__2(x.charAt(0),"\uFDD0");

if((or__3548__auto____11925))
{return or__3548__auto____11925;
} else
{return cljs.core._EQ_.__2(x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____11922;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____11938 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____11938))
{return cljs.core._EQ_.__2(x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____11938;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____11943 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____11943))
{return cljs.core._EQ_.__2(x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____11943;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
cljs.core.ifn_QMARK_ = (function ifn_QMARK_(f){
var or__3548__auto____11956 = cljs.core.fn_QMARK_(f);

if((or__3548__auto____11956))
{return or__3548__auto____11956;
} else
{var x__462__auto____11959 = f;

if(cljs.core.truth_((function (){var and__3546__auto____11960 = x__462__auto____11959;

if(cljs.core.truth_(and__3546__auto____11960))
{var and__3546__auto____11962 = x__462__auto____11959.cljs$core$IFn$;

if(cljs.core.truth_(and__3546__auto____11962))
{return cljs.core.not(x__462__auto____11959.hasOwnProperty("cljs$core$IFn$"));
} else
{return and__3546__auto____11962;
}
} else
{return and__3546__auto____11960;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IFn,x__462__auto____11959);
}
}
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____12017 = cljs.core.number_QMARK_(n);

if((and__3546__auto____12017))
{return (n == n.toFixed());
} else
{return and__3546__auto____12017;
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
if(((cljs.core._lookup.__3(coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____12064 = coll;

if(cljs.core.truth_(and__3546__auto____12064))
{var and__3546__auto____12068 = cljs.core.associative_QMARK_(coll);

if((and__3546__auto____12068))
{return cljs.core.contains_QMARK_(coll,k);
} else
{return and__3546__auto____12068;
}
} else
{return and__3546__auto____12064;
}
})()))
{return cljs.core.PersistentVector.fromArray([k,cljs.core._lookup.__2(coll,k)]);
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
var distinct_QMARK___1 = (function (x){
return true;
});
var distinct_QMARK___2 = (function (x,y){
return cljs.core.not(cljs.core._EQ_.__2(x,y));
});
var distinct_QMARK___3 = (function() { 
var G__12084__delegate = function (x,y,more){
if((cljs.core.not(cljs.core._EQ_.__2(x,y))))
{var s__12073 = cljs.core.set([y,x]);
var xs__12075 = more;

while(true){
var x__12076 = cljs.core.first(xs__12075);
var etc__12077 = cljs.core.next(xs__12075);

if(cljs.core.truth_(xs__12075))
{if((cljs.core.contains_QMARK_(s__12073,x__12076)))
{return false;
} else
{{
var G__12089 = cljs.core.conj.__2(s__12073,x__12076);
var G__12090 = etc__12077;
s__12073 = G__12089;
xs__12075 = G__12090;
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
var G__12084 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12084__delegate.call(this, x, y, more);
};
G__12084.cljs$lang$maxFixedArity = 2;
G__12084.cljs$lang$applyTo = (function (arglist__12091){
var x = cljs.core.first(arglist__12091);
var y = cljs.core.first(cljs.core.next(arglist__12091));
var more = cljs.core.rest(cljs.core.next(arglist__12091));
return G__12084__delegate.call(this, x, y, more);
});
return G__12084;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___1.call(this,x);
case  2 :
return distinct_QMARK___2.call(this,x,y);
default:
return distinct_QMARK___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3.cljs$lang$applyTo;
distinct_QMARK_.__1 = distinct_QMARK___1;
distinct_QMARK_.__2 = distinct_QMARK___2;
distinct_QMARK_.__3 = distinct_QMARK___3;
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
if((cljs.core._EQ_.__2(f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__12098 = f.call(null,x,y);

if((cljs.core.number_QMARK_(r__12098)))
{return r__12098;
} else
{if(cljs.core.truth_(r__12098))
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
void 0;
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__1 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq(coll)))
{var a__12111 = cljs.core.to_array(coll);

goog.array.stableSort.call(null,a__12111,cljs.core.fn__GT_comparator(comp));
return cljs.core.seq(a__12111);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__1.call(this,comp);
case  2 :
return sort__2.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort.__1 = sort__1;
sort.__2 = sort__2;
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
var sort_by__2 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3 = (function (keyfn,comp,coll){
return cljs.core.sort.__2((function (x,y){
return cljs.core.fn__GT_comparator(comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2.call(this,keyfn,comp);
case  3 :
return sort_by__3.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
sort_by.__2 = sort_by__2;
sort_by.__3 = sort_by__3;
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
var reduce__2 = (function (f,coll){
return cljs.core._reduce.__2(coll,f);
});
var reduce__3 = (function (f,val,coll){
return cljs.core._reduce.__3(coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2.call(this,f,val);
case  3 :
return reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reduce.__2 = reduce__2;
reduce.__3 = reduce__3;
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2 = (function (f,coll){
var temp__3695__auto____12224 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3695__auto____12224))
{var s__12233 = temp__3695__auto____12224;

return cljs.core.reduce.__3(f,cljs.core.first(s__12233),cljs.core.next(s__12233));
} else
{return f.call(null);
}
});
var seq_reduce__3 = (function (f,val,coll){
var val__12235 = val;
var coll__12237 = cljs.core.seq(coll);

while(true){
if(cljs.core.truth_(coll__12237))
{{
var G__12284 = f.call(null,val__12235,cljs.core.first(coll__12237));
var G__12285 = cljs.core.next(coll__12237);
val__12235 = G__12284;
coll__12237 = G__12285;
continue;
}
} else
{return val__12235;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2.call(this,f,val);
case  3 :
return seq_reduce__3.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
seq_reduce.__2 = seq_reduce__2;
seq_reduce.__3 = seq_reduce__3;
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__12291 = null;
var G__12291__2 = (function (coll,f){
return cljs.core.seq_reduce.__2(f,coll);
});
var G__12291__3 = (function (coll,f,start){
return cljs.core.seq_reduce.__3(f,start,coll);
});
G__12291 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12291__2.call(this,coll,f);
case  3 :
return G__12291__3.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12291;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___0 = (function (){
return 0;
});
var _PLUS___1 = (function (x){
return x;
});
var _PLUS___2 = (function (x,y){
return (x + y);
});
var _PLUS___3 = (function() { 
var G__12310__delegate = function (x,y,more){
return cljs.core.reduce.__3(_PLUS_,(x + y),more);
};
var G__12310 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12310__delegate.call(this, x, y, more);
};
G__12310.cljs$lang$maxFixedArity = 2;
G__12310.cljs$lang$applyTo = (function (arglist__12330){
var x = cljs.core.first(arglist__12330);
var y = cljs.core.first(cljs.core.next(arglist__12330));
var more = cljs.core.rest(cljs.core.next(arglist__12330));
return G__12310__delegate.call(this, x, y, more);
});
return G__12310;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___0.call(this);
case  1 :
return _PLUS___1.call(this,x);
case  2 :
return _PLUS___2.call(this,x,y);
default:
return _PLUS___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3.cljs$lang$applyTo;
_PLUS_.__0 = _PLUS___0;
_PLUS_.__1 = _PLUS___1;
_PLUS_.__2 = _PLUS___2;
_PLUS_.__3 = _PLUS___3;
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
var ___1 = (function (x){
return (- x);
});
var ___2 = (function (x,y){
return (x - y);
});
var ___3 = (function() { 
var G__12331__delegate = function (x,y,more){
return cljs.core.reduce.__3(_,(x - y),more);
};
var G__12331 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12331__delegate.call(this, x, y, more);
};
G__12331.cljs$lang$maxFixedArity = 2;
G__12331.cljs$lang$applyTo = (function (arglist__12332){
var x = cljs.core.first(arglist__12332);
var y = cljs.core.first(cljs.core.next(arglist__12332));
var more = cljs.core.rest(cljs.core.next(arglist__12332));
return G__12331__delegate.call(this, x, y, more);
});
return G__12331;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___1.call(this,x);
case  2 :
return ___2.call(this,x,y);
default:
return ___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3.cljs$lang$applyTo;
_.__1 = ___1;
_.__2 = ___2;
_.__3 = ___3;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___0 = (function (){
return 1;
});
var _STAR___1 = (function (x){
return x;
});
var _STAR___2 = (function (x,y){
return (x * y);
});
var _STAR___3 = (function() { 
var G__12333__delegate = function (x,y,more){
return cljs.core.reduce.__3(_STAR_,(x * y),more);
};
var G__12333 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12333__delegate.call(this, x, y, more);
};
G__12333.cljs$lang$maxFixedArity = 2;
G__12333.cljs$lang$applyTo = (function (arglist__12334){
var x = cljs.core.first(arglist__12334);
var y = cljs.core.first(cljs.core.next(arglist__12334));
var more = cljs.core.rest(cljs.core.next(arglist__12334));
return G__12333__delegate.call(this, x, y, more);
});
return G__12333;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___0.call(this);
case  1 :
return _STAR___1.call(this,x);
case  2 :
return _STAR___2.call(this,x,y);
default:
return _STAR___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3.cljs$lang$applyTo;
_STAR_.__0 = _STAR___0;
_STAR_.__1 = _STAR___1;
_STAR_.__2 = _STAR___2;
_STAR_.__3 = _STAR___3;
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
var _SLASH___1 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___2 = (function (x,y){
return (x / y);
});
var _SLASH___3 = (function() { 
var G__12335__delegate = function (x,y,more){
return cljs.core.reduce.__3(_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__12335 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12335__delegate.call(this, x, y, more);
};
G__12335.cljs$lang$maxFixedArity = 2;
G__12335.cljs$lang$applyTo = (function (arglist__12336){
var x = cljs.core.first(arglist__12336);
var y = cljs.core.first(cljs.core.next(arglist__12336));
var more = cljs.core.rest(cljs.core.next(arglist__12336));
return G__12335__delegate.call(this, x, y, more);
});
return G__12335;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___1.call(this,x);
case  2 :
return _SLASH___2.call(this,x,y);
default:
return _SLASH___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3.cljs$lang$applyTo;
_SLASH_.__1 = _SLASH___1;
_SLASH_.__2 = _SLASH___2;
_SLASH_.__3 = _SLASH___3;
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
var _LT___1 = (function (x){
return true;
});
var _LT___2 = (function (x,y){
return (x < y);
});
var _LT___3 = (function() { 
var G__12337__delegate = function (x,y,more){
while(true){
if(((x < y)))
{if(cljs.core.truth_(cljs.core.next(more)))
{{
var G__12340 = y;
var G__12341 = cljs.core.first(more);
var G__12342 = cljs.core.next(more);
x = G__12340;
y = G__12341;
more = G__12342;
continue;
}
} else
{return (y < cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12337 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12337__delegate.call(this, x, y, more);
};
G__12337.cljs$lang$maxFixedArity = 2;
G__12337.cljs$lang$applyTo = (function (arglist__12343){
var x = cljs.core.first(arglist__12343);
var y = cljs.core.first(cljs.core.next(arglist__12343));
var more = cljs.core.rest(cljs.core.next(arglist__12343));
return G__12337__delegate.call(this, x, y, more);
});
return G__12337;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___1.call(this,x);
case  2 :
return _LT___2.call(this,x,y);
default:
return _LT___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3.cljs$lang$applyTo;
_LT_.__1 = _LT___1;
_LT_.__2 = _LT___2;
_LT_.__3 = _LT___3;
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
var _LT__EQ___1 = (function (x){
return true;
});
var _LT__EQ___2 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3 = (function() { 
var G__12346__delegate = function (x,y,more){
while(true){
if(((x <= y)))
{if(cljs.core.truth_(cljs.core.next(more)))
{{
var G__12349 = y;
var G__12350 = cljs.core.first(more);
var G__12351 = cljs.core.next(more);
x = G__12349;
y = G__12350;
more = G__12351;
continue;
}
} else
{return (y <= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12346 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12346__delegate.call(this, x, y, more);
};
G__12346.cljs$lang$maxFixedArity = 2;
G__12346.cljs$lang$applyTo = (function (arglist__12353){
var x = cljs.core.first(arglist__12353);
var y = cljs.core.first(cljs.core.next(arglist__12353));
var more = cljs.core.rest(cljs.core.next(arglist__12353));
return G__12346__delegate.call(this, x, y, more);
});
return G__12346;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___1.call(this,x);
case  2 :
return _LT__EQ___2.call(this,x,y);
default:
return _LT__EQ___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3.cljs$lang$applyTo;
_LT__EQ_.__1 = _LT__EQ___1;
_LT__EQ_.__2 = _LT__EQ___2;
_LT__EQ_.__3 = _LT__EQ___3;
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
var _GT___1 = (function (x){
return true;
});
var _GT___2 = (function (x,y){
return (x > y);
});
var _GT___3 = (function() { 
var G__12394__delegate = function (x,y,more){
while(true){
if(((x > y)))
{if(cljs.core.truth_(cljs.core.next(more)))
{{
var G__12397 = y;
var G__12398 = cljs.core.first(more);
var G__12399 = cljs.core.next(more);
x = G__12397;
y = G__12398;
more = G__12399;
continue;
}
} else
{return (y > cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12394 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12394__delegate.call(this, x, y, more);
};
G__12394.cljs$lang$maxFixedArity = 2;
G__12394.cljs$lang$applyTo = (function (arglist__12400){
var x = cljs.core.first(arglist__12400);
var y = cljs.core.first(cljs.core.next(arglist__12400));
var more = cljs.core.rest(cljs.core.next(arglist__12400));
return G__12394__delegate.call(this, x, y, more);
});
return G__12394;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___1.call(this,x);
case  2 :
return _GT___2.call(this,x,y);
default:
return _GT___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3.cljs$lang$applyTo;
_GT_.__1 = _GT___1;
_GT_.__2 = _GT___2;
_GT_.__3 = _GT___3;
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
var _GT__EQ___1 = (function (x){
return true;
});
var _GT__EQ___2 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3 = (function() { 
var G__12421__delegate = function (x,y,more){
while(true){
if(((x >= y)))
{if(cljs.core.truth_(cljs.core.next(more)))
{{
var G__12425 = y;
var G__12426 = cljs.core.first(more);
var G__12427 = cljs.core.next(more);
x = G__12425;
y = G__12426;
more = G__12427;
continue;
}
} else
{return (y >= cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12421 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12421__delegate.call(this, x, y, more);
};
G__12421.cljs$lang$maxFixedArity = 2;
G__12421.cljs$lang$applyTo = (function (arglist__12433){
var x = cljs.core.first(arglist__12433);
var y = cljs.core.first(cljs.core.next(arglist__12433));
var more = cljs.core.rest(cljs.core.next(arglist__12433));
return G__12421__delegate.call(this, x, y, more);
});
return G__12421;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___1.call(this,x);
case  2 :
return _GT__EQ___2.call(this,x,y);
default:
return _GT__EQ___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3.cljs$lang$applyTo;
_GT__EQ_.__1 = _GT__EQ___1;
_GT__EQ_.__2 = _GT__EQ___2;
_GT__EQ_.__3 = _GT__EQ___3;
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
var max__1 = (function (x){
return x;
});
var max__2 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3 = (function() { 
var G__12477__delegate = function (x,y,more){
return cljs.core.reduce.__3(max,((x > y) ? x : y),more);
};
var G__12477 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12477__delegate.call(this, x, y, more);
};
G__12477.cljs$lang$maxFixedArity = 2;
G__12477.cljs$lang$applyTo = (function (arglist__12495){
var x = cljs.core.first(arglist__12495);
var y = cljs.core.first(cljs.core.next(arglist__12495));
var more = cljs.core.rest(cljs.core.next(arglist__12495));
return G__12477__delegate.call(this, x, y, more);
});
return G__12477;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__1.call(this,x);
case  2 :
return max__2.call(this,x,y);
default:
return max__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3.cljs$lang$applyTo;
max.__1 = max__1;
max.__2 = max__2;
max.__3 = max__3;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__1 = (function (x){
return x;
});
var min__2 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3 = (function() { 
var G__12497__delegate = function (x,y,more){
return cljs.core.reduce.__3(min,((x < y) ? x : y),more);
};
var G__12497 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12497__delegate.call(this, x, y, more);
};
G__12497.cljs$lang$maxFixedArity = 2;
G__12497.cljs$lang$applyTo = (function (arglist__12498){
var x = cljs.core.first(arglist__12498);
var y = cljs.core.first(cljs.core.next(arglist__12498));
var more = cljs.core.rest(cljs.core.next(arglist__12498));
return G__12497__delegate.call(this, x, y, more);
});
return G__12497;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__1.call(this,x);
case  2 :
return min__2.call(this,x,y);
default:
return min__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3.cljs$lang$applyTo;
min.__1 = min__1;
min.__2 = min__2;
min.__3 = min__3;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(((q >= 0)))
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
var rem__12507 = (n % d);

return cljs.core.fix(((n - rem__12507) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__12508 = cljs.core.quot(n,d);

return (n - (d * q__12508));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return Math.random.call(null);
});
var rand__1 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__0.call(this);
case  1 :
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.__0 = rand__0;
rand.__1 = rand__1;
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix(cljs.core.rand.__1(n));
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
var _EQ__EQ___1 = (function (x){
return true;
});
var _EQ__EQ___2 = (function (x,y){
return cljs.core._equiv(x,y);
});
var _EQ__EQ___3 = (function() { 
var G__12549__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next(more)))
{{
var G__12553 = y;
var G__12554 = cljs.core.first(more);
var G__12555 = cljs.core.next(more);
x = G__12553;
y = G__12554;
more = G__12555;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first(more));
}
} else
{return false;
}
break;
}
};
var G__12549 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12549__delegate.call(this, x, y, more);
};
G__12549.cljs$lang$maxFixedArity = 2;
G__12549.cljs$lang$applyTo = (function (arglist__12558){
var x = cljs.core.first(arglist__12558);
var y = cljs.core.first(cljs.core.next(arglist__12558));
var more = cljs.core.rest(cljs.core.next(arglist__12558));
return G__12549__delegate.call(this, x, y, more);
});
return G__12549;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___1.call(this,x);
case  2 :
return _EQ__EQ___2.call(this,x,y);
default:
return _EQ__EQ___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3.cljs$lang$applyTo;
_EQ__EQ_.__1 = _EQ__EQ___1;
_EQ__EQ_.__2 = _EQ__EQ___2;
_EQ__EQ_.__3 = _EQ__EQ___3;
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
var n__12576 = n;
var xs__12577 = cljs.core.seq(coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12578 = xs__12577;

if(cljs.core.truth_(and__3546__auto____12578))
{return (n__12576 > 0);
} else
{return and__3546__auto____12578;
}
})()))
{{
var G__12581 = (n__12576 - 1);
var G__12582 = cljs.core.next(xs__12577);
n__12576 = G__12581;
xs__12577 = G__12582;
continue;
}
} else
{return xs__12577;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__12590 = null;
var G__12590__2 = (function (coll,n){
var temp__3695__auto____12585 = cljs.core.nthnext(coll,n);

if(cljs.core.truth_(temp__3695__auto____12585))
{var xs__12587 = temp__3695__auto____12585;

return cljs.core.first(xs__12587);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__12590__3 = (function (coll,n,not_found){
var temp__3695__auto____12588 = cljs.core.nthnext(coll,n);

if(cljs.core.truth_(temp__3695__auto____12588))
{var xs__12589 = temp__3695__auto____12588;

return cljs.core.first(xs__12589);
} else
{return not_found;
}
});
G__12590 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12590__2.call(this,coll,n);
case  3 :
return G__12590__3.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12590;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___0 = (function (){
return "";
});
var str_STAR___1 = (function (x){
if(((x === null)))
{return "";
} else
{if(("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___2 = (function() { 
var G__12665__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12667 = sb.append(str_STAR_.call(null,cljs.core.first(more)));
var G__12668 = cljs.core.next(more);
sb = G__12667;
more = G__12668;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__12665 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12665__delegate.call(this, x, ys);
};
G__12665.cljs$lang$maxFixedArity = 1;
G__12665.cljs$lang$applyTo = (function (arglist__12670){
var x = cljs.core.first(arglist__12670);
var ys = cljs.core.rest(arglist__12670);
return G__12665__delegate.call(this, x, ys);
});
return G__12665;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___0.call(this);
case  1 :
return str_STAR___1.call(this,x);
default:
return str_STAR___2.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2.cljs$lang$applyTo;
str_STAR_.__0 = str_STAR___0;
str_STAR_.__1 = str_STAR___1;
str_STAR_.__2 = str_STAR___2;
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
var str__0 = (function (){
return "";
});
var str__1 = (function (x){
if((cljs.core.symbol_QMARK_(x)))
{return x.substring(2,x.length);
} else
{if((cljs.core.keyword_QMARK_(x)))
{return cljs.core.str_STAR_(":",x.substring(2,x.length));
} else
{if(((x === null)))
{return "";
} else
{if(("\uFDD0'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__2 = (function() { 
var G__12690__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__12693 = sb.append(str.call(null,cljs.core.first(more)));
var G__12694 = cljs.core.next(more);
sb = G__12693;
more = G__12694;
continue;
}
} else
{return cljs.core.str_STAR_.__1(sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__12690 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__12690__delegate.call(this, x, ys);
};
G__12690.cljs$lang$maxFixedArity = 1;
G__12690.cljs$lang$applyTo = (function (arglist__12697){
var x = cljs.core.first(arglist__12697);
var ys = cljs.core.rest(arglist__12697);
return G__12690__delegate.call(this, x, ys);
});
return G__12690;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__0.call(this);
case  1 :
return str__1.call(this,x);
default:
return str__2.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2.cljs$lang$applyTo;
str.__0 = str__0;
str.__1 = str__1;
str.__2 = str__2;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2 = (function (s,start){
return s.substring(start);
});
var subs__3 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2.call(this,s,start);
case  3 :
return subs__3.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subs.__2 = subs__2;
subs.__3 = subs__3;
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__1 = (function (name){
if((cljs.core.symbol_QMARK_(name)))
{name;
} else
{if((cljs.core.keyword_QMARK_(name)))
{cljs.core.str_STAR_("\uFDD1","'",cljs.core.subs.__2(name,2));
} else
{}
}
return cljs.core.str_STAR_("\uFDD1","'",name);
});
var symbol__2 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_(ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__1.call(this,ns);
case  2 :
return symbol__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
symbol.__1 = symbol__1;
symbol.__2 = symbol__2;
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__1 = (function (name){
if((cljs.core.keyword_QMARK_(name)))
{return name;
} else
{if((cljs.core.symbol_QMARK_(name)))
{return cljs.core.str_STAR_("\uFDD0","'",cljs.core.subs.__2(name,2));
} else
{if(("\uFDD0'else"))
{return cljs.core.str_STAR_("\uFDD0","'",name);
} else
{return null;
}
}
}
});
var keyword__2 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_(ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__1.call(this,ns);
case  2 :
return keyword__2.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
keyword.__1 = keyword__1;
keyword.__2 = keyword__2;
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$(((cljs.core.sequential_QMARK_(y))?(function (){var xs__12710 = cljs.core.seq(x);
var ys__12711 = cljs.core.seq(y);

while(true){
if(((xs__12710 === null)))
{return (ys__12711 === null);
} else
{if(((ys__12711 === null)))
{return false;
} else
{if((cljs.core._EQ_.__2(cljs.core.first(xs__12710),cljs.core.first(ys__12711))))
{{
var G__12834 = cljs.core.next(xs__12710);
var G__12835 = cljs.core.next(ys__12711);
xs__12710 = G__12834;
ys__12711 = G__12835;
continue;
}
} else
{if(("\uFDD0'else"))
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
return cljs.core.reduce.__3((function (p1__12838_SHARP_,p2__12839_SHARP_){
return cljs.core.hash_combine(p1__12838_SHARP_,cljs.core.hash(p2__12839_SHARP_));
}),cljs.core.hash(cljs.core.first(coll)),cljs.core.next(coll));
});
void 0;
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__12844__12845 = cljs.core.seq(fn_map);

if(cljs.core.truth_(G__12844__12845))
{var G__12847__12849 = cljs.core.first(G__12844__12845);
var vec__12848__12850 = G__12847__12849;
var key_name__12851 = cljs.core.nth.__3(vec__12848__12850,0,null);
var f__12852 = cljs.core.nth.__3(vec__12848__12850,1,null);
var G__12844__12853 = G__12844__12845;

var G__12847__12854 = G__12847__12849;
var G__12844__12855 = G__12844__12853;

while(true){
var vec__12856__12857 = G__12847__12854;
var key_name__12858 = cljs.core.nth.__3(vec__12856__12857,0,null);
var f__12859 = cljs.core.nth.__3(vec__12856__12857,1,null);
var G__12844__12860 = G__12844__12855;

var str_name__12861 = cljs.core.name(key_name__12858);

obj[str_name__12861] = f__12859;
var temp__3698__auto____12864 = cljs.core.next(G__12844__12860);

if(cljs.core.truth_(temp__3698__auto____12864))
{var G__12844__12865 = temp__3698__auto____12864;

{
var G__12876 = cljs.core.first(G__12844__12865);
var G__12877 = G__12844__12865;
G__12847__12854 = G__12876;
G__12844__12855 = G__12877;
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
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__12940 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__12942 = this;
return (new cljs.core.List(this__12942.meta,o,coll,(this__12942.count + 1)));
});
cljs.core.List.prototype.toString = (function (){
var this__12945 = this;
var this$__12946 = this;

return cljs.core.pr_str(this$__12946);
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__12948 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__12992 = this;
return this__12992.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek__1 = (function (coll){
var this__12994 = this;
return this__12994.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop__1 = (function (coll){
var this__12996 = this;
return cljs.core._rest(coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first__1 = (function (coll){
var this__12997 = this;
return this__12997.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest__1 = (function (coll){
var this__13000 = this;
return this__13000.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__13002 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__13005 = this;
return (new cljs.core.List(meta,this__13005.first,this__13005.rest,this__13005.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__13006 = this;
return this__13006.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__13008 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IList$ = true;
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__13105 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__13106 = this;
return (new cljs.core.List(this__13106.meta,o,null,1));
});
cljs.core.EmptyList.prototype.toString = (function (){
var this__13108 = this;
var this$__13109 = this;

return cljs.core.pr_str(this$__13109);
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__13111 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__13113 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek__1 = (function (coll){
var this__13115 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop__1 = (function (coll){
var this__13117 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first__1 = (function (coll){
var this__13118 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest__1 = (function (coll){
var this__13120 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__13121 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__13122 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__13126 = this;
return this__13126.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__13127 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IList$ = true;
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
cljs.core.reversible_QMARK_ = (function reversible_QMARK_(coll){
var x__462__auto____13140 = coll;

if(cljs.core.truth_((function (){var and__3546__auto____13141 = x__462__auto____13140;

if(cljs.core.truth_(and__3546__auto____13141))
{var and__3546__auto____13143 = x__462__auto____13140.cljs$core$IReversible$;

if(cljs.core.truth_(and__3546__auto____13143))
{return cljs.core.not(x__462__auto____13140.hasOwnProperty("cljs$core$IReversible$"));
} else
{return and__3546__auto____13143;
}
} else
{return and__3546__auto____13141;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IReversible,x__462__auto____13140);
}
});
cljs.core.rseq = (function rseq(coll){
return cljs.core._rseq(coll);
});
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.__3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.__3(cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse(items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__13175){
var items = cljs.core.seq( arglist__13175 );;
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
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__13176 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__13177 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.toString = (function (){
var this__13179 = this;
var this$__13182 = this;

return cljs.core.pr_str(this$__13182);
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__13183 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first__1 = (function (coll){
var this__13185 = this;
return this__13185.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest__1 = (function (coll){
var this__13186 = this;
if(((this__13186.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__13186.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__13188 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__13189 = this;
return (new cljs.core.Cons(meta,this__13189.first,this__13189.rest));
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__13192 = this;
return this__13192.meta;
});
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__13193 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__13193.meta);
});
cljs.core.Cons.prototype.cljs$core$IList$ = true;
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
cljs.core.list_QMARK_ = (function list_QMARK_(x){
var x__462__auto____13208 = x;

if(cljs.core.truth_((function (){var and__3546__auto____13209 = x__462__auto____13208;

if(cljs.core.truth_(and__3546__auto____13209))
{var and__3546__auto____13210 = x__462__auto____13208.cljs$core$IList$;

if(cljs.core.truth_(and__3546__auto____13210))
{return cljs.core.not(x__462__auto____13208.hasOwnProperty("cljs$core$IList$"));
} else
{return and__3546__auto____13210;
}
} else
{return and__3546__auto____13209;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IList,x__462__auto____13208);
}
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__13240 = null;
var G__13240__2 = (function (string,f){
return cljs.core.ci_reduce.__2(string,f);
});
var G__13240__3 = (function (string,f,start){
return cljs.core.ci_reduce.__3(string,f,start);
});
G__13240 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__13240__2.call(this,string,f);
case  3 :
return G__13240__3.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13240;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__13243 = null;
var G__13243__2 = (function (string,k){
return cljs.core._nth.__2(string,k);
});
var G__13243__3 = (function (string,k,not_found){
return cljs.core._nth.__3(string,k,not_found);
});
G__13243 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__13243__2.call(this,string,k);
case  3 :
return G__13243__3.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13243;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__13248 = null;
var G__13248__2 = (function (string,n){
if(((n < cljs.core._count(string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__13248__3 = (function (string,n,not_found){
if(((n < cljs.core._count(string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__13248 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__13248__2.call(this,string,n);
case  3 :
return G__13248__3.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13248;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq(string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__13267 = null;
var G__13267__2 = (function (tsym13258,coll){
var tsym13258__13261 = this;

var this$__13262 = tsym13258__13261;

return cljs.core.get.__2(coll,this$__13262.toString());
});
var G__13267__3 = (function (tsym13259,coll,not_found){
var tsym13259__13264 = this;

var this$__13265 = tsym13259__13264;

return cljs.core.get.__3(coll,this$__13265.toString(),not_found);
});
G__13267 = function(tsym13259,coll,not_found){
switch(arguments.length){
case  2 :
return G__13267__2.call(this,tsym13259,coll);
case  3 :
return G__13267__3.call(this,tsym13259,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13267;
})()
;
String['prototype']['apply'] = (function (s,args){
if(((cljs.core.count(args) < 2)))
{return cljs.core.get.__2((args[0]),s);
} else
{return cljs.core.get.__3((args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__13279 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__13279;
} else
{lazy_seq.x = x__13279.call(null);
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
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__13295 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__13315 = this;
return cljs.core.cons(o,coll);
});
cljs.core.LazySeq.prototype.toString = (function (){
var this__13317 = this;
var this$__13319 = this;

return cljs.core.pr_str(this$__13319);
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__13323 = this;
return cljs.core.seq(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first__1 = (function (coll){
var this__13324 = this;
return cljs.core.first(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest__1 = (function (coll){
var this__13326 = this;
return cljs.core.rest(cljs.core.lazy_seq_value(coll));
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__13331 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__13332 = this;
return (new cljs.core.LazySeq(meta,this__13332.realized,this__13332.x));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__13333 = this;
return this__13333.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__13336 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__13336.meta);
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__13346 = [];

var s__13348 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq(s__13348)))
{ary__13346.push(cljs.core.first(s__13348));
{
var G__13352 = cljs.core.next(s__13348);
s__13348 = G__13352;
continue;
}
} else
{return ary__13346;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__13359 = s;
var i__13360 = n;
var sum__13361 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13363 = (i__13360 > 0);

if((and__3546__auto____13363))
{return cljs.core.seq(s__13359);
} else
{return and__3546__auto____13363;
}
})()))
{{
var G__13415 = cljs.core.next(s__13359);
var G__13416 = (i__13360 - 1);
var G__13417 = (sum__13361 + 1);
s__13359 = G__13415;
i__13360 = G__13416;
sum__13361 = G__13417;
continue;
}
} else
{return sum__13361;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(((arglist === null)))
{return null;
} else
{if(((cljs.core.next(arglist) === null)))
{return cljs.core.seq(cljs.core.first(arglist));
} else
{if(("\uFDD0'else"))
{return cljs.core.cons(cljs.core.first(arglist),spread.call(null,cljs.core.next(arglist)));
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
var concat__0 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13427 = cljs.core.seq(x);

if(cljs.core.truth_(s__13427))
{return cljs.core.cons(cljs.core.first(s__13427),concat.call(null,cljs.core.rest(s__13427),y));
} else
{return y;
}
})));
});
var concat__3 = (function() { 
var G__13441__delegate = function (x,y,zs){
var cat__13435 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__13433 = cljs.core.seq(xys);

if(cljs.core.truth_(xys__13433))
{return cljs.core.cons(cljs.core.first(xys__13433),cat.call(null,cljs.core.rest(xys__13433),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first(zs),cljs.core.next(zs));
} else
{return null;
}
}
})));
});

return cat__13435.call(null,concat.call(null,x,y),zs);
};
var G__13441 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13441__delegate.call(this, x, y, zs);
};
G__13441.cljs$lang$maxFixedArity = 2;
G__13441.cljs$lang$applyTo = (function (arglist__13447){
var x = cljs.core.first(arglist__13447);
var y = cljs.core.first(cljs.core.next(arglist__13447));
var zs = cljs.core.rest(cljs.core.next(arglist__13447));
return G__13441__delegate.call(this, x, y, zs);
});
return G__13441;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__0.call(this);
case  1 :
return concat__1.call(this,x);
case  2 :
return concat__2.call(this,x,y);
default:
return concat__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3.cljs$lang$applyTo;
concat.__0 = concat__0;
concat.__1 = concat__1;
concat.__2 = concat__2;
concat.__3 = concat__3;
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
var list_STAR___1 = (function (args){
return cljs.core.seq(args);
});
var list_STAR___2 = (function (a,args){
return cljs.core.cons(a,args);
});
var list_STAR___3 = (function (a,b,args){
return cljs.core.cons(a,cljs.core.cons(b,args));
});
var list_STAR___4 = (function (a,b,c,args){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,args)));
});
var list_STAR___5 = (function() { 
var G__13471__delegate = function (a,b,c,d,more){
return cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(more)))));
};
var G__13471 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13471__delegate.call(this, a, b, c, d, more);
};
G__13471.cljs$lang$maxFixedArity = 4;
G__13471.cljs$lang$applyTo = (function (arglist__13473){
var a = cljs.core.first(arglist__13473);
var b = cljs.core.first(cljs.core.next(arglist__13473));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13473)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13473))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13473))));
return G__13471__delegate.call(this, a, b, c, d, more);
});
return G__13471;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___1.call(this,a);
case  2 :
return list_STAR___2.call(this,a,b);
case  3 :
return list_STAR___3.call(this,a,b,c);
case  4 :
return list_STAR___4.call(this,a,b,c,d);
default:
return list_STAR___5.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___5.cljs$lang$applyTo;
list_STAR_.__1 = list_STAR___1;
list_STAR_.__2 = list_STAR___2;
list_STAR_.__3 = list_STAR___3;
list_STAR_.__4 = list_STAR___4;
list_STAR_.__5 = list_STAR___5;
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
var apply__2 = (function (f,args){
var fixed_arity__13477 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(((cljs.core.bounded_count(args,(fixed_arity__13477 + 1)) <= fixed_arity__13477)))
{return f.apply(f,cljs.core.to_array(args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array(args));
}
});
var apply__3 = (function (f,x,args){
var arglist__13481 = cljs.core.list_STAR_.__2(x,args);
var fixed_arity__13488 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(((cljs.core.bounded_count(arglist__13481,fixed_arity__13488) <= fixed_arity__13488)))
{return f.apply(f,cljs.core.to_array(arglist__13481));
} else
{return f.cljs$lang$applyTo(arglist__13481);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__13481));
}
});
var apply__4 = (function (f,x,y,args){
var arglist__13511 = cljs.core.list_STAR_.__3(x,y,args);
var fixed_arity__13512 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(((cljs.core.bounded_count(arglist__13511,fixed_arity__13512) <= fixed_arity__13512)))
{return f.apply(f,cljs.core.to_array(arglist__13511));
} else
{return f.cljs$lang$applyTo(arglist__13511);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__13511));
}
});
var apply__5 = (function (f,x,y,z,args){
var arglist__13513 = cljs.core.list_STAR_.__4(x,y,z,args);
var fixed_arity__13514 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(((cljs.core.bounded_count(arglist__13513,fixed_arity__13514) <= fixed_arity__13514)))
{return f.apply(f,cljs.core.to_array(arglist__13513));
} else
{return f.cljs$lang$applyTo(arglist__13513);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__13513));
}
});
var apply__6 = (function() { 
var G__13534__delegate = function (f,a,b,c,d,args){
var arglist__13516 = cljs.core.cons(a,cljs.core.cons(b,cljs.core.cons(c,cljs.core.cons(d,cljs.core.spread(args)))));
var fixed_arity__13517 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(((cljs.core.bounded_count(arglist__13516,fixed_arity__13517) <= fixed_arity__13517)))
{return f.apply(f,cljs.core.to_array(arglist__13516));
} else
{return f.cljs$lang$applyTo(arglist__13516);
}
} else
{return f.apply(f,cljs.core.to_array(arglist__13516));
}
};
var G__13534 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13534__delegate.call(this, f, a, b, c, d, args);
};
G__13534.cljs$lang$maxFixedArity = 5;
G__13534.cljs$lang$applyTo = (function (arglist__13542){
var f = cljs.core.first(arglist__13542);
var a = cljs.core.first(cljs.core.next(arglist__13542));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13542)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13542))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13542)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13542)))));
return G__13534__delegate.call(this, f, a, b, c, d, args);
});
return G__13534;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2.call(this,f,a);
case  3 :
return apply__3.call(this,f,a,b);
case  4 :
return apply__4.call(this,f,a,b,c);
case  5 :
return apply__5.call(this,f,a,b,c,d);
default:
return apply__6.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__6.cljs$lang$applyTo;
apply.__2 = apply__2;
apply.__3 = apply__3;
apply.__4 = apply__4;
apply.__5 = apply__5;
apply.__6 = apply__6;
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
return cljs.core.with_meta(obj,cljs.core.apply.__3(f,cljs.core.meta(obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__13561){
var obj = cljs.core.first(arglist__13561);
var f = cljs.core.first(cljs.core.next(arglist__13561));
var args = cljs.core.rest(cljs.core.next(arglist__13561));
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
var not_EQ___1 = (function (x){
return false;
});
var not_EQ___2 = (function (x,y){
return cljs.core.not(cljs.core._EQ_.__2(x,y));
});
var not_EQ___3 = (function() { 
var G__13565__delegate = function (x,y,more){
return cljs.core.not(cljs.core.apply.__4(cljs.core._EQ_,x,y,more));
};
var G__13565 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13565__delegate.call(this, x, y, more);
};
G__13565.cljs$lang$maxFixedArity = 2;
G__13565.cljs$lang$applyTo = (function (arglist__13567){
var x = cljs.core.first(arglist__13567);
var y = cljs.core.first(cljs.core.next(arglist__13567));
var more = cljs.core.rest(cljs.core.next(arglist__13567));
return G__13565__delegate.call(this, x, y, more);
});
return G__13565;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___1.call(this,x);
case  2 :
return not_EQ___2.call(this,x,y);
default:
return not_EQ___3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3.cljs$lang$applyTo;
not_EQ_.__1 = not_EQ___1;
not_EQ_.__2 = not_EQ___2;
not_EQ_.__3 = not_EQ___3;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq(coll)))
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
if(((cljs.core.seq(coll) === null)))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first(coll))))
{{
var G__13592 = pred;
var G__13593 = cljs.core.next(coll);
pred = G__13592;
coll = G__13593;
continue;
}
} else
{if(("\uFDD0'else"))
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
return cljs.core.not(cljs.core.every_QMARK_(pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq(coll)))
{var or__3548__auto____13605 = pred.call(null,cljs.core.first(coll));

if(cljs.core.truth_(or__3548__auto____13605))
{return or__3548__auto____13605;
} else
{{
var G__13612 = pred;
var G__13613 = cljs.core.next(coll);
pred = G__13612;
coll = G__13613;
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
return cljs.core.not(cljs.core.some(pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if((cljs.core.integer_QMARK_(n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str("Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not(cljs.core.even_QMARK_(n));
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
var G__13644 = null;
var G__13644__0 = (function (){
return cljs.core.not(f.call(null));
});
var G__13644__1 = (function (x){
return cljs.core.not(f.call(null,x));
});
var G__13644__2 = (function (x,y){
return cljs.core.not(f.call(null,x,y));
});
var G__13644__3 = (function() { 
var G__13645__delegate = function (x,y,zs){
return cljs.core.not(cljs.core.apply.__4(f,x,y,zs));
};
var G__13645 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__13645__delegate.call(this, x, y, zs);
};
G__13645.cljs$lang$maxFixedArity = 2;
G__13645.cljs$lang$applyTo = (function (arglist__13647){
var x = cljs.core.first(arglist__13647);
var y = cljs.core.first(cljs.core.next(arglist__13647));
var zs = cljs.core.rest(cljs.core.next(arglist__13647));
return G__13645__delegate.call(this, x, y, zs);
});
return G__13645;
})()
;
G__13644 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__13644__0.call(this);
case  1 :
return G__13644__1.call(this,x);
case  2 :
return G__13644__2.call(this,x,y);
default:
return G__13644__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13644.cljs$lang$maxFixedArity = 2;
G__13644.cljs$lang$applyTo = G__13644__3.cljs$lang$applyTo;
return G__13644;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__13655__delegate = function (args){
return x;
};
var G__13655 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13655__delegate.call(this, args);
};
G__13655.cljs$lang$maxFixedArity = 0;
G__13655.cljs$lang$applyTo = (function (arglist__13658){
var args = cljs.core.seq( arglist__13658 );;
return G__13655__delegate.call(this, args);
});
return G__13655;
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
var comp__0 = (function (){
return cljs.core.identity;
});
var comp__1 = (function (f){
return f;
});
var comp__2 = (function (f,g){
return (function() {
var G__13676 = null;
var G__13676__0 = (function (){
return f.call(null,g.call(null));
});
var G__13676__1 = (function (x){
return f.call(null,g.call(null,x));
});
var G__13676__2 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__13676__3 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__13676__4 = (function() { 
var G__13802__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.__5(g,x,y,z,args));
};
var G__13802 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13802__delegate.call(this, x, y, z, args);
};
G__13802.cljs$lang$maxFixedArity = 3;
G__13802.cljs$lang$applyTo = (function (arglist__13803){
var x = cljs.core.first(arglist__13803);
var y = cljs.core.first(cljs.core.next(arglist__13803));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13803)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13803)));
return G__13802__delegate.call(this, x, y, z, args);
});
return G__13802;
})()
;
G__13676 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13676__0.call(this);
case  1 :
return G__13676__1.call(this,x);
case  2 :
return G__13676__2.call(this,x,y);
case  3 :
return G__13676__3.call(this,x,y,z);
default:
return G__13676__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13676.cljs$lang$maxFixedArity = 3;
G__13676.cljs$lang$applyTo = G__13676__4.cljs$lang$applyTo;
return G__13676;
})()
});
var comp__3 = (function (f,g,h){
return (function() {
var G__13804 = null;
var G__13804__0 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__13804__1 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__13804__2 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__13804__3 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__13804__4 = (function() { 
var G__13805__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.__5(h,x,y,z,args)));
};
var G__13805 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13805__delegate.call(this, x, y, z, args);
};
G__13805.cljs$lang$maxFixedArity = 3;
G__13805.cljs$lang$applyTo = (function (arglist__13806){
var x = cljs.core.first(arglist__13806);
var y = cljs.core.first(cljs.core.next(arglist__13806));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13806)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13806)));
return G__13805__delegate.call(this, x, y, z, args);
});
return G__13805;
})()
;
G__13804 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13804__0.call(this);
case  1 :
return G__13804__1.call(this,x);
case  2 :
return G__13804__2.call(this,x,y);
case  3 :
return G__13804__3.call(this,x,y,z);
default:
return G__13804__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13804.cljs$lang$maxFixedArity = 3;
G__13804.cljs$lang$applyTo = G__13804__4.cljs$lang$applyTo;
return G__13804;
})()
});
var comp__4 = (function() { 
var G__13807__delegate = function (f1,f2,f3,fs){
var fs__13665 = cljs.core.reverse(cljs.core.list_STAR_.__4(f1,f2,f3,fs));

return (function() { 
var G__13808__delegate = function (args){
var ret__13666 = cljs.core.apply.__2(cljs.core.first(fs__13665),args);
var fs__13668 = cljs.core.next(fs__13665);

while(true){
if(cljs.core.truth_(fs__13668))
{{
var G__13810 = cljs.core.first(fs__13668).call(null,ret__13666);
var G__13811 = cljs.core.next(fs__13668);
ret__13666 = G__13810;
fs__13668 = G__13811;
continue;
}
} else
{return ret__13666;
}
break;
}
};
var G__13808 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13808__delegate.call(this, args);
};
G__13808.cljs$lang$maxFixedArity = 0;
G__13808.cljs$lang$applyTo = (function (arglist__13813){
var args = cljs.core.seq( arglist__13813 );;
return G__13808__delegate.call(this, args);
});
return G__13808;
})()
;
};
var G__13807 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13807__delegate.call(this, f1, f2, f3, fs);
};
G__13807.cljs$lang$maxFixedArity = 3;
G__13807.cljs$lang$applyTo = (function (arglist__13814){
var f1 = cljs.core.first(arglist__13814);
var f2 = cljs.core.first(cljs.core.next(arglist__13814));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13814)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13814)));
return G__13807__delegate.call(this, f1, f2, f3, fs);
});
return G__13807;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__0.call(this);
case  1 :
return comp__1.call(this,f1);
case  2 :
return comp__2.call(this,f1,f2);
case  3 :
return comp__3.call(this,f1,f2,f3);
default:
return comp__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__4.cljs$lang$applyTo;
comp.__0 = comp__0;
comp.__1 = comp__1;
comp.__2 = comp__2;
comp.__3 = comp__3;
comp.__4 = comp__4;
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
var partial__2 = (function (f,arg1){
return (function() { 
var G__13829__delegate = function (args){
return cljs.core.apply.__3(f,arg1,args);
};
var G__13829 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13829__delegate.call(this, args);
};
G__13829.cljs$lang$maxFixedArity = 0;
G__13829.cljs$lang$applyTo = (function (arglist__13831){
var args = cljs.core.seq( arglist__13831 );;
return G__13829__delegate.call(this, args);
});
return G__13829;
})()
;
});
var partial__3 = (function (f,arg1,arg2){
return (function() { 
var G__13834__delegate = function (args){
return cljs.core.apply.__4(f,arg1,arg2,args);
};
var G__13834 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13834__delegate.call(this, args);
};
G__13834.cljs$lang$maxFixedArity = 0;
G__13834.cljs$lang$applyTo = (function (arglist__13835){
var args = cljs.core.seq( arglist__13835 );;
return G__13834__delegate.call(this, args);
});
return G__13834;
})()
;
});
var partial__4 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__13837__delegate = function (args){
return cljs.core.apply.__5(f,arg1,arg2,arg3,args);
};
var G__13837 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13837__delegate.call(this, args);
};
G__13837.cljs$lang$maxFixedArity = 0;
G__13837.cljs$lang$applyTo = (function (arglist__13842){
var args = cljs.core.seq( arglist__13842 );;
return G__13837__delegate.call(this, args);
});
return G__13837;
})()
;
});
var partial__5 = (function() { 
var G__13843__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__13844__delegate = function (args){
return cljs.core.apply.__5(f,arg1,arg2,arg3,cljs.core.concat.__2(more,args));
};
var G__13844 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13844__delegate.call(this, args);
};
G__13844.cljs$lang$maxFixedArity = 0;
G__13844.cljs$lang$applyTo = (function (arglist__13851){
var args = cljs.core.seq( arglist__13851 );;
return G__13844__delegate.call(this, args);
});
return G__13844;
})()
;
};
var G__13843 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__13843__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__13843.cljs$lang$maxFixedArity = 4;
G__13843.cljs$lang$applyTo = (function (arglist__13854){
var f = cljs.core.first(arglist__13854);
var arg1 = cljs.core.first(cljs.core.next(arglist__13854));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13854)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13854))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13854))));
return G__13843__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__13843;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2.call(this,f,arg1);
case  3 :
return partial__3.call(this,f,arg1,arg2);
case  4 :
return partial__4.call(this,f,arg1,arg2,arg3);
default:
return partial__5.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__5.cljs$lang$applyTo;
partial.__2 = partial__2;
partial.__3 = partial__3;
partial.__4 = partial__4;
partial.__5 = partial__5;
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
var fnil__2 = (function (f,x){
return (function() {
var G__13898 = null;
var G__13898__1 = (function (a){
return f.call(null,(((a === null))?x:a));
});
var G__13898__2 = (function (a,b){
return f.call(null,(((a === null))?x:a),b);
});
var G__13898__3 = (function (a,b,c){
return f.call(null,(((a === null))?x:a),b,c);
});
var G__13898__4 = (function() { 
var G__13904__delegate = function (a,b,c,ds){
return cljs.core.apply.__5(f,(((a === null))?x:a),b,c,ds);
};
var G__13904 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13904__delegate.call(this, a, b, c, ds);
};
G__13904.cljs$lang$maxFixedArity = 3;
G__13904.cljs$lang$applyTo = (function (arglist__13907){
var a = cljs.core.first(arglist__13907);
var b = cljs.core.first(cljs.core.next(arglist__13907));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13907)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13907)));
return G__13904__delegate.call(this, a, b, c, ds);
});
return G__13904;
})()
;
G__13898 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__13898__1.call(this,a);
case  2 :
return G__13898__2.call(this,a,b);
case  3 :
return G__13898__3.call(this,a,b,c);
default:
return G__13898__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13898.cljs$lang$maxFixedArity = 3;
G__13898.cljs$lang$applyTo = G__13898__4.cljs$lang$applyTo;
return G__13898;
})()
});
var fnil__3 = (function (f,x,y){
return (function() {
var G__13910 = null;
var G__13910__2 = (function (a,b){
return f.call(null,(((a === null))?x:a),(((b === null))?y:b));
});
var G__13910__3 = (function (a,b,c){
return f.call(null,(((a === null))?x:a),(((b === null))?y:b),c);
});
var G__13910__4 = (function() { 
var G__13915__delegate = function (a,b,c,ds){
return cljs.core.apply.__5(f,(((a === null))?x:a),(((b === null))?y:b),c,ds);
};
var G__13915 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13915__delegate.call(this, a, b, c, ds);
};
G__13915.cljs$lang$maxFixedArity = 3;
G__13915.cljs$lang$applyTo = (function (arglist__13917){
var a = cljs.core.first(arglist__13917);
var b = cljs.core.first(cljs.core.next(arglist__13917));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13917)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13917)));
return G__13915__delegate.call(this, a, b, c, ds);
});
return G__13915;
})()
;
G__13910 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__13910__2.call(this,a,b);
case  3 :
return G__13910__3.call(this,a,b,c);
default:
return G__13910__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13910.cljs$lang$maxFixedArity = 3;
G__13910.cljs$lang$applyTo = G__13910__4.cljs$lang$applyTo;
return G__13910;
})()
});
var fnil__4 = (function (f,x,y,z){
return (function() {
var G__13920 = null;
var G__13920__2 = (function (a,b){
return f.call(null,(((a === null))?x:a),(((b === null))?y:b));
});
var G__13920__3 = (function (a,b,c){
return f.call(null,(((a === null))?x:a),(((b === null))?y:b),(((c === null))?z:c));
});
var G__13920__4 = (function() { 
var G__13926__delegate = function (a,b,c,ds){
return cljs.core.apply.__5(f,(((a === null))?x:a),(((b === null))?y:b),(((c === null))?z:c),ds);
};
var G__13926 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13926__delegate.call(this, a, b, c, ds);
};
G__13926.cljs$lang$maxFixedArity = 3;
G__13926.cljs$lang$applyTo = (function (arglist__13927){
var a = cljs.core.first(arglist__13927);
var b = cljs.core.first(cljs.core.next(arglist__13927));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13927)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13927)));
return G__13926__delegate.call(this, a, b, c, ds);
});
return G__13926;
})()
;
G__13920 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__13920__2.call(this,a,b);
case  3 :
return G__13920__3.call(this,a,b,c);
default:
return G__13920__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13920.cljs$lang$maxFixedArity = 3;
G__13920.cljs$lang$applyTo = G__13920__4.cljs$lang$applyTo;
return G__13920;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2.call(this,f,x);
case  3 :
return fnil__3.call(this,f,x,y);
case  4 :
return fnil__4.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
fnil.__2 = fnil__2;
fnil.__3 = fnil__3;
fnil.__4 = fnil__4;
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
var mapi__13940 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13935 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____13935))
{var s__13937 = temp__3698__auto____13935;

return cljs.core.cons(f.call(null,idx,cljs.core.first(s__13937)),mpi.call(null,(idx + 1),cljs.core.rest(s__13937)));
} else
{return null;
}
})));
});

return mapi__13940.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14063 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____14063))
{var s__14065 = temp__3698__auto____14063;

var x__14066 = f.call(null,cljs.core.first(s__14065));

if(((x__14066 === null)))
{return keep.call(null,f,cljs.core.rest(s__14065));
} else
{return cljs.core.cons(x__14066,keep.call(null,f,cljs.core.rest(s__14065)));
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
var keepi__14096 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14089 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____14089))
{var s__14091 = temp__3698__auto____14089;

var x__14093 = f.call(null,idx,cljs.core.first(s__14091));

if(((x__14093 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest(s__14091));
} else
{return cljs.core.cons(x__14093,kpi.call(null,(idx + 1),cljs.core.rest(s__14091)));
}
} else
{return null;
}
})));
});

return keepi__14096.call(null,0,coll);
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
var every_pred__1 = (function (p){
return (function() {
var ep1 = null;
var ep1__0 = (function (){
return true;
});
var ep1__1 = (function (x){
return cljs.core.boolean$(p.call(null,x));
});
var ep1__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3546__auto____14136 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____14136))
{return p.call(null,y);
} else
{return and__3546__auto____14136;
}
})());
});
var ep1__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3546__auto____14141 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____14141))
{var and__3546__auto____14145 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____14145))
{return p.call(null,z);
} else
{return and__3546__auto____14145;
}
} else
{return and__3546__auto____14141;
}
})());
});
var ep1__4 = (function() { 
var G__14430__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3546__auto____14154 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____14154))
{return cljs.core.every_QMARK_(p,args);
} else
{return and__3546__auto____14154;
}
})());
};
var G__14430 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14430__delegate.call(this, x, y, z, args);
};
G__14430.cljs$lang$maxFixedArity = 3;
G__14430.cljs$lang$applyTo = (function (arglist__14433){
var x = cljs.core.first(arglist__14433);
var y = cljs.core.first(cljs.core.next(arglist__14433));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14433)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14433)));
return G__14430__delegate.call(this, x, y, z, args);
});
return G__14430;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__0.call(this);
case  1 :
return ep1__1.call(this,x);
case  2 :
return ep1__2.call(this,x,y);
case  3 :
return ep1__3.call(this,x,y,z);
default:
return ep1__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__4.cljs$lang$applyTo;
ep1.__0 = ep1__0;
ep1.__1 = ep1__1;
ep1.__2 = ep1__2;
ep1.__3 = ep1__3;
ep1.__4 = ep1__4;
return ep1;
})()
});
var every_pred__2 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__0 = (function (){
return true;
});
var ep2__1 = (function (x){
return cljs.core.boolean$((function (){var and__3546__auto____14160 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14160))
{return p2.call(null,x);
} else
{return and__3546__auto____14160;
}
})());
});
var ep2__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3546__auto____14166 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14166))
{var and__3546__auto____14168 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____14168))
{var and__3546__auto____14169 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14169))
{return p2.call(null,y);
} else
{return and__3546__auto____14169;
}
} else
{return and__3546__auto____14168;
}
} else
{return and__3546__auto____14166;
}
})());
});
var ep2__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3546__auto____14172 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14172))
{var and__3546__auto____14173 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____14173))
{var and__3546__auto____14174 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____14174))
{var and__3546__auto____14176 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14176))
{var and__3546__auto____14177 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____14177))
{return p2.call(null,z);
} else
{return and__3546__auto____14177;
}
} else
{return and__3546__auto____14176;
}
} else
{return and__3546__auto____14174;
}
} else
{return and__3546__auto____14173;
}
} else
{return and__3546__auto____14172;
}
})());
});
var ep2__4 = (function() { 
var G__14449__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3546__auto____14184 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____14184))
{return cljs.core.every_QMARK_((function (p1__14076_SHARP_){
var and__3546__auto____14188 = p1.call(null,p1__14076_SHARP_);

if(cljs.core.truth_(and__3546__auto____14188))
{return p2.call(null,p1__14076_SHARP_);
} else
{return and__3546__auto____14188;
}
}),args);
} else
{return and__3546__auto____14184;
}
})());
};
var G__14449 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14449__delegate.call(this, x, y, z, args);
};
G__14449.cljs$lang$maxFixedArity = 3;
G__14449.cljs$lang$applyTo = (function (arglist__14453){
var x = cljs.core.first(arglist__14453);
var y = cljs.core.first(cljs.core.next(arglist__14453));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14453)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14453)));
return G__14449__delegate.call(this, x, y, z, args);
});
return G__14449;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__0.call(this);
case  1 :
return ep2__1.call(this,x);
case  2 :
return ep2__2.call(this,x,y);
case  3 :
return ep2__3.call(this,x,y,z);
default:
return ep2__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__4.cljs$lang$applyTo;
ep2.__0 = ep2__0;
ep2.__1 = ep2__1;
ep2.__2 = ep2__2;
ep2.__3 = ep2__3;
ep2.__4 = ep2__4;
return ep2;
})()
});
var every_pred__3 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__0 = (function (){
return true;
});
var ep3__1 = (function (x){
return cljs.core.boolean$((function (){var and__3546__auto____14192 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14192))
{var and__3546__auto____14193 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14193))
{return p3.call(null,x);
} else
{return and__3546__auto____14193;
}
} else
{return and__3546__auto____14192;
}
})());
});
var ep3__2 = (function (x,y){
return cljs.core.boolean$((function (){var and__3546__auto____14195 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14195))
{var and__3546__auto____14196 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14196))
{var and__3546__auto____14199 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____14199))
{var and__3546__auto____14200 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____14200))
{var and__3546__auto____14201 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____14201))
{return p3.call(null,y);
} else
{return and__3546__auto____14201;
}
} else
{return and__3546__auto____14200;
}
} else
{return and__3546__auto____14199;
}
} else
{return and__3546__auto____14196;
}
} else
{return and__3546__auto____14195;
}
})());
});
var ep3__3 = (function (x,y,z){
return cljs.core.boolean$((function (){var and__3546__auto____14204 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____14204))
{var and__3546__auto____14207 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____14207))
{var and__3546__auto____14210 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____14210))
{var and__3546__auto____14211 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____14211))
{var and__3546__auto____14214 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____14214))
{var and__3546__auto____14215 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____14215))
{var and__3546__auto____14216 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____14216))
{var and__3546__auto____14219 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____14219))
{return p3.call(null,z);
} else
{return and__3546__auto____14219;
}
} else
{return and__3546__auto____14216;
}
} else
{return and__3546__auto____14215;
}
} else
{return and__3546__auto____14214;
}
} else
{return and__3546__auto____14211;
}
} else
{return and__3546__auto____14210;
}
} else
{return and__3546__auto____14207;
}
} else
{return and__3546__auto____14204;
}
})());
});
var ep3__4 = (function() { 
var G__14480__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3546__auto____14226 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____14226))
{return cljs.core.every_QMARK_((function (p1__14078_SHARP_){
var and__3546__auto____14231 = p1.call(null,p1__14078_SHARP_);

if(cljs.core.truth_(and__3546__auto____14231))
{var and__3546__auto____14234 = p2.call(null,p1__14078_SHARP_);

if(cljs.core.truth_(and__3546__auto____14234))
{return p3.call(null,p1__14078_SHARP_);
} else
{return and__3546__auto____14234;
}
} else
{return and__3546__auto____14231;
}
}),args);
} else
{return and__3546__auto____14226;
}
})());
};
var G__14480 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14480__delegate.call(this, x, y, z, args);
};
G__14480.cljs$lang$maxFixedArity = 3;
G__14480.cljs$lang$applyTo = (function (arglist__14485){
var x = cljs.core.first(arglist__14485);
var y = cljs.core.first(cljs.core.next(arglist__14485));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14485)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14485)));
return G__14480__delegate.call(this, x, y, z, args);
});
return G__14480;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__0.call(this);
case  1 :
return ep3__1.call(this,x);
case  2 :
return ep3__2.call(this,x,y);
case  3 :
return ep3__3.call(this,x,y,z);
default:
return ep3__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__4.cljs$lang$applyTo;
ep3.__0 = ep3__0;
ep3.__1 = ep3__1;
ep3.__2 = ep3__2;
ep3.__3 = ep3__3;
ep3.__4 = ep3__4;
return ep3;
})()
});
var every_pred__4 = (function() { 
var G__14486__delegate = function (p1,p2,p3,ps){
var ps__14239 = cljs.core.list_STAR_.__4(p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__0 = (function (){
return true;
});
var epn__1 = (function (x){
return cljs.core.every_QMARK_((function (p1__14079_SHARP_){
return p1__14079_SHARP_.call(null,x);
}),ps__14239);
});
var epn__2 = (function (x,y){
return cljs.core.every_QMARK_((function (p1__14081_SHARP_){
var and__3546__auto____14243 = p1__14081_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____14243))
{return p1__14081_SHARP_.call(null,y);
} else
{return and__3546__auto____14243;
}
}),ps__14239);
});
var epn__3 = (function (x,y,z){
return cljs.core.every_QMARK_((function (p1__14083_SHARP_){
var and__3546__auto____14340 = p1__14083_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____14340))
{var and__3546__auto____14342 = p1__14083_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____14342))
{return p1__14083_SHARP_.call(null,z);
} else
{return and__3546__auto____14342;
}
} else
{return and__3546__auto____14340;
}
}),ps__14239);
});
var epn__4 = (function() { 
var G__14494__delegate = function (x,y,z,args){
return cljs.core.boolean$((function (){var and__3546__auto____14345 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____14345))
{return cljs.core.every_QMARK_((function (p1__14084_SHARP_){
return cljs.core.every_QMARK_(p1__14084_SHARP_,args);
}),ps__14239);
} else
{return and__3546__auto____14345;
}
})());
};
var G__14494 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14494__delegate.call(this, x, y, z, args);
};
G__14494.cljs$lang$maxFixedArity = 3;
G__14494.cljs$lang$applyTo = (function (arglist__14498){
var x = cljs.core.first(arglist__14498);
var y = cljs.core.first(cljs.core.next(arglist__14498));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14498)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14498)));
return G__14494__delegate.call(this, x, y, z, args);
});
return G__14494;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__0.call(this);
case  1 :
return epn__1.call(this,x);
case  2 :
return epn__2.call(this,x,y);
case  3 :
return epn__3.call(this,x,y,z);
default:
return epn__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__4.cljs$lang$applyTo;
epn.__0 = epn__0;
epn.__1 = epn__1;
epn.__2 = epn__2;
epn.__3 = epn__3;
epn.__4 = epn__4;
return epn;
})()
};
var G__14486 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14486__delegate.call(this, p1, p2, p3, ps);
};
G__14486.cljs$lang$maxFixedArity = 3;
G__14486.cljs$lang$applyTo = (function (arglist__14500){
var p1 = cljs.core.first(arglist__14500);
var p2 = cljs.core.first(cljs.core.next(arglist__14500));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14500)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14500)));
return G__14486__delegate.call(this, p1, p2, p3, ps);
});
return G__14486;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__1.call(this,p1);
case  2 :
return every_pred__2.call(this,p1,p2);
case  3 :
return every_pred__3.call(this,p1,p2,p3);
default:
return every_pred__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__4.cljs$lang$applyTo;
every_pred.__1 = every_pred__1;
every_pred.__2 = every_pred__2;
every_pred.__3 = every_pred__3;
every_pred.__4 = every_pred__4;
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
var some_fn__1 = (function (p){
return (function() {
var sp1 = null;
var sp1__0 = (function (){
return null;
});
var sp1__1 = (function (x){
return p.call(null,x);
});
var sp1__2 = (function (x,y){
var or__3548__auto____14506 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____14506))
{return or__3548__auto____14506;
} else
{return p.call(null,y);
}
});
var sp1__3 = (function (x,y,z){
var or__3548__auto____14509 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____14509))
{return or__3548__auto____14509;
} else
{var or__3548__auto____14510 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____14510))
{return or__3548__auto____14510;
} else
{return p.call(null,z);
}
}
});
var sp1__4 = (function() { 
var G__14688__delegate = function (x,y,z,args){
var or__3548__auto____14512 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____14512))
{return or__3548__auto____14512;
} else
{return cljs.core.some(p,args);
}
};
var G__14688 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14688__delegate.call(this, x, y, z, args);
};
G__14688.cljs$lang$maxFixedArity = 3;
G__14688.cljs$lang$applyTo = (function (arglist__14690){
var x = cljs.core.first(arglist__14690);
var y = cljs.core.first(cljs.core.next(arglist__14690));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14690)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14690)));
return G__14688__delegate.call(this, x, y, z, args);
});
return G__14688;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__0.call(this);
case  1 :
return sp1__1.call(this,x);
case  2 :
return sp1__2.call(this,x,y);
case  3 :
return sp1__3.call(this,x,y,z);
default:
return sp1__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__4.cljs$lang$applyTo;
sp1.__0 = sp1__0;
sp1.__1 = sp1__1;
sp1.__2 = sp1__2;
sp1.__3 = sp1__3;
sp1.__4 = sp1__4;
return sp1;
})()
});
var some_fn__2 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__0 = (function (){
return null;
});
var sp2__1 = (function (x){
var or__3548__auto____14515 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14515))
{return or__3548__auto____14515;
} else
{return p2.call(null,x);
}
});
var sp2__2 = (function (x,y){
var or__3548__auto____14516 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14516))
{return or__3548__auto____14516;
} else
{var or__3548__auto____14518 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____14518))
{return or__3548__auto____14518;
} else
{var or__3548__auto____14519 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14519))
{return or__3548__auto____14519;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3 = (function (x,y,z){
var or__3548__auto____14522 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14522))
{return or__3548__auto____14522;
} else
{var or__3548__auto____14523 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____14523))
{return or__3548__auto____14523;
} else
{var or__3548__auto____14524 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____14524))
{return or__3548__auto____14524;
} else
{var or__3548__auto____14526 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14526))
{return or__3548__auto____14526;
} else
{var or__3548__auto____14527 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____14527))
{return or__3548__auto____14527;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__4 = (function() { 
var G__14704__delegate = function (x,y,z,args){
var or__3548__auto____14529 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____14529))
{return or__3548__auto____14529;
} else
{return cljs.core.some((function (p1__14113_SHARP_){
var or__3548__auto____14530 = p1.call(null,p1__14113_SHARP_);

if(cljs.core.truth_(or__3548__auto____14530))
{return or__3548__auto____14530;
} else
{return p2.call(null,p1__14113_SHARP_);
}
}),args);
}
};
var G__14704 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14704__delegate.call(this, x, y, z, args);
};
G__14704.cljs$lang$maxFixedArity = 3;
G__14704.cljs$lang$applyTo = (function (arglist__14707){
var x = cljs.core.first(arglist__14707);
var y = cljs.core.first(cljs.core.next(arglist__14707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14707)));
return G__14704__delegate.call(this, x, y, z, args);
});
return G__14704;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__0.call(this);
case  1 :
return sp2__1.call(this,x);
case  2 :
return sp2__2.call(this,x,y);
case  3 :
return sp2__3.call(this,x,y,z);
default:
return sp2__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__4.cljs$lang$applyTo;
sp2.__0 = sp2__0;
sp2.__1 = sp2__1;
sp2.__2 = sp2__2;
sp2.__3 = sp2__3;
sp2.__4 = sp2__4;
return sp2;
})()
});
var some_fn__3 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__0 = (function (){
return null;
});
var sp3__1 = (function (x){
var or__3548__auto____14533 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14533))
{return or__3548__auto____14533;
} else
{var or__3548__auto____14535 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14535))
{return or__3548__auto____14535;
} else
{return p3.call(null,x);
}
}
});
var sp3__2 = (function (x,y){
var or__3548__auto____14569 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14569))
{return or__3548__auto____14569;
} else
{var or__3548__auto____14573 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14573))
{return or__3548__auto____14573;
} else
{var or__3548__auto____14576 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____14576))
{return or__3548__auto____14576;
} else
{var or__3548__auto____14580 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____14580))
{return or__3548__auto____14580;
} else
{var or__3548__auto____14582 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____14582))
{return or__3548__auto____14582;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3 = (function (x,y,z){
var or__3548__auto____14585 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____14585))
{return or__3548__auto____14585;
} else
{var or__3548__auto____14587 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____14587))
{return or__3548__auto____14587;
} else
{var or__3548__auto____14588 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____14588))
{return or__3548__auto____14588;
} else
{var or__3548__auto____14589 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____14589))
{return or__3548__auto____14589;
} else
{var or__3548__auto____14613 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____14613))
{return or__3548__auto____14613;
} else
{var or__3548__auto____14614 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____14614))
{return or__3548__auto____14614;
} else
{var or__3548__auto____14615 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____14615))
{return or__3548__auto____14615;
} else
{var or__3548__auto____14616 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____14616))
{return or__3548__auto____14616;
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
var sp3__4 = (function() { 
var G__14729__delegate = function (x,y,z,args){
var or__3548__auto____14617 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____14617))
{return or__3548__auto____14617;
} else
{return cljs.core.some((function (p1__14114_SHARP_){
var or__3548__auto____14618 = p1.call(null,p1__14114_SHARP_);

if(cljs.core.truth_(or__3548__auto____14618))
{return or__3548__auto____14618;
} else
{var or__3548__auto____14619 = p2.call(null,p1__14114_SHARP_);

if(cljs.core.truth_(or__3548__auto____14619))
{return or__3548__auto____14619;
} else
{return p3.call(null,p1__14114_SHARP_);
}
}
}),args);
}
};
var G__14729 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14729__delegate.call(this, x, y, z, args);
};
G__14729.cljs$lang$maxFixedArity = 3;
G__14729.cljs$lang$applyTo = (function (arglist__14734){
var x = cljs.core.first(arglist__14734);
var y = cljs.core.first(cljs.core.next(arglist__14734));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14734)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14734)));
return G__14729__delegate.call(this, x, y, z, args);
});
return G__14729;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__0.call(this);
case  1 :
return sp3__1.call(this,x);
case  2 :
return sp3__2.call(this,x,y);
case  3 :
return sp3__3.call(this,x,y,z);
default:
return sp3__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__4.cljs$lang$applyTo;
sp3.__0 = sp3__0;
sp3.__1 = sp3__1;
sp3.__2 = sp3__2;
sp3.__3 = sp3__3;
sp3.__4 = sp3__4;
return sp3;
})()
});
var some_fn__4 = (function() { 
var G__14737__delegate = function (p1,p2,p3,ps){
var ps__14622 = cljs.core.list_STAR_.__4(p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__0 = (function (){
return null;
});
var spn__1 = (function (x){
return cljs.core.some((function (p1__14115_SHARP_){
return p1__14115_SHARP_.call(null,x);
}),ps__14622);
});
var spn__2 = (function (x,y){
return cljs.core.some((function (p1__14117_SHARP_){
var or__3548__auto____14623 = p1__14117_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14623))
{return or__3548__auto____14623;
} else
{return p1__14117_SHARP_.call(null,y);
}
}),ps__14622);
});
var spn__3 = (function (x,y,z){
return cljs.core.some((function (p1__14120_SHARP_){
var or__3548__auto____14624 = p1__14120_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14624))
{return or__3548__auto____14624;
} else
{var or__3548__auto____14625 = p1__14120_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____14625))
{return or__3548__auto____14625;
} else
{return p1__14120_SHARP_.call(null,z);
}
}
}),ps__14622);
});
var spn__4 = (function() { 
var G__14746__delegate = function (x,y,z,args){
var or__3548__auto____14626 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____14626))
{return or__3548__auto____14626;
} else
{return cljs.core.some((function (p1__14123_SHARP_){
return cljs.core.some(p1__14123_SHARP_,args);
}),ps__14622);
}
};
var G__14746 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14746__delegate.call(this, x, y, z, args);
};
G__14746.cljs$lang$maxFixedArity = 3;
G__14746.cljs$lang$applyTo = (function (arglist__14750){
var x = cljs.core.first(arglist__14750);
var y = cljs.core.first(cljs.core.next(arglist__14750));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14750)));
return G__14746__delegate.call(this, x, y, z, args);
});
return G__14746;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__0.call(this);
case  1 :
return spn__1.call(this,x);
case  2 :
return spn__2.call(this,x,y);
case  3 :
return spn__3.call(this,x,y,z);
default:
return spn__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__4.cljs$lang$applyTo;
spn.__0 = spn__0;
spn.__1 = spn__1;
spn.__2 = spn__2;
spn.__3 = spn__3;
spn.__4 = spn__4;
return spn;
})()
};
var G__14737 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14737__delegate.call(this, p1, p2, p3, ps);
};
G__14737.cljs$lang$maxFixedArity = 3;
G__14737.cljs$lang$applyTo = (function (arglist__14751){
var p1 = cljs.core.first(arglist__14751);
var p2 = cljs.core.first(cljs.core.next(arglist__14751));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14751)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14751)));
return G__14737__delegate.call(this, p1, p2, p3, ps);
});
return G__14737;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__1.call(this,p1);
case  2 :
return some_fn__2.call(this,p1,p2);
case  3 :
return some_fn__3.call(this,p1,p2,p3);
default:
return some_fn__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__4.cljs$lang$applyTo;
some_fn.__1 = some_fn__1;
some_fn.__2 = some_fn__2;
some_fn.__3 = some_fn__3;
some_fn.__4 = some_fn__4;
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
var map__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14755 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____14755))
{var s__14756 = temp__3698__auto____14755;

return cljs.core.cons(f.call(null,cljs.core.first(s__14756)),map.call(null,f,cljs.core.rest(s__14756)));
} else
{return null;
}
})));
});
var map__3 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__14763 = cljs.core.seq(c1);
var s2__14764 = cljs.core.seq(c2);

if(cljs.core.truth_((function (){var and__3546__auto____14766 = s1__14763;

if(cljs.core.truth_(and__3546__auto____14766))
{return s2__14764;
} else
{return and__3546__auto____14766;
}
})()))
{return cljs.core.cons(f.call(null,cljs.core.first(s1__14763),cljs.core.first(s2__14764)),map.call(null,f,cljs.core.rest(s1__14763),cljs.core.rest(s2__14764)));
} else
{return null;
}
})));
});
var map__4 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__14775 = cljs.core.seq(c1);
var s2__14776 = cljs.core.seq(c2);
var s3__14777 = cljs.core.seq(c3);

if(cljs.core.truth_((function (){var and__3546__auto____14778 = s1__14775;

if(cljs.core.truth_(and__3546__auto____14778))
{var and__3546__auto____14779 = s2__14776;

if(cljs.core.truth_(and__3546__auto____14779))
{return s3__14777;
} else
{return and__3546__auto____14779;
}
} else
{return and__3546__auto____14778;
}
})()))
{return cljs.core.cons(f.call(null,cljs.core.first(s1__14775),cljs.core.first(s2__14776),cljs.core.first(s3__14777)),map.call(null,f,cljs.core.rest(s1__14775),cljs.core.rest(s2__14776),cljs.core.rest(s3__14777)));
} else
{return null;
}
})));
});
var map__5 = (function() { 
var G__14820__delegate = function (f,c1,c2,c3,colls){
var step__14808 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__14781 = map.call(null,cljs.core.seq,cs);

if((cljs.core.every_QMARK_(cljs.core.identity,ss__14781)))
{return cljs.core.cons(map.call(null,cljs.core.first,ss__14781),step.call(null,map.call(null,cljs.core.rest,ss__14781)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__14502_SHARP_){
return cljs.core.apply.__2(f,p1__14502_SHARP_);
}),step__14808.call(null,cljs.core.conj(colls,c3,c2,c1)));
};
var G__14820 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__14820__delegate.call(this, f, c1, c2, c3, colls);
};
G__14820.cljs$lang$maxFixedArity = 4;
G__14820.cljs$lang$applyTo = (function (arglist__14822){
var f = cljs.core.first(arglist__14822);
var c1 = cljs.core.first(cljs.core.next(arglist__14822));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14822)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822))));
return G__14820__delegate.call(this, f, c1, c2, c3, colls);
});
return G__14820;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2.call(this,f,c1);
case  3 :
return map__3.call(this,f,c1,c2);
case  4 :
return map__4.call(this,f,c1,c2,c3);
default:
return map__5.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__5.cljs$lang$applyTo;
map.__2 = map__2;
map.__3 = map__3;
map.__4 = map__4;
map.__5 = map__5;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(((n > 0)))
{var temp__3698__auto____14823 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____14823))
{var s__14824 = temp__3698__auto____14823;

return cljs.core.cons(cljs.core.first(s__14824),take.call(null,(n - 1),cljs.core.rest(s__14824)));
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
var step__14829 = (function (n,coll){
while(true){
var s__14827 = cljs.core.seq(coll);

if(cljs.core.truth_((function (){var and__3546__auto____14828 = (n > 0);

if((and__3546__auto____14828))
{return s__14827;
} else
{return and__3546__auto____14828;
}
})()))
{{
var G__14835 = (n - 1);
var G__14836 = cljs.core.rest(s__14827);
n = G__14835;
coll = G__14836;
continue;
}
} else
{return s__14827;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__14829.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__1 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2 = (function (n,s){
return cljs.core.map.__3((function (x,_){
return x;
}),s,cljs.core.drop(n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__1.call(this,n);
case  2 :
return drop_last__2.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
drop_last.__1 = drop_last__1;
drop_last.__2 = drop_last__2;
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__14842 = cljs.core.seq(coll);
var lead__14843 = cljs.core.seq(cljs.core.drop(n,coll));

while(true){
if(cljs.core.truth_(lead__14843))
{{
var G__14848 = cljs.core.next(s__14842);
var G__14849 = cljs.core.next(lead__14843);
s__14842 = G__14848;
lead__14843 = G__14849;
continue;
}
} else
{return s__14842;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__14855 = (function (pred,coll){
while(true){
var s__14852 = cljs.core.seq(coll);

if(cljs.core.truth_((function (){var and__3546__auto____14853 = s__14852;

if(cljs.core.truth_(and__3546__auto____14853))
{return pred.call(null,cljs.core.first(s__14852));
} else
{return and__3546__auto____14853;
}
})()))
{{
var G__14860 = pred;
var G__14861 = cljs.core.rest(s__14852);
pred = G__14860;
coll = G__14861;
continue;
}
} else
{return s__14852;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__14855.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14906 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____14906))
{var s__14907 = temp__3698__auto____14906;

return cljs.core.concat.__2(s__14907,cycle.call(null,s__14907));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take(n,coll),cljs.core.drop(n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__1 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(x,repeat.call(null,x));
})));
});
var repeat__2 = (function (n,x){
return cljs.core.take(n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__1.call(this,n);
case  2 :
return repeat__2.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
repeat.__1 = repeat__1;
repeat.__2 = repeat__2;
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take(n,cljs.core.repeat.__1(x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__1 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2 = (function (n,f){
return cljs.core.take(n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__1.call(this,n);
case  2 :
return repeatedly__2.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
repeatedly.__1 = repeatedly__1;
repeatedly.__2 = repeatedly__2;
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons(x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__14934 = cljs.core.seq(c1);
var s2__14935 = cljs.core.seq(c2);

if(cljs.core.truth_((function (){var and__3546__auto____14936 = s1__14934;

if(cljs.core.truth_(and__3546__auto____14936))
{return s2__14935;
} else
{return and__3546__auto____14936;
}
})()))
{return cljs.core.cons(cljs.core.first(s1__14934),cljs.core.cons(cljs.core.first(s2__14935),interleave.call(null,cljs.core.rest(s1__14934),cljs.core.rest(s2__14935))));
} else
{return null;
}
})));
});
var interleave__3 = (function() { 
var G__14949__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__14941 = cljs.core.map.__2(cljs.core.seq,cljs.core.conj(colls,c2,c1));

if((cljs.core.every_QMARK_(cljs.core.identity,ss__14941)))
{return cljs.core.concat.__2(cljs.core.map.__2(cljs.core.first,ss__14941),cljs.core.apply.__2(interleave,cljs.core.map.__2(cljs.core.rest,ss__14941)));
} else
{return null;
}
})));
};
var G__14949 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__14949__delegate.call(this, c1, c2, colls);
};
G__14949.cljs$lang$maxFixedArity = 2;
G__14949.cljs$lang$applyTo = (function (arglist__14951){
var c1 = cljs.core.first(arglist__14951);
var c2 = cljs.core.first(cljs.core.next(arglist__14951));
var colls = cljs.core.rest(cljs.core.next(arglist__14951));
return G__14949__delegate.call(this, c1, c2, colls);
});
return G__14949;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2.call(this,c1,c2);
default:
return interleave__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3.cljs$lang$applyTo;
interleave.__2 = interleave__2;
interleave.__3 = interleave__3;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop(1,cljs.core.interleave.__2(cljs.core.repeat.__1(sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__14999 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14997 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3695__auto____14997))
{var coll__14998 = temp__3695__auto____14997;

return cljs.core.cons(cljs.core.first(coll__14998),cat.call(null,cljs.core.rest(coll__14998),colls));
} else
{if(cljs.core.truth_(cljs.core.seq(colls)))
{return cat.call(null,cljs.core.first(colls),cljs.core.rest(colls));
} else
{return null;
}
}
})));
});

return cat__14999.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2 = (function (f,coll){
return cljs.core.flatten1(cljs.core.map.__2(f,coll));
});
var mapcat__3 = (function() { 
var G__15086__delegate = function (f,coll,colls){
return cljs.core.flatten1(cljs.core.apply.__4(cljs.core.map,f,coll,colls));
};
var G__15086 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__15086__delegate.call(this, f, coll, colls);
};
G__15086.cljs$lang$maxFixedArity = 2;
G__15086.cljs$lang$applyTo = (function (arglist__15089){
var f = cljs.core.first(arglist__15089);
var coll = cljs.core.first(cljs.core.next(arglist__15089));
var colls = cljs.core.rest(cljs.core.next(arglist__15089));
return G__15086__delegate.call(this, f, coll, colls);
});
return G__15086;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2.call(this,f,coll);
default:
return mapcat__3.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3.cljs$lang$applyTo;
mapcat.__2 = mapcat__2;
mapcat.__3 = mapcat__3;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____15144 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____15144))
{var s__15145 = temp__3698__auto____15144;

var f__15147 = cljs.core.first(s__15145);
var r__15148 = cljs.core.rest(s__15145);

if(cljs.core.truth_(pred.call(null,f__15147)))
{return cljs.core.cons(f__15147,filter.call(null,pred,r__15148));
} else
{return filter.call(null,pred,r__15148);
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
return cljs.core.filter(cljs.core.complement(pred),coll);
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
var walk__15175 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.__2(walk,children.call(null,node)):null));
})));
});

return walk__15175.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter((function (p1__15161_SHARP_){
return cljs.core.not(cljs.core.sequential_QMARK_(p1__15161_SHARP_));
}),cljs.core.rest(cljs.core.tree_seq(cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.__3(cljs.core._conj,to,from);
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
var partition__2 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____15197 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____15197))
{var s__15198 = temp__3698__auto____15197;

var p__15202 = cljs.core.take(n,s__15198);

if((cljs.core._EQ_.__2(n,cljs.core.count(p__15202))))
{return cljs.core.cons(p__15202,partition.call(null,n,step,cljs.core.drop(step,s__15198)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____15210 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____15210))
{var s__15213 = temp__3698__auto____15210;

var p__15214 = cljs.core.take(n,s__15213);

if((cljs.core._EQ_.__2(n,cljs.core.count(p__15214))))
{return cljs.core.cons(p__15214,partition.call(null,n,step,pad,cljs.core.drop(step,s__15213)));
} else
{return cljs.core.list(cljs.core.take(n,cljs.core.concat.__2(p__15214,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2.call(this,n,step);
case  3 :
return partition__3.call(this,n,step,pad);
case  4 :
return partition__4.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition.__2 = partition__2;
partition.__3 = partition__3;
partition.__4 = partition__4;
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
var get_in__2 = (function (m,ks){
return cljs.core.reduce.__3(cljs.core.get,m,ks);
});
var get_in__3 = (function (m,ks,not_found){
var sentinel__15227 = cljs.core.lookup_sentinel;
var m__15228 = m;
var ks__15229 = cljs.core.seq(ks);

while(true){
if(cljs.core.truth_(ks__15229))
{var m__15231 = cljs.core.get.__3(m__15228,cljs.core.first(ks__15229),sentinel__15227);

if(((sentinel__15227 === m__15231)))
{return not_found;
} else
{{
var G__15374 = sentinel__15227;
var G__15375 = m__15231;
var G__15376 = cljs.core.next(ks__15229);
sentinel__15227 = G__15374;
m__15228 = G__15375;
ks__15229 = G__15376;
continue;
}
}
} else
{return m__15228;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2.call(this,m,ks);
case  3 :
return get_in__3.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
get_in.__2 = get_in__2;
get_in.__3 = get_in__3;
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__15380,v){
var vec__15381__15383 = p__15380;
var k__15384 = cljs.core.nth.__3(vec__15381__15383,0,null);
var ks__15385 = cljs.core.nthnext(vec__15381__15383,1);

if(cljs.core.truth_(ks__15385))
{return cljs.core.assoc.__3(m,k__15384,assoc_in.call(null,cljs.core.get.__2(m,k__15384),ks__15385,v));
} else
{return cljs.core.assoc.__3(m,k__15384,v);
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
var update_in__delegate = function (m,p__15394,f,args){
var vec__15395__15396 = p__15394;
var k__15397 = cljs.core.nth.__3(vec__15395__15396,0,null);
var ks__15398 = cljs.core.nthnext(vec__15395__15396,1);

if(cljs.core.truth_(ks__15398))
{return cljs.core.assoc.__3(m,k__15397,cljs.core.apply.__5(update_in,cljs.core.get.__2(m,k__15397),ks__15398,f,args));
} else
{return cljs.core.assoc.__3(m,k__15397,cljs.core.apply.__3(f,cljs.core.get.__2(m,k__15397),args));
}
};
var update_in = function (m,p__15394,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__15394, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__15407){
var m = cljs.core.first(arglist__15407);
var p__15394 = cljs.core.first(cljs.core.next(arglist__15407));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15407)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__15407)));
return update_in__delegate.call(this, m, p__15394, f, args);
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
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__15416 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup__2 = (function (coll,k){
var this__15420 = this;
return cljs.core._nth.__3(coll,k,null);
});
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup__3 = (function (coll,k,not_found){
var this__15422 = this;
return cljs.core._nth.__3(coll,k,not_found);
});
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc__3 = (function (coll,k,v){
var this__15424 = this;
var new_array__15427 = cljs.core.aclone(this__15424.array);

(new_array__15427[k] = v);
return (new cljs.core.Vector(this__15424.meta,new_array__15427));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__15513 = null;
var G__15513__2 = (function (tsym15429,k){
var this__15432 = this;
var tsym15429__15434 = this;

var coll__15435 = tsym15429__15434;

return cljs.core._lookup.__2(coll__15435,k);
});
var G__15513__3 = (function (tsym15431,k,not_found){
var this__15437 = this;
var tsym15431__15438 = this;

var coll__15440 = tsym15431__15438;

return cljs.core._lookup.__3(coll__15440,k,not_found);
});
G__15513 = function(tsym15431,k,not_found){
switch(arguments.length){
case  2 :
return G__15513__2.call(this,tsym15431,k);
case  3 :
return G__15513__3.call(this,tsym15431,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15513;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__15445 = this;
var new_array__15448 = cljs.core.aclone(this__15445.array);

new_array__15448.push(o);
return (new cljs.core.Vector(this__15445.meta,new_array__15448));
});
cljs.core.Vector.prototype.toString = (function (){
var this__15452 = this;
var this$__15454 = this;

return cljs.core.pr_str(this$__15454);
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce__2 = (function (v,f){
var this__15455 = this;
return cljs.core.ci_reduce.__2(this__15455.array,f);
});
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce__3 = (function (v,f,start){
var this__15469 = this;
return cljs.core.ci_reduce.__3(this__15469.array,f,start);
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__15470 = this;
if(((this__15470.array.length > 0)))
{var vector_seq__15475 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(((i < this__15470.array.length)))
{return cljs.core.cons((this__15470.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__15475.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__15476 = this;
return this__15476.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek__1 = (function (coll){
var this__15477 = this;
var count__15478 = this__15477.array.length;

if(((count__15478 > 0)))
{return (this__15477.array[(count__15478 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop__1 = (function (coll){
var this__15480 = this;
if(((this__15480.array.length > 0)))
{var new_array__15482 = cljs.core.aclone(this__15480.array);

new_array__15482.pop();
return (new cljs.core.Vector(this__15480.meta,new_array__15482));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n__3 = (function (coll,n,val){
var this__15484 = this;
return cljs.core._assoc(coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__15487 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__15490 = this;
return (new cljs.core.Vector(meta,this__15490.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__15494 = this;
return this__15494.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth__2 = (function (coll,n){
var this__15502 = this;
if(((function (){var and__3546__auto____15504 = (0 <= n);

if((and__3546__auto____15504))
{return (n < this__15502.array.length);
} else
{return and__3546__auto____15504;
}
})()))
{return (this__15502.array[n]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth__3 = (function (coll,n,not_found){
var this__15505 = this;
if(((function (){var and__3546__auto____15506 = (0 <= n);

if((and__3546__auto____15506))
{return (n < this__15505.array.length);
} else
{return and__3546__auto____15506;
}
})()))
{return (this__15505.array[n]);
} else
{return not_found;
}
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__15498 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__15498.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__15633 = pv.cnt;

if(((cnt__15633 < 32)))
{return 0;
} else
{return (((cnt__15633 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__15638 = level;
var ret__15639 = node;

while(true){
if(((ll__15638 === 0)))
{return ret__15639;
} else
{var embed__15640 = ret__15639;
var r__15642 = cljs.core.aclone(cljs.core.PersistentVector.EMPTY_NODE);
var ___15643 = (r__15642[0] = embed__15640);

{
var G__15647 = (ll__15638 - 5);
var G__15648 = r__15642;
ll__15638 = G__15647;
ret__15639 = G__15648;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__15650 = cljs.core.aclone(parent);
var subidx__15652 = (((pv.cnt - 1) >> level) & 31);

if(((5 === level)))
{(ret__15650[subidx__15652] = tailnode);
return ret__15650;
} else
{var temp__3695__auto____15654 = (parent[subidx__15652]);

if(cljs.core.truth_(temp__3695__auto____15654))
{var child__15655 = temp__3695__auto____15654;

var node_to_insert__15657 = push_tail.call(null,pv,(level - 5),child__15655,tailnode);
var ___15658 = (ret__15650[subidx__15652] = node_to_insert__15657);

return ret__15650;
} else
{var node_to_insert__15660 = cljs.core.new_path((level - 5),tailnode);
var ___15661 = (ret__15650[subidx__15652] = node_to_insert__15660);

return ret__15650;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(((function (){var and__3546__auto____15666 = (0 <= i);

if((and__3546__auto____15666))
{return (i < pv.cnt);
} else
{return and__3546__auto____15666;
}
})()))
{if(((i >= cljs.core.tail_off(pv))))
{return pv.tail;
} else
{var node__15670 = pv.root;
var level__15671 = pv.shift;

while(true){
if(((level__15671 > 0)))
{{
var G__15680 = (node__15670[((i >> level__15671) & 31)]);
var G__15681 = (level__15671 - 5);
node__15670 = G__15680;
level__15671 = G__15681;
continue;
}
} else
{return node__15670;
}
break;
}
}
} else
{throw (new Error(cljs.core.str("No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__15684 = cljs.core.aclone(node);

if(((level === 0)))
{(ret__15684[(i & 31)] = val);
return ret__15684;
} else
{var subidx__15687 = ((i >> level) & 31);
var ___15689 = (ret__15684[subidx__15687] = do_assoc.call(null,pv,(level - 5),(node[subidx__15687]),i,val));

return ret__15684;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__15699 = (((pv.cnt - 2) >> level) & 31);

if(((level > 5)))
{var new_child__15700 = pop_tail.call(null,pv,(level - 5),(node[subidx__15699]));

if(((function (){var and__3546__auto____15701 = (new_child__15700 === null);

if((and__3546__auto____15701))
{return (subidx__15699 === 0);
} else
{return and__3546__auto____15701;
}
})()))
{return null;
} else
{var ret__15702 = cljs.core.aclone(node);
var ___15703 = (ret__15702[subidx__15699] = new_child__15700);

return ret__15702;
}
} else
{if(((subidx__15699 === 0)))
{return null;
} else
{if(("\uFDD0'else"))
{var ret__15704 = cljs.core.aclone(node);
var ___15705 = (ret__15704[subidx__15699] = null);

return ret__15704;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.PersistentVector = (function (meta,cnt,shift,root,tail){
this.meta = meta;
this.cnt = cnt;
this.shift = shift;
this.root = root;
this.tail = tail;
})
cljs.core.PersistentVector.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.PersistentVector");
});
cljs.core.PersistentVector.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__15769 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup__2 = (function (coll,k){
var this__15772 = this;
return cljs.core._nth.__3(coll,k,null);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup__3 = (function (coll,k,not_found){
var this__15774 = this;
return cljs.core._nth.__3(coll,k,not_found);
});
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc__3 = (function (coll,k,v){
var this__15775 = this;
if(((function (){var and__3546__auto____15776 = (0 <= k);

if((and__3546__auto____15776))
{return (k < this__15775.cnt);
} else
{return and__3546__auto____15776;
}
})()))
{if(((cljs.core.tail_off(coll) <= k)))
{var new_tail__15778 = cljs.core.aclone(this__15775.tail);

(new_tail__15778[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__15775.meta,this__15775.cnt,this__15775.shift,this__15775.root,new_tail__15778));
} else
{return (new cljs.core.PersistentVector(this__15775.meta,this__15775.cnt,this__15775.shift,cljs.core.do_assoc(coll,this__15775.shift,this__15775.root,k,v),this__15775.tail));
}
} else
{if(((k === this__15775.cnt)))
{return cljs.core._conj(coll,v);
} else
{if(("\uFDD0'else"))
{throw (new Error(cljs.core.str("Index ",k," out of bounds  [0,",this__15775.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__15944 = null;
var G__15944__2 = (function (tsym15779,k){
var this__15781 = this;
var tsym15779__15782 = this;

var coll__15783 = tsym15779__15782;

return cljs.core._lookup.__2(coll__15783,k);
});
var G__15944__3 = (function (tsym15780,k,not_found){
var this__15784 = this;
var tsym15780__15785 = this;

var coll__15786 = tsym15780__15785;

return cljs.core._lookup.__3(coll__15786,k,not_found);
});
G__15944 = function(tsym15780,k,not_found){
switch(arguments.length){
case  2 :
return G__15944__2.call(this,tsym15780,k);
case  3 :
return G__15944__3.call(this,tsym15780,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15944;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__15787 = this;
if((((this__15787.cnt - cljs.core.tail_off(coll)) < 32)))
{var new_tail__15788 = cljs.core.aclone(this__15787.tail);

new_tail__15788.push(o);
return (new cljs.core.PersistentVector(this__15787.meta,(this__15787.cnt + 1),this__15787.shift,this__15787.root,new_tail__15788));
} else
{var root_overflow_QMARK___15789 = ((this__15787.cnt >> 5) > (1 << this__15787.shift));
var new_shift__15790 = ((root_overflow_QMARK___15789)?(this__15787.shift + 5):this__15787.shift);
var new_root__15792 = ((root_overflow_QMARK___15789)?(function (){var n_r__15791 = cljs.core.aclone(cljs.core.PersistentVector.EMPTY_NODE);

(n_r__15791[0] = this__15787.root);
(n_r__15791[1] = cljs.core.new_path(this__15787.shift,this__15787.tail));
return n_r__15791;
})():cljs.core.push_tail(coll,this__15787.shift,this__15787.root,this__15787.tail));

return (new cljs.core.PersistentVector(this__15787.meta,(this__15787.cnt + 1),new_shift__15790,new_root__15792,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_key__1 = (function (coll){
var this__15793 = this;
return cljs.core._nth.__2(coll,0);
});
cljs.core.PersistentVector.prototype.cljs$core$IMapEntry$_val__1 = (function (coll){
var this__15794 = this;
return cljs.core._nth.__2(coll,1);
});
cljs.core.PersistentVector.prototype.toString = (function (){
var this__15795 = this;
var this$__15796 = this;

return cljs.core.pr_str(this$__15796);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce__2 = (function (v,f){
var this__15797 = this;
return cljs.core.ci_reduce.__2(v,f);
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce__3 = (function (v,f,start){
var this__15798 = this;
return cljs.core.ci_reduce.__3(v,f,start);
});
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__15800 = this;
if(((this__15800.cnt > 0)))
{var vector_seq__15804 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(((i < this__15800.cnt)))
{return cljs.core.cons(cljs.core._nth.__2(coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__15804.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__15805 = this;
return this__15805.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek__1 = (function (coll){
var this__15808 = this;
if(((this__15808.cnt > 0)))
{return cljs.core._nth.__2(coll,(this__15808.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop__1 = (function (coll){
var this__15843 = this;
if(((this__15843.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(((1 === this__15843.cnt)))
{return cljs.core._with_meta(cljs.core.PersistentVector.EMPTY,this__15843.meta);
} else
{if(((1 < (this__15843.cnt - cljs.core.tail_off(coll)))))
{return (new cljs.core.PersistentVector(this__15843.meta,(this__15843.cnt - 1),this__15843.shift,this__15843.root,cljs.core.aclone(this__15843.tail)));
} else
{if(("\uFDD0'else"))
{var new_tail__15844 = cljs.core.array_for(coll,(this__15843.cnt - 2));
var nr__15846 = cljs.core.pop_tail(this__15843.shift,this__15843.root);
var new_root__15921 = (((nr__15846 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__15846);
var cnt_1__15922 = (this__15843.cnt - 1);

if(((function (){var and__3546__auto____15925 = (5 < this__15843.shift);

if((and__3546__auto____15925))
{return ((new_root__15921[1]) === null);
} else
{return and__3546__auto____15925;
}
})()))
{return (new cljs.core.PersistentVector(this__15843.meta,cnt_1__15922,(this__15843.shift - 5),(new_root__15921[0]),new_tail__15844));
} else
{return (new cljs.core.PersistentVector(this__15843.meta,cnt_1__15922,this__15843.shift,new_root__15921,new_tail__15844));
}
} else
{return null;
}
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IVector$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IVector$_assoc_n__3 = (function (coll,n,val){
var this__15928 = this;
return cljs.core._assoc(coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__15929 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__15930 = this;
return (new cljs.core.PersistentVector(meta,this__15930.cnt,this__15930.shift,this__15930.root,this__15930.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__15932 = this;
return this__15932.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth__2 = (function (coll,n){
var this__15933 = this;
return (cljs.core.array_for(coll,n)[(n & 31)]);
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth__3 = (function (coll,n,not_found){
var this__15935 = this;
if(((function (){var and__3546__auto____15936 = (0 <= n);

if((and__3546__auto____15936))
{return (n < this__15935.cnt);
} else
{return and__3546__auto____15936;
}
})()))
{return cljs.core._nth.__2(coll,n);
} else
{return not_found;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__15931 = this;
return cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,this__15931.meta);
});
cljs.core.PersistentVector;
cljs.core.PersistentVector.EMPTY_NODE = cljs.core.make_array(32);
cljs.core.PersistentVector.EMPTY = (new cljs.core.PersistentVector(null,0,5,cljs.core.PersistentVector.EMPTY_NODE,[]));
cljs.core.PersistentVector.fromArray = (function (xs){
return cljs.core.into(cljs.core.PersistentVector.EMPTY,xs);
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.__3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec(args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__16145){
var args = cljs.core.seq( arglist__16145 );;
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
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__16149 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup__2 = (function (coll,k){
var this__16151 = this;
return cljs.core._nth.__3(coll,k,null);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup__3 = (function (coll,k,not_found){
var this__16152 = this;
return cljs.core._nth.__3(coll,k,not_found);
});
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc__3 = (function (coll,key,val){
var this__16153 = this;
var v_pos__16156 = (this__16153.start + key);

return (new cljs.core.Subvec(this__16153.meta,cljs.core._assoc(this__16153.v,v_pos__16156,val),this__16153.start,((this__16153.end > (v_pos__16156 + 1)) ? this__16153.end : (v_pos__16156 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__16268 = null;
var G__16268__2 = (function (tsym16158,k){
var this__16160 = this;
var tsym16158__16162 = this;

var coll__16163 = tsym16158__16162;

return cljs.core._lookup.__2(coll__16163,k);
});
var G__16268__3 = (function (tsym16159,k,not_found){
var this__16164 = this;
var tsym16159__16166 = this;

var coll__16167 = tsym16159__16166;

return cljs.core._lookup.__3(coll__16167,k,not_found);
});
G__16268 = function(tsym16159,k,not_found){
switch(arguments.length){
case  2 :
return G__16268__2.call(this,tsym16159,k);
case  3 :
return G__16268__3.call(this,tsym16159,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16268;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__16168 = this;
return (new cljs.core.Subvec(this__16168.meta,cljs.core._assoc_n(this__16168.v,this__16168.end,o),this__16168.start,(this__16168.end + 1)));
});
cljs.core.Subvec.prototype.toString = (function (){
var this__16169 = this;
var this$__16170 = this;

return cljs.core.pr_str(this$__16170);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce__2 = (function (coll,f){
var this__16174 = this;
return cljs.core.ci_reduce.__2(coll,f);
});
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce__3 = (function (coll,f,start){
var this__16176 = this;
return cljs.core.ci_reduce.__3(coll,f,start);
});
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__16236 = this;
var subvec_seq__16237 = (function subvec_seq(i){
if((cljs.core._EQ_.__2(i,this__16236.end)))
{return null;
} else
{return cljs.core.cons(cljs.core._nth.__2(this__16236.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__16237.call(null,this__16236.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__16238 = this;
return (this__16238.end - this__16238.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek__1 = (function (coll){
var this__16239 = this;
return cljs.core._nth.__2(this__16239.v,(this__16239.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop__1 = (function (coll){
var this__16241 = this;
if((cljs.core._EQ_.__2(this__16241.start,this__16241.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__16241.meta,this__16241.v,this__16241.start,(this__16241.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n__3 = (function (coll,n,val){
var this__16243 = this;
return cljs.core._assoc(coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__16245 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__16246 = this;
return (new cljs.core.Subvec(meta,this__16246.v,this__16246.start,this__16246.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__16248 = this;
return this__16248.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth__2 = (function (coll,n){
var this__16255 = this;
return cljs.core._nth.__2(this__16255.v,(this__16255.start + n));
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth__3 = (function (coll,n,not_found){
var this__16258 = this;
return cljs.core._nth.__3(this__16258.v,(this__16258.start + n),not_found);
});
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__16252 = this;
return cljs.core.with_meta(cljs.core.Vector.EMPTY,this__16252.meta);
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
var subvec__2 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count(v));
});
var subvec__3 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__2.call(this,v,start);
case  3 :
return subvec__3.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
subvec.__2 = subvec__2;
subvec.__3 = subvec__3;
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
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__16299 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__16302 = this;
return cljs.core.cons(o,coll);
});
cljs.core.PersistentQueueSeq.prototype.toString = (function (){
var this__16304 = this;
var this$__16305 = this;

return cljs.core.pr_str(this$__16305);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__16307 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first__1 = (function (coll){
var this__16310 = this;
return cljs.core._first(this__16310.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest__1 = (function (coll){
var this__16314 = this;
var temp__3695__auto____16316 = cljs.core.next(this__16314.front);

if(cljs.core.truth_(temp__3695__auto____16316))
{var f1__16319 = temp__3695__auto____16316;

return (new cljs.core.PersistentQueueSeq(this__16314.meta,f1__16319,this__16314.rear));
} else
{if(((this__16314.rear === null)))
{return cljs.core._empty(coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__16314.meta,this__16314.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__16321 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__16324 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__16324.front,this__16324.rear));
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__16325 = this;
return this__16325.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__16326 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__16326.meta);
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
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__16393 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__16396 = this;
if(cljs.core.truth_(this__16396.front))
{return (new cljs.core.PersistentQueue(this__16396.meta,(this__16396.count + 1),this__16396.front,cljs.core.conj.__2((function (){var or__3548__auto____16398 = this__16396.rear;

if(cljs.core.truth_(or__3548__auto____16398))
{return or__3548__auto____16398;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__16396.meta,(this__16396.count + 1),cljs.core.conj.__2(this__16396.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.toString = (function (){
var this__16403 = this;
var this$__16405 = this;

return cljs.core.pr_str(this$__16405);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__16407 = this;
var rear__16409 = cljs.core.seq(this__16407.rear);

if(cljs.core.truth_((function (){var or__3548__auto____16411 = this__16407.front;

if(cljs.core.truth_(or__3548__auto____16411))
{return or__3548__auto____16411;
} else
{return rear__16409;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__16407.front,cljs.core.seq(rear__16409)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__16413 = this;
return this__16413.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek__1 = (function (coll){
var this__16414 = this;
return cljs.core._first(this__16414.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop__1 = (function (coll){
var this__16416 = this;
if(cljs.core.truth_(this__16416.front))
{var temp__3695__auto____16418 = cljs.core.next(this__16416.front);

if(cljs.core.truth_(temp__3695__auto____16418))
{var f1__16420 = temp__3695__auto____16418;

return (new cljs.core.PersistentQueue(this__16416.meta,(this__16416.count - 1),f1__16420,this__16416.rear));
} else
{return (new cljs.core.PersistentQueue(this__16416.meta,(this__16416.count - 1),cljs.core.seq(this__16416.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first__1 = (function (coll){
var this__16423 = this;
return cljs.core.first(this__16423.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest__1 = (function (coll){
var this__16425 = this;
return cljs.core.rest(cljs.core.seq(coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__16427 = this;
return cljs.core.equiv_sequential(coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__16430 = this;
return (new cljs.core.PersistentQueue(meta,this__16430.count,this__16430.front,this__16430.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__16431 = this;
return this__16431.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__16433 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.PersistentVector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv__2 = (function (o,other){
var this__16555 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$(((cljs.core.map_QMARK_(y))?((cljs.core._EQ_.__2(cljs.core.count(x),cljs.core.count(y)))?cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.__2((function (xkv){
return cljs.core._EQ_.__2(cljs.core.get.__3(y,cljs.core.first(xkv),cljs.core.never_equiv),cljs.core.second(xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__16576 = array.length;

var i__16578 = 0;

while(true){
if(((i__16578 < len__16576)))
{if((cljs.core._EQ_.__2(k,(array[i__16578]))))
{return i__16578;
} else
{{
var G__16584 = (i__16578 + incr);
i__16578 = G__16584;
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
var obj_map_contains_key_QMARK___2 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____16589 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____16589))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____16589;
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
return obj_map_contains_key_QMARK___2.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
obj_map_contains_key_QMARK_.__2 = obj_map_contains_key_QMARK___2;
obj_map_contains_key_QMARK_.__4 = obj_map_contains_key_QMARK___4;
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__16612 = cljs.core.hash(a);
var b__16613 = cljs.core.hash(b);

if(((a__16612 < b__16613)))
{return -1;
} else
{if(((a__16612 > b__16613)))
{return 1;
} else
{if(("\uFDD0'else"))
{return 0;
} else
{return null;
}
}
}
});

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__16624 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup__2 = (function (coll,k){
var this__16626 = this;
return cljs.core._lookup.__3(coll,k,null);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup__3 = (function (coll,k,not_found){
var this__16629 = this;
return cljs.core.obj_map_contains_key_QMARK_.__4(k,this__16629.strobj,(this__16629.strobj[k]),not_found);
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc__3 = (function (coll,k,v){
var this__16631 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__16633 = goog.object.clone.call(null,this__16631.strobj);
var overwrite_QMARK___16635 = new_strobj__16633.hasOwnProperty(k);

(new_strobj__16633[k] = v);
if(cljs.core.truth_(overwrite_QMARK___16635))
{return (new cljs.core.ObjMap(this__16631.meta,this__16631.keys,new_strobj__16633));
} else
{var new_keys__16636 = cljs.core.aclone(this__16631.keys);

new_keys__16636.push(k);
return (new cljs.core.ObjMap(this__16631.meta,new_keys__16636,new_strobj__16633));
}
} else
{return cljs.core.with_meta(cljs.core.into(cljs.core.hash_map(k,v),cljs.core.seq(coll)),this__16631.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK___2 = (function (coll,k){
var this__16712 = this;
return cljs.core.obj_map_contains_key_QMARK_.__2(k,this__16712.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__16779 = null;
var G__16779__2 = (function (tsym16713,k){
var this__16717 = this;
var tsym16713__16721 = this;

var coll__16723 = tsym16713__16721;

return cljs.core._lookup.__2(coll__16723,k);
});
var G__16779__3 = (function (tsym16715,k,not_found){
var this__16725 = this;
var tsym16715__16727 = this;

var coll__16729 = tsym16715__16727;

return cljs.core._lookup.__3(coll__16729,k,not_found);
});
G__16779 = function(tsym16715,k,not_found){
switch(arguments.length){
case  2 :
return G__16779__2.call(this,tsym16715,k);
case  3 :
return G__16779__3.call(this,tsym16715,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16779;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj__2 = (function (coll,entry){
var this__16732 = this;
if((cljs.core.vector_QMARK_(entry)))
{return cljs.core._assoc(coll,cljs.core._nth.__2(entry,0),cljs.core._nth.__2(entry,1));
} else
{return cljs.core.reduce.__3(cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.toString = (function (){
var this__16735 = this;
var this$__16736 = this;

return cljs.core.pr_str(this$__16736);
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__16740 = this;
if(((this__16740.keys.length > 0)))
{return cljs.core.map.__2((function (p1__16608_SHARP_){
return cljs.core.vector(p1__16608_SHARP_,(this__16740.strobj[p1__16608_SHARP_]));
}),this__16740.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__16747 = this;
return this__16747.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__16751 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__16755 = this;
return (new cljs.core.ObjMap(meta,this__16755.keys,this__16755.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__16757 = this;
return this__16757.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__16759 = this;
return cljs.core.with_meta(cljs.core.ObjMap.EMPTY,this__16759.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc__2 = (function (coll,k){
var this__16762 = this;
if(cljs.core.truth_((function (){var and__3546__auto____16765 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____16765))
{return this__16762.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____16765;
}
})()))
{var new_keys__16766 = cljs.core.aclone(this__16762.keys);
var new_strobj__16767 = goog.object.clone.call(null,this__16762.strobj);

new_keys__16766.splice(cljs.core.scan_array(1,k,new_keys__16766),1);
cljs.core.js_delete(new_strobj__16767,k);
return (new cljs.core.ObjMap(this__16762.meta,new_keys__16766,new_strobj__16767));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,[],cljs.core.js_obj()));
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
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__16888 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup__2 = (function (coll,k){
var this__16889 = this;
return cljs.core._lookup.__3(coll,k,null);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup__3 = (function (coll,k,not_found){
var this__16894 = this;
var bucket__16896 = (this__16894.hashobj[cljs.core.hash(k)]);
var i__16900 = (cljs.core.truth_(bucket__16896)?cljs.core.scan_array(2,k,bucket__16896):null);

if(cljs.core.truth_(i__16900))
{return (bucket__16896[(i__16900 + 1)]);
} else
{return not_found;
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc__3 = (function (coll,k,v){
var this__16902 = this;
var h__16903 = cljs.core.hash(k);
var bucket__16905 = (this__16902.hashobj[h__16903]);

if(cljs.core.truth_(bucket__16905))
{var new_bucket__16910 = cljs.core.aclone(bucket__16905);
var new_hashobj__16913 = goog.object.clone.call(null,this__16902.hashobj);

(new_hashobj__16913[h__16903] = new_bucket__16910);
var temp__3695__auto____16918 = cljs.core.scan_array(2,k,new_bucket__16910);

if(cljs.core.truth_(temp__3695__auto____16918))
{var i__16920 = temp__3695__auto____16918;

(new_bucket__16910[(i__16920 + 1)] = v);
return (new cljs.core.HashMap(this__16902.meta,this__16902.count,new_hashobj__16913));
} else
{new_bucket__16910.push(k,v);
return (new cljs.core.HashMap(this__16902.meta,(this__16902.count + 1),new_hashobj__16913));
}
} else
{var new_hashobj__16925 = goog.object.clone.call(null,this__16902.hashobj);

(new_hashobj__16925[h__16903] = [k,v]);
return (new cljs.core.HashMap(this__16902.meta,(this__16902.count + 1),new_hashobj__16925));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK___2 = (function (coll,k){
var this__16930 = this;
var bucket__16933 = (this__16930.hashobj[cljs.core.hash(k)]);
var i__16936 = (cljs.core.truth_(bucket__16933)?cljs.core.scan_array(2,k,bucket__16933):null);

if(cljs.core.truth_(i__16936))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__17052 = null;
var G__17052__2 = (function (tsym16940,k){
var this__16943 = this;
var tsym16940__16946 = this;

var coll__16947 = tsym16940__16946;

return cljs.core._lookup.__2(coll__16947,k);
});
var G__17052__3 = (function (tsym16941,k,not_found){
var this__16949 = this;
var tsym16941__16952 = this;

var coll__16953 = tsym16941__16952;

return cljs.core._lookup.__3(coll__16953,k,not_found);
});
G__17052 = function(tsym16941,k,not_found){
switch(arguments.length){
case  2 :
return G__17052__2.call(this,tsym16941,k);
case  3 :
return G__17052__3.call(this,tsym16941,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17052;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj__2 = (function (coll,entry){
var this__16956 = this;
if((cljs.core.vector_QMARK_(entry)))
{return cljs.core._assoc(coll,cljs.core._nth.__2(entry,0),cljs.core._nth.__2(entry,1));
} else
{return cljs.core.reduce.__3(cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.toString = (function (){
var this__16968 = this;
var this$__16970 = this;

return cljs.core.pr_str(this$__16970);
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__16975 = this;
if(((this__16975.count > 0)))
{var hashes__16978 = cljs.core.js_keys(this__16975.hashobj).sort();

return cljs.core.mapcat.__2((function (p1__16801_SHARP_){
return cljs.core.map.__2(cljs.core.vec,cljs.core.partition.__2(2,(this__16975.hashobj[p1__16801_SHARP_])));
}),hashes__16978);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__16991 = this;
return this__16991.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__16996 = this;
return cljs.core.equiv_map(coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__17000 = this;
return (new cljs.core.HashMap(meta,this__17000.count,this__17000.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__17001 = this;
return this__17001.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__17019 = this;
return cljs.core.with_meta(cljs.core.HashMap.EMPTY,this__17019.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc__2 = (function (coll,k){
var this__17023 = this;
var h__17024 = cljs.core.hash(k);
var bucket__17026 = (this__17023.hashobj[h__17024]);
var i__17027 = (cljs.core.truth_(bucket__17026)?cljs.core.scan_array(2,k,bucket__17026):null);

if((cljs.core.not(i__17027)))
{return coll;
} else
{var new_hashobj__17029 = goog.object.clone.call(null,this__17023.hashobj);

if(((3 > bucket__17026.length)))
{cljs.core.js_delete(new_hashobj__17029,h__17024);
} else
{var new_bucket__17032 = cljs.core.aclone(bucket__17026);

new_bucket__17032.splice(i__17027,2);
(new_hashobj__17029[h__17024] = new_bucket__17032);
}
return (new cljs.core.HashMap(this__17023.meta,(this__17023.count - 1),new_hashobj__17029));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj()));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__17077 = ks.length;

var i__17078 = 0;
var out__17079 = cljs.core.HashMap.EMPTY;

while(true){
if(((i__17078 < len__17077)))
{{
var G__17082 = (i__17078 + 1);
var G__17084 = cljs.core.assoc.__3(out__17079,(ks[i__17078]),(vs[i__17078]));
i__17078 = G__17082;
out__17079 = G__17084;
continue;
}
} else
{return out__17079;
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
var in$__17089 = cljs.core.seq(keyvals);
var out__17090 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__17089))
{{
var G__17094 = cljs.core.nnext(in$__17089);
var G__17095 = cljs.core.assoc.__3(out__17090,cljs.core.first(in$__17089),cljs.core.second(in$__17089));
in$__17089 = G__17094;
out__17090 = G__17095;
continue;
}
} else
{return out__17090;
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
hash_map.cljs$lang$applyTo = (function (arglist__17098){
var keyvals = cljs.core.seq( arglist__17098 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq(cljs.core.map.__2(cljs.core.first,hash_map));
});
/**
* Returns the key of the map entry.
*/
cljs.core.key = (function key(map_entry){
return cljs.core._key(map_entry);
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq(cljs.core.map.__2(cljs.core.second,hash_map));
});
/**
* Returns the value in the map entry.
*/
cljs.core.val = (function val(map_entry){
return cljs.core._val(map_entry);
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{return cljs.core.reduce.__2((function (p1__17116_SHARP_,p2__17118_SHARP_){
return cljs.core.conj.__2((function (){var or__3548__auto____17128 = p1__17116_SHARP_;

if(cljs.core.truth_(or__3548__auto____17128))
{return or__3548__auto____17128;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__17118_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__17137){
var maps = cljs.core.seq( arglist__17137 );;
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
if(cljs.core.truth_(cljs.core.some(cljs.core.identity,maps)))
{var merge_entry__17149 = (function (m,e){
var k__17145 = cljs.core.first(e);
var v__17146 = cljs.core.second(e);

if((cljs.core.contains_QMARK_(m,k__17145)))
{return cljs.core.assoc.__3(m,k__17145,f.call(null,cljs.core.get.__2(m,k__17145),v__17146));
} else
{return cljs.core.assoc.__3(m,k__17145,v__17146);
}
});
var merge2__17152 = (function (m1,m2){
return cljs.core.reduce.__3(merge_entry__17149,(function (){var or__3548__auto____17151 = m1;

if(cljs.core.truth_(or__3548__auto____17151))
{return or__3548__auto____17151;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq(m2));
});

return cljs.core.reduce.__2(merge2__17152,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__17166){
var f = cljs.core.first(arglist__17166);
var maps = cljs.core.rest(arglist__17166);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__17176 = cljs.core.ObjMap.fromObject([],{});
var keys__17177 = cljs.core.seq(keyseq);

while(true){
if(cljs.core.truth_(keys__17177))
{var key__17180 = cljs.core.first(keys__17177);
var entry__17181 = cljs.core.get.__3(map,key__17180,"\uFDD0'user/not-found");

{
var G__17188 = ((cljs.core.not_EQ_.__2(entry__17181,"\uFDD0'user/not-found"))?cljs.core.assoc.__3(ret__17176,key__17180,entry__17181):ret__17176);
var G__17189 = cljs.core.next(keys__17177);
ret__17176 = G__17188;
keys__17177 = G__17189;
continue;
}
} else
{return ret__17176;
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
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash__1 = (function (coll){
var this__17199 = this;
return cljs.core.hash_coll(coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup__2 = (function (coll,v){
var this__17201 = this;
return cljs.core._lookup.__3(coll,v,null);
});
cljs.core.Set.prototype.cljs$core$ILookup$_lookup__3 = (function (coll,v,not_found){
var this__17204 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_(this__17204.hash_map,v)))
{return v;
} else
{return not_found;
}
});
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__17264 = null;
var G__17264__2 = (function (tsym17208,k){
var this__17210 = this;
var tsym17208__17213 = this;

var coll__17214 = tsym17208__17213;

return cljs.core._lookup.__2(coll__17214,k);
});
var G__17264__3 = (function (tsym17209,k,not_found){
var this__17215 = this;
var tsym17209__17219 = this;

var coll__17222 = tsym17209__17219;

return cljs.core._lookup.__3(coll__17222,k,not_found);
});
G__17264 = function(tsym17209,k,not_found){
switch(arguments.length){
case  2 :
return G__17264__2.call(this,tsym17209,k);
case  3 :
return G__17264__3.call(this,tsym17209,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__17264;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj__2 = (function (coll,o){
var this__17223 = this;
return (new cljs.core.Set(this__17223.meta,cljs.core.assoc.__3(this__17223.hash_map,o,null)));
});
cljs.core.Set.prototype.toString = (function (){
var this__17224 = this;
var this$__17235 = this;

return cljs.core.pr_str(this$__17235);
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
var this__17237 = this;
return cljs.core.keys(this__17237.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin__2 = (function (coll,v){
var this__17239 = this;
return (new cljs.core.Set(this__17239.meta,cljs.core.dissoc.__2(this__17239.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count__1 = (function (coll){
var this__17242 = this;
return cljs.core.count(cljs.core.seq(coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv__2 = (function (coll,other){
var this__17245 = this;
var and__3546__auto____17246 = cljs.core.set_QMARK_(other);

if((and__3546__auto____17246))
{var and__3546__auto____17248 = cljs.core._EQ_.__2(cljs.core.count(coll),cljs.core.count(other));

if((and__3546__auto____17248))
{return cljs.core.every_QMARK_((function (p1__17169_SHARP_){
return cljs.core.contains_QMARK_(coll,p1__17169_SHARP_);
}),other);
} else
{return and__3546__auto____17248;
}
} else
{return and__3546__auto____17246;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (coll,meta){
var this__17253 = this;
return (new cljs.core.Set(meta,this__17253.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta__1 = (function (coll){
var this__17255 = this;
return this__17255.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (coll){
var this__17259 = this;
return cljs.core.with_meta(cljs.core.Set.EMPTY,this__17259.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map()));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__17398 = cljs.core.seq(coll);
var out__17399 = cljs.core.Set.EMPTY;

while(true){
if((cljs.core.not(cljs.core.empty_QMARK_(in$__17398))))
{{
var G__17404 = cljs.core.rest(in$__17398);
var G__17405 = cljs.core.conj.__2(out__17399,cljs.core.first(in$__17398));
in$__17398 = G__17404;
out__17399 = G__17405;
continue;
}
} else
{return out__17399;
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
if((cljs.core.vector_QMARK_(coll)))
{var n__17408 = cljs.core.count(coll);

return cljs.core.reduce.__3((function (v,i){
var temp__3695__auto____17411 = cljs.core.find(smap,cljs.core.nth.__2(v,i));

if(cljs.core.truth_(temp__3695__auto____17411))
{var e__17412 = temp__3695__auto____17411;

return cljs.core.assoc.__3(v,i,cljs.core.second(e__17412));
} else
{return v;
}
}),coll,cljs.core.take(n__17408,cljs.core.iterate(cljs.core.inc,0)));
} else
{return cljs.core.map.__2((function (p1__17396_SHARP_){
var temp__3695__auto____17413 = cljs.core.find(smap,p1__17396_SHARP_);

if(cljs.core.truth_(temp__3695__auto____17413))
{var e__17414 = temp__3695__auto____17413;

return cljs.core.second(e__17414);
} else
{return p1__17396_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__17837 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__17793,seen){
while(true){
var vec__17796__17797 = p__17793;
var f__17799 = cljs.core.nth.__3(vec__17796__17797,0,null);
var xs__17800 = vec__17796__17797;

var temp__3698__auto____17801 = cljs.core.seq(xs__17800);

if(cljs.core.truth_(temp__3698__auto____17801))
{var s__17802 = temp__3698__auto____17801;

if((cljs.core.contains_QMARK_(seen,f__17799)))
{{
var G__17843 = cljs.core.rest(s__17802);
var G__17844 = seen;
p__17793 = G__17843;
seen = G__17844;
continue;
}
} else
{return cljs.core.cons(f__17799,step.call(null,cljs.core.rest(s__17802),cljs.core.conj.__2(seen,f__17799)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__17837.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__17847 = cljs.core.PersistentVector.fromArray([]);
var s__17848 = s;

while(true){
if(cljs.core.truth_(cljs.core.next(s__17848)))
{{
var G__17851 = cljs.core.conj.__2(ret__17847,cljs.core.first(s__17848));
var G__17852 = cljs.core.next(s__17848);
ret__17847 = G__17851;
s__17848 = G__17852;
continue;
}
} else
{return cljs.core.seq(ret__17847);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if((cljs.core.string_QMARK_(x)))
{return x;
} else
{if(((function (){var or__3548__auto____17856 = cljs.core.keyword_QMARK_(x);

if((or__3548__auto____17856))
{return or__3548__auto____17856;
} else
{return cljs.core.symbol_QMARK_(x);
}
})()))
{var i__17858 = x.lastIndexOf("/");

if(((i__17858 < 0)))
{return cljs.core.subs.__2(x,2);
} else
{return cljs.core.subs.__2(x,(i__17858 + 1));
}
} else
{if(("\uFDD0'else"))
{throw (new Error(cljs.core.str("Doesn't support name: ",x)));
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
if(((function (){var or__3548__auto____17879 = cljs.core.keyword_QMARK_(x);

if((or__3548__auto____17879))
{return or__3548__auto____17879;
} else
{return cljs.core.symbol_QMARK_(x);
}
})()))
{var i__17885 = x.lastIndexOf("/");

if(((i__17885 > -1)))
{return cljs.core.subs.__3(x,2,i__17885);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str("Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__17916 = cljs.core.ObjMap.fromObject([],{});
var ks__17917 = cljs.core.seq(keys);
var vs__17919 = cljs.core.seq(vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____17922 = ks__17917;

if(cljs.core.truth_(and__3546__auto____17922))
{return vs__17919;
} else
{return and__3546__auto____17922;
}
})()))
{{
var G__17932 = cljs.core.assoc.__3(map__17916,cljs.core.first(ks__17917),cljs.core.first(vs__17919));
var G__17933 = cljs.core.next(ks__17917);
var G__17934 = cljs.core.next(vs__17919);
map__17916 = G__17932;
ks__17917 = G__17933;
vs__17919 = G__17934;
continue;
}
} else
{return map__17916;
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
var max_key__2 = (function (k,x){
return x;
});
var max_key__3 = (function (k,x,y){
if(((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4 = (function() { 
var G__17951__delegate = function (k,x,y,more){
return cljs.core.reduce.__3((function (p1__17909_SHARP_,p2__17911_SHARP_){
return max_key.call(null,k,p1__17909_SHARP_,p2__17911_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__17951 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17951__delegate.call(this, k, x, y, more);
};
G__17951.cljs$lang$maxFixedArity = 3;
G__17951.cljs$lang$applyTo = (function (arglist__17952){
var k = cljs.core.first(arglist__17952);
var x = cljs.core.first(cljs.core.next(arglist__17952));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17952)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17952)));
return G__17951__delegate.call(this, k, x, y, more);
});
return G__17951;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__2.call(this,k,x);
case  3 :
return max_key__3.call(this,k,x,y);
default:
return max_key__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4.cljs$lang$applyTo;
max_key.__2 = max_key__2;
max_key.__3 = max_key__3;
max_key.__4 = max_key__4;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__2 = (function (k,x){
return x;
});
var min_key__3 = (function (k,x,y){
if(((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4 = (function() { 
var G__17965__delegate = function (k,x,y,more){
return cljs.core.reduce.__3((function (p1__17937_SHARP_,p2__17938_SHARP_){
return min_key.call(null,k,p1__17937_SHARP_,p2__17938_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__17965 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__17965__delegate.call(this, k, x, y, more);
};
G__17965.cljs$lang$maxFixedArity = 3;
G__17965.cljs$lang$applyTo = (function (arglist__17967){
var k = cljs.core.first(arglist__17967);
var x = cljs.core.first(cljs.core.next(arglist__17967));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__17967)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__17967)));
return G__17965__delegate.call(this, k, x, y, more);
});
return G__17965;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__2.call(this,k,x);
case  3 :
return min_key__3.call(this,k,x,y);
default:
return min_key__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4.cljs$lang$applyTo;
min_key.__2 = min_key__2;
min_key.__3 = min_key__3;
min_key.__4 = min_key__4;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__2 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____17973 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____17973))
{var s__17975 = temp__3698__auto____17973;

return cljs.core.cons(cljs.core.take(n,s__17975),partition_all.call(null,n,step,cljs.core.drop(step,s__17975)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__2.call(this,n,step);
case  3 :
return partition_all__3.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
partition_all.__2 = partition_all__2;
partition_all.__3 = partition_all__3;
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____17984 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____17984))
{var s__17986 = temp__3698__auto____17984;

if(cljs.core.truth_(pred.call(null,cljs.core.first(s__17986))))
{return cljs.core.cons(cljs.core.first(s__17986),take_while.call(null,pred,cljs.core.rest(s__17986)));
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
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash__1 = (function (rng){
var this__18007 = this;
return cljs.core.hash_coll(rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj__2 = (function (rng,o){
var this__18010 = this;
return cljs.core.cons(o,rng);
});
cljs.core.Range.prototype.toString = (function (){
var this__18011 = this;
var this$__18012 = this;

return cljs.core.pr_str(this$__18012);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce__2 = (function (rng,f){
var this__18013 = this;
return cljs.core.ci_reduce.__2(rng,f);
});
cljs.core.Range.prototype.cljs$core$IReduce$_reduce__3 = (function (rng,f,s){
var this__18014 = this;
return cljs.core.ci_reduce.__3(rng,f,s);
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq__1 = (function (rng){
var this__18018 = this;
var comp__18019 = (((this__18018.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__18019.call(null,this__18018.start,this__18018.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count__1 = (function (rng){
var this__18021 = this;
if((cljs.core.not(cljs.core._seq(rng))))
{return 0;
} else
{return Math['ceil'](((this__18021.end - this__18021.start) / this__18021.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first__1 = (function (rng){
var this__18023 = this;
return this__18023.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest__1 = (function (rng){
var this__18025 = this;
if(cljs.core.truth_(cljs.core._seq(rng)))
{return (new cljs.core.Range(this__18025.meta,(this__18025.start + this__18025.step),this__18025.end,this__18025.step));
} else
{return cljs.core.list();
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv__2 = (function (rng,other){
var this__18026 = this;
return cljs.core.equiv_sequential(rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (rng,meta){
var this__18027 = this;
return (new cljs.core.Range(meta,this__18027.start,this__18027.end,this__18027.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta__1 = (function (rng){
var this__18029 = this;
return this__18029.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth__2 = (function (rng,n){
var this__18030 = this;
if(((n < cljs.core._count(rng))))
{return (this__18030.start + (n * this__18030.step));
} else
{if(((function (){var and__3546__auto____18032 = (this__18030.start > this__18030.end);

if((and__3546__auto____18032))
{return cljs.core._EQ_.__2(this__18030.step,0);
} else
{return and__3546__auto____18032;
}
})()))
{return this__18030.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
cljs.core.Range.prototype.cljs$core$IIndexed$_nth__3 = (function (rng,n,not_found){
var this__18033 = this;
if(((n < cljs.core._count(rng))))
{return (this__18033.start + (n * this__18033.step));
} else
{if(((function (){var and__3546__auto____18035 = (this__18033.start > this__18033.end);

if((and__3546__auto____18035))
{return cljs.core._EQ_.__2(this__18033.step,0);
} else
{return and__3546__auto____18035;
}
})()))
{return this__18033.start;
} else
{return not_found;
}
}
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty__1 = (function (rng){
var this__18038 = this;
return cljs.core.with_meta(cljs.core.List.EMPTY,this__18038.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__0 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__1 = (function (end){
return range.call(null,0,end,1);
});
var range__2 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__0.call(this);
case  1 :
return range__1.call(this,start);
case  2 :
return range__2.call(this,start,end);
case  3 :
return range__3.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
range.__0 = range__0;
range.__1 = range__1;
range.__2 = range__2;
range.__3 = range__3;
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____18076 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____18076))
{var s__18078 = temp__3698__auto____18076;

return cljs.core.cons(cljs.core.first(s__18078),take_nth.call(null,n,cljs.core.drop(n,s__18078)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.PersistentVector.fromArray([cljs.core.take_while(pred,coll),cljs.core.drop_while(pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____18086 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____18086))
{var s__18087 = temp__3698__auto____18086;

var fst__18088 = cljs.core.first(s__18087);
var fv__18089 = f.call(null,fst__18088);
var run__18091 = cljs.core.cons(fst__18088,cljs.core.take_while((function (p1__18083_SHARP_){
return cljs.core._EQ_.__2(fv__18089,f.call(null,p1__18083_SHARP_));
}),cljs.core.next(s__18087)));

return cljs.core.cons(run__18091,partition_by.call(null,f,cljs.core.seq(cljs.core.drop(cljs.core.count(run__18091),s__18087))));
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
return cljs.core.reduce.__3((function (counts,x){
return cljs.core.assoc.__3(counts,x,(cljs.core.get.__3(counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__2 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____18253 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3695__auto____18253))
{var s__18254 = temp__3695__auto____18253;

return reductions.call(null,f,cljs.core.first(s__18254),cljs.core.rest(s__18254));
} else
{return cljs.core.list(f.call(null));
}
})));
});
var reductions__3 = (function (f,init,coll){
return cljs.core.cons(init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____18255 = cljs.core.seq(coll);

if(cljs.core.truth_(temp__3698__auto____18255))
{var s__18256 = temp__3698__auto____18255;

return reductions.call(null,f,f.call(null,init,cljs.core.first(s__18256)),cljs.core.rest(s__18256));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__2.call(this,f,init);
case  3 :
return reductions__3.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
reductions.__2 = reductions__2;
reductions.__3 = reductions__3;
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
var juxt__1 = (function (f){
return (function() {
var G__18277 = null;
var G__18277__0 = (function (){
return cljs.core.vector(f.call(null));
});
var G__18277__1 = (function (x){
return cljs.core.vector(f.call(null,x));
});
var G__18277__2 = (function (x,y){
return cljs.core.vector(f.call(null,x,y));
});
var G__18277__3 = (function (x,y,z){
return cljs.core.vector(f.call(null,x,y,z));
});
var G__18277__4 = (function() { 
var G__18278__delegate = function (x,y,z,args){
return cljs.core.vector(cljs.core.apply.__5(f,x,y,z,args));
};
var G__18278 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18278__delegate.call(this, x, y, z, args);
};
G__18278.cljs$lang$maxFixedArity = 3;
G__18278.cljs$lang$applyTo = (function (arglist__18279){
var x = cljs.core.first(arglist__18279);
var y = cljs.core.first(cljs.core.next(arglist__18279));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18279)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18279)));
return G__18278__delegate.call(this, x, y, z, args);
});
return G__18278;
})()
;
G__18277 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__18277__0.call(this);
case  1 :
return G__18277__1.call(this,x);
case  2 :
return G__18277__2.call(this,x,y);
case  3 :
return G__18277__3.call(this,x,y,z);
default:
return G__18277__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__18277.cljs$lang$maxFixedArity = 3;
G__18277.cljs$lang$applyTo = G__18277__4.cljs$lang$applyTo;
return G__18277;
})()
});
var juxt__2 = (function (f,g){
return (function() {
var G__18280 = null;
var G__18280__0 = (function (){
return cljs.core.vector(f.call(null),g.call(null));
});
var G__18280__1 = (function (x){
return cljs.core.vector(f.call(null,x),g.call(null,x));
});
var G__18280__2 = (function (x,y){
return cljs.core.vector(f.call(null,x,y),g.call(null,x,y));
});
var G__18280__3 = (function (x,y,z){
return cljs.core.vector(f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__18280__4 = (function() { 
var G__18281__delegate = function (x,y,z,args){
return cljs.core.vector(cljs.core.apply.__5(f,x,y,z,args),cljs.core.apply.__5(g,x,y,z,args));
};
var G__18281 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18281__delegate.call(this, x, y, z, args);
};
G__18281.cljs$lang$maxFixedArity = 3;
G__18281.cljs$lang$applyTo = (function (arglist__18282){
var x = cljs.core.first(arglist__18282);
var y = cljs.core.first(cljs.core.next(arglist__18282));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18282)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18282)));
return G__18281__delegate.call(this, x, y, z, args);
});
return G__18281;
})()
;
G__18280 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__18280__0.call(this);
case  1 :
return G__18280__1.call(this,x);
case  2 :
return G__18280__2.call(this,x,y);
case  3 :
return G__18280__3.call(this,x,y,z);
default:
return G__18280__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__18280.cljs$lang$maxFixedArity = 3;
G__18280.cljs$lang$applyTo = G__18280__4.cljs$lang$applyTo;
return G__18280;
})()
});
var juxt__3 = (function (f,g,h){
return (function() {
var G__18283 = null;
var G__18283__0 = (function (){
return cljs.core.vector(f.call(null),g.call(null),h.call(null));
});
var G__18283__1 = (function (x){
return cljs.core.vector(f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__18283__2 = (function (x,y){
return cljs.core.vector(f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__18283__3 = (function (x,y,z){
return cljs.core.vector(f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__18283__4 = (function() { 
var G__18285__delegate = function (x,y,z,args){
return cljs.core.vector(cljs.core.apply.__5(f,x,y,z,args),cljs.core.apply.__5(g,x,y,z,args),cljs.core.apply.__5(h,x,y,z,args));
};
var G__18285 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18285__delegate.call(this, x, y, z, args);
};
G__18285.cljs$lang$maxFixedArity = 3;
G__18285.cljs$lang$applyTo = (function (arglist__18286){
var x = cljs.core.first(arglist__18286);
var y = cljs.core.first(cljs.core.next(arglist__18286));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18286)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18286)));
return G__18285__delegate.call(this, x, y, z, args);
});
return G__18285;
})()
;
G__18283 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__18283__0.call(this);
case  1 :
return G__18283__1.call(this,x);
case  2 :
return G__18283__2.call(this,x,y);
case  3 :
return G__18283__3.call(this,x,y,z);
default:
return G__18283__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__18283.cljs$lang$maxFixedArity = 3;
G__18283.cljs$lang$applyTo = G__18283__4.cljs$lang$applyTo;
return G__18283;
})()
});
var juxt__4 = (function() { 
var G__18287__delegate = function (f,g,h,fs){
var fs__18276 = cljs.core.list_STAR_.__4(f,g,h,fs);

return (function() {
var G__18288 = null;
var G__18288__0 = (function (){
return cljs.core.reduce.__3((function (p1__18120_SHARP_,p2__18121_SHARP_){
return cljs.core.conj.__2(p1__18120_SHARP_,p2__18121_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__18276);
});
var G__18288__1 = (function (x){
return cljs.core.reduce.__3((function (p1__18123_SHARP_,p2__18124_SHARP_){
return cljs.core.conj.__2(p1__18123_SHARP_,p2__18124_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__18276);
});
var G__18288__2 = (function (x,y){
return cljs.core.reduce.__3((function (p1__18159_SHARP_,p2__18160_SHARP_){
return cljs.core.conj.__2(p1__18159_SHARP_,p2__18160_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__18276);
});
var G__18288__3 = (function (x,y,z){
return cljs.core.reduce.__3((function (p1__18161_SHARP_,p2__18163_SHARP_){
return cljs.core.conj.__2(p1__18161_SHARP_,p2__18163_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__18276);
});
var G__18288__4 = (function() { 
var G__18290__delegate = function (x,y,z,args){
return cljs.core.reduce.__3((function (p1__18164_SHARP_,p2__18252_SHARP_){
return cljs.core.conj.__2(p1__18164_SHARP_,cljs.core.apply.__5(p2__18252_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__18276);
};
var G__18290 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18290__delegate.call(this, x, y, z, args);
};
G__18290.cljs$lang$maxFixedArity = 3;
G__18290.cljs$lang$applyTo = (function (arglist__18291){
var x = cljs.core.first(arglist__18291);
var y = cljs.core.first(cljs.core.next(arglist__18291));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18291)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18291)));
return G__18290__delegate.call(this, x, y, z, args);
});
return G__18290;
})()
;
G__18288 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__18288__0.call(this);
case  1 :
return G__18288__1.call(this,x);
case  2 :
return G__18288__2.call(this,x,y);
case  3 :
return G__18288__3.call(this,x,y,z);
default:
return G__18288__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__18288.cljs$lang$maxFixedArity = 3;
G__18288.cljs$lang$applyTo = G__18288__4.cljs$lang$applyTo;
return G__18288;
})()
};
var G__18287 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__18287__delegate.call(this, f, g, h, fs);
};
G__18287.cljs$lang$maxFixedArity = 3;
G__18287.cljs$lang$applyTo = (function (arglist__18292){
var f = cljs.core.first(arglist__18292);
var g = cljs.core.first(cljs.core.next(arglist__18292));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__18292)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__18292)));
return G__18287__delegate.call(this, f, g, h, fs);
});
return G__18287;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__1.call(this,f);
case  2 :
return juxt__2.call(this,f,g);
case  3 :
return juxt__3.call(this,f,g,h);
default:
return juxt__4.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4.cljs$lang$applyTo;
juxt.__1 = juxt__1;
juxt.__2 = juxt__2;
juxt.__3 = juxt__3;
juxt.__4 = juxt__4;
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
var dorun__1 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq(coll)))
{{
var G__18296 = cljs.core.next(coll);
coll = G__18296;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__2 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____18293 = cljs.core.seq(coll);

if(cljs.core.truth_(and__3546__auto____18293))
{return (n > 0);
} else
{return and__3546__auto____18293;
}
})()))
{{
var G__18299 = (n - 1);
var G__18300 = cljs.core.next(coll);
n = G__18299;
coll = G__18300;
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
return dorun__1.call(this,n);
case  2 :
return dorun__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
dorun.__1 = dorun__1;
dorun.__2 = dorun__2;
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
var doall__1 = (function (coll){
cljs.core.dorun.__1(coll);
return coll;
});
var doall__2 = (function (n,coll){
cljs.core.dorun.__2(n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__1.call(this,n);
case  2 :
return doall__2.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
doall.__1 = doall__1;
doall.__2 = doall__2;
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__18301 = re.exec(s);

if((cljs.core._EQ_.__2(cljs.core.first(matches__18301),s)))
{if((cljs.core._EQ_.__2(cljs.core.count(matches__18301),1)))
{return cljs.core.first(matches__18301);
} else
{return cljs.core.vec(matches__18301);
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
var matches__18307 = re.exec(s);

if(((matches__18307 === null)))
{return null;
} else
{if((cljs.core._EQ_.__2(cljs.core.count(matches__18307),1)))
{return cljs.core.first(matches__18307);
} else
{return cljs.core.vec(matches__18307);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__18436 = cljs.core.re_find(re,s);
var match_idx__18437 = s.search(re);
var match_str__18439 = ((cljs.core.coll_QMARK_(match_data__18436))?cljs.core.first(match_data__18436):match_data__18436);
var post_match__18440 = cljs.core.subs.__2(s,(match_idx__18437 + cljs.core.count(match_str__18439)));

if((match_data__18436))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(match_data__18436,re_seq.call(null,re,post_match__18440));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__18474__18475 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___18476 = cljs.core.nth.__3(vec__18474__18475,0,null);
var flags__18477 = cljs.core.nth.__3(vec__18474__18475,1,null);
var pattern__18478 = cljs.core.nth.__3(vec__18474__18475,2,null);

return (new RegExp(pattern__18478,flags__18477));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat(cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1(cljs.core.interpose(cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.__2((function (p1__18473_SHARP_){
return print_one.call(null,p1__18473_SHARP_,opts);
}),coll))),cljs.core.PersistentVector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_(x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(((obj === null)))
{return cljs.core.list("nil");
} else
{if(((void 0 === obj)))
{return cljs.core.list("#<undefined>");
} else
{if(("\uFDD0'else"))
{return cljs.core.concat.__2((cljs.core.truth_((function (){var and__3546__auto____18485 = cljs.core.get.__2(opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____18485))
{var and__3546__auto____18489 = (function (){var x__462__auto____18486 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____18487 = x__462__auto____18486;

if(cljs.core.truth_(and__3546__auto____18487))
{var and__3546__auto____18488 = x__462__auto____18486.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____18488))
{return cljs.core.not(x__462__auto____18486.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____18488;
}
} else
{return and__3546__auto____18487;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IMeta,x__462__auto____18486);
}
})();

if(cljs.core.truth_(and__3546__auto____18489))
{return cljs.core.meta(obj);
} else
{return and__3546__auto____18489;
}
} else
{return and__3546__auto____18485;
}
})())?cljs.core.concat(cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta(obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__462__auto____18490 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____18491 = x__462__auto____18490;

if(cljs.core.truth_(and__3546__auto____18491))
{var and__3546__auto____18492 = x__462__auto____18490.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____18492))
{return cljs.core.not(x__462__auto____18490.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____18492;
}
} else
{return and__3546__auto____18491;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.IPrintable,x__462__auto____18490);
}
})())?cljs.core._pr_seq(obj,opts):cljs.core.list("#<",cljs.core.str.__1(obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__18507 = cljs.core.first(objs);
var sb__18524 = (new goog.string.StringBuffer());

var G__18525__18526 = cljs.core.seq(objs);

if(cljs.core.truth_(G__18525__18526))
{var obj__18527 = cljs.core.first(G__18525__18526);
var G__18525__18528 = G__18525__18526;

while(true){
if(((obj__18527 === first_obj__18507)))
{} else
{sb__18524.append(" ");
}
var G__18529__18530 = cljs.core.seq(cljs.core.pr_seq(obj__18527,opts));

if(cljs.core.truth_(G__18529__18530))
{var string__18531 = cljs.core.first(G__18529__18530);
var G__18529__18532 = G__18529__18530;

while(true){
sb__18524.append(string__18531);
var temp__3698__auto____18533 = cljs.core.next(G__18529__18532);

if(cljs.core.truth_(temp__3698__auto____18533))
{var G__18529__18534 = temp__3698__auto____18533;

{
var G__18551 = cljs.core.first(G__18529__18534);
var G__18552 = G__18529__18534;
string__18531 = G__18551;
G__18529__18532 = G__18552;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____18535 = cljs.core.next(G__18525__18528);

if(cljs.core.truth_(temp__3698__auto____18535))
{var G__18525__18536 = temp__3698__auto____18535;

{
var G__18555 = cljs.core.first(G__18525__18536);
var G__18556 = G__18525__18536;
obj__18527 = G__18555;
G__18525__18528 = G__18556;
continue;
}
} else
{}
break;
}
} else
{}
return sb__18524;
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
return cljs.core.str.__1(cljs.core.pr_sb(objs,opts));
});
/**
* Same as pr-str-with-opts followed by (newline)
*/
cljs.core.prn_str_with_opts = (function prn_str_with_opts(objs,opts){
var sb__18561 = cljs.core.pr_sb(objs,opts);

sb__18561.append("\n");
return cljs.core.str.__1(sb__18561);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__18563 = cljs.core.first(objs);

var G__18564__18565 = cljs.core.seq(objs);

if(cljs.core.truth_(G__18564__18565))
{var obj__18567 = cljs.core.first(G__18564__18565);
var G__18564__18568 = G__18564__18565;

while(true){
if(((obj__18567 === first_obj__18563)))
{} else
{cljs.core.string_print(" ");
}
var G__18570__18571 = cljs.core.seq(cljs.core.pr_seq(obj__18567,opts));

if(cljs.core.truth_(G__18570__18571))
{var string__18573 = cljs.core.first(G__18570__18571);
var G__18570__18574 = G__18570__18571;

while(true){
cljs.core.string_print(string__18573);
var temp__3698__auto____18575 = cljs.core.next(G__18570__18574);

if(cljs.core.truth_(temp__3698__auto____18575))
{var G__18570__18576 = temp__3698__auto____18575;

{
var G__18585 = cljs.core.first(G__18570__18576);
var G__18586 = G__18570__18576;
string__18573 = G__18585;
G__18570__18574 = G__18586;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____18578 = cljs.core.next(G__18564__18568);

if(cljs.core.truth_(temp__3698__auto____18578))
{var G__18564__18580 = temp__3698__auto____18578;

{
var G__18588 = cljs.core.first(G__18564__18580);
var G__18589 = G__18564__18580;
obj__18567 = G__18588;
G__18564__18568 = G__18589;
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
cljs.core.string_print("\n");
if(cljs.core.truth_(cljs.core.get.__2(opts,"\uFDD0'flush-on-newline")))
{return cljs.core.flush();
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["\uFDD0'flush-on-newline","\uFDD0'readably","\uFDD0'meta","\uFDD0'dup"],{"\uFDD0'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"\uFDD0'readably":cljs.core._STAR_print_readably_STAR_,"\uFDD0'meta":cljs.core._STAR_print_meta_STAR_,"\uFDD0'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.pr_opts());
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__18629){
var objs = cljs.core.seq( arglist__18629 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Same as pr-str followed by (newline)
* @param {...*} var_args
*/
cljs.core.prn_str = (function() { 
var prn_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.pr_opts());
};
var prn_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn_str__delegate.call(this, objs);
};
prn_str.cljs$lang$maxFixedArity = 0;
prn_str.cljs$lang$applyTo = (function (arglist__18632){
var objs = cljs.core.seq( arglist__18632 );;
return prn_str__delegate.call(this, objs);
});
return prn_str;
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
return cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__18637){
var objs = cljs.core.seq( arglist__18637 );;
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
return cljs.core.pr_with_opts(objs,cljs.core.assoc.__3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__18646){
var objs = cljs.core.seq( arglist__18646 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* print to a string, returning it
* @param {...*} var_args
*/
cljs.core.print_str = (function() { 
var print_str__delegate = function (objs){
return cljs.core.pr_str_with_opts(objs,cljs.core.assoc.__3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var print_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return print_str__delegate.call(this, objs);
};
print_str.cljs$lang$maxFixedArity = 0;
print_str.cljs$lang$applyTo = (function (arglist__18652){
var objs = cljs.core.seq( arglist__18652 );;
return print_str__delegate.call(this, objs);
});
return print_str;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.assoc.__3(cljs.core.pr_opts(),"\uFDD0'readably",false));
return cljs.core.newline(cljs.core.pr_opts());
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__18656){
var objs = cljs.core.seq( arglist__18656 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* println to a string, returning it
* @param {...*} var_args
*/
cljs.core.println_str = (function() { 
var println_str__delegate = function (objs){
return cljs.core.prn_str_with_opts(objs,cljs.core.assoc.__3(cljs.core.pr_opts(),"\uFDD0'readably",false));
};
var println_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println_str__delegate.call(this, objs);
};
println_str.cljs$lang$maxFixedArity = 0;
println_str.cljs$lang$applyTo = (function (arglist__18660){
var objs = cljs.core.seq( arglist__18660 );;
return println_str__delegate.call(this, objs);
});
return println_str;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts(objs,cljs.core.pr_opts());
return cljs.core.newline(cljs.core.pr_opts());
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__18666){
var objs = cljs.core.seq( arglist__18666 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
var pr_pair__18672 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential(pr_pair__18672,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list(cljs.core.str.__1(n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list(cljs.core.str.__1(bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if((cljs.core.keyword_QMARK_(obj)))
{return cljs.core.list(cljs.core.str(":",(function (){var temp__3698__auto____18695 = cljs.core.namespace(obj);

if(cljs.core.truth_(temp__3698__auto____18695))
{var nspc__18705 = temp__3698__auto____18695;

return cljs.core.str(nspc__18705,"/");
} else
{return null;
}
})(),cljs.core.name(obj)));
} else
{if((cljs.core.symbol_QMARK_(obj)))
{return cljs.core.list(cljs.core.str((function (){var temp__3698__auto____18729 = cljs.core.namespace(obj);

if(cljs.core.truth_(temp__3698__auto____18729))
{var nspc__18730 = temp__3698__auto____18729;

return cljs.core.str(nspc__18730,"/");
} else
{return null;
}
})(),cljs.core.name(obj)));
} else
{if(("\uFDD0'else"))
{return cljs.core.list((cljs.core.truth_("\uFDD0'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["function"] = true);
(cljs.core._pr_seq["function"] = (function (this$){
return cljs.core.list("#<",cljs.core.str.__1(this$),">");
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.list("()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
return cljs.core.pr_sequential(cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (coll,opts){
var pr_pair__18751 = (function (keyval){
return cljs.core.pr_sequential(cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential(pr_pair__18751,"{",", ","}",opts,coll);
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
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash__1 = (function (this$){
var this__18758 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches__3 = (function (this$,oldval,newval){
var this__18774 = this;
var G__18887__18891 = cljs.core.seq(this__18774.watches);

if((G__18887__18891))
{var G__18921__18923 = cljs.core.first(G__18887__18891);
var vec__18922__18924 = G__18921__18923;
var key__18925 = cljs.core.nth.__3(vec__18922__18924,0,null);
var f__18926 = cljs.core.nth.__3(vec__18922__18924,1,null);
var G__18887__18927 = G__18887__18891;

var G__18921__18928 = G__18921__18923;
var G__18887__18929 = G__18887__18927;

while(true){
var vec__18931__18932 = G__18921__18928;
var key__18933 = cljs.core.nth.__3(vec__18931__18932,0,null);
var f__18934 = cljs.core.nth.__3(vec__18931__18932,1,null);
var G__18887__18935 = G__18887__18929;

f__18934.call(null,key__18933,this$,oldval,newval);
var temp__3698__auto____18937 = cljs.core.next(G__18887__18935);

if((temp__3698__auto____18937))
{var G__18887__18939 = temp__3698__auto____18937;

{
var G__19000 = cljs.core.first(G__18887__18939);
var G__19001 = G__18887__18939;
G__18921__18928 = G__19000;
G__18887__18929 = G__19001;
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
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch__3 = (function (this$,key,f){
var this__18941 = this;
return this$.watches = cljs.core.assoc.__3(this__18941.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch__2 = (function (this$,key){
var this__18951 = this;
return this$.watches = cljs.core.dissoc.__2(this__18951.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq__2 = (function (a,opts){
var this__18953 = this;
return cljs.core.concat(cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq(this__18953.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta__1 = (function (_){
var this__18954 = this;
return this__18954.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref__1 = (function (_){
var this__18955 = this;
return this__18955.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv__2 = (function (o,other){
var this__18956 = this;
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
var atom__1 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__2 = (function() { 
var G__19025__delegate = function (x,p__19008){
var map__19018__19019 = p__19008;
var map__19018__19020 = ((cljs.core.seq_QMARK_(map__19018__19019))?cljs.core.apply.__2(cljs.core.hash_map,map__19018__19019):map__19018__19019);
var validator__19022 = cljs.core.get.__2(map__19018__19020,"\uFDD0'validator");
var meta__19023 = cljs.core.get.__2(map__19018__19020,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__19023,validator__19022,null));
};
var G__19025 = function (x,var_args){
var p__19008 = null;
if (goog.isDef(var_args)) {
  p__19008 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19025__delegate.call(this, x, p__19008);
};
G__19025.cljs$lang$maxFixedArity = 1;
G__19025.cljs$lang$applyTo = (function (arglist__19026){
var x = cljs.core.first(arglist__19026);
var p__19008 = cljs.core.rest(arglist__19026);
return G__19025__delegate.call(this, x, p__19008);
});
return G__19025;
})()
;
atom = function(x,var_args){
var p__19008 = var_args;
switch(arguments.length){
case  1 :
return atom__1.call(this,x);
default:
return atom__2.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.__1 = atom__1;
atom.__2 = atom__2;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____19044 = a.validator;

if((temp__3698__auto____19044))
{var validate__19045 = temp__3698__auto____19044;

if((validate__19045.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3400))))));
}
} else
{}
var old_value__19047 = a.state;

a.state = new_value;
cljs.core._notify_watches(a,old_value__19047,new_value);
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
var swap_BANG___2 = (function (a,f){
return cljs.core.reset_BANG_(a,f.call(null,a.state));
});
var swap_BANG___3 = (function (a,f,x){
return cljs.core.reset_BANG_(a,f.call(null,a.state,x));
});
var swap_BANG___4 = (function (a,f,x,y){
return cljs.core.reset_BANG_(a,f.call(null,a.state,x,y));
});
var swap_BANG___5 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_(a,f.call(null,a.state,x,y,z));
});
var swap_BANG___6 = (function() { 
var G__19066__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_(a,cljs.core.apply(f,a.state,x,y,z,more));
};
var G__19066 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__19066__delegate.call(this, a, f, x, y, z, more);
};
G__19066.cljs$lang$maxFixedArity = 5;
G__19066.cljs$lang$applyTo = (function (arglist__19068){
var a = cljs.core.first(arglist__19068);
var f = cljs.core.first(cljs.core.next(arglist__19068));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19068)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19068))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19068)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19068)))));
return G__19066__delegate.call(this, a, f, x, y, z, more);
});
return G__19066;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___2.call(this,a,f);
case  3 :
return swap_BANG___3.call(this,a,f,x);
case  4 :
return swap_BANG___4.call(this,a,f,x,y);
case  5 :
return swap_BANG___5.call(this,a,f,x,y,z);
default:
return swap_BANG___6.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___6.cljs$lang$applyTo;
swap_BANG_.__2 = swap_BANG___2;
swap_BANG_.__3 = swap_BANG___3;
swap_BANG_.__4 = swap_BANG___4;
swap_BANG_.__5 = swap_BANG___5;
swap_BANG_.__6 = swap_BANG___6;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if((cljs.core._EQ_.__2(a.state,oldval)))
{cljs.core.reset_BANG_(a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref(o);
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
return iref.meta = cljs.core.apply.__3(f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__19081){
var iref = cljs.core.first(arglist__19081);
var f = cljs.core.first(cljs.core.next(arglist__19081));
var args = cljs.core.rest(cljs.core.next(arglist__19081));
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
return cljs.core._add_watch(iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch(iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__0 = (function (){
return gensym.call(null,"G__");
});
var gensym__1 = (function (prefix_string){
if(((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.__1(0);
} else
{}
return cljs.core.symbol.__1(cljs.core.str(prefix_string,cljs.core.swap_BANG_.__2(cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__0.call(this);
case  1 :
return gensym__1.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
gensym.__0 = gensym__0;
gensym.__1 = gensym__1;
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (state,f){
this.state = state;
this.f = f;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK___1 = (function (d){
var this__19113 = this;
return "\uFDD0'done".call(null,cljs.core.deref(this__19113.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref__1 = (function (_){
var this__19114 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.__2(this__19114.state,(function (p__19115){
var curr_state__19116 = p__19115;
var curr_state__19117 = ((cljs.core.seq_QMARK_(curr_state__19116))?cljs.core.apply.__2(cljs.core.hash_map,curr_state__19116):curr_state__19116);
var done__19118 = cljs.core.get.__2(curr_state__19117,"\uFDD0'done");

if(cljs.core.truth_(done__19118))
{return curr_state__19117;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__19114.f.call(null)});
}
})));
});
cljs.core.Delay;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_(cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if((cljs.core.delay_QMARK_(x)))
{return cljs.core.deref(x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_(d);
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
var map__19130__19157 = options;
var map__19130__19159 = ((cljs.core.seq_QMARK_(map__19130__19157))?cljs.core.apply.__2(cljs.core.hash_map,map__19130__19157):map__19130__19157);
var keywordize_keys__19160 = cljs.core.get.__2(map__19130__19159,"\uFDD0'keywordize-keys");
var keyfn__19186 = (cljs.core.truth_(keywordize_keys__19160)?cljs.core.keyword:cljs.core.str);
var f__19211 = (function thisfn(x){
if((cljs.core.seq_QMARK_(x)))
{return cljs.core.doall.__1(cljs.core.map.__2(thisfn,x));
} else
{if((cljs.core.coll_QMARK_(x)))
{return cljs.core.into(cljs.core.empty(x),cljs.core.map.__2(thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec(cljs.core.map.__2(thisfn,x));
} else
{if(((cljs.core.type(x) === Object)))
{return cljs.core.into(cljs.core.ObjMap.fromObject([],{}),(function (){var iter__536__auto____19206 = (function iter__19194(s__19195){
return (new cljs.core.LazySeq(null,false,(function (){
var s__19195__19197 = s__19195;

while(true){
if(cljs.core.truth_(cljs.core.seq(s__19195__19197)))
{var k__19200 = cljs.core.first(s__19195__19197);

return cljs.core.cons(cljs.core.PersistentVector.fromArray([keyfn__19186.call(null,k__19200),thisfn.call(null,(x[k__19200]))]),iter__19194.call(null,cljs.core.rest(s__19195__19197)));
} else
{return null;
}
break;
}
})));
});

return iter__536__auto____19206.call(null,cljs.core.js_keys(x));
})());
} else
{if(("\uFDD0'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__19211.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__19239){
var x = cljs.core.first(arglist__19239);
var options = cljs.core.rest(arglist__19239);
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
var mem__19248 = cljs.core.atom.__1(cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__19258__delegate = function (args){
var temp__3695__auto____19252 = cljs.core.get.__2(cljs.core.deref(mem__19248),args);

if(cljs.core.truth_(temp__3695__auto____19252))
{var v__19256 = temp__3695__auto____19252;

return v__19256;
} else
{var ret__19257 = cljs.core.apply.__2(f,args);

cljs.core.swap_BANG_.__4(mem__19248,cljs.core.assoc,args,ret__19257);
return ret__19257;
}
};
var G__19258 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19258__delegate.call(this, args);
};
G__19258.cljs$lang$maxFixedArity = 0;
G__19258.cljs$lang$applyTo = (function (arglist__19262){
var args = cljs.core.seq( arglist__19262 );;
return G__19258__delegate.call(this, args);
});
return G__19258;
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
var trampoline__1 = (function (f){
while(true){
var ret__19272 = f.call(null);

if((cljs.core.fn_QMARK_(ret__19272)))
{{
var G__19274 = ret__19272;
f = G__19274;
continue;
}
} else
{return ret__19272;
}
break;
}
});
var trampoline__2 = (function() { 
var G__19275__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.__2(f,args);
}));
};
var G__19275 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19275__delegate.call(this, f, args);
};
G__19275.cljs$lang$maxFixedArity = 1;
G__19275.cljs$lang$applyTo = (function (arglist__19276){
var f = cljs.core.first(arglist__19276);
var args = cljs.core.rest(arglist__19276);
return G__19275__delegate.call(this, f, args);
});
return G__19275;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__1.call(this,f);
default:
return trampoline__2.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__2.cljs$lang$applyTo;
trampoline.__1 = trampoline__1;
trampoline.__2 = trampoline__2;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__0 = (function (){
return rand.call(null,1);
});
var rand__1 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__0.call(this);
case  1 :
return rand__1.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
rand.__0 = rand__0;
rand.__1 = rand__1;
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
return cljs.core.nth.__2(coll,cljs.core.rand_int(cljs.core.count(coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.__3((function (ret,x){
var k__19303 = f.call(null,x);

return cljs.core.assoc.__3(ret,k__19303,cljs.core.conj.__2(cljs.core.get.__3(ret,k__19303,cljs.core.PersistentVector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'descendants","\uFDD0'ancestors"],{"\uFDD0'parents":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'descendants":cljs.core.ObjMap.fromObject([],{}),"\uFDD0'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.__1(cljs.core.make_hierarchy());
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___2 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref(cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3 = (function (h,child,parent){
var or__3548__auto____19343 = cljs.core._EQ_.__2(child,parent);

if((or__3548__auto____19343))
{return or__3548__auto____19343;
} else
{var or__3548__auto____19384 = cljs.core.contains_QMARK_("\uFDD0'ancestors".call(null,h).call(null,child),parent);

if((or__3548__auto____19384))
{return or__3548__auto____19384;
} else
{var and__3546__auto____19385 = cljs.core.vector_QMARK_(parent);

if((and__3546__auto____19385))
{var and__3546__auto____19386 = cljs.core.vector_QMARK_(child);

if((and__3546__auto____19386))
{var and__3546__auto____19387 = cljs.core._EQ_.__2(cljs.core.count(parent),cljs.core.count(child));

if((and__3546__auto____19387))
{var ret__19404 = true;
var i__19405 = 0;

while(true){
if(((function (){var or__3548__auto____19406 = cljs.core.not(ret__19404);

if((or__3548__auto____19406))
{return or__3548__auto____19406;
} else
{return cljs.core._EQ_.__2(i__19405,cljs.core.count(parent));
}
})()))
{return ret__19404;
} else
{{
var G__19416 = isa_QMARK_.call(null,h,child.call(null,i__19405),parent.call(null,i__19405));
var G__19417 = (i__19405 + 1);
ret__19404 = G__19416;
i__19405 = G__19417;
continue;
}
}
break;
}
} else
{return and__3546__auto____19387;
}
} else
{return and__3546__auto____19386;
}
} else
{return and__3546__auto____19385;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___2.call(this,h,child);
case  3 :
return isa_QMARK___3.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
isa_QMARK_.__2 = isa_QMARK___2;
isa_QMARK_.__3 = isa_QMARK___3;
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
var parents__1 = (function (tag){
return parents.call(null,cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var parents__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.__2("\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__1.call(this,h);
case  2 :
return parents__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
parents.__1 = parents__1;
parents.__2 = parents__2;
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
var ancestors__1 = (function (tag){
return ancestors.call(null,cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var ancestors__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.__2("\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__1.call(this,h);
case  2 :
return ancestors__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
ancestors.__1 = ancestors__1;
ancestors.__2 = ancestors__2;
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
var descendants__1 = (function (tag){
return descendants.call(null,cljs.core.deref(cljs.core.global_hierarchy),tag);
});
var descendants__2 = (function (h,tag){
return cljs.core.not_empty(cljs.core.get.__2("\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__1.call(this,h);
case  2 :
return descendants__2.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
descendants.__1 = descendants__1;
descendants.__2 = descendants__2;
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
var derive__2 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace(parent)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3684))))));
}
cljs.core.swap_BANG_.__4(cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3 = (function (h,tag,parent){
if((cljs.core.not_EQ_.__2(tag,parent)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3688))))));
}
var tp__19468 = "\uFDD0'parents".call(null,h);
var td__19469 = "\uFDD0'descendants".call(null,h);
var ta__19470 = "\uFDD0'ancestors".call(null,h);
var tf__19473 = (function (m,source,sources,target,targets){
return cljs.core.reduce.__3((function (ret,k){
return cljs.core.assoc.__3(ret,k,cljs.core.reduce.__3(cljs.core.conj,cljs.core.get.__3(targets,k,cljs.core.set([])),cljs.core.cons(target,targets.call(null,target))));
}),m,cljs.core.cons(source,sources.call(null,source)));
});

var or__3548__auto____19535 = ((cljs.core.contains_QMARK_(tp__19468.call(null,tag),parent))?null:(function (){if((cljs.core.contains_QMARK_(ta__19470.call(null,tag),parent)))
{throw (new Error(cljs.core.str(tag,"already has",parent,"as ancestor")));
} else
{}
if((cljs.core.contains_QMARK_(ta__19470.call(null,parent),tag)))
{throw (new Error(cljs.core.str("Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.__3("\uFDD0'parents".call(null,h),tag,cljs.core.conj.__2(cljs.core.get.__3(tp__19468,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__19473.call(null,"\uFDD0'ancestors".call(null,h),tag,td__19469,parent,ta__19470),"\uFDD0'descendants":tf__19473.call(null,"\uFDD0'descendants".call(null,h),parent,ta__19470,tag,td__19469)});
})());

if(cljs.core.truth_(or__3548__auto____19535))
{return or__3548__auto____19535;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__2.call(this,h,tag);
case  3 :
return derive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
derive.__2 = derive__2;
derive.__3 = derive__3;
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
var underive__2 = (function (tag,parent){
cljs.core.swap_BANG_.__4(cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3 = (function (h,tag,parent){
var parentMap__19554 = "\uFDD0'parents".call(null,h);
var childsParents__19555 = (cljs.core.truth_(parentMap__19554.call(null,tag))?cljs.core.disj.__2(parentMap__19554.call(null,tag),parent):cljs.core.set([]));
var newParents__19556 = (cljs.core.truth_(cljs.core.not_empty(childsParents__19555))?cljs.core.assoc.__3(parentMap__19554,tag,childsParents__19555):cljs.core.dissoc.__2(parentMap__19554,tag));
var deriv_seq__19563 = cljs.core.flatten(cljs.core.map.__2((function (p1__19435_SHARP_){
return cljs.core.cons(cljs.core.first(p1__19435_SHARP_),cljs.core.interpose(cljs.core.first(p1__19435_SHARP_),cljs.core.second(p1__19435_SHARP_)));
}),cljs.core.seq(newParents__19556)));

if((cljs.core.contains_QMARK_(parentMap__19554.call(null,tag),parent)))
{return cljs.core.reduce.__3((function (p1__19438_SHARP_,p2__19440_SHARP_){
return cljs.core.apply.__3(cljs.core.derive,p1__19438_SHARP_,p2__19440_SHARP_);
}),cljs.core.make_hierarchy(),cljs.core.partition.__2(2,deriv_seq__19563));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__2.call(this,h,tag);
case  3 :
return underive__3.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
underive.__2 = underive__2;
underive.__3 = underive__3;
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.__2(method_cache,(function (_){
return cljs.core.deref(method_table);
}));
return cljs.core.swap_BANG_.__2(cached_hierarchy,(function (_){
return cljs.core.deref(hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__19593 = cljs.core.deref(prefer_table).call(null,x);

var or__3548__auto____19598 = (cljs.core.truth_((function (){var and__3546__auto____19596 = xprefs__19593;

if(cljs.core.truth_(and__3546__auto____19596))
{return xprefs__19593.call(null,y);
} else
{return and__3546__auto____19596;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____19598))
{return or__3548__auto____19598;
} else
{var or__3548__auto____19602 = (function (){var ps__19600 = cljs.core.parents.__1(y);

while(true){
if(((cljs.core.count(ps__19600) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first(ps__19600),prefer_table)))
{} else
{}
{
var G__19638 = cljs.core.rest(ps__19600);
ps__19600 = G__19638;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____19602))
{return or__3548__auto____19602;
} else
{var or__3548__auto____19628 = (function (){var ps__19612 = cljs.core.parents.__1(x);

while(true){
if(((cljs.core.count(ps__19612) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first(ps__19612),y,prefer_table)))
{} else
{}
{
var G__19642 = cljs.core.rest(ps__19612);
ps__19612 = G__19642;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____19628))
{return or__3548__auto____19628;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____19647 = cljs.core.prefers_STAR_(x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____19647))
{return or__3548__auto____19647;
} else
{return cljs.core.isa_QMARK_.__2(x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__19669 = cljs.core.reduce.__3((function (be,p__19653){
var vec__19654__19655 = p__19653;
var k__19656 = cljs.core.nth.__3(vec__19654__19655,0,null);
var ___19657 = cljs.core.nth.__3(vec__19654__19655,1,null);
var e__19658 = vec__19654__19655;

if((cljs.core.isa_QMARK_.__2(dispatch_val,k__19656)))
{var be2__19664 = (cljs.core.truth_((function (){var or__3548__auto____19662 = (be === null);

if((or__3548__auto____19662))
{return or__3548__auto____19662;
} else
{return cljs.core.dominates(k__19656,cljs.core.first(be),prefer_table);
}
})())?e__19658:be);

if(cljs.core.truth_(cljs.core.dominates(cljs.core.first(be2__19664),k__19656,prefer_table)))
{} else
{throw (new Error(cljs.core.str("Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__19656," and ",cljs.core.first(be2__19664),", and neither is preferred")));
}
return be2__19664;
} else
{return be;
}
}),null,cljs.core.deref(method_table));

if(cljs.core.truth_(best_entry__19669))
{if((cljs.core._EQ_.__2(cljs.core.deref(cached_hierarchy),cljs.core.deref(hierarchy))))
{cljs.core.swap_BANG_.__4(method_cache,cljs.core.assoc,dispatch_val,cljs.core.second(best_entry__19669));
return cljs.core.second(best_entry__19669);
} else
{cljs.core.reset_cache(method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
void 0;
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(((function (){var and__3546__auto____19713 = mf;

if((and__3546__auto____19713))
{return mf.cljs$core$IMultiFn$_reset__1;
} else
{return and__3546__auto____19713;
}
})()))
{return mf.cljs$core$IMultiFn$_reset__1(mf);
} else
{return (function (){var or__3548__auto____19716 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if((or__3548__auto____19716))
{return or__3548__auto____19716;
} else
{var or__3548__auto____19719 = (cljs.core._reset["_"]);

if((or__3548__auto____19719))
{return or__3548__auto____19719;
} else
{throw cljs.core.missing_protocol("IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____19720 = mf;

if((and__3546__auto____19720))
{return mf.cljs$core$IMultiFn$_add_method__3;
} else
{return and__3546__auto____19720;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method__3(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____19750 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____19750))
{return or__3548__auto____19750;
} else
{var or__3548__auto____19752 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____19752))
{return or__3548__auto____19752;
} else
{throw cljs.core.missing_protocol("IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____19758 = mf;

if(cljs.core.truth_(and__3546__auto____19758))
{return mf.cljs$core$IMultiFn$_remove_method__2;
} else
{return and__3546__auto____19758;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method__2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____19759 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____19759))
{return or__3548__auto____19759;
} else
{var or__3548__auto____19760 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____19760))
{return or__3548__auto____19760;
} else
{throw cljs.core.missing_protocol("IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____19762 = mf;

if(cljs.core.truth_(and__3546__auto____19762))
{return mf.cljs$core$IMultiFn$_prefer_method__3;
} else
{return and__3546__auto____19762;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method__3(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____19763 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____19763))
{return or__3548__auto____19763;
} else
{var or__3548__auto____19764 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____19764))
{return or__3548__auto____19764;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____19767 = mf;

if(cljs.core.truth_(and__3546__auto____19767))
{return mf.cljs$core$IMultiFn$_get_method__2;
} else
{return and__3546__auto____19767;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method__2(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____19844 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____19844))
{return or__3548__auto____19844;
} else
{var or__3548__auto____19845 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____19845))
{return or__3548__auto____19845;
} else
{throw cljs.core.missing_protocol("IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____19846 = mf;

if(cljs.core.truth_(and__3546__auto____19846))
{return mf.cljs$core$IMultiFn$_methods__1;
} else
{return and__3546__auto____19846;
}
})()))
{return mf.cljs$core$IMultiFn$_methods__1(mf);
} else
{return (function (){var or__3548__auto____19847 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____19847))
{return or__3548__auto____19847;
} else
{var or__3548__auto____19848 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____19848))
{return or__3548__auto____19848;
} else
{throw cljs.core.missing_protocol("IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____19849 = mf;

if(cljs.core.truth_(and__3546__auto____19849))
{return mf.cljs$core$IMultiFn$_prefers__1;
} else
{return and__3546__auto____19849;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers__1(mf);
} else
{return (function (){var or__3548__auto____19850 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____19850))
{return or__3548__auto____19850;
} else
{var or__3548__auto____19851 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____19851))
{return or__3548__auto____19851;
} else
{throw cljs.core.missing_protocol("IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____19852 = mf;

if(cljs.core.truth_(and__3546__auto____19852))
{return mf.cljs$core$IMultiFn$_dispatch__2;
} else
{return and__3546__auto____19852;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch__2(mf,args);
} else
{return (function (){var or__3548__auto____19853 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____19853))
{return or__3548__auto____19853;
} else
{var or__3548__auto____19854 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____19854))
{return or__3548__auto____19854;
} else
{throw cljs.core.missing_protocol("IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
void 0;
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__19891 = cljs.core.apply.__2(dispatch_fn,args);
var target_fn__19892 = cljs.core._get_method(mf,dispatch_val__19891);

if(cljs.core.truth_(target_fn__19892))
{} else
{throw (new Error(cljs.core.str("No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__19891)));
}
return cljs.core.apply.__2(target_fn__19892,args);
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
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash__1 = (function (this$){
var this__19894 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset__1 = (function (mf){
var this__19895 = this;
cljs.core.swap_BANG_.__2(this__19895.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.__2(this__19895.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.__2(this__19895.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.__2(this__19895.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method__3 = (function (mf,dispatch_val,method){
var this__19897 = this;
cljs.core.swap_BANG_.__4(this__19897.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache(this__19897.method_cache,this__19897.method_table,this__19897.cached_hierarchy,this__19897.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method__2 = (function (mf,dispatch_val){
var this__19903 = this;
cljs.core.swap_BANG_.__3(this__19903.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache(this__19903.method_cache,this__19903.method_table,this__19903.cached_hierarchy,this__19903.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method__2 = (function (mf,dispatch_val){
var this__19904 = this;
if((cljs.core._EQ_.__2(cljs.core.deref(this__19904.cached_hierarchy),cljs.core.deref(this__19904.hierarchy))))
{} else
{cljs.core.reset_cache(this__19904.method_cache,this__19904.method_table,this__19904.cached_hierarchy,this__19904.hierarchy);
}
var temp__3695__auto____19906 = cljs.core.deref(this__19904.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____19906))
{var target_fn__19907 = temp__3695__auto____19906;

return target_fn__19907;
} else
{var temp__3695__auto____19908 = cljs.core.find_and_cache_best_method(this__19904.name,dispatch_val,this__19904.hierarchy,this__19904.method_table,this__19904.prefer_table,this__19904.method_cache,this__19904.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____19908))
{var target_fn__19909 = temp__3695__auto____19908;

return target_fn__19909;
} else
{return cljs.core.deref(this__19904.method_table).call(null,this__19904.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method__3 = (function (mf,dispatch_val_x,dispatch_val_y){
var this__19910 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_(dispatch_val_x,dispatch_val_y,this__19910.prefer_table)))
{throw (new Error(cljs.core.str("Preference conflict in multimethod '",this__19910.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.__2(this__19910.prefer_table,(function (old){
return cljs.core.assoc.__3(old,dispatch_val_x,cljs.core.conj.__2(cljs.core.get.__3(old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache(this__19910.method_cache,this__19910.method_table,this__19910.cached_hierarchy,this__19910.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods__1 = (function (mf){
var this__19915 = this;
return cljs.core.deref(this__19915.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers__1 = (function (mf){
var this__19916 = this;
return cljs.core.deref(this__19916.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch__2 = (function (mf,args){
var this__19917 = this;
return cljs.core.do_dispatch(mf,this__19917.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__19931__delegate = function (_,args){
return cljs.core._dispatch(this,args);
};
var G__19931 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19931__delegate.call(this, _, args);
};
G__19931.cljs$lang$maxFixedArity = 1;
G__19931.cljs$lang$applyTo = (function (arglist__19932){
var _ = cljs.core.first(arglist__19932);
var args = cljs.core.rest(arglist__19932);
return G__19931__delegate.call(this, _, args);
});
return G__19931;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch(this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset(multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method(multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method(multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods(multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method(multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers(multifn);
});
