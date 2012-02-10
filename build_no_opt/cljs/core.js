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
var or__3548__auto____6475 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6475))
{return or__3548__auto____6475;
} else
{var or__3548__auto____6479 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6479))
{return or__3548__auto____6479;
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
var _invoke__6806 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6614 = this$;

if(cljs.core.truth_(and__3546__auto____6614))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6614;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6616 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6616))
{return or__3548__auto____6616;
} else
{var or__3548__auto____6617 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6617))
{return or__3548__auto____6617;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6818 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6619 = this$;

if(cljs.core.truth_(and__3546__auto____6619))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6619;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6621 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6621))
{return or__3548__auto____6621;
} else
{var or__3548__auto____6622 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6622))
{return or__3548__auto____6622;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6819 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6624 = this$;

if(cljs.core.truth_(and__3546__auto____6624))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6624;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6627 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6627))
{return or__3548__auto____6627;
} else
{var or__3548__auto____6628 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6628))
{return or__3548__auto____6628;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6820 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6630 = this$;

if(cljs.core.truth_(and__3546__auto____6630))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6630;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6631 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6631))
{return or__3548__auto____6631;
} else
{var or__3548__auto____6632 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6632))
{return or__3548__auto____6632;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6821 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6634 = this$;

if(cljs.core.truth_(and__3546__auto____6634))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6634;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6636 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6636))
{return or__3548__auto____6636;
} else
{var or__3548__auto____6637 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6637))
{return or__3548__auto____6637;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6822 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6638 = this$;

if(cljs.core.truth_(and__3546__auto____6638))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6638;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6639 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6639))
{return or__3548__auto____6639;
} else
{var or__3548__auto____6641 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6641))
{return or__3548__auto____6641;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6824 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6663 = this$;

if(cljs.core.truth_(and__3546__auto____6663))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6663;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6664 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6664))
{return or__3548__auto____6664;
} else
{var or__3548__auto____6665 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6665))
{return or__3548__auto____6665;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6825 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6666 = this$;

if(cljs.core.truth_(and__3546__auto____6666))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6666;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6667 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6667))
{return or__3548__auto____6667;
} else
{var or__3548__auto____6668 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6668))
{return or__3548__auto____6668;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6826 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6669 = this$;

if(cljs.core.truth_(and__3546__auto____6669))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6669;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6670 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6670))
{return or__3548__auto____6670;
} else
{var or__3548__auto____6671 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6671))
{return or__3548__auto____6671;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6827 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6672 = this$;

if(cljs.core.truth_(and__3546__auto____6672))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6672;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6673 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6673))
{return or__3548__auto____6673;
} else
{var or__3548__auto____6674 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6674))
{return or__3548__auto____6674;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6828 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6675 = this$;

if(cljs.core.truth_(and__3546__auto____6675))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6675;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6676 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6676))
{return or__3548__auto____6676;
} else
{var or__3548__auto____6677 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6677))
{return or__3548__auto____6677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6829 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6678 = this$;

if(cljs.core.truth_(and__3546__auto____6678))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6678;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6679 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6679))
{return or__3548__auto____6679;
} else
{var or__3548__auto____6680 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6680))
{return or__3548__auto____6680;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6830 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6681 = this$;

if(cljs.core.truth_(and__3546__auto____6681))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6681;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6682 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6682))
{return or__3548__auto____6682;
} else
{var or__3548__auto____6683 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6683))
{return or__3548__auto____6683;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6831 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6684 = this$;

if(cljs.core.truth_(and__3546__auto____6684))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6684;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6685 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6685))
{return or__3548__auto____6685;
} else
{var or__3548__auto____6686 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6686))
{return or__3548__auto____6686;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6832 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6687 = this$;

if(cljs.core.truth_(and__3546__auto____6687))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6687;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6688 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6688))
{return or__3548__auto____6688;
} else
{var or__3548__auto____6689 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6689))
{return or__3548__auto____6689;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6833 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6690 = this$;

if(cljs.core.truth_(and__3546__auto____6690))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6690;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6691 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6691))
{return or__3548__auto____6691;
} else
{var or__3548__auto____6692 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6692))
{return or__3548__auto____6692;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6834 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6693 = this$;

if(cljs.core.truth_(and__3546__auto____6693))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6693;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6694 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6694))
{return or__3548__auto____6694;
} else
{var or__3548__auto____6695 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6695))
{return or__3548__auto____6695;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6835 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6696 = this$;

if(cljs.core.truth_(and__3546__auto____6696))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6696;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____6698 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6698))
{return or__3548__auto____6698;
} else
{var or__3548__auto____6702 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6702))
{return or__3548__auto____6702;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6837 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6704 = this$;

if(cljs.core.truth_(and__3546__auto____6704))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6704;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____6796 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6796))
{return or__3548__auto____6796;
} else
{var or__3548__auto____6797 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6797))
{return or__3548__auto____6797;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6838 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6798 = this$;

if(cljs.core.truth_(and__3546__auto____6798))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6798;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____6799 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6799))
{return or__3548__auto____6799;
} else
{var or__3548__auto____6800 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6800))
{return or__3548__auto____6800;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6839 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6801 = this$;

if(cljs.core.truth_(and__3546__auto____6801))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6801;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6802 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6802))
{return or__3548__auto____6802;
} else
{var or__3548__auto____6803 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6803))
{return or__3548__auto____6803;
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
return _invoke__6806.call(this,this$);
case  2 :
return _invoke__6818.call(this,this$,a);
case  3 :
return _invoke__6819.call(this,this$,a,b);
case  4 :
return _invoke__6820.call(this,this$,a,b,c);
case  5 :
return _invoke__6821.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6822.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6824.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6825.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6826.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6827.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6828.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6829.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6830.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6831.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6832.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6833.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6834.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6835.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6837.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6838.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6839.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6927 = coll;

if(cljs.core.truth_(and__3546__auto____6927))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6927;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6928 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6928))
{return or__3548__auto____6928;
} else
{var or__3548__auto____6930 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6930))
{return or__3548__auto____6930;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6934 = coll;

if(cljs.core.truth_(and__3546__auto____6934))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6934;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6935 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6935))
{return or__3548__auto____6935;
} else
{var or__3548__auto____6936 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6936))
{return or__3548__auto____6936;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6941 = coll;

if(cljs.core.truth_(and__3546__auto____6941))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6941;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6942 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6942))
{return or__3548__auto____6942;
} else
{var or__3548__auto____6944 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6944))
{return or__3548__auto____6944;
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
var _nth__7008 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6949 = coll;

if(cljs.core.truth_(and__3546__auto____6949))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6949;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6950 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6950))
{return or__3548__auto____6950;
} else
{var or__3548__auto____6952 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6952))
{return or__3548__auto____6952;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7009 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6954 = coll;

if(cljs.core.truth_(and__3546__auto____6954))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6954;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7005 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7005))
{return or__3548__auto____7005;
} else
{var or__3548__auto____7007 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7007))
{return or__3548__auto____7007;
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
return _nth__7008.call(this,coll,n);
case  3 :
return _nth__7009.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7018 = coll;

if(cljs.core.truth_(and__3546__auto____7018))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7018;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7020 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7020))
{return or__3548__auto____7020;
} else
{var or__3548__auto____7021 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7021))
{return or__3548__auto____7021;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7022 = coll;

if(cljs.core.truth_(and__3546__auto____7022))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7022;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7023 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7023))
{return or__3548__auto____7023;
} else
{var or__3548__auto____7024 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7024))
{return or__3548__auto____7024;
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
var _lookup__7041 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7032 = o;

if(cljs.core.truth_(and__3546__auto____7032))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7032;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7035 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7035))
{return or__3548__auto____7035;
} else
{var or__3548__auto____7036 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7036))
{return or__3548__auto____7036;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7042 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7037 = o;

if(cljs.core.truth_(and__3546__auto____7037))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7037;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7038 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7038))
{return or__3548__auto____7038;
} else
{var or__3548__auto____7039 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7039))
{return or__3548__auto____7039;
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
return _lookup__7041.call(this,o,k);
case  3 :
return _lookup__7042.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7048 = coll;

if(cljs.core.truth_(and__3546__auto____7048))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7048;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7050 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7050))
{return or__3548__auto____7050;
} else
{var or__3548__auto____7051 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7051))
{return or__3548__auto____7051;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7054 = coll;

if(cljs.core.truth_(and__3546__auto____7054))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7054;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7139 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7139))
{return or__3548__auto____7139;
} else
{var or__3548__auto____7140 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7140))
{return or__3548__auto____7140;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7144 = coll;

if(cljs.core.truth_(and__3546__auto____7144))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7144;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7145 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7145))
{return or__3548__auto____7145;
} else
{var or__3548__auto____7146 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7146))
{return or__3548__auto____7146;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7161 = coll;

if(cljs.core.truth_(and__3546__auto____7161))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7161;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7163 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7163))
{return or__3548__auto____7163;
} else
{var or__3548__auto____7164 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7164))
{return or__3548__auto____7164;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7181 = coll;

if(cljs.core.truth_(and__3546__auto____7181))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7181;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7183 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7183))
{return or__3548__auto____7183;
} else
{var or__3548__auto____7185 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7185))
{return or__3548__auto____7185;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7186 = coll;

if(cljs.core.truth_(and__3546__auto____7186))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7186;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7197 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7197))
{return or__3548__auto____7197;
} else
{var or__3548__auto____7199 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7199))
{return or__3548__auto____7199;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7207 = coll;

if(cljs.core.truth_(and__3546__auto____7207))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7207;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7208 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7208))
{return or__3548__auto____7208;
} else
{var or__3548__auto____7209 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7209))
{return or__3548__auto____7209;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7219 = o;

if(cljs.core.truth_(and__3546__auto____7219))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7219;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7223 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7223))
{return or__3548__auto____7223;
} else
{var or__3548__auto____7224 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7224))
{return or__3548__auto____7224;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7231 = o;

if(cljs.core.truth_(and__3546__auto____7231))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7231;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7232 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7232))
{return or__3548__auto____7232;
} else
{var or__3548__auto____7233 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7233))
{return or__3548__auto____7233;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7238 = o;

if(cljs.core.truth_(and__3546__auto____7238))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7238;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7239 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7239))
{return or__3548__auto____7239;
} else
{var or__3548__auto____7240 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7240))
{return or__3548__auto____7240;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7241 = o;

if(cljs.core.truth_(and__3546__auto____7241))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7241;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7242 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7242))
{return or__3548__auto____7242;
} else
{var or__3548__auto____7243 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7243))
{return or__3548__auto____7243;
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
var _reduce__7259 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7245 = coll;

if(cljs.core.truth_(and__3546__auto____7245))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7245;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7250 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7250))
{return or__3548__auto____7250;
} else
{var or__3548__auto____7251 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7251))
{return or__3548__auto____7251;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7260 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7252 = coll;

if(cljs.core.truth_(and__3546__auto____7252))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7252;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7257 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{var or__3548__auto____7258 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
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
return _reduce__7259.call(this,coll,f);
case  3 :
return _reduce__7260.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7266 = o;

if(cljs.core.truth_(and__3546__auto____7266))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7266;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7267 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{var or__3548__auto____7268 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7268))
{return or__3548__auto____7268;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7269 = o;

if(cljs.core.truth_(and__3546__auto____7269))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7269;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7270 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7270))
{return or__3548__auto____7270;
} else
{var or__3548__auto____7271 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7271))
{return or__3548__auto____7271;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7272 = o;

if(cljs.core.truth_(and__3546__auto____7272))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7272;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7273 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
} else
{var or__3548__auto____7274 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7274))
{return or__3548__auto____7274;
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
if(cljs.core.truth_((function (){var and__3546__auto____7279 = o;

if(cljs.core.truth_(and__3546__auto____7279))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7279;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7284 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7284))
{return or__3548__auto____7284;
} else
{var or__3548__auto____7285 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7302 = d;

if(cljs.core.truth_(and__3546__auto____7302))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7302;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7307 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
} else
{var or__3548__auto____7308 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7308))
{return or__3548__auto____7308;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7319 = this$;

if(cljs.core.truth_(and__3546__auto____7319))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7319;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7320 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7320))
{return or__3548__auto____7320;
} else
{var or__3548__auto____7327 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7336 = this$;

if(cljs.core.truth_(and__3546__auto____7336))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7336;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7338 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{var or__3548__auto____7340 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7344 = this$;

if(cljs.core.truth_(and__3546__auto____7344))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7344;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7346 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{var or__3548__auto____7349 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7349))
{return or__3548__auto____7349;
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
var G__7448 = null;
var G__7448__7449 = (function (o,k){
return null;
});
var G__7448__7450 = (function (o,k,not_found){
return not_found;
});
G__7448 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7448__7449.call(this,o,k);
case  3 :
return G__7448__7450.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7448;
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
var G__7458 = null;
var G__7458__7459 = (function (_,f){
return f.call(null);
});
var G__7458__7460 = (function (_,f,start){
return start;
});
G__7458 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7458__7459.call(this,_,f);
case  3 :
return G__7458__7460.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7458;
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
var G__7501 = null;
var G__7501__7502 = (function (_,n){
return null;
});
var G__7501__7503 = (function (_,n,not_found){
return not_found;
});
G__7501 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7501__7502.call(this,_,n);
case  3 :
return G__7501__7503.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7501;
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
var ci_reduce__7529 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7513 = cljs.core._nth.call(null,cicoll,0);
var n__7514 = 1;

while(true){
if(cljs.core.truth_((n__7514 < cljs.core._count.call(null,cicoll))))
{{
var G__7573 = f.call(null,val__7513,cljs.core._nth.call(null,cicoll,n__7514));
var G__7574 = (n__7514 + 1);
val__7513 = G__7573;
n__7514 = G__7574;
continue;
}
} else
{return val__7513;
}
break;
}
}
});
var ci_reduce__7530 = (function (cicoll,f,val){
var val__7519 = val;
var n__7520 = 0;

while(true){
if(cljs.core.truth_((n__7520 < cljs.core._count.call(null,cicoll))))
{{
var G__7579 = f.call(null,val__7519,cljs.core._nth.call(null,cicoll,n__7520));
var G__7580 = (n__7520 + 1);
val__7519 = G__7579;
n__7520 = G__7580;
continue;
}
} else
{return val__7519;
}
break;
}
});
var ci_reduce__7531 = (function (cicoll,f,val,idx){
var val__7527 = val;
var n__7528 = idx;

while(true){
if(cljs.core.truth_((n__7528 < cljs.core._count.call(null,cicoll))))
{{
var G__7586 = f.call(null,val__7527,cljs.core._nth.call(null,cicoll,n__7528));
var G__7587 = (n__7528 + 1);
val__7527 = G__7586;
n__7528 = G__7587;
continue;
}
} else
{return val__7527;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7529.call(this,cicoll,f);
case  3 :
return ci_reduce__7530.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7531.call(this,cicoll,f,val,idx);
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
var this__7602 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7718 = null;
var G__7718__7720 = (function (_,f){
var this__7603 = this;
return cljs.core.ci_reduce.call(null,this__7603.a,f,(this__7603.a[this__7603.i]),(this__7603.i + 1));
});
var G__7718__7722 = (function (_,f,start){
var this__7605 = this;
return cljs.core.ci_reduce.call(null,this__7605.a,f,start,this__7605.i);
});
G__7718 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7718__7720.call(this,_,f);
case  3 :
return G__7718__7722.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7718;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7606 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7607 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7729 = null;
var G__7729__7731 = (function (coll,n){
var this__7613 = this;
var i__7617 = (n + this__7613.i);

if(cljs.core.truth_((i__7617 < this__7613.a.length)))
{return (this__7613.a[i__7617]);
} else
{return null;
}
});
var G__7729__7732 = (function (coll,n,not_found){
var this__7618 = this;
var i__7620 = (n + this__7618.i);

if(cljs.core.truth_((i__7620 < this__7618.a.length)))
{return (this__7618.a[i__7620]);
} else
{return not_found;
}
});
G__7729 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7729__7731.call(this,coll,n);
case  3 :
return G__7729__7732.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7729;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7621 = this;
return (this__7621.a.length - this__7621.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7622 = this;
return (this__7622.a[this__7622.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7623 = this;
if(cljs.core.truth_(((this__7623.i + 1) < this__7623.a.length)))
{return (new cljs.core.IndexedSeq(this__7623.a,(this__7623.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7624 = this;
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
var G__7760 = null;
var G__7760__7762 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7760__7763 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7760 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7760__7762.call(this,array,f);
case  3 :
return G__7760__7763.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7760;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7765 = null;
var G__7765__7766 = (function (array,k){
return (array[k]);
});
var G__7765__7767 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7765 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7765__7766.call(this,array,k);
case  3 :
return G__7765__7767.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7765;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7772 = null;
var G__7772__7773 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7772__7774 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7772 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7772__7773.call(this,array,n);
case  3 :
return G__7772__7774.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7772;
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
var temp__3698__auto____7780 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7780))
{var s__7781 = temp__3698__auto____7780;

return cljs.core._first.call(null,s__7781);
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
var G__7841 = cljs.core.next.call(null,s);
s = G__7841;
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
var s__7844 = cljs.core.seq.call(null,x);
var n__7845 = 0;

while(true){
if(cljs.core.truth_(s__7844))
{{
var G__7847 = cljs.core.next.call(null,s__7844);
var G__7848 = (n__7845 + 1);
s__7844 = G__7847;
n__7845 = G__7848;
continue;
}
} else
{return n__7845;
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
var conj__7850 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7851 = (function() { 
var G__7853__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7854 = conj.call(null,coll,x);
var G__7855 = cljs.core.first.call(null,xs);
var G__7856 = cljs.core.next.call(null,xs);
coll = G__7854;
x = G__7855;
xs = G__7856;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7853 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7853__delegate.call(this, coll, x, xs);
};
G__7853.cljs$lang$maxFixedArity = 2;
G__7853.cljs$lang$applyTo = (function (arglist__7858){
var coll = cljs.core.first(arglist__7858);
var x = cljs.core.first(cljs.core.next(arglist__7858));
var xs = cljs.core.rest(cljs.core.next(arglist__7858));
return G__7853__delegate.call(this, coll, x, xs);
});
return G__7853;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7850.call(this,coll,x);
default:
return conj__7851.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7851.cljs$lang$applyTo;
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
var nth__7861 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7862 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7861.call(this,coll,n);
case  3 :
return nth__7862.call(this,coll,n,not_found);
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
var get__7868 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7869 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7868.call(this,o,k);
case  3 :
return get__7869.call(this,o,k,not_found);
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
var assoc__7882 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7883 = (function() { 
var G__7885__delegate = function (coll,k,v,kvs){
while(true){
var ret__7876 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7886 = ret__7876;
var G__7887 = cljs.core.first.call(null,kvs);
var G__7888 = cljs.core.second.call(null,kvs);
var G__7889 = cljs.core.nnext.call(null,kvs);
coll = G__7886;
k = G__7887;
v = G__7888;
kvs = G__7889;
continue;
}
} else
{return ret__7876;
}
break;
}
};
var G__7885 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7885__delegate.call(this, coll, k, v, kvs);
};
G__7885.cljs$lang$maxFixedArity = 3;
G__7885.cljs$lang$applyTo = (function (arglist__7890){
var coll = cljs.core.first(arglist__7890);
var k = cljs.core.first(cljs.core.next(arglist__7890));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7890)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7890)));
return G__7885__delegate.call(this, coll, k, v, kvs);
});
return G__7885;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7882.call(this,coll,k,v);
default:
return assoc__7883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7883.cljs$lang$applyTo;
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
var dissoc__7893 = (function (coll){
return coll;
});
var dissoc__7894 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7895 = (function() { 
var G__7897__delegate = function (coll,k,ks){
while(true){
var ret__7892 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7899 = ret__7892;
var G__7901 = cljs.core.first.call(null,ks);
var G__7902 = cljs.core.next.call(null,ks);
coll = G__7899;
k = G__7901;
ks = G__7902;
continue;
}
} else
{return ret__7892;
}
break;
}
};
var G__7897 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7897__delegate.call(this, coll, k, ks);
};
G__7897.cljs$lang$maxFixedArity = 2;
G__7897.cljs$lang$applyTo = (function (arglist__7904){
var coll = cljs.core.first(arglist__7904);
var k = cljs.core.first(cljs.core.next(arglist__7904));
var ks = cljs.core.rest(cljs.core.next(arglist__7904));
return G__7897__delegate.call(this, coll, k, ks);
});
return G__7897;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7893.call(this,coll);
case  2 :
return dissoc__7894.call(this,coll,k);
default:
return dissoc__7895.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7895.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____7905 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7906 = x__445__auto____7905;

if(cljs.core.truth_(and__3546__auto____7906))
{var and__3546__auto____7909 = x__445__auto____7905.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7909))
{return cljs.core.not.call(null,x__445__auto____7905.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7909;
}
} else
{return and__3546__auto____7906;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____7905);
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
var disj__7970 = (function (coll){
return coll;
});
var disj__7971 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7972 = (function() { 
var G__7974__delegate = function (coll,k,ks){
while(true){
var ret__7966 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7977 = ret__7966;
var G__7979 = cljs.core.first.call(null,ks);
var G__7980 = cljs.core.next.call(null,ks);
coll = G__7977;
k = G__7979;
ks = G__7980;
continue;
}
} else
{return ret__7966;
}
break;
}
};
var G__7974 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7974__delegate.call(this, coll, k, ks);
};
G__7974.cljs$lang$maxFixedArity = 2;
G__7974.cljs$lang$applyTo = (function (arglist__7982){
var coll = cljs.core.first(arglist__7982);
var k = cljs.core.first(cljs.core.next(arglist__7982));
var ks = cljs.core.rest(cljs.core.next(arglist__7982));
return G__7974__delegate.call(this, coll, k, ks);
});
return G__7974;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7970.call(this,coll);
case  2 :
return disj__7971.call(this,coll,k);
default:
return disj__7972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7972.cljs$lang$applyTo;
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
{var x__445__auto____7987 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7988 = x__445__auto____7987;

if(cljs.core.truth_(and__3546__auto____7988))
{var and__3546__auto____7989 = x__445__auto____7987.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7989))
{return cljs.core.not.call(null,x__445__auto____7987.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7989;
}
} else
{return and__3546__auto____7988;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____7987);
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
{var x__445__auto____7991 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7992 = x__445__auto____7991;

if(cljs.core.truth_(and__3546__auto____7992))
{var and__3546__auto____7993 = x__445__auto____7991.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7993))
{return cljs.core.not.call(null,x__445__auto____7991.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7993;
}
} else
{return and__3546__auto____7992;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____7991);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____7998 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7999 = x__445__auto____7998;

if(cljs.core.truth_(and__3546__auto____7999))
{var and__3546__auto____8000 = x__445__auto____7998.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8000))
{return cljs.core.not.call(null,x__445__auto____7998.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8000;
}
} else
{return and__3546__auto____7999;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____7998);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8002 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8003 = x__445__auto____8002;

if(cljs.core.truth_(and__3546__auto____8003))
{var and__3546__auto____8004 = x__445__auto____8002.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8004))
{return cljs.core.not.call(null,x__445__auto____8002.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8004;
}
} else
{return and__3546__auto____8003;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8002);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8072 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8073 = x__445__auto____8072;

if(cljs.core.truth_(and__3546__auto____8073))
{var and__3546__auto____8074 = x__445__auto____8072.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8074))
{return cljs.core.not.call(null,x__445__auto____8072.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8074;
}
} else
{return and__3546__auto____8073;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8072);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8085 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8086 = x__445__auto____8085;

if(cljs.core.truth_(and__3546__auto____8086))
{var and__3546__auto____8090 = x__445__auto____8085.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8090))
{return cljs.core.not.call(null,x__445__auto____8085.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8090;
}
} else
{return and__3546__auto____8086;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8085);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8100 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8101 = x__445__auto____8100;

if(cljs.core.truth_(and__3546__auto____8101))
{var and__3546__auto____8102 = x__445__auto____8100.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8102))
{return cljs.core.not.call(null,x__445__auto____8100.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8102;
}
} else
{return and__3546__auto____8101;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8100);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8113 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8113.push(key);
}));
return keys__8113;
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
{var x__445__auto____8138 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8139 = x__445__auto____8138;

if(cljs.core.truth_(and__3546__auto____8139))
{var and__3546__auto____8141 = x__445__auto____8138.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8141))
{return cljs.core.not.call(null,x__445__auto____8138.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8141;
}
} else
{return and__3546__auto____8139;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8138);
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
var and__3546__auto____8356 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8356))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8357 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8357))
{return or__3548__auto____8357;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8356;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8386 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8386))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8386;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8387 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8387))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8387;
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
var and__3546__auto____8394 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8394))
{return (n == n.toFixed());
} else
{return and__3546__auto____8394;
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
if(cljs.core.truth_((function (){var and__3546__auto____8396 = coll;

if(cljs.core.truth_(and__3546__auto____8396))
{var and__3546__auto____8397 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8397))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8397;
}
} else
{return and__3546__auto____8396;
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
var distinct_QMARK___8407 = (function (x){
return true;
});
var distinct_QMARK___8408 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8409 = (function() { 
var G__8411__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8403 = cljs.core.set([y,x]);
var xs__8404 = more;

while(true){
var x__8405 = cljs.core.first.call(null,xs__8404);
var etc__8406 = cljs.core.next.call(null,xs__8404);

if(cljs.core.truth_(xs__8404))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8403,x__8405)))
{return false;
} else
{{
var G__8412 = cljs.core.conj.call(null,s__8403,x__8405);
var G__8413 = etc__8406;
s__8403 = G__8412;
xs__8404 = G__8413;
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
var G__8411 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8411__delegate.call(this, x, y, more);
};
G__8411.cljs$lang$maxFixedArity = 2;
G__8411.cljs$lang$applyTo = (function (arglist__8415){
var x = cljs.core.first(arglist__8415);
var y = cljs.core.first(cljs.core.next(arglist__8415));
var more = cljs.core.rest(cljs.core.next(arglist__8415));
return G__8411__delegate.call(this, x, y, more);
});
return G__8411;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8407.call(this,x);
case  2 :
return distinct_QMARK___8408.call(this,x,y);
default:
return distinct_QMARK___8409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8409.cljs$lang$applyTo;
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
var r__8432 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8432)))
{return r__8432;
} else
{if(cljs.core.truth_(r__8432))
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
var sort__8443 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8444 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8442 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8442,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8442);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8443.call(this,comp);
case  2 :
return sort__8444.call(this,comp,coll);
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
var sort_by__8449 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8450 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8449.call(this,keyfn,comp);
case  3 :
return sort_by__8450.call(this,keyfn,comp,coll);
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
var reduce__8456 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8457 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8456.call(this,f,val);
case  3 :
return reduce__8457.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8478 = (function (f,coll){
var temp__3695__auto____8465 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8465))
{var s__8467 = temp__3695__auto____8465;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8467),cljs.core.next.call(null,s__8467));
} else
{return f.call(null);
}
});
var seq_reduce__8479 = (function (f,val,coll){
var val__8475 = val;
var coll__8476 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8476))
{{
var G__8481 = f.call(null,val__8475,cljs.core.first.call(null,coll__8476));
var G__8482 = cljs.core.next.call(null,coll__8476);
val__8475 = G__8481;
coll__8476 = G__8482;
continue;
}
} else
{return val__8475;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8478.call(this,f,val);
case  3 :
return seq_reduce__8479.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8491 = null;
var G__8491__8495 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8491__8497 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8491 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8491__8495.call(this,coll,f);
case  3 :
return G__8491__8497.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8491;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8501 = (function (){
return 0;
});
var _PLUS___8502 = (function (x){
return x;
});
var _PLUS___8503 = (function (x,y){
return (x + y);
});
var _PLUS___8504 = (function() { 
var G__8508__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8508 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8508__delegate.call(this, x, y, more);
};
G__8508.cljs$lang$maxFixedArity = 2;
G__8508.cljs$lang$applyTo = (function (arglist__8510){
var x = cljs.core.first(arglist__8510);
var y = cljs.core.first(cljs.core.next(arglist__8510));
var more = cljs.core.rest(cljs.core.next(arglist__8510));
return G__8508__delegate.call(this, x, y, more);
});
return G__8508;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8501.call(this);
case  1 :
return _PLUS___8502.call(this,x);
case  2 :
return _PLUS___8503.call(this,x,y);
default:
return _PLUS___8504.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8504.cljs$lang$applyTo;
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
var ___8523 = (function (x){
return (- x);
});
var ___8524 = (function (x,y){
return (x - y);
});
var ___8525 = (function() { 
var G__8528__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8528 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8528__delegate.call(this, x, y, more);
};
G__8528.cljs$lang$maxFixedArity = 2;
G__8528.cljs$lang$applyTo = (function (arglist__8529){
var x = cljs.core.first(arglist__8529);
var y = cljs.core.first(cljs.core.next(arglist__8529));
var more = cljs.core.rest(cljs.core.next(arglist__8529));
return G__8528__delegate.call(this, x, y, more);
});
return G__8528;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8523.call(this,x);
case  2 :
return ___8524.call(this,x,y);
default:
return ___8525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8525.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8537 = (function (){
return 1;
});
var _STAR___8538 = (function (x){
return x;
});
var _STAR___8539 = (function (x,y){
return (x * y);
});
var _STAR___8540 = (function() { 
var G__8546__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8546 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8546__delegate.call(this, x, y, more);
};
G__8546.cljs$lang$maxFixedArity = 2;
G__8546.cljs$lang$applyTo = (function (arglist__8548){
var x = cljs.core.first(arglist__8548);
var y = cljs.core.first(cljs.core.next(arglist__8548));
var more = cljs.core.rest(cljs.core.next(arglist__8548));
return G__8546__delegate.call(this, x, y, more);
});
return G__8546;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8537.call(this);
case  1 :
return _STAR___8538.call(this,x);
case  2 :
return _STAR___8539.call(this,x,y);
default:
return _STAR___8540.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8540.cljs$lang$applyTo;
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
var _SLASH___8553 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8554 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8555 = (function() { 
var G__8558__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8558 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8558__delegate.call(this, x, y, more);
};
G__8558.cljs$lang$maxFixedArity = 2;
G__8558.cljs$lang$applyTo = (function (arglist__8559){
var x = cljs.core.first(arglist__8559);
var y = cljs.core.first(cljs.core.next(arglist__8559));
var more = cljs.core.rest(cljs.core.next(arglist__8559));
return G__8558__delegate.call(this, x, y, more);
});
return G__8558;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8553.call(this,x);
case  2 :
return _SLASH___8554.call(this,x,y);
default:
return _SLASH___8555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8555.cljs$lang$applyTo;
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
var _LT___8564 = (function (x){
return true;
});
var _LT___8565 = (function (x,y){
return (x < y);
});
var _LT___8566 = (function() { 
var G__8569__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8571 = y;
var G__8572 = cljs.core.first.call(null,more);
var G__8573 = cljs.core.next.call(null,more);
x = G__8571;
y = G__8572;
more = G__8573;
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
var G__8569 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8569__delegate.call(this, x, y, more);
};
G__8569.cljs$lang$maxFixedArity = 2;
G__8569.cljs$lang$applyTo = (function (arglist__8578){
var x = cljs.core.first(arglist__8578);
var y = cljs.core.first(cljs.core.next(arglist__8578));
var more = cljs.core.rest(cljs.core.next(arglist__8578));
return G__8569__delegate.call(this, x, y, more);
});
return G__8569;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8564.call(this,x);
case  2 :
return _LT___8565.call(this,x,y);
default:
return _LT___8566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8566.cljs$lang$applyTo;
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
var _LT__EQ___8579 = (function (x){
return true;
});
var _LT__EQ___8580 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8581 = (function() { 
var G__8583__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8584 = y;
var G__8586 = cljs.core.first.call(null,more);
var G__8587 = cljs.core.next.call(null,more);
x = G__8584;
y = G__8586;
more = G__8587;
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
var G__8583 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8583__delegate.call(this, x, y, more);
};
G__8583.cljs$lang$maxFixedArity = 2;
G__8583.cljs$lang$applyTo = (function (arglist__8598){
var x = cljs.core.first(arglist__8598);
var y = cljs.core.first(cljs.core.next(arglist__8598));
var more = cljs.core.rest(cljs.core.next(arglist__8598));
return G__8583__delegate.call(this, x, y, more);
});
return G__8583;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8579.call(this,x);
case  2 :
return _LT__EQ___8580.call(this,x,y);
default:
return _LT__EQ___8581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8581.cljs$lang$applyTo;
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
var _GT___8607 = (function (x){
return true;
});
var _GT___8608 = (function (x,y){
return (x > y);
});
var _GT___8609 = (function() { 
var G__8611__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8612 = y;
var G__8613 = cljs.core.first.call(null,more);
var G__8614 = cljs.core.next.call(null,more);
x = G__8612;
y = G__8613;
more = G__8614;
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
var G__8611 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8611__delegate.call(this, x, y, more);
};
G__8611.cljs$lang$maxFixedArity = 2;
G__8611.cljs$lang$applyTo = (function (arglist__8615){
var x = cljs.core.first(arglist__8615);
var y = cljs.core.first(cljs.core.next(arglist__8615));
var more = cljs.core.rest(cljs.core.next(arglist__8615));
return G__8611__delegate.call(this, x, y, more);
});
return G__8611;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8607.call(this,x);
case  2 :
return _GT___8608.call(this,x,y);
default:
return _GT___8609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8609.cljs$lang$applyTo;
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
var _GT__EQ___8622 = (function (x){
return true;
});
var _GT__EQ___8623 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8624 = (function() { 
var G__8628__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8629 = y;
var G__8630 = cljs.core.first.call(null,more);
var G__8631 = cljs.core.next.call(null,more);
x = G__8629;
y = G__8630;
more = G__8631;
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
var G__8628 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8628__delegate.call(this, x, y, more);
};
G__8628.cljs$lang$maxFixedArity = 2;
G__8628.cljs$lang$applyTo = (function (arglist__8635){
var x = cljs.core.first(arglist__8635);
var y = cljs.core.first(cljs.core.next(arglist__8635));
var more = cljs.core.rest(cljs.core.next(arglist__8635));
return G__8628__delegate.call(this, x, y, more);
});
return G__8628;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8622.call(this,x);
case  2 :
return _GT__EQ___8623.call(this,x,y);
default:
return _GT__EQ___8624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8624.cljs$lang$applyTo;
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
var max__8651 = (function (x){
return x;
});
var max__8652 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8653 = (function() { 
var G__8658__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8658 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8658__delegate.call(this, x, y, more);
};
G__8658.cljs$lang$maxFixedArity = 2;
G__8658.cljs$lang$applyTo = (function (arglist__8661){
var x = cljs.core.first(arglist__8661);
var y = cljs.core.first(cljs.core.next(arglist__8661));
var more = cljs.core.rest(cljs.core.next(arglist__8661));
return G__8658__delegate.call(this, x, y, more);
});
return G__8658;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8651.call(this,x);
case  2 :
return max__8652.call(this,x,y);
default:
return max__8653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8653.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8669 = (function (x){
return x;
});
var min__8670 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8671 = (function() { 
var G__8675__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8675 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8675__delegate.call(this, x, y, more);
};
G__8675.cljs$lang$maxFixedArity = 2;
G__8675.cljs$lang$applyTo = (function (arglist__8677){
var x = cljs.core.first(arglist__8677);
var y = cljs.core.first(cljs.core.next(arglist__8677));
var more = cljs.core.rest(cljs.core.next(arglist__8677));
return G__8675__delegate.call(this, x, y, more);
});
return G__8675;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8669.call(this,x);
case  2 :
return min__8670.call(this,x,y);
default:
return min__8671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8671.cljs$lang$applyTo;
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
var rem__8687 = (n % d);

return cljs.core.fix.call(null,((n - rem__8687) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8711 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8711));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8714 = (function (){
return Math.random.call(null);
});
var rand__8715 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8714.call(this);
case  1 :
return rand__8715.call(this,n);
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
var _EQ__EQ___8787 = (function (x){
return true;
});
var _EQ__EQ___8789 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8790 = (function() { 
var G__8796__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
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
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__8796 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8796__delegate.call(this, x, y, more);
};
G__8796.cljs$lang$maxFixedArity = 2;
G__8796.cljs$lang$applyTo = (function (arglist__8808){
var x = cljs.core.first(arglist__8808);
var y = cljs.core.first(cljs.core.next(arglist__8808));
var more = cljs.core.rest(cljs.core.next(arglist__8808));
return G__8796__delegate.call(this, x, y, more);
});
return G__8796;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8787.call(this,x);
case  2 :
return _EQ__EQ___8789.call(this,x,y);
default:
return _EQ__EQ___8790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8790.cljs$lang$applyTo;
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
var n__8821 = n;
var xs__8822 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8824 = xs__8822;

if(cljs.core.truth_(and__3546__auto____8824))
{return (n__8821 > 0);
} else
{return and__3546__auto____8824;
}
})()))
{{
var G__8830 = (n__8821 - 1);
var G__8831 = cljs.core.next.call(null,xs__8822);
n__8821 = G__8830;
xs__8822 = G__8831;
continue;
}
} else
{return xs__8822;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8841 = null;
var G__8841__8842 = (function (coll,n){
var temp__3695__auto____8837 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8837))
{var xs__8838 = temp__3695__auto____8837;

return cljs.core.first.call(null,xs__8838);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8841__8843 = (function (coll,n,not_found){
var temp__3695__auto____8839 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8839))
{var xs__8840 = temp__3695__auto____8839;

return cljs.core.first.call(null,xs__8840);
} else
{return not_found;
}
});
G__8841 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8841__8842.call(this,coll,n);
case  3 :
return G__8841__8843.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8841;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8847 = (function (){
return "";
});
var str_STAR___8848 = (function (x){
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
var str_STAR___8849 = (function() { 
var G__8851__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8852 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8853 = cljs.core.next.call(null,more);
sb = G__8852;
more = G__8853;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8851 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8851__delegate.call(this, x, ys);
};
G__8851.cljs$lang$maxFixedArity = 1;
G__8851.cljs$lang$applyTo = (function (arglist__8855){
var x = cljs.core.first(arglist__8855);
var ys = cljs.core.rest(arglist__8855);
return G__8851__delegate.call(this, x, ys);
});
return G__8851;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8847.call(this);
case  1 :
return str_STAR___8848.call(this,x);
default:
return str_STAR___8849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8849.cljs$lang$applyTo;
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
var str__8858 = (function (){
return "";
});
var str__8859 = (function (x){
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
var str__8860 = (function() { 
var G__8865__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__8865 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8865__delegate.call(this, x, ys);
};
G__8865.cljs$lang$maxFixedArity = 1;
G__8865.cljs$lang$applyTo = (function (arglist__8867){
var x = cljs.core.first(arglist__8867);
var ys = cljs.core.rest(arglist__8867);
return G__8865__delegate.call(this, x, ys);
});
return G__8865;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8858.call(this);
case  1 :
return str__8859.call(this,x);
default:
return str__8860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8860.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8873 = (function (s,start){
return s.substring(start);
});
var subs__8874 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8873.call(this,s,start);
case  3 :
return subs__8874.call(this,s,start,end);
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
var symbol__8881 = (function (name){
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
var symbol__8882 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8881.call(this,ns);
case  2 :
return symbol__8882.call(this,ns,name);
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
var keyword__8934 = (function (name){
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
var keyword__8935 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8934.call(this,ns);
case  2 :
return keyword__8935.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8946 = cljs.core.seq.call(null,x);
var ys__8947 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__8946)))
{return cljs.core.nil_QMARK_.call(null,ys__8947);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__8947)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8946),cljs.core.first.call(null,ys__8947))))
{{
var G__8952 = cljs.core.next.call(null,xs__8946);
var G__8953 = cljs.core.next.call(null,ys__8947);
xs__8946 = G__8952;
ys__8947 = G__8953;
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
return cljs.core.reduce.call(null,(function (p1__8954_SHARP_,p2__8955_SHARP_){
return cljs.core.hash_combine.call(null,p1__8954_SHARP_,cljs.core.hash.call(null,p2__8955_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8956__8957 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8956__8957))
{var G__8959__8962 = cljs.core.first.call(null,G__8956__8957);
var vec__8961__8963 = G__8959__8962;
var key_name__8964 = cljs.core.nth.call(null,vec__8961__8963,0,null);
var f__8965 = cljs.core.nth.call(null,vec__8961__8963,1,null);
var G__8956__8966 = G__8956__8957;

var G__8959__8967 = G__8959__8962;
var G__8956__8968 = G__8956__8966;

while(true){
var vec__8969__8971 = G__8959__8967;
var key_name__8972 = cljs.core.nth.call(null,vec__8969__8971,0,null);
var f__8973 = cljs.core.nth.call(null,vec__8969__8971,1,null);
var G__8956__8975 = G__8956__8968;

var str_name__8976 = cljs.core.name.call(null,key_name__8972);

obj[str_name__8976] = f__8973;
var temp__3698__auto____8977 = cljs.core.next.call(null,G__8956__8975);

if(cljs.core.truth_(temp__3698__auto____8977))
{var G__8956__8978 = temp__3698__auto____8977;

{
var G__8984 = cljs.core.first.call(null,G__8956__8978);
var G__8985 = G__8956__8978;
G__8959__8967 = G__8984;
G__8956__8968 = G__8985;
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
var this__8990 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8991 = this;
return (new cljs.core.List(this__8991.meta,o,coll,(this__8991.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__8993 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__8994 = this;
return this__8994.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__8995 = this;
return this__8995.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__8996 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__8997 = this;
return this__8997.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__8998 = this;
return this__8998.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9000 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9002 = this;
return (new cljs.core.List(meta,this__9002.first,this__9002.rest,this__9002.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9004 = this;
return this__9004.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9006 = this;
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
var this__9024 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9025 = this;
return (new cljs.core.List(this__9025.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9026 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9027 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9028 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9029 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9030 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9031 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9032 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9037 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9038 = this;
return this__9038.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9039 = this;
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
list.cljs$lang$applyTo = (function (arglist__9110){
var items = cljs.core.seq( arglist__9110 );;
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
var this__9115 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9116 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9121 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9122 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9122.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9127 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9128 = this;
return this__9128.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9129 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9129.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9129.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9130 = this;
return this__9130.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9131 = this;
return (new cljs.core.Cons(meta,this__9131.first,this__9131.rest));
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
var G__9141 = null;
var G__9141__9142 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9141__9143 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9141 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9141__9142.call(this,string,f);
case  3 :
return G__9141__9143.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9141;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9205 = null;
var G__9205__9206 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9205__9207 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9205 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9205__9206.call(this,string,k);
case  3 :
return G__9205__9207.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9205;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9209 = null;
var G__9209__9210 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9209__9211 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9209 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9209__9210.call(this,string,n);
case  3 :
return G__9209__9211.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9209;
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
var G__9222 = null;
var G__9222__9223 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9222__9224 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9222 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9222__9223.call(this,this$,coll);
case  3 :
return G__9222__9224.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9222;
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
var x__9229 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9229;
} else
{lazy_seq.x = x__9229.call(null);
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
var this__9237 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9244 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9247 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9248 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9248.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9251 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9254 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9255 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9256 = this;
return this__9256.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9257 = this;
return (new cljs.core.LazySeq(meta,this__9257.realized,this__9257.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9275 = cljs.core.array.call(null);

var s__9277 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9277)))
{ary__9275.push(cljs.core.first.call(null,s__9277));
{
var G__9279 = cljs.core.next.call(null,s__9277);
s__9277 = G__9279;
continue;
}
} else
{return ary__9275;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9280 = s;
var i__9281 = n;
var sum__9283 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9285 = (i__9281 > 0);

if(cljs.core.truth_(and__3546__auto____9285))
{return cljs.core.seq.call(null,s__9280);
} else
{return and__3546__auto____9285;
}
})()))
{{
var G__9288 = cljs.core.next.call(null,s__9280);
var G__9289 = (i__9281 - 1);
var G__9290 = (sum__9283 + 1);
s__9280 = G__9288;
i__9281 = G__9289;
sum__9283 = G__9290;
continue;
}
} else
{return sum__9283;
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
var concat__9305 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9306 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9307 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9296 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9296))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9296),concat.call(null,cljs.core.rest.call(null,s__9296),y));
} else
{return y;
}
})));
});
var concat__9308 = (function() { 
var G__9310__delegate = function (x,y,zs){
var cat__9304 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9303 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9303))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9303),cat.call(null,cljs.core.rest.call(null,xys__9303),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9304.call(null,concat.call(null,x,y),zs);
};
var G__9310 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9310__delegate.call(this, x, y, zs);
};
G__9310.cljs$lang$maxFixedArity = 2;
G__9310.cljs$lang$applyTo = (function (arglist__9354){
var x = cljs.core.first(arglist__9354);
var y = cljs.core.first(cljs.core.next(arglist__9354));
var zs = cljs.core.rest(cljs.core.next(arglist__9354));
return G__9310__delegate.call(this, x, y, zs);
});
return G__9310;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9305.call(this);
case  1 :
return concat__9306.call(this,x);
case  2 :
return concat__9307.call(this,x,y);
default:
return concat__9308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9308.cljs$lang$applyTo;
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
var list_STAR___9378 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___9379 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___9380 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___9381 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___9382 = (function() { 
var G__9389__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9389 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9389__delegate.call(this, a, b, c, d, more);
};
G__9389.cljs$lang$maxFixedArity = 4;
G__9389.cljs$lang$applyTo = (function (arglist__9391){
var a = cljs.core.first(arglist__9391);
var b = cljs.core.first(cljs.core.next(arglist__9391));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9391)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9391))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9391))));
return G__9389__delegate.call(this, a, b, c, d, more);
});
return G__9389;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___9378.call(this,a);
case  2 :
return list_STAR___9379.call(this,a,b);
case  3 :
return list_STAR___9380.call(this,a,b,c);
case  4 :
return list_STAR___9381.call(this,a,b,c,d);
default:
return list_STAR___9382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___9382.cljs$lang$applyTo;
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
var apply__9429 = (function (f,args){
var fixed_arity__9397 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__9397 + 1)) <= fixed_arity__9397)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__9430 = (function (f,x,args){
var arglist__9400 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9401 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9400,fixed_arity__9401) <= fixed_arity__9401)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9400));
} else
{return f.cljs$lang$applyTo(arglist__9400);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9400));
}
});
var apply__9431 = (function (f,x,y,args){
var arglist__9402 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9403 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9402,fixed_arity__9403) <= fixed_arity__9403)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9402));
} else
{return f.cljs$lang$applyTo(arglist__9402);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9402));
}
});
var apply__9432 = (function (f,x,y,z,args){
var arglist__9411 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9412 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9411,fixed_arity__9412) <= fixed_arity__9412)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9411));
} else
{return f.cljs$lang$applyTo(arglist__9411);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9411));
}
});
var apply__9433 = (function() { 
var G__9450__delegate = function (f,a,b,c,d,args){
var arglist__9416 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9417 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9416,fixed_arity__9417) <= fixed_arity__9417)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9416));
} else
{return f.cljs$lang$applyTo(arglist__9416);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9416));
}
};
var G__9450 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9450__delegate.call(this, f, a, b, c, d, args);
};
G__9450.cljs$lang$maxFixedArity = 5;
G__9450.cljs$lang$applyTo = (function (arglist__9454){
var f = cljs.core.first(arglist__9454);
var a = cljs.core.first(cljs.core.next(arglist__9454));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9454)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9454))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9454)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9454)))));
return G__9450__delegate.call(this, f, a, b, c, d, args);
});
return G__9450;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__9429.call(this,f,a);
case  3 :
return apply__9430.call(this,f,a,b);
case  4 :
return apply__9431.call(this,f,a,b,c);
case  5 :
return apply__9432.call(this,f,a,b,c,d);
default:
return apply__9433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__9433.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9468){
var obj = cljs.core.first(arglist__9468);
var f = cljs.core.first(cljs.core.next(arglist__9468));
var args = cljs.core.rest(cljs.core.next(arglist__9468));
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
var not_EQ___9484 = (function (x){
return false;
});
var not_EQ___9486 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___9487 = (function() { 
var G__9489__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9489 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9489__delegate.call(this, x, y, more);
};
G__9489.cljs$lang$maxFixedArity = 2;
G__9489.cljs$lang$applyTo = (function (arglist__9491){
var x = cljs.core.first(arglist__9491);
var y = cljs.core.first(cljs.core.next(arglist__9491));
var more = cljs.core.rest(cljs.core.next(arglist__9491));
return G__9489__delegate.call(this, x, y, more);
});
return G__9489;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___9484.call(this,x);
case  2 :
return not_EQ___9486.call(this,x,y);
default:
return not_EQ___9487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___9487.cljs$lang$applyTo;
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
var G__9501 = pred;
var G__9502 = cljs.core.next.call(null,coll);
pred = G__9501;
coll = G__9502;
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
{var or__3548__auto____9531 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____9531))
{return or__3548__auto____9531;
} else
{{
var G__9538 = pred;
var G__9539 = cljs.core.next.call(null,coll);
pred = G__9538;
coll = G__9539;
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
var G__9559 = null;
var G__9559__9560 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9559__9561 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9559__9562 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9559__9563 = (function() { 
var G__9575__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9575 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9575__delegate.call(this, x, y, zs);
};
G__9575.cljs$lang$maxFixedArity = 2;
G__9575.cljs$lang$applyTo = (function (arglist__9577){
var x = cljs.core.first(arglist__9577);
var y = cljs.core.first(cljs.core.next(arglist__9577));
var zs = cljs.core.rest(cljs.core.next(arglist__9577));
return G__9575__delegate.call(this, x, y, zs);
});
return G__9575;
})()
;
G__9559 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__9559__9560.call(this);
case  1 :
return G__9559__9561.call(this,x);
case  2 :
return G__9559__9562.call(this,x,y);
default:
return G__9559__9563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9559.cljs$lang$maxFixedArity = 2;
G__9559.cljs$lang$applyTo = G__9559__9563.cljs$lang$applyTo;
return G__9559;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9604__delegate = function (args){
return x;
};
var G__9604 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9604__delegate.call(this, args);
};
G__9604.cljs$lang$maxFixedArity = 0;
G__9604.cljs$lang$applyTo = (function (arglist__9606){
var args = cljs.core.seq( arglist__9606 );;
return G__9604__delegate.call(this, args);
});
return G__9604;
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
var comp__9633 = (function (){
return cljs.core.identity;
});
var comp__9634 = (function (f){
return f;
});
var comp__9635 = (function (f,g){
return (function() {
var G__9640 = null;
var G__9640__9641 = (function (){
return f.call(null,g.call(null));
});
var G__9640__9642 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9640__9643 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9640__9644 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9640__9645 = (function() { 
var G__9652__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9652 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9652__delegate.call(this, x, y, z, args);
};
G__9652.cljs$lang$maxFixedArity = 3;
G__9652.cljs$lang$applyTo = (function (arglist__9655){
var x = cljs.core.first(arglist__9655);
var y = cljs.core.first(cljs.core.next(arglist__9655));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9655)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9655)));
return G__9652__delegate.call(this, x, y, z, args);
});
return G__9652;
})()
;
G__9640 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9640__9641.call(this);
case  1 :
return G__9640__9642.call(this,x);
case  2 :
return G__9640__9643.call(this,x,y);
case  3 :
return G__9640__9644.call(this,x,y,z);
default:
return G__9640__9645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9640.cljs$lang$maxFixedArity = 3;
G__9640.cljs$lang$applyTo = G__9640__9645.cljs$lang$applyTo;
return G__9640;
})()
});
var comp__9636 = (function (f,g,h){
return (function() {
var G__9659 = null;
var G__9659__9661 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9659__9662 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9659__9663 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9659__9664 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9659__9665 = (function() { 
var G__9676__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9676 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9676__delegate.call(this, x, y, z, args);
};
G__9676.cljs$lang$maxFixedArity = 3;
G__9676.cljs$lang$applyTo = (function (arglist__9679){
var x = cljs.core.first(arglist__9679);
var y = cljs.core.first(cljs.core.next(arglist__9679));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9679)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9679)));
return G__9676__delegate.call(this, x, y, z, args);
});
return G__9676;
})()
;
G__9659 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9659__9661.call(this);
case  1 :
return G__9659__9662.call(this,x);
case  2 :
return G__9659__9663.call(this,x,y);
case  3 :
return G__9659__9664.call(this,x,y,z);
default:
return G__9659__9665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9659.cljs$lang$maxFixedArity = 3;
G__9659.cljs$lang$applyTo = G__9659__9665.cljs$lang$applyTo;
return G__9659;
})()
});
var comp__9637 = (function() { 
var G__9680__delegate = function (f1,f2,f3,fs){
var fs__9625 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__9681__delegate = function (args){
var ret__9626 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9625),args);
var fs__9627 = cljs.core.next.call(null,fs__9625);

while(true){
if(cljs.core.truth_(fs__9627))
{{
var G__9682 = cljs.core.first.call(null,fs__9627).call(null,ret__9626);
var G__9683 = cljs.core.next.call(null,fs__9627);
ret__9626 = G__9682;
fs__9627 = G__9683;
continue;
}
} else
{return ret__9626;
}
break;
}
};
var G__9681 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9681__delegate.call(this, args);
};
G__9681.cljs$lang$maxFixedArity = 0;
G__9681.cljs$lang$applyTo = (function (arglist__9684){
var args = cljs.core.seq( arglist__9684 );;
return G__9681__delegate.call(this, args);
});
return G__9681;
})()
;
};
var G__9680 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9680__delegate.call(this, f1, f2, f3, fs);
};
G__9680.cljs$lang$maxFixedArity = 3;
G__9680.cljs$lang$applyTo = (function (arglist__9685){
var f1 = cljs.core.first(arglist__9685);
var f2 = cljs.core.first(cljs.core.next(arglist__9685));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9685)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9685)));
return G__9680__delegate.call(this, f1, f2, f3, fs);
});
return G__9680;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__9633.call(this);
case  1 :
return comp__9634.call(this,f1);
case  2 :
return comp__9635.call(this,f1,f2);
case  3 :
return comp__9636.call(this,f1,f2,f3);
default:
return comp__9637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__9637.cljs$lang$applyTo;
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
var partial__9825 = (function (f,arg1){
return (function() { 
var G__9834__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9834 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9834__delegate.call(this, args);
};
G__9834.cljs$lang$maxFixedArity = 0;
G__9834.cljs$lang$applyTo = (function (arglist__9837){
var args = cljs.core.seq( arglist__9837 );;
return G__9834__delegate.call(this, args);
});
return G__9834;
})()
;
});
var partial__9827 = (function (f,arg1,arg2){
return (function() { 
var G__9839__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9839 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9839__delegate.call(this, args);
};
G__9839.cljs$lang$maxFixedArity = 0;
G__9839.cljs$lang$applyTo = (function (arglist__9840){
var args = cljs.core.seq( arglist__9840 );;
return G__9839__delegate.call(this, args);
});
return G__9839;
})()
;
});
var partial__9828 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9842__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9842 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9842__delegate.call(this, args);
};
G__9842.cljs$lang$maxFixedArity = 0;
G__9842.cljs$lang$applyTo = (function (arglist__9845){
var args = cljs.core.seq( arglist__9845 );;
return G__9842__delegate.call(this, args);
});
return G__9842;
})()
;
});
var partial__9829 = (function() { 
var G__9846__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9847__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9847 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9847__delegate.call(this, args);
};
G__9847.cljs$lang$maxFixedArity = 0;
G__9847.cljs$lang$applyTo = (function (arglist__9850){
var args = cljs.core.seq( arglist__9850 );;
return G__9847__delegate.call(this, args);
});
return G__9847;
})()
;
};
var G__9846 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9846__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9846.cljs$lang$maxFixedArity = 4;
G__9846.cljs$lang$applyTo = (function (arglist__9852){
var f = cljs.core.first(arglist__9852);
var arg1 = cljs.core.first(cljs.core.next(arglist__9852));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9852)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9852))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9852))));
return G__9846__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__9846;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__9825.call(this,f,arg1);
case  3 :
return partial__9827.call(this,f,arg1,arg2);
case  4 :
return partial__9828.call(this,f,arg1,arg2,arg3);
default:
return partial__9829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__9829.cljs$lang$applyTo;
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
var fnil__9970 = (function (f,x){
return (function() {
var G__9974 = null;
var G__9974__9975 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__9974__9976 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__9974__9977 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__9974__9978 = (function() { 
var G__9986__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__9986 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9986__delegate.call(this, a, b, c, ds);
};
G__9986.cljs$lang$maxFixedArity = 3;
G__9986.cljs$lang$applyTo = (function (arglist__9987){
var a = cljs.core.first(arglist__9987);
var b = cljs.core.first(cljs.core.next(arglist__9987));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9987)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9987)));
return G__9986__delegate.call(this, a, b, c, ds);
});
return G__9986;
})()
;
G__9974 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__9974__9975.call(this,a);
case  2 :
return G__9974__9976.call(this,a,b);
case  3 :
return G__9974__9977.call(this,a,b,c);
default:
return G__9974__9978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9974.cljs$lang$maxFixedArity = 3;
G__9974.cljs$lang$applyTo = G__9974__9978.cljs$lang$applyTo;
return G__9974;
})()
});
var fnil__9971 = (function (f,x,y){
return (function() {
var G__9988 = null;
var G__9988__9989 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__9988__9990 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__9988__9992 = (function() { 
var G__10003__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10003 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10003__delegate.call(this, a, b, c, ds);
};
G__10003.cljs$lang$maxFixedArity = 3;
G__10003.cljs$lang$applyTo = (function (arglist__10005){
var a = cljs.core.first(arglist__10005);
var b = cljs.core.first(cljs.core.next(arglist__10005));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10005)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10005)));
return G__10003__delegate.call(this, a, b, c, ds);
});
return G__10003;
})()
;
G__9988 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__9988__9989.call(this,a,b);
case  3 :
return G__9988__9990.call(this,a,b,c);
default:
return G__9988__9992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9988.cljs$lang$maxFixedArity = 3;
G__9988.cljs$lang$applyTo = G__9988__9992.cljs$lang$applyTo;
return G__9988;
})()
});
var fnil__9972 = (function (f,x,y,z){
return (function() {
var G__10007 = null;
var G__10007__10008 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10007__10009 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10007__10010 = (function() { 
var G__10017__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10017 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10017__delegate.call(this, a, b, c, ds);
};
G__10017.cljs$lang$maxFixedArity = 3;
G__10017.cljs$lang$applyTo = (function (arglist__10019){
var a = cljs.core.first(arglist__10019);
var b = cljs.core.first(cljs.core.next(arglist__10019));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10019)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10019)));
return G__10017__delegate.call(this, a, b, c, ds);
});
return G__10017;
})()
;
G__10007 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10007__10008.call(this,a,b);
case  3 :
return G__10007__10009.call(this,a,b,c);
default:
return G__10007__10010.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10007.cljs$lang$maxFixedArity = 3;
G__10007.cljs$lang$applyTo = G__10007__10010.cljs$lang$applyTo;
return G__10007;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__9970.call(this,f,x);
case  3 :
return fnil__9971.call(this,f,x,y);
case  4 :
return fnil__9972.call(this,f,x,y,z);
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
var mapi__10030 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10027 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10027))
{var s__10029 = temp__3698__auto____10027;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10029)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10029)));
} else
{return null;
}
})));
});

return mapi__10030.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10034 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10034))
{var s__10035 = temp__3698__auto____10034;

var x__10036 = f.call(null,cljs.core.first.call(null,s__10035));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10036)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10035));
} else
{return cljs.core.cons.call(null,x__10036,keep.call(null,f,cljs.core.rest.call(null,s__10035)));
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
var keepi__10128 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10122))
{var s__10123 = temp__3698__auto____10122;

var x__10125 = f.call(null,idx,cljs.core.first.call(null,s__10123));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10125)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10123));
} else
{return cljs.core.cons.call(null,x__10125,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10123)));
}
} else
{return null;
}
})));
});

return keepi__10128.call(null,0,coll);
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
var every_pred__10255 = (function (p){
return (function() {
var ep1 = null;
var ep1__10260 = (function (){
return true;
});
var ep1__10261 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10262 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10150 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10150))
{return p.call(null,y);
} else
{return and__3546__auto____10150;
}
})());
});
var ep1__10264 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10152 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10152))
{var and__3546__auto____10153 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10153))
{return p.call(null,z);
} else
{return and__3546__auto____10153;
}
} else
{return and__3546__auto____10152;
}
})());
});
var ep1__10265 = (function() { 
var G__10277__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10154 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10154))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10154;
}
})());
};
var G__10277 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10277__delegate.call(this, x, y, z, args);
};
G__10277.cljs$lang$maxFixedArity = 3;
G__10277.cljs$lang$applyTo = (function (arglist__10280){
var x = cljs.core.first(arglist__10280);
var y = cljs.core.first(cljs.core.next(arglist__10280));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10280)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10280)));
return G__10277__delegate.call(this, x, y, z, args);
});
return G__10277;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10260.call(this);
case  1 :
return ep1__10261.call(this,x);
case  2 :
return ep1__10262.call(this,x,y);
case  3 :
return ep1__10264.call(this,x,y,z);
default:
return ep1__10265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10265.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10256 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10287 = (function (){
return true;
});
var ep2__10288 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10156 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10156))
{return p2.call(null,x);
} else
{return and__3546__auto____10156;
}
})());
});
var ep2__10289 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10158 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10158))
{var and__3546__auto____10160 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10160))
{var and__3546__auto____10161 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10161))
{return p2.call(null,y);
} else
{return and__3546__auto____10161;
}
} else
{return and__3546__auto____10160;
}
} else
{return and__3546__auto____10158;
}
})());
});
var ep2__10290 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10163 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10163))
{var and__3546__auto____10164 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10164))
{var and__3546__auto____10165 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10165))
{var and__3546__auto____10166 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10166))
{var and__3546__auto____10167 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10167))
{return p2.call(null,z);
} else
{return and__3546__auto____10167;
}
} else
{return and__3546__auto____10166;
}
} else
{return and__3546__auto____10165;
}
} else
{return and__3546__auto____10164;
}
} else
{return and__3546__auto____10163;
}
})());
});
var ep2__10291 = (function() { 
var G__10300__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10173 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10173))
{return cljs.core.every_QMARK_.call(null,(function (p1__10112_SHARP_){
var and__3546__auto____10181 = p1.call(null,p1__10112_SHARP_);

if(cljs.core.truth_(and__3546__auto____10181))
{return p2.call(null,p1__10112_SHARP_);
} else
{return and__3546__auto____10181;
}
}),args);
} else
{return and__3546__auto____10173;
}
})());
};
var G__10300 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10300__delegate.call(this, x, y, z, args);
};
G__10300.cljs$lang$maxFixedArity = 3;
G__10300.cljs$lang$applyTo = (function (arglist__10303){
var x = cljs.core.first(arglist__10303);
var y = cljs.core.first(cljs.core.next(arglist__10303));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10303)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10303)));
return G__10300__delegate.call(this, x, y, z, args);
});
return G__10300;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10287.call(this);
case  1 :
return ep2__10288.call(this,x);
case  2 :
return ep2__10289.call(this,x,y);
case  3 :
return ep2__10290.call(this,x,y,z);
default:
return ep2__10291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10291.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10257 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10305 = (function (){
return true;
});
var ep3__10306 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10187 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10187))
{var and__3546__auto____10188 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10188))
{return p3.call(null,x);
} else
{return and__3546__auto____10188;
}
} else
{return and__3546__auto____10187;
}
})());
});
var ep3__10307 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10191 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10191))
{var and__3546__auto____10193 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10193))
{var and__3546__auto____10195 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10195))
{var and__3546__auto____10196 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10196))
{var and__3546__auto____10198 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10198))
{return p3.call(null,y);
} else
{return and__3546__auto____10198;
}
} else
{return and__3546__auto____10196;
}
} else
{return and__3546__auto____10195;
}
} else
{return and__3546__auto____10193;
}
} else
{return and__3546__auto____10191;
}
})());
});
var ep3__10308 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10206 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10206))
{var and__3546__auto____10207 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10207))
{var and__3546__auto____10208 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10208))
{var and__3546__auto____10209 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10209))
{var and__3546__auto____10211 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10211))
{var and__3546__auto____10212 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10212))
{var and__3546__auto____10214 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10214))
{var and__3546__auto____10215 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10215))
{return p3.call(null,z);
} else
{return and__3546__auto____10215;
}
} else
{return and__3546__auto____10214;
}
} else
{return and__3546__auto____10212;
}
} else
{return and__3546__auto____10211;
}
} else
{return and__3546__auto____10209;
}
} else
{return and__3546__auto____10208;
}
} else
{return and__3546__auto____10207;
}
} else
{return and__3546__auto____10206;
}
})());
});
var ep3__10309 = (function() { 
var G__10328__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10217 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10217))
{return cljs.core.every_QMARK_.call(null,(function (p1__10115_SHARP_){
var and__3546__auto____10219 = p1.call(null,p1__10115_SHARP_);

if(cljs.core.truth_(and__3546__auto____10219))
{var and__3546__auto____10220 = p2.call(null,p1__10115_SHARP_);

if(cljs.core.truth_(and__3546__auto____10220))
{return p3.call(null,p1__10115_SHARP_);
} else
{return and__3546__auto____10220;
}
} else
{return and__3546__auto____10219;
}
}),args);
} else
{return and__3546__auto____10217;
}
})());
};
var G__10328 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10328__delegate.call(this, x, y, z, args);
};
G__10328.cljs$lang$maxFixedArity = 3;
G__10328.cljs$lang$applyTo = (function (arglist__10335){
var x = cljs.core.first(arglist__10335);
var y = cljs.core.first(cljs.core.next(arglist__10335));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10335)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10335)));
return G__10328__delegate.call(this, x, y, z, args);
});
return G__10328;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10305.call(this);
case  1 :
return ep3__10306.call(this,x);
case  2 :
return ep3__10307.call(this,x,y);
case  3 :
return ep3__10308.call(this,x,y,z);
default:
return ep3__10309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10309.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10258 = (function() { 
var G__10337__delegate = function (p1,p2,p3,ps){
var ps__10236 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10338 = (function (){
return true;
});
var epn__10340 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10116_SHARP_){
return p1__10116_SHARP_.call(null,x);
}),ps__10236);
});
var epn__10341 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10117_SHARP_){
var and__3546__auto____10240 = p1__10117_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10240))
{return p1__10117_SHARP_.call(null,y);
} else
{return and__3546__auto____10240;
}
}),ps__10236);
});
var epn__10342 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10119_SHARP_){
var and__3546__auto____10244 = p1__10119_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10244))
{var and__3546__auto____10247 = p1__10119_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10247))
{return p1__10119_SHARP_.call(null,z);
} else
{return and__3546__auto____10247;
}
} else
{return and__3546__auto____10244;
}
}),ps__10236);
});
var epn__10343 = (function() { 
var G__10351__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10250 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10250))
{return cljs.core.every_QMARK_.call(null,(function (p1__10120_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10120_SHARP_,args);
}),ps__10236);
} else
{return and__3546__auto____10250;
}
})());
};
var G__10351 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10351__delegate.call(this, x, y, z, args);
};
G__10351.cljs$lang$maxFixedArity = 3;
G__10351.cljs$lang$applyTo = (function (arglist__10352){
var x = cljs.core.first(arglist__10352);
var y = cljs.core.first(cljs.core.next(arglist__10352));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10352)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10352)));
return G__10351__delegate.call(this, x, y, z, args);
});
return G__10351;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10338.call(this);
case  1 :
return epn__10340.call(this,x);
case  2 :
return epn__10341.call(this,x,y);
case  3 :
return epn__10342.call(this,x,y,z);
default:
return epn__10343.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10343.cljs$lang$applyTo;
return epn;
})()
};
var G__10337 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10337__delegate.call(this, p1, p2, p3, ps);
};
G__10337.cljs$lang$maxFixedArity = 3;
G__10337.cljs$lang$applyTo = (function (arglist__10354){
var p1 = cljs.core.first(arglist__10354);
var p2 = cljs.core.first(cljs.core.next(arglist__10354));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10354)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10354)));
return G__10337__delegate.call(this, p1, p2, p3, ps);
});
return G__10337;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10255.call(this,p1);
case  2 :
return every_pred__10256.call(this,p1,p2);
case  3 :
return every_pred__10257.call(this,p1,p2,p3);
default:
return every_pred__10258.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10258.cljs$lang$applyTo;
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
var some_fn__10481 = (function (p){
return (function() {
var sp1 = null;
var sp1__10486 = (function (){
return null;
});
var sp1__10487 = (function (x){
return p.call(null,x);
});
var sp1__10488 = (function (x,y){
var or__3548__auto____10375 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10375))
{return or__3548__auto____10375;
} else
{return p.call(null,y);
}
});
var sp1__10489 = (function (x,y,z){
var or__3548__auto____10378 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10378))
{return or__3548__auto____10378;
} else
{var or__3548__auto____10381 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10381))
{return or__3548__auto____10381;
} else
{return p.call(null,z);
}
}
});
var sp1__10490 = (function() { 
var G__10494__delegate = function (x,y,z,args){
var or__3548__auto____10383 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10383))
{return or__3548__auto____10383;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10494 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10494__delegate.call(this, x, y, z, args);
};
G__10494.cljs$lang$maxFixedArity = 3;
G__10494.cljs$lang$applyTo = (function (arglist__10496){
var x = cljs.core.first(arglist__10496);
var y = cljs.core.first(cljs.core.next(arglist__10496));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10496)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10496)));
return G__10494__delegate.call(this, x, y, z, args);
});
return G__10494;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__10486.call(this);
case  1 :
return sp1__10487.call(this,x);
case  2 :
return sp1__10488.call(this,x,y);
case  3 :
return sp1__10489.call(this,x,y,z);
default:
return sp1__10490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__10490.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__10482 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__10498 = (function (){
return null;
});
var sp2__10499 = (function (x){
var or__3548__auto____10387 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10387))
{return or__3548__auto____10387;
} else
{return p2.call(null,x);
}
});
var sp2__10500 = (function (x,y){
var or__3548__auto____10389 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10389))
{return or__3548__auto____10389;
} else
{var or__3548__auto____10390 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10390))
{return or__3548__auto____10390;
} else
{var or__3548__auto____10392 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10392))
{return or__3548__auto____10392;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__10501 = (function (x,y,z){
var or__3548__auto____10395 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10395))
{return or__3548__auto____10395;
} else
{var or__3548__auto____10399 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10399))
{return or__3548__auto____10399;
} else
{var or__3548__auto____10406 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10406))
{return or__3548__auto____10406;
} else
{var or__3548__auto____10408 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10408))
{return or__3548__auto____10408;
} else
{var or__3548__auto____10410 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10410))
{return or__3548__auto____10410;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__10502 = (function() { 
var G__10606__delegate = function (x,y,z,args){
var or__3548__auto____10412 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10412))
{return or__3548__auto____10412;
} else
{return cljs.core.some.call(null,(function (p1__10139_SHARP_){
var or__3548__auto____10415 = p1.call(null,p1__10139_SHARP_);

if(cljs.core.truth_(or__3548__auto____10415))
{return or__3548__auto____10415;
} else
{return p2.call(null,p1__10139_SHARP_);
}
}),args);
}
};
var G__10606 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10606__delegate.call(this, x, y, z, args);
};
G__10606.cljs$lang$maxFixedArity = 3;
G__10606.cljs$lang$applyTo = (function (arglist__10612){
var x = cljs.core.first(arglist__10612);
var y = cljs.core.first(cljs.core.next(arglist__10612));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10612)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10612)));
return G__10606__delegate.call(this, x, y, z, args);
});
return G__10606;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__10498.call(this);
case  1 :
return sp2__10499.call(this,x);
case  2 :
return sp2__10500.call(this,x,y);
case  3 :
return sp2__10501.call(this,x,y,z);
default:
return sp2__10502.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__10502.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__10483 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__10616 = (function (){
return null;
});
var sp3__10617 = (function (x){
var or__3548__auto____10417 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10417))
{return or__3548__auto____10417;
} else
{var or__3548__auto____10421 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10421))
{return or__3548__auto____10421;
} else
{return p3.call(null,x);
}
}
});
var sp3__10618 = (function (x,y){
var or__3548__auto____10434 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10434))
{return or__3548__auto____10434;
} else
{var or__3548__auto____10437 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10437))
{return or__3548__auto____10437;
} else
{var or__3548__auto____10438 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10438))
{return or__3548__auto____10438;
} else
{var or__3548__auto____10439 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10439))
{return or__3548__auto____10439;
} else
{var or__3548__auto____10440 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10440))
{return or__3548__auto____10440;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__10619 = (function (x,y,z){
var or__3548__auto____10442 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10442))
{return or__3548__auto____10442;
} else
{var or__3548__auto____10444 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10444))
{return or__3548__auto____10444;
} else
{var or__3548__auto____10445 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10445))
{return or__3548__auto____10445;
} else
{var or__3548__auto____10446 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10446))
{return or__3548__auto____10446;
} else
{var or__3548__auto____10450 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10450))
{return or__3548__auto____10450;
} else
{var or__3548__auto____10455 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____10455))
{return or__3548__auto____10455;
} else
{var or__3548__auto____10456 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10456))
{return or__3548__auto____10456;
} else
{var or__3548__auto____10458 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____10458))
{return or__3548__auto____10458;
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
var sp3__10620 = (function() { 
var G__10644__delegate = function (x,y,z,args){
var or__3548__auto____10459 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10459))
{return or__3548__auto____10459;
} else
{return cljs.core.some.call(null,(function (p1__10141_SHARP_){
var or__3548__auto____10466 = p1.call(null,p1__10141_SHARP_);

if(cljs.core.truth_(or__3548__auto____10466))
{return or__3548__auto____10466;
} else
{var or__3548__auto____10467 = p2.call(null,p1__10141_SHARP_);

if(cljs.core.truth_(or__3548__auto____10467))
{return or__3548__auto____10467;
} else
{return p3.call(null,p1__10141_SHARP_);
}
}
}),args);
}
};
var G__10644 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10644__delegate.call(this, x, y, z, args);
};
G__10644.cljs$lang$maxFixedArity = 3;
G__10644.cljs$lang$applyTo = (function (arglist__10657){
var x = cljs.core.first(arglist__10657);
var y = cljs.core.first(cljs.core.next(arglist__10657));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10657)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10657)));
return G__10644__delegate.call(this, x, y, z, args);
});
return G__10644;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__10616.call(this);
case  1 :
return sp3__10617.call(this,x);
case  2 :
return sp3__10618.call(this,x,y);
case  3 :
return sp3__10619.call(this,x,y,z);
default:
return sp3__10620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__10620.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__10484 = (function() { 
var G__10659__delegate = function (p1,p2,p3,ps){
var ps__10469 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__10661 = (function (){
return null;
});
var spn__10662 = (function (x){
return cljs.core.some.call(null,(function (p1__10143_SHARP_){
return p1__10143_SHARP_.call(null,x);
}),ps__10469);
});
var spn__10663 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10144_SHARP_){
var or__3548__auto____10471 = p1__10144_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10471))
{return or__3548__auto____10471;
} else
{return p1__10144_SHARP_.call(null,y);
}
}),ps__10469);
});
var spn__10664 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10145_SHARP_){
var or__3548__auto____10478 = p1__10145_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10478))
{return or__3548__auto____10478;
} else
{var or__3548__auto____10479 = p1__10145_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____10479))
{return or__3548__auto____10479;
} else
{return p1__10145_SHARP_.call(null,z);
}
}
}),ps__10469);
});
var spn__10665 = (function() { 
var G__10675__delegate = function (x,y,z,args){
var or__3548__auto____10480 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10480))
{return or__3548__auto____10480;
} else
{return cljs.core.some.call(null,(function (p1__10146_SHARP_){
return cljs.core.some.call(null,p1__10146_SHARP_,args);
}),ps__10469);
}
};
var G__10675 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10675__delegate.call(this, x, y, z, args);
};
G__10675.cljs$lang$maxFixedArity = 3;
G__10675.cljs$lang$applyTo = (function (arglist__10680){
var x = cljs.core.first(arglist__10680);
var y = cljs.core.first(cljs.core.next(arglist__10680));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10680)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10680)));
return G__10675__delegate.call(this, x, y, z, args);
});
return G__10675;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__10661.call(this);
case  1 :
return spn__10662.call(this,x);
case  2 :
return spn__10663.call(this,x,y);
case  3 :
return spn__10664.call(this,x,y,z);
default:
return spn__10665.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__10665.cljs$lang$applyTo;
return spn;
})()
};
var G__10659 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10659__delegate.call(this, p1, p2, p3, ps);
};
G__10659.cljs$lang$maxFixedArity = 3;
G__10659.cljs$lang$applyTo = (function (arglist__10683){
var p1 = cljs.core.first(arglist__10683);
var p2 = cljs.core.first(cljs.core.next(arglist__10683));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10683)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10683)));
return G__10659__delegate.call(this, p1, p2, p3, ps);
});
return G__10659;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__10481.call(this,p1);
case  2 :
return some_fn__10482.call(this,p1,p2);
case  3 :
return some_fn__10483.call(this,p1,p2,p3);
default:
return some_fn__10484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__10484.cljs$lang$applyTo;
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
var map__10818 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10684 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10684))
{var s__10685 = temp__3698__auto____10684;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10685)),map.call(null,f,cljs.core.rest.call(null,s__10685)));
} else
{return null;
}
})));
});
var map__10819 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10687 = cljs.core.seq.call(null,c1);
var s2__10689 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____10690 = s1__10687;

if(cljs.core.truth_(and__3546__auto____10690))
{return s2__10689;
} else
{return and__3546__auto____10690;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10687),cljs.core.first.call(null,s2__10689)),map.call(null,f,cljs.core.rest.call(null,s1__10687),cljs.core.rest.call(null,s2__10689)));
} else
{return null;
}
})));
});
var map__10820 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10695 = cljs.core.seq.call(null,c1);
var s2__10697 = cljs.core.seq.call(null,c2);
var s3__10739 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____10740 = s1__10695;

if(cljs.core.truth_(and__3546__auto____10740))
{var and__3546__auto____10741 = s2__10697;

if(cljs.core.truth_(and__3546__auto____10741))
{return s3__10739;
} else
{return and__3546__auto____10741;
}
} else
{return and__3546__auto____10740;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10695),cljs.core.first.call(null,s2__10697),cljs.core.first.call(null,s3__10739)),map.call(null,f,cljs.core.rest.call(null,s1__10695),cljs.core.rest.call(null,s2__10697),cljs.core.rest.call(null,s3__10739)));
} else
{return null;
}
})));
});
var map__10821 = (function() { 
var G__10832__delegate = function (f,c1,c2,c3,colls){
var step__10814 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10744 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10744)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10744),step.call(null,map.call(null,cljs.core.rest,ss__10744)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10367_SHARP_){
return cljs.core.apply.call(null,f,p1__10367_SHARP_);
}),step__10814.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10832 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10832__delegate.call(this, f, c1, c2, c3, colls);
};
G__10832.cljs$lang$maxFixedArity = 4;
G__10832.cljs$lang$applyTo = (function (arglist__10838){
var f = cljs.core.first(arglist__10838);
var c1 = cljs.core.first(cljs.core.next(arglist__10838));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10838)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10838))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10838))));
return G__10832__delegate.call(this, f, c1, c2, c3, colls);
});
return G__10832;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__10818.call(this,f,c1);
case  3 :
return map__10819.call(this,f,c1,c2);
case  4 :
return map__10820.call(this,f,c1,c2,c3);
default:
return map__10821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__10821.cljs$lang$applyTo;
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
{var temp__3698__auto____10846 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10846))
{var s__10848 = temp__3698__auto____10846;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__10848),take.call(null,(n - 1),cljs.core.rest.call(null,s__10848)));
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
var step__10858 = (function (n,coll){
while(true){
var s__10855 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____10857 = (n > 0);

if(cljs.core.truth_(and__3546__auto____10857))
{return s__10855;
} else
{return and__3546__auto____10857;
}
})()))
{{
var G__10861 = (n - 1);
var G__10863 = cljs.core.rest.call(null,s__10855);
n = G__10861;
coll = G__10863;
continue;
}
} else
{return s__10855;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__10858.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__10868 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__10869 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__10868.call(this,n);
case  2 :
return drop_last__10869.call(this,n,s);
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
var s__10871 = cljs.core.seq.call(null,coll);
var lead__10872 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__10872))
{{
var G__10874 = cljs.core.next.call(null,s__10871);
var G__10875 = cljs.core.next.call(null,lead__10872);
s__10871 = G__10874;
lead__10872 = G__10875;
continue;
}
} else
{return s__10871;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__10947 = (function (pred,coll){
while(true){
var s__10945 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____10946 = s__10945;

if(cljs.core.truth_(and__3546__auto____10946))
{return pred.call(null,cljs.core.first.call(null,s__10945));
} else
{return and__3546__auto____10946;
}
})()))
{{
var G__10952 = pred;
var G__10953 = cljs.core.rest.call(null,s__10945);
pred = G__10952;
coll = G__10953;
continue;
}
} else
{return s__10945;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__10947.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10956 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10956))
{var s__10957 = temp__3698__auto____10956;

return cljs.core.concat.call(null,s__10957,cycle.call(null,s__10957));
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
var repeat__10963 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__10964 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__10963.call(this,n);
case  2 :
return repeat__10964.call(this,n,x);
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
var repeatedly__10979 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__10980 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__10979.call(this,n);
case  2 :
return repeatedly__10980.call(this,n,f);
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
var interleave__11001 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10989 = cljs.core.seq.call(null,c1);
var s2__10990 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____10991 = s1__10989;

if(cljs.core.truth_(and__3546__auto____10991))
{return s2__10990;
} else
{return and__3546__auto____10991;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__10989),cljs.core.cons.call(null,cljs.core.first.call(null,s2__10990),interleave.call(null,cljs.core.rest.call(null,s1__10989),cljs.core.rest.call(null,s2__10990))));
} else
{return null;
}
})));
});
var interleave__11002 = (function() { 
var G__11006__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10998 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10998)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__10998),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__10998)));
} else
{return null;
}
})));
};
var G__11006 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11006__delegate.call(this, c1, c2, colls);
};
G__11006.cljs$lang$maxFixedArity = 2;
G__11006.cljs$lang$applyTo = (function (arglist__11012){
var c1 = cljs.core.first(arglist__11012);
var c2 = cljs.core.first(cljs.core.next(arglist__11012));
var colls = cljs.core.rest(cljs.core.next(arglist__11012));
return G__11006__delegate.call(this, c1, c2, colls);
});
return G__11006;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11001.call(this,c1,c2);
default:
return interleave__11002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11002.cljs$lang$applyTo;
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
var cat__11023 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11018 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11018))
{var coll__11020 = temp__3695__auto____11018;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11020),cat.call(null,cljs.core.rest.call(null,coll__11020),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11023.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11040 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11042 = (function() { 
var G__11045__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11045 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11045__delegate.call(this, f, coll, colls);
};
G__11045.cljs$lang$maxFixedArity = 2;
G__11045.cljs$lang$applyTo = (function (arglist__11046){
var f = cljs.core.first(arglist__11046);
var coll = cljs.core.first(cljs.core.next(arglist__11046));
var colls = cljs.core.rest(cljs.core.next(arglist__11046));
return G__11045__delegate.call(this, f, coll, colls);
});
return G__11045;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11040.call(this,f,coll);
default:
return mapcat__11042.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11042.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11048 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11048))
{var s__11052 = temp__3698__auto____11048;

var f__11053 = cljs.core.first.call(null,s__11052);
var r__11054 = cljs.core.rest.call(null,s__11052);

if(cljs.core.truth_(pred.call(null,f__11053)))
{return cljs.core.cons.call(null,f__11053,filter.call(null,pred,r__11054));
} else
{return filter.call(null,pred,r__11054);
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
var walk__11068 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11068.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11063_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11063_SHARP_));
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
var partition__11077 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11078 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11071))
{var s__11072 = temp__3698__auto____11071;

var p__11073 = cljs.core.take.call(null,n,s__11072);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11073))))
{return cljs.core.cons.call(null,p__11073,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11072)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11079 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11074 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11074))
{var s__11075 = temp__3698__auto____11074;

var p__11076 = cljs.core.take.call(null,n,s__11075);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11076))))
{return cljs.core.cons.call(null,p__11076,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11075)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11076,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11077.call(this,n,step);
case  3 :
return partition__11078.call(this,n,step,pad);
case  4 :
return partition__11079.call(this,n,step,pad,coll);
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
var get_in__11097 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11099 = (function (m,ks,not_found){
var sentinel__11090 = cljs.core.lookup_sentinel;
var m__11091 = m;
var ks__11092 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11092))
{var m__11094 = cljs.core.get.call(null,m__11091,cljs.core.first.call(null,ks__11092),sentinel__11090);

if(cljs.core.truth_((sentinel__11090 === m__11094)))
{return not_found;
} else
{{
var G__11112 = sentinel__11090;
var G__11113 = m__11094;
var G__11114 = cljs.core.next.call(null,ks__11092);
sentinel__11090 = G__11112;
m__11091 = G__11113;
ks__11092 = G__11114;
continue;
}
}
} else
{return m__11091;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11097.call(this,m,ks);
case  3 :
return get_in__11099.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11115,v){
var vec__11116__11117 = p__11115;
var k__11118 = cljs.core.nth.call(null,vec__11116__11117,0,null);
var ks__11119 = cljs.core.nthnext.call(null,vec__11116__11117,1);

if(cljs.core.truth_(ks__11119))
{return cljs.core.assoc.call(null,m,k__11118,assoc_in.call(null,cljs.core.get.call(null,m,k__11118),ks__11119,v));
} else
{return cljs.core.assoc.call(null,m,k__11118,v);
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
var update_in__delegate = function (m,p__11133,f,args){
var vec__11134__11135 = p__11133;
var k__11136 = cljs.core.nth.call(null,vec__11134__11135,0,null);
var ks__11137 = cljs.core.nthnext.call(null,vec__11134__11135,1);

if(cljs.core.truth_(ks__11137))
{return cljs.core.assoc.call(null,m,k__11136,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11136),ks__11137,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11136,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11136),args));
}
};
var update_in = function (m,p__11133,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11133, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11143){
var m = cljs.core.first(arglist__11143);
var p__11133 = cljs.core.first(cljs.core.next(arglist__11143));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11143)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11143)));
return update_in__delegate.call(this, m, p__11133, f, args);
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
var this__11150 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11201 = null;
var G__11201__11202 = (function (coll,k){
var this__11153 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11201__11203 = (function (coll,k,not_found){
var this__11154 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11201 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11201__11202.call(this,coll,k);
case  3 :
return G__11201__11203.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11201;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11156 = this;
var new_array__11158 = cljs.core.aclone.call(null,this__11156.array);

(new_array__11158[k] = v);
return (new cljs.core.Vector(this__11156.meta,new_array__11158));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__11205 = null;
var G__11205__11206 = (function (coll,k){
var this__11161 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11205__11207 = (function (coll,k,not_found){
var this__11162 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11205 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11205__11206.call(this,coll,k);
case  3 :
return G__11205__11207.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11205;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11163 = this;
var new_array__11165 = cljs.core.aclone.call(null,this__11163.array);

new_array__11165.push(o);
return (new cljs.core.Vector(this__11163.meta,new_array__11165));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11209 = null;
var G__11209__11210 = (function (v,f){
var this__11167 = this;
return cljs.core.ci_reduce.call(null,this__11167.array,f);
});
var G__11209__11211 = (function (v,f,start){
var this__11168 = this;
return cljs.core.ci_reduce.call(null,this__11168.array,f,start);
});
G__11209 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__11209__11210.call(this,v,f);
case  3 :
return G__11209__11211.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11209;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11169 = this;
if(cljs.core.truth_((this__11169.array.length > 0)))
{var vector_seq__11174 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11169.array.length)))
{return cljs.core.cons.call(null,(this__11169.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11174.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11175 = this;
return this__11175.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11176 = this;
var count__11177 = this__11176.array.length;

if(cljs.core.truth_((count__11177 > 0)))
{return (this__11176.array[(count__11177 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11178 = this;
if(cljs.core.truth_((this__11178.array.length > 0)))
{var new_array__11179 = cljs.core.aclone.call(null,this__11178.array);

new_array__11179.pop();
return (new cljs.core.Vector(this__11178.meta,new_array__11179));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11181 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11182 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11183 = this;
return (new cljs.core.Vector(meta,this__11183.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11194 = this;
return this__11194.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11222 = null;
var G__11222__11223 = (function (coll,n){
var this__11195 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11196 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11196))
{return (n < this__11195.array.length);
} else
{return and__3546__auto____11196;
}
})()))
{return (this__11195.array[n]);
} else
{return null;
}
});
var G__11222__11224 = (function (coll,n,not_found){
var this__11197 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11198 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11198))
{return (n < this__11197.array.length);
} else
{return and__3546__auto____11198;
}
})()))
{return (this__11197.array[n]);
} else
{return not_found;
}
});
G__11222 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11222__11223.call(this,coll,n);
case  3 :
return G__11222__11224.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11222;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11199 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11199.meta);
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
vector.cljs$lang$applyTo = (function (arglist__11311){
var args = cljs.core.seq( arglist__11311 );;
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
var this__11326 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11371 = null;
var G__11371__11372 = (function (coll,k){
var this__11328 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11371__11373 = (function (coll,k,not_found){
var this__11329 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11371 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11371__11372.call(this,coll,k);
case  3 :
return G__11371__11373.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11371;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__11331 = this;
var v_pos__11333 = (this__11331.start + key);

return (new cljs.core.Subvec(this__11331.meta,cljs.core._assoc.call(null,this__11331.v,v_pos__11333,val),this__11331.start,((this__11331.end > (v_pos__11333 + 1)) ? this__11331.end : (v_pos__11333 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__11380 = null;
var G__11380__11381 = (function (coll,k){
var this__11335 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11380__11382 = (function (coll,k,not_found){
var this__11336 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11380 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11380__11381.call(this,coll,k);
case  3 :
return G__11380__11382.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11380;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11339 = this;
return (new cljs.core.Subvec(this__11339.meta,cljs.core._assoc_n.call(null,this__11339.v,this__11339.end,o),this__11339.start,(this__11339.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11387 = null;
var G__11387__11388 = (function (coll,f){
var this__11341 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__11387__11389 = (function (coll,f,start){
var this__11343 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__11387 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__11387__11388.call(this,coll,f);
case  3 :
return G__11387__11389.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11387;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11345 = this;
var subvec_seq__11349 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__11345.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__11345.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__11349.call(null,this__11345.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11350 = this;
return (this__11350.end - this__11350.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11354 = this;
return cljs.core._nth.call(null,this__11354.v,(this__11354.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11355 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__11355.start,this__11355.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__11355.meta,this__11355.v,this__11355.start,(this__11355.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11359 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11360 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11364 = this;
return (new cljs.core.Subvec(meta,this__11364.v,this__11364.start,this__11364.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11366 = this;
return this__11366.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11395 = null;
var G__11395__11396 = (function (coll,n){
var this__11367 = this;
return cljs.core._nth.call(null,this__11367.v,(this__11367.start + n));
});
var G__11395__11397 = (function (coll,n,not_found){
var this__11368 = this;
return cljs.core._nth.call(null,this__11368.v,(this__11368.start + n),not_found);
});
G__11395 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11395__11396.call(this,coll,n);
case  3 :
return G__11395__11397.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11395;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11369 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11369.meta);
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
var subvec__11412 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__11413 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__11412.call(this,v,start);
case  3 :
return subvec__11413.call(this,v,start,end);
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
var this__11417 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11419 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11713 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11714 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11714.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11720 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11721 = this;
return cljs.core._first.call(null,this__11721.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11723 = this;
var temp__3695__auto____11725 = cljs.core.next.call(null,this__11723.front);

if(cljs.core.truth_(temp__3695__auto____11725))
{var f1__11726 = temp__3695__auto____11725;

return (new cljs.core.PersistentQueueSeq(this__11723.meta,f1__11726,this__11723.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__11723.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11723.meta,this__11723.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11728 = this;
return this__11728.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11731 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11731.front,this__11731.rear));
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
var this__11755 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11756 = this;
if(cljs.core.truth_(this__11756.front))
{return (new cljs.core.PersistentQueue(this__11756.meta,(this__11756.count + 1),this__11756.front,cljs.core.conj.call(null,(function (){var or__3548__auto____11757 = this__11756.rear;

if(cljs.core.truth_(or__3548__auto____11757))
{return or__3548__auto____11757;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__11756.meta,(this__11756.count + 1),cljs.core.conj.call(null,this__11756.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11758 = this;
var rear__11759 = cljs.core.seq.call(null,this__11758.rear);

if(cljs.core.truth_((function (){var or__3548__auto____11760 = this__11758.front;

if(cljs.core.truth_(or__3548__auto____11760))
{return or__3548__auto____11760;
} else
{return rear__11759;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11758.front,cljs.core.seq.call(null,rear__11759)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11761 = this;
return this__11761.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11765 = this;
return cljs.core._first.call(null,this__11765.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11766 = this;
if(cljs.core.truth_(this__11766.front))
{var temp__3695__auto____11767 = cljs.core.next.call(null,this__11766.front);

if(cljs.core.truth_(temp__3695__auto____11767))
{var f1__11768 = temp__3695__auto____11767;

return (new cljs.core.PersistentQueue(this__11766.meta,(this__11766.count - 1),f1__11768,this__11766.rear));
} else
{return (new cljs.core.PersistentQueue(this__11766.meta,(this__11766.count - 1),cljs.core.seq.call(null,this__11766.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11769 = this;
return cljs.core.first.call(null,this__11769.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11770 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11771 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11772 = this;
return (new cljs.core.PersistentQueue(meta,this__11772.count,this__11772.front,this__11772.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11776 = this;
return this__11776.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11789 = this;
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
var this__11837 = this;
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
var len__11840 = array.length;

var i__11841 = 0;

while(true){
if(cljs.core.truth_((i__11841 < len__11840)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__11841]))))
{return i__11841;
} else
{{
var G__11842 = (i__11841 + incr);
i__11841 = G__11842;
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
var obj_map_contains_key_QMARK___11845 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___11846 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____11844 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____11844))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____11844;
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
return obj_map_contains_key_QMARK___11845.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___11846.call(this,k,strobj,true_val,false_val);
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
var this__11854 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12039 = null;
var G__12039__12040 = (function (coll,k){
var this__11857 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12039__12041 = (function (coll,k,not_found){
var this__11858 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__11858.strobj,(this__11858.strobj[k]),not_found);
});
G__12039 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12039__12040.call(this,coll,k);
case  3 :
return G__12039__12041.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12039;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11860 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__11862 = goog.object.clone.call(null,this__11860.strobj);
var overwrite_QMARK___11864 = new_strobj__11862.hasOwnProperty(k);

(new_strobj__11862[k] = v);
if(cljs.core.truth_(overwrite_QMARK___11864))
{return (new cljs.core.ObjMap(this__11860.meta,this__11860.keys,new_strobj__11862));
} else
{var new_keys__11865 = cljs.core.aclone.call(null,this__11860.keys);

new_keys__11865.push(k);
return (new cljs.core.ObjMap(this__11860.meta,new_keys__11865,new_strobj__11862));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__11860.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__11945 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__11945.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12054 = null;
var G__12054__12055 = (function (coll,k){
var this__11947 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12054__12057 = (function (coll,k,not_found){
var this__12001 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12054 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12054__12055.call(this,coll,k);
case  3 :
return G__12054__12057.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12054;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12019 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12020 = this;
if(cljs.core.truth_((this__12020.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__11848_SHARP_){
return cljs.core.vector.call(null,p1__11848_SHARP_,(this__12020.strobj[p1__11848_SHARP_]));
}),this__12020.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12022 = this;
return this__12022.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12023 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12024 = this;
return (new cljs.core.ObjMap(meta,this__12024.keys,this__12024.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12025 = this;
return this__12025.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12027 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12027.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12029 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12032 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12032))
{return this__12029.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12032;
}
})()))
{var new_keys__12033 = cljs.core.aclone.call(null,this__12029.keys);
var new_strobj__12034 = goog.object.clone.call(null,this__12029.strobj);

new_keys__12033.splice(cljs.core.scan_array.call(null,1,k,new_keys__12033),1);
cljs.core.js_delete.call(null,new_strobj__12034,k);
return (new cljs.core.ObjMap(this__12029.meta,new_keys__12033,new_strobj__12034));
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
var this__12072 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12261 = null;
var G__12261__12262 = (function (coll,k){
var this__12073 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12261__12263 = (function (coll,k,not_found){
var this__12074 = this;
var bucket__12127 = (this__12074.hashobj[cljs.core.hash.call(null,k)]);
var i__12128 = (cljs.core.truth_(bucket__12127)?cljs.core.scan_array.call(null,2,k,bucket__12127):null);

if(cljs.core.truth_(i__12128))
{return (bucket__12127[(i__12128 + 1)]);
} else
{return not_found;
}
});
G__12261 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12261__12262.call(this,coll,k);
case  3 :
return G__12261__12263.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12261;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12132 = this;
var h__12133 = cljs.core.hash.call(null,k);
var bucket__12134 = (this__12132.hashobj[h__12133]);

if(cljs.core.truth_(bucket__12134))
{var new_bucket__12135 = cljs.core.aclone.call(null,bucket__12134);
var new_hashobj__12136 = goog.object.clone.call(null,this__12132.hashobj);

(new_hashobj__12136[h__12133] = new_bucket__12135);
var temp__3695__auto____12140 = cljs.core.scan_array.call(null,2,k,new_bucket__12135);

if(cljs.core.truth_(temp__3695__auto____12140))
{var i__12141 = temp__3695__auto____12140;

(new_bucket__12135[(i__12141 + 1)] = v);
return (new cljs.core.HashMap(this__12132.meta,this__12132.count,new_hashobj__12136));
} else
{new_bucket__12135.push(k,v);
return (new cljs.core.HashMap(this__12132.meta,(this__12132.count + 1),new_hashobj__12136));
}
} else
{var new_hashobj__12144 = goog.object.clone.call(null,this__12132.hashobj);

(new_hashobj__12144[h__12133] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12132.meta,(this__12132.count + 1),new_hashobj__12144));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12147 = this;
var bucket__12148 = (this__12147.hashobj[cljs.core.hash.call(null,k)]);
var i__12149 = (cljs.core.truth_(bucket__12148)?cljs.core.scan_array.call(null,2,k,bucket__12148):null);

if(cljs.core.truth_(i__12149))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12271 = null;
var G__12271__12272 = (function (coll,k){
var this__12150 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12271__12273 = (function (coll,k,not_found){
var this__12151 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12271 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12271__12272.call(this,coll,k);
case  3 :
return G__12271__12273.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12271;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12152 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12156 = this;
if(cljs.core.truth_((this__12156.count > 0)))
{var hashes__12162 = cljs.core.js_keys.call(null,this__12156.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12062_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12156.hashobj[p1__12062_SHARP_])));
}),hashes__12162);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12166 = this;
return this__12166.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12170 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12194 = this;
return (new cljs.core.HashMap(meta,this__12194.count,this__12194.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12195 = this;
return this__12195.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12197 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12197.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12199 = this;
var h__12202 = cljs.core.hash.call(null,k);
var bucket__12203 = (this__12199.hashobj[h__12202]);
var i__12204 = (cljs.core.truth_(bucket__12203)?cljs.core.scan_array.call(null,2,k,bucket__12203):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12204)))
{return coll;
} else
{var new_hashobj__12206 = goog.object.clone.call(null,this__12199.hashobj);

if(cljs.core.truth_((3 > bucket__12203.length)))
{cljs.core.js_delete.call(null,new_hashobj__12206,h__12202);
} else
{var new_bucket__12209 = cljs.core.aclone.call(null,bucket__12203);

new_bucket__12209.splice(i__12204,2);
(new_hashobj__12206[h__12202] = new_bucket__12209);
}
return (new cljs.core.HashMap(this__12199.meta,(this__12199.count - 1),new_hashobj__12206));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12323 = ks.length;

var i__12324 = 0;
var out__12325 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12324 < len__12323)))
{{
var G__12331 = (i__12324 + 1);
var G__12332 = cljs.core.assoc.call(null,out__12325,(ks[i__12324]),(vs[i__12324]));
i__12324 = G__12331;
out__12325 = G__12332;
continue;
}
} else
{return out__12325;
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
var in$__12333 = cljs.core.seq.call(null,keyvals);
var out__12334 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12333))
{{
var G__12336 = cljs.core.nnext.call(null,in$__12333);
var G__12337 = cljs.core.assoc.call(null,out__12334,cljs.core.first.call(null,in$__12333),cljs.core.second.call(null,in$__12333));
in$__12333 = G__12336;
out__12334 = G__12337;
continue;
}
} else
{return out__12334;
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
hash_map.cljs$lang$applyTo = (function (arglist__12338){
var keyvals = cljs.core.seq( arglist__12338 );;
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
{return cljs.core.reduce.call(null,(function (p1__12339_SHARP_,p2__12340_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12344 = p1__12339_SHARP_;

if(cljs.core.truth_(or__3548__auto____12344))
{return or__3548__auto____12344;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12340_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12348){
var maps = cljs.core.seq( arglist__12348 );;
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
{var merge_entry__12354 = (function (m,e){
var k__12350 = cljs.core.first.call(null,e);
var v__12351 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12350)))
{return cljs.core.assoc.call(null,m,k__12350,f.call(null,cljs.core.get.call(null,m,k__12350),v__12351));
} else
{return cljs.core.assoc.call(null,m,k__12350,v__12351);
}
});
var merge2__12358 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12354,(function (){var or__3548__auto____12356 = m1;

if(cljs.core.truth_(or__3548__auto____12356))
{return or__3548__auto____12356;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12358,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12405){
var f = cljs.core.first(arglist__12405);
var maps = cljs.core.rest(arglist__12405);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12413 = cljs.core.ObjMap.fromObject([],{});
var keys__12414 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12414))
{var key__12416 = cljs.core.first.call(null,keys__12414);
var entry__12418 = cljs.core.get.call(null,map,key__12416,"﷐'user/not-found");

{
var G__12424 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12418,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12413,key__12416,entry__12418):ret__12413);
var G__12425 = cljs.core.next.call(null,keys__12414);
ret__12413 = G__12424;
keys__12414 = G__12425;
continue;
}
} else
{return ret__12413;
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
var this__12439 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12472 = null;
var G__12472__12473 = (function (coll,v){
var this__12440 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__12472__12474 = (function (coll,v,not_found){
var this__12441 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12441.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__12472 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__12472__12473.call(this,coll,v);
case  3 :
return G__12472__12474.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12472;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__12476 = null;
var G__12476__12477 = (function (coll,k){
var this__12443 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12476__12479 = (function (coll,k,not_found){
var this__12444 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12476 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12476__12477.call(this,coll,k);
case  3 :
return G__12476__12479.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12476;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12445 = this;
return (new cljs.core.Set(this__12445.meta,cljs.core.assoc.call(null,this__12445.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12450 = this;
return cljs.core.keys.call(null,this__12450.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__12451 = this;
return (new cljs.core.Set(this__12451.meta,cljs.core.dissoc.call(null,this__12451.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12457 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12459 = this;
var and__3546__auto____12461 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____12461))
{var and__3546__auto____12462 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____12462))
{return cljs.core.every_QMARK_.call(null,(function (p1__12407_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12407_SHARP_);
}),other);
} else
{return and__3546__auto____12462;
}
} else
{return and__3546__auto____12461;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12463 = this;
return (new cljs.core.Set(meta,this__12463.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12466 = this;
return this__12466.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12467 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__12467.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__12494 = cljs.core.seq.call(null,coll);
var out__12496 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__12494))))
{{
var G__12501 = cljs.core.rest.call(null,in$__12494);
var G__12502 = cljs.core.conj.call(null,out__12496,cljs.core.first.call(null,in$__12494));
in$__12494 = G__12501;
out__12496 = G__12502;
continue;
}
} else
{return out__12496;
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
{var n__12526 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____12527 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____12527))
{var e__12530 = temp__3695__auto____12527;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__12530));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12526,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12492_SHARP_){
var temp__3695__auto____12531 = cljs.core.find.call(null,smap,p1__12492_SHARP_);

if(cljs.core.truth_(temp__3695__auto____12531))
{var e__12533 = temp__3695__auto____12531;

return cljs.core.second.call(null,e__12533);
} else
{return p1__12492_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12553 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12542,seen){
while(true){
var vec__12543__12545 = p__12542;
var f__12546 = cljs.core.nth.call(null,vec__12543__12545,0,null);
var xs__12548 = vec__12543__12545;

var temp__3698__auto____12549 = cljs.core.seq.call(null,xs__12548);

if(cljs.core.truth_(temp__3698__auto____12549))
{var s__12550 = temp__3698__auto____12549;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__12546)))
{{
var G__12558 = cljs.core.rest.call(null,s__12550);
var G__12559 = seen;
p__12542 = G__12558;
seen = G__12559;
continue;
}
} else
{return cljs.core.cons.call(null,f__12546,step.call(null,cljs.core.rest.call(null,s__12550),cljs.core.conj.call(null,seen,f__12546)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__12553.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__12566 = cljs.core.Vector.fromArray([]);
var s__12567 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__12567)))
{{
var G__12568 = cljs.core.conj.call(null,ret__12566,cljs.core.first.call(null,s__12567));
var G__12569 = cljs.core.next.call(null,s__12567);
ret__12566 = G__12568;
s__12567 = G__12569;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12566);
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
{if(cljs.core.truth_((function (){var or__3548__auto____12646 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12646))
{return or__3548__auto____12646;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12650 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12650 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12650 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____12664 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12664))
{return or__3548__auto____12664;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12667 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12667 > -1)))
{return cljs.core.subs.call(null,x,2,i__12667);
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
var map__12680 = cljs.core.ObjMap.fromObject([],{});
var ks__12681 = cljs.core.seq.call(null,keys);
var vs__12682 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12683 = ks__12681;

if(cljs.core.truth_(and__3546__auto____12683))
{return vs__12682;
} else
{return and__3546__auto____12683;
}
})()))
{{
var G__12690 = cljs.core.assoc.call(null,map__12680,cljs.core.first.call(null,ks__12681),cljs.core.first.call(null,vs__12682));
var G__12691 = cljs.core.next.call(null,ks__12681);
var G__12692 = cljs.core.next.call(null,vs__12682);
map__12680 = G__12690;
ks__12681 = G__12691;
vs__12682 = G__12692;
continue;
}
} else
{return map__12680;
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
var max_key__12703 = (function (k,x){
return x;
});
var max_key__12704 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__12705 = (function() { 
var G__12710__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12677_SHARP_,p2__12678_SHARP_){
return max_key.call(null,k,p1__12677_SHARP_,p2__12678_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12710 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12710__delegate.call(this, k, x, y, more);
};
G__12710.cljs$lang$maxFixedArity = 3;
G__12710.cljs$lang$applyTo = (function (arglist__12714){
var k = cljs.core.first(arglist__12714);
var x = cljs.core.first(cljs.core.next(arglist__12714));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12714)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12714)));
return G__12710__delegate.call(this, k, x, y, more);
});
return G__12710;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__12703.call(this,k,x);
case  3 :
return max_key__12704.call(this,k,x,y);
default:
return max_key__12705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__12705.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__12724 = (function (k,x){
return x;
});
var min_key__12725 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__12726 = (function() { 
var G__12729__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12700_SHARP_,p2__12701_SHARP_){
return min_key.call(null,k,p1__12700_SHARP_,p2__12701_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12729 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12729__delegate.call(this, k, x, y, more);
};
G__12729.cljs$lang$maxFixedArity = 3;
G__12729.cljs$lang$applyTo = (function (arglist__12730){
var k = cljs.core.first(arglist__12730);
var x = cljs.core.first(cljs.core.next(arglist__12730));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12730)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12730)));
return G__12729__delegate.call(this, k, x, y, more);
});
return G__12729;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__12724.call(this,k,x);
case  3 :
return min_key__12725.call(this,k,x,y);
default:
return min_key__12726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__12726.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__12792 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__12793 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12745 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12745))
{var s__12746 = temp__3698__auto____12745;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12746),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12746)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__12792.call(this,n,step);
case  3 :
return partition_all__12793.call(this,n,step,coll);
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
var temp__3698__auto____12803 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12803))
{var s__12805 = temp__3698__auto____12803;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12805))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12805),take_while.call(null,pred,cljs.core.rest.call(null,s__12805)));
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
var this__12819 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__12820 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12862 = null;
var G__12862__12863 = (function (rng,f){
var this__12821 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__12862__12864 = (function (rng,f,s){
var this__12822 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__12862 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__12862__12863.call(this,rng,f);
case  3 :
return G__12862__12864.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12862;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__12823 = this;
var comp__12824 = (cljs.core.truth_((this__12823.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__12824.call(null,this__12823.start,this__12823.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__12828 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__12828.end - this__12828.start) / this__12828.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__12829 = this;
return this__12829.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__12830 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__12830.meta,(this__12830.start + this__12830.step),this__12830.end,this__12830.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__12832 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__12834 = this;
return (new cljs.core.Range(meta,this__12834.start,this__12834.end,this__12834.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__12840 = this;
return this__12840.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12873 = null;
var G__12873__12874 = (function (rng,n){
var this__12842 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12842.start + (n * this__12842.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12845 = (this__12842.start > this__12842.end);

if(cljs.core.truth_(and__3546__auto____12845))
{return cljs.core._EQ_.call(null,this__12842.step,0);
} else
{return and__3546__auto____12845;
}
})()))
{return this__12842.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__12873__12875 = (function (rng,n,not_found){
var this__12848 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12848.start + (n * this__12848.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12851 = (this__12848.start > this__12848.end);

if(cljs.core.truth_(and__3546__auto____12851))
{return cljs.core._EQ_.call(null,this__12848.step,0);
} else
{return and__3546__auto____12851;
}
})()))
{return this__12848.start;
} else
{return not_found;
}
}
});
G__12873 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__12873__12874.call(this,rng,n);
case  3 :
return G__12873__12875.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12873;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__12854 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12854.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__12882 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__12883 = (function (end){
return range.call(null,0,end,1);
});
var range__12884 = (function (start,end){
return range.call(null,start,end,1);
});
var range__12885 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__12882.call(this);
case  1 :
return range__12883.call(this,start);
case  2 :
return range__12884.call(this,start,end);
case  3 :
return range__12885.call(this,start,end,step);
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
var temp__3698__auto____12891 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12891))
{var s__12892 = temp__3698__auto____12891;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12892),take_nth.call(null,n,cljs.core.drop.call(null,n,s__12892)));
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
var temp__3698__auto____12904 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12904))
{var s__12906 = temp__3698__auto____12904;

var fst__12907 = cljs.core.first.call(null,s__12906);
var fv__12909 = f.call(null,fst__12907);
var run__12910 = cljs.core.cons.call(null,fst__12907,cljs.core.take_while.call(null,(function (p1__12893_SHARP_){
return cljs.core._EQ_.call(null,fv__12909,f.call(null,p1__12893_SHARP_));
}),cljs.core.next.call(null,s__12906)));

return cljs.core.cons.call(null,run__12910,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__12910),s__12906))));
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
var reductions__12959 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12938 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12938))
{var s__12939 = temp__3695__auto____12938;

return reductions.call(null,f,cljs.core.first.call(null,s__12939),cljs.core.rest.call(null,s__12939));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__12960 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12950 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12950))
{var s__12951 = temp__3698__auto____12950;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__12951)),cljs.core.rest.call(null,s__12951));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__12959.call(this,f,init);
case  3 :
return reductions__12960.call(this,f,init,coll);
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
var juxt__12978 = (function (f){
return (function() {
var G__12984 = null;
var G__12984__12985 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__12984__12986 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__12984__12988 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__12984__12989 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__12984__12990 = (function() { 
var G__12997__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__12997 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12997__delegate.call(this, x, y, z, args);
};
G__12997.cljs$lang$maxFixedArity = 3;
G__12997.cljs$lang$applyTo = (function (arglist__13003){
var x = cljs.core.first(arglist__13003);
var y = cljs.core.first(cljs.core.next(arglist__13003));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13003)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13003)));
return G__12997__delegate.call(this, x, y, z, args);
});
return G__12997;
})()
;
G__12984 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__12984__12985.call(this);
case  1 :
return G__12984__12986.call(this,x);
case  2 :
return G__12984__12988.call(this,x,y);
case  3 :
return G__12984__12989.call(this,x,y,z);
default:
return G__12984__12990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__12984.cljs$lang$maxFixedArity = 3;
G__12984.cljs$lang$applyTo = G__12984__12990.cljs$lang$applyTo;
return G__12984;
})()
});
var juxt__12979 = (function (f,g){
return (function() {
var G__13008 = null;
var G__13008__13010 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13008__13011 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13008__13012 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13008__13014 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13008__13016 = (function() { 
var G__13222__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13222 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13222__delegate.call(this, x, y, z, args);
};
G__13222.cljs$lang$maxFixedArity = 3;
G__13222.cljs$lang$applyTo = (function (arglist__13230){
var x = cljs.core.first(arglist__13230);
var y = cljs.core.first(cljs.core.next(arglist__13230));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13230)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13230)));
return G__13222__delegate.call(this, x, y, z, args);
});
return G__13222;
})()
;
G__13008 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13008__13010.call(this);
case  1 :
return G__13008__13011.call(this,x);
case  2 :
return G__13008__13012.call(this,x,y);
case  3 :
return G__13008__13014.call(this,x,y,z);
default:
return G__13008__13016.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13008.cljs$lang$maxFixedArity = 3;
G__13008.cljs$lang$applyTo = G__13008__13016.cljs$lang$applyTo;
return G__13008;
})()
});
var juxt__12980 = (function (f,g,h){
return (function() {
var G__13235 = null;
var G__13235__13236 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13235__13237 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13235__13238 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13235__13239 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13235__13240 = (function() { 
var G__13250__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13250 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13250__delegate.call(this, x, y, z, args);
};
G__13250.cljs$lang$maxFixedArity = 3;
G__13250.cljs$lang$applyTo = (function (arglist__13252){
var x = cljs.core.first(arglist__13252);
var y = cljs.core.first(cljs.core.next(arglist__13252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13252)));
return G__13250__delegate.call(this, x, y, z, args);
});
return G__13250;
})()
;
G__13235 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13235__13236.call(this);
case  1 :
return G__13235__13237.call(this,x);
case  2 :
return G__13235__13238.call(this,x,y);
case  3 :
return G__13235__13239.call(this,x,y,z);
default:
return G__13235__13240.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13235.cljs$lang$maxFixedArity = 3;
G__13235.cljs$lang$applyTo = G__13235__13240.cljs$lang$applyTo;
return G__13235;
})()
});
var juxt__12981 = (function() { 
var G__13257__delegate = function (f,g,h,fs){
var fs__12974 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13261 = null;
var G__13261__13262 = (function (){
return cljs.core.reduce.call(null,(function (p1__12928_SHARP_,p2__12929_SHARP_){
return cljs.core.conj.call(null,p1__12928_SHARP_,p2__12929_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__12974);
});
var G__13261__13263 = (function (x){
return cljs.core.reduce.call(null,(function (p1__12930_SHARP_,p2__12931_SHARP_){
return cljs.core.conj.call(null,p1__12930_SHARP_,p2__12931_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__12974);
});
var G__13261__13264 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__12932_SHARP_,p2__12933_SHARP_){
return cljs.core.conj.call(null,p1__12932_SHARP_,p2__12933_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__12974);
});
var G__13261__13265 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__12934_SHARP_,p2__12935_SHARP_){
return cljs.core.conj.call(null,p1__12934_SHARP_,p2__12935_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__12974);
});
var G__13261__13266 = (function() { 
var G__13270__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__12936_SHARP_,p2__12937_SHARP_){
return cljs.core.conj.call(null,p1__12936_SHARP_,cljs.core.apply.call(null,p2__12937_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__12974);
};
var G__13270 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13270__delegate.call(this, x, y, z, args);
};
G__13270.cljs$lang$maxFixedArity = 3;
G__13270.cljs$lang$applyTo = (function (arglist__13279){
var x = cljs.core.first(arglist__13279);
var y = cljs.core.first(cljs.core.next(arglist__13279));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13279)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13279)));
return G__13270__delegate.call(this, x, y, z, args);
});
return G__13270;
})()
;
G__13261 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13261__13262.call(this);
case  1 :
return G__13261__13263.call(this,x);
case  2 :
return G__13261__13264.call(this,x,y);
case  3 :
return G__13261__13265.call(this,x,y,z);
default:
return G__13261__13266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13261.cljs$lang$maxFixedArity = 3;
G__13261.cljs$lang$applyTo = G__13261__13266.cljs$lang$applyTo;
return G__13261;
})()
};
var G__13257 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13257__delegate.call(this, f, g, h, fs);
};
G__13257.cljs$lang$maxFixedArity = 3;
G__13257.cljs$lang$applyTo = (function (arglist__13280){
var f = cljs.core.first(arglist__13280);
var g = cljs.core.first(cljs.core.next(arglist__13280));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13280)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13280)));
return G__13257__delegate.call(this, f, g, h, fs);
});
return G__13257;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__12978.call(this,f);
case  2 :
return juxt__12979.call(this,f,g);
case  3 :
return juxt__12980.call(this,f,g,h);
default:
return juxt__12981.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__12981.cljs$lang$applyTo;
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
var dorun__13285 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13288 = cljs.core.next.call(null,coll);
coll = G__13288;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13286 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13283 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13283))
{return (n > 0);
} else
{return and__3546__auto____13283;
}
})()))
{{
var G__13289 = (n - 1);
var G__13290 = cljs.core.next.call(null,coll);
n = G__13289;
coll = G__13290;
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
return dorun__13285.call(this,n);
case  2 :
return dorun__13286.call(this,n,coll);
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
var doall__13292 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13293 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13292.call(this,n);
case  2 :
return doall__13293.call(this,n,coll);
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
var matches__13295 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13295),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13295),1)))
{return cljs.core.first.call(null,matches__13295);
} else
{return cljs.core.vec.call(null,matches__13295);
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
var matches__13298 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13298)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13298),1)))
{return cljs.core.first.call(null,matches__13298);
} else
{return cljs.core.vec.call(null,matches__13298);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13300 = cljs.core.re_find.call(null,re,s);
var match_idx__13301 = s.search(re);
var match_str__13302 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13300))?cljs.core.first.call(null,match_data__13300):match_data__13300);
var post_match__13303 = cljs.core.subs.call(null,s,(match_idx__13301 + cljs.core.count.call(null,match_str__13302)));

if(cljs.core.truth_(match_data__13300))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13300,re_seq.call(null,re,post_match__13303));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13308_SHARP_){
return print_one.call(null,p1__13308_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13355 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13355))
{var and__3546__auto____13367 = (function (){var x__445__auto____13356 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13357 = x__445__auto____13356;

if(cljs.core.truth_(and__3546__auto____13357))
{var and__3546__auto____13362 = x__445__auto____13356.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13362))
{return cljs.core.not.call(null,x__445__auto____13356.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13362;
}
} else
{return and__3546__auto____13357;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13356);
}
})();

if(cljs.core.truth_(and__3546__auto____13367))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13367;
}
} else
{return and__3546__auto____13355;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13369 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13370 = x__445__auto____13369;

if(cljs.core.truth_(and__3546__auto____13370))
{var and__3546__auto____13371 = x__445__auto____13369.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13371))
{return cljs.core.not.call(null,x__445__auto____13369.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13371;
}
} else
{return and__3546__auto____13370;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13369);
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
var first_obj__13384 = cljs.core.first.call(null,objs);
var sb__13385 = (new goog.string.StringBuffer());

var G__13386__13387 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13386__13387))
{var obj__13390 = cljs.core.first.call(null,G__13386__13387);
var G__13386__13391 = G__13386__13387;

while(true){
if(cljs.core.truth_((obj__13390 === first_obj__13384)))
{} else
{sb__13385.append(" ");
}
var G__13392__13393 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13390,opts));

if(cljs.core.truth_(G__13392__13393))
{var string__13397 = cljs.core.first.call(null,G__13392__13393);
var G__13392__13398 = G__13392__13393;

while(true){
sb__13385.append(string__13397);
var temp__3698__auto____13400 = cljs.core.next.call(null,G__13392__13398);

if(cljs.core.truth_(temp__3698__auto____13400))
{var G__13392__13402 = temp__3698__auto____13400;

{
var G__13420 = cljs.core.first.call(null,G__13392__13402);
var G__13421 = G__13392__13402;
string__13397 = G__13420;
G__13392__13398 = G__13421;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13407 = cljs.core.next.call(null,G__13386__13391);

if(cljs.core.truth_(temp__3698__auto____13407))
{var G__13386__13409 = temp__3698__auto____13407;

{
var G__13423 = cljs.core.first.call(null,G__13386__13409);
var G__13424 = G__13386__13409;
obj__13390 = G__13423;
G__13386__13391 = G__13424;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13385);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13427 = cljs.core.first.call(null,objs);

var G__13428__13429 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13428__13429))
{var obj__13430 = cljs.core.first.call(null,G__13428__13429);
var G__13428__13431 = G__13428__13429;

while(true){
if(cljs.core.truth_((obj__13430 === first_obj__13427)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13432__13433 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13430,opts));

if(cljs.core.truth_(G__13432__13433))
{var string__13434 = cljs.core.first.call(null,G__13432__13433);
var G__13432__13436 = G__13432__13433;

while(true){
cljs.core.string_print.call(null,string__13434);
var temp__3698__auto____13441 = cljs.core.next.call(null,G__13432__13436);

if(cljs.core.truth_(temp__3698__auto____13441))
{var G__13432__13445 = temp__3698__auto____13441;

{
var G__13458 = cljs.core.first.call(null,G__13432__13445);
var G__13459 = G__13432__13445;
string__13434 = G__13458;
G__13432__13436 = G__13459;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13448 = cljs.core.next.call(null,G__13428__13431);

if(cljs.core.truth_(temp__3698__auto____13448))
{var G__13428__13450 = temp__3698__auto____13448;

{
var G__13460 = cljs.core.first.call(null,G__13428__13450);
var G__13461 = G__13428__13450;
obj__13430 = G__13460;
G__13428__13431 = G__13461;
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
pr_str.cljs$lang$applyTo = (function (arglist__13485){
var objs = cljs.core.seq( arglist__13485 );;
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
pr.cljs$lang$applyTo = (function (arglist__13489){
var objs = cljs.core.seq( arglist__13489 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13494){
var objs = cljs.core.seq( arglist__13494 );;
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
println.cljs$lang$applyTo = (function (arglist__13499){
var objs = cljs.core.seq( arglist__13499 );;
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
prn.cljs$lang$applyTo = (function (arglist__13502){
var objs = cljs.core.seq( arglist__13502 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13504 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13504,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____13576 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13576))
{var nspc__13577 = temp__3698__auto____13576;

return cljs.core.str.call(null,nspc__13577,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____13578 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13578))
{var nspc__13579 = temp__3698__auto____13578;

return cljs.core.str.call(null,nspc__13579,"/");
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
var pr_pair__13594 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13594,"{",", ","}",opts,coll);
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
var this__13623 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__13624 = this;
var G__13625__13626 = cljs.core.seq.call(null,this__13624.watches);

if(cljs.core.truth_(G__13625__13626))
{var G__13629__13631 = cljs.core.first.call(null,G__13625__13626);
var vec__13630__13632 = G__13629__13631;
var key__13633 = cljs.core.nth.call(null,vec__13630__13632,0,null);
var f__13635 = cljs.core.nth.call(null,vec__13630__13632,1,null);
var G__13625__13636 = G__13625__13626;

var G__13629__13637 = G__13629__13631;
var G__13625__13638 = G__13625__13636;

while(true){
var vec__13639__13640 = G__13629__13637;
var key__13641 = cljs.core.nth.call(null,vec__13639__13640,0,null);
var f__13642 = cljs.core.nth.call(null,vec__13639__13640,1,null);
var G__13625__13643 = G__13625__13638;

f__13642.call(null,key__13641,this$,oldval,newval);
var temp__3698__auto____13644 = cljs.core.next.call(null,G__13625__13643);

if(cljs.core.truth_(temp__3698__auto____13644))
{var G__13625__13646 = temp__3698__auto____13644;

{
var G__13659 = cljs.core.first.call(null,G__13625__13646);
var G__13660 = G__13625__13646;
G__13629__13637 = G__13659;
G__13625__13638 = G__13660;
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
var this__13647 = this;
return this$.watches = cljs.core.assoc.call(null,this__13647.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__13648 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13648.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__13649 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__13649.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__13651 = this;
return this__13651.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13652 = this;
return this__13652.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__13653 = this;
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
var atom__13669 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__13670 = (function() { 
var G__13672__delegate = function (x,p__13662){
var map__13664__13665 = p__13662;
var map__13664__13666 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13664__13665))?cljs.core.apply.call(null,cljs.core.hash_map,map__13664__13665):map__13664__13665);
var validator__13667 = cljs.core.get.call(null,map__13664__13666,"﷐'validator");
var meta__13668 = cljs.core.get.call(null,map__13664__13666,"﷐'meta");

return (new cljs.core.Atom(x,meta__13668,validator__13667,null));
};
var G__13672 = function (x,var_args){
var p__13662 = null;
if (goog.isDef(var_args)) {
  p__13662 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13672__delegate.call(this, x, p__13662);
};
G__13672.cljs$lang$maxFixedArity = 1;
G__13672.cljs$lang$applyTo = (function (arglist__13738){
var x = cljs.core.first(arglist__13738);
var p__13662 = cljs.core.rest(arglist__13738);
return G__13672__delegate.call(this, x, p__13662);
});
return G__13672;
})()
;
atom = function(x,var_args){
var p__13662 = var_args;
switch(arguments.length){
case  1 :
return atom__13669.call(this,x);
default:
return atom__13670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__13670.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____13742 = a.validator;

if(cljs.core.truth_(temp__3698__auto____13742))
{var validate__13743 = temp__3698__auto____13742;

if(cljs.core.truth_(validate__13743.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__13744 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13744,new_value);
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
var swap_BANG___13786 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___13787 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___13788 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___13789 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___13791 = (function() { 
var G__13808__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13808 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13808__delegate.call(this, a, f, x, y, z, more);
};
G__13808.cljs$lang$maxFixedArity = 5;
G__13808.cljs$lang$applyTo = (function (arglist__13810){
var a = cljs.core.first(arglist__13810);
var f = cljs.core.first(cljs.core.next(arglist__13810));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13810)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13810))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13810)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13810)))));
return G__13808__delegate.call(this, a, f, x, y, z, more);
});
return G__13808;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___13786.call(this,a,f);
case  3 :
return swap_BANG___13787.call(this,a,f,x);
case  4 :
return swap_BANG___13788.call(this,a,f,x,y);
case  5 :
return swap_BANG___13789.call(this,a,f,x,y,z);
default:
return swap_BANG___13791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___13791.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13835){
var iref = cljs.core.first(arglist__13835);
var f = cljs.core.first(cljs.core.next(arglist__13835));
var args = cljs.core.rest(cljs.core.next(arglist__13835));
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
var gensym__13856 = (function (){
return gensym.call(null,"G__");
});
var gensym__13857 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__13856.call(this);
case  1 :
return gensym__13857.call(this,prefix_string);
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
var this__13907 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__13907.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13908 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__13908.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__13908.state,this__13908.f);
}
return cljs.core.deref.call(null,this__13908.state);
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
delay.cljs$lang$applyTo = (function (arglist__13915){
var body = cljs.core.seq( arglist__13915 );;
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
var map__13926__13927 = options;
var map__13926__13928 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13926__13927))?cljs.core.apply.call(null,cljs.core.hash_map,map__13926__13927):map__13926__13927);
var keywordize_keys__13929 = cljs.core.get.call(null,map__13926__13928,"﷐'keywordize-keys");
var keyfn__13930 = (cljs.core.truth_(keywordize_keys__13929)?cljs.core.keyword:cljs.core.str);
var f__13943 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____13942 = (function iter__13932(s__13933){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13933__13936 = s__13933;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13933__13936)))
{var k__13938 = cljs.core.first.call(null,s__13933__13936);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__13930.call(null,k__13938),thisfn.call(null,(x[k__13938]))]),iter__13932.call(null,cljs.core.rest.call(null,s__13933__13936)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____13942.call(null,cljs.core.js_keys.call(null,x));
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

return f__13943.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__13957){
var x = cljs.core.first(arglist__13957);
var options = cljs.core.rest(arglist__13957);
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
var mem__13959 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__13971__delegate = function (args){
var temp__3695__auto____13960 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__13959),args);

if(cljs.core.truth_(temp__3695__auto____13960))
{var v__13964 = temp__3695__auto____13960;

return v__13964;
} else
{var ret__13965 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__13959,cljs.core.assoc,args,ret__13965);
return ret__13965;
}
};
var G__13971 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__13971__delegate.call(this, args);
};
G__13971.cljs$lang$maxFixedArity = 0;
G__13971.cljs$lang$applyTo = (function (arglist__13973){
var args = cljs.core.seq( arglist__13973 );;
return G__13971__delegate.call(this, args);
});
return G__13971;
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
var trampoline__13983 = (function (f){
while(true){
var ret__13976 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__13976)))
{{
var G__13986 = ret__13976;
f = G__13986;
continue;
}
} else
{return ret__13976;
}
break;
}
});
var trampoline__13984 = (function() { 
var G__13991__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__13991 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13991__delegate.call(this, f, args);
};
G__13991.cljs$lang$maxFixedArity = 1;
G__13991.cljs$lang$applyTo = (function (arglist__13994){
var f = cljs.core.first(arglist__13994);
var args = cljs.core.rest(arglist__13994);
return G__13991__delegate.call(this, f, args);
});
return G__13991;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__13983.call(this,f);
default:
return trampoline__13984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__13984.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14000 = (function (){
return rand.call(null,1);
});
var rand__14001 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14000.call(this);
case  1 :
return rand__14001.call(this,n);
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
var k__14016 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14016,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14016,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14043 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14044 = (function (h,child,parent){
var or__3548__auto____14022 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14022))
{return or__3548__auto____14022;
} else
{var or__3548__auto____14024 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14024))
{return or__3548__auto____14024;
} else
{var and__3546__auto____14027 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14027))
{var and__3546__auto____14029 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14029))
{var and__3546__auto____14031 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14031))
{var ret__14034 = true;
var i__14035 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14038 = cljs.core.not.call(null,ret__14034);

if(cljs.core.truth_(or__3548__auto____14038))
{return or__3548__auto____14038;
} else
{return cljs.core._EQ_.call(null,i__14035,cljs.core.count.call(null,parent));
}
})()))
{return ret__14034;
} else
{{
var G__14053 = isa_QMARK_.call(null,h,child.call(null,i__14035),parent.call(null,i__14035));
var G__14054 = (i__14035 + 1);
ret__14034 = G__14053;
i__14035 = G__14054;
continue;
}
}
break;
}
} else
{return and__3546__auto____14031;
}
} else
{return and__3546__auto____14029;
}
} else
{return and__3546__auto____14027;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14043.call(this,h,child);
case  3 :
return isa_QMARK___14044.call(this,h,child,parent);
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
var parents__14057 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14058 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14057.call(this,h);
case  2 :
return parents__14058.call(this,h,tag);
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
var ancestors__14067 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14068 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14067.call(this,h);
case  2 :
return ancestors__14068.call(this,h,tag);
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
var descendants__14163 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14164 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14163.call(this,h);
case  2 :
return descendants__14164.call(this,h,tag);
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
var derive__14186 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14187 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14172 = "﷐'parents".call(null,h);
var td__14173 = "﷐'descendants".call(null,h);
var ta__14175 = "﷐'ancestors".call(null,h);
var tf__14177 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14180 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14172.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14175.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14175.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14172,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14177.call(null,"﷐'ancestors".call(null,h),tag,td__14173,parent,ta__14175),"﷐'descendants":tf__14177.call(null,"﷐'descendants".call(null,h),parent,ta__14175,tag,td__14173)});
})());

if(cljs.core.truth_(or__3548__auto____14180))
{return or__3548__auto____14180;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14186.call(this,h,tag);
case  3 :
return derive__14187.call(this,h,tag,parent);
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
var underive__14208 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14209 = (function (h,tag,parent){
var parentMap__14195 = "﷐'parents".call(null,h);
var childsParents__14196 = (cljs.core.truth_(parentMap__14195.call(null,tag))?cljs.core.disj.call(null,parentMap__14195.call(null,tag),parent):cljs.core.set([]));
var newParents__14197 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14196))?cljs.core.assoc.call(null,parentMap__14195,tag,childsParents__14196):cljs.core.dissoc.call(null,parentMap__14195,tag));
var deriv_seq__14201 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14166_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14166_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14166_SHARP_),cljs.core.second.call(null,p1__14166_SHARP_)));
}),cljs.core.seq.call(null,newParents__14197)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14195.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14170_SHARP_,p2__14171_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14170_SHARP_,p2__14171_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14201));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14208.call(this,h,tag);
case  3 :
return underive__14209.call(this,h,tag,parent);
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
var xprefs__14221 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14223 = (cljs.core.truth_((function (){var and__3546__auto____14222 = xprefs__14221;

if(cljs.core.truth_(and__3546__auto____14222))
{return xprefs__14221.call(null,y);
} else
{return and__3546__auto____14222;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14223))
{return or__3548__auto____14223;
} else
{var or__3548__auto____14232 = (function (){var ps__14226 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14226) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14226),prefer_table)))
{} else
{}
{
var G__14341 = cljs.core.rest.call(null,ps__14226);
ps__14226 = G__14341;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14232))
{return or__3548__auto____14232;
} else
{var or__3548__auto____14237 = (function (){var ps__14234 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14234) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14234),y,prefer_table)))
{} else
{}
{
var G__14343 = cljs.core.rest.call(null,ps__14234);
ps__14234 = G__14343;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14237))
{return or__3548__auto____14237;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14349 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14349))
{return or__3548__auto____14349;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14441 = cljs.core.reduce.call(null,(function (be,p__14431){
var vec__14432__14433 = p__14431;
var k__14434 = cljs.core.nth.call(null,vec__14432__14433,0,null);
var ___14435 = cljs.core.nth.call(null,vec__14432__14433,1,null);
var e__14437 = vec__14432__14433;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14434)))
{var be2__14440 = (cljs.core.truth_((function (){var or__3548__auto____14439 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____14439))
{return or__3548__auto____14439;
} else
{return cljs.core.dominates.call(null,k__14434,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14437:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14440),k__14434,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14434," and ",cljs.core.first.call(null,be2__14440),", and neither is preferred")));
}
return be2__14440;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__14441))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14441));
return cljs.core.second.call(null,best_entry__14441);
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
if(cljs.core.truth_((function (){var and__3546__auto____14446 = mf;

if(cljs.core.truth_(and__3546__auto____14446))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____14446;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____14447 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14447))
{return or__3548__auto____14447;
} else
{var or__3548__auto____14448 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____14448))
{return or__3548__auto____14448;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____14450 = mf;

if(cljs.core.truth_(and__3546__auto____14450))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____14450;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____14452 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14452))
{return or__3548__auto____14452;
} else
{var or__3548__auto____14455 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____14455))
{return or__3548__auto____14455;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14457 = mf;

if(cljs.core.truth_(and__3546__auto____14457))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____14457;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14459 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14459))
{return or__3548__auto____14459;
} else
{var or__3548__auto____14461 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____14461))
{return or__3548__auto____14461;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____14464 = mf;

if(cljs.core.truth_(and__3546__auto____14464))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____14464;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____14465 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14465))
{return or__3548__auto____14465;
} else
{var or__3548__auto____14467 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____14467))
{return or__3548__auto____14467;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14470 = mf;

if(cljs.core.truth_(and__3546__auto____14470))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____14470;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14473 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14473))
{return or__3548__auto____14473;
} else
{var or__3548__auto____14474 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____14474))
{return or__3548__auto____14474;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14481 = mf;

if(cljs.core.truth_(and__3546__auto____14481))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____14481;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____14484 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14484))
{return or__3548__auto____14484;
} else
{var or__3548__auto____14485 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____14485))
{return or__3548__auto____14485;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14487 = mf;

if(cljs.core.truth_(and__3546__auto____14487))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____14487;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____14490 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14490))
{return or__3548__auto____14490;
} else
{var or__3548__auto____14491 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____14491))
{return or__3548__auto____14491;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____14493 = mf;

if(cljs.core.truth_(and__3546__auto____14493))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____14493;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____14495 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14495))
{return or__3548__auto____14495;
} else
{var or__3548__auto____14496 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____14496))
{return or__3548__auto____14496;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14546 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14547 = cljs.core._get_method.call(null,mf,dispatch_val__14546);

if(cljs.core.truth_(target_fn__14547))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__14546)));
}
return cljs.core.apply.call(null,target_fn__14547,args);
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
var this__14550 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__14551 = this;
cljs.core.swap_BANG_.call(null,this__14551.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14551.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14551.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14551.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__14552 = this;
cljs.core.swap_BANG_.call(null,this__14552.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14552.method_cache,this__14552.method_table,this__14552.cached_hierarchy,this__14552.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__14553 = this;
cljs.core.swap_BANG_.call(null,this__14553.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14553.method_cache,this__14553.method_table,this__14553.cached_hierarchy,this__14553.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__14554 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14554.cached_hierarchy),cljs.core.deref.call(null,this__14554.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__14554.method_cache,this__14554.method_table,this__14554.cached_hierarchy,this__14554.hierarchy);
}
var temp__3695__auto____14555 = cljs.core.deref.call(null,this__14554.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____14555))
{var target_fn__14556 = temp__3695__auto____14555;

return target_fn__14556;
} else
{var temp__3695__auto____14557 = cljs.core.find_and_cache_best_method.call(null,this__14554.name,dispatch_val,this__14554.hierarchy,this__14554.method_table,this__14554.prefer_table,this__14554.method_cache,this__14554.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____14557))
{var target_fn__14558 = temp__3695__auto____14557;

return target_fn__14558;
} else
{return cljs.core.deref.call(null,this__14554.method_table).call(null,this__14554.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14561 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14561.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__14561.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__14561.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14561.method_cache,this__14561.method_table,this__14561.cached_hierarchy,this__14561.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__14563 = this;
return cljs.core.deref.call(null,this__14563.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__14566 = this;
return cljs.core.deref.call(null,this__14566.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__14569 = this;
return cljs.core.do_dispatch.call(null,mf,this__14569.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14585__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__14585 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14585__delegate.call(this, _, args);
};
G__14585.cljs$lang$maxFixedArity = 1;
G__14585.cljs$lang$applyTo = (function (arglist__14589){
var _ = cljs.core.first(arglist__14589);
var args = cljs.core.rest(arglist__14589);
return G__14585__delegate.call(this, _, args);
});
return G__14585;
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
