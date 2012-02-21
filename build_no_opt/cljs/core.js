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
var or__3548__auto____7206 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7206))
{return or__3548__auto____7206;
} else
{var or__3548__auto____7207 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7207))
{return or__3548__auto____7207;
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
var _invoke__7629 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7232 = this$;

if(cljs.core.truth_(and__3546__auto____7232))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7232;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7234 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7234))
{return or__3548__auto____7234;
} else
{var or__3548__auto____7236 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7236))
{return or__3548__auto____7236;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7630 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7238 = this$;

if(cljs.core.truth_(and__3546__auto____7238))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7238;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7241 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7241))
{return or__3548__auto____7241;
} else
{var or__3548__auto____7244 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7244))
{return or__3548__auto____7244;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7631 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7249 = this$;

if(cljs.core.truth_(and__3546__auto____7249))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7249;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7251 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7251))
{return or__3548__auto____7251;
} else
{var or__3548__auto____7252 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7632 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7254 = this$;

if(cljs.core.truth_(and__3546__auto____7254))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7254;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7256 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7256))
{return or__3548__auto____7256;
} else
{var or__3548__auto____7257 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7633 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7260 = this$;

if(cljs.core.truth_(and__3546__auto____7260))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7260;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7264 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
} else
{var or__3548__auto____7267 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7271 = this$;

if(cljs.core.truth_(and__3546__auto____7271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7274 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7274))
{return or__3548__auto____7274;
} else
{var or__3548__auto____7276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7276))
{return or__3548__auto____7276;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7280 = this$;

if(cljs.core.truth_(and__3546__auto____7280))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7280;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7284 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7284))
{return or__3548__auto____7284;
} else
{var or__3548__auto____7286 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7286))
{return or__3548__auto____7286;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7291 = this$;

if(cljs.core.truth_(and__3546__auto____7291))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7291;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7296 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{var or__3548__auto____7299 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7302 = this$;

if(cljs.core.truth_(and__3546__auto____7302))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7302;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7305 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7305))
{return or__3548__auto____7305;
} else
{var or__3548__auto____7307 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7311 = this$;

if(cljs.core.truth_(and__3546__auto____7311))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7311;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7412 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{var or__3548__auto____7471 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7472 = this$;

if(cljs.core.truth_(and__3546__auto____7472))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7472;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7478 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{var or__3548__auto____7481 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7485 = this$;

if(cljs.core.truth_(and__3546__auto____7485))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7485;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7573 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7573))
{return or__3548__auto____7573;
} else
{var or__3548__auto____7574 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7574))
{return or__3548__auto____7574;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7575 = this$;

if(cljs.core.truth_(and__3546__auto____7575))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7575;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7578 = this$;

if(cljs.core.truth_(and__3546__auto____7578))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7578;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7579 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7579))
{return or__3548__auto____7579;
} else
{var or__3548__auto____7580 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7580))
{return or__3548__auto____7580;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7581 = this$;

if(cljs.core.truth_(and__3546__auto____7581))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7581;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7597 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7597))
{return or__3548__auto____7597;
} else
{var or__3548__auto____7598 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7599 = this$;

if(cljs.core.truth_(and__3546__auto____7599))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7599;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7600 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{var or__3548__auto____7601 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7605 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
} else
{var or__3548__auto____7607 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7607))
{return or__3548__auto____7607;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7646 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7611 = this$;

if(cljs.core.truth_(and__3546__auto____7611))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7611;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7612 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7612))
{return or__3548__auto____7612;
} else
{var or__3548__auto____7613 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7613))
{return or__3548__auto____7613;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7614 = this$;

if(cljs.core.truth_(and__3546__auto____7614))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7614;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7616 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7616))
{return or__3548__auto____7616;
} else
{var or__3548__auto____7618 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7648 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7620 = this$;

if(cljs.core.truth_(and__3546__auto____7620))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7620;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7621 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7621))
{return or__3548__auto____7621;
} else
{var or__3548__auto____7622 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7622))
{return or__3548__auto____7622;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7624 = this$;

if(cljs.core.truth_(and__3546__auto____7624))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7624;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7626 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7626))
{return or__3548__auto____7626;
} else
{var or__3548__auto____7628 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7628))
{return or__3548__auto____7628;
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
return _invoke__7629.call(this,this$);
case  2 :
return _invoke__7630.call(this,this$,a);
case  3 :
return _invoke__7631.call(this,this$,a,b);
case  4 :
return _invoke__7632.call(this,this$,a,b,c);
case  5 :
return _invoke__7633.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7634.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7646.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7648.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7746 = coll;

if(cljs.core.truth_(and__3546__auto____7746))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7746;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7763 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7763))
{return or__3548__auto____7763;
} else
{var or__3548__auto____7764 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7768 = coll;

if(cljs.core.truth_(and__3546__auto____7768))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7768;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7772 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7772))
{return or__3548__auto____7772;
} else
{var or__3548__auto____7775 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7775))
{return or__3548__auto____7775;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7779 = coll;

if(cljs.core.truth_(and__3546__auto____7779))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7779;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7781 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7781))
{return or__3548__auto____7781;
} else
{var or__3548__auto____7784 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
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
var _nth__7812 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7797 = coll;

if(cljs.core.truth_(and__3546__auto____7797))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7797;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7799 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
} else
{var or__3548__auto____7801 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7801))
{return or__3548__auto____7801;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7813 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7804 = coll;

if(cljs.core.truth_(and__3546__auto____7804))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7804;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7808 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
} else
{var or__3548__auto____7809 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
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
return _nth__7812.call(this,coll,n);
case  3 :
return _nth__7813.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7824 = coll;

if(cljs.core.truth_(and__3546__auto____7824))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7824;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7825 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{var or__3548__auto____7829 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7831 = coll;

if(cljs.core.truth_(and__3546__auto____7831))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7831;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7835 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{var or__3548__auto____7837 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
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
var _lookup__7866 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7850 = o;

if(cljs.core.truth_(and__3546__auto____7850))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7850;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7851 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
} else
{var or__3548__auto____7852 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7852))
{return or__3548__auto____7852;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7867 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7855 = o;

if(cljs.core.truth_(and__3546__auto____7855))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7855;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7862 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7862))
{return or__3548__auto____7862;
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
return _lookup__7866.call(this,o,k);
case  3 :
return _lookup__7867.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7880 = coll;

if(cljs.core.truth_(and__3546__auto____7880))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7880;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7887 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{var or__3548__auto____7888 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7893 = coll;

if(cljs.core.truth_(and__3546__auto____7893))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7893;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7898 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{var or__3548__auto____7899 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7909 = coll;

if(cljs.core.truth_(and__3546__auto____7909))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7909;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7910 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{var or__3548__auto____7911 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7911))
{return or__3548__auto____7911;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7920 = coll;

if(cljs.core.truth_(and__3546__auto____7920))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7920;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7922 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7922))
{return or__3548__auto____7922;
} else
{var or__3548__auto____7924 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7928 = coll;

if(cljs.core.truth_(and__3546__auto____7928))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7928;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7929 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{var or__3548__auto____7931 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7935 = coll;

if(cljs.core.truth_(and__3546__auto____7935))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7935;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{var or__3548__auto____7939 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7946 = coll;

if(cljs.core.truth_(and__3546__auto____7946))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7946;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7947 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{var or__3548__auto____7948 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7953 = o;

if(cljs.core.truth_(and__3546__auto____7953))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7953;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7956 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7956))
{return or__3548__auto____7956;
} else
{var or__3548__auto____7959 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7970 = o;

if(cljs.core.truth_(and__3546__auto____7970))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7970;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7971 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{var or__3548__auto____7972 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7977 = o;

if(cljs.core.truth_(and__3546__auto____7977))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7977;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7979 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{var or__3548__auto____7981 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7988 = o;

if(cljs.core.truth_(and__3546__auto____7988))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7988;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7989 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
} else
{var or__3548__auto____7990 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7990))
{return or__3548__auto____7990;
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
var _reduce__8031 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7995 = coll;

if(cljs.core.truth_(and__3546__auto____7995))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7995;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8015 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{var or__3548__auto____8016 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8032 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8018 = coll;

if(cljs.core.truth_(and__3546__auto____8018))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8018;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8025 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{var or__3548__auto____8027 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
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
return _reduce__8031.call(this,coll,f);
case  3 :
return _reduce__8032.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8043 = o;

if(cljs.core.truth_(and__3546__auto____8043))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8043;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8045 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8045))
{return or__3548__auto____8045;
} else
{var or__3548__auto____8047 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8056 = o;

if(cljs.core.truth_(and__3546__auto____8056))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8056;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8057 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{var or__3548__auto____8059 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8064 = o;

if(cljs.core.truth_(and__3546__auto____8064))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8064;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8067 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{var or__3548__auto____8069 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
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
if(cljs.core.truth_((function (){var and__3546__auto____8076 = o;

if(cljs.core.truth_(and__3546__auto____8076))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8076;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8079 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{var or__3548__auto____8081 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8091 = d;

if(cljs.core.truth_(and__3546__auto____8091))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8091;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8094 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{var or__3548__auto____8096 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8113 = this$;

if(cljs.core.truth_(and__3546__auto____8113))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8113;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8116 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8117 = this$;

if(cljs.core.truth_(and__3546__auto____8117))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8117;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8120 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
} else
{var or__3548__auto____8121 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8122 = this$;

if(cljs.core.truth_(and__3546__auto____8122))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8122;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8123 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8123))
{return or__3548__auto____8123;
} else
{var or__3548__auto____8124 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
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
var G__8188 = null;
var G__8188__8189 = (function (o,k){
return null;
});
var G__8188__8190 = (function (o,k,not_found){
return not_found;
});
G__8188 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8188__8189.call(this,o,k);
case  3 :
return G__8188__8190.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8188;
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
var G__8192 = null;
var G__8192__8193 = (function (_,f){
return f.call(null);
});
var G__8192__8194 = (function (_,f,start){
return start;
});
G__8192 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8192__8193.call(this,_,f);
case  3 :
return G__8192__8194.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8192;
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
var G__8199 = null;
var G__8199__8200 = (function (_,n){
return null;
});
var G__8199__8201 = (function (_,n,not_found){
return not_found;
});
G__8199 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8199__8200.call(this,_,n);
case  3 :
return G__8199__8201.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8199;
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
var ci_reduce__8239 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8229 = cljs.core._nth.call(null,cicoll,0);
var n__8230 = 1;

while(true){
if(cljs.core.truth_((n__8230 < cljs.core._count.call(null,cicoll))))
{{
var G__8245 = f.call(null,val__8229,cljs.core._nth.call(null,cicoll,n__8230));
var G__8246 = (n__8230 + 1);
val__8229 = G__8245;
n__8230 = G__8246;
continue;
}
} else
{return val__8229;
}
break;
}
}
});
var ci_reduce__8240 = (function (cicoll,f,val){
var val__8233 = val;
var n__8236 = 0;

while(true){
if(cljs.core.truth_((n__8236 < cljs.core._count.call(null,cicoll))))
{{
var G__8247 = f.call(null,val__8233,cljs.core._nth.call(null,cicoll,n__8236));
var G__8248 = (n__8236 + 1);
val__8233 = G__8247;
n__8236 = G__8248;
continue;
}
} else
{return val__8233;
}
break;
}
});
var ci_reduce__8241 = (function (cicoll,f,val,idx){
var val__8237 = val;
var n__8238 = idx;

while(true){
if(cljs.core.truth_((n__8238 < cljs.core._count.call(null,cicoll))))
{{
var G__8249 = f.call(null,val__8237,cljs.core._nth.call(null,cicoll,n__8238));
var G__8250 = (n__8238 + 1);
val__8237 = G__8249;
n__8238 = G__8250;
continue;
}
} else
{return val__8237;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8239.call(this,cicoll,f);
case  3 :
return ci_reduce__8240.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8241.call(this,cicoll,f,val,idx);
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
var this__8251 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8302 = null;
var G__8302__8306 = (function (_,f){
var this__8252 = this;
return cljs.core.ci_reduce.call(null,this__8252.a,f,(this__8252.a[this__8252.i]),(this__8252.i + 1));
});
var G__8302__8307 = (function (_,f,start){
var this__8255 = this;
return cljs.core.ci_reduce.call(null,this__8255.a,f,start,this__8255.i);
});
G__8302 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8302__8306.call(this,_,f);
case  3 :
return G__8302__8307.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8302;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8258 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8259 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8316 = null;
var G__8316__8318 = (function (coll,n){
var this__8261 = this;
var i__8263 = (n + this__8261.i);

if(cljs.core.truth_((i__8263 < this__8261.a.length)))
{return (this__8261.a[i__8263]);
} else
{return null;
}
});
var G__8316__8319 = (function (coll,n,not_found){
var this__8264 = this;
var i__8267 = (n + this__8264.i);

if(cljs.core.truth_((i__8267 < this__8264.a.length)))
{return (this__8264.a[i__8267]);
} else
{return not_found;
}
});
G__8316 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8316__8318.call(this,coll,n);
case  3 :
return G__8316__8319.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8316;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8277 = this;
return (this__8277.a.length - this__8277.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8278 = this;
return (this__8278.a[this__8278.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8281 = this;
if(cljs.core.truth_(((this__8281.i + 1) < this__8281.a.length)))
{return (new cljs.core.IndexedSeq(this__8281.a,(this__8281.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8298 = this;
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
var G__8353 = null;
var G__8353__8355 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8353__8356 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8353 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8353__8355.call(this,array,f);
case  3 :
return G__8353__8356.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8353;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8361 = null;
var G__8361__8362 = (function (array,k){
return (array[k]);
});
var G__8361__8363 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8361 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8361__8362.call(this,array,k);
case  3 :
return G__8361__8363.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8361;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8371 = null;
var G__8371__8372 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8371__8373 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8371 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8371__8372.call(this,array,n);
case  3 :
return G__8371__8373.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8371;
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
var temp__3698__auto____8438 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8438))
{var s__8439 = temp__3698__auto____8438;

return cljs.core._first.call(null,s__8439);
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
var G__8453 = cljs.core.next.call(null,s);
s = G__8453;
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
var s__8460 = cljs.core.seq.call(null,x);
var n__8461 = 0;

while(true){
if(cljs.core.truth_(s__8460))
{{
var G__8462 = cljs.core.next.call(null,s__8460);
var G__8463 = (n__8461 + 1);
s__8460 = G__8462;
n__8461 = G__8463;
continue;
}
} else
{return n__8461;
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
var conj__8482 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8483 = (function() { 
var G__8485__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8486 = conj.call(null,coll,x);
var G__8487 = cljs.core.first.call(null,xs);
var G__8488 = cljs.core.next.call(null,xs);
coll = G__8486;
x = G__8487;
xs = G__8488;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8485 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8485__delegate.call(this, coll, x, xs);
};
G__8485.cljs$lang$maxFixedArity = 2;
G__8485.cljs$lang$applyTo = (function (arglist__8491){
var coll = cljs.core.first(arglist__8491);
var x = cljs.core.first(cljs.core.next(arglist__8491));
var xs = cljs.core.rest(cljs.core.next(arglist__8491));
return G__8485__delegate.call(this, coll, x, xs);
});
return G__8485;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8482.call(this,coll,x);
default:
return conj__8483.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8483.cljs$lang$applyTo;
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
var nth__8499 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8500 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8499.call(this,coll,n);
case  3 :
return nth__8500.call(this,coll,n,not_found);
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
var get__8523 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8524 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8523.call(this,o,k);
case  3 :
return get__8524.call(this,o,k,not_found);
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
var assoc__8539 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8540 = (function() { 
var G__8542__delegate = function (coll,k,v,kvs){
while(true){
var ret__8535 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8543 = ret__8535;
var G__8544 = cljs.core.first.call(null,kvs);
var G__8545 = cljs.core.second.call(null,kvs);
var G__8546 = cljs.core.nnext.call(null,kvs);
coll = G__8543;
k = G__8544;
v = G__8545;
kvs = G__8546;
continue;
}
} else
{return ret__8535;
}
break;
}
};
var G__8542 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8542__delegate.call(this, coll, k, v, kvs);
};
G__8542.cljs$lang$maxFixedArity = 3;
G__8542.cljs$lang$applyTo = (function (arglist__8548){
var coll = cljs.core.first(arglist__8548);
var k = cljs.core.first(cljs.core.next(arglist__8548));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8548)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8548)));
return G__8542__delegate.call(this, coll, k, v, kvs);
});
return G__8542;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8539.call(this,coll,k,v);
default:
return assoc__8540.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8540.cljs$lang$applyTo;
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
var dissoc__8555 = (function (coll){
return coll;
});
var dissoc__8556 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8557 = (function() { 
var G__8559__delegate = function (coll,k,ks){
while(true){
var ret__8550 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8561 = ret__8550;
var G__8564 = cljs.core.first.call(null,ks);
var G__8566 = cljs.core.next.call(null,ks);
coll = G__8561;
k = G__8564;
ks = G__8566;
continue;
}
} else
{return ret__8550;
}
break;
}
};
var G__8559 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8559__delegate.call(this, coll, k, ks);
};
G__8559.cljs$lang$maxFixedArity = 2;
G__8559.cljs$lang$applyTo = (function (arglist__8567){
var coll = cljs.core.first(arglist__8567);
var k = cljs.core.first(cljs.core.next(arglist__8567));
var ks = cljs.core.rest(cljs.core.next(arglist__8567));
return G__8559__delegate.call(this, coll, k, ks);
});
return G__8559;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8555.call(this,coll);
case  2 :
return dissoc__8556.call(this,coll,k);
default:
return dissoc__8557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8557.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8569 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8570 = x__445__auto____8569;

if(cljs.core.truth_(and__3546__auto____8570))
{var and__3546__auto____8571 = x__445__auto____8569.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8571))
{return cljs.core.not.call(null,x__445__auto____8569.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8571;
}
} else
{return and__3546__auto____8570;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8569);
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
var disj__8592 = (function (coll){
return coll;
});
var disj__8593 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8594 = (function() { 
var G__8597__delegate = function (coll,k,ks){
while(true){
var ret__8587 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8603 = ret__8587;
var G__8604 = cljs.core.first.call(null,ks);
var G__8605 = cljs.core.next.call(null,ks);
coll = G__8603;
k = G__8604;
ks = G__8605;
continue;
}
} else
{return ret__8587;
}
break;
}
};
var G__8597 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8597__delegate.call(this, coll, k, ks);
};
G__8597.cljs$lang$maxFixedArity = 2;
G__8597.cljs$lang$applyTo = (function (arglist__8607){
var coll = cljs.core.first(arglist__8607);
var k = cljs.core.first(cljs.core.next(arglist__8607));
var ks = cljs.core.rest(cljs.core.next(arglist__8607));
return G__8597__delegate.call(this, coll, k, ks);
});
return G__8597;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8592.call(this,coll);
case  2 :
return disj__8593.call(this,coll,k);
default:
return disj__8594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8594.cljs$lang$applyTo;
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
{var x__445__auto____8612 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8613 = x__445__auto____8612;

if(cljs.core.truth_(and__3546__auto____8613))
{var and__3546__auto____8614 = x__445__auto____8612.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8614))
{return cljs.core.not.call(null,x__445__auto____8612.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8614;
}
} else
{return and__3546__auto____8613;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8612);
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
{var x__445__auto____8616 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8617 = x__445__auto____8616;

if(cljs.core.truth_(and__3546__auto____8617))
{var and__3546__auto____8622 = x__445__auto____8616.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8622))
{return cljs.core.not.call(null,x__445__auto____8616.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8622;
}
} else
{return and__3546__auto____8617;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8616);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8630 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8631 = x__445__auto____8630;

if(cljs.core.truth_(and__3546__auto____8631))
{var and__3546__auto____8632 = x__445__auto____8630.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8632))
{return cljs.core.not.call(null,x__445__auto____8630.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8632;
}
} else
{return and__3546__auto____8631;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8630);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8635 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8636 = x__445__auto____8635;

if(cljs.core.truth_(and__3546__auto____8636))
{var and__3546__auto____8638 = x__445__auto____8635.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8638))
{return cljs.core.not.call(null,x__445__auto____8635.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8638;
}
} else
{return and__3546__auto____8636;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8635);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8642 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8643 = x__445__auto____8642;

if(cljs.core.truth_(and__3546__auto____8643))
{var and__3546__auto____8645 = x__445__auto____8642.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8645))
{return cljs.core.not.call(null,x__445__auto____8642.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8645;
}
} else
{return and__3546__auto____8643;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8642);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8652 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8653 = x__445__auto____8652;

if(cljs.core.truth_(and__3546__auto____8653))
{var and__3546__auto____8655 = x__445__auto____8652.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8655))
{return cljs.core.not.call(null,x__445__auto____8652.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8655;
}
} else
{return and__3546__auto____8653;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8652);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8688 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8690 = x__445__auto____8688;

if(cljs.core.truth_(and__3546__auto____8690))
{var and__3546__auto____8692 = x__445__auto____8688.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8692))
{return cljs.core.not.call(null,x__445__auto____8688.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8692;
}
} else
{return and__3546__auto____8690;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8688);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8699 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8699.push(key);
}));
return keys__8699;
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
{var x__445__auto____8720 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8721 = x__445__auto____8720;

if(cljs.core.truth_(and__3546__auto____8721))
{var and__3546__auto____8722 = x__445__auto____8720.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8722))
{return cljs.core.not.call(null,x__445__auto____8720.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8722;
}
} else
{return and__3546__auto____8721;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8720);
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
var and__3546__auto____8731 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8731))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8735 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8735))
{return or__3548__auto____8735;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8731;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8746 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8746))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8746;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8751 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8751))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8751;
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
var and__3546__auto____8781 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8781))
{return (n == n.toFixed());
} else
{return and__3546__auto____8781;
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
if(cljs.core.truth_((function (){var and__3546__auto____8788 = coll;

if(cljs.core.truth_(and__3546__auto____8788))
{var and__3546__auto____8794 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8794))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8794;
}
} else
{return and__3546__auto____8788;
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
var distinct_QMARK___8806 = (function (x){
return true;
});
var distinct_QMARK___8807 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8808 = (function() { 
var G__8810__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8801 = cljs.core.set([y,x]);
var xs__8802 = more;

while(true){
var x__8804 = cljs.core.first.call(null,xs__8802);
var etc__8805 = cljs.core.next.call(null,xs__8802);

if(cljs.core.truth_(xs__8802))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8801,x__8804)))
{return false;
} else
{{
var G__8812 = cljs.core.conj.call(null,s__8801,x__8804);
var G__8813 = etc__8805;
s__8801 = G__8812;
xs__8802 = G__8813;
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
var G__8810 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8810__delegate.call(this, x, y, more);
};
G__8810.cljs$lang$maxFixedArity = 2;
G__8810.cljs$lang$applyTo = (function (arglist__8816){
var x = cljs.core.first(arglist__8816);
var y = cljs.core.first(cljs.core.next(arglist__8816));
var more = cljs.core.rest(cljs.core.next(arglist__8816));
return G__8810__delegate.call(this, x, y, more);
});
return G__8810;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8806.call(this,x);
case  2 :
return distinct_QMARK___8807.call(this,x,y);
default:
return distinct_QMARK___8808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8808.cljs$lang$applyTo;
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
var r__8822 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8822)))
{return r__8822;
} else
{if(cljs.core.truth_(r__8822))
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
var sort__8841 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8842 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8840 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8840,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8840);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8841.call(this,comp);
case  2 :
return sort__8842.call(this,comp,coll);
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
var sort_by__8848 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8849 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8848.call(this,keyfn,comp);
case  3 :
return sort_by__8849.call(this,keyfn,comp,coll);
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
var reduce__8851 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8852 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8851.call(this,f,val);
case  3 :
return reduce__8852.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8864 = (function (f,coll){
var temp__3695__auto____8854 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8854))
{var s__8856 = temp__3695__auto____8854;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8856),cljs.core.next.call(null,s__8856));
} else
{return f.call(null);
}
});
var seq_reduce__8865 = (function (f,val,coll){
var val__8857 = val;
var coll__8858 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8858))
{{
var G__8871 = f.call(null,val__8857,cljs.core.first.call(null,coll__8858));
var G__8872 = cljs.core.next.call(null,coll__8858);
val__8857 = G__8871;
coll__8858 = G__8872;
continue;
}
} else
{return val__8857;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8864.call(this,f,val);
case  3 :
return seq_reduce__8865.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8873 = null;
var G__8873__8874 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8873__8875 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8873 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8873__8874.call(this,coll,f);
case  3 :
return G__8873__8875.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8873;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8883 = (function (){
return 0;
});
var _PLUS___8884 = (function (x){
return x;
});
var _PLUS___8885 = (function (x,y){
return (x + y);
});
var _PLUS___8886 = (function() { 
var G__8888__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8888 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8888__delegate.call(this, x, y, more);
};
G__8888.cljs$lang$maxFixedArity = 2;
G__8888.cljs$lang$applyTo = (function (arglist__8889){
var x = cljs.core.first(arglist__8889);
var y = cljs.core.first(cljs.core.next(arglist__8889));
var more = cljs.core.rest(cljs.core.next(arglist__8889));
return G__8888__delegate.call(this, x, y, more);
});
return G__8888;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8883.call(this);
case  1 :
return _PLUS___8884.call(this,x);
case  2 :
return _PLUS___8885.call(this,x,y);
default:
return _PLUS___8886.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8886.cljs$lang$applyTo;
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
var ___8901 = (function (x){
return (- x);
});
var ___8902 = (function (x,y){
return (x - y);
});
var ___8903 = (function() { 
var G__8907__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8907 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8907__delegate.call(this, x, y, more);
};
G__8907.cljs$lang$maxFixedArity = 2;
G__8907.cljs$lang$applyTo = (function (arglist__8908){
var x = cljs.core.first(arglist__8908);
var y = cljs.core.first(cljs.core.next(arglist__8908));
var more = cljs.core.rest(cljs.core.next(arglist__8908));
return G__8907__delegate.call(this, x, y, more);
});
return G__8907;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8901.call(this,x);
case  2 :
return ___8902.call(this,x,y);
default:
return ___8903.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8903.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8919 = (function (){
return 1;
});
var _STAR___8920 = (function (x){
return x;
});
var _STAR___8921 = (function (x,y){
return (x * y);
});
var _STAR___8922 = (function() { 
var G__8925__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8925 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8925__delegate.call(this, x, y, more);
};
G__8925.cljs$lang$maxFixedArity = 2;
G__8925.cljs$lang$applyTo = (function (arglist__8930){
var x = cljs.core.first(arglist__8930);
var y = cljs.core.first(cljs.core.next(arglist__8930));
var more = cljs.core.rest(cljs.core.next(arglist__8930));
return G__8925__delegate.call(this, x, y, more);
});
return G__8925;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8919.call(this);
case  1 :
return _STAR___8920.call(this,x);
case  2 :
return _STAR___8921.call(this,x,y);
default:
return _STAR___8922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8922.cljs$lang$applyTo;
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
var _SLASH___9029 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9030 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9031 = (function() { 
var G__9037__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9037 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9037__delegate.call(this, x, y, more);
};
G__9037.cljs$lang$maxFixedArity = 2;
G__9037.cljs$lang$applyTo = (function (arglist__9038){
var x = cljs.core.first(arglist__9038);
var y = cljs.core.first(cljs.core.next(arglist__9038));
var more = cljs.core.rest(cljs.core.next(arglist__9038));
return G__9037__delegate.call(this, x, y, more);
});
return G__9037;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9029.call(this,x);
case  2 :
return _SLASH___9030.call(this,x,y);
default:
return _SLASH___9031.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9031.cljs$lang$applyTo;
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
var _LT___9048 = (function (x){
return true;
});
var _LT___9049 = (function (x,y){
return (x < y);
});
var _LT___9050 = (function() { 
var G__9054__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9055 = y;
var G__9056 = cljs.core.first.call(null,more);
var G__9057 = cljs.core.next.call(null,more);
x = G__9055;
y = G__9056;
more = G__9057;
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
var G__9054 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9054__delegate.call(this, x, y, more);
};
G__9054.cljs$lang$maxFixedArity = 2;
G__9054.cljs$lang$applyTo = (function (arglist__9060){
var x = cljs.core.first(arglist__9060);
var y = cljs.core.first(cljs.core.next(arglist__9060));
var more = cljs.core.rest(cljs.core.next(arglist__9060));
return G__9054__delegate.call(this, x, y, more);
});
return G__9054;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9048.call(this,x);
case  2 :
return _LT___9049.call(this,x,y);
default:
return _LT___9050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9050.cljs$lang$applyTo;
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
var _LT__EQ___9070 = (function (x){
return true;
});
var _LT__EQ___9071 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9072 = (function() { 
var G__9074__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9075 = y;
var G__9076 = cljs.core.first.call(null,more);
var G__9078 = cljs.core.next.call(null,more);
x = G__9075;
y = G__9076;
more = G__9078;
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
var G__9074 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9074__delegate.call(this, x, y, more);
};
G__9074.cljs$lang$maxFixedArity = 2;
G__9074.cljs$lang$applyTo = (function (arglist__9083){
var x = cljs.core.first(arglist__9083);
var y = cljs.core.first(cljs.core.next(arglist__9083));
var more = cljs.core.rest(cljs.core.next(arglist__9083));
return G__9074__delegate.call(this, x, y, more);
});
return G__9074;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9070.call(this,x);
case  2 :
return _LT__EQ___9071.call(this,x,y);
default:
return _LT__EQ___9072.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9072.cljs$lang$applyTo;
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
var _GT___9090 = (function (x){
return true;
});
var _GT___9091 = (function (x,y){
return (x > y);
});
var _GT___9092 = (function() { 
var G__9098__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9101 = y;
var G__9102 = cljs.core.first.call(null,more);
var G__9103 = cljs.core.next.call(null,more);
x = G__9101;
y = G__9102;
more = G__9103;
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
var G__9098 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9098__delegate.call(this, x, y, more);
};
G__9098.cljs$lang$maxFixedArity = 2;
G__9098.cljs$lang$applyTo = (function (arglist__9105){
var x = cljs.core.first(arglist__9105);
var y = cljs.core.first(cljs.core.next(arglist__9105));
var more = cljs.core.rest(cljs.core.next(arglist__9105));
return G__9098__delegate.call(this, x, y, more);
});
return G__9098;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9090.call(this,x);
case  2 :
return _GT___9091.call(this,x,y);
default:
return _GT___9092.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9092.cljs$lang$applyTo;
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
var _GT__EQ___9116 = (function (x){
return true;
});
var _GT__EQ___9117 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9118 = (function() { 
var G__9121__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9125 = y;
var G__9126 = cljs.core.first.call(null,more);
var G__9127 = cljs.core.next.call(null,more);
x = G__9125;
y = G__9126;
more = G__9127;
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
var G__9121 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9121__delegate.call(this, x, y, more);
};
G__9121.cljs$lang$maxFixedArity = 2;
G__9121.cljs$lang$applyTo = (function (arglist__9134){
var x = cljs.core.first(arglist__9134);
var y = cljs.core.first(cljs.core.next(arglist__9134));
var more = cljs.core.rest(cljs.core.next(arglist__9134));
return G__9121__delegate.call(this, x, y, more);
});
return G__9121;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9116.call(this,x);
case  2 :
return _GT__EQ___9117.call(this,x,y);
default:
return _GT__EQ___9118.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9118.cljs$lang$applyTo;
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
var max__9162 = (function (x){
return x;
});
var max__9163 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9164 = (function() { 
var G__9166__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9166 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9166__delegate.call(this, x, y, more);
};
G__9166.cljs$lang$maxFixedArity = 2;
G__9166.cljs$lang$applyTo = (function (arglist__9167){
var x = cljs.core.first(arglist__9167);
var y = cljs.core.first(cljs.core.next(arglist__9167));
var more = cljs.core.rest(cljs.core.next(arglist__9167));
return G__9166__delegate.call(this, x, y, more);
});
return G__9166;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9162.call(this,x);
case  2 :
return max__9163.call(this,x,y);
default:
return max__9164.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9164.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9279 = (function (x){
return x;
});
var min__9280 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9281 = (function() { 
var G__9286__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9286 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9286__delegate.call(this, x, y, more);
};
G__9286.cljs$lang$maxFixedArity = 2;
G__9286.cljs$lang$applyTo = (function (arglist__9292){
var x = cljs.core.first(arglist__9292);
var y = cljs.core.first(cljs.core.next(arglist__9292));
var more = cljs.core.rest(cljs.core.next(arglist__9292));
return G__9286__delegate.call(this, x, y, more);
});
return G__9286;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9279.call(this,x);
case  2 :
return min__9280.call(this,x,y);
default:
return min__9281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9281.cljs$lang$applyTo;
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
var rem__9308 = (n % d);

return cljs.core.fix.call(null,((n - rem__9308) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9314 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9314));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9320 = (function (){
return Math.random.call(null);
});
var rand__9321 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9320.call(this);
case  1 :
return rand__9321.call(this,n);
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
var _EQ__EQ___9365 = (function (x){
return true;
});
var _EQ__EQ___9366 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9367 = (function() { 
var G__9371__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9378 = y;
var G__9379 = cljs.core.first.call(null,more);
var G__9380 = cljs.core.next.call(null,more);
x = G__9378;
y = G__9379;
more = G__9380;
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
var G__9371 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9371__delegate.call(this, x, y, more);
};
G__9371.cljs$lang$maxFixedArity = 2;
G__9371.cljs$lang$applyTo = (function (arglist__9383){
var x = cljs.core.first(arglist__9383);
var y = cljs.core.first(cljs.core.next(arglist__9383));
var more = cljs.core.rest(cljs.core.next(arglist__9383));
return G__9371__delegate.call(this, x, y, more);
});
return G__9371;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9365.call(this,x);
case  2 :
return _EQ__EQ___9366.call(this,x,y);
default:
return _EQ__EQ___9367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9367.cljs$lang$applyTo;
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
var n__9390 = n;
var xs__9392 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9393 = xs__9392;

if(cljs.core.truth_(and__3546__auto____9393))
{return (n__9390 > 0);
} else
{return and__3546__auto____9393;
}
})()))
{{
var G__9404 = (n__9390 - 1);
var G__9405 = cljs.core.next.call(null,xs__9392);
n__9390 = G__9404;
xs__9392 = G__9405;
continue;
}
} else
{return xs__9392;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9419 = null;
var G__9419__9424 = (function (coll,n){
var temp__3695__auto____9408 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9408))
{var xs__9410 = temp__3695__auto____9408;

return cljs.core.first.call(null,xs__9410);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9419__9425 = (function (coll,n,not_found){
var temp__3695__auto____9412 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9412))
{var xs__9414 = temp__3695__auto____9412;

return cljs.core.first.call(null,xs__9414);
} else
{return not_found;
}
});
G__9419 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9419__9424.call(this,coll,n);
case  3 :
return G__9419__9425.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9419;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9436 = (function (){
return "";
});
var str_STAR___9440 = (function (x){
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
var str_STAR___9442 = (function() { 
var G__9445__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9449 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9450 = cljs.core.next.call(null,more);
sb = G__9449;
more = G__9450;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9445 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9445__delegate.call(this, x, ys);
};
G__9445.cljs$lang$maxFixedArity = 1;
G__9445.cljs$lang$applyTo = (function (arglist__9453){
var x = cljs.core.first(arglist__9453);
var ys = cljs.core.rest(arglist__9453);
return G__9445__delegate.call(this, x, ys);
});
return G__9445;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9436.call(this);
case  1 :
return str_STAR___9440.call(this,x);
default:
return str_STAR___9442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9442.cljs$lang$applyTo;
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
var str__9473 = (function() { 
var G__9476__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9476 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9476__delegate.call(this, x, ys);
};
G__9476.cljs$lang$maxFixedArity = 1;
G__9476.cljs$lang$applyTo = (function (arglist__9477){
var x = cljs.core.first(arglist__9477);
var ys = cljs.core.rest(arglist__9477);
return G__9476__delegate.call(this, x, ys);
});
return G__9476;
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
return str__9473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9473.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9483 = (function (s,start){
return s.substring(start);
});
var subs__9484 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9483.call(this,s,start);
case  3 :
return subs__9484.call(this,s,start,end);
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
var symbol__9487 = (function (name){
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
var symbol__9488 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9487.call(this,ns);
case  2 :
return symbol__9488.call(this,ns,name);
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
var keyword__9499 = (function (name){
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
var keyword__9500 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9499.call(this,ns);
case  2 :
return keyword__9500.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9507 = cljs.core.seq.call(null,x);
var ys__9508 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9507)))
{return cljs.core.nil_QMARK_.call(null,ys__9508);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9508)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9507),cljs.core.first.call(null,ys__9508))))
{{
var G__9509 = cljs.core.next.call(null,xs__9507);
var G__9510 = cljs.core.next.call(null,ys__9508);
xs__9507 = G__9509;
ys__9508 = G__9510;
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
return cljs.core.reduce.call(null,(function (p1__9511_SHARP_,p2__9512_SHARP_){
return cljs.core.hash_combine.call(null,p1__9511_SHARP_,cljs.core.hash.call(null,p2__9512_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9521__9522 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9521__9522))
{var G__9524__9527 = cljs.core.first.call(null,G__9521__9522);
var vec__9526__9528 = G__9524__9527;
var key_name__9529 = cljs.core.nth.call(null,vec__9526__9528,0,null);
var f__9530 = cljs.core.nth.call(null,vec__9526__9528,1,null);
var G__9521__9531 = G__9521__9522;

var G__9524__9532 = G__9524__9527;
var G__9521__9533 = G__9521__9531;

while(true){
var vec__9534__9535 = G__9524__9532;
var key_name__9536 = cljs.core.nth.call(null,vec__9534__9535,0,null);
var f__9537 = cljs.core.nth.call(null,vec__9534__9535,1,null);
var G__9521__9538 = G__9521__9533;

var str_name__9539 = cljs.core.name.call(null,key_name__9536);

obj[str_name__9539] = f__9537;
var temp__3698__auto____9540 = cljs.core.next.call(null,G__9521__9538);

if(cljs.core.truth_(temp__3698__auto____9540))
{var G__9521__9541 = temp__3698__auto____9540;

{
var G__9543 = cljs.core.first.call(null,G__9521__9541);
var G__9544 = G__9521__9541;
G__9524__9532 = G__9543;
G__9521__9533 = G__9544;
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
var this__9551 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9553 = this;
return (new cljs.core.List(this__9553.meta,o,coll,(this__9553.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9596 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9597 = this;
return this__9597.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9598 = this;
return this__9598.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9599 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9604 = this;
return this__9604.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9605 = this;
return this__9605.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9606 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9609 = this;
return (new cljs.core.List(meta,this__9609.first,this__9609.rest,this__9609.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9610 = this;
return this__9610.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9611 = this;
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
var this__9630 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9631 = this;
return (new cljs.core.List(this__9631.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9632 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9633 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9634 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9635 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9636 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9639 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9640 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9641 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9646 = this;
return this__9646.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9648 = this;
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
list.cljs$lang$applyTo = (function (arglist__9665){
var items = cljs.core.seq( arglist__9665 );;
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
var this__9686 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9688 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9692 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9732 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9732.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9734 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9737 = this;
return this__9737.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9738 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9738.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9738.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9739 = this;
return this__9739.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9741 = this;
return (new cljs.core.Cons(meta,this__9741.first,this__9741.rest));
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
var G__9785 = null;
var G__9785__9786 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9785__9787 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9785 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9785__9786.call(this,string,f);
case  3 :
return G__9785__9787.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9785;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9792 = null;
var G__9792__9793 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9792__9794 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9792 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9792__9793.call(this,string,k);
case  3 :
return G__9792__9794.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9792;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9800 = null;
var G__9800__9801 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9800__9802 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9800 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9800__9801.call(this,string,n);
case  3 :
return G__9800__9802.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9800;
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
var G__9815 = null;
var G__9815__9816 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9815__9817 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9815 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9815__9816.call(this,this$,coll);
case  3 :
return G__9815__9817.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9815;
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
var x__9831 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9831;
} else
{lazy_seq.x = x__9831.call(null);
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
var this__9845 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9848 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9849 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9850 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9850.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9853 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9854 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9855 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9856 = this;
return this__9856.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9857 = this;
return (new cljs.core.LazySeq(meta,this__9857.realized,this__9857.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__9864 = cljs.core.array.call(null);

var s__9866 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__9866)))
{ary__9864.push(cljs.core.first.call(null,s__9866));
{
var G__9878 = cljs.core.next.call(null,s__9866);
s__9866 = G__9878;
continue;
}
} else
{return ary__9864;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__9890 = s;
var i__9891 = n;
var sum__9893 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9897 = (i__9891 > 0);

if(cljs.core.truth_(and__3546__auto____9897))
{return cljs.core.seq.call(null,s__9890);
} else
{return and__3546__auto____9897;
}
})()))
{{
var G__9901 = cljs.core.next.call(null,s__9890);
var G__9902 = (i__9891 - 1);
var G__9903 = (sum__9893 + 1);
s__9890 = G__9901;
i__9891 = G__9902;
sum__9893 = G__9903;
continue;
}
} else
{return sum__9893;
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
var concat__9932 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__9933 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__9934 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__9906 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__9906))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__9906),concat.call(null,cljs.core.rest.call(null,s__9906),y));
} else
{return y;
}
})));
});
var concat__9935 = (function() { 
var G__10003__delegate = function (x,y,zs){
var cat__9923 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__9908 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__9908))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__9908),cat.call(null,cljs.core.rest.call(null,xys__9908),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__9923.call(null,concat.call(null,x,y),zs);
};
var G__10003 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10003__delegate.call(this, x, y, zs);
};
G__10003.cljs$lang$maxFixedArity = 2;
G__10003.cljs$lang$applyTo = (function (arglist__10004){
var x = cljs.core.first(arglist__10004);
var y = cljs.core.first(cljs.core.next(arglist__10004));
var zs = cljs.core.rest(cljs.core.next(arglist__10004));
return G__10003__delegate.call(this, x, y, zs);
});
return G__10003;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__9932.call(this);
case  1 :
return concat__9933.call(this,x);
case  2 :
return concat__9934.call(this,x,y);
default:
return concat__9935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__9935.cljs$lang$applyTo;
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
var list_STAR___10010 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10011 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10012 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10020 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10021 = (function() { 
var G__10026__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10026 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10026__delegate.call(this, a, b, c, d, more);
};
G__10026.cljs$lang$maxFixedArity = 4;
G__10026.cljs$lang$applyTo = (function (arglist__10029){
var a = cljs.core.first(arglist__10029);
var b = cljs.core.first(cljs.core.next(arglist__10029));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10029)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10029))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10029))));
return G__10026__delegate.call(this, a, b, c, d, more);
});
return G__10026;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10010.call(this,a);
case  2 :
return list_STAR___10011.call(this,a,b);
case  3 :
return list_STAR___10012.call(this,a,b,c);
case  4 :
return list_STAR___10020.call(this,a,b,c,d);
default:
return list_STAR___10021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10021.cljs$lang$applyTo;
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
var apply__10049 = (function (f,args){
var fixed_arity__10035 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10035 + 1)) <= fixed_arity__10035)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10050 = (function (f,x,args){
var arglist__10036 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10037 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10036,fixed_arity__10037) <= fixed_arity__10037)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10036));
} else
{return f.cljs$lang$applyTo(arglist__10036);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10036));
}
});
var apply__10051 = (function (f,x,y,args){
var arglist__10038 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10039 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10038,fixed_arity__10039) <= fixed_arity__10039)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10038));
} else
{return f.cljs$lang$applyTo(arglist__10038);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10038));
}
});
var apply__10052 = (function (f,x,y,z,args){
var arglist__10040 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10041 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10040,fixed_arity__10041) <= fixed_arity__10041)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10040));
} else
{return f.cljs$lang$applyTo(arglist__10040);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10040));
}
});
var apply__10053 = (function() { 
var G__10070__delegate = function (f,a,b,c,d,args){
var arglist__10042 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10043 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10042,fixed_arity__10043) <= fixed_arity__10043)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10042));
} else
{return f.cljs$lang$applyTo(arglist__10042);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10042));
}
};
var G__10070 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10070__delegate.call(this, f, a, b, c, d, args);
};
G__10070.cljs$lang$maxFixedArity = 5;
G__10070.cljs$lang$applyTo = (function (arglist__10073){
var f = cljs.core.first(arglist__10073);
var a = cljs.core.first(cljs.core.next(arglist__10073));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10073)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10073))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10073)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10073)))));
return G__10070__delegate.call(this, f, a, b, c, d, args);
});
return G__10070;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10049.call(this,f,a);
case  3 :
return apply__10050.call(this,f,a,b);
case  4 :
return apply__10051.call(this,f,a,b,c);
case  5 :
return apply__10052.call(this,f,a,b,c,d);
default:
return apply__10053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10053.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10168){
var obj = cljs.core.first(arglist__10168);
var f = cljs.core.first(cljs.core.next(arglist__10168));
var args = cljs.core.rest(cljs.core.next(arglist__10168));
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
var not_EQ___10197 = (function (x){
return false;
});
var not_EQ___10198 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10199 = (function() { 
var G__10202__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10202 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10202__delegate.call(this, x, y, more);
};
G__10202.cljs$lang$maxFixedArity = 2;
G__10202.cljs$lang$applyTo = (function (arglist__10204){
var x = cljs.core.first(arglist__10204);
var y = cljs.core.first(cljs.core.next(arglist__10204));
var more = cljs.core.rest(cljs.core.next(arglist__10204));
return G__10202__delegate.call(this, x, y, more);
});
return G__10202;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10197.call(this,x);
case  2 :
return not_EQ___10198.call(this,x,y);
default:
return not_EQ___10199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10199.cljs$lang$applyTo;
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
var G__10234 = pred;
var G__10235 = cljs.core.next.call(null,coll);
pred = G__10234;
coll = G__10235;
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
{var or__3548__auto____10241 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10241))
{return or__3548__auto____10241;
} else
{{
var G__10246 = pred;
var G__10247 = cljs.core.next.call(null,coll);
pred = G__10246;
coll = G__10247;
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
var G__10261 = null;
var G__10261__10262 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10261__10263 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10261__10264 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10261__10265 = (function() { 
var G__10272__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10272 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10272__delegate.call(this, x, y, zs);
};
G__10272.cljs$lang$maxFixedArity = 2;
G__10272.cljs$lang$applyTo = (function (arglist__10277){
var x = cljs.core.first(arglist__10277);
var y = cljs.core.first(cljs.core.next(arglist__10277));
var zs = cljs.core.rest(cljs.core.next(arglist__10277));
return G__10272__delegate.call(this, x, y, zs);
});
return G__10272;
})()
;
G__10261 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10261__10262.call(this);
case  1 :
return G__10261__10263.call(this,x);
case  2 :
return G__10261__10264.call(this,x,y);
default:
return G__10261__10265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10261.cljs$lang$maxFixedArity = 2;
G__10261.cljs$lang$applyTo = G__10261__10265.cljs$lang$applyTo;
return G__10261;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10286__delegate = function (args){
return x;
};
var G__10286 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10286__delegate.call(this, args);
};
G__10286.cljs$lang$maxFixedArity = 0;
G__10286.cljs$lang$applyTo = (function (arglist__10290){
var args = cljs.core.seq( arglist__10290 );;
return G__10286__delegate.call(this, args);
});
return G__10286;
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
var comp__10316 = (function (){
return cljs.core.identity;
});
var comp__10317 = (function (f){
return f;
});
var comp__10318 = (function (f,g){
return (function() {
var G__10324 = null;
var G__10324__10326 = (function (){
return f.call(null,g.call(null));
});
var G__10324__10327 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10324__10328 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10324__10329 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10324__10330 = (function() { 
var G__10342__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10342 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10342__delegate.call(this, x, y, z, args);
};
G__10342.cljs$lang$maxFixedArity = 3;
G__10342.cljs$lang$applyTo = (function (arglist__10343){
var x = cljs.core.first(arglist__10343);
var y = cljs.core.first(cljs.core.next(arglist__10343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10343)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10343)));
return G__10342__delegate.call(this, x, y, z, args);
});
return G__10342;
})()
;
G__10324 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10324__10326.call(this);
case  1 :
return G__10324__10327.call(this,x);
case  2 :
return G__10324__10328.call(this,x,y);
case  3 :
return G__10324__10329.call(this,x,y,z);
default:
return G__10324__10330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10324.cljs$lang$maxFixedArity = 3;
G__10324.cljs$lang$applyTo = G__10324__10330.cljs$lang$applyTo;
return G__10324;
})()
});
var comp__10319 = (function (f,g,h){
return (function() {
var G__10344 = null;
var G__10344__10346 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10344__10347 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10344__10348 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10344__10349 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10344__10350 = (function() { 
var G__10355__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10355 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10355__delegate.call(this, x, y, z, args);
};
G__10355.cljs$lang$maxFixedArity = 3;
G__10355.cljs$lang$applyTo = (function (arglist__10418){
var x = cljs.core.first(arglist__10418);
var y = cljs.core.first(cljs.core.next(arglist__10418));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10418)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10418)));
return G__10355__delegate.call(this, x, y, z, args);
});
return G__10355;
})()
;
G__10344 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10344__10346.call(this);
case  1 :
return G__10344__10347.call(this,x);
case  2 :
return G__10344__10348.call(this,x,y);
case  3 :
return G__10344__10349.call(this,x,y,z);
default:
return G__10344__10350.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10344.cljs$lang$maxFixedArity = 3;
G__10344.cljs$lang$applyTo = G__10344__10350.cljs$lang$applyTo;
return G__10344;
})()
});
var comp__10320 = (function() { 
var G__10420__delegate = function (f1,f2,f3,fs){
var fs__10310 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10421__delegate = function (args){
var ret__10311 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10310),args);
var fs__10312 = cljs.core.next.call(null,fs__10310);

while(true){
if(cljs.core.truth_(fs__10312))
{{
var G__10422 = cljs.core.first.call(null,fs__10312).call(null,ret__10311);
var G__10423 = cljs.core.next.call(null,fs__10312);
ret__10311 = G__10422;
fs__10312 = G__10423;
continue;
}
} else
{return ret__10311;
}
break;
}
};
var G__10421 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10421__delegate.call(this, args);
};
G__10421.cljs$lang$maxFixedArity = 0;
G__10421.cljs$lang$applyTo = (function (arglist__10424){
var args = cljs.core.seq( arglist__10424 );;
return G__10421__delegate.call(this, args);
});
return G__10421;
})()
;
};
var G__10420 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10420__delegate.call(this, f1, f2, f3, fs);
};
G__10420.cljs$lang$maxFixedArity = 3;
G__10420.cljs$lang$applyTo = (function (arglist__10425){
var f1 = cljs.core.first(arglist__10425);
var f2 = cljs.core.first(cljs.core.next(arglist__10425));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10425)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10425)));
return G__10420__delegate.call(this, f1, f2, f3, fs);
});
return G__10420;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10316.call(this);
case  1 :
return comp__10317.call(this,f1);
case  2 :
return comp__10318.call(this,f1,f2);
case  3 :
return comp__10319.call(this,f1,f2,f3);
default:
return comp__10320.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10320.cljs$lang$applyTo;
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
var partial__10435 = (function (f,arg1){
return (function() { 
var G__10440__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10440 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10440__delegate.call(this, args);
};
G__10440.cljs$lang$maxFixedArity = 0;
G__10440.cljs$lang$applyTo = (function (arglist__10495){
var args = cljs.core.seq( arglist__10495 );;
return G__10440__delegate.call(this, args);
});
return G__10440;
})()
;
});
var partial__10436 = (function (f,arg1,arg2){
return (function() { 
var G__10496__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10496 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10496__delegate.call(this, args);
};
G__10496.cljs$lang$maxFixedArity = 0;
G__10496.cljs$lang$applyTo = (function (arglist__10497){
var args = cljs.core.seq( arglist__10497 );;
return G__10496__delegate.call(this, args);
});
return G__10496;
})()
;
});
var partial__10437 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10498__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10498 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10498__delegate.call(this, args);
};
G__10498.cljs$lang$maxFixedArity = 0;
G__10498.cljs$lang$applyTo = (function (arglist__10551){
var args = cljs.core.seq( arglist__10551 );;
return G__10498__delegate.call(this, args);
});
return G__10498;
})()
;
});
var partial__10438 = (function() { 
var G__10553__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10554__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10554 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10554__delegate.call(this, args);
};
G__10554.cljs$lang$maxFixedArity = 0;
G__10554.cljs$lang$applyTo = (function (arglist__10557){
var args = cljs.core.seq( arglist__10557 );;
return G__10554__delegate.call(this, args);
});
return G__10554;
})()
;
};
var G__10553 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10553__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10553.cljs$lang$maxFixedArity = 4;
G__10553.cljs$lang$applyTo = (function (arglist__10559){
var f = cljs.core.first(arglist__10559);
var arg1 = cljs.core.first(cljs.core.next(arglist__10559));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10559)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10559))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10559))));
return G__10553__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10553;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10435.call(this,f,arg1);
case  3 :
return partial__10436.call(this,f,arg1,arg2);
case  4 :
return partial__10437.call(this,f,arg1,arg2,arg3);
default:
return partial__10438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10438.cljs$lang$applyTo;
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
var fnil__10591 = (function (f,x){
return (function() {
var G__10595 = null;
var G__10595__10596 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10595__10597 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10595__10598 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10595__10599 = (function() { 
var G__10608__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10608 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10608__delegate.call(this, a, b, c, ds);
};
G__10608.cljs$lang$maxFixedArity = 3;
G__10608.cljs$lang$applyTo = (function (arglist__10610){
var a = cljs.core.first(arglist__10610);
var b = cljs.core.first(cljs.core.next(arglist__10610));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10610)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10610)));
return G__10608__delegate.call(this, a, b, c, ds);
});
return G__10608;
})()
;
G__10595 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10595__10596.call(this,a);
case  2 :
return G__10595__10597.call(this,a,b);
case  3 :
return G__10595__10598.call(this,a,b,c);
default:
return G__10595__10599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10595.cljs$lang$maxFixedArity = 3;
G__10595.cljs$lang$applyTo = G__10595__10599.cljs$lang$applyTo;
return G__10595;
})()
});
var fnil__10592 = (function (f,x,y){
return (function() {
var G__10619 = null;
var G__10619__10620 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10619__10621 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10619__10622 = (function() { 
var G__10630__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10630 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10630__delegate.call(this, a, b, c, ds);
};
G__10630.cljs$lang$maxFixedArity = 3;
G__10630.cljs$lang$applyTo = (function (arglist__10632){
var a = cljs.core.first(arglist__10632);
var b = cljs.core.first(cljs.core.next(arglist__10632));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10632)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10632)));
return G__10630__delegate.call(this, a, b, c, ds);
});
return G__10630;
})()
;
G__10619 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10619__10620.call(this,a,b);
case  3 :
return G__10619__10621.call(this,a,b,c);
default:
return G__10619__10622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10619.cljs$lang$maxFixedArity = 3;
G__10619.cljs$lang$applyTo = G__10619__10622.cljs$lang$applyTo;
return G__10619;
})()
});
var fnil__10593 = (function (f,x,y,z){
return (function() {
var G__10635 = null;
var G__10635__10636 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10635__10637 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10635__10638 = (function() { 
var G__10644__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10644 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10644__delegate.call(this, a, b, c, ds);
};
G__10644.cljs$lang$maxFixedArity = 3;
G__10644.cljs$lang$applyTo = (function (arglist__10645){
var a = cljs.core.first(arglist__10645);
var b = cljs.core.first(cljs.core.next(arglist__10645));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10645)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10645)));
return G__10644__delegate.call(this, a, b, c, ds);
});
return G__10644;
})()
;
G__10635 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10635__10636.call(this,a,b);
case  3 :
return G__10635__10637.call(this,a,b,c);
default:
return G__10635__10638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10635.cljs$lang$maxFixedArity = 3;
G__10635.cljs$lang$applyTo = G__10635__10638.cljs$lang$applyTo;
return G__10635;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10591.call(this,f,x);
case  3 :
return fnil__10592.call(this,f,x,y);
case  4 :
return fnil__10593.call(this,f,x,y,z);
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
var mapi__10653 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10651))
{var s__10652 = temp__3698__auto____10651;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10652)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10652)));
} else
{return null;
}
})));
});

return mapi__10653.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10665 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10665))
{var s__10666 = temp__3698__auto____10665;

var x__10667 = f.call(null,cljs.core.first.call(null,s__10666));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10667)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10666));
} else
{return cljs.core.cons.call(null,x__10667,keep.call(null,f,cljs.core.rest.call(null,s__10666)));
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
var keepi__10785 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10781 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10781))
{var s__10782 = temp__3698__auto____10781;

var x__10783 = f.call(null,idx,cljs.core.first.call(null,s__10782));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10783)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10782));
} else
{return cljs.core.cons.call(null,x__10783,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10782)));
}
} else
{return null;
}
})));
});

return keepi__10785.call(null,0,coll);
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
var every_pred__11016 = (function (p){
return (function() {
var ep1 = null;
var ep1__11025 = (function (){
return true;
});
var ep1__11026 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11028 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10820 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10820))
{return p.call(null,y);
} else
{return and__3546__auto____10820;
}
})());
});
var ep1__11029 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10824 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10824))
{var and__3546__auto____10825 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10825))
{return p.call(null,z);
} else
{return and__3546__auto____10825;
}
} else
{return and__3546__auto____10824;
}
})());
});
var ep1__11030 = (function() { 
var G__11037__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10829 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10829))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10829;
}
})());
};
var G__11037 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11037__delegate.call(this, x, y, z, args);
};
G__11037.cljs$lang$maxFixedArity = 3;
G__11037.cljs$lang$applyTo = (function (arglist__11063){
var x = cljs.core.first(arglist__11063);
var y = cljs.core.first(cljs.core.next(arglist__11063));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11063)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11063)));
return G__11037__delegate.call(this, x, y, z, args);
});
return G__11037;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11025.call(this);
case  1 :
return ep1__11026.call(this,x);
case  2 :
return ep1__11028.call(this,x,y);
case  3 :
return ep1__11029.call(this,x,y,z);
default:
return ep1__11030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11030.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11019 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11068 = (function (){
return true;
});
var ep2__11069 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10841 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10841))
{return p2.call(null,x);
} else
{return and__3546__auto____10841;
}
})());
});
var ep2__11070 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10843 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10843))
{var and__3546__auto____10844 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10844))
{var and__3546__auto____10847 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10847))
{return p2.call(null,y);
} else
{return and__3546__auto____10847;
}
} else
{return and__3546__auto____10844;
}
} else
{return and__3546__auto____10843;
}
})());
});
var ep2__11071 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10850 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10850))
{var and__3546__auto____10856 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10856))
{var and__3546__auto____10857 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10857))
{var and__3546__auto____10858 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10858))
{var and__3546__auto____10860 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10860))
{return p2.call(null,z);
} else
{return and__3546__auto____10860;
}
} else
{return and__3546__auto____10858;
}
} else
{return and__3546__auto____10857;
}
} else
{return and__3546__auto____10856;
}
} else
{return and__3546__auto____10850;
}
})());
});
var ep2__11072 = (function() { 
var G__11084__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10862 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10862))
{return cljs.core.every_QMARK_.call(null,(function (p1__10682_SHARP_){
var and__3546__auto____10865 = p1.call(null,p1__10682_SHARP_);

if(cljs.core.truth_(and__3546__auto____10865))
{return p2.call(null,p1__10682_SHARP_);
} else
{return and__3546__auto____10865;
}
}),args);
} else
{return and__3546__auto____10862;
}
})());
};
var G__11084 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11084__delegate.call(this, x, y, z, args);
};
G__11084.cljs$lang$maxFixedArity = 3;
G__11084.cljs$lang$applyTo = (function (arglist__11086){
var x = cljs.core.first(arglist__11086);
var y = cljs.core.first(cljs.core.next(arglist__11086));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11086)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11086)));
return G__11084__delegate.call(this, x, y, z, args);
});
return G__11084;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11068.call(this);
case  1 :
return ep2__11069.call(this,x);
case  2 :
return ep2__11070.call(this,x,y);
case  3 :
return ep2__11071.call(this,x,y,z);
default:
return ep2__11072.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11072.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11020 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11090 = (function (){
return true;
});
var ep3__11091 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10869 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10869))
{var and__3546__auto____10870 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10870))
{return p3.call(null,x);
} else
{return and__3546__auto____10870;
}
} else
{return and__3546__auto____10869;
}
})());
});
var ep3__11092 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10873 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10873))
{var and__3546__auto____10875 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10875))
{var and__3546__auto____10878 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10878))
{var and__3546__auto____10880 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10880))
{var and__3546__auto____10882 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10882))
{return p3.call(null,y);
} else
{return and__3546__auto____10882;
}
} else
{return and__3546__auto____10880;
}
} else
{return and__3546__auto____10878;
}
} else
{return and__3546__auto____10875;
}
} else
{return and__3546__auto____10873;
}
})());
});
var ep3__11093 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10884 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10884))
{var and__3546__auto____10886 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10886))
{var and__3546__auto____10887 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10887))
{var and__3546__auto____10889 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10889))
{var and__3546__auto____10890 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10890))
{var and__3546__auto____10891 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10891))
{var and__3546__auto____10892 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10892))
{var and__3546__auto____10893 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10893))
{return p3.call(null,z);
} else
{return and__3546__auto____10893;
}
} else
{return and__3546__auto____10892;
}
} else
{return and__3546__auto____10891;
}
} else
{return and__3546__auto____10890;
}
} else
{return and__3546__auto____10889;
}
} else
{return and__3546__auto____10887;
}
} else
{return and__3546__auto____10886;
}
} else
{return and__3546__auto____10884;
}
})());
});
var ep3__11094 = (function() { 
var G__11128__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10894 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10894))
{return cljs.core.every_QMARK_.call(null,(function (p1__10685_SHARP_){
var and__3546__auto____10897 = p1.call(null,p1__10685_SHARP_);

if(cljs.core.truth_(and__3546__auto____10897))
{var and__3546__auto____10899 = p2.call(null,p1__10685_SHARP_);

if(cljs.core.truth_(and__3546__auto____10899))
{return p3.call(null,p1__10685_SHARP_);
} else
{return and__3546__auto____10899;
}
} else
{return and__3546__auto____10897;
}
}),args);
} else
{return and__3546__auto____10894;
}
})());
};
var G__11128 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11128__delegate.call(this, x, y, z, args);
};
G__11128.cljs$lang$maxFixedArity = 3;
G__11128.cljs$lang$applyTo = (function (arglist__11136){
var x = cljs.core.first(arglist__11136);
var y = cljs.core.first(cljs.core.next(arglist__11136));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11136)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11136)));
return G__11128__delegate.call(this, x, y, z, args);
});
return G__11128;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11090.call(this);
case  1 :
return ep3__11091.call(this,x);
case  2 :
return ep3__11092.call(this,x,y);
case  3 :
return ep3__11093.call(this,x,y,z);
default:
return ep3__11094.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11094.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11021 = (function() { 
var G__11138__delegate = function (p1,p2,p3,ps){
var ps__10906 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11140 = (function (){
return true;
});
var epn__11141 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10686_SHARP_){
return p1__10686_SHARP_.call(null,x);
}),ps__10906);
});
var epn__11142 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10687_SHARP_){
var and__3546__auto____10909 = p1__10687_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10909))
{return p1__10687_SHARP_.call(null,y);
} else
{return and__3546__auto____10909;
}
}),ps__10906);
});
var epn__11143 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10688_SHARP_){
var and__3546__auto____10913 = p1__10688_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10913))
{var and__3546__auto____10915 = p1__10688_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10915))
{return p1__10688_SHARP_.call(null,z);
} else
{return and__3546__auto____10915;
}
} else
{return and__3546__auto____10913;
}
}),ps__10906);
});
var epn__11144 = (function() { 
var G__11160__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10921 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10921))
{return cljs.core.every_QMARK_.call(null,(function (p1__10689_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10689_SHARP_,args);
}),ps__10906);
} else
{return and__3546__auto____10921;
}
})());
};
var G__11160 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11160__delegate.call(this, x, y, z, args);
};
G__11160.cljs$lang$maxFixedArity = 3;
G__11160.cljs$lang$applyTo = (function (arglist__11162){
var x = cljs.core.first(arglist__11162);
var y = cljs.core.first(cljs.core.next(arglist__11162));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11162)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11162)));
return G__11160__delegate.call(this, x, y, z, args);
});
return G__11160;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11140.call(this);
case  1 :
return epn__11141.call(this,x);
case  2 :
return epn__11142.call(this,x,y);
case  3 :
return epn__11143.call(this,x,y,z);
default:
return epn__11144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11144.cljs$lang$applyTo;
return epn;
})()
};
var G__11138 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11138__delegate.call(this, p1, p2, p3, ps);
};
G__11138.cljs$lang$maxFixedArity = 3;
G__11138.cljs$lang$applyTo = (function (arglist__11164){
var p1 = cljs.core.first(arglist__11164);
var p2 = cljs.core.first(cljs.core.next(arglist__11164));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11164)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11164)));
return G__11138__delegate.call(this, p1, p2, p3, ps);
});
return G__11138;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11016.call(this,p1);
case  2 :
return every_pred__11019.call(this,p1,p2);
case  3 :
return every_pred__11020.call(this,p1,p2,p3);
default:
return every_pred__11021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11021.cljs$lang$applyTo;
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
var some_fn__11359 = (function (p){
return (function() {
var sp1 = null;
var sp1__11372 = (function (){
return null;
});
var sp1__11373 = (function (x){
return p.call(null,x);
});
var sp1__11374 = (function (x,y){
var or__3548__auto____11172 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11172))
{return or__3548__auto____11172;
} else
{return p.call(null,y);
}
});
var sp1__11375 = (function (x,y,z){
var or__3548__auto____11175 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11175))
{return or__3548__auto____11175;
} else
{var or__3548__auto____11176 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11176))
{return or__3548__auto____11176;
} else
{return p.call(null,z);
}
}
});
var sp1__11376 = (function() { 
var G__11382__delegate = function (x,y,z,args){
var or__3548__auto____11181 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11181))
{return or__3548__auto____11181;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11382 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11382__delegate.call(this, x, y, z, args);
};
G__11382.cljs$lang$maxFixedArity = 3;
G__11382.cljs$lang$applyTo = (function (arglist__11383){
var x = cljs.core.first(arglist__11383);
var y = cljs.core.first(cljs.core.next(arglist__11383));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11383)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11383)));
return G__11382__delegate.call(this, x, y, z, args);
});
return G__11382;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11372.call(this);
case  1 :
return sp1__11373.call(this,x);
case  2 :
return sp1__11374.call(this,x,y);
case  3 :
return sp1__11375.call(this,x,y,z);
default:
return sp1__11376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11376.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11360 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11388 = (function (){
return null;
});
var sp2__11389 = (function (x){
var or__3548__auto____11185 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11185))
{return or__3548__auto____11185;
} else
{return p2.call(null,x);
}
});
var sp2__11391 = (function (x,y){
var or__3548__auto____11188 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11188))
{return or__3548__auto____11188;
} else
{var or__3548__auto____11191 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11191))
{return or__3548__auto____11191;
} else
{var or__3548__auto____11193 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11193))
{return or__3548__auto____11193;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11394 = (function (x,y,z){
var or__3548__auto____11195 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11195))
{return or__3548__auto____11195;
} else
{var or__3548__auto____11197 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11197))
{return or__3548__auto____11197;
} else
{var or__3548__auto____11198 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11198))
{return or__3548__auto____11198;
} else
{var or__3548__auto____11199 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11199))
{return or__3548__auto____11199;
} else
{var or__3548__auto____11201 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11201))
{return or__3548__auto____11201;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11396 = (function() { 
var G__11414__delegate = function (x,y,z,args){
var or__3548__auto____11213 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11213))
{return or__3548__auto____11213;
} else
{return cljs.core.some.call(null,(function (p1__10800_SHARP_){
var or__3548__auto____11222 = p1.call(null,p1__10800_SHARP_);

if(cljs.core.truth_(or__3548__auto____11222))
{return or__3548__auto____11222;
} else
{return p2.call(null,p1__10800_SHARP_);
}
}),args);
}
};
var G__11414 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11414__delegate.call(this, x, y, z, args);
};
G__11414.cljs$lang$maxFixedArity = 3;
G__11414.cljs$lang$applyTo = (function (arglist__11419){
var x = cljs.core.first(arglist__11419);
var y = cljs.core.first(cljs.core.next(arglist__11419));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11419)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11419)));
return G__11414__delegate.call(this, x, y, z, args);
});
return G__11414;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11388.call(this);
case  1 :
return sp2__11389.call(this,x);
case  2 :
return sp2__11391.call(this,x,y);
case  3 :
return sp2__11394.call(this,x,y,z);
default:
return sp2__11396.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11396.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11361 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11425 = (function (){
return null;
});
var sp3__11426 = (function (x){
var or__3548__auto____11227 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11227))
{return or__3548__auto____11227;
} else
{var or__3548__auto____11229 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11229))
{return or__3548__auto____11229;
} else
{return p3.call(null,x);
}
}
});
var sp3__11427 = (function (x,y){
var or__3548__auto____11231 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11231))
{return or__3548__auto____11231;
} else
{var or__3548__auto____11317 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11317))
{return or__3548__auto____11317;
} else
{var or__3548__auto____11318 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11318))
{return or__3548__auto____11318;
} else
{var or__3548__auto____11319 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11319))
{return or__3548__auto____11319;
} else
{var or__3548__auto____11320 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11320))
{return or__3548__auto____11320;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11428 = (function (x,y,z){
var or__3548__auto____11322 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11322))
{return or__3548__auto____11322;
} else
{var or__3548__auto____11323 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11323))
{return or__3548__auto____11323;
} else
{var or__3548__auto____11325 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11327 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{var or__3548__auto____11328 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11328))
{return or__3548__auto____11328;
} else
{var or__3548__auto____11329 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11329))
{return or__3548__auto____11329;
} else
{var or__3548__auto____11331 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11331))
{return or__3548__auto____11331;
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
var sp3__11429 = (function() { 
var G__11446__delegate = function (x,y,z,args){
var or__3548__auto____11336 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11336))
{return or__3548__auto____11336;
} else
{return cljs.core.some.call(null,(function (p1__10806_SHARP_){
var or__3548__auto____11337 = p1.call(null,p1__10806_SHARP_);

if(cljs.core.truth_(or__3548__auto____11337))
{return or__3548__auto____11337;
} else
{var or__3548__auto____11338 = p2.call(null,p1__10806_SHARP_);

if(cljs.core.truth_(or__3548__auto____11338))
{return or__3548__auto____11338;
} else
{return p3.call(null,p1__10806_SHARP_);
}
}
}),args);
}
};
var G__11446 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11446__delegate.call(this, x, y, z, args);
};
G__11446.cljs$lang$maxFixedArity = 3;
G__11446.cljs$lang$applyTo = (function (arglist__11450){
var x = cljs.core.first(arglist__11450);
var y = cljs.core.first(cljs.core.next(arglist__11450));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11450)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11450)));
return G__11446__delegate.call(this, x, y, z, args);
});
return G__11446;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11425.call(this);
case  1 :
return sp3__11426.call(this,x);
case  2 :
return sp3__11427.call(this,x,y);
case  3 :
return sp3__11428.call(this,x,y,z);
default:
return sp3__11429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11429.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11362 = (function() { 
var G__11453__delegate = function (p1,p2,p3,ps){
var ps__11340 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11455 = (function (){
return null;
});
var spn__11457 = (function (x){
return cljs.core.some.call(null,(function (p1__10807_SHARP_){
return p1__10807_SHARP_.call(null,x);
}),ps__11340);
});
var spn__11459 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10810_SHARP_){
var or__3548__auto____11343 = p1__10810_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11343))
{return or__3548__auto____11343;
} else
{return p1__10810_SHARP_.call(null,y);
}
}),ps__11340);
});
var spn__11461 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10811_SHARP_){
var or__3548__auto____11345 = p1__10811_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11345))
{return or__3548__auto____11345;
} else
{var or__3548__auto____11347 = p1__10811_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11347))
{return or__3548__auto____11347;
} else
{return p1__10811_SHARP_.call(null,z);
}
}
}),ps__11340);
});
var spn__11462 = (function() { 
var G__11465__delegate = function (x,y,z,args){
var or__3548__auto____11349 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11349))
{return or__3548__auto____11349;
} else
{return cljs.core.some.call(null,(function (p1__10817_SHARP_){
return cljs.core.some.call(null,p1__10817_SHARP_,args);
}),ps__11340);
}
};
var G__11465 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11465__delegate.call(this, x, y, z, args);
};
G__11465.cljs$lang$maxFixedArity = 3;
G__11465.cljs$lang$applyTo = (function (arglist__11467){
var x = cljs.core.first(arglist__11467);
var y = cljs.core.first(cljs.core.next(arglist__11467));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11467)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11467)));
return G__11465__delegate.call(this, x, y, z, args);
});
return G__11465;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11455.call(this);
case  1 :
return spn__11457.call(this,x);
case  2 :
return spn__11459.call(this,x,y);
case  3 :
return spn__11461.call(this,x,y,z);
default:
return spn__11462.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11462.cljs$lang$applyTo;
return spn;
})()
};
var G__11453 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11453__delegate.call(this, p1, p2, p3, ps);
};
G__11453.cljs$lang$maxFixedArity = 3;
G__11453.cljs$lang$applyTo = (function (arglist__11470){
var p1 = cljs.core.first(arglist__11470);
var p2 = cljs.core.first(cljs.core.next(arglist__11470));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11470)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11470)));
return G__11453__delegate.call(this, p1, p2, p3, ps);
});
return G__11453;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11359.call(this,p1);
case  2 :
return some_fn__11360.call(this,p1,p2);
case  3 :
return some_fn__11361.call(this,p1,p2,p3);
default:
return some_fn__11362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11362.cljs$lang$applyTo;
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
var map__11520 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11475 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11475))
{var s__11478 = temp__3698__auto____11475;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11478)),map.call(null,f,cljs.core.rest.call(null,s__11478)));
} else
{return null;
}
})));
});
var map__11521 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11487 = cljs.core.seq.call(null,c1);
var s2__11489 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11491 = s1__11487;

if(cljs.core.truth_(and__3546__auto____11491))
{return s2__11489;
} else
{return and__3546__auto____11491;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11487),cljs.core.first.call(null,s2__11489)),map.call(null,f,cljs.core.rest.call(null,s1__11487),cljs.core.rest.call(null,s2__11489)));
} else
{return null;
}
})));
});
var map__11522 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11497 = cljs.core.seq.call(null,c1);
var s2__11499 = cljs.core.seq.call(null,c2);
var s3__11500 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11503 = s1__11497;

if(cljs.core.truth_(and__3546__auto____11503))
{var and__3546__auto____11504 = s2__11499;

if(cljs.core.truth_(and__3546__auto____11504))
{return s3__11500;
} else
{return and__3546__auto____11504;
}
} else
{return and__3546__auto____11503;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11497),cljs.core.first.call(null,s2__11499),cljs.core.first.call(null,s3__11500)),map.call(null,f,cljs.core.rest.call(null,s1__11497),cljs.core.rest.call(null,s2__11499),cljs.core.rest.call(null,s3__11500)));
} else
{return null;
}
})));
});
var map__11523 = (function() { 
var G__11545__delegate = function (f,c1,c2,c3,colls){
var step__11516 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11514 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11514)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11514),step.call(null,map.call(null,cljs.core.rest,ss__11514)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11168_SHARP_){
return cljs.core.apply.call(null,f,p1__11168_SHARP_);
}),step__11516.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11545 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11545__delegate.call(this, f, c1, c2, c3, colls);
};
G__11545.cljs$lang$maxFixedArity = 4;
G__11545.cljs$lang$applyTo = (function (arglist__11554){
var f = cljs.core.first(arglist__11554);
var c1 = cljs.core.first(cljs.core.next(arglist__11554));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11554)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11554))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11554))));
return G__11545__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11545;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11520.call(this,f,c1);
case  3 :
return map__11521.call(this,f,c1,c2);
case  4 :
return map__11522.call(this,f,c1,c2,c3);
default:
return map__11523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11523.cljs$lang$applyTo;
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
{var temp__3698__auto____11629 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11629))
{var s__11631 = temp__3698__auto____11629;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11631),take.call(null,(n - 1),cljs.core.rest.call(null,s__11631)));
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
var step__11649 = (function (n,coll){
while(true){
var s__11646 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11648 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11648))
{return s__11646;
} else
{return and__3546__auto____11648;
}
})()))
{{
var G__11655 = (n - 1);
var G__11656 = cljs.core.rest.call(null,s__11646);
n = G__11655;
coll = G__11656;
continue;
}
} else
{return s__11646;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11649.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11669 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11670 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11669.call(this,n);
case  2 :
return drop_last__11670.call(this,n,s);
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
var s__11674 = cljs.core.seq.call(null,coll);
var lead__11676 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11676))
{{
var G__11680 = cljs.core.next.call(null,s__11674);
var G__11681 = cljs.core.next.call(null,lead__11676);
s__11674 = G__11680;
lead__11676 = G__11681;
continue;
}
} else
{return s__11674;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11690 = (function (pred,coll){
while(true){
var s__11687 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11688 = s__11687;

if(cljs.core.truth_(and__3546__auto____11688))
{return pred.call(null,cljs.core.first.call(null,s__11687));
} else
{return and__3546__auto____11688;
}
})()))
{{
var G__11693 = pred;
var G__11694 = cljs.core.rest.call(null,s__11687);
pred = G__11693;
coll = G__11694;
continue;
}
} else
{return s__11687;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11690.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11699 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11699))
{var s__11701 = temp__3698__auto____11699;

return cljs.core.concat.call(null,s__11701,cycle.call(null,s__11701));
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
var repeat__11718 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11719 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11718.call(this,n);
case  2 :
return repeat__11719.call(this,n,x);
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
var repeatedly__11739 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11740 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11739.call(this,n);
case  2 :
return repeatedly__11740.call(this,n,f);
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
var interleave__11776 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11759 = cljs.core.seq.call(null,c1);
var s2__11760 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11762 = s1__11759;

if(cljs.core.truth_(and__3546__auto____11762))
{return s2__11760;
} else
{return and__3546__auto____11762;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11759),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11760),interleave.call(null,cljs.core.rest.call(null,s1__11759),cljs.core.rest.call(null,s2__11760))));
} else
{return null;
}
})));
});
var interleave__11778 = (function() { 
var G__11782__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11771 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11771)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11771),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11771)));
} else
{return null;
}
})));
};
var G__11782 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11782__delegate.call(this, c1, c2, colls);
};
G__11782.cljs$lang$maxFixedArity = 2;
G__11782.cljs$lang$applyTo = (function (arglist__11785){
var c1 = cljs.core.first(arglist__11785);
var c2 = cljs.core.first(cljs.core.next(arglist__11785));
var colls = cljs.core.rest(cljs.core.next(arglist__11785));
return G__11782__delegate.call(this, c1, c2, colls);
});
return G__11782;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11776.call(this,c1,c2);
default:
return interleave__11778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11778.cljs$lang$applyTo;
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
var cat__11867 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11864 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11864))
{var coll__11866 = temp__3695__auto____11864;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11866),cat.call(null,cljs.core.rest.call(null,coll__11866),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11867.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11878 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11879 = (function() { 
var G__11883__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11883 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11883__delegate.call(this, f, coll, colls);
};
G__11883.cljs$lang$maxFixedArity = 2;
G__11883.cljs$lang$applyTo = (function (arglist__11886){
var f = cljs.core.first(arglist__11886);
var coll = cljs.core.first(cljs.core.next(arglist__11886));
var colls = cljs.core.rest(cljs.core.next(arglist__11886));
return G__11883__delegate.call(this, f, coll, colls);
});
return G__11883;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11878.call(this,f,coll);
default:
return mapcat__11879.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11879.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11888 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11888))
{var s__11889 = temp__3698__auto____11888;

var f__11890 = cljs.core.first.call(null,s__11889);
var r__11892 = cljs.core.rest.call(null,s__11889);

if(cljs.core.truth_(pred.call(null,f__11890)))
{return cljs.core.cons.call(null,f__11890,filter.call(null,pred,r__11892));
} else
{return filter.call(null,pred,r__11892);
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
var walk__11927 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11927.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11924_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11924_SHARP_));
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
var partition__11953 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11954 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11943 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11943))
{var s__11944 = temp__3698__auto____11943;

var p__11945 = cljs.core.take.call(null,n,s__11944);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11945))))
{return cljs.core.cons.call(null,p__11945,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11944)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11957 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11947 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11947))
{var s__11948 = temp__3698__auto____11947;

var p__11949 = cljs.core.take.call(null,n,s__11948);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11949))))
{return cljs.core.cons.call(null,p__11949,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11948)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11949,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11953.call(this,n,step);
case  3 :
return partition__11954.call(this,n,step,pad);
case  4 :
return partition__11957.call(this,n,step,pad,coll);
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
var get_in__11982 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11983 = (function (m,ks,not_found){
var sentinel__11974 = cljs.core.lookup_sentinel;
var m__11975 = m;
var ks__11976 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11976))
{var m__11978 = cljs.core.get.call(null,m__11975,cljs.core.first.call(null,ks__11976),sentinel__11974);

if(cljs.core.truth_((sentinel__11974 === m__11978)))
{return not_found;
} else
{{
var G__11985 = sentinel__11974;
var G__11986 = m__11978;
var G__11987 = cljs.core.next.call(null,ks__11976);
sentinel__11974 = G__11985;
m__11975 = G__11986;
ks__11976 = G__11987;
continue;
}
}
} else
{return m__11975;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11982.call(this,m,ks);
case  3 :
return get_in__11983.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11989,v){
var vec__11991__11992 = p__11989;
var k__11994 = cljs.core.nth.call(null,vec__11991__11992,0,null);
var ks__11996 = cljs.core.nthnext.call(null,vec__11991__11992,1);

if(cljs.core.truth_(ks__11996))
{return cljs.core.assoc.call(null,m,k__11994,assoc_in.call(null,cljs.core.get.call(null,m,k__11994),ks__11996,v));
} else
{return cljs.core.assoc.call(null,m,k__11994,v);
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
var update_in__delegate = function (m,p__12003,f,args){
var vec__12004__12005 = p__12003;
var k__12006 = cljs.core.nth.call(null,vec__12004__12005,0,null);
var ks__12007 = cljs.core.nthnext.call(null,vec__12004__12005,1);

if(cljs.core.truth_(ks__12007))
{return cljs.core.assoc.call(null,m,k__12006,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12006),ks__12007,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12006,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12006),args));
}
};
var update_in = function (m,p__12003,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12003, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12009){
var m = cljs.core.first(arglist__12009);
var p__12003 = cljs.core.first(cljs.core.next(arglist__12009));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12009)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12009)));
return update_in__delegate.call(this, m, p__12003, f, args);
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
var this__12015 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12135 = null;
var G__12135__12136 = (function (coll,k){
var this__12016 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12135__12137 = (function (coll,k,not_found){
var this__12017 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12135 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12135__12136.call(this,coll,k);
case  3 :
return G__12135__12137.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12135;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12018 = this;
var new_array__12020 = cljs.core.aclone.call(null,this__12018.array);

(new_array__12020[k] = v);
return (new cljs.core.Vector(this__12018.meta,new_array__12020));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12143 = null;
var G__12143__12145 = (function (coll,k){
var this__12022 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12143__12146 = (function (coll,k,not_found){
var this__12023 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12143 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12143__12145.call(this,coll,k);
case  3 :
return G__12143__12146.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12143;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12024 = this;
var new_array__12025 = cljs.core.aclone.call(null,this__12024.array);

new_array__12025.push(o);
return (new cljs.core.Vector(this__12024.meta,new_array__12025));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12149 = null;
var G__12149__12150 = (function (v,f){
var this__12026 = this;
return cljs.core.ci_reduce.call(null,this__12026.array,f);
});
var G__12149__12151 = (function (v,f,start){
var this__12027 = this;
return cljs.core.ci_reduce.call(null,this__12027.array,f,start);
});
G__12149 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12149__12150.call(this,v,f);
case  3 :
return G__12149__12151.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12149;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12066 = this;
if(cljs.core.truth_((this__12066.array.length > 0)))
{var vector_seq__12073 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12066.array.length)))
{return cljs.core.cons.call(null,(this__12066.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12073.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12074 = this;
return this__12074.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12076 = this;
var count__12078 = this__12076.array.length;

if(cljs.core.truth_((count__12078 > 0)))
{return (this__12076.array[(count__12078 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12083 = this;
if(cljs.core.truth_((this__12083.array.length > 0)))
{var new_array__12084 = cljs.core.aclone.call(null,this__12083.array);

new_array__12084.pop();
return (new cljs.core.Vector(this__12083.meta,new_array__12084));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12088 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12089 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12090 = this;
return (new cljs.core.Vector(meta,this__12090.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12123 = this;
return this__12123.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12154 = null;
var G__12154__12155 = (function (coll,n){
var this__12124 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12126 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12126))
{return (n < this__12124.array.length);
} else
{return and__3546__auto____12126;
}
})()))
{return (this__12124.array[n]);
} else
{return null;
}
});
var G__12154__12156 = (function (coll,n,not_found){
var this__12127 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12128 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12128))
{return (n < this__12127.array.length);
} else
{return and__3546__auto____12128;
}
})()))
{return (this__12127.array[n]);
} else
{return not_found;
}
});
G__12154 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12154__12155.call(this,coll,n);
case  3 :
return G__12154__12156.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12154;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12133 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12133.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12304){
var args = cljs.core.seq( arglist__12304 );;
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
var this__12319 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12475 = null;
var G__12475__12476 = (function (coll,k){
var this__12325 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12475__12477 = (function (coll,k,not_found){
var this__12327 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12475 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12475__12476.call(this,coll,k);
case  3 :
return G__12475__12477.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12475;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12328 = this;
var v_pos__12330 = (this__12328.start + key);

return (new cljs.core.Subvec(this__12328.meta,cljs.core._assoc.call(null,this__12328.v,v_pos__12330,val),this__12328.start,((this__12328.end > (v_pos__12330 + 1)) ? this__12328.end : (v_pos__12330 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12482 = null;
var G__12482__12483 = (function (coll,k){
var this__12335 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12482__12484 = (function (coll,k,not_found){
var this__12336 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12482 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12482__12483.call(this,coll,k);
case  3 :
return G__12482__12484.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12482;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12438 = this;
return (new cljs.core.Subvec(this__12438.meta,cljs.core._assoc_n.call(null,this__12438.v,this__12438.end,o),this__12438.start,(this__12438.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12489 = null;
var G__12489__12491 = (function (coll,f){
var this__12440 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12489__12500 = (function (coll,f,start){
var this__12441 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12489 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12489__12491.call(this,coll,f);
case  3 :
return G__12489__12500.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12489;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12443 = this;
var subvec_seq__12447 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12443.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12443.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12447.call(null,this__12443.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12450 = this;
return (this__12450.end - this__12450.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12452 = this;
return cljs.core._nth.call(null,this__12452.v,(this__12452.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12453 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12453.start,this__12453.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12453.meta,this__12453.v,this__12453.start,(this__12453.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12457 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12460 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12462 = this;
return (new cljs.core.Subvec(meta,this__12462.v,this__12462.start,this__12462.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12463 = this;
return this__12463.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12519 = null;
var G__12519__12520 = (function (coll,n){
var this__12467 = this;
return cljs.core._nth.call(null,this__12467.v,(this__12467.start + n));
});
var G__12519__12521 = (function (coll,n,not_found){
var this__12469 = this;
return cljs.core._nth.call(null,this__12469.v,(this__12469.start + n),not_found);
});
G__12519 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12519__12520.call(this,coll,n);
case  3 :
return G__12519__12521.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12519;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12470 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12470.meta);
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
var subvec__12541 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12543 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12541.call(this,v,start);
case  3 :
return subvec__12543.call(this,v,start,end);
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
var this__12594 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12596 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12598 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12600 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12600.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12603 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12606 = this;
return cljs.core._first.call(null,this__12606.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12611 = this;
var temp__3695__auto____12616 = cljs.core.next.call(null,this__12611.front);

if(cljs.core.truth_(temp__3695__auto____12616))
{var f1__12617 = temp__3695__auto____12616;

return (new cljs.core.PersistentQueueSeq(this__12611.meta,f1__12617,this__12611.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12611.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12611.meta,this__12611.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12632 = this;
return this__12632.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12633 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12633.front,this__12633.rear));
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
var this__12647 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12649 = this;
if(cljs.core.truth_(this__12649.front))
{return (new cljs.core.PersistentQueue(this__12649.meta,(this__12649.count + 1),this__12649.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12652 = this__12649.rear;

if(cljs.core.truth_(or__3548__auto____12652))
{return or__3548__auto____12652;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12649.meta,(this__12649.count + 1),cljs.core.conj.call(null,this__12649.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12658 = this;
var rear__12659 = cljs.core.seq.call(null,this__12658.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12660 = this__12658.front;

if(cljs.core.truth_(or__3548__auto____12660))
{return or__3548__auto____12660;
} else
{return rear__12659;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12658.front,cljs.core.seq.call(null,rear__12659)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12663 = this;
return this__12663.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12664 = this;
return cljs.core._first.call(null,this__12664.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12665 = this;
if(cljs.core.truth_(this__12665.front))
{var temp__3695__auto____12666 = cljs.core.next.call(null,this__12665.front);

if(cljs.core.truth_(temp__3695__auto____12666))
{var f1__12667 = temp__3695__auto____12666;

return (new cljs.core.PersistentQueue(this__12665.meta,(this__12665.count - 1),f1__12667,this__12665.rear));
} else
{return (new cljs.core.PersistentQueue(this__12665.meta,(this__12665.count - 1),cljs.core.seq.call(null,this__12665.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12668 = this;
return cljs.core.first.call(null,this__12668.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12669 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12671 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12673 = this;
return (new cljs.core.PersistentQueue(meta,this__12673.count,this__12673.front,this__12673.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12675 = this;
return this__12675.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12677 = this;
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
var this__12703 = this;
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
var len__12721 = array.length;

var i__12722 = 0;

while(true){
if(cljs.core.truth_((i__12722 < len__12721)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12722]))))
{return i__12722;
} else
{{
var G__12729 = (i__12722 + incr);
i__12722 = G__12729;
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
var obj_map_contains_key_QMARK___12733 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12734 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12732 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12732))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12732;
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
return obj_map_contains_key_QMARK___12733.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12734.call(this,k,strobj,true_val,false_val);
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
var this__12737 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12781 = null;
var G__12781__12782 = (function (coll,k){
var this__12740 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12781__12783 = (function (coll,k,not_found){
var this__12742 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12742.strobj,(this__12742.strobj[k]),not_found);
});
G__12781 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12781__12782.call(this,coll,k);
case  3 :
return G__12781__12783.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12781;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12745 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12747 = goog.object.clone.call(null,this__12745.strobj);
var overwrite_QMARK___12748 = new_strobj__12747.hasOwnProperty(k);

(new_strobj__12747[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12748))
{return (new cljs.core.ObjMap(this__12745.meta,this__12745.keys,new_strobj__12747));
} else
{var new_keys__12750 = cljs.core.aclone.call(null,this__12745.keys);

new_keys__12750.push(k);
return (new cljs.core.ObjMap(this__12745.meta,new_keys__12750,new_strobj__12747));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12745.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12751 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12751.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12800 = null;
var G__12800__12801 = (function (coll,k){
var this__12752 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12800__12802 = (function (coll,k,not_found){
var this__12753 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12800 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12800__12801.call(this,coll,k);
case  3 :
return G__12800__12802.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12800;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12754 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12755 = this;
if(cljs.core.truth_((this__12755.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12736_SHARP_){
return cljs.core.vector.call(null,p1__12736_SHARP_,(this__12755.strobj[p1__12736_SHARP_]));
}),this__12755.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12757 = this;
return this__12757.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12759 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12762 = this;
return (new cljs.core.ObjMap(meta,this__12762.keys,this__12762.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12764 = this;
return this__12764.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12766 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12766.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12768 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12770 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12770))
{return this__12768.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12770;
}
})()))
{var new_keys__12773 = cljs.core.aclone.call(null,this__12768.keys);
var new_strobj__12775 = goog.object.clone.call(null,this__12768.strobj);

new_keys__12773.splice(cljs.core.scan_array.call(null,1,k,new_keys__12773),1);
cljs.core.js_delete.call(null,new_strobj__12775,k);
return (new cljs.core.ObjMap(this__12768.meta,new_keys__12773,new_strobj__12775));
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
var this__12824 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12955 = null;
var G__12955__12956 = (function (coll,k){
var this__12826 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12955__12957 = (function (coll,k,not_found){
var this__12827 = this;
var bucket__12828 = (this__12827.hashobj[cljs.core.hash.call(null,k)]);
var i__12829 = (cljs.core.truth_(bucket__12828)?cljs.core.scan_array.call(null,2,k,bucket__12828):null);

if(cljs.core.truth_(i__12829))
{return (bucket__12828[(i__12829 + 1)]);
} else
{return not_found;
}
});
G__12955 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12955__12956.call(this,coll,k);
case  3 :
return G__12955__12957.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12955;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12830 = this;
var h__12831 = cljs.core.hash.call(null,k);
var bucket__12832 = (this__12830.hashobj[h__12831]);

if(cljs.core.truth_(bucket__12832))
{var new_bucket__12833 = cljs.core.aclone.call(null,bucket__12832);
var new_hashobj__12834 = goog.object.clone.call(null,this__12830.hashobj);

(new_hashobj__12834[h__12831] = new_bucket__12833);
var temp__3695__auto____12835 = cljs.core.scan_array.call(null,2,k,new_bucket__12833);

if(cljs.core.truth_(temp__3695__auto____12835))
{var i__12836 = temp__3695__auto____12835;

(new_bucket__12833[(i__12836 + 1)] = v);
return (new cljs.core.HashMap(this__12830.meta,this__12830.count,new_hashobj__12834));
} else
{new_bucket__12833.push(k,v);
return (new cljs.core.HashMap(this__12830.meta,(this__12830.count + 1),new_hashobj__12834));
}
} else
{var new_hashobj__12837 = goog.object.clone.call(null,this__12830.hashobj);

(new_hashobj__12837[h__12831] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12830.meta,(this__12830.count + 1),new_hashobj__12837));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12838 = this;
var bucket__12839 = (this__12838.hashobj[cljs.core.hash.call(null,k)]);
var i__12840 = (cljs.core.truth_(bucket__12839)?cljs.core.scan_array.call(null,2,k,bucket__12839):null);

if(cljs.core.truth_(i__12840))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12964 = null;
var G__12964__12965 = (function (coll,k){
var this__12843 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12964__12966 = (function (coll,k,not_found){
var this__12844 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12964 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12964__12965.call(this,coll,k);
case  3 :
return G__12964__12966.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12964;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12845 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12847 = this;
if(cljs.core.truth_((this__12847.count > 0)))
{var hashes__12849 = cljs.core.js_keys.call(null,this__12847.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12811_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12847.hashobj[p1__12811_SHARP_])));
}),hashes__12849);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12853 = this;
return this__12853.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12854 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12855 = this;
return (new cljs.core.HashMap(meta,this__12855.count,this__12855.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12856 = this;
return this__12856.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12857 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12857.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12858 = this;
var h__12860 = cljs.core.hash.call(null,k);
var bucket__12919 = (this__12858.hashobj[h__12860]);
var i__12920 = (cljs.core.truth_(bucket__12919)?cljs.core.scan_array.call(null,2,k,bucket__12919):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12920)))
{return coll;
} else
{var new_hashobj__12947 = goog.object.clone.call(null,this__12858.hashobj);

if(cljs.core.truth_((3 > bucket__12919.length)))
{cljs.core.js_delete.call(null,new_hashobj__12947,h__12860);
} else
{var new_bucket__12950 = cljs.core.aclone.call(null,bucket__12919);

new_bucket__12950.splice(i__12920,2);
(new_hashobj__12947[h__12860] = new_bucket__12950);
}
return (new cljs.core.HashMap(this__12858.meta,(this__12858.count - 1),new_hashobj__12947));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12971 = ks.length;

var i__12973 = 0;
var out__13048 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12973 < len__12971)))
{{
var G__13053 = (i__12973 + 1);
var G__13055 = cljs.core.assoc.call(null,out__13048,(ks[i__12973]),(vs[i__12973]));
i__12973 = G__13053;
out__13048 = G__13055;
continue;
}
} else
{return out__13048;
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
var in$__13062 = cljs.core.seq.call(null,keyvals);
var out__13063 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13062))
{{
var G__13064 = cljs.core.nnext.call(null,in$__13062);
var G__13065 = cljs.core.assoc.call(null,out__13063,cljs.core.first.call(null,in$__13062),cljs.core.second.call(null,in$__13062));
in$__13062 = G__13064;
out__13063 = G__13065;
continue;
}
} else
{return out__13063;
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
hash_map.cljs$lang$applyTo = (function (arglist__13073){
var keyvals = cljs.core.seq( arglist__13073 );;
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
{return cljs.core.reduce.call(null,(function (p1__13075_SHARP_,p2__13076_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13081 = p1__13075_SHARP_;

if(cljs.core.truth_(or__3548__auto____13081))
{return or__3548__auto____13081;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13076_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13084){
var maps = cljs.core.seq( arglist__13084 );;
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
{var merge_entry__13093 = (function (m,e){
var k__13089 = cljs.core.first.call(null,e);
var v__13090 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13089)))
{return cljs.core.assoc.call(null,m,k__13089,f.call(null,cljs.core.get.call(null,m,k__13089),v__13090));
} else
{return cljs.core.assoc.call(null,m,k__13089,v__13090);
}
});
var merge2__13099 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13093,(function (){var or__3548__auto____13094 = m1;

if(cljs.core.truth_(or__3548__auto____13094))
{return or__3548__auto____13094;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13099,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13101){
var f = cljs.core.first(arglist__13101);
var maps = cljs.core.rest(arglist__13101);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13103 = cljs.core.ObjMap.fromObject([],{});
var keys__13104 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13104))
{var key__13105 = cljs.core.first.call(null,keys__13104);
var entry__13106 = cljs.core.get.call(null,map,key__13105,"﷐'user/not-found");

{
var G__13107 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13106,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13103,key__13105,entry__13106):ret__13103);
var G__13108 = cljs.core.next.call(null,keys__13104);
ret__13103 = G__13107;
keys__13104 = G__13108;
continue;
}
} else
{return ret__13103;
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
var this__13186 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13216 = null;
var G__13216__13217 = (function (coll,v){
var this__13188 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13216__13218 = (function (coll,v,not_found){
var this__13189 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13189.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13216 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13216__13217.call(this,coll,v);
case  3 :
return G__13216__13218.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13216;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13221 = null;
var G__13221__13222 = (function (coll,k){
var this__13192 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13221__13223 = (function (coll,k,not_found){
var this__13193 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13221 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13221__13222.call(this,coll,k);
case  3 :
return G__13221__13223.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13221;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13195 = this;
return (new cljs.core.Set(this__13195.meta,cljs.core.assoc.call(null,this__13195.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13197 = this;
return cljs.core.keys.call(null,this__13197.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13200 = this;
return (new cljs.core.Set(this__13200.meta,cljs.core.dissoc.call(null,this__13200.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13203 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13205 = this;
var and__3546__auto____13207 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13207))
{var and__3546__auto____13208 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13208))
{return cljs.core.every_QMARK_.call(null,(function (p1__13102_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13102_SHARP_);
}),other);
} else
{return and__3546__auto____13208;
}
} else
{return and__3546__auto____13207;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13209 = this;
return (new cljs.core.Set(meta,this__13209.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13210 = this;
return this__13210.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13215 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13215.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13242 = cljs.core.seq.call(null,coll);
var out__13244 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13242))))
{{
var G__13245 = cljs.core.rest.call(null,in$__13242);
var G__13246 = cljs.core.conj.call(null,out__13244,cljs.core.first.call(null,in$__13242));
in$__13242 = G__13245;
out__13244 = G__13246;
continue;
}
} else
{return out__13244;
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
{var n__13248 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13250 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13250))
{var e__13251 = temp__3695__auto____13250;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13251));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13248,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13238_SHARP_){
var temp__3695__auto____13252 = cljs.core.find.call(null,smap,p1__13238_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13252))
{var e__13254 = temp__3695__auto____13252;

return cljs.core.second.call(null,e__13254);
} else
{return p1__13238_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13307 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13266,seen){
while(true){
var vec__13267__13268 = p__13266;
var f__13303 = cljs.core.nth.call(null,vec__13267__13268,0,null);
var xs__13304 = vec__13267__13268;

var temp__3698__auto____13305 = cljs.core.seq.call(null,xs__13304);

if(cljs.core.truth_(temp__3698__auto____13305))
{var s__13306 = temp__3698__auto____13305;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13303)))
{{
var G__13344 = cljs.core.rest.call(null,s__13306);
var G__13345 = seen;
p__13266 = G__13344;
seen = G__13345;
continue;
}
} else
{return cljs.core.cons.call(null,f__13303,step.call(null,cljs.core.rest.call(null,s__13306),cljs.core.conj.call(null,seen,f__13303)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13307.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13351 = cljs.core.Vector.fromArray([]);
var s__13352 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13352)))
{{
var G__13355 = cljs.core.conj.call(null,ret__13351,cljs.core.first.call(null,s__13352));
var G__13356 = cljs.core.next.call(null,s__13352);
ret__13351 = G__13355;
s__13352 = G__13356;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13351);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13362 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13362))
{return or__3548__auto____13362;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13364 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13364 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13364 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13384 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13384))
{return or__3548__auto____13384;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13386 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13386 > -1)))
{return cljs.core.subs.call(null,x,2,i__13386);
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
var map__13397 = cljs.core.ObjMap.fromObject([],{});
var ks__13399 = cljs.core.seq.call(null,keys);
var vs__13400 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13401 = ks__13399;

if(cljs.core.truth_(and__3546__auto____13401))
{return vs__13400;
} else
{return and__3546__auto____13401;
}
})()))
{{
var G__13404 = cljs.core.assoc.call(null,map__13397,cljs.core.first.call(null,ks__13399),cljs.core.first.call(null,vs__13400));
var G__13405 = cljs.core.next.call(null,ks__13399);
var G__13406 = cljs.core.next.call(null,vs__13400);
map__13397 = G__13404;
ks__13399 = G__13405;
vs__13400 = G__13406;
continue;
}
} else
{return map__13397;
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
var max_key__13422 = (function (k,x){
return x;
});
var max_key__13423 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13424 = (function() { 
var G__13426__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13393_SHARP_,p2__13395_SHARP_){
return max_key.call(null,k,p1__13393_SHARP_,p2__13395_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13426 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13426__delegate.call(this, k, x, y, more);
};
G__13426.cljs$lang$maxFixedArity = 3;
G__13426.cljs$lang$applyTo = (function (arglist__13433){
var k = cljs.core.first(arglist__13433);
var x = cljs.core.first(cljs.core.next(arglist__13433));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13433)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13433)));
return G__13426__delegate.call(this, k, x, y, more);
});
return G__13426;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13422.call(this,k,x);
case  3 :
return max_key__13423.call(this,k,x,y);
default:
return max_key__13424.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13424.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13443 = (function (k,x){
return x;
});
var min_key__13444 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13445 = (function() { 
var G__13447__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13412_SHARP_,p2__13413_SHARP_){
return min_key.call(null,k,p1__13412_SHARP_,p2__13413_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13447 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13447__delegate.call(this, k, x, y, more);
};
G__13447.cljs$lang$maxFixedArity = 3;
G__13447.cljs$lang$applyTo = (function (arglist__13448){
var k = cljs.core.first(arglist__13448);
var x = cljs.core.first(cljs.core.next(arglist__13448));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13448)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13448)));
return G__13447__delegate.call(this, k, x, y, more);
});
return G__13447;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13443.call(this,k,x);
case  3 :
return min_key__13444.call(this,k,x,y);
default:
return min_key__13445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13445.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13513 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13514 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13509 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13509))
{var s__13510 = temp__3698__auto____13509;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13510),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13510)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13513.call(this,n,step);
case  3 :
return partition_all__13514.call(this,n,step,coll);
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
var temp__3698__auto____13537 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13537))
{var s__13538 = temp__3698__auto____13537;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13538))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13538),take_while.call(null,pred,cljs.core.rest.call(null,s__13538)));
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
var this__13609 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13610 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13706 = null;
var G__13706__13707 = (function (rng,f){
var this__13611 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13706__13708 = (function (rng,f,s){
var this__13622 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13706 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13706__13707.call(this,rng,f);
case  3 :
return G__13706__13708.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13706;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13627 = this;
var comp__13631 = (cljs.core.truth_((this__13627.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13631.call(null,this__13627.start,this__13627.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13632 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13632.end - this__13632.start) / this__13632.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13638 = this;
return this__13638.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13639 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13639.meta,(this__13639.start + this__13639.step),this__13639.end,this__13639.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13645 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13651 = this;
return (new cljs.core.Range(meta,this__13651.start,this__13651.end,this__13651.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13652 = this;
return this__13652.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13722 = null;
var G__13722__13723 = (function (rng,n){
var this__13666 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13666.start + (n * this__13666.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13667 = (this__13666.start > this__13666.end);

if(cljs.core.truth_(and__3546__auto____13667))
{return cljs.core._EQ_.call(null,this__13666.step,0);
} else
{return and__3546__auto____13667;
}
})()))
{return this__13666.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13722__13724 = (function (rng,n,not_found){
var this__13668 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13668.start + (n * this__13668.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13688 = (this__13668.start > this__13668.end);

if(cljs.core.truth_(and__3546__auto____13688))
{return cljs.core._EQ_.call(null,this__13668.step,0);
} else
{return and__3546__auto____13688;
}
})()))
{return this__13668.start;
} else
{return not_found;
}
}
});
G__13722 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13722__13723.call(this,rng,n);
case  3 :
return G__13722__13724.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13722;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13691 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13691.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13732 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13733 = (function (end){
return range.call(null,0,end,1);
});
var range__13734 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13735 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13732.call(this);
case  1 :
return range__13733.call(this,start);
case  2 :
return range__13734.call(this,start,end);
case  3 :
return range__13735.call(this,start,end,step);
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
var temp__3698__auto____13743 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13743))
{var s__13746 = temp__3698__auto____13743;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13746),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13746)));
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
var temp__3698__auto____13772 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13772))
{var s__13773 = temp__3698__auto____13772;

var fst__13774 = cljs.core.first.call(null,s__13773);
var fv__13775 = f.call(null,fst__13774);
var run__13779 = cljs.core.cons.call(null,fst__13774,cljs.core.take_while.call(null,(function (p1__13758_SHARP_){
return cljs.core._EQ_.call(null,fv__13775,f.call(null,p1__13758_SHARP_));
}),cljs.core.next.call(null,s__13773)));

return cljs.core.cons.call(null,run__13779,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13779),s__13773))));
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
var reductions__13887 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13880))
{var s__13881 = temp__3695__auto____13880;

return reductions.call(null,f,cljs.core.first.call(null,s__13881),cljs.core.rest.call(null,s__13881));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13888 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13882))
{var s__13883 = temp__3698__auto____13882;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13883)),cljs.core.rest.call(null,s__13883));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13887.call(this,f,init);
case  3 :
return reductions__13888.call(this,f,init,coll);
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
var juxt__13912 = (function (f){
return (function() {
var G__13917 = null;
var G__13917__13918 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13917__13919 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13917__13920 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13917__13921 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13917__13922 = (function() { 
var G__13925__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13925 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13925__delegate.call(this, x, y, z, args);
};
G__13925.cljs$lang$maxFixedArity = 3;
G__13925.cljs$lang$applyTo = (function (arglist__13927){
var x = cljs.core.first(arglist__13927);
var y = cljs.core.first(cljs.core.next(arglist__13927));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13927)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13927)));
return G__13925__delegate.call(this, x, y, z, args);
});
return G__13925;
})()
;
G__13917 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13917__13918.call(this);
case  1 :
return G__13917__13919.call(this,x);
case  2 :
return G__13917__13920.call(this,x,y);
case  3 :
return G__13917__13921.call(this,x,y,z);
default:
return G__13917__13922.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13917.cljs$lang$maxFixedArity = 3;
G__13917.cljs$lang$applyTo = G__13917__13922.cljs$lang$applyTo;
return G__13917;
})()
});
var juxt__13913 = (function (f,g){
return (function() {
var G__13928 = null;
var G__13928__13929 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13928__13930 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13928__13931 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13928__13932 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13928__13933 = (function() { 
var G__13940__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13940 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13940__delegate.call(this, x, y, z, args);
};
G__13940.cljs$lang$maxFixedArity = 3;
G__13940.cljs$lang$applyTo = (function (arglist__13950){
var x = cljs.core.first(arglist__13950);
var y = cljs.core.first(cljs.core.next(arglist__13950));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13950)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13950)));
return G__13940__delegate.call(this, x, y, z, args);
});
return G__13940;
})()
;
G__13928 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13928__13929.call(this);
case  1 :
return G__13928__13930.call(this,x);
case  2 :
return G__13928__13931.call(this,x,y);
case  3 :
return G__13928__13932.call(this,x,y,z);
default:
return G__13928__13933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13928.cljs$lang$maxFixedArity = 3;
G__13928.cljs$lang$applyTo = G__13928__13933.cljs$lang$applyTo;
return G__13928;
})()
});
var juxt__13914 = (function (f,g,h){
return (function() {
var G__13954 = null;
var G__13954__13956 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13954__13957 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13954__13958 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13954__13959 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13954__13960 = (function() { 
var G__13963__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13963 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13963__delegate.call(this, x, y, z, args);
};
G__13963.cljs$lang$maxFixedArity = 3;
G__13963.cljs$lang$applyTo = (function (arglist__13964){
var x = cljs.core.first(arglist__13964);
var y = cljs.core.first(cljs.core.next(arglist__13964));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13964)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13964)));
return G__13963__delegate.call(this, x, y, z, args);
});
return G__13963;
})()
;
G__13954 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13954__13956.call(this);
case  1 :
return G__13954__13957.call(this,x);
case  2 :
return G__13954__13958.call(this,x,y);
case  3 :
return G__13954__13959.call(this,x,y,z);
default:
return G__13954__13960.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13954.cljs$lang$maxFixedArity = 3;
G__13954.cljs$lang$applyTo = G__13954__13960.cljs$lang$applyTo;
return G__13954;
})()
});
var juxt__13915 = (function() { 
var G__13973__delegate = function (f,g,h,fs){
var fs__13910 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13977 = null;
var G__13977__13978 = (function (){
return cljs.core.reduce.call(null,(function (p1__13869_SHARP_,p2__13870_SHARP_){
return cljs.core.conj.call(null,p1__13869_SHARP_,p2__13870_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13910);
});
var G__13977__13980 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13871_SHARP_,p2__13872_SHARP_){
return cljs.core.conj.call(null,p1__13871_SHARP_,p2__13872_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13910);
});
var G__13977__13981 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13873_SHARP_,p2__13875_SHARP_){
return cljs.core.conj.call(null,p1__13873_SHARP_,p2__13875_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13910);
});
var G__13977__13982 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13876_SHARP_,p2__13877_SHARP_){
return cljs.core.conj.call(null,p1__13876_SHARP_,p2__13877_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13910);
});
var G__13977__13984 = (function() { 
var G__13990__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13878_SHARP_,p2__13879_SHARP_){
return cljs.core.conj.call(null,p1__13878_SHARP_,cljs.core.apply.call(null,p2__13879_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13910);
};
var G__13990 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13990__delegate.call(this, x, y, z, args);
};
G__13990.cljs$lang$maxFixedArity = 3;
G__13990.cljs$lang$applyTo = (function (arglist__13997){
var x = cljs.core.first(arglist__13997);
var y = cljs.core.first(cljs.core.next(arglist__13997));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13997)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13997)));
return G__13990__delegate.call(this, x, y, z, args);
});
return G__13990;
})()
;
G__13977 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13977__13978.call(this);
case  1 :
return G__13977__13980.call(this,x);
case  2 :
return G__13977__13981.call(this,x,y);
case  3 :
return G__13977__13982.call(this,x,y,z);
default:
return G__13977__13984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13977.cljs$lang$maxFixedArity = 3;
G__13977.cljs$lang$applyTo = G__13977__13984.cljs$lang$applyTo;
return G__13977;
})()
};
var G__13973 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13973__delegate.call(this, f, g, h, fs);
};
G__13973.cljs$lang$maxFixedArity = 3;
G__13973.cljs$lang$applyTo = (function (arglist__14077){
var f = cljs.core.first(arglist__14077);
var g = cljs.core.first(cljs.core.next(arglist__14077));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14077)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14077)));
return G__13973__delegate.call(this, f, g, h, fs);
});
return G__13973;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13912.call(this,f);
case  2 :
return juxt__13913.call(this,f,g);
case  3 :
return juxt__13914.call(this,f,g,h);
default:
return juxt__13915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13915.cljs$lang$applyTo;
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
var dorun__14106 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14109 = cljs.core.next.call(null,coll);
coll = G__14109;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14107 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14086 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14086))
{return (n > 0);
} else
{return and__3546__auto____14086;
}
})()))
{{
var G__14111 = (n - 1);
var G__14113 = cljs.core.next.call(null,coll);
n = G__14111;
coll = G__14113;
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
return dorun__14106.call(this,n);
case  2 :
return dorun__14107.call(this,n,coll);
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
var doall__14134 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14135 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14134.call(this,n);
case  2 :
return doall__14135.call(this,n,coll);
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
var matches__14144 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14144),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14144),1)))
{return cljs.core.first.call(null,matches__14144);
} else
{return cljs.core.vec.call(null,matches__14144);
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
var matches__14161 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14161)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14161),1)))
{return cljs.core.first.call(null,matches__14161);
} else
{return cljs.core.vec.call(null,matches__14161);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14173 = cljs.core.re_find.call(null,re,s);
var match_idx__14175 = s.search(re);
var match_str__14176 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14173))?cljs.core.first.call(null,match_data__14173):match_data__14173);
var post_match__14178 = cljs.core.subs.call(null,s,(match_idx__14175 + cljs.core.count.call(null,match_str__14176)));

if(cljs.core.truth_(match_data__14173))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14173,re_seq.call(null,re,post_match__14178));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14195_SHARP_){
return print_one.call(null,p1__14195_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14223 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14223))
{var and__3546__auto____14232 = (function (){var x__445__auto____14224 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14225 = x__445__auto____14224;

if(cljs.core.truth_(and__3546__auto____14225))
{var and__3546__auto____14226 = x__445__auto____14224.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14226))
{return cljs.core.not.call(null,x__445__auto____14224.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14226;
}
} else
{return and__3546__auto____14225;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14224);
}
})();

if(cljs.core.truth_(and__3546__auto____14232))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14232;
}
} else
{return and__3546__auto____14223;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14234 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14235 = x__445__auto____14234;

if(cljs.core.truth_(and__3546__auto____14235))
{var and__3546__auto____14280 = x__445__auto____14234.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14280))
{return cljs.core.not.call(null,x__445__auto____14234.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14280;
}
} else
{return and__3546__auto____14235;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14234);
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
var first_obj__14293 = cljs.core.first.call(null,objs);
var sb__14294 = (new goog.string.StringBuffer());

var G__14296__14300 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14296__14300))
{var obj__14302 = cljs.core.first.call(null,G__14296__14300);
var G__14296__14303 = G__14296__14300;

while(true){
if(cljs.core.truth_((obj__14302 === first_obj__14293)))
{} else
{sb__14294.append(" ");
}
var G__14306__14307 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14302,opts));

if(cljs.core.truth_(G__14306__14307))
{var string__14309 = cljs.core.first.call(null,G__14306__14307);
var G__14306__14310 = G__14306__14307;

while(true){
sb__14294.append(string__14309);
var temp__3698__auto____14312 = cljs.core.next.call(null,G__14306__14310);

if(cljs.core.truth_(temp__3698__auto____14312))
{var G__14306__14313 = temp__3698__auto____14312;

{
var G__14331 = cljs.core.first.call(null,G__14306__14313);
var G__14332 = G__14306__14313;
string__14309 = G__14331;
G__14306__14310 = G__14332;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14316 = cljs.core.next.call(null,G__14296__14303);

if(cljs.core.truth_(temp__3698__auto____14316))
{var G__14296__14318 = temp__3698__auto____14316;

{
var G__14336 = cljs.core.first.call(null,G__14296__14318);
var G__14337 = G__14296__14318;
obj__14302 = G__14336;
G__14296__14303 = G__14337;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14294);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14343 = cljs.core.first.call(null,objs);

var G__14345__14348 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14345__14348))
{var obj__14350 = cljs.core.first.call(null,G__14345__14348);
var G__14345__14352 = G__14345__14348;

while(true){
if(cljs.core.truth_((obj__14350 === first_obj__14343)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14353__14356 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14350,opts));

if(cljs.core.truth_(G__14353__14356))
{var string__14357 = cljs.core.first.call(null,G__14353__14356);
var G__14353__14396 = G__14353__14356;

while(true){
cljs.core.string_print.call(null,string__14357);
var temp__3698__auto____14399 = cljs.core.next.call(null,G__14353__14396);

if(cljs.core.truth_(temp__3698__auto____14399))
{var G__14353__14401 = temp__3698__auto____14399;

{
var G__14409 = cljs.core.first.call(null,G__14353__14401);
var G__14410 = G__14353__14401;
string__14357 = G__14409;
G__14353__14396 = G__14410;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14403 = cljs.core.next.call(null,G__14345__14352);

if(cljs.core.truth_(temp__3698__auto____14403))
{var G__14345__14405 = temp__3698__auto____14403;

{
var G__14413 = cljs.core.first.call(null,G__14345__14405);
var G__14414 = G__14345__14405;
obj__14350 = G__14413;
G__14345__14352 = G__14414;
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
pr_str.cljs$lang$applyTo = (function (arglist__14500){
var objs = cljs.core.seq( arglist__14500 );;
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
pr.cljs$lang$applyTo = (function (arglist__14504){
var objs = cljs.core.seq( arglist__14504 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14506){
var objs = cljs.core.seq( arglist__14506 );;
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
println.cljs$lang$applyTo = (function (arglist__14511){
var objs = cljs.core.seq( arglist__14511 );;
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
prn.cljs$lang$applyTo = (function (arglist__14517){
var objs = cljs.core.seq( arglist__14517 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14518 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14518,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14526 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14526))
{var nspc__14527 = temp__3698__auto____14526;

return cljs.core.str.call(null,nspc__14527,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14533 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14533))
{var nspc__14534 = temp__3698__auto____14533;

return cljs.core.str.call(null,nspc__14534,"/");
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
var pr_pair__14574 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14574,"{",", ","}",opts,coll);
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
var this__14672 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14685 = this;
var G__14693__14694 = cljs.core.seq.call(null,this__14685.watches);

if(cljs.core.truth_(G__14693__14694))
{var G__14702__14704 = cljs.core.first.call(null,G__14693__14694);
var vec__14703__14705 = G__14702__14704;
var key__14706 = cljs.core.nth.call(null,vec__14703__14705,0,null);
var f__14707 = cljs.core.nth.call(null,vec__14703__14705,1,null);
var G__14693__14708 = G__14693__14694;

var G__14702__14709 = G__14702__14704;
var G__14693__14710 = G__14693__14708;

while(true){
var vec__14711__14712 = G__14702__14709;
var key__14713 = cljs.core.nth.call(null,vec__14711__14712,0,null);
var f__14714 = cljs.core.nth.call(null,vec__14711__14712,1,null);
var G__14693__14715 = G__14693__14710;

f__14714.call(null,key__14713,this$,oldval,newval);
var temp__3698__auto____14719 = cljs.core.next.call(null,G__14693__14715);

if(cljs.core.truth_(temp__3698__auto____14719))
{var G__14693__14720 = temp__3698__auto____14719;

{
var G__14750 = cljs.core.first.call(null,G__14693__14720);
var G__14751 = G__14693__14720;
G__14702__14709 = G__14750;
G__14693__14710 = G__14751;
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
var this__14722 = this;
return this$.watches = cljs.core.assoc.call(null,this__14722.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14723 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14723.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14724 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14724.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14726 = this;
return this__14726.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14737 = this;
return this__14737.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14739 = this;
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
var atom__14763 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14764 = (function() { 
var G__14767__delegate = function (x,p__14755){
var map__14756__14757 = p__14755;
var map__14756__14758 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14756__14757))?cljs.core.apply.call(null,cljs.core.hash_map,map__14756__14757):map__14756__14757);
var validator__14759 = cljs.core.get.call(null,map__14756__14758,"﷐'validator");
var meta__14760 = cljs.core.get.call(null,map__14756__14758,"﷐'meta");

return (new cljs.core.Atom(x,meta__14760,validator__14759,null));
};
var G__14767 = function (x,var_args){
var p__14755 = null;
if (goog.isDef(var_args)) {
  p__14755 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14767__delegate.call(this, x, p__14755);
};
G__14767.cljs$lang$maxFixedArity = 1;
G__14767.cljs$lang$applyTo = (function (arglist__14774){
var x = cljs.core.first(arglist__14774);
var p__14755 = cljs.core.rest(arglist__14774);
return G__14767__delegate.call(this, x, p__14755);
});
return G__14767;
})()
;
atom = function(x,var_args){
var p__14755 = var_args;
switch(arguments.length){
case  1 :
return atom__14763.call(this,x);
default:
return atom__14764.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14764.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14777 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14777))
{var validate__14778 = temp__3698__auto____14777;

if(cljs.core.truth_(validate__14778.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14779 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14779,new_value);
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
var swap_BANG___14788 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14789 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14790 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14791 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14792 = (function() { 
var G__14821__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14821 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14821__delegate.call(this, a, f, x, y, z, more);
};
G__14821.cljs$lang$maxFixedArity = 5;
G__14821.cljs$lang$applyTo = (function (arglist__14822){
var a = cljs.core.first(arglist__14822);
var f = cljs.core.first(cljs.core.next(arglist__14822));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14822)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14822)))));
return G__14821__delegate.call(this, a, f, x, y, z, more);
});
return G__14821;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14788.call(this,a,f);
case  3 :
return swap_BANG___14789.call(this,a,f,x);
case  4 :
return swap_BANG___14790.call(this,a,f,x,y);
case  5 :
return swap_BANG___14791.call(this,a,f,x,y,z);
default:
return swap_BANG___14792.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14792.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14828){
var iref = cljs.core.first(arglist__14828);
var f = cljs.core.first(cljs.core.next(arglist__14828));
var args = cljs.core.rest(cljs.core.next(arglist__14828));
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
var gensym__14843 = (function (){
return gensym.call(null,"G__");
});
var gensym__14844 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14843.call(this);
case  1 :
return gensym__14844.call(this,prefix_string);
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
var this__14861 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14861.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14865 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14865.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14865.state,this__14865.f);
}
return cljs.core.deref.call(null,this__14865.state);
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
delay.cljs$lang$applyTo = (function (arglist__14890){
var body = cljs.core.seq( arglist__14890 );;
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
var map__14902__14904 = options;
var map__14902__14907 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14902__14904))?cljs.core.apply.call(null,cljs.core.hash_map,map__14902__14904):map__14902__14904);
var keywordize_keys__14908 = cljs.core.get.call(null,map__14902__14907,"﷐'keywordize-keys");
var keyfn__14909 = (cljs.core.truth_(keywordize_keys__14908)?cljs.core.keyword:cljs.core.str);
var f__14930 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14927 = (function iter__14916(s__14918){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14918__14923 = s__14918;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14918__14923)))
{var k__14924 = cljs.core.first.call(null,s__14918__14923);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14909.call(null,k__14924),thisfn.call(null,(x[k__14924]))]),iter__14916.call(null,cljs.core.rest.call(null,s__14918__14923)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14927.call(null,cljs.core.js_keys.call(null,x));
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

return f__14930.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14950){
var x = cljs.core.first(arglist__14950);
var options = cljs.core.rest(arglist__14950);
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
var mem__14951 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14955__delegate = function (args){
var temp__3695__auto____14952 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14951),args);

if(cljs.core.truth_(temp__3695__auto____14952))
{var v__14953 = temp__3695__auto____14952;

return v__14953;
} else
{var ret__14954 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14951,cljs.core.assoc,args,ret__14954);
return ret__14954;
}
};
var G__14955 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14955__delegate.call(this, args);
};
G__14955.cljs$lang$maxFixedArity = 0;
G__14955.cljs$lang$applyTo = (function (arglist__14960){
var args = cljs.core.seq( arglist__14960 );;
return G__14955__delegate.call(this, args);
});
return G__14955;
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
var trampoline__14968 = (function (f){
while(true){
var ret__14964 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14964)))
{{
var G__14971 = ret__14964;
f = G__14971;
continue;
}
} else
{return ret__14964;
}
break;
}
});
var trampoline__14969 = (function() { 
var G__14974__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14974 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14974__delegate.call(this, f, args);
};
G__14974.cljs$lang$maxFixedArity = 1;
G__14974.cljs$lang$applyTo = (function (arglist__14976){
var f = cljs.core.first(arglist__14976);
var args = cljs.core.rest(arglist__14976);
return G__14974__delegate.call(this, f, args);
});
return G__14974;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14968.call(this,f);
default:
return trampoline__14969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14969.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14984 = (function (){
return rand.call(null,1);
});
var rand__14985 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14984.call(this);
case  1 :
return rand__14985.call(this,n);
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
var k__15014 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15014,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15014,cljs.core.Vector.fromArray([])),x));
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
var or__3548__auto____15031 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15031))
{return or__3548__auto____15031;
} else
{var or__3548__auto____15032 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15032))
{return or__3548__auto____15032;
} else
{var and__3546__auto____15033 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15033))
{var and__3546__auto____15035 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15035))
{var and__3546__auto____15038 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15038))
{var ret__15042 = true;
var i__15043 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15044 = cljs.core.not.call(null,ret__15042);

if(cljs.core.truth_(or__3548__auto____15044))
{return or__3548__auto____15044;
} else
{return cljs.core._EQ_.call(null,i__15043,cljs.core.count.call(null,parent));
}
})()))
{return ret__15042;
} else
{{
var G__15090 = isa_QMARK_.call(null,h,child.call(null,i__15043),parent.call(null,i__15043));
var G__15091 = (i__15043 + 1);
ret__15042 = G__15090;
i__15043 = G__15091;
continue;
}
}
break;
}
} else
{return and__3546__auto____15038;
}
} else
{return and__3546__auto____15035;
}
} else
{return and__3546__auto____15033;
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
var parents__15102 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15103 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15102.call(this,h);
case  2 :
return parents__15103.call(this,h,tag);
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
var ancestors__15113 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15115 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15113.call(this,h);
case  2 :
return ancestors__15115.call(this,h,tag);
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
var descendants__15124 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15125 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15124.call(this,h);
case  2 :
return descendants__15125.call(this,h,tag);
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
var derive__15154 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15155 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15134 = "﷐'parents".call(null,h);
var td__15135 = "﷐'descendants".call(null,h);
var ta__15136 = "﷐'ancestors".call(null,h);
var tf__15139 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15148 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15134.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15136.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15136.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15134,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15139.call(null,"﷐'ancestors".call(null,h),tag,td__15135,parent,ta__15136),"﷐'descendants":tf__15139.call(null,"﷐'descendants".call(null,h),parent,ta__15136,tag,td__15135)});
})());

if(cljs.core.truth_(or__3548__auto____15148))
{return or__3548__auto____15148;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15154.call(this,h,tag);
case  3 :
return derive__15155.call(this,h,tag,parent);
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
var underive__15188 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15189 = (function (h,tag,parent){
var parentMap__15178 = "﷐'parents".call(null,h);
var childsParents__15179 = (cljs.core.truth_(parentMap__15178.call(null,tag))?cljs.core.disj.call(null,parentMap__15178.call(null,tag),parent):cljs.core.set([]));
var newParents__15180 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15179))?cljs.core.assoc.call(null,parentMap__15178,tag,childsParents__15179):cljs.core.dissoc.call(null,parentMap__15178,tag));
var deriv_seq__15181 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15127_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15127_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15127_SHARP_),cljs.core.second.call(null,p1__15127_SHARP_)));
}),cljs.core.seq.call(null,newParents__15180)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15178.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15128_SHARP_,p2__15129_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15128_SHARP_,p2__15129_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15181));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15188.call(this,h,tag);
case  3 :
return underive__15189.call(this,h,tag,parent);
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
var xprefs__15208 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15211 = (cljs.core.truth_((function (){var and__3546__auto____15210 = xprefs__15208;

if(cljs.core.truth_(and__3546__auto____15210))
{return xprefs__15208.call(null,y);
} else
{return and__3546__auto____15210;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15211))
{return or__3548__auto____15211;
} else
{var or__3548__auto____15221 = (function (){var ps__15213 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15213) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15213),prefer_table)))
{} else
{}
{
var G__15228 = cljs.core.rest.call(null,ps__15213);
ps__15213 = G__15228;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15221))
{return or__3548__auto____15221;
} else
{var or__3548__auto____15224 = (function (){var ps__15222 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15222) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15222),y,prefer_table)))
{} else
{}
{
var G__15229 = cljs.core.rest.call(null,ps__15222);
ps__15222 = G__15229;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15224))
{return or__3548__auto____15224;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15230 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15230))
{return or__3548__auto____15230;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15332 = cljs.core.reduce.call(null,(function (be,p__15236){
var vec__15245__15246 = p__15236;
var k__15247 = cljs.core.nth.call(null,vec__15245__15246,0,null);
var ___15249 = cljs.core.nth.call(null,vec__15245__15246,1,null);
var e__15250 = vec__15245__15246;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15247)))
{var be2__15253 = (cljs.core.truth_((function (){var or__3548__auto____15252 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15252))
{return or__3548__auto____15252;
} else
{return cljs.core.dominates.call(null,k__15247,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15250:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15253),k__15247,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15247," and ",cljs.core.first.call(null,be2__15253),", and neither is preferred")));
}
return be2__15253;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15332))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15332));
return cljs.core.second.call(null,best_entry__15332);
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
if(cljs.core.truth_((function (){var and__3546__auto____15351 = mf;

if(cljs.core.truth_(and__3546__auto____15351))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15351;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15354 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15354))
{return or__3548__auto____15354;
} else
{var or__3548__auto____15355 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15355))
{return or__3548__auto____15355;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15360 = mf;

if(cljs.core.truth_(and__3546__auto____15360))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15360;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15363 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15363))
{return or__3548__auto____15363;
} else
{var or__3548__auto____15365 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15365))
{return or__3548__auto____15365;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15369 = mf;

if(cljs.core.truth_(and__3546__auto____15369))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15369;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15372 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15372))
{return or__3548__auto____15372;
} else
{var or__3548__auto____15374 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15374))
{return or__3548__auto____15374;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15378 = mf;

if(cljs.core.truth_(and__3546__auto____15378))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15378;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15383 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15383))
{return or__3548__auto____15383;
} else
{var or__3548__auto____15385 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15385))
{return or__3548__auto____15385;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15389 = mf;

if(cljs.core.truth_(and__3546__auto____15389))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15389;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15390 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15390))
{return or__3548__auto____15390;
} else
{var or__3548__auto____15391 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15392 = mf;

if(cljs.core.truth_(and__3546__auto____15392))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15392;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15395 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15395))
{return or__3548__auto____15395;
} else
{var or__3548__auto____15396 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15396))
{return or__3548__auto____15396;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15398 = mf;

if(cljs.core.truth_(and__3546__auto____15398))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15398;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15400 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15400))
{return or__3548__auto____15400;
} else
{var or__3548__auto____15401 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15403 = mf;

if(cljs.core.truth_(and__3546__auto____15403))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15403;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15405 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15405))
{return or__3548__auto____15405;
} else
{var or__3548__auto____15407 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15407))
{return or__3548__auto____15407;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15432 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15433 = cljs.core._get_method.call(null,mf,dispatch_val__15432);

if(cljs.core.truth_(target_fn__15433))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15432)));
}
return cljs.core.apply.call(null,target_fn__15433,args);
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
var this__15437 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15439 = this;
cljs.core.swap_BANG_.call(null,this__15439.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15439.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15439.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15439.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15443 = this;
cljs.core.swap_BANG_.call(null,this__15443.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15443.method_cache,this__15443.method_table,this__15443.cached_hierarchy,this__15443.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15445 = this;
cljs.core.swap_BANG_.call(null,this__15445.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15445.method_cache,this__15445.method_table,this__15445.cached_hierarchy,this__15445.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15447 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15447.cached_hierarchy),cljs.core.deref.call(null,this__15447.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15447.method_cache,this__15447.method_table,this__15447.cached_hierarchy,this__15447.hierarchy);
}
var temp__3695__auto____15449 = cljs.core.deref.call(null,this__15447.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15449))
{var target_fn__15450 = temp__3695__auto____15449;

return target_fn__15450;
} else
{var temp__3695__auto____15452 = cljs.core.find_and_cache_best_method.call(null,this__15447.name,dispatch_val,this__15447.hierarchy,this__15447.method_table,this__15447.prefer_table,this__15447.method_cache,this__15447.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15452))
{var target_fn__15454 = temp__3695__auto____15452;

return target_fn__15454;
} else
{return cljs.core.deref.call(null,this__15447.method_table).call(null,this__15447.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15456 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15456.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15456.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15456.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15456.method_cache,this__15456.method_table,this__15456.cached_hierarchy,this__15456.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15461 = this;
return cljs.core.deref.call(null,this__15461.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15463 = this;
return cljs.core.deref.call(null,this__15463.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15465 = this;
return cljs.core.do_dispatch.call(null,mf,this__15465.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15545__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15545 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15545__delegate.call(this, _, args);
};
G__15545.cljs$lang$maxFixedArity = 1;
G__15545.cljs$lang$applyTo = (function (arglist__15546){
var _ = cljs.core.first(arglist__15546);
var args = cljs.core.rest(arglist__15546);
return G__15545__delegate.call(this, _, args);
});
return G__15545;
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
