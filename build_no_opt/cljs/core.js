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
var or__3548__auto____2455 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2455))
{return or__3548__auto____2455;
} else
{var or__3548__auto____2456 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2456))
{return or__3548__auto____2456;
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
return array[i];
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
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2457 = coll;

if(cljs.core.truth_(and__3546__auto____2457))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2457;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2458 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2458))
{return or__3548__auto____2458;
} else
{var or__3548__auto____2459 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2460 = coll;

if(cljs.core.truth_(and__3546__auto____2460))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2460;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2461 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2461))
{return or__3548__auto____2461;
} else
{var or__3548__auto____2462 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2463 = coll;

if(cljs.core.truth_(and__3546__auto____2463))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2463;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2464 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2464))
{return or__3548__auto____2464;
} else
{var or__3548__auto____2465 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2465))
{return or__3548__auto____2465;
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
var _nth__2472 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2466 = coll;

if(cljs.core.truth_(and__3546__auto____2466))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2466;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2467 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2467))
{return or__3548__auto____2467;
} else
{var or__3548__auto____2468 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2468))
{return or__3548__auto____2468;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2473 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2469 = coll;

if(cljs.core.truth_(and__3546__auto____2469))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2469;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2470 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2470))
{return or__3548__auto____2470;
} else
{var or__3548__auto____2471 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2471))
{return or__3548__auto____2471;
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
return _nth__2472.call(this,coll,n);
case  3 :
return _nth__2473.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2475 = coll;

if(cljs.core.truth_(and__3546__auto____2475))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2475;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2476 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2476))
{return or__3548__auto____2476;
} else
{var or__3548__auto____2477 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2477))
{return or__3548__auto____2477;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2478 = coll;

if(cljs.core.truth_(and__3546__auto____2478))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2478;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2479 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2479))
{return or__3548__auto____2479;
} else
{var or__3548__auto____2480 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2480))
{return or__3548__auto____2480;
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
var _lookup__2487 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2481 = o;

if(cljs.core.truth_(and__3546__auto____2481))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2481;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2482 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2482))
{return or__3548__auto____2482;
} else
{var or__3548__auto____2483 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2483))
{return or__3548__auto____2483;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2488 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2484 = o;

if(cljs.core.truth_(and__3546__auto____2484))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2484;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2485 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2485))
{return or__3548__auto____2485;
} else
{var or__3548__auto____2486 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2486))
{return or__3548__auto____2486;
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
return _lookup__2487.call(this,o,k);
case  3 :
return _lookup__2488.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2490 = coll;

if(cljs.core.truth_(and__3546__auto____2490))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2490;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2491 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2491))
{return or__3548__auto____2491;
} else
{var or__3548__auto____2492 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2492))
{return or__3548__auto____2492;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2493 = coll;

if(cljs.core.truth_(and__3546__auto____2493))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2493;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2494 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2494))
{return or__3548__auto____2494;
} else
{var or__3548__auto____2495 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2495))
{return or__3548__auto____2495;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2496 = coll;

if(cljs.core.truth_(and__3546__auto____2496))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2496;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2497 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2497))
{return or__3548__auto____2497;
} else
{var or__3548__auto____2498 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2498))
{return or__3548__auto____2498;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2499 = coll;

if(cljs.core.truth_(and__3546__auto____2499))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2499;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2500 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2500))
{return or__3548__auto____2500;
} else
{var or__3548__auto____2501 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2501))
{return or__3548__auto____2501;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2502 = coll;

if(cljs.core.truth_(and__3546__auto____2502))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2502;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2503 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2503))
{return or__3548__auto____2503;
} else
{var or__3548__auto____2504 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2504))
{return or__3548__auto____2504;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2505 = coll;

if(cljs.core.truth_(and__3546__auto____2505))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2505;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2506 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2506))
{return or__3548__auto____2506;
} else
{var or__3548__auto____2507 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2507))
{return or__3548__auto____2507;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2508 = coll;

if(cljs.core.truth_(and__3546__auto____2508))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2508;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2509 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2509))
{return or__3548__auto____2509;
} else
{var or__3548__auto____2510 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2510))
{return or__3548__auto____2510;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2511 = o;

if(cljs.core.truth_(and__3546__auto____2511))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2511;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2512 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2512))
{return or__3548__auto____2512;
} else
{var or__3548__auto____2513 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2513))
{return or__3548__auto____2513;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2514 = o;

if(cljs.core.truth_(and__3546__auto____2514))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2514;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2515 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2515))
{return or__3548__auto____2515;
} else
{var or__3548__auto____2516 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2516))
{return or__3548__auto____2516;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2517 = o;

if(cljs.core.truth_(and__3546__auto____2517))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2517;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2518 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2518))
{return or__3548__auto____2518;
} else
{var or__3548__auto____2519 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2519))
{return or__3548__auto____2519;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2520 = o;

if(cljs.core.truth_(and__3546__auto____2520))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2520;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2521 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2521))
{return or__3548__auto____2521;
} else
{var or__3548__auto____2522 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2522))
{return or__3548__auto____2522;
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
var _reduce__2529 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2523 = coll;

if(cljs.core.truth_(and__3546__auto____2523))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2523;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2524 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2524))
{return or__3548__auto____2524;
} else
{var or__3548__auto____2525 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2525))
{return or__3548__auto____2525;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2530 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2526 = coll;

if(cljs.core.truth_(and__3546__auto____2526))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2526;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2527 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2527))
{return or__3548__auto____2527;
} else
{var or__3548__auto____2528 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2528))
{return or__3548__auto____2528;
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
return _reduce__2529.call(this,coll,f);
case  3 :
return _reduce__2530.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2532 = o;

if(cljs.core.truth_(and__3546__auto____2532))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2532;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2533 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2533))
{return or__3548__auto____2533;
} else
{var or__3548__auto____2534 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2534))
{return or__3548__auto____2534;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2535 = o;

if(cljs.core.truth_(and__3546__auto____2535))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2535;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2536 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2536))
{return or__3548__auto____2536;
} else
{var or__3548__auto____2537 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2537))
{return or__3548__auto____2537;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2538 = o;

if(cljs.core.truth_(and__3546__auto____2538))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2538;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2539 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2539))
{return or__3548__auto____2539;
} else
{var or__3548__auto____2540 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2540))
{return or__3548__auto____2540;
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
if(cljs.core.truth_((function (){var and__3546__auto____2541 = o;

if(cljs.core.truth_(and__3546__auto____2541))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2541;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2542 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2542))
{return or__3548__auto____2542;
} else
{var or__3548__auto____2543 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2543))
{return or__3548__auto____2543;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2544 = d;

if(cljs.core.truth_(and__3546__auto____2544))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2544;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2545 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2545))
{return or__3548__auto____2545;
} else
{var or__3548__auto____2546 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2546))
{return or__3548__auto____2546;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2547 = this$;

if(cljs.core.truth_(and__3546__auto____2547))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2547;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2548 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2548))
{return or__3548__auto____2548;
} else
{var or__3548__auto____2549 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2549))
{return or__3548__auto____2549;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2550 = this$;

if(cljs.core.truth_(and__3546__auto____2550))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2550;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2551 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2551))
{return or__3548__auto____2551;
} else
{var or__3548__auto____2552 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2552))
{return or__3548__auto____2552;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2553 = this$;

if(cljs.core.truth_(and__3546__auto____2553))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2553;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2554 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2554))
{return or__3548__auto____2554;
} else
{var or__3548__auto____2555 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2555))
{return or__3548__auto____2555;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2556 = null;
var G__2556__2557 = (function (o,k){
return null;
});
var G__2556__2558 = (function (o,k,not_found){
return not_found;
});
G__2556 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2556__2557.call(this,o,k);
case  3 :
return G__2556__2558.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2556;
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
var G__2560 = null;
var G__2560__2561 = (function (_,f){
return f.call(null);
});
var G__2560__2562 = (function (_,f,start){
return start;
});
G__2560 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2560__2561.call(this,_,f);
case  3 :
return G__2560__2562.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2560;
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
var G__2564 = null;
var G__2564__2565 = (function (_,n){
return null;
});
var G__2564__2566 = (function (_,n,not_found){
return not_found;
});
G__2564 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2564__2565.call(this,_,n);
case  3 :
return G__2564__2566.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2564;
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
var ci_reduce__2574 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2568 = cljs.core._nth.call(null,cicoll,0);
var n__2569 = 1;

while(true){
if(cljs.core.truth_((n__2569 < cljs.core._count.call(null,cicoll))))
{{
var G__2578 = f.call(null,val__2568,cljs.core._nth.call(null,cicoll,n__2569));
var G__2579 = (n__2569 + 1);
val__2568 = G__2578;
n__2569 = G__2579;
continue;
}
} else
{return val__2568;
}
break;
}
}
});
var ci_reduce__2575 = (function (cicoll,f,val){
var val__2570 = val;
var n__2571 = 0;

while(true){
if(cljs.core.truth_((n__2571 < cljs.core._count.call(null,cicoll))))
{{
var G__2580 = f.call(null,val__2570,cljs.core._nth.call(null,cicoll,n__2571));
var G__2581 = (n__2571 + 1);
val__2570 = G__2580;
n__2571 = G__2581;
continue;
}
} else
{return val__2570;
}
break;
}
});
var ci_reduce__2576 = (function (cicoll,f,val,idx){
var val__2572 = val;
var n__2573 = idx;

while(true){
if(cljs.core.truth_((n__2573 < cljs.core._count.call(null,cicoll))))
{{
var G__2582 = f.call(null,val__2572,cljs.core._nth.call(null,cicoll,n__2573));
var G__2583 = (n__2573 + 1);
val__2572 = G__2582;
n__2573 = G__2583;
continue;
}
} else
{return val__2572;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2574.call(this,cicoll,f);
case  3 :
return ci_reduce__2575.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2576.call(this,cicoll,f,val,idx);
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
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2584 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2597 = null;
var G__2597__2598 = (function (coll,f){
var this__2585 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2585.a[this__2585.i]),(this__2585.i + 1));
});
var G__2597__2599 = (function (coll,f,start){
var this__2586 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2586.i);
});
G__2597 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2597__2598.call(this,coll,f);
case  3 :
return G__2597__2599.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2597;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2587 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2588 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2601 = null;
var G__2601__2602 = (function (coll,n){
var this__2589 = this;
var i__2590 = (n + this__2589.i);

if(cljs.core.truth_((i__2590 < this__2589.a.length)))
{return (this__2589.a[i__2590]);
} else
{return null;
}
});
var G__2601__2603 = (function (coll,n,not_found){
var this__2591 = this;
var i__2592 = (n + this__2591.i);

if(cljs.core.truth_((i__2592 < this__2591.a.length)))
{return (this__2591.a[i__2592]);
} else
{return not_found;
}
});
G__2601 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2601__2602.call(this,coll,n);
case  3 :
return G__2601__2603.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2601;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2593 = this;
return (this__2593.a.length - this__2593.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2594 = this;
return (this__2594.a[this__2594.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2595 = this;
if(cljs.core.truth_(((this__2595.i + 1) < this__2595.a.length)))
{return (new cljs.core.IndexedSeq(this__2595.a,(this__2595.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2596 = this;
return this$;
});
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
var G__2605 = null;
var G__2605__2606 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2605__2607 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2605 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2605__2606.call(this,array,f);
case  3 :
return G__2605__2607.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2605;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2609 = null;
var G__2609__2610 = (function (array,k){
return (array[k]);
});
var G__2609__2611 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2609 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2609__2610.call(this,array,k);
case  3 :
return G__2609__2611.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2609;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2613 = null;
var G__2613__2614 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2613__2615 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2613 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2613__2614.call(this,array,n);
case  3 :
return G__2613__2615.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2613;
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
var temp__3698__auto____2617 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2617))
{var s__2618 = temp__3698__auto____2617;

return cljs.core._first.call(null,s__2618);
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
var G__2619 = cljs.core.next.call(null,s);
s = G__2619;
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
var s__2620 = cljs.core.seq.call(null,x);
var n__2621 = 0;

while(true){
if(cljs.core.truth_(s__2620))
{{
var G__2622 = cljs.core.next.call(null,s__2620);
var G__2623 = (n__2621 + 1);
s__2620 = G__2622;
n__2621 = G__2623;
continue;
}
} else
{return n__2621;
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
var conj__2624 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2625 = (function() { 
var G__2627__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2628 = conj.call(null,coll,x);
var G__2629 = cljs.core.first.call(null,xs);
var G__2630 = cljs.core.next.call(null,xs);
coll = G__2628;
x = G__2629;
xs = G__2630;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2627 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2627__delegate.call(this, coll, x, xs);
};
G__2627.cljs$lang$maxFixedArity = 2;
G__2627.cljs$lang$applyTo = (function (arglist__2631){
var coll = cljs.core.first(arglist__2631);
var x = cljs.core.first(cljs.core.next(arglist__2631));
var xs = cljs.core.rest(cljs.core.next(arglist__2631));
return G__2627__delegate.call(this, coll, x, xs);
});
return G__2627;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2624.call(this,coll,x);
default:
return conj__2625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2625.cljs$lang$applyTo;
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
var nth__2632 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2633 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2632.call(this,coll,n);
case  3 :
return nth__2633.call(this,coll,n,not_found);
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
var get__2635 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2636 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2635.call(this,o,k);
case  3 :
return get__2636.call(this,o,k,not_found);
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
var assoc__2639 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2640 = (function() { 
var G__2642__delegate = function (coll,k,v,kvs){
while(true){
var ret__2638 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2643 = ret__2638;
var G__2644 = cljs.core.first.call(null,kvs);
var G__2645 = cljs.core.second.call(null,kvs);
var G__2646 = cljs.core.nnext.call(null,kvs);
coll = G__2643;
k = G__2644;
v = G__2645;
kvs = G__2646;
continue;
}
} else
{return ret__2638;
}
break;
}
};
var G__2642 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2642__delegate.call(this, coll, k, v, kvs);
};
G__2642.cljs$lang$maxFixedArity = 3;
G__2642.cljs$lang$applyTo = (function (arglist__2647){
var coll = cljs.core.first(arglist__2647);
var k = cljs.core.first(cljs.core.next(arglist__2647));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2647)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2647)));
return G__2642__delegate.call(this, coll, k, v, kvs);
});
return G__2642;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2639.call(this,coll,k,v);
default:
return assoc__2640.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2640.cljs$lang$applyTo;
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
var dissoc__2649 = (function (coll){
return coll;
});
var dissoc__2650 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2651 = (function() { 
var G__2653__delegate = function (coll,k,ks){
while(true){
var ret__2648 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2654 = ret__2648;
var G__2655 = cljs.core.first.call(null,ks);
var G__2656 = cljs.core.next.call(null,ks);
coll = G__2654;
k = G__2655;
ks = G__2656;
continue;
}
} else
{return ret__2648;
}
break;
}
};
var G__2653 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2653__delegate.call(this, coll, k, ks);
};
G__2653.cljs$lang$maxFixedArity = 2;
G__2653.cljs$lang$applyTo = (function (arglist__2657){
var coll = cljs.core.first(arglist__2657);
var k = cljs.core.first(cljs.core.next(arglist__2657));
var ks = cljs.core.rest(cljs.core.next(arglist__2657));
return G__2653__delegate.call(this, coll, k, ks);
});
return G__2653;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2649.call(this,coll);
case  2 :
return dissoc__2650.call(this,coll,k);
default:
return dissoc__2651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2651.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__319__auto____2658 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2659 = x__319__auto____2658;

if(cljs.core.truth_(and__3546__auto____2659))
{var and__3546__auto____2660 = x__319__auto____2658.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2660))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2658));
} else
{return and__3546__auto____2660;
}
} else
{return and__3546__auto____2659;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____2658);
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
var disj__2662 = (function (coll){
return coll;
});
var disj__2663 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2664 = (function() { 
var G__2666__delegate = function (coll,k,ks){
while(true){
var ret__2661 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2667 = ret__2661;
var G__2668 = cljs.core.first.call(null,ks);
var G__2669 = cljs.core.next.call(null,ks);
coll = G__2667;
k = G__2668;
ks = G__2669;
continue;
}
} else
{return ret__2661;
}
break;
}
};
var G__2666 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2666__delegate.call(this, coll, k, ks);
};
G__2666.cljs$lang$maxFixedArity = 2;
G__2666.cljs$lang$applyTo = (function (arglist__2670){
var coll = cljs.core.first(arglist__2670);
var k = cljs.core.first(cljs.core.next(arglist__2670));
var ks = cljs.core.rest(cljs.core.next(arglist__2670));
return G__2666__delegate.call(this, coll, k, ks);
});
return G__2666;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2662.call(this,coll);
case  2 :
return disj__2663.call(this,coll,k);
default:
return disj__2664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2664.cljs$lang$applyTo;
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
{var x__319__auto____2671 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2672 = x__319__auto____2671;

if(cljs.core.truth_(and__3546__auto____2672))
{var and__3546__auto____2673 = x__319__auto____2671.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2673))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2671));
} else
{return and__3546__auto____2673;
}
} else
{return and__3546__auto____2672;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__319__auto____2671);
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
{var x__319__auto____2674 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2675 = x__319__auto____2674;

if(cljs.core.truth_(and__3546__auto____2675))
{var and__3546__auto____2676 = x__319__auto____2674.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2676))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2674));
} else
{return and__3546__auto____2676;
}
} else
{return and__3546__auto____2675;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__319__auto____2674);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__319__auto____2677 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2678 = x__319__auto____2677;

if(cljs.core.truth_(and__3546__auto____2678))
{var and__3546__auto____2679 = x__319__auto____2677.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2679))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2677));
} else
{return and__3546__auto____2679;
}
} else
{return and__3546__auto____2678;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__319__auto____2677);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__319__auto____2680 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2681 = x__319__auto____2680;

if(cljs.core.truth_(and__3546__auto____2681))
{var and__3546__auto____2682 = x__319__auto____2680.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2682))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2680));
} else
{return and__3546__auto____2682;
}
} else
{return and__3546__auto____2681;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__319__auto____2680);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__319__auto____2683 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2684 = x__319__auto____2683;

if(cljs.core.truth_(and__3546__auto____2684))
{var and__3546__auto____2685 = x__319__auto____2683.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2685))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2683));
} else
{return and__3546__auto____2685;
}
} else
{return and__3546__auto____2684;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__319__auto____2683);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2686 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2687 = x__319__auto____2686;

if(cljs.core.truth_(and__3546__auto____2687))
{var and__3546__auto____2688 = x__319__auto____2686.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2688))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2686));
} else
{return and__3546__auto____2688;
}
} else
{return and__3546__auto____2687;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__319__auto____2686);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__319__auto____2689 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2690 = x__319__auto____2689;

if(cljs.core.truth_(and__3546__auto____2690))
{var and__3546__auto____2691 = x__319__auto____2689.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2691))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2689));
} else
{return and__3546__auto____2691;
}
} else
{return and__3546__auto____2690;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__319__auto____2689);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2692 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2692.push(key);
}));
return keys__2692;
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
{var x__319__auto____2693 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2694 = x__319__auto____2693;

if(cljs.core.truth_(and__3546__auto____2694))
{var and__3546__auto____2695 = x__319__auto____2693.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2695))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2693));
} else
{return and__3546__auto____2695;
}
} else
{return and__3546__auto____2694;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__319__auto____2693);
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
var and__3546__auto____2696 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2696))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2697 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2697))
{return or__3548__auto____2697;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2696;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2698 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2698))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2698;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2699 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2699))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2699;
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
var and__3546__auto____2700 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2700))
{return (n == n.toFixed());
} else
{return and__3546__auto____2700;
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
if(cljs.core.truth_((function (){var and__3546__auto____2701 = coll;

if(cljs.core.truth_(and__3546__auto____2701))
{var and__3546__auto____2702 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2702))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2702;
}
} else
{return and__3546__auto____2701;
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
var distinct_QMARK___2707 = (function (x){
return true;
});
var distinct_QMARK___2708 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2709 = (function() { 
var G__2711__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2703 = cljs.core.set([y,x]);
var xs__2704 = more;

while(true){
var x__2705 = cljs.core.first.call(null,xs__2704);
var etc__2706 = cljs.core.next.call(null,xs__2704);

if(cljs.core.truth_(xs__2704))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2703,x__2705)))
{return false;
} else
{{
var G__2712 = cljs.core.conj.call(null,s__2703,x__2705);
var G__2713 = etc__2706;
s__2703 = G__2712;
xs__2704 = G__2713;
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
var G__2711 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2711__delegate.call(this, x, y, more);
};
G__2711.cljs$lang$maxFixedArity = 2;
G__2711.cljs$lang$applyTo = (function (arglist__2714){
var x = cljs.core.first(arglist__2714);
var y = cljs.core.first(cljs.core.next(arglist__2714));
var more = cljs.core.rest(cljs.core.next(arglist__2714));
return G__2711__delegate.call(this, x, y, more);
});
return G__2711;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2707.call(this,x);
case  2 :
return distinct_QMARK___2708.call(this,x,y);
default:
return distinct_QMARK___2709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2709.cljs$lang$applyTo;
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
var r__2715 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2715)))
{return r__2715;
} else
{if(cljs.core.truth_(r__2715))
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
var sort__2717 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2718 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2716 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2716,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2716);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2717.call(this,comp);
case  2 :
return sort__2718.call(this,comp,coll);
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
var sort_by__2720 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2721 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2720.call(this,keyfn,comp);
case  3 :
return sort_by__2721.call(this,keyfn,comp,coll);
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
var reduce__2723 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2724 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2723.call(this,f,val);
case  3 :
return reduce__2724.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2730 = (function (f,coll){
var temp__3695__auto____2726 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2726))
{var s__2727 = temp__3695__auto____2726;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2727),cljs.core.next.call(null,s__2727));
} else
{return f.call(null);
}
});
var seq_reduce__2731 = (function (f,val,coll){
var val__2728 = val;
var coll__2729 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2729))
{{
var G__2733 = f.call(null,val__2728,cljs.core.first.call(null,coll__2729));
var G__2734 = cljs.core.next.call(null,coll__2729);
val__2728 = G__2733;
coll__2729 = G__2734;
continue;
}
} else
{return val__2728;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2730.call(this,f,val);
case  3 :
return seq_reduce__2731.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2735 = null;
var G__2735__2736 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2735__2737 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2735 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2735__2736.call(this,coll,f);
case  3 :
return G__2735__2737.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2735;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2739 = (function (){
return 0;
});
var _PLUS___2740 = (function (x){
return x;
});
var _PLUS___2741 = (function (x,y){
return (x + y);
});
var _PLUS___2742 = (function() { 
var G__2744__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2744 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2744__delegate.call(this, x, y, more);
};
G__2744.cljs$lang$maxFixedArity = 2;
G__2744.cljs$lang$applyTo = (function (arglist__2745){
var x = cljs.core.first(arglist__2745);
var y = cljs.core.first(cljs.core.next(arglist__2745));
var more = cljs.core.rest(cljs.core.next(arglist__2745));
return G__2744__delegate.call(this, x, y, more);
});
return G__2744;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2739.call(this);
case  1 :
return _PLUS___2740.call(this,x);
case  2 :
return _PLUS___2741.call(this,x,y);
default:
return _PLUS___2742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2742.cljs$lang$applyTo;
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
var ___2746 = (function (x){
return (- x);
});
var ___2747 = (function (x,y){
return (x - y);
});
var ___2748 = (function() { 
var G__2750__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2750 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2750__delegate.call(this, x, y, more);
};
G__2750.cljs$lang$maxFixedArity = 2;
G__2750.cljs$lang$applyTo = (function (arglist__2751){
var x = cljs.core.first(arglist__2751);
var y = cljs.core.first(cljs.core.next(arglist__2751));
var more = cljs.core.rest(cljs.core.next(arglist__2751));
return G__2750__delegate.call(this, x, y, more);
});
return G__2750;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2746.call(this,x);
case  2 :
return ___2747.call(this,x,y);
default:
return ___2748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2748.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2752 = (function (){
return 1;
});
var _STAR___2753 = (function (x){
return x;
});
var _STAR___2754 = (function (x,y){
return (x * y);
});
var _STAR___2755 = (function() { 
var G__2757__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2757 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2757__delegate.call(this, x, y, more);
};
G__2757.cljs$lang$maxFixedArity = 2;
G__2757.cljs$lang$applyTo = (function (arglist__2758){
var x = cljs.core.first(arglist__2758);
var y = cljs.core.first(cljs.core.next(arglist__2758));
var more = cljs.core.rest(cljs.core.next(arglist__2758));
return G__2757__delegate.call(this, x, y, more);
});
return G__2757;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2752.call(this);
case  1 :
return _STAR___2753.call(this,x);
case  2 :
return _STAR___2754.call(this,x,y);
default:
return _STAR___2755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2755.cljs$lang$applyTo;
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
var _SLASH___2759 = (function (x){
return (1 / x);
});
var _SLASH___2760 = (function (x,y){
return (x / y);
});
var _SLASH___2761 = (function() { 
var G__2763__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2763 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2763__delegate.call(this, x, y, more);
};
G__2763.cljs$lang$maxFixedArity = 2;
G__2763.cljs$lang$applyTo = (function (arglist__2764){
var x = cljs.core.first(arglist__2764);
var y = cljs.core.first(cljs.core.next(arglist__2764));
var more = cljs.core.rest(cljs.core.next(arglist__2764));
return G__2763__delegate.call(this, x, y, more);
});
return G__2763;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2759.call(this,x);
case  2 :
return _SLASH___2760.call(this,x,y);
default:
return _SLASH___2761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2761.cljs$lang$applyTo;
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
var _LT___2765 = (function (x){
return true;
});
var _LT___2766 = (function (x,y){
return (x < y);
});
var _LT___2767 = (function() { 
var G__2769__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2770 = y;
var G__2771 = cljs.core.first.call(null,more);
var G__2772 = cljs.core.next.call(null,more);
x = G__2770;
y = G__2771;
more = G__2772;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2769 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2769__delegate.call(this, x, y, more);
};
G__2769.cljs$lang$maxFixedArity = 2;
G__2769.cljs$lang$applyTo = (function (arglist__2773){
var x = cljs.core.first(arglist__2773);
var y = cljs.core.first(cljs.core.next(arglist__2773));
var more = cljs.core.rest(cljs.core.next(arglist__2773));
return G__2769__delegate.call(this, x, y, more);
});
return G__2769;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2765.call(this,x);
case  2 :
return _LT___2766.call(this,x,y);
default:
return _LT___2767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2767.cljs$lang$applyTo;
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
var _LT__EQ___2774 = (function (x){
return true;
});
var _LT__EQ___2775 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2776 = (function() { 
var G__2778__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2779 = y;
var G__2780 = cljs.core.first.call(null,more);
var G__2781 = cljs.core.next.call(null,more);
x = G__2779;
y = G__2780;
more = G__2781;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2778 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2778__delegate.call(this, x, y, more);
};
G__2778.cljs$lang$maxFixedArity = 2;
G__2778.cljs$lang$applyTo = (function (arglist__2782){
var x = cljs.core.first(arglist__2782);
var y = cljs.core.first(cljs.core.next(arglist__2782));
var more = cljs.core.rest(cljs.core.next(arglist__2782));
return G__2778__delegate.call(this, x, y, more);
});
return G__2778;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2774.call(this,x);
case  2 :
return _LT__EQ___2775.call(this,x,y);
default:
return _LT__EQ___2776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2776.cljs$lang$applyTo;
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
var _GT___2783 = (function (x){
return true;
});
var _GT___2784 = (function (x,y){
return (x > y);
});
var _GT___2785 = (function() { 
var G__2787__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2788 = y;
var G__2789 = cljs.core.first.call(null,more);
var G__2790 = cljs.core.next.call(null,more);
x = G__2788;
y = G__2789;
more = G__2790;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2787 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2787__delegate.call(this, x, y, more);
};
G__2787.cljs$lang$maxFixedArity = 2;
G__2787.cljs$lang$applyTo = (function (arglist__2791){
var x = cljs.core.first(arglist__2791);
var y = cljs.core.first(cljs.core.next(arglist__2791));
var more = cljs.core.rest(cljs.core.next(arglist__2791));
return G__2787__delegate.call(this, x, y, more);
});
return G__2787;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2783.call(this,x);
case  2 :
return _GT___2784.call(this,x,y);
default:
return _GT___2785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2785.cljs$lang$applyTo;
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
var _GT__EQ___2792 = (function (x){
return true;
});
var _GT__EQ___2793 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2794 = (function() { 
var G__2796__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2797 = y;
var G__2798 = cljs.core.first.call(null,more);
var G__2799 = cljs.core.next.call(null,more);
x = G__2797;
y = G__2798;
more = G__2799;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2796 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2796__delegate.call(this, x, y, more);
};
G__2796.cljs$lang$maxFixedArity = 2;
G__2796.cljs$lang$applyTo = (function (arglist__2800){
var x = cljs.core.first(arglist__2800);
var y = cljs.core.first(cljs.core.next(arglist__2800));
var more = cljs.core.rest(cljs.core.next(arglist__2800));
return G__2796__delegate.call(this, x, y, more);
});
return G__2796;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2792.call(this,x);
case  2 :
return _GT__EQ___2793.call(this,x,y);
default:
return _GT__EQ___2794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2794.cljs$lang$applyTo;
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
var max__2801 = (function (x){
return x;
});
var max__2802 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2803 = (function() { 
var G__2805__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2805 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2805__delegate.call(this, x, y, more);
};
G__2805.cljs$lang$maxFixedArity = 2;
G__2805.cljs$lang$applyTo = (function (arglist__2806){
var x = cljs.core.first(arglist__2806);
var y = cljs.core.first(cljs.core.next(arglist__2806));
var more = cljs.core.rest(cljs.core.next(arglist__2806));
return G__2805__delegate.call(this, x, y, more);
});
return G__2805;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2801.call(this,x);
case  2 :
return max__2802.call(this,x,y);
default:
return max__2803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2803.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2807 = (function (x){
return x;
});
var min__2808 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2809 = (function() { 
var G__2811__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2811 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2811__delegate.call(this, x, y, more);
};
G__2811.cljs$lang$maxFixedArity = 2;
G__2811.cljs$lang$applyTo = (function (arglist__2812){
var x = cljs.core.first(arglist__2812);
var y = cljs.core.first(cljs.core.next(arglist__2812));
var more = cljs.core.rest(cljs.core.next(arglist__2812));
return G__2811__delegate.call(this, x, y, more);
});
return G__2811;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2807.call(this,x);
case  2 :
return min__2808.call(this,x,y);
default:
return min__2809.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2809.cljs$lang$applyTo;
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
var rem__2813 = (n % d);

return cljs.core.fix.call(null,((n - rem__2813) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2814 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2814));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2815 = (function (){
return Math.random.call(null);
});
var rand__2816 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2815.call(this);
case  1 :
return rand__2816.call(this,n);
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
return (~x);
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
var _EQ__EQ___2818 = (function (x){
return true;
});
var _EQ__EQ___2819 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2820 = (function() { 
var G__2822__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2823 = y;
var G__2824 = cljs.core.first.call(null,more);
var G__2825 = cljs.core.next.call(null,more);
x = G__2823;
y = G__2824;
more = G__2825;
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
var G__2822 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2822__delegate.call(this, x, y, more);
};
G__2822.cljs$lang$maxFixedArity = 2;
G__2822.cljs$lang$applyTo = (function (arglist__2826){
var x = cljs.core.first(arglist__2826);
var y = cljs.core.first(cljs.core.next(arglist__2826));
var more = cljs.core.rest(cljs.core.next(arglist__2826));
return G__2822__delegate.call(this, x, y, more);
});
return G__2822;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2818.call(this,x);
case  2 :
return _EQ__EQ___2819.call(this,x,y);
default:
return _EQ__EQ___2820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2820.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (0 < n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (0 === n);
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
var n__2827 = n;
var xs__2828 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2829 = xs__2828;

if(cljs.core.truth_(and__3546__auto____2829))
{return (n__2827 > 0);
} else
{return and__3546__auto____2829;
}
})()))
{{
var G__2830 = (n__2827 - 1);
var G__2831 = cljs.core.next.call(null,xs__2828);
n__2827 = G__2830;
xs__2828 = G__2831;
continue;
}
} else
{return xs__2828;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2836 = null;
var G__2836__2837 = (function (coll,n){
var temp__3695__auto____2832 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2832))
{var xs__2833 = temp__3695__auto____2832;

return cljs.core.first.call(null,xs__2833);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2836__2838 = (function (coll,n,not_found){
var temp__3695__auto____2834 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2834))
{var xs__2835 = temp__3695__auto____2834;

return cljs.core.first.call(null,xs__2835);
} else
{return not_found;
}
});
G__2836 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2836__2837.call(this,coll,n);
case  3 :
return G__2836__2838.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2836;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2840 = (function (){
return "";
});
var str_STAR___2841 = (function (x){
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
var str_STAR___2842 = (function() { 
var G__2844__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2845 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2846 = cljs.core.next.call(null,more);
sb = G__2845;
more = G__2846;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2844 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2844__delegate.call(this, x, ys);
};
G__2844.cljs$lang$maxFixedArity = 1;
G__2844.cljs$lang$applyTo = (function (arglist__2847){
var x = cljs.core.first(arglist__2847);
var ys = cljs.core.rest(arglist__2847);
return G__2844__delegate.call(this, x, ys);
});
return G__2844;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2840.call(this);
case  1 :
return str_STAR___2841.call(this,x);
default:
return str_STAR___2842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2842.cljs$lang$applyTo;
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
var str__2848 = (function (){
return "";
});
var str__2849 = (function (x){
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
var str__2850 = (function() { 
var G__2852__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2852 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2852__delegate.call(this, x, ys);
};
G__2852.cljs$lang$maxFixedArity = 1;
G__2852.cljs$lang$applyTo = (function (arglist__2853){
var x = cljs.core.first(arglist__2853);
var ys = cljs.core.rest(arglist__2853);
return G__2852__delegate.call(this, x, ys);
});
return G__2852;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2848.call(this);
case  1 :
return str__2849.call(this,x);
default:
return str__2850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2850.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2854 = (function (s,start){
return s.substring(start);
});
var subs__2855 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2854.call(this,s,start);
case  3 :
return subs__2855.call(this,s,start,end);
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
var symbol__2857 = (function (name){
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
var symbol__2858 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2857.call(this,ns);
case  2 :
return symbol__2858.call(this,ns,name);
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
var keyword__2860 = (function (name){
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
var keyword__2861 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2860.call(this,ns);
case  2 :
return keyword__2861.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2863 = cljs.core.seq.call(null,x);
var ys__2864 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2863)))
{return cljs.core.nil_QMARK_.call(null,ys__2864);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2864)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2863),cljs.core.first.call(null,ys__2864))))
{{
var G__2865 = cljs.core.next.call(null,xs__2863);
var G__2866 = cljs.core.next.call(null,ys__2864);
xs__2863 = G__2865;
ys__2864 = G__2866;
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
return cljs.core.reduce.call(null,(function (p1__2867_SHARP_,p2__2868_SHARP_){
return cljs.core.hash_combine.call(null,p1__2867_SHARP_,cljs.core.hash.call(null,p2__2868_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2869__2870 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2869__2870))
{var G__2872__2874 = cljs.core.first.call(null,G__2869__2870);
var vec__2873__2875 = G__2872__2874;
var key_name__2876 = cljs.core.nth.call(null,vec__2873__2875,0,null);
var f__2877 = cljs.core.nth.call(null,vec__2873__2875,1,null);
var G__2869__2878 = G__2869__2870;

var G__2872__2879 = G__2872__2874;
var G__2869__2880 = G__2869__2878;

while(true){
var vec__2881__2882 = G__2872__2879;
var key_name__2883 = cljs.core.nth.call(null,vec__2881__2882,0,null);
var f__2884 = cljs.core.nth.call(null,vec__2881__2882,1,null);
var G__2869__2885 = G__2869__2880;

var str_name__2886 = cljs.core.name.call(null,key_name__2883);

obj[str_name__2886] = f__2884;
var temp__3698__auto____2887 = cljs.core.next.call(null,G__2869__2885);

if(cljs.core.truth_(temp__3698__auto____2887))
{var G__2869__2888 = temp__3698__auto____2887;

{
var G__2889 = cljs.core.first.call(null,G__2869__2888);
var G__2890 = G__2869__2888;
G__2872__2879 = G__2889;
G__2869__2880 = G__2890;
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
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2891 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2892 = this;
return (new cljs.core.List(this__2892.meta,o,coll,(this__2892.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2893 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2894 = this;
return this__2894.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2895 = this;
return this__2895.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2896 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2897 = this;
return this__2897.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2898 = this;
return this__2898.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2899 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2900 = this;
return (new cljs.core.List(meta,this__2900.first,this__2900.rest,this__2900.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2901 = this;
return this__2901.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2902 = this;
return cljs.core.List.EMPTY;
});

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2903 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2904 = this;
return (new cljs.core.List(this__2904.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2905 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2906 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2907 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2908 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2909 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2910 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2911 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2912 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2913 = this;
return this__2913.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2914 = this;
return coll;
});
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
list.cljs$lang$applyTo = (function (arglist__2915){
var items = cljs.core.seq( arglist__2915 );;
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
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2916 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2917 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2918 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2919 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2919.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2920 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2921 = this;
return this__2921.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2922 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2922.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2922.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2923 = this;
return this__2923.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2924 = this;
return (new cljs.core.Cons(meta,this__2924.first,this__2924.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2925 = null;
var G__2925__2926 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2925__2927 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2925 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2925__2926.call(this,string,f);
case  3 :
return G__2925__2927.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2925;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2929 = null;
var G__2929__2930 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2929__2931 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2929 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2929__2930.call(this,string,k);
case  3 :
return G__2929__2931.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2929;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2933 = null;
var G__2933__2934 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2933__2935 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2933 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2933__2934.call(this,string,n);
case  3 :
return G__2933__2935.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2933;
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
String['prototype']['call'] = (function() {
var G__2937 = null;
var G__2937__2938 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2937__2939 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2937 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2937__2938.call(this,_,coll);
case  3 :
return G__2937__2939.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2937;
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
var x__2941 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2941;
} else
{lazy_seq.x = x__2941.call(null);
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
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2942 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2943 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2944 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2945 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2945.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2946 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2947 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2948 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2949 = this;
return this__2949.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2950 = this;
return (new cljs.core.LazySeq(meta,this__2950.realized,this__2950.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2951 = cljs.core.array.call(null);

var s__2952 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2952)))
{ary__2951.push(cljs.core.first.call(null,s__2952));
{
var G__2953 = cljs.core.next.call(null,s__2952);
s__2952 = G__2953;
continue;
}
} else
{return ary__2951;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2954 = s;
var i__2955 = n;
var sum__2956 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2957 = (i__2955 > 0);

if(cljs.core.truth_(and__3546__auto____2957))
{return cljs.core.seq.call(null,s__2954);
} else
{return and__3546__auto____2957;
}
})()))
{{
var G__2958 = cljs.core.next.call(null,s__2954);
var G__2959 = (i__2955 - 1);
var G__2960 = (sum__2956 + 1);
s__2954 = G__2958;
i__2955 = G__2959;
sum__2956 = G__2960;
continue;
}
} else
{return sum__2956;
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
var concat__2964 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2965 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2966 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2961 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2961))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2961),concat.call(null,cljs.core.rest.call(null,s__2961),y));
} else
{return y;
}
})));
});
var concat__2967 = (function() { 
var G__2969__delegate = function (x,y,zs){
var cat__2963 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2962 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2962))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2962),cat.call(null,cljs.core.rest.call(null,xys__2962),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2963.call(null,concat.call(null,x,y),zs);
};
var G__2969 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2969__delegate.call(this, x, y, zs);
};
G__2969.cljs$lang$maxFixedArity = 2;
G__2969.cljs$lang$applyTo = (function (arglist__2970){
var x = cljs.core.first(arglist__2970);
var y = cljs.core.first(cljs.core.next(arglist__2970));
var zs = cljs.core.rest(cljs.core.next(arglist__2970));
return G__2969__delegate.call(this, x, y, zs);
});
return G__2969;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2964.call(this);
case  1 :
return concat__2965.call(this,x);
case  2 :
return concat__2966.call(this,x,y);
default:
return concat__2967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2967.cljs$lang$applyTo;
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
var list_STAR___2971 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2972 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2973 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2974 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2975 = (function() { 
var G__2977__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2977 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2977__delegate.call(this, a, b, c, d, more);
};
G__2977.cljs$lang$maxFixedArity = 4;
G__2977.cljs$lang$applyTo = (function (arglist__2978){
var a = cljs.core.first(arglist__2978);
var b = cljs.core.first(cljs.core.next(arglist__2978));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2978)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2978))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2978))));
return G__2977__delegate.call(this, a, b, c, d, more);
});
return G__2977;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2971.call(this,a);
case  2 :
return list_STAR___2972.call(this,a,b);
case  3 :
return list_STAR___2973.call(this,a,b,c);
case  4 :
return list_STAR___2974.call(this,a,b,c,d);
default:
return list_STAR___2975.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2975.cljs$lang$applyTo;
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
var apply__2988 = (function (f,args){
var fixed_arity__2979 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2979 + 1)) <= fixed_arity__2979)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2989 = (function (f,x,args){
var arglist__2980 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2981 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2980,fixed_arity__2981) <= fixed_arity__2981)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2980));
} else
{return f.cljs$lang$applyTo(arglist__2980);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2980));
}
});
var apply__2990 = (function (f,x,y,args){
var arglist__2982 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2983 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2982,fixed_arity__2983) <= fixed_arity__2983)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2982));
} else
{return f.cljs$lang$applyTo(arglist__2982);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2982));
}
});
var apply__2991 = (function (f,x,y,z,args){
var arglist__2984 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2985 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2984,fixed_arity__2985) <= fixed_arity__2985)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2984));
} else
{return f.cljs$lang$applyTo(arglist__2984);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2984));
}
});
var apply__2992 = (function() { 
var G__2994__delegate = function (f,a,b,c,d,args){
var arglist__2986 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2987 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2986,fixed_arity__2987) <= fixed_arity__2987)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2986));
} else
{return f.cljs$lang$applyTo(arglist__2986);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2986));
}
};
var G__2994 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2994__delegate.call(this, f, a, b, c, d, args);
};
G__2994.cljs$lang$maxFixedArity = 5;
G__2994.cljs$lang$applyTo = (function (arglist__2995){
var f = cljs.core.first(arglist__2995);
var a = cljs.core.first(cljs.core.next(arglist__2995));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2995)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2995))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2995)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2995)))));
return G__2994__delegate.call(this, f, a, b, c, d, args);
});
return G__2994;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2988.call(this,f,a);
case  3 :
return apply__2989.call(this,f,a,b);
case  4 :
return apply__2990.call(this,f,a,b,c);
case  5 :
return apply__2991.call(this,f,a,b,c,d);
default:
return apply__2992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2992.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2996){
var obj = cljs.core.first(arglist__2996);
var f = cljs.core.first(cljs.core.next(arglist__2996));
var args = cljs.core.rest(cljs.core.next(arglist__2996));
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
var not_EQ___2997 = (function (x){
return false;
});
var not_EQ___2998 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2999 = (function() { 
var G__3001__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3001 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3001__delegate.call(this, x, y, more);
};
G__3001.cljs$lang$maxFixedArity = 2;
G__3001.cljs$lang$applyTo = (function (arglist__3002){
var x = cljs.core.first(arglist__3002);
var y = cljs.core.first(cljs.core.next(arglist__3002));
var more = cljs.core.rest(cljs.core.next(arglist__3002));
return G__3001__delegate.call(this, x, y, more);
});
return G__3001;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2997.call(this,x);
case  2 :
return not_EQ___2998.call(this,x,y);
default:
return not_EQ___2999.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2999.cljs$lang$applyTo;
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
var G__3003 = pred;
var G__3004 = cljs.core.next.call(null,coll);
pred = G__3003;
coll = G__3004;
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
{var or__3548__auto____3005 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3005))
{return or__3548__auto____3005;
} else
{{
var G__3006 = pred;
var G__3007 = cljs.core.next.call(null,coll);
pred = G__3006;
coll = G__3007;
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
var G__3008 = null;
var G__3008__3009 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3008__3010 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3008__3011 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3008__3012 = (function() { 
var G__3014__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3014 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3014__delegate.call(this, x, y, zs);
};
G__3014.cljs$lang$maxFixedArity = 2;
G__3014.cljs$lang$applyTo = (function (arglist__3015){
var x = cljs.core.first(arglist__3015);
var y = cljs.core.first(cljs.core.next(arglist__3015));
var zs = cljs.core.rest(cljs.core.next(arglist__3015));
return G__3014__delegate.call(this, x, y, zs);
});
return G__3014;
})()
;
G__3008 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3008__3009.call(this);
case  1 :
return G__3008__3010.call(this,x);
case  2 :
return G__3008__3011.call(this,x,y);
default:
return G__3008__3012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3008.cljs$lang$maxFixedArity = 2;
G__3008.cljs$lang$applyTo = G__3008__3012.cljs$lang$applyTo;
return G__3008;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3016__delegate = function (args){
return x;
};
var G__3016 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3016__delegate.call(this, args);
};
G__3016.cljs$lang$maxFixedArity = 0;
G__3016.cljs$lang$applyTo = (function (arglist__3017){
var args = cljs.core.seq( arglist__3017 );;
return G__3016__delegate.call(this, args);
});
return G__3016;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__3021 = (function (){
return cljs.core.identity;
});
var comp__3022 = (function (f){
return f;
});
var comp__3023 = (function (f,g){
return (function() {
var G__3027 = null;
var G__3027__3028 = (function (){
return f.call(null,g.call(null));
});
var G__3027__3029 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3027__3030 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3027__3031 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3027__3032 = (function() { 
var G__3034__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3034 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3034__delegate.call(this, x, y, z, args);
};
G__3034.cljs$lang$maxFixedArity = 3;
G__3034.cljs$lang$applyTo = (function (arglist__3035){
var x = cljs.core.first(arglist__3035);
var y = cljs.core.first(cljs.core.next(arglist__3035));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3035)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3035)));
return G__3034__delegate.call(this, x, y, z, args);
});
return G__3034;
})()
;
G__3027 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3027__3028.call(this);
case  1 :
return G__3027__3029.call(this,x);
case  2 :
return G__3027__3030.call(this,x,y);
case  3 :
return G__3027__3031.call(this,x,y,z);
default:
return G__3027__3032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3027.cljs$lang$maxFixedArity = 3;
G__3027.cljs$lang$applyTo = G__3027__3032.cljs$lang$applyTo;
return G__3027;
})()
});
var comp__3024 = (function (f,g,h){
return (function() {
var G__3036 = null;
var G__3036__3037 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3036__3038 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3036__3039 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3036__3040 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3036__3041 = (function() { 
var G__3043__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3043 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3043__delegate.call(this, x, y, z, args);
};
G__3043.cljs$lang$maxFixedArity = 3;
G__3043.cljs$lang$applyTo = (function (arglist__3044){
var x = cljs.core.first(arglist__3044);
var y = cljs.core.first(cljs.core.next(arglist__3044));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3044)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3044)));
return G__3043__delegate.call(this, x, y, z, args);
});
return G__3043;
})()
;
G__3036 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3036__3037.call(this);
case  1 :
return G__3036__3038.call(this,x);
case  2 :
return G__3036__3039.call(this,x,y);
case  3 :
return G__3036__3040.call(this,x,y,z);
default:
return G__3036__3041.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3036.cljs$lang$maxFixedArity = 3;
G__3036.cljs$lang$applyTo = G__3036__3041.cljs$lang$applyTo;
return G__3036;
})()
});
var comp__3025 = (function() { 
var G__3045__delegate = function (f1,f2,f3,fs){
var fs__3018 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3046__delegate = function (args){
var ret__3019 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3018),args);
var fs__3020 = cljs.core.next.call(null,fs__3018);

while(true){
if(cljs.core.truth_(fs__3020))
{{
var G__3047 = cljs.core.first.call(null,fs__3020).call(null,ret__3019);
var G__3048 = cljs.core.next.call(null,fs__3020);
ret__3019 = G__3047;
fs__3020 = G__3048;
continue;
}
} else
{return ret__3019;
}
break;
}
};
var G__3046 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3046__delegate.call(this, args);
};
G__3046.cljs$lang$maxFixedArity = 0;
G__3046.cljs$lang$applyTo = (function (arglist__3049){
var args = cljs.core.seq( arglist__3049 );;
return G__3046__delegate.call(this, args);
});
return G__3046;
})()
;
};
var G__3045 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3045__delegate.call(this, f1, f2, f3, fs);
};
G__3045.cljs$lang$maxFixedArity = 3;
G__3045.cljs$lang$applyTo = (function (arglist__3050){
var f1 = cljs.core.first(arglist__3050);
var f2 = cljs.core.first(cljs.core.next(arglist__3050));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3050)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3050)));
return G__3045__delegate.call(this, f1, f2, f3, fs);
});
return G__3045;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3021.call(this);
case  1 :
return comp__3022.call(this,f1);
case  2 :
return comp__3023.call(this,f1,f2);
case  3 :
return comp__3024.call(this,f1,f2,f3);
default:
return comp__3025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3025.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3051 = (function (f,arg1){
return (function() { 
var G__3056__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3056 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3056__delegate.call(this, args);
};
G__3056.cljs$lang$maxFixedArity = 0;
G__3056.cljs$lang$applyTo = (function (arglist__3057){
var args = cljs.core.seq( arglist__3057 );;
return G__3056__delegate.call(this, args);
});
return G__3056;
})()
;
});
var partial__3052 = (function (f,arg1,arg2){
return (function() { 
var G__3058__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3058 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3058__delegate.call(this, args);
};
G__3058.cljs$lang$maxFixedArity = 0;
G__3058.cljs$lang$applyTo = (function (arglist__3059){
var args = cljs.core.seq( arglist__3059 );;
return G__3058__delegate.call(this, args);
});
return G__3058;
})()
;
});
var partial__3053 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3060__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3060 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3060__delegate.call(this, args);
};
G__3060.cljs$lang$maxFixedArity = 0;
G__3060.cljs$lang$applyTo = (function (arglist__3061){
var args = cljs.core.seq( arglist__3061 );;
return G__3060__delegate.call(this, args);
});
return G__3060;
})()
;
});
var partial__3054 = (function() { 
var G__3062__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3063__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3063 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3063__delegate.call(this, args);
};
G__3063.cljs$lang$maxFixedArity = 0;
G__3063.cljs$lang$applyTo = (function (arglist__3064){
var args = cljs.core.seq( arglist__3064 );;
return G__3063__delegate.call(this, args);
});
return G__3063;
})()
;
};
var G__3062 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3062__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3062.cljs$lang$maxFixedArity = 4;
G__3062.cljs$lang$applyTo = (function (arglist__3065){
var f = cljs.core.first(arglist__3065);
var arg1 = cljs.core.first(cljs.core.next(arglist__3065));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3065)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3065))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3065))));
return G__3062__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3062;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3051.call(this,f,arg1);
case  3 :
return partial__3052.call(this,f,arg1,arg2);
case  4 :
return partial__3053.call(this,f,arg1,arg2,arg3);
default:
return partial__3054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3054.cljs$lang$applyTo;
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
var fnil__3066 = (function (f,x){
return (function() {
var G__3070 = null;
var G__3070__3071 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3070__3072 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3070__3073 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3070__3074 = (function() { 
var G__3076__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3076 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3076__delegate.call(this, a, b, c, ds);
};
G__3076.cljs$lang$maxFixedArity = 3;
G__3076.cljs$lang$applyTo = (function (arglist__3077){
var a = cljs.core.first(arglist__3077);
var b = cljs.core.first(cljs.core.next(arglist__3077));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3077)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3077)));
return G__3076__delegate.call(this, a, b, c, ds);
});
return G__3076;
})()
;
G__3070 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3070__3071.call(this,a);
case  2 :
return G__3070__3072.call(this,a,b);
case  3 :
return G__3070__3073.call(this,a,b,c);
default:
return G__3070__3074.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3070.cljs$lang$maxFixedArity = 3;
G__3070.cljs$lang$applyTo = G__3070__3074.cljs$lang$applyTo;
return G__3070;
})()
});
var fnil__3067 = (function (f,x,y){
return (function() {
var G__3078 = null;
var G__3078__3079 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3078__3080 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3078__3081 = (function() { 
var G__3083__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3083 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3083__delegate.call(this, a, b, c, ds);
};
G__3083.cljs$lang$maxFixedArity = 3;
G__3083.cljs$lang$applyTo = (function (arglist__3084){
var a = cljs.core.first(arglist__3084);
var b = cljs.core.first(cljs.core.next(arglist__3084));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3084)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3084)));
return G__3083__delegate.call(this, a, b, c, ds);
});
return G__3083;
})()
;
G__3078 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3078__3079.call(this,a,b);
case  3 :
return G__3078__3080.call(this,a,b,c);
default:
return G__3078__3081.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3078.cljs$lang$maxFixedArity = 3;
G__3078.cljs$lang$applyTo = G__3078__3081.cljs$lang$applyTo;
return G__3078;
})()
});
var fnil__3068 = (function (f,x,y,z){
return (function() {
var G__3085 = null;
var G__3085__3086 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3085__3087 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3085__3088 = (function() { 
var G__3090__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3090 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3090__delegate.call(this, a, b, c, ds);
};
G__3090.cljs$lang$maxFixedArity = 3;
G__3090.cljs$lang$applyTo = (function (arglist__3091){
var a = cljs.core.first(arglist__3091);
var b = cljs.core.first(cljs.core.next(arglist__3091));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3091)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3091)));
return G__3090__delegate.call(this, a, b, c, ds);
});
return G__3090;
})()
;
G__3085 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3085__3086.call(this,a,b);
case  3 :
return G__3085__3087.call(this,a,b,c);
default:
return G__3085__3088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3085.cljs$lang$maxFixedArity = 3;
G__3085.cljs$lang$applyTo = G__3085__3088.cljs$lang$applyTo;
return G__3085;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3066.call(this,f,x);
case  3 :
return fnil__3067.call(this,f,x,y);
case  4 :
return fnil__3068.call(this,f,x,y,z);
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
var mapi__3094 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3092 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3092))
{var s__3093 = temp__3698__auto____3092;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3093)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3093)));
} else
{return null;
}
})));
});

return mapi__3094.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3095 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3095))
{var s__3096 = temp__3698__auto____3095;

var x__3097 = f.call(null,cljs.core.first.call(null,s__3096));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3097)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3096));
} else
{return cljs.core.cons.call(null,x__3097,keep.call(null,f,cljs.core.rest.call(null,s__3096)));
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
var keepi__3107 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3104))
{var s__3105 = temp__3698__auto____3104;

var x__3106 = f.call(null,idx,cljs.core.first.call(null,s__3105));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3106)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3105));
} else
{return cljs.core.cons.call(null,x__3106,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3105)));
}
} else
{return null;
}
})));
});

return keepi__3107.call(null,0,coll);
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
var every_pred__3152 = (function (p){
return (function() {
var ep1 = null;
var ep1__3157 = (function (){
return true;
});
var ep1__3158 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3159 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3114 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3114))
{return p.call(null,y);
} else
{return and__3546__auto____3114;
}
})());
});
var ep1__3160 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3115 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3115))
{var and__3546__auto____3116 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3116))
{return p.call(null,z);
} else
{return and__3546__auto____3116;
}
} else
{return and__3546__auto____3115;
}
})());
});
var ep1__3161 = (function() { 
var G__3163__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3117 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3117))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3117;
}
})());
};
var G__3163 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3163__delegate.call(this, x, y, z, args);
};
G__3163.cljs$lang$maxFixedArity = 3;
G__3163.cljs$lang$applyTo = (function (arglist__3164){
var x = cljs.core.first(arglist__3164);
var y = cljs.core.first(cljs.core.next(arglist__3164));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3164)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3164)));
return G__3163__delegate.call(this, x, y, z, args);
});
return G__3163;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3157.call(this);
case  1 :
return ep1__3158.call(this,x);
case  2 :
return ep1__3159.call(this,x,y);
case  3 :
return ep1__3160.call(this,x,y,z);
default:
return ep1__3161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3161.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3153 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3165 = (function (){
return true;
});
var ep2__3166 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3118 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3118))
{return p2.call(null,x);
} else
{return and__3546__auto____3118;
}
})());
});
var ep2__3167 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3119 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3119))
{var and__3546__auto____3120 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3120))
{var and__3546__auto____3121 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3121))
{return p2.call(null,y);
} else
{return and__3546__auto____3121;
}
} else
{return and__3546__auto____3120;
}
} else
{return and__3546__auto____3119;
}
})());
});
var ep2__3168 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3122 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3122))
{var and__3546__auto____3123 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3123))
{var and__3546__auto____3124 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3124))
{var and__3546__auto____3125 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3125))
{var and__3546__auto____3126 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3126))
{return p2.call(null,z);
} else
{return and__3546__auto____3126;
}
} else
{return and__3546__auto____3125;
}
} else
{return and__3546__auto____3124;
}
} else
{return and__3546__auto____3123;
}
} else
{return and__3546__auto____3122;
}
})());
});
var ep2__3169 = (function() { 
var G__3171__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3127 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3127))
{return cljs.core.every_QMARK_.call(null,(function (p1__3098_SHARP_){
var and__3546__auto____3128 = p1.call(null,p1__3098_SHARP_);

if(cljs.core.truth_(and__3546__auto____3128))
{return p2.call(null,p1__3098_SHARP_);
} else
{return and__3546__auto____3128;
}
}),args);
} else
{return and__3546__auto____3127;
}
})());
};
var G__3171 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3171__delegate.call(this, x, y, z, args);
};
G__3171.cljs$lang$maxFixedArity = 3;
G__3171.cljs$lang$applyTo = (function (arglist__3172){
var x = cljs.core.first(arglist__3172);
var y = cljs.core.first(cljs.core.next(arglist__3172));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3172)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3172)));
return G__3171__delegate.call(this, x, y, z, args);
});
return G__3171;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3165.call(this);
case  1 :
return ep2__3166.call(this,x);
case  2 :
return ep2__3167.call(this,x,y);
case  3 :
return ep2__3168.call(this,x,y,z);
default:
return ep2__3169.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3169.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3154 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3173 = (function (){
return true;
});
var ep3__3174 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3129 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3129))
{var and__3546__auto____3130 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3130))
{return p3.call(null,x);
} else
{return and__3546__auto____3130;
}
} else
{return and__3546__auto____3129;
}
})());
});
var ep3__3175 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3131 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3131))
{var and__3546__auto____3132 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3132))
{var and__3546__auto____3133 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3133))
{var and__3546__auto____3134 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3134))
{var and__3546__auto____3135 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3135))
{return p3.call(null,y);
} else
{return and__3546__auto____3135;
}
} else
{return and__3546__auto____3134;
}
} else
{return and__3546__auto____3133;
}
} else
{return and__3546__auto____3132;
}
} else
{return and__3546__auto____3131;
}
})());
});
var ep3__3176 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3136 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3136))
{var and__3546__auto____3137 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3137))
{var and__3546__auto____3138 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3138))
{var and__3546__auto____3139 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3139))
{var and__3546__auto____3140 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3140))
{var and__3546__auto____3141 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3141))
{var and__3546__auto____3142 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3142))
{var and__3546__auto____3143 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3143))
{return p3.call(null,z);
} else
{return and__3546__auto____3143;
}
} else
{return and__3546__auto____3142;
}
} else
{return and__3546__auto____3141;
}
} else
{return and__3546__auto____3140;
}
} else
{return and__3546__auto____3139;
}
} else
{return and__3546__auto____3138;
}
} else
{return and__3546__auto____3137;
}
} else
{return and__3546__auto____3136;
}
})());
});
var ep3__3177 = (function() { 
var G__3179__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3144 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3144))
{return cljs.core.every_QMARK_.call(null,(function (p1__3099_SHARP_){
var and__3546__auto____3145 = p1.call(null,p1__3099_SHARP_);

if(cljs.core.truth_(and__3546__auto____3145))
{var and__3546__auto____3146 = p2.call(null,p1__3099_SHARP_);

if(cljs.core.truth_(and__3546__auto____3146))
{return p3.call(null,p1__3099_SHARP_);
} else
{return and__3546__auto____3146;
}
} else
{return and__3546__auto____3145;
}
}),args);
} else
{return and__3546__auto____3144;
}
})());
};
var G__3179 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3179__delegate.call(this, x, y, z, args);
};
G__3179.cljs$lang$maxFixedArity = 3;
G__3179.cljs$lang$applyTo = (function (arglist__3180){
var x = cljs.core.first(arglist__3180);
var y = cljs.core.first(cljs.core.next(arglist__3180));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3180)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3180)));
return G__3179__delegate.call(this, x, y, z, args);
});
return G__3179;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3173.call(this);
case  1 :
return ep3__3174.call(this,x);
case  2 :
return ep3__3175.call(this,x,y);
case  3 :
return ep3__3176.call(this,x,y,z);
default:
return ep3__3177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3177.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3155 = (function() { 
var G__3181__delegate = function (p1,p2,p3,ps){
var ps__3147 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3182 = (function (){
return true;
});
var epn__3183 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3100_SHARP_){
return p1__3100_SHARP_.call(null,x);
}),ps__3147);
});
var epn__3184 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3101_SHARP_){
var and__3546__auto____3148 = p1__3101_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3148))
{return p1__3101_SHARP_.call(null,y);
} else
{return and__3546__auto____3148;
}
}),ps__3147);
});
var epn__3185 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3102_SHARP_){
var and__3546__auto____3149 = p1__3102_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3149))
{var and__3546__auto____3150 = p1__3102_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3150))
{return p1__3102_SHARP_.call(null,z);
} else
{return and__3546__auto____3150;
}
} else
{return and__3546__auto____3149;
}
}),ps__3147);
});
var epn__3186 = (function() { 
var G__3188__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3151 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3151))
{return cljs.core.every_QMARK_.call(null,(function (p1__3103_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3103_SHARP_,args);
}),ps__3147);
} else
{return and__3546__auto____3151;
}
})());
};
var G__3188 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3188__delegate.call(this, x, y, z, args);
};
G__3188.cljs$lang$maxFixedArity = 3;
G__3188.cljs$lang$applyTo = (function (arglist__3189){
var x = cljs.core.first(arglist__3189);
var y = cljs.core.first(cljs.core.next(arglist__3189));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3189)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3189)));
return G__3188__delegate.call(this, x, y, z, args);
});
return G__3188;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3182.call(this);
case  1 :
return epn__3183.call(this,x);
case  2 :
return epn__3184.call(this,x,y);
case  3 :
return epn__3185.call(this,x,y,z);
default:
return epn__3186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3186.cljs$lang$applyTo;
return epn;
})()
};
var G__3181 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3181__delegate.call(this, p1, p2, p3, ps);
};
G__3181.cljs$lang$maxFixedArity = 3;
G__3181.cljs$lang$applyTo = (function (arglist__3190){
var p1 = cljs.core.first(arglist__3190);
var p2 = cljs.core.first(cljs.core.next(arglist__3190));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3190)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3190)));
return G__3181__delegate.call(this, p1, p2, p3, ps);
});
return G__3181;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3152.call(this,p1);
case  2 :
return every_pred__3153.call(this,p1,p2);
case  3 :
return every_pred__3154.call(this,p1,p2,p3);
default:
return every_pred__3155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3155.cljs$lang$applyTo;
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
var some_fn__3230 = (function (p){
return (function() {
var sp1 = null;
var sp1__3235 = (function (){
return null;
});
var sp1__3236 = (function (x){
return p.call(null,x);
});
var sp1__3237 = (function (x,y){
var or__3548__auto____3192 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{return p.call(null,y);
}
});
var sp1__3238 = (function (x,y,z){
var or__3548__auto____3193 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{var or__3548__auto____3194 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{return p.call(null,z);
}
}
});
var sp1__3239 = (function() { 
var G__3241__delegate = function (x,y,z,args){
var or__3548__auto____3195 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3241 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3241__delegate.call(this, x, y, z, args);
};
G__3241.cljs$lang$maxFixedArity = 3;
G__3241.cljs$lang$applyTo = (function (arglist__3242){
var x = cljs.core.first(arglist__3242);
var y = cljs.core.first(cljs.core.next(arglist__3242));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3242)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3242)));
return G__3241__delegate.call(this, x, y, z, args);
});
return G__3241;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3235.call(this);
case  1 :
return sp1__3236.call(this,x);
case  2 :
return sp1__3237.call(this,x,y);
case  3 :
return sp1__3238.call(this,x,y,z);
default:
return sp1__3239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3239.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3231 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3243 = (function (){
return null;
});
var sp2__3244 = (function (x){
var or__3548__auto____3196 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{return p2.call(null,x);
}
});
var sp2__3245 = (function (x,y){
var or__3548__auto____3197 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3197))
{return or__3548__auto____3197;
} else
{var or__3548__auto____3198 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{var or__3548__auto____3199 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3246 = (function (x,y,z){
var or__3548__auto____3200 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{var or__3548__auto____3201 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{var or__3548__auto____3202 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{var or__3548__auto____3203 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{var or__3548__auto____3204 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3247 = (function() { 
var G__3249__delegate = function (x,y,z,args){
var or__3548__auto____3205 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{return cljs.core.some.call(null,(function (p1__3108_SHARP_){
var or__3548__auto____3206 = p1.call(null,p1__3108_SHARP_);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{return p2.call(null,p1__3108_SHARP_);
}
}),args);
}
};
var G__3249 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3249__delegate.call(this, x, y, z, args);
};
G__3249.cljs$lang$maxFixedArity = 3;
G__3249.cljs$lang$applyTo = (function (arglist__3250){
var x = cljs.core.first(arglist__3250);
var y = cljs.core.first(cljs.core.next(arglist__3250));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3250)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3250)));
return G__3249__delegate.call(this, x, y, z, args);
});
return G__3249;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3243.call(this);
case  1 :
return sp2__3244.call(this,x);
case  2 :
return sp2__3245.call(this,x,y);
case  3 :
return sp2__3246.call(this,x,y,z);
default:
return sp2__3247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3247.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3232 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3251 = (function (){
return null;
});
var sp3__3252 = (function (x){
var or__3548__auto____3207 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{var or__3548__auto____3208 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{return p3.call(null,x);
}
}
});
var sp3__3253 = (function (x,y){
var or__3548__auto____3209 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{var or__3548__auto____3210 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{var or__3548__auto____3211 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3211))
{return or__3548__auto____3211;
} else
{var or__3548__auto____3212 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3212))
{return or__3548__auto____3212;
} else
{var or__3548__auto____3213 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3213))
{return or__3548__auto____3213;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3254 = (function (x,y,z){
var or__3548__auto____3214 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3214))
{return or__3548__auto____3214;
} else
{var or__3548__auto____3215 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3215))
{return or__3548__auto____3215;
} else
{var or__3548__auto____3216 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{var or__3548__auto____3217 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3217))
{return or__3548__auto____3217;
} else
{var or__3548__auto____3218 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3218))
{return or__3548__auto____3218;
} else
{var or__3548__auto____3219 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3219))
{return or__3548__auto____3219;
} else
{var or__3548__auto____3220 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3220))
{return or__3548__auto____3220;
} else
{var or__3548__auto____3221 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3221))
{return or__3548__auto____3221;
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
var sp3__3255 = (function() { 
var G__3257__delegate = function (x,y,z,args){
var or__3548__auto____3222 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3222))
{return or__3548__auto____3222;
} else
{return cljs.core.some.call(null,(function (p1__3109_SHARP_){
var or__3548__auto____3223 = p1.call(null,p1__3109_SHARP_);

if(cljs.core.truth_(or__3548__auto____3223))
{return or__3548__auto____3223;
} else
{var or__3548__auto____3224 = p2.call(null,p1__3109_SHARP_);

if(cljs.core.truth_(or__3548__auto____3224))
{return or__3548__auto____3224;
} else
{return p3.call(null,p1__3109_SHARP_);
}
}
}),args);
}
};
var G__3257 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3257__delegate.call(this, x, y, z, args);
};
G__3257.cljs$lang$maxFixedArity = 3;
G__3257.cljs$lang$applyTo = (function (arglist__3258){
var x = cljs.core.first(arglist__3258);
var y = cljs.core.first(cljs.core.next(arglist__3258));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3258)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3258)));
return G__3257__delegate.call(this, x, y, z, args);
});
return G__3257;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3251.call(this);
case  1 :
return sp3__3252.call(this,x);
case  2 :
return sp3__3253.call(this,x,y);
case  3 :
return sp3__3254.call(this,x,y,z);
default:
return sp3__3255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3255.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3233 = (function() { 
var G__3259__delegate = function (p1,p2,p3,ps){
var ps__3225 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3260 = (function (){
return null;
});
var spn__3261 = (function (x){
return cljs.core.some.call(null,(function (p1__3110_SHARP_){
return p1__3110_SHARP_.call(null,x);
}),ps__3225);
});
var spn__3262 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3111_SHARP_){
var or__3548__auto____3226 = p1__3111_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3226))
{return or__3548__auto____3226;
} else
{return p1__3111_SHARP_.call(null,y);
}
}),ps__3225);
});
var spn__3263 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3112_SHARP_){
var or__3548__auto____3227 = p1__3112_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3227))
{return or__3548__auto____3227;
} else
{var or__3548__auto____3228 = p1__3112_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3228))
{return or__3548__auto____3228;
} else
{return p1__3112_SHARP_.call(null,z);
}
}
}),ps__3225);
});
var spn__3264 = (function() { 
var G__3266__delegate = function (x,y,z,args){
var or__3548__auto____3229 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3229))
{return or__3548__auto____3229;
} else
{return cljs.core.some.call(null,(function (p1__3113_SHARP_){
return cljs.core.some.call(null,p1__3113_SHARP_,args);
}),ps__3225);
}
};
var G__3266 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3266__delegate.call(this, x, y, z, args);
};
G__3266.cljs$lang$maxFixedArity = 3;
G__3266.cljs$lang$applyTo = (function (arglist__3267){
var x = cljs.core.first(arglist__3267);
var y = cljs.core.first(cljs.core.next(arglist__3267));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3267)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3267)));
return G__3266__delegate.call(this, x, y, z, args);
});
return G__3266;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3260.call(this);
case  1 :
return spn__3261.call(this,x);
case  2 :
return spn__3262.call(this,x,y);
case  3 :
return spn__3263.call(this,x,y,z);
default:
return spn__3264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3264.cljs$lang$applyTo;
return spn;
})()
};
var G__3259 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3259__delegate.call(this, p1, p2, p3, ps);
};
G__3259.cljs$lang$maxFixedArity = 3;
G__3259.cljs$lang$applyTo = (function (arglist__3268){
var p1 = cljs.core.first(arglist__3268);
var p2 = cljs.core.first(cljs.core.next(arglist__3268));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3268)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3268)));
return G__3259__delegate.call(this, p1, p2, p3, ps);
});
return G__3259;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3230.call(this,p1);
case  2 :
return some_fn__3231.call(this,p1,p2);
case  3 :
return some_fn__3232.call(this,p1,p2,p3);
default:
return some_fn__3233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3233.cljs$lang$applyTo;
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
var map__3281 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3269 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3269))
{var s__3270 = temp__3698__auto____3269;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3270)),map.call(null,f,cljs.core.rest.call(null,s__3270)));
} else
{return null;
}
})));
});
var map__3282 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3271 = cljs.core.seq.call(null,c1);
var s2__3272 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3273 = s1__3271;

if(cljs.core.truth_(and__3546__auto____3273))
{return s2__3272;
} else
{return and__3546__auto____3273;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3271),cljs.core.first.call(null,s2__3272)),map.call(null,f,cljs.core.rest.call(null,s1__3271),cljs.core.rest.call(null,s2__3272)));
} else
{return null;
}
})));
});
var map__3283 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3274 = cljs.core.seq.call(null,c1);
var s2__3275 = cljs.core.seq.call(null,c2);
var s3__3276 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3277 = s1__3274;

if(cljs.core.truth_(and__3546__auto____3277))
{var and__3546__auto____3278 = s2__3275;

if(cljs.core.truth_(and__3546__auto____3278))
{return s3__3276;
} else
{return and__3546__auto____3278;
}
} else
{return and__3546__auto____3277;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3274),cljs.core.first.call(null,s2__3275),cljs.core.first.call(null,s3__3276)),map.call(null,f,cljs.core.rest.call(null,s1__3274),cljs.core.rest.call(null,s2__3275),cljs.core.rest.call(null,s3__3276)));
} else
{return null;
}
})));
});
var map__3284 = (function() { 
var G__3286__delegate = function (f,c1,c2,c3,colls){
var step__3280 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3279 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3279)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3279),step.call(null,map.call(null,cljs.core.rest,ss__3279)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3191_SHARP_){
return cljs.core.apply.call(null,f,p1__3191_SHARP_);
}),step__3280.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3286 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3286__delegate.call(this, f, c1, c2, c3, colls);
};
G__3286.cljs$lang$maxFixedArity = 4;
G__3286.cljs$lang$applyTo = (function (arglist__3287){
var f = cljs.core.first(arglist__3287);
var c1 = cljs.core.first(cljs.core.next(arglist__3287));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3287)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3287))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3287))));
return G__3286__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3286;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3281.call(this,f,c1);
case  3 :
return map__3282.call(this,f,c1,c2);
case  4 :
return map__3283.call(this,f,c1,c2,c3);
default:
return map__3284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3284.cljs$lang$applyTo;
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
{var temp__3698__auto____3288 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3288))
{var s__3289 = temp__3698__auto____3288;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3289),take.call(null,(n - 1),cljs.core.rest.call(null,s__3289)));
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
var step__3292 = (function (n,coll){
while(true){
var s__3290 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3291 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3291))
{return s__3290;
} else
{return and__3546__auto____3291;
}
})()))
{{
var G__3293 = (n - 1);
var G__3294 = cljs.core.rest.call(null,s__3290);
n = G__3293;
coll = G__3294;
continue;
}
} else
{return s__3290;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3292.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3295 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3296 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3295.call(this,n);
case  2 :
return drop_last__3296.call(this,n,s);
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
var s__3298 = cljs.core.seq.call(null,coll);
var lead__3299 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3299))
{{
var G__3300 = cljs.core.next.call(null,s__3298);
var G__3301 = cljs.core.next.call(null,lead__3299);
s__3298 = G__3300;
lead__3299 = G__3301;
continue;
}
} else
{return s__3298;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3304 = (function (pred,coll){
while(true){
var s__3302 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3303 = s__3302;

if(cljs.core.truth_(and__3546__auto____3303))
{return pred.call(null,cljs.core.first.call(null,s__3302));
} else
{return and__3546__auto____3303;
}
})()))
{{
var G__3305 = pred;
var G__3306 = cljs.core.rest.call(null,s__3302);
pred = G__3305;
coll = G__3306;
continue;
}
} else
{return s__3302;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3304.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3307 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3307))
{var s__3308 = temp__3698__auto____3307;

return cljs.core.concat.call(null,s__3308,cycle.call(null,s__3308));
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
var repeat__3309 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3310 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3309.call(this,n);
case  2 :
return repeat__3310.call(this,n,x);
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
var repeatedly__3312 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3313 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3312.call(this,n);
case  2 :
return repeatedly__3313.call(this,n,f);
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
var interleave__3319 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3315 = cljs.core.seq.call(null,c1);
var s2__3316 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3317 = s1__3315;

if(cljs.core.truth_(and__3546__auto____3317))
{return s2__3316;
} else
{return and__3546__auto____3317;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3315),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3316),interleave.call(null,cljs.core.rest.call(null,s1__3315),cljs.core.rest.call(null,s2__3316))));
} else
{return null;
}
})));
});
var interleave__3320 = (function() { 
var G__3322__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3318 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3318)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3318),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3318)));
} else
{return null;
}
})));
};
var G__3322 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3322__delegate.call(this, c1, c2, colls);
};
G__3322.cljs$lang$maxFixedArity = 2;
G__3322.cljs$lang$applyTo = (function (arglist__3323){
var c1 = cljs.core.first(arglist__3323);
var c2 = cljs.core.first(cljs.core.next(arglist__3323));
var colls = cljs.core.rest(cljs.core.next(arglist__3323));
return G__3322__delegate.call(this, c1, c2, colls);
});
return G__3322;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3319.call(this,c1,c2);
default:
return interleave__3320.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3320.cljs$lang$applyTo;
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
var cat__3326 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3324 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3324))
{var coll__3325 = temp__3695__auto____3324;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3325),cat.call(null,cljs.core.rest.call(null,coll__3325),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3326.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3327 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3328 = (function() { 
var G__3330__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3330 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3330__delegate.call(this, f, coll, colls);
};
G__3330.cljs$lang$maxFixedArity = 2;
G__3330.cljs$lang$applyTo = (function (arglist__3331){
var f = cljs.core.first(arglist__3331);
var coll = cljs.core.first(cljs.core.next(arglist__3331));
var colls = cljs.core.rest(cljs.core.next(arglist__3331));
return G__3330__delegate.call(this, f, coll, colls);
});
return G__3330;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3327.call(this,f,coll);
default:
return mapcat__3328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3328.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3332 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3332))
{var s__3333 = temp__3698__auto____3332;

var f__3334 = cljs.core.first.call(null,s__3333);
var r__3335 = cljs.core.rest.call(null,s__3333);

if(cljs.core.truth_(pred.call(null,f__3334)))
{return cljs.core.cons.call(null,f__3334,filter.call(null,pred,r__3335));
} else
{return filter.call(null,pred,r__3335);
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
var walk__3337 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3337.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3336_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3336_SHARP_));
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
var partition__3344 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3345 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3338 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3338))
{var s__3339 = temp__3698__auto____3338;

var p__3340 = cljs.core.take.call(null,n,s__3339);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3340))))
{return cljs.core.cons.call(null,p__3340,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3339)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3346 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3341 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3341))
{var s__3342 = temp__3698__auto____3341;

var p__3343 = cljs.core.take.call(null,n,s__3342);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3343))))
{return cljs.core.cons.call(null,p__3343,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3342)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3343,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3344.call(this,n,step);
case  3 :
return partition__3345.call(this,n,step,pad);
case  4 :
return partition__3346.call(this,n,step,pad,coll);
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
var get_in__3352 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3353 = (function (m,ks,not_found){
var sentinel__3348 = cljs.core.lookup_sentinel;
var m__3349 = m;
var ks__3350 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3350))
{var m__3351 = cljs.core.get.call(null,m__3349,cljs.core.first.call(null,ks__3350),sentinel__3348);

if(cljs.core.truth_((sentinel__3348 === m__3351)))
{return not_found;
} else
{{
var G__3355 = sentinel__3348;
var G__3356 = m__3351;
var G__3357 = cljs.core.next.call(null,ks__3350);
sentinel__3348 = G__3355;
m__3349 = G__3356;
ks__3350 = G__3357;
continue;
}
}
} else
{return m__3349;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3352.call(this,m,ks);
case  3 :
return get_in__3353.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3358,v){
var vec__3359__3360 = p__3358;
var k__3361 = cljs.core.nth.call(null,vec__3359__3360,0,null);
var ks__3362 = cljs.core.nthnext.call(null,vec__3359__3360,1);

if(cljs.core.truth_(ks__3362))
{return cljs.core.assoc.call(null,m,k__3361,assoc_in.call(null,cljs.core.get.call(null,m,k__3361),ks__3362,v));
} else
{return cljs.core.assoc.call(null,m,k__3361,v);
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
var update_in__delegate = function (m,p__3363,f,args){
var vec__3364__3365 = p__3363;
var k__3366 = cljs.core.nth.call(null,vec__3364__3365,0,null);
var ks__3367 = cljs.core.nthnext.call(null,vec__3364__3365,1);

if(cljs.core.truth_(ks__3367))
{return cljs.core.assoc.call(null,m,k__3366,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3366),ks__3367,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3366,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3366),args));
}
};
var update_in = function (m,p__3363,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3363, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3368){
var m = cljs.core.first(arglist__3368);
var p__3363 = cljs.core.first(cljs.core.next(arglist__3368));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3368)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3368)));
return update_in__delegate.call(this, m, p__3363, f, args);
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
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3369 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3394 = null;
var G__3394__3395 = (function (coll,k){
var this__3370 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3394__3396 = (function (coll,k,not_found){
var this__3371 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3394 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3394__3395.call(this,coll,k);
case  3 :
return G__3394__3396.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3394;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3372 = this;
var new_array__3373 = cljs.core.aclone.call(null,this__3372.array);

(new_array__3373[k] = v);
return (new cljs.core.Vector(this__3372.meta,new_array__3373));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3374 = this;
var new_array__3375 = cljs.core.aclone.call(null,this__3374.array);

new_array__3375.push(o);
return (new cljs.core.Vector(this__3374.meta,new_array__3375));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3398 = null;
var G__3398__3399 = (function (v,f){
var this__3376 = this;
return cljs.core.ci_reduce.call(null,this__3376.array,f);
});
var G__3398__3400 = (function (v,f,start){
var this__3377 = this;
return cljs.core.ci_reduce.call(null,this__3377.array,f,start);
});
G__3398 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3398__3399.call(this,v,f);
case  3 :
return G__3398__3400.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3398;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3378 = this;
if(cljs.core.truth_((this__3378.array.length > 0)))
{var vector_seq__3379 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3378.array.length)))
{return cljs.core.cons.call(null,(this__3378.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3379.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3380 = this;
return this__3380.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3381 = this;
var count__3382 = this__3381.array.length;

if(cljs.core.truth_((count__3382 > 0)))
{return (this__3381.array[(count__3382 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3383 = this;
if(cljs.core.truth_((this__3383.array.length > 0)))
{var new_array__3384 = cljs.core.aclone.call(null,this__3383.array);

new_array__3384.pop();
return (new cljs.core.Vector(this__3383.meta,new_array__3384));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3385 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3386 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3387 = this;
return (new cljs.core.Vector(meta,this__3387.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3388 = this;
return this__3388.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3402 = null;
var G__3402__3403 = (function (coll,n){
var this__3389 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3390 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3390))
{return (n < this__3389.array.length);
} else
{return and__3546__auto____3390;
}
})()))
{return (this__3389.array[n]);
} else
{return null;
}
});
var G__3402__3404 = (function (coll,n,not_found){
var this__3391 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3392 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3392))
{return (n < this__3391.array.length);
} else
{return and__3546__auto____3392;
}
})()))
{return (this__3391.array[n]);
} else
{return not_found;
}
});
G__3402 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3402__3403.call(this,coll,n);
case  3 :
return G__3402__3404.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3402;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3393 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3393.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3406 = null;
var G__3406__3407 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3406__3408 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3406 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3406__3407.call(this,_,k);
case  3 :
return G__3406__3408.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3406;
})()
;
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
vector.cljs$lang$applyTo = (function (arglist__3410){
var args = cljs.core.seq( arglist__3410 );;
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
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3411 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3431 = null;
var G__3431__3432 = (function (coll,k){
var this__3412 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3431__3433 = (function (coll,k,not_found){
var this__3413 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3431 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3431__3432.call(this,coll,k);
case  3 :
return G__3431__3433.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3431;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3414 = this;
var v_pos__3415 = (this__3414.start + key);

return (new cljs.core.Subvec(this__3414.meta,cljs.core._assoc.call(null,this__3414.v,v_pos__3415,val),this__3414.start,((this__3414.end > (v_pos__3415 + 1)) ? this__3414.end : (v_pos__3415 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3416 = this;
return (new cljs.core.Subvec(this__3416.meta,cljs.core._assoc_n.call(null,this__3416.v,this__3416.end,o),this__3416.start,(this__3416.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3435 = null;
var G__3435__3436 = (function (coll,f){
var this__3417 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3435__3437 = (function (coll,f,start){
var this__3418 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3435 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3435__3436.call(this,coll,f);
case  3 :
return G__3435__3437.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3435;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3419 = this;
var subvec_seq__3420 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3419.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3419.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3420.call(null,this__3419.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3421 = this;
return (this__3421.end - this__3421.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3422 = this;
return cljs.core._nth.call(null,this__3422.v,(this__3422.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3423 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3423.start,this__3423.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3423.meta,this__3423.v,this__3423.start,(this__3423.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3424 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3425 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3426 = this;
return (new cljs.core.Subvec(meta,this__3426.v,this__3426.start,this__3426.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3427 = this;
return this__3427.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3439 = null;
var G__3439__3440 = (function (coll,n){
var this__3428 = this;
return cljs.core._nth.call(null,this__3428.v,(this__3428.start + n));
});
var G__3439__3441 = (function (coll,n,not_found){
var this__3429 = this;
return cljs.core._nth.call(null,this__3429.v,(this__3429.start + n),not_found);
});
G__3439 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3439__3440.call(this,coll,n);
case  3 :
return G__3439__3441.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3439;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3430 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3430.meta);
});
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__3443 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3444 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3443.call(this,v,start);
case  3 :
return subvec__3444.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3446 = null;
var G__3446__3447 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3446__3448 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3446 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3446__3447.call(this,_,k);
case  3 :
return G__3446__3448.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3446;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3450 = this;
return false;
});
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
var len__3451 = array.length;

var i__3452 = 0;

while(true){
if(cljs.core.truth_((i__3452 < len__3451)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3452]))))
{return i__3452;
} else
{{
var G__3453 = (i__3452 + incr);
i__3452 = G__3453;
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
var obj_map_contains_key_QMARK___3455 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3456 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3454 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3454))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3454;
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
return obj_map_contains_key_QMARK___3455.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3456.call(this,k,strobj,true_val,false_val);
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
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3459 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3478 = null;
var G__3478__3479 = (function (coll,k){
var this__3460 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3478__3480 = (function (coll,k,not_found){
var this__3461 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3461.strobj,(this__3461.strobj[k]),not_found);
});
G__3478 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3478__3479.call(this,coll,k);
case  3 :
return G__3478__3480.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3478;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3462 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3463 = goog.object.clone.call(null,this__3462.strobj);
var overwrite_QMARK___3464 = new_strobj__3463.hasOwnProperty(k);

(new_strobj__3463[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3464))
{return (new cljs.core.ObjMap(this__3462.meta,this__3462.keys,new_strobj__3463));
} else
{var new_keys__3465 = cljs.core.aclone.call(null,this__3462.keys);

new_keys__3465.push(k);
return (new cljs.core.ObjMap(this__3462.meta,new_keys__3465,new_strobj__3463));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3462.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3466 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3466.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3467 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3468 = this;
if(cljs.core.truth_((this__3468.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3458_SHARP_){
return cljs.core.vector.call(null,p1__3458_SHARP_,(this__3468.strobj[p1__3458_SHARP_]));
}),this__3468.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3469 = this;
return this__3469.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3470 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3471 = this;
return (new cljs.core.ObjMap(meta,this__3471.keys,this__3471.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3472 = this;
return this__3472.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3473 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3473.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3474 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3475 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3475))
{return this__3474.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3475;
}
})()))
{var new_keys__3476 = cljs.core.aclone.call(null,this__3474.keys);
var new_strobj__3477 = goog.object.clone.call(null,this__3474.strobj);

new_keys__3476.splice(cljs.core.scan_array.call(null,1,k,new_keys__3476),1);
cljs.core.js_delete.call(null,new_strobj__3477,k);
return (new cljs.core.ObjMap(this__3474.meta,new_keys__3476,new_strobj__3477));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3483 = null;
var G__3483__3484 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3483__3485 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3483 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3483__3484.call(this,_,k);
case  3 :
return G__3483__3485.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3483;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3487 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3517 = null;
var G__3517__3518 = (function (coll,k){
var this__3488 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3517__3519 = (function (coll,k,not_found){
var this__3489 = this;
var bucket__3490 = (this__3489.hashobj[cljs.core.hash.call(null,k)]);
var i__3491 = (cljs.core.truth_(bucket__3490)?cljs.core.scan_array.call(null,2,k,bucket__3490):null);

if(cljs.core.truth_(i__3491))
{return (bucket__3490[(i__3491 + 1)]);
} else
{return not_found;
}
});
G__3517 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3517__3518.call(this,coll,k);
case  3 :
return G__3517__3519.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3517;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3492 = this;
var h__3493 = cljs.core.hash.call(null,k);
var bucket__3494 = (this__3492.hashobj[h__3493]);

if(cljs.core.truth_(bucket__3494))
{var new_bucket__3495 = cljs.core.aclone.call(null,bucket__3494);
var new_hashobj__3496 = goog.object.clone.call(null,this__3492.hashobj);

(new_hashobj__3496[h__3493] = new_bucket__3495);
var temp__3695__auto____3497 = cljs.core.scan_array.call(null,2,k,new_bucket__3495);

if(cljs.core.truth_(temp__3695__auto____3497))
{var i__3498 = temp__3695__auto____3497;

(new_bucket__3495[(i__3498 + 1)] = v);
return (new cljs.core.HashMap(this__3492.meta,this__3492.count,new_hashobj__3496));
} else
{new_bucket__3495.push(k,v);
return (new cljs.core.HashMap(this__3492.meta,(this__3492.count + 1),new_hashobj__3496));
}
} else
{var new_hashobj__3499 = goog.object.clone.call(null,this__3492.hashobj);

(new_hashobj__3499[h__3493] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3492.meta,(this__3492.count + 1),new_hashobj__3499));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3500 = this;
var bucket__3501 = (this__3500.hashobj[cljs.core.hash.call(null,k)]);
var i__3502 = (cljs.core.truth_(bucket__3501)?cljs.core.scan_array.call(null,2,k,bucket__3501):null);

if(cljs.core.truth_(i__3502))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3503 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3504 = this;
if(cljs.core.truth_((this__3504.count > 0)))
{var hashes__3505 = cljs.core.js_keys.call(null,this__3504.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3482_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3504.hashobj[p1__3482_SHARP_])));
}),hashes__3505);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3506 = this;
return this__3506.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3507 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3508 = this;
return (new cljs.core.HashMap(meta,this__3508.count,this__3508.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3509 = this;
return this__3509.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3510 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3510.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3511 = this;
var h__3512 = cljs.core.hash.call(null,k);
var bucket__3513 = (this__3511.hashobj[h__3512]);
var i__3514 = (cljs.core.truth_(bucket__3513)?cljs.core.scan_array.call(null,2,k,bucket__3513):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3514)))
{return coll;
} else
{var new_hashobj__3515 = goog.object.clone.call(null,this__3511.hashobj);

if(cljs.core.truth_((3 > bucket__3513.length)))
{cljs.core.js_delete.call(null,new_hashobj__3515,h__3512);
} else
{var new_bucket__3516 = cljs.core.aclone.call(null,bucket__3513);

new_bucket__3516.splice(i__3514,2);
(new_hashobj__3515[h__3512] = new_bucket__3516);
}
return (new cljs.core.HashMap(this__3511.meta,(this__3511.count - 1),new_hashobj__3515));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3521 = ks.length;

var i__3522 = 0;
var out__3523 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3522 < len__3521)))
{{
var G__3524 = (i__3522 + 1);
var G__3525 = cljs.core.assoc.call(null,out__3523,(ks[i__3522]),(vs[i__3522]));
i__3522 = G__3524;
out__3523 = G__3525;
continue;
}
} else
{return out__3523;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3526 = null;
var G__3526__3527 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3526__3528 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3526 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3526__3527.call(this,_,k);
case  3 :
return G__3526__3528.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3526;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3530 = cljs.core.seq.call(null,keyvals);
var out__3531 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3530))
{{
var G__3532 = cljs.core.nnext.call(null,in$__3530);
var G__3533 = cljs.core.assoc.call(null,out__3531,cljs.core.first.call(null,in$__3530),cljs.core.second.call(null,in$__3530));
in$__3530 = G__3532;
out__3531 = G__3533;
continue;
}
} else
{return out__3531;
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
hash_map.cljs$lang$applyTo = (function (arglist__3534){
var keyvals = cljs.core.seq( arglist__3534 );;
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
{return cljs.core.reduce.call(null,(function (p1__3535_SHARP_,p2__3536_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3537 = p1__3535_SHARP_;

if(cljs.core.truth_(or__3548__auto____3537))
{return or__3548__auto____3537;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3536_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3538){
var maps = cljs.core.seq( arglist__3538 );;
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
{var merge_entry__3541 = (function (m,e){
var k__3539 = cljs.core.first.call(null,e);
var v__3540 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3539)))
{return cljs.core.assoc.call(null,m,k__3539,f.call(null,cljs.core.get.call(null,m,k__3539),v__3540));
} else
{return cljs.core.assoc.call(null,m,k__3539,v__3540);
}
});
var merge2__3543 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3541,(function (){var or__3548__auto____3542 = m1;

if(cljs.core.truth_(or__3548__auto____3542))
{return or__3548__auto____3542;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3543,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3544){
var f = cljs.core.first(arglist__3544);
var maps = cljs.core.rest(arglist__3544);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3546 = cljs.core.ObjMap.fromObject([],{});
var keys__3547 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3547))
{var key__3548 = cljs.core.first.call(null,keys__3547);
var entry__3549 = cljs.core.get.call(null,map,key__3548,"﷐'user/not-found");

{
var G__3550 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3549,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3546,key__3548,entry__3549):ret__3546);
var G__3551 = cljs.core.next.call(null,keys__3547);
ret__3546 = G__3550;
keys__3547 = G__3551;
continue;
}
} else
{return ret__3546;
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
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3552 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3565 = null;
var G__3565__3566 = (function (coll,v){
var this__3553 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3565__3567 = (function (coll,v,not_found){
var this__3554 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3554.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3565 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3565__3566.call(this,coll,v);
case  3 :
return G__3565__3567.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3565;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3555 = this;
return (new cljs.core.Set(this__3555.meta,cljs.core.assoc.call(null,this__3555.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3556 = this;
return cljs.core.keys.call(null,this__3556.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3557 = this;
return (new cljs.core.Set(this__3557.meta,cljs.core.dissoc.call(null,this__3557.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3558 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3559 = this;
var and__3546__auto____3560 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3560))
{var and__3546__auto____3561 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3561))
{return cljs.core.every_QMARK_.call(null,(function (p1__3545_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3545_SHARP_);
}),other);
} else
{return and__3546__auto____3561;
}
} else
{return and__3546__auto____3560;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3562 = this;
return (new cljs.core.Set(meta,this__3562.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3563 = this;
return this__3563.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3564 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3564.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3569 = null;
var G__3569__3570 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3569__3571 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3569 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3569__3570.call(this,_,k);
case  3 :
return G__3569__3571.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3569;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3574 = cljs.core.seq.call(null,coll);
var out__3575 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3574))))
{{
var G__3576 = cljs.core.rest.call(null,in$__3574);
var G__3577 = cljs.core.conj.call(null,out__3575,cljs.core.first.call(null,in$__3574));
in$__3574 = G__3576;
out__3575 = G__3577;
continue;
}
} else
{return out__3575;
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
{var n__3578 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3579 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3579))
{var e__3580 = temp__3695__auto____3579;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3580));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3578,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3573_SHARP_){
var temp__3695__auto____3581 = cljs.core.find.call(null,smap,p1__3573_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3581))
{var e__3582 = temp__3695__auto____3581;

return cljs.core.second.call(null,e__3582);
} else
{return p1__3573_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3590 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3583,seen){
while(true){
var vec__3584__3585 = p__3583;
var f__3586 = cljs.core.nth.call(null,vec__3584__3585,0,null);
var xs__3587 = vec__3584__3585;

var temp__3698__auto____3588 = cljs.core.seq.call(null,xs__3587);

if(cljs.core.truth_(temp__3698__auto____3588))
{var s__3589 = temp__3698__auto____3588;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3586)))
{{
var G__3591 = cljs.core.rest.call(null,s__3589);
var G__3592 = seen;
p__3583 = G__3591;
seen = G__3592;
continue;
}
} else
{return cljs.core.cons.call(null,f__3586,step.call(null,cljs.core.rest.call(null,s__3589),cljs.core.conj.call(null,seen,f__3586)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3590.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3593 = cljs.core.Vector.fromArray([]);
var s__3594 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3594)))
{{
var G__3595 = cljs.core.conj.call(null,ret__3593,cljs.core.first.call(null,s__3594));
var G__3596 = cljs.core.next.call(null,s__3594);
ret__3593 = G__3595;
s__3594 = G__3596;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3593);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3597 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3597))
{return or__3548__auto____3597;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3598 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3598 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3598 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3599 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3599))
{return or__3548__auto____3599;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3600 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3600 > -1)))
{return cljs.core.subs.call(null,x,2,i__3600);
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
var map__3603 = cljs.core.ObjMap.fromObject([],{});
var ks__3604 = cljs.core.seq.call(null,keys);
var vs__3605 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3606 = ks__3604;

if(cljs.core.truth_(and__3546__auto____3606))
{return vs__3605;
} else
{return and__3546__auto____3606;
}
})()))
{{
var G__3607 = cljs.core.assoc.call(null,map__3603,cljs.core.first.call(null,ks__3604),cljs.core.first.call(null,vs__3605));
var G__3608 = cljs.core.next.call(null,ks__3604);
var G__3609 = cljs.core.next.call(null,vs__3605);
map__3603 = G__3607;
ks__3604 = G__3608;
vs__3605 = G__3609;
continue;
}
} else
{return map__3603;
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
var max_key__3612 = (function (k,x){
return x;
});
var max_key__3613 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3614 = (function() { 
var G__3616__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3601_SHARP_,p2__3602_SHARP_){
return max_key.call(null,k,p1__3601_SHARP_,p2__3602_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3616 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3616__delegate.call(this, k, x, y, more);
};
G__3616.cljs$lang$maxFixedArity = 3;
G__3616.cljs$lang$applyTo = (function (arglist__3617){
var k = cljs.core.first(arglist__3617);
var x = cljs.core.first(cljs.core.next(arglist__3617));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3617)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3617)));
return G__3616__delegate.call(this, k, x, y, more);
});
return G__3616;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3612.call(this,k,x);
case  3 :
return max_key__3613.call(this,k,x,y);
default:
return max_key__3614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3614.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3618 = (function (k,x){
return x;
});
var min_key__3619 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3620 = (function() { 
var G__3622__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3610_SHARP_,p2__3611_SHARP_){
return min_key.call(null,k,p1__3610_SHARP_,p2__3611_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3622 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3622__delegate.call(this, k, x, y, more);
};
G__3622.cljs$lang$maxFixedArity = 3;
G__3622.cljs$lang$applyTo = (function (arglist__3623){
var k = cljs.core.first(arglist__3623);
var x = cljs.core.first(cljs.core.next(arglist__3623));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3623)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3623)));
return G__3622__delegate.call(this, k, x, y, more);
});
return G__3622;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3618.call(this,k,x);
case  3 :
return min_key__3619.call(this,k,x,y);
default:
return min_key__3620.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3620.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3626 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3627 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3624 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3624))
{var s__3625 = temp__3698__auto____3624;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3625),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3625)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3626.call(this,n,step);
case  3 :
return partition_all__3627.call(this,n,step,coll);
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
var temp__3698__auto____3629 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3629))
{var s__3630 = temp__3698__auto____3629;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3630))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3630),take_while.call(null,pred,cljs.core.rest.call(null,s__3630)));
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
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3631 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3632 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3648 = null;
var G__3648__3649 = (function (rng,f){
var this__3633 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3648__3650 = (function (rng,f,s){
var this__3634 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3648 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3648__3649.call(this,rng,f);
case  3 :
return G__3648__3650.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3648;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3635 = this;
var comp__3636 = (cljs.core.truth_((this__3635.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3636.call(null,this__3635.start,this__3635.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3637 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3637.end - this__3637.start) / this__3637.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3638 = this;
return this__3638.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3639 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3639.meta,(this__3639.start + this__3639.step),this__3639.end,this__3639.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3640 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3641 = this;
return (new cljs.core.Range(meta,this__3641.start,this__3641.end,this__3641.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3642 = this;
return this__3642.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3652 = null;
var G__3652__3653 = (function (rng,n){
var this__3643 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3643.start + (n * this__3643.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3644 = (this__3643.start > this__3643.end);

if(cljs.core.truth_(and__3546__auto____3644))
{return cljs.core._EQ_.call(null,this__3643.step,0);
} else
{return and__3546__auto____3644;
}
})()))
{return this__3643.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3652__3654 = (function (rng,n,not_found){
var this__3645 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3645.start + (n * this__3645.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3646 = (this__3645.start > this__3645.end);

if(cljs.core.truth_(and__3546__auto____3646))
{return cljs.core._EQ_.call(null,this__3645.step,0);
} else
{return and__3546__auto____3646;
}
})()))
{return this__3645.start;
} else
{return not_found;
}
}
});
G__3652 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3652__3653.call(this,rng,n);
case  3 :
return G__3652__3654.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3652;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3647 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3647.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3656 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3657 = (function (end){
return range.call(null,0,end,1);
});
var range__3658 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3659 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3656.call(this);
case  1 :
return range__3657.call(this,start);
case  2 :
return range__3658.call(this,start,end);
case  3 :
return range__3659.call(this,start,end,step);
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
var temp__3698__auto____3661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3661))
{var s__3662 = temp__3698__auto____3661;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3662),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3662)));
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
var temp__3698__auto____3664 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3664))
{var s__3665 = temp__3698__auto____3664;

var fst__3666 = cljs.core.first.call(null,s__3665);
var fv__3667 = f.call(null,fst__3666);
var run__3668 = cljs.core.cons.call(null,fst__3666,cljs.core.take_while.call(null,(function (p1__3663_SHARP_){
return cljs.core._EQ_.call(null,fv__3667,f.call(null,p1__3663_SHARP_));
}),cljs.core.next.call(null,s__3665)));

return cljs.core.cons.call(null,run__3668,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3668),s__3665))));
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
var reductions__3683 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3679 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3679))
{var s__3680 = temp__3695__auto____3679;

return reductions.call(null,f,cljs.core.first.call(null,s__3680),cljs.core.rest.call(null,s__3680));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3684 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3681 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3681))
{var s__3682 = temp__3698__auto____3681;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3682)),cljs.core.rest.call(null,s__3682));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3683.call(this,f,init);
case  3 :
return reductions__3684.call(this,f,init,coll);
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
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3687 = (function (f){
return (function() {
var G__3692 = null;
var G__3692__3693 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3692__3694 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3692__3695 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3692__3696 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3692__3697 = (function() { 
var G__3699__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3699 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3699__delegate.call(this, x, y, z, args);
};
G__3699.cljs$lang$maxFixedArity = 3;
G__3699.cljs$lang$applyTo = (function (arglist__3700){
var x = cljs.core.first(arglist__3700);
var y = cljs.core.first(cljs.core.next(arglist__3700));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3700)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3700)));
return G__3699__delegate.call(this, x, y, z, args);
});
return G__3699;
})()
;
G__3692 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3692__3693.call(this);
case  1 :
return G__3692__3694.call(this,x);
case  2 :
return G__3692__3695.call(this,x,y);
case  3 :
return G__3692__3696.call(this,x,y,z);
default:
return G__3692__3697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3692.cljs$lang$maxFixedArity = 3;
G__3692.cljs$lang$applyTo = G__3692__3697.cljs$lang$applyTo;
return G__3692;
})()
});
var juxt__3688 = (function (f,g){
return (function() {
var G__3701 = null;
var G__3701__3702 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3701__3703 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3701__3704 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3701__3705 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3701__3706 = (function() { 
var G__3708__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3708 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3708__delegate.call(this, x, y, z, args);
};
G__3708.cljs$lang$maxFixedArity = 3;
G__3708.cljs$lang$applyTo = (function (arglist__3709){
var x = cljs.core.first(arglist__3709);
var y = cljs.core.first(cljs.core.next(arglist__3709));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3709)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3709)));
return G__3708__delegate.call(this, x, y, z, args);
});
return G__3708;
})()
;
G__3701 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3701__3702.call(this);
case  1 :
return G__3701__3703.call(this,x);
case  2 :
return G__3701__3704.call(this,x,y);
case  3 :
return G__3701__3705.call(this,x,y,z);
default:
return G__3701__3706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3701.cljs$lang$maxFixedArity = 3;
G__3701.cljs$lang$applyTo = G__3701__3706.cljs$lang$applyTo;
return G__3701;
})()
});
var juxt__3689 = (function (f,g,h){
return (function() {
var G__3710 = null;
var G__3710__3711 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3710__3712 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3710__3713 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3710__3714 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3710__3715 = (function() { 
var G__3717__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3717 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3717__delegate.call(this, x, y, z, args);
};
G__3717.cljs$lang$maxFixedArity = 3;
G__3717.cljs$lang$applyTo = (function (arglist__3718){
var x = cljs.core.first(arglist__3718);
var y = cljs.core.first(cljs.core.next(arglist__3718));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3718)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3718)));
return G__3717__delegate.call(this, x, y, z, args);
});
return G__3717;
})()
;
G__3710 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3710__3711.call(this);
case  1 :
return G__3710__3712.call(this,x);
case  2 :
return G__3710__3713.call(this,x,y);
case  3 :
return G__3710__3714.call(this,x,y,z);
default:
return G__3710__3715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3710.cljs$lang$maxFixedArity = 3;
G__3710.cljs$lang$applyTo = G__3710__3715.cljs$lang$applyTo;
return G__3710;
})()
});
var juxt__3690 = (function() { 
var G__3719__delegate = function (f,g,h,fs){
var fs__3686 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3720 = null;
var G__3720__3721 = (function (){
return cljs.core.reduce.call(null,(function (p1__3669_SHARP_,p2__3670_SHARP_){
return cljs.core.conj.call(null,p1__3669_SHARP_,p2__3670_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3686);
});
var G__3720__3722 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3671_SHARP_,p2__3672_SHARP_){
return cljs.core.conj.call(null,p1__3671_SHARP_,p2__3672_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3686);
});
var G__3720__3723 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3673_SHARP_,p2__3674_SHARP_){
return cljs.core.conj.call(null,p1__3673_SHARP_,p2__3674_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3686);
});
var G__3720__3724 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3675_SHARP_,p2__3676_SHARP_){
return cljs.core.conj.call(null,p1__3675_SHARP_,p2__3676_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3686);
});
var G__3720__3725 = (function() { 
var G__3727__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3677_SHARP_,p2__3678_SHARP_){
return cljs.core.conj.call(null,p1__3677_SHARP_,cljs.core.apply.call(null,p2__3678_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3686);
};
var G__3727 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3727__delegate.call(this, x, y, z, args);
};
G__3727.cljs$lang$maxFixedArity = 3;
G__3727.cljs$lang$applyTo = (function (arglist__3728){
var x = cljs.core.first(arglist__3728);
var y = cljs.core.first(cljs.core.next(arglist__3728));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3728)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3728)));
return G__3727__delegate.call(this, x, y, z, args);
});
return G__3727;
})()
;
G__3720 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3720__3721.call(this);
case  1 :
return G__3720__3722.call(this,x);
case  2 :
return G__3720__3723.call(this,x,y);
case  3 :
return G__3720__3724.call(this,x,y,z);
default:
return G__3720__3725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3720.cljs$lang$maxFixedArity = 3;
G__3720.cljs$lang$applyTo = G__3720__3725.cljs$lang$applyTo;
return G__3720;
})()
};
var G__3719 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3719__delegate.call(this, f, g, h, fs);
};
G__3719.cljs$lang$maxFixedArity = 3;
G__3719.cljs$lang$applyTo = (function (arglist__3729){
var f = cljs.core.first(arglist__3729);
var g = cljs.core.first(cljs.core.next(arglist__3729));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3729)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3729)));
return G__3719__delegate.call(this, f, g, h, fs);
});
return G__3719;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3687.call(this,f);
case  2 :
return juxt__3688.call(this,f,g);
case  3 :
return juxt__3689.call(this,f,g,h);
default:
return juxt__3690.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3690.cljs$lang$applyTo;
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
var dorun__3731 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3734 = cljs.core.next.call(null,coll);
coll = G__3734;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3732 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3730 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3730))
{return (n > 0);
} else
{return and__3546__auto____3730;
}
})()))
{{
var G__3735 = (n - 1);
var G__3736 = cljs.core.next.call(null,coll);
n = G__3735;
coll = G__3736;
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
return dorun__3731.call(this,n);
case  2 :
return dorun__3732.call(this,n,coll);
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
var doall__3737 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3738 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3737.call(this,n);
case  2 :
return doall__3738.call(this,n,coll);
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
var matches__3740 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3740),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3740),1)))
{return cljs.core.first.call(null,matches__3740);
} else
{return cljs.core.vec.call(null,matches__3740);
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
var matches__3741 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3741)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3741),1)))
{return cljs.core.first.call(null,matches__3741);
} else
{return cljs.core.vec.call(null,matches__3741);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3742 = cljs.core.re_find.call(null,re,s);
var match_idx__3743 = s.search(re);
var match_str__3744 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3742))?cljs.core.first.call(null,match_data__3742):match_data__3742);
var post_match__3745 = cljs.core.subs.call(null,s,(match_idx__3743 + cljs.core.count.call(null,match_str__3744)));

if(cljs.core.truth_(match_data__3742))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3742,re_seq.call(null,re,post_match__3745));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3746_SHARP_){
return print_one.call(null,p1__3746_SHARP_,opts);
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
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3747 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3747))
{var and__3546__auto____3751 = (function (){var x__319__auto____3748 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3749 = x__319__auto____3748;

if(cljs.core.truth_(and__3546__auto____3749))
{var and__3546__auto____3750 = x__319__auto____3748.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3750))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3748));
} else
{return and__3546__auto____3750;
}
} else
{return and__3546__auto____3749;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____3748);
}
})();

if(cljs.core.truth_(and__3546__auto____3751))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3751;
}
} else
{return and__3546__auto____3747;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__319__auto____3752 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3753 = x__319__auto____3752;

if(cljs.core.truth_(and__3546__auto____3753))
{var and__3546__auto____3754 = x__319__auto____3752.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3754))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3752));
} else
{return and__3546__auto____3754;
}
} else
{return and__3546__auto____3753;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__319__auto____3752);
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
var first_obj__3755 = cljs.core.first.call(null,objs);
var sb__3756 = (new goog.string.StringBuffer());

var G__3757__3758 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3757__3758))
{var obj__3759 = cljs.core.first.call(null,G__3757__3758);
var G__3757__3760 = G__3757__3758;

while(true){
if(cljs.core.truth_((obj__3759 === first_obj__3755)))
{} else
{sb__3756.append(" ");
}
var G__3761__3762 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3759,opts));

if(cljs.core.truth_(G__3761__3762))
{var string__3763 = cljs.core.first.call(null,G__3761__3762);
var G__3761__3764 = G__3761__3762;

while(true){
sb__3756.append(string__3763);
var temp__3698__auto____3765 = cljs.core.next.call(null,G__3761__3764);

if(cljs.core.truth_(temp__3698__auto____3765))
{var G__3761__3766 = temp__3698__auto____3765;

{
var G__3769 = cljs.core.first.call(null,G__3761__3766);
var G__3770 = G__3761__3766;
string__3763 = G__3769;
G__3761__3764 = G__3770;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3767 = cljs.core.next.call(null,G__3757__3760);

if(cljs.core.truth_(temp__3698__auto____3767))
{var G__3757__3768 = temp__3698__auto____3767;

{
var G__3771 = cljs.core.first.call(null,G__3757__3768);
var G__3772 = G__3757__3768;
obj__3759 = G__3771;
G__3757__3760 = G__3772;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3756);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3773 = cljs.core.first.call(null,objs);

var G__3774__3775 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3774__3775))
{var obj__3776 = cljs.core.first.call(null,G__3774__3775);
var G__3774__3777 = G__3774__3775;

while(true){
if(cljs.core.truth_((obj__3776 === first_obj__3773)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3778__3779 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3776,opts));

if(cljs.core.truth_(G__3778__3779))
{var string__3780 = cljs.core.first.call(null,G__3778__3779);
var G__3778__3781 = G__3778__3779;

while(true){
cljs.core.string_print.call(null,string__3780);
var temp__3698__auto____3782 = cljs.core.next.call(null,G__3778__3781);

if(cljs.core.truth_(temp__3698__auto____3782))
{var G__3778__3783 = temp__3698__auto____3782;

{
var G__3786 = cljs.core.first.call(null,G__3778__3783);
var G__3787 = G__3778__3783;
string__3780 = G__3786;
G__3778__3781 = G__3787;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3784 = cljs.core.next.call(null,G__3774__3777);

if(cljs.core.truth_(temp__3698__auto____3784))
{var G__3774__3785 = temp__3698__auto____3784;

{
var G__3788 = cljs.core.first.call(null,G__3774__3785);
var G__3789 = G__3774__3785;
obj__3776 = G__3788;
G__3774__3777 = G__3789;
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
pr_str.cljs$lang$applyTo = (function (arglist__3790){
var objs = cljs.core.seq( arglist__3790 );;
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
pr.cljs$lang$applyTo = (function (arglist__3791){
var objs = cljs.core.seq( arglist__3791 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3792){
var objs = cljs.core.seq( arglist__3792 );;
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
println.cljs$lang$applyTo = (function (arglist__3793){
var objs = cljs.core.seq( arglist__3793 );;
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
prn.cljs$lang$applyTo = (function (arglist__3794){
var objs = cljs.core.seq( arglist__3794 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3795 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3795,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3796 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3796))
{var nspc__3797 = temp__3698__auto____3796;

return cljs.core.str.call(null,nspc__3797,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3798 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3798))
{var nspc__3799 = temp__3698__auto____3798;

return cljs.core.str.call(null,nspc__3799,"/");
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
var pr_pair__3800 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3800,"{",", ","}",opts,coll);
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
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__3801 = this;
var G__3802__3803 = cljs.core.seq.call(null,this__3801.watches);

if(cljs.core.truth_(G__3802__3803))
{var G__3805__3807 = cljs.core.first.call(null,G__3802__3803);
var vec__3806__3808 = G__3805__3807;
var key__3809 = cljs.core.nth.call(null,vec__3806__3808,0,null);
var f__3810 = cljs.core.nth.call(null,vec__3806__3808,1,null);
var G__3802__3811 = G__3802__3803;

var G__3805__3812 = G__3805__3807;
var G__3802__3813 = G__3802__3811;

while(true){
var vec__3814__3815 = G__3805__3812;
var key__3816 = cljs.core.nth.call(null,vec__3814__3815,0,null);
var f__3817 = cljs.core.nth.call(null,vec__3814__3815,1,null);
var G__3802__3818 = G__3802__3813;

f__3817.call(null,key__3816,this$,oldval,newval);
var temp__3698__auto____3819 = cljs.core.next.call(null,G__3802__3818);

if(cljs.core.truth_(temp__3698__auto____3819))
{var G__3802__3820 = temp__3698__auto____3819;

{
var G__3827 = cljs.core.first.call(null,G__3802__3820);
var G__3828 = G__3802__3820;
G__3805__3812 = G__3827;
G__3802__3813 = G__3828;
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
var this__3821 = this;
return this$.watches = cljs.core.assoc.call(null,this__3821.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3822 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3822.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3823 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3823.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3824 = this;
return this__3824.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3825 = this;
return this__3825.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3826 = this;
return (o === other);
});
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
var atom__3835 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3836 = (function() { 
var G__3838__delegate = function (x,p__3829){
var map__3830__3831 = p__3829;
var map__3830__3832 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3830__3831))?cljs.core.apply.call(null,cljs.core.hash_map,map__3830__3831):map__3830__3831);
var validator__3833 = cljs.core.get.call(null,map__3830__3832,"﷐'validator");
var meta__3834 = cljs.core.get.call(null,map__3830__3832,"﷐'meta");

return (new cljs.core.Atom(x,meta__3834,validator__3833,null));
};
var G__3838 = function (x,var_args){
var p__3829 = null;
if (goog.isDef(var_args)) {
  p__3829 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3838__delegate.call(this, x, p__3829);
};
G__3838.cljs$lang$maxFixedArity = 1;
G__3838.cljs$lang$applyTo = (function (arglist__3839){
var x = cljs.core.first(arglist__3839);
var p__3829 = cljs.core.rest(arglist__3839);
return G__3838__delegate.call(this, x, p__3829);
});
return G__3838;
})()
;
atom = function(x,var_args){
var p__3829 = var_args;
switch(arguments.length){
case  1 :
return atom__3835.call(this,x);
default:
return atom__3836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3836.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3840 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3840))
{var validate__3841 = temp__3698__auto____3840;

if(cljs.core.truth_(validate__3841.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__3842 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3842,new_value);
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
var swap_BANG___3843 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3844 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3845 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3846 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3847 = (function() { 
var G__3849__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3849 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3849__delegate.call(this, a, f, x, y, z, more);
};
G__3849.cljs$lang$maxFixedArity = 5;
G__3849.cljs$lang$applyTo = (function (arglist__3850){
var a = cljs.core.first(arglist__3850);
var f = cljs.core.first(cljs.core.next(arglist__3850));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3850)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3850))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3850)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3850)))));
return G__3849__delegate.call(this, a, f, x, y, z, more);
});
return G__3849;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3843.call(this,a,f);
case  3 :
return swap_BANG___3844.call(this,a,f,x);
case  4 :
return swap_BANG___3845.call(this,a,f,x,y);
case  5 :
return swap_BANG___3846.call(this,a,f,x,y,z);
default:
return swap_BANG___3847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3847.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3851){
var iref = cljs.core.first(arglist__3851);
var f = cljs.core.first(cljs.core.next(arglist__3851));
var args = cljs.core.rest(cljs.core.next(arglist__3851));
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
var gensym__3852 = (function (){
return gensym.call(null,"G__");
});
var gensym__3853 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3852.call(this);
case  1 :
return gensym__3853.call(this,prefix_string);
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
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3855 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3855.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3856 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3856.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3856.state,this__3856.f);
}
return cljs.core.deref.call(null,this__3856.state);
});
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
delay.cljs$lang$applyTo = (function (arglist__3857){
var body = cljs.core.seq( arglist__3857 );;
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
var map__3858__3859 = options;
var map__3858__3860 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3858__3859))?cljs.core.apply.call(null,cljs.core.hash_map,map__3858__3859):map__3858__3859);
var keywordize_keys__3861 = cljs.core.get.call(null,map__3858__3860,"﷐'keywordize-keys");
var keyfn__3862 = (cljs.core.truth_(keywordize_keys__3861)?cljs.core.keyword:cljs.core.str);
var f__3868 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__383__auto____3867 = (function iter__3863(s__3864){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3864__3865 = s__3864;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3864__3865)))
{var k__3866 = cljs.core.first.call(null,s__3864__3865);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3862.call(null,k__3866),thisfn.call(null,(x[k__3866]))]),iter__3863.call(null,cljs.core.rest.call(null,s__3864__3865)));
} else
{return null;
}
break;
}
})));
});

return iter__383__auto____3867.call(null,cljs.core.js_keys.call(null,x));
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

return f__3868.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3869){
var x = cljs.core.first(arglist__3869);
var options = cljs.core.rest(arglist__3869);
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
var mem__3870 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3874__delegate = function (args){
var temp__3695__auto____3871 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3870),args);

if(cljs.core.truth_(temp__3695__auto____3871))
{var v__3872 = temp__3695__auto____3871;

return v__3872;
} else
{var ret__3873 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3870,cljs.core.assoc,args,ret__3873);
return ret__3873;
}
};
var G__3874 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3874__delegate.call(this, args);
};
G__3874.cljs$lang$maxFixedArity = 0;
G__3874.cljs$lang$applyTo = (function (arglist__3875){
var args = cljs.core.seq( arglist__3875 );;
return G__3874__delegate.call(this, args);
});
return G__3874;
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
var trampoline__3877 = (function (f){
while(true){
var ret__3876 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3876)))
{{
var G__3880 = ret__3876;
f = G__3880;
continue;
}
} else
{return ret__3876;
}
break;
}
});
var trampoline__3878 = (function() { 
var G__3881__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3881 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3881__delegate.call(this, f, args);
};
G__3881.cljs$lang$maxFixedArity = 1;
G__3881.cljs$lang$applyTo = (function (arglist__3882){
var f = cljs.core.first(arglist__3882);
var args = cljs.core.rest(arglist__3882);
return G__3881__delegate.call(this, f, args);
});
return G__3881;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3877.call(this,f);
default:
return trampoline__3878.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3878.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3883 = (function (){
return rand.call(null,1);
});
var rand__3884 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3883.call(this);
case  1 :
return rand__3884.call(this,n);
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
var k__3886 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3886,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3886,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3895 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3896 = (function (h,child,parent){
var or__3548__auto____3887 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3887))
{return or__3548__auto____3887;
} else
{var or__3548__auto____3888 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3888))
{return or__3548__auto____3888;
} else
{var and__3546__auto____3889 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3889))
{var and__3546__auto____3890 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3890))
{var and__3546__auto____3891 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3891))
{var ret__3892 = true;
var i__3893 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3894 = cljs.core.not.call(null,ret__3892);

if(cljs.core.truth_(or__3548__auto____3894))
{return or__3548__auto____3894;
} else
{return cljs.core._EQ_.call(null,i__3893,cljs.core.count.call(null,parent));
}
})()))
{return ret__3892;
} else
{{
var G__3898 = isa_QMARK_.call(null,h,child.call(null,i__3893),parent.call(null,i__3893));
var G__3899 = (i__3893 + 1);
ret__3892 = G__3898;
i__3893 = G__3899;
continue;
}
}
break;
}
} else
{return and__3546__auto____3891;
}
} else
{return and__3546__auto____3890;
}
} else
{return and__3546__auto____3889;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3895.call(this,h,child);
case  3 :
return isa_QMARK___3896.call(this,h,child,parent);
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
var parents__3900 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3901 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3900.call(this,h);
case  2 :
return parents__3901.call(this,h,tag);
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
var ancestors__3903 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3904 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3903.call(this,h);
case  2 :
return ancestors__3904.call(this,h,tag);
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
var descendants__3906 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3907 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3906.call(this,h);
case  2 :
return descendants__3907.call(this,h,tag);
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
var derive__3917 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3918 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__3912 = "﷐'parents".call(null,h);
var td__3913 = "﷐'descendants".call(null,h);
var ta__3914 = "﷐'ancestors".call(null,h);
var tf__3915 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3916 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3912.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3914.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3914.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3912,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3915.call(null,"﷐'ancestors".call(null,h),tag,td__3913,parent,ta__3914),"﷐'descendants":tf__3915.call(null,"﷐'descendants".call(null,h),parent,ta__3914,tag,td__3913)});
})());

if(cljs.core.truth_(or__3548__auto____3916))
{return or__3548__auto____3916;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3917.call(this,h,tag);
case  3 :
return derive__3918.call(this,h,tag,parent);
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
var underive__3924 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3925 = (function (h,tag,parent){
var parentMap__3920 = "﷐'parents".call(null,h);
var childsParents__3921 = (cljs.core.truth_(parentMap__3920.call(null,tag))?cljs.core.disj.call(null,parentMap__3920.call(null,tag),parent):cljs.core.set([]));
var newParents__3922 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3921))?cljs.core.assoc.call(null,parentMap__3920,tag,childsParents__3921):cljs.core.dissoc.call(null,parentMap__3920,tag));
var deriv_seq__3923 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3909_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3909_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3909_SHARP_),cljs.core.second.call(null,p1__3909_SHARP_)));
}),cljs.core.seq.call(null,newParents__3922)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3920.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3910_SHARP_,p2__3911_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3910_SHARP_,p2__3911_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3923));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3924.call(this,h,tag);
case  3 :
return underive__3925.call(this,h,tag,parent);
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
var xprefs__3927 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3929 = (cljs.core.truth_((function (){var and__3546__auto____3928 = xprefs__3927;

if(cljs.core.truth_(and__3546__auto____3928))
{return xprefs__3927.call(null,y);
} else
{return and__3546__auto____3928;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3929))
{return or__3548__auto____3929;
} else
{var or__3548__auto____3931 = (function (){var ps__3930 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3930) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3930),prefer_table)))
{} else
{}
{
var G__3934 = cljs.core.rest.call(null,ps__3930);
ps__3930 = G__3934;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3931))
{return or__3548__auto____3931;
} else
{var or__3548__auto____3933 = (function (){var ps__3932 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3932) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3932),y,prefer_table)))
{} else
{}
{
var G__3935 = cljs.core.rest.call(null,ps__3932);
ps__3932 = G__3935;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3933))
{return or__3548__auto____3933;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3936 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3936))
{return or__3548__auto____3936;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3945 = cljs.core.reduce.call(null,(function (be,p__3937){
var vec__3938__3939 = p__3937;
var k__3940 = cljs.core.nth.call(null,vec__3938__3939,0,null);
var ___3941 = cljs.core.nth.call(null,vec__3938__3939,1,null);
var e__3942 = vec__3938__3939;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3940)))
{var be2__3944 = (cljs.core.truth_((function (){var or__3548__auto____3943 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3943))
{return or__3548__auto____3943;
} else
{return cljs.core.dominates.call(null,k__3940,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3942:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3944),k__3940,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3940," and ",cljs.core.first.call(null,be2__3944),", and neither is preferred")));
}
return be2__3944;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3945))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3945));
return cljs.core.second.call(null,best_entry__3945);
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
if(cljs.core.truth_((function (){var and__3546__auto____3946 = mf;

if(cljs.core.truth_(and__3546__auto____3946))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3946;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3947 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3947))
{return or__3548__auto____3947;
} else
{var or__3548__auto____3948 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3948))
{return or__3548__auto____3948;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3949 = mf;

if(cljs.core.truth_(and__3546__auto____3949))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3949;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3950 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3950))
{return or__3548__auto____3950;
} else
{var or__3548__auto____3951 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3951))
{return or__3548__auto____3951;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3952 = mf;

if(cljs.core.truth_(and__3546__auto____3952))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3952;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3953 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3953))
{return or__3548__auto____3953;
} else
{var or__3548__auto____3954 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3954))
{return or__3548__auto____3954;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3955 = mf;

if(cljs.core.truth_(and__3546__auto____3955))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3955;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3956 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3956))
{return or__3548__auto____3956;
} else
{var or__3548__auto____3957 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3957))
{return or__3548__auto____3957;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3958 = mf;

if(cljs.core.truth_(and__3546__auto____3958))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3958;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3959 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3959))
{return or__3548__auto____3959;
} else
{var or__3548__auto____3960 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3960))
{return or__3548__auto____3960;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3961 = mf;

if(cljs.core.truth_(and__3546__auto____3961))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3961;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3962 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3962))
{return or__3548__auto____3962;
} else
{var or__3548__auto____3963 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3963))
{return or__3548__auto____3963;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3964 = mf;

if(cljs.core.truth_(and__3546__auto____3964))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3964;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3965 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3965))
{return or__3548__auto____3965;
} else
{var or__3548__auto____3966 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3966))
{return or__3548__auto____3966;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3967 = mf;

if(cljs.core.truth_(and__3546__auto____3967))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3967;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3968 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3968))
{return or__3548__auto____3968;
} else
{var or__3548__auto____3969 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3969))
{return or__3548__auto____3969;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3970 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3971 = cljs.core._get_method.call(null,mf,dispatch_val__3970);

if(cljs.core.truth_(target_fn__3971))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3970)));
}
return cljs.core.apply.call(null,target_fn__3971,args);
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
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3972 = this;
cljs.core.swap_BANG_.call(null,this__3972.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3972.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3972.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3972.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3973 = this;
cljs.core.swap_BANG_.call(null,this__3973.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3973.method_cache,this__3973.method_table,this__3973.cached_hierarchy,this__3973.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3974 = this;
cljs.core.swap_BANG_.call(null,this__3974.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3974.method_cache,this__3974.method_table,this__3974.cached_hierarchy,this__3974.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3975 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3975.cached_hierarchy),cljs.core.deref.call(null,this__3975.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3975.method_cache,this__3975.method_table,this__3975.cached_hierarchy,this__3975.hierarchy);
}
var temp__3695__auto____3976 = cljs.core.deref.call(null,this__3975.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3976))
{var target_fn__3977 = temp__3695__auto____3976;

return target_fn__3977;
} else
{var temp__3695__auto____3978 = cljs.core.find_and_cache_best_method.call(null,this__3975.name,dispatch_val,this__3975.hierarchy,this__3975.method_table,this__3975.prefer_table,this__3975.method_cache,this__3975.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3978))
{var target_fn__3979 = temp__3695__auto____3978;

return target_fn__3979;
} else
{return cljs.core.deref.call(null,this__3975.method_table).call(null,this__3975.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3980 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3980.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3980.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3980.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3980.method_cache,this__3980.method_table,this__3980.cached_hierarchy,this__3980.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3981 = this;
return cljs.core.deref.call(null,this__3981.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3982 = this;
return cljs.core.deref.call(null,this__3982.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3983 = this;
return cljs.core.do_invoke.call(null,mf,this__3983.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3984__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3984 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3984__delegate.call(this, _, args);
};
G__3984.cljs$lang$maxFixedArity = 1;
G__3984.cljs$lang$applyTo = (function (arglist__3985){
var _ = cljs.core.first(arglist__3985);
var args = cljs.core.rest(arglist__3985);
return G__3984__delegate.call(this, _, args);
});
return G__3984;
})()
;
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
