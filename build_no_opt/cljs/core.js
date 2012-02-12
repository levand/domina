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
var or__3548__auto____5559 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____5559))
{return or__3548__auto____5559;
} else
{var or__3548__auto____5560 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____5560))
{return or__3548__auto____5560;
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
var _invoke__5798 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____5630 = this$;

if(cljs.core.truth_(and__3546__auto____5630))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5630;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____5633 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5633))
{return or__3548__auto____5633;
} else
{var or__3548__auto____5634 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5634))
{return or__3548__auto____5634;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__5799 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____5636 = this$;

if(cljs.core.truth_(and__3546__auto____5636))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5636;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____5638 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5638))
{return or__3548__auto____5638;
} else
{var or__3548__auto____5640 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5640))
{return or__3548__auto____5640;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__5801 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____5641 = this$;

if(cljs.core.truth_(and__3546__auto____5641))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5641;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____5642 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5642))
{return or__3548__auto____5642;
} else
{var or__3548__auto____5651 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5651))
{return or__3548__auto____5651;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__5802 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____5666 = this$;

if(cljs.core.truth_(and__3546__auto____5666))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5666;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____5667 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5667))
{return or__3548__auto____5667;
} else
{var or__3548__auto____5668 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5668))
{return or__3548__auto____5668;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__5803 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____5669 = this$;

if(cljs.core.truth_(and__3546__auto____5669))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5669;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____5670 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5670))
{return or__3548__auto____5670;
} else
{var or__3548__auto____5671 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5671))
{return or__3548__auto____5671;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__5804 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____5672 = this$;

if(cljs.core.truth_(and__3546__auto____5672))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5672;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____5673 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5673))
{return or__3548__auto____5673;
} else
{var or__3548__auto____5674 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5674))
{return or__3548__auto____5674;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__5805 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____5675 = this$;

if(cljs.core.truth_(and__3546__auto____5675))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5675;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____5676 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5676))
{return or__3548__auto____5676;
} else
{var or__3548__auto____5677 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5677))
{return or__3548__auto____5677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__5806 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____5678 = this$;

if(cljs.core.truth_(and__3546__auto____5678))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5678;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____5679 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5679))
{return or__3548__auto____5679;
} else
{var or__3548__auto____5680 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5680))
{return or__3548__auto____5680;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__5807 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____5681 = this$;

if(cljs.core.truth_(and__3546__auto____5681))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5681;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____5682 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5682))
{return or__3548__auto____5682;
} else
{var or__3548__auto____5683 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5683))
{return or__3548__auto____5683;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__5808 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____5684 = this$;

if(cljs.core.truth_(and__3546__auto____5684))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5684;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____5685 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5685))
{return or__3548__auto____5685;
} else
{var or__3548__auto____5686 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5686))
{return or__3548__auto____5686;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__5809 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____5687 = this$;

if(cljs.core.truth_(and__3546__auto____5687))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5687;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____5688 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5688))
{return or__3548__auto____5688;
} else
{var or__3548__auto____5689 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5689))
{return or__3548__auto____5689;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__5810 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____5690 = this$;

if(cljs.core.truth_(and__3546__auto____5690))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5690;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____5691 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5691))
{return or__3548__auto____5691;
} else
{var or__3548__auto____5724 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5724))
{return or__3548__auto____5724;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__5811 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____5725 = this$;

if(cljs.core.truth_(and__3546__auto____5725))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5725;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____5728 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5728))
{return or__3548__auto____5728;
} else
{var or__3548__auto____5729 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5729))
{return or__3548__auto____5729;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__5812 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____5732 = this$;

if(cljs.core.truth_(and__3546__auto____5732))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5732;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____5734 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5734))
{return or__3548__auto____5734;
} else
{var or__3548__auto____5736 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5736))
{return or__3548__auto____5736;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__5813 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____5738 = this$;

if(cljs.core.truth_(and__3546__auto____5738))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5738;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____5740 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5740))
{return or__3548__auto____5740;
} else
{var or__3548__auto____5742 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5742))
{return or__3548__auto____5742;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__5815 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____5744 = this$;

if(cljs.core.truth_(and__3546__auto____5744))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5744;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____5746 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5746))
{return or__3548__auto____5746;
} else
{var or__3548__auto____5749 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5749))
{return or__3548__auto____5749;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__5816 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____5753 = this$;

if(cljs.core.truth_(and__3546__auto____5753))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5753;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____5756 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5756))
{return or__3548__auto____5756;
} else
{var or__3548__auto____5758 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5758))
{return or__3548__auto____5758;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__5817 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____5763 = this$;

if(cljs.core.truth_(and__3546__auto____5763))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5763;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____5768 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5768))
{return or__3548__auto____5768;
} else
{var or__3548__auto____5769 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5769))
{return or__3548__auto____5769;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__5818 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____5772 = this$;

if(cljs.core.truth_(and__3546__auto____5772))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5772;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____5774 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5774))
{return or__3548__auto____5774;
} else
{var or__3548__auto____5775 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5775))
{return or__3548__auto____5775;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__5819 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____5778 = this$;

if(cljs.core.truth_(and__3546__auto____5778))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5778;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____5781 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5781))
{return or__3548__auto____5781;
} else
{var or__3548__auto____5782 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5782))
{return or__3548__auto____5782;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__5820 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____5787 = this$;

if(cljs.core.truth_(and__3546__auto____5787))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____5787;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____5789 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____5789))
{return or__3548__auto____5789;
} else
{var or__3548__auto____5793 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____5793))
{return or__3548__auto____5793;
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
return _invoke__5798.call(this,this$);
case  2 :
return _invoke__5799.call(this,this$,a);
case  3 :
return _invoke__5801.call(this,this$,a,b);
case  4 :
return _invoke__5802.call(this,this$,a,b,c);
case  5 :
return _invoke__5803.call(this,this$,a,b,c,d);
case  6 :
return _invoke__5804.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__5805.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__5806.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__5807.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__5808.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__5809.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__5810.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__5811.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__5812.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__5813.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__5815.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__5816.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__5817.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__5818.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__5819.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__5820.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5946 = coll;

if(cljs.core.truth_(and__3546__auto____5946))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____5946;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____5949 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5949))
{return or__3548__auto____5949;
} else
{var or__3548__auto____5950 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____5950))
{return or__3548__auto____5950;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____5951 = coll;

if(cljs.core.truth_(and__3546__auto____5951))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____5951;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____5952 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5952))
{return or__3548__auto____5952;
} else
{var or__3548__auto____5954 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____5954))
{return or__3548__auto____5954;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____5957 = coll;

if(cljs.core.truth_(and__3546__auto____5957))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____5957;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____5958 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5958))
{return or__3548__auto____5958;
} else
{var or__3548__auto____5960 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____5960))
{return or__3548__auto____5960;
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
var _nth__5997 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____5968 = coll;

if(cljs.core.truth_(and__3546__auto____5968))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5968;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____5970 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5970))
{return or__3548__auto____5970;
} else
{var or__3548__auto____5972 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5972))
{return or__3548__auto____5972;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__5998 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____5994 = coll;

if(cljs.core.truth_(and__3546__auto____5994))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____5994;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____5995 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____5995))
{return or__3548__auto____5995;
} else
{var or__3548__auto____5996 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____5996))
{return or__3548__auto____5996;
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
return _nth__5997.call(this,coll,n);
case  3 :
return _nth__5998.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6002 = coll;

if(cljs.core.truth_(and__3546__auto____6002))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6002;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6005 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6005))
{return or__3548__auto____6005;
} else
{var or__3548__auto____6007 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6007))
{return or__3548__auto____6007;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6054 = coll;

if(cljs.core.truth_(and__3546__auto____6054))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6054;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6059 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6059))
{return or__3548__auto____6059;
} else
{var or__3548__auto____6061 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6061))
{return or__3548__auto____6061;
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
var _lookup__6079 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6072 = o;

if(cljs.core.truth_(and__3546__auto____6072))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6072;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6073 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6073))
{return or__3548__auto____6073;
} else
{var or__3548__auto____6074 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6074))
{return or__3548__auto____6074;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__6081 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6075 = o;

if(cljs.core.truth_(and__3546__auto____6075))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6075;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____6076 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6076))
{return or__3548__auto____6076;
} else
{var or__3548__auto____6077 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6077))
{return or__3548__auto____6077;
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
return _lookup__6079.call(this,o,k);
case  3 :
return _lookup__6081.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____6085 = coll;

if(cljs.core.truth_(and__3546__auto____6085))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____6085;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____6086 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6086))
{return or__3548__auto____6086;
} else
{var or__3548__auto____6087 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6087))
{return or__3548__auto____6087;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____6089 = coll;

if(cljs.core.truth_(and__3546__auto____6089))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____6089;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____6091 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6091))
{return or__3548__auto____6091;
} else
{var or__3548__auto____6093 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____6093))
{return or__3548__auto____6093;
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
{return (function (){var or__3548__auto____6099 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6099))
{return or__3548__auto____6099;
} else
{var or__3548__auto____6145 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____6145))
{return or__3548__auto____6145;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____6149 = coll;

if(cljs.core.truth_(and__3546__auto____6149))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____6149;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____6152 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6152))
{return or__3548__auto____6152;
} else
{var or__3548__auto____6154 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____6154))
{return or__3548__auto____6154;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6161 = coll;

if(cljs.core.truth_(and__3546__auto____6161))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____6161;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____6165 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6165))
{return or__3548__auto____6165;
} else
{var or__3548__auto____6166 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____6166))
{return or__3548__auto____6166;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6168 = coll;

if(cljs.core.truth_(and__3546__auto____6168))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____6168;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____6170 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6170))
{return or__3548__auto____6170;
} else
{var or__3548__auto____6172 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____6172))
{return or__3548__auto____6172;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____6179 = coll;

if(cljs.core.truth_(and__3546__auto____6179))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____6179;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____6180 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6180))
{return or__3548__auto____6180;
} else
{var or__3548__auto____6181 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____6181))
{return or__3548__auto____6181;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____6187 = o;

if(cljs.core.truth_(and__3546__auto____6187))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____6187;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____6189 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6189))
{return or__3548__auto____6189;
} else
{var or__3548__auto____6190 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____6190))
{return or__3548__auto____6190;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____6197 = o;

if(cljs.core.truth_(and__3546__auto____6197))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____6197;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____6198 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6198))
{return or__3548__auto____6198;
} else
{var or__3548__auto____6199 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____6199))
{return or__3548__auto____6199;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____6203 = o;

if(cljs.core.truth_(and__3546__auto____6203))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____6203;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____6204 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6204))
{return or__3548__auto____6204;
} else
{var or__3548__auto____6205 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____6205))
{return or__3548__auto____6205;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____6209 = o;

if(cljs.core.truth_(and__3546__auto____6209))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____6209;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____6210 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6210))
{return or__3548__auto____6210;
} else
{var or__3548__auto____6211 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____6211))
{return or__3548__auto____6211;
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
var _reduce__6228 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____6215 = coll;

if(cljs.core.truth_(and__3546__auto____6215))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6215;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____6216 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6216))
{return or__3548__auto____6216;
} else
{var or__3548__auto____6217 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6217))
{return or__3548__auto____6217;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__6229 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____6219 = coll;

if(cljs.core.truth_(and__3546__auto____6219))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____6219;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____6224 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6224))
{return or__3548__auto____6224;
} else
{var or__3548__auto____6227 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____6227))
{return or__3548__auto____6227;
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
return _reduce__6228.call(this,coll,f);
case  3 :
return _reduce__6229.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____6233 = o;

if(cljs.core.truth_(and__3546__auto____6233))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____6233;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____6236 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6236))
{return or__3548__auto____6236;
} else
{var or__3548__auto____6238 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____6238))
{return or__3548__auto____6238;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____6252 = o;

if(cljs.core.truth_(and__3546__auto____6252))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____6252;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____6255 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6255))
{return or__3548__auto____6255;
} else
{var or__3548__auto____6256 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____6256))
{return or__3548__auto____6256;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____6258 = o;

if(cljs.core.truth_(and__3546__auto____6258))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____6258;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____6261 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6261))
{return or__3548__auto____6261;
} else
{var or__3548__auto____6262 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____6262))
{return or__3548__auto____6262;
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
if(cljs.core.truth_((function (){var and__3546__auto____6272 = o;

if(cljs.core.truth_(and__3546__auto____6272))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____6272;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____6273 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6273))
{return or__3548__auto____6273;
} else
{var or__3548__auto____6274 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____6274))
{return or__3548__auto____6274;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____6283 = d;

if(cljs.core.truth_(and__3546__auto____6283))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____6283;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____6284 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____6284))
{return or__3548__auto____6284;
} else
{var or__3548__auto____6285 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____6285))
{return or__3548__auto____6285;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____6329 = this$;

if(cljs.core.truth_(and__3546__auto____6329))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____6329;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____6330 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6330))
{return or__3548__auto____6330;
} else
{var or__3548__auto____6331 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____6331))
{return or__3548__auto____6331;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____6333 = this$;

if(cljs.core.truth_(and__3546__auto____6333))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____6333;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____6336 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6336))
{return or__3548__auto____6336;
} else
{var or__3548__auto____6339 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6339))
{return or__3548__auto____6339;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____6345 = this$;

if(cljs.core.truth_(and__3546__auto____6345))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____6345;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____6346 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6346))
{return or__3548__auto____6346;
} else
{var or__3548__auto____6349 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____6349))
{return or__3548__auto____6349;
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
var G__6405 = null;
var G__6405__6406 = (function (o,k){
return null;
});
var G__6405__6407 = (function (o,k,not_found){
return not_found;
});
G__6405 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__6405__6406.call(this,o,k);
case  3 :
return G__6405__6407.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6405;
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
var G__6410 = null;
var G__6410__6411 = (function (_,f){
return f.call(null);
});
var G__6410__6412 = (function (_,f,start){
return start;
});
G__6410 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6410__6411.call(this,_,f);
case  3 :
return G__6410__6412.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6410;
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
var G__6416 = null;
var G__6416__6417 = (function (_,n){
return null;
});
var G__6416__6418 = (function (_,n,not_found){
return not_found;
});
G__6416 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__6416__6417.call(this,_,n);
case  3 :
return G__6416__6418.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6416;
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
var ci_reduce__6458 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__6445 = cljs.core._nth.call(null,cicoll,0);
var n__6446 = 1;

while(true){
if(cljs.core.truth_((n__6446 < cljs.core._count.call(null,cicoll))))
{{
var G__6462 = f.call(null,val__6445,cljs.core._nth.call(null,cicoll,n__6446));
var G__6463 = (n__6446 + 1);
val__6445 = G__6462;
n__6446 = G__6463;
continue;
}
} else
{return val__6445;
}
break;
}
}
});
var ci_reduce__6459 = (function (cicoll,f,val){
var val__6448 = val;
var n__6449 = 0;

while(true){
if(cljs.core.truth_((n__6449 < cljs.core._count.call(null,cicoll))))
{{
var G__6464 = f.call(null,val__6448,cljs.core._nth.call(null,cicoll,n__6449));
var G__6465 = (n__6449 + 1);
val__6448 = G__6464;
n__6449 = G__6465;
continue;
}
} else
{return val__6448;
}
break;
}
});
var ci_reduce__6460 = (function (cicoll,f,val,idx){
var val__6456 = val;
var n__6457 = idx;

while(true){
if(cljs.core.truth_((n__6457 < cljs.core._count.call(null,cicoll))))
{{
var G__6467 = f.call(null,val__6456,cljs.core._nth.call(null,cicoll,n__6457));
var G__6468 = (n__6457 + 1);
val__6456 = G__6467;
n__6457 = G__6468;
continue;
}
} else
{return val__6456;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__6458.call(this,cicoll,f);
case  3 :
return ci_reduce__6459.call(this,cicoll,f,val);
case  4 :
return ci_reduce__6460.call(this,cicoll,f,val,idx);
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
var this__6474 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__6499 = null;
var G__6499__6500 = (function (_,f){
var this__6479 = this;
return cljs.core.ci_reduce.call(null,this__6479.a,f,(this__6479.a[this__6479.i]),(this__6479.i + 1));
});
var G__6499__6501 = (function (_,f,start){
var this__6480 = this;
return cljs.core.ci_reduce.call(null,this__6480.a,f,start,this__6480.i);
});
G__6499 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__6499__6500.call(this,_,f);
case  3 :
return G__6499__6501.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6499;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__6481 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__6483 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__6503 = null;
var G__6503__6504 = (function (coll,n){
var this__6487 = this;
var i__6488 = (n + this__6487.i);

if(cljs.core.truth_((i__6488 < this__6487.a.length)))
{return (this__6487.a[i__6488]);
} else
{return null;
}
});
var G__6503__6505 = (function (coll,n,not_found){
var this__6489 = this;
var i__6490 = (n + this__6489.i);

if(cljs.core.truth_((i__6490 < this__6489.a.length)))
{return (this__6489.a[i__6490]);
} else
{return not_found;
}
});
G__6503 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__6503__6504.call(this,coll,n);
case  3 :
return G__6503__6505.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6503;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__6491 = this;
return (this__6491.a.length - this__6491.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__6492 = this;
return (this__6492.a[this__6492.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__6493 = this;
if(cljs.core.truth_(((this__6493.i + 1) < this__6493.a.length)))
{return (new cljs.core.IndexedSeq(this__6493.a,(this__6493.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__6494 = this;
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
var G__6562 = null;
var G__6562__6566 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__6562__6567 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__6562 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__6562__6566.call(this,array,f);
case  3 :
return G__6562__6567.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6562;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__6573 = null;
var G__6573__6574 = (function (array,k){
return (array[k]);
});
var G__6573__6575 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__6573 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__6573__6574.call(this,array,k);
case  3 :
return G__6573__6575.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6573;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__6577 = null;
var G__6577__6578 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__6577__6579 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__6577 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__6577__6578.call(this,array,n);
case  3 :
return G__6577__6579.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__6577;
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
var temp__3698__auto____6581 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____6581))
{var s__6582 = temp__3698__auto____6581;

return cljs.core._first.call(null,s__6582);
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
var G__6768 = cljs.core.next.call(null,s);
s = G__6768;
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
var s__6769 = cljs.core.seq.call(null,x);
var n__6770 = 0;

while(true){
if(cljs.core.truth_(s__6769))
{{
var G__6774 = cljs.core.next.call(null,s__6769);
var G__6775 = (n__6770 + 1);
s__6769 = G__6774;
n__6770 = G__6775;
continue;
}
} else
{return n__6770;
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
var conj__6785 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__6786 = (function() { 
var G__6788__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__6789 = conj.call(null,coll,x);
var G__6790 = cljs.core.first.call(null,xs);
var G__6791 = cljs.core.next.call(null,xs);
coll = G__6789;
x = G__6790;
xs = G__6791;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__6788 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6788__delegate.call(this, coll, x, xs);
};
G__6788.cljs$lang$maxFixedArity = 2;
G__6788.cljs$lang$applyTo = (function (arglist__6792){
var coll = cljs.core.first(arglist__6792);
var x = cljs.core.first(cljs.core.next(arglist__6792));
var xs = cljs.core.rest(cljs.core.next(arglist__6792));
return G__6788__delegate.call(this, coll, x, xs);
});
return G__6788;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__6785.call(this,coll,x);
default:
return conj__6786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__6786.cljs$lang$applyTo;
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
var nth__6803 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__6804 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__6803.call(this,coll,n);
case  3 :
return nth__6804.call(this,coll,n,not_found);
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
var get__6812 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__6813 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__6812.call(this,o,k);
case  3 :
return get__6813.call(this,o,k,not_found);
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
var assoc__6894 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__6896 = (function() { 
var G__6898__delegate = function (coll,k,v,kvs){
while(true){
var ret__6817 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__6901 = ret__6817;
var G__6902 = cljs.core.first.call(null,kvs);
var G__6903 = cljs.core.second.call(null,kvs);
var G__6904 = cljs.core.nnext.call(null,kvs);
coll = G__6901;
k = G__6902;
v = G__6903;
kvs = G__6904;
continue;
}
} else
{return ret__6817;
}
break;
}
};
var G__6898 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__6898__delegate.call(this, coll, k, v, kvs);
};
G__6898.cljs$lang$maxFixedArity = 3;
G__6898.cljs$lang$applyTo = (function (arglist__6907){
var coll = cljs.core.first(arglist__6907);
var k = cljs.core.first(cljs.core.next(arglist__6907));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__6907)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__6907)));
return G__6898__delegate.call(this, coll, k, v, kvs);
});
return G__6898;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__6894.call(this,coll,k,v);
default:
return assoc__6896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__6896.cljs$lang$applyTo;
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
var dissoc__6919 = (function (coll){
return coll;
});
var dissoc__6921 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__6922 = (function() { 
var G__6925__delegate = function (coll,k,ks){
while(true){
var ret__6911 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__6926 = ret__6911;
var G__6927 = cljs.core.first.call(null,ks);
var G__6928 = cljs.core.next.call(null,ks);
coll = G__6926;
k = G__6927;
ks = G__6928;
continue;
}
} else
{return ret__6911;
}
break;
}
};
var G__6925 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6925__delegate.call(this, coll, k, ks);
};
G__6925.cljs$lang$maxFixedArity = 2;
G__6925.cljs$lang$applyTo = (function (arglist__6929){
var coll = cljs.core.first(arglist__6929);
var k = cljs.core.first(cljs.core.next(arglist__6929));
var ks = cljs.core.rest(cljs.core.next(arglist__6929));
return G__6925__delegate.call(this, coll, k, ks);
});
return G__6925;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__6919.call(this,coll);
case  2 :
return dissoc__6921.call(this,coll,k);
default:
return dissoc__6922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__6922.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____6940 = o;

if(cljs.core.truth_((function (){var and__3546__auto____6941 = x__445__auto____6940;

if(cljs.core.truth_(and__3546__auto____6941))
{var and__3546__auto____6943 = x__445__auto____6940.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____6943))
{return cljs.core.not.call(null,x__445__auto____6940.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____6943;
}
} else
{return and__3546__auto____6941;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____6940);
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
var disj__6959 = (function (coll){
return coll;
});
var disj__6960 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__6961 = (function() { 
var G__6964__delegate = function (coll,k,ks){
while(true){
var ret__6955 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__6965 = ret__6955;
var G__6966 = cljs.core.first.call(null,ks);
var G__6967 = cljs.core.next.call(null,ks);
coll = G__6965;
k = G__6966;
ks = G__6967;
continue;
}
} else
{return ret__6955;
}
break;
}
};
var G__6964 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6964__delegate.call(this, coll, k, ks);
};
G__6964.cljs$lang$maxFixedArity = 2;
G__6964.cljs$lang$applyTo = (function (arglist__6968){
var coll = cljs.core.first(arglist__6968);
var k = cljs.core.first(cljs.core.next(arglist__6968));
var ks = cljs.core.rest(cljs.core.next(arglist__6968));
return G__6964__delegate.call(this, coll, k, ks);
});
return G__6964;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__6959.call(this,coll);
case  2 :
return disj__6960.call(this,coll,k);
default:
return disj__6961.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__6961.cljs$lang$applyTo;
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
{var x__445__auto____6974 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6975 = x__445__auto____6974;

if(cljs.core.truth_(and__3546__auto____6975))
{var and__3546__auto____6976 = x__445__auto____6974.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____6976))
{return cljs.core.not.call(null,x__445__auto____6974.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____6976;
}
} else
{return and__3546__auto____6975;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____6974);
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
{var x__445__auto____6989 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6990 = x__445__auto____6989;

if(cljs.core.truth_(and__3546__auto____6990))
{var and__3546__auto____6992 = x__445__auto____6989.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____6992))
{return cljs.core.not.call(null,x__445__auto____6989.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____6992;
}
} else
{return and__3546__auto____6990;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____6989);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____6997 = x;

if(cljs.core.truth_((function (){var and__3546__auto____6999 = x__445__auto____6997;

if(cljs.core.truth_(and__3546__auto____6999))
{var and__3546__auto____7000 = x__445__auto____6997.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7000))
{return cljs.core.not.call(null,x__445__auto____6997.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7000;
}
} else
{return and__3546__auto____6999;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____6997);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____7004 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7005 = x__445__auto____7004;

if(cljs.core.truth_(and__3546__auto____7005))
{var and__3546__auto____7007 = x__445__auto____7004.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7007))
{return cljs.core.not.call(null,x__445__auto____7004.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7007;
}
} else
{return and__3546__auto____7005;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____7004);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____7009 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7011 = x__445__auto____7009;

if(cljs.core.truth_(and__3546__auto____7011))
{var and__3546__auto____7012 = x__445__auto____7009.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7012))
{return cljs.core.not.call(null,x__445__auto____7009.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7012;
}
} else
{return and__3546__auto____7011;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____7009);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____7019 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7021 = x__445__auto____7019;

if(cljs.core.truth_(and__3546__auto____7021))
{var and__3546__auto____7023 = x__445__auto____7019.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____7023))
{return cljs.core.not.call(null,x__445__auto____7019.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____7023;
}
} else
{return and__3546__auto____7021;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____7019);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____7026 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7027 = x__445__auto____7026;

if(cljs.core.truth_(and__3546__auto____7027))
{var and__3546__auto____7031 = x__445__auto____7026.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____7031))
{return cljs.core.not.call(null,x__445__auto____7026.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____7031;
}
} else
{return and__3546__auto____7027;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____7026);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__7040 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__7040.push(key);
}));
return keys__7040;
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
{var x__445__auto____7056 = s;

if(cljs.core.truth_((function (){var and__3546__auto____7057 = x__445__auto____7056;

if(cljs.core.truth_(and__3546__auto____7057))
{var and__3546__auto____7058 = x__445__auto____7056.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____7058))
{return cljs.core.not.call(null,x__445__auto____7056.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____7058;
}
} else
{return and__3546__auto____7057;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____7056);
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
var and__3546__auto____7074 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7074))
{return cljs.core.not.call(null,(function (){var or__3548__auto____7077 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____7077))
{return or__3548__auto____7077;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____7074;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____7080 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7080))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____7080;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____7084 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____7084))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____7084;
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
var and__3546__auto____7089 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____7089))
{return (n == n.toFixed());
} else
{return and__3546__auto____7089;
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
if(cljs.core.truth_((function (){var and__3546__auto____7095 = coll;

if(cljs.core.truth_(and__3546__auto____7095))
{var and__3546__auto____7097 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____7097))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____7097;
}
} else
{return and__3546__auto____7095;
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
var distinct_QMARK___7108 = (function (x){
return true;
});
var distinct_QMARK___7109 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___7110 = (function() { 
var G__7112__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__7103 = cljs.core.set([y,x]);
var xs__7104 = more;

while(true){
var x__7105 = cljs.core.first.call(null,xs__7104);
var etc__7106 = cljs.core.next.call(null,xs__7104);

if(cljs.core.truth_(xs__7104))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__7103,x__7105)))
{return false;
} else
{{
var G__7114 = cljs.core.conj.call(null,s__7103,x__7105);
var G__7115 = etc__7106;
s__7103 = G__7114;
xs__7104 = G__7115;
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
var G__7112 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7112__delegate.call(this, x, y, more);
};
G__7112.cljs$lang$maxFixedArity = 2;
G__7112.cljs$lang$applyTo = (function (arglist__7116){
var x = cljs.core.first(arglist__7116);
var y = cljs.core.first(cljs.core.next(arglist__7116));
var more = cljs.core.rest(cljs.core.next(arglist__7116));
return G__7112__delegate.call(this, x, y, more);
});
return G__7112;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___7108.call(this,x);
case  2 :
return distinct_QMARK___7109.call(this,x,y);
default:
return distinct_QMARK___7110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___7110.cljs$lang$applyTo;
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
var r__7119 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__7119)))
{return r__7119;
} else
{if(cljs.core.truth_(r__7119))
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
var sort__7136 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__7138 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__7131 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__7131,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__7131);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__7136.call(this,comp);
case  2 :
return sort__7138.call(this,comp,coll);
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
var sort_by__7151 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__7152 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__7151.call(this,keyfn,comp);
case  3 :
return sort_by__7152.call(this,keyfn,comp,coll);
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
var reduce__7159 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__7160 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__7159.call(this,f,val);
case  3 :
return reduce__7160.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__7172 = (function (f,coll){
var temp__3695__auto____7168 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____7168))
{var s__7169 = temp__3695__auto____7168;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__7169),cljs.core.next.call(null,s__7169));
} else
{return f.call(null);
}
});
var seq_reduce__7173 = (function (f,val,coll){
var val__7170 = val;
var coll__7171 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__7171))
{{
var G__7178 = f.call(null,val__7170,cljs.core.first.call(null,coll__7171));
var G__7179 = cljs.core.next.call(null,coll__7171);
val__7170 = G__7178;
coll__7171 = G__7179;
continue;
}
} else
{return val__7170;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__7172.call(this,f,val);
case  3 :
return seq_reduce__7173.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__7182 = null;
var G__7182__7183 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__7182__7184 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__7182 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__7182__7183.call(this,coll,f);
case  3 :
return G__7182__7184.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7182;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___7193 = (function (){
return 0;
});
var _PLUS___7195 = (function (x){
return x;
});
var _PLUS___7196 = (function (x,y){
return (x + y);
});
var _PLUS___7197 = (function() { 
var G__7236__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__7236 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7236__delegate.call(this, x, y, more);
};
G__7236.cljs$lang$maxFixedArity = 2;
G__7236.cljs$lang$applyTo = (function (arglist__7239){
var x = cljs.core.first(arglist__7239);
var y = cljs.core.first(cljs.core.next(arglist__7239));
var more = cljs.core.rest(cljs.core.next(arglist__7239));
return G__7236__delegate.call(this, x, y, more);
});
return G__7236;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___7193.call(this);
case  1 :
return _PLUS___7195.call(this,x);
case  2 :
return _PLUS___7196.call(this,x,y);
default:
return _PLUS___7197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___7197.cljs$lang$applyTo;
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
var ___7253 = (function (x){
return (- x);
});
var ___7254 = (function (x,y){
return (x - y);
});
var ___7255 = (function() { 
var G__7262__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__7262 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7262__delegate.call(this, x, y, more);
};
G__7262.cljs$lang$maxFixedArity = 2;
G__7262.cljs$lang$applyTo = (function (arglist__7267){
var x = cljs.core.first(arglist__7267);
var y = cljs.core.first(cljs.core.next(arglist__7267));
var more = cljs.core.rest(cljs.core.next(arglist__7267));
return G__7262__delegate.call(this, x, y, more);
});
return G__7262;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___7253.call(this,x);
case  2 :
return ___7254.call(this,x,y);
default:
return ___7255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___7255.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___7274 = (function (){
return 1;
});
var _STAR___7275 = (function (x){
return x;
});
var _STAR___7277 = (function (x,y){
return (x * y);
});
var _STAR___7279 = (function() { 
var G__7284__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__7284 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7284__delegate.call(this, x, y, more);
};
G__7284.cljs$lang$maxFixedArity = 2;
G__7284.cljs$lang$applyTo = (function (arglist__7288){
var x = cljs.core.first(arglist__7288);
var y = cljs.core.first(cljs.core.next(arglist__7288));
var more = cljs.core.rest(cljs.core.next(arglist__7288));
return G__7284__delegate.call(this, x, y, more);
});
return G__7284;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___7274.call(this);
case  1 :
return _STAR___7275.call(this,x);
case  2 :
return _STAR___7277.call(this,x,y);
default:
return _STAR___7279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___7279.cljs$lang$applyTo;
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
var _SLASH___7299 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___7300 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___7301 = (function() { 
var G__7305__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__7305 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7305__delegate.call(this, x, y, more);
};
G__7305.cljs$lang$maxFixedArity = 2;
G__7305.cljs$lang$applyTo = (function (arglist__7312){
var x = cljs.core.first(arglist__7312);
var y = cljs.core.first(cljs.core.next(arglist__7312));
var more = cljs.core.rest(cljs.core.next(arglist__7312));
return G__7305__delegate.call(this, x, y, more);
});
return G__7305;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___7299.call(this,x);
case  2 :
return _SLASH___7300.call(this,x,y);
default:
return _SLASH___7301.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___7301.cljs$lang$applyTo;
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
var _LT___7324 = (function (x){
return true;
});
var _LT___7325 = (function (x,y){
return (x < y);
});
var _LT___7326 = (function() { 
var G__7360__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7361 = y;
var G__7362 = cljs.core.first.call(null,more);
var G__7363 = cljs.core.next.call(null,more);
x = G__7361;
y = G__7362;
more = G__7363;
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
var G__7360 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7360__delegate.call(this, x, y, more);
};
G__7360.cljs$lang$maxFixedArity = 2;
G__7360.cljs$lang$applyTo = (function (arglist__7433){
var x = cljs.core.first(arglist__7433);
var y = cljs.core.first(cljs.core.next(arglist__7433));
var more = cljs.core.rest(cljs.core.next(arglist__7433));
return G__7360__delegate.call(this, x, y, more);
});
return G__7360;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___7324.call(this,x);
case  2 :
return _LT___7325.call(this,x,y);
default:
return _LT___7326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___7326.cljs$lang$applyTo;
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
var _LT__EQ___7443 = (function (x){
return true;
});
var _LT__EQ___7444 = (function (x,y){
return (x <= y);
});
var _LT__EQ___7445 = (function() { 
var G__7455__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7457 = y;
var G__7458 = cljs.core.first.call(null,more);
var G__7459 = cljs.core.next.call(null,more);
x = G__7457;
y = G__7458;
more = G__7459;
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
var G__7455 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7455__delegate.call(this, x, y, more);
};
G__7455.cljs$lang$maxFixedArity = 2;
G__7455.cljs$lang$applyTo = (function (arglist__7463){
var x = cljs.core.first(arglist__7463);
var y = cljs.core.first(cljs.core.next(arglist__7463));
var more = cljs.core.rest(cljs.core.next(arglist__7463));
return G__7455__delegate.call(this, x, y, more);
});
return G__7455;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___7443.call(this,x);
case  2 :
return _LT__EQ___7444.call(this,x,y);
default:
return _LT__EQ___7445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___7445.cljs$lang$applyTo;
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
var _GT___7487 = (function (x){
return true;
});
var _GT___7488 = (function (x,y){
return (x > y);
});
var _GT___7489 = (function() { 
var G__7513__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7514 = y;
var G__7515 = cljs.core.first.call(null,more);
var G__7516 = cljs.core.next.call(null,more);
x = G__7514;
y = G__7515;
more = G__7516;
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
var G__7513 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7513__delegate.call(this, x, y, more);
};
G__7513.cljs$lang$maxFixedArity = 2;
G__7513.cljs$lang$applyTo = (function (arglist__7521){
var x = cljs.core.first(arglist__7521);
var y = cljs.core.first(cljs.core.next(arglist__7521));
var more = cljs.core.rest(cljs.core.next(arglist__7521));
return G__7513__delegate.call(this, x, y, more);
});
return G__7513;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___7487.call(this,x);
case  2 :
return _GT___7488.call(this,x,y);
default:
return _GT___7489.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___7489.cljs$lang$applyTo;
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
var _GT__EQ___7535 = (function (x){
return true;
});
var _GT__EQ___7536 = (function (x,y){
return (x >= y);
});
var _GT__EQ___7537 = (function() { 
var G__7544__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7546 = y;
var G__7547 = cljs.core.first.call(null,more);
var G__7548 = cljs.core.next.call(null,more);
x = G__7546;
y = G__7547;
more = G__7548;
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
var G__7544 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7544__delegate.call(this, x, y, more);
};
G__7544.cljs$lang$maxFixedArity = 2;
G__7544.cljs$lang$applyTo = (function (arglist__7551){
var x = cljs.core.first(arglist__7551);
var y = cljs.core.first(cljs.core.next(arglist__7551));
var more = cljs.core.rest(cljs.core.next(arglist__7551));
return G__7544__delegate.call(this, x, y, more);
});
return G__7544;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___7535.call(this,x);
case  2 :
return _GT__EQ___7536.call(this,x,y);
default:
return _GT__EQ___7537.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___7537.cljs$lang$applyTo;
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
var max__7565 = (function (x){
return x;
});
var max__7566 = (function (x,y){
return ((x > y) ? x : y);
});
var max__7567 = (function() { 
var G__7571__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__7571 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7571__delegate.call(this, x, y, more);
};
G__7571.cljs$lang$maxFixedArity = 2;
G__7571.cljs$lang$applyTo = (function (arglist__7572){
var x = cljs.core.first(arglist__7572);
var y = cljs.core.first(cljs.core.next(arglist__7572));
var more = cljs.core.rest(cljs.core.next(arglist__7572));
return G__7571__delegate.call(this, x, y, more);
});
return G__7571;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__7565.call(this,x);
case  2 :
return max__7566.call(this,x,y);
default:
return max__7567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__7567.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__7577 = (function (x){
return x;
});
var min__7578 = (function (x,y){
return ((x < y) ? x : y);
});
var min__7579 = (function() { 
var G__7582__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__7582 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7582__delegate.call(this, x, y, more);
};
G__7582.cljs$lang$maxFixedArity = 2;
G__7582.cljs$lang$applyTo = (function (arglist__7586){
var x = cljs.core.first(arglist__7586);
var y = cljs.core.first(cljs.core.next(arglist__7586));
var more = cljs.core.rest(cljs.core.next(arglist__7586));
return G__7582__delegate.call(this, x, y, more);
});
return G__7582;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__7577.call(this,x);
case  2 :
return min__7578.call(this,x,y);
default:
return min__7579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__7579.cljs$lang$applyTo;
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
var rem__7588 = (n % d);

return cljs.core.fix.call(null,((n - rem__7588) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__7605 = cljs.core.quot.call(null,n,d);

return (n - (d * q__7605));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__7609 = (function (){
return Math.random.call(null);
});
var rand__7610 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__7609.call(this);
case  1 :
return rand__7610.call(this,n);
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
var _EQ__EQ___7736 = (function (x){
return true;
});
var _EQ__EQ___7737 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___7738 = (function() { 
var G__7741__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__7742 = y;
var G__7743 = cljs.core.first.call(null,more);
var G__7744 = cljs.core.next.call(null,more);
x = G__7742;
y = G__7743;
more = G__7744;
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
var G__7741 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7741__delegate.call(this, x, y, more);
};
G__7741.cljs$lang$maxFixedArity = 2;
G__7741.cljs$lang$applyTo = (function (arglist__7745){
var x = cljs.core.first(arglist__7745);
var y = cljs.core.first(cljs.core.next(arglist__7745));
var more = cljs.core.rest(cljs.core.next(arglist__7745));
return G__7741__delegate.call(this, x, y, more);
});
return G__7741;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___7736.call(this,x);
case  2 :
return _EQ__EQ___7737.call(this,x,y);
default:
return _EQ__EQ___7738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___7738.cljs$lang$applyTo;
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
var n__7755 = n;
var xs__7756 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____7757 = xs__7756;

if(cljs.core.truth_(and__3546__auto____7757))
{return (n__7755 > 0);
} else
{return and__3546__auto____7757;
}
})()))
{{
var G__7762 = (n__7755 - 1);
var G__7763 = cljs.core.next.call(null,xs__7756);
n__7755 = G__7762;
xs__7756 = G__7763;
continue;
}
} else
{return xs__7756;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__7792 = null;
var G__7792__7794 = (function (coll,n){
var temp__3695__auto____7769 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7769))
{var xs__7770 = temp__3695__auto____7769;

return cljs.core.first.call(null,xs__7770);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__7792__7795 = (function (coll,n,not_found){
var temp__3695__auto____7780 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____7780))
{var xs__7783 = temp__3695__auto____7780;

return cljs.core.first.call(null,xs__7783);
} else
{return not_found;
}
});
G__7792 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7792__7794.call(this,coll,n);
case  3 :
return G__7792__7795.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7792;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___7813 = (function (){
return "";
});
var str_STAR___7814 = (function (x){
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
var str_STAR___7815 = (function() { 
var G__7819__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__7820 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__7821 = cljs.core.next.call(null,more);
sb = G__7820;
more = G__7821;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__7819 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7819__delegate.call(this, x, ys);
};
G__7819.cljs$lang$maxFixedArity = 1;
G__7819.cljs$lang$applyTo = (function (arglist__7825){
var x = cljs.core.first(arglist__7825);
var ys = cljs.core.rest(arglist__7825);
return G__7819__delegate.call(this, x, ys);
});
return G__7819;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___7813.call(this);
case  1 :
return str_STAR___7814.call(this,x);
default:
return str_STAR___7815.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___7815.cljs$lang$applyTo;
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
var str__7838 = (function (){
return "";
});
var str__7839 = (function (x){
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
var str__7840 = (function() { 
var G__7851__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__7851 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__7851__delegate.call(this, x, ys);
};
G__7851.cljs$lang$maxFixedArity = 1;
G__7851.cljs$lang$applyTo = (function (arglist__7852){
var x = cljs.core.first(arglist__7852);
var ys = cljs.core.rest(arglist__7852);
return G__7851__delegate.call(this, x, ys);
});
return G__7851;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__7838.call(this);
case  1 :
return str__7839.call(this,x);
default:
return str__7840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__7840.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__7861 = (function (s,start){
return s.substring(start);
});
var subs__7862 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__7861.call(this,s,start);
case  3 :
return subs__7862.call(this,s,start,end);
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
var symbol__7876 = (function (name){
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
var symbol__7877 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__7876.call(this,ns);
case  2 :
return symbol__7877.call(this,ns,name);
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
var keyword__7883 = (function (name){
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
var keyword__7884 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__7883.call(this,ns);
case  2 :
return keyword__7884.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__7905 = cljs.core.seq.call(null,x);
var ys__7906 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__7905)))
{return cljs.core.nil_QMARK_.call(null,ys__7906);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__7906)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__7905),cljs.core.first.call(null,ys__7906))))
{{
var G__7918 = cljs.core.next.call(null,xs__7905);
var G__7919 = cljs.core.next.call(null,ys__7906);
xs__7905 = G__7918;
ys__7906 = G__7919;
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
return cljs.core.reduce.call(null,(function (p1__7922_SHARP_,p2__7923_SHARP_){
return cljs.core.hash_combine.call(null,p1__7922_SHARP_,cljs.core.hash.call(null,p2__7923_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__7935__7936 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__7935__7936))
{var G__7938__7943 = cljs.core.first.call(null,G__7935__7936);
var vec__7940__7944 = G__7938__7943;
var key_name__7946 = cljs.core.nth.call(null,vec__7940__7944,0,null);
var f__7947 = cljs.core.nth.call(null,vec__7940__7944,1,null);
var G__7935__7948 = G__7935__7936;

var G__7938__7949 = G__7938__7943;
var G__7935__7950 = G__7935__7948;

while(true){
var vec__7952__7954 = G__7938__7949;
var key_name__7955 = cljs.core.nth.call(null,vec__7952__7954,0,null);
var f__7956 = cljs.core.nth.call(null,vec__7952__7954,1,null);
var G__7935__7957 = G__7935__7950;

var str_name__7962 = cljs.core.name.call(null,key_name__7955);

obj[str_name__7962] = f__7956;
var temp__3698__auto____7964 = cljs.core.next.call(null,G__7935__7957);

if(cljs.core.truth_(temp__3698__auto____7964))
{var G__7935__7965 = temp__3698__auto____7964;

{
var G__7971 = cljs.core.first.call(null,G__7935__7965);
var G__7972 = G__7935__7965;
G__7938__7949 = G__7971;
G__7935__7950 = G__7972;
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
var this__8006 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8009 = this;
return (new cljs.core.List(this__8009.meta,o,coll,(this__8009.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8013 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8015 = this;
return this__8015.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8017 = this;
return this__8017.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8018 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8019 = this;
return this__8019.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8020 = this;
return this__8020.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8023 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8024 = this;
return (new cljs.core.List(meta,this__8024.first,this__8024.rest,this__8024.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8025 = this;
return this__8025.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8026 = this;
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
var this__8069 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8071 = this;
return (new cljs.core.List(this__8071.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8072 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8073 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8078 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8079 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8080 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8081 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8086 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8087 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8091 = this;
return this__8091.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8095 = this;
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
list.cljs$lang$applyTo = (function (arglist__8122){
var items = cljs.core.seq( arglist__8122 );;
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
var this__8124 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8125 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8126 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8127 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8127.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8129 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8130 = this;
return this__8130.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8132 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__8132.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__8132.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8134 = this;
return this__8134.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8136 = this;
return (new cljs.core.Cons(meta,this__8136.first,this__8136.rest));
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
var G__8165 = null;
var G__8165__8166 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__8165__8167 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__8165 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__8165__8166.call(this,string,f);
case  3 :
return G__8165__8167.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8165;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__8169 = null;
var G__8169__8170 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__8169__8171 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__8169 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__8169__8170.call(this,string,k);
case  3 :
return G__8169__8171.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8169;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__8173 = null;
var G__8173__8174 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__8173__8175 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__8173 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__8173__8174.call(this,string,n);
case  3 :
return G__8173__8175.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8173;
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
var G__8193 = null;
var G__8193__8194 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__8193__8195 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__8193 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__8193__8194.call(this,this$,coll);
case  3 :
return G__8193__8195.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8193;
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
var x__8226 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__8226;
} else
{lazy_seq.x = x__8226.call(null);
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
var this__8233 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8234 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8237 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__8238 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__8238.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8239 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8240 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8241 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__8242 = this;
return this__8242.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__8246 = this;
return (new cljs.core.LazySeq(meta,this__8246.realized,this__8246.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__8260 = cljs.core.array.call(null);

var s__8261 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__8261)))
{ary__8260.push(cljs.core.first.call(null,s__8261));
{
var G__8265 = cljs.core.next.call(null,s__8261);
s__8261 = G__8265;
continue;
}
} else
{return ary__8260;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__8267 = s;
var i__8268 = n;
var sum__8269 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8271 = (i__8268 > 0);

if(cljs.core.truth_(and__3546__auto____8271))
{return cljs.core.seq.call(null,s__8267);
} else
{return and__3546__auto____8271;
}
})()))
{{
var G__8273 = cljs.core.next.call(null,s__8267);
var G__8274 = (i__8268 - 1);
var G__8275 = (sum__8269 + 1);
s__8267 = G__8273;
i__8268 = G__8274;
sum__8269 = G__8275;
continue;
}
} else
{return sum__8269;
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
var concat__8315 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__8316 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__8317 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__8303 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__8303))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__8303),concat.call(null,cljs.core.rest.call(null,s__8303),y));
} else
{return y;
}
})));
});
var concat__8318 = (function() { 
var G__8321__delegate = function (x,y,zs){
var cat__8314 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__8310 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__8310))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__8310),cat.call(null,cljs.core.rest.call(null,xys__8310),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__8314.call(null,concat.call(null,x,y),zs);
};
var G__8321 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8321__delegate.call(this, x, y, zs);
};
G__8321.cljs$lang$maxFixedArity = 2;
G__8321.cljs$lang$applyTo = (function (arglist__8322){
var x = cljs.core.first(arglist__8322);
var y = cljs.core.first(cljs.core.next(arglist__8322));
var zs = cljs.core.rest(cljs.core.next(arglist__8322));
return G__8321__delegate.call(this, x, y, zs);
});
return G__8321;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__8315.call(this);
case  1 :
return concat__8316.call(this,x);
case  2 :
return concat__8317.call(this,x,y);
default:
return concat__8318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__8318.cljs$lang$applyTo;
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
var list_STAR___8330 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___8331 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___8332 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___8333 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___8334 = (function() { 
var G__8336__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__8336 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8336__delegate.call(this, a, b, c, d, more);
};
G__8336.cljs$lang$maxFixedArity = 4;
G__8336.cljs$lang$applyTo = (function (arglist__8337){
var a = cljs.core.first(arglist__8337);
var b = cljs.core.first(cljs.core.next(arglist__8337));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8337)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8337))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8337))));
return G__8336__delegate.call(this, a, b, c, d, more);
});
return G__8336;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___8330.call(this,a);
case  2 :
return list_STAR___8331.call(this,a,b);
case  3 :
return list_STAR___8332.call(this,a,b,c);
case  4 :
return list_STAR___8333.call(this,a,b,c,d);
default:
return list_STAR___8334.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___8334.cljs$lang$applyTo;
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
var apply__8389 = (function (f,args){
var fixed_arity__8344 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__8344 + 1)) <= fixed_arity__8344)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__8390 = (function (f,x,args){
var arglist__8345 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__8346 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8345,fixed_arity__8346) <= fixed_arity__8346)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8345));
} else
{return f.cljs$lang$applyTo(arglist__8345);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8345));
}
});
var apply__8391 = (function (f,x,y,args){
var arglist__8348 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__8349 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8348,fixed_arity__8349) <= fixed_arity__8349)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8348));
} else
{return f.cljs$lang$applyTo(arglist__8348);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8348));
}
});
var apply__8392 = (function (f,x,y,z,args){
var arglist__8352 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__8353 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8352,fixed_arity__8353) <= fixed_arity__8353)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8352));
} else
{return f.cljs$lang$applyTo(arglist__8352);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8352));
}
});
var apply__8393 = (function() { 
var G__8415__delegate = function (f,a,b,c,d,args){
var arglist__8377 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__8378 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__8377,fixed_arity__8378) <= fixed_arity__8378)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__8377));
} else
{return f.cljs$lang$applyTo(arglist__8377);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__8377));
}
};
var G__8415 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__8415__delegate.call(this, f, a, b, c, d, args);
};
G__8415.cljs$lang$maxFixedArity = 5;
G__8415.cljs$lang$applyTo = (function (arglist__8418){
var f = cljs.core.first(arglist__8418);
var a = cljs.core.first(cljs.core.next(arglist__8418));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8418)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8418))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8418)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8418)))));
return G__8415__delegate.call(this, f, a, b, c, d, args);
});
return G__8415;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__8389.call(this,f,a);
case  3 :
return apply__8390.call(this,f,a,b);
case  4 :
return apply__8391.call(this,f,a,b,c);
case  5 :
return apply__8392.call(this,f,a,b,c,d);
default:
return apply__8393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__8393.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__8449){
var obj = cljs.core.first(arglist__8449);
var f = cljs.core.first(cljs.core.next(arglist__8449));
var args = cljs.core.rest(cljs.core.next(arglist__8449));
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
var not_EQ___8457 = (function (x){
return false;
});
var not_EQ___8458 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___8459 = (function() { 
var G__8475__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__8475 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8475__delegate.call(this, x, y, more);
};
G__8475.cljs$lang$maxFixedArity = 2;
G__8475.cljs$lang$applyTo = (function (arglist__8476){
var x = cljs.core.first(arglist__8476);
var y = cljs.core.first(cljs.core.next(arglist__8476));
var more = cljs.core.rest(cljs.core.next(arglist__8476));
return G__8475__delegate.call(this, x, y, more);
});
return G__8475;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___8457.call(this,x);
case  2 :
return not_EQ___8458.call(this,x,y);
default:
return not_EQ___8459.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___8459.cljs$lang$applyTo;
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
var G__8493 = pred;
var G__8494 = cljs.core.next.call(null,coll);
pred = G__8493;
coll = G__8494;
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
{var or__3548__auto____8498 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____8498))
{return or__3548__auto____8498;
} else
{{
var G__8504 = pred;
var G__8505 = cljs.core.next.call(null,coll);
pred = G__8504;
coll = G__8505;
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
var G__8544 = null;
var G__8544__8545 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__8544__8546 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__8544__8547 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__8544__8548 = (function() { 
var G__8574__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__8574 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8574__delegate.call(this, x, y, zs);
};
G__8574.cljs$lang$maxFixedArity = 2;
G__8574.cljs$lang$applyTo = (function (arglist__8576){
var x = cljs.core.first(arglist__8576);
var y = cljs.core.first(cljs.core.next(arglist__8576));
var zs = cljs.core.rest(cljs.core.next(arglist__8576));
return G__8574__delegate.call(this, x, y, zs);
});
return G__8574;
})()
;
G__8544 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__8544__8545.call(this);
case  1 :
return G__8544__8546.call(this,x);
case  2 :
return G__8544__8547.call(this,x,y);
default:
return G__8544__8548.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8544.cljs$lang$maxFixedArity = 2;
G__8544.cljs$lang$applyTo = G__8544__8548.cljs$lang$applyTo;
return G__8544;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__8583__delegate = function (args){
return x;
};
var G__8583 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8583__delegate.call(this, args);
};
G__8583.cljs$lang$maxFixedArity = 0;
G__8583.cljs$lang$applyTo = (function (arglist__8584){
var args = cljs.core.seq( arglist__8584 );;
return G__8583__delegate.call(this, args);
});
return G__8583;
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
var comp__8596 = (function (){
return cljs.core.identity;
});
var comp__8597 = (function (f){
return f;
});
var comp__8598 = (function (f,g){
return (function() {
var G__8602 = null;
var G__8602__8603 = (function (){
return f.call(null,g.call(null));
});
var G__8602__8604 = (function (x){
return f.call(null,g.call(null,x));
});
var G__8602__8605 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__8602__8606 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__8602__8607 = (function() { 
var G__8610__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__8610 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8610__delegate.call(this, x, y, z, args);
};
G__8610.cljs$lang$maxFixedArity = 3;
G__8610.cljs$lang$applyTo = (function (arglist__8612){
var x = cljs.core.first(arglist__8612);
var y = cljs.core.first(cljs.core.next(arglist__8612));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8612)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8612)));
return G__8610__delegate.call(this, x, y, z, args);
});
return G__8610;
})()
;
G__8602 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8602__8603.call(this);
case  1 :
return G__8602__8604.call(this,x);
case  2 :
return G__8602__8605.call(this,x,y);
case  3 :
return G__8602__8606.call(this,x,y,z);
default:
return G__8602__8607.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8602.cljs$lang$maxFixedArity = 3;
G__8602.cljs$lang$applyTo = G__8602__8607.cljs$lang$applyTo;
return G__8602;
})()
});
var comp__8599 = (function (f,g,h){
return (function() {
var G__8615 = null;
var G__8615__8616 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__8615__8617 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__8615__8619 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__8615__8620 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__8615__8621 = (function() { 
var G__8625__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__8625 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8625__delegate.call(this, x, y, z, args);
};
G__8625.cljs$lang$maxFixedArity = 3;
G__8625.cljs$lang$applyTo = (function (arglist__8628){
var x = cljs.core.first(arglist__8628);
var y = cljs.core.first(cljs.core.next(arglist__8628));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8628)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8628)));
return G__8625__delegate.call(this, x, y, z, args);
});
return G__8625;
})()
;
G__8615 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__8615__8616.call(this);
case  1 :
return G__8615__8617.call(this,x);
case  2 :
return G__8615__8619.call(this,x,y);
case  3 :
return G__8615__8620.call(this,x,y,z);
default:
return G__8615__8621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8615.cljs$lang$maxFixedArity = 3;
G__8615.cljs$lang$applyTo = G__8615__8621.cljs$lang$applyTo;
return G__8615;
})()
});
var comp__8600 = (function() { 
var G__8629__delegate = function (f1,f2,f3,fs){
var fs__8593 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__8630__delegate = function (args){
var ret__8594 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__8593),args);
var fs__8595 = cljs.core.next.call(null,fs__8593);

while(true){
if(cljs.core.truth_(fs__8595))
{{
var G__8631 = cljs.core.first.call(null,fs__8595).call(null,ret__8594);
var G__8632 = cljs.core.next.call(null,fs__8595);
ret__8594 = G__8631;
fs__8595 = G__8632;
continue;
}
} else
{return ret__8594;
}
break;
}
};
var G__8630 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8630__delegate.call(this, args);
};
G__8630.cljs$lang$maxFixedArity = 0;
G__8630.cljs$lang$applyTo = (function (arglist__8633){
var args = cljs.core.seq( arglist__8633 );;
return G__8630__delegate.call(this, args);
});
return G__8630;
})()
;
};
var G__8629 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8629__delegate.call(this, f1, f2, f3, fs);
};
G__8629.cljs$lang$maxFixedArity = 3;
G__8629.cljs$lang$applyTo = (function (arglist__8634){
var f1 = cljs.core.first(arglist__8634);
var f2 = cljs.core.first(cljs.core.next(arglist__8634));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8634)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8634)));
return G__8629__delegate.call(this, f1, f2, f3, fs);
});
return G__8629;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__8596.call(this);
case  1 :
return comp__8597.call(this,f1);
case  2 :
return comp__8598.call(this,f1,f2);
case  3 :
return comp__8599.call(this,f1,f2,f3);
default:
return comp__8600.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__8600.cljs$lang$applyTo;
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
var partial__8640 = (function (f,arg1){
return (function() { 
var G__8645__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__8645 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8645__delegate.call(this, args);
};
G__8645.cljs$lang$maxFixedArity = 0;
G__8645.cljs$lang$applyTo = (function (arglist__8646){
var args = cljs.core.seq( arglist__8646 );;
return G__8645__delegate.call(this, args);
});
return G__8645;
})()
;
});
var partial__8641 = (function (f,arg1,arg2){
return (function() { 
var G__8647__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__8647 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8647__delegate.call(this, args);
};
G__8647.cljs$lang$maxFixedArity = 0;
G__8647.cljs$lang$applyTo = (function (arglist__8658){
var args = cljs.core.seq( arglist__8658 );;
return G__8647__delegate.call(this, args);
});
return G__8647;
})()
;
});
var partial__8642 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__8659__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__8659 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8659__delegate.call(this, args);
};
G__8659.cljs$lang$maxFixedArity = 0;
G__8659.cljs$lang$applyTo = (function (arglist__8660){
var args = cljs.core.seq( arglist__8660 );;
return G__8659__delegate.call(this, args);
});
return G__8659;
})()
;
});
var partial__8643 = (function() { 
var G__8661__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__8662__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__8662 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__8662__delegate.call(this, args);
};
G__8662.cljs$lang$maxFixedArity = 0;
G__8662.cljs$lang$applyTo = (function (arglist__8663){
var args = cljs.core.seq( arglist__8663 );;
return G__8662__delegate.call(this, args);
});
return G__8662;
})()
;
};
var G__8661 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__8661__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__8661.cljs$lang$maxFixedArity = 4;
G__8661.cljs$lang$applyTo = (function (arglist__8664){
var f = cljs.core.first(arglist__8664);
var arg1 = cljs.core.first(cljs.core.next(arglist__8664));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8664)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8664))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__8664))));
return G__8661__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__8661;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__8640.call(this,f,arg1);
case  3 :
return partial__8641.call(this,f,arg1,arg2);
case  4 :
return partial__8642.call(this,f,arg1,arg2,arg3);
default:
return partial__8643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__8643.cljs$lang$applyTo;
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
var fnil__8703 = (function (f,x){
return (function() {
var G__8707 = null;
var G__8707__8708 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__8707__8709 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__8707__8710 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__8707__8711 = (function() { 
var G__8718__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__8718 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8718__delegate.call(this, a, b, c, ds);
};
G__8718.cljs$lang$maxFixedArity = 3;
G__8718.cljs$lang$applyTo = (function (arglist__8722){
var a = cljs.core.first(arglist__8722);
var b = cljs.core.first(cljs.core.next(arglist__8722));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8722)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8722)));
return G__8718__delegate.call(this, a, b, c, ds);
});
return G__8718;
})()
;
G__8707 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__8707__8708.call(this,a);
case  2 :
return G__8707__8709.call(this,a,b);
case  3 :
return G__8707__8710.call(this,a,b,c);
default:
return G__8707__8711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8707.cljs$lang$maxFixedArity = 3;
G__8707.cljs$lang$applyTo = G__8707__8711.cljs$lang$applyTo;
return G__8707;
})()
});
var fnil__8704 = (function (f,x,y){
return (function() {
var G__8731 = null;
var G__8731__8732 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__8731__8733 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__8731__8734 = (function() { 
var G__8741__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__8741 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8741__delegate.call(this, a, b, c, ds);
};
G__8741.cljs$lang$maxFixedArity = 3;
G__8741.cljs$lang$applyTo = (function (arglist__8742){
var a = cljs.core.first(arglist__8742);
var b = cljs.core.first(cljs.core.next(arglist__8742));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8742)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8742)));
return G__8741__delegate.call(this, a, b, c, ds);
});
return G__8741;
})()
;
G__8731 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8731__8732.call(this,a,b);
case  3 :
return G__8731__8733.call(this,a,b,c);
default:
return G__8731__8734.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8731.cljs$lang$maxFixedArity = 3;
G__8731.cljs$lang$applyTo = G__8731__8734.cljs$lang$applyTo;
return G__8731;
})()
});
var fnil__8705 = (function (f,x,y,z){
return (function() {
var G__8744 = null;
var G__8744__8746 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__8744__8747 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__8744__8748 = (function() { 
var G__8756__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__8756 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8756__delegate.call(this, a, b, c, ds);
};
G__8756.cljs$lang$maxFixedArity = 3;
G__8756.cljs$lang$applyTo = (function (arglist__8791){
var a = cljs.core.first(arglist__8791);
var b = cljs.core.first(cljs.core.next(arglist__8791));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8791)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8791)));
return G__8756__delegate.call(this, a, b, c, ds);
});
return G__8756;
})()
;
G__8744 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__8744__8746.call(this,a,b);
case  3 :
return G__8744__8747.call(this,a,b,c);
default:
return G__8744__8748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__8744.cljs$lang$maxFixedArity = 3;
G__8744.cljs$lang$applyTo = G__8744__8748.cljs$lang$applyTo;
return G__8744;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__8703.call(this,f,x);
case  3 :
return fnil__8704.call(this,f,x,y);
case  4 :
return fnil__8705.call(this,f,x,y,z);
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
var mapi__8800 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8792 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8792))
{var s__8793 = temp__3698__auto____8792;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__8793)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8793)));
} else
{return null;
}
})));
});

return mapi__8800.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8805 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8805))
{var s__8806 = temp__3698__auto____8805;

var x__8807 = f.call(null,cljs.core.first.call(null,s__8806));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__8807)))
{return keep.call(null,f,cljs.core.rest.call(null,s__8806));
} else
{return cljs.core.cons.call(null,x__8807,keep.call(null,f,cljs.core.rest.call(null,s__8806)));
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
var keepi__8833 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____8826 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8826))
{var s__8827 = temp__3698__auto____8826;

var x__8829 = f.call(null,idx,cljs.core.first.call(null,s__8827));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__8829)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8827));
} else
{return cljs.core.cons.call(null,x__8829,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__8827)));
}
} else
{return null;
}
})));
});

return keepi__8833.call(null,0,coll);
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
var every_pred__9106 = (function (p){
return (function() {
var ep1 = null;
var ep1__9112 = (function (){
return true;
});
var ep1__9113 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__9114 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8859 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8859))
{return p.call(null,y);
} else
{return and__3546__auto____8859;
}
})());
});
var ep1__9115 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8865 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____8865))
{var and__3546__auto____8866 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____8866))
{return p.call(null,z);
} else
{return and__3546__auto____8866;
}
} else
{return and__3546__auto____8865;
}
})());
});
var ep1__9117 = (function() { 
var G__9125__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8870 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8870))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____8870;
}
})());
};
var G__9125 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9125__delegate.call(this, x, y, z, args);
};
G__9125.cljs$lang$maxFixedArity = 3;
G__9125.cljs$lang$applyTo = (function (arglist__9128){
var x = cljs.core.first(arglist__9128);
var y = cljs.core.first(cljs.core.next(arglist__9128));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9128)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9128)));
return G__9125__delegate.call(this, x, y, z, args);
});
return G__9125;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__9112.call(this);
case  1 :
return ep1__9113.call(this,x);
case  2 :
return ep1__9114.call(this,x,y);
case  3 :
return ep1__9115.call(this,x,y,z);
default:
return ep1__9117.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__9117.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__9108 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__9130 = (function (){
return true;
});
var ep2__9131 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8872 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8872))
{return p2.call(null,x);
} else
{return and__3546__auto____8872;
}
})());
});
var ep2__9132 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8875 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8875))
{var and__3546__auto____8876 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8876))
{var and__3546__auto____8877 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8877))
{return p2.call(null,y);
} else
{return and__3546__auto____8877;
}
} else
{return and__3546__auto____8876;
}
} else
{return and__3546__auto____8875;
}
})());
});
var ep2__9133 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8879 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8879))
{var and__3546__auto____8881 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8881))
{var and__3546__auto____8882 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8882))
{var and__3546__auto____8940 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8940))
{var and__3546__auto____8948 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8948))
{return p2.call(null,z);
} else
{return and__3546__auto____8948;
}
} else
{return and__3546__auto____8940;
}
} else
{return and__3546__auto____8882;
}
} else
{return and__3546__auto____8881;
}
} else
{return and__3546__auto____8879;
}
})());
});
var ep2__9134 = (function() { 
var G__9140__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8949 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8949))
{return cljs.core.every_QMARK_.call(null,(function (p1__8815_SHARP_){
var and__3546__auto____8951 = p1.call(null,p1__8815_SHARP_);

if(cljs.core.truth_(and__3546__auto____8951))
{return p2.call(null,p1__8815_SHARP_);
} else
{return and__3546__auto____8951;
}
}),args);
} else
{return and__3546__auto____8949;
}
})());
};
var G__9140 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9140__delegate.call(this, x, y, z, args);
};
G__9140.cljs$lang$maxFixedArity = 3;
G__9140.cljs$lang$applyTo = (function (arglist__9149){
var x = cljs.core.first(arglist__9149);
var y = cljs.core.first(cljs.core.next(arglist__9149));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9149)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9149)));
return G__9140__delegate.call(this, x, y, z, args);
});
return G__9140;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__9130.call(this);
case  1 :
return ep2__9131.call(this,x);
case  2 :
return ep2__9132.call(this,x,y);
case  3 :
return ep2__9133.call(this,x,y,z);
default:
return ep2__9134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__9134.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__9109 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__9175 = (function (){
return true;
});
var ep3__9176 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8956 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8956))
{var and__3546__auto____8962 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8962))
{return p3.call(null,x);
} else
{return and__3546__auto____8962;
}
} else
{return and__3546__auto____8956;
}
})());
});
var ep3__9177 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8963 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8963))
{var and__3546__auto____8965 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8965))
{var and__3546__auto____8968 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8968))
{var and__3546__auto____8969 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8969))
{var and__3546__auto____8971 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8971))
{return p3.call(null,y);
} else
{return and__3546__auto____8971;
}
} else
{return and__3546__auto____8969;
}
} else
{return and__3546__auto____8968;
}
} else
{return and__3546__auto____8965;
}
} else
{return and__3546__auto____8963;
}
})());
});
var ep3__9178 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8974 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____8974))
{var and__3546__auto____8976 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____8976))
{var and__3546__auto____8977 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____8977))
{var and__3546__auto____8979 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____8979))
{var and__3546__auto____8982 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____8982))
{var and__3546__auto____8983 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____8983))
{var and__3546__auto____8986 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____8986))
{var and__3546__auto____8988 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____8988))
{return p3.call(null,z);
} else
{return and__3546__auto____8988;
}
} else
{return and__3546__auto____8986;
}
} else
{return and__3546__auto____8983;
}
} else
{return and__3546__auto____8982;
}
} else
{return and__3546__auto____8979;
}
} else
{return and__3546__auto____8977;
}
} else
{return and__3546__auto____8976;
}
} else
{return and__3546__auto____8974;
}
})());
});
var ep3__9179 = (function() { 
var G__9209__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____8990 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____8990))
{return cljs.core.every_QMARK_.call(null,(function (p1__8817_SHARP_){
var and__3546__auto____8991 = p1.call(null,p1__8817_SHARP_);

if(cljs.core.truth_(and__3546__auto____8991))
{var and__3546__auto____9093 = p2.call(null,p1__8817_SHARP_);

if(cljs.core.truth_(and__3546__auto____9093))
{return p3.call(null,p1__8817_SHARP_);
} else
{return and__3546__auto____9093;
}
} else
{return and__3546__auto____8991;
}
}),args);
} else
{return and__3546__auto____8990;
}
})());
};
var G__9209 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9209__delegate.call(this, x, y, z, args);
};
G__9209.cljs$lang$maxFixedArity = 3;
G__9209.cljs$lang$applyTo = (function (arglist__9255){
var x = cljs.core.first(arglist__9255);
var y = cljs.core.first(cljs.core.next(arglist__9255));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9255)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9255)));
return G__9209__delegate.call(this, x, y, z, args);
});
return G__9209;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__9175.call(this);
case  1 :
return ep3__9176.call(this,x);
case  2 :
return ep3__9177.call(this,x,y);
case  3 :
return ep3__9178.call(this,x,y,z);
default:
return ep3__9179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__9179.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__9110 = (function() { 
var G__9256__delegate = function (p1,p2,p3,ps){
var ps__9094 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__9257 = (function (){
return true;
});
var epn__9258 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__8818_SHARP_){
return p1__8818_SHARP_.call(null,x);
}),ps__9094);
});
var epn__9259 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__8819_SHARP_){
var and__3546__auto____9095 = p1__8819_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____9095))
{return p1__8819_SHARP_.call(null,y);
} else
{return and__3546__auto____9095;
}
}),ps__9094);
});
var epn__9260 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__8820_SHARP_){
var and__3546__auto____9096 = p1__8820_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____9096))
{var and__3546__auto____9097 = p1__8820_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____9097))
{return p1__8820_SHARP_.call(null,z);
} else
{return and__3546__auto____9097;
}
} else
{return and__3546__auto____9096;
}
}),ps__9094);
});
var epn__9261 = (function() { 
var G__9263__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____9098 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____9098))
{return cljs.core.every_QMARK_.call(null,(function (p1__8822_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__8822_SHARP_,args);
}),ps__9094);
} else
{return and__3546__auto____9098;
}
})());
};
var G__9263 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9263__delegate.call(this, x, y, z, args);
};
G__9263.cljs$lang$maxFixedArity = 3;
G__9263.cljs$lang$applyTo = (function (arglist__9266){
var x = cljs.core.first(arglist__9266);
var y = cljs.core.first(cljs.core.next(arglist__9266));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9266)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9266)));
return G__9263__delegate.call(this, x, y, z, args);
});
return G__9263;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__9257.call(this);
case  1 :
return epn__9258.call(this,x);
case  2 :
return epn__9259.call(this,x,y);
case  3 :
return epn__9260.call(this,x,y,z);
default:
return epn__9261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__9261.cljs$lang$applyTo;
return epn;
})()
};
var G__9256 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9256__delegate.call(this, p1, p2, p3, ps);
};
G__9256.cljs$lang$maxFixedArity = 3;
G__9256.cljs$lang$applyTo = (function (arglist__9268){
var p1 = cljs.core.first(arglist__9268);
var p2 = cljs.core.first(cljs.core.next(arglist__9268));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9268)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9268)));
return G__9256__delegate.call(this, p1, p2, p3, ps);
});
return G__9256;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__9106.call(this,p1);
case  2 :
return every_pred__9108.call(this,p1,p2);
case  3 :
return every_pred__9109.call(this,p1,p2,p3);
default:
return every_pred__9110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__9110.cljs$lang$applyTo;
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
var some_fn__9416 = (function (p){
return (function() {
var sp1 = null;
var sp1__9427 = (function (){
return null;
});
var sp1__9428 = (function (x){
return p.call(null,x);
});
var sp1__9429 = (function (x,y){
var or__3548__auto____9272 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____9272))
{return or__3548__auto____9272;
} else
{return p.call(null,y);
}
});
var sp1__9430 = (function (x,y,z){
var or__3548__auto____9277 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____9277))
{return or__3548__auto____9277;
} else
{var or__3548__auto____9278 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____9278))
{return or__3548__auto____9278;
} else
{return p.call(null,z);
}
}
});
var sp1__9431 = (function() { 
var G__9434__delegate = function (x,y,z,args){
var or__3548__auto____9279 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____9279))
{return or__3548__auto____9279;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__9434 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9434__delegate.call(this, x, y, z, args);
};
G__9434.cljs$lang$maxFixedArity = 3;
G__9434.cljs$lang$applyTo = (function (arglist__9436){
var x = cljs.core.first(arglist__9436);
var y = cljs.core.first(cljs.core.next(arglist__9436));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9436)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9436)));
return G__9434__delegate.call(this, x, y, z, args);
});
return G__9434;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__9427.call(this);
case  1 :
return sp1__9428.call(this,x);
case  2 :
return sp1__9429.call(this,x,y);
case  3 :
return sp1__9430.call(this,x,y,z);
default:
return sp1__9431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__9431.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__9417 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__9443 = (function (){
return null;
});
var sp2__9444 = (function (x){
var or__3548__auto____9283 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9283))
{return or__3548__auto____9283;
} else
{return p2.call(null,x);
}
});
var sp2__9445 = (function (x,y){
var or__3548__auto____9284 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9284))
{return or__3548__auto____9284;
} else
{var or__3548__auto____9285 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____9285))
{return or__3548__auto____9285;
} else
{var or__3548__auto____9286 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9286))
{return or__3548__auto____9286;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__9446 = (function (x,y,z){
var or__3548__auto____9287 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9287))
{return or__3548__auto____9287;
} else
{var or__3548__auto____9289 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____9289))
{return or__3548__auto____9289;
} else
{var or__3548__auto____9290 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____9290))
{return or__3548__auto____9290;
} else
{var or__3548__auto____9291 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9291))
{return or__3548__auto____9291;
} else
{var or__3548__auto____9292 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____9292))
{return or__3548__auto____9292;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__9447 = (function() { 
var G__9454__delegate = function (x,y,z,args){
var or__3548__auto____9293 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____9293))
{return or__3548__auto____9293;
} else
{return cljs.core.some.call(null,(function (p1__8847_SHARP_){
var or__3548__auto____9294 = p1.call(null,p1__8847_SHARP_);

if(cljs.core.truth_(or__3548__auto____9294))
{return or__3548__auto____9294;
} else
{return p2.call(null,p1__8847_SHARP_);
}
}),args);
}
};
var G__9454 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9454__delegate.call(this, x, y, z, args);
};
G__9454.cljs$lang$maxFixedArity = 3;
G__9454.cljs$lang$applyTo = (function (arglist__9458){
var x = cljs.core.first(arglist__9458);
var y = cljs.core.first(cljs.core.next(arglist__9458));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9458)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9458)));
return G__9454__delegate.call(this, x, y, z, args);
});
return G__9454;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__9443.call(this);
case  1 :
return sp2__9444.call(this,x);
case  2 :
return sp2__9445.call(this,x,y);
case  3 :
return sp2__9446.call(this,x,y,z);
default:
return sp2__9447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__9447.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__9418 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__9470 = (function (){
return null;
});
var sp3__9471 = (function (x){
var or__3548__auto____9296 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9296))
{return or__3548__auto____9296;
} else
{var or__3548__auto____9298 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9298))
{return or__3548__auto____9298;
} else
{return p3.call(null,x);
}
}
});
var sp3__9472 = (function (x,y){
var or__3548__auto____9300 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9300))
{return or__3548__auto____9300;
} else
{var or__3548__auto____9304 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9304))
{return or__3548__auto____9304;
} else
{var or__3548__auto____9308 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____9308))
{return or__3548__auto____9308;
} else
{var or__3548__auto____9358 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____9358))
{return or__3548__auto____9358;
} else
{var or__3548__auto____9360 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____9360))
{return or__3548__auto____9360;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__9473 = (function (x,y,z){
var or__3548__auto____9364 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____9364))
{return or__3548__auto____9364;
} else
{var or__3548__auto____9366 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____9366))
{return or__3548__auto____9366;
} else
{var or__3548__auto____9368 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____9368))
{return or__3548__auto____9368;
} else
{var or__3548__auto____9371 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____9371))
{return or__3548__auto____9371;
} else
{var or__3548__auto____9373 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____9373))
{return or__3548__auto____9373;
} else
{var or__3548__auto____9375 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____9375))
{return or__3548__auto____9375;
} else
{var or__3548__auto____9377 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____9377))
{return or__3548__auto____9377;
} else
{var or__3548__auto____9379 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____9379))
{return or__3548__auto____9379;
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
var sp3__9474 = (function() { 
var G__9493__delegate = function (x,y,z,args){
var or__3548__auto____9381 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____9381))
{return or__3548__auto____9381;
} else
{return cljs.core.some.call(null,(function (p1__8850_SHARP_){
var or__3548__auto____9383 = p1.call(null,p1__8850_SHARP_);

if(cljs.core.truth_(or__3548__auto____9383))
{return or__3548__auto____9383;
} else
{var or__3548__auto____9385 = p2.call(null,p1__8850_SHARP_);

if(cljs.core.truth_(or__3548__auto____9385))
{return or__3548__auto____9385;
} else
{return p3.call(null,p1__8850_SHARP_);
}
}
}),args);
}
};
var G__9493 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9493__delegate.call(this, x, y, z, args);
};
G__9493.cljs$lang$maxFixedArity = 3;
G__9493.cljs$lang$applyTo = (function (arglist__9499){
var x = cljs.core.first(arglist__9499);
var y = cljs.core.first(cljs.core.next(arglist__9499));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9499)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9499)));
return G__9493__delegate.call(this, x, y, z, args);
});
return G__9493;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__9470.call(this);
case  1 :
return sp3__9471.call(this,x);
case  2 :
return sp3__9472.call(this,x,y);
case  3 :
return sp3__9473.call(this,x,y,z);
default:
return sp3__9474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__9474.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__9419 = (function() { 
var G__9589__delegate = function (p1,p2,p3,ps){
var ps__9387 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__9590 = (function (){
return null;
});
var spn__9591 = (function (x){
return cljs.core.some.call(null,(function (p1__8851_SHARP_){
return p1__8851_SHARP_.call(null,x);
}),ps__9387);
});
var spn__9592 = (function (x,y){
return cljs.core.some.call(null,(function (p1__8853_SHARP_){
var or__3548__auto____9395 = p1__8853_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9395))
{return or__3548__auto____9395;
} else
{return p1__8853_SHARP_.call(null,y);
}
}),ps__9387);
});
var spn__9593 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__8854_SHARP_){
var or__3548__auto____9400 = p1__8854_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____9400))
{return or__3548__auto____9400;
} else
{var or__3548__auto____9402 = p1__8854_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____9402))
{return or__3548__auto____9402;
} else
{return p1__8854_SHARP_.call(null,z);
}
}
}),ps__9387);
});
var spn__9594 = (function() { 
var G__9598__delegate = function (x,y,z,args){
var or__3548__auto____9406 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____9406))
{return or__3548__auto____9406;
} else
{return cljs.core.some.call(null,(function (p1__8856_SHARP_){
return cljs.core.some.call(null,p1__8856_SHARP_,args);
}),ps__9387);
}
};
var G__9598 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9598__delegate.call(this, x, y, z, args);
};
G__9598.cljs$lang$maxFixedArity = 3;
G__9598.cljs$lang$applyTo = (function (arglist__9601){
var x = cljs.core.first(arglist__9601);
var y = cljs.core.first(cljs.core.next(arglist__9601));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9601)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9601)));
return G__9598__delegate.call(this, x, y, z, args);
});
return G__9598;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__9590.call(this);
case  1 :
return spn__9591.call(this,x);
case  2 :
return spn__9592.call(this,x,y);
case  3 :
return spn__9593.call(this,x,y,z);
default:
return spn__9594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__9594.cljs$lang$applyTo;
return spn;
})()
};
var G__9589 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9589__delegate.call(this, p1, p2, p3, ps);
};
G__9589.cljs$lang$maxFixedArity = 3;
G__9589.cljs$lang$applyTo = (function (arglist__9602){
var p1 = cljs.core.first(arglist__9602);
var p2 = cljs.core.first(cljs.core.next(arglist__9602));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9602)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9602)));
return G__9589__delegate.call(this, p1, p2, p3, ps);
});
return G__9589;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__9416.call(this,p1);
case  2 :
return some_fn__9417.call(this,p1,p2);
case  3 :
return some_fn__9418.call(this,p1,p2,p3);
default:
return some_fn__9419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__9419.cljs$lang$applyTo;
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
var map__9652 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9613 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9613))
{var s__9614 = temp__3698__auto____9613;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__9614)),map.call(null,f,cljs.core.rest.call(null,s__9614)));
} else
{return null;
}
})));
});
var map__9653 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9618 = cljs.core.seq.call(null,c1);
var s2__9620 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____9621 = s1__9618;

if(cljs.core.truth_(and__3546__auto____9621))
{return s2__9620;
} else
{return and__3546__auto____9621;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9618),cljs.core.first.call(null,s2__9620)),map.call(null,f,cljs.core.rest.call(null,s1__9618),cljs.core.rest.call(null,s2__9620)));
} else
{return null;
}
})));
});
var map__9654 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__9626 = cljs.core.seq.call(null,c1);
var s2__9629 = cljs.core.seq.call(null,c2);
var s3__9630 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____9631 = s1__9626;

if(cljs.core.truth_(and__3546__auto____9631))
{var and__3546__auto____9633 = s2__9629;

if(cljs.core.truth_(and__3546__auto____9633))
{return s3__9630;
} else
{return and__3546__auto____9633;
}
} else
{return and__3546__auto____9631;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__9626),cljs.core.first.call(null,s2__9629),cljs.core.first.call(null,s3__9630)),map.call(null,f,cljs.core.rest.call(null,s1__9626),cljs.core.rest.call(null,s2__9629),cljs.core.rest.call(null,s3__9630)));
} else
{return null;
}
})));
});
var map__9655 = (function() { 
var G__9679__delegate = function (f,c1,c2,c3,colls){
var step__9643 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__9640 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__9640)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__9640),step.call(null,map.call(null,cljs.core.rest,ss__9640)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__9269_SHARP_){
return cljs.core.apply.call(null,f,p1__9269_SHARP_);
}),step__9643.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__9679 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9679__delegate.call(this, f, c1, c2, c3, colls);
};
G__9679.cljs$lang$maxFixedArity = 4;
G__9679.cljs$lang$applyTo = (function (arglist__9688){
var f = cljs.core.first(arglist__9688);
var c1 = cljs.core.first(cljs.core.next(arglist__9688));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9688)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9688))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9688))));
return G__9679__delegate.call(this, f, c1, c2, c3, colls);
});
return G__9679;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__9652.call(this,f,c1);
case  3 :
return map__9653.call(this,f,c1,c2);
case  4 :
return map__9654.call(this,f,c1,c2,c3);
default:
return map__9655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__9655.cljs$lang$applyTo;
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
{var temp__3698__auto____9699 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9699))
{var s__9702 = temp__3698__auto____9699;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__9702),take.call(null,(n - 1),cljs.core.rest.call(null,s__9702)));
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
var step__9835 = (function (n,coll){
while(true){
var s__9832 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____9834 = (n > 0);

if(cljs.core.truth_(and__3546__auto____9834))
{return s__9832;
} else
{return and__3546__auto____9834;
}
})()))
{{
var G__9836 = (n - 1);
var G__9837 = cljs.core.rest.call(null,s__9832);
n = G__9836;
coll = G__9837;
continue;
}
} else
{return s__9832;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__9835.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__9838 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__9839 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__9838.call(this,n);
case  2 :
return drop_last__9839.call(this,n,s);
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
var s__9843 = cljs.core.seq.call(null,coll);
var lead__9844 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__9844))
{{
var G__9856 = cljs.core.next.call(null,s__9843);
var G__9857 = cljs.core.next.call(null,lead__9844);
s__9843 = G__9856;
lead__9844 = G__9857;
continue;
}
} else
{return s__9843;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__9922 = (function (pred,coll){
while(true){
var s__9863 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____9921 = s__9863;

if(cljs.core.truth_(and__3546__auto____9921))
{return pred.call(null,cljs.core.first.call(null,s__9863));
} else
{return and__3546__auto____9921;
}
})()))
{{
var G__9939 = pred;
var G__9940 = cljs.core.rest.call(null,s__9863);
pred = G__9939;
coll = G__9940;
continue;
}
} else
{return s__9863;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__9922.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9945))
{var s__9947 = temp__3698__auto____9945;

return cljs.core.concat.call(null,s__9947,cycle.call(null,s__9947));
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
var repeat__10022 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__10023 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__10022.call(this,n);
case  2 :
return repeat__10023.call(this,n,x);
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
var repeatedly__10029 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__10030 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__10029.call(this,n);
case  2 :
return repeatedly__10030.call(this,n,f);
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
var interleave__10070 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10048 = cljs.core.seq.call(null,c1);
var s2__10050 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____10053 = s1__10048;

if(cljs.core.truth_(and__3546__auto____10053))
{return s2__10050;
} else
{return and__3546__auto____10053;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10048),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10050),interleave.call(null,cljs.core.rest.call(null,s1__10048),cljs.core.rest.call(null,s2__10050))));
} else
{return null;
}
})));
});
var interleave__10071 = (function() { 
var G__10079__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10063 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10063)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10063),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10063)));
} else
{return null;
}
})));
};
var G__10079 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10079__delegate.call(this, c1, c2, colls);
};
G__10079.cljs$lang$maxFixedArity = 2;
G__10079.cljs$lang$applyTo = (function (arglist__10088){
var c1 = cljs.core.first(arglist__10088);
var c2 = cljs.core.first(cljs.core.next(arglist__10088));
var colls = cljs.core.rest(cljs.core.next(arglist__10088));
return G__10079__delegate.call(this, c1, c2, colls);
});
return G__10079;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__10070.call(this,c1,c2);
default:
return interleave__10071.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__10071.cljs$lang$applyTo;
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
var cat__10107 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____10100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____10100))
{var coll__10102 = temp__3695__auto____10100;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__10102),cat.call(null,cljs.core.rest.call(null,coll__10102),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__10107.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__10120 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__10121 = (function() { 
var G__10123__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__10123 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10123__delegate.call(this, f, coll, colls);
};
G__10123.cljs$lang$maxFixedArity = 2;
G__10123.cljs$lang$applyTo = (function (arglist__10124){
var f = cljs.core.first(arglist__10124);
var coll = cljs.core.first(cljs.core.next(arglist__10124));
var colls = cljs.core.rest(cljs.core.next(arglist__10124));
return G__10123__delegate.call(this, f, coll, colls);
});
return G__10123;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__10120.call(this,f,coll);
default:
return mapcat__10121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__10121.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10169 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10169))
{var s__10170 = temp__3698__auto____10169;

var f__10172 = cljs.core.first.call(null,s__10170);
var r__10173 = cljs.core.rest.call(null,s__10170);

if(cljs.core.truth_(pred.call(null,f__10172)))
{return cljs.core.cons.call(null,f__10172,filter.call(null,pred,r__10173));
} else
{return filter.call(null,pred,r__10173);
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
var walk__10190 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__10190.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__10186_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__10186_SHARP_));
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
var partition__10227 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__10228 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10210 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10210))
{var s__10212 = temp__3698__auto____10210;

var p__10215 = cljs.core.take.call(null,n,s__10212);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__10215))))
{return cljs.core.cons.call(null,p__10215,partition.call(null,n,step,cljs.core.drop.call(null,step,s__10212)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__10229 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10217))
{var s__10219 = temp__3698__auto____10217;

var p__10221 = cljs.core.take.call(null,n,s__10219);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__10221))))
{return cljs.core.cons.call(null,p__10221,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__10219)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__10221,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__10227.call(this,n,step);
case  3 :
return partition__10228.call(this,n,step,pad);
case  4 :
return partition__10229.call(this,n,step,pad,coll);
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
var get_in__10257 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__10259 = (function (m,ks,not_found){
var sentinel__10248 = cljs.core.lookup_sentinel;
var m__10249 = m;
var ks__10250 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__10250))
{var m__10252 = cljs.core.get.call(null,m__10249,cljs.core.first.call(null,ks__10250),sentinel__10248);

if(cljs.core.truth_((sentinel__10248 === m__10252)))
{return not_found;
} else
{{
var G__10266 = sentinel__10248;
var G__10267 = m__10252;
var G__10268 = cljs.core.next.call(null,ks__10250);
sentinel__10248 = G__10266;
m__10249 = G__10267;
ks__10250 = G__10268;
continue;
}
}
} else
{return m__10249;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__10257.call(this,m,ks);
case  3 :
return get_in__10259.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__10280,v){
var vec__10281__10285 = p__10280;
var k__10286 = cljs.core.nth.call(null,vec__10281__10285,0,null);
var ks__10287 = cljs.core.nthnext.call(null,vec__10281__10285,1);

if(cljs.core.truth_(ks__10287))
{return cljs.core.assoc.call(null,m,k__10286,assoc_in.call(null,cljs.core.get.call(null,m,k__10286),ks__10287,v));
} else
{return cljs.core.assoc.call(null,m,k__10286,v);
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
var update_in__delegate = function (m,p__10303,f,args){
var vec__10305__10306 = p__10303;
var k__10308 = cljs.core.nth.call(null,vec__10305__10306,0,null);
var ks__10309 = cljs.core.nthnext.call(null,vec__10305__10306,1);

if(cljs.core.truth_(ks__10309))
{return cljs.core.assoc.call(null,m,k__10308,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__10308),ks__10309,f,args));
} else
{return cljs.core.assoc.call(null,m,k__10308,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__10308),args));
}
};
var update_in = function (m,p__10303,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__10303, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__10316){
var m = cljs.core.first(arglist__10316);
var p__10303 = cljs.core.first(cljs.core.next(arglist__10316));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10316)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10316)));
return update_in__delegate.call(this, m, p__10303, f, args);
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
var this__10329 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__10385 = null;
var G__10385__10386 = (function (coll,k){
var this__10332 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__10385__10387 = (function (coll,k,not_found){
var this__10334 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__10385 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__10385__10386.call(this,coll,k);
case  3 :
return G__10385__10387.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10385;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__10337 = this;
var new_array__10340 = cljs.core.aclone.call(null,this__10337.array);

(new_array__10340[k] = v);
return (new cljs.core.Vector(this__10337.meta,new_array__10340));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__10393 = null;
var G__10393__10394 = (function (coll,k){
var this__10342 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__10393__10395 = (function (coll,k,not_found){
var this__10343 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__10393 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__10393__10394.call(this,coll,k);
case  3 :
return G__10393__10395.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10393;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10344 = this;
var new_array__10348 = cljs.core.aclone.call(null,this__10344.array);

new_array__10348.push(o);
return (new cljs.core.Vector(this__10344.meta,new_array__10348));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__10493 = null;
var G__10493__10494 = (function (v,f){
var this__10349 = this;
return cljs.core.ci_reduce.call(null,this__10349.array,f);
});
var G__10493__10495 = (function (v,f,start){
var this__10350 = this;
return cljs.core.ci_reduce.call(null,this__10350.array,f,start);
});
G__10493 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__10493__10494.call(this,v,f);
case  3 :
return G__10493__10495.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10493;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10352 = this;
if(cljs.core.truth_((this__10352.array.length > 0)))
{var vector_seq__10354 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__10352.array.length)))
{return cljs.core.cons.call(null,(this__10352.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__10354.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10355 = this;
return this__10355.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10356 = this;
var count__10358 = this__10356.array.length;

if(cljs.core.truth_((count__10358 > 0)))
{return (this__10356.array[(count__10358 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10362 = this;
if(cljs.core.truth_((this__10362.array.length > 0)))
{var new_array__10363 = cljs.core.aclone.call(null,this__10362.array);

new_array__10363.pop();
return (new cljs.core.Vector(this__10362.meta,new_array__10363));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__10368 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10369 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10370 = this;
return (new cljs.core.Vector(meta,this__10370.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10371 = this;
return this__10371.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__10520 = null;
var G__10520__10521 = (function (coll,n){
var this__10373 = this;
if(cljs.core.truth_((function (){var and__3546__auto____10375 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____10375))
{return (n < this__10373.array.length);
} else
{return and__3546__auto____10375;
}
})()))
{return (this__10373.array[n]);
} else
{return null;
}
});
var G__10520__10522 = (function (coll,n,not_found){
var this__10376 = this;
if(cljs.core.truth_((function (){var and__3546__auto____10377 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____10377))
{return (n < this__10376.array.length);
} else
{return and__3546__auto____10377;
}
})()))
{return (this__10376.array[n]);
} else
{return not_found;
}
});
G__10520 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__10520__10521.call(this,coll,n);
case  3 :
return G__10520__10522.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10520;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10381 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10381.meta);
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
vector.cljs$lang$applyTo = (function (arglist__10547){
var args = cljs.core.seq( arglist__10547 );;
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
var this__10553 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__10655 = null;
var G__10655__10657 = (function (coll,k){
var this__10555 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__10655__10658 = (function (coll,k,not_found){
var this__10593 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__10655 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__10655__10657.call(this,coll,k);
case  3 :
return G__10655__10658.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10655;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__10599 = this;
var v_pos__10601 = (this__10599.start + key);

return (new cljs.core.Subvec(this__10599.meta,cljs.core._assoc.call(null,this__10599.v,v_pos__10601,val),this__10599.start,((this__10599.end > (v_pos__10601 + 1)) ? this__10599.end : (v_pos__10601 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__10669 = null;
var G__10669__10670 = (function (coll,k){
var this__10604 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__10669__10671 = (function (coll,k,not_found){
var this__10606 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__10669 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__10669__10670.call(this,coll,k);
case  3 :
return G__10669__10671.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10669;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10608 = this;
return (new cljs.core.Subvec(this__10608.meta,cljs.core._assoc_n.call(null,this__10608.v,this__10608.end,o),this__10608.start,(this__10608.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__10676 = null;
var G__10676__10677 = (function (coll,f){
var this__10611 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__10676__10678 = (function (coll,f,start){
var this__10613 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__10676 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__10676__10677.call(this,coll,f);
case  3 :
return G__10676__10678.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10676;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10614 = this;
var subvec_seq__10620 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__10614.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__10614.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__10620.call(null,this__10614.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10621 = this;
return (this__10621.end - this__10621.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10627 = this;
return cljs.core._nth.call(null,this__10627.v,(this__10627.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10629 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__10629.start,this__10629.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__10629.meta,this__10629.v,this__10629.start,(this__10629.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__10634 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10639 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10642 = this;
return (new cljs.core.Subvec(meta,this__10642.v,this__10642.start,this__10642.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10644 = this;
return this__10644.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__10689 = null;
var G__10689__10690 = (function (coll,n){
var this__10646 = this;
return cljs.core._nth.call(null,this__10646.v,(this__10646.start + n));
});
var G__10689__10692 = (function (coll,n,not_found){
var this__10648 = this;
return cljs.core._nth.call(null,this__10648.v,(this__10648.start + n),not_found);
});
G__10689 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__10689__10690.call(this,coll,n);
case  3 :
return G__10689__10692.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10689;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10650 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__10650.meta);
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
var subvec__10701 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__10702 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__10701.call(this,v,start);
case  3 :
return subvec__10702.call(this,v,start,end);
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
var this__10724 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10727 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10730 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10829 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10829.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10833 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10837 = this;
return cljs.core._first.call(null,this__10837.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10838 = this;
var temp__3695__auto____10840 = cljs.core.next.call(null,this__10838.front);

if(cljs.core.truth_(temp__3695__auto____10840))
{var f1__10843 = temp__3695__auto____10840;

return (new cljs.core.PersistentQueueSeq(this__10838.meta,f1__10843,this__10838.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10838.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__10838.meta,this__10838.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10845 = this;
return this__10845.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10846 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__10846.front,this__10846.rear));
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
var this__10864 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10866 = this;
if(cljs.core.truth_(this__10866.front))
{return (new cljs.core.PersistentQueue(this__10866.meta,(this__10866.count + 1),this__10866.front,cljs.core.conj.call(null,(function (){var or__3548__auto____10869 = this__10866.rear;

if(cljs.core.truth_(or__3548__auto____10869))
{return or__3548__auto____10869;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__10866.meta,(this__10866.count + 1),cljs.core.conj.call(null,this__10866.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10871 = this;
var rear__10873 = cljs.core.seq.call(null,this__10871.rear);

if(cljs.core.truth_((function (){var or__3548__auto____10876 = this__10871.front;

if(cljs.core.truth_(or__3548__auto____10876))
{return or__3548__auto____10876;
} else
{return rear__10873;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__10871.front,cljs.core.seq.call(null,rear__10873)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10880 = this;
return this__10880.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10883 = this;
return cljs.core._first.call(null,this__10883.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10886 = this;
if(cljs.core.truth_(this__10886.front))
{var temp__3695__auto____10888 = cljs.core.next.call(null,this__10886.front);

if(cljs.core.truth_(temp__3695__auto____10888))
{var f1__10890 = temp__3695__auto____10888;

return (new cljs.core.PersistentQueue(this__10886.meta,(this__10886.count - 1),f1__10890,this__10886.rear));
} else
{return (new cljs.core.PersistentQueue(this__10886.meta,(this__10886.count - 1),cljs.core.seq.call(null,this__10886.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10893 = this;
return cljs.core.first.call(null,this__10893.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10894 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10897 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10899 = this;
return (new cljs.core.PersistentQueue(meta,this__10899.count,this__10899.front,this__10899.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10901 = this;
return this__10901.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10903 = this;
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
var this__10937 = this;
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
var len__10961 = array.length;

var i__10962 = 0;

while(true){
if(cljs.core.truth_((i__10962 < len__10961)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__10962]))))
{return i__10962;
} else
{{
var G__10967 = (i__10962 + incr);
i__10962 = G__10967;
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
var obj_map_contains_key_QMARK___10988 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___10989 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____10985 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____10985))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____10985;
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
return obj_map_contains_key_QMARK___10988.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___10989.call(this,k,strobj,true_val,false_val);
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
var this__11014 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11052 = null;
var G__11052__11053 = (function (coll,k){
var this__11016 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__11052__11054 = (function (coll,k,not_found){
var this__11017 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__11017.strobj,(this__11017.strobj[k]),not_found);
});
G__11052 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11052__11053.call(this,coll,k);
case  3 :
return G__11052__11054.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11052;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11018 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__11021 = goog.object.clone.call(null,this__11018.strobj);
var overwrite_QMARK___11024 = new_strobj__11021.hasOwnProperty(k);

(new_strobj__11021[k] = v);
if(cljs.core.truth_(overwrite_QMARK___11024))
{return (new cljs.core.ObjMap(this__11018.meta,this__11018.keys,new_strobj__11021));
} else
{var new_keys__11025 = cljs.core.aclone.call(null,this__11018.keys);

new_keys__11025.push(k);
return (new cljs.core.ObjMap(this__11018.meta,new_keys__11025,new_strobj__11021));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__11018.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__11027 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__11027.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__11060 = null;
var G__11060__11061 = (function (coll,k){
var this__11028 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11060__11062 = (function (coll,k,not_found){
var this__11029 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11060 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11060__11061.call(this,coll,k);
case  3 :
return G__11060__11062.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11060;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__11030 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11031 = this;
if(cljs.core.truth_((this__11031.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__10995_SHARP_){
return cljs.core.vector.call(null,p1__10995_SHARP_,(this__11031.strobj[p1__10995_SHARP_]));
}),this__11031.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11032 = this;
return this__11032.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11034 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11037 = this;
return (new cljs.core.ObjMap(meta,this__11037.keys,this__11037.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11039 = this;
return this__11039.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11041 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11041.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__11043 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11045 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____11045))
{return this__11043.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____11045;
}
})()))
{var new_keys__11046 = cljs.core.aclone.call(null,this__11043.keys);
var new_strobj__11048 = goog.object.clone.call(null,this__11043.strobj);

new_keys__11046.splice(cljs.core.scan_array.call(null,1,k,new_keys__11046),1);
cljs.core.js_delete.call(null,new_strobj__11048,k);
return (new cljs.core.ObjMap(this__11043.meta,new_keys__11046,new_strobj__11048));
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
var this__11084 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11165 = null;
var G__11165__11166 = (function (coll,k){
var this__11085 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__11165__11167 = (function (coll,k,not_found){
var this__11087 = this;
var bucket__11088 = (this__11087.hashobj[cljs.core.hash.call(null,k)]);
var i__11090 = (cljs.core.truth_(bucket__11088)?cljs.core.scan_array.call(null,2,k,bucket__11088):null);

if(cljs.core.truth_(i__11090))
{return (bucket__11088[(i__11090 + 1)]);
} else
{return not_found;
}
});
G__11165 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11165__11166.call(this,coll,k);
case  3 :
return G__11165__11167.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11165;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11092 = this;
var h__11094 = cljs.core.hash.call(null,k);
var bucket__11095 = (this__11092.hashobj[h__11094]);

if(cljs.core.truth_(bucket__11095))
{var new_bucket__11096 = cljs.core.aclone.call(null,bucket__11095);
var new_hashobj__11097 = goog.object.clone.call(null,this__11092.hashobj);

(new_hashobj__11097[h__11094] = new_bucket__11096);
var temp__3695__auto____11099 = cljs.core.scan_array.call(null,2,k,new_bucket__11096);

if(cljs.core.truth_(temp__3695__auto____11099))
{var i__11100 = temp__3695__auto____11099;

(new_bucket__11096[(i__11100 + 1)] = v);
return (new cljs.core.HashMap(this__11092.meta,this__11092.count,new_hashobj__11097));
} else
{new_bucket__11096.push(k,v);
return (new cljs.core.HashMap(this__11092.meta,(this__11092.count + 1),new_hashobj__11097));
}
} else
{var new_hashobj__11103 = goog.object.clone.call(null,this__11092.hashobj);

(new_hashobj__11103[h__11094] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__11092.meta,(this__11092.count + 1),new_hashobj__11103));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__11105 = this;
var bucket__11107 = (this__11105.hashobj[cljs.core.hash.call(null,k)]);
var i__11109 = (cljs.core.truth_(bucket__11107)?cljs.core.scan_array.call(null,2,k,bucket__11107):null);

if(cljs.core.truth_(i__11109))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__11214 = null;
var G__11214__11215 = (function (coll,k){
var this__11111 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11214__11216 = (function (coll,k,not_found){
var this__11112 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11214 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11214__11215.call(this,coll,k);
case  3 :
return G__11214__11216.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11214;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__11138 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11140 = this;
if(cljs.core.truth_((this__11140.count > 0)))
{var hashes__11142 = cljs.core.js_keys.call(null,this__11140.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__11076_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__11140.hashobj[p1__11076_SHARP_])));
}),hashes__11142);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11147 = this;
return this__11147.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11148 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11149 = this;
return (new cljs.core.HashMap(meta,this__11149.count,this__11149.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11151 = this;
return this__11151.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11153 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__11153.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__11154 = this;
var h__11155 = cljs.core.hash.call(null,k);
var bucket__11156 = (this__11154.hashobj[h__11155]);
var i__11158 = (cljs.core.truth_(bucket__11156)?cljs.core.scan_array.call(null,2,k,bucket__11156):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__11158)))
{return coll;
} else
{var new_hashobj__11160 = goog.object.clone.call(null,this__11154.hashobj);

if(cljs.core.truth_((3 > bucket__11156.length)))
{cljs.core.js_delete.call(null,new_hashobj__11160,h__11155);
} else
{var new_bucket__11162 = cljs.core.aclone.call(null,bucket__11156);

new_bucket__11162.splice(i__11158,2);
(new_hashobj__11160[h__11155] = new_bucket__11162);
}
return (new cljs.core.HashMap(this__11154.meta,(this__11154.count - 1),new_hashobj__11160));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__11363 = ks.length;

var i__11366 = 0;
var out__11368 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__11366 < len__11363)))
{{
var G__11369 = (i__11366 + 1);
var G__11371 = cljs.core.assoc.call(null,out__11368,(ks[i__11366]),(vs[i__11366]));
i__11366 = G__11369;
out__11368 = G__11371;
continue;
}
} else
{return out__11368;
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
var in$__11375 = cljs.core.seq.call(null,keyvals);
var out__11378 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__11375))
{{
var G__11383 = cljs.core.nnext.call(null,in$__11375);
var G__11384 = cljs.core.assoc.call(null,out__11378,cljs.core.first.call(null,in$__11375),cljs.core.second.call(null,in$__11375));
in$__11375 = G__11383;
out__11378 = G__11384;
continue;
}
} else
{return out__11378;
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
hash_map.cljs$lang$applyTo = (function (arglist__11385){
var keyvals = cljs.core.seq( arglist__11385 );;
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
{return cljs.core.reduce.call(null,(function (p1__11392_SHARP_,p2__11394_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____11401 = p1__11392_SHARP_;

if(cljs.core.truth_(or__3548__auto____11401))
{return or__3548__auto____11401;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__11394_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__11402){
var maps = cljs.core.seq( arglist__11402 );;
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
{var merge_entry__11411 = (function (m,e){
var k__11408 = cljs.core.first.call(null,e);
var v__11409 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__11408)))
{return cljs.core.assoc.call(null,m,k__11408,f.call(null,cljs.core.get.call(null,m,k__11408),v__11409));
} else
{return cljs.core.assoc.call(null,m,k__11408,v__11409);
}
});
var merge2__11413 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__11411,(function (){var or__3548__auto____11412 = m1;

if(cljs.core.truth_(or__3548__auto____11412))
{return or__3548__auto____11412;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__11413,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__11425){
var f = cljs.core.first(arglist__11425);
var maps = cljs.core.rest(arglist__11425);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__11595 = cljs.core.ObjMap.fromObject([],{});
var keys__11597 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__11597))
{var key__11599 = cljs.core.first.call(null,keys__11597);
var entry__11600 = cljs.core.get.call(null,map,key__11599,"﷐'user/not-found");

{
var G__11606 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__11600,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__11595,key__11599,entry__11600):ret__11595);
var G__11639 = cljs.core.next.call(null,keys__11597);
ret__11595 = G__11606;
keys__11597 = G__11639;
continue;
}
} else
{return ret__11595;
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
var this__11655 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11697 = null;
var G__11697__11698 = (function (coll,v){
var this__11656 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__11697__11699 = (function (coll,v,not_found){
var this__11657 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__11657.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__11697 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__11697__11698.call(this,coll,v);
case  3 :
return G__11697__11699.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11697;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__11704 = null;
var G__11704__11709 = (function (coll,k){
var this__11658 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11704__11711 = (function (coll,k,not_found){
var this__11659 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11704 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11704__11709.call(this,coll,k);
case  3 :
return G__11704__11711.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11704;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11660 = this;
return (new cljs.core.Set(this__11660.meta,cljs.core.assoc.call(null,this__11660.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11661 = this;
return cljs.core.keys.call(null,this__11661.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__11667 = this;
return (new cljs.core.Set(this__11667.meta,cljs.core.dissoc.call(null,this__11667.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11675 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11676 = this;
var and__3546__auto____11679 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____11679))
{var and__3546__auto____11681 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____11681))
{return cljs.core.every_QMARK_.call(null,(function (p1__11490_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__11490_SHARP_);
}),other);
} else
{return and__3546__auto____11681;
}
} else
{return and__3546__auto____11679;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11684 = this;
return (new cljs.core.Set(meta,this__11684.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11692 = this;
return this__11692.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11693 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__11693.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__11762 = cljs.core.seq.call(null,coll);
var out__11763 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__11762))))
{{
var G__11840 = cljs.core.rest.call(null,in$__11762);
var G__11841 = cljs.core.conj.call(null,out__11763,cljs.core.first.call(null,in$__11762));
in$__11762 = G__11840;
out__11763 = G__11841;
continue;
}
} else
{return out__11763;
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
{var n__11848 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____11850 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____11850))
{var e__11852 = temp__3695__auto____11850;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__11852));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__11848,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__11743_SHARP_){
var temp__3695__auto____11856 = cljs.core.find.call(null,smap,p1__11743_SHARP_);

if(cljs.core.truth_(temp__3695__auto____11856))
{var e__11859 = temp__3695__auto____11856;

return cljs.core.second.call(null,e__11859);
} else
{return p1__11743_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__11882 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__11869,seen){
while(true){
var vec__11871__11872 = p__11869;
var f__11874 = cljs.core.nth.call(null,vec__11871__11872,0,null);
var xs__11875 = vec__11871__11872;

var temp__3698__auto____11877 = cljs.core.seq.call(null,xs__11875);

if(cljs.core.truth_(temp__3698__auto____11877))
{var s__11878 = temp__3698__auto____11877;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__11874)))
{{
var G__11888 = cljs.core.rest.call(null,s__11878);
var G__11889 = seen;
p__11869 = G__11888;
seen = G__11889;
continue;
}
} else
{return cljs.core.cons.call(null,f__11874,step.call(null,cljs.core.rest.call(null,s__11878),cljs.core.conj.call(null,seen,f__11874)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__11882.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__11896 = cljs.core.Vector.fromArray([]);
var s__11897 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__11897)))
{{
var G__11900 = cljs.core.conj.call(null,ret__11896,cljs.core.first.call(null,s__11897));
var G__11901 = cljs.core.next.call(null,s__11897);
ret__11896 = G__11900;
s__11897 = G__11901;
continue;
}
} else
{return cljs.core.seq.call(null,ret__11896);
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
{if(cljs.core.truth_((function (){var or__3548__auto____11907 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11907))
{return or__3548__auto____11907;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__11908 = x.lastIndexOf("/");

if(cljs.core.truth_((i__11908 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__11908 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____11923 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11923))
{return or__3548__auto____11923;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__11925 = x.lastIndexOf("/");

if(cljs.core.truth_((i__11925 > -1)))
{return cljs.core.subs.call(null,x,2,i__11925);
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
var map__11936 = cljs.core.ObjMap.fromObject([],{});
var ks__11937 = cljs.core.seq.call(null,keys);
var vs__11938 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____11941 = ks__11937;

if(cljs.core.truth_(and__3546__auto____11941))
{return vs__11938;
} else
{return and__3546__auto____11941;
}
})()))
{{
var G__11946 = cljs.core.assoc.call(null,map__11936,cljs.core.first.call(null,ks__11937),cljs.core.first.call(null,vs__11938));
var G__11947 = cljs.core.next.call(null,ks__11937);
var G__11948 = cljs.core.next.call(null,vs__11938);
map__11936 = G__11946;
ks__11937 = G__11947;
vs__11938 = G__11948;
continue;
}
} else
{return map__11936;
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
var max_key__11983 = (function (k,x){
return x;
});
var max_key__11985 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__11987 = (function() { 
var G__11992__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11930_SHARP_,p2__11931_SHARP_){
return max_key.call(null,k,p1__11930_SHARP_,p2__11931_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__11992 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11992__delegate.call(this, k, x, y, more);
};
G__11992.cljs$lang$maxFixedArity = 3;
G__11992.cljs$lang$applyTo = (function (arglist__11996){
var k = cljs.core.first(arglist__11996);
var x = cljs.core.first(cljs.core.next(arglist__11996));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11996)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11996)));
return G__11992__delegate.call(this, k, x, y, more);
});
return G__11992;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__11983.call(this,k,x);
case  3 :
return max_key__11985.call(this,k,x,y);
default:
return max_key__11987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__11987.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__12025 = (function (k,x){
return x;
});
var min_key__12026 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__12027 = (function() { 
var G__12033__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__11952_SHARP_,p2__11953_SHARP_){
return min_key.call(null,k,p1__11952_SHARP_,p2__11953_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12033 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12033__delegate.call(this, k, x, y, more);
};
G__12033.cljs$lang$maxFixedArity = 3;
G__12033.cljs$lang$applyTo = (function (arglist__12040){
var k = cljs.core.first(arglist__12040);
var x = cljs.core.first(cljs.core.next(arglist__12040));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12040)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12040)));
return G__12033__delegate.call(this, k, x, y, more);
});
return G__12033;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__12025.call(this,k,x);
case  3 :
return min_key__12026.call(this,k,x,y);
default:
return min_key__12027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__12027.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__12049 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__12050 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12045))
{var s__12046 = temp__3698__auto____12045;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12046),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12046)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__12049.call(this,n,step);
case  3 :
return partition_all__12050.call(this,n,step,coll);
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
var temp__3698__auto____12061 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12061))
{var s__12062 = temp__3698__auto____12061;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12062))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12062),take_while.call(null,pred,cljs.core.rest.call(null,s__12062)));
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
var this__12119 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__12121 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12294 = null;
var G__12294__12295 = (function (rng,f){
var this__12124 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__12294__12296 = (function (rng,f,s){
var this__12128 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__12294 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__12294__12295.call(this,rng,f);
case  3 :
return G__12294__12296.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12294;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__12129 = this;
var comp__12273 = (cljs.core.truth_((this__12129.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__12273.call(null,this__12129.start,this__12129.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__12275 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__12275.end - this__12275.start) / this__12275.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__12277 = this;
return this__12277.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__12278 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__12278.meta,(this__12278.start + this__12278.step),this__12278.end,this__12278.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__12279 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__12280 = this;
return (new cljs.core.Range(meta,this__12280.start,this__12280.end,this__12280.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__12282 = this;
return this__12282.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12305 = null;
var G__12305__12306 = (function (rng,n){
var this__12283 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12283.start + (n * this__12283.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12284 = (this__12283.start > this__12283.end);

if(cljs.core.truth_(and__3546__auto____12284))
{return cljs.core._EQ_.call(null,this__12283.step,0);
} else
{return and__3546__auto____12284;
}
})()))
{return this__12283.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__12305__12307 = (function (rng,n,not_found){
var this__12287 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12287.start + (n * this__12287.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12290 = (this__12287.start > this__12287.end);

if(cljs.core.truth_(and__3546__auto____12290))
{return cljs.core._EQ_.call(null,this__12287.step,0);
} else
{return and__3546__auto____12290;
}
})()))
{return this__12287.start;
} else
{return not_found;
}
}
});
G__12305 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__12305__12306.call(this,rng,n);
case  3 :
return G__12305__12307.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12305;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__12293 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12293.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__12336 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__12337 = (function (end){
return range.call(null,0,end,1);
});
var range__12338 = (function (start,end){
return range.call(null,start,end,1);
});
var range__12339 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__12336.call(this);
case  1 :
return range__12337.call(this,start);
case  2 :
return range__12338.call(this,start,end);
case  3 :
return range__12339.call(this,start,end,step);
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
var temp__3698__auto____12345 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12345))
{var s__12347 = temp__3698__auto____12345;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12347),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12347)));
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
var temp__3698__auto____12351 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12351))
{var s__12405 = temp__3698__auto____12351;

var fst__12406 = cljs.core.first.call(null,s__12405);
var fv__12407 = f.call(null,fst__12406);
var run__12408 = cljs.core.cons.call(null,fst__12406,cljs.core.take_while.call(null,(function (p1__12348_SHARP_){
return cljs.core._EQ_.call(null,fv__12407,f.call(null,p1__12348_SHARP_));
}),cljs.core.next.call(null,s__12405)));

return cljs.core.cons.call(null,run__12408,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12408),s__12405))));
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
var reductions__12428 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12423 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12423))
{var s__12424 = temp__3695__auto____12423;

return reductions.call(null,f,cljs.core.first.call(null,s__12424),cljs.core.rest.call(null,s__12424));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__12429 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12426 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12426))
{var s__12427 = temp__3698__auto____12426;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12427)),cljs.core.rest.call(null,s__12427));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__12428.call(this,f,init);
case  3 :
return reductions__12429.call(this,f,init,coll);
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
var juxt__12455 = (function (f){
return (function() {
var G__12460 = null;
var G__12460__12461 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12460__12462 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12460__12463 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12460__12464 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12460__12465 = (function() { 
var G__12467__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12467 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12467__delegate.call(this, x, y, z, args);
};
G__12467.cljs$lang$maxFixedArity = 3;
G__12467.cljs$lang$applyTo = (function (arglist__12472){
var x = cljs.core.first(arglist__12472);
var y = cljs.core.first(cljs.core.next(arglist__12472));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12472)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12472)));
return G__12467__delegate.call(this, x, y, z, args);
});
return G__12467;
})()
;
G__12460 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12460__12461.call(this);
case  1 :
return G__12460__12462.call(this,x);
case  2 :
return G__12460__12463.call(this,x,y);
case  3 :
return G__12460__12464.call(this,x,y,z);
default:
return G__12460__12465.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12460.cljs$lang$maxFixedArity = 3;
G__12460.cljs$lang$applyTo = G__12460__12465.cljs$lang$applyTo;
return G__12460;
})()
});
var juxt__12456 = (function (f,g){
return (function() {
var G__12493 = null;
var G__12493__12496 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__12493__12497 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__12493__12498 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__12493__12499 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__12493__12500 = (function() { 
var G__12574__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__12574 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12574__delegate.call(this, x, y, z, args);
};
G__12574.cljs$lang$maxFixedArity = 3;
G__12574.cljs$lang$applyTo = (function (arglist__12578){
var x = cljs.core.first(arglist__12578);
var y = cljs.core.first(cljs.core.next(arglist__12578));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12578)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12578)));
return G__12574__delegate.call(this, x, y, z, args);
});
return G__12574;
})()
;
G__12493 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12493__12496.call(this);
case  1 :
return G__12493__12497.call(this,x);
case  2 :
return G__12493__12498.call(this,x,y);
case  3 :
return G__12493__12499.call(this,x,y,z);
default:
return G__12493__12500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12493.cljs$lang$maxFixedArity = 3;
G__12493.cljs$lang$applyTo = G__12493__12500.cljs$lang$applyTo;
return G__12493;
})()
});
var juxt__12457 = (function (f,g,h){
return (function() {
var G__12581 = null;
var G__12581__12582 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__12581__12583 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__12581__12584 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__12581__12585 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__12581__12586 = (function() { 
var G__12612__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__12612 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12612__delegate.call(this, x, y, z, args);
};
G__12612.cljs$lang$maxFixedArity = 3;
G__12612.cljs$lang$applyTo = (function (arglist__12613){
var x = cljs.core.first(arglist__12613);
var y = cljs.core.first(cljs.core.next(arglist__12613));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12613)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12613)));
return G__12612__delegate.call(this, x, y, z, args);
});
return G__12612;
})()
;
G__12581 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12581__12582.call(this);
case  1 :
return G__12581__12583.call(this,x);
case  2 :
return G__12581__12584.call(this,x,y);
case  3 :
return G__12581__12585.call(this,x,y,z);
default:
return G__12581__12586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12581.cljs$lang$maxFixedArity = 3;
G__12581.cljs$lang$applyTo = G__12581__12586.cljs$lang$applyTo;
return G__12581;
})()
});
var juxt__12458 = (function() { 
var G__12614__delegate = function (f,g,h,fs){
var fs__12444 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__12616 = null;
var G__12616__12617 = (function (){
return cljs.core.reduce.call(null,(function (p1__12412_SHARP_,p2__12413_SHARP_){
return cljs.core.conj.call(null,p1__12412_SHARP_,p2__12413_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__12444);
});
var G__12616__12618 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12414_SHARP_,p2__12415_SHARP_){
return cljs.core.conj.call(null,p1__12414_SHARP_,p2__12415_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__12444);
});
var G__12616__12619 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12416_SHARP_,p2__12417_SHARP_){
return cljs.core.conj.call(null,p1__12416_SHARP_,p2__12417_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__12444);
});
var G__12616__12620 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12418_SHARP_,p2__12419_SHARP_){
return cljs.core.conj.call(null,p1__12418_SHARP_,p2__12419_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__12444);
});
var G__12616__12621 = (function() { 
var G__12627__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12420_SHARP_,p2__12421_SHARP_){
return cljs.core.conj.call(null,p1__12420_SHARP_,cljs.core.apply.call(null,p2__12421_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__12444);
};
var G__12627 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12627__delegate.call(this, x, y, z, args);
};
G__12627.cljs$lang$maxFixedArity = 3;
G__12627.cljs$lang$applyTo = (function (arglist__12628){
var x = cljs.core.first(arglist__12628);
var y = cljs.core.first(cljs.core.next(arglist__12628));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12628)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12628)));
return G__12627__delegate.call(this, x, y, z, args);
});
return G__12627;
})()
;
G__12616 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12616__12617.call(this);
case  1 :
return G__12616__12618.call(this,x);
case  2 :
return G__12616__12619.call(this,x,y);
case  3 :
return G__12616__12620.call(this,x,y,z);
default:
return G__12616__12621.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12616.cljs$lang$maxFixedArity = 3;
G__12616.cljs$lang$applyTo = G__12616__12621.cljs$lang$applyTo;
return G__12616;
})()
};
var G__12614 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12614__delegate.call(this, f, g, h, fs);
};
G__12614.cljs$lang$maxFixedArity = 3;
G__12614.cljs$lang$applyTo = (function (arglist__12630){
var f = cljs.core.first(arglist__12630);
var g = cljs.core.first(cljs.core.next(arglist__12630));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12630)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12630)));
return G__12614__delegate.call(this, f, g, h, fs);
});
return G__12614;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__12455.call(this,f);
case  2 :
return juxt__12456.call(this,f,g);
case  3 :
return juxt__12457.call(this,f,g,h);
default:
return juxt__12458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__12458.cljs$lang$applyTo;
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
var dorun__12638 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__12641 = cljs.core.next.call(null,coll);
coll = G__12641;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__12639 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12632 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____12632))
{return (n > 0);
} else
{return and__3546__auto____12632;
}
})()))
{{
var G__12642 = (n - 1);
var G__12643 = cljs.core.next.call(null,coll);
n = G__12642;
coll = G__12643;
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
return dorun__12638.call(this,n);
case  2 :
return dorun__12639.call(this,n,coll);
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
var doall__12647 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__12648 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__12647.call(this,n);
case  2 :
return doall__12648.call(this,n,coll);
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
var matches__12653 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__12653),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__12653),1)))
{return cljs.core.first.call(null,matches__12653);
} else
{return cljs.core.vec.call(null,matches__12653);
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
var matches__12658 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__12658)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__12658),1)))
{return cljs.core.first.call(null,matches__12658);
} else
{return cljs.core.vec.call(null,matches__12658);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__12662 = cljs.core.re_find.call(null,re,s);
var match_idx__12663 = s.search(re);
var match_str__12664 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__12662))?cljs.core.first.call(null,match_data__12662):match_data__12662);
var post_match__12665 = cljs.core.subs.call(null,s,(match_idx__12663 + cljs.core.count.call(null,match_str__12664)));

if(cljs.core.truth_(match_data__12662))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__12662,re_seq.call(null,re,post_match__12665));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__12716_SHARP_){
return print_one.call(null,p1__12716_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____12739 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____12739))
{var and__3546__auto____12749 = (function (){var x__445__auto____12743 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____12745 = x__445__auto____12743;

if(cljs.core.truth_(and__3546__auto____12745))
{var and__3546__auto____12747 = x__445__auto____12743.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____12747))
{return cljs.core.not.call(null,x__445__auto____12743.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____12747;
}
} else
{return and__3546__auto____12745;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____12743);
}
})();

if(cljs.core.truth_(and__3546__auto____12749))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____12749;
}
} else
{return and__3546__auto____12739;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____12751 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____12752 = x__445__auto____12751;

if(cljs.core.truth_(and__3546__auto____12752))
{var and__3546__auto____12754 = x__445__auto____12751.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____12754))
{return cljs.core.not.call(null,x__445__auto____12751.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____12754;
}
} else
{return and__3546__auto____12752;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____12751);
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
var first_obj__12761 = cljs.core.first.call(null,objs);
var sb__12762 = (new goog.string.StringBuffer());

var G__12763__12764 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__12763__12764))
{var obj__12765 = cljs.core.first.call(null,G__12763__12764);
var G__12763__12766 = G__12763__12764;

while(true){
if(cljs.core.truth_((obj__12765 === first_obj__12761)))
{} else
{sb__12762.append(" ");
}
var G__12769__12771 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12765,opts));

if(cljs.core.truth_(G__12769__12771))
{var string__12772 = cljs.core.first.call(null,G__12769__12771);
var G__12769__12773 = G__12769__12771;

while(true){
sb__12762.append(string__12772);
var temp__3698__auto____12774 = cljs.core.next.call(null,G__12769__12773);

if(cljs.core.truth_(temp__3698__auto____12774))
{var G__12769__12776 = temp__3698__auto____12774;

{
var G__12784 = cljs.core.first.call(null,G__12769__12776);
var G__12785 = G__12769__12776;
string__12772 = G__12784;
G__12769__12773 = G__12785;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____12779 = cljs.core.next.call(null,G__12763__12766);

if(cljs.core.truth_(temp__3698__auto____12779))
{var G__12763__12780 = temp__3698__auto____12779;

{
var G__12786 = cljs.core.first.call(null,G__12763__12780);
var G__12787 = G__12763__12780;
obj__12765 = G__12786;
G__12763__12766 = G__12787;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__12762);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__12788 = cljs.core.first.call(null,objs);

var G__12789__12790 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__12789__12790))
{var obj__12791 = cljs.core.first.call(null,G__12789__12790);
var G__12789__12792 = G__12789__12790;

while(true){
if(cljs.core.truth_((obj__12791 === first_obj__12788)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__12794__12797 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__12791,opts));

if(cljs.core.truth_(G__12794__12797))
{var string__12799 = cljs.core.first.call(null,G__12794__12797);
var G__12794__12801 = G__12794__12797;

while(true){
cljs.core.string_print.call(null,string__12799);
var temp__3698__auto____12805 = cljs.core.next.call(null,G__12794__12801);

if(cljs.core.truth_(temp__3698__auto____12805))
{var G__12794__12808 = temp__3698__auto____12805;

{
var G__12829 = cljs.core.first.call(null,G__12794__12808);
var G__12830 = G__12794__12808;
string__12799 = G__12829;
G__12794__12801 = G__12830;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____12815 = cljs.core.next.call(null,G__12789__12792);

if(cljs.core.truth_(temp__3698__auto____12815))
{var G__12789__12819 = temp__3698__auto____12815;

{
var G__12832 = cljs.core.first.call(null,G__12789__12819);
var G__12833 = G__12789__12819;
obj__12791 = G__12832;
G__12789__12792 = G__12833;
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
pr_str.cljs$lang$applyTo = (function (arglist__12839){
var objs = cljs.core.seq( arglist__12839 );;
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
pr.cljs$lang$applyTo = (function (arglist__12846){
var objs = cljs.core.seq( arglist__12846 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__12850){
var objs = cljs.core.seq( arglist__12850 );;
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
println.cljs$lang$applyTo = (function (arglist__12853){
var objs = cljs.core.seq( arglist__12853 );;
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
prn.cljs$lang$applyTo = (function (arglist__12857){
var objs = cljs.core.seq( arglist__12857 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__12915 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__12915,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____12931 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____12931))
{var nspc__12932 = temp__3698__auto____12931;

return cljs.core.str.call(null,nspc__12932,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____12933 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____12933))
{var nspc__12934 = temp__3698__auto____12933;

return cljs.core.str.call(null,nspc__12934,"/");
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
var pr_pair__12961 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__12961,"{",", ","}",opts,coll);
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
var this__13026 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__13029 = this;
var G__13031__13032 = cljs.core.seq.call(null,this__13029.watches);

if(cljs.core.truth_(G__13031__13032))
{var G__13034__13038 = cljs.core.first.call(null,G__13031__13032);
var vec__13036__13039 = G__13034__13038;
var key__13040 = cljs.core.nth.call(null,vec__13036__13039,0,null);
var f__13041 = cljs.core.nth.call(null,vec__13036__13039,1,null);
var G__13031__13043 = G__13031__13032;

var G__13034__13044 = G__13034__13038;
var G__13031__13045 = G__13031__13043;

while(true){
var vec__13046__13047 = G__13034__13044;
var key__13048 = cljs.core.nth.call(null,vec__13046__13047,0,null);
var f__13049 = cljs.core.nth.call(null,vec__13046__13047,1,null);
var G__13031__13050 = G__13031__13045;

f__13049.call(null,key__13048,this$,oldval,newval);
var temp__3698__auto____13051 = cljs.core.next.call(null,G__13031__13050);

if(cljs.core.truth_(temp__3698__auto____13051))
{var G__13031__13052 = temp__3698__auto____13051;

{
var G__13082 = cljs.core.first.call(null,G__13031__13052);
var G__13083 = G__13031__13052;
G__13034__13044 = G__13082;
G__13031__13045 = G__13083;
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
var this__13055 = this;
return this$.watches = cljs.core.assoc.call(null,this__13055.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__13056 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13056.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__13060 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__13060.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__13063 = this;
return this__13063.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13064 = this;
return this__13064.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__13065 = this;
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
var atom__13098 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__13099 = (function() { 
var G__13101__delegate = function (x,p__13091){
var map__13092__13093 = p__13091;
var map__13092__13094 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13092__13093))?cljs.core.apply.call(null,cljs.core.hash_map,map__13092__13093):map__13092__13093);
var validator__13096 = cljs.core.get.call(null,map__13092__13094,"﷐'validator");
var meta__13097 = cljs.core.get.call(null,map__13092__13094,"﷐'meta");

return (new cljs.core.Atom(x,meta__13097,validator__13096,null));
};
var G__13101 = function (x,var_args){
var p__13091 = null;
if (goog.isDef(var_args)) {
  p__13091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13101__delegate.call(this, x, p__13091);
};
G__13101.cljs$lang$maxFixedArity = 1;
G__13101.cljs$lang$applyTo = (function (arglist__13161){
var x = cljs.core.first(arglist__13161);
var p__13091 = cljs.core.rest(arglist__13161);
return G__13101__delegate.call(this, x, p__13091);
});
return G__13101;
})()
;
atom = function(x,var_args){
var p__13091 = var_args;
switch(arguments.length){
case  1 :
return atom__13098.call(this,x);
default:
return atom__13099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__13099.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____13163 = a.validator;

if(cljs.core.truth_(temp__3698__auto____13163))
{var validate__13164 = temp__3698__auto____13163;

if(cljs.core.truth_(validate__13164.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__13168 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13168,new_value);
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
var swap_BANG___13190 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___13191 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___13192 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___13193 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___13194 = (function() { 
var G__13196__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13196 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13196__delegate.call(this, a, f, x, y, z, more);
};
G__13196.cljs$lang$maxFixedArity = 5;
G__13196.cljs$lang$applyTo = (function (arglist__13197){
var a = cljs.core.first(arglist__13197);
var f = cljs.core.first(cljs.core.next(arglist__13197));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13197)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13197))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13197)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13197)))));
return G__13196__delegate.call(this, a, f, x, y, z, more);
});
return G__13196;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___13190.call(this,a,f);
case  3 :
return swap_BANG___13191.call(this,a,f,x);
case  4 :
return swap_BANG___13192.call(this,a,f,x,y);
case  5 :
return swap_BANG___13193.call(this,a,f,x,y,z);
default:
return swap_BANG___13194.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___13194.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13298){
var iref = cljs.core.first(arglist__13298);
var f = cljs.core.first(cljs.core.next(arglist__13298));
var args = cljs.core.rest(cljs.core.next(arglist__13298));
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
var gensym__13300 = (function (){
return gensym.call(null,"G__");
});
var gensym__13301 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__13300.call(this);
case  1 :
return gensym__13301.call(this,prefix_string);
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
var this__13303 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__13303.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13307 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__13307.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__13307.state,this__13307.f);
}
return cljs.core.deref.call(null,this__13307.state);
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
delay.cljs$lang$applyTo = (function (arglist__13312){
var body = cljs.core.seq( arglist__13312 );;
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
var map__13324__13325 = options;
var map__13324__13326 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13324__13325))?cljs.core.apply.call(null,cljs.core.hash_map,map__13324__13325):map__13324__13325);
var keywordize_keys__13327 = cljs.core.get.call(null,map__13324__13326,"﷐'keywordize-keys");
var keyfn__13328 = (cljs.core.truth_(keywordize_keys__13327)?cljs.core.keyword:cljs.core.str);
var f__13376 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____13374 = (function iter__13368(s__13369){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13369__13372 = s__13369;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13369__13372)))
{var k__13373 = cljs.core.first.call(null,s__13369__13372);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__13328.call(null,k__13373),thisfn.call(null,(x[k__13373]))]),iter__13368.call(null,cljs.core.rest.call(null,s__13369__13372)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____13374.call(null,cljs.core.js_keys.call(null,x));
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

return f__13376.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13378){
var x = cljs.core.first(arglist__13378);
var options = cljs.core.rest(arglist__13378);
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
var mem__13381 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__13390__delegate = function (args){
var temp__3695__auto____13383 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__13381),args);

if(cljs.core.truth_(temp__3695__auto____13383))
{var v__13384 = temp__3695__auto____13383;

return v__13384;
} else
{var ret__13387 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__13381,cljs.core.assoc,args,ret__13387);
return ret__13387;
}
};
var G__13390 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13390__delegate.call(this, args);
};
G__13390.cljs$lang$maxFixedArity = 0;
G__13390.cljs$lang$applyTo = (function (arglist__13393){
var args = cljs.core.seq( arglist__13393 );;
return G__13390__delegate.call(this, args);
});
return G__13390;
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
var trampoline__13398 = (function (f){
while(true){
var ret__13395 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__13395)))
{{
var G__13401 = ret__13395;
f = G__13401;
continue;
}
} else
{return ret__13395;
}
break;
}
});
var trampoline__13399 = (function() { 
var G__13403__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13403 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13403__delegate.call(this, f, args);
};
G__13403.cljs$lang$maxFixedArity = 1;
G__13403.cljs$lang$applyTo = (function (arglist__13404){
var f = cljs.core.first(arglist__13404);
var args = cljs.core.rest(arglist__13404);
return G__13403__delegate.call(this, f, args);
});
return G__13403;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__13398.call(this,f);
default:
return trampoline__13399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__13399.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__13419 = (function (){
return rand.call(null,1);
});
var rand__13420 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__13419.call(this);
case  1 :
return rand__13420.call(this,n);
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
var k__13422 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__13422,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__13422,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___13446 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___13447 = (function (h,child,parent){
var or__3548__auto____13432 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____13432))
{return or__3548__auto____13432;
} else
{var or__3548__auto____13434 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____13434))
{return or__3548__auto____13434;
} else
{var and__3546__auto____13435 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____13435))
{var and__3546__auto____13436 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____13436))
{var and__3546__auto____13439 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____13439))
{var ret__13440 = true;
var i__13441 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____13442 = cljs.core.not.call(null,ret__13440);

if(cljs.core.truth_(or__3548__auto____13442))
{return or__3548__auto____13442;
} else
{return cljs.core._EQ_.call(null,i__13441,cljs.core.count.call(null,parent));
}
})()))
{return ret__13440;
} else
{{
var G__13452 = isa_QMARK_.call(null,h,child.call(null,i__13441),parent.call(null,i__13441));
var G__13453 = (i__13441 + 1);
ret__13440 = G__13452;
i__13441 = G__13453;
continue;
}
}
break;
}
} else
{return and__3546__auto____13439;
}
} else
{return and__3546__auto____13436;
}
} else
{return and__3546__auto____13435;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___13446.call(this,h,child);
case  3 :
return isa_QMARK___13447.call(this,h,child,parent);
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
var parents__13460 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__13462 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__13460.call(this,h);
case  2 :
return parents__13462.call(this,h,tag);
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
var ancestors__13466 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__13467 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__13466.call(this,h);
case  2 :
return ancestors__13467.call(this,h,tag);
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
var descendants__13469 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__13470 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__13469.call(this,h);
case  2 :
return descendants__13470.call(this,h,tag);
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
var derive__13481 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__13482 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__13475 = "﷐'parents".call(null,h);
var td__13476 = "﷐'descendants".call(null,h);
var ta__13478 = "﷐'ancestors".call(null,h);
var tf__13479 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____13480 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__13475.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__13478.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__13478.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__13475,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__13479.call(null,"﷐'ancestors".call(null,h),tag,td__13476,parent,ta__13478),"﷐'descendants":tf__13479.call(null,"﷐'descendants".call(null,h),parent,ta__13478,tag,td__13476)});
})());

if(cljs.core.truth_(or__3548__auto____13480))
{return or__3548__auto____13480;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__13481.call(this,h,tag);
case  3 :
return derive__13482.call(this,h,tag,parent);
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
var underive__13513 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__13514 = (function (h,tag,parent){
var parentMap__13499 = "﷐'parents".call(null,h);
var childsParents__13501 = (cljs.core.truth_(parentMap__13499.call(null,tag))?cljs.core.disj.call(null,parentMap__13499.call(null,tag),parent):cljs.core.set([]));
var newParents__13502 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__13501))?cljs.core.assoc.call(null,parentMap__13499,tag,childsParents__13501):cljs.core.dissoc.call(null,parentMap__13499,tag));
var deriv_seq__13505 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__13472_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__13472_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__13472_SHARP_),cljs.core.second.call(null,p1__13472_SHARP_)));
}),cljs.core.seq.call(null,newParents__13502)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__13499.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__13473_SHARP_,p2__13474_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__13473_SHARP_,p2__13474_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__13505));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__13513.call(this,h,tag);
case  3 :
return underive__13514.call(this,h,tag,parent);
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
var xprefs__13525 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____13529 = (cljs.core.truth_((function (){var and__3546__auto____13527 = xprefs__13525;

if(cljs.core.truth_(and__3546__auto____13527))
{return xprefs__13525.call(null,y);
} else
{return and__3546__auto____13527;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____13529))
{return or__3548__auto____13529;
} else
{var or__3548__auto____13531 = (function (){var ps__13530 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__13530) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__13530),prefer_table)))
{} else
{}
{
var G__13534 = cljs.core.rest.call(null,ps__13530);
ps__13530 = G__13534;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____13531))
{return or__3548__auto____13531;
} else
{var or__3548__auto____13533 = (function (){var ps__13532 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__13532) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__13532),y,prefer_table)))
{} else
{}
{
var G__13537 = cljs.core.rest.call(null,ps__13532);
ps__13532 = G__13537;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____13533))
{return or__3548__auto____13533;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____13538 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____13538))
{return or__3548__auto____13538;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__13547 = cljs.core.reduce.call(null,(function (be,p__13539){
var vec__13540__13541 = p__13539;
var k__13542 = cljs.core.nth.call(null,vec__13540__13541,0,null);
var ___13543 = cljs.core.nth.call(null,vec__13540__13541,1,null);
var e__13544 = vec__13540__13541;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__13542)))
{var be2__13546 = (cljs.core.truth_((function (){var or__3548__auto____13545 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____13545))
{return or__3548__auto____13545;
} else
{return cljs.core.dominates.call(null,k__13542,cljs.core.first.call(null,be),prefer_table);
}
})())?e__13544:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__13546),k__13542,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__13542," and ",cljs.core.first.call(null,be2__13546),", and neither is preferred")));
}
return be2__13546;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__13547))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__13547));
return cljs.core.second.call(null,best_entry__13547);
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
if(cljs.core.truth_((function (){var and__3546__auto____13549 = mf;

if(cljs.core.truth_(and__3546__auto____13549))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____13549;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____13550 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13550))
{return or__3548__auto____13550;
} else
{var or__3548__auto____13551 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____13551))
{return or__3548__auto____13551;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____13552 = mf;

if(cljs.core.truth_(and__3546__auto____13552))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____13552;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____13555 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13555))
{return or__3548__auto____13555;
} else
{var or__3548__auto____13556 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____13556))
{return or__3548__auto____13556;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____13558 = mf;

if(cljs.core.truth_(and__3546__auto____13558))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____13558;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13561 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13561))
{return or__3548__auto____13561;
} else
{var or__3548__auto____13562 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____13562))
{return or__3548__auto____13562;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____13563 = mf;

if(cljs.core.truth_(and__3546__auto____13563))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____13563;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____13564 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13564))
{return or__3548__auto____13564;
} else
{var or__3548__auto____13568 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____13568))
{return or__3548__auto____13568;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____13570 = mf;

if(cljs.core.truth_(and__3546__auto____13570))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____13570;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____13571 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13571))
{return or__3548__auto____13571;
} else
{var or__3548__auto____13572 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____13572))
{return or__3548__auto____13572;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13573 = mf;

if(cljs.core.truth_(and__3546__auto____13573))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____13573;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____13574 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13574))
{return or__3548__auto____13574;
} else
{var or__3548__auto____13575 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____13575))
{return or__3548__auto____13575;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____13576 = mf;

if(cljs.core.truth_(and__3546__auto____13576))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____13576;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____13577 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13577))
{return or__3548__auto____13577;
} else
{var or__3548__auto____13579 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____13579))
{return or__3548__auto____13579;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____13611 = mf;

if(cljs.core.truth_(and__3546__auto____13611))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____13611;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____13612 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____13612))
{return or__3548__auto____13612;
} else
{var or__3548__auto____13613 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____13613))
{return or__3548__auto____13613;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__13660 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__13661 = cljs.core._get_method.call(null,mf,dispatch_val__13660);

if(cljs.core.truth_(target_fn__13661))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__13660)));
}
return cljs.core.apply.call(null,target_fn__13661,args);
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
var this__13662 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__13663 = this;
cljs.core.swap_BANG_.call(null,this__13663.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13663.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13663.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__13663.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__13664 = this;
cljs.core.swap_BANG_.call(null,this__13664.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__13664.method_cache,this__13664.method_table,this__13664.cached_hierarchy,this__13664.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__13665 = this;
cljs.core.swap_BANG_.call(null,this__13665.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__13665.method_cache,this__13665.method_table,this__13665.cached_hierarchy,this__13665.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__13666 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__13666.cached_hierarchy),cljs.core.deref.call(null,this__13666.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__13666.method_cache,this__13666.method_table,this__13666.cached_hierarchy,this__13666.hierarchy);
}
var temp__3695__auto____13670 = cljs.core.deref.call(null,this__13666.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____13670))
{var target_fn__13671 = temp__3695__auto____13670;

return target_fn__13671;
} else
{var temp__3695__auto____13672 = cljs.core.find_and_cache_best_method.call(null,this__13666.name,dispatch_val,this__13666.hierarchy,this__13666.method_table,this__13666.prefer_table,this__13666.method_cache,this__13666.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____13672))
{var target_fn__13673 = temp__3695__auto____13672;

return target_fn__13673;
} else
{return cljs.core.deref.call(null,this__13666.method_table).call(null,this__13666.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__13674 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__13674.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__13674.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__13674.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__13674.method_cache,this__13674.method_table,this__13674.cached_hierarchy,this__13674.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__13678 = this;
return cljs.core.deref.call(null,this__13678.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__13679 = this;
return cljs.core.deref.call(null,this__13679.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__13693 = this;
return cljs.core.do_dispatch.call(null,mf,this__13693.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__13794__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__13794 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13794__delegate.call(this, _, args);
};
G__13794.cljs$lang$maxFixedArity = 1;
G__13794.cljs$lang$applyTo = (function (arglist__13795){
var _ = cljs.core.first(arglist__13795);
var args = cljs.core.rest(arglist__13795);
return G__13794__delegate.call(this, _, args);
});
return G__13794;
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
