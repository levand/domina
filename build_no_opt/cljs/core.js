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
var or__3548__auto____5548 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____5548))
{return or__3548__auto____5548;
} else
{var or__3548__auto____5549 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____5549))
{return or__3548__auto____5549;
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
var _invoke__5873 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____5716 = this$;

if(cljs.core.truth_(and__3546__auto____5716))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5716;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____5717 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5717))
{return or__3548__auto____5717;
} else
{var or__3548__auto____5718 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5718))
{return or__3548__auto____5718;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__5874 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____5719 = this$;

if(cljs.core.truth_(and__3546__auto____5719))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5719;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____5720 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5720))
{return or__3548__auto____5720;
} else
{var or__3548__auto____5721 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5721))
{return or__3548__auto____5721;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__5875 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____5722 = this$;

if(cljs.core.truth_(and__3546__auto____5722))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5722;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____5745 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5745))
{return or__3548__auto____5745;
} else
{var or__3548__auto____5746 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5746))
{return or__3548__auto____5746;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__5876 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____5747 = this$;

if(cljs.core.truth_(and__3546__auto____5747))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5747;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____5748 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5748))
{return or__3548__auto____5748;
} else
{var or__3548__auto____5749 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5749))
{return or__3548__auto____5749;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5877 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____5750 = this$;

if(cljs.core.truth_(and__3546__auto____5750))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5750;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____5751 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5751))
{return or__3548__auto____5751;
} else
{var or__3548__auto____5752 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5752))
{return or__3548__auto____5752;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__5878 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____5753 = this$;

if(cljs.core.truth_(and__3546__auto____5753))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5753;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____5755 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5755))
{return or__3548__auto____5755;
} else
{var or__3548__auto____5756 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5756))
{return or__3548__auto____5756;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__5879 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____5758 = this$;

if(cljs.core.truth_(and__3546__auto____5758))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5758;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____5760 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5760))
{return or__3548__auto____5760;
} else
{var or__3548__auto____5762 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5762))
{return or__3548__auto____5762;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__5880 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____5764 = this$;

if(cljs.core.truth_(and__3546__auto____5764))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5764;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____5766 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5766))
{return or__3548__auto____5766;
} else
{var or__3548__auto____5768 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5768))
{return or__3548__auto____5768;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__5881 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____5770 = this$;

if(cljs.core.truth_(and__3546__auto____5770))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5770;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____5772 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5772))
{return or__3548__auto____5772;
} else
{var or__3548__auto____5774 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5774))
{return or__3548__auto____5774;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__5882 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____5776 = this$;

if(cljs.core.truth_(and__3546__auto____5776))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5776;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____5778 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5778))
{return or__3548__auto____5778;
} else
{var or__3548__auto____5801 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5801))
{return or__3548__auto____5801;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__5917 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____5804 = this$;

if(cljs.core.truth_(and__3546__auto____5804))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5804;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____5806 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5806))
{return or__3548__auto____5806;
} else
{var or__3548__auto____5807 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5807))
{return or__3548__auto____5807;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__5918 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____5809 = this$;

if(cljs.core.truth_(and__3546__auto____5809))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5809;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____5812 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5812))
{return or__3548__auto____5812;
} else
{var or__3548__auto____5813 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5813))
{return or__3548__auto____5813;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__5919 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____5815 = this$;

if(cljs.core.truth_(and__3546__auto____5815))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5815;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____5818 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5818))
{return or__3548__auto____5818;
} else
{var or__3548__auto____5819 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5819))
{return or__3548__auto____5819;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__5920 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____5821 = this$;

if(cljs.core.truth_(and__3546__auto____5821))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5821;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____5824 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5824))
{return or__3548__auto____5824;
} else
{var or__3548__auto____5825 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5825))
{return or__3548__auto____5825;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__5921 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____5827 = this$;

if(cljs.core.truth_(and__3546__auto____5827))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5827;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____5829 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5829))
{return or__3548__auto____5829;
} else
{var or__3548__auto____5830 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5830))
{return or__3548__auto____5830;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__5922 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____5832 = this$;

if(cljs.core.truth_(and__3546__auto____5832))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5832;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____5833 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5833))
{return or__3548__auto____5833;
} else
{var or__3548__auto____5848 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5848))
{return or__3548__auto____5848;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__5923 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____5857 = this$;

if(cljs.core.truth_(and__3546__auto____5857))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5857;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____5858 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5858))
{return or__3548__auto____5858;
} else
{var or__3548__auto____5859 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5859))
{return or__3548__auto____5859;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__5924 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____5860 = this$;

if(cljs.core.truth_(and__3546__auto____5860))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5860;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____5861 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5861))
{return or__3548__auto____5861;
} else
{var or__3548__auto____5862 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5862))
{return or__3548__auto____5862;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__5925 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____5863 = this$;

if(cljs.core.truth_(and__3546__auto____5863))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5863;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____5864 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5864))
{return or__3548__auto____5864;
} else
{var or__3548__auto____5865 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5865))
{return or__3548__auto____5865;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__5926 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____5866 = this$;

if(cljs.core.truth_(and__3546__auto____5866))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5866;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____5867 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5867))
{return or__3548__auto____5867;
} else
{var or__3548__auto____5868 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5868))
{return or__3548__auto____5868;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__5927 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____5869 = this$;

if(cljs.core.truth_(and__3546__auto____5869))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5869;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____5870 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5870))
{return or__3548__auto____5870;
} else
{var or__3548__auto____5871 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5871))
{return or__3548__auto____5871;
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
return _invoke__5873.call(this,this$);
case  2 :
return _invoke__5874.call(this,this$,a);
case  3 :
return _invoke__5875.call(this,this$,a,b);
case  4 :
return _invoke__5876.call(this,this$,a,b,c);
case  5 :
return _invoke__5877.call(this,this$,a,b,c,d);
case  6 :
return _invoke__5878.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__5879.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__5880.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__5881.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__5882.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__5917.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__5918.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__5919.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__5920.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__5921.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__5922.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__5923.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__5924.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__5925.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__5926.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__5927.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5962 = coll;

if(cljs.core.truth_(and__3546__auto____5962))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____5962;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____5964 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5964))
{return or__3548__auto____5964;
} else
{var or__3548__auto____5965 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____5965))
{return or__3548__auto____5965;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5966 = coll;

if(cljs.core.truth_(and__3546__auto____5966))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____5966;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____5967 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5967))
{return or__3548__auto____5967;
} else
{var or__3548__auto____5968 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____5968))
{return or__3548__auto____5968;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6002 = coll;

if(cljs.core.truth_(and__3546__auto____6002))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6002;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6003 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6003))
{return or__3548__auto____6003;
} else
{var or__3548__auto____6004 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6004))
{return or__3548__auto____6004;
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
var _nth__6023 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6013 = coll;

if(cljs.core.truth_(and__3546__auto____6013))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6013;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6017 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6017))
{return or__3548__auto____6017;
} else
{var or__3548__auto____6018 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6018))
{return or__3548__auto____6018;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6024 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6019 = coll;

if(cljs.core.truth_(and__3546__auto____6019))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6019;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6021 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6021))
{return or__3548__auto____6021;
} else
{var or__3548__auto____6022 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6022))
{return or__3548__auto____6022;
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
return _nth__6023.call(this,coll,n);
case  3 :
return _nth__6024.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6029 = coll;

if(cljs.core.truth_(and__3546__auto____6029))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6029;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6032 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6032))
{return or__3548__auto____6032;
} else
{var or__3548__auto____6033 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6033))
{return or__3548__auto____6033;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6035 = coll;

if(cljs.core.truth_(and__3546__auto____6035))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6035;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6036 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6036))
{return or__3548__auto____6036;
} else
{var or__3548__auto____6038 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6038))
{return or__3548__auto____6038;
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
var _lookup__6057 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6047 = o;

if(cljs.core.truth_(and__3546__auto____6047))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6047;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6048 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6048))
{return or__3548__auto____6048;
} else
{var or__3548__auto____6049 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6049))
{return or__3548__auto____6049;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__6058 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6050 = o;

if(cljs.core.truth_(and__3546__auto____6050))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6050;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____6054 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6054))
{return or__3548__auto____6054;
} else
{var or__3548__auto____6055 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6055))
{return or__3548__auto____6055;
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
return _lookup__6057.call(this,o,k);
case  3 :
return _lookup__6058.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6072 = coll;

if(cljs.core.truth_(and__3546__auto____6072))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____6072;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____6076 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6076))
{return or__3548__auto____6076;
} else
{var or__3548__auto____6077 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6077))
{return or__3548__auto____6077;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____6086 = coll;

if(cljs.core.truth_(and__3546__auto____6086))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____6086;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____6088 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6088))
{return or__3548__auto____6088;
} else
{var or__3548__auto____6089 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____6089))
{return or__3548__auto____6089;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6098 = coll;

if(cljs.core.truth_(and__3546__auto____6098))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____6098;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____6100 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6100))
{return or__3548__auto____6100;
} else
{var or__3548__auto____6101 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____6101))
{return or__3548__auto____6101;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____6110 = coll;

if(cljs.core.truth_(and__3546__auto____6110))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____6110;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____6112 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6112))
{return or__3548__auto____6112;
} else
{var or__3548__auto____6113 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____6113))
{return or__3548__auto____6113;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6124 = coll;

if(cljs.core.truth_(and__3546__auto____6124))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____6124;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____6128 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6128))
{return or__3548__auto____6128;
} else
{var or__3548__auto____6137 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____6137))
{return or__3548__auto____6137;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6138 = coll;

if(cljs.core.truth_(and__3546__auto____6138))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____6138;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____6140 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6140))
{return or__3548__auto____6140;
} else
{var or__3548__auto____6142 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____6142))
{return or__3548__auto____6142;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____6154 = coll;

if(cljs.core.truth_(and__3546__auto____6154))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____6154;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____6157 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6157))
{return or__3548__auto____6157;
} else
{var or__3548__auto____6159 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____6159))
{return or__3548__auto____6159;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____6207 = o;

if(cljs.core.truth_(and__3546__auto____6207))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____6207;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____6209 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6209))
{return or__3548__auto____6209;
} else
{var or__3548__auto____6211 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____6211))
{return or__3548__auto____6211;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____6220 = o;

if(cljs.core.truth_(and__3546__auto____6220))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____6220;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____6223 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6223))
{return or__3548__auto____6223;
} else
{var or__3548__auto____6225 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____6225))
{return or__3548__auto____6225;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____6234 = o;

if(cljs.core.truth_(and__3546__auto____6234))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____6234;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____6236 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6236))
{return or__3548__auto____6236;
} else
{var or__3548__auto____6237 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____6237))
{return or__3548__auto____6237;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____6244 = o;

if(cljs.core.truth_(and__3546__auto____6244))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____6244;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____6245 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6245))
{return or__3548__auto____6245;
} else
{var or__3548__auto____6247 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____6247))
{return or__3548__auto____6247;
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
var _reduce__6268 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____6257 = coll;

if(cljs.core.truth_(and__3546__auto____6257))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6257;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____6259 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6259))
{return or__3548__auto____6259;
} else
{var or__3548__auto____6261 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6261))
{return or__3548__auto____6261;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__6269 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____6262 = coll;

if(cljs.core.truth_(and__3546__auto____6262))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6262;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____6264 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6264))
{return or__3548__auto____6264;
} else
{var or__3548__auto____6265 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6265))
{return or__3548__auto____6265;
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
return _reduce__6268.call(this,coll,f);
case  3 :
return _reduce__6269.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____6274 = o;

if(cljs.core.truth_(and__3546__auto____6274))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____6274;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____6275 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6275))
{return or__3548__auto____6275;
} else
{var or__3548__auto____6277 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____6277))
{return or__3548__auto____6277;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____6350 = o;

if(cljs.core.truth_(and__3546__auto____6350))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____6350;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____6352 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6352))
{return or__3548__auto____6352;
} else
{var or__3548__auto____6354 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____6354))
{return or__3548__auto____6354;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____6359 = o;

if(cljs.core.truth_(and__3546__auto____6359))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____6359;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____6361 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6361))
{return or__3548__auto____6361;
} else
{var or__3548__auto____6363 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____6363))
{return or__3548__auto____6363;
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
if(cljs.core.truth_((function (){var and__3546__auto____6372 = o;

if(cljs.core.truth_(and__3546__auto____6372))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____6372;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____6373 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6373))
{return or__3548__auto____6373;
} else
{var or__3548__auto____6374 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____6374))
{return or__3548__auto____6374;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____6378 = d;

if(cljs.core.truth_(and__3546__auto____6378))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____6378;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____6380 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____6380))
{return or__3548__auto____6380;
} else
{var or__3548__auto____6382 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6382))
{return or__3548__auto____6382;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____6387 = this$;

if(cljs.core.truth_(and__3546__auto____6387))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____6387;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____6389 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6389))
{return or__3548__auto____6389;
} else
{var or__3548__auto____6391 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____6391))
{return or__3548__auto____6391;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____6396 = this$;

if(cljs.core.truth_(and__3546__auto____6396))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____6396;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____6397 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6397))
{return or__3548__auto____6397;
} else
{var or__3548__auto____6398 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6398))
{return or__3548__auto____6398;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____6400 = this$;

if(cljs.core.truth_(and__3546__auto____6400))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____6400;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____6402 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6402))
{return or__3548__auto____6402;
} else
{var or__3548__auto____6404 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6404))
{return or__3548__auto____6404;
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
var G__6479 = null;
var G__6479__6480 = (function (o,k){
return null;
});
var G__6479__6481 = (function (o,k,not_found){
return not_found;
});
G__6479 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__6479__6480.call(this,o,k);
case  3 :
return G__6479__6481.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6479;
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
var G__6483 = null;
var G__6483__6484 = (function (_,f){
return f.call(null);
});
var G__6483__6485 = (function (_,f,start){
return start;
});
G__6483 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6483__6484.call(this,_,f);
case  3 :
return G__6483__6485.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6483;
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
var G__6508 = null;
var G__6508__6509 = (function (_,n){
return null;
});
var G__6508__6510 = (function (_,n,not_found){
return not_found;
});
G__6508 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__6508__6509.call(this,_,n);
case  3 :
return G__6508__6510.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6508;
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
var ci_reduce__6702 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__6695 = cljs.core._nth.call(null,cicoll,0);
var n__6696 = 1;

while(true){
if(cljs.core.truth_((n__6696 < cljs.core._count.call(null,cicoll))))
{{
var G__6707 = f.call(null,val__6695,cljs.core._nth.call(null,cicoll,n__6696));
var G__6708 = (n__6696 + 1);
val__6695 = G__6707;
n__6696 = G__6708;
continue;
}
} else
{return val__6695;
}
break;
}
}
});
var ci_reduce__6703 = (function (cicoll,f,val){
var val__6697 = val;
var n__6698 = 0;

while(true){
if(cljs.core.truth_((n__6698 < cljs.core._count.call(null,cicoll))))
{{
var G__6709 = f.call(null,val__6697,cljs.core._nth.call(null,cicoll,n__6698));
var G__6710 = (n__6698 + 1);
val__6697 = G__6709;
n__6698 = G__6710;
continue;
}
} else
{return val__6697;
}
break;
}
});
var ci_reduce__6704 = (function (cicoll,f,val,idx){
var val__6699 = val;
var n__6700 = idx;

while(true){
if(cljs.core.truth_((n__6700 < cljs.core._count.call(null,cicoll))))
{{
var G__6711 = f.call(null,val__6699,cljs.core._nth.call(null,cicoll,n__6700));
var G__6712 = (n__6700 + 1);
val__6699 = G__6711;
n__6700 = G__6712;
continue;
}
} else
{return val__6699;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__6702.call(this,cicoll,f);
case  3 :
return ci_reduce__6703.call(this,cicoll,f,val);
case  4 :
return ci_reduce__6704.call(this,cicoll,f,val,idx);
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
var this__6725 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6744 = null;
var G__6744__6745 = (function (_,f){
var this__6726 = this;
return cljs.core.ci_reduce.call(null,this__6726.a,f,(this__6726.a[this__6726.i]),(this__6726.i + 1));
});
var G__6744__6746 = (function (_,f,start){
var this__6727 = this;
return cljs.core.ci_reduce.call(null,this__6727.a,f,start,this__6727.i);
});
G__6744 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6744__6745.call(this,_,f);
case  3 :
return G__6744__6746.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6744;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6728 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6729 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6750 = null;
var G__6750__6751 = (function (coll,n){
var this__6730 = this;
var i__6731 = (n + this__6730.i);

if(cljs.core.truth_((i__6731 < this__6730.a.length)))
{return (this__6730.a[i__6731]);
} else
{return null;
}
});
var G__6750__6752 = (function (coll,n,not_found){
var this__6732 = this;
var i__6733 = (n + this__6732.i);

if(cljs.core.truth_((i__6733 < this__6732.a.length)))
{return (this__6732.a[i__6733]);
} else
{return not_found;
}
});
G__6750 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6750__6751.call(this,coll,n);
case  3 :
return G__6750__6752.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6750;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__6734 = this;
return (this__6734.a.length - this__6734.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__6735 = this;
return (this__6735.a[this__6735.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__6738 = this;
if(cljs.core.truth_(((this__6738.i + 1) < this__6738.a.length)))
{return (new cljs.core.IndexedSeq(this__6738.a,(this__6738.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__6741 = this;
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
var G__6780 = null;
var G__6780__6781 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6780__6782 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6780 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__6780__6781.call(this,array,f);
case  3 :
return G__6780__6782.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6780;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6784 = null;
var G__6784__6785 = (function (array,k){
return (array[k]);
});
var G__6784__6786 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6784 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__6784__6785.call(this,array,k);
case  3 :
return G__6784__6786.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6784;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6793 = null;
var G__6793__6794 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__6793__6795 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__6793 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__6793__6794.call(this,array,n);
case  3 :
return G__6793__6795.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6793;
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
var temp__3698__auto____6818 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6818))
{var s__6819 = temp__3698__auto____6818;

return cljs.core._first.call(null,s__6819);
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
var G__6907 = cljs.core.next.call(null,s);
s = G__6907;
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
var s__6912 = cljs.core.seq.call(null,x);
var n__6913 = 0;

while(true){
if(cljs.core.truth_(s__6912))
{{
var G__6914 = cljs.core.next.call(null,s__6912);
var G__6915 = (n__6913 + 1);
s__6912 = G__6914;
n__6913 = G__6915;
continue;
}
} else
{return n__6913;
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
var conj__6969 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__6971 = (function() { 
var G__6974__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6975 = conj.call(null,coll,x);
var G__6976 = cljs.core.first.call(null,xs);
var G__6977 = cljs.core.next.call(null,xs);
coll = G__6975;
x = G__6976;
xs = G__6977;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6974 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6974__delegate.call(this, coll, x, xs);
};
G__6974.cljs$lang$maxFixedArity = 2;
G__6974.cljs$lang$applyTo = (function (arglist__6979){
var coll = cljs.core.first(arglist__6979);
var x = cljs.core.first(cljs.core.next(arglist__6979));
var xs = cljs.core.rest(cljs.core.next(arglist__6979));
return G__6974__delegate.call(this, coll, x, xs);
});
return G__6974;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__6969.call(this,coll,x);
default:
return conj__6971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__6971.cljs$lang$applyTo;
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
var nth__6985 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__6986 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__6985.call(this,coll,n);
case  3 :
return nth__6986.call(this,coll,n,not_found);
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
var get__7003 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7004 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7003.call(this,o,k);
case  3 :
return get__7004.call(this,o,k,not_found);
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
var assoc__7012 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7013 = (function() { 
var G__7015__delegate = function (coll,k,v,kvs){
while(true){
var ret__7008 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7016 = ret__7008;
var G__7017 = cljs.core.first.call(null,kvs);
var G__7018 = cljs.core.second.call(null,kvs);
var G__7019 = cljs.core.nnext.call(null,kvs);
coll = G__7016;
k = G__7017;
v = G__7018;
kvs = G__7019;
continue;
}
} else
{return ret__7008;
}
break;
}
};
var G__7015 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7015__delegate.call(this, coll, k, v, kvs);
};
G__7015.cljs$lang$maxFixedArity = 3;
G__7015.cljs$lang$applyTo = (function (arglist__7020){
var coll = cljs.core.first(arglist__7020);
var k = cljs.core.first(cljs.core.next(arglist__7020));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7020)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7020)));
return G__7015__delegate.call(this, coll, k, v, kvs);
});
return G__7015;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7012.call(this,coll,k,v);
default:
return assoc__7013.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7013.cljs$lang$applyTo;
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
var dissoc__7026 = (function (coll){
return coll;
});
var dissoc__7029 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7030 = (function() { 
var G__7033__delegate = function (coll,k,ks){
while(true){
var ret__7024 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7035 = ret__7024;
var G__7036 = cljs.core.first.call(null,ks);
var G__7037 = cljs.core.next.call(null,ks);
coll = G__7035;
k = G__7036;
ks = G__7037;
continue;
}
} else
{return ret__7024;
}
break;
}
};
var G__7033 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7033__delegate.call(this, coll, k, ks);
};
G__7033.cljs$lang$maxFixedArity = 2;
G__7033.cljs$lang$applyTo = (function (arglist__7039){
var coll = cljs.core.first(arglist__7039);
var k = cljs.core.first(cljs.core.next(arglist__7039));
var ks = cljs.core.rest(cljs.core.next(arglist__7039));
return G__7033__delegate.call(this, coll, k, ks);
});
return G__7033;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7026.call(this,coll);
case  2 :
return dissoc__7029.call(this,coll,k);
default:
return dissoc__7030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7030.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____7054 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7055 = x__445__auto____7054;

if(cljs.core.truth_(and__3546__auto____7055))
{var and__3546__auto____7057 = x__445__auto____7054.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7057))
{return cljs.core.not.call(null,x__445__auto____7054.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7057;
}
} else
{return and__3546__auto____7055;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____7054);
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
var disj__7075 = (function (coll){
return coll;
});
var disj__7076 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7077 = (function() { 
var G__7079__delegate = function (coll,k,ks){
while(true){
var ret__7074 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7080 = ret__7074;
var G__7081 = cljs.core.first.call(null,ks);
var G__7082 = cljs.core.next.call(null,ks);
coll = G__7080;
k = G__7081;
ks = G__7082;
continue;
}
} else
{return ret__7074;
}
break;
}
};
var G__7079 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7079__delegate.call(this, coll, k, ks);
};
G__7079.cljs$lang$maxFixedArity = 2;
G__7079.cljs$lang$applyTo = (function (arglist__7088){
var coll = cljs.core.first(arglist__7088);
var k = cljs.core.first(cljs.core.next(arglist__7088));
var ks = cljs.core.rest(cljs.core.next(arglist__7088));
return G__7079__delegate.call(this, coll, k, ks);
});
return G__7079;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7075.call(this,coll);
case  2 :
return disj__7076.call(this,coll,k);
default:
return disj__7077.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7077.cljs$lang$applyTo;
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
{var x__445__auto____7097 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7098 = x__445__auto____7097;

if(cljs.core.truth_(and__3546__auto____7098))
{var and__3546__auto____7101 = x__445__auto____7097.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7101))
{return cljs.core.not.call(null,x__445__auto____7097.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7101;
}
} else
{return and__3546__auto____7098;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____7097);
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
{var x__445__auto____7105 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7106 = x__445__auto____7105;

if(cljs.core.truth_(and__3546__auto____7106))
{var and__3546__auto____7109 = x__445__auto____7105.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7109))
{return cljs.core.not.call(null,x__445__auto____7105.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7109;
}
} else
{return and__3546__auto____7106;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____7105);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____7121 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7122 = x__445__auto____7121;

if(cljs.core.truth_(and__3546__auto____7122))
{var and__3546__auto____7126 = x__445__auto____7121.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7126))
{return cljs.core.not.call(null,x__445__auto____7121.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7126;
}
} else
{return and__3546__auto____7122;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____7121);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____7137 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7138 = x__445__auto____7137;

if(cljs.core.truth_(and__3546__auto____7138))
{var and__3546__auto____7139 = x__445__auto____7137.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7139))
{return cljs.core.not.call(null,x__445__auto____7137.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7139;
}
} else
{return and__3546__auto____7138;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____7137);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____7195 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7196 = x__445__auto____7195;

if(cljs.core.truth_(and__3546__auto____7196))
{var and__3546__auto____7197 = x__445__auto____7195.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7197))
{return cljs.core.not.call(null,x__445__auto____7195.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7197;
}
} else
{return and__3546__auto____7196;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____7195);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____7214 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7215 = x__445__auto____7214;

if(cljs.core.truth_(and__3546__auto____7215))
{var and__3546__auto____7217 = x__445__auto____7214.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7217))
{return cljs.core.not.call(null,x__445__auto____7214.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7217;
}
} else
{return and__3546__auto____7215;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____7214);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____7270 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7271 = x__445__auto____7270;

if(cljs.core.truth_(and__3546__auto____7271))
{var and__3546__auto____7272 = x__445__auto____7270.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7272))
{return cljs.core.not.call(null,x__445__auto____7270.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7272;
}
} else
{return and__3546__auto____7271;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____7270);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7281 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7281.push(key);
}));
return keys__7281;
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
{var x__445__auto____7302 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7306 = x__445__auto____7302;

if(cljs.core.truth_(and__3546__auto____7306))
{var and__3546__auto____7310 = x__445__auto____7302.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7310))
{return cljs.core.not.call(null,x__445__auto____7302.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7310;
}
} else
{return and__3546__auto____7306;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____7302);
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
var and__3546__auto____7327 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7327))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7332 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____7332))
{return or__3548__auto____7332;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____7327;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7335 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7335))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____7335;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7342 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7342))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____7342;
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
var and__3546__auto____7379 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7379))
{return (n == n.toFixed());
} else
{return and__3546__auto____7379;
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
if(cljs.core.truth_((function (){var and__3546__auto____7414 = coll;

if(cljs.core.truth_(and__3546__auto____7414))
{var and__3546__auto____7415 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7415))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7415;
}
} else
{return and__3546__auto____7414;
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
var distinct_QMARK___7442 = (function (x){
return true;
});
var distinct_QMARK___7443 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7444 = (function() { 
var G__7447__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7436 = cljs.core.set([y,x]);
var xs__7437 = more;

while(true){
var x__7438 = cljs.core.first.call(null,xs__7437);
var etc__7439 = cljs.core.next.call(null,xs__7437);

if(cljs.core.truth_(xs__7437))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7436,x__7438)))
{return false;
} else
{{
var G__7463 = cljs.core.conj.call(null,s__7436,x__7438);
var G__7464 = etc__7439;
s__7436 = G__7463;
xs__7437 = G__7464;
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
var G__7447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7447__delegate.call(this, x, y, more);
};
G__7447.cljs$lang$maxFixedArity = 2;
G__7447.cljs$lang$applyTo = (function (arglist__7470){
var x = cljs.core.first(arglist__7470);
var y = cljs.core.first(cljs.core.next(arglist__7470));
var more = cljs.core.rest(cljs.core.next(arglist__7470));
return G__7447__delegate.call(this, x, y, more);
});
return G__7447;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7442.call(this,x);
case  2 :
return distinct_QMARK___7443.call(this,x,y);
default:
return distinct_QMARK___7444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7444.cljs$lang$applyTo;
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
var r__7477 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7477)))
{return r__7477;
} else
{if(cljs.core.truth_(r__7477))
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
var sort__7502 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7503 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7489 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7489,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7489);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7502.call(this,comp);
case  2 :
return sort__7503.call(this,comp,coll);
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
var sort_by__7517 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7519 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7517.call(this,keyfn,comp);
case  3 :
return sort_by__7519.call(this,keyfn,comp,coll);
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
var reduce__7535 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7536 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7535.call(this,f,val);
case  3 :
return reduce__7536.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7565 = (function (f,coll){
var temp__3695__auto____7548 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7548))
{var s__7549 = temp__3695__auto____7548;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7549),cljs.core.next.call(null,s__7549));
} else
{return f.call(null);
}
});
var seq_reduce__7566 = (function (f,val,coll){
var val__7559 = val;
var coll__7561 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7561))
{{
var G__7575 = f.call(null,val__7559,cljs.core.first.call(null,coll__7561));
var G__7576 = cljs.core.next.call(null,coll__7561);
val__7559 = G__7575;
coll__7561 = G__7576;
continue;
}
} else
{return val__7559;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7565.call(this,f,val);
case  3 :
return seq_reduce__7566.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7582 = null;
var G__7582__7583 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7582__7584 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7582 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7582__7583.call(this,coll,f);
case  3 :
return G__7582__7584.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7582;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7606 = (function (){
return 0;
});
var _PLUS___7607 = (function (x){
return x;
});
var _PLUS___7608 = (function (x,y){
return (x + y);
});
var _PLUS___7609 = (function() { 
var G__7615__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7615 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7615__delegate.call(this, x, y, more);
};
G__7615.cljs$lang$maxFixedArity = 2;
G__7615.cljs$lang$applyTo = (function (arglist__7616){
var x = cljs.core.first(arglist__7616);
var y = cljs.core.first(cljs.core.next(arglist__7616));
var more = cljs.core.rest(cljs.core.next(arglist__7616));
return G__7615__delegate.call(this, x, y, more);
});
return G__7615;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7606.call(this);
case  1 :
return _PLUS___7607.call(this,x);
case  2 :
return _PLUS___7608.call(this,x,y);
default:
return _PLUS___7609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7609.cljs$lang$applyTo;
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
var ___7626 = (function (x){
return (- x);
});
var ___7627 = (function (x,y){
return (x - y);
});
var ___7628 = (function() { 
var G__7637__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7637 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7637__delegate.call(this, x, y, more);
};
G__7637.cljs$lang$maxFixedArity = 2;
G__7637.cljs$lang$applyTo = (function (arglist__7639){
var x = cljs.core.first(arglist__7639);
var y = cljs.core.first(cljs.core.next(arglist__7639));
var more = cljs.core.rest(cljs.core.next(arglist__7639));
return G__7637__delegate.call(this, x, y, more);
});
return G__7637;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7626.call(this,x);
case  2 :
return ___7627.call(this,x,y);
default:
return ___7628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7628.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7646 = (function (){
return 1;
});
var _STAR___7649 = (function (x){
return x;
});
var _STAR___7652 = (function (x,y){
return (x * y);
});
var _STAR___7653 = (function() { 
var G__7658__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7658 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7658__delegate.call(this, x, y, more);
};
G__7658.cljs$lang$maxFixedArity = 2;
G__7658.cljs$lang$applyTo = (function (arglist__7659){
var x = cljs.core.first(arglist__7659);
var y = cljs.core.first(cljs.core.next(arglist__7659));
var more = cljs.core.rest(cljs.core.next(arglist__7659));
return G__7658__delegate.call(this, x, y, more);
});
return G__7658;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7646.call(this);
case  1 :
return _STAR___7649.call(this,x);
case  2 :
return _STAR___7652.call(this,x,y);
default:
return _STAR___7653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7653.cljs$lang$applyTo;
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
var _SLASH___7666 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7667 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___7668 = (function() { 
var G__7670__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7670 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7670__delegate.call(this, x, y, more);
};
G__7670.cljs$lang$maxFixedArity = 2;
G__7670.cljs$lang$applyTo = (function (arglist__7672){
var x = cljs.core.first(arglist__7672);
var y = cljs.core.first(cljs.core.next(arglist__7672));
var more = cljs.core.rest(cljs.core.next(arglist__7672));
return G__7670__delegate.call(this, x, y, more);
});
return G__7670;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7666.call(this,x);
case  2 :
return _SLASH___7667.call(this,x,y);
default:
return _SLASH___7668.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7668.cljs$lang$applyTo;
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
var _LT___7674 = (function (x){
return true;
});
var _LT___7675 = (function (x,y){
return (x < y);
});
var _LT___7676 = (function() { 
var G__7678__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7680 = y;
var G__7681 = cljs.core.first.call(null,more);
var G__7682 = cljs.core.next.call(null,more);
x = G__7680;
y = G__7681;
more = G__7682;
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
var G__7678 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7678__delegate.call(this, x, y, more);
};
G__7678.cljs$lang$maxFixedArity = 2;
G__7678.cljs$lang$applyTo = (function (arglist__7686){
var x = cljs.core.first(arglist__7686);
var y = cljs.core.first(cljs.core.next(arglist__7686));
var more = cljs.core.rest(cljs.core.next(arglist__7686));
return G__7678__delegate.call(this, x, y, more);
});
return G__7678;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7674.call(this,x);
case  2 :
return _LT___7675.call(this,x,y);
default:
return _LT___7676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7676.cljs$lang$applyTo;
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
var _LT__EQ___7710 = (function (x){
return true;
});
var _LT__EQ___7712 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7713 = (function() { 
var G__7716__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7717 = y;
var G__7718 = cljs.core.first.call(null,more);
var G__7719 = cljs.core.next.call(null,more);
x = G__7717;
y = G__7718;
more = G__7719;
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
var G__7716 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7716__delegate.call(this, x, y, more);
};
G__7716.cljs$lang$maxFixedArity = 2;
G__7716.cljs$lang$applyTo = (function (arglist__7720){
var x = cljs.core.first(arglist__7720);
var y = cljs.core.first(cljs.core.next(arglist__7720));
var more = cljs.core.rest(cljs.core.next(arglist__7720));
return G__7716__delegate.call(this, x, y, more);
});
return G__7716;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7710.call(this,x);
case  2 :
return _LT__EQ___7712.call(this,x,y);
default:
return _LT__EQ___7713.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7713.cljs$lang$applyTo;
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
var _GT___7760 = (function (x){
return true;
});
var _GT___7761 = (function (x,y){
return (x > y);
});
var _GT___7762 = (function() { 
var G__7764__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7765 = y;
var G__7766 = cljs.core.first.call(null,more);
var G__7767 = cljs.core.next.call(null,more);
x = G__7765;
y = G__7766;
more = G__7767;
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
var G__7764 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7764__delegate.call(this, x, y, more);
};
G__7764.cljs$lang$maxFixedArity = 2;
G__7764.cljs$lang$applyTo = (function (arglist__7768){
var x = cljs.core.first(arglist__7768);
var y = cljs.core.first(cljs.core.next(arglist__7768));
var more = cljs.core.rest(cljs.core.next(arglist__7768));
return G__7764__delegate.call(this, x, y, more);
});
return G__7764;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7760.call(this,x);
case  2 :
return _GT___7761.call(this,x,y);
default:
return _GT___7762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7762.cljs$lang$applyTo;
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
var _GT__EQ___7777 = (function (x){
return true;
});
var _GT__EQ___7778 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7779 = (function() { 
var G__7781__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7782 = y;
var G__7783 = cljs.core.first.call(null,more);
var G__7784 = cljs.core.next.call(null,more);
x = G__7782;
y = G__7783;
more = G__7784;
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
var G__7781 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7781__delegate.call(this, x, y, more);
};
G__7781.cljs$lang$maxFixedArity = 2;
G__7781.cljs$lang$applyTo = (function (arglist__7785){
var x = cljs.core.first(arglist__7785);
var y = cljs.core.first(cljs.core.next(arglist__7785));
var more = cljs.core.rest(cljs.core.next(arglist__7785));
return G__7781__delegate.call(this, x, y, more);
});
return G__7781;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7777.call(this,x);
case  2 :
return _GT__EQ___7778.call(this,x,y);
default:
return _GT__EQ___7779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7779.cljs$lang$applyTo;
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
var max__7790 = (function (x){
return x;
});
var max__7809 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7810 = (function() { 
var G__7813__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7813 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7813__delegate.call(this, x, y, more);
};
G__7813.cljs$lang$maxFixedArity = 2;
G__7813.cljs$lang$applyTo = (function (arglist__7814){
var x = cljs.core.first(arglist__7814);
var y = cljs.core.first(cljs.core.next(arglist__7814));
var more = cljs.core.rest(cljs.core.next(arglist__7814));
return G__7813__delegate.call(this, x, y, more);
});
return G__7813;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7790.call(this,x);
case  2 :
return max__7809.call(this,x,y);
default:
return max__7810.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7810.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7815 = (function (x){
return x;
});
var min__7816 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7817 = (function() { 
var G__7819__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7819 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7819__delegate.call(this, x, y, more);
};
G__7819.cljs$lang$maxFixedArity = 2;
G__7819.cljs$lang$applyTo = (function (arglist__7824){
var x = cljs.core.first(arglist__7824);
var y = cljs.core.first(cljs.core.next(arglist__7824));
var more = cljs.core.rest(cljs.core.next(arglist__7824));
return G__7819__delegate.call(this, x, y, more);
});
return G__7819;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7815.call(this,x);
case  2 :
return min__7816.call(this,x,y);
default:
return min__7817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7817.cljs$lang$applyTo;
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
var rem__7842 = (n % d);

return cljs.core.fix.call(null,((n - rem__7842) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7849 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7849));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7851 = (function (){
return Math.random.call(null);
});
var rand__7854 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7851.call(this);
case  1 :
return rand__7854.call(this,n);
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
var _EQ__EQ___7926 = (function (x){
return true;
});
var _EQ__EQ___7927 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7928 = (function() { 
var G__7933__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7934 = y;
var G__7935 = cljs.core.first.call(null,more);
var G__7936 = cljs.core.next.call(null,more);
x = G__7934;
y = G__7935;
more = G__7936;
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
var G__7933 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7933__delegate.call(this, x, y, more);
};
G__7933.cljs$lang$maxFixedArity = 2;
G__7933.cljs$lang$applyTo = (function (arglist__7939){
var x = cljs.core.first(arglist__7939);
var y = cljs.core.first(cljs.core.next(arglist__7939));
var more = cljs.core.rest(cljs.core.next(arglist__7939));
return G__7933__delegate.call(this, x, y, more);
});
return G__7933;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7926.call(this,x);
case  2 :
return _EQ__EQ___7927.call(this,x,y);
default:
return _EQ__EQ___7928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7928.cljs$lang$applyTo;
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
var n__7954 = n;
var xs__7956 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7957 = xs__7956;

if(cljs.core.truth_(and__3546__auto____7957))
{return (n__7954 > 0);
} else
{return and__3546__auto____7957;
}
})()))
{{
var G__7962 = (n__7954 - 1);
var G__7963 = cljs.core.next.call(null,xs__7956);
n__7954 = G__7962;
xs__7956 = G__7963;
continue;
}
} else
{return xs__7956;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8004 = null;
var G__8004__8005 = (function (coll,n){
var temp__3695__auto____7986 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7986))
{var xs__7990 = temp__3695__auto____7986;

return cljs.core.first.call(null,xs__7990);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8004__8006 = (function (coll,n,not_found){
var temp__3695__auto____7998 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7998))
{var xs__8001 = temp__3695__auto____7998;

return cljs.core.first.call(null,xs__8001);
} else
{return not_found;
}
});
G__8004 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8004__8005.call(this,coll,n);
case  3 :
return G__8004__8006.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8004;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8014 = (function (){
return "";
});
var str_STAR___8015 = (function (x){
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
var str_STAR___8016 = (function() { 
var G__8018__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8019 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8020 = cljs.core.next.call(null,more);
sb = G__8019;
more = G__8020;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8018 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8018__delegate.call(this, x, ys);
};
G__8018.cljs$lang$maxFixedArity = 1;
G__8018.cljs$lang$applyTo = (function (arglist__8022){
var x = cljs.core.first(arglist__8022);
var ys = cljs.core.rest(arglist__8022);
return G__8018__delegate.call(this, x, ys);
});
return G__8018;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8014.call(this);
case  1 :
return str_STAR___8015.call(this,x);
default:
return str_STAR___8016.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8016.cljs$lang$applyTo;
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
var str__8041 = (function (){
return "";
});
var str__8042 = (function (x){
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
var str__8043 = (function() { 
var G__8051__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__8051 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8051__delegate.call(this, x, ys);
};
G__8051.cljs$lang$maxFixedArity = 1;
G__8051.cljs$lang$applyTo = (function (arglist__8053){
var x = cljs.core.first(arglist__8053);
var ys = cljs.core.rest(arglist__8053);
return G__8051__delegate.call(this, x, ys);
});
return G__8051;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8041.call(this);
case  1 :
return str__8042.call(this,x);
default:
return str__8043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8043.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8068 = (function (s,start){
return s.substring(start);
});
var subs__8069 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8068.call(this,s,start);
case  3 :
return subs__8069.call(this,s,start,end);
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
var symbol__8089 = (function (name){
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
var symbol__8090 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8089.call(this,ns);
case  2 :
return symbol__8090.call(this,ns,name);
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
var keyword__8103 = (function (name){
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
var keyword__8104 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8103.call(this,ns);
case  2 :
return keyword__8104.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8110 = cljs.core.seq.call(null,x);
var ys__8111 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__8110)))
{return cljs.core.nil_QMARK_.call(null,ys__8111);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__8111)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8110),cljs.core.first.call(null,ys__8111))))
{{
var G__8116 = cljs.core.next.call(null,xs__8110);
var G__8117 = cljs.core.next.call(null,ys__8111);
xs__8110 = G__8116;
ys__8111 = G__8117;
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
return cljs.core.reduce.call(null,(function (p1__8120_SHARP_,p2__8122_SHARP_){
return cljs.core.hash_combine.call(null,p1__8120_SHARP_,cljs.core.hash.call(null,p2__8122_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8127__8128 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8127__8128))
{var G__8130__8132 = cljs.core.first.call(null,G__8127__8128);
var vec__8131__8133 = G__8130__8132;
var key_name__8134 = cljs.core.nth.call(null,vec__8131__8133,0,null);
var f__8135 = cljs.core.nth.call(null,vec__8131__8133,1,null);
var G__8127__8136 = G__8127__8128;

var G__8130__8137 = G__8130__8132;
var G__8127__8138 = G__8127__8136;

while(true){
var vec__8139__8140 = G__8130__8137;
var key_name__8142 = cljs.core.nth.call(null,vec__8139__8140,0,null);
var f__8143 = cljs.core.nth.call(null,vec__8139__8140,1,null);
var G__8127__8145 = G__8127__8138;

var str_name__8146 = cljs.core.name.call(null,key_name__8142);

obj[str_name__8146] = f__8143;
var temp__3698__auto____8147 = cljs.core.next.call(null,G__8127__8145);

if(cljs.core.truth_(temp__3698__auto____8147))
{var G__8127__8148 = temp__3698__auto____8147;

{
var G__8161 = cljs.core.first.call(null,G__8127__8148);
var G__8162 = G__8127__8148;
G__8130__8137 = G__8161;
G__8127__8138 = G__8162;
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
var this__8171 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8172 = this;
return (new cljs.core.List(this__8172.meta,o,coll,(this__8172.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8173 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8174 = this;
return this__8174.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8175 = this;
return this__8175.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8176 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8177 = this;
return this__8177.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8178 = this;
return this__8178.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8179 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8181 = this;
return (new cljs.core.List(meta,this__8181.first,this__8181.rest,this__8181.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8182 = this;
return this__8182.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8183 = this;
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
var this__8198 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8199 = this;
return (new cljs.core.List(this__8199.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8200 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8202 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8204 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8208 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8213 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8214 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8216 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8219 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8221 = this;
return this__8221.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8224 = this;
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
list.cljs$lang$applyTo = (function (arglist__8242){
var items = cljs.core.seq( arglist__8242 );;
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
var this__8253 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8255 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8257 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8258 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8258.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8259 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8260 = this;
return this__8260.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8261 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__8261.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__8261.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8262 = this;
return this__8262.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8263 = this;
return (new cljs.core.Cons(meta,this__8263.first,this__8263.rest));
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
var G__8304 = null;
var G__8304__8305 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8304__8306 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8304 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8304__8305.call(this,string,f);
case  3 :
return G__8304__8306.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8304;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8309 = null;
var G__8309__8310 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8309__8311 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8309 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8309__8310.call(this,string,k);
case  3 :
return G__8309__8311.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8309;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8313 = null;
var G__8313__8314 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8313__8315 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8313 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8313__8314.call(this,string,n);
case  3 :
return G__8313__8315.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8313;
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
var G__8322 = null;
var G__8322__8323 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__8322__8324 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__8322 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__8322__8323.call(this,this$,coll);
case  3 :
return G__8322__8324.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8322;
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
var x__8358 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8358;
} else
{lazy_seq.x = x__8358.call(null);
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
var this__8368 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8372 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8374 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8375 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8375.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8378 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8385 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8386 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8393 = this;
return this__8393.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8394 = this;
return (new cljs.core.LazySeq(meta,this__8394.realized,this__8394.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8413 = cljs.core.array.call(null);

var s__8417 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8417)))
{ary__8413.push(cljs.core.first.call(null,s__8417));
{
var G__8420 = cljs.core.next.call(null,s__8417);
s__8417 = G__8420;
continue;
}
} else
{return ary__8413;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8421 = s;
var i__8422 = n;
var sum__8423 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8425 = (i__8422 > 0);

if(cljs.core.truth_(and__3546__auto____8425))
{return cljs.core.seq.call(null,s__8421);
} else
{return and__3546__auto____8425;
}
})()))
{{
var G__8434 = cljs.core.next.call(null,s__8421);
var G__8436 = (i__8422 - 1);
var G__8437 = (sum__8423 + 1);
s__8421 = G__8434;
i__8422 = G__8436;
sum__8423 = G__8437;
continue;
}
} else
{return sum__8423;
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
var concat__8491 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8494 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8496 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8443 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8443))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8443),concat.call(null,cljs.core.rest.call(null,s__8443),y));
} else
{return y;
}
})));
});
var concat__8497 = (function() { 
var G__8507__delegate = function (x,y,zs){
var cat__8447 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8445 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8445))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8445),cat.call(null,cljs.core.rest.call(null,xys__8445),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8447.call(null,concat.call(null,x,y),zs);
};
var G__8507 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8507__delegate.call(this, x, y, zs);
};
G__8507.cljs$lang$maxFixedArity = 2;
G__8507.cljs$lang$applyTo = (function (arglist__8518){
var x = cljs.core.first(arglist__8518);
var y = cljs.core.first(cljs.core.next(arglist__8518));
var zs = cljs.core.rest(cljs.core.next(arglist__8518));
return G__8507__delegate.call(this, x, y, zs);
});
return G__8507;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8491.call(this);
case  1 :
return concat__8494.call(this,x);
case  2 :
return concat__8496.call(this,x,y);
default:
return concat__8497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8497.cljs$lang$applyTo;
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
var list_STAR___8529 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8530 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8531 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8580 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8603 = (function() { 
var G__8611__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8611 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8611__delegate.call(this, a, b, c, d, more);
};
G__8611.cljs$lang$maxFixedArity = 4;
G__8611.cljs$lang$applyTo = (function (arglist__8612){
var a = cljs.core.first(arglist__8612);
var b = cljs.core.first(cljs.core.next(arglist__8612));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8612)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8612))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8612))));
return G__8611__delegate.call(this, a, b, c, d, more);
});
return G__8611;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8529.call(this,a);
case  2 :
return list_STAR___8530.call(this,a,b);
case  3 :
return list_STAR___8531.call(this,a,b,c);
case  4 :
return list_STAR___8580.call(this,a,b,c,d);
default:
return list_STAR___8603.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8603.cljs$lang$applyTo;
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
var apply__8700 = (function (f,args){
var fixed_arity__8614 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8614 + 1)) <= fixed_arity__8614)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8701 = (function (f,x,args){
var arglist__8620 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8621 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8620,fixed_arity__8621) <= fixed_arity__8621)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8620));
} else
{return f.cljs$lang$applyTo(arglist__8620);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8620));
}
});
var apply__8702 = (function (f,x,y,args){
var arglist__8628 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8630 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8628,fixed_arity__8630) <= fixed_arity__8630)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8628));
} else
{return f.cljs$lang$applyTo(arglist__8628);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8628));
}
});
var apply__8703 = (function (f,x,y,z,args){
var arglist__8633 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8688 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8633,fixed_arity__8688) <= fixed_arity__8688)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8633));
} else
{return f.cljs$lang$applyTo(arglist__8633);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8633));
}
});
var apply__8704 = (function() { 
var G__8708__delegate = function (f,a,b,c,d,args){
var arglist__8695 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8696 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8695,fixed_arity__8696) <= fixed_arity__8696)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8695));
} else
{return f.cljs$lang$applyTo(arglist__8695);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8695));
}
};
var G__8708 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8708__delegate.call(this, f, a, b, c, d, args);
};
G__8708.cljs$lang$maxFixedArity = 5;
G__8708.cljs$lang$applyTo = (function (arglist__8714){
var f = cljs.core.first(arglist__8714);
var a = cljs.core.first(cljs.core.next(arglist__8714));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8714)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8714))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8714)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8714)))));
return G__8708__delegate.call(this, f, a, b, c, d, args);
});
return G__8708;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8700.call(this,f,a);
case  3 :
return apply__8701.call(this,f,a,b);
case  4 :
return apply__8702.call(this,f,a,b,c);
case  5 :
return apply__8703.call(this,f,a,b,c,d);
default:
return apply__8704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8704.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8718){
var obj = cljs.core.first(arglist__8718);
var f = cljs.core.first(cljs.core.next(arglist__8718));
var args = cljs.core.rest(cljs.core.next(arglist__8718));
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
var not_EQ___8722 = (function (x){
return false;
});
var not_EQ___8723 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8724 = (function() { 
var G__8727__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8727 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8727__delegate.call(this, x, y, more);
};
G__8727.cljs$lang$maxFixedArity = 2;
G__8727.cljs$lang$applyTo = (function (arglist__8728){
var x = cljs.core.first(arglist__8728);
var y = cljs.core.first(cljs.core.next(arglist__8728));
var more = cljs.core.rest(cljs.core.next(arglist__8728));
return G__8727__delegate.call(this, x, y, more);
});
return G__8727;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8722.call(this,x);
case  2 :
return not_EQ___8723.call(this,x,y);
default:
return not_EQ___8724.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8724.cljs$lang$applyTo;
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
var G__8738 = pred;
var G__8739 = cljs.core.next.call(null,coll);
pred = G__8738;
coll = G__8739;
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
{var or__3548__auto____8743 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____8743))
{return or__3548__auto____8743;
} else
{{
var G__8748 = pred;
var G__8749 = cljs.core.next.call(null,coll);
pred = G__8748;
coll = G__8749;
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
var G__8872 = null;
var G__8872__8873 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8872__8874 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8872__8875 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8872__8876 = (function() { 
var G__8878__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8878 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8878__delegate.call(this, x, y, zs);
};
G__8878.cljs$lang$maxFixedArity = 2;
G__8878.cljs$lang$applyTo = (function (arglist__8879){
var x = cljs.core.first(arglist__8879);
var y = cljs.core.first(cljs.core.next(arglist__8879));
var zs = cljs.core.rest(cljs.core.next(arglist__8879));
return G__8878__delegate.call(this, x, y, zs);
});
return G__8878;
})()
;
G__8872 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8872__8873.call(this);
case  1 :
return G__8872__8874.call(this,x);
case  2 :
return G__8872__8875.call(this,x,y);
default:
return G__8872__8876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8872.cljs$lang$maxFixedArity = 2;
G__8872.cljs$lang$applyTo = G__8872__8876.cljs$lang$applyTo;
return G__8872;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8883__delegate = function (args){
return x;
};
var G__8883 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8883__delegate.call(this, args);
};
G__8883.cljs$lang$maxFixedArity = 0;
G__8883.cljs$lang$applyTo = (function (arglist__8884){
var args = cljs.core.seq( arglist__8884 );;
return G__8883__delegate.call(this, args);
});
return G__8883;
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
var comp__8888 = (function (){
return cljs.core.identity;
});
var comp__8889 = (function (f){
return f;
});
var comp__8890 = (function (f,g){
return (function() {
var G__8894 = null;
var G__8894__8895 = (function (){
return f.call(null,g.call(null));
});
var G__8894__8896 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8894__8897 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8894__8898 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8894__8899 = (function() { 
var G__8907__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8907 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8907__delegate.call(this, x, y, z, args);
};
G__8907.cljs$lang$maxFixedArity = 3;
G__8907.cljs$lang$applyTo = (function (arglist__8908){
var x = cljs.core.first(arglist__8908);
var y = cljs.core.first(cljs.core.next(arglist__8908));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8908)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8908)));
return G__8907__delegate.call(this, x, y, z, args);
});
return G__8907;
})()
;
G__8894 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8894__8895.call(this);
case  1 :
return G__8894__8896.call(this,x);
case  2 :
return G__8894__8897.call(this,x,y);
case  3 :
return G__8894__8898.call(this,x,y,z);
default:
return G__8894__8899.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8894.cljs$lang$maxFixedArity = 3;
G__8894.cljs$lang$applyTo = G__8894__8899.cljs$lang$applyTo;
return G__8894;
})()
});
var comp__8891 = (function (f,g,h){
return (function() {
var G__8911 = null;
var G__8911__8912 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8911__8913 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8911__8914 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8911__8915 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8911__8916 = (function() { 
var G__8918__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8918 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8918__delegate.call(this, x, y, z, args);
};
G__8918.cljs$lang$maxFixedArity = 3;
G__8918.cljs$lang$applyTo = (function (arglist__8924){
var x = cljs.core.first(arglist__8924);
var y = cljs.core.first(cljs.core.next(arglist__8924));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8924)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8924)));
return G__8918__delegate.call(this, x, y, z, args);
});
return G__8918;
})()
;
G__8911 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8911__8912.call(this);
case  1 :
return G__8911__8913.call(this,x);
case  2 :
return G__8911__8914.call(this,x,y);
case  3 :
return G__8911__8915.call(this,x,y,z);
default:
return G__8911__8916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8911.cljs$lang$maxFixedArity = 3;
G__8911.cljs$lang$applyTo = G__8911__8916.cljs$lang$applyTo;
return G__8911;
})()
});
var comp__8892 = (function() { 
var G__8926__delegate = function (f1,f2,f3,fs){
var fs__8885 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8927__delegate = function (args){
var ret__8886 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8885),args);
var fs__8887 = cljs.core.next.call(null,fs__8885);

while(true){
if(cljs.core.truth_(fs__8887))
{{
var G__8928 = cljs.core.first.call(null,fs__8887).call(null,ret__8886);
var G__8929 = cljs.core.next.call(null,fs__8887);
ret__8886 = G__8928;
fs__8887 = G__8929;
continue;
}
} else
{return ret__8886;
}
break;
}
};
var G__8927 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8927__delegate.call(this, args);
};
G__8927.cljs$lang$maxFixedArity = 0;
G__8927.cljs$lang$applyTo = (function (arglist__8930){
var args = cljs.core.seq( arglist__8930 );;
return G__8927__delegate.call(this, args);
});
return G__8927;
})()
;
};
var G__8926 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8926__delegate.call(this, f1, f2, f3, fs);
};
G__8926.cljs$lang$maxFixedArity = 3;
G__8926.cljs$lang$applyTo = (function (arglist__8931){
var f1 = cljs.core.first(arglist__8931);
var f2 = cljs.core.first(cljs.core.next(arglist__8931));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8931)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8931)));
return G__8926__delegate.call(this, f1, f2, f3, fs);
});
return G__8926;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8888.call(this);
case  1 :
return comp__8889.call(this,f1);
case  2 :
return comp__8890.call(this,f1,f2);
case  3 :
return comp__8891.call(this,f1,f2,f3);
default:
return comp__8892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8892.cljs$lang$applyTo;
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
var partial__9014 = (function (f,arg1){
return (function() { 
var G__9020__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9020 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9020__delegate.call(this, args);
};
G__9020.cljs$lang$maxFixedArity = 0;
G__9020.cljs$lang$applyTo = (function (arglist__9021){
var args = cljs.core.seq( arglist__9021 );;
return G__9020__delegate.call(this, args);
});
return G__9020;
})()
;
});
var partial__9015 = (function (f,arg1,arg2){
return (function() { 
var G__9022__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9022 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9022__delegate.call(this, args);
};
G__9022.cljs$lang$maxFixedArity = 0;
G__9022.cljs$lang$applyTo = (function (arglist__9023){
var args = cljs.core.seq( arglist__9023 );;
return G__9022__delegate.call(this, args);
});
return G__9022;
})()
;
});
var partial__9016 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9024__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9024 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9024__delegate.call(this, args);
};
G__9024.cljs$lang$maxFixedArity = 0;
G__9024.cljs$lang$applyTo = (function (arglist__9025){
var args = cljs.core.seq( arglist__9025 );;
return G__9024__delegate.call(this, args);
});
return G__9024;
})()
;
});
var partial__9017 = (function() { 
var G__9026__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9027__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9027 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9027__delegate.call(this, args);
};
G__9027.cljs$lang$maxFixedArity = 0;
G__9027.cljs$lang$applyTo = (function (arglist__9028){
var args = cljs.core.seq( arglist__9028 );;
return G__9027__delegate.call(this, args);
});
return G__9027;
})()
;
};
var G__9026 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9026__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9026.cljs$lang$maxFixedArity = 4;
G__9026.cljs$lang$applyTo = (function (arglist__9029){
var f = cljs.core.first(arglist__9029);
var arg1 = cljs.core.first(cljs.core.next(arglist__9029));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9029)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9029))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9029))));
return G__9026__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__9026;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__9014.call(this,f,arg1);
case  3 :
return partial__9015.call(this,f,arg1,arg2);
case  4 :
return partial__9016.call(this,f,arg1,arg2,arg3);
default:
return partial__9017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__9017.cljs$lang$applyTo;
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
var fnil__9225 = (function (f,x){
return (function() {
var G__9229 = null;
var G__9229__9230 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__9229__9231 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__9229__9232 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__9229__9233 = (function() { 
var G__9235__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__9235 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9235__delegate.call(this, a, b, c, ds);
};
G__9235.cljs$lang$maxFixedArity = 3;
G__9235.cljs$lang$applyTo = (function (arglist__9236){
var a = cljs.core.first(arglist__9236);
var b = cljs.core.first(cljs.core.next(arglist__9236));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9236)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9236)));
return G__9235__delegate.call(this, a, b, c, ds);
});
return G__9235;
})()
;
G__9229 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__9229__9230.call(this,a);
case  2 :
return G__9229__9231.call(this,a,b);
case  3 :
return G__9229__9232.call(this,a,b,c);
default:
return G__9229__9233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9229.cljs$lang$maxFixedArity = 3;
G__9229.cljs$lang$applyTo = G__9229__9233.cljs$lang$applyTo;
return G__9229;
})()
});
var fnil__9226 = (function (f,x,y){
return (function() {
var G__9239 = null;
var G__9239__9240 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__9239__9241 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__9239__9242 = (function() { 
var G__9245__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__9245 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9245__delegate.call(this, a, b, c, ds);
};
G__9245.cljs$lang$maxFixedArity = 3;
G__9245.cljs$lang$applyTo = (function (arglist__9246){
var a = cljs.core.first(arglist__9246);
var b = cljs.core.first(cljs.core.next(arglist__9246));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9246)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9246)));
return G__9245__delegate.call(this, a, b, c, ds);
});
return G__9245;
})()
;
G__9239 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__9239__9240.call(this,a,b);
case  3 :
return G__9239__9241.call(this,a,b,c);
default:
return G__9239__9242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9239.cljs$lang$maxFixedArity = 3;
G__9239.cljs$lang$applyTo = G__9239__9242.cljs$lang$applyTo;
return G__9239;
})()
});
var fnil__9227 = (function (f,x,y,z){
return (function() {
var G__9251 = null;
var G__9251__9252 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__9251__9253 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__9251__9254 = (function() { 
var G__9264__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__9264 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9264__delegate.call(this, a, b, c, ds);
};
G__9264.cljs$lang$maxFixedArity = 3;
G__9264.cljs$lang$applyTo = (function (arglist__9271){
var a = cljs.core.first(arglist__9271);
var b = cljs.core.first(cljs.core.next(arglist__9271));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9271)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9271)));
return G__9264__delegate.call(this, a, b, c, ds);
});
return G__9264;
})()
;
G__9251 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__9251__9252.call(this,a,b);
case  3 :
return G__9251__9253.call(this,a,b,c);
default:
return G__9251__9254.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9251.cljs$lang$maxFixedArity = 3;
G__9251.cljs$lang$applyTo = G__9251__9254.cljs$lang$applyTo;
return G__9251;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__9225.call(this,f,x);
case  3 :
return fnil__9226.call(this,f,x,y);
case  4 :
return fnil__9227.call(this,f,x,y,z);
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
var mapi__9285 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9280 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9280))
{var s__9282 = temp__3698__auto____9280;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9282)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__9282)));
} else
{return null;
}
})));
});

return mapi__9285.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9293 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9293))
{var s__9297 = temp__3698__auto____9293;

var x__9299 = f.call(null,cljs.core.first.call(null,s__9297));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__9299)))
{return keep.call(null,f,cljs.core.rest.call(null,s__9297));
} else
{return cljs.core.cons.call(null,x__9299,keep.call(null,f,cljs.core.rest.call(null,s__9297)));
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
var keepi__9319 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9310 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9310))
{var s__9311 = temp__3698__auto____9310;

var x__9313 = f.call(null,idx,cljs.core.first.call(null,s__9311));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__9313)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__9311));
} else
{return cljs.core.cons.call(null,x__9313,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__9311)));
}
} else
{return null;
}
})));
});

return keepi__9319.call(null,0,coll);
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
var every_pred__9454 = (function (p){
return (function() {
var ep1 = null;
var ep1__9461 = (function (){
return true;
});
var ep1__9462 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__9464 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9364 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____9364))
{return p.call(null,y);
} else
{return and__3546__auto____9364;
}
})());
});
var ep1__9465 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9368 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____9368))
{var and__3546__auto____9369 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____9369))
{return p.call(null,z);
} else
{return and__3546__auto____9369;
}
} else
{return and__3546__auto____9368;
}
})());
});
var ep1__9466 = (function() { 
var G__9573__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9370 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____9370))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____9370;
}
})());
};
var G__9573 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9573__delegate.call(this, x, y, z, args);
};
G__9573.cljs$lang$maxFixedArity = 3;
G__9573.cljs$lang$applyTo = (function (arglist__9577){
var x = cljs.core.first(arglist__9577);
var y = cljs.core.first(cljs.core.next(arglist__9577));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9577)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9577)));
return G__9573__delegate.call(this, x, y, z, args);
});
return G__9573;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__9461.call(this);
case  1 :
return ep1__9462.call(this,x);
case  2 :
return ep1__9464.call(this,x,y);
case  3 :
return ep1__9465.call(this,x,y,z);
default:
return ep1__9466.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__9466.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__9455 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__9580 = (function (){
return true;
});
var ep2__9581 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9375 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____9375))
{return p2.call(null,x);
} else
{return and__3546__auto____9375;
}
})());
});
var ep2__9582 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9377 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____9377))
{var and__3546__auto____9378 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____9378))
{var and__3546__auto____9379 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____9379))
{return p2.call(null,y);
} else
{return and__3546__auto____9379;
}
} else
{return and__3546__auto____9378;
}
} else
{return and__3546__auto____9377;
}
})());
});
var ep2__9583 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9380 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____9380))
{var and__3546__auto____9382 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____9382))
{var and__3546__auto____9383 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____9383))
{var and__3546__auto____9385 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____9385))
{var and__3546__auto____9386 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____9386))
{return p2.call(null,z);
} else
{return and__3546__auto____9386;
}
} else
{return and__3546__auto____9385;
}
} else
{return and__3546__auto____9383;
}
} else
{return and__3546__auto____9382;
}
} else
{return and__3546__auto____9380;
}
})());
});
var ep2__9584 = (function() { 
var G__9600__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9387 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____9387))
{return cljs.core.every_QMARK_.call(null,(function (p1__9302_SHARP_){
var and__3546__auto____9388 = p1.call(null,p1__9302_SHARP_);

if(cljs.core.truth_(and__3546__auto____9388))
{return p2.call(null,p1__9302_SHARP_);
} else
{return and__3546__auto____9388;
}
}),args);
} else
{return and__3546__auto____9387;
}
})());
};
var G__9600 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9600__delegate.call(this, x, y, z, args);
};
G__9600.cljs$lang$maxFixedArity = 3;
G__9600.cljs$lang$applyTo = (function (arglist__9602){
var x = cljs.core.first(arglist__9602);
var y = cljs.core.first(cljs.core.next(arglist__9602));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9602)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9602)));
return G__9600__delegate.call(this, x, y, z, args);
});
return G__9600;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__9580.call(this);
case  1 :
return ep2__9581.call(this,x);
case  2 :
return ep2__9582.call(this,x,y);
case  3 :
return ep2__9583.call(this,x,y,z);
default:
return ep2__9584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__9584.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__9457 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__9605 = (function (){
return true;
});
var ep3__9606 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9394 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____9394))
{var and__3546__auto____9395 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____9395))
{return p3.call(null,x);
} else
{return and__3546__auto____9395;
}
} else
{return and__3546__auto____9394;
}
})());
});
var ep3__9607 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9396 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____9396))
{var and__3546__auto____9398 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____9398))
{var and__3546__auto____9399 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____9399))
{var and__3546__auto____9400 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____9400))
{var and__3546__auto____9401 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____9401))
{return p3.call(null,y);
} else
{return and__3546__auto____9401;
}
} else
{return and__3546__auto____9400;
}
} else
{return and__3546__auto____9399;
}
} else
{return and__3546__auto____9398;
}
} else
{return and__3546__auto____9396;
}
})());
});
var ep3__9608 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9402 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____9402))
{var and__3546__auto____9403 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____9403))
{var and__3546__auto____9404 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____9404))
{var and__3546__auto____9406 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____9406))
{var and__3546__auto____9407 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____9407))
{var and__3546__auto____9408 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____9408))
{var and__3546__auto____9410 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____9410))
{var and__3546__auto____9412 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____9412))
{return p3.call(null,z);
} else
{return and__3546__auto____9412;
}
} else
{return and__3546__auto____9410;
}
} else
{return and__3546__auto____9408;
}
} else
{return and__3546__auto____9407;
}
} else
{return and__3546__auto____9406;
}
} else
{return and__3546__auto____9404;
}
} else
{return and__3546__auto____9403;
}
} else
{return and__3546__auto____9402;
}
})());
});
var ep3__9609 = (function() { 
var G__9614__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9417 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____9417))
{return cljs.core.every_QMARK_.call(null,(function (p1__9303_SHARP_){
var and__3546__auto____9424 = p1.call(null,p1__9303_SHARP_);

if(cljs.core.truth_(and__3546__auto____9424))
{var and__3546__auto____9431 = p2.call(null,p1__9303_SHARP_);

if(cljs.core.truth_(and__3546__auto____9431))
{return p3.call(null,p1__9303_SHARP_);
} else
{return and__3546__auto____9431;
}
} else
{return and__3546__auto____9424;
}
}),args);
} else
{return and__3546__auto____9417;
}
})());
};
var G__9614 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9614__delegate.call(this, x, y, z, args);
};
G__9614.cljs$lang$maxFixedArity = 3;
G__9614.cljs$lang$applyTo = (function (arglist__9616){
var x = cljs.core.first(arglist__9616);
var y = cljs.core.first(cljs.core.next(arglist__9616));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9616)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9616)));
return G__9614__delegate.call(this, x, y, z, args);
});
return G__9614;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__9605.call(this);
case  1 :
return ep3__9606.call(this,x);
case  2 :
return ep3__9607.call(this,x,y);
case  3 :
return ep3__9608.call(this,x,y,z);
default:
return ep3__9609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__9609.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__9458 = (function() { 
var G__9619__delegate = function (p1,p2,p3,ps){
var ps__9433 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__9621 = (function (){
return true;
});
var epn__9623 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__9304_SHARP_){
return p1__9304_SHARP_.call(null,x);
}),ps__9433);
});
var epn__9625 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__9305_SHARP_){
var and__3546__auto____9437 = p1__9305_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____9437))
{return p1__9305_SHARP_.call(null,y);
} else
{return and__3546__auto____9437;
}
}),ps__9433);
});
var epn__9627 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__9306_SHARP_){
var and__3546__auto____9440 = p1__9306_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____9440))
{var and__3546__auto____9441 = p1__9306_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____9441))
{return p1__9306_SHARP_.call(null,z);
} else
{return and__3546__auto____9441;
}
} else
{return and__3546__auto____9440;
}
}),ps__9433);
});
var epn__9629 = (function() { 
var G__9637__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9449 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____9449))
{return cljs.core.every_QMARK_.call(null,(function (p1__9307_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__9307_SHARP_,args);
}),ps__9433);
} else
{return and__3546__auto____9449;
}
})());
};
var G__9637 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9637__delegate.call(this, x, y, z, args);
};
G__9637.cljs$lang$maxFixedArity = 3;
G__9637.cljs$lang$applyTo = (function (arglist__9643){
var x = cljs.core.first(arglist__9643);
var y = cljs.core.first(cljs.core.next(arglist__9643));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9643)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9643)));
return G__9637__delegate.call(this, x, y, z, args);
});
return G__9637;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__9621.call(this);
case  1 :
return epn__9623.call(this,x);
case  2 :
return epn__9625.call(this,x,y);
case  3 :
return epn__9627.call(this,x,y,z);
default:
return epn__9629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__9629.cljs$lang$applyTo;
return epn;
})()
};
var G__9619 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9619__delegate.call(this, p1, p2, p3, ps);
};
G__9619.cljs$lang$maxFixedArity = 3;
G__9619.cljs$lang$applyTo = (function (arglist__9646){
var p1 = cljs.core.first(arglist__9646);
var p2 = cljs.core.first(cljs.core.next(arglist__9646));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9646)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9646)));
return G__9619__delegate.call(this, p1, p2, p3, ps);
});
return G__9619;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__9454.call(this,p1);
case  2 :
return every_pred__9455.call(this,p1,p2);
case  3 :
return every_pred__9457.call(this,p1,p2,p3);
default:
return every_pred__9458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__9458.cljs$lang$applyTo;
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
var some_fn__9860 = (function (p){
return (function() {
var sp1 = null;
var sp1__9870 = (function (){
return null;
});
var sp1__9872 = (function (x){
return p.call(null,x);
});
var sp1__9874 = (function (x,y){
var or__3548__auto____9672 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____9672))
{return or__3548__auto____9672;
} else
{return p.call(null,y);
}
});
var sp1__9876 = (function (x,y,z){
var or__3548__auto____9676 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____9676))
{return or__3548__auto____9676;
} else
{var or__3548__auto____9678 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____9678))
{return or__3548__auto____9678;
} else
{return p.call(null,z);
}
}
});
var sp1__9878 = (function() { 
var G__9885__delegate = function (x,y,z,args){
var or__3548__auto____9683 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____9683))
{return or__3548__auto____9683;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9885 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9885__delegate.call(this, x, y, z, args);
};
G__9885.cljs$lang$maxFixedArity = 3;
G__9885.cljs$lang$applyTo = (function (arglist__9887){
var x = cljs.core.first(arglist__9887);
var y = cljs.core.first(cljs.core.next(arglist__9887));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9887)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9887)));
return G__9885__delegate.call(this, x, y, z, args);
});
return G__9885;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__9870.call(this);
case  1 :
return sp1__9872.call(this,x);
case  2 :
return sp1__9874.call(this,x,y);
case  3 :
return sp1__9876.call(this,x,y,z);
default:
return sp1__9878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__9878.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__9862 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__9895 = (function (){
return null;
});
var sp2__9896 = (function (x){
var or__3548__auto____9688 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9688))
{return or__3548__auto____9688;
} else
{return p2.call(null,x);
}
});
var sp2__9897 = (function (x,y){
var or__3548__auto____9693 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9693))
{return or__3548__auto____9693;
} else
{var or__3548__auto____9696 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____9696))
{return or__3548__auto____9696;
} else
{var or__3548__auto____9700 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9700))
{return or__3548__auto____9700;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__9898 = (function (x,y,z){
var or__3548__auto____9703 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9703))
{return or__3548__auto____9703;
} else
{var or__3548__auto____9706 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____9706))
{return or__3548__auto____9706;
} else
{var or__3548__auto____9707 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____9707))
{return or__3548__auto____9707;
} else
{var or__3548__auto____9715 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9715))
{return or__3548__auto____9715;
} else
{var or__3548__auto____9718 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____9718))
{return or__3548__auto____9718;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__9899 = (function() { 
var G__9910__delegate = function (x,y,z,args){
var or__3548__auto____9741 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____9741))
{return or__3548__auto____9741;
} else
{return cljs.core.some.call(null,(function (p1__9356_SHARP_){
var or__3548__auto____9745 = p1.call(null,p1__9356_SHARP_);

if(cljs.core.truth_(or__3548__auto____9745))
{return or__3548__auto____9745;
} else
{return p2.call(null,p1__9356_SHARP_);
}
}),args);
}
};
var G__9910 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9910__delegate.call(this, x, y, z, args);
};
G__9910.cljs$lang$maxFixedArity = 3;
G__9910.cljs$lang$applyTo = (function (arglist__10020){
var x = cljs.core.first(arglist__10020);
var y = cljs.core.first(cljs.core.next(arglist__10020));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10020)));
return G__9910__delegate.call(this, x, y, z, args);
});
return G__9910;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__9895.call(this);
case  1 :
return sp2__9896.call(this,x);
case  2 :
return sp2__9897.call(this,x,y);
case  3 :
return sp2__9898.call(this,x,y,z);
default:
return sp2__9899.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__9899.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__9864 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__10028 = (function (){
return null;
});
var sp3__10030 = (function (x){
var or__3548__auto____9772 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9772))
{return or__3548__auto____9772;
} else
{var or__3548__auto____9773 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9773))
{return or__3548__auto____9773;
} else
{return p3.call(null,x);
}
}
});
var sp3__10031 = (function (x,y){
var or__3548__auto____9776 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9776))
{return or__3548__auto____9776;
} else
{var or__3548__auto____9777 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9777))
{return or__3548__auto____9777;
} else
{var or__3548__auto____9778 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____9778))
{return or__3548__auto____9778;
} else
{var or__3548__auto____9781 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____9781))
{return or__3548__auto____9781;
} else
{var or__3548__auto____9784 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____9784))
{return or__3548__auto____9784;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__10032 = (function (x,y,z){
var or__3548__auto____9789 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9789))
{return or__3548__auto____9789;
} else
{var or__3548__auto____9792 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9792))
{return or__3548__auto____9792;
} else
{var or__3548__auto____9794 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____9794))
{return or__3548__auto____9794;
} else
{var or__3548__auto____9796 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____9796))
{return or__3548__auto____9796;
} else
{var or__3548__auto____9798 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____9798))
{return or__3548__auto____9798;
} else
{var or__3548__auto____9800 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____9800))
{return or__3548__auto____9800;
} else
{var or__3548__auto____9803 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____9803))
{return or__3548__auto____9803;
} else
{var or__3548__auto____9804 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____9804))
{return or__3548__auto____9804;
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
var sp3__10033 = (function() { 
var G__10041__delegate = function (x,y,z,args){
var or__3548__auto____9808 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____9808))
{return or__3548__auto____9808;
} else
{return cljs.core.some.call(null,(function (p1__9357_SHARP_){
var or__3548__auto____9811 = p1.call(null,p1__9357_SHARP_);

if(cljs.core.truth_(or__3548__auto____9811))
{return or__3548__auto____9811;
} else
{var or__3548__auto____9818 = p2.call(null,p1__9357_SHARP_);

if(cljs.core.truth_(or__3548__auto____9818))
{return or__3548__auto____9818;
} else
{return p3.call(null,p1__9357_SHARP_);
}
}
}),args);
}
};
var G__10041 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10041__delegate.call(this, x, y, z, args);
};
G__10041.cljs$lang$maxFixedArity = 3;
G__10041.cljs$lang$applyTo = (function (arglist__10042){
var x = cljs.core.first(arglist__10042);
var y = cljs.core.first(cljs.core.next(arglist__10042));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10042)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10042)));
return G__10041__delegate.call(this, x, y, z, args);
});
return G__10041;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__10028.call(this);
case  1 :
return sp3__10030.call(this,x);
case  2 :
return sp3__10031.call(this,x,y);
case  3 :
return sp3__10032.call(this,x,y,z);
default:
return sp3__10033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__10033.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__9866 = (function() { 
var G__10044__delegate = function (p1,p2,p3,ps){
var ps__9828 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__10047 = (function (){
return null;
});
var spn__10048 = (function (x){
return cljs.core.some.call(null,(function (p1__9358_SHARP_){
return p1__9358_SHARP_.call(null,x);
}),ps__9828);
});
var spn__10049 = (function (x,y){
return cljs.core.some.call(null,(function (p1__9359_SHARP_){
var or__3548__auto____9834 = p1__9359_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9834))
{return or__3548__auto____9834;
} else
{return p1__9359_SHARP_.call(null,y);
}
}),ps__9828);
});
var spn__10050 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__9360_SHARP_){
var or__3548__auto____9839 = p1__9360_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9839))
{return or__3548__auto____9839;
} else
{var or__3548__auto____9848 = p1__9360_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____9848))
{return or__3548__auto____9848;
} else
{return p1__9360_SHARP_.call(null,z);
}
}
}),ps__9828);
});
var spn__10052 = (function() { 
var G__10054__delegate = function (x,y,z,args){
var or__3548__auto____9856 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____9856))
{return or__3548__auto____9856;
} else
{return cljs.core.some.call(null,(function (p1__9362_SHARP_){
return cljs.core.some.call(null,p1__9362_SHARP_,args);
}),ps__9828);
}
};
var G__10054 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10054__delegate.call(this, x, y, z, args);
};
G__10054.cljs$lang$maxFixedArity = 3;
G__10054.cljs$lang$applyTo = (function (arglist__10055){
var x = cljs.core.first(arglist__10055);
var y = cljs.core.first(cljs.core.next(arglist__10055));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10055)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10055)));
return G__10054__delegate.call(this, x, y, z, args);
});
return G__10054;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__10047.call(this);
case  1 :
return spn__10048.call(this,x);
case  2 :
return spn__10049.call(this,x,y);
case  3 :
return spn__10050.call(this,x,y,z);
default:
return spn__10052.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__10052.cljs$lang$applyTo;
return spn;
})()
};
var G__10044 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10044__delegate.call(this, p1, p2, p3, ps);
};
G__10044.cljs$lang$maxFixedArity = 3;
G__10044.cljs$lang$applyTo = (function (arglist__10057){
var p1 = cljs.core.first(arglist__10057);
var p2 = cljs.core.first(cljs.core.next(arglist__10057));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10057)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10057)));
return G__10044__delegate.call(this, p1, p2, p3, ps);
});
return G__10044;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__9860.call(this,p1);
case  2 :
return some_fn__9862.call(this,p1,p2);
case  3 :
return some_fn__9864.call(this,p1,p2,p3);
default:
return some_fn__9866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__9866.cljs$lang$applyTo;
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
var map__10084 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10059 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10059))
{var s__10060 = temp__3698__auto____10059;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10060)),map.call(null,f,cljs.core.rest.call(null,s__10060)));
} else
{return null;
}
})));
});
var map__10085 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10063 = cljs.core.seq.call(null,c1);
var s2__10064 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____10065 = s1__10063;

if(cljs.core.truth_(and__3546__auto____10065))
{return s2__10064;
} else
{return and__3546__auto____10065;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10063),cljs.core.first.call(null,s2__10064)),map.call(null,f,cljs.core.rest.call(null,s1__10063),cljs.core.rest.call(null,s2__10064)));
} else
{return null;
}
})));
});
var map__10086 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10066 = cljs.core.seq.call(null,c1);
var s2__10067 = cljs.core.seq.call(null,c2);
var s3__10068 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____10069 = s1__10066;

if(cljs.core.truth_(and__3546__auto____10069))
{var and__3546__auto____10071 = s2__10067;

if(cljs.core.truth_(and__3546__auto____10071))
{return s3__10068;
} else
{return and__3546__auto____10071;
}
} else
{return and__3546__auto____10069;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10066),cljs.core.first.call(null,s2__10067),cljs.core.first.call(null,s3__10068)),map.call(null,f,cljs.core.rest.call(null,s1__10066),cljs.core.rest.call(null,s2__10067),cljs.core.rest.call(null,s3__10068)));
} else
{return null;
}
})));
});
var map__10087 = (function() { 
var G__10131__delegate = function (f,c1,c2,c3,colls){
var step__10081 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10080 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10080)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10080),step.call(null,map.call(null,cljs.core.rest,ss__10080)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__9653_SHARP_){
return cljs.core.apply.call(null,f,p1__9653_SHARP_);
}),step__10081.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10131 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10131__delegate.call(this, f, c1, c2, c3, colls);
};
G__10131.cljs$lang$maxFixedArity = 4;
G__10131.cljs$lang$applyTo = (function (arglist__10140){
var f = cljs.core.first(arglist__10140);
var c1 = cljs.core.first(cljs.core.next(arglist__10140));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10140)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10140))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10140))));
return G__10131__delegate.call(this, f, c1, c2, c3, colls);
});
return G__10131;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__10084.call(this,f,c1);
case  3 :
return map__10085.call(this,f,c1,c2);
case  4 :
return map__10086.call(this,f,c1,c2,c3);
default:
return map__10087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__10087.cljs$lang$applyTo;
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
{var temp__3698__auto____10146 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10146))
{var s__10147 = temp__3698__auto____10146;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__10147),take.call(null,(n - 1),cljs.core.rest.call(null,s__10147)));
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
var step__10161 = (function (n,coll){
while(true){
var s__10157 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____10159 = (n > 0);

if(cljs.core.truth_(and__3546__auto____10159))
{return s__10157;
} else
{return and__3546__auto____10159;
}
})()))
{{
var G__10163 = (n - 1);
var G__10165 = cljs.core.rest.call(null,s__10157);
n = G__10163;
coll = G__10165;
continue;
}
} else
{return s__10157;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__10161.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__10167 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__10168 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__10167.call(this,n);
case  2 :
return drop_last__10168.call(this,n,s);
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
var s__10173 = cljs.core.seq.call(null,coll);
var lead__10174 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__10174))
{{
var G__10178 = cljs.core.next.call(null,s__10173);
var G__10179 = cljs.core.next.call(null,lead__10174);
s__10173 = G__10178;
lead__10174 = G__10179;
continue;
}
} else
{return s__10173;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10185 = (function (pred,coll){
while(true){
var s__10183 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____10184 = s__10183;

if(cljs.core.truth_(and__3546__auto____10184))
{return pred.call(null,cljs.core.first.call(null,s__10183));
} else
{return and__3546__auto____10184;
}
})()))
{{
var G__10189 = pred;
var G__10190 = cljs.core.rest.call(null,s__10183);
pred = G__10189;
coll = G__10190;
continue;
}
} else
{return s__10183;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__10185.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10196 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10196))
{var s__10197 = temp__3698__auto____10196;

return cljs.core.concat.call(null,s__10197,cycle.call(null,s__10197));
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
var repeat__10213 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__10214 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__10213.call(this,n);
case  2 :
return repeat__10214.call(this,n,x);
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
var repeatedly__10258 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__10260 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__10258.call(this,n);
case  2 :
return repeatedly__10260.call(this,n,f);
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
var interleave__10282 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10271 = cljs.core.seq.call(null,c1);
var s2__10273 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____10274 = s1__10271;

if(cljs.core.truth_(and__3546__auto____10274))
{return s2__10273;
} else
{return and__3546__auto____10274;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10271),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10273),interleave.call(null,cljs.core.rest.call(null,s1__10271),cljs.core.rest.call(null,s2__10273))));
} else
{return null;
}
})));
});
var interleave__10283 = (function() { 
var G__10285__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10280 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10280)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10280),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10280)));
} else
{return null;
}
})));
};
var G__10285 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10285__delegate.call(this, c1, c2, colls);
};
G__10285.cljs$lang$maxFixedArity = 2;
G__10285.cljs$lang$applyTo = (function (arglist__10292){
var c1 = cljs.core.first(arglist__10292);
var c2 = cljs.core.first(cljs.core.next(arglist__10292));
var colls = cljs.core.rest(cljs.core.next(arglist__10292));
return G__10285__delegate.call(this, c1, c2, colls);
});
return G__10285;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__10282.call(this,c1,c2);
default:
return interleave__10283.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__10283.cljs$lang$applyTo;
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
var cat__10302 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____10300 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____10300))
{var coll__10301 = temp__3695__auto____10300;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10301),cat.call(null,cljs.core.rest.call(null,coll__10301),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__10302.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__10313 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__10314 = (function() { 
var G__10317__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10317 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10317__delegate.call(this, f, coll, colls);
};
G__10317.cljs$lang$maxFixedArity = 2;
G__10317.cljs$lang$applyTo = (function (arglist__10321){
var f = cljs.core.first(arglist__10321);
var coll = cljs.core.first(cljs.core.next(arglist__10321));
var colls = cljs.core.rest(cljs.core.next(arglist__10321));
return G__10317__delegate.call(this, f, coll, colls);
});
return G__10317;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__10313.call(this,f,coll);
default:
return mapcat__10314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__10314.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10329 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10329))
{var s__10330 = temp__3698__auto____10329;

var f__10332 = cljs.core.first.call(null,s__10330);
var r__10333 = cljs.core.rest.call(null,s__10330);

if(cljs.core.truth_(pred.call(null,f__10332)))
{return cljs.core.cons.call(null,f__10332,filter.call(null,pred,r__10333));
} else
{return filter.call(null,pred,r__10333);
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
var walk__10359 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__10359.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10352_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__10352_SHARP_));
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
var partition__10402 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__10403 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10387 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10387))
{var s__10392 = temp__3698__auto____10387;

var p__10393 = cljs.core.take.call(null,n,s__10392);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__10393))))
{return cljs.core.cons.call(null,p__10393,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10392)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__10404 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10395 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10395))
{var s__10397 = temp__3698__auto____10395;

var p__10399 = cljs.core.take.call(null,n,s__10397);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__10399))))
{return cljs.core.cons.call(null,p__10399,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10397)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10399,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__10402.call(this,n,step);
case  3 :
return partition__10403.call(this,n,step,pad);
case  4 :
return partition__10404.call(this,n,step,pad,coll);
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
var get_in__10415 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__10416 = (function (m,ks,not_found){
var sentinel__10411 = cljs.core.lookup_sentinel;
var m__10412 = m;
var ks__10413 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__10413))
{var m__10414 = cljs.core.get.call(null,m__10412,cljs.core.first.call(null,ks__10413),sentinel__10411);

if(cljs.core.truth_((sentinel__10411 === m__10414)))
{return not_found;
} else
{{
var G__10501 = sentinel__10411;
var G__10502 = m__10414;
var G__10503 = cljs.core.next.call(null,ks__10413);
sentinel__10411 = G__10501;
m__10412 = G__10502;
ks__10413 = G__10503;
continue;
}
}
} else
{return m__10412;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__10415.call(this,m,ks);
case  3 :
return get_in__10416.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__10508,v){
var vec__10509__10510 = p__10508;
var k__10511 = cljs.core.nth.call(null,vec__10509__10510,0,null);
var ks__10513 = cljs.core.nthnext.call(null,vec__10509__10510,1);

if(cljs.core.truth_(ks__10513))
{return cljs.core.assoc.call(null,m,k__10511,assoc_in.call(null,cljs.core.get.call(null,m,k__10511),ks__10513,v));
} else
{return cljs.core.assoc.call(null,m,k__10511,v);
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
var update_in__delegate = function (m,p__10527,f,args){
var vec__10530__10531 = p__10527;
var k__10532 = cljs.core.nth.call(null,vec__10530__10531,0,null);
var ks__10534 = cljs.core.nthnext.call(null,vec__10530__10531,1);

if(cljs.core.truth_(ks__10534))
{return cljs.core.assoc.call(null,m,k__10532,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__10532),ks__10534,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10532,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__10532),args));
}
};
var update_in = function (m,p__10527,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10527, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10540){
var m = cljs.core.first(arglist__10540);
var p__10527 = cljs.core.first(cljs.core.next(arglist__10540));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10540)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10540)));
return update_in__delegate.call(this, m, p__10527, f, args);
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
var this__10550 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__10607 = null;
var G__10607__10608 = (function (coll,k){
var this__10554 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__10607__10609 = (function (coll,k,not_found){
var this__10558 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__10607 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__10607__10608.call(this,coll,k);
case  3 :
return G__10607__10609.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10607;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__10560 = this;
var new_array__10561 = cljs.core.aclone.call(null,this__10560.array);

(new_array__10561[k] = v);
return (new cljs.core.Vector(this__10560.meta,new_array__10561));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__10612 = null;
var G__10612__10613 = (function (coll,k){
var this__10564 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__10612__10614 = (function (coll,k,not_found){
var this__10568 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__10612 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__10612__10613.call(this,coll,k);
case  3 :
return G__10612__10614.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10612;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10570 = this;
var new_array__10572 = cljs.core.aclone.call(null,this__10570.array);

new_array__10572.push(o);
return (new cljs.core.Vector(this__10570.meta,new_array__10572));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__10620 = null;
var G__10620__10621 = (function (v,f){
var this__10575 = this;
return cljs.core.ci_reduce.call(null,this__10575.array,f);
});
var G__10620__10622 = (function (v,f,start){
var this__10580 = this;
return cljs.core.ci_reduce.call(null,this__10580.array,f,start);
});
G__10620 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__10620__10621.call(this,v,f);
case  3 :
return G__10620__10622.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10620;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10582 = this;
if(cljs.core.truth_((this__10582.array.length > 0)))
{var vector_seq__10584 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__10582.array.length)))
{return cljs.core.cons.call(null,(this__10582.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__10584.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10586 = this;
return this__10586.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10588 = this;
var count__10590 = this__10588.array.length;

if(cljs.core.truth_((count__10590 > 0)))
{return (this__10588.array[(count__10590 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10591 = this;
if(cljs.core.truth_((this__10591.array.length > 0)))
{var new_array__10593 = cljs.core.aclone.call(null,this__10591.array);

new_array__10593.pop();
return (new cljs.core.Vector(this__10591.meta,new_array__10593));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__10594 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10599 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10600 = this;
return (new cljs.core.Vector(meta,this__10600.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10601 = this;
return this__10601.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__10733 = null;
var G__10733__10734 = (function (coll,n){
var this__10602 = this;
if(cljs.core.truth_((function (){var and__3546__auto____10603 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____10603))
{return (n < this__10602.array.length);
} else
{return and__3546__auto____10603;
}
})()))
{return (this__10602.array[n]);
} else
{return null;
}
});
var G__10733__10735 = (function (coll,n,not_found){
var this__10604 = this;
if(cljs.core.truth_((function (){var and__3546__auto____10605 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____10605))
{return (n < this__10604.array.length);
} else
{return and__3546__auto____10605;
}
})()))
{return (this__10604.array[n]);
} else
{return not_found;
}
});
G__10733 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__10733__10734.call(this,coll,n);
case  3 :
return G__10733__10735.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10733;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10606 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10606.meta);
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
vector.cljs$lang$applyTo = (function (arglist__10752){
var args = cljs.core.seq( arglist__10752 );;
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
var this__10769 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__10842 = null;
var G__10842__10843 = (function (coll,k){
var this__10773 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__10842__10844 = (function (coll,k,not_found){
var this__10775 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__10842 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__10842__10843.call(this,coll,k);
case  3 :
return G__10842__10844.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10842;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__10779 = this;
var v_pos__10782 = (this__10779.start + key);

return (new cljs.core.Subvec(this__10779.meta,cljs.core._assoc.call(null,this__10779.v,v_pos__10782,val),this__10779.start,((this__10779.end > (v_pos__10782 + 1)) ? this__10779.end : (v_pos__10782 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__10860 = null;
var G__10860__10861 = (function (coll,k){
var this__10789 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__10860__10862 = (function (coll,k,not_found){
var this__10791 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__10860 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__10860__10861.call(this,coll,k);
case  3 :
return G__10860__10862.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10860;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10794 = this;
return (new cljs.core.Subvec(this__10794.meta,cljs.core._assoc_n.call(null,this__10794.v,this__10794.end,o),this__10794.start,(this__10794.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__10880 = null;
var G__10880__10881 = (function (coll,f){
var this__10800 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__10880__10884 = (function (coll,f,start){
var this__10801 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__10880 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__10880__10881.call(this,coll,f);
case  3 :
return G__10880__10884.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10880;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10802 = this;
var subvec_seq__10810 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__10802.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10802.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__10810.call(null,this__10802.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10812 = this;
return (this__10812.end - this__10812.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10813 = this;
return cljs.core._nth.call(null,this__10813.v,(this__10813.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10815 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__10815.start,this__10815.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10815.meta,this__10815.v,this__10815.start,(this__10815.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__10818 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10819 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10822 = this;
return (new cljs.core.Subvec(meta,this__10822.v,this__10822.start,this__10822.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10825 = this;
return this__10825.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__10911 = null;
var G__10911__10912 = (function (coll,n){
var this__10830 = this;
return cljs.core._nth.call(null,this__10830.v,(this__10830.start + n));
});
var G__10911__10913 = (function (coll,n,not_found){
var this__10831 = this;
return cljs.core._nth.call(null,this__10831.v,(this__10831.start + n),not_found);
});
G__10911 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__10911__10912.call(this,coll,n);
case  3 :
return G__10911__10913.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10911;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10832 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10832.meta);
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
var subvec__10931 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__10932 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__10931.call(this,v,start);
case  3 :
return subvec__10932.call(this,v,start,end);
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
var this__10951 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10953 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10958 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10959 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10959.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10960 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10962 = this;
return cljs.core._first.call(null,this__10962.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10963 = this;
var temp__3695__auto____10964 = cljs.core.next.call(null,this__10963.front);

if(cljs.core.truth_(temp__3695__auto____10964))
{var f1__10965 = temp__3695__auto____10964;

return (new cljs.core.PersistentQueueSeq(this__10963.meta,f1__10965,this__10963.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10963.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10963.meta,this__10963.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10966 = this;
return this__10966.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10967 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10967.front,this__10967.rear));
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
var this__10987 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11009 = this;
if(cljs.core.truth_(this__11009.front))
{return (new cljs.core.PersistentQueue(this__11009.meta,(this__11009.count + 1),this__11009.front,cljs.core.conj.call(null,(function (){var or__3548__auto____11028 = this__11009.rear;

if(cljs.core.truth_(or__3548__auto____11028))
{return or__3548__auto____11028;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__11009.meta,(this__11009.count + 1),cljs.core.conj.call(null,this__11009.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11030 = this;
var rear__11031 = cljs.core.seq.call(null,this__11030.rear);

if(cljs.core.truth_((function (){var or__3548__auto____11033 = this__11030.front;

if(cljs.core.truth_(or__3548__auto____11033))
{return or__3548__auto____11033;
} else
{return rear__11031;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11030.front,cljs.core.seq.call(null,rear__11031)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11038 = this;
return this__11038.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11044 = this;
return cljs.core._first.call(null,this__11044.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11046 = this;
if(cljs.core.truth_(this__11046.front))
{var temp__3695__auto____11050 = cljs.core.next.call(null,this__11046.front);

if(cljs.core.truth_(temp__3695__auto____11050))
{var f1__11051 = temp__3695__auto____11050;

return (new cljs.core.PersistentQueue(this__11046.meta,(this__11046.count - 1),f1__11051,this__11046.rear));
} else
{return (new cljs.core.PersistentQueue(this__11046.meta,(this__11046.count - 1),cljs.core.seq.call(null,this__11046.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11052 = this;
return cljs.core.first.call(null,this__11052.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11053 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11055 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11057 = this;
return (new cljs.core.PersistentQueue(meta,this__11057.count,this__11057.front,this__11057.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11060 = this;
return this__11060.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11063 = this;
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
var this__11091 = this;
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
var len__11121 = array.length;

var i__11122 = 0;

while(true){
if(cljs.core.truth_((i__11122 < len__11121)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__11122]))))
{return i__11122;
} else
{{
var G__11130 = (i__11122 + incr);
i__11122 = G__11130;
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
var obj_map_contains_key_QMARK___11134 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___11135 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____11133 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____11133))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____11133;
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
return obj_map_contains_key_QMARK___11134.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___11135.call(this,k,strobj,true_val,false_val);
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
var this__11156 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11233 = null;
var G__11233__11234 = (function (coll,k){
var this__11158 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__11233__11235 = (function (coll,k,not_found){
var this__11161 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__11161.strobj,(this__11161.strobj[k]),not_found);
});
G__11233 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11233__11234.call(this,coll,k);
case  3 :
return G__11233__11235.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11233;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11169 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__11171 = goog.object.clone.call(null,this__11169.strobj);
var overwrite_QMARK___11173 = new_strobj__11171.hasOwnProperty(k);

(new_strobj__11171[k] = v);
if(cljs.core.truth_(overwrite_QMARK___11173))
{return (new cljs.core.ObjMap(this__11169.meta,this__11169.keys,new_strobj__11171));
} else
{var new_keys__11175 = cljs.core.aclone.call(null,this__11169.keys);

new_keys__11175.push(k);
return (new cljs.core.ObjMap(this__11169.meta,new_keys__11175,new_strobj__11171));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__11169.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__11181 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__11181.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__11250 = null;
var G__11250__11251 = (function (coll,k){
var this__11183 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11250__11252 = (function (coll,k,not_found){
var this__11185 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11250 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11250__11251.call(this,coll,k);
case  3 :
return G__11250__11252.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11250;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__11187 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11193 = this;
if(cljs.core.truth_((this__11193.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__11143_SHARP_){
return cljs.core.vector.call(null,p1__11143_SHARP_,(this__11193.strobj[p1__11143_SHARP_]));
}),this__11193.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11200 = this;
return this__11200.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11214 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11215 = this;
return (new cljs.core.ObjMap(meta,this__11215.keys,this__11215.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11219 = this;
return this__11219.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11220 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11220.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__11221 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11224 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____11224))
{return this__11221.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____11224;
}
})()))
{var new_keys__11229 = cljs.core.aclone.call(null,this__11221.keys);
var new_strobj__11230 = goog.object.clone.call(null,this__11221.strobj);

new_keys__11229.splice(cljs.core.scan_array.call(null,1,k,new_keys__11229),1);
cljs.core.js_delete.call(null,new_strobj__11230,k);
return (new cljs.core.ObjMap(this__11221.meta,new_keys__11229,new_strobj__11230));
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
var this__11410 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11480 = null;
var G__11480__11481 = (function (coll,k){
var this__11411 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__11480__11482 = (function (coll,k,not_found){
var this__11412 = this;
var bucket__11413 = (this__11412.hashobj[cljs.core.hash.call(null,k)]);
var i__11414 = (cljs.core.truth_(bucket__11413)?cljs.core.scan_array.call(null,2,k,bucket__11413):null);

if(cljs.core.truth_(i__11414))
{return (bucket__11413[(i__11414 + 1)]);
} else
{return not_found;
}
});
G__11480 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11480__11481.call(this,coll,k);
case  3 :
return G__11480__11482.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11480;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11415 = this;
var h__11416 = cljs.core.hash.call(null,k);
var bucket__11417 = (this__11415.hashobj[h__11416]);

if(cljs.core.truth_(bucket__11417))
{var new_bucket__11418 = cljs.core.aclone.call(null,bucket__11417);
var new_hashobj__11419 = goog.object.clone.call(null,this__11415.hashobj);

(new_hashobj__11419[h__11416] = new_bucket__11418);
var temp__3695__auto____11420 = cljs.core.scan_array.call(null,2,k,new_bucket__11418);

if(cljs.core.truth_(temp__3695__auto____11420))
{var i__11421 = temp__3695__auto____11420;

(new_bucket__11418[(i__11421 + 1)] = v);
return (new cljs.core.HashMap(this__11415.meta,this__11415.count,new_hashobj__11419));
} else
{new_bucket__11418.push(k,v);
return (new cljs.core.HashMap(this__11415.meta,(this__11415.count + 1),new_hashobj__11419));
}
} else
{var new_hashobj__11426 = goog.object.clone.call(null,this__11415.hashobj);

(new_hashobj__11426[h__11416] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__11415.meta,(this__11415.count + 1),new_hashobj__11426));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__11429 = this;
var bucket__11430 = (this__11429.hashobj[cljs.core.hash.call(null,k)]);
var i__11431 = (cljs.core.truth_(bucket__11430)?cljs.core.scan_array.call(null,2,k,bucket__11430):null);

if(cljs.core.truth_(i__11431))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__11498 = null;
var G__11498__11499 = (function (coll,k){
var this__11432 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11498__11501 = (function (coll,k,not_found){
var this__11433 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11498 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11498__11499.call(this,coll,k);
case  3 :
return G__11498__11501.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11498;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__11434 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11435 = this;
if(cljs.core.truth_((this__11435.count > 0)))
{var hashes__11437 = cljs.core.js_keys.call(null,this__11435.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__11396_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11435.hashobj[p1__11396_SHARP_])));
}),hashes__11437);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11441 = this;
return this__11441.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11442 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11443 = this;
return (new cljs.core.HashMap(meta,this__11443.count,this__11443.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11446 = this;
return this__11446.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11447 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11447.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__11448 = this;
var h__11450 = cljs.core.hash.call(null,k);
var bucket__11451 = (this__11448.hashobj[h__11450]);
var i__11452 = (cljs.core.truth_(bucket__11451)?cljs.core.scan_array.call(null,2,k,bucket__11451):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__11452)))
{return coll;
} else
{var new_hashobj__11454 = goog.object.clone.call(null,this__11448.hashobj);

if(cljs.core.truth_((3 > bucket__11451.length)))
{cljs.core.js_delete.call(null,new_hashobj__11454,h__11450);
} else
{var new_bucket__11456 = cljs.core.aclone.call(null,bucket__11451);

new_bucket__11456.splice(i__11452,2);
(new_hashobj__11454[h__11450] = new_bucket__11456);
}
return (new cljs.core.HashMap(this__11448.meta,(this__11448.count - 1),new_hashobj__11454));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11516 = ks.length;

var i__11517 = 0;
var out__11518 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__11517 < len__11516)))
{{
var G__11519 = (i__11517 + 1);
var G__11520 = cljs.core.assoc.call(null,out__11518,(ks[i__11517]),(vs[i__11517]));
i__11517 = G__11519;
out__11518 = G__11520;
continue;
}
} else
{return out__11518;
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
var in$__11522 = cljs.core.seq.call(null,keyvals);
var out__11524 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__11522))
{{
var G__11528 = cljs.core.nnext.call(null,in$__11522);
var G__11530 = cljs.core.assoc.call(null,out__11524,cljs.core.first.call(null,in$__11522),cljs.core.second.call(null,in$__11522));
in$__11522 = G__11528;
out__11524 = G__11530;
continue;
}
} else
{return out__11524;
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
hash_map.cljs$lang$applyTo = (function (arglist__11531){
var keyvals = cljs.core.seq( arglist__11531 );;
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
{return cljs.core.reduce.call(null,(function (p1__11536_SHARP_,p2__11538_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____11543 = p1__11536_SHARP_;

if(cljs.core.truth_(or__3548__auto____11543))
{return or__3548__auto____11543;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__11538_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11602){
var maps = cljs.core.seq( arglist__11602 );;
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
{var merge_entry__11606 = (function (m,e){
var k__11603 = cljs.core.first.call(null,e);
var v__11604 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__11603)))
{return cljs.core.assoc.call(null,m,k__11603,f.call(null,cljs.core.get.call(null,m,k__11603),v__11604));
} else
{return cljs.core.assoc.call(null,m,k__11603,v__11604);
}
});
var merge2__11610 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11606,(function (){var or__3548__auto____11608 = m1;

if(cljs.core.truth_(or__3548__auto____11608))
{return or__3548__auto____11608;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__11610,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11710){
var f = cljs.core.first(arglist__11710);
var maps = cljs.core.rest(arglist__11710);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__11720 = cljs.core.ObjMap.fromObject([],{});
var keys__11721 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__11721))
{var key__11722 = cljs.core.first.call(null,keys__11721);
var entry__11723 = cljs.core.get.call(null,map,key__11722,"﷐'user/not-found");

{
var G__11728 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__11723,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__11720,key__11722,entry__11723):ret__11720);
var G__11729 = cljs.core.next.call(null,keys__11721);
ret__11720 = G__11728;
keys__11721 = G__11729;
continue;
}
} else
{return ret__11720;
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
var this__11736 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11791 = null;
var G__11791__11792 = (function (coll,v){
var this__11738 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__11791__11793 = (function (coll,v,not_found){
var this__11739 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11739.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__11791 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__11791__11792.call(this,coll,v);
case  3 :
return G__11791__11793.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11791;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__11795 = null;
var G__11795__11796 = (function (coll,k){
var this__11741 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11795__11797 = (function (coll,k,not_found){
var this__11742 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11795 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11795__11796.call(this,coll,k);
case  3 :
return G__11795__11797.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11795;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11745 = this;
return (new cljs.core.Set(this__11745.meta,cljs.core.assoc.call(null,this__11745.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11776 = this;
return cljs.core.keys.call(null,this__11776.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__11777 = this;
return (new cljs.core.Set(this__11777.meta,cljs.core.dissoc.call(null,this__11777.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11778 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11781 = this;
var and__3546__auto____11786 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____11786))
{var and__3546__auto____11787 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____11787))
{return cljs.core.every_QMARK_.call(null,(function (p1__11714_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11714_SHARP_);
}),other);
} else
{return and__3546__auto____11787;
}
} else
{return and__3546__auto____11786;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11788 = this;
return (new cljs.core.Set(meta,this__11788.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11789 = this;
return this__11789.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11790 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__11790.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__11814 = cljs.core.seq.call(null,coll);
var out__11816 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__11814))))
{{
var G__11825 = cljs.core.rest.call(null,in$__11814);
var G__11826 = cljs.core.conj.call(null,out__11816,cljs.core.first.call(null,in$__11814));
in$__11814 = G__11825;
out__11816 = G__11826;
continue;
}
} else
{return out__11816;
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
{var n__11836 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____11838 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____11838))
{var e__11841 = temp__3695__auto____11838;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11841));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11836,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11810_SHARP_){
var temp__3695__auto____11843 = cljs.core.find.call(null,smap,p1__11810_SHARP_);

if(cljs.core.truth_(temp__3695__auto____11843))
{var e__11844 = temp__3695__auto____11843;

return cljs.core.second.call(null,e__11844);
} else
{return p1__11810_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11877 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11857,seen){
while(true){
var vec__11858__11859 = p__11857;
var f__11860 = cljs.core.nth.call(null,vec__11858__11859,0,null);
var xs__11861 = vec__11858__11859;

var temp__3698__auto____11866 = cljs.core.seq.call(null,xs__11861);

if(cljs.core.truth_(temp__3698__auto____11866))
{var s__11876 = temp__3698__auto____11866;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__11860)))
{{
var G__11883 = cljs.core.rest.call(null,s__11876);
var G__11884 = seen;
p__11857 = G__11883;
seen = G__11884;
continue;
}
} else
{return cljs.core.cons.call(null,f__11860,step.call(null,cljs.core.rest.call(null,s__11876),cljs.core.conj.call(null,seen,f__11860)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__11877.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__11887 = cljs.core.Vector.fromArray([]);
var s__11888 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__11888)))
{{
var G__11891 = cljs.core.conj.call(null,ret__11887,cljs.core.first.call(null,s__11888));
var G__11892 = cljs.core.next.call(null,s__11888);
ret__11887 = G__11891;
s__11888 = G__11892;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11887);
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
{if(cljs.core.truth_((function (){var or__3548__auto____11893 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11893))
{return or__3548__auto____11893;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__11894 = x.lastIndexOf("/");

if(cljs.core.truth_((i__11894 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11894 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____11902 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11902))
{return or__3548__auto____11902;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__11903 = x.lastIndexOf("/");

if(cljs.core.truth_((i__11903 > -1)))
{return cljs.core.subs.call(null,x,2,i__11903);
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
var map__12060 = cljs.core.ObjMap.fromObject([],{});
var ks__12061 = cljs.core.seq.call(null,keys);
var vs__12062 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12170 = ks__12061;

if(cljs.core.truth_(and__3546__auto____12170))
{return vs__12062;
} else
{return and__3546__auto____12170;
}
})()))
{{
var G__12175 = cljs.core.assoc.call(null,map__12060,cljs.core.first.call(null,ks__12061),cljs.core.first.call(null,vs__12062));
var G__12176 = cljs.core.next.call(null,ks__12061);
var G__12177 = cljs.core.next.call(null,vs__12062);
map__12060 = G__12175;
ks__12061 = G__12176;
vs__12062 = G__12177;
continue;
}
} else
{return map__12060;
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
var max_key__12184 = (function (k,x){
return x;
});
var max_key__12185 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__12186 = (function() { 
var G__12195__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12052_SHARP_,p2__12053_SHARP_){
return max_key.call(null,k,p1__12052_SHARP_,p2__12053_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12195 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12195__delegate.call(this, k, x, y, more);
};
G__12195.cljs$lang$maxFixedArity = 3;
G__12195.cljs$lang$applyTo = (function (arglist__12269){
var k = cljs.core.first(arglist__12269);
var x = cljs.core.first(cljs.core.next(arglist__12269));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12269)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12269)));
return G__12195__delegate.call(this, k, x, y, more);
});
return G__12195;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__12184.call(this,k,x);
case  3 :
return max_key__12185.call(this,k,x,y);
default:
return max_key__12186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__12186.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__12271 = (function (k,x){
return x;
});
var min_key__12272 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__12273 = (function() { 
var G__12275__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12179_SHARP_,p2__12180_SHARP_){
return min_key.call(null,k,p1__12179_SHARP_,p2__12180_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12275 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12275__delegate.call(this, k, x, y, more);
};
G__12275.cljs$lang$maxFixedArity = 3;
G__12275.cljs$lang$applyTo = (function (arglist__12276){
var k = cljs.core.first(arglist__12276);
var x = cljs.core.first(cljs.core.next(arglist__12276));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12276)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12276)));
return G__12275__delegate.call(this, k, x, y, more);
});
return G__12275;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__12271.call(this,k,x);
case  3 :
return min_key__12272.call(this,k,x,y);
default:
return min_key__12273.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__12273.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__12284 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__12285 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12279))
{var s__12280 = temp__3698__auto____12279;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12280),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12280)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__12284.call(this,n,step);
case  3 :
return partition_all__12285.call(this,n,step,coll);
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
var temp__3698__auto____12300 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12300))
{var s__12302 = temp__3698__auto____12300;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12302))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12302),take_while.call(null,pred,cljs.core.rest.call(null,s__12302)));
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
var this__12321 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__12324 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12382 = null;
var G__12382__12385 = (function (rng,f){
var this__12326 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__12382__12386 = (function (rng,f,s){
var this__12328 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__12382 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__12382__12385.call(this,rng,f);
case  3 :
return G__12382__12386.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12382;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__12329 = this;
var comp__12330 = (cljs.core.truth_((this__12329.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__12330.call(null,this__12329.start,this__12329.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__12345 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__12345.end - this__12345.start) / this__12345.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__12346 = this;
return this__12346.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__12347 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__12347.meta,(this__12347.start + this__12347.step),this__12347.end,this__12347.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__12349 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__12350 = this;
return (new cljs.core.Range(meta,this__12350.start,this__12350.end,this__12350.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__12354 = this;
return this__12354.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12408 = null;
var G__12408__12413 = (function (rng,n){
var this__12356 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12356.start + (n * this__12356.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12359 = (this__12356.start > this__12356.end);

if(cljs.core.truth_(and__3546__auto____12359))
{return cljs.core._EQ_.call(null,this__12356.step,0);
} else
{return and__3546__auto____12359;
}
})()))
{return this__12356.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__12408__12414 = (function (rng,n,not_found){
var this__12360 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12360.start + (n * this__12360.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12361 = (this__12360.start > this__12360.end);

if(cljs.core.truth_(and__3546__auto____12361))
{return cljs.core._EQ_.call(null,this__12360.step,0);
} else
{return and__3546__auto____12361;
}
})()))
{return this__12360.start;
} else
{return not_found;
}
}
});
G__12408 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__12408__12413.call(this,rng,n);
case  3 :
return G__12408__12414.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12408;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__12362 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12362.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__12425 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__12426 = (function (end){
return range.call(null,0,end,1);
});
var range__12427 = (function (start,end){
return range.call(null,start,end,1);
});
var range__12428 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__12425.call(this);
case  1 :
return range__12426.call(this,start);
case  2 :
return range__12427.call(this,start,end);
case  3 :
return range__12428.call(this,start,end,step);
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
var temp__3698__auto____12430 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12430))
{var s__12432 = temp__3698__auto____12430;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12432),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12432)));
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
var temp__3698__auto____12449 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12449))
{var s__12450 = temp__3698__auto____12449;

var fst__12452 = cljs.core.first.call(null,s__12450);
var fv__12453 = f.call(null,fst__12452);
var run__12455 = cljs.core.cons.call(null,fst__12452,cljs.core.take_while.call(null,(function (p1__12440_SHARP_){
return cljs.core._EQ_.call(null,fv__12453,f.call(null,p1__12440_SHARP_));
}),cljs.core.next.call(null,s__12450)));

return cljs.core.cons.call(null,run__12455,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12455),s__12450))));
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
var reductions__12481 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12477 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12477))
{var s__12478 = temp__3695__auto____12477;

return reductions.call(null,f,cljs.core.first.call(null,s__12478),cljs.core.rest.call(null,s__12478));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__12482 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12479 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12479))
{var s__12480 = temp__3698__auto____12479;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12480)),cljs.core.rest.call(null,s__12480));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__12481.call(this,f,init);
case  3 :
return reductions__12482.call(this,f,init,coll);
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
var juxt__12501 = (function (f){
return (function() {
var G__12507 = null;
var G__12507__12510 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12507__12511 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12507__12512 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12507__12513 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12507__12514 = (function() { 
var G__12520__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12520 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12520__delegate.call(this, x, y, z, args);
};
G__12520.cljs$lang$maxFixedArity = 3;
G__12520.cljs$lang$applyTo = (function (arglist__12525){
var x = cljs.core.first(arglist__12525);
var y = cljs.core.first(cljs.core.next(arglist__12525));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12525)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12525)));
return G__12520__delegate.call(this, x, y, z, args);
});
return G__12520;
})()
;
G__12507 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12507__12510.call(this);
case  1 :
return G__12507__12511.call(this,x);
case  2 :
return G__12507__12512.call(this,x,y);
case  3 :
return G__12507__12513.call(this,x,y,z);
default:
return G__12507__12514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12507.cljs$lang$maxFixedArity = 3;
G__12507.cljs$lang$applyTo = G__12507__12514.cljs$lang$applyTo;
return G__12507;
})()
});
var juxt__12502 = (function (f,g){
return (function() {
var G__12528 = null;
var G__12528__12529 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12528__12530 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12528__12531 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12528__12532 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12528__12533 = (function() { 
var G__12538__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12538 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12538__delegate.call(this, x, y, z, args);
};
G__12538.cljs$lang$maxFixedArity = 3;
G__12538.cljs$lang$applyTo = (function (arglist__12539){
var x = cljs.core.first(arglist__12539);
var y = cljs.core.first(cljs.core.next(arglist__12539));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12539)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12539)));
return G__12538__delegate.call(this, x, y, z, args);
});
return G__12538;
})()
;
G__12528 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12528__12529.call(this);
case  1 :
return G__12528__12530.call(this,x);
case  2 :
return G__12528__12531.call(this,x,y);
case  3 :
return G__12528__12532.call(this,x,y,z);
default:
return G__12528__12533.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12528.cljs$lang$maxFixedArity = 3;
G__12528.cljs$lang$applyTo = G__12528__12533.cljs$lang$applyTo;
return G__12528;
})()
});
var juxt__12503 = (function (f,g,h){
return (function() {
var G__12543 = null;
var G__12543__12544 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12543__12545 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12543__12546 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12543__12547 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12543__12548 = (function() { 
var G__12550__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12550 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12550__delegate.call(this, x, y, z, args);
};
G__12550.cljs$lang$maxFixedArity = 3;
G__12550.cljs$lang$applyTo = (function (arglist__12552){
var x = cljs.core.first(arglist__12552);
var y = cljs.core.first(cljs.core.next(arglist__12552));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12552)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12552)));
return G__12550__delegate.call(this, x, y, z, args);
});
return G__12550;
})()
;
G__12543 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12543__12544.call(this);
case  1 :
return G__12543__12545.call(this,x);
case  2 :
return G__12543__12546.call(this,x,y);
case  3 :
return G__12543__12547.call(this,x,y,z);
default:
return G__12543__12548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12543.cljs$lang$maxFixedArity = 3;
G__12543.cljs$lang$applyTo = G__12543__12548.cljs$lang$applyTo;
return G__12543;
})()
});
var juxt__12504 = (function() { 
var G__12553__delegate = function (f,g,h,fs){
var fs__12492 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__12554 = null;
var G__12554__12555 = (function (){
return cljs.core.reduce.call(null,(function (p1__12467_SHARP_,p2__12468_SHARP_){
return cljs.core.conj.call(null,p1__12467_SHARP_,p2__12468_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__12492);
});
var G__12554__12556 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12469_SHARP_,p2__12470_SHARP_){
return cljs.core.conj.call(null,p1__12469_SHARP_,p2__12470_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__12492);
});
var G__12554__12557 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12471_SHARP_,p2__12472_SHARP_){
return cljs.core.conj.call(null,p1__12471_SHARP_,p2__12472_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__12492);
});
var G__12554__12558 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12473_SHARP_,p2__12474_SHARP_){
return cljs.core.conj.call(null,p1__12473_SHARP_,p2__12474_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__12492);
});
var G__12554__12559 = (function() { 
var G__12562__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12475_SHARP_,p2__12476_SHARP_){
return cljs.core.conj.call(null,p1__12475_SHARP_,cljs.core.apply.call(null,p2__12476_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__12492);
};
var G__12562 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12562__delegate.call(this, x, y, z, args);
};
G__12562.cljs$lang$maxFixedArity = 3;
G__12562.cljs$lang$applyTo = (function (arglist__12563){
var x = cljs.core.first(arglist__12563);
var y = cljs.core.first(cljs.core.next(arglist__12563));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12563)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12563)));
return G__12562__delegate.call(this, x, y, z, args);
});
return G__12562;
})()
;
G__12554 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12554__12555.call(this);
case  1 :
return G__12554__12556.call(this,x);
case  2 :
return G__12554__12557.call(this,x,y);
case  3 :
return G__12554__12558.call(this,x,y,z);
default:
return G__12554__12559.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12554.cljs$lang$maxFixedArity = 3;
G__12554.cljs$lang$applyTo = G__12554__12559.cljs$lang$applyTo;
return G__12554;
})()
};
var G__12553 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12553__delegate.call(this, f, g, h, fs);
};
G__12553.cljs$lang$maxFixedArity = 3;
G__12553.cljs$lang$applyTo = (function (arglist__12564){
var f = cljs.core.first(arglist__12564);
var g = cljs.core.first(cljs.core.next(arglist__12564));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12564)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12564)));
return G__12553__delegate.call(this, f, g, h, fs);
});
return G__12553;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__12501.call(this,f);
case  2 :
return juxt__12502.call(this,f,g);
case  3 :
return juxt__12503.call(this,f,g,h);
default:
return juxt__12504.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__12504.cljs$lang$applyTo;
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
var dorun__12571 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__12574 = cljs.core.next.call(null,coll);
coll = G__12574;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__12572 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12566 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____12566))
{return (n > 0);
} else
{return and__3546__auto____12566;
}
})()))
{{
var G__12575 = (n - 1);
var G__12576 = cljs.core.next.call(null,coll);
n = G__12575;
coll = G__12576;
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
return dorun__12571.call(this,n);
case  2 :
return dorun__12572.call(this,n,coll);
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
var doall__12577 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__12578 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__12577.call(this,n);
case  2 :
return doall__12578.call(this,n,coll);
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
var matches__12580 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12580),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__12580),1)))
{return cljs.core.first.call(null,matches__12580);
} else
{return cljs.core.vec.call(null,matches__12580);
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
var matches__12590 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__12590)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__12590),1)))
{return cljs.core.first.call(null,matches__12590);
} else
{return cljs.core.vec.call(null,matches__12590);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12594 = cljs.core.re_find.call(null,re,s);
var match_idx__12595 = s.search(re);
var match_str__12596 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__12594))?cljs.core.first.call(null,match_data__12594):match_data__12594);
var post_match__12599 = cljs.core.subs.call(null,s,(match_idx__12595 + cljs.core.count.call(null,match_str__12596)));

if(cljs.core.truth_(match_data__12594))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12594,re_seq.call(null,re,post_match__12599));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__12606_SHARP_){
return print_one.call(null,p1__12606_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____12626 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____12626))
{var and__3546__auto____12635 = (function (){var x__445__auto____12629 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____12630 = x__445__auto____12629;

if(cljs.core.truth_(and__3546__auto____12630))
{var and__3546__auto____12631 = x__445__auto____12629.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____12631))
{return cljs.core.not.call(null,x__445__auto____12629.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____12631;
}
} else
{return and__3546__auto____12630;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____12629);
}
})();

if(cljs.core.truth_(and__3546__auto____12635))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____12635;
}
} else
{return and__3546__auto____12626;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____12642 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____12644 = x__445__auto____12642;

if(cljs.core.truth_(and__3546__auto____12644))
{var and__3546__auto____12646 = x__445__auto____12642.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____12646))
{return cljs.core.not.call(null,x__445__auto____12642.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____12646;
}
} else
{return and__3546__auto____12644;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____12642);
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
var first_obj__12655 = cljs.core.first.call(null,objs);
var sb__12656 = (new goog.string.StringBuffer());

var G__12657__12658 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__12657__12658))
{var obj__12659 = cljs.core.first.call(null,G__12657__12658);
var G__12657__12660 = G__12657__12658;

while(true){
if(cljs.core.truth_((obj__12659 === first_obj__12655)))
{} else
{sb__12656.append(" ");
}
var G__12661__12663 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12659,opts));

if(cljs.core.truth_(G__12661__12663))
{var string__12664 = cljs.core.first.call(null,G__12661__12663);
var G__12661__12665 = G__12661__12663;

while(true){
sb__12656.append(string__12664);
var temp__3698__auto____12668 = cljs.core.next.call(null,G__12661__12665);

if(cljs.core.truth_(temp__3698__auto____12668))
{var G__12661__12670 = temp__3698__auto____12668;

{
var G__12677 = cljs.core.first.call(null,G__12661__12670);
var G__12678 = G__12661__12670;
string__12664 = G__12677;
G__12661__12665 = G__12678;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____12672 = cljs.core.next.call(null,G__12657__12660);

if(cljs.core.truth_(temp__3698__auto____12672))
{var G__12657__12673 = temp__3698__auto____12672;

{
var G__12679 = cljs.core.first.call(null,G__12657__12673);
var G__12680 = G__12657__12673;
obj__12659 = G__12679;
G__12657__12660 = G__12680;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__12656);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__12685 = cljs.core.first.call(null,objs);

var G__12686__12687 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__12686__12687))
{var obj__12688 = cljs.core.first.call(null,G__12686__12687);
var G__12686__12689 = G__12686__12687;

while(true){
if(cljs.core.truth_((obj__12688 === first_obj__12685)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__12690__12691 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12688,opts));

if(cljs.core.truth_(G__12690__12691))
{var string__12692 = cljs.core.first.call(null,G__12690__12691);
var G__12690__12693 = G__12690__12691;

while(true){
cljs.core.string_print.call(null,string__12692);
var temp__3698__auto____12694 = cljs.core.next.call(null,G__12690__12693);

if(cljs.core.truth_(temp__3698__auto____12694))
{var G__12690__12739 = temp__3698__auto____12694;

{
var G__12745 = cljs.core.first.call(null,G__12690__12739);
var G__12746 = G__12690__12739;
string__12692 = G__12745;
G__12690__12693 = G__12746;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____12741 = cljs.core.next.call(null,G__12686__12689);

if(cljs.core.truth_(temp__3698__auto____12741))
{var G__12686__12742 = temp__3698__auto____12741;

{
var G__12748 = cljs.core.first.call(null,G__12686__12742);
var G__12749 = G__12686__12742;
obj__12688 = G__12748;
G__12686__12689 = G__12749;
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
pr_str.cljs$lang$applyTo = (function (arglist__12760){
var objs = cljs.core.seq( arglist__12760 );;
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
pr.cljs$lang$applyTo = (function (arglist__12765){
var objs = cljs.core.seq( arglist__12765 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__12772){
var objs = cljs.core.seq( arglist__12772 );;
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
println.cljs$lang$applyTo = (function (arglist__12787){
var objs = cljs.core.seq( arglist__12787 );;
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
prn.cljs$lang$applyTo = (function (arglist__12789){
var objs = cljs.core.seq( arglist__12789 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__12792 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__12792,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____12795 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____12795))
{var nspc__12797 = temp__3698__auto____12795;

return cljs.core.str.call(null,nspc__12797,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____12801 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____12801))
{var nspc__12803 = temp__3698__auto____12801;

return cljs.core.str.call(null,nspc__12803,"/");
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
var pr_pair__12835 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__12835,"{",", ","}",opts,coll);
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
var this__12859 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__12860 = this;
var G__12865__12867 = cljs.core.seq.call(null,this__12860.watches);

if(cljs.core.truth_(G__12865__12867))
{var G__12869__12871 = cljs.core.first.call(null,G__12865__12867);
var vec__12870__12872 = G__12869__12871;
var key__12874 = cljs.core.nth.call(null,vec__12870__12872,0,null);
var f__12875 = cljs.core.nth.call(null,vec__12870__12872,1,null);
var G__12865__12876 = G__12865__12867;

var G__12869__12877 = G__12869__12871;
var G__12865__12878 = G__12865__12876;

while(true){
var vec__12880__12881 = G__12869__12877;
var key__12882 = cljs.core.nth.call(null,vec__12880__12881,0,null);
var f__12883 = cljs.core.nth.call(null,vec__12880__12881,1,null);
var G__12865__12884 = G__12865__12878;

f__12883.call(null,key__12882,this$,oldval,newval);
var temp__3698__auto____12885 = cljs.core.next.call(null,G__12865__12884);

if(cljs.core.truth_(temp__3698__auto____12885))
{var G__12865__12886 = temp__3698__auto____12885;

{
var G__13001 = cljs.core.first.call(null,G__12865__12886);
var G__13002 = G__12865__12886;
G__12869__12877 = G__13001;
G__12865__12878 = G__13002;
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
var this__12887 = this;
return this$.watches = cljs.core.assoc.call(null,this__12887.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__12889 = this;
return this$.watches = cljs.core.dissoc.call(null,this__12889.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__12890 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__12890.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__12891 = this;
return this__12891.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__12894 = this;
return this__12894.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__12895 = this;
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
var atom__13010 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__13011 = (function() { 
var G__13013__delegate = function (x,p__13004){
var map__13005__13006 = p__13004;
var map__13005__13007 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13005__13006))?cljs.core.apply.call(null,cljs.core.hash_map,map__13005__13006):map__13005__13006);
var validator__13008 = cljs.core.get.call(null,map__13005__13007,"﷐'validator");
var meta__13009 = cljs.core.get.call(null,map__13005__13007,"﷐'meta");

return (new cljs.core.Atom(x,meta__13009,validator__13008,null));
};
var G__13013 = function (x,var_args){
var p__13004 = null;
if (goog.isDef(var_args)) {
  p__13004 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13013__delegate.call(this, x, p__13004);
};
G__13013.cljs$lang$maxFixedArity = 1;
G__13013.cljs$lang$applyTo = (function (arglist__13017){
var x = cljs.core.first(arglist__13017);
var p__13004 = cljs.core.rest(arglist__13017);
return G__13013__delegate.call(this, x, p__13004);
});
return G__13013;
})()
;
atom = function(x,var_args){
var p__13004 = var_args;
switch(arguments.length){
case  1 :
return atom__13010.call(this,x);
default:
return atom__13011.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__13011.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____13018 = a.validator;

if(cljs.core.truth_(temp__3698__auto____13018))
{var validate__13019 = temp__3698__auto____13018;

if(cljs.core.truth_(validate__13019.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__13020 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13020,new_value);
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
var swap_BANG___13023 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___13024 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___13025 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___13026 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___13027 = (function() { 
var G__13031__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13031 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13031__delegate.call(this, a, f, x, y, z, more);
};
G__13031.cljs$lang$maxFixedArity = 5;
G__13031.cljs$lang$applyTo = (function (arglist__13032){
var a = cljs.core.first(arglist__13032);
var f = cljs.core.first(cljs.core.next(arglist__13032));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13032)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13032))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13032)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13032)))));
return G__13031__delegate.call(this, a, f, x, y, z, more);
});
return G__13031;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___13023.call(this,a,f);
case  3 :
return swap_BANG___13024.call(this,a,f,x);
case  4 :
return swap_BANG___13025.call(this,a,f,x,y);
case  5 :
return swap_BANG___13026.call(this,a,f,x,y,z);
default:
return swap_BANG___13027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___13027.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13090){
var iref = cljs.core.first(arglist__13090);
var f = cljs.core.first(cljs.core.next(arglist__13090));
var args = cljs.core.rest(cljs.core.next(arglist__13090));
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
var gensym__13113 = (function (){
return gensym.call(null,"G__");
});
var gensym__13114 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__13113.call(this);
case  1 :
return gensym__13114.call(this,prefix_string);
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
var this__13120 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__13120.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13122 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__13122.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__13122.state,this__13122.f);
}
return cljs.core.deref.call(null,this__13122.state);
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
delay.cljs$lang$applyTo = (function (arglist__13132){
var body = cljs.core.seq( arglist__13132 );;
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
var map__13146__13148 = options;
var map__13146__13150 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13146__13148))?cljs.core.apply.call(null,cljs.core.hash_map,map__13146__13148):map__13146__13148);
var keywordize_keys__13151 = cljs.core.get.call(null,map__13146__13150,"﷐'keywordize-keys");
var keyfn__13152 = (cljs.core.truth_(keywordize_keys__13151)?cljs.core.keyword:cljs.core.str);
var f__13171 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____13170 = (function iter__13160(s__13161){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13161__13165 = s__13161;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13161__13165)))
{var k__13167 = cljs.core.first.call(null,s__13161__13165);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__13152.call(null,k__13167),thisfn.call(null,(x[k__13167]))]),iter__13160.call(null,cljs.core.rest.call(null,s__13161__13165)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____13170.call(null,cljs.core.js_keys.call(null,x));
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

return f__13171.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13175){
var x = cljs.core.first(arglist__13175);
var options = cljs.core.rest(arglist__13175);
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
var mem__13176 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__13181__delegate = function (args){
var temp__3695__auto____13177 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__13176),args);

if(cljs.core.truth_(temp__3695__auto____13177))
{var v__13178 = temp__3695__auto____13177;

return v__13178;
} else
{var ret__13179 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__13176,cljs.core.assoc,args,ret__13179);
return ret__13179;
}
};
var G__13181 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13181__delegate.call(this, args);
};
G__13181.cljs$lang$maxFixedArity = 0;
G__13181.cljs$lang$applyTo = (function (arglist__13183){
var args = cljs.core.seq( arglist__13183 );;
return G__13181__delegate.call(this, args);
});
return G__13181;
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
var trampoline__13192 = (function (f){
while(true){
var ret__13187 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__13187)))
{{
var G__13195 = ret__13187;
f = G__13195;
continue;
}
} else
{return ret__13187;
}
break;
}
});
var trampoline__13193 = (function() { 
var G__13196__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13196 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13196__delegate.call(this, f, args);
};
G__13196.cljs$lang$maxFixedArity = 1;
G__13196.cljs$lang$applyTo = (function (arglist__13200){
var f = cljs.core.first(arglist__13200);
var args = cljs.core.rest(arglist__13200);
return G__13196__delegate.call(this, f, args);
});
return G__13196;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__13192.call(this,f);
default:
return trampoline__13193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__13193.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__13225 = (function (){
return rand.call(null,1);
});
var rand__13226 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__13225.call(this);
case  1 :
return rand__13226.call(this,n);
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
var k__13239 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__13239,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__13239,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___13302 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___13303 = (function (h,child,parent){
var or__3548__auto____13252 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____13252))
{return or__3548__auto____13252;
} else
{var or__3548__auto____13253 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____13253))
{return or__3548__auto____13253;
} else
{var and__3546__auto____13254 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____13254))
{var and__3546__auto____13255 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____13255))
{var and__3546__auto____13256 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____13256))
{var ret__13257 = true;
var i__13258 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____13259 = cljs.core.not.call(null,ret__13257);

if(cljs.core.truth_(or__3548__auto____13259))
{return or__3548__auto____13259;
} else
{return cljs.core._EQ_.call(null,i__13258,cljs.core.count.call(null,parent));
}
})()))
{return ret__13257;
} else
{{
var G__13308 = isa_QMARK_.call(null,h,child.call(null,i__13258),parent.call(null,i__13258));
var G__13309 = (i__13258 + 1);
ret__13257 = G__13308;
i__13258 = G__13309;
continue;
}
}
break;
}
} else
{return and__3546__auto____13256;
}
} else
{return and__3546__auto____13255;
}
} else
{return and__3546__auto____13254;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___13302.call(this,h,child);
case  3 :
return isa_QMARK___13303.call(this,h,child,parent);
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
var parents__13312 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__13313 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__13312.call(this,h);
case  2 :
return parents__13313.call(this,h,tag);
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
var ancestors__13324 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__13325 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__13324.call(this,h);
case  2 :
return ancestors__13325.call(this,h,tag);
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
var descendants__13331 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__13332 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__13331.call(this,h);
case  2 :
return descendants__13332.call(this,h,tag);
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
var derive__13359 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__13360 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__13348 = "﷐'parents".call(null,h);
var td__13349 = "﷐'descendants".call(null,h);
var ta__13350 = "﷐'ancestors".call(null,h);
var tf__13353 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____13358 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__13348.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__13350.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__13350.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__13348,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__13353.call(null,"﷐'ancestors".call(null,h),tag,td__13349,parent,ta__13350),"﷐'descendants":tf__13353.call(null,"﷐'descendants".call(null,h),parent,ta__13350,tag,td__13349)});
})());

if(cljs.core.truth_(or__3548__auto____13358))
{return or__3548__auto____13358;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__13359.call(this,h,tag);
case  3 :
return derive__13360.call(this,h,tag,parent);
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
var underive__13379 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__13380 = (function (h,tag,parent){
var parentMap__13371 = "﷐'parents".call(null,h);
var childsParents__13372 = (cljs.core.truth_(parentMap__13371.call(null,tag))?cljs.core.disj.call(null,parentMap__13371.call(null,tag),parent):cljs.core.set([]));
var newParents__13374 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__13372))?cljs.core.assoc.call(null,parentMap__13371,tag,childsParents__13372):cljs.core.dissoc.call(null,parentMap__13371,tag));
var deriv_seq__13376 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13335_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__13335_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__13335_SHARP_),cljs.core.second.call(null,p1__13335_SHARP_)));
}),cljs.core.seq.call(null,newParents__13374)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__13371.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__13337_SHARP_,p2__13339_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__13337_SHARP_,p2__13339_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__13376));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__13379.call(this,h,tag);
case  3 :
return underive__13380.call(this,h,tag,parent);
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
var xprefs__13397 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____13402 = (cljs.core.truth_((function (){var and__3546__auto____13400 = xprefs__13397;

if(cljs.core.truth_(and__3546__auto____13400))
{return xprefs__13397.call(null,y);
} else
{return and__3546__auto____13400;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____13402))
{return or__3548__auto____13402;
} else
{var or__3548__auto____13404 = (function (){var ps__13403 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__13403) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__13403),prefer_table)))
{} else
{}
{
var G__13407 = cljs.core.rest.call(null,ps__13403);
ps__13403 = G__13407;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____13404))
{return or__3548__auto____13404;
} else
{var or__3548__auto____13406 = (function (){var ps__13405 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__13405) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__13405),y,prefer_table)))
{} else
{}
{
var G__13408 = cljs.core.rest.call(null,ps__13405);
ps__13405 = G__13408;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____13406))
{return or__3548__auto____13406;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____13410 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____13410))
{return or__3548__auto____13410;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__13426 = cljs.core.reduce.call(null,(function (be,p__13415){
var vec__13416__13417 = p__13415;
var k__13418 = cljs.core.nth.call(null,vec__13416__13417,0,null);
var ___13419 = cljs.core.nth.call(null,vec__13416__13417,1,null);
var e__13420 = vec__13416__13417;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__13418)))
{var be2__13423 = (cljs.core.truth_((function (){var or__3548__auto____13422 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____13422))
{return or__3548__auto____13422;
} else
{return cljs.core.dominates.call(null,k__13418,cljs.core.first.call(null,be),prefer_table);
}
})())?e__13420:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__13423),k__13418,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__13418," and ",cljs.core.first.call(null,be2__13423),", and neither is preferred")));
}
return be2__13423;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__13426))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__13426));
return cljs.core.second.call(null,best_entry__13426);
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
if(cljs.core.truth_((function (){var and__3546__auto____13562 = mf;

if(cljs.core.truth_(and__3546__auto____13562))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____13562;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____13566 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13566))
{return or__3548__auto____13566;
} else
{var or__3548__auto____13568 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____13568))
{return or__3548__auto____13568;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____13570 = mf;

if(cljs.core.truth_(and__3546__auto____13570))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____13570;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____13572 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13572))
{return or__3548__auto____13572;
} else
{var or__3548__auto____13573 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____13573))
{return or__3548__auto____13573;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____13574 = mf;

if(cljs.core.truth_(and__3546__auto____13574))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____13574;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13575 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13575))
{return or__3548__auto____13575;
} else
{var or__3548__auto____13576 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____13576))
{return or__3548__auto____13576;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____13577 = mf;

if(cljs.core.truth_(and__3546__auto____13577))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____13577;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____13580 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13580))
{return or__3548__auto____13580;
} else
{var or__3548__auto____13584 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____13584))
{return or__3548__auto____13584;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____13588 = mf;

if(cljs.core.truth_(and__3546__auto____13588))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____13588;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13590 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13590))
{return or__3548__auto____13590;
} else
{var or__3548__auto____13591 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____13591))
{return or__3548__auto____13591;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13593 = mf;

if(cljs.core.truth_(and__3546__auto____13593))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____13593;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____13595 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13595))
{return or__3548__auto____13595;
} else
{var or__3548__auto____13597 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____13597))
{return or__3548__auto____13597;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13598 = mf;

if(cljs.core.truth_(and__3546__auto____13598))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____13598;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____13599 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13599))
{return or__3548__auto____13599;
} else
{var or__3548__auto____13600 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____13600))
{return or__3548__auto____13600;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____13601 = mf;

if(cljs.core.truth_(and__3546__auto____13601))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____13601;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____13602 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13602))
{return or__3548__auto____13602;
} else
{var or__3548__auto____13603 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____13603))
{return or__3548__auto____13603;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__13612 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__13613 = cljs.core._get_method.call(null,mf,dispatch_val__13612);

if(cljs.core.truth_(target_fn__13613))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__13612)));
}
return cljs.core.apply.call(null,target_fn__13613,args);
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
var this__13620 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__13622 = this;
cljs.core.swap_BANG_.call(null,this__13622.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13622.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13622.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13622.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__13624 = this;
cljs.core.swap_BANG_.call(null,this__13624.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__13624.method_cache,this__13624.method_table,this__13624.cached_hierarchy,this__13624.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__13626 = this;
cljs.core.swap_BANG_.call(null,this__13626.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__13626.method_cache,this__13626.method_table,this__13626.cached_hierarchy,this__13626.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__13627 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__13627.cached_hierarchy),cljs.core.deref.call(null,this__13627.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__13627.method_cache,this__13627.method_table,this__13627.cached_hierarchy,this__13627.hierarchy);
}
var temp__3695__auto____13628 = cljs.core.deref.call(null,this__13627.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____13628))
{var target_fn__13630 = temp__3695__auto____13628;

return target_fn__13630;
} else
{var temp__3695__auto____13631 = cljs.core.find_and_cache_best_method.call(null,this__13627.name,dispatch_val,this__13627.hierarchy,this__13627.method_table,this__13627.prefer_table,this__13627.method_cache,this__13627.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____13631))
{var target_fn__13632 = temp__3695__auto____13631;

return target_fn__13632;
} else
{return cljs.core.deref.call(null,this__13627.method_table).call(null,this__13627.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__13633 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__13633.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__13633.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__13633.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__13633.method_cache,this__13633.method_table,this__13633.cached_hierarchy,this__13633.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__13634 = this;
return cljs.core.deref.call(null,this__13634.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__13635 = this;
return cljs.core.deref.call(null,this__13635.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__13636 = this;
return cljs.core.do_dispatch.call(null,mf,this__13636.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__13676__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__13676 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13676__delegate.call(this, _, args);
};
G__13676.cljs$lang$maxFixedArity = 1;
G__13676.cljs$lang$applyTo = (function (arglist__13678){
var _ = cljs.core.first(arglist__13678);
var args = cljs.core.rest(arglist__13678);
return G__13676__delegate.call(this, _, args);
});
return G__13676;
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
