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
var or__3548__auto____2457 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2457))
{return or__3548__auto____2457;
} else
{var or__3548__auto____2458 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2458))
{return or__3548__auto____2458;
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
if(cljs.core.truth_((function (){var and__3546__auto____2459 = coll;

if(cljs.core.truth_(and__3546__auto____2459))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2459;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2460 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2460))
{return or__3548__auto____2460;
} else
{var or__3548__auto____2461 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2461))
{return or__3548__auto____2461;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2462 = coll;

if(cljs.core.truth_(and__3546__auto____2462))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2462;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2463 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2463))
{return or__3548__auto____2463;
} else
{var or__3548__auto____2464 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2464))
{return or__3548__auto____2464;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2465 = coll;

if(cljs.core.truth_(and__3546__auto____2465))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2465;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2466 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2466))
{return or__3548__auto____2466;
} else
{var or__3548__auto____2467 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2467))
{return or__3548__auto____2467;
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
var _nth__2474 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2468 = coll;

if(cljs.core.truth_(and__3546__auto____2468))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2468;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2469 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2469))
{return or__3548__auto____2469;
} else
{var or__3548__auto____2470 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2470))
{return or__3548__auto____2470;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2475 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2471 = coll;

if(cljs.core.truth_(and__3546__auto____2471))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2471;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2472 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2472))
{return or__3548__auto____2472;
} else
{var or__3548__auto____2473 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2473))
{return or__3548__auto____2473;
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
return _nth__2474.call(this,coll,n);
case  3 :
return _nth__2475.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2477 = coll;

if(cljs.core.truth_(and__3546__auto____2477))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2477;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2478 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2478))
{return or__3548__auto____2478;
} else
{var or__3548__auto____2479 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2479))
{return or__3548__auto____2479;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2480 = coll;

if(cljs.core.truth_(and__3546__auto____2480))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2480;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2481 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2481))
{return or__3548__auto____2481;
} else
{var or__3548__auto____2482 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2482))
{return or__3548__auto____2482;
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
var _lookup__2489 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2483 = o;

if(cljs.core.truth_(and__3546__auto____2483))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2483;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2484 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2484))
{return or__3548__auto____2484;
} else
{var or__3548__auto____2485 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2485))
{return or__3548__auto____2485;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2490 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2486 = o;

if(cljs.core.truth_(and__3546__auto____2486))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2486;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2487 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2487))
{return or__3548__auto____2487;
} else
{var or__3548__auto____2488 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2488))
{return or__3548__auto____2488;
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
return _lookup__2489.call(this,o,k);
case  3 :
return _lookup__2490.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2492 = coll;

if(cljs.core.truth_(and__3546__auto____2492))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2492;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2493 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2493))
{return or__3548__auto____2493;
} else
{var or__3548__auto____2494 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2494))
{return or__3548__auto____2494;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2495 = coll;

if(cljs.core.truth_(and__3546__auto____2495))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2495;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2496 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2496))
{return or__3548__auto____2496;
} else
{var or__3548__auto____2497 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2497))
{return or__3548__auto____2497;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2498 = coll;

if(cljs.core.truth_(and__3546__auto____2498))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2498;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2499 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2499))
{return or__3548__auto____2499;
} else
{var or__3548__auto____2500 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2500))
{return or__3548__auto____2500;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2501 = coll;

if(cljs.core.truth_(and__3546__auto____2501))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2501;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2502 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2502))
{return or__3548__auto____2502;
} else
{var or__3548__auto____2503 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2503))
{return or__3548__auto____2503;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2504 = coll;

if(cljs.core.truth_(and__3546__auto____2504))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2504;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2505 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2505))
{return or__3548__auto____2505;
} else
{var or__3548__auto____2506 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2506))
{return or__3548__auto____2506;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2507 = coll;

if(cljs.core.truth_(and__3546__auto____2507))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2507;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2508 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2508))
{return or__3548__auto____2508;
} else
{var or__3548__auto____2509 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2509))
{return or__3548__auto____2509;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2510 = coll;

if(cljs.core.truth_(and__3546__auto____2510))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2510;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2511 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2511))
{return or__3548__auto____2511;
} else
{var or__3548__auto____2512 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2512))
{return or__3548__auto____2512;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2513 = o;

if(cljs.core.truth_(and__3546__auto____2513))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2513;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2514 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2514))
{return or__3548__auto____2514;
} else
{var or__3548__auto____2515 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2515))
{return or__3548__auto____2515;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2516 = o;

if(cljs.core.truth_(and__3546__auto____2516))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2516;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2517 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2517))
{return or__3548__auto____2517;
} else
{var or__3548__auto____2518 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2518))
{return or__3548__auto____2518;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2519 = o;

if(cljs.core.truth_(and__3546__auto____2519))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2519;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2520 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2520))
{return or__3548__auto____2520;
} else
{var or__3548__auto____2521 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2521))
{return or__3548__auto____2521;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2522 = o;

if(cljs.core.truth_(and__3546__auto____2522))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2522;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2523 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2523))
{return or__3548__auto____2523;
} else
{var or__3548__auto____2524 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2524))
{return or__3548__auto____2524;
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
var _reduce__2531 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2525 = coll;

if(cljs.core.truth_(and__3546__auto____2525))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2525;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2526 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2526))
{return or__3548__auto____2526;
} else
{var or__3548__auto____2527 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2527))
{return or__3548__auto____2527;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2532 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2528 = coll;

if(cljs.core.truth_(and__3546__auto____2528))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2528;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2529 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2529))
{return or__3548__auto____2529;
} else
{var or__3548__auto____2530 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2530))
{return or__3548__auto____2530;
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
return _reduce__2531.call(this,coll,f);
case  3 :
return _reduce__2532.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2534 = o;

if(cljs.core.truth_(and__3546__auto____2534))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2534;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2535 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2535))
{return or__3548__auto____2535;
} else
{var or__3548__auto____2536 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2536))
{return or__3548__auto____2536;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2537 = o;

if(cljs.core.truth_(and__3546__auto____2537))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2537;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2538 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2538))
{return or__3548__auto____2538;
} else
{var or__3548__auto____2539 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2539))
{return or__3548__auto____2539;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2540 = o;

if(cljs.core.truth_(and__3546__auto____2540))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2540;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2541 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2541))
{return or__3548__auto____2541;
} else
{var or__3548__auto____2542 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2542))
{return or__3548__auto____2542;
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
if(cljs.core.truth_((function (){var and__3546__auto____2543 = o;

if(cljs.core.truth_(and__3546__auto____2543))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2543;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2544 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2544))
{return or__3548__auto____2544;
} else
{var or__3548__auto____2545 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2545))
{return or__3548__auto____2545;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2546 = d;

if(cljs.core.truth_(and__3546__auto____2546))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2546;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2547 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2547))
{return or__3548__auto____2547;
} else
{var or__3548__auto____2548 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2548))
{return or__3548__auto____2548;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2549 = this$;

if(cljs.core.truth_(and__3546__auto____2549))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2549;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2550 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2550))
{return or__3548__auto____2550;
} else
{var or__3548__auto____2551 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2551))
{return or__3548__auto____2551;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2552 = this$;

if(cljs.core.truth_(and__3546__auto____2552))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2552;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2553 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2553))
{return or__3548__auto____2553;
} else
{var or__3548__auto____2554 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2554))
{return or__3548__auto____2554;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2555 = this$;

if(cljs.core.truth_(and__3546__auto____2555))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2555;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2556 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2556))
{return or__3548__auto____2556;
} else
{var or__3548__auto____2557 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2557))
{return or__3548__auto____2557;
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
var G__2558 = null;
var G__2558__2559 = (function (o,k){
return null;
});
var G__2558__2560 = (function (o,k,not_found){
return not_found;
});
G__2558 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2558__2559.call(this,o,k);
case  3 :
return G__2558__2560.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2558;
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
var G__2562 = null;
var G__2562__2563 = (function (_,f){
return f.call(null);
});
var G__2562__2564 = (function (_,f,start){
return start;
});
G__2562 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2562__2563.call(this,_,f);
case  3 :
return G__2562__2564.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2562;
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
var G__2566 = null;
var G__2566__2567 = (function (_,n){
return null;
});
var G__2566__2568 = (function (_,n,not_found){
return not_found;
});
G__2566 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2566__2567.call(this,_,n);
case  3 :
return G__2566__2568.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2566;
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
var ci_reduce__2576 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2570 = cljs.core._nth.call(null,cicoll,0);
var n__2571 = 1;

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
}
});
var ci_reduce__2577 = (function (cicoll,f,val){
var val__2572 = val;
var n__2573 = 0;

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
var ci_reduce__2578 = (function (cicoll,f,val,idx){
var val__2574 = val;
var n__2575 = idx;

while(true){
if(cljs.core.truth_((n__2575 < cljs.core._count.call(null,cicoll))))
{{
var G__2584 = f.call(null,val__2574,cljs.core._nth.call(null,cicoll,n__2575));
var G__2585 = (n__2575 + 1);
val__2574 = G__2584;
n__2575 = G__2585;
continue;
}
} else
{return val__2574;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2576.call(this,cicoll,f);
case  3 :
return ci_reduce__2577.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2578.call(this,cicoll,f,val,idx);
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
var this__2586 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2599 = null;
var G__2599__2600 = (function (coll,f){
var this__2587 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2587.a[this__2587.i]),(this__2587.i + 1));
});
var G__2599__2601 = (function (coll,f,start){
var this__2588 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2588.i);
});
G__2599 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2599__2600.call(this,coll,f);
case  3 :
return G__2599__2601.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2599;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2589 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2590 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2603 = null;
var G__2603__2604 = (function (coll,n){
var this__2591 = this;
var i__2592 = (n + this__2591.i);

if(cljs.core.truth_((i__2592 < this__2591.a.length)))
{return (this__2591.a[i__2592]);
} else
{return null;
}
});
var G__2603__2605 = (function (coll,n,not_found){
var this__2593 = this;
var i__2594 = (n + this__2593.i);

if(cljs.core.truth_((i__2594 < this__2593.a.length)))
{return (this__2593.a[i__2594]);
} else
{return not_found;
}
});
G__2603 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2603__2604.call(this,coll,n);
case  3 :
return G__2603__2605.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2603;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2595 = this;
return (this__2595.a.length - this__2595.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2596 = this;
return (this__2596.a[this__2596.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2597 = this;
if(cljs.core.truth_(((this__2597.i + 1) < this__2597.a.length)))
{return (new cljs.core.IndexedSeq(this__2597.a,(this__2597.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2598 = this;
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
var G__2607 = null;
var G__2607__2608 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2607__2609 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2607 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2607__2608.call(this,array,f);
case  3 :
return G__2607__2609.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2607;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2611 = null;
var G__2611__2612 = (function (array,k){
return (array[k]);
});
var G__2611__2613 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2611 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2611__2612.call(this,array,k);
case  3 :
return G__2611__2613.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2611;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2615 = null;
var G__2615__2616 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2615__2617 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2615 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2615__2616.call(this,array,n);
case  3 :
return G__2615__2617.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2615;
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
var temp__3698__auto____2619 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2619))
{var s__2620 = temp__3698__auto____2619;

return cljs.core._first.call(null,s__2620);
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
var G__2621 = cljs.core.next.call(null,s);
s = G__2621;
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
var s__2622 = cljs.core.seq.call(null,x);
var n__2623 = 0;

while(true){
if(cljs.core.truth_(s__2622))
{{
var G__2624 = cljs.core.next.call(null,s__2622);
var G__2625 = (n__2623 + 1);
s__2622 = G__2624;
n__2623 = G__2625;
continue;
}
} else
{return n__2623;
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
var conj__2626 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2627 = (function() { 
var G__2629__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2630 = conj.call(null,coll,x);
var G__2631 = cljs.core.first.call(null,xs);
var G__2632 = cljs.core.next.call(null,xs);
coll = G__2630;
x = G__2631;
xs = G__2632;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2629 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2629__delegate.call(this, coll, x, xs);
};
G__2629.cljs$lang$maxFixedArity = 2;
G__2629.cljs$lang$applyTo = (function (arglist__2633){
var coll = cljs.core.first(arglist__2633);
var x = cljs.core.first(cljs.core.next(arglist__2633));
var xs = cljs.core.rest(cljs.core.next(arglist__2633));
return G__2629__delegate.call(this, coll, x, xs);
});
return G__2629;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2626.call(this,coll,x);
default:
return conj__2627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2627.cljs$lang$applyTo;
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
var nth__2634 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__2635 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2634.call(this,coll,n);
case  3 :
return nth__2635.call(this,coll,n,not_found);
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
var get__2637 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2638 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2637.call(this,o,k);
case  3 :
return get__2638.call(this,o,k,not_found);
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
var assoc__2641 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2642 = (function() { 
var G__2644__delegate = function (coll,k,v,kvs){
while(true){
var ret__2640 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2645 = ret__2640;
var G__2646 = cljs.core.first.call(null,kvs);
var G__2647 = cljs.core.second.call(null,kvs);
var G__2648 = cljs.core.nnext.call(null,kvs);
coll = G__2645;
k = G__2646;
v = G__2647;
kvs = G__2648;
continue;
}
} else
{return ret__2640;
}
break;
}
};
var G__2644 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2644__delegate.call(this, coll, k, v, kvs);
};
G__2644.cljs$lang$maxFixedArity = 3;
G__2644.cljs$lang$applyTo = (function (arglist__2649){
var coll = cljs.core.first(arglist__2649);
var k = cljs.core.first(cljs.core.next(arglist__2649));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2649)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2649)));
return G__2644__delegate.call(this, coll, k, v, kvs);
});
return G__2644;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2641.call(this,coll,k,v);
default:
return assoc__2642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2642.cljs$lang$applyTo;
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
var dissoc__2651 = (function (coll){
return coll;
});
var dissoc__2652 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2653 = (function() { 
var G__2655__delegate = function (coll,k,ks){
while(true){
var ret__2650 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2656 = ret__2650;
var G__2657 = cljs.core.first.call(null,ks);
var G__2658 = cljs.core.next.call(null,ks);
coll = G__2656;
k = G__2657;
ks = G__2658;
continue;
}
} else
{return ret__2650;
}
break;
}
};
var G__2655 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2655__delegate.call(this, coll, k, ks);
};
G__2655.cljs$lang$maxFixedArity = 2;
G__2655.cljs$lang$applyTo = (function (arglist__2659){
var coll = cljs.core.first(arglist__2659);
var k = cljs.core.first(cljs.core.next(arglist__2659));
var ks = cljs.core.rest(cljs.core.next(arglist__2659));
return G__2655__delegate.call(this, coll, k, ks);
});
return G__2655;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2651.call(this,coll);
case  2 :
return dissoc__2652.call(this,coll,k);
default:
return dissoc__2653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2653.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__319__auto____2660 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2661 = x__319__auto____2660;

if(cljs.core.truth_(and__3546__auto____2661))
{var and__3546__auto____2662 = x__319__auto____2660.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2662))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2660));
} else
{return and__3546__auto____2662;
}
} else
{return and__3546__auto____2661;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____2660);
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
var disj__2664 = (function (coll){
return coll;
});
var disj__2665 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2666 = (function() { 
var G__2668__delegate = function (coll,k,ks){
while(true){
var ret__2663 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2669 = ret__2663;
var G__2670 = cljs.core.first.call(null,ks);
var G__2671 = cljs.core.next.call(null,ks);
coll = G__2669;
k = G__2670;
ks = G__2671;
continue;
}
} else
{return ret__2663;
}
break;
}
};
var G__2668 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2668__delegate.call(this, coll, k, ks);
};
G__2668.cljs$lang$maxFixedArity = 2;
G__2668.cljs$lang$applyTo = (function (arglist__2672){
var coll = cljs.core.first(arglist__2672);
var k = cljs.core.first(cljs.core.next(arglist__2672));
var ks = cljs.core.rest(cljs.core.next(arglist__2672));
return G__2668__delegate.call(this, coll, k, ks);
});
return G__2668;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2664.call(this,coll);
case  2 :
return disj__2665.call(this,coll,k);
default:
return disj__2666.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2666.cljs$lang$applyTo;
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
{var x__319__auto____2673 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2674 = x__319__auto____2673;

if(cljs.core.truth_(and__3546__auto____2674))
{var and__3546__auto____2675 = x__319__auto____2673.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2675))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2673));
} else
{return and__3546__auto____2675;
}
} else
{return and__3546__auto____2674;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__319__auto____2673);
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
{var x__319__auto____2676 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2677 = x__319__auto____2676;

if(cljs.core.truth_(and__3546__auto____2677))
{var and__3546__auto____2678 = x__319__auto____2676.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2678))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2676));
} else
{return and__3546__auto____2678;
}
} else
{return and__3546__auto____2677;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__319__auto____2676);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__319__auto____2679 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2680 = x__319__auto____2679;

if(cljs.core.truth_(and__3546__auto____2680))
{var and__3546__auto____2681 = x__319__auto____2679.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2681))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2679));
} else
{return and__3546__auto____2681;
}
} else
{return and__3546__auto____2680;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__319__auto____2679);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__319__auto____2682 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2683 = x__319__auto____2682;

if(cljs.core.truth_(and__3546__auto____2683))
{var and__3546__auto____2684 = x__319__auto____2682.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2684))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2682));
} else
{return and__3546__auto____2684;
}
} else
{return and__3546__auto____2683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__319__auto____2682);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__319__auto____2685 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2686 = x__319__auto____2685;

if(cljs.core.truth_(and__3546__auto____2686))
{var and__3546__auto____2687 = x__319__auto____2685.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2687))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2685));
} else
{return and__3546__auto____2687;
}
} else
{return and__3546__auto____2686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__319__auto____2685);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__319__auto____2688 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2689 = x__319__auto____2688;

if(cljs.core.truth_(and__3546__auto____2689))
{var and__3546__auto____2690 = x__319__auto____2688.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2690))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2688));
} else
{return and__3546__auto____2690;
}
} else
{return and__3546__auto____2689;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__319__auto____2688);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__319__auto____2691 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2692 = x__319__auto____2691;

if(cljs.core.truth_(and__3546__auto____2692))
{var and__3546__auto____2693 = x__319__auto____2691.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2693))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2691));
} else
{return and__3546__auto____2693;
}
} else
{return and__3546__auto____2692;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__319__auto____2691);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2694 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2694.push(key);
}));
return keys__2694;
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
{var x__319__auto____2695 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2696 = x__319__auto____2695;

if(cljs.core.truth_(and__3546__auto____2696))
{var and__3546__auto____2697 = x__319__auto____2695.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2697))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____2695));
} else
{return and__3546__auto____2697;
}
} else
{return and__3546__auto____2696;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__319__auto____2695);
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
var and__3546__auto____2698 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2698))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2699 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2699))
{return or__3548__auto____2699;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2698;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2700 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2700))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2700;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2701 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2701))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2701;
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
var and__3546__auto____2702 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2702))
{return (n == n.toFixed());
} else
{return and__3546__auto____2702;
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
if(cljs.core.truth_((function (){var and__3546__auto____2703 = coll;

if(cljs.core.truth_(and__3546__auto____2703))
{var and__3546__auto____2704 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2704))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2704;
}
} else
{return and__3546__auto____2703;
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
var distinct_QMARK___2709 = (function (x){
return true;
});
var distinct_QMARK___2710 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2711 = (function() { 
var G__2713__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2705 = cljs.core.set([y,x]);
var xs__2706 = more;

while(true){
var x__2707 = cljs.core.first.call(null,xs__2706);
var etc__2708 = cljs.core.next.call(null,xs__2706);

if(cljs.core.truth_(xs__2706))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2705,x__2707)))
{return false;
} else
{{
var G__2714 = cljs.core.conj.call(null,s__2705,x__2707);
var G__2715 = etc__2708;
s__2705 = G__2714;
xs__2706 = G__2715;
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
var G__2713 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2713__delegate.call(this, x, y, more);
};
G__2713.cljs$lang$maxFixedArity = 2;
G__2713.cljs$lang$applyTo = (function (arglist__2716){
var x = cljs.core.first(arglist__2716);
var y = cljs.core.first(cljs.core.next(arglist__2716));
var more = cljs.core.rest(cljs.core.next(arglist__2716));
return G__2713__delegate.call(this, x, y, more);
});
return G__2713;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2709.call(this,x);
case  2 :
return distinct_QMARK___2710.call(this,x,y);
default:
return distinct_QMARK___2711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2711.cljs$lang$applyTo;
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
var r__2717 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2717)))
{return r__2717;
} else
{if(cljs.core.truth_(r__2717))
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
var sort__2719 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2720 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2718 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2718,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2718);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2719.call(this,comp);
case  2 :
return sort__2720.call(this,comp,coll);
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
var sort_by__2722 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2723 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2722.call(this,keyfn,comp);
case  3 :
return sort_by__2723.call(this,keyfn,comp,coll);
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
var reduce__2725 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2726 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2725.call(this,f,val);
case  3 :
return reduce__2726.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2732 = (function (f,coll){
var temp__3695__auto____2728 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2728))
{var s__2729 = temp__3695__auto____2728;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2729),cljs.core.next.call(null,s__2729));
} else
{return f.call(null);
}
});
var seq_reduce__2733 = (function (f,val,coll){
var val__2730 = val;
var coll__2731 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2731))
{{
var G__2735 = f.call(null,val__2730,cljs.core.first.call(null,coll__2731));
var G__2736 = cljs.core.next.call(null,coll__2731);
val__2730 = G__2735;
coll__2731 = G__2736;
continue;
}
} else
{return val__2730;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2732.call(this,f,val);
case  3 :
return seq_reduce__2733.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2737 = null;
var G__2737__2738 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2737__2739 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2737 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2737__2738.call(this,coll,f);
case  3 :
return G__2737__2739.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2737;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2741 = (function (){
return 0;
});
var _PLUS___2742 = (function (x){
return x;
});
var _PLUS___2743 = (function (x,y){
return (x + y);
});
var _PLUS___2744 = (function() { 
var G__2746__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2746 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2746__delegate.call(this, x, y, more);
};
G__2746.cljs$lang$maxFixedArity = 2;
G__2746.cljs$lang$applyTo = (function (arglist__2747){
var x = cljs.core.first(arglist__2747);
var y = cljs.core.first(cljs.core.next(arglist__2747));
var more = cljs.core.rest(cljs.core.next(arglist__2747));
return G__2746__delegate.call(this, x, y, more);
});
return G__2746;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2741.call(this);
case  1 :
return _PLUS___2742.call(this,x);
case  2 :
return _PLUS___2743.call(this,x,y);
default:
return _PLUS___2744.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2744.cljs$lang$applyTo;
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
var ___2748 = (function (x){
return (- x);
});
var ___2749 = (function (x,y){
return (x - y);
});
var ___2750 = (function() { 
var G__2752__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2752 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2752__delegate.call(this, x, y, more);
};
G__2752.cljs$lang$maxFixedArity = 2;
G__2752.cljs$lang$applyTo = (function (arglist__2753){
var x = cljs.core.first(arglist__2753);
var y = cljs.core.first(cljs.core.next(arglist__2753));
var more = cljs.core.rest(cljs.core.next(arglist__2753));
return G__2752__delegate.call(this, x, y, more);
});
return G__2752;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2748.call(this,x);
case  2 :
return ___2749.call(this,x,y);
default:
return ___2750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2750.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2754 = (function (){
return 1;
});
var _STAR___2755 = (function (x){
return x;
});
var _STAR___2756 = (function (x,y){
return (x * y);
});
var _STAR___2757 = (function() { 
var G__2759__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2759 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2759__delegate.call(this, x, y, more);
};
G__2759.cljs$lang$maxFixedArity = 2;
G__2759.cljs$lang$applyTo = (function (arglist__2760){
var x = cljs.core.first(arglist__2760);
var y = cljs.core.first(cljs.core.next(arglist__2760));
var more = cljs.core.rest(cljs.core.next(arglist__2760));
return G__2759__delegate.call(this, x, y, more);
});
return G__2759;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2754.call(this);
case  1 :
return _STAR___2755.call(this,x);
case  2 :
return _STAR___2756.call(this,x,y);
default:
return _STAR___2757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2757.cljs$lang$applyTo;
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
var _SLASH___2761 = (function (x){
return (1 / x);
});
var _SLASH___2762 = (function (x,y){
return (x / y);
});
var _SLASH___2763 = (function() { 
var G__2765__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2765 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2765__delegate.call(this, x, y, more);
};
G__2765.cljs$lang$maxFixedArity = 2;
G__2765.cljs$lang$applyTo = (function (arglist__2766){
var x = cljs.core.first(arglist__2766);
var y = cljs.core.first(cljs.core.next(arglist__2766));
var more = cljs.core.rest(cljs.core.next(arglist__2766));
return G__2765__delegate.call(this, x, y, more);
});
return G__2765;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2761.call(this,x);
case  2 :
return _SLASH___2762.call(this,x,y);
default:
return _SLASH___2763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2763.cljs$lang$applyTo;
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
var _LT___2767 = (function (x){
return true;
});
var _LT___2768 = (function (x,y){
return (x < y);
});
var _LT___2769 = (function() { 
var G__2771__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2772 = y;
var G__2773 = cljs.core.first.call(null,more);
var G__2774 = cljs.core.next.call(null,more);
x = G__2772;
y = G__2773;
more = G__2774;
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
var G__2771 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2771__delegate.call(this, x, y, more);
};
G__2771.cljs$lang$maxFixedArity = 2;
G__2771.cljs$lang$applyTo = (function (arglist__2775){
var x = cljs.core.first(arglist__2775);
var y = cljs.core.first(cljs.core.next(arglist__2775));
var more = cljs.core.rest(cljs.core.next(arglist__2775));
return G__2771__delegate.call(this, x, y, more);
});
return G__2771;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2767.call(this,x);
case  2 :
return _LT___2768.call(this,x,y);
default:
return _LT___2769.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2769.cljs$lang$applyTo;
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
var _LT__EQ___2776 = (function (x){
return true;
});
var _LT__EQ___2777 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2778 = (function() { 
var G__2780__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2781 = y;
var G__2782 = cljs.core.first.call(null,more);
var G__2783 = cljs.core.next.call(null,more);
x = G__2781;
y = G__2782;
more = G__2783;
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
var G__2780 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2780__delegate.call(this, x, y, more);
};
G__2780.cljs$lang$maxFixedArity = 2;
G__2780.cljs$lang$applyTo = (function (arglist__2784){
var x = cljs.core.first(arglist__2784);
var y = cljs.core.first(cljs.core.next(arglist__2784));
var more = cljs.core.rest(cljs.core.next(arglist__2784));
return G__2780__delegate.call(this, x, y, more);
});
return G__2780;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2776.call(this,x);
case  2 :
return _LT__EQ___2777.call(this,x,y);
default:
return _LT__EQ___2778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2778.cljs$lang$applyTo;
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
var _GT___2785 = (function (x){
return true;
});
var _GT___2786 = (function (x,y){
return (x > y);
});
var _GT___2787 = (function() { 
var G__2789__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2790 = y;
var G__2791 = cljs.core.first.call(null,more);
var G__2792 = cljs.core.next.call(null,more);
x = G__2790;
y = G__2791;
more = G__2792;
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
var G__2789 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2789__delegate.call(this, x, y, more);
};
G__2789.cljs$lang$maxFixedArity = 2;
G__2789.cljs$lang$applyTo = (function (arglist__2793){
var x = cljs.core.first(arglist__2793);
var y = cljs.core.first(cljs.core.next(arglist__2793));
var more = cljs.core.rest(cljs.core.next(arglist__2793));
return G__2789__delegate.call(this, x, y, more);
});
return G__2789;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2785.call(this,x);
case  2 :
return _GT___2786.call(this,x,y);
default:
return _GT___2787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2787.cljs$lang$applyTo;
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
var _GT__EQ___2794 = (function (x){
return true;
});
var _GT__EQ___2795 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2796 = (function() { 
var G__2798__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2799 = y;
var G__2800 = cljs.core.first.call(null,more);
var G__2801 = cljs.core.next.call(null,more);
x = G__2799;
y = G__2800;
more = G__2801;
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
var G__2798 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2798__delegate.call(this, x, y, more);
};
G__2798.cljs$lang$maxFixedArity = 2;
G__2798.cljs$lang$applyTo = (function (arglist__2802){
var x = cljs.core.first(arglist__2802);
var y = cljs.core.first(cljs.core.next(arglist__2802));
var more = cljs.core.rest(cljs.core.next(arglist__2802));
return G__2798__delegate.call(this, x, y, more);
});
return G__2798;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2794.call(this,x);
case  2 :
return _GT__EQ___2795.call(this,x,y);
default:
return _GT__EQ___2796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2796.cljs$lang$applyTo;
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
var max__2803 = (function (x){
return x;
});
var max__2804 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2805 = (function() { 
var G__2807__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2807 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2807__delegate.call(this, x, y, more);
};
G__2807.cljs$lang$maxFixedArity = 2;
G__2807.cljs$lang$applyTo = (function (arglist__2808){
var x = cljs.core.first(arglist__2808);
var y = cljs.core.first(cljs.core.next(arglist__2808));
var more = cljs.core.rest(cljs.core.next(arglist__2808));
return G__2807__delegate.call(this, x, y, more);
});
return G__2807;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2803.call(this,x);
case  2 :
return max__2804.call(this,x,y);
default:
return max__2805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2805.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2809 = (function (x){
return x;
});
var min__2810 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2811 = (function() { 
var G__2813__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2813 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2813__delegate.call(this, x, y, more);
};
G__2813.cljs$lang$maxFixedArity = 2;
G__2813.cljs$lang$applyTo = (function (arglist__2814){
var x = cljs.core.first(arglist__2814);
var y = cljs.core.first(cljs.core.next(arglist__2814));
var more = cljs.core.rest(cljs.core.next(arglist__2814));
return G__2813__delegate.call(this, x, y, more);
});
return G__2813;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2809.call(this,x);
case  2 :
return min__2810.call(this,x,y);
default:
return min__2811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2811.cljs$lang$applyTo;
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
var rem__2815 = (n % d);

return cljs.core.fix.call(null,((n - rem__2815) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2816 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2816));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2817 = (function (){
return Math.random.call(null);
});
var rand__2818 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2817.call(this);
case  1 :
return rand__2818.call(this,n);
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
var _EQ__EQ___2820 = (function (x){
return true;
});
var _EQ__EQ___2821 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2822 = (function() { 
var G__2824__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2825 = y;
var G__2826 = cljs.core.first.call(null,more);
var G__2827 = cljs.core.next.call(null,more);
x = G__2825;
y = G__2826;
more = G__2827;
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
var G__2824 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2824__delegate.call(this, x, y, more);
};
G__2824.cljs$lang$maxFixedArity = 2;
G__2824.cljs$lang$applyTo = (function (arglist__2828){
var x = cljs.core.first(arglist__2828);
var y = cljs.core.first(cljs.core.next(arglist__2828));
var more = cljs.core.rest(cljs.core.next(arglist__2828));
return G__2824__delegate.call(this, x, y, more);
});
return G__2824;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2820.call(this,x);
case  2 :
return _EQ__EQ___2821.call(this,x,y);
default:
return _EQ__EQ___2822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2822.cljs$lang$applyTo;
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
var n__2829 = n;
var xs__2830 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2831 = xs__2830;

if(cljs.core.truth_(and__3546__auto____2831))
{return (n__2829 > 0);
} else
{return and__3546__auto____2831;
}
})()))
{{
var G__2832 = (n__2829 - 1);
var G__2833 = cljs.core.next.call(null,xs__2830);
n__2829 = G__2832;
xs__2830 = G__2833;
continue;
}
} else
{return xs__2830;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2838 = null;
var G__2838__2839 = (function (coll,n){
var temp__3695__auto____2834 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2834))
{var xs__2835 = temp__3695__auto____2834;

return cljs.core.first.call(null,xs__2835);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2838__2840 = (function (coll,n,not_found){
var temp__3695__auto____2836 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2836))
{var xs__2837 = temp__3695__auto____2836;

return cljs.core.first.call(null,xs__2837);
} else
{return not_found;
}
});
G__2838 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2838__2839.call(this,coll,n);
case  3 :
return G__2838__2840.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2838;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2842 = (function (){
return "";
});
var str_STAR___2843 = (function (x){
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
var str_STAR___2844 = (function() { 
var G__2846__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2847 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2848 = cljs.core.next.call(null,more);
sb = G__2847;
more = G__2848;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2846 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2846__delegate.call(this, x, ys);
};
G__2846.cljs$lang$maxFixedArity = 1;
G__2846.cljs$lang$applyTo = (function (arglist__2849){
var x = cljs.core.first(arglist__2849);
var ys = cljs.core.rest(arglist__2849);
return G__2846__delegate.call(this, x, ys);
});
return G__2846;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2842.call(this);
case  1 :
return str_STAR___2843.call(this,x);
default:
return str_STAR___2844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2844.cljs$lang$applyTo;
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
var str__2850 = (function (){
return "";
});
var str__2851 = (function (x){
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
var str__2852 = (function() { 
var G__2854__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2854 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2854__delegate.call(this, x, ys);
};
G__2854.cljs$lang$maxFixedArity = 1;
G__2854.cljs$lang$applyTo = (function (arglist__2855){
var x = cljs.core.first(arglist__2855);
var ys = cljs.core.rest(arglist__2855);
return G__2854__delegate.call(this, x, ys);
});
return G__2854;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2850.call(this);
case  1 :
return str__2851.call(this,x);
default:
return str__2852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2852.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2856 = (function (s,start){
return s.substring(start);
});
var subs__2857 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2856.call(this,s,start);
case  3 :
return subs__2857.call(this,s,start,end);
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
var symbol__2859 = (function (name){
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
var symbol__2860 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2859.call(this,ns);
case  2 :
return symbol__2860.call(this,ns,name);
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
var keyword__2862 = (function (name){
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
var keyword__2863 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2862.call(this,ns);
case  2 :
return keyword__2863.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2865 = cljs.core.seq.call(null,x);
var ys__2866 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2865)))
{return cljs.core.nil_QMARK_.call(null,ys__2866);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2866)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2865),cljs.core.first.call(null,ys__2866))))
{{
var G__2867 = cljs.core.next.call(null,xs__2865);
var G__2868 = cljs.core.next.call(null,ys__2866);
xs__2865 = G__2867;
ys__2866 = G__2868;
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
return cljs.core.reduce.call(null,(function (p1__2869_SHARP_,p2__2870_SHARP_){
return cljs.core.hash_combine.call(null,p1__2869_SHARP_,cljs.core.hash.call(null,p2__2870_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__2871__2872 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__2871__2872))
{var G__2874__2876 = cljs.core.first.call(null,G__2871__2872);
var vec__2875__2877 = G__2874__2876;
var key_name__2878 = cljs.core.nth.call(null,vec__2875__2877,0,null);
var f__2879 = cljs.core.nth.call(null,vec__2875__2877,1,null);
var G__2871__2880 = G__2871__2872;

var G__2874__2881 = G__2874__2876;
var G__2871__2882 = G__2871__2880;

while(true){
var vec__2883__2884 = G__2874__2881;
var key_name__2885 = cljs.core.nth.call(null,vec__2883__2884,0,null);
var f__2886 = cljs.core.nth.call(null,vec__2883__2884,1,null);
var G__2871__2887 = G__2871__2882;

var str_name__2888 = cljs.core.name.call(null,key_name__2885);

obj[str_name__2888] = f__2886;
var temp__3698__auto____2889 = cljs.core.next.call(null,G__2871__2887);

if(cljs.core.truth_(temp__3698__auto____2889))
{var G__2871__2890 = temp__3698__auto____2889;

{
var G__2891 = cljs.core.first.call(null,G__2871__2890);
var G__2892 = G__2871__2890;
G__2874__2881 = G__2891;
G__2871__2882 = G__2892;
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
var this__2893 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2894 = this;
return (new cljs.core.List(this__2894.meta,o,coll,(this__2894.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2895 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2896 = this;
return this__2896.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2897 = this;
return this__2897.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2898 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2899 = this;
return this__2899.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2900 = this;
return this__2900.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2901 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2902 = this;
return (new cljs.core.List(meta,this__2902.first,this__2902.rest,this__2902.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2903 = this;
return this__2903.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2904 = this;
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
var this__2905 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2906 = this;
return (new cljs.core.List(this__2906.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2907 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2908 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2909 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2910 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2911 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2912 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2913 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2914 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2915 = this;
return this__2915.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2916 = this;
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
list.cljs$lang$applyTo = (function (arglist__2917){
var items = cljs.core.seq( arglist__2917 );;
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
var this__2918 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2919 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2920 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2921 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2921.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2922 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2923 = this;
return this__2923.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2924 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2924.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2924.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2925 = this;
return this__2925.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2926 = this;
return (new cljs.core.Cons(meta,this__2926.first,this__2926.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2927 = null;
var G__2927__2928 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2927__2929 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2927 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2927__2928.call(this,string,f);
case  3 :
return G__2927__2929.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2927;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2931 = null;
var G__2931__2932 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2931__2933 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2931 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2931__2932.call(this,string,k);
case  3 :
return G__2931__2933.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2931;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2935 = null;
var G__2935__2936 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2935__2937 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2935 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2935__2936.call(this,string,n);
case  3 :
return G__2935__2937.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2935;
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
var G__2939 = null;
var G__2939__2940 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2939__2941 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2939 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2939__2940.call(this,_,coll);
case  3 :
return G__2939__2941.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2939;
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
var x__2943 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2943;
} else
{lazy_seq.x = x__2943.call(null);
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
var this__2944 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2945 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2946 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2947 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2947.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2948 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2949 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2950 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2951 = this;
return this__2951.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2952 = this;
return (new cljs.core.LazySeq(meta,this__2952.realized,this__2952.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2953 = cljs.core.array.call(null);

var s__2954 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2954)))
{ary__2953.push(cljs.core.first.call(null,s__2954));
{
var G__2955 = cljs.core.next.call(null,s__2954);
s__2954 = G__2955;
continue;
}
} else
{return ary__2953;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2956 = s;
var i__2957 = n;
var sum__2958 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2959 = (i__2957 > 0);

if(cljs.core.truth_(and__3546__auto____2959))
{return cljs.core.seq.call(null,s__2956);
} else
{return and__3546__auto____2959;
}
})()))
{{
var G__2960 = cljs.core.next.call(null,s__2956);
var G__2961 = (i__2957 - 1);
var G__2962 = (sum__2958 + 1);
s__2956 = G__2960;
i__2957 = G__2961;
sum__2958 = G__2962;
continue;
}
} else
{return sum__2958;
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
var concat__2966 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2967 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2968 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2963 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2963))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2963),concat.call(null,cljs.core.rest.call(null,s__2963),y));
} else
{return y;
}
})));
});
var concat__2969 = (function() { 
var G__2971__delegate = function (x,y,zs){
var cat__2965 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2964 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2964))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2964),cat.call(null,cljs.core.rest.call(null,xys__2964),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2965.call(null,concat.call(null,x,y),zs);
};
var G__2971 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2971__delegate.call(this, x, y, zs);
};
G__2971.cljs$lang$maxFixedArity = 2;
G__2971.cljs$lang$applyTo = (function (arglist__2972){
var x = cljs.core.first(arglist__2972);
var y = cljs.core.first(cljs.core.next(arglist__2972));
var zs = cljs.core.rest(cljs.core.next(arglist__2972));
return G__2971__delegate.call(this, x, y, zs);
});
return G__2971;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2966.call(this);
case  1 :
return concat__2967.call(this,x);
case  2 :
return concat__2968.call(this,x,y);
default:
return concat__2969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2969.cljs$lang$applyTo;
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
var list_STAR___2973 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2974 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2975 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2976 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2977 = (function() { 
var G__2979__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2979 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2979__delegate.call(this, a, b, c, d, more);
};
G__2979.cljs$lang$maxFixedArity = 4;
G__2979.cljs$lang$applyTo = (function (arglist__2980){
var a = cljs.core.first(arglist__2980);
var b = cljs.core.first(cljs.core.next(arglist__2980));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2980)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2980))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2980))));
return G__2979__delegate.call(this, a, b, c, d, more);
});
return G__2979;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2973.call(this,a);
case  2 :
return list_STAR___2974.call(this,a,b);
case  3 :
return list_STAR___2975.call(this,a,b,c);
case  4 :
return list_STAR___2976.call(this,a,b,c,d);
default:
return list_STAR___2977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2977.cljs$lang$applyTo;
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
var apply__2990 = (function (f,args){
var fixed_arity__2981 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__2981 + 1)) <= fixed_arity__2981)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2991 = (function (f,x,args){
var arglist__2982 = cljs.core.list_STAR_.call(null,x,args);
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
var apply__2992 = (function (f,x,y,args){
var arglist__2984 = cljs.core.list_STAR_.call(null,x,y,args);
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
var apply__2993 = (function (f,x,y,z,args){
var arglist__2986 = cljs.core.list_STAR_.call(null,x,y,z,args);
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
});
var apply__2994 = (function() { 
var G__2996__delegate = function (f,a,b,c,d,args){
var arglist__2988 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2989 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__2988,fixed_arity__2989) <= fixed_arity__2989)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2988));
} else
{return f.cljs$lang$applyTo(arglist__2988);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2988));
}
};
var G__2996 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2996__delegate.call(this, f, a, b, c, d, args);
};
G__2996.cljs$lang$maxFixedArity = 5;
G__2996.cljs$lang$applyTo = (function (arglist__2997){
var f = cljs.core.first(arglist__2997);
var a = cljs.core.first(cljs.core.next(arglist__2997));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2997)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2997))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2997)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2997)))));
return G__2996__delegate.call(this, f, a, b, c, d, args);
});
return G__2996;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2990.call(this,f,a);
case  3 :
return apply__2991.call(this,f,a,b);
case  4 :
return apply__2992.call(this,f,a,b,c);
case  5 :
return apply__2993.call(this,f,a,b,c,d);
default:
return apply__2994.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2994.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2998){
var obj = cljs.core.first(arglist__2998);
var f = cljs.core.first(cljs.core.next(arglist__2998));
var args = cljs.core.rest(cljs.core.next(arglist__2998));
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
var not_EQ___2999 = (function (x){
return false;
});
var not_EQ___3000 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3001 = (function() { 
var G__3003__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3003 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3003__delegate.call(this, x, y, more);
};
G__3003.cljs$lang$maxFixedArity = 2;
G__3003.cljs$lang$applyTo = (function (arglist__3004){
var x = cljs.core.first(arglist__3004);
var y = cljs.core.first(cljs.core.next(arglist__3004));
var more = cljs.core.rest(cljs.core.next(arglist__3004));
return G__3003__delegate.call(this, x, y, more);
});
return G__3003;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2999.call(this,x);
case  2 :
return not_EQ___3000.call(this,x,y);
default:
return not_EQ___3001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3001.cljs$lang$applyTo;
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
var G__3005 = pred;
var G__3006 = cljs.core.next.call(null,coll);
pred = G__3005;
coll = G__3006;
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
{var or__3548__auto____3007 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3007))
{return or__3548__auto____3007;
} else
{{
var G__3008 = pred;
var G__3009 = cljs.core.next.call(null,coll);
pred = G__3008;
coll = G__3009;
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
var G__3010 = null;
var G__3010__3011 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3010__3012 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3010__3013 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3010__3014 = (function() { 
var G__3016__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3016 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3016__delegate.call(this, x, y, zs);
};
G__3016.cljs$lang$maxFixedArity = 2;
G__3016.cljs$lang$applyTo = (function (arglist__3017){
var x = cljs.core.first(arglist__3017);
var y = cljs.core.first(cljs.core.next(arglist__3017));
var zs = cljs.core.rest(cljs.core.next(arglist__3017));
return G__3016__delegate.call(this, x, y, zs);
});
return G__3016;
})()
;
G__3010 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3010__3011.call(this);
case  1 :
return G__3010__3012.call(this,x);
case  2 :
return G__3010__3013.call(this,x,y);
default:
return G__3010__3014.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3010.cljs$lang$maxFixedArity = 2;
G__3010.cljs$lang$applyTo = G__3010__3014.cljs$lang$applyTo;
return G__3010;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3018__delegate = function (args){
return x;
};
var G__3018 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3018__delegate.call(this, args);
};
G__3018.cljs$lang$maxFixedArity = 0;
G__3018.cljs$lang$applyTo = (function (arglist__3019){
var args = cljs.core.seq( arglist__3019 );;
return G__3018__delegate.call(this, args);
});
return G__3018;
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
var comp__3023 = (function (){
return cljs.core.identity;
});
var comp__3024 = (function (f){
return f;
});
var comp__3025 = (function (f,g){
return (function() {
var G__3029 = null;
var G__3029__3030 = (function (){
return f.call(null,g.call(null));
});
var G__3029__3031 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3029__3032 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3029__3033 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3029__3034 = (function() { 
var G__3036__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3036 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3036__delegate.call(this, x, y, z, args);
};
G__3036.cljs$lang$maxFixedArity = 3;
G__3036.cljs$lang$applyTo = (function (arglist__3037){
var x = cljs.core.first(arglist__3037);
var y = cljs.core.first(cljs.core.next(arglist__3037));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3037)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3037)));
return G__3036__delegate.call(this, x, y, z, args);
});
return G__3036;
})()
;
G__3029 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3029__3030.call(this);
case  1 :
return G__3029__3031.call(this,x);
case  2 :
return G__3029__3032.call(this,x,y);
case  3 :
return G__3029__3033.call(this,x,y,z);
default:
return G__3029__3034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3029.cljs$lang$maxFixedArity = 3;
G__3029.cljs$lang$applyTo = G__3029__3034.cljs$lang$applyTo;
return G__3029;
})()
});
var comp__3026 = (function (f,g,h){
return (function() {
var G__3038 = null;
var G__3038__3039 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3038__3040 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3038__3041 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3038__3042 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3038__3043 = (function() { 
var G__3045__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3045 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3045__delegate.call(this, x, y, z, args);
};
G__3045.cljs$lang$maxFixedArity = 3;
G__3045.cljs$lang$applyTo = (function (arglist__3046){
var x = cljs.core.first(arglist__3046);
var y = cljs.core.first(cljs.core.next(arglist__3046));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3046)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3046)));
return G__3045__delegate.call(this, x, y, z, args);
});
return G__3045;
})()
;
G__3038 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3038__3039.call(this);
case  1 :
return G__3038__3040.call(this,x);
case  2 :
return G__3038__3041.call(this,x,y);
case  3 :
return G__3038__3042.call(this,x,y,z);
default:
return G__3038__3043.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3038.cljs$lang$maxFixedArity = 3;
G__3038.cljs$lang$applyTo = G__3038__3043.cljs$lang$applyTo;
return G__3038;
})()
});
var comp__3027 = (function() { 
var G__3047__delegate = function (f1,f2,f3,fs){
var fs__3020 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3048__delegate = function (args){
var ret__3021 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3020),args);
var fs__3022 = cljs.core.next.call(null,fs__3020);

while(true){
if(cljs.core.truth_(fs__3022))
{{
var G__3049 = cljs.core.first.call(null,fs__3022).call(null,ret__3021);
var G__3050 = cljs.core.next.call(null,fs__3022);
ret__3021 = G__3049;
fs__3022 = G__3050;
continue;
}
} else
{return ret__3021;
}
break;
}
};
var G__3048 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3048__delegate.call(this, args);
};
G__3048.cljs$lang$maxFixedArity = 0;
G__3048.cljs$lang$applyTo = (function (arglist__3051){
var args = cljs.core.seq( arglist__3051 );;
return G__3048__delegate.call(this, args);
});
return G__3048;
})()
;
};
var G__3047 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3047__delegate.call(this, f1, f2, f3, fs);
};
G__3047.cljs$lang$maxFixedArity = 3;
G__3047.cljs$lang$applyTo = (function (arglist__3052){
var f1 = cljs.core.first(arglist__3052);
var f2 = cljs.core.first(cljs.core.next(arglist__3052));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3052)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3052)));
return G__3047__delegate.call(this, f1, f2, f3, fs);
});
return G__3047;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3023.call(this);
case  1 :
return comp__3024.call(this,f1);
case  2 :
return comp__3025.call(this,f1,f2);
case  3 :
return comp__3026.call(this,f1,f2,f3);
default:
return comp__3027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3027.cljs$lang$applyTo;
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
var partial__3053 = (function (f,arg1){
return (function() { 
var G__3058__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
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
var partial__3054 = (function (f,arg1,arg2){
return (function() { 
var G__3060__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
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
var partial__3055 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3062__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3062 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3062__delegate.call(this, args);
};
G__3062.cljs$lang$maxFixedArity = 0;
G__3062.cljs$lang$applyTo = (function (arglist__3063){
var args = cljs.core.seq( arglist__3063 );;
return G__3062__delegate.call(this, args);
});
return G__3062;
})()
;
});
var partial__3056 = (function() { 
var G__3064__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3065__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3065 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3065__delegate.call(this, args);
};
G__3065.cljs$lang$maxFixedArity = 0;
G__3065.cljs$lang$applyTo = (function (arglist__3066){
var args = cljs.core.seq( arglist__3066 );;
return G__3065__delegate.call(this, args);
});
return G__3065;
})()
;
};
var G__3064 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3064__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3064.cljs$lang$maxFixedArity = 4;
G__3064.cljs$lang$applyTo = (function (arglist__3067){
var f = cljs.core.first(arglist__3067);
var arg1 = cljs.core.first(cljs.core.next(arglist__3067));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3067)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3067))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3067))));
return G__3064__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3064;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3053.call(this,f,arg1);
case  3 :
return partial__3054.call(this,f,arg1,arg2);
case  4 :
return partial__3055.call(this,f,arg1,arg2,arg3);
default:
return partial__3056.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3056.cljs$lang$applyTo;
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
var fnil__3068 = (function (f,x){
return (function() {
var G__3072 = null;
var G__3072__3073 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3072__3074 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3072__3075 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3072__3076 = (function() { 
var G__3078__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3078 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3078__delegate.call(this, a, b, c, ds);
};
G__3078.cljs$lang$maxFixedArity = 3;
G__3078.cljs$lang$applyTo = (function (arglist__3079){
var a = cljs.core.first(arglist__3079);
var b = cljs.core.first(cljs.core.next(arglist__3079));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3079)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3079)));
return G__3078__delegate.call(this, a, b, c, ds);
});
return G__3078;
})()
;
G__3072 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3072__3073.call(this,a);
case  2 :
return G__3072__3074.call(this,a,b);
case  3 :
return G__3072__3075.call(this,a,b,c);
default:
return G__3072__3076.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3072.cljs$lang$maxFixedArity = 3;
G__3072.cljs$lang$applyTo = G__3072__3076.cljs$lang$applyTo;
return G__3072;
})()
});
var fnil__3069 = (function (f,x,y){
return (function() {
var G__3080 = null;
var G__3080__3081 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3080__3082 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3080__3083 = (function() { 
var G__3085__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3085 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3085__delegate.call(this, a, b, c, ds);
};
G__3085.cljs$lang$maxFixedArity = 3;
G__3085.cljs$lang$applyTo = (function (arglist__3086){
var a = cljs.core.first(arglist__3086);
var b = cljs.core.first(cljs.core.next(arglist__3086));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3086)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3086)));
return G__3085__delegate.call(this, a, b, c, ds);
});
return G__3085;
})()
;
G__3080 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3080__3081.call(this,a,b);
case  3 :
return G__3080__3082.call(this,a,b,c);
default:
return G__3080__3083.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3080.cljs$lang$maxFixedArity = 3;
G__3080.cljs$lang$applyTo = G__3080__3083.cljs$lang$applyTo;
return G__3080;
})()
});
var fnil__3070 = (function (f,x,y,z){
return (function() {
var G__3087 = null;
var G__3087__3088 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3087__3089 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3087__3090 = (function() { 
var G__3092__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3092 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3092__delegate.call(this, a, b, c, ds);
};
G__3092.cljs$lang$maxFixedArity = 3;
G__3092.cljs$lang$applyTo = (function (arglist__3093){
var a = cljs.core.first(arglist__3093);
var b = cljs.core.first(cljs.core.next(arglist__3093));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3093)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3093)));
return G__3092__delegate.call(this, a, b, c, ds);
});
return G__3092;
})()
;
G__3087 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3087__3088.call(this,a,b);
case  3 :
return G__3087__3089.call(this,a,b,c);
default:
return G__3087__3090.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3087.cljs$lang$maxFixedArity = 3;
G__3087.cljs$lang$applyTo = G__3087__3090.cljs$lang$applyTo;
return G__3087;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3068.call(this,f,x);
case  3 :
return fnil__3069.call(this,f,x,y);
case  4 :
return fnil__3070.call(this,f,x,y,z);
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
var mapi__3096 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3094))
{var s__3095 = temp__3698__auto____3094;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3095)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3095)));
} else
{return null;
}
})));
});

return mapi__3096.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3097))
{var s__3098 = temp__3698__auto____3097;

var x__3099 = f.call(null,cljs.core.first.call(null,s__3098));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3099)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3098));
} else
{return cljs.core.cons.call(null,x__3099,keep.call(null,f,cljs.core.rest.call(null,s__3098)));
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
var keepi__3109 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3106 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3106))
{var s__3107 = temp__3698__auto____3106;

var x__3108 = f.call(null,idx,cljs.core.first.call(null,s__3107));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3108)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3107));
} else
{return cljs.core.cons.call(null,x__3108,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3107)));
}
} else
{return null;
}
})));
});

return keepi__3109.call(null,0,coll);
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
var every_pred__3154 = (function (p){
return (function() {
var ep1 = null;
var ep1__3159 = (function (){
return true;
});
var ep1__3160 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3161 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3116 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3116))
{return p.call(null,y);
} else
{return and__3546__auto____3116;
}
})());
});
var ep1__3162 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3117 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3117))
{var and__3546__auto____3118 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3118))
{return p.call(null,z);
} else
{return and__3546__auto____3118;
}
} else
{return and__3546__auto____3117;
}
})());
});
var ep1__3163 = (function() { 
var G__3165__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3119 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3119))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3119;
}
})());
};
var G__3165 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3165__delegate.call(this, x, y, z, args);
};
G__3165.cljs$lang$maxFixedArity = 3;
G__3165.cljs$lang$applyTo = (function (arglist__3166){
var x = cljs.core.first(arglist__3166);
var y = cljs.core.first(cljs.core.next(arglist__3166));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3166)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3166)));
return G__3165__delegate.call(this, x, y, z, args);
});
return G__3165;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3159.call(this);
case  1 :
return ep1__3160.call(this,x);
case  2 :
return ep1__3161.call(this,x,y);
case  3 :
return ep1__3162.call(this,x,y,z);
default:
return ep1__3163.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3163.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3155 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3167 = (function (){
return true;
});
var ep2__3168 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3120 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3120))
{return p2.call(null,x);
} else
{return and__3546__auto____3120;
}
})());
});
var ep2__3169 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3121 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3121))
{var and__3546__auto____3122 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3122))
{var and__3546__auto____3123 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3123))
{return p2.call(null,y);
} else
{return and__3546__auto____3123;
}
} else
{return and__3546__auto____3122;
}
} else
{return and__3546__auto____3121;
}
})());
});
var ep2__3170 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3124 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3124))
{var and__3546__auto____3125 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3125))
{var and__3546__auto____3126 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3126))
{var and__3546__auto____3127 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3127))
{var and__3546__auto____3128 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3128))
{return p2.call(null,z);
} else
{return and__3546__auto____3128;
}
} else
{return and__3546__auto____3127;
}
} else
{return and__3546__auto____3126;
}
} else
{return and__3546__auto____3125;
}
} else
{return and__3546__auto____3124;
}
})());
});
var ep2__3171 = (function() { 
var G__3173__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3129 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3129))
{return cljs.core.every_QMARK_.call(null,(function (p1__3100_SHARP_){
var and__3546__auto____3130 = p1.call(null,p1__3100_SHARP_);

if(cljs.core.truth_(and__3546__auto____3130))
{return p2.call(null,p1__3100_SHARP_);
} else
{return and__3546__auto____3130;
}
}),args);
} else
{return and__3546__auto____3129;
}
})());
};
var G__3173 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3173__delegate.call(this, x, y, z, args);
};
G__3173.cljs$lang$maxFixedArity = 3;
G__3173.cljs$lang$applyTo = (function (arglist__3174){
var x = cljs.core.first(arglist__3174);
var y = cljs.core.first(cljs.core.next(arglist__3174));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3174)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3174)));
return G__3173__delegate.call(this, x, y, z, args);
});
return G__3173;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3167.call(this);
case  1 :
return ep2__3168.call(this,x);
case  2 :
return ep2__3169.call(this,x,y);
case  3 :
return ep2__3170.call(this,x,y,z);
default:
return ep2__3171.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3171.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3156 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3175 = (function (){
return true;
});
var ep3__3176 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3131 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3131))
{var and__3546__auto____3132 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3132))
{return p3.call(null,x);
} else
{return and__3546__auto____3132;
}
} else
{return and__3546__auto____3131;
}
})());
});
var ep3__3177 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3133 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3133))
{var and__3546__auto____3134 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3134))
{var and__3546__auto____3135 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3135))
{var and__3546__auto____3136 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3136))
{var and__3546__auto____3137 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3137))
{return p3.call(null,y);
} else
{return and__3546__auto____3137;
}
} else
{return and__3546__auto____3136;
}
} else
{return and__3546__auto____3135;
}
} else
{return and__3546__auto____3134;
}
} else
{return and__3546__auto____3133;
}
})());
});
var ep3__3178 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3138 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3138))
{var and__3546__auto____3139 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3139))
{var and__3546__auto____3140 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3140))
{var and__3546__auto____3141 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3141))
{var and__3546__auto____3142 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3142))
{var and__3546__auto____3143 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3143))
{var and__3546__auto____3144 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3144))
{var and__3546__auto____3145 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3145))
{return p3.call(null,z);
} else
{return and__3546__auto____3145;
}
} else
{return and__3546__auto____3144;
}
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
})());
});
var ep3__3179 = (function() { 
var G__3181__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3146 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3146))
{return cljs.core.every_QMARK_.call(null,(function (p1__3101_SHARP_){
var and__3546__auto____3147 = p1.call(null,p1__3101_SHARP_);

if(cljs.core.truth_(and__3546__auto____3147))
{var and__3546__auto____3148 = p2.call(null,p1__3101_SHARP_);

if(cljs.core.truth_(and__3546__auto____3148))
{return p3.call(null,p1__3101_SHARP_);
} else
{return and__3546__auto____3148;
}
} else
{return and__3546__auto____3147;
}
}),args);
} else
{return and__3546__auto____3146;
}
})());
};
var G__3181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3181__delegate.call(this, x, y, z, args);
};
G__3181.cljs$lang$maxFixedArity = 3;
G__3181.cljs$lang$applyTo = (function (arglist__3182){
var x = cljs.core.first(arglist__3182);
var y = cljs.core.first(cljs.core.next(arglist__3182));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3182)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3182)));
return G__3181__delegate.call(this, x, y, z, args);
});
return G__3181;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3175.call(this);
case  1 :
return ep3__3176.call(this,x);
case  2 :
return ep3__3177.call(this,x,y);
case  3 :
return ep3__3178.call(this,x,y,z);
default:
return ep3__3179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3179.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3157 = (function() { 
var G__3183__delegate = function (p1,p2,p3,ps){
var ps__3149 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3184 = (function (){
return true;
});
var epn__3185 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3102_SHARP_){
return p1__3102_SHARP_.call(null,x);
}),ps__3149);
});
var epn__3186 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3103_SHARP_){
var and__3546__auto____3150 = p1__3103_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3150))
{return p1__3103_SHARP_.call(null,y);
} else
{return and__3546__auto____3150;
}
}),ps__3149);
});
var epn__3187 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3104_SHARP_){
var and__3546__auto____3151 = p1__3104_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3151))
{var and__3546__auto____3152 = p1__3104_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3152))
{return p1__3104_SHARP_.call(null,z);
} else
{return and__3546__auto____3152;
}
} else
{return and__3546__auto____3151;
}
}),ps__3149);
});
var epn__3188 = (function() { 
var G__3190__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3153 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3153))
{return cljs.core.every_QMARK_.call(null,(function (p1__3105_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3105_SHARP_,args);
}),ps__3149);
} else
{return and__3546__auto____3153;
}
})());
};
var G__3190 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3190__delegate.call(this, x, y, z, args);
};
G__3190.cljs$lang$maxFixedArity = 3;
G__3190.cljs$lang$applyTo = (function (arglist__3191){
var x = cljs.core.first(arglist__3191);
var y = cljs.core.first(cljs.core.next(arglist__3191));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3191)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3191)));
return G__3190__delegate.call(this, x, y, z, args);
});
return G__3190;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3184.call(this);
case  1 :
return epn__3185.call(this,x);
case  2 :
return epn__3186.call(this,x,y);
case  3 :
return epn__3187.call(this,x,y,z);
default:
return epn__3188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3188.cljs$lang$applyTo;
return epn;
})()
};
var G__3183 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3183__delegate.call(this, p1, p2, p3, ps);
};
G__3183.cljs$lang$maxFixedArity = 3;
G__3183.cljs$lang$applyTo = (function (arglist__3192){
var p1 = cljs.core.first(arglist__3192);
var p2 = cljs.core.first(cljs.core.next(arglist__3192));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3192)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3192)));
return G__3183__delegate.call(this, p1, p2, p3, ps);
});
return G__3183;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3154.call(this,p1);
case  2 :
return every_pred__3155.call(this,p1,p2);
case  3 :
return every_pred__3156.call(this,p1,p2,p3);
default:
return every_pred__3157.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3157.cljs$lang$applyTo;
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
var some_fn__3232 = (function (p){
return (function() {
var sp1 = null;
var sp1__3237 = (function (){
return null;
});
var sp1__3238 = (function (x){
return p.call(null,x);
});
var sp1__3239 = (function (x,y){
var or__3548__auto____3194 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3194))
{return or__3548__auto____3194;
} else
{return p.call(null,y);
}
});
var sp1__3240 = (function (x,y,z){
var or__3548__auto____3195 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{return p.call(null,z);
}
}
});
var sp1__3241 = (function() { 
var G__3243__delegate = function (x,y,z,args){
var or__3548__auto____3197 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3197))
{return or__3548__auto____3197;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3243 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3243__delegate.call(this, x, y, z, args);
};
G__3243.cljs$lang$maxFixedArity = 3;
G__3243.cljs$lang$applyTo = (function (arglist__3244){
var x = cljs.core.first(arglist__3244);
var y = cljs.core.first(cljs.core.next(arglist__3244));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3244)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3244)));
return G__3243__delegate.call(this, x, y, z, args);
});
return G__3243;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3237.call(this);
case  1 :
return sp1__3238.call(this,x);
case  2 :
return sp1__3239.call(this,x,y);
case  3 :
return sp1__3240.call(this,x,y,z);
default:
return sp1__3241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3241.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3233 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3245 = (function (){
return null;
});
var sp2__3246 = (function (x){
var or__3548__auto____3198 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{return p2.call(null,x);
}
});
var sp2__3247 = (function (x,y){
var or__3548__auto____3199 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
} else
{var or__3548__auto____3200 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3200))
{return or__3548__auto____3200;
} else
{var or__3548__auto____3201 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3248 = (function (x,y,z){
var or__3548__auto____3202 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{var or__3548__auto____3203 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3203))
{return or__3548__auto____3203;
} else
{var or__3548__auto____3204 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{var or__3548__auto____3205 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{var or__3548__auto____3206 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3206))
{return or__3548__auto____3206;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3249 = (function() { 
var G__3251__delegate = function (x,y,z,args){
var or__3548__auto____3207 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{return cljs.core.some.call(null,(function (p1__3110_SHARP_){
var or__3548__auto____3208 = p1.call(null,p1__3110_SHARP_);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{return p2.call(null,p1__3110_SHARP_);
}
}),args);
}
};
var G__3251 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3251__delegate.call(this, x, y, z, args);
};
G__3251.cljs$lang$maxFixedArity = 3;
G__3251.cljs$lang$applyTo = (function (arglist__3252){
var x = cljs.core.first(arglist__3252);
var y = cljs.core.first(cljs.core.next(arglist__3252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3252)));
return G__3251__delegate.call(this, x, y, z, args);
});
return G__3251;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3245.call(this);
case  1 :
return sp2__3246.call(this,x);
case  2 :
return sp2__3247.call(this,x,y);
case  3 :
return sp2__3248.call(this,x,y,z);
default:
return sp2__3249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3249.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3234 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3253 = (function (){
return null;
});
var sp3__3254 = (function (x){
var or__3548__auto____3209 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3209))
{return or__3548__auto____3209;
} else
{var or__3548__auto____3210 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{return p3.call(null,x);
}
}
});
var sp3__3255 = (function (x,y){
var or__3548__auto____3211 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3211))
{return or__3548__auto____3211;
} else
{var or__3548__auto____3212 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3212))
{return or__3548__auto____3212;
} else
{var or__3548__auto____3213 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3213))
{return or__3548__auto____3213;
} else
{var or__3548__auto____3214 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3214))
{return or__3548__auto____3214;
} else
{var or__3548__auto____3215 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3215))
{return or__3548__auto____3215;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3256 = (function (x,y,z){
var or__3548__auto____3216 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3216))
{return or__3548__auto____3216;
} else
{var or__3548__auto____3217 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3217))
{return or__3548__auto____3217;
} else
{var or__3548__auto____3218 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3218))
{return or__3548__auto____3218;
} else
{var or__3548__auto____3219 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3219))
{return or__3548__auto____3219;
} else
{var or__3548__auto____3220 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3220))
{return or__3548__auto____3220;
} else
{var or__3548__auto____3221 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3221))
{return or__3548__auto____3221;
} else
{var or__3548__auto____3222 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3222))
{return or__3548__auto____3222;
} else
{var or__3548__auto____3223 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3223))
{return or__3548__auto____3223;
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
var sp3__3257 = (function() { 
var G__3259__delegate = function (x,y,z,args){
var or__3548__auto____3224 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3224))
{return or__3548__auto____3224;
} else
{return cljs.core.some.call(null,(function (p1__3111_SHARP_){
var or__3548__auto____3225 = p1.call(null,p1__3111_SHARP_);

if(cljs.core.truth_(or__3548__auto____3225))
{return or__3548__auto____3225;
} else
{var or__3548__auto____3226 = p2.call(null,p1__3111_SHARP_);

if(cljs.core.truth_(or__3548__auto____3226))
{return or__3548__auto____3226;
} else
{return p3.call(null,p1__3111_SHARP_);
}
}
}),args);
}
};
var G__3259 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3259__delegate.call(this, x, y, z, args);
};
G__3259.cljs$lang$maxFixedArity = 3;
G__3259.cljs$lang$applyTo = (function (arglist__3260){
var x = cljs.core.first(arglist__3260);
var y = cljs.core.first(cljs.core.next(arglist__3260));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3260)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3260)));
return G__3259__delegate.call(this, x, y, z, args);
});
return G__3259;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3253.call(this);
case  1 :
return sp3__3254.call(this,x);
case  2 :
return sp3__3255.call(this,x,y);
case  3 :
return sp3__3256.call(this,x,y,z);
default:
return sp3__3257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3257.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3235 = (function() { 
var G__3261__delegate = function (p1,p2,p3,ps){
var ps__3227 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3262 = (function (){
return null;
});
var spn__3263 = (function (x){
return cljs.core.some.call(null,(function (p1__3112_SHARP_){
return p1__3112_SHARP_.call(null,x);
}),ps__3227);
});
var spn__3264 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3113_SHARP_){
var or__3548__auto____3228 = p1__3113_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3228))
{return or__3548__auto____3228;
} else
{return p1__3113_SHARP_.call(null,y);
}
}),ps__3227);
});
var spn__3265 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3114_SHARP_){
var or__3548__auto____3229 = p1__3114_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3229))
{return or__3548__auto____3229;
} else
{var or__3548__auto____3230 = p1__3114_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3230))
{return or__3548__auto____3230;
} else
{return p1__3114_SHARP_.call(null,z);
}
}
}),ps__3227);
});
var spn__3266 = (function() { 
var G__3268__delegate = function (x,y,z,args){
var or__3548__auto____3231 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3231))
{return or__3548__auto____3231;
} else
{return cljs.core.some.call(null,(function (p1__3115_SHARP_){
return cljs.core.some.call(null,p1__3115_SHARP_,args);
}),ps__3227);
}
};
var G__3268 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3268__delegate.call(this, x, y, z, args);
};
G__3268.cljs$lang$maxFixedArity = 3;
G__3268.cljs$lang$applyTo = (function (arglist__3269){
var x = cljs.core.first(arglist__3269);
var y = cljs.core.first(cljs.core.next(arglist__3269));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3269)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3269)));
return G__3268__delegate.call(this, x, y, z, args);
});
return G__3268;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3262.call(this);
case  1 :
return spn__3263.call(this,x);
case  2 :
return spn__3264.call(this,x,y);
case  3 :
return spn__3265.call(this,x,y,z);
default:
return spn__3266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3266.cljs$lang$applyTo;
return spn;
})()
};
var G__3261 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3261__delegate.call(this, p1, p2, p3, ps);
};
G__3261.cljs$lang$maxFixedArity = 3;
G__3261.cljs$lang$applyTo = (function (arglist__3270){
var p1 = cljs.core.first(arglist__3270);
var p2 = cljs.core.first(cljs.core.next(arglist__3270));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3270)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3270)));
return G__3261__delegate.call(this, p1, p2, p3, ps);
});
return G__3261;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3232.call(this,p1);
case  2 :
return some_fn__3233.call(this,p1,p2);
case  3 :
return some_fn__3234.call(this,p1,p2,p3);
default:
return some_fn__3235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3235.cljs$lang$applyTo;
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
var map__3283 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3271 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3271))
{var s__3272 = temp__3698__auto____3271;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3272)),map.call(null,f,cljs.core.rest.call(null,s__3272)));
} else
{return null;
}
})));
});
var map__3284 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3273 = cljs.core.seq.call(null,c1);
var s2__3274 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3275 = s1__3273;

if(cljs.core.truth_(and__3546__auto____3275))
{return s2__3274;
} else
{return and__3546__auto____3275;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3273),cljs.core.first.call(null,s2__3274)),map.call(null,f,cljs.core.rest.call(null,s1__3273),cljs.core.rest.call(null,s2__3274)));
} else
{return null;
}
})));
});
var map__3285 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3276 = cljs.core.seq.call(null,c1);
var s2__3277 = cljs.core.seq.call(null,c2);
var s3__3278 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3279 = s1__3276;

if(cljs.core.truth_(and__3546__auto____3279))
{var and__3546__auto____3280 = s2__3277;

if(cljs.core.truth_(and__3546__auto____3280))
{return s3__3278;
} else
{return and__3546__auto____3280;
}
} else
{return and__3546__auto____3279;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3276),cljs.core.first.call(null,s2__3277),cljs.core.first.call(null,s3__3278)),map.call(null,f,cljs.core.rest.call(null,s1__3276),cljs.core.rest.call(null,s2__3277),cljs.core.rest.call(null,s3__3278)));
} else
{return null;
}
})));
});
var map__3286 = (function() { 
var G__3288__delegate = function (f,c1,c2,c3,colls){
var step__3282 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3281 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3281)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3281),step.call(null,map.call(null,cljs.core.rest,ss__3281)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3193_SHARP_){
return cljs.core.apply.call(null,f,p1__3193_SHARP_);
}),step__3282.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3288 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3288__delegate.call(this, f, c1, c2, c3, colls);
};
G__3288.cljs$lang$maxFixedArity = 4;
G__3288.cljs$lang$applyTo = (function (arglist__3289){
var f = cljs.core.first(arglist__3289);
var c1 = cljs.core.first(cljs.core.next(arglist__3289));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3289)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3289))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3289))));
return G__3288__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3288;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3283.call(this,f,c1);
case  3 :
return map__3284.call(this,f,c1,c2);
case  4 :
return map__3285.call(this,f,c1,c2,c3);
default:
return map__3286.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3286.cljs$lang$applyTo;
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
{var temp__3698__auto____3290 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3290))
{var s__3291 = temp__3698__auto____3290;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3291),take.call(null,(n - 1),cljs.core.rest.call(null,s__3291)));
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
var step__3294 = (function (n,coll){
while(true){
var s__3292 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3293 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3293))
{return s__3292;
} else
{return and__3546__auto____3293;
}
})()))
{{
var G__3295 = (n - 1);
var G__3296 = cljs.core.rest.call(null,s__3292);
n = G__3295;
coll = G__3296;
continue;
}
} else
{return s__3292;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3294.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3297 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3298 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3297.call(this,n);
case  2 :
return drop_last__3298.call(this,n,s);
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
var s__3300 = cljs.core.seq.call(null,coll);
var lead__3301 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3301))
{{
var G__3302 = cljs.core.next.call(null,s__3300);
var G__3303 = cljs.core.next.call(null,lead__3301);
s__3300 = G__3302;
lead__3301 = G__3303;
continue;
}
} else
{return s__3300;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3306 = (function (pred,coll){
while(true){
var s__3304 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3305 = s__3304;

if(cljs.core.truth_(and__3546__auto____3305))
{return pred.call(null,cljs.core.first.call(null,s__3304));
} else
{return and__3546__auto____3305;
}
})()))
{{
var G__3307 = pred;
var G__3308 = cljs.core.rest.call(null,s__3304);
pred = G__3307;
coll = G__3308;
continue;
}
} else
{return s__3304;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3306.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3309 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3309))
{var s__3310 = temp__3698__auto____3309;

return cljs.core.concat.call(null,s__3310,cycle.call(null,s__3310));
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
var repeat__3311 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3312 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3311.call(this,n);
case  2 :
return repeat__3312.call(this,n,x);
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
var repeatedly__3314 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3315 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3314.call(this,n);
case  2 :
return repeatedly__3315.call(this,n,f);
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
var interleave__3321 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3317 = cljs.core.seq.call(null,c1);
var s2__3318 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3319 = s1__3317;

if(cljs.core.truth_(and__3546__auto____3319))
{return s2__3318;
} else
{return and__3546__auto____3319;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3317),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3318),interleave.call(null,cljs.core.rest.call(null,s1__3317),cljs.core.rest.call(null,s2__3318))));
} else
{return null;
}
})));
});
var interleave__3322 = (function() { 
var G__3324__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3320 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3320)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3320),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3320)));
} else
{return null;
}
})));
};
var G__3324 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3324__delegate.call(this, c1, c2, colls);
};
G__3324.cljs$lang$maxFixedArity = 2;
G__3324.cljs$lang$applyTo = (function (arglist__3325){
var c1 = cljs.core.first(arglist__3325);
var c2 = cljs.core.first(cljs.core.next(arglist__3325));
var colls = cljs.core.rest(cljs.core.next(arglist__3325));
return G__3324__delegate.call(this, c1, c2, colls);
});
return G__3324;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3321.call(this,c1,c2);
default:
return interleave__3322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3322.cljs$lang$applyTo;
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
var cat__3328 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3326 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3326))
{var coll__3327 = temp__3695__auto____3326;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3327),cat.call(null,cljs.core.rest.call(null,coll__3327),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3328.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3329 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3330 = (function() { 
var G__3332__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3332 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3332__delegate.call(this, f, coll, colls);
};
G__3332.cljs$lang$maxFixedArity = 2;
G__3332.cljs$lang$applyTo = (function (arglist__3333){
var f = cljs.core.first(arglist__3333);
var coll = cljs.core.first(cljs.core.next(arglist__3333));
var colls = cljs.core.rest(cljs.core.next(arglist__3333));
return G__3332__delegate.call(this, f, coll, colls);
});
return G__3332;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3329.call(this,f,coll);
default:
return mapcat__3330.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3330.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3334 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3334))
{var s__3335 = temp__3698__auto____3334;

var f__3336 = cljs.core.first.call(null,s__3335);
var r__3337 = cljs.core.rest.call(null,s__3335);

if(cljs.core.truth_(pred.call(null,f__3336)))
{return cljs.core.cons.call(null,f__3336,filter.call(null,pred,r__3337));
} else
{return filter.call(null,pred,r__3337);
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
var walk__3339 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3339.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3338_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3338_SHARP_));
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
var partition__3346 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3347 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3340 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3340))
{var s__3341 = temp__3698__auto____3340;

var p__3342 = cljs.core.take.call(null,n,s__3341);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3342))))
{return cljs.core.cons.call(null,p__3342,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3341)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3348 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3343 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3343))
{var s__3344 = temp__3698__auto____3343;

var p__3345 = cljs.core.take.call(null,n,s__3344);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3345))))
{return cljs.core.cons.call(null,p__3345,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3344)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3345,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3346.call(this,n,step);
case  3 :
return partition__3347.call(this,n,step,pad);
case  4 :
return partition__3348.call(this,n,step,pad,coll);
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
var get_in__3354 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3355 = (function (m,ks,not_found){
var sentinel__3350 = cljs.core.lookup_sentinel;
var m__3351 = m;
var ks__3352 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3352))
{var m__3353 = cljs.core.get.call(null,m__3351,cljs.core.first.call(null,ks__3352),sentinel__3350);

if(cljs.core.truth_((sentinel__3350 === m__3353)))
{return not_found;
} else
{{
var G__3357 = sentinel__3350;
var G__3358 = m__3353;
var G__3359 = cljs.core.next.call(null,ks__3352);
sentinel__3350 = G__3357;
m__3351 = G__3358;
ks__3352 = G__3359;
continue;
}
}
} else
{return m__3351;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3354.call(this,m,ks);
case  3 :
return get_in__3355.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3360,v){
var vec__3361__3362 = p__3360;
var k__3363 = cljs.core.nth.call(null,vec__3361__3362,0,null);
var ks__3364 = cljs.core.nthnext.call(null,vec__3361__3362,1);

if(cljs.core.truth_(ks__3364))
{return cljs.core.assoc.call(null,m,k__3363,assoc_in.call(null,cljs.core.get.call(null,m,k__3363),ks__3364,v));
} else
{return cljs.core.assoc.call(null,m,k__3363,v);
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
var update_in__delegate = function (m,p__3365,f,args){
var vec__3366__3367 = p__3365;
var k__3368 = cljs.core.nth.call(null,vec__3366__3367,0,null);
var ks__3369 = cljs.core.nthnext.call(null,vec__3366__3367,1);

if(cljs.core.truth_(ks__3369))
{return cljs.core.assoc.call(null,m,k__3368,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3368),ks__3369,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3368,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3368),args));
}
};
var update_in = function (m,p__3365,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3365, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3370){
var m = cljs.core.first(arglist__3370);
var p__3365 = cljs.core.first(cljs.core.next(arglist__3370));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3370)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3370)));
return update_in__delegate.call(this, m, p__3365, f, args);
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
var this__3371 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3396 = null;
var G__3396__3397 = (function (coll,k){
var this__3372 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3396__3398 = (function (coll,k,not_found){
var this__3373 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3396 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3396__3397.call(this,coll,k);
case  3 :
return G__3396__3398.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3396;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3374 = this;
var new_array__3375 = cljs.core.aclone.call(null,this__3374.array);

(new_array__3375[k] = v);
return (new cljs.core.Vector(this__3374.meta,new_array__3375));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3376 = this;
var new_array__3377 = cljs.core.aclone.call(null,this__3376.array);

new_array__3377.push(o);
return (new cljs.core.Vector(this__3376.meta,new_array__3377));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3400 = null;
var G__3400__3401 = (function (v,f){
var this__3378 = this;
return cljs.core.ci_reduce.call(null,this__3378.array,f);
});
var G__3400__3402 = (function (v,f,start){
var this__3379 = this;
return cljs.core.ci_reduce.call(null,this__3379.array,f,start);
});
G__3400 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3400__3401.call(this,v,f);
case  3 :
return G__3400__3402.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3400;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3380 = this;
if(cljs.core.truth_((this__3380.array.length > 0)))
{var vector_seq__3381 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3380.array.length)))
{return cljs.core.cons.call(null,(this__3380.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3381.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3382 = this;
return this__3382.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3383 = this;
var count__3384 = this__3383.array.length;

if(cljs.core.truth_((count__3384 > 0)))
{return (this__3383.array[(count__3384 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3385 = this;
if(cljs.core.truth_((this__3385.array.length > 0)))
{var new_array__3386 = cljs.core.aclone.call(null,this__3385.array);

new_array__3386.pop();
return (new cljs.core.Vector(this__3385.meta,new_array__3386));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3387 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3388 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3389 = this;
return (new cljs.core.Vector(meta,this__3389.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3390 = this;
return this__3390.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3404 = null;
var G__3404__3405 = (function (coll,n){
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
{return null;
}
});
var G__3404__3406 = (function (coll,n,not_found){
var this__3393 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3394 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3394))
{return (n < this__3393.array.length);
} else
{return and__3546__auto____3394;
}
})()))
{return (this__3393.array[n]);
} else
{return not_found;
}
});
G__3404 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3404__3405.call(this,coll,n);
case  3 :
return G__3404__3406.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3404;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3395 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3395.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3408 = null;
var G__3408__3409 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3408__3410 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3408 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3408__3409.call(this,_,k);
case  3 :
return G__3408__3410.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3408;
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
vector.cljs$lang$applyTo = (function (arglist__3412){
var args = cljs.core.seq( arglist__3412 );;
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
var this__3413 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3433 = null;
var G__3433__3434 = (function (coll,k){
var this__3414 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3433__3435 = (function (coll,k,not_found){
var this__3415 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3433 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3433__3434.call(this,coll,k);
case  3 :
return G__3433__3435.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3433;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__3416 = this;
var v_pos__3417 = (this__3416.start + key);

return (new cljs.core.Subvec(this__3416.meta,cljs.core._assoc.call(null,this__3416.v,v_pos__3417,val),this__3416.start,((this__3416.end > (v_pos__3417 + 1)) ? this__3416.end : (v_pos__3417 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3418 = this;
return (new cljs.core.Subvec(this__3418.meta,cljs.core._assoc_n.call(null,this__3418.v,this__3418.end,o),this__3418.start,(this__3418.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3437 = null;
var G__3437__3438 = (function (coll,f){
var this__3419 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__3437__3439 = (function (coll,f,start){
var this__3420 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__3437 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3437__3438.call(this,coll,f);
case  3 :
return G__3437__3439.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3437;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3421 = this;
var subvec_seq__3422 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__3421.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__3421.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__3422.call(null,this__3421.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3423 = this;
return (this__3423.end - this__3423.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3424 = this;
return cljs.core._nth.call(null,this__3424.v,(this__3424.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3425 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__3425.start,this__3425.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__3425.meta,this__3425.v,this__3425.start,(this__3425.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3426 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3427 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3428 = this;
return (new cljs.core.Subvec(meta,this__3428.v,this__3428.start,this__3428.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3429 = this;
return this__3429.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3441 = null;
var G__3441__3442 = (function (coll,n){
var this__3430 = this;
return cljs.core._nth.call(null,this__3430.v,(this__3430.start + n));
});
var G__3441__3443 = (function (coll,n,not_found){
var this__3431 = this;
return cljs.core._nth.call(null,this__3431.v,(this__3431.start + n),not_found);
});
G__3441 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3441__3442.call(this,coll,n);
case  3 :
return G__3441__3443.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3441;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3432 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3432.meta);
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
var subvec__3445 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__3446 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__3445.call(this,v,start);
case  3 :
return subvec__3446.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;
cljs.core.Subvec.prototype.call = (function() {
var G__3448 = null;
var G__3448__3449 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3448__3450 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3448 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3448__3449.call(this,_,k);
case  3 :
return G__3448__3450.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3448;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3452 = this;
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
var len__3453 = array.length;

var i__3454 = 0;

while(true){
if(cljs.core.truth_((i__3454 < len__3453)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3454]))))
{return i__3454;
} else
{{
var G__3455 = (i__3454 + incr);
i__3454 = G__3455;
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
var obj_map_contains_key_QMARK___3457 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3458 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3456 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3456))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3456;
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
return obj_map_contains_key_QMARK___3457.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3458.call(this,k,strobj,true_val,false_val);
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
var this__3461 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3480 = null;
var G__3480__3481 = (function (coll,k){
var this__3462 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3480__3482 = (function (coll,k,not_found){
var this__3463 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3463.strobj,(this__3463.strobj[k]),not_found);
});
G__3480 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3480__3481.call(this,coll,k);
case  3 :
return G__3480__3482.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3480;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3464 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3465 = goog.object.clone.call(null,this__3464.strobj);
var overwrite_QMARK___3466 = new_strobj__3465.hasOwnProperty(k);

(new_strobj__3465[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3466))
{return (new cljs.core.ObjMap(this__3464.meta,this__3464.keys,new_strobj__3465));
} else
{var new_keys__3467 = cljs.core.aclone.call(null,this__3464.keys);

new_keys__3467.push(k);
return (new cljs.core.ObjMap(this__3464.meta,new_keys__3467,new_strobj__3465));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3464.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3468 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3468.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3469 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3470 = this;
if(cljs.core.truth_((this__3470.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3460_SHARP_){
return cljs.core.vector.call(null,p1__3460_SHARP_,(this__3470.strobj[p1__3460_SHARP_]));
}),this__3470.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3471 = this;
return this__3471.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3472 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3473 = this;
return (new cljs.core.ObjMap(meta,this__3473.keys,this__3473.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3474 = this;
return this__3474.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3475 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3475.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3476 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3477 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3477))
{return this__3476.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3477;
}
})()))
{var new_keys__3478 = cljs.core.aclone.call(null,this__3476.keys);
var new_strobj__3479 = goog.object.clone.call(null,this__3476.strobj);

new_keys__3478.splice(cljs.core.scan_array.call(null,1,k,new_keys__3478),1);
cljs.core.js_delete.call(null,new_strobj__3479,k);
return (new cljs.core.ObjMap(this__3476.meta,new_keys__3478,new_strobj__3479));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3485 = null;
var G__3485__3486 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3485__3487 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3485 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3485__3486.call(this,_,k);
case  3 :
return G__3485__3487.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3485;
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
var this__3489 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3519 = null;
var G__3519__3520 = (function (coll,k){
var this__3490 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3519__3521 = (function (coll,k,not_found){
var this__3491 = this;
var bucket__3492 = (this__3491.hashobj[cljs.core.hash.call(null,k)]);
var i__3493 = (cljs.core.truth_(bucket__3492)?cljs.core.scan_array.call(null,2,k,bucket__3492):null);

if(cljs.core.truth_(i__3493))
{return (bucket__3492[(i__3493 + 1)]);
} else
{return not_found;
}
});
G__3519 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3519__3520.call(this,coll,k);
case  3 :
return G__3519__3521.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3519;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3494 = this;
var h__3495 = cljs.core.hash.call(null,k);
var bucket__3496 = (this__3494.hashobj[h__3495]);

if(cljs.core.truth_(bucket__3496))
{var new_bucket__3497 = cljs.core.aclone.call(null,bucket__3496);
var new_hashobj__3498 = goog.object.clone.call(null,this__3494.hashobj);

(new_hashobj__3498[h__3495] = new_bucket__3497);
var temp__3695__auto____3499 = cljs.core.scan_array.call(null,2,k,new_bucket__3497);

if(cljs.core.truth_(temp__3695__auto____3499))
{var i__3500 = temp__3695__auto____3499;

(new_bucket__3497[(i__3500 + 1)] = v);
return (new cljs.core.HashMap(this__3494.meta,this__3494.count,new_hashobj__3498));
} else
{new_bucket__3497.push(k,v);
return (new cljs.core.HashMap(this__3494.meta,(this__3494.count + 1),new_hashobj__3498));
}
} else
{var new_hashobj__3501 = goog.object.clone.call(null,this__3494.hashobj);

(new_hashobj__3501[h__3495] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3494.meta,(this__3494.count + 1),new_hashobj__3501));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3502 = this;
var bucket__3503 = (this__3502.hashobj[cljs.core.hash.call(null,k)]);
var i__3504 = (cljs.core.truth_(bucket__3503)?cljs.core.scan_array.call(null,2,k,bucket__3503):null);

if(cljs.core.truth_(i__3504))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3505 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3506 = this;
if(cljs.core.truth_((this__3506.count > 0)))
{var hashes__3507 = cljs.core.js_keys.call(null,this__3506.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3484_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3506.hashobj[p1__3484_SHARP_])));
}),hashes__3507);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3508 = this;
return this__3508.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3509 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3510 = this;
return (new cljs.core.HashMap(meta,this__3510.count,this__3510.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3511 = this;
return this__3511.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3512 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3512.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3513 = this;
var h__3514 = cljs.core.hash.call(null,k);
var bucket__3515 = (this__3513.hashobj[h__3514]);
var i__3516 = (cljs.core.truth_(bucket__3515)?cljs.core.scan_array.call(null,2,k,bucket__3515):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3516)))
{return coll;
} else
{var new_hashobj__3517 = goog.object.clone.call(null,this__3513.hashobj);

if(cljs.core.truth_((3 > bucket__3515.length)))
{cljs.core.js_delete.call(null,new_hashobj__3517,h__3514);
} else
{var new_bucket__3518 = cljs.core.aclone.call(null,bucket__3515);

new_bucket__3518.splice(i__3516,2);
(new_hashobj__3517[h__3514] = new_bucket__3518);
}
return (new cljs.core.HashMap(this__3513.meta,(this__3513.count - 1),new_hashobj__3517));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3523 = ks.length;

var i__3524 = 0;
var out__3525 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3524 < len__3523)))
{{
var G__3526 = (i__3524 + 1);
var G__3527 = cljs.core.assoc.call(null,out__3525,(ks[i__3524]),(vs[i__3524]));
i__3524 = G__3526;
out__3525 = G__3527;
continue;
}
} else
{return out__3525;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3528 = null;
var G__3528__3529 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3528__3530 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3528 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3528__3529.call(this,_,k);
case  3 :
return G__3528__3530.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3528;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3532 = cljs.core.seq.call(null,keyvals);
var out__3533 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3532))
{{
var G__3534 = cljs.core.nnext.call(null,in$__3532);
var G__3535 = cljs.core.assoc.call(null,out__3533,cljs.core.first.call(null,in$__3532),cljs.core.second.call(null,in$__3532));
in$__3532 = G__3534;
out__3533 = G__3535;
continue;
}
} else
{return out__3533;
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
hash_map.cljs$lang$applyTo = (function (arglist__3536){
var keyvals = cljs.core.seq( arglist__3536 );;
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
{return cljs.core.reduce.call(null,(function (p1__3537_SHARP_,p2__3538_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3539 = p1__3537_SHARP_;

if(cljs.core.truth_(or__3548__auto____3539))
{return or__3548__auto____3539;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3538_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3540){
var maps = cljs.core.seq( arglist__3540 );;
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
{var merge_entry__3543 = (function (m,e){
var k__3541 = cljs.core.first.call(null,e);
var v__3542 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3541)))
{return cljs.core.assoc.call(null,m,k__3541,f.call(null,cljs.core.get.call(null,m,k__3541),v__3542));
} else
{return cljs.core.assoc.call(null,m,k__3541,v__3542);
}
});
var merge2__3545 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3543,(function (){var or__3548__auto____3544 = m1;

if(cljs.core.truth_(or__3548__auto____3544))
{return or__3548__auto____3544;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3545,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3546){
var f = cljs.core.first(arglist__3546);
var maps = cljs.core.rest(arglist__3546);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3548 = cljs.core.ObjMap.fromObject([],{});
var keys__3549 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3549))
{var key__3550 = cljs.core.first.call(null,keys__3549);
var entry__3551 = cljs.core.get.call(null,map,key__3550,"﷐'user/not-found");

{
var G__3552 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3551,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3548,key__3550,entry__3551):ret__3548);
var G__3553 = cljs.core.next.call(null,keys__3549);
ret__3548 = G__3552;
keys__3549 = G__3553;
continue;
}
} else
{return ret__3548;
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
var this__3554 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3567 = null;
var G__3567__3568 = (function (coll,v){
var this__3555 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3567__3569 = (function (coll,v,not_found){
var this__3556 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3556.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3567 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3567__3568.call(this,coll,v);
case  3 :
return G__3567__3569.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3567;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3557 = this;
return (new cljs.core.Set(this__3557.meta,cljs.core.assoc.call(null,this__3557.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3558 = this;
return cljs.core.keys.call(null,this__3558.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3559 = this;
return (new cljs.core.Set(this__3559.meta,cljs.core.dissoc.call(null,this__3559.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3560 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3561 = this;
var and__3546__auto____3562 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3562))
{var and__3546__auto____3563 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3563))
{return cljs.core.every_QMARK_.call(null,(function (p1__3547_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3547_SHARP_);
}),other);
} else
{return and__3546__auto____3563;
}
} else
{return and__3546__auto____3562;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3564 = this;
return (new cljs.core.Set(meta,this__3564.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3565 = this;
return this__3565.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3566 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3566.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3571 = null;
var G__3571__3572 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3571__3573 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3571 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3571__3572.call(this,_,k);
case  3 :
return G__3571__3573.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3571;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3576 = cljs.core.seq.call(null,coll);
var out__3577 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3576))))
{{
var G__3578 = cljs.core.rest.call(null,in$__3576);
var G__3579 = cljs.core.conj.call(null,out__3577,cljs.core.first.call(null,in$__3576));
in$__3576 = G__3578;
out__3577 = G__3579;
continue;
}
} else
{return out__3577;
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
{var n__3580 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3581 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3581))
{var e__3582 = temp__3695__auto____3581;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3582));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3580,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3575_SHARP_){
var temp__3695__auto____3583 = cljs.core.find.call(null,smap,p1__3575_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3583))
{var e__3584 = temp__3695__auto____3583;

return cljs.core.second.call(null,e__3584);
} else
{return p1__3575_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3592 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3585,seen){
while(true){
var vec__3586__3587 = p__3585;
var f__3588 = cljs.core.nth.call(null,vec__3586__3587,0,null);
var xs__3589 = vec__3586__3587;

var temp__3698__auto____3590 = cljs.core.seq.call(null,xs__3589);

if(cljs.core.truth_(temp__3698__auto____3590))
{var s__3591 = temp__3698__auto____3590;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3588)))
{{
var G__3593 = cljs.core.rest.call(null,s__3591);
var G__3594 = seen;
p__3585 = G__3593;
seen = G__3594;
continue;
}
} else
{return cljs.core.cons.call(null,f__3588,step.call(null,cljs.core.rest.call(null,s__3591),cljs.core.conj.call(null,seen,f__3588)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3592.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3595 = cljs.core.Vector.fromArray([]);
var s__3596 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3596)))
{{
var G__3597 = cljs.core.conj.call(null,ret__3595,cljs.core.first.call(null,s__3596));
var G__3598 = cljs.core.next.call(null,s__3596);
ret__3595 = G__3597;
s__3596 = G__3598;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3595);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3599 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3599))
{return or__3548__auto____3599;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3600 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3600 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3600 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3601 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3601))
{return or__3548__auto____3601;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3602 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3602 > -1)))
{return cljs.core.subs.call(null,x,2,i__3602);
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
var map__3605 = cljs.core.ObjMap.fromObject([],{});
var ks__3606 = cljs.core.seq.call(null,keys);
var vs__3607 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3608 = ks__3606;

if(cljs.core.truth_(and__3546__auto____3608))
{return vs__3607;
} else
{return and__3546__auto____3608;
}
})()))
{{
var G__3609 = cljs.core.assoc.call(null,map__3605,cljs.core.first.call(null,ks__3606),cljs.core.first.call(null,vs__3607));
var G__3610 = cljs.core.next.call(null,ks__3606);
var G__3611 = cljs.core.next.call(null,vs__3607);
map__3605 = G__3609;
ks__3606 = G__3610;
vs__3607 = G__3611;
continue;
}
} else
{return map__3605;
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
var max_key__3614 = (function (k,x){
return x;
});
var max_key__3615 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3616 = (function() { 
var G__3618__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3603_SHARP_,p2__3604_SHARP_){
return max_key.call(null,k,p1__3603_SHARP_,p2__3604_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3618 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3618__delegate.call(this, k, x, y, more);
};
G__3618.cljs$lang$maxFixedArity = 3;
G__3618.cljs$lang$applyTo = (function (arglist__3619){
var k = cljs.core.first(arglist__3619);
var x = cljs.core.first(cljs.core.next(arglist__3619));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3619)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3619)));
return G__3618__delegate.call(this, k, x, y, more);
});
return G__3618;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3614.call(this,k,x);
case  3 :
return max_key__3615.call(this,k,x,y);
default:
return max_key__3616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3616.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3620 = (function (k,x){
return x;
});
var min_key__3621 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3622 = (function() { 
var G__3624__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3612_SHARP_,p2__3613_SHARP_){
return min_key.call(null,k,p1__3612_SHARP_,p2__3613_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3624 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3624__delegate.call(this, k, x, y, more);
};
G__3624.cljs$lang$maxFixedArity = 3;
G__3624.cljs$lang$applyTo = (function (arglist__3625){
var k = cljs.core.first(arglist__3625);
var x = cljs.core.first(cljs.core.next(arglist__3625));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3625)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3625)));
return G__3624__delegate.call(this, k, x, y, more);
});
return G__3624;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3620.call(this,k,x);
case  3 :
return min_key__3621.call(this,k,x,y);
default:
return min_key__3622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3622.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3628 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3629 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3626 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3626))
{var s__3627 = temp__3698__auto____3626;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3627),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3627)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3628.call(this,n,step);
case  3 :
return partition_all__3629.call(this,n,step,coll);
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
var temp__3698__auto____3631 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3631))
{var s__3632 = temp__3698__auto____3631;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3632))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3632),take_while.call(null,pred,cljs.core.rest.call(null,s__3632)));
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
var this__3633 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3634 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3650 = null;
var G__3650__3651 = (function (rng,f){
var this__3635 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3650__3652 = (function (rng,f,s){
var this__3636 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3650 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3650__3651.call(this,rng,f);
case  3 :
return G__3650__3652.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3650;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3637 = this;
var comp__3638 = (cljs.core.truth_((this__3637.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3638.call(null,this__3637.start,this__3637.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3639 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3639.end - this__3639.start) / this__3639.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3640 = this;
return this__3640.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3641 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3641.meta,(this__3641.start + this__3641.step),this__3641.end,this__3641.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3642 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3643 = this;
return (new cljs.core.Range(meta,this__3643.start,this__3643.end,this__3643.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3644 = this;
return this__3644.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3654 = null;
var G__3654__3655 = (function (rng,n){
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
{throw (new Error("Index out of bounds"));
}
}
});
var G__3654__3656 = (function (rng,n,not_found){
var this__3647 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3647.start + (n * this__3647.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3648 = (this__3647.start > this__3647.end);

if(cljs.core.truth_(and__3546__auto____3648))
{return cljs.core._EQ_.call(null,this__3647.step,0);
} else
{return and__3546__auto____3648;
}
})()))
{return this__3647.start;
} else
{return not_found;
}
}
});
G__3654 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3654__3655.call(this,rng,n);
case  3 :
return G__3654__3656.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3654;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3649 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3649.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3658 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3659 = (function (end){
return range.call(null,0,end,1);
});
var range__3660 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3661 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3658.call(this);
case  1 :
return range__3659.call(this,start);
case  2 :
return range__3660.call(this,start,end);
case  3 :
return range__3661.call(this,start,end,step);
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
var temp__3698__auto____3663 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3663))
{var s__3664 = temp__3698__auto____3663;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3664),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3664)));
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
var temp__3698__auto____3666 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3666))
{var s__3667 = temp__3698__auto____3666;

var fst__3668 = cljs.core.first.call(null,s__3667);
var fv__3669 = f.call(null,fst__3668);
var run__3670 = cljs.core.cons.call(null,fst__3668,cljs.core.take_while.call(null,(function (p1__3665_SHARP_){
return cljs.core._EQ_.call(null,fv__3669,f.call(null,p1__3665_SHARP_));
}),cljs.core.next.call(null,s__3667)));

return cljs.core.cons.call(null,run__3670,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3670),s__3667))));
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
var reductions__3685 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3681 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3681))
{var s__3682 = temp__3695__auto____3681;

return reductions.call(null,f,cljs.core.first.call(null,s__3682),cljs.core.rest.call(null,s__3682));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3686 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3683 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3683))
{var s__3684 = temp__3698__auto____3683;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3684)),cljs.core.rest.call(null,s__3684));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3685.call(this,f,init);
case  3 :
return reductions__3686.call(this,f,init,coll);
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
var juxt__3689 = (function (f){
return (function() {
var G__3694 = null;
var G__3694__3695 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3694__3696 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3694__3697 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3694__3698 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3694__3699 = (function() { 
var G__3701__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3701 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3701__delegate.call(this, x, y, z, args);
};
G__3701.cljs$lang$maxFixedArity = 3;
G__3701.cljs$lang$applyTo = (function (arglist__3702){
var x = cljs.core.first(arglist__3702);
var y = cljs.core.first(cljs.core.next(arglist__3702));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3702)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3702)));
return G__3701__delegate.call(this, x, y, z, args);
});
return G__3701;
})()
;
G__3694 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3694__3695.call(this);
case  1 :
return G__3694__3696.call(this,x);
case  2 :
return G__3694__3697.call(this,x,y);
case  3 :
return G__3694__3698.call(this,x,y,z);
default:
return G__3694__3699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3694.cljs$lang$maxFixedArity = 3;
G__3694.cljs$lang$applyTo = G__3694__3699.cljs$lang$applyTo;
return G__3694;
})()
});
var juxt__3690 = (function (f,g){
return (function() {
var G__3703 = null;
var G__3703__3704 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3703__3705 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3703__3706 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3703__3707 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3703__3708 = (function() { 
var G__3710__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3710 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3710__delegate.call(this, x, y, z, args);
};
G__3710.cljs$lang$maxFixedArity = 3;
G__3710.cljs$lang$applyTo = (function (arglist__3711){
var x = cljs.core.first(arglist__3711);
var y = cljs.core.first(cljs.core.next(arglist__3711));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3711)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3711)));
return G__3710__delegate.call(this, x, y, z, args);
});
return G__3710;
})()
;
G__3703 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3703__3704.call(this);
case  1 :
return G__3703__3705.call(this,x);
case  2 :
return G__3703__3706.call(this,x,y);
case  3 :
return G__3703__3707.call(this,x,y,z);
default:
return G__3703__3708.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3703.cljs$lang$maxFixedArity = 3;
G__3703.cljs$lang$applyTo = G__3703__3708.cljs$lang$applyTo;
return G__3703;
})()
});
var juxt__3691 = (function (f,g,h){
return (function() {
var G__3712 = null;
var G__3712__3713 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3712__3714 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3712__3715 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3712__3716 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3712__3717 = (function() { 
var G__3719__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3719 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3719__delegate.call(this, x, y, z, args);
};
G__3719.cljs$lang$maxFixedArity = 3;
G__3719.cljs$lang$applyTo = (function (arglist__3720){
var x = cljs.core.first(arglist__3720);
var y = cljs.core.first(cljs.core.next(arglist__3720));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3720)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3720)));
return G__3719__delegate.call(this, x, y, z, args);
});
return G__3719;
})()
;
G__3712 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3712__3713.call(this);
case  1 :
return G__3712__3714.call(this,x);
case  2 :
return G__3712__3715.call(this,x,y);
case  3 :
return G__3712__3716.call(this,x,y,z);
default:
return G__3712__3717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3712.cljs$lang$maxFixedArity = 3;
G__3712.cljs$lang$applyTo = G__3712__3717.cljs$lang$applyTo;
return G__3712;
})()
});
var juxt__3692 = (function() { 
var G__3721__delegate = function (f,g,h,fs){
var fs__3688 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3722 = null;
var G__3722__3723 = (function (){
return cljs.core.reduce.call(null,(function (p1__3671_SHARP_,p2__3672_SHARP_){
return cljs.core.conj.call(null,p1__3671_SHARP_,p2__3672_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3688);
});
var G__3722__3724 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3673_SHARP_,p2__3674_SHARP_){
return cljs.core.conj.call(null,p1__3673_SHARP_,p2__3674_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3688);
});
var G__3722__3725 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3675_SHARP_,p2__3676_SHARP_){
return cljs.core.conj.call(null,p1__3675_SHARP_,p2__3676_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3688);
});
var G__3722__3726 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3677_SHARP_,p2__3678_SHARP_){
return cljs.core.conj.call(null,p1__3677_SHARP_,p2__3678_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3688);
});
var G__3722__3727 = (function() { 
var G__3729__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3679_SHARP_,p2__3680_SHARP_){
return cljs.core.conj.call(null,p1__3679_SHARP_,cljs.core.apply.call(null,p2__3680_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3688);
};
var G__3729 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3729__delegate.call(this, x, y, z, args);
};
G__3729.cljs$lang$maxFixedArity = 3;
G__3729.cljs$lang$applyTo = (function (arglist__3730){
var x = cljs.core.first(arglist__3730);
var y = cljs.core.first(cljs.core.next(arglist__3730));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3730)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3730)));
return G__3729__delegate.call(this, x, y, z, args);
});
return G__3729;
})()
;
G__3722 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3722__3723.call(this);
case  1 :
return G__3722__3724.call(this,x);
case  2 :
return G__3722__3725.call(this,x,y);
case  3 :
return G__3722__3726.call(this,x,y,z);
default:
return G__3722__3727.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3722.cljs$lang$maxFixedArity = 3;
G__3722.cljs$lang$applyTo = G__3722__3727.cljs$lang$applyTo;
return G__3722;
})()
};
var G__3721 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3721__delegate.call(this, f, g, h, fs);
};
G__3721.cljs$lang$maxFixedArity = 3;
G__3721.cljs$lang$applyTo = (function (arglist__3731){
var f = cljs.core.first(arglist__3731);
var g = cljs.core.first(cljs.core.next(arglist__3731));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3731)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3731)));
return G__3721__delegate.call(this, f, g, h, fs);
});
return G__3721;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3689.call(this,f);
case  2 :
return juxt__3690.call(this,f,g);
case  3 :
return juxt__3691.call(this,f,g,h);
default:
return juxt__3692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3692.cljs$lang$applyTo;
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
var dorun__3733 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3736 = cljs.core.next.call(null,coll);
coll = G__3736;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3734 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3732 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3732))
{return (n > 0);
} else
{return and__3546__auto____3732;
}
})()))
{{
var G__3737 = (n - 1);
var G__3738 = cljs.core.next.call(null,coll);
n = G__3737;
coll = G__3738;
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
return dorun__3733.call(this,n);
case  2 :
return dorun__3734.call(this,n,coll);
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
var doall__3739 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3740 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3739.call(this,n);
case  2 :
return doall__3740.call(this,n,coll);
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
var matches__3742 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3742),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3742),1)))
{return cljs.core.first.call(null,matches__3742);
} else
{return cljs.core.vec.call(null,matches__3742);
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
var matches__3743 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3743)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3743),1)))
{return cljs.core.first.call(null,matches__3743);
} else
{return cljs.core.vec.call(null,matches__3743);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3744 = cljs.core.re_find.call(null,re,s);
var match_idx__3745 = s.search(re);
var match_str__3746 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3744))?cljs.core.first.call(null,match_data__3744):match_data__3744);
var post_match__3747 = cljs.core.subs.call(null,s,(match_idx__3745 + cljs.core.count.call(null,match_str__3746)));

if(cljs.core.truth_(match_data__3744))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3744,re_seq.call(null,re,post_match__3747));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3748_SHARP_){
return print_one.call(null,p1__3748_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3749 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3749))
{var and__3546__auto____3753 = (function (){var x__319__auto____3750 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3751 = x__319__auto____3750;

if(cljs.core.truth_(and__3546__auto____3751))
{var and__3546__auto____3752 = x__319__auto____3750.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3752))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3750));
} else
{return and__3546__auto____3752;
}
} else
{return and__3546__auto____3751;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__319__auto____3750);
}
})();

if(cljs.core.truth_(and__3546__auto____3753))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3753;
}
} else
{return and__3546__auto____3749;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__319__auto____3754 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3755 = x__319__auto____3754;

if(cljs.core.truth_(and__3546__auto____3755))
{var and__3546__auto____3756 = x__319__auto____3754.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3756))
{return cljs.core.not.call(null,cljs.core.is_proto_.call(null,x__319__auto____3754));
} else
{return and__3546__auto____3756;
}
} else
{return and__3546__auto____3755;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__319__auto____3754);
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
var first_obj__3757 = cljs.core.first.call(null,objs);
var sb__3758 = (new goog.string.StringBuffer());

var G__3759__3760 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3759__3760))
{var obj__3761 = cljs.core.first.call(null,G__3759__3760);
var G__3759__3762 = G__3759__3760;

while(true){
if(cljs.core.truth_((obj__3761 === first_obj__3757)))
{} else
{sb__3758.append(" ");
}
var G__3763__3764 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3761,opts));

if(cljs.core.truth_(G__3763__3764))
{var string__3765 = cljs.core.first.call(null,G__3763__3764);
var G__3763__3766 = G__3763__3764;

while(true){
sb__3758.append(string__3765);
var temp__3698__auto____3767 = cljs.core.next.call(null,G__3763__3766);

if(cljs.core.truth_(temp__3698__auto____3767))
{var G__3763__3768 = temp__3698__auto____3767;

{
var G__3771 = cljs.core.first.call(null,G__3763__3768);
var G__3772 = G__3763__3768;
string__3765 = G__3771;
G__3763__3766 = G__3772;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3769 = cljs.core.next.call(null,G__3759__3762);

if(cljs.core.truth_(temp__3698__auto____3769))
{var G__3759__3770 = temp__3698__auto____3769;

{
var G__3773 = cljs.core.first.call(null,G__3759__3770);
var G__3774 = G__3759__3770;
obj__3761 = G__3773;
G__3759__3762 = G__3774;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3758);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3775 = cljs.core.first.call(null,objs);

var G__3776__3777 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3776__3777))
{var obj__3778 = cljs.core.first.call(null,G__3776__3777);
var G__3776__3779 = G__3776__3777;

while(true){
if(cljs.core.truth_((obj__3778 === first_obj__3775)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3780__3781 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3778,opts));

if(cljs.core.truth_(G__3780__3781))
{var string__3782 = cljs.core.first.call(null,G__3780__3781);
var G__3780__3783 = G__3780__3781;

while(true){
cljs.core.string_print.call(null,string__3782);
var temp__3698__auto____3784 = cljs.core.next.call(null,G__3780__3783);

if(cljs.core.truth_(temp__3698__auto____3784))
{var G__3780__3785 = temp__3698__auto____3784;

{
var G__3788 = cljs.core.first.call(null,G__3780__3785);
var G__3789 = G__3780__3785;
string__3782 = G__3788;
G__3780__3783 = G__3789;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3786 = cljs.core.next.call(null,G__3776__3779);

if(cljs.core.truth_(temp__3698__auto____3786))
{var G__3776__3787 = temp__3698__auto____3786;

{
var G__3790 = cljs.core.first.call(null,G__3776__3787);
var G__3791 = G__3776__3787;
obj__3778 = G__3790;
G__3776__3779 = G__3791;
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
pr_str.cljs$lang$applyTo = (function (arglist__3792){
var objs = cljs.core.seq( arglist__3792 );;
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
pr.cljs$lang$applyTo = (function (arglist__3793){
var objs = cljs.core.seq( arglist__3793 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3794){
var objs = cljs.core.seq( arglist__3794 );;
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
println.cljs$lang$applyTo = (function (arglist__3795){
var objs = cljs.core.seq( arglist__3795 );;
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
prn.cljs$lang$applyTo = (function (arglist__3796){
var objs = cljs.core.seq( arglist__3796 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3797 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3797,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3798 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3798))
{var nspc__3799 = temp__3698__auto____3798;

return cljs.core.str.call(null,nspc__3799,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3800 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3800))
{var nspc__3801 = temp__3698__auto____3800;

return cljs.core.str.call(null,nspc__3801,"/");
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
var pr_pair__3802 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3802,"{",", ","}",opts,coll);
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
var this__3803 = this;
var G__3804__3805 = cljs.core.seq.call(null,this__3803.watches);

if(cljs.core.truth_(G__3804__3805))
{var G__3807__3809 = cljs.core.first.call(null,G__3804__3805);
var vec__3808__3810 = G__3807__3809;
var key__3811 = cljs.core.nth.call(null,vec__3808__3810,0,null);
var f__3812 = cljs.core.nth.call(null,vec__3808__3810,1,null);
var G__3804__3813 = G__3804__3805;

var G__3807__3814 = G__3807__3809;
var G__3804__3815 = G__3804__3813;

while(true){
var vec__3816__3817 = G__3807__3814;
var key__3818 = cljs.core.nth.call(null,vec__3816__3817,0,null);
var f__3819 = cljs.core.nth.call(null,vec__3816__3817,1,null);
var G__3804__3820 = G__3804__3815;

f__3819.call(null,key__3818,this$,oldval,newval);
var temp__3698__auto____3821 = cljs.core.next.call(null,G__3804__3820);

if(cljs.core.truth_(temp__3698__auto____3821))
{var G__3804__3822 = temp__3698__auto____3821;

{
var G__3829 = cljs.core.first.call(null,G__3804__3822);
var G__3830 = G__3804__3822;
G__3807__3814 = G__3829;
G__3804__3815 = G__3830;
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
var this__3823 = this;
return this$.watches = cljs.core.assoc.call(null,this__3823.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3824 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3824.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3825 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3825.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3826 = this;
return this__3826.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3827 = this;
return this__3827.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3828 = this;
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
var atom__3837 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3838 = (function() { 
var G__3840__delegate = function (x,p__3831){
var map__3832__3833 = p__3831;
var map__3832__3834 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3832__3833))?cljs.core.apply.call(null,cljs.core.hash_map,map__3832__3833):map__3832__3833);
var validator__3835 = cljs.core.get.call(null,map__3832__3834,"﷐'validator");
var meta__3836 = cljs.core.get.call(null,map__3832__3834,"﷐'meta");

return (new cljs.core.Atom(x,meta__3836,validator__3835,null));
};
var G__3840 = function (x,var_args){
var p__3831 = null;
if (goog.isDef(var_args)) {
  p__3831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3840__delegate.call(this, x, p__3831);
};
G__3840.cljs$lang$maxFixedArity = 1;
G__3840.cljs$lang$applyTo = (function (arglist__3841){
var x = cljs.core.first(arglist__3841);
var p__3831 = cljs.core.rest(arglist__3841);
return G__3840__delegate.call(this, x, p__3831);
});
return G__3840;
})()
;
atom = function(x,var_args){
var p__3831 = var_args;
switch(arguments.length){
case  1 :
return atom__3837.call(this,x);
default:
return atom__3838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3838.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3842 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3842))
{var validate__3843 = temp__3698__auto____3842;

if(cljs.core.truth_(validate__3843.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",2934))))));
}
} else
{}
var old_value__3844 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3844,new_value);
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
var swap_BANG___3845 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3846 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3847 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3848 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3849 = (function() { 
var G__3851__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3851 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3851__delegate.call(this, a, f, x, y, z, more);
};
G__3851.cljs$lang$maxFixedArity = 5;
G__3851.cljs$lang$applyTo = (function (arglist__3852){
var a = cljs.core.first(arglist__3852);
var f = cljs.core.first(cljs.core.next(arglist__3852));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3852)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3852))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3852)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3852)))));
return G__3851__delegate.call(this, a, f, x, y, z, more);
});
return G__3851;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3845.call(this,a,f);
case  3 :
return swap_BANG___3846.call(this,a,f,x);
case  4 :
return swap_BANG___3847.call(this,a,f,x,y);
case  5 :
return swap_BANG___3848.call(this,a,f,x,y,z);
default:
return swap_BANG___3849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3849.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3853){
var iref = cljs.core.first(arglist__3853);
var f = cljs.core.first(cljs.core.next(arglist__3853));
var args = cljs.core.rest(cljs.core.next(arglist__3853));
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
var gensym__3854 = (function (){
return gensym.call(null,"G__");
});
var gensym__3855 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3854.call(this);
case  1 :
return gensym__3855.call(this,prefix_string);
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
var this__3857 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3857.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3858 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3858.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3858.state,this__3858.f);
}
return cljs.core.deref.call(null,this__3858.state);
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
delay.cljs$lang$applyTo = (function (arglist__3859){
var body = cljs.core.seq( arglist__3859 );;
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
var map__3860__3861 = options;
var map__3860__3862 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3860__3861))?cljs.core.apply.call(null,cljs.core.hash_map,map__3860__3861):map__3860__3861);
var keywordize_keys__3863 = cljs.core.get.call(null,map__3860__3862,"﷐'keywordize-keys");
var keyfn__3864 = (cljs.core.truth_(keywordize_keys__3863)?cljs.core.keyword:cljs.core.str);
var f__3870 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__383__auto____3869 = (function iter__3865(s__3866){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3866__3867 = s__3866;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3866__3867)))
{var k__3868 = cljs.core.first.call(null,s__3866__3867);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3864.call(null,k__3868),thisfn.call(null,(x[k__3868]))]),iter__3865.call(null,cljs.core.rest.call(null,s__3866__3867)));
} else
{return null;
}
break;
}
})));
});

return iter__383__auto____3869.call(null,cljs.core.js_keys.call(null,x));
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

return f__3870.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3871){
var x = cljs.core.first(arglist__3871);
var options = cljs.core.rest(arglist__3871);
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
var mem__3872 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3876__delegate = function (args){
var temp__3695__auto____3873 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3872),args);

if(cljs.core.truth_(temp__3695__auto____3873))
{var v__3874 = temp__3695__auto____3873;

return v__3874;
} else
{var ret__3875 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3872,cljs.core.assoc,args,ret__3875);
return ret__3875;
}
};
var G__3876 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3876__delegate.call(this, args);
};
G__3876.cljs$lang$maxFixedArity = 0;
G__3876.cljs$lang$applyTo = (function (arglist__3877){
var args = cljs.core.seq( arglist__3877 );;
return G__3876__delegate.call(this, args);
});
return G__3876;
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
var trampoline__3879 = (function (f){
while(true){
var ret__3878 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3878)))
{{
var G__3882 = ret__3878;
f = G__3882;
continue;
}
} else
{return ret__3878;
}
break;
}
});
var trampoline__3880 = (function() { 
var G__3883__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3883 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3883__delegate.call(this, f, args);
};
G__3883.cljs$lang$maxFixedArity = 1;
G__3883.cljs$lang$applyTo = (function (arglist__3884){
var f = cljs.core.first(arglist__3884);
var args = cljs.core.rest(arglist__3884);
return G__3883__delegate.call(this, f, args);
});
return G__3883;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3879.call(this,f);
default:
return trampoline__3880.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3880.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3885 = (function (){
return rand.call(null,1);
});
var rand__3886 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3885.call(this);
case  1 :
return rand__3886.call(this,n);
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
var k__3888 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3888,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3888,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3897 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3898 = (function (h,child,parent){
var or__3548__auto____3889 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3889))
{return or__3548__auto____3889;
} else
{var or__3548__auto____3890 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3890))
{return or__3548__auto____3890;
} else
{var and__3546__auto____3891 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3891))
{var and__3546__auto____3892 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3892))
{var and__3546__auto____3893 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3893))
{var ret__3894 = true;
var i__3895 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3896 = cljs.core.not.call(null,ret__3894);

if(cljs.core.truth_(or__3548__auto____3896))
{return or__3548__auto____3896;
} else
{return cljs.core._EQ_.call(null,i__3895,cljs.core.count.call(null,parent));
}
})()))
{return ret__3894;
} else
{{
var G__3900 = isa_QMARK_.call(null,h,child.call(null,i__3895),parent.call(null,i__3895));
var G__3901 = (i__3895 + 1);
ret__3894 = G__3900;
i__3895 = G__3901;
continue;
}
}
break;
}
} else
{return and__3546__auto____3893;
}
} else
{return and__3546__auto____3892;
}
} else
{return and__3546__auto____3891;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3897.call(this,h,child);
case  3 :
return isa_QMARK___3898.call(this,h,child,parent);
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
var parents__3902 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3903 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3902.call(this,h);
case  2 :
return parents__3903.call(this,h,tag);
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
var ancestors__3905 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3906 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3905.call(this,h);
case  2 :
return ancestors__3906.call(this,h,tag);
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
var descendants__3908 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3909 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3908.call(this,h);
case  2 :
return descendants__3909.call(this,h,tag);
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
var derive__3919 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3226))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3920 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3230))))));
}
var tp__3914 = "﷐'parents".call(null,h);
var td__3915 = "﷐'descendants".call(null,h);
var ta__3916 = "﷐'ancestors".call(null,h);
var tf__3917 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____3918 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3914.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3916.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3916.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3914,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3917.call(null,"﷐'ancestors".call(null,h),tag,td__3915,parent,ta__3916),"﷐'descendants":tf__3917.call(null,"﷐'descendants".call(null,h),parent,ta__3916,tag,td__3915)});
})());

if(cljs.core.truth_(or__3548__auto____3918))
{return or__3548__auto____3918;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3919.call(this,h,tag);
case  3 :
return derive__3920.call(this,h,tag,parent);
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
var underive__3926 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3927 = (function (h,tag,parent){
var parentMap__3922 = "﷐'parents".call(null,h);
var childsParents__3923 = (cljs.core.truth_(parentMap__3922.call(null,tag))?cljs.core.disj.call(null,parentMap__3922.call(null,tag),parent):cljs.core.set([]));
var newParents__3924 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3923))?cljs.core.assoc.call(null,parentMap__3922,tag,childsParents__3923):cljs.core.dissoc.call(null,parentMap__3922,tag));
var deriv_seq__3925 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3911_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3911_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3911_SHARP_),cljs.core.second.call(null,p1__3911_SHARP_)));
}),cljs.core.seq.call(null,newParents__3924)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3922.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3912_SHARP_,p2__3913_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3912_SHARP_,p2__3913_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3925));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3926.call(this,h,tag);
case  3 :
return underive__3927.call(this,h,tag,parent);
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
var xprefs__3929 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____3931 = (cljs.core.truth_((function (){var and__3546__auto____3930 = xprefs__3929;

if(cljs.core.truth_(and__3546__auto____3930))
{return xprefs__3929.call(null,y);
} else
{return and__3546__auto____3930;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____3931))
{return or__3548__auto____3931;
} else
{var or__3548__auto____3933 = (function (){var ps__3932 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3932) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3932),prefer_table)))
{} else
{}
{
var G__3936 = cljs.core.rest.call(null,ps__3932);
ps__3932 = G__3936;
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
{var or__3548__auto____3935 = (function (){var ps__3934 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__3934) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3934),y,prefer_table)))
{} else
{}
{
var G__3937 = cljs.core.rest.call(null,ps__3934);
ps__3934 = G__3937;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____3935))
{return or__3548__auto____3935;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____3938 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____3938))
{return or__3548__auto____3938;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3947 = cljs.core.reduce.call(null,(function (be,p__3939){
var vec__3940__3941 = p__3939;
var k__3942 = cljs.core.nth.call(null,vec__3940__3941,0,null);
var ___3943 = cljs.core.nth.call(null,vec__3940__3941,1,null);
var e__3944 = vec__3940__3941;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3942)))
{var be2__3946 = (cljs.core.truth_((function (){var or__3548__auto____3945 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____3945))
{return or__3548__auto____3945;
} else
{return cljs.core.dominates.call(null,k__3942,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3944:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3946),k__3942,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3942," and ",cljs.core.first.call(null,be2__3946),", and neither is preferred")));
}
return be2__3946;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3947))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3947));
return cljs.core.second.call(null,best_entry__3947);
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
if(cljs.core.truth_((function (){var and__3546__auto____3948 = mf;

if(cljs.core.truth_(and__3546__auto____3948))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____3948;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____3949 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3949))
{return or__3548__auto____3949;
} else
{var or__3548__auto____3950 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____3950))
{return or__3548__auto____3950;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____3951 = mf;

if(cljs.core.truth_(and__3546__auto____3951))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____3951;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____3952 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3952))
{return or__3548__auto____3952;
} else
{var or__3548__auto____3953 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____3953))
{return or__3548__auto____3953;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3954 = mf;

if(cljs.core.truth_(and__3546__auto____3954))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____3954;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3955 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3955))
{return or__3548__auto____3955;
} else
{var or__3548__auto____3956 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____3956))
{return or__3548__auto____3956;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____3957 = mf;

if(cljs.core.truth_(and__3546__auto____3957))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____3957;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____3958 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3958))
{return or__3548__auto____3958;
} else
{var or__3548__auto____3959 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____3959))
{return or__3548__auto____3959;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____3960 = mf;

if(cljs.core.truth_(and__3546__auto____3960))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____3960;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____3961 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3961))
{return or__3548__auto____3961;
} else
{var or__3548__auto____3962 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____3962))
{return or__3548__auto____3962;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3963 = mf;

if(cljs.core.truth_(and__3546__auto____3963))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____3963;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____3964 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3964))
{return or__3548__auto____3964;
} else
{var or__3548__auto____3965 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____3965))
{return or__3548__auto____3965;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____3966 = mf;

if(cljs.core.truth_(and__3546__auto____3966))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____3966;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____3967 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3967))
{return or__3548__auto____3967;
} else
{var or__3548__auto____3968 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____3968))
{return or__3548__auto____3968;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____3969 = mf;

if(cljs.core.truth_(and__3546__auto____3969))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____3969;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____3970 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____3970))
{return or__3548__auto____3970;
} else
{var or__3548__auto____3971 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3971))
{return or__3548__auto____3971;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3972 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3973 = cljs.core._get_method.call(null,mf,dispatch_val__3972);

if(cljs.core.truth_(target_fn__3973))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3972)));
}
return cljs.core.apply.call(null,target_fn__3973,args);
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
var this__3974 = this;
cljs.core.swap_BANG_.call(null,this__3974.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3974.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3974.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3974.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3975 = this;
cljs.core.swap_BANG_.call(null,this__3975.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3975.method_cache,this__3975.method_table,this__3975.cached_hierarchy,this__3975.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3976 = this;
cljs.core.swap_BANG_.call(null,this__3976.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3976.method_cache,this__3976.method_table,this__3976.cached_hierarchy,this__3976.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3977 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3977.cached_hierarchy),cljs.core.deref.call(null,this__3977.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3977.method_cache,this__3977.method_table,this__3977.cached_hierarchy,this__3977.hierarchy);
}
var temp__3695__auto____3978 = cljs.core.deref.call(null,this__3977.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____3978))
{var target_fn__3979 = temp__3695__auto____3978;

return target_fn__3979;
} else
{var temp__3695__auto____3980 = cljs.core.find_and_cache_best_method.call(null,this__3977.name,dispatch_val,this__3977.hierarchy,this__3977.method_table,this__3977.prefer_table,this__3977.method_cache,this__3977.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____3980))
{var target_fn__3981 = temp__3695__auto____3980;

return target_fn__3981;
} else
{return cljs.core.deref.call(null,this__3977.method_table).call(null,this__3977.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3982 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3982.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__3982.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__3982.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3982.method_cache,this__3982.method_table,this__3982.cached_hierarchy,this__3982.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3983 = this;
return cljs.core.deref.call(null,this__3983.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3984 = this;
return cljs.core.deref.call(null,this__3984.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3985 = this;
return cljs.core.do_invoke.call(null,mf,this__3985.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3986__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3986 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3986__delegate.call(this, _, args);
};
G__3986.cljs$lang$maxFixedArity = 1;
G__3986.cljs$lang$applyTo = (function (arglist__3987){
var _ = cljs.core.first(arglist__3987);
var args = cljs.core.rest(arglist__3987);
return G__3986__delegate.call(this, _, args);
});
return G__3986;
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
