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
var or__3548__auto____6354 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____6354))
{return or__3548__auto____6354;
} else
{var or__3548__auto____6355 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____6355))
{return or__3548__auto____6355;
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
var _invoke__6763 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____6387 = this$;

if(cljs.core.truth_(and__3546__auto____6387))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6387;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____6392 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6392))
{return or__3548__auto____6392;
} else
{var or__3548__auto____6395 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6395))
{return or__3548__auto____6395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__6764 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____6397 = this$;

if(cljs.core.truth_(and__3546__auto____6397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____6404 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6404))
{return or__3548__auto____6404;
} else
{var or__3548__auto____6407 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6407))
{return or__3548__auto____6407;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__6765 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____6409 = this$;

if(cljs.core.truth_(and__3546__auto____6409))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6409;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____6413 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6413))
{return or__3548__auto____6413;
} else
{var or__3548__auto____6415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6415))
{return or__3548__auto____6415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__6766 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____6418 = this$;

if(cljs.core.truth_(and__3546__auto____6418))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6418;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____6421 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6421))
{return or__3548__auto____6421;
} else
{var or__3548__auto____6453 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6453))
{return or__3548__auto____6453;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__6767 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____6489 = this$;

if(cljs.core.truth_(and__3546__auto____6489))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6489;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____6493 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6493))
{return or__3548__auto____6493;
} else
{var or__3548__auto____6496 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6496))
{return or__3548__auto____6496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__6768 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____6500 = this$;

if(cljs.core.truth_(and__3546__auto____6500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____6503 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6503))
{return or__3548__auto____6503;
} else
{var or__3548__auto____6508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6508))
{return or__3548__auto____6508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__6769 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____6511 = this$;

if(cljs.core.truth_(and__3546__auto____6511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____6515 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6515))
{return or__3548__auto____6515;
} else
{var or__3548__auto____6519 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6519))
{return or__3548__auto____6519;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__6770 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____6523 = this$;

if(cljs.core.truth_(and__3546__auto____6523))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6523;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____6586 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6586))
{return or__3548__auto____6586;
} else
{var or__3548__auto____6588 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6588))
{return or__3548__auto____6588;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__6771 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____6589 = this$;

if(cljs.core.truth_(and__3546__auto____6589))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6589;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____6620 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6620))
{return or__3548__auto____6620;
} else
{var or__3548__auto____6635 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6635))
{return or__3548__auto____6635;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__6772 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____6636 = this$;

if(cljs.core.truth_(and__3546__auto____6636))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6636;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____6637 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6637))
{return or__3548__auto____6637;
} else
{var or__3548__auto____6639 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6639))
{return or__3548__auto____6639;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__6773 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____6641 = this$;

if(cljs.core.truth_(and__3546__auto____6641))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6641;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____6643 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6643))
{return or__3548__auto____6643;
} else
{var or__3548__auto____6645 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6645))
{return or__3548__auto____6645;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__6774 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____6647 = this$;

if(cljs.core.truth_(and__3546__auto____6647))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6647;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____6649 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6649))
{return or__3548__auto____6649;
} else
{var or__3548__auto____6651 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6651))
{return or__3548__auto____6651;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__6775 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____6653 = this$;

if(cljs.core.truth_(and__3546__auto____6653))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6653;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____6655 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6655))
{return or__3548__auto____6655;
} else
{var or__3548__auto____6656 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6656))
{return or__3548__auto____6656;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__6776 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____6659 = this$;

if(cljs.core.truth_(and__3546__auto____6659))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6659;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____6661 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6661))
{return or__3548__auto____6661;
} else
{var or__3548__auto____6662 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6662))
{return or__3548__auto____6662;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__6777 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____6667 = this$;

if(cljs.core.truth_(and__3546__auto____6667))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6667;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____6669 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6669))
{return or__3548__auto____6669;
} else
{var or__3548__auto____6671 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6671))
{return or__3548__auto____6671;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__6778 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____6673 = this$;

if(cljs.core.truth_(and__3546__auto____6673))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6673;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____6675 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6675))
{return or__3548__auto____6675;
} else
{var or__3548__auto____6677 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6677))
{return or__3548__auto____6677;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__6779 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____6679 = this$;

if(cljs.core.truth_(and__3546__auto____6679))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6679;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____6680 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6680))
{return or__3548__auto____6680;
} else
{var or__3548__auto____6682 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6682))
{return or__3548__auto____6682;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__6780 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____6684 = this$;

if(cljs.core.truth_(and__3546__auto____6684))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6684;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__6781 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____6690 = this$;

if(cljs.core.truth_(and__3546__auto____6690))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6690;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__6782 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____6699 = this$;

if(cljs.core.truth_(and__3546__auto____6699))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6699;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__6783 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____6724 = this$;

if(cljs.core.truth_(and__3546__auto____6724))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____6724;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____6732 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____6732))
{return or__3548__auto____6732;
} else
{var or__3548__auto____6734 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____6734))
{return or__3548__auto____6734;
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
return _invoke__6763.call(this,this$);
case  2 :
return _invoke__6764.call(this,this$,a);
case  3 :
return _invoke__6765.call(this,this$,a,b);
case  4 :
return _invoke__6766.call(this,this$,a,b,c);
case  5 :
return _invoke__6767.call(this,this$,a,b,c,d);
case  6 :
return _invoke__6768.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__6769.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__6770.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__6771.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__6772.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__6773.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__6774.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__6775.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__6776.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__6777.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__6778.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__6779.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__6780.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__6781.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__6782.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__6783.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6866 = coll;

if(cljs.core.truth_(and__3546__auto____6866))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____6866;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____6877 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6877))
{return or__3548__auto____6877;
} else
{var or__3548__auto____6879 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____6879))
{return or__3548__auto____6879;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6885 = coll;

if(cljs.core.truth_(and__3546__auto____6885))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____6885;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____6887 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6887))
{return or__3548__auto____6887;
} else
{var or__3548__auto____6890 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____6890))
{return or__3548__auto____6890;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____6900 = coll;

if(cljs.core.truth_(and__3546__auto____6900))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____6900;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____6903 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6903))
{return or__3548__auto____6903;
} else
{var or__3548__auto____6906 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____6906))
{return or__3548__auto____6906;
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
var _nth__6943 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____6928 = coll;

if(cljs.core.truth_(and__3546__auto____6928))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6928;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____6932 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6932))
{return or__3548__auto____6932;
} else
{var or__3548__auto____6935 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6935))
{return or__3548__auto____6935;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__6944 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6937 = coll;

if(cljs.core.truth_(and__3546__auto____6937))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____6937;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____6939 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6939))
{return or__3548__auto____6939;
} else
{var or__3548__auto____6940 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____6940))
{return or__3548__auto____6940;
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
return _nth__6943.call(this,coll,n);
case  3 :
return _nth__6944.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6959 = coll;

if(cljs.core.truth_(and__3546__auto____6959))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____6959;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____6964 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6964))
{return or__3548__auto____6964;
} else
{var or__3548__auto____6966 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____6966))
{return or__3548__auto____6966;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____6971 = coll;

if(cljs.core.truth_(and__3546__auto____6971))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____6971;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____6976 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____6976))
{return or__3548__auto____6976;
} else
{var or__3548__auto____6978 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____6978))
{return or__3548__auto____6978;
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
var _lookup__7000 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____6986 = o;

if(cljs.core.truth_(and__3546__auto____6986))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6986;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____6990 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6990))
{return or__3548__auto____6990;
} else
{var or__3548__auto____6991 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6991))
{return or__3548__auto____6991;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7001 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____6993 = o;

if(cljs.core.truth_(and__3546__auto____6993))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____6993;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____6995 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____6995))
{return or__3548__auto____6995;
} else
{var or__3548__auto____6997 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____6997))
{return or__3548__auto____6997;
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
return _lookup__7000.call(this,o,k);
case  3 :
return _lookup__7001.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7016 = coll;

if(cljs.core.truth_(and__3546__auto____7016))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7016;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7017 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7017))
{return or__3548__auto____7017;
} else
{var or__3548__auto____7018 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7018))
{return or__3548__auto____7018;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7020 = coll;

if(cljs.core.truth_(and__3546__auto____7020))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7020;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7024 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7024))
{return or__3548__auto____7024;
} else
{var or__3548__auto____7026 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7026))
{return or__3548__auto____7026;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7040 = coll;

if(cljs.core.truth_(and__3546__auto____7040))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7040;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7057 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7057))
{return or__3548__auto____7057;
} else
{var or__3548__auto____7058 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7058))
{return or__3548__auto____7058;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7066 = coll;

if(cljs.core.truth_(and__3546__auto____7066))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7066;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7068 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7068))
{return or__3548__auto____7068;
} else
{var or__3548__auto____7070 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7070))
{return or__3548__auto____7070;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7080 = coll;

if(cljs.core.truth_(and__3546__auto____7080))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7080;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7082 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7082))
{return or__3548__auto____7082;
} else
{var or__3548__auto____7083 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7083))
{return or__3548__auto____7083;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7088 = coll;

if(cljs.core.truth_(and__3546__auto____7088))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7088;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7096 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7096))
{return or__3548__auto____7096;
} else
{var or__3548__auto____7097 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7097))
{return or__3548__auto____7097;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7103 = coll;

if(cljs.core.truth_(and__3546__auto____7103))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7103;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7179 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7179))
{return or__3548__auto____7179;
} else
{var or__3548__auto____7181 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7181))
{return or__3548__auto____7181;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7186 = o;

if(cljs.core.truth_(and__3546__auto____7186))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7186;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7188 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7188))
{return or__3548__auto____7188;
} else
{var or__3548__auto____7189 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7189))
{return or__3548__auto____7189;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7193 = o;

if(cljs.core.truth_(and__3546__auto____7193))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7193;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7194 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7194))
{return or__3548__auto____7194;
} else
{var or__3548__auto____7195 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7195))
{return or__3548__auto____7195;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7199 = o;

if(cljs.core.truth_(and__3546__auto____7199))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7199;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7200 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7200))
{return or__3548__auto____7200;
} else
{var or__3548__auto____7201 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7201))
{return or__3548__auto____7201;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7205 = o;

if(cljs.core.truth_(and__3546__auto____7205))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7205;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7206 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7206))
{return or__3548__auto____7206;
} else
{var or__3548__auto____7208 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7208))
{return or__3548__auto____7208;
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
var _reduce__7266 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7212 = coll;

if(cljs.core.truth_(and__3546__auto____7212))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7212;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
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
})().call(null,coll,f);
}
});
var _reduce__7267 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7259 = coll;

if(cljs.core.truth_(and__3546__auto____7259))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7259;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7260 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
} else
{var or__3548__auto____7261 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7261))
{return or__3548__auto____7261;
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
return _reduce__7266.call(this,coll,f);
case  3 :
return _reduce__7267.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7273 = o;

if(cljs.core.truth_(and__3546__auto____7273))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7273;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7274 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7274))
{return or__3548__auto____7274;
} else
{var or__3548__auto____7275 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7280 = o;

if(cljs.core.truth_(and__3546__auto____7280))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7280;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7281 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{var or__3548__auto____7282 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7283 = o;

if(cljs.core.truth_(and__3546__auto____7283))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7283;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7284 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7284))
{return or__3548__auto____7284;
} else
{var or__3548__auto____7285 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
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
if(cljs.core.truth_((function (){var and__3546__auto____7286 = o;

if(cljs.core.truth_(and__3546__auto____7286))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7286;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7287 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7287))
{return or__3548__auto____7287;
} else
{var or__3548__auto____7288 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7290 = d;

if(cljs.core.truth_(and__3546__auto____7290))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7290;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7292 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7292))
{return or__3548__auto____7292;
} else
{var or__3548__auto____7294 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7295 = this$;

if(cljs.core.truth_(and__3546__auto____7295))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7295;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7296 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{var or__3548__auto____7297 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7298 = this$;

if(cljs.core.truth_(and__3546__auto____7298))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7298;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7299 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{var or__3548__auto____7300 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = this$;

if(cljs.core.truth_(and__3546__auto____7301))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____7301;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____7302 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7302))
{return or__3548__auto____7302;
} else
{var or__3548__auto____7303 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
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
var G__7429 = null;
var G__7429__7430 = (function (o,k){
return null;
});
var G__7429__7431 = (function (o,k,not_found){
return not_found;
});
G__7429 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__7429__7430.call(this,o,k);
case  3 :
return G__7429__7431.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7429;
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
var G__7437 = null;
var G__7437__7438 = (function (_,f){
return f.call(null);
});
var G__7437__7439 = (function (_,f,start){
return start;
});
G__7437 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7437__7438.call(this,_,f);
case  3 :
return G__7437__7439.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7437;
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
var G__7451 = null;
var G__7451__7452 = (function (_,n){
return null;
});
var G__7451__7454 = (function (_,n,not_found){
return not_found;
});
G__7451 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__7451__7452.call(this,_,n);
case  3 :
return G__7451__7454.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7451;
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
var ci_reduce__7488 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__7482 = cljs.core._nth.call(null,cicoll,0);
var n__7483 = 1;

while(true){
if(cljs.core.truth_((n__7483 < cljs.core._count.call(null,cicoll))))
{{
var G__7492 = f.call(null,val__7482,cljs.core._nth.call(null,cicoll,n__7483));
var G__7493 = (n__7483 + 1);
val__7482 = G__7492;
n__7483 = G__7493;
continue;
}
} else
{return val__7482;
}
break;
}
}
});
var ci_reduce__7489 = (function (cicoll,f,val){
var val__7484 = val;
var n__7485 = 0;

while(true){
if(cljs.core.truth_((n__7485 < cljs.core._count.call(null,cicoll))))
{{
var G__7494 = f.call(null,val__7484,cljs.core._nth.call(null,cicoll,n__7485));
var G__7495 = (n__7485 + 1);
val__7484 = G__7494;
n__7485 = G__7495;
continue;
}
} else
{return val__7484;
}
break;
}
});
var ci_reduce__7490 = (function (cicoll,f,val,idx){
var val__7486 = val;
var n__7487 = idx;

while(true){
if(cljs.core.truth_((n__7487 < cljs.core._count.call(null,cicoll))))
{{
var G__7508 = f.call(null,val__7486,cljs.core._nth.call(null,cicoll,n__7487));
var G__7509 = (n__7487 + 1);
val__7486 = G__7508;
n__7487 = G__7509;
continue;
}
} else
{return val__7486;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__7488.call(this,cicoll,f);
case  3 :
return ci_reduce__7489.call(this,cicoll,f,val);
case  4 :
return ci_reduce__7490.call(this,cicoll,f,val,idx);
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
var this__7512 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__7529 = null;
var G__7529__7530 = (function (_,f){
var this__7513 = this;
return cljs.core.ci_reduce.call(null,this__7513.a,f,(this__7513.a[this__7513.i]),(this__7513.i + 1));
});
var G__7529__7531 = (function (_,f,start){
var this__7514 = this;
return cljs.core.ci_reduce.call(null,this__7514.a,f,start,this__7514.i);
});
G__7529 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__7529__7530.call(this,_,f);
case  3 :
return G__7529__7531.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7529;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__7515 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__7516 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__7543 = null;
var G__7543__7544 = (function (coll,n){
var this__7517 = this;
var i__7518 = (n + this__7517.i);

if(cljs.core.truth_((i__7518 < this__7517.a.length)))
{return (this__7517.a[i__7518]);
} else
{return null;
}
});
var G__7543__7545 = (function (coll,n,not_found){
var this__7519 = this;
var i__7520 = (n + this__7519.i);

if(cljs.core.truth_((i__7520 < this__7519.a.length)))
{return (this__7519.a[i__7520]);
} else
{return not_found;
}
});
G__7543 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__7543__7544.call(this,coll,n);
case  3 :
return G__7543__7545.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7543;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__7521 = this;
return (this__7521.a.length - this__7521.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__7522 = this;
return (this__7522.a[this__7522.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__7523 = this;
if(cljs.core.truth_(((this__7523.i + 1) < this__7523.a.length)))
{return (new cljs.core.IndexedSeq(this__7523.a,(this__7523.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__7524 = this;
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
var G__7554 = null;
var G__7554__7555 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__7554__7556 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__7554 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__7554__7555.call(this,array,f);
case  3 :
return G__7554__7556.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7554;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__7572 = null;
var G__7572__7573 = (function (array,k){
return (array[k]);
});
var G__7572__7574 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__7572 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__7572__7573.call(this,array,k);
case  3 :
return G__7572__7574.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7572;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__7578 = null;
var G__7578__7579 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__7578__7580 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__7578 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__7578__7579.call(this,array,n);
case  3 :
return G__7578__7580.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__7578;
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
var temp__3698__auto____7595 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____7595))
{var s__7596 = temp__3698__auto____7595;

return cljs.core._first.call(null,s__7596);
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
var G__7715 = cljs.core.next.call(null,s);
s = G__7715;
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
var s__7721 = cljs.core.seq.call(null,x);
var n__7722 = 0;

while(true){
if(cljs.core.truth_(s__7721))
{{
var G__7737 = cljs.core.next.call(null,s__7721);
var G__7738 = (n__7722 + 1);
s__7721 = G__7737;
n__7722 = G__7738;
continue;
}
} else
{return n__7722;
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
var conj__7746 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__7747 = (function() { 
var G__7750__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__7751 = conj.call(null,coll,x);
var G__7753 = cljs.core.first.call(null,xs);
var G__7754 = cljs.core.next.call(null,xs);
coll = G__7751;
x = G__7753;
xs = G__7754;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__7750 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7750__delegate.call(this, coll, x, xs);
};
G__7750.cljs$lang$maxFixedArity = 2;
G__7750.cljs$lang$applyTo = (function (arglist__7756){
var coll = cljs.core.first(arglist__7756);
var x = cljs.core.first(cljs.core.next(arglist__7756));
var xs = cljs.core.rest(cljs.core.next(arglist__7756));
return G__7750__delegate.call(this, coll, x, xs);
});
return G__7750;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__7746.call(this,coll,x);
default:
return conj__7747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__7747.cljs$lang$applyTo;
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
var nth__7780 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__7781 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__7780.call(this,coll,n);
case  3 :
return nth__7781.call(this,coll,n,not_found);
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
var get__7791 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__7792 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__7791.call(this,o,k);
case  3 :
return get__7792.call(this,o,k,not_found);
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
var assoc__7800 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__7801 = (function() { 
var G__7803__delegate = function (coll,k,v,kvs){
while(true){
var ret__7797 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__7804 = ret__7797;
var G__7805 = cljs.core.first.call(null,kvs);
var G__7806 = cljs.core.second.call(null,kvs);
var G__7807 = cljs.core.nnext.call(null,kvs);
coll = G__7804;
k = G__7805;
v = G__7806;
kvs = G__7807;
continue;
}
} else
{return ret__7797;
}
break;
}
};
var G__7803 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__7803__delegate.call(this, coll, k, v, kvs);
};
G__7803.cljs$lang$maxFixedArity = 3;
G__7803.cljs$lang$applyTo = (function (arglist__7809){
var coll = cljs.core.first(arglist__7809);
var k = cljs.core.first(cljs.core.next(arglist__7809));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__7809)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__7809)));
return G__7803__delegate.call(this, coll, k, v, kvs);
});
return G__7803;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__7800.call(this,coll,k,v);
default:
return assoc__7801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__7801.cljs$lang$applyTo;
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
var dissoc__7816 = (function (coll){
return coll;
});
var dissoc__7817 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__7818 = (function() { 
var G__7820__delegate = function (coll,k,ks){
while(true){
var ret__7815 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7821 = ret__7815;
var G__7822 = cljs.core.first.call(null,ks);
var G__7823 = cljs.core.next.call(null,ks);
coll = G__7821;
k = G__7822;
ks = G__7823;
continue;
}
} else
{return ret__7815;
}
break;
}
};
var G__7820 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7820__delegate.call(this, coll, k, ks);
};
G__7820.cljs$lang$maxFixedArity = 2;
G__7820.cljs$lang$applyTo = (function (arglist__7824){
var coll = cljs.core.first(arglist__7824);
var k = cljs.core.first(cljs.core.next(arglist__7824));
var ks = cljs.core.rest(cljs.core.next(arglist__7824));
return G__7820__delegate.call(this, coll, k, ks);
});
return G__7820;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__7816.call(this,coll);
case  2 :
return dissoc__7817.call(this,coll,k);
default:
return dissoc__7818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__7818.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____7855 = o;

if(cljs.core.truth_((function (){var and__3546__auto____7857 = x__445__auto____7855;

if(cljs.core.truth_(and__3546__auto____7857))
{var and__3546__auto____7862 = x__445__auto____7855.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____7862))
{return cljs.core.not.call(null,x__445__auto____7855.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____7862;
}
} else
{return and__3546__auto____7857;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____7855);
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
var disj__7871 = (function (coll){
return coll;
});
var disj__7872 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__7873 = (function() { 
var G__7875__delegate = function (coll,k,ks){
while(true){
var ret__7869 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__7876 = ret__7869;
var G__7877 = cljs.core.first.call(null,ks);
var G__7878 = cljs.core.next.call(null,ks);
coll = G__7876;
k = G__7877;
ks = G__7878;
continue;
}
} else
{return ret__7869;
}
break;
}
};
var G__7875 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__7875__delegate.call(this, coll, k, ks);
};
G__7875.cljs$lang$maxFixedArity = 2;
G__7875.cljs$lang$applyTo = (function (arglist__7880){
var coll = cljs.core.first(arglist__7880);
var k = cljs.core.first(cljs.core.next(arglist__7880));
var ks = cljs.core.rest(cljs.core.next(arglist__7880));
return G__7875__delegate.call(this, coll, k, ks);
});
return G__7875;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__7871.call(this,coll);
case  2 :
return disj__7872.call(this,coll,k);
default:
return disj__7873.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__7873.cljs$lang$applyTo;
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
{var x__445__auto____7886 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7887 = x__445__auto____7886;

if(cljs.core.truth_(and__3546__auto____7887))
{var and__3546__auto____7889 = x__445__auto____7886.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____7889))
{return cljs.core.not.call(null,x__445__auto____7886.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____7889;
}
} else
{return and__3546__auto____7887;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____7886);
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
{var x__445__auto____7892 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7894 = x__445__auto____7892;

if(cljs.core.truth_(and__3546__auto____7894))
{var and__3546__auto____7895 = x__445__auto____7892.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____7895))
{return cljs.core.not.call(null,x__445__auto____7892.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____7895;
}
} else
{return and__3546__auto____7894;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____7892);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____7896 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7897 = x__445__auto____7896;

if(cljs.core.truth_(and__3546__auto____7897))
{var and__3546__auto____7898 = x__445__auto____7896.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____7898))
{return cljs.core.not.call(null,x__445__auto____7896.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____7898;
}
} else
{return and__3546__auto____7897;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____7896);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____7944 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7945 = x__445__auto____7944;

if(cljs.core.truth_(and__3546__auto____7945))
{var and__3546__auto____7947 = x__445__auto____7944.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____7947))
{return cljs.core.not.call(null,x__445__auto____7944.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____7947;
}
} else
{return and__3546__auto____7945;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____7944);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____7951 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7952 = x__445__auto____7951;

if(cljs.core.truth_(and__3546__auto____7952))
{var and__3546__auto____7995 = x__445__auto____7951.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____7995))
{return cljs.core.not.call(null,x__445__auto____7951.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____7995;
}
} else
{return and__3546__auto____7952;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____7951);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____7997 = x;

if(cljs.core.truth_((function (){var and__3546__auto____7998 = x__445__auto____7997;

if(cljs.core.truth_(and__3546__auto____7998))
{var and__3546__auto____8000 = x__445__auto____7997.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8000))
{return cljs.core.not.call(null,x__445__auto____7997.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8000;
}
} else
{return and__3546__auto____7998;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____7997);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8004 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8005 = x__445__auto____8004;

if(cljs.core.truth_(and__3546__auto____8005))
{var and__3546__auto____8006 = x__445__auto____8004.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8006))
{return cljs.core.not.call(null,x__445__auto____8004.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8006;
}
} else
{return and__3546__auto____8005;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8004);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8011 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8011.push(key);
}));
return keys__8011;
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
{var x__445__auto____8032 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8034 = x__445__auto____8032;

if(cljs.core.truth_(and__3546__auto____8034))
{var and__3546__auto____8037 = x__445__auto____8032.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8037))
{return cljs.core.not.call(null,x__445__auto____8032.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8037;
}
} else
{return and__3546__auto____8034;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8032);
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
var and__3546__auto____8045 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8045))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8046 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8045;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8136 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8136))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8136;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8138 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8138))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8138;
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
if(cljs.core.truth_((function (){var and__3546__auto____8151 = coll;

if(cljs.core.truth_(and__3546__auto____8151))
{var and__3546__auto____8152 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8152))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8152;
}
} else
{return and__3546__auto____8151;
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
var distinct_QMARK___8162 = (function (x){
return true;
});
var distinct_QMARK___8163 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8164 = (function() { 
var G__8166__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8157 = cljs.core.set([y,x]);
var xs__8158 = more;

while(true){
var x__8159 = cljs.core.first.call(null,xs__8158);
var etc__8160 = cljs.core.next.call(null,xs__8158);

if(cljs.core.truth_(xs__8158))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8157,x__8159)))
{return false;
} else
{{
var G__8167 = cljs.core.conj.call(null,s__8157,x__8159);
var G__8168 = etc__8160;
s__8157 = G__8167;
xs__8158 = G__8168;
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
var G__8166 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8166__delegate.call(this, x, y, more);
};
G__8166.cljs$lang$maxFixedArity = 2;
G__8166.cljs$lang$applyTo = (function (arglist__8169){
var x = cljs.core.first(arglist__8169);
var y = cljs.core.first(cljs.core.next(arglist__8169));
var more = cljs.core.rest(cljs.core.next(arglist__8169));
return G__8166__delegate.call(this, x, y, more);
});
return G__8166;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8162.call(this,x);
case  2 :
return distinct_QMARK___8163.call(this,x,y);
default:
return distinct_QMARK___8164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8164.cljs$lang$applyTo;
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
var r__8177 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8177)))
{return r__8177;
} else
{if(cljs.core.truth_(r__8177))
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
var sort__8188 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8189 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8184 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8184,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8184);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8188.call(this,comp);
case  2 :
return sort__8189.call(this,comp,coll);
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
var sort_by__8219 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8220 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8219.call(this,keyfn,comp);
case  3 :
return sort_by__8220.call(this,keyfn,comp,coll);
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
var reduce__8235 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8236 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8235.call(this,f,val);
case  3 :
return reduce__8236.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8254 = (function (f,coll){
var temp__3695__auto____8244 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8244))
{var s__8246 = temp__3695__auto____8244;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8246),cljs.core.next.call(null,s__8246));
} else
{return f.call(null);
}
});
var seq_reduce__8256 = (function (f,val,coll){
var val__8249 = val;
var coll__8250 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8250))
{{
var G__8265 = f.call(null,val__8249,cljs.core.first.call(null,coll__8250));
var G__8267 = cljs.core.next.call(null,coll__8250);
val__8249 = G__8265;
coll__8250 = G__8267;
continue;
}
} else
{return val__8249;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8254.call(this,f,val);
case  3 :
return seq_reduce__8256.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8271 = null;
var G__8271__8273 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8271__8275 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8271 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8271__8273.call(this,coll,f);
case  3 :
return G__8271__8275.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8271;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8362 = (function (){
return 0;
});
var _PLUS___8363 = (function (x){
return x;
});
var _PLUS___8364 = (function (x,y){
return (x + y);
});
var _PLUS___8365 = (function() { 
var G__8367__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8367 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8367__delegate.call(this, x, y, more);
};
G__8367.cljs$lang$maxFixedArity = 2;
G__8367.cljs$lang$applyTo = (function (arglist__8372){
var x = cljs.core.first(arglist__8372);
var y = cljs.core.first(cljs.core.next(arglist__8372));
var more = cljs.core.rest(cljs.core.next(arglist__8372));
return G__8367__delegate.call(this, x, y, more);
});
return G__8367;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8362.call(this);
case  1 :
return _PLUS___8363.call(this,x);
case  2 :
return _PLUS___8364.call(this,x,y);
default:
return _PLUS___8365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8365.cljs$lang$applyTo;
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
var ___8413 = (function (x){
return (- x);
});
var ___8414 = (function (x,y){
return (x - y);
});
var ___8415 = (function() { 
var G__8420__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8420 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8420__delegate.call(this, x, y, more);
};
G__8420.cljs$lang$maxFixedArity = 2;
G__8420.cljs$lang$applyTo = (function (arglist__8421){
var x = cljs.core.first(arglist__8421);
var y = cljs.core.first(cljs.core.next(arglist__8421));
var more = cljs.core.rest(cljs.core.next(arglist__8421));
return G__8420__delegate.call(this, x, y, more);
});
return G__8420;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8413.call(this,x);
case  2 :
return ___8414.call(this,x,y);
default:
return ___8415.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8415.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8424 = (function (){
return 1;
});
var _STAR___8425 = (function (x){
return x;
});
var _STAR___8426 = (function (x,y){
return (x * y);
});
var _STAR___8427 = (function() { 
var G__8437__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8437 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8437__delegate.call(this, x, y, more);
};
G__8437.cljs$lang$maxFixedArity = 2;
G__8437.cljs$lang$applyTo = (function (arglist__8438){
var x = cljs.core.first(arglist__8438);
var y = cljs.core.first(cljs.core.next(arglist__8438));
var more = cljs.core.rest(cljs.core.next(arglist__8438));
return G__8437__delegate.call(this, x, y, more);
});
return G__8437;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8424.call(this);
case  1 :
return _STAR___8425.call(this,x);
case  2 :
return _STAR___8426.call(this,x,y);
default:
return _STAR___8427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8427.cljs$lang$applyTo;
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
var _SLASH___8459 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8460 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8461 = (function() { 
var G__8467__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8467 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8467__delegate.call(this, x, y, more);
};
G__8467.cljs$lang$maxFixedArity = 2;
G__8467.cljs$lang$applyTo = (function (arglist__8472){
var x = cljs.core.first(arglist__8472);
var y = cljs.core.first(cljs.core.next(arglist__8472));
var more = cljs.core.rest(cljs.core.next(arglist__8472));
return G__8467__delegate.call(this, x, y, more);
});
return G__8467;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8459.call(this,x);
case  2 :
return _SLASH___8460.call(this,x,y);
default:
return _SLASH___8461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8461.cljs$lang$applyTo;
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
var _LT___8477 = (function (x){
return true;
});
var _LT___8478 = (function (x,y){
return (x < y);
});
var _LT___8479 = (function() { 
var G__8481__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8482 = y;
var G__8483 = cljs.core.first.call(null,more);
var G__8484 = cljs.core.next.call(null,more);
x = G__8482;
y = G__8483;
more = G__8484;
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
var G__8481 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8481__delegate.call(this, x, y, more);
};
G__8481.cljs$lang$maxFixedArity = 2;
G__8481.cljs$lang$applyTo = (function (arglist__8494){
var x = cljs.core.first(arglist__8494);
var y = cljs.core.first(cljs.core.next(arglist__8494));
var more = cljs.core.rest(cljs.core.next(arglist__8494));
return G__8481__delegate.call(this, x, y, more);
});
return G__8481;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8477.call(this,x);
case  2 :
return _LT___8478.call(this,x,y);
default:
return _LT___8479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8479.cljs$lang$applyTo;
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
var _LT__EQ___8507 = (function (x){
return true;
});
var _LT__EQ___8508 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8509 = (function() { 
var G__8517__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8521 = y;
var G__8522 = cljs.core.first.call(null,more);
var G__8523 = cljs.core.next.call(null,more);
x = G__8521;
y = G__8522;
more = G__8523;
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
var G__8517 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8517__delegate.call(this, x, y, more);
};
G__8517.cljs$lang$maxFixedArity = 2;
G__8517.cljs$lang$applyTo = (function (arglist__8529){
var x = cljs.core.first(arglist__8529);
var y = cljs.core.first(cljs.core.next(arglist__8529));
var more = cljs.core.rest(cljs.core.next(arglist__8529));
return G__8517__delegate.call(this, x, y, more);
});
return G__8517;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8507.call(this,x);
case  2 :
return _LT__EQ___8508.call(this,x,y);
default:
return _LT__EQ___8509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8509.cljs$lang$applyTo;
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
var _GT___8532 = (function (x){
return true;
});
var _GT___8533 = (function (x,y){
return (x > y);
});
var _GT___8534 = (function() { 
var G__8536__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8538 = y;
var G__8539 = cljs.core.first.call(null,more);
var G__8540 = cljs.core.next.call(null,more);
x = G__8538;
y = G__8539;
more = G__8540;
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
var G__8536 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8536__delegate.call(this, x, y, more);
};
G__8536.cljs$lang$maxFixedArity = 2;
G__8536.cljs$lang$applyTo = (function (arglist__8541){
var x = cljs.core.first(arglist__8541);
var y = cljs.core.first(cljs.core.next(arglist__8541));
var more = cljs.core.rest(cljs.core.next(arglist__8541));
return G__8536__delegate.call(this, x, y, more);
});
return G__8536;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8532.call(this,x);
case  2 :
return _GT___8533.call(this,x,y);
default:
return _GT___8534.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8534.cljs$lang$applyTo;
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
var _GT__EQ___8552 = (function (x){
return true;
});
var _GT__EQ___8553 = (function (x,y){
return (x >= y);
});
var _GT__EQ___8554 = (function() { 
var G__8556__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8557 = y;
var G__8558 = cljs.core.first.call(null,more);
var G__8559 = cljs.core.next.call(null,more);
x = G__8557;
y = G__8558;
more = G__8559;
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
var G__8556 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8556__delegate.call(this, x, y, more);
};
G__8556.cljs$lang$maxFixedArity = 2;
G__8556.cljs$lang$applyTo = (function (arglist__8560){
var x = cljs.core.first(arglist__8560);
var y = cljs.core.first(cljs.core.next(arglist__8560));
var more = cljs.core.rest(cljs.core.next(arglist__8560));
return G__8556__delegate.call(this, x, y, more);
});
return G__8556;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___8552.call(this,x);
case  2 :
return _GT__EQ___8553.call(this,x,y);
default:
return _GT__EQ___8554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___8554.cljs$lang$applyTo;
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
var max__8563 = (function (x){
return x;
});
var max__8564 = (function (x,y){
return ((x > y) ? x : y);
});
var max__8565 = (function() { 
var G__8567__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__8567 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8567__delegate.call(this, x, y, more);
};
G__8567.cljs$lang$maxFixedArity = 2;
G__8567.cljs$lang$applyTo = (function (arglist__8571){
var x = cljs.core.first(arglist__8571);
var y = cljs.core.first(cljs.core.next(arglist__8571));
var more = cljs.core.rest(cljs.core.next(arglist__8571));
return G__8567__delegate.call(this, x, y, more);
});
return G__8567;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__8563.call(this,x);
case  2 :
return max__8564.call(this,x,y);
default:
return max__8565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__8565.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__8588 = (function (x){
return x;
});
var min__8589 = (function (x,y){
return ((x < y) ? x : y);
});
var min__8590 = (function() { 
var G__8592__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__8592 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8592__delegate.call(this, x, y, more);
};
G__8592.cljs$lang$maxFixedArity = 2;
G__8592.cljs$lang$applyTo = (function (arglist__8593){
var x = cljs.core.first(arglist__8593);
var y = cljs.core.first(cljs.core.next(arglist__8593));
var more = cljs.core.rest(cljs.core.next(arglist__8593));
return G__8592__delegate.call(this, x, y, more);
});
return G__8592;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__8588.call(this,x);
case  2 :
return min__8589.call(this,x,y);
default:
return min__8590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__8590.cljs$lang$applyTo;
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
var rem__8599 = (n % d);

return cljs.core.fix.call(null,((n - rem__8599) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__8600 = cljs.core.quot.call(null,n,d);

return (n - (d * q__8600));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__8601 = (function (){
return Math.random.call(null);
});
var rand__8602 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__8601.call(this);
case  1 :
return rand__8602.call(this,n);
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
var _EQ__EQ___8622 = (function (x){
return true;
});
var _EQ__EQ___8623 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___8624 = (function() { 
var G__8626__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8627 = y;
var G__8628 = cljs.core.first.call(null,more);
var G__8629 = cljs.core.next.call(null,more);
x = G__8627;
y = G__8628;
more = G__8629;
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
var G__8626 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8626__delegate.call(this, x, y, more);
};
G__8626.cljs$lang$maxFixedArity = 2;
G__8626.cljs$lang$applyTo = (function (arglist__8648){
var x = cljs.core.first(arglist__8648);
var y = cljs.core.first(cljs.core.next(arglist__8648));
var more = cljs.core.rest(cljs.core.next(arglist__8648));
return G__8626__delegate.call(this, x, y, more);
});
return G__8626;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___8622.call(this,x);
case  2 :
return _EQ__EQ___8623.call(this,x,y);
default:
return _EQ__EQ___8624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___8624.cljs$lang$applyTo;
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
var n__8719 = n;
var xs__8720 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____8721 = xs__8720;

if(cljs.core.truth_(and__3546__auto____8721))
{return (n__8719 > 0);
} else
{return and__3546__auto____8721;
}
})()))
{{
var G__8731 = (n__8719 - 1);
var G__8732 = cljs.core.next.call(null,xs__8720);
n__8719 = G__8731;
xs__8720 = G__8732;
continue;
}
} else
{return xs__8720;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__8746 = null;
var G__8746__8747 = (function (coll,n){
var temp__3695__auto____8736 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8736))
{var xs__8740 = temp__3695__auto____8736;

return cljs.core.first.call(null,xs__8740);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__8746__8748 = (function (coll,n,not_found){
var temp__3695__auto____8742 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____8742))
{var xs__8745 = temp__3695__auto____8742;

return cljs.core.first.call(null,xs__8745);
} else
{return not_found;
}
});
G__8746 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8746__8747.call(this,coll,n);
case  3 :
return G__8746__8748.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8746;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___8774 = (function (){
return "";
});
var str_STAR___8775 = (function (x){
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
var str_STAR___8776 = (function() { 
var G__8778__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__8780 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__8782 = cljs.core.next.call(null,more);
sb = G__8780;
more = G__8782;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__8778 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8778__delegate.call(this, x, ys);
};
G__8778.cljs$lang$maxFixedArity = 1;
G__8778.cljs$lang$applyTo = (function (arglist__8784){
var x = cljs.core.first(arglist__8784);
var ys = cljs.core.rest(arglist__8784);
return G__8778__delegate.call(this, x, ys);
});
return G__8778;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___8774.call(this);
case  1 :
return str_STAR___8775.call(this,x);
default:
return str_STAR___8776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___8776.cljs$lang$applyTo;
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
var str__8823 = (function (){
return "";
});
var str__8825 = (function (x){
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
var str__8826 = (function() { 
var G__8839__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__8839 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__8839__delegate.call(this, x, ys);
};
G__8839.cljs$lang$maxFixedArity = 1;
G__8839.cljs$lang$applyTo = (function (arglist__8840){
var x = cljs.core.first(arglist__8840);
var ys = cljs.core.rest(arglist__8840);
return G__8839__delegate.call(this, x, ys);
});
return G__8839;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__8823.call(this);
case  1 :
return str__8825.call(this,x);
default:
return str__8826.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__8826.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__8849 = (function (s,start){
return s.substring(start);
});
var subs__8850 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__8849.call(this,s,start);
case  3 :
return subs__8850.call(this,s,start,end);
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
var symbol__8886 = (function (name){
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
var symbol__8887 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__8886.call(this,ns);
case  2 :
return symbol__8887.call(this,ns,name);
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
var keyword__8902 = (function (name){
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
var keyword__8903 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__8902.call(this,ns);
case  2 :
return keyword__8903.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__8915 = cljs.core.seq.call(null,x);
var ys__8916 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__8915)))
{return cljs.core.nil_QMARK_.call(null,ys__8916);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__8916)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__8915),cljs.core.first.call(null,ys__8916))))
{{
var G__8931 = cljs.core.next.call(null,xs__8915);
var G__8932 = cljs.core.next.call(null,ys__8916);
xs__8915 = G__8931;
ys__8916 = G__8932;
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
return cljs.core.reduce.call(null,(function (p1__8936_SHARP_,p2__8937_SHARP_){
return cljs.core.hash_combine.call(null,p1__8936_SHARP_,cljs.core.hash.call(null,p2__8937_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__8950__8951 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__8950__8951))
{var G__8953__8956 = cljs.core.first.call(null,G__8950__8951);
var vec__8954__8957 = G__8953__8956;
var key_name__8958 = cljs.core.nth.call(null,vec__8954__8957,0,null);
var f__8959 = cljs.core.nth.call(null,vec__8954__8957,1,null);
var G__8950__8960 = G__8950__8951;

var G__8953__8961 = G__8953__8956;
var G__8950__8962 = G__8950__8960;

while(true){
var vec__8963__8964 = G__8953__8961;
var key_name__8965 = cljs.core.nth.call(null,vec__8963__8964,0,null);
var f__8966 = cljs.core.nth.call(null,vec__8963__8964,1,null);
var G__8950__8967 = G__8950__8962;

var str_name__8968 = cljs.core.name.call(null,key_name__8965);

obj[str_name__8968] = f__8966;
var temp__3698__auto____8972 = cljs.core.next.call(null,G__8950__8967);

if(cljs.core.truth_(temp__3698__auto____8972))
{var G__8950__8974 = temp__3698__auto____8972;

{
var G__8990 = cljs.core.first.call(null,G__8950__8974);
var G__8991 = G__8950__8974;
G__8953__8961 = G__8990;
G__8950__8962 = G__8991;
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
var this__8999 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9000 = this;
return (new cljs.core.List(this__9000.meta,o,coll,(this__9000.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9001 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9002 = this;
return this__9002.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9003 = this;
return this__9003.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9004 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9037 = this;
return this__9037.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9068 = this;
return this__9068.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9100 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9102 = this;
return (new cljs.core.List(meta,this__9102.first,this__9102.rest,this__9102.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9103 = this;
return this__9103.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9105 = this;
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
var this__9123 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9125 = this;
return (new cljs.core.List(this__9125.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9127 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9130 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9131 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9132 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9134 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9135 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9137 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9139 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9140 = this;
return this__9140.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9142 = this;
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
list.cljs$lang$applyTo = (function (arglist__9158){
var items = cljs.core.seq( arglist__9158 );;
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
var this__9167 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9171 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9176 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9188 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9188.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9189 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9190 = this;
return this__9190.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9191 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9191.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9191.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9192 = this;
return this__9192.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9199 = this;
return (new cljs.core.Cons(meta,this__9199.first,this__9199.rest));
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
var G__9233 = null;
var G__9233__9234 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9233__9235 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9233 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9233__9234.call(this,string,f);
case  3 :
return G__9233__9235.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9233;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9242 = null;
var G__9242__9243 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9242__9244 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9242 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9242__9243.call(this,string,k);
case  3 :
return G__9242__9244.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9242;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9247 = null;
var G__9247__9248 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9247__9249 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9247 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9247__9248.call(this,string,n);
case  3 :
return G__9247__9249.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9247;
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
var G__9253 = null;
var G__9253__9254 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9253__9255 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9253 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9253__9254.call(this,this$,coll);
case  3 :
return G__9253__9255.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9253;
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
var x__9271 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9271;
} else
{lazy_seq.x = x__9271.call(null);
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
var this__9295 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9297 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9299 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9307 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9307.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9308 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9309 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9311 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9313 = this;
return this__9313.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9315 = this;
return (new cljs.core.LazySeq(meta,this__9315.realized,this__9315.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9335 = cljs.core.array.call(null);

var s__9337 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9337)))
{ary__9335.push(cljs.core.first.call(null,s__9337));
{
var G__9344 = cljs.core.next.call(null,s__9337);
s__9337 = G__9344;
continue;
}
} else
{return ary__9335;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9346 = s;
var i__9348 = n;
var sum__9349 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9350 = (i__9348 > 0);

if(cljs.core.truth_(and__3546__auto____9350))
{return cljs.core.seq.call(null,s__9346);
} else
{return and__3546__auto____9350;
}
})()))
{{
var G__9370 = cljs.core.next.call(null,s__9346);
var G__9371 = (i__9348 - 1);
var G__9372 = (sum__9349 + 1);
s__9346 = G__9370;
i__9348 = G__9371;
sum__9349 = G__9372;
continue;
}
} else
{return sum__9349;
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
var concat__9401 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9402 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9404 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9389 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9389))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9389),concat.call(null,cljs.core.rest.call(null,s__9389),y));
} else
{return y;
}
})));
});
var concat__9405 = (function() { 
var G__9415__delegate = function (x,y,zs){
var cat__9392 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9391 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9391))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9391),cat.call(null,cljs.core.rest.call(null,xys__9391),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9392.call(null,concat.call(null,x,y),zs);
};
var G__9415 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9415__delegate.call(this, x, y, zs);
};
G__9415.cljs$lang$maxFixedArity = 2;
G__9415.cljs$lang$applyTo = (function (arglist__9419){
var x = cljs.core.first(arglist__9419);
var y = cljs.core.first(cljs.core.next(arglist__9419));
var zs = cljs.core.rest(cljs.core.next(arglist__9419));
return G__9415__delegate.call(this, x, y, zs);
});
return G__9415;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9401.call(this);
case  1 :
return concat__9402.call(this,x);
case  2 :
return concat__9404.call(this,x,y);
default:
return concat__9405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9405.cljs$lang$applyTo;
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
var list_STAR___9432 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___9433 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___9434 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___9435 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___9436 = (function() { 
var G__9439__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__9439 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9439__delegate.call(this, a, b, c, d, more);
};
G__9439.cljs$lang$maxFixedArity = 4;
G__9439.cljs$lang$applyTo = (function (arglist__9441){
var a = cljs.core.first(arglist__9441);
var b = cljs.core.first(cljs.core.next(arglist__9441));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9441)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9441))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9441))));
return G__9439__delegate.call(this, a, b, c, d, more);
});
return G__9439;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___9432.call(this,a);
case  2 :
return list_STAR___9433.call(this,a,b);
case  3 :
return list_STAR___9434.call(this,a,b,c);
case  4 :
return list_STAR___9435.call(this,a,b,c,d);
default:
return list_STAR___9436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___9436.cljs$lang$applyTo;
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
var apply__9510 = (function (f,args){
var fixed_arity__9443 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__9443 + 1)) <= fixed_arity__9443)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__9511 = (function (f,x,args){
var arglist__9455 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__9457 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9455,fixed_arity__9457) <= fixed_arity__9457)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9455));
} else
{return f.cljs$lang$applyTo(arglist__9455);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9455));
}
});
var apply__9512 = (function (f,x,y,args){
var arglist__9475 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__9476 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9475,fixed_arity__9476) <= fixed_arity__9476)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9475));
} else
{return f.cljs$lang$applyTo(arglist__9475);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9475));
}
});
var apply__9513 = (function (f,x,y,z,args){
var arglist__9483 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__9484 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9483,fixed_arity__9484) <= fixed_arity__9484)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9483));
} else
{return f.cljs$lang$applyTo(arglist__9483);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9483));
}
});
var apply__9516 = (function() { 
var G__9532__delegate = function (f,a,b,c,d,args){
var arglist__9493 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__9495 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__9493,fixed_arity__9495) <= fixed_arity__9495)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__9493));
} else
{return f.cljs$lang$applyTo(arglist__9493);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__9493));
}
};
var G__9532 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__9532__delegate.call(this, f, a, b, c, d, args);
};
G__9532.cljs$lang$maxFixedArity = 5;
G__9532.cljs$lang$applyTo = (function (arglist__9543){
var f = cljs.core.first(arglist__9543);
var a = cljs.core.first(cljs.core.next(arglist__9543));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9543)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9543))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9543)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9543)))));
return G__9532__delegate.call(this, f, a, b, c, d, args);
});
return G__9532;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__9510.call(this,f,a);
case  3 :
return apply__9511.call(this,f,a,b);
case  4 :
return apply__9512.call(this,f,a,b,c);
case  5 :
return apply__9513.call(this,f,a,b,c,d);
default:
return apply__9516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__9516.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__9545){
var obj = cljs.core.first(arglist__9545);
var f = cljs.core.first(cljs.core.next(arglist__9545));
var args = cljs.core.rest(cljs.core.next(arglist__9545));
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
var not_EQ___9553 = (function (x){
return false;
});
var not_EQ___9554 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___9555 = (function() { 
var G__9563__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__9563 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9563__delegate.call(this, x, y, more);
};
G__9563.cljs$lang$maxFixedArity = 2;
G__9563.cljs$lang$applyTo = (function (arglist__9567){
var x = cljs.core.first(arglist__9567);
var y = cljs.core.first(cljs.core.next(arglist__9567));
var more = cljs.core.rest(cljs.core.next(arglist__9567));
return G__9563__delegate.call(this, x, y, more);
});
return G__9563;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___9553.call(this,x);
case  2 :
return not_EQ___9554.call(this,x,y);
default:
return not_EQ___9555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___9555.cljs$lang$applyTo;
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
var G__9570 = pred;
var G__9571 = cljs.core.next.call(null,coll);
pred = G__9570;
coll = G__9571;
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
{var or__3548__auto____9582 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____9582))
{return or__3548__auto____9582;
} else
{{
var G__9620 = pred;
var G__9621 = cljs.core.next.call(null,coll);
pred = G__9620;
coll = G__9621;
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
var G__9634 = null;
var G__9634__9635 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__9634__9636 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__9634__9637 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__9634__9638 = (function() { 
var G__9642__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__9642 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9642__delegate.call(this, x, y, zs);
};
G__9642.cljs$lang$maxFixedArity = 2;
G__9642.cljs$lang$applyTo = (function (arglist__9645){
var x = cljs.core.first(arglist__9645);
var y = cljs.core.first(cljs.core.next(arglist__9645));
var zs = cljs.core.rest(cljs.core.next(arglist__9645));
return G__9642__delegate.call(this, x, y, zs);
});
return G__9642;
})()
;
G__9634 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__9634__9635.call(this);
case  1 :
return G__9634__9636.call(this,x);
case  2 :
return G__9634__9637.call(this,x,y);
default:
return G__9634__9638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9634.cljs$lang$maxFixedArity = 2;
G__9634.cljs$lang$applyTo = G__9634__9638.cljs$lang$applyTo;
return G__9634;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__9650__delegate = function (args){
return x;
};
var G__9650 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9650__delegate.call(this, args);
};
G__9650.cljs$lang$maxFixedArity = 0;
G__9650.cljs$lang$applyTo = (function (arglist__9663){
var args = cljs.core.seq( arglist__9663 );;
return G__9650__delegate.call(this, args);
});
return G__9650;
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
var comp__9735 = (function (){
return cljs.core.identity;
});
var comp__9737 = (function (f){
return f;
});
var comp__9738 = (function (f,g){
return (function() {
var G__9742 = null;
var G__9742__9743 = (function (){
return f.call(null,g.call(null));
});
var G__9742__9744 = (function (x){
return f.call(null,g.call(null,x));
});
var G__9742__9745 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__9742__9746 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__9742__9747 = (function() { 
var G__9755__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__9755 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9755__delegate.call(this, x, y, z, args);
};
G__9755.cljs$lang$maxFixedArity = 3;
G__9755.cljs$lang$applyTo = (function (arglist__9757){
var x = cljs.core.first(arglist__9757);
var y = cljs.core.first(cljs.core.next(arglist__9757));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9757)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9757)));
return G__9755__delegate.call(this, x, y, z, args);
});
return G__9755;
})()
;
G__9742 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9742__9743.call(this);
case  1 :
return G__9742__9744.call(this,x);
case  2 :
return G__9742__9745.call(this,x,y);
case  3 :
return G__9742__9746.call(this,x,y,z);
default:
return G__9742__9747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9742.cljs$lang$maxFixedArity = 3;
G__9742.cljs$lang$applyTo = G__9742__9747.cljs$lang$applyTo;
return G__9742;
})()
});
var comp__9739 = (function (f,g,h){
return (function() {
var G__9758 = null;
var G__9758__9832 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__9758__9833 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__9758__9834 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__9758__9835 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__9758__9836 = (function() { 
var G__9838__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__9838 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9838__delegate.call(this, x, y, z, args);
};
G__9838.cljs$lang$maxFixedArity = 3;
G__9838.cljs$lang$applyTo = (function (arglist__9839){
var x = cljs.core.first(arglist__9839);
var y = cljs.core.first(cljs.core.next(arglist__9839));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9839)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9839)));
return G__9838__delegate.call(this, x, y, z, args);
});
return G__9838;
})()
;
G__9758 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__9758__9832.call(this);
case  1 :
return G__9758__9833.call(this,x);
case  2 :
return G__9758__9834.call(this,x,y);
case  3 :
return G__9758__9835.call(this,x,y,z);
default:
return G__9758__9836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9758.cljs$lang$maxFixedArity = 3;
G__9758.cljs$lang$applyTo = G__9758__9836.cljs$lang$applyTo;
return G__9758;
})()
});
var comp__9740 = (function() { 
var G__9840__delegate = function (f1,f2,f3,fs){
var fs__9724 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__9841__delegate = function (args){
var ret__9727 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__9724),args);
var fs__9729 = cljs.core.next.call(null,fs__9724);

while(true){
if(cljs.core.truth_(fs__9729))
{{
var G__9842 = cljs.core.first.call(null,fs__9729).call(null,ret__9727);
var G__9843 = cljs.core.next.call(null,fs__9729);
ret__9727 = G__9842;
fs__9729 = G__9843;
continue;
}
} else
{return ret__9727;
}
break;
}
};
var G__9841 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9841__delegate.call(this, args);
};
G__9841.cljs$lang$maxFixedArity = 0;
G__9841.cljs$lang$applyTo = (function (arglist__9845){
var args = cljs.core.seq( arglist__9845 );;
return G__9841__delegate.call(this, args);
});
return G__9841;
})()
;
};
var G__9840 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9840__delegate.call(this, f1, f2, f3, fs);
};
G__9840.cljs$lang$maxFixedArity = 3;
G__9840.cljs$lang$applyTo = (function (arglist__9847){
var f1 = cljs.core.first(arglist__9847);
var f2 = cljs.core.first(cljs.core.next(arglist__9847));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9847)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9847)));
return G__9840__delegate.call(this, f1, f2, f3, fs);
});
return G__9840;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__9735.call(this);
case  1 :
return comp__9737.call(this,f1);
case  2 :
return comp__9738.call(this,f1,f2);
case  3 :
return comp__9739.call(this,f1,f2,f3);
default:
return comp__9740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__9740.cljs$lang$applyTo;
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
var partial__9855 = (function (f,arg1){
return (function() { 
var G__9860__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__9860 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9860__delegate.call(this, args);
};
G__9860.cljs$lang$maxFixedArity = 0;
G__9860.cljs$lang$applyTo = (function (arglist__9861){
var args = cljs.core.seq( arglist__9861 );;
return G__9860__delegate.call(this, args);
});
return G__9860;
})()
;
});
var partial__9856 = (function (f,arg1,arg2){
return (function() { 
var G__9862__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__9862 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9862__delegate.call(this, args);
};
G__9862.cljs$lang$maxFixedArity = 0;
G__9862.cljs$lang$applyTo = (function (arglist__9865){
var args = cljs.core.seq( arglist__9865 );;
return G__9862__delegate.call(this, args);
});
return G__9862;
})()
;
});
var partial__9857 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__9867__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__9867 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9867__delegate.call(this, args);
};
G__9867.cljs$lang$maxFixedArity = 0;
G__9867.cljs$lang$applyTo = (function (arglist__9868){
var args = cljs.core.seq( arglist__9868 );;
return G__9867__delegate.call(this, args);
});
return G__9867;
})()
;
});
var partial__9858 = (function() { 
var G__9869__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__9870__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__9870 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__9870__delegate.call(this, args);
};
G__9870.cljs$lang$maxFixedArity = 0;
G__9870.cljs$lang$applyTo = (function (arglist__9872){
var args = cljs.core.seq( arglist__9872 );;
return G__9870__delegate.call(this, args);
});
return G__9870;
})()
;
};
var G__9869 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__9869__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__9869.cljs$lang$maxFixedArity = 4;
G__9869.cljs$lang$applyTo = (function (arglist__9873){
var f = cljs.core.first(arglist__9873);
var arg1 = cljs.core.first(cljs.core.next(arglist__9873));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9873)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9873))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__9873))));
return G__9869__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__9869;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__9855.call(this,f,arg1);
case  3 :
return partial__9856.call(this,f,arg1,arg2);
case  4 :
return partial__9857.call(this,f,arg1,arg2,arg3);
default:
return partial__9858.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__9858.cljs$lang$applyTo;
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
var fnil__9885 = (function (f,x){
return (function() {
var G__9890 = null;
var G__9890__9891 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__9890__9892 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__9890__9893 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__9890__9894 = (function() { 
var G__9900__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__9900 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9900__delegate.call(this, a, b, c, ds);
};
G__9900.cljs$lang$maxFixedArity = 3;
G__9900.cljs$lang$applyTo = (function (arglist__9903){
var a = cljs.core.first(arglist__9903);
var b = cljs.core.first(cljs.core.next(arglist__9903));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9903)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9903)));
return G__9900__delegate.call(this, a, b, c, ds);
});
return G__9900;
})()
;
G__9890 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__9890__9891.call(this,a);
case  2 :
return G__9890__9892.call(this,a,b);
case  3 :
return G__9890__9893.call(this,a,b,c);
default:
return G__9890__9894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9890.cljs$lang$maxFixedArity = 3;
G__9890.cljs$lang$applyTo = G__9890__9894.cljs$lang$applyTo;
return G__9890;
})()
});
var fnil__9886 = (function (f,x,y){
return (function() {
var G__9905 = null;
var G__9905__9907 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__9905__9908 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__9905__9909 = (function() { 
var G__9912__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__9912 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9912__delegate.call(this, a, b, c, ds);
};
G__9912.cljs$lang$maxFixedArity = 3;
G__9912.cljs$lang$applyTo = (function (arglist__9915){
var a = cljs.core.first(arglist__9915);
var b = cljs.core.first(cljs.core.next(arglist__9915));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9915)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9915)));
return G__9912__delegate.call(this, a, b, c, ds);
});
return G__9912;
})()
;
G__9905 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__9905__9907.call(this,a,b);
case  3 :
return G__9905__9908.call(this,a,b,c);
default:
return G__9905__9909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9905.cljs$lang$maxFixedArity = 3;
G__9905.cljs$lang$applyTo = G__9905__9909.cljs$lang$applyTo;
return G__9905;
})()
});
var fnil__9887 = (function (f,x,y,z){
return (function() {
var G__9918 = null;
var G__9918__9920 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__9918__9921 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__9918__9922 = (function() { 
var G__9927__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__9927 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__9927__delegate.call(this, a, b, c, ds);
};
G__9927.cljs$lang$maxFixedArity = 3;
G__9927.cljs$lang$applyTo = (function (arglist__9930){
var a = cljs.core.first(arglist__9930);
var b = cljs.core.first(cljs.core.next(arglist__9930));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__9930)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__9930)));
return G__9927__delegate.call(this, a, b, c, ds);
});
return G__9927;
})()
;
G__9918 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__9918__9920.call(this,a,b);
case  3 :
return G__9918__9921.call(this,a,b,c);
default:
return G__9918__9922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__9918.cljs$lang$maxFixedArity = 3;
G__9918.cljs$lang$applyTo = G__9918__9922.cljs$lang$applyTo;
return G__9918;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__9885.call(this,f,x);
case  3 :
return fnil__9886.call(this,f,x,y);
case  4 :
return fnil__9887.call(this,f,x,y,z);
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
var mapi__9940 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9938 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9938))
{var s__9939 = temp__3698__auto____9938;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__9939)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__9939)));
} else
{return null;
}
})));
});

return mapi__9940.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____9962 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____9962))
{var s__9967 = temp__3698__auto____9962;

var x__9969 = f.call(null,cljs.core.first.call(null,s__9967));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__9969)))
{return keep.call(null,f,cljs.core.rest.call(null,s__9967));
} else
{return cljs.core.cons.call(null,x__9969,keep.call(null,f,cljs.core.rest.call(null,s__9967)));
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
var keepi__10024 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10009 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10009))
{var s__10010 = temp__3698__auto____10009;

var x__10014 = f.call(null,idx,cljs.core.first.call(null,s__10010));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10014)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10010));
} else
{return cljs.core.cons.call(null,x__10014,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10010)));
}
} else
{return null;
}
})));
});

return keepi__10024.call(null,0,coll);
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
var every_pred__10174 = (function (p){
return (function() {
var ep1 = null;
var ep1__10180 = (function (){
return true;
});
var ep1__10181 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10182 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10117 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10117))
{return p.call(null,y);
} else
{return and__3546__auto____10117;
}
})());
});
var ep1__10183 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10118 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10118))
{var and__3546__auto____10119 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10119))
{return p.call(null,z);
} else
{return and__3546__auto____10119;
}
} else
{return and__3546__auto____10118;
}
})());
});
var ep1__10184 = (function() { 
var G__10315__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10122 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10122))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10122;
}
})());
};
var G__10315 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10315__delegate.call(this, x, y, z, args);
};
G__10315.cljs$lang$maxFixedArity = 3;
G__10315.cljs$lang$applyTo = (function (arglist__10317){
var x = cljs.core.first(arglist__10317);
var y = cljs.core.first(cljs.core.next(arglist__10317));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10317)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10317)));
return G__10315__delegate.call(this, x, y, z, args);
});
return G__10315;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10180.call(this);
case  1 :
return ep1__10181.call(this,x);
case  2 :
return ep1__10182.call(this,x,y);
case  3 :
return ep1__10183.call(this,x,y,z);
default:
return ep1__10184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10184.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10175 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10320 = (function (){
return true;
});
var ep2__10321 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10128 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10128))
{return p2.call(null,x);
} else
{return and__3546__auto____10128;
}
})());
});
var ep2__10322 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10129 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10129))
{var and__3546__auto____10130 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10130))
{var and__3546__auto____10132 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10132))
{return p2.call(null,y);
} else
{return and__3546__auto____10132;
}
} else
{return and__3546__auto____10130;
}
} else
{return and__3546__auto____10129;
}
})());
});
var ep2__10323 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10133 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10133))
{var and__3546__auto____10135 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10135))
{var and__3546__auto____10136 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10136))
{var and__3546__auto____10137 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10137))
{var and__3546__auto____10138 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10138))
{return p2.call(null,z);
} else
{return and__3546__auto____10138;
}
} else
{return and__3546__auto____10137;
}
} else
{return and__3546__auto____10136;
}
} else
{return and__3546__auto____10135;
}
} else
{return and__3546__auto____10133;
}
})());
});
var ep2__10324 = (function() { 
var G__10339__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10144 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10144))
{return cljs.core.every_QMARK_.call(null,(function (p1__9995_SHARP_){
var and__3546__auto____10145 = p1.call(null,p1__9995_SHARP_);

if(cljs.core.truth_(and__3546__auto____10145))
{return p2.call(null,p1__9995_SHARP_);
} else
{return and__3546__auto____10145;
}
}),args);
} else
{return and__3546__auto____10144;
}
})());
};
var G__10339 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10339__delegate.call(this, x, y, z, args);
};
G__10339.cljs$lang$maxFixedArity = 3;
G__10339.cljs$lang$applyTo = (function (arglist__10343){
var x = cljs.core.first(arglist__10343);
var y = cljs.core.first(cljs.core.next(arglist__10343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10343)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10343)));
return G__10339__delegate.call(this, x, y, z, args);
});
return G__10339;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10320.call(this);
case  1 :
return ep2__10321.call(this,x);
case  2 :
return ep2__10322.call(this,x,y);
case  3 :
return ep2__10323.call(this,x,y,z);
default:
return ep2__10324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10324.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10176 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10349 = (function (){
return true;
});
var ep3__10350 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10147 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10147))
{var and__3546__auto____10149 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10149))
{return p3.call(null,x);
} else
{return and__3546__auto____10149;
}
} else
{return and__3546__auto____10147;
}
})());
});
var ep3__10351 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10150 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10150))
{var and__3546__auto____10151 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10151))
{var and__3546__auto____10152 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10152))
{var and__3546__auto____10153 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10153))
{var and__3546__auto____10154 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10154))
{return p3.call(null,y);
} else
{return and__3546__auto____10154;
}
} else
{return and__3546__auto____10153;
}
} else
{return and__3546__auto____10152;
}
} else
{return and__3546__auto____10151;
}
} else
{return and__3546__auto____10150;
}
})());
});
var ep3__10352 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10155 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10155))
{var and__3546__auto____10157 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10157))
{var and__3546__auto____10159 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10159))
{var and__3546__auto____10160 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10160))
{var and__3546__auto____10161 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10161))
{var and__3546__auto____10162 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10162))
{var and__3546__auto____10164 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10164))
{var and__3546__auto____10165 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10165))
{return p3.call(null,z);
} else
{return and__3546__auto____10165;
}
} else
{return and__3546__auto____10164;
}
} else
{return and__3546__auto____10162;
}
} else
{return and__3546__auto____10161;
}
} else
{return and__3546__auto____10160;
}
} else
{return and__3546__auto____10159;
}
} else
{return and__3546__auto____10157;
}
} else
{return and__3546__auto____10155;
}
})());
});
var ep3__10353 = (function() { 
var G__10384__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10166 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10166))
{return cljs.core.every_QMARK_.call(null,(function (p1__9997_SHARP_){
var and__3546__auto____10167 = p1.call(null,p1__9997_SHARP_);

if(cljs.core.truth_(and__3546__auto____10167))
{var and__3546__auto____10168 = p2.call(null,p1__9997_SHARP_);

if(cljs.core.truth_(and__3546__auto____10168))
{return p3.call(null,p1__9997_SHARP_);
} else
{return and__3546__auto____10168;
}
} else
{return and__3546__auto____10167;
}
}),args);
} else
{return and__3546__auto____10166;
}
})());
};
var G__10384 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10384__delegate.call(this, x, y, z, args);
};
G__10384.cljs$lang$maxFixedArity = 3;
G__10384.cljs$lang$applyTo = (function (arglist__10387){
var x = cljs.core.first(arglist__10387);
var y = cljs.core.first(cljs.core.next(arglist__10387));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10387)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10387)));
return G__10384__delegate.call(this, x, y, z, args);
});
return G__10384;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10349.call(this);
case  1 :
return ep3__10350.call(this,x);
case  2 :
return ep3__10351.call(this,x,y);
case  3 :
return ep3__10352.call(this,x,y,z);
default:
return ep3__10353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10353.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10177 = (function() { 
var G__10393__delegate = function (p1,p2,p3,ps){
var ps__10169 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10397 = (function (){
return true;
});
var epn__10399 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__9999_SHARP_){
return p1__9999_SHARP_.call(null,x);
}),ps__10169);
});
var epn__10401 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10000_SHARP_){
var and__3546__auto____10170 = p1__10000_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10170))
{return p1__10000_SHARP_.call(null,y);
} else
{return and__3546__auto____10170;
}
}),ps__10169);
});
var epn__10403 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10002_SHARP_){
var and__3546__auto____10171 = p1__10002_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10171))
{var and__3546__auto____10172 = p1__10002_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10172))
{return p1__10002_SHARP_.call(null,z);
} else
{return and__3546__auto____10172;
}
} else
{return and__3546__auto____10171;
}
}),ps__10169);
});
var epn__10405 = (function() { 
var G__10416__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10173 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10173))
{return cljs.core.every_QMARK_.call(null,(function (p1__10004_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10004_SHARP_,args);
}),ps__10169);
} else
{return and__3546__auto____10173;
}
})());
};
var G__10416 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10416__delegate.call(this, x, y, z, args);
};
G__10416.cljs$lang$maxFixedArity = 3;
G__10416.cljs$lang$applyTo = (function (arglist__10420){
var x = cljs.core.first(arglist__10420);
var y = cljs.core.first(cljs.core.next(arglist__10420));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10420)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10420)));
return G__10416__delegate.call(this, x, y, z, args);
});
return G__10416;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10397.call(this);
case  1 :
return epn__10399.call(this,x);
case  2 :
return epn__10401.call(this,x,y);
case  3 :
return epn__10403.call(this,x,y,z);
default:
return epn__10405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10405.cljs$lang$applyTo;
return epn;
})()
};
var G__10393 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10393__delegate.call(this, p1, p2, p3, ps);
};
G__10393.cljs$lang$maxFixedArity = 3;
G__10393.cljs$lang$applyTo = (function (arglist__10424){
var p1 = cljs.core.first(arglist__10424);
var p2 = cljs.core.first(cljs.core.next(arglist__10424));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10424)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10424)));
return G__10393__delegate.call(this, p1, p2, p3, ps);
});
return G__10393;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10174.call(this,p1);
case  2 :
return every_pred__10175.call(this,p1,p2);
case  3 :
return every_pred__10176.call(this,p1,p2,p3);
default:
return every_pred__10177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10177.cljs$lang$applyTo;
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
var some_fn__10727 = (function (p){
return (function() {
var sp1 = null;
var sp1__10733 = (function (){
return null;
});
var sp1__10734 = (function (x){
return p.call(null,x);
});
var sp1__10735 = (function (x,y){
var or__3548__auto____10434 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10434))
{return or__3548__auto____10434;
} else
{return p.call(null,y);
}
});
var sp1__10736 = (function (x,y,z){
var or__3548__auto____10438 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10438))
{return or__3548__auto____10438;
} else
{var or__3548__auto____10441 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10441))
{return or__3548__auto____10441;
} else
{return p.call(null,z);
}
}
});
var sp1__10737 = (function() { 
var G__10742__delegate = function (x,y,z,args){
var or__3548__auto____10442 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10442))
{return or__3548__auto____10442;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__10742 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10742__delegate.call(this, x, y, z, args);
};
G__10742.cljs$lang$maxFixedArity = 3;
G__10742.cljs$lang$applyTo = (function (arglist__10743){
var x = cljs.core.first(arglist__10743);
var y = cljs.core.first(cljs.core.next(arglist__10743));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10743)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10743)));
return G__10742__delegate.call(this, x, y, z, args);
});
return G__10742;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__10733.call(this);
case  1 :
return sp1__10734.call(this,x);
case  2 :
return sp1__10735.call(this,x,y);
case  3 :
return sp1__10736.call(this,x,y,z);
default:
return sp1__10737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__10737.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__10728 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__10776 = (function (){
return null;
});
var sp2__10778 = (function (x){
var or__3548__auto____10452 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10452))
{return or__3548__auto____10452;
} else
{return p2.call(null,x);
}
});
var sp2__10780 = (function (x,y){
var or__3548__auto____10455 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10455))
{return or__3548__auto____10455;
} else
{var or__3548__auto____10457 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10457))
{return or__3548__auto____10457;
} else
{var or__3548__auto____10532 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10532))
{return or__3548__auto____10532;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__10781 = (function (x,y,z){
var or__3548__auto____10595 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10595))
{return or__3548__auto____10595;
} else
{var or__3548__auto____10599 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10599))
{return or__3548__auto____10599;
} else
{var or__3548__auto____10604 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10604))
{return or__3548__auto____10604;
} else
{var or__3548__auto____10605 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10605))
{return or__3548__auto____10605;
} else
{var or__3548__auto____10606 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10606))
{return or__3548__auto____10606;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__10782 = (function() { 
var G__10790__delegate = function (x,y,z,args){
var or__3548__auto____10607 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10607))
{return or__3548__auto____10607;
} else
{return cljs.core.some.call(null,(function (p1__10101_SHARP_){
var or__3548__auto____10608 = p1.call(null,p1__10101_SHARP_);

if(cljs.core.truth_(or__3548__auto____10608))
{return or__3548__auto____10608;
} else
{return p2.call(null,p1__10101_SHARP_);
}
}),args);
}
};
var G__10790 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10790__delegate.call(this, x, y, z, args);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = (function (arglist__10792){
var x = cljs.core.first(arglist__10792);
var y = cljs.core.first(cljs.core.next(arglist__10792));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10792)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10792)));
return G__10790__delegate.call(this, x, y, z, args);
});
return G__10790;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__10776.call(this);
case  1 :
return sp2__10778.call(this,x);
case  2 :
return sp2__10780.call(this,x,y);
case  3 :
return sp2__10781.call(this,x,y,z);
default:
return sp2__10782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__10782.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__10729 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__10796 = (function (){
return null;
});
var sp3__10797 = (function (x){
var or__3548__auto____10619 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10619))
{return or__3548__auto____10619;
} else
{var or__3548__auto____10623 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10623))
{return or__3548__auto____10623;
} else
{return p3.call(null,x);
}
}
});
var sp3__10798 = (function (x,y){
var or__3548__auto____10624 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10624))
{return or__3548__auto____10624;
} else
{var or__3548__auto____10625 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10625))
{return or__3548__auto____10625;
} else
{var or__3548__auto____10627 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10627))
{return or__3548__auto____10627;
} else
{var or__3548__auto____10628 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10628))
{return or__3548__auto____10628;
} else
{var or__3548__auto____10629 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10629))
{return or__3548__auto____10629;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__10799 = (function (x,y,z){
var or__3548__auto____10630 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10630))
{return or__3548__auto____10630;
} else
{var or__3548__auto____10631 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10631))
{return or__3548__auto____10631;
} else
{var or__3548__auto____10632 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____10632))
{return or__3548__auto____10632;
} else
{var or__3548__auto____10633 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10633))
{return or__3548__auto____10633;
} else
{var or__3548__auto____10634 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10634))
{return or__3548__auto____10634;
} else
{var or__3548__auto____10635 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____10635))
{return or__3548__auto____10635;
} else
{var or__3548__auto____10636 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10636))
{return or__3548__auto____10636;
} else
{var or__3548__auto____10637 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____10637))
{return or__3548__auto____10637;
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
var sp3__10800 = (function() { 
var G__10810__delegate = function (x,y,z,args){
var or__3548__auto____10640 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10640))
{return or__3548__auto____10640;
} else
{return cljs.core.some.call(null,(function (p1__10102_SHARP_){
var or__3548__auto____10642 = p1.call(null,p1__10102_SHARP_);

if(cljs.core.truth_(or__3548__auto____10642))
{return or__3548__auto____10642;
} else
{var or__3548__auto____10643 = p2.call(null,p1__10102_SHARP_);

if(cljs.core.truth_(or__3548__auto____10643))
{return or__3548__auto____10643;
} else
{return p3.call(null,p1__10102_SHARP_);
}
}
}),args);
}
};
var G__10810 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10810__delegate.call(this, x, y, z, args);
};
G__10810.cljs$lang$maxFixedArity = 3;
G__10810.cljs$lang$applyTo = (function (arglist__10814){
var x = cljs.core.first(arglist__10814);
var y = cljs.core.first(cljs.core.next(arglist__10814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10814)));
return G__10810__delegate.call(this, x, y, z, args);
});
return G__10810;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__10796.call(this);
case  1 :
return sp3__10797.call(this,x);
case  2 :
return sp3__10798.call(this,x,y);
case  3 :
return sp3__10799.call(this,x,y,z);
default:
return sp3__10800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__10800.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__10730 = (function() { 
var G__10818__delegate = function (p1,p2,p3,ps){
var ps__10645 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__10820 = (function (){
return null;
});
var spn__10821 = (function (x){
return cljs.core.some.call(null,(function (p1__10103_SHARP_){
return p1__10103_SHARP_.call(null,x);
}),ps__10645);
});
var spn__10822 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10104_SHARP_){
var or__3548__auto____10650 = p1__10104_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10650))
{return or__3548__auto____10650;
} else
{return p1__10104_SHARP_.call(null,y);
}
}),ps__10645);
});
var spn__10823 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10105_SHARP_){
var or__3548__auto____10654 = p1__10105_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____10654))
{return or__3548__auto____10654;
} else
{var or__3548__auto____10656 = p1__10105_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____10656))
{return or__3548__auto____10656;
} else
{return p1__10105_SHARP_.call(null,z);
}
}
}),ps__10645);
});
var spn__10824 = (function() { 
var G__10836__delegate = function (x,y,z,args){
var or__3548__auto____10658 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10658))
{return or__3548__auto____10658;
} else
{return cljs.core.some.call(null,(function (p1__10106_SHARP_){
return cljs.core.some.call(null,p1__10106_SHARP_,args);
}),ps__10645);
}
};
var G__10836 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10836__delegate.call(this, x, y, z, args);
};
G__10836.cljs$lang$maxFixedArity = 3;
G__10836.cljs$lang$applyTo = (function (arglist__10838){
var x = cljs.core.first(arglist__10838);
var y = cljs.core.first(cljs.core.next(arglist__10838));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10838)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10838)));
return G__10836__delegate.call(this, x, y, z, args);
});
return G__10836;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__10820.call(this);
case  1 :
return spn__10821.call(this,x);
case  2 :
return spn__10822.call(this,x,y);
case  3 :
return spn__10823.call(this,x,y,z);
default:
return spn__10824.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__10824.cljs$lang$applyTo;
return spn;
})()
};
var G__10818 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10818__delegate.call(this, p1, p2, p3, ps);
};
G__10818.cljs$lang$maxFixedArity = 3;
G__10818.cljs$lang$applyTo = (function (arglist__10841){
var p1 = cljs.core.first(arglist__10841);
var p2 = cljs.core.first(cljs.core.next(arglist__10841));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10841)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10841)));
return G__10818__delegate.call(this, p1, p2, p3, ps);
});
return G__10818;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__10727.call(this,p1);
case  2 :
return some_fn__10728.call(this,p1,p2);
case  3 :
return some_fn__10729.call(this,p1,p2,p3);
default:
return some_fn__10730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__10730.cljs$lang$applyTo;
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
var map__10945 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10848 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10848))
{var s__10850 = temp__3698__auto____10848;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__10850)),map.call(null,f,cljs.core.rest.call(null,s__10850)));
} else
{return null;
}
})));
});
var map__10946 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10852 = cljs.core.seq.call(null,c1);
var s2__10853 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____10854 = s1__10852;

if(cljs.core.truth_(and__3546__auto____10854))
{return s2__10853;
} else
{return and__3546__auto____10854;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10852),cljs.core.first.call(null,s2__10853)),map.call(null,f,cljs.core.rest.call(null,s1__10852),cljs.core.rest.call(null,s2__10853)));
} else
{return null;
}
})));
});
var map__10947 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__10856 = cljs.core.seq.call(null,c1);
var s2__10858 = cljs.core.seq.call(null,c2);
var s3__10860 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____10862 = s1__10856;

if(cljs.core.truth_(and__3546__auto____10862))
{var and__3546__auto____10863 = s2__10858;

if(cljs.core.truth_(and__3546__auto____10863))
{return s3__10860;
} else
{return and__3546__auto____10863;
}
} else
{return and__3546__auto____10862;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__10856),cljs.core.first.call(null,s2__10858),cljs.core.first.call(null,s3__10860)),map.call(null,f,cljs.core.rest.call(null,s1__10856),cljs.core.rest.call(null,s2__10858),cljs.core.rest.call(null,s3__10860)));
} else
{return null;
}
})));
});
var map__10948 = (function() { 
var G__10963__delegate = function (f,c1,c2,c3,colls){
var step__10940 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__10935 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__10935)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__10935),step.call(null,map.call(null,cljs.core.rest,ss__10935)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10430_SHARP_){
return cljs.core.apply.call(null,f,p1__10430_SHARP_);
}),step__10940.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__10963 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10963__delegate.call(this, f, c1, c2, c3, colls);
};
G__10963.cljs$lang$maxFixedArity = 4;
G__10963.cljs$lang$applyTo = (function (arglist__10964){
var f = cljs.core.first(arglist__10964);
var c1 = cljs.core.first(cljs.core.next(arglist__10964));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10964)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10964))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10964))));
return G__10963__delegate.call(this, f, c1, c2, c3, colls);
});
return G__10963;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__10945.call(this,f,c1);
case  3 :
return map__10946.call(this,f,c1,c2);
case  4 :
return map__10947.call(this,f,c1,c2,c3);
default:
return map__10948.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__10948.cljs$lang$applyTo;
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
{var temp__3698__auto____10970 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10970))
{var s__10971 = temp__3698__auto____10970;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__10971),take.call(null,(n - 1),cljs.core.rest.call(null,s__10971)));
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
var step__11022 = (function (n,coll){
while(true){
var s__10982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11020 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11020))
{return s__10982;
} else
{return and__3546__auto____11020;
}
})()))
{{
var G__11044 = (n - 1);
var G__11045 = cljs.core.rest.call(null,s__10982);
n = G__11044;
coll = G__11045;
continue;
}
} else
{return s__10982;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11022.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11048 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11049 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11048.call(this,n);
case  2 :
return drop_last__11049.call(this,n,s);
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
var s__11058 = cljs.core.seq.call(null,coll);
var lead__11060 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11060))
{{
var G__11063 = cljs.core.next.call(null,s__11058);
var G__11064 = cljs.core.next.call(null,lead__11060);
s__11058 = G__11063;
lead__11060 = G__11064;
continue;
}
} else
{return s__11058;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11071 = (function (pred,coll){
while(true){
var s__11069 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11070 = s__11069;

if(cljs.core.truth_(and__3546__auto____11070))
{return pred.call(null,cljs.core.first.call(null,s__11069));
} else
{return and__3546__auto____11070;
}
})()))
{{
var G__11073 = pred;
var G__11074 = cljs.core.rest.call(null,s__11069);
pred = G__11073;
coll = G__11074;
continue;
}
} else
{return s__11069;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11071.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11075 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11075))
{var s__11077 = temp__3698__auto____11075;

return cljs.core.concat.call(null,s__11077,cycle.call(null,s__11077));
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
var repeat__11078 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11079 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11078.call(this,n);
case  2 :
return repeat__11079.call(this,n,x);
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
var repeatedly__11084 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11085 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11084.call(this,n);
case  2 :
return repeatedly__11085.call(this,n,f);
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
var interleave__11153 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11146 = cljs.core.seq.call(null,c1);
var s2__11147 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11148 = s1__11146;

if(cljs.core.truth_(and__3546__auto____11148))
{return s2__11147;
} else
{return and__3546__auto____11148;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11146),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11147),interleave.call(null,cljs.core.rest.call(null,s1__11146),cljs.core.rest.call(null,s2__11147))));
} else
{return null;
}
})));
});
var interleave__11154 = (function() { 
var G__11156__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11152 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11152)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11152),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11152)));
} else
{return null;
}
})));
};
var G__11156 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11156__delegate.call(this, c1, c2, colls);
};
G__11156.cljs$lang$maxFixedArity = 2;
G__11156.cljs$lang$applyTo = (function (arglist__11157){
var c1 = cljs.core.first(arglist__11157);
var c2 = cljs.core.first(cljs.core.next(arglist__11157));
var colls = cljs.core.rest(cljs.core.next(arglist__11157));
return G__11156__delegate.call(this, c1, c2, colls);
});
return G__11156;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11153.call(this,c1,c2);
default:
return interleave__11154.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11154.cljs$lang$applyTo;
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
var cat__11166 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11161 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11161))
{var coll__11162 = temp__3695__auto____11161;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11162),cat.call(null,cljs.core.rest.call(null,coll__11162),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11166.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11176 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11177 = (function() { 
var G__11182__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11182 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11182__delegate.call(this, f, coll, colls);
};
G__11182.cljs$lang$maxFixedArity = 2;
G__11182.cljs$lang$applyTo = (function (arglist__11183){
var f = cljs.core.first(arglist__11183);
var coll = cljs.core.first(cljs.core.next(arglist__11183));
var colls = cljs.core.rest(cljs.core.next(arglist__11183));
return G__11182__delegate.call(this, f, coll, colls);
});
return G__11182;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11176.call(this,f,coll);
default:
return mapcat__11177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11177.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11184 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11184))
{var s__11185 = temp__3698__auto____11184;

var f__11186 = cljs.core.first.call(null,s__11185);
var r__11187 = cljs.core.rest.call(null,s__11185);

if(cljs.core.truth_(pred.call(null,f__11186)))
{return cljs.core.cons.call(null,f__11186,filter.call(null,pred,r__11187));
} else
{return filter.call(null,pred,r__11187);
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
var walk__11202 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11202.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11197_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11197_SHARP_));
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
var partition__11214 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11215 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11208 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11208))
{var s__11209 = temp__3698__auto____11208;

var p__11210 = cljs.core.take.call(null,n,s__11209);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11210))))
{return cljs.core.cons.call(null,p__11210,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11209)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11216 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11211 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11211))
{var s__11212 = temp__3698__auto____11211;

var p__11213 = cljs.core.take.call(null,n,s__11212);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11213))))
{return cljs.core.cons.call(null,p__11213,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11212)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11213,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11214.call(this,n,step);
case  3 :
return partition__11215.call(this,n,step,pad);
case  4 :
return partition__11216.call(this,n,step,pad,coll);
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
var get_in__11224 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11225 = (function (m,ks,not_found){
var sentinel__11220 = cljs.core.lookup_sentinel;
var m__11221 = m;
var ks__11222 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11222))
{var m__11223 = cljs.core.get.call(null,m__11221,cljs.core.first.call(null,ks__11222),sentinel__11220);

if(cljs.core.truth_((sentinel__11220 === m__11223)))
{return not_found;
} else
{{
var G__11227 = sentinel__11220;
var G__11228 = m__11223;
var G__11229 = cljs.core.next.call(null,ks__11222);
sentinel__11220 = G__11227;
m__11221 = G__11228;
ks__11222 = G__11229;
continue;
}
}
} else
{return m__11221;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11224.call(this,m,ks);
case  3 :
return get_in__11225.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11230,v){
var vec__11231__11232 = p__11230;
var k__11233 = cljs.core.nth.call(null,vec__11231__11232,0,null);
var ks__11234 = cljs.core.nthnext.call(null,vec__11231__11232,1);

if(cljs.core.truth_(ks__11234))
{return cljs.core.assoc.call(null,m,k__11233,assoc_in.call(null,cljs.core.get.call(null,m,k__11233),ks__11234,v));
} else
{return cljs.core.assoc.call(null,m,k__11233,v);
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
var update_in__delegate = function (m,p__11238,f,args){
var vec__11239__11240 = p__11238;
var k__11241 = cljs.core.nth.call(null,vec__11239__11240,0,null);
var ks__11242 = cljs.core.nthnext.call(null,vec__11239__11240,1);

if(cljs.core.truth_(ks__11242))
{return cljs.core.assoc.call(null,m,k__11241,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11241),ks__11242,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11241,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11241),args));
}
};
var update_in = function (m,p__11238,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11238, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11290){
var m = cljs.core.first(arglist__11290);
var p__11238 = cljs.core.first(cljs.core.next(arglist__11290));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11290)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11290)));
return update_in__delegate.call(this, m, p__11238, f, args);
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
var this__11299 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11332 = null;
var G__11332__11333 = (function (coll,k){
var this__11300 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11332__11334 = (function (coll,k,not_found){
var this__11301 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11332 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11332__11333.call(this,coll,k);
case  3 :
return G__11332__11334.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11332;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11302 = this;
var new_array__11303 = cljs.core.aclone.call(null,this__11302.array);

(new_array__11303[k] = v);
return (new cljs.core.Vector(this__11302.meta,new_array__11303));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__11336 = null;
var G__11336__11337 = (function (coll,k){
var this__11304 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11336__11338 = (function (coll,k,not_found){
var this__11305 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11336 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11336__11337.call(this,coll,k);
case  3 :
return G__11336__11338.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11336;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11306 = this;
var new_array__11308 = cljs.core.aclone.call(null,this__11306.array);

new_array__11308.push(o);
return (new cljs.core.Vector(this__11306.meta,new_array__11308));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11340 = null;
var G__11340__11341 = (function (v,f){
var this__11311 = this;
return cljs.core.ci_reduce.call(null,this__11311.array,f);
});
var G__11340__11342 = (function (v,f,start){
var this__11313 = this;
return cljs.core.ci_reduce.call(null,this__11313.array,f,start);
});
G__11340 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__11340__11341.call(this,v,f);
case  3 :
return G__11340__11342.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11340;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11314 = this;
if(cljs.core.truth_((this__11314.array.length > 0)))
{var vector_seq__11315 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11314.array.length)))
{return cljs.core.cons.call(null,(this__11314.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11315.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11316 = this;
return this__11316.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11317 = this;
var count__11318 = this__11317.array.length;

if(cljs.core.truth_((count__11318 > 0)))
{return (this__11317.array[(count__11318 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11319 = this;
if(cljs.core.truth_((this__11319.array.length > 0)))
{var new_array__11320 = cljs.core.aclone.call(null,this__11319.array);

new_array__11320.pop();
return (new cljs.core.Vector(this__11319.meta,new_array__11320));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11322 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11323 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11324 = this;
return (new cljs.core.Vector(meta,this__11324.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11326 = this;
return this__11326.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11510 = null;
var G__11510__11511 = (function (coll,n){
var this__11327 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11328 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11328))
{return (n < this__11327.array.length);
} else
{return and__3546__auto____11328;
}
})()))
{return (this__11327.array[n]);
} else
{return null;
}
});
var G__11510__11512 = (function (coll,n,not_found){
var this__11329 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11330 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____11330))
{return (n < this__11329.array.length);
} else
{return and__3546__auto____11330;
}
})()))
{return (this__11329.array[n]);
} else
{return not_found;
}
});
G__11510 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11510__11511.call(this,coll,n);
case  3 :
return G__11510__11512.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11510;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11331 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11331.meta);
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
vector.cljs$lang$applyTo = (function (arglist__11528){
var args = cljs.core.seq( arglist__11528 );;
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
var this__11539 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11613 = null;
var G__11613__11614 = (function (coll,k){
var this__11540 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__11613__11615 = (function (coll,k,not_found){
var this__11541 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__11613 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11613__11614.call(this,coll,k);
case  3 :
return G__11613__11615.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11613;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__11542 = this;
var v_pos__11543 = (this__11542.start + key);

return (new cljs.core.Subvec(this__11542.meta,cljs.core._assoc.call(null,this__11542.v,v_pos__11543,val),this__11542.start,((this__11542.end > (v_pos__11543 + 1)) ? this__11542.end : (v_pos__11543 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__11625 = null;
var G__11625__11626 = (function (coll,k){
var this__11544 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__11625__11627 = (function (coll,k,not_found){
var this__11546 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__11625 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11625__11626.call(this,coll,k);
case  3 :
return G__11625__11627.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11625;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11547 = this;
return (new cljs.core.Subvec(this__11547.meta,cljs.core._assoc_n.call(null,this__11547.v,this__11547.end,o),this__11547.start,(this__11547.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__11633 = null;
var G__11633__11634 = (function (coll,f){
var this__11549 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__11633__11635 = (function (coll,f,start){
var this__11551 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__11633 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__11633__11634.call(this,coll,f);
case  3 :
return G__11633__11635.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11633;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11553 = this;
var subvec_seq__11556 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__11553.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__11553.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__11556.call(null,this__11553.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11557 = this;
return (this__11557.end - this__11557.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11559 = this;
return cljs.core._nth.call(null,this__11559.v,(this__11559.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11561 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__11561.start,this__11561.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__11561.meta,this__11561.v,this__11561.start,(this__11561.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11564 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11566 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11568 = this;
return (new cljs.core.Subvec(meta,this__11568.v,this__11568.start,this__11568.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11570 = this;
return this__11570.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__11649 = null;
var G__11649__11650 = (function (coll,n){
var this__11602 = this;
return cljs.core._nth.call(null,this__11602.v,(this__11602.start + n));
});
var G__11649__11651 = (function (coll,n,not_found){
var this__11607 = this;
return cljs.core._nth.call(null,this__11607.v,(this__11607.start + n),not_found);
});
G__11649 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__11649__11650.call(this,coll,n);
case  3 :
return G__11649__11651.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11649;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11608 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__11608.meta);
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
var subvec__11675 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__11676 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__11675.call(this,v,start);
case  3 :
return subvec__11676.call(this,v,start,end);
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
var this__11692 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__11693 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11698 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11699 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__11699.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11704 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11705 = this;
return cljs.core._first.call(null,this__11705.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11706 = this;
var temp__3695__auto____11707 = cljs.core.next.call(null,this__11706.front);

if(cljs.core.truth_(temp__3695__auto____11707))
{var f1__11708 = temp__3695__auto____11707;

return (new cljs.core.PersistentQueueSeq(this__11706.meta,f1__11708,this__11706.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__11706.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__11706.meta,this__11706.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11709 = this;
return this__11709.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11716 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__11716.front,this__11716.rear));
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
var this__11748 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11749 = this;
if(cljs.core.truth_(this__11749.front))
{return (new cljs.core.PersistentQueue(this__11749.meta,(this__11749.count + 1),this__11749.front,cljs.core.conj.call(null,(function (){var or__3548__auto____11751 = this__11749.rear;

if(cljs.core.truth_(or__3548__auto____11751))
{return or__3548__auto____11751;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__11749.meta,(this__11749.count + 1),cljs.core.conj.call(null,this__11749.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11753 = this;
var rear__11767 = cljs.core.seq.call(null,this__11753.rear);

if(cljs.core.truth_((function (){var or__3548__auto____11769 = this__11753.front;

if(cljs.core.truth_(or__3548__auto____11769))
{return or__3548__auto____11769;
} else
{return rear__11767;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__11753.front,cljs.core.seq.call(null,rear__11767)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11772 = this;
return this__11772.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11775 = this;
return cljs.core._first.call(null,this__11775.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11778 = this;
if(cljs.core.truth_(this__11778.front))
{var temp__3695__auto____11781 = cljs.core.next.call(null,this__11778.front);

if(cljs.core.truth_(temp__3695__auto____11781))
{var f1__11783 = temp__3695__auto____11781;

return (new cljs.core.PersistentQueue(this__11778.meta,(this__11778.count - 1),f1__11783,this__11778.rear));
} else
{return (new cljs.core.PersistentQueue(this__11778.meta,(this__11778.count - 1),cljs.core.seq.call(null,this__11778.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__11787 = this;
return cljs.core.first.call(null,this__11787.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__11791 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11794 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11797 = this;
return (new cljs.core.PersistentQueue(meta,this__11797.count,this__11797.front,this__11797.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11803 = this;
return this__11803.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11804 = this;
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
var this__11845 = this;
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
var len__11860 = array.length;

var i__11861 = 0;

while(true){
if(cljs.core.truth_((i__11861 < len__11860)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__11861]))))
{return i__11861;
} else
{{
var G__11866 = (i__11861 + incr);
i__11861 = G__11866;
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
var obj_map_contains_key_QMARK___11868 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___11869 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____11867 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____11867))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____11867;
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
return obj_map_contains_key_QMARK___11868.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___11869.call(this,k,strobj,true_val,false_val);
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
var this__11882 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__11997 = null;
var G__11997__11998 = (function (coll,k){
var this__11884 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__11997__11999 = (function (coll,k,not_found){
var this__11887 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__11887.strobj,(this__11887.strobj[k]),not_found);
});
G__11997 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__11997__11998.call(this,coll,k);
case  3 :
return G__11997__11999.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__11997;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11891 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__11893 = goog.object.clone.call(null,this__11891.strobj);
var overwrite_QMARK___11895 = new_strobj__11893.hasOwnProperty(k);

(new_strobj__11893[k] = v);
if(cljs.core.truth_(overwrite_QMARK___11895))
{return (new cljs.core.ObjMap(this__11891.meta,this__11891.keys,new_strobj__11893));
} else
{var new_keys__11897 = cljs.core.aclone.call(null,this__11891.keys);

new_keys__11897.push(k);
return (new cljs.core.ObjMap(this__11891.meta,new_keys__11897,new_strobj__11893));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__11891.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__11899 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__11899.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12006 = null;
var G__12006__12007 = (function (coll,k){
var this__11900 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12006__12008 = (function (coll,k,not_found){
var this__11902 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12006 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12006__12007.call(this,coll,k);
case  3 :
return G__12006__12008.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12006;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__11903 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11909 = this;
if(cljs.core.truth_((this__11909.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__11874_SHARP_){
return cljs.core.vector.call(null,p1__11874_SHARP_,(this__11909.strobj[p1__11874_SHARP_]));
}),this__11909.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11913 = this;
return this__11913.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11915 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11957 = this;
return (new cljs.core.ObjMap(meta,this__11957.keys,this__11957.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11968 = this;
return this__11968.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__11973 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__11973.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__11983 = this;
if(cljs.core.truth_((function (){var and__3546__auto____11985 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____11985))
{return this__11983.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____11985;
}
})()))
{var new_keys__11988 = cljs.core.aclone.call(null,this__11983.keys);
var new_strobj__11989 = goog.object.clone.call(null,this__11983.strobj);

new_keys__11988.splice(cljs.core.scan_array.call(null,1,k,new_keys__11988),1);
cljs.core.js_delete.call(null,new_strobj__11989,k);
return (new cljs.core.ObjMap(this__11983.meta,new_keys__11988,new_strobj__11989));
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
var this__12035 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12108 = null;
var G__12108__12109 = (function (coll,k){
var this__12038 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12108__12110 = (function (coll,k,not_found){
var this__12040 = this;
var bucket__12041 = (this__12040.hashobj[cljs.core.hash.call(null,k)]);
var i__12043 = (cljs.core.truth_(bucket__12041)?cljs.core.scan_array.call(null,2,k,bucket__12041):null);

if(cljs.core.truth_(i__12043))
{return (bucket__12041[(i__12043 + 1)]);
} else
{return not_found;
}
});
G__12108 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12108__12109.call(this,coll,k);
case  3 :
return G__12108__12110.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12108;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12044 = this;
var h__12045 = cljs.core.hash.call(null,k);
var bucket__12046 = (this__12044.hashobj[h__12045]);

if(cljs.core.truth_(bucket__12046))
{var new_bucket__12047 = cljs.core.aclone.call(null,bucket__12046);
var new_hashobj__12048 = goog.object.clone.call(null,this__12044.hashobj);

(new_hashobj__12048[h__12045] = new_bucket__12047);
var temp__3695__auto____12049 = cljs.core.scan_array.call(null,2,k,new_bucket__12047);

if(cljs.core.truth_(temp__3695__auto____12049))
{var i__12050 = temp__3695__auto____12049;

(new_bucket__12047[(i__12050 + 1)] = v);
return (new cljs.core.HashMap(this__12044.meta,this__12044.count,new_hashobj__12048));
} else
{new_bucket__12047.push(k,v);
return (new cljs.core.HashMap(this__12044.meta,(this__12044.count + 1),new_hashobj__12048));
}
} else
{var new_hashobj__12051 = goog.object.clone.call(null,this__12044.hashobj);

(new_hashobj__12051[h__12045] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12044.meta,(this__12044.count + 1),new_hashobj__12051));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12052 = this;
var bucket__12053 = (this__12052.hashobj[cljs.core.hash.call(null,k)]);
var i__12055 = (cljs.core.truth_(bucket__12053)?cljs.core.scan_array.call(null,2,k,bucket__12053):null);

if(cljs.core.truth_(i__12055))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12128 = null;
var G__12128__12130 = (function (coll,k){
var this__12057 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12128__12131 = (function (coll,k,not_found){
var this__12061 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12128 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12128__12130.call(this,coll,k);
case  3 :
return G__12128__12131.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12128;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12063 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12085 = this;
if(cljs.core.truth_((this__12085.count > 0)))
{var hashes__12087 = cljs.core.js_keys.call(null,this__12085.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12024_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12085.hashobj[p1__12024_SHARP_])));
}),hashes__12087);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12089 = this;
return this__12089.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12090 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12091 = this;
return (new cljs.core.HashMap(meta,this__12091.count,this__12091.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12092 = this;
return this__12092.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12093 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12093.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12095 = this;
var h__12097 = cljs.core.hash.call(null,k);
var bucket__12098 = (this__12095.hashobj[h__12097]);
var i__12100 = (cljs.core.truth_(bucket__12098)?cljs.core.scan_array.call(null,2,k,bucket__12098):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12100)))
{return coll;
} else
{var new_hashobj__12101 = goog.object.clone.call(null,this__12095.hashobj);

if(cljs.core.truth_((3 > bucket__12098.length)))
{cljs.core.js_delete.call(null,new_hashobj__12101,h__12097);
} else
{var new_bucket__12104 = cljs.core.aclone.call(null,bucket__12098);

new_bucket__12104.splice(i__12100,2);
(new_hashobj__12101[h__12097] = new_bucket__12104);
}
return (new cljs.core.HashMap(this__12095.meta,(this__12095.count - 1),new_hashobj__12101));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12172 = ks.length;

var i__12173 = 0;
var out__12175 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12173 < len__12172)))
{{
var G__12179 = (i__12173 + 1);
var G__12181 = cljs.core.assoc.call(null,out__12175,(ks[i__12173]),(vs[i__12173]));
i__12173 = G__12179;
out__12175 = G__12181;
continue;
}
} else
{return out__12175;
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
var in$__12188 = cljs.core.seq.call(null,keyvals);
var out__12189 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12188))
{{
var G__12194 = cljs.core.nnext.call(null,in$__12188);
var G__12195 = cljs.core.assoc.call(null,out__12189,cljs.core.first.call(null,in$__12188),cljs.core.second.call(null,in$__12188));
in$__12188 = G__12194;
out__12189 = G__12195;
continue;
}
} else
{return out__12189;
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
hash_map.cljs$lang$applyTo = (function (arglist__12202){
var keyvals = cljs.core.seq( arglist__12202 );;
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
{return cljs.core.reduce.call(null,(function (p1__12207_SHARP_,p2__12208_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12228 = p1__12207_SHARP_;

if(cljs.core.truth_(or__3548__auto____12228))
{return or__3548__auto____12228;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12208_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12256){
var maps = cljs.core.seq( arglist__12256 );;
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
{var merge_entry__12270 = (function (m,e){
var k__12266 = cljs.core.first.call(null,e);
var v__12267 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12266)))
{return cljs.core.assoc.call(null,m,k__12266,f.call(null,cljs.core.get.call(null,m,k__12266),v__12267));
} else
{return cljs.core.assoc.call(null,m,k__12266,v__12267);
}
});
var merge2__12273 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12270,(function (){var or__3548__auto____12271 = m1;

if(cljs.core.truth_(or__3548__auto____12271))
{return or__3548__auto____12271;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12273,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__12283){
var f = cljs.core.first(arglist__12283);
var maps = cljs.core.rest(arglist__12283);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__12294 = cljs.core.ObjMap.fromObject([],{});
var keys__12295 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__12295))
{var key__12296 = cljs.core.first.call(null,keys__12295);
var entry__12298 = cljs.core.get.call(null,map,key__12296,"﷐'user/not-found");

{
var G__12300 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__12298,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__12294,key__12296,entry__12298):ret__12294);
var G__12301 = cljs.core.next.call(null,keys__12295);
ret__12294 = G__12300;
keys__12295 = G__12301;
continue;
}
} else
{return ret__12294;
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
var this__12389 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12425 = null;
var G__12425__12426 = (function (coll,v){
var this__12392 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__12425__12427 = (function (coll,v,not_found){
var this__12394 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__12394.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__12425 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__12425__12426.call(this,coll,v);
case  3 :
return G__12425__12427.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12425;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__12433 = null;
var G__12433__12435 = (function (coll,k){
var this__12397 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12433__12436 = (function (coll,k,not_found){
var this__12400 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12433 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12433__12435.call(this,coll,k);
case  3 :
return G__12433__12436.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12433;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12405 = this;
return (new cljs.core.Set(this__12405.meta,cljs.core.assoc.call(null,this__12405.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12408 = this;
return cljs.core.keys.call(null,this__12408.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__12411 = this;
return (new cljs.core.Set(this__12411.meta,cljs.core.dissoc.call(null,this__12411.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12412 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12415 = this;
var and__3546__auto____12416 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____12416))
{var and__3546__auto____12418 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____12418))
{return cljs.core.every_QMARK_.call(null,(function (p1__12293_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__12293_SHARP_);
}),other);
} else
{return and__3546__auto____12418;
}
} else
{return and__3546__auto____12416;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12422 = this;
return (new cljs.core.Set(meta,this__12422.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12423 = this;
return this__12423.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12424 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__12424.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__12450 = cljs.core.seq.call(null,coll);
var out__12451 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__12450))))
{{
var G__12454 = cljs.core.rest.call(null,in$__12450);
var G__12455 = cljs.core.conj.call(null,out__12451,cljs.core.first.call(null,in$__12450));
in$__12450 = G__12454;
out__12451 = G__12455;
continue;
}
} else
{return out__12451;
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
{var n__12459 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____12462 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____12462))
{var e__12463 = temp__3695__auto____12462;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__12463));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__12459,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__12449_SHARP_){
var temp__3695__auto____12467 = cljs.core.find.call(null,smap,p1__12449_SHARP_);

if(cljs.core.truth_(temp__3695__auto____12467))
{var e__12468 = temp__3695__auto____12467;

return cljs.core.second.call(null,e__12468);
} else
{return p1__12449_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__12572 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__12555,seen){
while(true){
var vec__12556__12558 = p__12555;
var f__12560 = cljs.core.nth.call(null,vec__12556__12558,0,null);
var xs__12561 = vec__12556__12558;

var temp__3698__auto____12565 = cljs.core.seq.call(null,xs__12561);

if(cljs.core.truth_(temp__3698__auto____12565))
{var s__12566 = temp__3698__auto____12565;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__12560)))
{{
var G__12579 = cljs.core.rest.call(null,s__12566);
var G__12580 = seen;
p__12555 = G__12579;
seen = G__12580;
continue;
}
} else
{return cljs.core.cons.call(null,f__12560,step.call(null,cljs.core.rest.call(null,s__12566),cljs.core.conj.call(null,seen,f__12560)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__12572.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__12585 = cljs.core.Vector.fromArray([]);
var s__12586 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__12586)))
{{
var G__12591 = cljs.core.conj.call(null,ret__12585,cljs.core.first.call(null,s__12586));
var G__12592 = cljs.core.next.call(null,s__12586);
ret__12585 = G__12591;
s__12586 = G__12592;
continue;
}
} else
{return cljs.core.seq.call(null,ret__12585);
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
{if(cljs.core.truth_((function (){var or__3548__auto____12597 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12597))
{return or__3548__auto____12597;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12601 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12601 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__12601 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____12604 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____12604))
{return or__3548__auto____12604;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__12606 = x.lastIndexOf("/");

if(cljs.core.truth_((i__12606 > -1)))
{return cljs.core.subs.call(null,x,2,i__12606);
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
var map__12617 = cljs.core.ObjMap.fromObject([],{});
var ks__12619 = cljs.core.seq.call(null,keys);
var vs__12620 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____12623 = ks__12619;

if(cljs.core.truth_(and__3546__auto____12623))
{return vs__12620;
} else
{return and__3546__auto____12623;
}
})()))
{{
var G__12628 = cljs.core.assoc.call(null,map__12617,cljs.core.first.call(null,ks__12619),cljs.core.first.call(null,vs__12620));
var G__12630 = cljs.core.next.call(null,ks__12619);
var G__12631 = cljs.core.next.call(null,vs__12620);
map__12617 = G__12628;
ks__12619 = G__12630;
vs__12620 = G__12631;
continue;
}
} else
{return map__12617;
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
var max_key__12643 = (function (k,x){
return x;
});
var max_key__12644 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__12646 = (function() { 
var G__12649__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12612_SHARP_,p2__12613_SHARP_){
return max_key.call(null,k,p1__12612_SHARP_,p2__12613_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__12649 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12649__delegate.call(this, k, x, y, more);
};
G__12649.cljs$lang$maxFixedArity = 3;
G__12649.cljs$lang$applyTo = (function (arglist__12653){
var k = cljs.core.first(arglist__12653);
var x = cljs.core.first(cljs.core.next(arglist__12653));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12653)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12653)));
return G__12649__delegate.call(this, k, x, y, more);
});
return G__12649;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__12643.call(this,k,x);
case  3 :
return max_key__12644.call(this,k,x,y);
default:
return max_key__12646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__12646.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__12661 = (function (k,x){
return x;
});
var min_key__12662 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__12664 = (function() { 
var G__12673__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__12635_SHARP_,p2__12636_SHARP_){
return min_key.call(null,k,p1__12635_SHARP_,p2__12636_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__12673 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12673__delegate.call(this, k, x, y, more);
};
G__12673.cljs$lang$maxFixedArity = 3;
G__12673.cljs$lang$applyTo = (function (arglist__12674){
var k = cljs.core.first(arglist__12674);
var x = cljs.core.first(cljs.core.next(arglist__12674));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12674)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12674)));
return G__12673__delegate.call(this, k, x, y, more);
});
return G__12673;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__12661.call(this,k,x);
case  3 :
return min_key__12662.call(this,k,x,y);
default:
return min_key__12664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__12664.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__12704 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__12705 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12693 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12693))
{var s__12694 = temp__3698__auto____12693;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__12694),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__12694)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__12704.call(this,n,step);
case  3 :
return partition_all__12705.call(this,n,step,coll);
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
var temp__3698__auto____12722 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12722))
{var s__12724 = temp__3698__auto____12722;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__12724))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__12724),take_while.call(null,pred,cljs.core.rest.call(null,s__12724)));
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
var this__12745 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__12750 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12802 = null;
var G__12802__12803 = (function (rng,f){
var this__12752 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__12802__12804 = (function (rng,f,s){
var this__12753 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__12802 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__12802__12803.call(this,rng,f);
case  3 :
return G__12802__12804.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12802;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__12758 = this;
var comp__12759 = (cljs.core.truth_((this__12758.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__12759.call(null,this__12758.start,this__12758.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__12762 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__12762.end - this__12762.start) / this__12762.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__12767 = this;
return this__12767.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__12768 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__12768.meta,(this__12768.start + this__12768.step),this__12768.end,this__12768.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__12774 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__12777 = this;
return (new cljs.core.Range(meta,this__12777.start,this__12777.end,this__12777.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__12778 = this;
return this__12778.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12825 = null;
var G__12825__12826 = (function (rng,n){
var this__12784 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12784.start + (n * this__12784.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12785 = (this__12784.start > this__12784.end);

if(cljs.core.truth_(and__3546__auto____12785))
{return cljs.core._EQ_.call(null,this__12784.step,0);
} else
{return and__3546__auto____12785;
}
})()))
{return this__12784.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__12825__12827 = (function (rng,n,not_found){
var this__12786 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__12786.start + (n * this__12786.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____12794 = (this__12786.start > this__12786.end);

if(cljs.core.truth_(and__3546__auto____12794))
{return cljs.core._EQ_.call(null,this__12786.step,0);
} else
{return and__3546__auto____12794;
}
})()))
{return this__12786.start;
} else
{return not_found;
}
}
});
G__12825 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__12825__12826.call(this,rng,n);
case  3 :
return G__12825__12827.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12825;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__12795 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12795.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__12857 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__12858 = (function (end){
return range.call(null,0,end,1);
});
var range__12859 = (function (start,end){
return range.call(null,start,end,1);
});
var range__12860 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__12857.call(this);
case  1 :
return range__12858.call(this,start);
case  2 :
return range__12859.call(this,start,end);
case  3 :
return range__12860.call(this,start,end,step);
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
var temp__3698__auto____12876 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12876))
{var s__13023 = temp__3698__auto____12876;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13023),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13023)));
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
var temp__3698__auto____13030 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13030))
{var s__13034 = temp__3698__auto____13030;

var fst__13037 = cljs.core.first.call(null,s__13034);
var fv__13038 = f.call(null,fst__13037);
var run__13040 = cljs.core.cons.call(null,fst__13037,cljs.core.take_while.call(null,(function (p1__13024_SHARP_){
return cljs.core._EQ_.call(null,fv__13038,f.call(null,p1__13024_SHARP_));
}),cljs.core.next.call(null,s__13034)));

return cljs.core.cons.call(null,run__13040,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13040),s__13034))));
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
var reductions__13079 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13072))
{var s__13073 = temp__3695__auto____13072;

return reductions.call(null,f,cljs.core.first.call(null,s__13073),cljs.core.rest.call(null,s__13073));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13080 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13074 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13074))
{var s__13076 = temp__3698__auto____13074;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13076)),cljs.core.rest.call(null,s__13076));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13079.call(this,f,init);
case  3 :
return reductions__13080.call(this,f,init,coll);
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
var juxt__13119 = (function (f){
return (function() {
var G__13125 = null;
var G__13125__13126 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13125__13127 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13125__13128 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13125__13129 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13125__13130 = (function() { 
var G__13137__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13137 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13137__delegate.call(this, x, y, z, args);
};
G__13137.cljs$lang$maxFixedArity = 3;
G__13137.cljs$lang$applyTo = (function (arglist__13141){
var x = cljs.core.first(arglist__13141);
var y = cljs.core.first(cljs.core.next(arglist__13141));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13141)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13141)));
return G__13137__delegate.call(this, x, y, z, args);
});
return G__13137;
})()
;
G__13125 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13125__13126.call(this);
case  1 :
return G__13125__13127.call(this,x);
case  2 :
return G__13125__13128.call(this,x,y);
case  3 :
return G__13125__13129.call(this,x,y,z);
default:
return G__13125__13130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13125.cljs$lang$maxFixedArity = 3;
G__13125.cljs$lang$applyTo = G__13125__13130.cljs$lang$applyTo;
return G__13125;
})()
});
var juxt__13120 = (function (f,g){
return (function() {
var G__13143 = null;
var G__13143__13144 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13143__13145 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13143__13146 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13143__13147 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13143__13148 = (function() { 
var G__13154__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13154 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13154__delegate.call(this, x, y, z, args);
};
G__13154.cljs$lang$maxFixedArity = 3;
G__13154.cljs$lang$applyTo = (function (arglist__13156){
var x = cljs.core.first(arglist__13156);
var y = cljs.core.first(cljs.core.next(arglist__13156));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13156)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13156)));
return G__13154__delegate.call(this, x, y, z, args);
});
return G__13154;
})()
;
G__13143 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13143__13144.call(this);
case  1 :
return G__13143__13145.call(this,x);
case  2 :
return G__13143__13146.call(this,x,y);
case  3 :
return G__13143__13147.call(this,x,y,z);
default:
return G__13143__13148.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13143.cljs$lang$maxFixedArity = 3;
G__13143.cljs$lang$applyTo = G__13143__13148.cljs$lang$applyTo;
return G__13143;
})()
});
var juxt__13121 = (function (f,g,h){
return (function() {
var G__13159 = null;
var G__13159__13160 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13159__13161 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13159__13162 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13159__13163 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13159__13164 = (function() { 
var G__13174__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13174 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13174__delegate.call(this, x, y, z, args);
};
G__13174.cljs$lang$maxFixedArity = 3;
G__13174.cljs$lang$applyTo = (function (arglist__13175){
var x = cljs.core.first(arglist__13175);
var y = cljs.core.first(cljs.core.next(arglist__13175));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13175)));
return G__13174__delegate.call(this, x, y, z, args);
});
return G__13174;
})()
;
G__13159 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13159__13160.call(this);
case  1 :
return G__13159__13161.call(this,x);
case  2 :
return G__13159__13162.call(this,x,y);
case  3 :
return G__13159__13163.call(this,x,y,z);
default:
return G__13159__13164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13159.cljs$lang$maxFixedArity = 3;
G__13159.cljs$lang$applyTo = G__13159__13164.cljs$lang$applyTo;
return G__13159;
})()
});
var juxt__13122 = (function() { 
var G__13183__delegate = function (f,g,h,fs){
var fs__13099 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13188 = null;
var G__13188__13190 = (function (){
return cljs.core.reduce.call(null,(function (p1__13061_SHARP_,p2__13062_SHARP_){
return cljs.core.conj.call(null,p1__13061_SHARP_,p2__13062_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13099);
});
var G__13188__13192 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13064_SHARP_,p2__13065_SHARP_){
return cljs.core.conj.call(null,p1__13064_SHARP_,p2__13065_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13099);
});
var G__13188__13193 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13066_SHARP_,p2__13067_SHARP_){
return cljs.core.conj.call(null,p1__13066_SHARP_,p2__13067_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13099);
});
var G__13188__13194 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13068_SHARP_,p2__13069_SHARP_){
return cljs.core.conj.call(null,p1__13068_SHARP_,p2__13069_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13099);
});
var G__13188__13195 = (function() { 
var G__13208__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13070_SHARP_,p2__13071_SHARP_){
return cljs.core.conj.call(null,p1__13070_SHARP_,cljs.core.apply.call(null,p2__13071_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13099);
};
var G__13208 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13208__delegate.call(this, x, y, z, args);
};
G__13208.cljs$lang$maxFixedArity = 3;
G__13208.cljs$lang$applyTo = (function (arglist__13212){
var x = cljs.core.first(arglist__13212);
var y = cljs.core.first(cljs.core.next(arglist__13212));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13212)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13212)));
return G__13208__delegate.call(this, x, y, z, args);
});
return G__13208;
})()
;
G__13188 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13188__13190.call(this);
case  1 :
return G__13188__13192.call(this,x);
case  2 :
return G__13188__13193.call(this,x,y);
case  3 :
return G__13188__13194.call(this,x,y,z);
default:
return G__13188__13195.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13188.cljs$lang$maxFixedArity = 3;
G__13188.cljs$lang$applyTo = G__13188__13195.cljs$lang$applyTo;
return G__13188;
})()
};
var G__13183 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13183__delegate.call(this, f, g, h, fs);
};
G__13183.cljs$lang$maxFixedArity = 3;
G__13183.cljs$lang$applyTo = (function (arglist__13222){
var f = cljs.core.first(arglist__13222);
var g = cljs.core.first(cljs.core.next(arglist__13222));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13222)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13222)));
return G__13183__delegate.call(this, f, g, h, fs);
});
return G__13183;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13119.call(this,f);
case  2 :
return juxt__13120.call(this,f,g);
case  3 :
return juxt__13121.call(this,f,g,h);
default:
return juxt__13122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13122.cljs$lang$applyTo;
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
var dorun__13230 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13233 = cljs.core.next.call(null,coll);
coll = G__13233;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13231 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13227 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13227))
{return (n > 0);
} else
{return and__3546__auto____13227;
}
})()))
{{
var G__13234 = (n - 1);
var G__13235 = cljs.core.next.call(null,coll);
n = G__13234;
coll = G__13235;
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
return dorun__13230.call(this,n);
case  2 :
return dorun__13231.call(this,n,coll);
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
var doall__13240 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13241 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13240.call(this,n);
case  2 :
return doall__13241.call(this,n,coll);
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
var matches__13246 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13246),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13246),1)))
{return cljs.core.first.call(null,matches__13246);
} else
{return cljs.core.vec.call(null,matches__13246);
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
var matches__13250 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13250)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13250),1)))
{return cljs.core.first.call(null,matches__13250);
} else
{return cljs.core.vec.call(null,matches__13250);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13253 = cljs.core.re_find.call(null,re,s);
var match_idx__13255 = s.search(re);
var match_str__13256 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13253))?cljs.core.first.call(null,match_data__13253):match_data__13253);
var post_match__13257 = cljs.core.subs.call(null,s,(match_idx__13255 + cljs.core.count.call(null,match_str__13256)));

if(cljs.core.truth_(match_data__13253))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13253,re_seq.call(null,re,post_match__13257));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13275_SHARP_){
return print_one.call(null,p1__13275_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13315 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13315))
{var and__3546__auto____13322 = (function (){var x__445__auto____13316 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13319 = x__445__auto____13316;

if(cljs.core.truth_(and__3546__auto____13319))
{var and__3546__auto____13321 = x__445__auto____13316.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13321))
{return cljs.core.not.call(null,x__445__auto____13316.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13321;
}
} else
{return and__3546__auto____13319;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13316);
}
})();

if(cljs.core.truth_(and__3546__auto____13322))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13322;
}
} else
{return and__3546__auto____13315;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13325 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13327 = x__445__auto____13325;

if(cljs.core.truth_(and__3546__auto____13327))
{var and__3546__auto____13329 = x__445__auto____13325.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13329))
{return cljs.core.not.call(null,x__445__auto____13325.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13329;
}
} else
{return and__3546__auto____13327;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13325);
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
var first_obj__13362 = cljs.core.first.call(null,objs);
var sb__13363 = (new goog.string.StringBuffer());

var G__13364__13367 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13364__13367))
{var obj__13372 = cljs.core.first.call(null,G__13364__13367);
var G__13364__13373 = G__13364__13367;

while(true){
if(cljs.core.truth_((obj__13372 === first_obj__13362)))
{} else
{sb__13363.append(" ");
}
var G__13376__13378 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13372,opts));

if(cljs.core.truth_(G__13376__13378))
{var string__13380 = cljs.core.first.call(null,G__13376__13378);
var G__13376__13381 = G__13376__13378;

while(true){
sb__13363.append(string__13380);
var temp__3698__auto____13384 = cljs.core.next.call(null,G__13376__13381);

if(cljs.core.truth_(temp__3698__auto____13384))
{var G__13376__13386 = temp__3698__auto____13384;

{
var G__13398 = cljs.core.first.call(null,G__13376__13386);
var G__13399 = G__13376__13386;
string__13380 = G__13398;
G__13376__13381 = G__13399;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13387 = cljs.core.next.call(null,G__13364__13373);

if(cljs.core.truth_(temp__3698__auto____13387))
{var G__13364__13389 = temp__3698__auto____13387;

{
var G__13400 = cljs.core.first.call(null,G__13364__13389);
var G__13401 = G__13364__13389;
obj__13372 = G__13400;
G__13364__13373 = G__13401;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13363);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13409 = cljs.core.first.call(null,objs);

var G__13410__13413 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13410__13413))
{var obj__13416 = cljs.core.first.call(null,G__13410__13413);
var G__13410__13417 = G__13410__13413;

while(true){
if(cljs.core.truth_((obj__13416 === first_obj__13409)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13420__13422 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13416,opts));

if(cljs.core.truth_(G__13420__13422))
{var string__13424 = cljs.core.first.call(null,G__13420__13422);
var G__13420__13425 = G__13420__13422;

while(true){
cljs.core.string_print.call(null,string__13424);
var temp__3698__auto____13426 = cljs.core.next.call(null,G__13420__13425);

if(cljs.core.truth_(temp__3698__auto____13426))
{var G__13420__13428 = temp__3698__auto____13426;

{
var G__13448 = cljs.core.first.call(null,G__13420__13428);
var G__13450 = G__13420__13428;
string__13424 = G__13448;
G__13420__13425 = G__13450;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13435 = cljs.core.next.call(null,G__13410__13417);

if(cljs.core.truth_(temp__3698__auto____13435))
{var G__13410__13436 = temp__3698__auto____13435;

{
var G__13452 = cljs.core.first.call(null,G__13410__13436);
var G__13453 = G__13410__13436;
obj__13416 = G__13452;
G__13410__13417 = G__13453;
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
pr_str.cljs$lang$applyTo = (function (arglist__13484){
var objs = cljs.core.seq( arglist__13484 );;
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
pr.cljs$lang$applyTo = (function (arglist__13491){
var objs = cljs.core.seq( arglist__13491 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13497){
var objs = cljs.core.seq( arglist__13497 );;
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
prn.cljs$lang$applyTo = (function (arglist__13501){
var objs = cljs.core.seq( arglist__13501 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__13575 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13575,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____13631 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13631))
{var nspc__13634 = temp__3698__auto____13631;

return cljs.core.str.call(null,nspc__13634,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____13640 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____13640))
{var nspc__13643 = temp__3698__auto____13640;

return cljs.core.str.call(null,nspc__13643,"/");
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
var pr_pair__13660 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__13660,"{",", ","}",opts,coll);
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
var this__13677 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__13702 = this;
var G__13706__13709 = cljs.core.seq.call(null,this__13702.watches);

if(cljs.core.truth_(G__13706__13709))
{var G__13712__13718 = cljs.core.first.call(null,G__13706__13709);
var vec__13715__13720 = G__13712__13718;
var key__13723 = cljs.core.nth.call(null,vec__13715__13720,0,null);
var f__13726 = cljs.core.nth.call(null,vec__13715__13720,1,null);
var G__13706__13727 = G__13706__13709;

var G__13712__13729 = G__13712__13718;
var G__13706__13731 = G__13706__13727;

while(true){
var vec__13733__13735 = G__13712__13729;
var key__13737 = cljs.core.nth.call(null,vec__13733__13735,0,null);
var f__13738 = cljs.core.nth.call(null,vec__13733__13735,1,null);
var G__13706__13739 = G__13706__13731;

f__13738.call(null,key__13737,this$,oldval,newval);
var temp__3698__auto____13741 = cljs.core.next.call(null,G__13706__13739);

if(cljs.core.truth_(temp__3698__auto____13741))
{var G__13706__13743 = temp__3698__auto____13741;

{
var G__13775 = cljs.core.first.call(null,G__13706__13743);
var G__13776 = G__13706__13743;
G__13712__13729 = G__13775;
G__13706__13731 = G__13776;
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
var this__13745 = this;
return this$.watches = cljs.core.assoc.call(null,this__13745.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__13749 = this;
return this$.watches = cljs.core.dissoc.call(null,this__13749.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__13753 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__13753.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__13755 = this;
return this__13755.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13759 = this;
return this__13759.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__13762 = this;
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
var atom__13818 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__13819 = (function() { 
var G__13823__delegate = function (x,p__13805){
var map__13809__13811 = p__13805;
var map__13809__13812 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13809__13811))?cljs.core.apply.call(null,cljs.core.hash_map,map__13809__13811):map__13809__13811);
var validator__13813 = cljs.core.get.call(null,map__13809__13812,"﷐'validator");
var meta__13814 = cljs.core.get.call(null,map__13809__13812,"﷐'meta");

return (new cljs.core.Atom(x,meta__13814,validator__13813,null));
};
var G__13823 = function (x,var_args){
var p__13805 = null;
if (goog.isDef(var_args)) {
  p__13805 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__13823__delegate.call(this, x, p__13805);
};
G__13823.cljs$lang$maxFixedArity = 1;
G__13823.cljs$lang$applyTo = (function (arglist__13825){
var x = cljs.core.first(arglist__13825);
var p__13805 = cljs.core.rest(arglist__13825);
return G__13823__delegate.call(this, x, p__13805);
});
return G__13823;
})()
;
atom = function(x,var_args){
var p__13805 = var_args;
switch(arguments.length){
case  1 :
return atom__13818.call(this,x);
default:
return atom__13819.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__13819.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____13828 = a.validator;

if(cljs.core.truth_(temp__3698__auto____13828))
{var validate__13829 = temp__3698__auto____13828;

if(cljs.core.truth_(validate__13829.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__13830 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__13830,new_value);
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
var swap_BANG___13841 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___13842 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___13843 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___13844 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___13845 = (function() { 
var G__13851__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__13851 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__13851__delegate.call(this, a, f, x, y, z, more);
};
G__13851.cljs$lang$maxFixedArity = 5;
G__13851.cljs$lang$applyTo = (function (arglist__13853){
var a = cljs.core.first(arglist__13853);
var f = cljs.core.first(cljs.core.next(arglist__13853));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13853)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13853))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13853)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__13853)))));
return G__13851__delegate.call(this, a, f, x, y, z, more);
});
return G__13851;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___13841.call(this,a,f);
case  3 :
return swap_BANG___13842.call(this,a,f,x);
case  4 :
return swap_BANG___13843.call(this,a,f,x,y);
case  5 :
return swap_BANG___13844.call(this,a,f,x,y,z);
default:
return swap_BANG___13845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___13845.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__13862){
var iref = cljs.core.first(arglist__13862);
var f = cljs.core.first(cljs.core.next(arglist__13862));
var args = cljs.core.rest(cljs.core.next(arglist__13862));
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
var gensym__13901 = (function (){
return gensym.call(null,"G__");
});
var gensym__13902 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__13901.call(this);
case  1 :
return gensym__13902.call(this,prefix_string);
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
var this__13911 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__13911.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__13912 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__13912.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__13912.state,this__13912.f);
}
return cljs.core.deref.call(null,this__13912.state);
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
delay.cljs$lang$applyTo = (function (arglist__13914){
var body = cljs.core.seq( arglist__13914 );;
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
var map__13920__13921 = options;
var map__13920__13922 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__13920__13921))?cljs.core.apply.call(null,cljs.core.hash_map,map__13920__13921):map__13920__13921);
var keywordize_keys__13923 = cljs.core.get.call(null,map__13920__13922,"﷐'keywordize-keys");
var keyfn__13924 = (cljs.core.truth_(keywordize_keys__13923)?cljs.core.keyword:cljs.core.str);
var f__14075 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14074 = (function iter__13931(s__13932){
return (new cljs.core.LazySeq(null,false,(function (){
var s__13932__13934 = s__13932;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__13932__13934)))
{var k__14073 = cljs.core.first.call(null,s__13932__13934);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__13924.call(null,k__14073),thisfn.call(null,(x[k__14073]))]),iter__13931.call(null,cljs.core.rest.call(null,s__13932__13934)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14074.call(null,cljs.core.js_keys.call(null,x));
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

return f__14075.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14092){
var x = cljs.core.first(arglist__14092);
var options = cljs.core.rest(arglist__14092);
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
var mem__14096 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14102__delegate = function (args){
var temp__3695__auto____14097 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14096),args);

if(cljs.core.truth_(temp__3695__auto____14097))
{var v__14098 = temp__3695__auto____14097;

return v__14098;
} else
{var ret__14099 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14096,cljs.core.assoc,args,ret__14099);
return ret__14099;
}
};
var G__14102 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14102__delegate.call(this, args);
};
G__14102.cljs$lang$maxFixedArity = 0;
G__14102.cljs$lang$applyTo = (function (arglist__14103){
var args = cljs.core.seq( arglist__14103 );;
return G__14102__delegate.call(this, args);
});
return G__14102;
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
var trampoline__14111 = (function (f){
while(true){
var ret__14104 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14104)))
{{
var G__14114 = ret__14104;
f = G__14114;
continue;
}
} else
{return ret__14104;
}
break;
}
});
var trampoline__14112 = (function() { 
var G__14115__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14115 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14115__delegate.call(this, f, args);
};
G__14115.cljs$lang$maxFixedArity = 1;
G__14115.cljs$lang$applyTo = (function (arglist__14120){
var f = cljs.core.first(arglist__14120);
var args = cljs.core.rest(arglist__14120);
return G__14115__delegate.call(this, f, args);
});
return G__14115;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14111.call(this,f);
default:
return trampoline__14112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14112.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14124 = (function (){
return rand.call(null,1);
});
var rand__14125 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14124.call(this);
case  1 :
return rand__14125.call(this,n);
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
var k__14135 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14135,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14135,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14186 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14187 = (function (h,child,parent){
var or__3548__auto____14160 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14160))
{return or__3548__auto____14160;
} else
{var or__3548__auto____14167 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14167))
{return or__3548__auto____14167;
} else
{var and__3546__auto____14168 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14168))
{var and__3546__auto____14170 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14170))
{var and__3546__auto____14175 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14175))
{var ret__14178 = true;
var i__14179 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14182 = cljs.core.not.call(null,ret__14178);

if(cljs.core.truth_(or__3548__auto____14182))
{return or__3548__auto____14182;
} else
{return cljs.core._EQ_.call(null,i__14179,cljs.core.count.call(null,parent));
}
})()))
{return ret__14178;
} else
{{
var G__14189 = isa_QMARK_.call(null,h,child.call(null,i__14179),parent.call(null,i__14179));
var G__14190 = (i__14179 + 1);
ret__14178 = G__14189;
i__14179 = G__14190;
continue;
}
}
break;
}
} else
{return and__3546__auto____14175;
}
} else
{return and__3546__auto____14170;
}
} else
{return and__3546__auto____14168;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14186.call(this,h,child);
case  3 :
return isa_QMARK___14187.call(this,h,child,parent);
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
var parents__14195 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14196 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14195.call(this,h);
case  2 :
return parents__14196.call(this,h,tag);
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
var ancestors__14207 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14208 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14207.call(this,h);
case  2 :
return ancestors__14208.call(this,h,tag);
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
var descendants__14214 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14216 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14214.call(this,h);
case  2 :
return descendants__14216.call(this,h,tag);
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
var derive__14243 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14244 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14231 = "﷐'parents".call(null,h);
var td__14232 = "﷐'descendants".call(null,h);
var ta__14233 = "﷐'ancestors".call(null,h);
var tf__14237 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14238 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14231.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14233.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14233.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14231,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14237.call(null,"﷐'ancestors".call(null,h),tag,td__14232,parent,ta__14233),"﷐'descendants":tf__14237.call(null,"﷐'descendants".call(null,h),parent,ta__14233,tag,td__14232)});
})());

if(cljs.core.truth_(or__3548__auto____14238))
{return or__3548__auto____14238;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14243.call(this,h,tag);
case  3 :
return derive__14244.call(this,h,tag,parent);
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
var underive__14337 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14339 = (function (h,tag,parent){
var parentMap__14319 = "﷐'parents".call(null,h);
var childsParents__14321 = (cljs.core.truth_(parentMap__14319.call(null,tag))?cljs.core.disj.call(null,parentMap__14319.call(null,tag),parent):cljs.core.set([]));
var newParents__14323 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14321))?cljs.core.assoc.call(null,parentMap__14319,tag,childsParents__14321):cljs.core.dissoc.call(null,parentMap__14319,tag));
var deriv_seq__14327 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14221_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14221_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14221_SHARP_),cljs.core.second.call(null,p1__14221_SHARP_)));
}),cljs.core.seq.call(null,newParents__14323)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14319.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14222_SHARP_,p2__14223_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14222_SHARP_,p2__14223_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14327));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14337.call(this,h,tag);
case  3 :
return underive__14339.call(this,h,tag,parent);
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
var xprefs__14414 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14416 = (cljs.core.truth_((function (){var and__3546__auto____14415 = xprefs__14414;

if(cljs.core.truth_(and__3546__auto____14415))
{return xprefs__14414.call(null,y);
} else
{return and__3546__auto____14415;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14416))
{return or__3548__auto____14416;
} else
{var or__3548__auto____14420 = (function (){var ps__14418 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14418) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14418),prefer_table)))
{} else
{}
{
var G__14425 = cljs.core.rest.call(null,ps__14418);
ps__14418 = G__14425;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14420))
{return or__3548__auto____14420;
} else
{var or__3548__auto____14422 = (function (){var ps__14421 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14421) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14421),y,prefer_table)))
{} else
{}
{
var G__14427 = cljs.core.rest.call(null,ps__14421);
ps__14421 = G__14427;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14422))
{return or__3548__auto____14422;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14435 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14435))
{return or__3548__auto____14435;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14453 = cljs.core.reduce.call(null,(function (be,p__14440){
var vec__14442__14444 = p__14440;
var k__14445 = cljs.core.nth.call(null,vec__14442__14444,0,null);
var ___14446 = cljs.core.nth.call(null,vec__14442__14444,1,null);
var e__14447 = vec__14442__14444;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14445)))
{var be2__14451 = (cljs.core.truth_((function (){var or__3548__auto____14450 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____14450))
{return or__3548__auto____14450;
} else
{return cljs.core.dominates.call(null,k__14445,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14447:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14451),k__14445,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14445," and ",cljs.core.first.call(null,be2__14451),", and neither is preferred")));
}
return be2__14451;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__14453))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14453));
return cljs.core.second.call(null,best_entry__14453);
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
if(cljs.core.truth_((function (){var and__3546__auto____14507 = mf;

if(cljs.core.truth_(and__3546__auto____14507))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____14507;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____14511 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14511))
{return or__3548__auto____14511;
} else
{var or__3548__auto____14512 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____14512))
{return or__3548__auto____14512;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____14513 = mf;

if(cljs.core.truth_(and__3546__auto____14513))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____14513;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____14514 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14514))
{return or__3548__auto____14514;
} else
{var or__3548__auto____14515 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____14515))
{return or__3548__auto____14515;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14518 = mf;

if(cljs.core.truth_(and__3546__auto____14518))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____14518;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14520 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14520))
{return or__3548__auto____14520;
} else
{var or__3548__auto____14522 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____14522))
{return or__3548__auto____14522;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____14523 = mf;

if(cljs.core.truth_(and__3546__auto____14523))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____14523;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____14524 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14524))
{return or__3548__auto____14524;
} else
{var or__3548__auto____14525 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____14525))
{return or__3548__auto____14525;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14526 = mf;

if(cljs.core.truth_(and__3546__auto____14526))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____14526;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14527 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14527))
{return or__3548__auto____14527;
} else
{var or__3548__auto____14528 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____14528))
{return or__3548__auto____14528;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14529 = mf;

if(cljs.core.truth_(and__3546__auto____14529))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____14529;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____14530 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14530))
{return or__3548__auto____14530;
} else
{var or__3548__auto____14531 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____14531))
{return or__3548__auto____14531;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____14532 = mf;

if(cljs.core.truth_(and__3546__auto____14532))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____14532;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____14533 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14533))
{return or__3548__auto____14533;
} else
{var or__3548__auto____14534 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____14534))
{return or__3548__auto____14534;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____14535 = mf;

if(cljs.core.truth_(and__3546__auto____14535))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____14535;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____14536 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14536))
{return or__3548__auto____14536;
} else
{var or__3548__auto____14537 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____14537))
{return or__3548__auto____14537;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__14544 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__14545 = cljs.core._get_method.call(null,mf,dispatch_val__14544);

if(cljs.core.truth_(target_fn__14545))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__14544)));
}
return cljs.core.apply.call(null,target_fn__14545,args);
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
var this__14551 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__14552 = this;
cljs.core.swap_BANG_.call(null,this__14552.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14552.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14552.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__14552.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__14553 = this;
cljs.core.swap_BANG_.call(null,this__14553.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__14553.method_cache,this__14553.method_table,this__14553.cached_hierarchy,this__14553.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__14554 = this;
cljs.core.swap_BANG_.call(null,this__14554.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__14554.method_cache,this__14554.method_table,this__14554.cached_hierarchy,this__14554.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__14555 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__14555.cached_hierarchy),cljs.core.deref.call(null,this__14555.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__14555.method_cache,this__14555.method_table,this__14555.cached_hierarchy,this__14555.hierarchy);
}
var temp__3695__auto____14558 = cljs.core.deref.call(null,this__14555.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____14558))
{var target_fn__14561 = temp__3695__auto____14558;

return target_fn__14561;
} else
{var temp__3695__auto____14563 = cljs.core.find_and_cache_best_method.call(null,this__14555.name,dispatch_val,this__14555.hierarchy,this__14555.method_table,this__14555.prefer_table,this__14555.method_cache,this__14555.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____14563))
{var target_fn__14564 = temp__3695__auto____14563;

return target_fn__14564;
} else
{return cljs.core.deref.call(null,this__14555.method_table).call(null,this__14555.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__14566 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__14566.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__14566.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__14566.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__14566.method_cache,this__14566.method_table,this__14566.cached_hierarchy,this__14566.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__14620 = this;
return cljs.core.deref.call(null,this__14620.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__14624 = this;
return cljs.core.deref.call(null,this__14624.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__14627 = this;
return cljs.core.do_dispatch.call(null,mf,this__14627.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__14645__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__14645 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14645__delegate.call(this, _, args);
};
G__14645.cljs$lang$maxFixedArity = 1;
G__14645.cljs$lang$applyTo = (function (arglist__14646){
var _ = cljs.core.first(arglist__14646);
var args = cljs.core.rest(arglist__14646);
return G__14645__delegate.call(this, _, args);
});
return G__14645;
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
