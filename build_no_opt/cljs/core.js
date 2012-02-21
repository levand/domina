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
var or__3548__auto____6403 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6403))
{return or__3548__auto____6403;
} else
{var or__3548__auto____6404 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6404))
{return or__3548__auto____6404;
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
var _invoke__6796 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6417 = this$;

if(cljs.core.truth_(and__3546__auto____6417))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6417;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6420))
{return or__3548__auto____6420;
} else
{var or__3548__auto____6423 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6423))
{return or__3548__auto____6423;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6798 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6426 = this$;

if(cljs.core.truth_(and__3546__auto____6426))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6426;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6429 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6429))
{return or__3548__auto____6429;
} else
{var or__3548__auto____6432 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6432))
{return or__3548__auto____6432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6800 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6435 = this$;

if(cljs.core.truth_(and__3546__auto____6435))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6435;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6440 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6440))
{return or__3548__auto____6440;
} else
{var or__3548__auto____6443 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6443))
{return or__3548__auto____6443;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6802 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6447 = this$;

if(cljs.core.truth_(and__3546__auto____6447))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6447;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6452 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6452))
{return or__3548__auto____6452;
} else
{var or__3548__auto____6455 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6455))
{return or__3548__auto____6455;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6804 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6463 = this$;

if(cljs.core.truth_(and__3546__auto____6463))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6463;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6468 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6468))
{return or__3548__auto____6468;
} else
{var or__3548__auto____6471 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6471))
{return or__3548__auto____6471;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6806 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6475 = this$;

if(cljs.core.truth_(and__3546__auto____6475))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6475;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6481 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6481))
{return or__3548__auto____6481;
} else
{var or__3548__auto____6483 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6483))
{return or__3548__auto____6483;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6807 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6497 = this$;

if(cljs.core.truth_(and__3546__auto____6497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6501 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6501))
{return or__3548__auto____6501;
} else
{var or__3548__auto____6504 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6504))
{return or__3548__auto____6504;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6809 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6508 = this$;

if(cljs.core.truth_(and__3546__auto____6508))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6508;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6512 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6512))
{return or__3548__auto____6512;
} else
{var or__3548__auto____6516 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6516))
{return or__3548__auto____6516;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6811 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6520 = this$;

if(cljs.core.truth_(and__3546__auto____6520))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6520;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6524 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6524))
{return or__3548__auto____6524;
} else
{var or__3548__auto____6528 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6528))
{return or__3548__auto____6528;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6813 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6532 = this$;

if(cljs.core.truth_(and__3546__auto____6532))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6532;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6538 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6538))
{return or__3548__auto____6538;
} else
{var or__3548__auto____6541 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6541))
{return or__3548__auto____6541;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6815 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6546 = this$;

if(cljs.core.truth_(and__3546__auto____6546))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6546;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6549 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6549))
{return or__3548__auto____6549;
} else
{var or__3548__auto____6679 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6679))
{return or__3548__auto____6679;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6817 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6682 = this$;

if(cljs.core.truth_(and__3546__auto____6682))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6682;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6686 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6686))
{return or__3548__auto____6686;
} else
{var or__3548__auto____6688 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6688))
{return or__3548__auto____6688;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6819 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6691 = this$;

if(cljs.core.truth_(and__3546__auto____6691))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6691;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6694 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6694))
{return or__3548__auto____6694;
} else
{var or__3548__auto____6696 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6696))
{return or__3548__auto____6696;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6821 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6700 = this$;

if(cljs.core.truth_(and__3546__auto____6700))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6700;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6703 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6703))
{return or__3548__auto____6703;
} else
{var or__3548__auto____6705 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6705))
{return or__3548__auto____6705;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6823 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6707 = this$;

if(cljs.core.truth_(and__3546__auto____6707))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6707;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6709 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6709))
{return or__3548__auto____6709;
} else
{var or__3548__auto____6711 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6711))
{return or__3548__auto____6711;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6825 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6713 = this$;

if(cljs.core.truth_(and__3546__auto____6713))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6713;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6715 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6715))
{return or__3548__auto____6715;
} else
{var or__3548__auto____6717 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6717))
{return or__3548__auto____6717;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6828 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6719 = this$;

if(cljs.core.truth_(and__3546__auto____6719))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6719;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6721 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6721))
{return or__3548__auto____6721;
} else
{var or__3548__auto____6723 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6723))
{return or__3548__auto____6723;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6830 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6727 = this$;

if(cljs.core.truth_(and__3546__auto____6727))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6727;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____6776 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6776))
{return or__3548__auto____6776;
} else
{var or__3548__auto____6777 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6777))
{return or__3548__auto____6777;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6831 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6778 = this$;

if(cljs.core.truth_(and__3546__auto____6778))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6778;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____6779 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6779))
{return or__3548__auto____6779;
} else
{var or__3548__auto____6781 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6781))
{return or__3548__auto____6781;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6833 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6783 = this$;

if(cljs.core.truth_(and__3546__auto____6783))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6783;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____6785 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6785))
{return or__3548__auto____6785;
} else
{var or__3548__auto____6787 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6787))
{return or__3548__auto____6787;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6834 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6789 = this$;

if(cljs.core.truth_(and__3546__auto____6789))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6789;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6790 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6790))
{return or__3548__auto____6790;
} else
{var or__3548__auto____6791 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6791))
{return or__3548__auto____6791;
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
return _invoke__6796.call(this,this$);
case  2 :
return _invoke__6798.call(this,this$,a);
case  3 :
return _invoke__6800.call(this,this$,a,b);
case  4 :
return _invoke__6802.call(this,this$,a,b,c);
case  5 :
return _invoke__6804.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6806.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6807.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6809.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6811.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6813.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6815.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6817.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6819.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6821.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6823.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6825.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6828.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6830.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6831.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6833.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6834.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6863 = coll;

if(cljs.core.truth_(and__3546__auto____6863))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6863;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6864 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6864))
{return or__3548__auto____6864;
} else
{var or__3548__auto____6865 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6865))
{return or__3548__auto____6865;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6872 = coll;

if(cljs.core.truth_(and__3546__auto____6872))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6872;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6873 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6873))
{return or__3548__auto____6873;
} else
{var or__3548__auto____6874 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6874))
{return or__3548__auto____6874;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6881 = coll;

if(cljs.core.truth_(and__3546__auto____6881))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6881;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6883 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6883))
{return or__3548__auto____6883;
} else
{var or__3548__auto____6885 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6885))
{return or__3548__auto____6885;
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
var _nth__6902 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6894 = coll;

if(cljs.core.truth_(and__3546__auto____6894))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6894;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6895 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6895))
{return or__3548__auto____6895;
} else
{var or__3548__auto____6896 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6896))
{return or__3548__auto____6896;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6903 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6897 = coll;

if(cljs.core.truth_(and__3546__auto____6897))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6897;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6898 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6898))
{return or__3548__auto____6898;
} else
{var or__3548__auto____6900 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6900))
{return or__3548__auto____6900;
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
return _nth__6902.call(this,coll,n);
case  3 :
return _nth__6903.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6940 = coll;

if(cljs.core.truth_(and__3546__auto____6940))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6940;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6942 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6942))
{return or__3548__auto____6942;
} else
{var or__3548__auto____6943 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6943))
{return or__3548__auto____6943;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6945 = coll;

if(cljs.core.truth_(and__3546__auto____6945))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6945;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6949 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6949))
{return or__3548__auto____6949;
} else
{var or__3548__auto____6951 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6951))
{return or__3548__auto____6951;
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
var _lookup__6975 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6960 = o;

if(cljs.core.truth_(and__3546__auto____6960))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6960;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6962 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6962))
{return or__3548__auto____6962;
} else
{var or__3548__auto____6964 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6964))
{return or__3548__auto____6964;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__6976 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6966 = o;

if(cljs.core.truth_(and__3546__auto____6966))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6966;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____6969 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6969))
{return or__3548__auto____6969;
} else
{var or__3548__auto____6971 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6971))
{return or__3548__auto____6971;
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
return _lookup__6975.call(this,o,k);
case  3 :
return _lookup__6976.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6980 = coll;

if(cljs.core.truth_(and__3546__auto____6980))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____6980;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____6982 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6982))
{return or__3548__auto____6982;
} else
{var or__3548__auto____6983 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6983))
{return or__3548__auto____6983;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____6986 = coll;

if(cljs.core.truth_(and__3546__auto____6986))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____6986;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____6988 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6988))
{return or__3548__auto____6988;
} else
{var or__3548__auto____6990 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____6990))
{return or__3548__auto____6990;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6995 = coll;

if(cljs.core.truth_(and__3546__auto____6995))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____6995;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____6997 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6997))
{return or__3548__auto____6997;
} else
{var or__3548__auto____6998 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____6998))
{return or__3548__auto____6998;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7013 = coll;

if(cljs.core.truth_(and__3546__auto____7013))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7013;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7016 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7016))
{return or__3548__auto____7016;
} else
{var or__3548__auto____7017 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7017))
{return or__3548__auto____7017;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7022 = coll;

if(cljs.core.truth_(and__3546__auto____7022))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7022;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7057 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7057))
{return or__3548__auto____7057;
} else
{var or__3548__auto____7060 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7060))
{return or__3548__auto____7060;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7063 = coll;

if(cljs.core.truth_(and__3546__auto____7063))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7063;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7065 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7065))
{return or__3548__auto____7065;
} else
{var or__3548__auto____7067 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7067))
{return or__3548__auto____7067;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7074 = coll;

if(cljs.core.truth_(and__3546__auto____7074))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7074;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7077 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7077))
{return or__3548__auto____7077;
} else
{var or__3548__auto____7081 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7081))
{return or__3548__auto____7081;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7090 = o;

if(cljs.core.truth_(and__3546__auto____7090))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7090;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7091 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7091))
{return or__3548__auto____7091;
} else
{var or__3548__auto____7092 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7092))
{return or__3548__auto____7092;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7101 = o;

if(cljs.core.truth_(and__3546__auto____7101))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7101;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7103 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7103))
{return or__3548__auto____7103;
} else
{var or__3548__auto____7105 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7105))
{return or__3548__auto____7105;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7109 = o;

if(cljs.core.truth_(and__3546__auto____7109))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7109;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7125 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7125))
{return or__3548__auto____7125;
} else
{var or__3548__auto____7126 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7126))
{return or__3548__auto____7126;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7135 = o;

if(cljs.core.truth_(and__3546__auto____7135))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7135;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7137 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7137))
{return or__3548__auto____7137;
} else
{var or__3548__auto____7141 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7141))
{return or__3548__auto____7141;
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
var _reduce__7176 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7150 = coll;

if(cljs.core.truth_(and__3546__auto____7150))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7150;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7154 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7154))
{return or__3548__auto____7154;
} else
{var or__3548__auto____7157 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7157))
{return or__3548__auto____7157;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7177 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7161 = coll;

if(cljs.core.truth_(and__3546__auto____7161))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7161;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7169 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7169))
{return or__3548__auto____7169;
} else
{var or__3548__auto____7171 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7171))
{return or__3548__auto____7171;
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
return _reduce__7176.call(this,coll,f);
case  3 :
return _reduce__7177.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7187 = o;

if(cljs.core.truth_(and__3546__auto____7187))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7187;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7189 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7189))
{return or__3548__auto____7189;
} else
{var or__3548__auto____7190 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7190))
{return or__3548__auto____7190;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7199 = o;

if(cljs.core.truth_(and__3546__auto____7199))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7199;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7204 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7204))
{return or__3548__auto____7204;
} else
{var or__3548__auto____7205 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7205))
{return or__3548__auto____7205;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7213 = o;

if(cljs.core.truth_(and__3546__auto____7213))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7213;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7216 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7216))
{return or__3548__auto____7216;
} else
{var or__3548__auto____7217 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7217))
{return or__3548__auto____7217;
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
if(cljs.core.truth_((function (){var and__3546__auto____7225 = o;

if(cljs.core.truth_(and__3546__auto____7225))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7225;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7241 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7241))
{return or__3548__auto____7241;
} else
{var or__3548__auto____7244 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7244))
{return or__3548__auto____7244;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7253 = d;

if(cljs.core.truth_(and__3546__auto____7253))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7253;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7254 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{var or__3548__auto____7256 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7256))
{return or__3548__auto____7256;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7265 = this$;

if(cljs.core.truth_(and__3546__auto____7265))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7265;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7266 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7266))
{return or__3548__auto____7266;
} else
{var or__3548__auto____7268 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7268))
{return or__3548__auto____7268;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7274 = this$;

if(cljs.core.truth_(and__3546__auto____7274))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7274;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7318 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{var or__3548__auto____7319 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7320 = this$;

if(cljs.core.truth_(and__3546__auto____7320))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7320;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7321 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{var or__3548__auto____7322 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
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
var G__7331 = null;
var G__7331__7332 = (function (o,k){
return null;
});
var G__7331__7333 = (function (o,k,not_found){
return not_found;
});
G__7331 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7331__7332.call(this,o,k);
case  3 :
return G__7331__7333.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7331;
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
var G__7339 = null;
var G__7339__7340 = (function (_,f){
return f.call(null);
});
var G__7339__7341 = (function (_,f,start){
return start;
});
G__7339 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7339__7340.call(this,_,f);
case  3 :
return G__7339__7341.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7339;
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
var G__7347 = null;
var G__7347__7348 = (function (_,n){
return null;
});
var G__7347__7349 = (function (_,n,not_found){
return not_found;
});
G__7347 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7347__7348.call(this,_,n);
case  3 :
return G__7347__7349.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7347;
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
var ci_reduce__7385 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7379 = cljs.core._nth.call(null,cicoll,0);
var n__7380 = 1;

while(true){
if(cljs.core.truth_((n__7380 < cljs.core._count.call(null,cicoll))))
{{
var G__7389 = f.call(null,val__7379,cljs.core._nth.call(null,cicoll,n__7380));
var G__7390 = (n__7380 + 1);
val__7379 = G__7389;
n__7380 = G__7390;
continue;
}
} else
{return val__7379;
}
break;
}
}
});
var ci_reduce__7386 = (function (cicoll,f,val){
var val__7381 = val;
var n__7382 = 0;

while(true){
if(cljs.core.truth_((n__7382 < cljs.core._count.call(null,cicoll))))
{{
var G__7391 = f.call(null,val__7381,cljs.core._nth.call(null,cicoll,n__7382));
var G__7392 = (n__7382 + 1);
val__7381 = G__7391;
n__7382 = G__7392;
continue;
}
} else
{return val__7381;
}
break;
}
});
var ci_reduce__7387 = (function (cicoll,f,val,idx){
var val__7383 = val;
var n__7384 = idx;

while(true){
if(cljs.core.truth_((n__7384 < cljs.core._count.call(null,cicoll))))
{{
var G__7396 = f.call(null,val__7383,cljs.core._nth.call(null,cicoll,n__7384));
var G__7397 = (n__7384 + 1);
val__7383 = G__7396;
n__7384 = G__7397;
continue;
}
} else
{return val__7383;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7385.call(this,cicoll,f);
case  3 :
return ci_reduce__7386.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7387.call(this,cicoll,f,val,idx);
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
var this__7411 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7460 = null;
var G__7460__7461 = (function (_,f){
var this__7414 = this;
return cljs.core.ci_reduce.call(null,this__7414.a,f,(this__7414.a[this__7414.i]),(this__7414.i + 1));
});
var G__7460__7462 = (function (_,f,start){
var this__7415 = this;
return cljs.core.ci_reduce.call(null,this__7415.a,f,start,this__7415.i);
});
G__7460 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7460__7461.call(this,_,f);
case  3 :
return G__7460__7462.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7460;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7418 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7419 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7472 = null;
var G__7472__7473 = (function (coll,n){
var this__7422 = this;
var i__7423 = (n + this__7422.i);

if(cljs.core.truth_((i__7423 < this__7422.a.length)))
{return (this__7422.a[i__7423]);
} else
{return null;
}
});
var G__7472__7474 = (function (coll,n,not_found){
var this__7430 = this;
var i__7432 = (n + this__7430.i);

if(cljs.core.truth_((i__7432 < this__7430.a.length)))
{return (this__7430.a[i__7432]);
} else
{return not_found;
}
});
G__7472 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7472__7473.call(this,coll,n);
case  3 :
return G__7472__7474.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7472;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7438 = this;
return (this__7438.a.length - this__7438.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7447 = this;
return (this__7447.a[this__7447.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7448 = this;
if(cljs.core.truth_(((this__7448.i + 1) < this__7448.a.length)))
{return (new cljs.core.IndexedSeq(this__7448.a,(this__7448.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7451 = this;
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
var G__7503 = null;
var G__7503__7504 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7503__7505 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7503 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7503__7504.call(this,array,f);
case  3 :
return G__7503__7505.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7503;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7509 = null;
var G__7509__7510 = (function (array,k){
return (array[k]);
});
var G__7509__7511 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7509 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7509__7510.call(this,array,k);
case  3 :
return G__7509__7511.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7509;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7515 = null;
var G__7515__7516 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7515__7517 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7515 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7515__7516.call(this,array,n);
case  3 :
return G__7515__7517.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7515;
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
var temp__3698__auto____7542 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7542))
{var s__7544 = temp__3698__auto____7542;

return cljs.core._first.call(null,s__7544);
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
var G__7613 = cljs.core.next.call(null,s);
s = G__7613;
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
var s__7614 = cljs.core.seq.call(null,x);
var n__7615 = 0;

while(true){
if(cljs.core.truth_(s__7614))
{{
var G__7616 = cljs.core.next.call(null,s__7614);
var G__7617 = (n__7615 + 1);
s__7614 = G__7616;
n__7615 = G__7617;
continue;
}
} else
{return n__7615;
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
var conj__7622 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7623 = (function() { 
var G__7683__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7684 = conj.call(null,coll,x);
var G__7685 = cljs.core.first.call(null,xs);
var G__7686 = cljs.core.next.call(null,xs);
coll = G__7684;
x = G__7685;
xs = G__7686;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7683 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7683__delegate.call(this, coll, x, xs);
};
G__7683.cljs$lang$maxFixedArity = 2;
G__7683.cljs$lang$applyTo = (function (arglist__7689){
var coll = cljs.core.first(arglist__7689);
var x = cljs.core.first(cljs.core.next(arglist__7689));
var xs = cljs.core.rest(cljs.core.next(arglist__7689));
return G__7683__delegate.call(this, coll, x, xs);
});
return G__7683;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7622.call(this,coll,x);
default:
return conj__7623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7623.cljs$lang$applyTo;
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
var nth__7769 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7770 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7769.call(this,coll,n);
case  3 :
return nth__7770.call(this,coll,n,not_found);
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
var get__7773 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7774 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7773.call(this,o,k);
case  3 :
return get__7774.call(this,o,k,not_found);
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
var assoc__7792 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7793 = (function() { 
var G__7799__delegate = function (coll,k,v,kvs){
while(true){
var ret__7785 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7800 = ret__7785;
var G__7801 = cljs.core.first.call(null,kvs);
var G__7802 = cljs.core.second.call(null,kvs);
var G__7804 = cljs.core.nnext.call(null,kvs);
coll = G__7800;
k = G__7801;
v = G__7802;
kvs = G__7804;
continue;
}
} else
{return ret__7785;
}
break;
}
};
var G__7799 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7799__delegate.call(this, coll, k, v, kvs);
};
G__7799.cljs$lang$maxFixedArity = 3;
G__7799.cljs$lang$applyTo = (function (arglist__7807){
var coll = cljs.core.first(arglist__7807);
var k = cljs.core.first(cljs.core.next(arglist__7807));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7807)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7807)));
return G__7799__delegate.call(this, coll, k, v, kvs);
});
return G__7799;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7792.call(this,coll,k,v);
default:
return assoc__7793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7793.cljs$lang$applyTo;
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
var dissoc__7828 = (function (coll){
return coll;
});
var dissoc__7830 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7831 = (function() { 
var G__7835__delegate = function (coll,k,ks){
while(true){
var ret__7812 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7837 = ret__7812;
var G__7838 = cljs.core.first.call(null,ks);
var G__7839 = cljs.core.next.call(null,ks);
coll = G__7837;
k = G__7838;
ks = G__7839;
continue;
}
} else
{return ret__7812;
}
break;
}
};
var G__7835 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7835__delegate.call(this, coll, k, ks);
};
G__7835.cljs$lang$maxFixedArity = 2;
G__7835.cljs$lang$applyTo = (function (arglist__7840){
var coll = cljs.core.first(arglist__7840);
var k = cljs.core.first(cljs.core.next(arglist__7840));
var ks = cljs.core.rest(cljs.core.next(arglist__7840));
return G__7835__delegate.call(this, coll, k, ks);
});
return G__7835;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7828.call(this,coll);
case  2 :
return dissoc__7830.call(this,coll,k);
default:
return dissoc__7831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7831.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____7866 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7867 = x__445__auto____7866;

if(cljs.core.truth_(and__3546__auto____7867))
{var and__3546__auto____7868 = x__445__auto____7866.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7868))
{return cljs.core.not.call(null,x__445__auto____7866.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7868;
}
} else
{return and__3546__auto____7867;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____7866);
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
var disj__7880 = (function (coll){
return coll;
});
var disj__7881 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7882 = (function() { 
var G__7988__delegate = function (coll,k,ks){
while(true){
var ret__7879 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7989 = ret__7879;
var G__7990 = cljs.core.first.call(null,ks);
var G__7991 = cljs.core.next.call(null,ks);
coll = G__7989;
k = G__7990;
ks = G__7991;
continue;
}
} else
{return ret__7879;
}
break;
}
};
var G__7988 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7988__delegate.call(this, coll, k, ks);
};
G__7988.cljs$lang$maxFixedArity = 2;
G__7988.cljs$lang$applyTo = (function (arglist__7992){
var coll = cljs.core.first(arglist__7992);
var k = cljs.core.first(cljs.core.next(arglist__7992));
var ks = cljs.core.rest(cljs.core.next(arglist__7992));
return G__7988__delegate.call(this, coll, k, ks);
});
return G__7988;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7880.call(this,coll);
case  2 :
return disj__7881.call(this,coll,k);
default:
return disj__7882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7882.cljs$lang$applyTo;
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
{var x__445__auto____7997 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7999 = x__445__auto____7997;

if(cljs.core.truth_(and__3546__auto____7999))
{var and__3546__auto____8001 = x__445__auto____7997.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8001))
{return cljs.core.not.call(null,x__445__auto____7997.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8001;
}
} else
{return and__3546__auto____7999;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____7997);
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
{var x__445__auto____8006 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8008 = x__445__auto____8006;

if(cljs.core.truth_(and__3546__auto____8008))
{var and__3546__auto____8009 = x__445__auto____8006.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8009))
{return cljs.core.not.call(null,x__445__auto____8006.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8009;
}
} else
{return and__3546__auto____8008;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8006);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8017 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8018 = x__445__auto____8017;

if(cljs.core.truth_(and__3546__auto____8018))
{var and__3546__auto____8020 = x__445__auto____8017.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8020))
{return cljs.core.not.call(null,x__445__auto____8017.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8020;
}
} else
{return and__3546__auto____8018;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8017);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8022 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8023 = x__445__auto____8022;

if(cljs.core.truth_(and__3546__auto____8023))
{var and__3546__auto____8025 = x__445__auto____8022.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8025))
{return cljs.core.not.call(null,x__445__auto____8022.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8025;
}
} else
{return and__3546__auto____8023;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8022);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8028 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8030 = x__445__auto____8028;

if(cljs.core.truth_(and__3546__auto____8030))
{var and__3546__auto____8031 = x__445__auto____8028.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8031))
{return cljs.core.not.call(null,x__445__auto____8028.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8031;
}
} else
{return and__3546__auto____8030;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8028);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8035 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8036 = x__445__auto____8035;

if(cljs.core.truth_(and__3546__auto____8036))
{var and__3546__auto____8037 = x__445__auto____8035.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8037))
{return cljs.core.not.call(null,x__445__auto____8035.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8037;
}
} else
{return and__3546__auto____8036;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8035);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8042 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8043 = x__445__auto____8042;

if(cljs.core.truth_(and__3546__auto____8043))
{var and__3546__auto____8044 = x__445__auto____8042.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8044))
{return cljs.core.not.call(null,x__445__auto____8042.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8044;
}
} else
{return and__3546__auto____8043;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8042);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8072 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8072.push(key);
}));
return keys__8072;
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
{var x__445__auto____8093 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8095 = x__445__auto____8093;

if(cljs.core.truth_(and__3546__auto____8095))
{var and__3546__auto____8098 = x__445__auto____8093.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8098))
{return cljs.core.not.call(null,x__445__auto____8093.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8098;
}
} else
{return and__3546__auto____8095;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8093);
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
var and__3546__auto____8115 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8115))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8117 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8115;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8121 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8121))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8121;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8133 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8133))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8133;
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
var and__3546__auto____8142 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8142))
{return (n == n.toFixed());
} else
{return and__3546__auto____8142;
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
if(cljs.core.truth_((function (){var and__3546__auto____8156 = coll;

if(cljs.core.truth_(and__3546__auto____8156))
{var and__3546__auto____8157 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8157))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8157;
}
} else
{return and__3546__auto____8156;
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
var distinct_QMARK___8202 = (function (x){
return true;
});
var distinct_QMARK___8203 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8204 = (function() { 
var G__8208__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8198 = cljs.core.set([y,x]);
var xs__8199 = more;

while(true){
var x__8200 = cljs.core.first.call(null,xs__8199);
var etc__8201 = cljs.core.next.call(null,xs__8199);

if(cljs.core.truth_(xs__8199))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8198,x__8200)))
{return false;
} else
{{
var G__8212 = cljs.core.conj.call(null,s__8198,x__8200);
var G__8213 = etc__8201;
s__8198 = G__8212;
xs__8199 = G__8213;
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
var G__8208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8208__delegate.call(this, x, y, more);
};
G__8208.cljs$lang$maxFixedArity = 2;
G__8208.cljs$lang$applyTo = (function (arglist__8218){
var x = cljs.core.first(arglist__8218);
var y = cljs.core.first(cljs.core.next(arglist__8218));
var more = cljs.core.rest(cljs.core.next(arglist__8218));
return G__8208__delegate.call(this, x, y, more);
});
return G__8208;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8202.call(this,x);
case  2 :
return distinct_QMARK___8203.call(this,x,y);
default:
return distinct_QMARK___8204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8204.cljs$lang$applyTo;
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
var r__8232 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8232)))
{return r__8232;
} else
{if(cljs.core.truth_(r__8232))
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
var sort__8254 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8255 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8245 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8245,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8245);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8254.call(this,comp);
case  2 :
return sort__8255.call(this,comp,coll);
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
var sort_by__8271 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8272 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8271.call(this,keyfn,comp);
case  3 :
return sort_by__8272.call(this,keyfn,comp,coll);
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
var reduce__8289 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8290 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8289.call(this,f,val);
case  3 :
return reduce__8290.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8307 = (function (f,coll){
var temp__3695__auto____8292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8292))
{var s__8293 = temp__3695__auto____8292;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8293),cljs.core.next.call(null,s__8293));
} else
{return f.call(null);
}
});
var seq_reduce__8309 = (function (f,val,coll){
var val__8297 = val;
var coll__8300 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8300))
{{
var G__8316 = f.call(null,val__8297,cljs.core.first.call(null,coll__8300));
var G__8317 = cljs.core.next.call(null,coll__8300);
val__8297 = G__8316;
coll__8300 = G__8317;
continue;
}
} else
{return val__8297;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8307.call(this,f,val);
case  3 :
return seq_reduce__8309.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8322 = null;
var G__8322__8323 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8322__8324 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8322 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8322__8323.call(this,coll,f);
case  3 :
return G__8322__8324.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8322;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8338 = (function (){
return 0;
});
var _PLUS___8339 = (function (x){
return x;
});
var _PLUS___8340 = (function (x,y){
return (x + y);
});
var _PLUS___8341 = (function() { 
var G__8344__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8344 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8344__delegate.call(this, x, y, more);
};
G__8344.cljs$lang$maxFixedArity = 2;
G__8344.cljs$lang$applyTo = (function (arglist__8347){
var x = cljs.core.first(arglist__8347);
var y = cljs.core.first(cljs.core.next(arglist__8347));
var more = cljs.core.rest(cljs.core.next(arglist__8347));
return G__8344__delegate.call(this, x, y, more);
});
return G__8344;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8338.call(this);
case  1 :
return _PLUS___8339.call(this,x);
case  2 :
return _PLUS___8340.call(this,x,y);
default:
return _PLUS___8341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8341.cljs$lang$applyTo;
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
var ___8356 = (function (x){
return (- x);
});
var ___8358 = (function (x,y){
return (x - y);
});
var ___8360 = (function() { 
var G__8364__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8364 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8364__delegate.call(this, x, y, more);
};
G__8364.cljs$lang$maxFixedArity = 2;
G__8364.cljs$lang$applyTo = (function (arglist__8365){
var x = cljs.core.first(arglist__8365);
var y = cljs.core.first(cljs.core.next(arglist__8365));
var more = cljs.core.rest(cljs.core.next(arglist__8365));
return G__8364__delegate.call(this, x, y, more);
});
return G__8364;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8356.call(this,x);
case  2 :
return ___8358.call(this,x,y);
default:
return ___8360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8360.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8383 = (function (){
return 1;
});
var _STAR___8384 = (function (x){
return x;
});
var _STAR___8385 = (function (x,y){
return (x * y);
});
var _STAR___8386 = (function() { 
var G__8390__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8390 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8390__delegate.call(this, x, y, more);
};
G__8390.cljs$lang$maxFixedArity = 2;
G__8390.cljs$lang$applyTo = (function (arglist__8391){
var x = cljs.core.first(arglist__8391);
var y = cljs.core.first(cljs.core.next(arglist__8391));
var more = cljs.core.rest(cljs.core.next(arglist__8391));
return G__8390__delegate.call(this, x, y, more);
});
return G__8390;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8383.call(this);
case  1 :
return _STAR___8384.call(this,x);
case  2 :
return _STAR___8385.call(this,x,y);
default:
return _STAR___8386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8386.cljs$lang$applyTo;
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
var _SLASH___8403 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8404 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8405 = (function() { 
var G__8410__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8410 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8410__delegate.call(this, x, y, more);
};
G__8410.cljs$lang$maxFixedArity = 2;
G__8410.cljs$lang$applyTo = (function (arglist__8411){
var x = cljs.core.first(arglist__8411);
var y = cljs.core.first(cljs.core.next(arglist__8411));
var more = cljs.core.rest(cljs.core.next(arglist__8411));
return G__8410__delegate.call(this, x, y, more);
});
return G__8410;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8403.call(this,x);
case  2 :
return _SLASH___8404.call(this,x,y);
default:
return _SLASH___8405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8405.cljs$lang$applyTo;
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
var _LT___8428 = (function (x){
return true;
});
var _LT___8429 = (function (x,y){
return (x < y);
});
var _LT___8430 = (function() { 
var G__8433__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8434 = y;
var G__8435 = cljs.core.first.call(null,more);
var G__8436 = cljs.core.next.call(null,more);
x = G__8434;
y = G__8435;
more = G__8436;
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
var G__8433 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8433__delegate.call(this, x, y, more);
};
G__8433.cljs$lang$maxFixedArity = 2;
G__8433.cljs$lang$applyTo = (function (arglist__8437){
var x = cljs.core.first(arglist__8437);
var y = cljs.core.first(cljs.core.next(arglist__8437));
var more = cljs.core.rest(cljs.core.next(arglist__8437));
return G__8433__delegate.call(this, x, y, more);
});
return G__8433;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8428.call(this,x);
case  2 :
return _LT___8429.call(this,x,y);
default:
return _LT___8430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8430.cljs$lang$applyTo;
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
var _LT__EQ___8451 = (function (x){
return true;
});
var _LT__EQ___8452 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8453 = (function() { 
var G__8455__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8456 = y;
var G__8457 = cljs.core.first.call(null,more);
var G__8458 = cljs.core.next.call(null,more);
x = G__8456;
y = G__8457;
more = G__8458;
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
var G__8455 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8455__delegate.call(this, x, y, more);
};
G__8455.cljs$lang$maxFixedArity = 2;
G__8455.cljs$lang$applyTo = (function (arglist__8463){
var x = cljs.core.first(arglist__8463);
var y = cljs.core.first(cljs.core.next(arglist__8463));
var more = cljs.core.rest(cljs.core.next(arglist__8463));
return G__8455__delegate.call(this, x, y, more);
});
return G__8455;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8451.call(this,x);
case  2 :
return _LT__EQ___8452.call(this,x,y);
default:
return _LT__EQ___8453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8453.cljs$lang$applyTo;
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
var _GT___8505 = (function (x){
return true;
});
var _GT___8506 = (function (x,y){
return (x > y);
});
var _GT___8507 = (function() { 
var G__8511__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8516 = y;
var G__8517 = cljs.core.first.call(null,more);
var G__8518 = cljs.core.next.call(null,more);
x = G__8516;
y = G__8517;
more = G__8518;
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
var G__8511 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8511__delegate.call(this, x, y, more);
};
G__8511.cljs$lang$maxFixedArity = 2;
G__8511.cljs$lang$applyTo = (function (arglist__8523){
var x = cljs.core.first(arglist__8523);
var y = cljs.core.first(cljs.core.next(arglist__8523));
var more = cljs.core.rest(cljs.core.next(arglist__8523));
return G__8511__delegate.call(this, x, y, more);
});
return G__8511;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8505.call(this,x);
case  2 :
return _GT___8506.call(this,x,y);
default:
return _GT___8507.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8507.cljs$lang$applyTo;
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
var _GT__EQ___8533 = (function (x){
return true;
});
var _GT__EQ___8541 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8542 = (function() { 
var G__8544__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8545 = y;
var G__8546 = cljs.core.first.call(null,more);
var G__8547 = cljs.core.next.call(null,more);
x = G__8545;
y = G__8546;
more = G__8547;
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
var G__8544 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8544__delegate.call(this, x, y, more);
};
G__8544.cljs$lang$maxFixedArity = 2;
G__8544.cljs$lang$applyTo = (function (arglist__8548){
var x = cljs.core.first(arglist__8548);
var y = cljs.core.first(cljs.core.next(arglist__8548));
var more = cljs.core.rest(cljs.core.next(arglist__8548));
return G__8544__delegate.call(this, x, y, more);
});
return G__8544;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8533.call(this,x);
case  2 :
return _GT__EQ___8541.call(this,x,y);
default:
return _GT__EQ___8542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8542.cljs$lang$applyTo;
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
var max__8566 = (function (x){
return x;
});
var max__8567 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8568 = (function() { 
var G__8570__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8570 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8570__delegate.call(this, x, y, more);
};
G__8570.cljs$lang$maxFixedArity = 2;
G__8570.cljs$lang$applyTo = (function (arglist__8571){
var x = cljs.core.first(arglist__8571);
var y = cljs.core.first(cljs.core.next(arglist__8571));
var more = cljs.core.rest(cljs.core.next(arglist__8571));
return G__8570__delegate.call(this, x, y, more);
});
return G__8570;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8566.call(this,x);
case  2 :
return max__8567.call(this,x,y);
default:
return max__8568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8568.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8582 = (function (x){
return x;
});
var min__8583 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8584 = (function() { 
var G__8586__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8586 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8586__delegate.call(this, x, y, more);
};
G__8586.cljs$lang$maxFixedArity = 2;
G__8586.cljs$lang$applyTo = (function (arglist__8587){
var x = cljs.core.first(arglist__8587);
var y = cljs.core.first(cljs.core.next(arglist__8587));
var more = cljs.core.rest(cljs.core.next(arglist__8587));
return G__8586__delegate.call(this, x, y, more);
});
return G__8586;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8582.call(this,x);
case  2 :
return min__8583.call(this,x,y);
default:
return min__8584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8584.cljs$lang$applyTo;
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
var rem__8647 = (n % d);

return cljs.core.fix.call(null,((n - rem__8647) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8651 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8651));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8656 = (function (){
return Math.random.call(null);
});
var rand__8657 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8656.call(this);
case  1 :
return rand__8657.call(this,n);
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
var _EQ__EQ___8717 = (function (x){
return true;
});
var _EQ__EQ___8718 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8719 = (function() { 
var G__8724__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8725 = y;
var G__8726 = cljs.core.first.call(null,more);
var G__8727 = cljs.core.next.call(null,more);
x = G__8725;
y = G__8726;
more = G__8727;
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
var G__8724 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8724__delegate.call(this, x, y, more);
};
G__8724.cljs$lang$maxFixedArity = 2;
G__8724.cljs$lang$applyTo = (function (arglist__8730){
var x = cljs.core.first(arglist__8730);
var y = cljs.core.first(cljs.core.next(arglist__8730));
var more = cljs.core.rest(cljs.core.next(arglist__8730));
return G__8724__delegate.call(this, x, y, more);
});
return G__8724;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8717.call(this,x);
case  2 :
return _EQ__EQ___8718.call(this,x,y);
default:
return _EQ__EQ___8719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8719.cljs$lang$applyTo;
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
var n__8741 = n;
var xs__8742 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8745 = xs__8742;

if(cljs.core.truth_(and__3546__auto____8745))
{return (n__8741 > 0);
} else
{return and__3546__auto____8745;
}
})()))
{{
var G__8758 = (n__8741 - 1);
var G__8760 = cljs.core.next.call(null,xs__8742);
n__8741 = G__8758;
xs__8742 = G__8760;
continue;
}
} else
{return xs__8742;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8774 = null;
var G__8774__8775 = (function (coll,n){
var temp__3695__auto____8768 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8768))
{var xs__8769 = temp__3695__auto____8768;

return cljs.core.first.call(null,xs__8769);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8774__8776 = (function (coll,n,not_found){
var temp__3695__auto____8770 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8770))
{var xs__8771 = temp__3695__auto____8770;

return cljs.core.first.call(null,xs__8771);
} else
{return not_found;
}
});
G__8774 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8774__8775.call(this,coll,n);
case  3 :
return G__8774__8776.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8774;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8788 = (function (){
return "";
});
var str_STAR___8789 = (function (x){
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
var str_STAR___8790 = (function() { 
var G__8794__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8795 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8796 = cljs.core.next.call(null,more);
sb = G__8795;
more = G__8796;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8794 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8794__delegate.call(this, x, ys);
};
G__8794.cljs$lang$maxFixedArity = 1;
G__8794.cljs$lang$applyTo = (function (arglist__8799){
var x = cljs.core.first(arglist__8799);
var ys = cljs.core.rest(arglist__8799);
return G__8794__delegate.call(this, x, ys);
});
return G__8794;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8788.call(this);
case  1 :
return str_STAR___8789.call(this,x);
default:
return str_STAR___8790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8790.cljs$lang$applyTo;
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
var str__8816 = (function (){
return "";
});
var str__8817 = (function (x){
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
var str__8818 = (function() { 
var G__8820__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__8820 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8820__delegate.call(this, x, ys);
};
G__8820.cljs$lang$maxFixedArity = 1;
G__8820.cljs$lang$applyTo = (function (arglist__8825){
var x = cljs.core.first(arglist__8825);
var ys = cljs.core.rest(arglist__8825);
return G__8820__delegate.call(this, x, ys);
});
return G__8820;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8816.call(this);
case  1 :
return str__8817.call(this,x);
default:
return str__8818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8818.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8923 = (function (s,start){
return s.substring(start);
});
var subs__8924 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8923.call(this,s,start);
case  3 :
return subs__8924.call(this,s,start,end);
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
var symbol__8960 = (function (name){
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
var symbol__8961 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8960.call(this,ns);
case  2 :
return symbol__8961.call(this,ns,name);
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
var keyword__8966 = (function (name){
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
var keyword__8967 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8966.call(this,ns);
case  2 :
return keyword__8967.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8975 = cljs.core.seq.call(null,x);
var ys__8976 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__8975)))
{return cljs.core.nil_QMARK_.call(null,ys__8976);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__8976)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8975),cljs.core.first.call(null,ys__8976))))
{{
var G__8985 = cljs.core.next.call(null,xs__8975);
var G__8987 = cljs.core.next.call(null,ys__8976);
xs__8975 = G__8985;
ys__8976 = G__8987;
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
return cljs.core.reduce.call(null,(function (p1__8989_SHARP_,p2__8990_SHARP_){
return cljs.core.hash_combine.call(null,p1__8989_SHARP_,cljs.core.hash.call(null,p2__8990_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8999__9001 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8999__9001))
{var G__9004__9009 = cljs.core.first.call(null,G__8999__9001);
var vec__9006__9010 = G__9004__9009;
var key_name__9011 = cljs.core.nth.call(null,vec__9006__9010,0,null);
var f__9012 = cljs.core.nth.call(null,vec__9006__9010,1,null);
var G__8999__9015 = G__8999__9001;

var G__9004__9016 = G__9004__9009;
var G__8999__9017 = G__8999__9015;

while(true){
var vec__9020__9021 = G__9004__9016;
var key_name__9022 = cljs.core.nth.call(null,vec__9020__9021,0,null);
var f__9027 = cljs.core.nth.call(null,vec__9020__9021,1,null);
var G__8999__9028 = G__8999__9017;

var str_name__9030 = cljs.core.name.call(null,key_name__9022);

obj[str_name__9030] = f__9027;
var temp__3698__auto____9036 = cljs.core.next.call(null,G__8999__9028);

if(cljs.core.truth_(temp__3698__auto____9036))
{var G__8999__9039 = temp__3698__auto____9036;

{
var G__9042 = cljs.core.first.call(null,G__8999__9039);
var G__9043 = G__8999__9039;
G__9004__9016 = G__9042;
G__8999__9017 = G__9043;
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
var this__9079 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9080 = this;
return (new cljs.core.List(this__9080.meta,o,coll,(this__9080.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9081 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9082 = this;
return this__9082.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9083 = this;
return this__9083.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9084 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9085 = this;
return this__9085.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9086 = this;
return this__9086.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9087 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9090 = this;
return (new cljs.core.List(meta,this__9090.first,this__9090.rest,this__9090.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9091 = this;
return this__9091.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9092 = this;
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
var this__9105 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9108 = this;
return (new cljs.core.List(this__9108.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9110 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9111 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9113 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9115 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9117 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9119 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9121 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9123 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9125 = this;
return this__9125.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9127 = this;
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
list.cljs$lang$applyTo = (function (arglist__9144){
var items = cljs.core.seq( arglist__9144 );;
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
var this__9149 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9150 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9153 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9156 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9156.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9157 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9162 = this;
return this__9162.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9163 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9163.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9163.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9168 = this;
return this__9168.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9169 = this;
return (new cljs.core.Cons(meta,this__9169.first,this__9169.rest));
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
var G__9240 = null;
var G__9240__9241 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9240__9242 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9240 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9240__9241.call(this,string,f);
case  3 :
return G__9240__9242.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9240;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9249 = null;
var G__9249__9250 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9249__9251 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9249 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9249__9250.call(this,string,k);
case  3 :
return G__9249__9251.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9249;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9257 = null;
var G__9257__9259 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9257__9260 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9257 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9257__9259.call(this,string,n);
case  3 :
return G__9257__9260.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9257;
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
var G__9271 = null;
var G__9271__9272 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9271__9273 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9271 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9271__9272.call(this,this$,coll);
case  3 :
return G__9271__9273.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9271;
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
var x__9290 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9290;
} else
{lazy_seq.x = x__9290.call(null);
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
var this__9302 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9303 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9305 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9306 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9306.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9307 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9308 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9309 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9310 = this;
return this__9310.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9311 = this;
return (new cljs.core.LazySeq(meta,this__9311.realized,this__9311.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9363 = cljs.core.array.call(null);

var s__9373 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9373)))
{ary__9363.push(cljs.core.first.call(null,s__9373));
{
var G__9434 = cljs.core.next.call(null,s__9373);
s__9373 = G__9434;
continue;
}
} else
{return ary__9363;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9436 = s;
var i__9437 = n;
var sum__9438 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9440 = (i__9437 > 0);

if(cljs.core.truth_(and__3546__auto____9440))
{return cljs.core.seq.call(null,s__9436);
} else
{return and__3546__auto____9440;
}
})()))
{{
var G__9442 = cljs.core.next.call(null,s__9436);
var G__9443 = (i__9437 - 1);
var G__9444 = (sum__9438 + 1);
s__9436 = G__9442;
i__9437 = G__9443;
sum__9438 = G__9444;
continue;
}
} else
{return sum__9438;
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
var concat__9470 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9471 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9472 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9462 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9462))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9462),concat.call(null,cljs.core.rest.call(null,s__9462),y));
} else
{return y;
}
})));
});
var concat__9473 = (function() { 
var G__9479__delegate = function (x,y,zs){
var cat__9469 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9466 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9466))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9466),cat.call(null,cljs.core.rest.call(null,xys__9466),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9469.call(null,concat.call(null,x,y),zs);
};
var G__9479 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9479__delegate.call(this, x, y, zs);
};
G__9479.cljs$lang$maxFixedArity = 2;
G__9479.cljs$lang$applyTo = (function (arglist__9484){
var x = cljs.core.first(arglist__9484);
var y = cljs.core.first(cljs.core.next(arglist__9484));
var zs = cljs.core.rest(cljs.core.next(arglist__9484));
return G__9479__delegate.call(this, x, y, zs);
});
return G__9479;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9470.call(this);
case  1 :
return concat__9471.call(this,x);
case  2 :
return concat__9472.call(this,x,y);
default:
return concat__9473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9473.cljs$lang$applyTo;
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
var list_STAR___9506 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___9508 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___9510 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___9512 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___9513 = (function() { 
var G__9516__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9516 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9516__delegate.call(this, a, b, c, d, more);
};
G__9516.cljs$lang$maxFixedArity = 4;
G__9516.cljs$lang$applyTo = (function (arglist__9518){
var a = cljs.core.first(arglist__9518);
var b = cljs.core.first(cljs.core.next(arglist__9518));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9518)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9518))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9518))));
return G__9516__delegate.call(this, a, b, c, d, more);
});
return G__9516;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___9506.call(this,a);
case  2 :
return list_STAR___9508.call(this,a,b);
case  3 :
return list_STAR___9510.call(this,a,b,c);
case  4 :
return list_STAR___9512.call(this,a,b,c,d);
default:
return list_STAR___9513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___9513.cljs$lang$applyTo;
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
var apply__9606 = (function (f,args){
var fixed_arity__9525 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__9525 + 1)) <= fixed_arity__9525)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__9607 = (function (f,x,args){
var arglist__9535 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9536 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9535,fixed_arity__9536) <= fixed_arity__9536)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9535));
} else
{return f.cljs$lang$applyTo(arglist__9535);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9535));
}
});
var apply__9608 = (function (f,x,y,args){
var arglist__9543 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9544 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9543,fixed_arity__9544) <= fixed_arity__9544)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9543));
} else
{return f.cljs$lang$applyTo(arglist__9543);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9543));
}
});
var apply__9609 = (function (f,x,y,z,args){
var arglist__9553 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9554 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9553,fixed_arity__9554) <= fixed_arity__9554)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9553));
} else
{return f.cljs$lang$applyTo(arglist__9553);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9553));
}
});
var apply__9610 = (function() { 
var G__9624__delegate = function (f,a,b,c,d,args){
var arglist__9573 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9576 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9573,fixed_arity__9576) <= fixed_arity__9576)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9573));
} else
{return f.cljs$lang$applyTo(arglist__9573);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9573));
}
};
var G__9624 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9624__delegate.call(this, f, a, b, c, d, args);
};
G__9624.cljs$lang$maxFixedArity = 5;
G__9624.cljs$lang$applyTo = (function (arglist__9629){
var f = cljs.core.first(arglist__9629);
var a = cljs.core.first(cljs.core.next(arglist__9629));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9629)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9629))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9629)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9629)))));
return G__9624__delegate.call(this, f, a, b, c, d, args);
});
return G__9624;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__9606.call(this,f,a);
case  3 :
return apply__9607.call(this,f,a,b);
case  4 :
return apply__9608.call(this,f,a,b,c);
case  5 :
return apply__9609.call(this,f,a,b,c,d);
default:
return apply__9610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__9610.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9634){
var obj = cljs.core.first(arglist__9634);
var f = cljs.core.first(cljs.core.next(arglist__9634));
var args = cljs.core.rest(cljs.core.next(arglist__9634));
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
var not_EQ___9639 = (function (x){
return false;
});
var not_EQ___9641 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___9643 = (function() { 
var G__9648__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9648 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9648__delegate.call(this, x, y, more);
};
G__9648.cljs$lang$maxFixedArity = 2;
G__9648.cljs$lang$applyTo = (function (arglist__9651){
var x = cljs.core.first(arglist__9651);
var y = cljs.core.first(cljs.core.next(arglist__9651));
var more = cljs.core.rest(cljs.core.next(arglist__9651));
return G__9648__delegate.call(this, x, y, more);
});
return G__9648;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___9639.call(this,x);
case  2 :
return not_EQ___9641.call(this,x,y);
default:
return not_EQ___9643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___9643.cljs$lang$applyTo;
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
var G__9665 = pred;
var G__9666 = cljs.core.next.call(null,coll);
pred = G__9665;
coll = G__9666;
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
{var or__3548__auto____9667 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____9667))
{return or__3548__auto____9667;
} else
{{
var G__9684 = pred;
var G__9685 = cljs.core.next.call(null,coll);
pred = G__9684;
coll = G__9685;
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
var G__9814 = null;
var G__9814__9815 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9814__9816 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9814__9817 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9814__9818 = (function() { 
var G__9826__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9826 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9826__delegate.call(this, x, y, zs);
};
G__9826.cljs$lang$maxFixedArity = 2;
G__9826.cljs$lang$applyTo = (function (arglist__9828){
var x = cljs.core.first(arglist__9828);
var y = cljs.core.first(cljs.core.next(arglist__9828));
var zs = cljs.core.rest(cljs.core.next(arglist__9828));
return G__9826__delegate.call(this, x, y, zs);
});
return G__9826;
})()
;
G__9814 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__9814__9815.call(this);
case  1 :
return G__9814__9816.call(this,x);
case  2 :
return G__9814__9817.call(this,x,y);
default:
return G__9814__9818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9814.cljs$lang$maxFixedArity = 2;
G__9814.cljs$lang$applyTo = G__9814__9818.cljs$lang$applyTo;
return G__9814;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9830__delegate = function (args){
return x;
};
var G__9830 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9830__delegate.call(this, args);
};
G__9830.cljs$lang$maxFixedArity = 0;
G__9830.cljs$lang$applyTo = (function (arglist__9831){
var args = cljs.core.seq( arglist__9831 );;
return G__9830__delegate.call(this, args);
});
return G__9830;
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
var comp__9842 = (function (){
return cljs.core.identity;
});
var comp__9843 = (function (f){
return f;
});
var comp__9844 = (function (f,g){
return (function() {
var G__9848 = null;
var G__9848__9849 = (function (){
return f.call(null,g.call(null));
});
var G__9848__9851 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9848__9852 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9848__9853 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9848__9855 = (function() { 
var G__9860__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9860 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9860__delegate.call(this, x, y, z, args);
};
G__9860.cljs$lang$maxFixedArity = 3;
G__9860.cljs$lang$applyTo = (function (arglist__9862){
var x = cljs.core.first(arglist__9862);
var y = cljs.core.first(cljs.core.next(arglist__9862));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9862)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9862)));
return G__9860__delegate.call(this, x, y, z, args);
});
return G__9860;
})()
;
G__9848 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9848__9849.call(this);
case  1 :
return G__9848__9851.call(this,x);
case  2 :
return G__9848__9852.call(this,x,y);
case  3 :
return G__9848__9853.call(this,x,y,z);
default:
return G__9848__9855.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9848.cljs$lang$maxFixedArity = 3;
G__9848.cljs$lang$applyTo = G__9848__9855.cljs$lang$applyTo;
return G__9848;
})()
});
var comp__9845 = (function (f,g,h){
return (function() {
var G__9864 = null;
var G__9864__9865 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9864__9866 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9864__9867 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9864__9868 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9864__9869 = (function() { 
var G__9871__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9871 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9871__delegate.call(this, x, y, z, args);
};
G__9871.cljs$lang$maxFixedArity = 3;
G__9871.cljs$lang$applyTo = (function (arglist__9872){
var x = cljs.core.first(arglist__9872);
var y = cljs.core.first(cljs.core.next(arglist__9872));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9872)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9872)));
return G__9871__delegate.call(this, x, y, z, args);
});
return G__9871;
})()
;
G__9864 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9864__9865.call(this);
case  1 :
return G__9864__9866.call(this,x);
case  2 :
return G__9864__9867.call(this,x,y);
case  3 :
return G__9864__9868.call(this,x,y,z);
default:
return G__9864__9869.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9864.cljs$lang$maxFixedArity = 3;
G__9864.cljs$lang$applyTo = G__9864__9869.cljs$lang$applyTo;
return G__9864;
})()
});
var comp__9846 = (function() { 
var G__9875__delegate = function (f1,f2,f3,fs){
var fs__9837 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__9876__delegate = function (args){
var ret__9838 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9837),args);
var fs__9840 = cljs.core.next.call(null,fs__9837);

while(true){
if(cljs.core.truth_(fs__9840))
{{
var G__9879 = cljs.core.first.call(null,fs__9840).call(null,ret__9838);
var G__9880 = cljs.core.next.call(null,fs__9840);
ret__9838 = G__9879;
fs__9840 = G__9880;
continue;
}
} else
{return ret__9838;
}
break;
}
};
var G__9876 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9876__delegate.call(this, args);
};
G__9876.cljs$lang$maxFixedArity = 0;
G__9876.cljs$lang$applyTo = (function (arglist__9883){
var args = cljs.core.seq( arglist__9883 );;
return G__9876__delegate.call(this, args);
});
return G__9876;
})()
;
};
var G__9875 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9875__delegate.call(this, f1, f2, f3, fs);
};
G__9875.cljs$lang$maxFixedArity = 3;
G__9875.cljs$lang$applyTo = (function (arglist__9884){
var f1 = cljs.core.first(arglist__9884);
var f2 = cljs.core.first(cljs.core.next(arglist__9884));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9884)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9884)));
return G__9875__delegate.call(this, f1, f2, f3, fs);
});
return G__9875;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__9842.call(this);
case  1 :
return comp__9843.call(this,f1);
case  2 :
return comp__9844.call(this,f1,f2);
case  3 :
return comp__9845.call(this,f1,f2,f3);
default:
return comp__9846.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__9846.cljs$lang$applyTo;
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
var partial__9989 = (function (f,arg1){
return (function() { 
var G__9994__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9994 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9994__delegate.call(this, args);
};
G__9994.cljs$lang$maxFixedArity = 0;
G__9994.cljs$lang$applyTo = (function (arglist__9995){
var args = cljs.core.seq( arglist__9995 );;
return G__9994__delegate.call(this, args);
});
return G__9994;
})()
;
});
var partial__9990 = (function (f,arg1,arg2){
return (function() { 
var G__9996__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9996 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9996__delegate.call(this, args);
};
G__9996.cljs$lang$maxFixedArity = 0;
G__9996.cljs$lang$applyTo = (function (arglist__9998){
var args = cljs.core.seq( arglist__9998 );;
return G__9996__delegate.call(this, args);
});
return G__9996;
})()
;
});
var partial__9991 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9999__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9999 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9999__delegate.call(this, args);
};
G__9999.cljs$lang$maxFixedArity = 0;
G__9999.cljs$lang$applyTo = (function (arglist__10001){
var args = cljs.core.seq( arglist__10001 );;
return G__9999__delegate.call(this, args);
});
return G__9999;
})()
;
});
var partial__9992 = (function() { 
var G__10003__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10004__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10004 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10004__delegate.call(this, args);
};
G__10004.cljs$lang$maxFixedArity = 0;
G__10004.cljs$lang$applyTo = (function (arglist__10007){
var args = cljs.core.seq( arglist__10007 );;
return G__10004__delegate.call(this, args);
});
return G__10004;
})()
;
};
var G__10003 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10003__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10003.cljs$lang$maxFixedArity = 4;
G__10003.cljs$lang$applyTo = (function (arglist__10008){
var f = cljs.core.first(arglist__10008);
var arg1 = cljs.core.first(cljs.core.next(arglist__10008));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10008)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10008))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10008))));
return G__10003__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10003;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__9989.call(this,f,arg1);
case  3 :
return partial__9990.call(this,f,arg1,arg2);
case  4 :
return partial__9991.call(this,f,arg1,arg2,arg3);
default:
return partial__9992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__9992.cljs$lang$applyTo;
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
var fnil__10225 = (function (f,x){
return (function() {
var G__10229 = null;
var G__10229__10230 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10229__10231 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10229__10232 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10229__10233 = (function() { 
var G__10235__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10235 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10235__delegate.call(this, a, b, c, ds);
};
G__10235.cljs$lang$maxFixedArity = 3;
G__10235.cljs$lang$applyTo = (function (arglist__10237){
var a = cljs.core.first(arglist__10237);
var b = cljs.core.first(cljs.core.next(arglist__10237));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10237)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10237)));
return G__10235__delegate.call(this, a, b, c, ds);
});
return G__10235;
})()
;
G__10229 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10229__10230.call(this,a);
case  2 :
return G__10229__10231.call(this,a,b);
case  3 :
return G__10229__10232.call(this,a,b,c);
default:
return G__10229__10233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10229.cljs$lang$maxFixedArity = 3;
G__10229.cljs$lang$applyTo = G__10229__10233.cljs$lang$applyTo;
return G__10229;
})()
});
var fnil__10226 = (function (f,x,y){
return (function() {
var G__10244 = null;
var G__10244__10245 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10244__10246 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10244__10247 = (function() { 
var G__10252__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10252 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10252__delegate.call(this, a, b, c, ds);
};
G__10252.cljs$lang$maxFixedArity = 3;
G__10252.cljs$lang$applyTo = (function (arglist__10260){
var a = cljs.core.first(arglist__10260);
var b = cljs.core.first(cljs.core.next(arglist__10260));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10260)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10260)));
return G__10252__delegate.call(this, a, b, c, ds);
});
return G__10252;
})()
;
G__10244 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10244__10245.call(this,a,b);
case  3 :
return G__10244__10246.call(this,a,b,c);
default:
return G__10244__10247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10244.cljs$lang$maxFixedArity = 3;
G__10244.cljs$lang$applyTo = G__10244__10247.cljs$lang$applyTo;
return G__10244;
})()
});
var fnil__10227 = (function (f,x,y,z){
return (function() {
var G__10261 = null;
var G__10261__10262 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10261__10263 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10261__10265 = (function() { 
var G__10268__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10268 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10268__delegate.call(this, a, b, c, ds);
};
G__10268.cljs$lang$maxFixedArity = 3;
G__10268.cljs$lang$applyTo = (function (arglist__10274){
var a = cljs.core.first(arglist__10274);
var b = cljs.core.first(cljs.core.next(arglist__10274));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10274)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10274)));
return G__10268__delegate.call(this, a, b, c, ds);
});
return G__10268;
})()
;
G__10261 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10261__10262.call(this,a,b);
case  3 :
return G__10261__10263.call(this,a,b,c);
default:
return G__10261__10265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10261.cljs$lang$maxFixedArity = 3;
G__10261.cljs$lang$applyTo = G__10261__10265.cljs$lang$applyTo;
return G__10261;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10225.call(this,f,x);
case  3 :
return fnil__10226.call(this,f,x,y);
case  4 :
return fnil__10227.call(this,f,x,y,z);
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
var temp__3698__auto____10280 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10280))
{var s__10281 = temp__3698__auto____10280;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10281)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10281)));
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
var temp__3698__auto____10332 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10332))
{var s__10334 = temp__3698__auto____10332;

var x__10335 = f.call(null,cljs.core.first.call(null,s__10334));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10335)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10334));
} else
{return cljs.core.cons.call(null,x__10335,keep.call(null,f,cljs.core.rest.call(null,s__10334)));
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
var keepi__10406 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10391 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10391))
{var s__10402 = temp__3698__auto____10391;

var x__10405 = f.call(null,idx,cljs.core.first.call(null,s__10402));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10405)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10402));
} else
{return cljs.core.cons.call(null,x__10405,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10402)));
}
} else
{return null;
}
})));
});

return keepi__10406.call(null,0,coll);
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
var every_pred__10822 = (function (p){
return (function() {
var ep1 = null;
var ep1__10828 = (function (){
return true;
});
var ep1__10829 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10830 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10477 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10477))
{return p.call(null,y);
} else
{return and__3546__auto____10477;
}
})());
});
var ep1__10831 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10478 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10478))
{var and__3546__auto____10479 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10479))
{return p.call(null,z);
} else
{return and__3546__auto____10479;
}
} else
{return and__3546__auto____10478;
}
})());
});
var ep1__10832 = (function() { 
var G__10839__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10480 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10480))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10480;
}
})());
};
var G__10839 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10839__delegate.call(this, x, y, z, args);
};
G__10839.cljs$lang$maxFixedArity = 3;
G__10839.cljs$lang$applyTo = (function (arglist__10845){
var x = cljs.core.first(arglist__10845);
var y = cljs.core.first(cljs.core.next(arglist__10845));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10845)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10845)));
return G__10839__delegate.call(this, x, y, z, args);
});
return G__10839;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10828.call(this);
case  1 :
return ep1__10829.call(this,x);
case  2 :
return ep1__10830.call(this,x,y);
case  3 :
return ep1__10831.call(this,x,y,z);
default:
return ep1__10832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10832.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10823 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10848 = (function (){
return true;
});
var ep2__10849 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10481 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10481))
{return p2.call(null,x);
} else
{return and__3546__auto____10481;
}
})());
});
var ep2__10851 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10482 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10482))
{var and__3546__auto____10483 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10483))
{var and__3546__auto____10484 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10484))
{return p2.call(null,y);
} else
{return and__3546__auto____10484;
}
} else
{return and__3546__auto____10483;
}
} else
{return and__3546__auto____10482;
}
})());
});
var ep2__10852 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10486 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10486))
{var and__3546__auto____10487 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10487))
{var and__3546__auto____10488 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10488))
{var and__3546__auto____10490 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10490))
{var and__3546__auto____10491 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10491))
{return p2.call(null,z);
} else
{return and__3546__auto____10491;
}
} else
{return and__3546__auto____10490;
}
} else
{return and__3546__auto____10488;
}
} else
{return and__3546__auto____10487;
}
} else
{return and__3546__auto____10486;
}
})());
});
var ep2__10853 = (function() { 
var G__10864__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10492 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10492))
{return cljs.core.every_QMARK_.call(null,(function (p1__10348_SHARP_){
var and__3546__auto____10493 = p1.call(null,p1__10348_SHARP_);

if(cljs.core.truth_(and__3546__auto____10493))
{return p2.call(null,p1__10348_SHARP_);
} else
{return and__3546__auto____10493;
}
}),args);
} else
{return and__3546__auto____10492;
}
})());
};
var G__10864 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10864__delegate.call(this, x, y, z, args);
};
G__10864.cljs$lang$maxFixedArity = 3;
G__10864.cljs$lang$applyTo = (function (arglist__10870){
var x = cljs.core.first(arglist__10870);
var y = cljs.core.first(cljs.core.next(arglist__10870));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10870)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10870)));
return G__10864__delegate.call(this, x, y, z, args);
});
return G__10864;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10848.call(this);
case  1 :
return ep2__10849.call(this,x);
case  2 :
return ep2__10851.call(this,x,y);
case  3 :
return ep2__10852.call(this,x,y,z);
default:
return ep2__10853.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10853.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10824 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10877 = (function (){
return true;
});
var ep3__10878 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10494 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10494))
{var and__3546__auto____10495 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10495))
{return p3.call(null,x);
} else
{return and__3546__auto____10495;
}
} else
{return and__3546__auto____10494;
}
})());
});
var ep3__10879 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10500 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10500))
{var and__3546__auto____10501 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10501))
{var and__3546__auto____10502 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10502))
{var and__3546__auto____10503 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10503))
{var and__3546__auto____10504 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10504))
{return p3.call(null,y);
} else
{return and__3546__auto____10504;
}
} else
{return and__3546__auto____10503;
}
} else
{return and__3546__auto____10502;
}
} else
{return and__3546__auto____10501;
}
} else
{return and__3546__auto____10500;
}
})());
});
var ep3__10880 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10505 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10505))
{var and__3546__auto____10506 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10506))
{var and__3546__auto____10507 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10507))
{var and__3546__auto____10508 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10508))
{var and__3546__auto____10509 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10509))
{var and__3546__auto____10510 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10510))
{var and__3546__auto____10511 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10511))
{var and__3546__auto____10512 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10512))
{return p3.call(null,z);
} else
{return and__3546__auto____10512;
}
} else
{return and__3546__auto____10511;
}
} else
{return and__3546__auto____10510;
}
} else
{return and__3546__auto____10509;
}
} else
{return and__3546__auto____10508;
}
} else
{return and__3546__auto____10507;
}
} else
{return and__3546__auto____10506;
}
} else
{return and__3546__auto____10505;
}
})());
});
var ep3__10881 = (function() { 
var G__10901__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10514 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10514))
{return cljs.core.every_QMARK_.call(null,(function (p1__10350_SHARP_){
var and__3546__auto____10558 = p1.call(null,p1__10350_SHARP_);

if(cljs.core.truth_(and__3546__auto____10558))
{var and__3546__auto____10560 = p2.call(null,p1__10350_SHARP_);

if(cljs.core.truth_(and__3546__auto____10560))
{return p3.call(null,p1__10350_SHARP_);
} else
{return and__3546__auto____10560;
}
} else
{return and__3546__auto____10558;
}
}),args);
} else
{return and__3546__auto____10514;
}
})());
};
var G__10901 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10901__delegate.call(this, x, y, z, args);
};
G__10901.cljs$lang$maxFixedArity = 3;
G__10901.cljs$lang$applyTo = (function (arglist__10914){
var x = cljs.core.first(arglist__10914);
var y = cljs.core.first(cljs.core.next(arglist__10914));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10914)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10914)));
return G__10901__delegate.call(this, x, y, z, args);
});
return G__10901;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10877.call(this);
case  1 :
return ep3__10878.call(this,x);
case  2 :
return ep3__10879.call(this,x,y);
case  3 :
return ep3__10880.call(this,x,y,z);
default:
return ep3__10881.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10881.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10825 = (function() { 
var G__10916__delegate = function (p1,p2,p3,ps){
var ps__10561 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10918 = (function (){
return true;
});
var epn__10919 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10367_SHARP_){
return p1__10367_SHARP_.call(null,x);
}),ps__10561);
});
var epn__10920 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10368_SHARP_){
var and__3546__auto____10564 = p1__10368_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10564))
{return p1__10368_SHARP_.call(null,y);
} else
{return and__3546__auto____10564;
}
}),ps__10561);
});
var epn__10921 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10369_SHARP_){
var and__3546__auto____10811 = p1__10369_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10811))
{var and__3546__auto____10812 = p1__10369_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10812))
{return p1__10369_SHARP_.call(null,z);
} else
{return and__3546__auto____10812;
}
} else
{return and__3546__auto____10811;
}
}),ps__10561);
});
var epn__10922 = (function() { 
var G__10931__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10816 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10816))
{return cljs.core.every_QMARK_.call(null,(function (p1__10370_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10370_SHARP_,args);
}),ps__10561);
} else
{return and__3546__auto____10816;
}
})());
};
var G__10931 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10931__delegate.call(this, x, y, z, args);
};
G__10931.cljs$lang$maxFixedArity = 3;
G__10931.cljs$lang$applyTo = (function (arglist__10933){
var x = cljs.core.first(arglist__10933);
var y = cljs.core.first(cljs.core.next(arglist__10933));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10933)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10933)));
return G__10931__delegate.call(this, x, y, z, args);
});
return G__10931;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10918.call(this);
case  1 :
return epn__10919.call(this,x);
case  2 :
return epn__10920.call(this,x,y);
case  3 :
return epn__10921.call(this,x,y,z);
default:
return epn__10922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10922.cljs$lang$applyTo;
return epn;
})()
};
var G__10916 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10916__delegate.call(this, p1, p2, p3, ps);
};
G__10916.cljs$lang$maxFixedArity = 3;
G__10916.cljs$lang$applyTo = (function (arglist__10936){
var p1 = cljs.core.first(arglist__10936);
var p2 = cljs.core.first(cljs.core.next(arglist__10936));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10936)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10936)));
return G__10916__delegate.call(this, p1, p2, p3, ps);
});
return G__10916;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10822.call(this,p1);
case  2 :
return every_pred__10823.call(this,p1,p2);
case  3 :
return every_pred__10824.call(this,p1,p2,p3);
default:
return every_pred__10825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10825.cljs$lang$applyTo;
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
var some_fn__11187 = (function (p){
return (function() {
var sp1 = null;
var sp1__11193 = (function (){
return null;
});
var sp1__11194 = (function (x){
return p.call(null,x);
});
var sp1__11195 = (function (x,y){
var or__3548__auto____10956 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10956))
{return or__3548__auto____10956;
} else
{return p.call(null,y);
}
});
var sp1__11196 = (function (x,y,z){
var or__3548__auto____10960 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10960))
{return or__3548__auto____10960;
} else
{var or__3548__auto____10963 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10963))
{return or__3548__auto____10963;
} else
{return p.call(null,z);
}
}
});
var sp1__11197 = (function() { 
var G__11202__delegate = function (x,y,z,args){
var or__3548__auto____10967 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10967))
{return or__3548__auto____10967;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11202 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11202__delegate.call(this, x, y, z, args);
};
G__11202.cljs$lang$maxFixedArity = 3;
G__11202.cljs$lang$applyTo = (function (arglist__11203){
var x = cljs.core.first(arglist__11203);
var y = cljs.core.first(cljs.core.next(arglist__11203));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11203)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11203)));
return G__11202__delegate.call(this, x, y, z, args);
});
return G__11202;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11193.call(this);
case  1 :
return sp1__11194.call(this,x);
case  2 :
return sp1__11195.call(this,x,y);
case  3 :
return sp1__11196.call(this,x,y,z);
default:
return sp1__11197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11197.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11188 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11206 = (function (){
return null;
});
var sp2__11207 = (function (x){
var or__3548__auto____10969 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10969))
{return or__3548__auto____10969;
} else
{return p2.call(null,x);
}
});
var sp2__11208 = (function (x,y){
var or__3548__auto____10970 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10970))
{return or__3548__auto____10970;
} else
{var or__3548__auto____10971 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10971))
{return or__3548__auto____10971;
} else
{var or__3548__auto____10972 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10972))
{return or__3548__auto____10972;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11209 = (function (x,y,z){
var or__3548__auto____10973 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10973))
{return or__3548__auto____10973;
} else
{var or__3548__auto____10974 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10974))
{return or__3548__auto____10974;
} else
{var or__3548__auto____10975 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10975))
{return or__3548__auto____10975;
} else
{var or__3548__auto____10980 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10980))
{return or__3548__auto____10980;
} else
{var or__3548__auto____10981 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10981))
{return or__3548__auto____10981;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11210 = (function() { 
var G__11216__delegate = function (x,y,z,args){
var or__3548__auto____10986 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10986))
{return or__3548__auto____10986;
} else
{return cljs.core.some.call(null,(function (p1__10409_SHARP_){
var or__3548__auto____10989 = p1.call(null,p1__10409_SHARP_);

if(cljs.core.truth_(or__3548__auto____10989))
{return or__3548__auto____10989;
} else
{return p2.call(null,p1__10409_SHARP_);
}
}),args);
}
};
var G__11216 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11216__delegate.call(this, x, y, z, args);
};
G__11216.cljs$lang$maxFixedArity = 3;
G__11216.cljs$lang$applyTo = (function (arglist__11306){
var x = cljs.core.first(arglist__11306);
var y = cljs.core.first(cljs.core.next(arglist__11306));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11306)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11306)));
return G__11216__delegate.call(this, x, y, z, args);
});
return G__11216;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11206.call(this);
case  1 :
return sp2__11207.call(this,x);
case  2 :
return sp2__11208.call(this,x,y);
case  3 :
return sp2__11209.call(this,x,y,z);
default:
return sp2__11210.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11210.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11189 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11311 = (function (){
return null;
});
var sp3__11312 = (function (x){
var or__3548__auto____10990 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10990))
{return or__3548__auto____10990;
} else
{var or__3548__auto____11025 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11025))
{return or__3548__auto____11025;
} else
{return p3.call(null,x);
}
}
});
var sp3__11313 = (function (x,y){
var or__3548__auto____11026 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11026))
{return or__3548__auto____11026;
} else
{var or__3548__auto____11027 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11027))
{return or__3548__auto____11027;
} else
{var or__3548__auto____11029 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11029))
{return or__3548__auto____11029;
} else
{var or__3548__auto____11030 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11030))
{return or__3548__auto____11030;
} else
{var or__3548__auto____11031 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11031))
{return or__3548__auto____11031;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11314 = (function (x,y,z){
var or__3548__auto____11033 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11033))
{return or__3548__auto____11033;
} else
{var or__3548__auto____11035 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11035))
{return or__3548__auto____11035;
} else
{var or__3548__auto____11036 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11036))
{return or__3548__auto____11036;
} else
{var or__3548__auto____11037 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11037))
{return or__3548__auto____11037;
} else
{var or__3548__auto____11038 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11038))
{return or__3548__auto____11038;
} else
{var or__3548__auto____11039 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11039))
{return or__3548__auto____11039;
} else
{var or__3548__auto____11040 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11040))
{return or__3548__auto____11040;
} else
{var or__3548__auto____11042 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11042))
{return or__3548__auto____11042;
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
var sp3__11315 = (function() { 
var G__11333__delegate = function (x,y,z,args){
var or__3548__auto____11044 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11044))
{return or__3548__auto____11044;
} else
{return cljs.core.some.call(null,(function (p1__10472_SHARP_){
var or__3548__auto____11046 = p1.call(null,p1__10472_SHARP_);

if(cljs.core.truth_(or__3548__auto____11046))
{return or__3548__auto____11046;
} else
{var or__3548__auto____11049 = p2.call(null,p1__10472_SHARP_);

if(cljs.core.truth_(or__3548__auto____11049))
{return or__3548__auto____11049;
} else
{return p3.call(null,p1__10472_SHARP_);
}
}
}),args);
}
};
var G__11333 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11333__delegate.call(this, x, y, z, args);
};
G__11333.cljs$lang$maxFixedArity = 3;
G__11333.cljs$lang$applyTo = (function (arglist__11336){
var x = cljs.core.first(arglist__11336);
var y = cljs.core.first(cljs.core.next(arglist__11336));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11336)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11336)));
return G__11333__delegate.call(this, x, y, z, args);
});
return G__11333;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11311.call(this);
case  1 :
return sp3__11312.call(this,x);
case  2 :
return sp3__11313.call(this,x,y);
case  3 :
return sp3__11314.call(this,x,y,z);
default:
return sp3__11315.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11315.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11190 = (function() { 
var G__11338__delegate = function (p1,p2,p3,ps){
var ps__11089 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11341 = (function (){
return null;
});
var spn__11342 = (function (x){
return cljs.core.some.call(null,(function (p1__10473_SHARP_){
return p1__10473_SHARP_.call(null,x);
}),ps__11089);
});
var spn__11343 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10474_SHARP_){
var or__3548__auto____11091 = p1__10474_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11091))
{return or__3548__auto____11091;
} else
{return p1__10474_SHARP_.call(null,y);
}
}),ps__11089);
});
var spn__11344 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10475_SHARP_){
var or__3548__auto____11178 = p1__10475_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11178))
{return or__3548__auto____11178;
} else
{var or__3548__auto____11180 = p1__10475_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11180))
{return or__3548__auto____11180;
} else
{return p1__10475_SHARP_.call(null,z);
}
}
}),ps__11089);
});
var spn__11345 = (function() { 
var G__11353__delegate = function (x,y,z,args){
var or__3548__auto____11183 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11183))
{return or__3548__auto____11183;
} else
{return cljs.core.some.call(null,(function (p1__10476_SHARP_){
return cljs.core.some.call(null,p1__10476_SHARP_,args);
}),ps__11089);
}
};
var G__11353 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11353__delegate.call(this, x, y, z, args);
};
G__11353.cljs$lang$maxFixedArity = 3;
G__11353.cljs$lang$applyTo = (function (arglist__11357){
var x = cljs.core.first(arglist__11357);
var y = cljs.core.first(cljs.core.next(arglist__11357));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11357)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11357)));
return G__11353__delegate.call(this, x, y, z, args);
});
return G__11353;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11341.call(this);
case  1 :
return spn__11342.call(this,x);
case  2 :
return spn__11343.call(this,x,y);
case  3 :
return spn__11344.call(this,x,y,z);
default:
return spn__11345.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11345.cljs$lang$applyTo;
return spn;
})()
};
var G__11338 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11338__delegate.call(this, p1, p2, p3, ps);
};
G__11338.cljs$lang$maxFixedArity = 3;
G__11338.cljs$lang$applyTo = (function (arglist__11363){
var p1 = cljs.core.first(arglist__11363);
var p2 = cljs.core.first(cljs.core.next(arglist__11363));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11363)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11363)));
return G__11338__delegate.call(this, p1, p2, p3, ps);
});
return G__11338;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11187.call(this,p1);
case  2 :
return some_fn__11188.call(this,p1,p2);
case  3 :
return some_fn__11189.call(this,p1,p2,p3);
default:
return some_fn__11190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11190.cljs$lang$applyTo;
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
var map__11420 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11368 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11368))
{var s__11369 = temp__3698__auto____11368;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11369)),map.call(null,f,cljs.core.rest.call(null,s__11369)));
} else
{return null;
}
})));
});
var map__11421 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11371 = cljs.core.seq.call(null,c1);
var s2__11372 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11374 = s1__11371;

if(cljs.core.truth_(and__3546__auto____11374))
{return s2__11372;
} else
{return and__3546__auto____11374;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11371),cljs.core.first.call(null,s2__11372)),map.call(null,f,cljs.core.rest.call(null,s1__11371),cljs.core.rest.call(null,s2__11372)));
} else
{return null;
}
})));
});
var map__11422 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11380 = cljs.core.seq.call(null,c1);
var s2__11381 = cljs.core.seq.call(null,c2);
var s3__11382 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11383 = s1__11380;

if(cljs.core.truth_(and__3546__auto____11383))
{var and__3546__auto____11388 = s2__11381;

if(cljs.core.truth_(and__3546__auto____11388))
{return s3__11382;
} else
{return and__3546__auto____11388;
}
} else
{return and__3546__auto____11383;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11380),cljs.core.first.call(null,s2__11381),cljs.core.first.call(null,s3__11382)),map.call(null,f,cljs.core.rest.call(null,s1__11380),cljs.core.rest.call(null,s2__11381),cljs.core.rest.call(null,s3__11382)));
} else
{return null;
}
})));
});
var map__11423 = (function() { 
var G__11446__delegate = function (f,c1,c2,c3,colls){
var step__11395 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11391 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11391)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11391),step.call(null,map.call(null,cljs.core.rest,ss__11391)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10943_SHARP_){
return cljs.core.apply.call(null,f,p1__10943_SHARP_);
}),step__11395.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11446 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11446__delegate.call(this, f, c1, c2, c3, colls);
};
G__11446.cljs$lang$maxFixedArity = 4;
G__11446.cljs$lang$applyTo = (function (arglist__11450){
var f = cljs.core.first(arglist__11450);
var c1 = cljs.core.first(cljs.core.next(arglist__11450));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11450)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11450))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11450))));
return G__11446__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11446;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11420.call(this,f,c1);
case  3 :
return map__11421.call(this,f,c1,c2);
case  4 :
return map__11422.call(this,f,c1,c2,c3);
default:
return map__11423.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11423.cljs$lang$applyTo;
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
{var temp__3698__auto____11454 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11454))
{var s__11455 = temp__3698__auto____11454;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11455),take.call(null,(n - 1),cljs.core.rest.call(null,s__11455)));
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
var step__11461 = (function (n,coll){
while(true){
var s__11458 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11459 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11459))
{return s__11458;
} else
{return and__3546__auto____11459;
}
})()))
{{
var G__11466 = (n - 1);
var G__11467 = cljs.core.rest.call(null,s__11458);
n = G__11466;
coll = G__11467;
continue;
}
} else
{return s__11458;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11461.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11469 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11470 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11469.call(this,n);
case  2 :
return drop_last__11470.call(this,n,s);
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
var s__11476 = cljs.core.seq.call(null,coll);
var lead__11478 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11478))
{{
var G__11481 = cljs.core.next.call(null,s__11476);
var G__11482 = cljs.core.next.call(null,lead__11478);
s__11476 = G__11481;
lead__11478 = G__11482;
continue;
}
} else
{return s__11476;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11488 = (function (pred,coll){
while(true){
var s__11484 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11486 = s__11484;

if(cljs.core.truth_(and__3546__auto____11486))
{return pred.call(null,cljs.core.first.call(null,s__11484));
} else
{return and__3546__auto____11486;
}
})()))
{{
var G__11492 = pred;
var G__11493 = cljs.core.rest.call(null,s__11484);
pred = G__11492;
coll = G__11493;
continue;
}
} else
{return s__11484;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11488.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11501))
{var s__11502 = temp__3698__auto____11501;

return cljs.core.concat.call(null,s__11502,cycle.call(null,s__11502));
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
var repeat__11579 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11580 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11579.call(this,n);
case  2 :
return repeat__11580.call(this,n,x);
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
var repeatedly__11586 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11587 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11586.call(this,n);
case  2 :
return repeatedly__11587.call(this,n,f);
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
var interleave__11701 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11691 = cljs.core.seq.call(null,c1);
var s2__11692 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11694 = s1__11691;

if(cljs.core.truth_(and__3546__auto____11694))
{return s2__11692;
} else
{return and__3546__auto____11694;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11691),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11692),interleave.call(null,cljs.core.rest.call(null,s1__11691),cljs.core.rest.call(null,s2__11692))));
} else
{return null;
}
})));
});
var interleave__11702 = (function() { 
var G__11708__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11699 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11699)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11699),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11699)));
} else
{return null;
}
})));
};
var G__11708 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11708__delegate.call(this, c1, c2, colls);
};
G__11708.cljs$lang$maxFixedArity = 2;
G__11708.cljs$lang$applyTo = (function (arglist__11710){
var c1 = cljs.core.first(arglist__11710);
var c2 = cljs.core.first(cljs.core.next(arglist__11710));
var colls = cljs.core.rest(cljs.core.next(arglist__11710));
return G__11708__delegate.call(this, c1, c2, colls);
});
return G__11708;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11701.call(this,c1,c2);
default:
return interleave__11702.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11702.cljs$lang$applyTo;
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
var cat__11732 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11726 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11726))
{var coll__11728 = temp__3695__auto____11726;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11728),cat.call(null,cljs.core.rest.call(null,coll__11728),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11732.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11752 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11753 = (function() { 
var G__11756__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11756 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11756__delegate.call(this, f, coll, colls);
};
G__11756.cljs$lang$maxFixedArity = 2;
G__11756.cljs$lang$applyTo = (function (arglist__11758){
var f = cljs.core.first(arglist__11758);
var coll = cljs.core.first(cljs.core.next(arglist__11758));
var colls = cljs.core.rest(cljs.core.next(arglist__11758));
return G__11756__delegate.call(this, f, coll, colls);
});
return G__11756;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11752.call(this,f,coll);
default:
return mapcat__11753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11753.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11763 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11763))
{var s__11767 = temp__3698__auto____11763;

var f__11768 = cljs.core.first.call(null,s__11767);
var r__11770 = cljs.core.rest.call(null,s__11767);

if(cljs.core.truth_(pred.call(null,f__11768)))
{return cljs.core.cons.call(null,f__11768,filter.call(null,pred,r__11770));
} else
{return filter.call(null,pred,r__11770);
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
var walk__11775 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11775.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11771_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11771_SHARP_));
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
var partition__11801 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11802 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11793 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11793))
{var s__11794 = temp__3698__auto____11793;

var p__11796 = cljs.core.take.call(null,n,s__11794);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11796))))
{return cljs.core.cons.call(null,p__11796,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11794)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11803 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11798 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11798))
{var s__11799 = temp__3698__auto____11798;

var p__11800 = cljs.core.take.call(null,n,s__11799);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11800))))
{return cljs.core.cons.call(null,p__11800,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11799)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11800,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11801.call(this,n,step);
case  3 :
return partition__11802.call(this,n,step,pad);
case  4 :
return partition__11803.call(this,n,step,pad,coll);
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
var get_in__11816 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11817 = (function (m,ks,not_found){
var sentinel__11808 = cljs.core.lookup_sentinel;
var m__11809 = m;
var ks__11810 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11810))
{var m__11812 = cljs.core.get.call(null,m__11809,cljs.core.first.call(null,ks__11810),sentinel__11808);

if(cljs.core.truth_((sentinel__11808 === m__11812)))
{return not_found;
} else
{{
var G__11820 = sentinel__11808;
var G__11821 = m__11812;
var G__11822 = cljs.core.next.call(null,ks__11810);
sentinel__11808 = G__11820;
m__11809 = G__11821;
ks__11810 = G__11822;
continue;
}
}
} else
{return m__11809;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11816.call(this,m,ks);
case  3 :
return get_in__11817.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11824,v){
var vec__11826__11827 = p__11824;
var k__11828 = cljs.core.nth.call(null,vec__11826__11827,0,null);
var ks__11829 = cljs.core.nthnext.call(null,vec__11826__11827,1);

if(cljs.core.truth_(ks__11829))
{return cljs.core.assoc.call(null,m,k__11828,assoc_in.call(null,cljs.core.get.call(null,m,k__11828),ks__11829,v));
} else
{return cljs.core.assoc.call(null,m,k__11828,v);
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
var update_in__delegate = function (m,p__11847,f,args){
var vec__11849__11852 = p__11847;
var k__11853 = cljs.core.nth.call(null,vec__11849__11852,0,null);
var ks__11855 = cljs.core.nthnext.call(null,vec__11849__11852,1);

if(cljs.core.truth_(ks__11855))
{return cljs.core.assoc.call(null,m,k__11853,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11853),ks__11855,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11853,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11853),args));
}
};
var update_in = function (m,p__11847,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11847, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11861){
var m = cljs.core.first(arglist__11861);
var p__11847 = cljs.core.first(cljs.core.next(arglist__11861));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11861)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11861)));
return update_in__delegate.call(this, m, p__11847, f, args);
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
var this__11878 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11947 = null;
var G__11947__11949 = (function (coll,k){
var this__11881 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11947__11950 = (function (coll,k,not_found){
var this__11884 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11947 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11947__11949.call(this,coll,k);
case  3 :
return G__11947__11950.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11947;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11886 = this;
var new_array__11890 = cljs.core.aclone.call(null,this__11886.array);

(new_array__11890[k] = v);
return (new cljs.core.Vector(this__11886.meta,new_array__11890));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__11964 = null;
var G__11964__11966 = (function (coll,k){
var this__11896 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11964__11967 = (function (coll,k,not_found){
var this__11897 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11964 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11964__11966.call(this,coll,k);
case  3 :
return G__11964__11967.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11964;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11900 = this;
var new_array__11901 = cljs.core.aclone.call(null,this__11900.array);

new_array__11901.push(o);
return (new cljs.core.Vector(this__11900.meta,new_array__11901));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11976 = null;
var G__11976__11977 = (function (v,f){
var this__11903 = this;
return cljs.core.ci_reduce.call(null,this__11903.array,f);
});
var G__11976__11978 = (function (v,f,start){
var this__11904 = this;
return cljs.core.ci_reduce.call(null,this__11904.array,f,start);
});
G__11976 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__11976__11977.call(this,v,f);
case  3 :
return G__11976__11978.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11976;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11910 = this;
if(cljs.core.truth_((this__11910.array.length > 0)))
{var vector_seq__11912 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11910.array.length)))
{return cljs.core.cons.call(null,(this__11910.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11912.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11914 = this;
return this__11914.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11916 = this;
var count__11918 = this__11916.array.length;

if(cljs.core.truth_((count__11918 > 0)))
{return (this__11916.array[(count__11918 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11921 = this;
if(cljs.core.truth_((this__11921.array.length > 0)))
{var new_array__11924 = cljs.core.aclone.call(null,this__11921.array);

new_array__11924.pop();
return (new cljs.core.Vector(this__11921.meta,new_array__11924));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11926 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11929 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11931 = this;
return (new cljs.core.Vector(meta,this__11931.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11934 = this;
return this__11934.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11990 = null;
var G__11990__11991 = (function (coll,n){
var this__11936 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11941 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11941))
{return (n < this__11936.array.length);
} else
{return and__3546__auto____11941;
}
})()))
{return (this__11936.array[n]);
} else
{return null;
}
});
var G__11990__11993 = (function (coll,n,not_found){
var this__11942 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11943 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11943))
{return (n < this__11942.array.length);
} else
{return and__3546__auto____11943;
}
})()))
{return (this__11942.array[n]);
} else
{return not_found;
}
});
G__11990 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11990__11991.call(this,coll,n);
case  3 :
return G__11990__11993.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11990;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11945 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11945.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12013){
var args = cljs.core.seq( arglist__12013 );;
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
var this__12027 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12098 = null;
var G__12098__12103 = (function (coll,k){
var this__12028 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12098__12104 = (function (coll,k,not_found){
var this__12029 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12098 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12098__12103.call(this,coll,k);
case  3 :
return G__12098__12104.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12098;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12031 = this;
var v_pos__12032 = (this__12031.start + key);

return (new cljs.core.Subvec(this__12031.meta,cljs.core._assoc.call(null,this__12031.v,v_pos__12032,val),this__12031.start,((this__12031.end > (v_pos__12032 + 1)) ? this__12031.end : (v_pos__12032 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12109 = null;
var G__12109__12110 = (function (coll,k){
var this__12041 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12109__12111 = (function (coll,k,not_found){
var this__12043 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12109 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12109__12110.call(this,coll,k);
case  3 :
return G__12109__12111.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12109;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12047 = this;
return (new cljs.core.Subvec(this__12047.meta,cljs.core._assoc_n.call(null,this__12047.v,this__12047.end,o),this__12047.start,(this__12047.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12115 = null;
var G__12115__12116 = (function (coll,f){
var this__12055 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12115__12117 = (function (coll,f,start){
var this__12058 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12115 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12115__12116.call(this,coll,f);
case  3 :
return G__12115__12117.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12115;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12066 = this;
var subvec_seq__12068 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12066.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12066.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12068.call(null,this__12066.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12070 = this;
return (this__12070.end - this__12070.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12072 = this;
return cljs.core._nth.call(null,this__12072.v,(this__12072.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12075 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12075.start,this__12075.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12075.meta,this__12075.v,this__12075.start,(this__12075.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12078 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12081 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12084 = this;
return (new cljs.core.Subvec(meta,this__12084.v,this__12084.start,this__12084.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12088 = this;
return this__12088.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12141 = null;
var G__12141__12142 = (function (coll,n){
var this__12089 = this;
return cljs.core._nth.call(null,this__12089.v,(this__12089.start + n));
});
var G__12141__12143 = (function (coll,n,not_found){
var this__12090 = this;
return cljs.core._nth.call(null,this__12090.v,(this__12090.start + n),not_found);
});
G__12141 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12141__12142.call(this,coll,n);
case  3 :
return G__12141__12143.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12141;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12093 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12093.meta);
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
var subvec__12158 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12159 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12158.call(this,v,start);
case  3 :
return subvec__12159.call(this,v,start,end);
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
var this__12175 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12176 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12177 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12178 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12178.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12179 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12180 = this;
return cljs.core._first.call(null,this__12180.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12181 = this;
var temp__3695__auto____12183 = cljs.core.next.call(null,this__12181.front);

if(cljs.core.truth_(temp__3695__auto____12183))
{var f1__12187 = temp__3695__auto____12183;

return (new cljs.core.PersistentQueueSeq(this__12181.meta,f1__12187,this__12181.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12181.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12181.meta,this__12181.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12188 = this;
return this__12188.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12189 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12189.front,this__12189.rear));
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
var this__12215 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12216 = this;
if(cljs.core.truth_(this__12216.front))
{return (new cljs.core.PersistentQueue(this__12216.meta,(this__12216.count + 1),this__12216.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12223 = this__12216.rear;

if(cljs.core.truth_(or__3548__auto____12223))
{return or__3548__auto____12223;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12216.meta,(this__12216.count + 1),cljs.core.conj.call(null,this__12216.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12224 = this;
var rear__12226 = cljs.core.seq.call(null,this__12224.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12227 = this__12224.front;

if(cljs.core.truth_(or__3548__auto____12227))
{return or__3548__auto____12227;
} else
{return rear__12226;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12224.front,cljs.core.seq.call(null,rear__12226)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12228 = this;
return this__12228.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12229 = this;
return cljs.core._first.call(null,this__12229.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12231 = this;
if(cljs.core.truth_(this__12231.front))
{var temp__3695__auto____12234 = cljs.core.next.call(null,this__12231.front);

if(cljs.core.truth_(temp__3695__auto____12234))
{var f1__12235 = temp__3695__auto____12234;

return (new cljs.core.PersistentQueue(this__12231.meta,(this__12231.count - 1),f1__12235,this__12231.rear));
} else
{return (new cljs.core.PersistentQueue(this__12231.meta,(this__12231.count - 1),cljs.core.seq.call(null,this__12231.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12239 = this;
return cljs.core.first.call(null,this__12239.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12240 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12244 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12247 = this;
return (new cljs.core.PersistentQueue(meta,this__12247.count,this__12247.front,this__12247.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12248 = this;
return this__12248.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12250 = this;
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
var this__12275 = this;
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
var len__12306 = array.length;

var i__12307 = 0;

while(true){
if(cljs.core.truth_((i__12307 < len__12306)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12307]))))
{return i__12307;
} else
{{
var G__12308 = (i__12307 + incr);
i__12307 = G__12308;
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
var obj_map_contains_key_QMARK___12315 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12317 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12310 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12310))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12310;
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
return obj_map_contains_key_QMARK___12315.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12317.call(this,k,strobj,true_val,false_val);
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
var this__12336 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12491 = null;
var G__12491__12492 = (function (coll,k){
var this__12337 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12491__12493 = (function (coll,k,not_found){
var this__12352 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12352.strobj,(this__12352.strobj[k]),not_found);
});
G__12491 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12491__12492.call(this,coll,k);
case  3 :
return G__12491__12493.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12491;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12359 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12362 = goog.object.clone.call(null,this__12359.strobj);
var overwrite_QMARK___12364 = new_strobj__12362.hasOwnProperty(k);

(new_strobj__12362[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12364))
{return (new cljs.core.ObjMap(this__12359.meta,this__12359.keys,new_strobj__12362));
} else
{var new_keys__12365 = cljs.core.aclone.call(null,this__12359.keys);

new_keys__12365.push(k);
return (new cljs.core.ObjMap(this__12359.meta,new_keys__12365,new_strobj__12362));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12359.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12366 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12366.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12509 = null;
var G__12509__12511 = (function (coll,k){
var this__12376 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12509__12512 = (function (coll,k,not_found){
var this__12377 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12509 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12509__12511.call(this,coll,k);
case  3 :
return G__12509__12512.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12509;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12378 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12380 = this;
if(cljs.core.truth_((this__12380.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12323_SHARP_){
return cljs.core.vector.call(null,p1__12323_SHARP_,(this__12380.strobj[p1__12323_SHARP_]));
}),this__12380.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12385 = this;
return this__12385.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12388 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12390 = this;
return (new cljs.core.ObjMap(meta,this__12390.keys,this__12390.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12396 = this;
return this__12396.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12397 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12397.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12402 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12421 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12421))
{return this__12402.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12421;
}
})()))
{var new_keys__12422 = cljs.core.aclone.call(null,this__12402.keys);
var new_strobj__12423 = goog.object.clone.call(null,this__12402.strobj);

new_keys__12422.splice(cljs.core.scan_array.call(null,1,k,new_keys__12422),1);
cljs.core.js_delete.call(null,new_strobj__12423,k);
return (new cljs.core.ObjMap(this__12402.meta,new_keys__12422,new_strobj__12423));
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
var this__12562 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12697 = null;
var G__12697__12699 = (function (coll,k){
var this__12566 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12697__12700 = (function (coll,k,not_found){
var this__12570 = this;
var bucket__12571 = (this__12570.hashobj[cljs.core.hash.call(null,k)]);
var i__12572 = (cljs.core.truth_(bucket__12571)?cljs.core.scan_array.call(null,2,k,bucket__12571):null);

if(cljs.core.truth_(i__12572))
{return (bucket__12571[(i__12572 + 1)]);
} else
{return not_found;
}
});
G__12697 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12697__12699.call(this,coll,k);
case  3 :
return G__12697__12700.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12697;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12575 = this;
var h__12577 = cljs.core.hash.call(null,k);
var bucket__12578 = (this__12575.hashobj[h__12577]);

if(cljs.core.truth_(bucket__12578))
{var new_bucket__12580 = cljs.core.aclone.call(null,bucket__12578);
var new_hashobj__12582 = goog.object.clone.call(null,this__12575.hashobj);

(new_hashobj__12582[h__12577] = new_bucket__12580);
var temp__3695__auto____12584 = cljs.core.scan_array.call(null,2,k,new_bucket__12580);

if(cljs.core.truth_(temp__3695__auto____12584))
{var i__12587 = temp__3695__auto____12584;

(new_bucket__12580[(i__12587 + 1)] = v);
return (new cljs.core.HashMap(this__12575.meta,this__12575.count,new_hashobj__12582));
} else
{new_bucket__12580.push(k,v);
return (new cljs.core.HashMap(this__12575.meta,(this__12575.count + 1),new_hashobj__12582));
}
} else
{var new_hashobj__12611 = goog.object.clone.call(null,this__12575.hashobj);

(new_hashobj__12611[h__12577] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12575.meta,(this__12575.count + 1),new_hashobj__12611));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12621 = this;
var bucket__12624 = (this__12621.hashobj[cljs.core.hash.call(null,k)]);
var i__12625 = (cljs.core.truth_(bucket__12624)?cljs.core.scan_array.call(null,2,k,bucket__12624):null);

if(cljs.core.truth_(i__12625))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12710 = null;
var G__12710__12711 = (function (coll,k){
var this__12630 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12710__12712 = (function (coll,k,not_found){
var this__12632 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12710 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12710__12711.call(this,coll,k);
case  3 :
return G__12710__12712.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12710;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12637 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12640 = this;
if(cljs.core.truth_((this__12640.count > 0)))
{var hashes__12641 = cljs.core.js_keys.call(null,this__12640.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12540_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12640.hashobj[p1__12540_SHARP_])));
}),hashes__12641);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12646 = this;
return this__12646.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12650 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12676 = this;
return (new cljs.core.HashMap(meta,this__12676.count,this__12676.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12679 = this;
return this__12679.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12682 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12682.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12686 = this;
var h__12688 = cljs.core.hash.call(null,k);
var bucket__12689 = (this__12686.hashobj[h__12688]);
var i__12691 = (cljs.core.truth_(bucket__12689)?cljs.core.scan_array.call(null,2,k,bucket__12689):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12691)))
{return coll;
} else
{var new_hashobj__12695 = goog.object.clone.call(null,this__12686.hashobj);

if(cljs.core.truth_((3 > bucket__12689.length)))
{cljs.core.js_delete.call(null,new_hashobj__12695,h__12688);
} else
{var new_bucket__12696 = cljs.core.aclone.call(null,bucket__12689);

new_bucket__12696.splice(i__12691,2);
(new_hashobj__12695[h__12688] = new_bucket__12696);
}
return (new cljs.core.HashMap(this__12686.meta,(this__12686.count - 1),new_hashobj__12695));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12720 = ks.length;

var i__12721 = 0;
var out__12724 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12721 < len__12720)))
{{
var G__12732 = (i__12721 + 1);
var G__12733 = cljs.core.assoc.call(null,out__12724,(ks[i__12721]),(vs[i__12721]));
i__12721 = G__12732;
out__12724 = G__12733;
continue;
}
} else
{return out__12724;
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
var in$__12735 = cljs.core.seq.call(null,keyvals);
var out__12736 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12735))
{{
var G__12741 = cljs.core.nnext.call(null,in$__12735);
var G__12742 = cljs.core.assoc.call(null,out__12736,cljs.core.first.call(null,in$__12735),cljs.core.second.call(null,in$__12735));
in$__12735 = G__12741;
out__12736 = G__12742;
continue;
}
} else
{return out__12736;
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
hash_map.cljs$lang$applyTo = (function (arglist__12743){
var keyvals = cljs.core.seq( arglist__12743 );;
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
{return cljs.core.reduce.call(null,(function (p1__12749_SHARP_,p2__12751_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12761 = p1__12749_SHARP_;

if(cljs.core.truth_(or__3548__auto____12761))
{return or__3548__auto____12761;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12751_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12764){
var maps = cljs.core.seq( arglist__12764 );;
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
{var merge_entry__12774 = (function (m,e){
var k__12771 = cljs.core.first.call(null,e);
var v__12772 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12771)))
{return cljs.core.assoc.call(null,m,k__12771,f.call(null,cljs.core.get.call(null,m,k__12771),v__12772));
} else
{return cljs.core.assoc.call(null,m,k__12771,v__12772);
}
});
var merge2__12777 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12774,(function (){var or__3548__auto____12776 = m1;

if(cljs.core.truth_(or__3548__auto____12776))
{return or__3548__auto____12776;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12777,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12789){
var f = cljs.core.first(arglist__12789);
var maps = cljs.core.rest(arglist__12789);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12795 = cljs.core.ObjMap.fromObject([],{});
var keys__12796 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12796))
{var key__12797 = cljs.core.first.call(null,keys__12796);
var entry__12798 = cljs.core.get.call(null,map,key__12797,"﷐'user/not-found");

{
var G__12806 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12798,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12795,key__12797,entry__12798):ret__12795);
var G__12807 = cljs.core.next.call(null,keys__12796);
ret__12795 = G__12806;
keys__12796 = G__12807;
continue;
}
} else
{return ret__12795;
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
var this__12823 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12881 = null;
var G__12881__12882 = (function (coll,v){
var this__12825 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__12881__12883 = (function (coll,v,not_found){
var this__12827 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12827.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__12881 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__12881__12882.call(this,coll,v);
case  3 :
return G__12881__12883.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12881;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__12885 = null;
var G__12885__12886 = (function (coll,k){
var this__12858 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12885__12888 = (function (coll,k,not_found){
var this__12860 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12885 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12885__12886.call(this,coll,k);
case  3 :
return G__12885__12888.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12885;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12862 = this;
return (new cljs.core.Set(this__12862.meta,cljs.core.assoc.call(null,this__12862.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12864 = this;
return cljs.core.keys.call(null,this__12864.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__12865 = this;
return (new cljs.core.Set(this__12865.meta,cljs.core.dissoc.call(null,this__12865.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12867 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12869 = this;
var and__3546__auto____12871 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____12871))
{var and__3546__auto____12873 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____12873))
{return cljs.core.every_QMARK_.call(null,(function (p1__12791_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12791_SHARP_);
}),other);
} else
{return and__3546__auto____12873;
}
} else
{return and__3546__auto____12871;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12875 = this;
return (new cljs.core.Set(meta,this__12875.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12877 = this;
return this__12877.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12879 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__12879.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__12898 = cljs.core.seq.call(null,coll);
var out__12899 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__12898))))
{{
var G__12900 = cljs.core.rest.call(null,in$__12898);
var G__12901 = cljs.core.conj.call(null,out__12899,cljs.core.first.call(null,in$__12898));
in$__12898 = G__12900;
out__12899 = G__12901;
continue;
}
} else
{return out__12899;
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
{var n__12902 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____12908 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____12908))
{var e__12909 = temp__3695__auto____12908;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__12909));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12902,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12897_SHARP_){
var temp__3695__auto____12910 = cljs.core.find.call(null,smap,p1__12897_SHARP_);

if(cljs.core.truth_(temp__3695__auto____12910))
{var e__12911 = temp__3695__auto____12910;

return cljs.core.second.call(null,e__12911);
} else
{return p1__12897_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12922 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12915,seen){
while(true){
var vec__12916__12917 = p__12915;
var f__12918 = cljs.core.nth.call(null,vec__12916__12917,0,null);
var xs__12919 = vec__12916__12917;

var temp__3698__auto____12920 = cljs.core.seq.call(null,xs__12919);

if(cljs.core.truth_(temp__3698__auto____12920))
{var s__12921 = temp__3698__auto____12920;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__12918)))
{{
var G__12977 = cljs.core.rest.call(null,s__12921);
var G__12978 = seen;
p__12915 = G__12977;
seen = G__12978;
continue;
}
} else
{return cljs.core.cons.call(null,f__12918,step.call(null,cljs.core.rest.call(null,s__12921),cljs.core.conj.call(null,seen,f__12918)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__12922.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__12989 = cljs.core.Vector.fromArray([]);
var s__12990 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__12990)))
{{
var G__12996 = cljs.core.conj.call(null,ret__12989,cljs.core.first.call(null,s__12990));
var G__12998 = cljs.core.next.call(null,s__12990);
ret__12989 = G__12996;
s__12990 = G__12998;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12989);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13005 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13005))
{return or__3548__auto____13005;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13007 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13007 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13007 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13022 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13022))
{return or__3548__auto____13022;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13042 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13042 > -1)))
{return cljs.core.subs.call(null,x,2,i__13042);
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
var map__13060 = cljs.core.ObjMap.fromObject([],{});
var ks__13061 = cljs.core.seq.call(null,keys);
var vs__13062 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13063 = ks__13061;

if(cljs.core.truth_(and__3546__auto____13063))
{return vs__13062;
} else
{return and__3546__auto____13063;
}
})()))
{{
var G__13071 = cljs.core.assoc.call(null,map__13060,cljs.core.first.call(null,ks__13061),cljs.core.first.call(null,vs__13062));
var G__13072 = cljs.core.next.call(null,ks__13061);
var G__13073 = cljs.core.next.call(null,vs__13062);
map__13060 = G__13071;
ks__13061 = G__13072;
vs__13062 = G__13073;
continue;
}
} else
{return map__13060;
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
var max_key__13080 = (function (k,x){
return x;
});
var max_key__13081 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13082 = (function() { 
var G__13088__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13051_SHARP_,p2__13053_SHARP_){
return max_key.call(null,k,p1__13051_SHARP_,p2__13053_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13088 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13088__delegate.call(this, k, x, y, more);
};
G__13088.cljs$lang$maxFixedArity = 3;
G__13088.cljs$lang$applyTo = (function (arglist__13089){
var k = cljs.core.first(arglist__13089);
var x = cljs.core.first(cljs.core.next(arglist__13089));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13089)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13089)));
return G__13088__delegate.call(this, k, x, y, more);
});
return G__13088;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13080.call(this,k,x);
case  3 :
return max_key__13081.call(this,k,x,y);
default:
return max_key__13082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13082.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13090 = (function (k,x){
return x;
});
var min_key__13091 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13092 = (function() { 
var G__13094__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13075_SHARP_,p2__13076_SHARP_){
return min_key.call(null,k,p1__13075_SHARP_,p2__13076_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13094 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13094__delegate.call(this, k, x, y, more);
};
G__13094.cljs$lang$maxFixedArity = 3;
G__13094.cljs$lang$applyTo = (function (arglist__13100){
var k = cljs.core.first(arglist__13100);
var x = cljs.core.first(cljs.core.next(arglist__13100));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13100)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13100)));
return G__13094__delegate.call(this, k, x, y, more);
});
return G__13094;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13090.call(this,k,x);
case  3 :
return min_key__13091.call(this,k,x,y);
default:
return min_key__13092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13092.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13108 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13109 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13104))
{var s__13106 = temp__3698__auto____13104;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13106),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13106)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13108.call(this,n,step);
case  3 :
return partition_all__13109.call(this,n,step,coll);
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
var temp__3698__auto____13171 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13171))
{var s__13172 = temp__3698__auto____13171;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13172))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13172),take_while.call(null,pred,cljs.core.rest.call(null,s__13172)));
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
var this__13190 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13191 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13320 = null;
var G__13320__13321 = (function (rng,f){
var this__13192 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13320__13322 = (function (rng,f,s){
var this__13194 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13320 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13320__13321.call(this,rng,f);
case  3 :
return G__13320__13322.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13320;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13195 = this;
var comp__13196 = (cljs.core.truth_((this__13195.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13196.call(null,this__13195.start,this__13195.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13200 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13200.end - this__13200.start) / this__13200.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13204 = this;
return this__13204.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13205 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13205.meta,(this__13205.start + this__13205.step),this__13205.end,this__13205.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13211 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13217 = this;
return (new cljs.core.Range(meta,this__13217.start,this__13217.end,this__13217.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13219 = this;
return this__13219.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13341 = null;
var G__13341__13342 = (function (rng,n){
var this__13222 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13222.start + (n * this__13222.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13295 = (this__13222.start > this__13222.end);

if(cljs.core.truth_(and__3546__auto____13295))
{return cljs.core._EQ_.call(null,this__13222.step,0);
} else
{return and__3546__auto____13295;
}
})()))
{return this__13222.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13341__13344 = (function (rng,n,not_found){
var this__13297 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13297.start + (n * this__13297.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13301 = (this__13297.start > this__13297.end);

if(cljs.core.truth_(and__3546__auto____13301))
{return cljs.core._EQ_.call(null,this__13297.step,0);
} else
{return and__3546__auto____13301;
}
})()))
{return this__13297.start;
} else
{return not_found;
}
}
});
G__13341 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13341__13342.call(this,rng,n);
case  3 :
return G__13341__13344.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13341;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13305 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13305.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13355 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13356 = (function (end){
return range.call(null,0,end,1);
});
var range__13357 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13359 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13355.call(this);
case  1 :
return range__13356.call(this,start);
case  2 :
return range__13357.call(this,start,end);
case  3 :
return range__13359.call(this,start,end,step);
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
var temp__3698__auto____13366 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13366))
{var s__13367 = temp__3698__auto____13366;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13367),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13367)));
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
var temp__3698__auto____13378 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13378))
{var s__13381 = temp__3698__auto____13378;

var fst__13383 = cljs.core.first.call(null,s__13381);
var fv__13384 = f.call(null,fst__13383);
var run__13387 = cljs.core.cons.call(null,fst__13383,cljs.core.take_while.call(null,(function (p1__13374_SHARP_){
return cljs.core._EQ_.call(null,fv__13384,f.call(null,p1__13374_SHARP_));
}),cljs.core.next.call(null,s__13381)));

return cljs.core.cons.call(null,run__13387,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13387),s__13381))));
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
var reductions__13467 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13454 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13454))
{var s__13455 = temp__3695__auto____13454;

return reductions.call(null,f,cljs.core.first.call(null,s__13455),cljs.core.rest.call(null,s__13455));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13468 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13458 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13458))
{var s__13459 = temp__3698__auto____13458;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13459)),cljs.core.rest.call(null,s__13459));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13467.call(this,f,init);
case  3 :
return reductions__13468.call(this,f,init,coll);
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
var juxt__13584 = (function (f){
return (function() {
var G__13590 = null;
var G__13590__13591 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13590__13592 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13590__13593 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13590__13594 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13590__13595 = (function() { 
var G__13597__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13597 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13597__delegate.call(this, x, y, z, args);
};
G__13597.cljs$lang$maxFixedArity = 3;
G__13597.cljs$lang$applyTo = (function (arglist__13598){
var x = cljs.core.first(arglist__13598);
var y = cljs.core.first(cljs.core.next(arglist__13598));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13598)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13598)));
return G__13597__delegate.call(this, x, y, z, args);
});
return G__13597;
})()
;
G__13590 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13590__13591.call(this);
case  1 :
return G__13590__13592.call(this,x);
case  2 :
return G__13590__13593.call(this,x,y);
case  3 :
return G__13590__13594.call(this,x,y,z);
default:
return G__13590__13595.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13590.cljs$lang$maxFixedArity = 3;
G__13590.cljs$lang$applyTo = G__13590__13595.cljs$lang$applyTo;
return G__13590;
})()
});
var juxt__13585 = (function (f,g){
return (function() {
var G__13599 = null;
var G__13599__13600 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13599__13601 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13599__13602 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13599__13603 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13599__13604 = (function() { 
var G__13606__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13606 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13606__delegate.call(this, x, y, z, args);
};
G__13606.cljs$lang$maxFixedArity = 3;
G__13606.cljs$lang$applyTo = (function (arglist__13608){
var x = cljs.core.first(arglist__13608);
var y = cljs.core.first(cljs.core.next(arglist__13608));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13608)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13608)));
return G__13606__delegate.call(this, x, y, z, args);
});
return G__13606;
})()
;
G__13599 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13599__13600.call(this);
case  1 :
return G__13599__13601.call(this,x);
case  2 :
return G__13599__13602.call(this,x,y);
case  3 :
return G__13599__13603.call(this,x,y,z);
default:
return G__13599__13604.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13599.cljs$lang$maxFixedArity = 3;
G__13599.cljs$lang$applyTo = G__13599__13604.cljs$lang$applyTo;
return G__13599;
})()
});
var juxt__13586 = (function (f,g,h){
return (function() {
var G__13609 = null;
var G__13609__13610 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13609__13611 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13609__13612 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13609__13613 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13609__13614 = (function() { 
var G__13617__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13617 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13617__delegate.call(this, x, y, z, args);
};
G__13617.cljs$lang$maxFixedArity = 3;
G__13617.cljs$lang$applyTo = (function (arglist__13618){
var x = cljs.core.first(arglist__13618);
var y = cljs.core.first(cljs.core.next(arglist__13618));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13618)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13618)));
return G__13617__delegate.call(this, x, y, z, args);
});
return G__13617;
})()
;
G__13609 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13609__13610.call(this);
case  1 :
return G__13609__13611.call(this,x);
case  2 :
return G__13609__13612.call(this,x,y);
case  3 :
return G__13609__13613.call(this,x,y,z);
default:
return G__13609__13614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13609.cljs$lang$maxFixedArity = 3;
G__13609.cljs$lang$applyTo = G__13609__13614.cljs$lang$applyTo;
return G__13609;
})()
});
var juxt__13587 = (function() { 
var G__13619__delegate = function (f,g,h,fs){
var fs__13564 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13620 = null;
var G__13620__13622 = (function (){
return cljs.core.reduce.call(null,(function (p1__13403_SHARP_,p2__13404_SHARP_){
return cljs.core.conj.call(null,p1__13403_SHARP_,p2__13404_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13564);
});
var G__13620__13623 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13406_SHARP_,p2__13431_SHARP_){
return cljs.core.conj.call(null,p1__13406_SHARP_,p2__13431_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13564);
});
var G__13620__13624 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13432_SHARP_,p2__13433_SHARP_){
return cljs.core.conj.call(null,p1__13432_SHARP_,p2__13433_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13564);
});
var G__13620__13625 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13440_SHARP_,p2__13441_SHARP_){
return cljs.core.conj.call(null,p1__13440_SHARP_,p2__13441_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13564);
});
var G__13620__13626 = (function() { 
var G__13635__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13444_SHARP_,p2__13447_SHARP_){
return cljs.core.conj.call(null,p1__13444_SHARP_,cljs.core.apply.call(null,p2__13447_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13564);
};
var G__13635 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13635__delegate.call(this, x, y, z, args);
};
G__13635.cljs$lang$maxFixedArity = 3;
G__13635.cljs$lang$applyTo = (function (arglist__13636){
var x = cljs.core.first(arglist__13636);
var y = cljs.core.first(cljs.core.next(arglist__13636));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13636)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13636)));
return G__13635__delegate.call(this, x, y, z, args);
});
return G__13635;
})()
;
G__13620 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13620__13622.call(this);
case  1 :
return G__13620__13623.call(this,x);
case  2 :
return G__13620__13624.call(this,x,y);
case  3 :
return G__13620__13625.call(this,x,y,z);
default:
return G__13620__13626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13620.cljs$lang$maxFixedArity = 3;
G__13620.cljs$lang$applyTo = G__13620__13626.cljs$lang$applyTo;
return G__13620;
})()
};
var G__13619 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13619__delegate.call(this, f, g, h, fs);
};
G__13619.cljs$lang$maxFixedArity = 3;
G__13619.cljs$lang$applyTo = (function (arglist__13637){
var f = cljs.core.first(arglist__13637);
var g = cljs.core.first(cljs.core.next(arglist__13637));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13637)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13637)));
return G__13619__delegate.call(this, f, g, h, fs);
});
return G__13619;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13584.call(this,f);
case  2 :
return juxt__13585.call(this,f,g);
case  3 :
return juxt__13586.call(this,f,g,h);
default:
return juxt__13587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13587.cljs$lang$applyTo;
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
var dorun__13643 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13646 = cljs.core.next.call(null,coll);
coll = G__13646;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13644 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13638 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13638))
{return (n > 0);
} else
{return and__3546__auto____13638;
}
})()))
{{
var G__13647 = (n - 1);
var G__13648 = cljs.core.next.call(null,coll);
n = G__13647;
coll = G__13648;
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
return dorun__13643.call(this,n);
case  2 :
return dorun__13644.call(this,n,coll);
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
var doall__13649 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13650 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13649.call(this,n);
case  2 :
return doall__13650.call(this,n,coll);
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
var matches__13652 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13652),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13652),1)))
{return cljs.core.first.call(null,matches__13652);
} else
{return cljs.core.vec.call(null,matches__13652);
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
var matches__13665 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13665)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13665),1)))
{return cljs.core.first.call(null,matches__13665);
} else
{return cljs.core.vec.call(null,matches__13665);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13678 = cljs.core.re_find.call(null,re,s);
var match_idx__13679 = s.search(re);
var match_str__13680 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13678))?cljs.core.first.call(null,match_data__13678):match_data__13678);
var post_match__13682 = cljs.core.subs.call(null,s,(match_idx__13679 + cljs.core.count.call(null,match_str__13680)));

if(cljs.core.truth_(match_data__13678))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13678,re_seq.call(null,re,post_match__13682));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13686_SHARP_){
return print_one.call(null,p1__13686_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13750 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13750))
{var and__3546__auto____13763 = (function (){var x__445__auto____13753 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13755 = x__445__auto____13753;

if(cljs.core.truth_(and__3546__auto____13755))
{var and__3546__auto____13758 = x__445__auto____13753.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13758))
{return cljs.core.not.call(null,x__445__auto____13753.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13758;
}
} else
{return and__3546__auto____13755;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13753);
}
})();

if(cljs.core.truth_(and__3546__auto____13763))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13763;
}
} else
{return and__3546__auto____13750;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13767 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13768 = x__445__auto____13767;

if(cljs.core.truth_(and__3546__auto____13768))
{var and__3546__auto____13769 = x__445__auto____13767.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13769))
{return cljs.core.not.call(null,x__445__auto____13767.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13769;
}
} else
{return and__3546__auto____13768;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13767);
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
var first_obj__13821 = cljs.core.first.call(null,objs);
var sb__13822 = (new goog.string.StringBuffer());

var G__13823__13831 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13823__13831))
{var obj__13834 = cljs.core.first.call(null,G__13823__13831);
var G__13823__13835 = G__13823__13831;

while(true){
if(cljs.core.truth_((obj__13834 === first_obj__13821)))
{} else
{sb__13822.append(" ");
}
var G__13838__13839 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13834,opts));

if(cljs.core.truth_(G__13838__13839))
{var string__13840 = cljs.core.first.call(null,G__13838__13839);
var G__13838__13841 = G__13838__13839;

while(true){
sb__13822.append(string__13840);
var temp__3698__auto____13842 = cljs.core.next.call(null,G__13838__13841);

if(cljs.core.truth_(temp__3698__auto____13842))
{var G__13838__13843 = temp__3698__auto____13842;

{
var G__13853 = cljs.core.first.call(null,G__13838__13843);
var G__13854 = G__13838__13843;
string__13840 = G__13853;
G__13838__13841 = G__13854;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13848 = cljs.core.next.call(null,G__13823__13835);

if(cljs.core.truth_(temp__3698__auto____13848))
{var G__13823__13849 = temp__3698__auto____13848;

{
var G__13855 = cljs.core.first.call(null,G__13823__13849);
var G__13856 = G__13823__13849;
obj__13834 = G__13855;
G__13823__13835 = G__13856;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13822);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13861 = cljs.core.first.call(null,objs);

var G__13863__13865 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13863__13865))
{var obj__13866 = cljs.core.first.call(null,G__13863__13865);
var G__13863__13867 = G__13863__13865;

while(true){
if(cljs.core.truth_((obj__13866 === first_obj__13861)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13868__13869 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13866,opts));

if(cljs.core.truth_(G__13868__13869))
{var string__13870 = cljs.core.first.call(null,G__13868__13869);
var G__13868__13871 = G__13868__13869;

while(true){
cljs.core.string_print.call(null,string__13870);
var temp__3698__auto____13872 = cljs.core.next.call(null,G__13868__13871);

if(cljs.core.truth_(temp__3698__auto____13872))
{var G__13868__13873 = temp__3698__auto____13872;

{
var G__13876 = cljs.core.first.call(null,G__13868__13873);
var G__13877 = G__13868__13873;
string__13870 = G__13876;
G__13868__13871 = G__13877;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13874 = cljs.core.next.call(null,G__13863__13867);

if(cljs.core.truth_(temp__3698__auto____13874))
{var G__13863__13875 = temp__3698__auto____13874;

{
var G__13884 = cljs.core.first.call(null,G__13863__13875);
var G__13885 = G__13863__13875;
obj__13866 = G__13884;
G__13863__13867 = G__13885;
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
pr_str.cljs$lang$applyTo = (function (arglist__13894){
var objs = cljs.core.seq( arglist__13894 );;
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
pr.cljs$lang$applyTo = (function (arglist__13895){
var objs = cljs.core.seq( arglist__13895 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13897){
var objs = cljs.core.seq( arglist__13897 );;
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
println.cljs$lang$applyTo = (function (arglist__13900){
var objs = cljs.core.seq( arglist__13900 );;
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
prn.cljs$lang$applyTo = (function (arglist__13927){
var objs = cljs.core.seq( arglist__13927 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13933 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13933,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____13946 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13946))
{var nspc__13947 = temp__3698__auto____13946;

return cljs.core.str.call(null,nspc__13947,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____13949 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13949))
{var nspc__13950 = temp__3698__auto____13949;

return cljs.core.str.call(null,nspc__13950,"/");
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
var pr_pair__13980 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13980,"{",", ","}",opts,coll);
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
var this__14034 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14040 = this;
var G__14042__14044 = cljs.core.seq.call(null,this__14040.watches);

if(cljs.core.truth_(G__14042__14044))
{var G__14047__14049 = cljs.core.first.call(null,G__14042__14044);
var vec__14048__14050 = G__14047__14049;
var key__14051 = cljs.core.nth.call(null,vec__14048__14050,0,null);
var f__14052 = cljs.core.nth.call(null,vec__14048__14050,1,null);
var G__14042__14053 = G__14042__14044;

var G__14047__14054 = G__14047__14049;
var G__14042__14055 = G__14042__14053;

while(true){
var vec__14056__14057 = G__14047__14054;
var key__14059 = cljs.core.nth.call(null,vec__14056__14057,0,null);
var f__14060 = cljs.core.nth.call(null,vec__14056__14057,1,null);
var G__14042__14061 = G__14042__14055;

f__14060.call(null,key__14059,this$,oldval,newval);
var temp__3698__auto____14066 = cljs.core.next.call(null,G__14042__14061);

if(cljs.core.truth_(temp__3698__auto____14066))
{var G__14042__14067 = temp__3698__auto____14066;

{
var G__14092 = cljs.core.first.call(null,G__14042__14067);
var G__14093 = G__14042__14067;
G__14047__14054 = G__14092;
G__14042__14055 = G__14093;
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
var this__14068 = this;
return this$.watches = cljs.core.assoc.call(null,this__14068.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14071 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14071.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14072 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14072.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14076 = this;
return this__14076.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14077 = this;
return this__14077.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14078 = this;
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
var atom__14122 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14123 = (function() { 
var G__14128__delegate = function (x,p__14107){
var map__14110__14115 = p__14107;
var map__14110__14116 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14110__14115))?cljs.core.apply.call(null,cljs.core.hash_map,map__14110__14115):map__14110__14115);
var validator__14117 = cljs.core.get.call(null,map__14110__14116,"﷐'validator");
var meta__14118 = cljs.core.get.call(null,map__14110__14116,"﷐'meta");

return (new cljs.core.Atom(x,meta__14118,validator__14117,null));
};
var G__14128 = function (x,var_args){
var p__14107 = null;
if (goog.isDef(var_args)) {
  p__14107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14128__delegate.call(this, x, p__14107);
};
G__14128.cljs$lang$maxFixedArity = 1;
G__14128.cljs$lang$applyTo = (function (arglist__14129){
var x = cljs.core.first(arglist__14129);
var p__14107 = cljs.core.rest(arglist__14129);
return G__14128__delegate.call(this, x, p__14107);
});
return G__14128;
})()
;
atom = function(x,var_args){
var p__14107 = var_args;
switch(arguments.length){
case  1 :
return atom__14122.call(this,x);
default:
return atom__14123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14123.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14131 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14131))
{var validate__14135 = temp__3698__auto____14131;

if(cljs.core.truth_(validate__14135.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14139 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14139,new_value);
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
var swap_BANG___14157 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14158 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14159 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14160 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14161 = (function() { 
var G__14165__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14165 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14165__delegate.call(this, a, f, x, y, z, more);
};
G__14165.cljs$lang$maxFixedArity = 5;
G__14165.cljs$lang$applyTo = (function (arglist__14166){
var a = cljs.core.first(arglist__14166);
var f = cljs.core.first(cljs.core.next(arglist__14166));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14166)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14166))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14166)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14166)))));
return G__14165__delegate.call(this, a, f, x, y, z, more);
});
return G__14165;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14157.call(this,a,f);
case  3 :
return swap_BANG___14158.call(this,a,f,x);
case  4 :
return swap_BANG___14159.call(this,a,f,x,y);
case  5 :
return swap_BANG___14160.call(this,a,f,x,y,z);
default:
return swap_BANG___14161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14161.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14187){
var iref = cljs.core.first(arglist__14187);
var f = cljs.core.first(cljs.core.next(arglist__14187));
var args = cljs.core.rest(cljs.core.next(arglist__14187));
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
var gensym__14204 = (function (){
return gensym.call(null,"G__");
});
var gensym__14206 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14204.call(this);
case  1 :
return gensym__14206.call(this,prefix_string);
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
var this__14215 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14215.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14225 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14225.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14225.state,this__14225.f);
}
return cljs.core.deref.call(null,this__14225.state);
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
delay.cljs$lang$applyTo = (function (arglist__14236){
var body = cljs.core.seq( arglist__14236 );;
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
var map__14256__14257 = options;
var map__14256__14262 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14256__14257))?cljs.core.apply.call(null,cljs.core.hash_map,map__14256__14257):map__14256__14257);
var keywordize_keys__14263 = cljs.core.get.call(null,map__14256__14262,"﷐'keywordize-keys");
var keyfn__14264 = (cljs.core.truth_(keywordize_keys__14263)?cljs.core.keyword:cljs.core.str);
var f__14279 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14278 = (function iter__14272(s__14273){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14273__14275 = s__14273;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14273__14275)))
{var k__14277 = cljs.core.first.call(null,s__14273__14275);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14264.call(null,k__14277),thisfn.call(null,(x[k__14277]))]),iter__14272.call(null,cljs.core.rest.call(null,s__14273__14275)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14278.call(null,cljs.core.js_keys.call(null,x));
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

return f__14279.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14290){
var x = cljs.core.first(arglist__14290);
var options = cljs.core.rest(arglist__14290);
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
var mem__14295 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14307__delegate = function (args){
var temp__3695__auto____14297 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14295),args);

if(cljs.core.truth_(temp__3695__auto____14297))
{var v__14298 = temp__3695__auto____14297;

return v__14298;
} else
{var ret__14300 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14295,cljs.core.assoc,args,ret__14300);
return ret__14300;
}
};
var G__14307 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14307__delegate.call(this, args);
};
G__14307.cljs$lang$maxFixedArity = 0;
G__14307.cljs$lang$applyTo = (function (arglist__14369){
var args = cljs.core.seq( arglist__14369 );;
return G__14307__delegate.call(this, args);
});
return G__14307;
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
var trampoline__14372 = (function (f){
while(true){
var ret__14371 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14371)))
{{
var G__14375 = ret__14371;
f = G__14375;
continue;
}
} else
{return ret__14371;
}
break;
}
});
var trampoline__14373 = (function() { 
var G__14377__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14377 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14377__delegate.call(this, f, args);
};
G__14377.cljs$lang$maxFixedArity = 1;
G__14377.cljs$lang$applyTo = (function (arglist__14380){
var f = cljs.core.first(arglist__14380);
var args = cljs.core.rest(arglist__14380);
return G__14377__delegate.call(this, f, args);
});
return G__14377;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14372.call(this,f);
default:
return trampoline__14373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14373.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14382 = (function (){
return rand.call(null,1);
});
var rand__14383 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14382.call(this);
case  1 :
return rand__14383.call(this,n);
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
var k__14395 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14395,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14395,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14439 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14441 = (function (h,child,parent){
var or__3548__auto____14412 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14412))
{return or__3548__auto____14412;
} else
{var or__3548__auto____14413 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14413))
{return or__3548__auto____14413;
} else
{var and__3546__auto____14415 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14415))
{var and__3546__auto____14417 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14417))
{var and__3546__auto____14418 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14418))
{var ret__14421 = true;
var i__14424 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14426 = cljs.core.not.call(null,ret__14421);

if(cljs.core.truth_(or__3548__auto____14426))
{return or__3548__auto____14426;
} else
{return cljs.core._EQ_.call(null,i__14424,cljs.core.count.call(null,parent));
}
})()))
{return ret__14421;
} else
{{
var G__14451 = isa_QMARK_.call(null,h,child.call(null,i__14424),parent.call(null,i__14424));
var G__14452 = (i__14424 + 1);
ret__14421 = G__14451;
i__14424 = G__14452;
continue;
}
}
break;
}
} else
{return and__3546__auto____14418;
}
} else
{return and__3546__auto____14417;
}
} else
{return and__3546__auto____14415;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14439.call(this,h,child);
case  3 :
return isa_QMARK___14441.call(this,h,child,parent);
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
var parents__14455 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14456 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14455.call(this,h);
case  2 :
return parents__14456.call(this,h,tag);
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
var ancestors__14461 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14462 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14461.call(this,h);
case  2 :
return ancestors__14462.call(this,h,tag);
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
var descendants__14506 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14507 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14506.call(this,h);
case  2 :
return descendants__14507.call(this,h,tag);
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
var derive__14522 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14523 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14514 = "﷐'parents".call(null,h);
var td__14515 = "﷐'descendants".call(null,h);
var ta__14516 = "﷐'ancestors".call(null,h);
var tf__14517 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14518 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14514.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14516.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14516.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14514,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14517.call(null,"﷐'ancestors".call(null,h),tag,td__14515,parent,ta__14516),"﷐'descendants":tf__14517.call(null,"﷐'descendants".call(null,h),parent,ta__14516,tag,td__14515)});
})());

if(cljs.core.truth_(or__3548__auto____14518))
{return or__3548__auto____14518;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14522.call(this,h,tag);
case  3 :
return derive__14523.call(this,h,tag,parent);
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
var underive__14552 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14554 = (function (h,tag,parent){
var parentMap__14538 = "﷐'parents".call(null,h);
var childsParents__14540 = (cljs.core.truth_(parentMap__14538.call(null,tag))?cljs.core.disj.call(null,parentMap__14538.call(null,tag),parent):cljs.core.set([]));
var newParents__14541 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14540))?cljs.core.assoc.call(null,parentMap__14538,tag,childsParents__14540):cljs.core.dissoc.call(null,parentMap__14538,tag));
var deriv_seq__14543 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14511_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14511_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14511_SHARP_),cljs.core.second.call(null,p1__14511_SHARP_)));
}),cljs.core.seq.call(null,newParents__14541)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14538.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14512_SHARP_,p2__14513_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14512_SHARP_,p2__14513_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14543));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14552.call(this,h,tag);
case  3 :
return underive__14554.call(this,h,tag,parent);
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
var xprefs__14567 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14570 = (cljs.core.truth_((function (){var and__3546__auto____14568 = xprefs__14567;

if(cljs.core.truth_(and__3546__auto____14568))
{return xprefs__14567.call(null,y);
} else
{return and__3546__auto____14568;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14570))
{return or__3548__auto____14570;
} else
{var or__3548__auto____14574 = (function (){var ps__14571 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14571) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14571),prefer_table)))
{} else
{}
{
var G__14582 = cljs.core.rest.call(null,ps__14571);
ps__14571 = G__14582;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14574))
{return or__3548__auto____14574;
} else
{var or__3548__auto____14577 = (function (){var ps__14575 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14575) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14575),y,prefer_table)))
{} else
{}
{
var G__14584 = cljs.core.rest.call(null,ps__14575);
ps__14575 = G__14584;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14577))
{return or__3548__auto____14577;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14590 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14590))
{return or__3548__auto____14590;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14609 = cljs.core.reduce.call(null,(function (be,p__14596){
var vec__14598__14599 = p__14596;
var k__14600 = cljs.core.nth.call(null,vec__14598__14599,0,null);
var ___14601 = cljs.core.nth.call(null,vec__14598__14599,1,null);
var e__14602 = vec__14598__14599;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14600)))
{var be2__14606 = (cljs.core.truth_((function (){var or__3548__auto____14605 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____14605))
{return or__3548__auto____14605;
} else
{return cljs.core.dominates.call(null,k__14600,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14602:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14606),k__14600,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14600," and ",cljs.core.first.call(null,be2__14606),", and neither is preferred")));
}
return be2__14606;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__14609))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14609));
return cljs.core.second.call(null,best_entry__14609);
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
if(cljs.core.truth_((function (){var and__3546__auto____14617 = mf;

if(cljs.core.truth_(and__3546__auto____14617))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____14617;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____14619 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14619))
{return or__3548__auto____14619;
} else
{var or__3548__auto____14620 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____14620))
{return or__3548__auto____14620;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____14621 = mf;

if(cljs.core.truth_(and__3546__auto____14621))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____14621;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____14623 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14623))
{return or__3548__auto____14623;
} else
{var or__3548__auto____14625 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____14625))
{return or__3548__auto____14625;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14626 = mf;

if(cljs.core.truth_(and__3546__auto____14626))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____14626;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14627 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14627))
{return or__3548__auto____14627;
} else
{var or__3548__auto____14628 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____14628))
{return or__3548__auto____14628;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____14629 = mf;

if(cljs.core.truth_(and__3546__auto____14629))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____14629;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____14632 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14632))
{return or__3548__auto____14632;
} else
{var or__3548__auto____14633 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____14633))
{return or__3548__auto____14633;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14635 = mf;

if(cljs.core.truth_(and__3546__auto____14635))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____14635;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14637 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14637))
{return or__3548__auto____14637;
} else
{var or__3548__auto____14639 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____14639))
{return or__3548__auto____14639;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14641 = mf;

if(cljs.core.truth_(and__3546__auto____14641))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____14641;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____14642 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14642))
{return or__3548__auto____14642;
} else
{var or__3548__auto____14643 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____14643))
{return or__3548__auto____14643;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14647 = mf;

if(cljs.core.truth_(and__3546__auto____14647))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____14647;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____14648 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14648))
{return or__3548__auto____14648;
} else
{var or__3548__auto____14650 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____14650))
{return or__3548__auto____14650;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____14651 = mf;

if(cljs.core.truth_(and__3546__auto____14651))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____14651;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____14652 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14652))
{return or__3548__auto____14652;
} else
{var or__3548__auto____14654 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____14654))
{return or__3548__auto____14654;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14698 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14699 = cljs.core._get_method.call(null,mf,dispatch_val__14698);

if(cljs.core.truth_(target_fn__14699))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__14698)));
}
return cljs.core.apply.call(null,target_fn__14699,args);
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
var this__14709 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__14811 = this;
cljs.core.swap_BANG_.call(null,this__14811.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14811.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14811.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14811.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__14814 = this;
cljs.core.swap_BANG_.call(null,this__14814.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14814.method_cache,this__14814.method_table,this__14814.cached_hierarchy,this__14814.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__14818 = this;
cljs.core.swap_BANG_.call(null,this__14818.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14818.method_cache,this__14818.method_table,this__14818.cached_hierarchy,this__14818.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__14820 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14820.cached_hierarchy),cljs.core.deref.call(null,this__14820.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__14820.method_cache,this__14820.method_table,this__14820.cached_hierarchy,this__14820.hierarchy);
}
var temp__3695__auto____14823 = cljs.core.deref.call(null,this__14820.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____14823))
{var target_fn__14824 = temp__3695__auto____14823;

return target_fn__14824;
} else
{var temp__3695__auto____14825 = cljs.core.find_and_cache_best_method.call(null,this__14820.name,dispatch_val,this__14820.hierarchy,this__14820.method_table,this__14820.prefer_table,this__14820.method_cache,this__14820.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____14825))
{var target_fn__14828 = temp__3695__auto____14825;

return target_fn__14828;
} else
{return cljs.core.deref.call(null,this__14820.method_table).call(null,this__14820.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14830 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14830.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__14830.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__14830.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14830.method_cache,this__14830.method_table,this__14830.cached_hierarchy,this__14830.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__14831 = this;
return cljs.core.deref.call(null,this__14831.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__14832 = this;
return cljs.core.deref.call(null,this__14832.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__14833 = this;
return cljs.core.do_dispatch.call(null,mf,this__14833.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14834__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__14834 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14834__delegate.call(this, _, args);
};
G__14834.cljs$lang$maxFixedArity = 1;
G__14834.cljs$lang$applyTo = (function (arglist__14835){
var _ = cljs.core.first(arglist__14835);
var args = cljs.core.rest(arglist__14835);
return G__14834__delegate.call(this, _, args);
});
return G__14834;
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
