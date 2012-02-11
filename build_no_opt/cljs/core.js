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
var or__3548__auto____7211 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7211))
{return or__3548__auto____7211;
} else
{var or__3548__auto____7212 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7212))
{return or__3548__auto____7212;
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
var _invoke__7626 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7273 = this$;

if(cljs.core.truth_(and__3546__auto____7273))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7273;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7389 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{var or__3548__auto____7390 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7627 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7394 = this$;

if(cljs.core.truth_(and__3546__auto____7394))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7394;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{var or__3548__auto____7404 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7628 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7408 = this$;

if(cljs.core.truth_(and__3546__auto____7408))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7408;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7412 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{var or__3548__auto____7415 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7629 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7419 = this$;

if(cljs.core.truth_(and__3546__auto____7419))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7419;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7423))
{return or__3548__auto____7423;
} else
{var or__3548__auto____7426 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7630 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7429 = this$;

if(cljs.core.truth_(and__3546__auto____7429))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7429;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7441 = this$;

if(cljs.core.truth_(and__3546__auto____7441))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7441;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7445 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7445))
{return or__3548__auto____7445;
} else
{var or__3548__auto____7447 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7447))
{return or__3548__auto____7447;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7451 = this$;

if(cljs.core.truth_(and__3546__auto____7451))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7451;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7455 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7455))
{return or__3548__auto____7455;
} else
{var or__3548__auto____7458 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7462 = this$;

if(cljs.core.truth_(and__3546__auto____7462))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7462;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7467 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{var or__3548__auto____7470 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7473 = this$;

if(cljs.core.truth_(and__3546__auto____7473))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7473;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7483 = this$;

if(cljs.core.truth_(and__3546__auto____7483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7485 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7485))
{return or__3548__auto____7485;
} else
{var or__3548__auto____7487 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7487))
{return or__3548__auto____7487;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7488 = this$;

if(cljs.core.truth_(and__3546__auto____7488))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7488;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7489 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{var or__3548__auto____7491 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7491))
{return or__3548__auto____7491;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7493 = this$;

if(cljs.core.truth_(and__3546__auto____7493))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7493;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7495 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7495))
{return or__3548__auto____7495;
} else
{var or__3548__auto____7496 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7498 = this$;

if(cljs.core.truth_(and__3546__auto____7498))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7498;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7499 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{var or__3548__auto____7501 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7503 = this$;

if(cljs.core.truth_(and__3546__auto____7503))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7503;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7505 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
} else
{var or__3548__auto____7508 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7508))
{return or__3548__auto____7508;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7511 = this$;

if(cljs.core.truth_(and__3546__auto____7511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7512 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7512))
{return or__3548__auto____7512;
} else
{var or__3548__auto____7513 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7603 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7603))
{return or__3548__auto____7603;
} else
{var or__3548__auto____7604 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7604))
{return or__3548__auto____7604;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7605 = this$;

if(cljs.core.truth_(and__3546__auto____7605))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7605;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7606 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7606))
{return or__3548__auto____7606;
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
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7608 = this$;

if(cljs.core.truth_(and__3546__auto____7608))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7608;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7609 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7609))
{return or__3548__auto____7609;
} else
{var or__3548__auto____7610 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7610))
{return or__3548__auto____7610;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7611 = this$;

if(cljs.core.truth_(and__3546__auto____7611))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7611;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7614 = this$;

if(cljs.core.truth_(and__3546__auto____7614))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7614;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7615 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7615))
{return or__3548__auto____7615;
} else
{var or__3548__auto____7616 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7616))
{return or__3548__auto____7616;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7646 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7617 = this$;

if(cljs.core.truth_(and__3546__auto____7617))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7617;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7618 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7618))
{return or__3548__auto____7618;
} else
{var or__3548__auto____7619 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7619))
{return or__3548__auto____7619;
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
return _invoke__7626.call(this,this$);
case  2 :
return _invoke__7627.call(this,this$,a);
case  3 :
return _invoke__7628.call(this,this$,a,b);
case  4 :
return _invoke__7629.call(this,this$,a,b,c);
case  5 :
return _invoke__7630.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7631.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7646.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7708 = coll;

if(cljs.core.truth_(and__3546__auto____7708))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7708;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7716 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7720 = coll;

if(cljs.core.truth_(and__3546__auto____7720))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7720;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7773 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7773))
{return or__3548__auto____7773;
} else
{var or__3548__auto____7774 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7774))
{return or__3548__auto____7774;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7777 = coll;

if(cljs.core.truth_(and__3546__auto____7777))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7777;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7779 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
} else
{var or__3548__auto____7781 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7781))
{return or__3548__auto____7781;
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
var _nth__7795 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7787 = coll;

if(cljs.core.truth_(and__3546__auto____7787))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7787;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7789 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7791 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7796 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7792 = coll;

if(cljs.core.truth_(and__3546__auto____7792))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7792;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7793 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
} else
{var or__3548__auto____7794 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
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
return _nth__7795.call(this,coll,n);
case  3 :
return _nth__7796.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7802 = coll;

if(cljs.core.truth_(and__3546__auto____7802))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7802;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7806 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7810 = coll;

if(cljs.core.truth_(and__3546__auto____7810))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7810;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7811 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{var or__3548__auto____7812 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
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
var _lookup__7898 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7885 = o;

if(cljs.core.truth_(and__3546__auto____7885))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7885;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7886 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{var or__3548__auto____7887 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7899 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7889 = o;

if(cljs.core.truth_(and__3546__auto____7889))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7889;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7893 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{var or__3548__auto____7894 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
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
return _lookup__7898.call(this,o,k);
case  3 :
return _lookup__7899.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7942 = coll;

if(cljs.core.truth_(and__3546__auto____7942))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7942;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7944 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
} else
{var or__3548__auto____7946 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7950 = coll;

if(cljs.core.truth_(and__3546__auto____7950))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7950;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7952 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{var or__3548__auto____7953 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7976 = coll;

if(cljs.core.truth_(and__3546__auto____7976))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7976;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7977 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{var or__3548__auto____7978 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7978))
{return or__3548__auto____7978;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7982 = coll;

if(cljs.core.truth_(and__3546__auto____7982))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7982;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7988 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____7989 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
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
{var or__3548__auto____7998 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7999 = coll;

if(cljs.core.truth_(and__3546__auto____7999))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7999;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8002 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{var or__3548__auto____8003 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8013 = coll;

if(cljs.core.truth_(and__3546__auto____8013))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8013;
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
if(cljs.core.truth_((function (){var and__3546__auto____8027 = o;

if(cljs.core.truth_(and__3546__auto____8027))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8027;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8030 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
} else
{var or__3548__auto____8031 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8031))
{return or__3548__auto____8031;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8041 = o;

if(cljs.core.truth_(and__3546__auto____8041))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8041;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8042 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8042))
{return or__3548__auto____8042;
} else
{var or__3548__auto____8043 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8048 = o;

if(cljs.core.truth_(and__3546__auto____8048))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8048;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8050 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8062 = o;

if(cljs.core.truth_(and__3546__auto____8062))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8062;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8063 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
} else
{var or__3548__auto____8064 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8064))
{return or__3548__auto____8064;
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
var _reduce__8086 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8071 = coll;

if(cljs.core.truth_(and__3546__auto____8071))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8071;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8073 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{var or__3548__auto____8075 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8087 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8079 = coll;

if(cljs.core.truth_(and__3546__auto____8079))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8079;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8081 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{var or__3548__auto____8083 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
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
return _reduce__8086.call(this,coll,f);
case  3 :
return _reduce__8087.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8104 = o;

if(cljs.core.truth_(and__3546__auto____8104))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8104;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8105 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{var or__3548__auto____8106 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8110 = o;

if(cljs.core.truth_(and__3546__auto____8110))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8110;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8112 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
} else
{var or__3548__auto____8113 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8119 = o;

if(cljs.core.truth_(and__3546__auto____8119))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8119;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8120 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
} else
{var or__3548__auto____8121 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
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
if(cljs.core.truth_((function (){var and__3546__auto____8122 = o;

if(cljs.core.truth_(and__3546__auto____8122))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8122;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8123 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8123))
{return or__3548__auto____8123;
} else
{var or__3548__auto____8124 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8125 = d;

if(cljs.core.truth_(and__3546__auto____8125))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8125;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8126 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{var or__3548__auto____8127 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8128 = this$;

if(cljs.core.truth_(and__3546__auto____8128))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8128;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8129 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{var or__3548__auto____8130 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8130))
{return or__3548__auto____8130;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8131 = this$;

if(cljs.core.truth_(and__3546__auto____8131))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8131;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8132 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{var or__3548__auto____8133 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8133))
{return or__3548__auto____8133;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8142 = this$;

if(cljs.core.truth_(and__3546__auto____8142))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8142;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8144 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
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
var G__8153 = null;
var G__8153__8154 = (function (o,k){
return null;
});
var G__8153__8155 = (function (o,k,not_found){
return not_found;
});
G__8153 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8153__8154.call(this,o,k);
case  3 :
return G__8153__8155.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8153;
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
var G__8161 = null;
var G__8161__8162 = (function (_,f){
return f.call(null);
});
var G__8161__8163 = (function (_,f,start){
return start;
});
G__8161 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8161__8162.call(this,_,f);
case  3 :
return G__8161__8163.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8161;
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
var G__8169 = null;
var G__8169__8170 = (function (_,n){
return null;
});
var G__8169__8171 = (function (_,n,not_found){
return not_found;
});
G__8169 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8169__8170.call(this,_,n);
case  3 :
return G__8169__8171.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8169;
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
var ci_reduce__8207 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8189 = cljs.core._nth.call(null,cicoll,0);
var n__8190 = 1;

while(true){
if(cljs.core.truth_((n__8190 < cljs.core._count.call(null,cicoll))))
{{
var G__8213 = f.call(null,val__8189,cljs.core._nth.call(null,cicoll,n__8190));
var G__8214 = (n__8190 + 1);
val__8189 = G__8213;
n__8190 = G__8214;
continue;
}
} else
{return val__8189;
}
break;
}
}
});
var ci_reduce__8208 = (function (cicoll,f,val){
var val__8193 = val;
var n__8194 = 0;

while(true){
if(cljs.core.truth_((n__8194 < cljs.core._count.call(null,cicoll))))
{{
var G__8217 = f.call(null,val__8193,cljs.core._nth.call(null,cicoll,n__8194));
var G__8218 = (n__8194 + 1);
val__8193 = G__8217;
n__8194 = G__8218;
continue;
}
} else
{return val__8193;
}
break;
}
});
var ci_reduce__8209 = (function (cicoll,f,val,idx){
var val__8199 = val;
var n__8200 = idx;

while(true){
if(cljs.core.truth_((n__8200 < cljs.core._count.call(null,cicoll))))
{{
var G__8219 = f.call(null,val__8199,cljs.core._nth.call(null,cicoll,n__8200));
var G__8220 = (n__8200 + 1);
val__8199 = G__8219;
n__8200 = G__8220;
continue;
}
} else
{return val__8199;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8207.call(this,cicoll,f);
case  3 :
return ci_reduce__8208.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8209.call(this,cicoll,f,val,idx);
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
var this__8222 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8329 = null;
var G__8329__8330 = (function (_,f){
var this__8224 = this;
return cljs.core.ci_reduce.call(null,this__8224.a,f,(this__8224.a[this__8224.i]),(this__8224.i + 1));
});
var G__8329__8331 = (function (_,f,start){
var this__8226 = this;
return cljs.core.ci_reduce.call(null,this__8226.a,f,start,this__8226.i);
});
G__8329 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8329__8330.call(this,_,f);
case  3 :
return G__8329__8331.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8329;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8253 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8255 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8337 = null;
var G__8337__8339 = (function (coll,n){
var this__8258 = this;
var i__8261 = (n + this__8258.i);

if(cljs.core.truth_((i__8261 < this__8258.a.length)))
{return (this__8258.a[i__8261]);
} else
{return null;
}
});
var G__8337__8340 = (function (coll,n,not_found){
var this__8298 = this;
var i__8303 = (n + this__8298.i);

if(cljs.core.truth_((i__8303 < this__8298.a.length)))
{return (this__8298.a[i__8303]);
} else
{return not_found;
}
});
G__8337 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8337__8339.call(this,coll,n);
case  3 :
return G__8337__8340.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8337;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8304 = this;
return (this__8304.a.length - this__8304.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8305 = this;
return (this__8305.a[this__8305.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8307 = this;
if(cljs.core.truth_(((this__8307.i + 1) < this__8307.a.length)))
{return (new cljs.core.IndexedSeq(this__8307.a,(this__8307.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8324 = this;
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
var G__8363 = null;
var G__8363__8364 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8363__8365 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8363 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8363__8364.call(this,array,f);
case  3 :
return G__8363__8365.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8363;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8371 = null;
var G__8371__8372 = (function (array,k){
return (array[k]);
});
var G__8371__8373 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8371 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8371__8372.call(this,array,k);
case  3 :
return G__8371__8373.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8371;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8383 = null;
var G__8383__8384 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8383__8385 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8383 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8383__8384.call(this,array,n);
case  3 :
return G__8383__8385.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8383;
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
var temp__3698__auto____8397 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8397))
{var s__8398 = temp__3698__auto____8397;

return cljs.core._first.call(null,s__8398);
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
var G__8415 = cljs.core.next.call(null,s);
s = G__8415;
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
var s__8418 = cljs.core.seq.call(null,x);
var n__8419 = 0;

while(true){
if(cljs.core.truth_(s__8418))
{{
var G__8420 = cljs.core.next.call(null,s__8418);
var G__8421 = (n__8419 + 1);
s__8418 = G__8420;
n__8419 = G__8421;
continue;
}
} else
{return n__8419;
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
var conj__8428 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8429 = (function() { 
var G__8433__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8435 = conj.call(null,coll,x);
var G__8436 = cljs.core.first.call(null,xs);
var G__8437 = cljs.core.next.call(null,xs);
coll = G__8435;
x = G__8436;
xs = G__8437;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8433 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8433__delegate.call(this, coll, x, xs);
};
G__8433.cljs$lang$maxFixedArity = 2;
G__8433.cljs$lang$applyTo = (function (arglist__8440){
var coll = cljs.core.first(arglist__8440);
var x = cljs.core.first(cljs.core.next(arglist__8440));
var xs = cljs.core.rest(cljs.core.next(arglist__8440));
return G__8433__delegate.call(this, coll, x, xs);
});
return G__8433;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8428.call(this,coll,x);
default:
return conj__8429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8429.cljs$lang$applyTo;
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
var nth__8450 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8451 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8450.call(this,coll,n);
case  3 :
return nth__8451.call(this,coll,n,not_found);
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
var get__8457 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8458 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8457.call(this,o,k);
case  3 :
return get__8458.call(this,o,k,not_found);
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
var assoc__8461 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8462 = (function() { 
var G__8464__delegate = function (coll,k,v,kvs){
while(true){
var ret__8460 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8465 = ret__8460;
var G__8466 = cljs.core.first.call(null,kvs);
var G__8467 = cljs.core.second.call(null,kvs);
var G__8468 = cljs.core.nnext.call(null,kvs);
coll = G__8465;
k = G__8466;
v = G__8467;
kvs = G__8468;
continue;
}
} else
{return ret__8460;
}
break;
}
};
var G__8464 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8464__delegate.call(this, coll, k, v, kvs);
};
G__8464.cljs$lang$maxFixedArity = 3;
G__8464.cljs$lang$applyTo = (function (arglist__8469){
var coll = cljs.core.first(arglist__8469);
var k = cljs.core.first(cljs.core.next(arglist__8469));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8469)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8469)));
return G__8464__delegate.call(this, coll, k, v, kvs);
});
return G__8464;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8461.call(this,coll,k,v);
default:
return assoc__8462.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8462.cljs$lang$applyTo;
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
var dissoc__8472 = (function (coll){
return coll;
});
var dissoc__8473 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8474 = (function() { 
var G__8476__delegate = function (coll,k,ks){
while(true){
var ret__8470 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8477 = ret__8470;
var G__8478 = cljs.core.first.call(null,ks);
var G__8479 = cljs.core.next.call(null,ks);
coll = G__8477;
k = G__8478;
ks = G__8479;
continue;
}
} else
{return ret__8470;
}
break;
}
};
var G__8476 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8476__delegate.call(this, coll, k, ks);
};
G__8476.cljs$lang$maxFixedArity = 2;
G__8476.cljs$lang$applyTo = (function (arglist__8482){
var coll = cljs.core.first(arglist__8482);
var k = cljs.core.first(cljs.core.next(arglist__8482));
var ks = cljs.core.rest(cljs.core.next(arglist__8482));
return G__8476__delegate.call(this, coll, k, ks);
});
return G__8476;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8472.call(this,coll);
case  2 :
return dissoc__8473.call(this,coll,k);
default:
return dissoc__8474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8474.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8485 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8486 = x__445__auto____8485;

if(cljs.core.truth_(and__3546__auto____8486))
{var and__3546__auto____8487 = x__445__auto____8485.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8487))
{return cljs.core.not.call(null,x__445__auto____8485.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8487;
}
} else
{return and__3546__auto____8486;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8485);
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
var disj__8533 = (function (coll){
return coll;
});
var disj__8534 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8535 = (function() { 
var G__8538__delegate = function (coll,k,ks){
while(true){
var ret__8508 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8539 = ret__8508;
var G__8540 = cljs.core.first.call(null,ks);
var G__8541 = cljs.core.next.call(null,ks);
coll = G__8539;
k = G__8540;
ks = G__8541;
continue;
}
} else
{return ret__8508;
}
break;
}
};
var G__8538 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8538__delegate.call(this, coll, k, ks);
};
G__8538.cljs$lang$maxFixedArity = 2;
G__8538.cljs$lang$applyTo = (function (arglist__8542){
var coll = cljs.core.first(arglist__8542);
var k = cljs.core.first(cljs.core.next(arglist__8542));
var ks = cljs.core.rest(cljs.core.next(arglist__8542));
return G__8538__delegate.call(this, coll, k, ks);
});
return G__8538;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8533.call(this,coll);
case  2 :
return disj__8534.call(this,coll,k);
default:
return disj__8535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8535.cljs$lang$applyTo;
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
{var x__445__auto____8549 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8553 = x__445__auto____8549;

if(cljs.core.truth_(and__3546__auto____8553))
{var and__3546__auto____8554 = x__445__auto____8549.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8554))
{return cljs.core.not.call(null,x__445__auto____8549.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8554;
}
} else
{return and__3546__auto____8553;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8549);
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
{var x__445__auto____8566 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8571 = x__445__auto____8566;

if(cljs.core.truth_(and__3546__auto____8571))
{var and__3546__auto____8574 = x__445__auto____8566.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8574))
{return cljs.core.not.call(null,x__445__auto____8566.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8574;
}
} else
{return and__3546__auto____8571;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8566);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8586 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8587 = x__445__auto____8586;

if(cljs.core.truth_(and__3546__auto____8587))
{var and__3546__auto____8593 = x__445__auto____8586.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8593))
{return cljs.core.not.call(null,x__445__auto____8586.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8593;
}
} else
{return and__3546__auto____8587;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8586);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8607 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8610 = x__445__auto____8607;

if(cljs.core.truth_(and__3546__auto____8610))
{var and__3546__auto____8616 = x__445__auto____8607.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8616))
{return cljs.core.not.call(null,x__445__auto____8607.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8616;
}
} else
{return and__3546__auto____8610;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8607);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8628 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8629 = x__445__auto____8628;

if(cljs.core.truth_(and__3546__auto____8629))
{var and__3546__auto____8630 = x__445__auto____8628.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8630))
{return cljs.core.not.call(null,x__445__auto____8628.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8630;
}
} else
{return and__3546__auto____8629;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8628);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8636 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8637 = x__445__auto____8636;

if(cljs.core.truth_(and__3546__auto____8637))
{var and__3546__auto____8638 = x__445__auto____8636.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8638))
{return cljs.core.not.call(null,x__445__auto____8636.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8638;
}
} else
{return and__3546__auto____8637;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8636);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8651 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8656 = x__445__auto____8651;

if(cljs.core.truth_(and__3546__auto____8656))
{var and__3546__auto____8657 = x__445__auto____8651.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8657))
{return cljs.core.not.call(null,x__445__auto____8651.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8657;
}
} else
{return and__3546__auto____8656;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8651);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8681 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8681.push(key);
}));
return keys__8681;
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
{var x__445__auto____8712 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8713 = x__445__auto____8712;

if(cljs.core.truth_(and__3546__auto____8713))
{var and__3546__auto____8715 = x__445__auto____8712.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8715))
{return cljs.core.not.call(null,x__445__auto____8712.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8715;
}
} else
{return and__3546__auto____8713;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8712);
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
var and__3546__auto____8725 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8725))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8733 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8733))
{return or__3548__auto____8733;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8725;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8740 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8740))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8740;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8745 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8745))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8745;
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
var and__3546__auto____8752 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8752))
{return (n == n.toFixed());
} else
{return and__3546__auto____8752;
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
if(cljs.core.truth_((function (){var and__3546__auto____8759 = coll;

if(cljs.core.truth_(and__3546__auto____8759))
{var and__3546__auto____8762 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8762))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8762;
}
} else
{return and__3546__auto____8759;
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
var distinct_QMARK___8803 = (function (x){
return true;
});
var distinct_QMARK___8804 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8805 = (function() { 
var G__8809__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8796 = cljs.core.set([y,x]);
var xs__8797 = more;

while(true){
var x__8798 = cljs.core.first.call(null,xs__8797);
var etc__8799 = cljs.core.next.call(null,xs__8797);

if(cljs.core.truth_(xs__8797))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8796,x__8798)))
{return false;
} else
{{
var G__8812 = cljs.core.conj.call(null,s__8796,x__8798);
var G__8813 = etc__8799;
s__8796 = G__8812;
xs__8797 = G__8813;
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
var G__8809 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8809__delegate.call(this, x, y, more);
};
G__8809.cljs$lang$maxFixedArity = 2;
G__8809.cljs$lang$applyTo = (function (arglist__8814){
var x = cljs.core.first(arglist__8814);
var y = cljs.core.first(cljs.core.next(arglist__8814));
var more = cljs.core.rest(cljs.core.next(arglist__8814));
return G__8809__delegate.call(this, x, y, more);
});
return G__8809;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8803.call(this,x);
case  2 :
return distinct_QMARK___8804.call(this,x,y);
default:
return distinct_QMARK___8805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8805.cljs$lang$applyTo;
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
var r__8820 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8820)))
{return r__8820;
} else
{if(cljs.core.truth_(r__8820))
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
var sort__8832 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8833 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8830 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8830,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8830);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8832.call(this,comp);
case  2 :
return sort__8833.call(this,comp,coll);
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
var sort_by__8843 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8844 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8843.call(this,keyfn,comp);
case  3 :
return sort_by__8844.call(this,keyfn,comp,coll);
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
var reduce__8852 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8853 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8852.call(this,f,val);
case  3 :
return reduce__8853.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8863 = (function (f,coll){
var temp__3695__auto____8858 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8858))
{var s__8859 = temp__3695__auto____8858;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8859),cljs.core.next.call(null,s__8859));
} else
{return f.call(null);
}
});
var seq_reduce__8864 = (function (f,val,coll){
var val__8860 = val;
var coll__8861 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8861))
{{
var G__8869 = f.call(null,val__8860,cljs.core.first.call(null,coll__8861));
var G__8870 = cljs.core.next.call(null,coll__8861);
val__8860 = G__8869;
coll__8861 = G__8870;
continue;
}
} else
{return val__8860;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8863.call(this,f,val);
case  3 :
return seq_reduce__8864.call(this,f,val,coll);
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
var _PLUS___8881 = (function (){
return 0;
});
var _PLUS___8882 = (function (x){
return x;
});
var _PLUS___8883 = (function (x,y){
return (x + y);
});
var _PLUS___8884 = (function() { 
var G__8886__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8886 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8886__delegate.call(this, x, y, more);
};
G__8886.cljs$lang$maxFixedArity = 2;
G__8886.cljs$lang$applyTo = (function (arglist__8890){
var x = cljs.core.first(arglist__8890);
var y = cljs.core.first(cljs.core.next(arglist__8890));
var more = cljs.core.rest(cljs.core.next(arglist__8890));
return G__8886__delegate.call(this, x, y, more);
});
return G__8886;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8881.call(this);
case  1 :
return _PLUS___8882.call(this,x);
case  2 :
return _PLUS___8883.call(this,x,y);
default:
return _PLUS___8884.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8884.cljs$lang$applyTo;
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
var ___8900 = (function (x){
return (- x);
});
var ___8902 = (function (x,y){
return (x - y);
});
var ___8904 = (function() { 
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
return ___8900.call(this,x);
case  2 :
return ___8902.call(this,x,y);
default:
return ___8904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8904.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8913 = (function (){
return 1;
});
var _STAR___8914 = (function (x){
return x;
});
var _STAR___8915 = (function (x,y){
return (x * y);
});
var _STAR___8916 = (function() { 
var G__8918__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8918 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8918__delegate.call(this, x, y, more);
};
G__8918.cljs$lang$maxFixedArity = 2;
G__8918.cljs$lang$applyTo = (function (arglist__8919){
var x = cljs.core.first(arglist__8919);
var y = cljs.core.first(cljs.core.next(arglist__8919));
var more = cljs.core.rest(cljs.core.next(arglist__8919));
return G__8918__delegate.call(this, x, y, more);
});
return G__8918;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8913.call(this);
case  1 :
return _STAR___8914.call(this,x);
case  2 :
return _STAR___8915.call(this,x,y);
default:
return _STAR___8916.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8916.cljs$lang$applyTo;
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
var _SLASH___8926 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8927 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8928 = (function() { 
var G__8930__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8930 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8930__delegate.call(this, x, y, more);
};
G__8930.cljs$lang$maxFixedArity = 2;
G__8930.cljs$lang$applyTo = (function (arglist__8931){
var x = cljs.core.first(arglist__8931);
var y = cljs.core.first(cljs.core.next(arglist__8931));
var more = cljs.core.rest(cljs.core.next(arglist__8931));
return G__8930__delegate.call(this, x, y, more);
});
return G__8930;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8926.call(this,x);
case  2 :
return _SLASH___8927.call(this,x,y);
default:
return _SLASH___8928.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8928.cljs$lang$applyTo;
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
var _LT___8938 = (function (x){
return true;
});
var _LT___8939 = (function (x,y){
return (x < y);
});
var _LT___8940 = (function() { 
var G__8943__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8944 = y;
var G__8945 = cljs.core.first.call(null,more);
var G__8946 = cljs.core.next.call(null,more);
x = G__8944;
y = G__8945;
more = G__8946;
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
var G__8943 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8943__delegate.call(this, x, y, more);
};
G__8943.cljs$lang$maxFixedArity = 2;
G__8943.cljs$lang$applyTo = (function (arglist__8951){
var x = cljs.core.first(arglist__8951);
var y = cljs.core.first(cljs.core.next(arglist__8951));
var more = cljs.core.rest(cljs.core.next(arglist__8951));
return G__8943__delegate.call(this, x, y, more);
});
return G__8943;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8938.call(this,x);
case  2 :
return _LT___8939.call(this,x,y);
default:
return _LT___8940.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8940.cljs$lang$applyTo;
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
var _LT__EQ___8962 = (function (x){
return true;
});
var _LT__EQ___8963 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8964 = (function() { 
var G__8966__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8968 = y;
var G__8969 = cljs.core.first.call(null,more);
var G__8970 = cljs.core.next.call(null,more);
x = G__8968;
y = G__8969;
more = G__8970;
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
var G__8966 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8966__delegate.call(this, x, y, more);
};
G__8966.cljs$lang$maxFixedArity = 2;
G__8966.cljs$lang$applyTo = (function (arglist__8971){
var x = cljs.core.first(arglist__8971);
var y = cljs.core.first(cljs.core.next(arglist__8971));
var more = cljs.core.rest(cljs.core.next(arglist__8971));
return G__8966__delegate.call(this, x, y, more);
});
return G__8966;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8962.call(this,x);
case  2 :
return _LT__EQ___8963.call(this,x,y);
default:
return _LT__EQ___8964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8964.cljs$lang$applyTo;
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
var _GT___8975 = (function (x){
return true;
});
var _GT___8976 = (function (x,y){
return (x > y);
});
var _GT___8977 = (function() { 
var G__8981__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8982 = y;
var G__8983 = cljs.core.first.call(null,more);
var G__8984 = cljs.core.next.call(null,more);
x = G__8982;
y = G__8983;
more = G__8984;
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
var G__8981 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8981__delegate.call(this, x, y, more);
};
G__8981.cljs$lang$maxFixedArity = 2;
G__8981.cljs$lang$applyTo = (function (arglist__8987){
var x = cljs.core.first(arglist__8987);
var y = cljs.core.first(cljs.core.next(arglist__8987));
var more = cljs.core.rest(cljs.core.next(arglist__8987));
return G__8981__delegate.call(this, x, y, more);
});
return G__8981;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___8975.call(this,x);
case  2 :
return _GT___8976.call(this,x,y);
default:
return _GT___8977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___8977.cljs$lang$applyTo;
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
var _GT__EQ___9005 = (function (x){
return true;
});
var _GT__EQ___9006 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9007 = (function() { 
var G__9010__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9015 = y;
var G__9016 = cljs.core.first.call(null,more);
var G__9017 = cljs.core.next.call(null,more);
x = G__9015;
y = G__9016;
more = G__9017;
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
var G__9010 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9010__delegate.call(this, x, y, more);
};
G__9010.cljs$lang$maxFixedArity = 2;
G__9010.cljs$lang$applyTo = (function (arglist__9019){
var x = cljs.core.first(arglist__9019);
var y = cljs.core.first(cljs.core.next(arglist__9019));
var more = cljs.core.rest(cljs.core.next(arglist__9019));
return G__9010__delegate.call(this, x, y, more);
});
return G__9010;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9005.call(this,x);
case  2 :
return _GT__EQ___9006.call(this,x,y);
default:
return _GT__EQ___9007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9007.cljs$lang$applyTo;
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
var max__9093 = (function (x){
return x;
});
var max__9094 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9095 = (function() { 
var G__9097__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9097 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9097__delegate.call(this, x, y, more);
};
G__9097.cljs$lang$maxFixedArity = 2;
G__9097.cljs$lang$applyTo = (function (arglist__9098){
var x = cljs.core.first(arglist__9098);
var y = cljs.core.first(cljs.core.next(arglist__9098));
var more = cljs.core.rest(cljs.core.next(arglist__9098));
return G__9097__delegate.call(this, x, y, more);
});
return G__9097;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9093.call(this,x);
case  2 :
return max__9094.call(this,x,y);
default:
return max__9095.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9095.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9106 = (function (x){
return x;
});
var min__9107 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9108 = (function() { 
var G__9110__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9110 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9110__delegate.call(this, x, y, more);
};
G__9110.cljs$lang$maxFixedArity = 2;
G__9110.cljs$lang$applyTo = (function (arglist__9111){
var x = cljs.core.first(arglist__9111);
var y = cljs.core.first(cljs.core.next(arglist__9111));
var more = cljs.core.rest(cljs.core.next(arglist__9111));
return G__9110__delegate.call(this, x, y, more);
});
return G__9110;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9106.call(this,x);
case  2 :
return min__9107.call(this,x,y);
default:
return min__9108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9108.cljs$lang$applyTo;
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
var rem__9122 = (n % d);

return cljs.core.fix.call(null,((n - rem__9122) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9127 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9127));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9133 = (function (){
return Math.random.call(null);
});
var rand__9134 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9133.call(this);
case  1 :
return rand__9134.call(this,n);
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
var _EQ__EQ___9195 = (function (x){
return true;
});
var _EQ__EQ___9196 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9197 = (function() { 
var G__9217__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9222 = y;
var G__9223 = cljs.core.first.call(null,more);
var G__9224 = cljs.core.next.call(null,more);
x = G__9222;
y = G__9223;
more = G__9224;
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
var G__9217 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9217__delegate.call(this, x, y, more);
};
G__9217.cljs$lang$maxFixedArity = 2;
G__9217.cljs$lang$applyTo = (function (arglist__9266){
var x = cljs.core.first(arglist__9266);
var y = cljs.core.first(cljs.core.next(arglist__9266));
var more = cljs.core.rest(cljs.core.next(arglist__9266));
return G__9217__delegate.call(this, x, y, more);
});
return G__9217;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9195.call(this,x);
case  2 :
return _EQ__EQ___9196.call(this,x,y);
default:
return _EQ__EQ___9197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9197.cljs$lang$applyTo;
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
var n__9278 = n;
var xs__9279 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9280 = xs__9279;

if(cljs.core.truth_(and__3546__auto____9280))
{return (n__9278 > 0);
} else
{return and__3546__auto____9280;
}
})()))
{{
var G__9285 = (n__9278 - 1);
var G__9286 = cljs.core.next.call(null,xs__9279);
n__9278 = G__9285;
xs__9279 = G__9286;
continue;
}
} else
{return xs__9279;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9301 = null;
var G__9301__9304 = (function (coll,n){
var temp__3695__auto____9296 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9296))
{var xs__9297 = temp__3695__auto____9296;

return cljs.core.first.call(null,xs__9297);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9301__9306 = (function (coll,n,not_found){
var temp__3695__auto____9298 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9298))
{var xs__9299 = temp__3695__auto____9298;

return cljs.core.first.call(null,xs__9299);
} else
{return not_found;
}
});
G__9301 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9301__9304.call(this,coll,n);
case  3 :
return G__9301__9306.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9301;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9321 = (function (){
return "";
});
var str_STAR___9322 = (function (x){
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
var str_STAR___9323 = (function() { 
var G__9326__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9327 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9328 = cljs.core.next.call(null,more);
sb = G__9327;
more = G__9328;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9326 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9326__delegate.call(this, x, ys);
};
G__9326.cljs$lang$maxFixedArity = 1;
G__9326.cljs$lang$applyTo = (function (arglist__9330){
var x = cljs.core.first(arglist__9330);
var ys = cljs.core.rest(arglist__9330);
return G__9326__delegate.call(this, x, ys);
});
return G__9326;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9321.call(this);
case  1 :
return str_STAR___9322.call(this,x);
default:
return str_STAR___9323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9323.cljs$lang$applyTo;
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
var str__9467 = (function (){
return "";
});
var str__9468 = (function (x){
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
var str__9469 = (function() { 
var G__9480__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9480 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9480__delegate.call(this, x, ys);
};
G__9480.cljs$lang$maxFixedArity = 1;
G__9480.cljs$lang$applyTo = (function (arglist__9483){
var x = cljs.core.first(arglist__9483);
var ys = cljs.core.rest(arglist__9483);
return G__9480__delegate.call(this, x, ys);
});
return G__9480;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9467.call(this);
case  1 :
return str__9468.call(this,x);
default:
return str__9469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9469.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9485 = (function (s,start){
return s.substring(start);
});
var subs__9487 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9485.call(this,s,start);
case  3 :
return subs__9487.call(this,s,start,end);
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
var symbol__9495 = (function (name){
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
var symbol__9496 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9495.call(this,ns);
case  2 :
return symbol__9496.call(this,ns,name);
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
var keyword__9503 = (function (name){
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
var keyword__9504 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9503.call(this,ns);
case  2 :
return keyword__9504.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9510 = cljs.core.seq.call(null,x);
var ys__9511 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9510)))
{return cljs.core.nil_QMARK_.call(null,ys__9511);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9511)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9510),cljs.core.first.call(null,ys__9511))))
{{
var G__9518 = cljs.core.next.call(null,xs__9510);
var G__9520 = cljs.core.next.call(null,ys__9511);
xs__9510 = G__9518;
ys__9511 = G__9520;
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
return cljs.core.reduce.call(null,(function (p1__9522_SHARP_,p2__9524_SHARP_){
return cljs.core.hash_combine.call(null,p1__9522_SHARP_,cljs.core.hash.call(null,p2__9524_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9529__9530 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9529__9530))
{var G__9532__9534 = cljs.core.first.call(null,G__9529__9530);
var vec__9533__9535 = G__9532__9534;
var key_name__9536 = cljs.core.nth.call(null,vec__9533__9535,0,null);
var f__9537 = cljs.core.nth.call(null,vec__9533__9535,1,null);
var G__9529__9538 = G__9529__9530;

var G__9532__9539 = G__9532__9534;
var G__9529__9540 = G__9529__9538;

while(true){
var vec__9541__9542 = G__9532__9539;
var key_name__9543 = cljs.core.nth.call(null,vec__9541__9542,0,null);
var f__9544 = cljs.core.nth.call(null,vec__9541__9542,1,null);
var G__9529__9545 = G__9529__9540;

var str_name__9546 = cljs.core.name.call(null,key_name__9543);

obj[str_name__9546] = f__9544;
var temp__3698__auto____9547 = cljs.core.next.call(null,G__9529__9545);

if(cljs.core.truth_(temp__3698__auto____9547))
{var G__9529__9548 = temp__3698__auto____9547;

{
var G__9739 = cljs.core.first.call(null,G__9529__9548);
var G__9740 = G__9529__9548;
G__9532__9539 = G__9739;
G__9529__9540 = G__9740;
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
var this__9747 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9750 = this;
return (new cljs.core.List(this__9750.meta,o,coll,(this__9750.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9755 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9760 = this;
return this__9760.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9764 = this;
return this__9764.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9769 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9772 = this;
return this__9772.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9777 = this;
return this__9777.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9781 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9786 = this;
return (new cljs.core.List(meta,this__9786.first,this__9786.rest,this__9786.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9792 = this;
return this__9792.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9824 = this;
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
var this__9841 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9844 = this;
return (new cljs.core.List(this__9844.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9845 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9846 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9847 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9849 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9850 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9851 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9852 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9855 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9857 = this;
return this__9857.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9859 = this;
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
var this__9893 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9894 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9895 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9898 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9898.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9900 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9903 = this;
return this__9903.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9905 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9905.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9905.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9916 = this;
return this__9916.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9920 = this;
return (new cljs.core.Cons(meta,this__9920.first,this__9920.rest));
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
var G__9924 = null;
var G__9924__9953 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9924__9954 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9924 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9924__9953.call(this,string,f);
case  3 :
return G__9924__9954.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9924;
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
var G__10008 = null;
var G__10008__10010 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10008__10011 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10008 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10008__10010.call(this,this$,coll);
case  3 :
return G__10008__10011.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10008;
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
var x__10018 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10018;
} else
{lazy_seq.x = x__10018.call(null);
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
var this__10030 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10034 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10036 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10037 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10037.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10045 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10046 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10047 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10048 = this;
return this__10048.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10049 = this;
return (new cljs.core.LazySeq(meta,this__10049.realized,this__10049.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10051 = cljs.core.array.call(null);

var s__10052 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10052)))
{ary__10051.push(cljs.core.first.call(null,s__10052));
{
var G__10053 = cljs.core.next.call(null,s__10052);
s__10052 = G__10053;
continue;
}
} else
{return ary__10051;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10055 = s;
var i__10056 = n;
var sum__10057 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10059 = (i__10056 > 0);

if(cljs.core.truth_(and__3546__auto____10059))
{return cljs.core.seq.call(null,s__10055);
} else
{return and__3546__auto____10059;
}
})()))
{{
var G__10066 = cljs.core.next.call(null,s__10055);
var G__10067 = (i__10056 - 1);
var G__10068 = (sum__10057 + 1);
s__10055 = G__10066;
i__10056 = G__10067;
sum__10057 = G__10068;
continue;
}
} else
{return sum__10057;
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
var concat__10119 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10120 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10121 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10110 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10110))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10110),concat.call(null,cljs.core.rest.call(null,s__10110),y));
} else
{return y;
}
})));
});
var concat__10122 = (function() { 
var G__10129__delegate = function (x,y,zs){
var cat__10116 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10114 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10114))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10114),cat.call(null,cljs.core.rest.call(null,xys__10114),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10116.call(null,concat.call(null,x,y),zs);
};
var G__10129 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10129__delegate.call(this, x, y, zs);
};
G__10129.cljs$lang$maxFixedArity = 2;
G__10129.cljs$lang$applyTo = (function (arglist__10139){
var x = cljs.core.first(arglist__10139);
var y = cljs.core.first(cljs.core.next(arglist__10139));
var zs = cljs.core.rest(cljs.core.next(arglist__10139));
return G__10129__delegate.call(this, x, y, zs);
});
return G__10129;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10119.call(this);
case  1 :
return concat__10120.call(this,x);
case  2 :
return concat__10121.call(this,x,y);
default:
return concat__10122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10122.cljs$lang$applyTo;
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
var list_STAR___10143 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10144 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10145 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10146 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10147 = (function() { 
var G__10151__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10151 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10151__delegate.call(this, a, b, c, d, more);
};
G__10151.cljs$lang$maxFixedArity = 4;
G__10151.cljs$lang$applyTo = (function (arglist__10153){
var a = cljs.core.first(arglist__10153);
var b = cljs.core.first(cljs.core.next(arglist__10153));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10153)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10153))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10153))));
return G__10151__delegate.call(this, a, b, c, d, more);
});
return G__10151;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10143.call(this,a);
case  2 :
return list_STAR___10144.call(this,a,b);
case  3 :
return list_STAR___10145.call(this,a,b,c);
case  4 :
return list_STAR___10146.call(this,a,b,c,d);
default:
return list_STAR___10147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10147.cljs$lang$applyTo;
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
var apply__10223 = (function (f,args){
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
var apply__10224 = (function (f,x,args){
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
var apply__10225 = (function (f,x,y,args){
var arglist__10159 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10160 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10159,fixed_arity__10160) <= fixed_arity__10160)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10159));
} else
{return f.cljs$lang$applyTo(arglist__10159);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10159));
}
});
var apply__10226 = (function (f,x,y,z,args){
var arglist__10161 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10162 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10161,fixed_arity__10162) <= fixed_arity__10162)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10161));
} else
{return f.cljs$lang$applyTo(arglist__10161);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10161));
}
});
var apply__10227 = (function() { 
var G__10231__delegate = function (f,a,b,c,d,args){
var arglist__10221 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10222 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10221,fixed_arity__10222) <= fixed_arity__10222)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10221));
} else
{return f.cljs$lang$applyTo(arglist__10221);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10221));
}
};
var G__10231 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10231__delegate.call(this, f, a, b, c, d, args);
};
G__10231.cljs$lang$maxFixedArity = 5;
G__10231.cljs$lang$applyTo = (function (arglist__10233){
var f = cljs.core.first(arglist__10233);
var a = cljs.core.first(cljs.core.next(arglist__10233));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10233)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10233))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10233)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10233)))));
return G__10231__delegate.call(this, f, a, b, c, d, args);
});
return G__10231;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10223.call(this,f,a);
case  3 :
return apply__10224.call(this,f,a,b);
case  4 :
return apply__10225.call(this,f,a,b,c);
case  5 :
return apply__10226.call(this,f,a,b,c,d);
default:
return apply__10227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10227.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10238){
var obj = cljs.core.first(arglist__10238);
var f = cljs.core.first(cljs.core.next(arglist__10238));
var args = cljs.core.rest(cljs.core.next(arglist__10238));
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
var not_EQ___10241 = (function (x){
return false;
});
var not_EQ___10242 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10243 = (function() { 
var G__10245__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10245 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10245__delegate.call(this, x, y, more);
};
G__10245.cljs$lang$maxFixedArity = 2;
G__10245.cljs$lang$applyTo = (function (arglist__10246){
var x = cljs.core.first(arglist__10246);
var y = cljs.core.first(cljs.core.next(arglist__10246));
var more = cljs.core.rest(cljs.core.next(arglist__10246));
return G__10245__delegate.call(this, x, y, more);
});
return G__10245;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10241.call(this,x);
case  2 :
return not_EQ___10242.call(this,x,y);
default:
return not_EQ___10243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10243.cljs$lang$applyTo;
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
var G__10255 = pred;
var G__10256 = cljs.core.next.call(null,coll);
pred = G__10255;
coll = G__10256;
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
{var or__3548__auto____10266 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10266))
{return or__3548__auto____10266;
} else
{{
var G__10273 = pred;
var G__10274 = cljs.core.next.call(null,coll);
pred = G__10273;
coll = G__10274;
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
var G__10276 = null;
var G__10276__10279 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10276__10282 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10276__10283 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10276__10285 = (function() { 
var G__10288__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10288 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10288__delegate.call(this, x, y, zs);
};
G__10288.cljs$lang$maxFixedArity = 2;
G__10288.cljs$lang$applyTo = (function (arglist__10290){
var x = cljs.core.first(arglist__10290);
var y = cljs.core.first(cljs.core.next(arglist__10290));
var zs = cljs.core.rest(cljs.core.next(arglist__10290));
return G__10288__delegate.call(this, x, y, zs);
});
return G__10288;
})()
;
G__10276 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10276__10279.call(this);
case  1 :
return G__10276__10282.call(this,x);
case  2 :
return G__10276__10283.call(this,x,y);
default:
return G__10276__10285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10276.cljs$lang$maxFixedArity = 2;
G__10276.cljs$lang$applyTo = G__10276__10285.cljs$lang$applyTo;
return G__10276;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10301__delegate = function (args){
return x;
};
var G__10301 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10301__delegate.call(this, args);
};
G__10301.cljs$lang$maxFixedArity = 0;
G__10301.cljs$lang$applyTo = (function (arglist__10303){
var args = cljs.core.seq( arglist__10303 );;
return G__10301__delegate.call(this, args);
});
return G__10301;
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
var comp__10314 = (function (){
return cljs.core.identity;
});
var comp__10315 = (function (f){
return f;
});
var comp__10316 = (function (f,g){
return (function() {
var G__10321 = null;
var G__10321__10322 = (function (){
return f.call(null,g.call(null));
});
var G__10321__10323 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10321__10324 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10321__10325 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10321__10326 = (function() { 
var G__10329__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10329 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10329__delegate.call(this, x, y, z, args);
};
G__10329.cljs$lang$maxFixedArity = 3;
G__10329.cljs$lang$applyTo = (function (arglist__10330){
var x = cljs.core.first(arglist__10330);
var y = cljs.core.first(cljs.core.next(arglist__10330));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10330)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10330)));
return G__10329__delegate.call(this, x, y, z, args);
});
return G__10329;
})()
;
G__10321 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10321__10322.call(this);
case  1 :
return G__10321__10323.call(this,x);
case  2 :
return G__10321__10324.call(this,x,y);
case  3 :
return G__10321__10325.call(this,x,y,z);
default:
return G__10321__10326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10321.cljs$lang$maxFixedArity = 3;
G__10321.cljs$lang$applyTo = G__10321__10326.cljs$lang$applyTo;
return G__10321;
})()
});
var comp__10317 = (function (f,g,h){
return (function() {
var G__10331 = null;
var G__10331__10332 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10331__10333 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10331__10334 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10331__10335 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10331__10336 = (function() { 
var G__10344__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10344 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10344__delegate.call(this, x, y, z, args);
};
G__10344.cljs$lang$maxFixedArity = 3;
G__10344.cljs$lang$applyTo = (function (arglist__10346){
var x = cljs.core.first(arglist__10346);
var y = cljs.core.first(cljs.core.next(arglist__10346));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10346)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10346)));
return G__10344__delegate.call(this, x, y, z, args);
});
return G__10344;
})()
;
G__10331 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10331__10332.call(this);
case  1 :
return G__10331__10333.call(this,x);
case  2 :
return G__10331__10334.call(this,x,y);
case  3 :
return G__10331__10335.call(this,x,y,z);
default:
return G__10331__10336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10331.cljs$lang$maxFixedArity = 3;
G__10331.cljs$lang$applyTo = G__10331__10336.cljs$lang$applyTo;
return G__10331;
})()
});
var comp__10318 = (function() { 
var G__10351__delegate = function (f1,f2,f3,fs){
var fs__10310 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10352__delegate = function (args){
var ret__10312 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10310),args);
var fs__10313 = cljs.core.next.call(null,fs__10310);

while(true){
if(cljs.core.truth_(fs__10313))
{{
var G__10354 = cljs.core.first.call(null,fs__10313).call(null,ret__10312);
var G__10355 = cljs.core.next.call(null,fs__10313);
ret__10312 = G__10354;
fs__10313 = G__10355;
continue;
}
} else
{return ret__10312;
}
break;
}
};
var G__10352 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10352__delegate.call(this, args);
};
G__10352.cljs$lang$maxFixedArity = 0;
G__10352.cljs$lang$applyTo = (function (arglist__10356){
var args = cljs.core.seq( arglist__10356 );;
return G__10352__delegate.call(this, args);
});
return G__10352;
})()
;
};
var G__10351 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10351__delegate.call(this, f1, f2, f3, fs);
};
G__10351.cljs$lang$maxFixedArity = 3;
G__10351.cljs$lang$applyTo = (function (arglist__10357){
var f1 = cljs.core.first(arglist__10357);
var f2 = cljs.core.first(cljs.core.next(arglist__10357));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10357)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10357)));
return G__10351__delegate.call(this, f1, f2, f3, fs);
});
return G__10351;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10314.call(this);
case  1 :
return comp__10315.call(this,f1);
case  2 :
return comp__10316.call(this,f1,f2);
case  3 :
return comp__10317.call(this,f1,f2,f3);
default:
return comp__10318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10318.cljs$lang$applyTo;
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
var partial__10373 = (function (f,arg1){
return (function() { 
var G__10378__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10378 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10378__delegate.call(this, args);
};
G__10378.cljs$lang$maxFixedArity = 0;
G__10378.cljs$lang$applyTo = (function (arglist__10380){
var args = cljs.core.seq( arglist__10380 );;
return G__10378__delegate.call(this, args);
});
return G__10378;
})()
;
});
var partial__10374 = (function (f,arg1,arg2){
return (function() { 
var G__10381__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10381 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10381__delegate.call(this, args);
};
G__10381.cljs$lang$maxFixedArity = 0;
G__10381.cljs$lang$applyTo = (function (arglist__10382){
var args = cljs.core.seq( arglist__10382 );;
return G__10381__delegate.call(this, args);
});
return G__10381;
})()
;
});
var partial__10375 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10385__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10385 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10385__delegate.call(this, args);
};
G__10385.cljs$lang$maxFixedArity = 0;
G__10385.cljs$lang$applyTo = (function (arglist__10386){
var args = cljs.core.seq( arglist__10386 );;
return G__10385__delegate.call(this, args);
});
return G__10385;
})()
;
});
var partial__10376 = (function() { 
var G__10387__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10388__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10388 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10388__delegate.call(this, args);
};
G__10388.cljs$lang$maxFixedArity = 0;
G__10388.cljs$lang$applyTo = (function (arglist__10389){
var args = cljs.core.seq( arglist__10389 );;
return G__10388__delegate.call(this, args);
});
return G__10388;
})()
;
};
var G__10387 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10387__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10387.cljs$lang$maxFixedArity = 4;
G__10387.cljs$lang$applyTo = (function (arglist__10390){
var f = cljs.core.first(arglist__10390);
var arg1 = cljs.core.first(cljs.core.next(arglist__10390));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10390)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10390))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10390))));
return G__10387__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10387;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10373.call(this,f,arg1);
case  3 :
return partial__10374.call(this,f,arg1,arg2);
case  4 :
return partial__10375.call(this,f,arg1,arg2,arg3);
default:
return partial__10376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10376.cljs$lang$applyTo;
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
var fnil__10469 = (function (f,x){
return (function() {
var G__10473 = null;
var G__10473__10474 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10473__10475 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10473__10476 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10473__10477 = (function() { 
var G__10484__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10484 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10484__delegate.call(this, a, b, c, ds);
};
G__10484.cljs$lang$maxFixedArity = 3;
G__10484.cljs$lang$applyTo = (function (arglist__10486){
var a = cljs.core.first(arglist__10486);
var b = cljs.core.first(cljs.core.next(arglist__10486));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10486)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10486)));
return G__10484__delegate.call(this, a, b, c, ds);
});
return G__10484;
})()
;
G__10473 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10473__10474.call(this,a);
case  2 :
return G__10473__10475.call(this,a,b);
case  3 :
return G__10473__10476.call(this,a,b,c);
default:
return G__10473__10477.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10473.cljs$lang$maxFixedArity = 3;
G__10473.cljs$lang$applyTo = G__10473__10477.cljs$lang$applyTo;
return G__10473;
})()
});
var fnil__10470 = (function (f,x,y){
return (function() {
var G__10489 = null;
var G__10489__10490 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10489__10491 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10489__10492 = (function() { 
var G__10494__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10494 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10494__delegate.call(this, a, b, c, ds);
};
G__10494.cljs$lang$maxFixedArity = 3;
G__10494.cljs$lang$applyTo = (function (arglist__10495){
var a = cljs.core.first(arglist__10495);
var b = cljs.core.first(cljs.core.next(arglist__10495));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10495)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10495)));
return G__10494__delegate.call(this, a, b, c, ds);
});
return G__10494;
})()
;
G__10489 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10489__10490.call(this,a,b);
case  3 :
return G__10489__10491.call(this,a,b,c);
default:
return G__10489__10492.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10489.cljs$lang$maxFixedArity = 3;
G__10489.cljs$lang$applyTo = G__10489__10492.cljs$lang$applyTo;
return G__10489;
})()
});
var fnil__10471 = (function (f,x,y,z){
return (function() {
var G__10497 = null;
var G__10497__10498 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10497__10499 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10497__10500 = (function() { 
var G__10504__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10504 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10504__delegate.call(this, a, b, c, ds);
};
G__10504.cljs$lang$maxFixedArity = 3;
G__10504.cljs$lang$applyTo = (function (arglist__10510){
var a = cljs.core.first(arglist__10510);
var b = cljs.core.first(cljs.core.next(arglist__10510));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10510)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10510)));
return G__10504__delegate.call(this, a, b, c, ds);
});
return G__10504;
})()
;
G__10497 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10497__10498.call(this,a,b);
case  3 :
return G__10497__10499.call(this,a,b,c);
default:
return G__10497__10500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10497.cljs$lang$maxFixedArity = 3;
G__10497.cljs$lang$applyTo = G__10497__10500.cljs$lang$applyTo;
return G__10497;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10469.call(this,f,x);
case  3 :
return fnil__10470.call(this,f,x,y);
case  4 :
return fnil__10471.call(this,f,x,y,z);
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
var mapi__10517 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10513 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10513))
{var s__10514 = temp__3698__auto____10513;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10514)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10514)));
} else
{return null;
}
})));
});

return mapi__10517.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10520 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10520))
{var s__10521 = temp__3698__auto____10520;

var x__10523 = f.call(null,cljs.core.first.call(null,s__10521));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10523)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10521));
} else
{return cljs.core.cons.call(null,x__10523,keep.call(null,f,cljs.core.rest.call(null,s__10521)));
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
var keepi__10535 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10532 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10532))
{var s__10533 = temp__3698__auto____10532;

var x__10534 = f.call(null,idx,cljs.core.first.call(null,s__10533));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10534)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10533));
} else
{return cljs.core.cons.call(null,x__10534,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10533)));
}
} else
{return null;
}
})));
});

return keepi__10535.call(null,0,coll);
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
var every_pred__10788 = (function (p){
return (function() {
var ep1 = null;
var ep1__10795 = (function (){
return true;
});
var ep1__10796 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10797 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10565 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10565))
{return p.call(null,y);
} else
{return and__3546__auto____10565;
}
})());
});
var ep1__10798 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10568 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10568))
{var and__3546__auto____10570 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10570))
{return p.call(null,z);
} else
{return and__3546__auto____10570;
}
} else
{return and__3546__auto____10568;
}
})());
});
var ep1__10799 = (function() { 
var G__10813__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10572 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10572))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10572;
}
})());
};
var G__10813 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10813__delegate.call(this, x, y, z, args);
};
G__10813.cljs$lang$maxFixedArity = 3;
G__10813.cljs$lang$applyTo = (function (arglist__10824){
var x = cljs.core.first(arglist__10824);
var y = cljs.core.first(cljs.core.next(arglist__10824));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10824)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10824)));
return G__10813__delegate.call(this, x, y, z, args);
});
return G__10813;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10795.call(this);
case  1 :
return ep1__10796.call(this,x);
case  2 :
return ep1__10797.call(this,x,y);
case  3 :
return ep1__10798.call(this,x,y,z);
default:
return ep1__10799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10799.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10789 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10830 = (function (){
return true;
});
var ep2__10831 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10638 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10638))
{return p2.call(null,x);
} else
{return and__3546__auto____10638;
}
})());
});
var ep2__10832 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10639 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10639))
{var and__3546__auto____10641 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10641))
{var and__3546__auto____10642 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10642))
{return p2.call(null,y);
} else
{return and__3546__auto____10642;
}
} else
{return and__3546__auto____10641;
}
} else
{return and__3546__auto____10639;
}
})());
});
var ep2__10833 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10644 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10644))
{var and__3546__auto____10646 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10646))
{var and__3546__auto____10651 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10651))
{var and__3546__auto____10652 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10652))
{var and__3546__auto____10653 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10653))
{return p2.call(null,z);
} else
{return and__3546__auto____10653;
}
} else
{return and__3546__auto____10652;
}
} else
{return and__3546__auto____10651;
}
} else
{return and__3546__auto____10646;
}
} else
{return and__3546__auto____10644;
}
})());
});
var ep2__10834 = (function() { 
var G__10856__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10655 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10655))
{return cljs.core.every_QMARK_.call(null,(function (p1__10526_SHARP_){
var and__3546__auto____10656 = p1.call(null,p1__10526_SHARP_);

if(cljs.core.truth_(and__3546__auto____10656))
{return p2.call(null,p1__10526_SHARP_);
} else
{return and__3546__auto____10656;
}
}),args);
} else
{return and__3546__auto____10655;
}
})());
};
var G__10856 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10856__delegate.call(this, x, y, z, args);
};
G__10856.cljs$lang$maxFixedArity = 3;
G__10856.cljs$lang$applyTo = (function (arglist__10871){
var x = cljs.core.first(arglist__10871);
var y = cljs.core.first(cljs.core.next(arglist__10871));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10871)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10871)));
return G__10856__delegate.call(this, x, y, z, args);
});
return G__10856;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10830.call(this);
case  1 :
return ep2__10831.call(this,x);
case  2 :
return ep2__10832.call(this,x,y);
case  3 :
return ep2__10833.call(this,x,y,z);
default:
return ep2__10834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10834.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10790 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10878 = (function (){
return true;
});
var ep3__10879 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10658 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10658))
{var and__3546__auto____10659 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10659))
{return p3.call(null,x);
} else
{return and__3546__auto____10659;
}
} else
{return and__3546__auto____10658;
}
})());
});
var ep3__10880 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10666 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10666))
{var and__3546__auto____10667 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10667))
{var and__3546__auto____10669 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10669))
{var and__3546__auto____10676 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10676))
{var and__3546__auto____10677 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10677))
{return p3.call(null,y);
} else
{return and__3546__auto____10677;
}
} else
{return and__3546__auto____10676;
}
} else
{return and__3546__auto____10669;
}
} else
{return and__3546__auto____10667;
}
} else
{return and__3546__auto____10666;
}
})());
});
var ep3__10881 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10679 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10679))
{var and__3546__auto____10680 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10680))
{var and__3546__auto____10682 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10682))
{var and__3546__auto____10683 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10683))
{var and__3546__auto____10688 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10688))
{var and__3546__auto____10739 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10739))
{var and__3546__auto____10741 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10741))
{var and__3546__auto____10742 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10742))
{return p3.call(null,z);
} else
{return and__3546__auto____10742;
}
} else
{return and__3546__auto____10741;
}
} else
{return and__3546__auto____10739;
}
} else
{return and__3546__auto____10688;
}
} else
{return and__3546__auto____10683;
}
} else
{return and__3546__auto____10682;
}
} else
{return and__3546__auto____10680;
}
} else
{return and__3546__auto____10679;
}
})());
});
var ep3__10882 = (function() { 
var G__11187__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10744 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10744))
{return cljs.core.every_QMARK_.call(null,(function (p1__10527_SHARP_){
var and__3546__auto____10751 = p1.call(null,p1__10527_SHARP_);

if(cljs.core.truth_(and__3546__auto____10751))
{var and__3546__auto____10756 = p2.call(null,p1__10527_SHARP_);

if(cljs.core.truth_(and__3546__auto____10756))
{return p3.call(null,p1__10527_SHARP_);
} else
{return and__3546__auto____10756;
}
} else
{return and__3546__auto____10751;
}
}),args);
} else
{return and__3546__auto____10744;
}
})());
};
var G__11187 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11187__delegate.call(this, x, y, z, args);
};
G__11187.cljs$lang$maxFixedArity = 3;
G__11187.cljs$lang$applyTo = (function (arglist__11198){
var x = cljs.core.first(arglist__11198);
var y = cljs.core.first(cljs.core.next(arglist__11198));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11198)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11198)));
return G__11187__delegate.call(this, x, y, z, args);
});
return G__11187;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10878.call(this);
case  1 :
return ep3__10879.call(this,x);
case  2 :
return ep3__10880.call(this,x,y);
case  3 :
return ep3__10881.call(this,x,y,z);
default:
return ep3__10882.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10882.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10791 = (function() { 
var G__11202__delegate = function (p1,p2,p3,ps){
var ps__10761 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11204 = (function (){
return true;
});
var epn__11205 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10528_SHARP_){
return p1__10528_SHARP_.call(null,x);
}),ps__10761);
});
var epn__11206 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10529_SHARP_){
var and__3546__auto____10772 = p1__10529_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10772))
{return p1__10529_SHARP_.call(null,y);
} else
{return and__3546__auto____10772;
}
}),ps__10761);
});
var epn__11207 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10530_SHARP_){
var and__3546__auto____10774 = p1__10530_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10774))
{var and__3546__auto____10776 = p1__10530_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10776))
{return p1__10530_SHARP_.call(null,z);
} else
{return and__3546__auto____10776;
}
} else
{return and__3546__auto____10774;
}
}),ps__10761);
});
var epn__11208 = (function() { 
var G__11216__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10777 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10777))
{return cljs.core.every_QMARK_.call(null,(function (p1__10531_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10531_SHARP_,args);
}),ps__10761);
} else
{return and__3546__auto____10777;
}
})());
};
var G__11216 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11216__delegate.call(this, x, y, z, args);
};
G__11216.cljs$lang$maxFixedArity = 3;
G__11216.cljs$lang$applyTo = (function (arglist__11218){
var x = cljs.core.first(arglist__11218);
var y = cljs.core.first(cljs.core.next(arglist__11218));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11218)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11218)));
return G__11216__delegate.call(this, x, y, z, args);
});
return G__11216;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11204.call(this);
case  1 :
return epn__11205.call(this,x);
case  2 :
return epn__11206.call(this,x,y);
case  3 :
return epn__11207.call(this,x,y,z);
default:
return epn__11208.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11208.cljs$lang$applyTo;
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
G__11202.cljs$lang$applyTo = (function (arglist__11221){
var p1 = cljs.core.first(arglist__11221);
var p2 = cljs.core.first(cljs.core.next(arglist__11221));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11221)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11221)));
return G__11202__delegate.call(this, p1, p2, p3, ps);
});
return G__11202;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10788.call(this,p1);
case  2 :
return every_pred__10789.call(this,p1,p2);
case  3 :
return every_pred__10790.call(this,p1,p2,p3);
default:
return every_pred__10791.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10791.cljs$lang$applyTo;
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
var some_fn__11406 = (function (p){
return (function() {
var sp1 = null;
var sp1__11413 = (function (){
return null;
});
var sp1__11414 = (function (x){
return p.call(null,x);
});
var sp1__11415 = (function (x,y){
var or__3548__auto____11235 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11235))
{return or__3548__auto____11235;
} else
{return p.call(null,y);
}
});
var sp1__11416 = (function (x,y,z){
var or__3548__auto____11238 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11238))
{return or__3548__auto____11238;
} else
{var or__3548__auto____11241 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11241))
{return or__3548__auto____11241;
} else
{return p.call(null,z);
}
}
});
var sp1__11417 = (function() { 
var G__11424__delegate = function (x,y,z,args){
var or__3548__auto____11245 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11245))
{return or__3548__auto____11245;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11424 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11424__delegate.call(this, x, y, z, args);
};
G__11424.cljs$lang$maxFixedArity = 3;
G__11424.cljs$lang$applyTo = (function (arglist__11428){
var x = cljs.core.first(arglist__11428);
var y = cljs.core.first(cljs.core.next(arglist__11428));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11428)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11428)));
return G__11424__delegate.call(this, x, y, z, args);
});
return G__11424;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11413.call(this);
case  1 :
return sp1__11414.call(this,x);
case  2 :
return sp1__11415.call(this,x,y);
case  3 :
return sp1__11416.call(this,x,y,z);
default:
return sp1__11417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11417.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11407 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11433 = (function (){
return null;
});
var sp2__11435 = (function (x){
var or__3548__auto____11249 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11249))
{return or__3548__auto____11249;
} else
{return p2.call(null,x);
}
});
var sp2__11436 = (function (x,y){
var or__3548__auto____11251 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11251))
{return or__3548__auto____11251;
} else
{var or__3548__auto____11253 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11253))
{return or__3548__auto____11253;
} else
{var or__3548__auto____11255 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11255))
{return or__3548__auto____11255;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11437 = (function (x,y,z){
var or__3548__auto____11258 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11258))
{return or__3548__auto____11258;
} else
{var or__3548__auto____11260 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11260))
{return or__3548__auto____11260;
} else
{var or__3548__auto____11263 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11263))
{return or__3548__auto____11263;
} else
{var or__3548__auto____11267 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11267))
{return or__3548__auto____11267;
} else
{var or__3548__auto____11269 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11269))
{return or__3548__auto____11269;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11438 = (function() { 
var G__11452__delegate = function (x,y,z,args){
var or__3548__auto____11271 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11271))
{return or__3548__auto____11271;
} else
{return cljs.core.some.call(null,(function (p1__10553_SHARP_){
var or__3548__auto____11274 = p1.call(null,p1__10553_SHARP_);

if(cljs.core.truth_(or__3548__auto____11274))
{return or__3548__auto____11274;
} else
{return p2.call(null,p1__10553_SHARP_);
}
}),args);
}
};
var G__11452 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11452__delegate.call(this, x, y, z, args);
};
G__11452.cljs$lang$maxFixedArity = 3;
G__11452.cljs$lang$applyTo = (function (arglist__11455){
var x = cljs.core.first(arglist__11455);
var y = cljs.core.first(cljs.core.next(arglist__11455));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11455)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11455)));
return G__11452__delegate.call(this, x, y, z, args);
});
return G__11452;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11433.call(this);
case  1 :
return sp2__11435.call(this,x);
case  2 :
return sp2__11436.call(this,x,y);
case  3 :
return sp2__11437.call(this,x,y,z);
default:
return sp2__11438.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11438.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11408 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11458 = (function (){
return null;
});
var sp3__11459 = (function (x){
var or__3548__auto____11280 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11280))
{return or__3548__auto____11280;
} else
{var or__3548__auto____11282 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11282))
{return or__3548__auto____11282;
} else
{return p3.call(null,x);
}
}
});
var sp3__11460 = (function (x,y){
var or__3548__auto____11285 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{var or__3548__auto____11286 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11286))
{return or__3548__auto____11286;
} else
{var or__3548__auto____11288 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11288))
{return or__3548__auto____11288;
} else
{var or__3548__auto____11290 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11290))
{return or__3548__auto____11290;
} else
{var or__3548__auto____11292 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11292))
{return or__3548__auto____11292;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11461 = (function (x,y,z){
var or__3548__auto____11296 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11296))
{return or__3548__auto____11296;
} else
{var or__3548__auto____11298 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{var or__3548__auto____11300 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11300))
{return or__3548__auto____11300;
} else
{var or__3548__auto____11301 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11301))
{return or__3548__auto____11301;
} else
{var or__3548__auto____11302 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11302))
{return or__3548__auto____11302;
} else
{var or__3548__auto____11304 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11304))
{return or__3548__auto____11304;
} else
{var or__3548__auto____11306 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11306))
{return or__3548__auto____11306;
} else
{var or__3548__auto____11308 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
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
var sp3__11462 = (function() { 
var G__11660__delegate = function (x,y,z,args){
var or__3548__auto____11313 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11313))
{return or__3548__auto____11313;
} else
{return cljs.core.some.call(null,(function (p1__10555_SHARP_){
var or__3548__auto____11317 = p1.call(null,p1__10555_SHARP_);

if(cljs.core.truth_(or__3548__auto____11317))
{return or__3548__auto____11317;
} else
{var or__3548__auto____11318 = p2.call(null,p1__10555_SHARP_);

if(cljs.core.truth_(or__3548__auto____11318))
{return or__3548__auto____11318;
} else
{return p3.call(null,p1__10555_SHARP_);
}
}
}),args);
}
};
var G__11660 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11660__delegate.call(this, x, y, z, args);
};
G__11660.cljs$lang$maxFixedArity = 3;
G__11660.cljs$lang$applyTo = (function (arglist__11662){
var x = cljs.core.first(arglist__11662);
var y = cljs.core.first(cljs.core.next(arglist__11662));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11662)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11662)));
return G__11660__delegate.call(this, x, y, z, args);
});
return G__11660;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11458.call(this);
case  1 :
return sp3__11459.call(this,x);
case  2 :
return sp3__11460.call(this,x,y);
case  3 :
return sp3__11461.call(this,x,y,z);
default:
return sp3__11462.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11462.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11409 = (function() { 
var G__11667__delegate = function (p1,p2,p3,ps){
var ps__11321 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11668 = (function (){
return null;
});
var spn__11669 = (function (x){
return cljs.core.some.call(null,(function (p1__10556_SHARP_){
return p1__10556_SHARP_.call(null,x);
}),ps__11321);
});
var spn__11670 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10557_SHARP_){
var or__3548__auto____11326 = p1__10557_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{return p1__10557_SHARP_.call(null,y);
}
}),ps__11321);
});
var spn__11671 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10558_SHARP_){
var or__3548__auto____11388 = p1__10558_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11388))
{return or__3548__auto____11388;
} else
{var or__3548__auto____11389 = p1__10558_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11389))
{return or__3548__auto____11389;
} else
{return p1__10558_SHARP_.call(null,z);
}
}
}),ps__11321);
});
var spn__11672 = (function() { 
var G__11681__delegate = function (x,y,z,args){
var or__3548__auto____11392 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11392))
{return or__3548__auto____11392;
} else
{return cljs.core.some.call(null,(function (p1__10560_SHARP_){
return cljs.core.some.call(null,p1__10560_SHARP_,args);
}),ps__11321);
}
};
var G__11681 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11681__delegate.call(this, x, y, z, args);
};
G__11681.cljs$lang$maxFixedArity = 3;
G__11681.cljs$lang$applyTo = (function (arglist__11686){
var x = cljs.core.first(arglist__11686);
var y = cljs.core.first(cljs.core.next(arglist__11686));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11686)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11686)));
return G__11681__delegate.call(this, x, y, z, args);
});
return G__11681;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11668.call(this);
case  1 :
return spn__11669.call(this,x);
case  2 :
return spn__11670.call(this,x,y);
case  3 :
return spn__11671.call(this,x,y,z);
default:
return spn__11672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11672.cljs$lang$applyTo;
return spn;
})()
};
var G__11667 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11667__delegate.call(this, p1, p2, p3, ps);
};
G__11667.cljs$lang$maxFixedArity = 3;
G__11667.cljs$lang$applyTo = (function (arglist__11689){
var p1 = cljs.core.first(arglist__11689);
var p2 = cljs.core.first(cljs.core.next(arglist__11689));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11689)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11689)));
return G__11667__delegate.call(this, p1, p2, p3, ps);
});
return G__11667;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11406.call(this,p1);
case  2 :
return some_fn__11407.call(this,p1,p2);
case  3 :
return some_fn__11408.call(this,p1,p2,p3);
default:
return some_fn__11409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11409.cljs$lang$applyTo;
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
var map__11718 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11694))
{var s__11696 = temp__3698__auto____11694;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11696)),map.call(null,f,cljs.core.rest.call(null,s__11696)));
} else
{return null;
}
})));
});
var map__11719 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11699 = cljs.core.seq.call(null,c1);
var s2__11700 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11706 = s1__11699;

if(cljs.core.truth_(and__3546__auto____11706))
{return s2__11700;
} else
{return and__3546__auto____11706;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11699),cljs.core.first.call(null,s2__11700)),map.call(null,f,cljs.core.rest.call(null,s1__11699),cljs.core.rest.call(null,s2__11700)));
} else
{return null;
}
})));
});
var map__11720 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11709 = cljs.core.seq.call(null,c1);
var s2__11710 = cljs.core.seq.call(null,c2);
var s3__11711 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11712 = s1__11709;

if(cljs.core.truth_(and__3546__auto____11712))
{var and__3546__auto____11713 = s2__11710;

if(cljs.core.truth_(and__3546__auto____11713))
{return s3__11711;
} else
{return and__3546__auto____11713;
}
} else
{return and__3546__auto____11712;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11709),cljs.core.first.call(null,s2__11710),cljs.core.first.call(null,s3__11711)),map.call(null,f,cljs.core.rest.call(null,s1__11709),cljs.core.rest.call(null,s2__11710),cljs.core.rest.call(null,s3__11711)));
} else
{return null;
}
})));
});
var map__11721 = (function() { 
var G__11726__delegate = function (f,c1,c2,c3,colls){
var step__11717 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11716 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11716)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11716),step.call(null,map.call(null,cljs.core.rest,ss__11716)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11227_SHARP_){
return cljs.core.apply.call(null,f,p1__11227_SHARP_);
}),step__11717.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11726 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11726__delegate.call(this, f, c1, c2, c3, colls);
};
G__11726.cljs$lang$maxFixedArity = 4;
G__11726.cljs$lang$applyTo = (function (arglist__11728){
var f = cljs.core.first(arglist__11728);
var c1 = cljs.core.first(cljs.core.next(arglist__11728));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11728)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11728))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11728))));
return G__11726__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11726;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11718.call(this,f,c1);
case  3 :
return map__11719.call(this,f,c1,c2);
case  4 :
return map__11720.call(this,f,c1,c2,c3);
default:
return map__11721.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11721.cljs$lang$applyTo;
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
{var temp__3698__auto____11730 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11730))
{var s__11731 = temp__3698__auto____11730;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11731),take.call(null,(n - 1),cljs.core.rest.call(null,s__11731)));
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
var G__11769 = (n - 1);
var G__11770 = cljs.core.rest.call(null,s__11741);
n = G__11769;
coll = G__11770;
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
var s__11795 = cljs.core.seq.call(null,coll);
var lead__11796 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11796))
{{
var G__11805 = cljs.core.next.call(null,s__11795);
var G__11806 = cljs.core.next.call(null,lead__11796);
s__11795 = G__11805;
lead__11796 = G__11806;
continue;
}
} else
{return s__11795;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11815 = (function (pred,coll){
while(true){
var s__11811 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11812 = s__11811;

if(cljs.core.truth_(and__3546__auto____11812))
{return pred.call(null,cljs.core.first.call(null,s__11811));
} else
{return and__3546__auto____11812;
}
})()))
{{
var G__11819 = pred;
var G__11820 = cljs.core.rest.call(null,s__11811);
pred = G__11819;
coll = G__11820;
continue;
}
} else
{return s__11811;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11815.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11830 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11830))
{var s__11831 = temp__3698__auto____11830;

return cljs.core.concat.call(null,s__11831,cycle.call(null,s__11831));
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
var repeat__11841 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11842 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11841.call(this,n);
case  2 :
return repeat__11842.call(this,n,x);
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
var repeatedly__11859 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11860 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11859.call(this,n);
case  2 :
return repeatedly__11860.call(this,n,f);
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
var interleave__11871 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11864 = cljs.core.seq.call(null,c1);
var s2__11865 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11866 = s1__11864;

if(cljs.core.truth_(and__3546__auto____11866))
{return s2__11865;
} else
{return and__3546__auto____11866;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11864),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11865),interleave.call(null,cljs.core.rest.call(null,s1__11864),cljs.core.rest.call(null,s2__11865))));
} else
{return null;
}
})));
});
var interleave__11872 = (function() { 
var G__11874__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11870 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11870)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11870),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11870)));
} else
{return null;
}
})));
};
var G__11874 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11874__delegate.call(this, c1, c2, colls);
};
G__11874.cljs$lang$maxFixedArity = 2;
G__11874.cljs$lang$applyTo = (function (arglist__11875){
var c1 = cljs.core.first(arglist__11875);
var c2 = cljs.core.first(cljs.core.next(arglist__11875));
var colls = cljs.core.rest(cljs.core.next(arglist__11875));
return G__11874__delegate.call(this, c1, c2, colls);
});
return G__11874;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11871.call(this,c1,c2);
default:
return interleave__11872.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11872.cljs$lang$applyTo;
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
var cat__11881 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11879))
{var coll__11880 = temp__3695__auto____11879;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11880),cat.call(null,cljs.core.rest.call(null,coll__11880),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11881.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11936 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11938 = (function() { 
var G__11942__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11942 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11942__delegate.call(this, f, coll, colls);
};
G__11942.cljs$lang$maxFixedArity = 2;
G__11942.cljs$lang$applyTo = (function (arglist__11944){
var f = cljs.core.first(arglist__11944);
var coll = cljs.core.first(cljs.core.next(arglist__11944));
var colls = cljs.core.rest(cljs.core.next(arglist__11944));
return G__11942__delegate.call(this, f, coll, colls);
});
return G__11942;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11936.call(this,f,coll);
default:
return mapcat__11938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11938.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11954))
{var s__11955 = temp__3698__auto____11954;

var f__11956 = cljs.core.first.call(null,s__11955);
var r__11957 = cljs.core.rest.call(null,s__11955);

if(cljs.core.truth_(pred.call(null,f__11956)))
{return cljs.core.cons.call(null,f__11956,filter.call(null,pred,r__11957));
} else
{return filter.call(null,pred,r__11957);
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
var walk__11967 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11967.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11966_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11966_SHARP_));
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
var partition__11997 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11998 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11986 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11986))
{var s__11987 = temp__3698__auto____11986;

var p__11989 = cljs.core.take.call(null,n,s__11987);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11989))))
{return cljs.core.cons.call(null,p__11989,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11987)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11999 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11994 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11994))
{var s__11995 = temp__3698__auto____11994;

var p__11996 = cljs.core.take.call(null,n,s__11995);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11996))))
{return cljs.core.cons.call(null,p__11996,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11995)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11996,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11997.call(this,n,step);
case  3 :
return partition__11998.call(this,n,step,pad);
case  4 :
return partition__11999.call(this,n,step,pad,coll);
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
var get_in__12032 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12033 = (function (m,ks,not_found){
var sentinel__12007 = cljs.core.lookup_sentinel;
var m__12008 = m;
var ks__12009 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12009))
{var m__12028 = cljs.core.get.call(null,m__12008,cljs.core.first.call(null,ks__12009),sentinel__12007);

if(cljs.core.truth_((sentinel__12007 === m__12028)))
{return not_found;
} else
{{
var G__12039 = sentinel__12007;
var G__12040 = m__12028;
var G__12041 = cljs.core.next.call(null,ks__12009);
sentinel__12007 = G__12039;
m__12008 = G__12040;
ks__12009 = G__12041;
continue;
}
}
} else
{return m__12008;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12032.call(this,m,ks);
case  3 :
return get_in__12033.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12044,v){
var vec__12045__12046 = p__12044;
var k__12047 = cljs.core.nth.call(null,vec__12045__12046,0,null);
var ks__12048 = cljs.core.nthnext.call(null,vec__12045__12046,1);

if(cljs.core.truth_(ks__12048))
{return cljs.core.assoc.call(null,m,k__12047,assoc_in.call(null,cljs.core.get.call(null,m,k__12047),ks__12048,v));
} else
{return cljs.core.assoc.call(null,m,k__12047,v);
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
var update_in__delegate = function (m,p__12063,f,args){
var vec__12064__12065 = p__12063;
var k__12069 = cljs.core.nth.call(null,vec__12064__12065,0,null);
var ks__12070 = cljs.core.nthnext.call(null,vec__12064__12065,1);

if(cljs.core.truth_(ks__12070))
{return cljs.core.assoc.call(null,m,k__12069,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12069),ks__12070,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12069,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12069),args));
}
};
var update_in = function (m,p__12063,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12063, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12078){
var m = cljs.core.first(arglist__12078);
var p__12063 = cljs.core.first(cljs.core.next(arglist__12078));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12078)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12078)));
return update_in__delegate.call(this, m, p__12063, f, args);
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
var this__12087 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12215 = null;
var G__12215__12216 = (function (coll,k){
var this__12088 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12215__12217 = (function (coll,k,not_found){
var this__12089 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12215 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12215__12216.call(this,coll,k);
case  3 :
return G__12215__12217.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12215;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12091 = this;
var new_array__12093 = cljs.core.aclone.call(null,this__12091.array);

(new_array__12093[k] = v);
return (new cljs.core.Vector(this__12091.meta,new_array__12093));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12222 = null;
var G__12222__12223 = (function (coll,k){
var this__12098 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12222__12225 = (function (coll,k,not_found){
var this__12099 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12222 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12222__12223.call(this,coll,k);
case  3 :
return G__12222__12225.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12222;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12102 = this;
var new_array__12104 = cljs.core.aclone.call(null,this__12102.array);

new_array__12104.push(o);
return (new cljs.core.Vector(this__12102.meta,new_array__12104));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12231 = null;
var G__12231__12232 = (function (v,f){
var this__12105 = this;
return cljs.core.ci_reduce.call(null,this__12105.array,f);
});
var G__12231__12233 = (function (v,f,start){
var this__12106 = this;
return cljs.core.ci_reduce.call(null,this__12106.array,f,start);
});
G__12231 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12231__12232.call(this,v,f);
case  3 :
return G__12231__12233.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12231;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12108 = this;
if(cljs.core.truth_((this__12108.array.length > 0)))
{var vector_seq__12115 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12108.array.length)))
{return cljs.core.cons.call(null,(this__12108.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12115.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12186 = this;
return this__12186.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12196 = this;
var count__12197 = this__12196.array.length;

if(cljs.core.truth_((count__12197 > 0)))
{return (this__12196.array[(count__12197 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12198 = this;
if(cljs.core.truth_((this__12198.array.length > 0)))
{var new_array__12200 = cljs.core.aclone.call(null,this__12198.array);

new_array__12200.pop();
return (new cljs.core.Vector(this__12198.meta,new_array__12200));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12205 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12206 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12207 = this;
return (new cljs.core.Vector(meta,this__12207.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12208 = this;
return this__12208.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12245 = null;
var G__12245__12246 = (function (coll,n){
var this__12209 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12211 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12211))
{return (n < this__12209.array.length);
} else
{return and__3546__auto____12211;
}
})()))
{return (this__12209.array[n]);
} else
{return null;
}
});
var G__12245__12247 = (function (coll,n,not_found){
var this__12212 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12213 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12213))
{return (n < this__12212.array.length);
} else
{return and__3546__auto____12213;
}
})()))
{return (this__12212.array[n]);
} else
{return not_found;
}
});
G__12245 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12245__12246.call(this,coll,n);
case  3 :
return G__12245__12247.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12245;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12214 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12214.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12262){
var args = cljs.core.seq( arglist__12262 );;
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
var this__12378 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12519 = null;
var G__12519__12520 = (function (coll,k){
var this__12379 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12519__12521 = (function (coll,k,not_found){
var this__12380 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12519 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12519__12520.call(this,coll,k);
case  3 :
return G__12519__12521.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12519;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12385 = this;
var v_pos__12386 = (this__12385.start + key);

return (new cljs.core.Subvec(this__12385.meta,cljs.core._assoc.call(null,this__12385.v,v_pos__12386,val),this__12385.start,((this__12385.end > (v_pos__12386 + 1)) ? this__12385.end : (v_pos__12386 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12544 = null;
var G__12544__12545 = (function (coll,k){
var this__12387 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12544__12546 = (function (coll,k,not_found){
var this__12388 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12544 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12544__12545.call(this,coll,k);
case  3 :
return G__12544__12546.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12544;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12389 = this;
return (new cljs.core.Subvec(this__12389.meta,cljs.core._assoc_n.call(null,this__12389.v,this__12389.end,o),this__12389.start,(this__12389.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12552 = null;
var G__12552__12553 = (function (coll,f){
var this__12390 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12552__12554 = (function (coll,f,start){
var this__12391 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12552 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12552__12553.call(this,coll,f);
case  3 :
return G__12552__12554.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12552;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12392 = this;
var subvec_seq__12404 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12392.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12392.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12404.call(null,this__12392.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12405 = this;
return (this__12405.end - this__12405.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12483 = this;
return cljs.core._nth.call(null,this__12483.v,(this__12483.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12511 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12511.start,this__12511.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12511.meta,this__12511.v,this__12511.start,(this__12511.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12512 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12513 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12514 = this;
return (new cljs.core.Subvec(meta,this__12514.v,this__12514.start,this__12514.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12515 = this;
return this__12515.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12564 = null;
var G__12564__12565 = (function (coll,n){
var this__12516 = this;
return cljs.core._nth.call(null,this__12516.v,(this__12516.start + n));
});
var G__12564__12566 = (function (coll,n,not_found){
var this__12517 = this;
return cljs.core._nth.call(null,this__12517.v,(this__12517.start + n),not_found);
});
G__12564 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12564__12565.call(this,coll,n);
case  3 :
return G__12564__12566.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12564;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12518 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12518.meta);
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
var subvec__12577 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12578 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12577.call(this,v,start);
case  3 :
return subvec__12578.call(this,v,start,end);
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
var this__12584 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12586 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12588 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12653 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12653.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12655 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12691 = this;
return cljs.core._first.call(null,this__12691.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12692 = this;
var temp__3695__auto____12693 = cljs.core.next.call(null,this__12692.front);

if(cljs.core.truth_(temp__3695__auto____12693))
{var f1__12694 = temp__3695__auto____12693;

return (new cljs.core.PersistentQueueSeq(this__12692.meta,f1__12694,this__12692.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12692.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12692.meta,this__12692.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12699 = this;
return this__12699.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12700 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12700.front,this__12700.rear));
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
var this__12728 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12731 = this;
if(cljs.core.truth_(this__12731.front))
{return (new cljs.core.PersistentQueue(this__12731.meta,(this__12731.count + 1),this__12731.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12738 = this__12731.rear;

if(cljs.core.truth_(or__3548__auto____12738))
{return or__3548__auto____12738;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12731.meta,(this__12731.count + 1),cljs.core.conj.call(null,this__12731.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12740 = this;
var rear__12742 = cljs.core.seq.call(null,this__12740.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12745 = this__12740.front;

if(cljs.core.truth_(or__3548__auto____12745))
{return or__3548__auto____12745;
} else
{return rear__12742;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12740.front,cljs.core.seq.call(null,rear__12742)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12747 = this;
return this__12747.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12749 = this;
return cljs.core._first.call(null,this__12749.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12752 = this;
if(cljs.core.truth_(this__12752.front))
{var temp__3695__auto____12753 = cljs.core.next.call(null,this__12752.front);

if(cljs.core.truth_(temp__3695__auto____12753))
{var f1__12754 = temp__3695__auto____12753;

return (new cljs.core.PersistentQueue(this__12752.meta,(this__12752.count - 1),f1__12754,this__12752.rear));
} else
{return (new cljs.core.PersistentQueue(this__12752.meta,(this__12752.count - 1),cljs.core.seq.call(null,this__12752.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12755 = this;
return cljs.core.first.call(null,this__12755.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12760 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12761 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12762 = this;
return (new cljs.core.PersistentQueue(meta,this__12762.count,this__12762.front,this__12762.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12764 = this;
return this__12764.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12766 = this;
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
var this__12811 = this;
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
var len__12819 = array.length;

var i__12820 = 0;

while(true){
if(cljs.core.truth_((i__12820 < len__12819)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12820]))))
{return i__12820;
} else
{{
var G__12822 = (i__12820 + incr);
i__12820 = G__12822;
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
var obj_map_contains_key_QMARK___12827 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12828 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12825 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12825))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12825;
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
return obj_map_contains_key_QMARK___12827.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12828.call(this,k,strobj,true_val,false_val);
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
var this__12852 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12895 = null;
var G__12895__12896 = (function (coll,k){
var this__12854 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12895__12897 = (function (coll,k,not_found){
var this__12855 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12855.strobj,(this__12855.strobj[k]),not_found);
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
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12860 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12861 = goog.object.clone.call(null,this__12860.strobj);
var overwrite_QMARK___12862 = new_strobj__12861.hasOwnProperty(k);

(new_strobj__12861[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12862))
{return (new cljs.core.ObjMap(this__12860.meta,this__12860.keys,new_strobj__12861));
} else
{var new_keys__12863 = cljs.core.aclone.call(null,this__12860.keys);

new_keys__12863.push(k);
return (new cljs.core.ObjMap(this__12860.meta,new_keys__12863,new_strobj__12861));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12860.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12864 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12864.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12910 = null;
var G__12910__12911 = (function (coll,k){
var this__12866 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12910__12912 = (function (coll,k,not_found){
var this__12868 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12910 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12910__12911.call(this,coll,k);
case  3 :
return G__12910__12912.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12910;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12869 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12873 = this;
if(cljs.core.truth_((this__12873.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12834_SHARP_){
return cljs.core.vector.call(null,p1__12834_SHARP_,(this__12873.strobj[p1__12834_SHARP_]));
}),this__12873.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12877 = this;
return this__12877.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12879 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12881 = this;
return (new cljs.core.ObjMap(meta,this__12881.keys,this__12881.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12883 = this;
return this__12883.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12885 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12885.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12887 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12888 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12888))
{return this__12887.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12888;
}
})()))
{var new_keys__12890 = cljs.core.aclone.call(null,this__12887.keys);
var new_strobj__12891 = goog.object.clone.call(null,this__12887.strobj);

new_keys__12890.splice(cljs.core.scan_array.call(null,1,k,new_keys__12890),1);
cljs.core.js_delete.call(null,new_strobj__12891,k);
return (new cljs.core.ObjMap(this__12887.meta,new_keys__12890,new_strobj__12891));
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
var this__12979 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13072 = null;
var G__13072__13073 = (function (coll,k){
var this__12982 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13072__13074 = (function (coll,k,not_found){
var this__12983 = this;
var bucket__12987 = (this__12983.hashobj[cljs.core.hash.call(null,k)]);
var i__12990 = (cljs.core.truth_(bucket__12987)?cljs.core.scan_array.call(null,2,k,bucket__12987):null);

if(cljs.core.truth_(i__12990))
{return (bucket__12987[(i__12990 + 1)]);
} else
{return not_found;
}
});
G__13072 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13072__13073.call(this,coll,k);
case  3 :
return G__13072__13074.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13072;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12994 = this;
var h__12995 = cljs.core.hash.call(null,k);
var bucket__12996 = (this__12994.hashobj[h__12995]);

if(cljs.core.truth_(bucket__12996))
{var new_bucket__12999 = cljs.core.aclone.call(null,bucket__12996);
var new_hashobj__13000 = goog.object.clone.call(null,this__12994.hashobj);

(new_hashobj__13000[h__12995] = new_bucket__12999);
var temp__3695__auto____13001 = cljs.core.scan_array.call(null,2,k,new_bucket__12999);

if(cljs.core.truth_(temp__3695__auto____13001))
{var i__13004 = temp__3695__auto____13001;

(new_bucket__12999[(i__13004 + 1)] = v);
return (new cljs.core.HashMap(this__12994.meta,this__12994.count,new_hashobj__13000));
} else
{new_bucket__12999.push(k,v);
return (new cljs.core.HashMap(this__12994.meta,(this__12994.count + 1),new_hashobj__13000));
}
} else
{var new_hashobj__13005 = goog.object.clone.call(null,this__12994.hashobj);

(new_hashobj__13005[h__12995] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12994.meta,(this__12994.count + 1),new_hashobj__13005));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13007 = this;
var bucket__13014 = (this__13007.hashobj[cljs.core.hash.call(null,k)]);
var i__13015 = (cljs.core.truth_(bucket__13014)?cljs.core.scan_array.call(null,2,k,bucket__13014):null);

if(cljs.core.truth_(i__13015))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13090 = null;
var G__13090__13091 = (function (coll,k){
var this__13017 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13090__13092 = (function (coll,k,not_found){
var this__13018 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13090 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13090__13091.call(this,coll,k);
case  3 :
return G__13090__13092.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13090;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13019 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13022 = this;
if(cljs.core.truth_((this__13022.count > 0)))
{var hashes__13025 = cljs.core.js_keys.call(null,this__13022.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12944_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13022.hashobj[p1__12944_SHARP_])));
}),hashes__13025);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13027 = this;
return this__13027.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13029 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13035 = this;
return (new cljs.core.HashMap(meta,this__13035.count,this__13035.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13037 = this;
return this__13037.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13040 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13040.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13043 = this;
var h__13046 = cljs.core.hash.call(null,k);
var bucket__13047 = (this__13043.hashobj[h__13046]);
var i__13049 = (cljs.core.truth_(bucket__13047)?cljs.core.scan_array.call(null,2,k,bucket__13047):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13049)))
{return coll;
} else
{var new_hashobj__13056 = goog.object.clone.call(null,this__13043.hashobj);

if(cljs.core.truth_((3 > bucket__13047.length)))
{cljs.core.js_delete.call(null,new_hashobj__13056,h__13046);
} else
{var new_bucket__13059 = cljs.core.aclone.call(null,bucket__13047);

new_bucket__13059.splice(i__13049,2);
(new_hashobj__13056[h__13046] = new_bucket__13059);
}
return (new cljs.core.HashMap(this__13043.meta,(this__13043.count - 1),new_hashobj__13056));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13096 = ks.length;

var i__13097 = 0;
var out__13098 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13097 < len__13096)))
{{
var G__13102 = (i__13097 + 1);
var G__13103 = cljs.core.assoc.call(null,out__13098,(ks[i__13097]),(vs[i__13097]));
i__13097 = G__13102;
out__13098 = G__13103;
continue;
}
} else
{return out__13098;
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
var in$__13106 = cljs.core.seq.call(null,keyvals);
var out__13108 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13106))
{{
var G__13112 = cljs.core.nnext.call(null,in$__13106);
var G__13113 = cljs.core.assoc.call(null,out__13108,cljs.core.first.call(null,in$__13106),cljs.core.second.call(null,in$__13106));
in$__13106 = G__13112;
out__13108 = G__13113;
continue;
}
} else
{return out__13108;
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
hash_map.cljs$lang$applyTo = (function (arglist__13114){
var keyvals = cljs.core.seq( arglist__13114 );;
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
{return cljs.core.reduce.call(null,(function (p1__13119_SHARP_,p2__13120_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13130 = p1__13119_SHARP_;

if(cljs.core.truth_(or__3548__auto____13130))
{return or__3548__auto____13130;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13120_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13137){
var maps = cljs.core.seq( arglist__13137 );;
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
{var merge_entry__13145 = (function (m,e){
var k__13143 = cljs.core.first.call(null,e);
var v__13144 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13143)))
{return cljs.core.assoc.call(null,m,k__13143,f.call(null,cljs.core.get.call(null,m,k__13143),v__13144));
} else
{return cljs.core.assoc.call(null,m,k__13143,v__13144);
}
});
var merge2__13149 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13145,(function (){var or__3548__auto____13146 = m1;

if(cljs.core.truth_(or__3548__auto____13146))
{return or__3548__auto____13146;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13149,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13153){
var f = cljs.core.first(arglist__13153);
var maps = cljs.core.rest(arglist__13153);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13159 = cljs.core.ObjMap.fromObject([],{});
var keys__13160 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13160))
{var key__13161 = cljs.core.first.call(null,keys__13160);
var entry__13162 = cljs.core.get.call(null,map,key__13161,"﷐'user/not-found");

{
var G__13163 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13162,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13159,key__13161,entry__13162):ret__13159);
var G__13164 = cljs.core.next.call(null,keys__13160);
ret__13159 = G__13163;
keys__13160 = G__13164;
continue;
}
} else
{return ret__13159;
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
var this__13165 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13198 = null;
var G__13198__13199 = (function (coll,v){
var this__13167 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13198__13200 = (function (coll,v,not_found){
var this__13170 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13170.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13198 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13198__13199.call(this,coll,v);
case  3 :
return G__13198__13200.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13198;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13206 = null;
var G__13206__13207 = (function (coll,k){
var this__13172 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13206__13208 = (function (coll,k,not_found){
var this__13173 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13206 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13206__13207.call(this,coll,k);
case  3 :
return G__13206__13208.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13206;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13177 = this;
return (new cljs.core.Set(this__13177.meta,cljs.core.assoc.call(null,this__13177.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13178 = this;
return cljs.core.keys.call(null,this__13178.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13181 = this;
return (new cljs.core.Set(this__13181.meta,cljs.core.dissoc.call(null,this__13181.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13189 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13190 = this;
var and__3546__auto____13191 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13191))
{var and__3546__auto____13192 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13192))
{return cljs.core.every_QMARK_.call(null,(function (p1__13158_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13158_SHARP_);
}),other);
} else
{return and__3546__auto____13192;
}
} else
{return and__3546__auto____13191;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13195 = this;
return (new cljs.core.Set(meta,this__13195.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13196 = this;
return this__13196.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13197 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13197.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13226 = cljs.core.seq.call(null,coll);
var out__13227 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13226))))
{{
var G__13232 = cljs.core.rest.call(null,in$__13226);
var G__13233 = cljs.core.conj.call(null,out__13227,cljs.core.first.call(null,in$__13226));
in$__13226 = G__13232;
out__13227 = G__13233;
continue;
}
} else
{return out__13227;
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
{var n__13234 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13235 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13235))
{var e__13236 = temp__3695__auto____13235;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13236));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13234,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13221_SHARP_){
var temp__3695__auto____13237 = cljs.core.find.call(null,smap,p1__13221_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13237))
{var e__13238 = temp__3695__auto____13237;

return cljs.core.second.call(null,e__13238);
} else
{return p1__13221_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13259 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13245,seen){
while(true){
var vec__13246__13248 = p__13245;
var f__13249 = cljs.core.nth.call(null,vec__13246__13248,0,null);
var xs__13250 = vec__13246__13248;

var temp__3698__auto____13253 = cljs.core.seq.call(null,xs__13250);

if(cljs.core.truth_(temp__3698__auto____13253))
{var s__13254 = temp__3698__auto____13253;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13249)))
{{
var G__13265 = cljs.core.rest.call(null,s__13254);
var G__13266 = seen;
p__13245 = G__13265;
seen = G__13266;
continue;
}
} else
{return cljs.core.cons.call(null,f__13249,step.call(null,cljs.core.rest.call(null,s__13254),cljs.core.conj.call(null,seen,f__13249)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13259.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13271 = cljs.core.Vector.fromArray([]);
var s__13273 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13273)))
{{
var G__13276 = cljs.core.conj.call(null,ret__13271,cljs.core.first.call(null,s__13273));
var G__13277 = cljs.core.next.call(null,s__13273);
ret__13271 = G__13276;
s__13273 = G__13277;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13271);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13289 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13289))
{return or__3548__auto____13289;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13291 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13291 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13291 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13303 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13303))
{return or__3548__auto____13303;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13305 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13305 > -1)))
{return cljs.core.subs.call(null,x,2,i__13305);
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
var map__13311 = cljs.core.ObjMap.fromObject([],{});
var ks__13313 = cljs.core.seq.call(null,keys);
var vs__13316 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13317 = ks__13313;

if(cljs.core.truth_(and__3546__auto____13317))
{return vs__13316;
} else
{return and__3546__auto____13317;
}
})()))
{{
var G__13322 = cljs.core.assoc.call(null,map__13311,cljs.core.first.call(null,ks__13313),cljs.core.first.call(null,vs__13316));
var G__13323 = cljs.core.next.call(null,ks__13313);
var G__13324 = cljs.core.next.call(null,vs__13316);
map__13311 = G__13322;
ks__13313 = G__13323;
vs__13316 = G__13324;
continue;
}
} else
{return map__13311;
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
var max_key__13333 = (function (k,x){
return x;
});
var max_key__13334 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13335 = (function() { 
var G__13341__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13309_SHARP_,p2__13310_SHARP_){
return max_key.call(null,k,p1__13309_SHARP_,p2__13310_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13341 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13341__delegate.call(this, k, x, y, more);
};
G__13341.cljs$lang$maxFixedArity = 3;
G__13341.cljs$lang$applyTo = (function (arglist__13343){
var k = cljs.core.first(arglist__13343);
var x = cljs.core.first(cljs.core.next(arglist__13343));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13343)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13343)));
return G__13341__delegate.call(this, k, x, y, more);
});
return G__13341;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13333.call(this,k,x);
case  3 :
return max_key__13334.call(this,k,x,y);
default:
return max_key__13335.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13335.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13357 = (function (k,x){
return x;
});
var min_key__13358 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13359 = (function() { 
var G__13363__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13325_SHARP_,p2__13326_SHARP_){
return min_key.call(null,k,p1__13325_SHARP_,p2__13326_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13363 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13363__delegate.call(this, k, x, y, more);
};
G__13363.cljs$lang$maxFixedArity = 3;
G__13363.cljs$lang$applyTo = (function (arglist__13369){
var k = cljs.core.first(arglist__13369);
var x = cljs.core.first(cljs.core.next(arglist__13369));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13369)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13369)));
return G__13363__delegate.call(this, k, x, y, more);
});
return G__13363;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13357.call(this,k,x);
case  3 :
return min_key__13358.call(this,k,x,y);
default:
return min_key__13359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13359.cljs$lang$applyTo;
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
var temp__3698__auto____13370 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13370))
{var s__13371 = temp__3698__auto____13370;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13371),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13371)));
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
var temp__3698__auto____13459 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13459))
{var s__13463 = temp__3698__auto____13459;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13463))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13463),take_while.call(null,pred,cljs.core.rest.call(null,s__13463)));
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
var this__13487 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13491 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13551 = null;
var G__13551__13554 = (function (rng,f){
var this__13498 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13551__13555 = (function (rng,f,s){
var this__13499 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13551 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13551__13554.call(this,rng,f);
case  3 :
return G__13551__13555.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13551;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13501 = this;
var comp__13503 = (cljs.core.truth_((this__13501.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13503.call(null,this__13501.start,this__13501.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13504 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13504.end - this__13504.start) / this__13504.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13505 = this;
return this__13505.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13509 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13509.meta,(this__13509.start + this__13509.step),this__13509.end,this__13509.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13518 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13526 = this;
return (new cljs.core.Range(meta,this__13526.start,this__13526.end,this__13526.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13529 = this;
return this__13529.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13565 = null;
var G__13565__13567 = (function (rng,n){
var this__13531 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13531.start + (n * this__13531.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13534 = (this__13531.start > this__13531.end);

if(cljs.core.truth_(and__3546__auto____13534))
{return cljs.core._EQ_.call(null,this__13531.step,0);
} else
{return and__3546__auto____13534;
}
})()))
{return this__13531.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13565__13568 = (function (rng,n,not_found){
var this__13538 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13538.start + (n * this__13538.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13541 = (this__13538.start > this__13538.end);

if(cljs.core.truth_(and__3546__auto____13541))
{return cljs.core._EQ_.call(null,this__13538.step,0);
} else
{return and__3546__auto____13541;
}
})()))
{return this__13538.start;
} else
{return not_found;
}
}
});
G__13565 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13565__13567.call(this,rng,n);
case  3 :
return G__13565__13568.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13565;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13543 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13543.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13596 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13597 = (function (end){
return range.call(null,0,end,1);
});
var range__13598 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13599 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13596.call(this);
case  1 :
return range__13597.call(this,start);
case  2 :
return range__13598.call(this,start,end);
case  3 :
return range__13599.call(this,start,end,step);
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
var temp__3698__auto____13607 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13607))
{var s__13609 = temp__3698__auto____13607;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13609),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13609)));
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
var temp__3698__auto____13626 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13626))
{var s__13631 = temp__3698__auto____13626;

var fst__13632 = cljs.core.first.call(null,s__13631);
var fv__13633 = f.call(null,fst__13632);
var run__13635 = cljs.core.cons.call(null,fst__13632,cljs.core.take_while.call(null,(function (p1__13617_SHARP_){
return cljs.core._EQ_.call(null,fv__13633,f.call(null,p1__13617_SHARP_));
}),cljs.core.next.call(null,s__13631)));

return cljs.core.cons.call(null,run__13635,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13635),s__13631))));
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
var reductions__13724 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13710 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13710))
{var s__13714 = temp__3695__auto____13710;

return reductions.call(null,f,cljs.core.first.call(null,s__13714),cljs.core.rest.call(null,s__13714));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13725 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13720 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13720))
{var s__13721 = temp__3698__auto____13720;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13721)),cljs.core.rest.call(null,s__13721));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13724.call(this,f,init);
case  3 :
return reductions__13725.call(this,f,init,coll);
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
var juxt__13745 = (function (f){
return (function() {
var G__13750 = null;
var G__13750__13751 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13750__13752 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13750__13753 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13750__13754 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13750__13755 = (function() { 
var G__13760__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13760 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13760__delegate.call(this, x, y, z, args);
};
G__13760.cljs$lang$maxFixedArity = 3;
G__13760.cljs$lang$applyTo = (function (arglist__13762){
var x = cljs.core.first(arglist__13762);
var y = cljs.core.first(cljs.core.next(arglist__13762));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13762)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13762)));
return G__13760__delegate.call(this, x, y, z, args);
});
return G__13760;
})()
;
G__13750 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13750__13751.call(this);
case  1 :
return G__13750__13752.call(this,x);
case  2 :
return G__13750__13753.call(this,x,y);
case  3 :
return G__13750__13754.call(this,x,y,z);
default:
return G__13750__13755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13750.cljs$lang$maxFixedArity = 3;
G__13750.cljs$lang$applyTo = G__13750__13755.cljs$lang$applyTo;
return G__13750;
})()
});
var juxt__13746 = (function (f,g){
return (function() {
var G__13767 = null;
var G__13767__13770 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13767__13771 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13767__13773 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13767__13774 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13767__13775 = (function() { 
var G__13784__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13784 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13784__delegate.call(this, x, y, z, args);
};
G__13784.cljs$lang$maxFixedArity = 3;
G__13784.cljs$lang$applyTo = (function (arglist__13787){
var x = cljs.core.first(arglist__13787);
var y = cljs.core.first(cljs.core.next(arglist__13787));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13787)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13787)));
return G__13784__delegate.call(this, x, y, z, args);
});
return G__13784;
})()
;
G__13767 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13767__13770.call(this);
case  1 :
return G__13767__13771.call(this,x);
case  2 :
return G__13767__13773.call(this,x,y);
case  3 :
return G__13767__13774.call(this,x,y,z);
default:
return G__13767__13775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13767.cljs$lang$maxFixedArity = 3;
G__13767.cljs$lang$applyTo = G__13767__13775.cljs$lang$applyTo;
return G__13767;
})()
});
var juxt__13747 = (function (f,g,h){
return (function() {
var G__13791 = null;
var G__13791__13792 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13791__13793 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13791__13794 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13791__13795 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13791__13796 = (function() { 
var G__13809__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13809 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13809__delegate.call(this, x, y, z, args);
};
G__13809.cljs$lang$maxFixedArity = 3;
G__13809.cljs$lang$applyTo = (function (arglist__13812){
var x = cljs.core.first(arglist__13812);
var y = cljs.core.first(cljs.core.next(arglist__13812));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13812)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13812)));
return G__13809__delegate.call(this, x, y, z, args);
});
return G__13809;
})()
;
G__13791 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13791__13792.call(this);
case  1 :
return G__13791__13793.call(this,x);
case  2 :
return G__13791__13794.call(this,x,y);
case  3 :
return G__13791__13795.call(this,x,y,z);
default:
return G__13791__13796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13791.cljs$lang$maxFixedArity = 3;
G__13791.cljs$lang$applyTo = G__13791__13796.cljs$lang$applyTo;
return G__13791;
})()
});
var juxt__13748 = (function() { 
var G__13814__delegate = function (f,g,h,fs){
var fs__13736 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13815 = null;
var G__13815__13817 = (function (){
return cljs.core.reduce.call(null,(function (p1__13696_SHARP_,p2__13697_SHARP_){
return cljs.core.conj.call(null,p1__13696_SHARP_,p2__13697_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13736);
});
var G__13815__13818 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13698_SHARP_,p2__13699_SHARP_){
return cljs.core.conj.call(null,p1__13698_SHARP_,p2__13699_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13736);
});
var G__13815__13819 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13700_SHARP_,p2__13701_SHARP_){
return cljs.core.conj.call(null,p1__13700_SHARP_,p2__13701_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13736);
});
var G__13815__13820 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13702_SHARP_,p2__13703_SHARP_){
return cljs.core.conj.call(null,p1__13702_SHARP_,p2__13703_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13736);
});
var G__13815__13821 = (function() { 
var G__13836__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13705_SHARP_,p2__13706_SHARP_){
return cljs.core.conj.call(null,p1__13705_SHARP_,cljs.core.apply.call(null,p2__13706_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13736);
};
var G__13836 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13836__delegate.call(this, x, y, z, args);
};
G__13836.cljs$lang$maxFixedArity = 3;
G__13836.cljs$lang$applyTo = (function (arglist__13838){
var x = cljs.core.first(arglist__13838);
var y = cljs.core.first(cljs.core.next(arglist__13838));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13838)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13838)));
return G__13836__delegate.call(this, x, y, z, args);
});
return G__13836;
})()
;
G__13815 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13815__13817.call(this);
case  1 :
return G__13815__13818.call(this,x);
case  2 :
return G__13815__13819.call(this,x,y);
case  3 :
return G__13815__13820.call(this,x,y,z);
default:
return G__13815__13821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13815.cljs$lang$maxFixedArity = 3;
G__13815.cljs$lang$applyTo = G__13815__13821.cljs$lang$applyTo;
return G__13815;
})()
};
var G__13814 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13814__delegate.call(this, f, g, h, fs);
};
G__13814.cljs$lang$maxFixedArity = 3;
G__13814.cljs$lang$applyTo = (function (arglist__13844){
var f = cljs.core.first(arglist__13844);
var g = cljs.core.first(cljs.core.next(arglist__13844));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13844)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13844)));
return G__13814__delegate.call(this, f, g, h, fs);
});
return G__13814;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13745.call(this,f);
case  2 :
return juxt__13746.call(this,f,g);
case  3 :
return juxt__13747.call(this,f,g,h);
default:
return juxt__13748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13748.cljs$lang$applyTo;
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
var dorun__13853 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13860 = cljs.core.next.call(null,coll);
coll = G__13860;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13854 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13847 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13847))
{return (n > 0);
} else
{return and__3546__auto____13847;
}
})()))
{{
var G__13861 = (n - 1);
var G__13862 = cljs.core.next.call(null,coll);
n = G__13861;
coll = G__13862;
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
return dorun__13853.call(this,n);
case  2 :
return dorun__13854.call(this,n,coll);
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
var doall__13871 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13872 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13871.call(this,n);
case  2 :
return doall__13872.call(this,n,coll);
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
var matches__13885 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13885),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13885),1)))
{return cljs.core.first.call(null,matches__13885);
} else
{return cljs.core.vec.call(null,matches__13885);
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
var matches__13897 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13897)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13897),1)))
{return cljs.core.first.call(null,matches__13897);
} else
{return cljs.core.vec.call(null,matches__13897);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13902 = cljs.core.re_find.call(null,re,s);
var match_idx__13903 = s.search(re);
var match_str__13904 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13902))?cljs.core.first.call(null,match_data__13902):match_data__13902);
var post_match__13905 = cljs.core.subs.call(null,s,(match_idx__13903 + cljs.core.count.call(null,match_str__13904)));

if(cljs.core.truth_(match_data__13902))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13902,re_seq.call(null,re,post_match__13905));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13910_SHARP_){
return print_one.call(null,p1__13910_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13937 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13937))
{var and__3546__auto____13947 = (function (){var x__445__auto____13941 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13943 = x__445__auto____13941;

if(cljs.core.truth_(and__3546__auto____13943))
{var and__3546__auto____13944 = x__445__auto____13941.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13944))
{return cljs.core.not.call(null,x__445__auto____13941.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13944;
}
} else
{return and__3546__auto____13943;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13941);
}
})();

if(cljs.core.truth_(and__3546__auto____13947))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13947;
}
} else
{return and__3546__auto____13937;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13948 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13949 = x__445__auto____13948;

if(cljs.core.truth_(and__3546__auto____13949))
{var and__3546__auto____13950 = x__445__auto____13948.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13950))
{return cljs.core.not.call(null,x__445__auto____13948.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13950;
}
} else
{return and__3546__auto____13949;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13948);
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
var first_obj__13977 = cljs.core.first.call(null,objs);
var sb__13978 = (new goog.string.StringBuffer());

var G__13979__13980 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13979__13980))
{var obj__13988 = cljs.core.first.call(null,G__13979__13980);
var G__13979__13989 = G__13979__13980;

while(true){
if(cljs.core.truth_((obj__13988 === first_obj__13977)))
{} else
{sb__13978.append(" ");
}
var G__13990__13991 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13988,opts));

if(cljs.core.truth_(G__13990__13991))
{var string__13992 = cljs.core.first.call(null,G__13990__13991);
var G__13990__13993 = G__13990__13991;

while(true){
sb__13978.append(string__13992);
var temp__3698__auto____13994 = cljs.core.next.call(null,G__13990__13993);

if(cljs.core.truth_(temp__3698__auto____13994))
{var G__13990__13995 = temp__3698__auto____13994;

{
var G__14016 = cljs.core.first.call(null,G__13990__13995);
var G__14017 = G__13990__13995;
string__13992 = G__14016;
G__13990__13993 = G__14017;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13996 = cljs.core.next.call(null,G__13979__13989);

if(cljs.core.truth_(temp__3698__auto____13996))
{var G__13979__13997 = temp__3698__auto____13996;

{
var G__14080 = cljs.core.first.call(null,G__13979__13997);
var G__14081 = G__13979__13997;
obj__13988 = G__14080;
G__13979__13989 = G__14081;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13978);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14092 = cljs.core.first.call(null,objs);

var G__14093__14094 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14093__14094))
{var obj__14096 = cljs.core.first.call(null,G__14093__14094);
var G__14093__14097 = G__14093__14094;

while(true){
if(cljs.core.truth_((obj__14096 === first_obj__14092)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14099__14100 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14096,opts));

if(cljs.core.truth_(G__14099__14100))
{var string__14101 = cljs.core.first.call(null,G__14099__14100);
var G__14099__14102 = G__14099__14100;

while(true){
cljs.core.string_print.call(null,string__14101);
var temp__3698__auto____14104 = cljs.core.next.call(null,G__14099__14102);

if(cljs.core.truth_(temp__3698__auto____14104))
{var G__14099__14105 = temp__3698__auto____14104;

{
var G__14206 = cljs.core.first.call(null,G__14099__14105);
var G__14207 = G__14099__14105;
string__14101 = G__14206;
G__14099__14102 = G__14207;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14107 = cljs.core.next.call(null,G__14093__14097);

if(cljs.core.truth_(temp__3698__auto____14107))
{var G__14093__14108 = temp__3698__auto____14107;

{
var G__14210 = cljs.core.first.call(null,G__14093__14108);
var G__14211 = G__14093__14108;
obj__14096 = G__14210;
G__14093__14097 = G__14211;
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
pr_str.cljs$lang$applyTo = (function (arglist__14258){
var objs = cljs.core.seq( arglist__14258 );;
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
pr.cljs$lang$applyTo = (function (arglist__14266){
var objs = cljs.core.seq( arglist__14266 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14277){
var objs = cljs.core.seq( arglist__14277 );;
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
println.cljs$lang$applyTo = (function (arglist__14290){
var objs = cljs.core.seq( arglist__14290 );;
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
prn.cljs$lang$applyTo = (function (arglist__14309){
var objs = cljs.core.seq( arglist__14309 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14317 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14317,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14337 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14337))
{var nspc__14343 = temp__3698__auto____14337;

return cljs.core.str.call(null,nspc__14343,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14348 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14348))
{var nspc__14350 = temp__3698__auto____14348;

return cljs.core.str.call(null,nspc__14350,"/");
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
var pr_pair__14415 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14415,"{",", ","}",opts,coll);
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
var this__14494 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14497 = this;
var G__14499__14500 = cljs.core.seq.call(null,this__14497.watches);

if(cljs.core.truth_(G__14499__14500))
{var G__14503__14505 = cljs.core.first.call(null,G__14499__14500);
var vec__14504__14506 = G__14503__14505;
var key__14507 = cljs.core.nth.call(null,vec__14504__14506,0,null);
var f__14508 = cljs.core.nth.call(null,vec__14504__14506,1,null);
var G__14499__14509 = G__14499__14500;

var G__14503__14510 = G__14503__14505;
var G__14499__14511 = G__14499__14509;

while(true){
var vec__14512__14513 = G__14503__14510;
var key__14514 = cljs.core.nth.call(null,vec__14512__14513,0,null);
var f__14515 = cljs.core.nth.call(null,vec__14512__14513,1,null);
var G__14499__14516 = G__14499__14511;

f__14515.call(null,key__14514,this$,oldval,newval);
var temp__3698__auto____14517 = cljs.core.next.call(null,G__14499__14516);

if(cljs.core.truth_(temp__3698__auto____14517))
{var G__14499__14518 = temp__3698__auto____14517;

{
var G__14536 = cljs.core.first.call(null,G__14499__14518);
var G__14537 = G__14499__14518;
G__14503__14510 = G__14536;
G__14499__14511 = G__14537;
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
var this__14521 = this;
return this$.watches = cljs.core.assoc.call(null,this__14521.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14524 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14524.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14528 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14528.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14532 = this;
return this__14532.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14533 = this;
return this__14533.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14534 = this;
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
var atom__14544 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14545 = (function() { 
var G__14548__delegate = function (x,p__14538){
var map__14539__14540 = p__14538;
var map__14539__14541 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14539__14540))?cljs.core.apply.call(null,cljs.core.hash_map,map__14539__14540):map__14539__14540);
var validator__14542 = cljs.core.get.call(null,map__14539__14541,"﷐'validator");
var meta__14543 = cljs.core.get.call(null,map__14539__14541,"﷐'meta");

return (new cljs.core.Atom(x,meta__14543,validator__14542,null));
};
var G__14548 = function (x,var_args){
var p__14538 = null;
if (goog.isDef(var_args)) {
  p__14538 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14548__delegate.call(this, x, p__14538);
};
G__14548.cljs$lang$maxFixedArity = 1;
G__14548.cljs$lang$applyTo = (function (arglist__14666){
var x = cljs.core.first(arglist__14666);
var p__14538 = cljs.core.rest(arglist__14666);
return G__14548__delegate.call(this, x, p__14538);
});
return G__14548;
})()
;
atom = function(x,var_args){
var p__14538 = var_args;
switch(arguments.length){
case  1 :
return atom__14544.call(this,x);
default:
return atom__14545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14545.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14671 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14671))
{var validate__14672 = temp__3698__auto____14671;

if(cljs.core.truth_(validate__14672.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14674 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14674,new_value);
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
var swap_BANG___14686 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14688 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14689 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14690 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14691 = (function() { 
var G__14704__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14704 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14704__delegate.call(this, a, f, x, y, z, more);
};
G__14704.cljs$lang$maxFixedArity = 5;
G__14704.cljs$lang$applyTo = (function (arglist__14709){
var a = cljs.core.first(arglist__14709);
var f = cljs.core.first(cljs.core.next(arglist__14709));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14709)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14709))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14709)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14709)))));
return G__14704__delegate.call(this, a, f, x, y, z, more);
});
return G__14704;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14686.call(this,a,f);
case  3 :
return swap_BANG___14688.call(this,a,f,x);
case  4 :
return swap_BANG___14689.call(this,a,f,x,y);
case  5 :
return swap_BANG___14690.call(this,a,f,x,y,z);
default:
return swap_BANG___14691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14691.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14732){
var iref = cljs.core.first(arglist__14732);
var f = cljs.core.first(cljs.core.next(arglist__14732));
var args = cljs.core.rest(cljs.core.next(arglist__14732));
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
var gensym__14768 = (function (){
return gensym.call(null,"G__");
});
var gensym__14769 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14768.call(this);
case  1 :
return gensym__14769.call(this,prefix_string);
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
var this__14780 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14780.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14782 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14782.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14782.state,this__14782.f);
}
return cljs.core.deref.call(null,this__14782.state);
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
delay.cljs$lang$applyTo = (function (arglist__14791){
var body = cljs.core.seq( arglist__14791 );;
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
var map__14822__14823 = options;
var map__14822__14824 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14822__14823))?cljs.core.apply.call(null,cljs.core.hash_map,map__14822__14823):map__14822__14823);
var keywordize_keys__14826 = cljs.core.get.call(null,map__14822__14824,"﷐'keywordize-keys");
var keyfn__14827 = (cljs.core.truth_(keywordize_keys__14826)?cljs.core.keyword:cljs.core.str);
var f__14857 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14855 = (function iter__14841(s__14842){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14842__14843 = s__14842;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14842__14843)))
{var k__14849 = cljs.core.first.call(null,s__14842__14843);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14827.call(null,k__14849),thisfn.call(null,(x[k__14849]))]),iter__14841.call(null,cljs.core.rest.call(null,s__14842__14843)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14855.call(null,cljs.core.js_keys.call(null,x));
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

return f__14857.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14862){
var x = cljs.core.first(arglist__14862);
var options = cljs.core.rest(arglist__14862);
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
var mem__14865 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14875__delegate = function (args){
var temp__3695__auto____14867 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14865),args);

if(cljs.core.truth_(temp__3695__auto____14867))
{var v__14870 = temp__3695__auto____14867;

return v__14870;
} else
{var ret__14872 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14865,cljs.core.assoc,args,ret__14872);
return ret__14872;
}
};
var G__14875 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14875__delegate.call(this, args);
};
G__14875.cljs$lang$maxFixedArity = 0;
G__14875.cljs$lang$applyTo = (function (arglist__14904){
var args = cljs.core.seq( arglist__14904 );;
return G__14875__delegate.call(this, args);
});
return G__14875;
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
var trampoline__14920 = (function (f){
while(true){
var ret__14908 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14908)))
{{
var G__14929 = ret__14908;
f = G__14929;
continue;
}
} else
{return ret__14908;
}
break;
}
});
var trampoline__14923 = (function() { 
var G__14931__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14931 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14931__delegate.call(this, f, args);
};
G__14931.cljs$lang$maxFixedArity = 1;
G__14931.cljs$lang$applyTo = (function (arglist__14932){
var f = cljs.core.first(arglist__14932);
var args = cljs.core.rest(arglist__14932);
return G__14931__delegate.call(this, f, args);
});
return G__14931;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14920.call(this,f);
default:
return trampoline__14923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14923.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14941 = (function (){
return rand.call(null,1);
});
var rand__14942 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14941.call(this);
case  1 :
return rand__14942.call(this,n);
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
var k__14951 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14951,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14951,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14992 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14993 = (function (h,child,parent){
var or__3548__auto____14961 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14961))
{return or__3548__auto____14961;
} else
{var or__3548__auto____14962 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14962))
{return or__3548__auto____14962;
} else
{var and__3546__auto____14964 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14964))
{var and__3546__auto____14966 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14966))
{var and__3546__auto____14973 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14973))
{var ret__14977 = true;
var i__14978 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14980 = cljs.core.not.call(null,ret__14977);

if(cljs.core.truth_(or__3548__auto____14980))
{return or__3548__auto____14980;
} else
{return cljs.core._EQ_.call(null,i__14978,cljs.core.count.call(null,parent));
}
})()))
{return ret__14977;
} else
{{
var G__15001 = isa_QMARK_.call(null,h,child.call(null,i__14978),parent.call(null,i__14978));
var G__15002 = (i__14978 + 1);
ret__14977 = G__15001;
i__14978 = G__15002;
continue;
}
}
break;
}
} else
{return and__3546__auto____14973;
}
} else
{return and__3546__auto____14966;
}
} else
{return and__3546__auto____14964;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14992.call(this,h,child);
case  3 :
return isa_QMARK___14993.call(this,h,child,parent);
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
var parents__15012 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15013 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15012.call(this,h);
case  2 :
return parents__15013.call(this,h,tag);
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
var ancestors__15018 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15019 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15018.call(this,h);
case  2 :
return ancestors__15019.call(this,h,tag);
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
var descendants__15032 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15034 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15032.call(this,h);
case  2 :
return descendants__15034.call(this,h,tag);
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
var derive__15054 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15056 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15045 = "﷐'parents".call(null,h);
var td__15047 = "﷐'descendants".call(null,h);
var ta__15049 = "﷐'ancestors".call(null,h);
var tf__15051 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15053 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15045.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15049.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15049.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15045,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15051.call(null,"﷐'ancestors".call(null,h),tag,td__15047,parent,ta__15049),"﷐'descendants":tf__15051.call(null,"﷐'descendants".call(null,h),parent,ta__15049,tag,td__15047)});
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
return derive__15054.call(this,h,tag);
case  3 :
return derive__15056.call(this,h,tag,parent);
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
var underive__15072 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15073 = (function (h,tag,parent){
var parentMap__15065 = "﷐'parents".call(null,h);
var childsParents__15066 = (cljs.core.truth_(parentMap__15065.call(null,tag))?cljs.core.disj.call(null,parentMap__15065.call(null,tag),parent):cljs.core.set([]));
var newParents__15069 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15066))?cljs.core.assoc.call(null,parentMap__15065,tag,childsParents__15066):cljs.core.dissoc.call(null,parentMap__15065,tag));
var deriv_seq__15070 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15038_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15038_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15038_SHARP_),cljs.core.second.call(null,p1__15038_SHARP_)));
}),cljs.core.seq.call(null,newParents__15069)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15065.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15040_SHARP_,p2__15042_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15040_SHARP_,p2__15042_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15070));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15072.call(this,h,tag);
case  3 :
return underive__15073.call(this,h,tag,parent);
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
var xprefs__15111 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15113 = (cljs.core.truth_((function (){var and__3546__auto____15112 = xprefs__15111;

if(cljs.core.truth_(and__3546__auto____15112))
{return xprefs__15111.call(null,y);
} else
{return and__3546__auto____15112;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15113))
{return or__3548__auto____15113;
} else
{var or__3548__auto____15115 = (function (){var ps__15114 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15114) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15114),prefer_table)))
{} else
{}
{
var G__15118 = cljs.core.rest.call(null,ps__15114);
ps__15114 = G__15118;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15115))
{return or__3548__auto____15115;
} else
{var or__3548__auto____15117 = (function (){var ps__15116 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15116) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15116),y,prefer_table)))
{} else
{}
{
var G__15119 = cljs.core.rest.call(null,ps__15116);
ps__15116 = G__15119;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15117))
{return or__3548__auto____15117;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15120 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15120))
{return or__3548__auto____15120;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15132 = cljs.core.reduce.call(null,(function (be,p__15121){
var vec__15122__15123 = p__15121;
var k__15124 = cljs.core.nth.call(null,vec__15122__15123,0,null);
var ___15125 = cljs.core.nth.call(null,vec__15122__15123,1,null);
var e__15126 = vec__15122__15123;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15124)))
{var be2__15128 = (cljs.core.truth_((function (){var or__3548__auto____15127 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15127))
{return or__3548__auto____15127;
} else
{return cljs.core.dominates.call(null,k__15124,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15126:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15128),k__15124,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15124," and ",cljs.core.first.call(null,be2__15128),", and neither is preferred")));
}
return be2__15128;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15132))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15132));
return cljs.core.second.call(null,best_entry__15132);
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
if(cljs.core.truth_((function (){var and__3546__auto____15154 = mf;

if(cljs.core.truth_(and__3546__auto____15154))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15154;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15156 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15156))
{return or__3548__auto____15156;
} else
{var or__3548__auto____15158 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15158))
{return or__3548__auto____15158;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15159 = mf;

if(cljs.core.truth_(and__3546__auto____15159))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15159;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15162 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15162))
{return or__3548__auto____15162;
} else
{var or__3548__auto____15163 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15163))
{return or__3548__auto____15163;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15164 = mf;

if(cljs.core.truth_(and__3546__auto____15164))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15164;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15227 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15227))
{return or__3548__auto____15227;
} else
{var or__3548__auto____15228 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15228))
{return or__3548__auto____15228;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15231 = mf;

if(cljs.core.truth_(and__3546__auto____15231))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15231;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15233 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15233))
{return or__3548__auto____15233;
} else
{var or__3548__auto____15234 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15234))
{return or__3548__auto____15234;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15238 = mf;

if(cljs.core.truth_(and__3546__auto____15238))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15238;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15242 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15242))
{return or__3548__auto____15242;
} else
{var or__3548__auto____15244 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15244))
{return or__3548__auto____15244;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15249 = mf;

if(cljs.core.truth_(and__3546__auto____15249))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15249;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15252 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15252))
{return or__3548__auto____15252;
} else
{var or__3548__auto____15254 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15254))
{return or__3548__auto____15254;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15257 = mf;

if(cljs.core.truth_(and__3546__auto____15257))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15257;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15261 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15261))
{return or__3548__auto____15261;
} else
{var or__3548__auto____15263 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15263))
{return or__3548__auto____15263;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15271 = mf;

if(cljs.core.truth_(and__3546__auto____15271))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15271;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15275 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15275))
{return or__3548__auto____15275;
} else
{var or__3548__auto____15277 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15277))
{return or__3548__auto____15277;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15329 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15331 = cljs.core._get_method.call(null,mf,dispatch_val__15329);

if(cljs.core.truth_(target_fn__15331))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15329)));
}
return cljs.core.apply.call(null,target_fn__15331,args);
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
var this__15342 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15358 = this;
cljs.core.swap_BANG_.call(null,this__15358.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15358.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15358.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15358.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15361 = this;
cljs.core.swap_BANG_.call(null,this__15361.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15361.method_cache,this__15361.method_table,this__15361.cached_hierarchy,this__15361.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15362 = this;
cljs.core.swap_BANG_.call(null,this__15362.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15362.method_cache,this__15362.method_table,this__15362.cached_hierarchy,this__15362.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15363 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15363.cached_hierarchy),cljs.core.deref.call(null,this__15363.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15363.method_cache,this__15363.method_table,this__15363.cached_hierarchy,this__15363.hierarchy);
}
var temp__3695__auto____15366 = cljs.core.deref.call(null,this__15363.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15366))
{var target_fn__15368 = temp__3695__auto____15366;

return target_fn__15368;
} else
{var temp__3695__auto____15369 = cljs.core.find_and_cache_best_method.call(null,this__15363.name,dispatch_val,this__15363.hierarchy,this__15363.method_table,this__15363.prefer_table,this__15363.method_cache,this__15363.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15369))
{var target_fn__15370 = temp__3695__auto____15369;

return target_fn__15370;
} else
{return cljs.core.deref.call(null,this__15363.method_table).call(null,this__15363.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15371 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15371.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15371.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15371.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15371.method_cache,this__15371.method_table,this__15371.cached_hierarchy,this__15371.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15372 = this;
return cljs.core.deref.call(null,this__15372.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15374 = this;
return cljs.core.deref.call(null,this__15374.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15376 = this;
return cljs.core.do_dispatch.call(null,mf,this__15376.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15392__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15392 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15392__delegate.call(this, _, args);
};
G__15392.cljs$lang$maxFixedArity = 1;
G__15392.cljs$lang$applyTo = (function (arglist__15394){
var _ = cljs.core.first(arglist__15394);
var args = cljs.core.rest(arglist__15394);
return G__15392__delegate.call(this, _, args);
});
return G__15392;
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
