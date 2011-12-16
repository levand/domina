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
var or__3548__auto____2590 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____2590))
{return or__3548__auto____2590;
} else
{var or__3548__auto____2591 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____2591))
{return or__3548__auto____2591;
} else
{return false;
}
}
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
if(cljs.core.truth_((function (){var and__3546__auto____2592 = coll;

if(cljs.core.truth_(and__3546__auto____2592))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____2592;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____2593 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2593))
{return or__3548__auto____2593;
} else
{var or__3548__auto____2594 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____2594))
{return or__3548__auto____2594;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2595 = coll;

if(cljs.core.truth_(and__3546__auto____2595))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____2595;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____2596 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2596))
{return or__3548__auto____2596;
} else
{var or__3548__auto____2597 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____2597))
{return or__3548__auto____2597;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____2598 = coll;

if(cljs.core.truth_(and__3546__auto____2598))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____2598;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____2599 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2599))
{return or__3548__auto____2599;
} else
{var or__3548__auto____2600 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____2600))
{return or__3548__auto____2600;
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
var _nth__2607 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____2601 = coll;

if(cljs.core.truth_(and__3546__auto____2601))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2601;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____2602 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2602))
{return or__3548__auto____2602;
} else
{var or__3548__auto____2603 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2603))
{return or__3548__auto____2603;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2608 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2604 = coll;

if(cljs.core.truth_(and__3546__auto____2604))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____2604;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____2605 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2605))
{return or__3548__auto____2605;
} else
{var or__3548__auto____2606 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____2606))
{return or__3548__auto____2606;
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
return _nth__2607.call(this,coll,n);
case  3 :
return _nth__2608.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2610 = coll;

if(cljs.core.truth_(and__3546__auto____2610))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____2610;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____2611 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2611))
{return or__3548__auto____2611;
} else
{var or__3548__auto____2612 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____2612))
{return or__3548__auto____2612;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2613 = coll;

if(cljs.core.truth_(and__3546__auto____2613))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____2613;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____2614 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2614))
{return or__3548__auto____2614;
} else
{var or__3548__auto____2615 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____2615))
{return or__3548__auto____2615;
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
var _lookup__2622 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____2616 = o;

if(cljs.core.truth_(and__3546__auto____2616))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2616;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____2617 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2617))
{return or__3548__auto____2617;
} else
{var or__3548__auto____2618 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2618))
{return or__3548__auto____2618;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2623 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____2619 = o;

if(cljs.core.truth_(and__3546__auto____2619))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____2619;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____2620 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2620))
{return or__3548__auto____2620;
} else
{var or__3548__auto____2621 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____2621))
{return or__3548__auto____2621;
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
return _lookup__2622.call(this,o,k);
case  3 :
return _lookup__2623.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2625 = coll;

if(cljs.core.truth_(and__3546__auto____2625))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____2625;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____2626 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2626))
{return or__3548__auto____2626;
} else
{var or__3548__auto____2627 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2627))
{return or__3548__auto____2627;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____2628 = coll;

if(cljs.core.truth_(and__3546__auto____2628))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____2628;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____2629 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2629))
{return or__3548__auto____2629;
} else
{var or__3548__auto____2630 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____2630))
{return or__3548__auto____2630;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2631 = coll;

if(cljs.core.truth_(and__3546__auto____2631))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____2631;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____2632 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2632))
{return or__3548__auto____2632;
} else
{var or__3548__auto____2633 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____2633))
{return or__3548__auto____2633;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____2634 = coll;

if(cljs.core.truth_(and__3546__auto____2634))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____2634;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____2635 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2635))
{return or__3548__auto____2635;
} else
{var or__3548__auto____2636 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____2636))
{return or__3548__auto____2636;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2637 = coll;

if(cljs.core.truth_(and__3546__auto____2637))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____2637;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____2638 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2638))
{return or__3548__auto____2638;
} else
{var or__3548__auto____2639 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____2639))
{return or__3548__auto____2639;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____2640 = coll;

if(cljs.core.truth_(and__3546__auto____2640))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____2640;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____2641 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2641))
{return or__3548__auto____2641;
} else
{var or__3548__auto____2642 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____2642))
{return or__3548__auto____2642;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____2643 = coll;

if(cljs.core.truth_(and__3546__auto____2643))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____2643;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____2644 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2644))
{return or__3548__auto____2644;
} else
{var or__3548__auto____2645 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____2645))
{return or__3548__auto____2645;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____2646 = o;

if(cljs.core.truth_(and__3546__auto____2646))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____2646;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____2647 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2647))
{return or__3548__auto____2647;
} else
{var or__3548__auto____2648 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____2648))
{return or__3548__auto____2648;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____2649 = o;

if(cljs.core.truth_(and__3546__auto____2649))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____2649;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____2650 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2650))
{return or__3548__auto____2650;
} else
{var or__3548__auto____2651 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____2651))
{return or__3548__auto____2651;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____2652 = o;

if(cljs.core.truth_(and__3546__auto____2652))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____2652;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____2653 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2653))
{return or__3548__auto____2653;
} else
{var or__3548__auto____2654 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____2654))
{return or__3548__auto____2654;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____2655 = o;

if(cljs.core.truth_(and__3546__auto____2655))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____2655;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____2656 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2656))
{return or__3548__auto____2656;
} else
{var or__3548__auto____2657 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____2657))
{return or__3548__auto____2657;
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
var _reduce__2664 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____2658 = coll;

if(cljs.core.truth_(and__3546__auto____2658))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2658;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____2659 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2659))
{return or__3548__auto____2659;
} else
{var or__3548__auto____2660 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2660))
{return or__3548__auto____2660;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2665 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____2661 = coll;

if(cljs.core.truth_(and__3546__auto____2661))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____2661;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____2662 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____2662))
{return or__3548__auto____2662;
} else
{var or__3548__auto____2663 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____2663))
{return or__3548__auto____2663;
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
return _reduce__2664.call(this,coll,f);
case  3 :
return _reduce__2665.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____2667 = o;

if(cljs.core.truth_(and__3546__auto____2667))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____2667;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____2668 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2668))
{return or__3548__auto____2668;
} else
{var or__3548__auto____2669 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____2669))
{return or__3548__auto____2669;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____2670 = o;

if(cljs.core.truth_(and__3546__auto____2670))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____2670;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____2671 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2671))
{return or__3548__auto____2671;
} else
{var or__3548__auto____2672 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____2672))
{return or__3548__auto____2672;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____2673 = o;

if(cljs.core.truth_(and__3546__auto____2673))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____2673;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____2674 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2674))
{return or__3548__auto____2674;
} else
{var or__3548__auto____2675 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____2675))
{return or__3548__auto____2675;
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
if(cljs.core.truth_((function (){var and__3546__auto____2676 = o;

if(cljs.core.truth_(and__3546__auto____2676))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____2676;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____2677 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____2677))
{return or__3548__auto____2677;
} else
{var or__3548__auto____2678 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____2678))
{return or__3548__auto____2678;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____2679 = d;

if(cljs.core.truth_(and__3546__auto____2679))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____2679;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____2680 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____2680))
{return or__3548__auto____2680;
} else
{var or__3548__auto____2681 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____2681))
{return or__3548__auto____2681;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____2682 = this$;

if(cljs.core.truth_(and__3546__auto____2682))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____2682;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____2683 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2683))
{return or__3548__auto____2683;
} else
{var or__3548__auto____2684 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____2684))
{return or__3548__auto____2684;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____2685 = this$;

if(cljs.core.truth_(and__3546__auto____2685))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____2685;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____2686 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2686))
{return or__3548__auto____2686;
} else
{var or__3548__auto____2687 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2687))
{return or__3548__auto____2687;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____2688 = this$;

if(cljs.core.truth_(and__3546__auto____2688))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____2688;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____2689 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____2689))
{return or__3548__auto____2689;
} else
{var or__3548__auto____2690 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____2690))
{return or__3548__auto____2690;
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
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2691 = null;
var G__2691__2692 = (function (o,k){
return null;
});
var G__2691__2693 = (function (o,k,not_found){
return not_found;
});
G__2691 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2691__2692.call(this,o,k);
case  3 :
return G__2691__2693.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2691;
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
var G__2695 = null;
var G__2695__2696 = (function (_,f){
return f.call(null);
});
var G__2695__2697 = (function (_,f,start){
return start;
});
G__2695 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2695__2696.call(this,_,f);
case  3 :
return G__2695__2697.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2695;
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
var G__2699 = null;
var G__2699__2700 = (function (_,n){
return null;
});
var G__2699__2701 = (function (_,n,not_found){
return not_found;
});
G__2699 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2699__2700.call(this,_,n);
case  3 :
return G__2699__2701.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2699;
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
return cljs.core.identical_QMARK_.call(null,o.toString(),other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
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
var ci_reduce__2709 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2703 = cljs.core._nth.call(null,cicoll,0);
var n__2704 = 1;

while(true){
if(cljs.core.truth_((n__2704 < cljs.core._count.call(null,cicoll))))
{{
var G__2713 = f.call(null,val__2703,cljs.core._nth.call(null,cicoll,n__2704));
var G__2714 = (n__2704 + 1);
val__2703 = G__2713;
n__2704 = G__2714;
continue;
}
} else
{return val__2703;
}
break;
}
}
});
var ci_reduce__2710 = (function (cicoll,f,val){
var val__2705 = val;
var n__2706 = 0;

while(true){
if(cljs.core.truth_((n__2706 < cljs.core._count.call(null,cicoll))))
{{
var G__2715 = f.call(null,val__2705,cljs.core._nth.call(null,cicoll,n__2706));
var G__2716 = (n__2706 + 1);
val__2705 = G__2715;
n__2706 = G__2716;
continue;
}
} else
{return val__2705;
}
break;
}
});
var ci_reduce__2711 = (function (cicoll,f,val,idx){
var val__2707 = val;
var n__2708 = idx;

while(true){
if(cljs.core.truth_((n__2708 < cljs.core._count.call(null,cicoll))))
{{
var G__2717 = f.call(null,val__2707,cljs.core._nth.call(null,cicoll,n__2708));
var G__2718 = (n__2708 + 1);
val__2707 = G__2717;
n__2708 = G__2718;
continue;
}
} else
{return val__2707;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2709.call(this,cicoll,f);
case  3 :
return ci_reduce__2710.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2711.call(this,cicoll,f,val,idx);
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
var this__2719 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2732 = null;
var G__2732__2733 = (function (coll,f){
var this__2720 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2720.a[this__2720.i]),(this__2720.i + 1));
});
var G__2732__2734 = (function (coll,f,start){
var this__2721 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2721.i);
});
G__2732 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2732__2733.call(this,coll,f);
case  3 :
return G__2732__2734.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2732;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2722 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2723 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2736 = null;
var G__2736__2737 = (function (coll,n){
var this__2724 = this;
var i__2725 = (n + this__2724.i);

if(cljs.core.truth_((i__2725 < this__2724.a.length)))
{return (this__2724.a[i__2725]);
} else
{return null;
}
});
var G__2736__2738 = (function (coll,n,not_found){
var this__2726 = this;
var i__2727 = (n + this__2726.i);

if(cljs.core.truth_((i__2727 < this__2726.a.length)))
{return (this__2726.a[i__2727]);
} else
{return not_found;
}
});
G__2736 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2736__2737.call(this,coll,n);
case  3 :
return G__2736__2738.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2736;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2728 = this;
return (this__2728.a.length - this__2728.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2729 = this;
return (this__2729.a[this__2729.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2730 = this;
if(cljs.core.truth_(((this__2730.i + 1) < this__2730.a.length)))
{return (new cljs.core.IndexedSeq(this__2730.a,(this__2730.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2731 = this;
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
var G__2740 = null;
var G__2740__2741 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2740__2742 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2740 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2740__2741.call(this,array,f);
case  3 :
return G__2740__2742.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2740;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2744 = null;
var G__2744__2745 = (function (array,k){
return (array[k]);
});
var G__2744__2746 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2744 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2744__2745.call(this,array,k);
case  3 :
return G__2744__2746.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2744;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2748 = null;
var G__2748__2749 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2748__2750 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2748 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2748__2749.call(this,array,n);
case  3 :
return G__2748__2750.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2748;
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
var temp__3698__auto____2752 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____2752))
{var s__2753 = temp__3698__auto____2752;

return cljs.core._first.call(null,s__2753);
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
var G__2754 = cljs.core.next.call(null,s);
s = G__2754;
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
var s__2755 = cljs.core.seq.call(null,x);
var n__2756 = 0;

while(true){
if(cljs.core.truth_(s__2755))
{{
var G__2757 = cljs.core.next.call(null,s__2755);
var G__2758 = (n__2756 + 1);
s__2755 = G__2757;
n__2756 = G__2758;
continue;
}
} else
{return n__2756;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
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
var conj__2759 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2760 = (function() { 
var G__2762__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2763 = conj.call(null,coll,x);
var G__2764 = cljs.core.first.call(null,xs);
var G__2765 = cljs.core.next.call(null,xs);
coll = G__2763;
x = G__2764;
xs = G__2765;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2762 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2762__delegate.call(this, coll, x, xs);
};
G__2762.cljs$lang$maxFixedArity = 2;
G__2762.cljs$lang$applyTo = (function (arglist__2766){
var coll = cljs.core.first(arglist__2766);
var x = cljs.core.first(cljs.core.next(arglist__2766));
var xs = cljs.core.rest(cljs.core.next(arglist__2766));
return G__2762__delegate.call(this, coll, x, xs);
});
return G__2762;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2759.call(this,coll,x);
default:
return conj__2760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2760.cljs$lang$applyTo;
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
var nth__2767 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2768 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2767.call(this,coll,n);
case  3 :
return nth__2768.call(this,coll,n,not_found);
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
var get__2770 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2771 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2770.call(this,o,k);
case  3 :
return get__2771.call(this,o,k,not_found);
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
var assoc__2774 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2775 = (function() { 
var G__2777__delegate = function (coll,k,v,kvs){
while(true){
var ret__2773 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2778 = ret__2773;
var G__2779 = cljs.core.first.call(null,kvs);
var G__2780 = cljs.core.second.call(null,kvs);
var G__2781 = cljs.core.nnext.call(null,kvs);
coll = G__2778;
k = G__2779;
v = G__2780;
kvs = G__2781;
continue;
}
} else
{return ret__2773;
}
break;
}
};
var G__2777 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2777__delegate.call(this, coll, k, v, kvs);
};
G__2777.cljs$lang$maxFixedArity = 3;
G__2777.cljs$lang$applyTo = (function (arglist__2782){
var coll = cljs.core.first(arglist__2782);
var k = cljs.core.first(cljs.core.next(arglist__2782));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2782)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2782)));
return G__2777__delegate.call(this, coll, k, v, kvs);
});
return G__2777;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2774.call(this,coll,k,v);
default:
return assoc__2775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2775.cljs$lang$applyTo;
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
var dissoc__2784 = (function (coll){
return coll;
});
var dissoc__2785 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2786 = (function() { 
var G__2788__delegate = function (coll,k,ks){
while(true){
var ret__2783 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2789 = ret__2783;
var G__2790 = cljs.core.first.call(null,ks);
var G__2791 = cljs.core.next.call(null,ks);
coll = G__2789;
k = G__2790;
ks = G__2791;
continue;
}
} else
{return ret__2783;
}
break;
}
};
var G__2788 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2788__delegate.call(this, coll, k, ks);
};
G__2788.cljs$lang$maxFixedArity = 2;
G__2788.cljs$lang$applyTo = (function (arglist__2792){
var coll = cljs.core.first(arglist__2792);
var k = cljs.core.first(cljs.core.next(arglist__2792));
var ks = cljs.core.rest(cljs.core.next(arglist__2792));
return G__2788__delegate.call(this, coll, k, ks);
});
return G__2788;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2784.call(this,coll);
case  2 :
return dissoc__2785.call(this,coll,k);
default:
return dissoc__2786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2786.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__314__auto____2793 = o;

if(cljs.core.truth_((function (){var and__3546__auto____2794 = x__314__auto____2793;

if(cljs.core.truth_(and__3546__auto____2794))
{var and__3546__auto____2795 = x__314__auto____2793.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____2795))
{return cljs.core.not.call(null,x__314__auto____2793.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____2795;
}
} else
{return and__3546__auto____2794;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__314__auto____2793);
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
var disj__2797 = (function (coll){
return coll;
});
var disj__2798 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2799 = (function() { 
var G__2801__delegate = function (coll,k,ks){
while(true){
var ret__2796 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2802 = ret__2796;
var G__2803 = cljs.core.first.call(null,ks);
var G__2804 = cljs.core.next.call(null,ks);
coll = G__2802;
k = G__2803;
ks = G__2804;
continue;
}
} else
{return ret__2796;
}
break;
}
};
var G__2801 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2801__delegate.call(this, coll, k, ks);
};
G__2801.cljs$lang$maxFixedArity = 2;
G__2801.cljs$lang$applyTo = (function (arglist__2805){
var coll = cljs.core.first(arglist__2805);
var k = cljs.core.first(cljs.core.next(arglist__2805));
var ks = cljs.core.rest(cljs.core.next(arglist__2805));
return G__2801__delegate.call(this, coll, k, ks);
});
return G__2801;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2797.call(this,coll);
case  2 :
return disj__2798.call(this,coll,k);
default:
return disj__2799.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2799.cljs$lang$applyTo;
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
{var x__314__auto____2806 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2807 = x__314__auto____2806;

if(cljs.core.truth_(and__3546__auto____2807))
{var and__3546__auto____2808 = x__314__auto____2806.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____2808))
{return cljs.core.not.call(null,x__314__auto____2806.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____2808;
}
} else
{return and__3546__auto____2807;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__314__auto____2806);
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
{var x__314__auto____2809 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2810 = x__314__auto____2809;

if(cljs.core.truth_(and__3546__auto____2810))
{var and__3546__auto____2811 = x__314__auto____2809.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____2811))
{return cljs.core.not.call(null,x__314__auto____2809.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____2811;
}
} else
{return and__3546__auto____2810;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__314__auto____2809);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__314__auto____2812 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2813 = x__314__auto____2812;

if(cljs.core.truth_(and__3546__auto____2813))
{var and__3546__auto____2814 = x__314__auto____2812.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____2814))
{return cljs.core.not.call(null,x__314__auto____2812.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____2814;
}
} else
{return and__3546__auto____2813;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__314__auto____2812);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__314__auto____2815 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2816 = x__314__auto____2815;

if(cljs.core.truth_(and__3546__auto____2816))
{var and__3546__auto____2817 = x__314__auto____2815.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____2817))
{return cljs.core.not.call(null,x__314__auto____2815.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____2817;
}
} else
{return and__3546__auto____2816;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__314__auto____2815);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__314__auto____2818 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2819 = x__314__auto____2818;

if(cljs.core.truth_(and__3546__auto____2819))
{var and__3546__auto____2820 = x__314__auto____2818.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____2820))
{return cljs.core.not.call(null,x__314__auto____2818.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____2820;
}
} else
{return and__3546__auto____2819;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__314__auto____2818);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__314__auto____2821 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2822 = x__314__auto____2821;

if(cljs.core.truth_(and__3546__auto____2822))
{var and__3546__auto____2823 = x__314__auto____2821.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____2823))
{return cljs.core.not.call(null,x__314__auto____2821.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____2823;
}
} else
{return and__3546__auto____2822;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__314__auto____2821);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__314__auto____2824 = x;

if(cljs.core.truth_((function (){var and__3546__auto____2825 = x__314__auto____2824;

if(cljs.core.truth_(and__3546__auto____2825))
{var and__3546__auto____2826 = x__314__auto____2824.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____2826))
{return cljs.core.not.call(null,x__314__auto____2824.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____2826;
}
} else
{return and__3546__auto____2825;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__314__auto____2824);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2827 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2827.push(key);
}));
return keys__2827;
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
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__314__auto____2828 = s;

if(cljs.core.truth_((function (){var and__3546__auto____2829 = x__314__auto____2828;

if(cljs.core.truth_(and__3546__auto____2829))
{var and__3546__auto____2830 = x__314__auto____2828.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____2830))
{return cljs.core.not.call(null,x__314__auto____2828.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____2830;
}
} else
{return and__3546__auto____2829;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__314__auto____2828);
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
var and__3546__auto____2831 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2831))
{return cljs.core.not.call(null,(function (){var or__3548__auto____2832 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____2832))
{return or__3548__auto____2832;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____2831;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____2833 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2833))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____2833;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____2834 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____2834))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____2834;
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
var and__3546__auto____2835 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____2835))
{return (n == n.toFixed());
} else
{return and__3546__auto____2835;
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
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____2836 = coll;

if(cljs.core.truth_(and__3546__auto____2836))
{var and__3546__auto____2837 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____2837))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____2837;
}
} else
{return and__3546__auto____2836;
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
var distinct_QMARK___2842 = (function (x){
return true;
});
var distinct_QMARK___2843 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2844 = (function() { 
var G__2846__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2838 = cljs.core.set([y,x]);
var xs__2839 = more;

while(true){
var x__2840 = cljs.core.first.call(null,xs__2839);
var etc__2841 = cljs.core.next.call(null,xs__2839);

if(cljs.core.truth_(xs__2839))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2838,x__2840)))
{return false;
} else
{{
var G__2847 = cljs.core.conj.call(null,s__2838,x__2840);
var G__2848 = etc__2841;
s__2838 = G__2847;
xs__2839 = G__2848;
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
var G__2846 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2846__delegate.call(this, x, y, more);
};
G__2846.cljs$lang$maxFixedArity = 2;
G__2846.cljs$lang$applyTo = (function (arglist__2849){
var x = cljs.core.first(arglist__2849);
var y = cljs.core.first(cljs.core.next(arglist__2849));
var more = cljs.core.rest(cljs.core.next(arglist__2849));
return G__2846__delegate.call(this, x, y, more);
});
return G__2846;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2842.call(this,x);
case  2 :
return distinct_QMARK___2843.call(this,x,y);
default:
return distinct_QMARK___2844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2844.cljs$lang$applyTo;
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
var r__2850 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2850)))
{return r__2850;
} else
{if(cljs.core.truth_(r__2850))
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
var sort__2852 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2853 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2851 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2851,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2851);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2852.call(this,comp);
case  2 :
return sort__2853.call(this,comp,coll);
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
var sort_by__2855 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2856 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2855.call(this,keyfn,comp);
case  3 :
return sort_by__2856.call(this,keyfn,comp,coll);
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
var reduce__2858 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2859 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2858.call(this,f,val);
case  3 :
return reduce__2859.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2865 = (function (f,coll){
var temp__3695__auto____2861 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____2861))
{var s__2862 = temp__3695__auto____2861;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2862),cljs.core.next.call(null,s__2862));
} else
{return f.call(null);
}
});
var seq_reduce__2866 = (function (f,val,coll){
var val__2863 = val;
var coll__2864 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2864))
{{
var G__2868 = f.call(null,val__2863,cljs.core.first.call(null,coll__2864));
var G__2869 = cljs.core.next.call(null,coll__2864);
val__2863 = G__2868;
coll__2864 = G__2869;
continue;
}
} else
{return val__2863;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2865.call(this,f,val);
case  3 :
return seq_reduce__2866.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2870 = null;
var G__2870__2871 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2870__2872 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2870 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2870__2871.call(this,coll,f);
case  3 :
return G__2870__2872.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2870;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2874 = (function (){
return 0;
});
var _PLUS___2875 = (function (x){
return x;
});
var _PLUS___2876 = (function (x,y){
return (x + y);
});
var _PLUS___2877 = (function() { 
var G__2879__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2879 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2879__delegate.call(this, x, y, more);
};
G__2879.cljs$lang$maxFixedArity = 2;
G__2879.cljs$lang$applyTo = (function (arglist__2880){
var x = cljs.core.first(arglist__2880);
var y = cljs.core.first(cljs.core.next(arglist__2880));
var more = cljs.core.rest(cljs.core.next(arglist__2880));
return G__2879__delegate.call(this, x, y, more);
});
return G__2879;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2874.call(this);
case  1 :
return _PLUS___2875.call(this,x);
case  2 :
return _PLUS___2876.call(this,x,y);
default:
return _PLUS___2877.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2877.cljs$lang$applyTo;
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
var ___2881 = (function (x){
return (- x);
});
var ___2882 = (function (x,y){
return (x - y);
});
var ___2883 = (function() { 
var G__2885__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2885 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2885__delegate.call(this, x, y, more);
};
G__2885.cljs$lang$maxFixedArity = 2;
G__2885.cljs$lang$applyTo = (function (arglist__2886){
var x = cljs.core.first(arglist__2886);
var y = cljs.core.first(cljs.core.next(arglist__2886));
var more = cljs.core.rest(cljs.core.next(arglist__2886));
return G__2885__delegate.call(this, x, y, more);
});
return G__2885;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2881.call(this,x);
case  2 :
return ___2882.call(this,x,y);
default:
return ___2883.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2883.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2887 = (function (){
return 1;
});
var _STAR___2888 = (function (x){
return x;
});
var _STAR___2889 = (function (x,y){
return (x * y);
});
var _STAR___2890 = (function() { 
var G__2892__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2892 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2892__delegate.call(this, x, y, more);
};
G__2892.cljs$lang$maxFixedArity = 2;
G__2892.cljs$lang$applyTo = (function (arglist__2893){
var x = cljs.core.first(arglist__2893);
var y = cljs.core.first(cljs.core.next(arglist__2893));
var more = cljs.core.rest(cljs.core.next(arglist__2893));
return G__2892__delegate.call(this, x, y, more);
});
return G__2892;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2887.call(this);
case  1 :
return _STAR___2888.call(this,x);
case  2 :
return _STAR___2889.call(this,x,y);
default:
return _STAR___2890.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2890.cljs$lang$applyTo;
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
var _SLASH___2894 = (function (x){
return (1 / x);
});
var _SLASH___2895 = (function (x,y){
return (x / y);
});
var _SLASH___2896 = (function() { 
var G__2898__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2898 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2898__delegate.call(this, x, y, more);
};
G__2898.cljs$lang$maxFixedArity = 2;
G__2898.cljs$lang$applyTo = (function (arglist__2899){
var x = cljs.core.first(arglist__2899);
var y = cljs.core.first(cljs.core.next(arglist__2899));
var more = cljs.core.rest(cljs.core.next(arglist__2899));
return G__2898__delegate.call(this, x, y, more);
});
return G__2898;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2894.call(this,x);
case  2 :
return _SLASH___2895.call(this,x,y);
default:
return _SLASH___2896.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2896.cljs$lang$applyTo;
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
var _LT___2900 = (function (x){
return true;
});
var _LT___2901 = (function (x,y){
return (x < y);
});
var _LT___2902 = (function() { 
var G__2904__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2905 = y;
var G__2906 = cljs.core.first.call(null,more);
var G__2907 = cljs.core.next.call(null,more);
x = G__2905;
y = G__2906;
more = G__2907;
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
var G__2904 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2904__delegate.call(this, x, y, more);
};
G__2904.cljs$lang$maxFixedArity = 2;
G__2904.cljs$lang$applyTo = (function (arglist__2908){
var x = cljs.core.first(arglist__2908);
var y = cljs.core.first(cljs.core.next(arglist__2908));
var more = cljs.core.rest(cljs.core.next(arglist__2908));
return G__2904__delegate.call(this, x, y, more);
});
return G__2904;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2900.call(this,x);
case  2 :
return _LT___2901.call(this,x,y);
default:
return _LT___2902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2902.cljs$lang$applyTo;
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
var _LT__EQ___2909 = (function (x){
return true;
});
var _LT__EQ___2910 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2911 = (function() { 
var G__2913__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2914 = y;
var G__2915 = cljs.core.first.call(null,more);
var G__2916 = cljs.core.next.call(null,more);
x = G__2914;
y = G__2915;
more = G__2916;
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
var G__2913 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2913__delegate.call(this, x, y, more);
};
G__2913.cljs$lang$maxFixedArity = 2;
G__2913.cljs$lang$applyTo = (function (arglist__2917){
var x = cljs.core.first(arglist__2917);
var y = cljs.core.first(cljs.core.next(arglist__2917));
var more = cljs.core.rest(cljs.core.next(arglist__2917));
return G__2913__delegate.call(this, x, y, more);
});
return G__2913;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2909.call(this,x);
case  2 :
return _LT__EQ___2910.call(this,x,y);
default:
return _LT__EQ___2911.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2911.cljs$lang$applyTo;
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
var _GT___2918 = (function (x){
return true;
});
var _GT___2919 = (function (x,y){
return (x > y);
});
var _GT___2920 = (function() { 
var G__2922__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2923 = y;
var G__2924 = cljs.core.first.call(null,more);
var G__2925 = cljs.core.next.call(null,more);
x = G__2923;
y = G__2924;
more = G__2925;
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
var G__2922 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2922__delegate.call(this, x, y, more);
};
G__2922.cljs$lang$maxFixedArity = 2;
G__2922.cljs$lang$applyTo = (function (arglist__2926){
var x = cljs.core.first(arglist__2926);
var y = cljs.core.first(cljs.core.next(arglist__2926));
var more = cljs.core.rest(cljs.core.next(arglist__2926));
return G__2922__delegate.call(this, x, y, more);
});
return G__2922;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2918.call(this,x);
case  2 :
return _GT___2919.call(this,x,y);
default:
return _GT___2920.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2920.cljs$lang$applyTo;
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
var _GT__EQ___2927 = (function (x){
return true;
});
var _GT__EQ___2928 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2929 = (function() { 
var G__2931__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2932 = y;
var G__2933 = cljs.core.first.call(null,more);
var G__2934 = cljs.core.next.call(null,more);
x = G__2932;
y = G__2933;
more = G__2934;
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
var G__2931 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2931__delegate.call(this, x, y, more);
};
G__2931.cljs$lang$maxFixedArity = 2;
G__2931.cljs$lang$applyTo = (function (arglist__2935){
var x = cljs.core.first(arglist__2935);
var y = cljs.core.first(cljs.core.next(arglist__2935));
var more = cljs.core.rest(cljs.core.next(arglist__2935));
return G__2931__delegate.call(this, x, y, more);
});
return G__2931;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2927.call(this,x);
case  2 :
return _GT__EQ___2928.call(this,x,y);
default:
return _GT__EQ___2929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2929.cljs$lang$applyTo;
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
var max__2936 = (function (x){
return x;
});
var max__2937 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2938 = (function() { 
var G__2940__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2940 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2940__delegate.call(this, x, y, more);
};
G__2940.cljs$lang$maxFixedArity = 2;
G__2940.cljs$lang$applyTo = (function (arglist__2941){
var x = cljs.core.first(arglist__2941);
var y = cljs.core.first(cljs.core.next(arglist__2941));
var more = cljs.core.rest(cljs.core.next(arglist__2941));
return G__2940__delegate.call(this, x, y, more);
});
return G__2940;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2936.call(this,x);
case  2 :
return max__2937.call(this,x,y);
default:
return max__2938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2938.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2942 = (function (x){
return x;
});
var min__2943 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2944 = (function() { 
var G__2946__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2946 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2946__delegate.call(this, x, y, more);
};
G__2946.cljs$lang$maxFixedArity = 2;
G__2946.cljs$lang$applyTo = (function (arglist__2947){
var x = cljs.core.first(arglist__2947);
var y = cljs.core.first(cljs.core.next(arglist__2947));
var more = cljs.core.rest(cljs.core.next(arglist__2947));
return G__2946__delegate.call(this, x, y, more);
});
return G__2946;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2942.call(this,x);
case  2 :
return min__2943.call(this,x,y);
default:
return min__2944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2944.cljs$lang$applyTo;
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
var rem__2948 = (n % d);

return cljs.core.fix.call(null,((n - rem__2948) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2949 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2949));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2950 = (function (){
return Math.random.call(null);
});
var rand__2951 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2950.call(this);
case  1 :
return rand__2951.call(this,n);
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
var _EQ__EQ___2953 = (function (x){
return true;
});
var _EQ__EQ___2954 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2955 = (function() { 
var G__2957__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2958 = y;
var G__2959 = cljs.core.first.call(null,more);
var G__2960 = cljs.core.next.call(null,more);
x = G__2958;
y = G__2959;
more = G__2960;
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
var G__2957 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2957__delegate.call(this, x, y, more);
};
G__2957.cljs$lang$maxFixedArity = 2;
G__2957.cljs$lang$applyTo = (function (arglist__2961){
var x = cljs.core.first(arglist__2961);
var y = cljs.core.first(cljs.core.next(arglist__2961));
var more = cljs.core.rest(cljs.core.next(arglist__2961));
return G__2957__delegate.call(this, x, y, more);
});
return G__2957;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2953.call(this,x);
case  2 :
return _EQ__EQ___2954.call(this,x,y);
default:
return _EQ__EQ___2955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2955.cljs$lang$applyTo;
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
var n__2962 = n;
var xs__2963 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____2964 = xs__2963;

if(cljs.core.truth_(and__3546__auto____2964))
{return (n__2962 > 0);
} else
{return and__3546__auto____2964;
}
})()))
{{
var G__2965 = (n__2962 - 1);
var G__2966 = cljs.core.next.call(null,xs__2963);
n__2962 = G__2965;
xs__2963 = G__2966;
continue;
}
} else
{return xs__2963;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2971 = null;
var G__2971__2972 = (function (coll,n){
var temp__3695__auto____2967 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2967))
{var xs__2968 = temp__3695__auto____2967;

return cljs.core.first.call(null,xs__2968);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__2971__2973 = (function (coll,n,not_found){
var temp__3695__auto____2969 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____2969))
{var xs__2970 = temp__3695__auto____2969;

return cljs.core.first.call(null,xs__2970);
} else
{return not_found;
}
});
G__2971 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2971__2972.call(this,coll,n);
case  3 :
return G__2971__2973.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2971;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___2975 = (function (){
return "";
});
var str_STAR___2976 = (function (x){
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
var str_STAR___2977 = (function() { 
var G__2979__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2980 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__2981 = cljs.core.next.call(null,more);
sb = G__2980;
more = G__2981;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__2979 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2979__delegate.call(this, x, ys);
};
G__2979.cljs$lang$maxFixedArity = 1;
G__2979.cljs$lang$applyTo = (function (arglist__2982){
var x = cljs.core.first(arglist__2982);
var ys = cljs.core.rest(arglist__2982);
return G__2979__delegate.call(this, x, ys);
});
return G__2979;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___2975.call(this);
case  1 :
return str_STAR___2976.call(this,x);
default:
return str_STAR___2977.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___2977.cljs$lang$applyTo;
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
var str__2983 = (function (){
return "";
});
var str__2984 = (function (x){
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
var str__2985 = (function() { 
var G__2987__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__2987 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2987__delegate.call(this, x, ys);
};
G__2987.cljs$lang$maxFixedArity = 1;
G__2987.cljs$lang$applyTo = (function (arglist__2988){
var x = cljs.core.first(arglist__2988);
var ys = cljs.core.rest(arglist__2988);
return G__2987__delegate.call(this, x, ys);
});
return G__2987;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2983.call(this);
case  1 :
return str__2984.call(this,x);
default:
return str__2985.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2985.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2989 = (function (s,start){
return s.substring(start);
});
var subs__2990 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2989.call(this,s,start);
case  3 :
return subs__2990.call(this,s,start,end);
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
var symbol__2992 = (function (name){
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
var symbol__2993 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2992.call(this,ns);
case  2 :
return symbol__2993.call(this,ns,name);
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
var keyword__2995 = (function (name){
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
var keyword__2996 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2995.call(this,ns);
case  2 :
return keyword__2996.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2998 = cljs.core.seq.call(null,x);
var ys__2999 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2998)))
{return cljs.core.nil_QMARK_.call(null,ys__2999);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2999)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2998),cljs.core.first.call(null,ys__2999))))
{{
var G__3000 = cljs.core.next.call(null,xs__2998);
var G__3001 = cljs.core.next.call(null,ys__2999);
xs__2998 = G__3000;
ys__2999 = G__3001;
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
return cljs.core.reduce.call(null,(function (p1__3002_SHARP_,p2__3003_SHARP_){
return cljs.core.hash_combine.call(null,p1__3002_SHARP_,cljs.core.hash.call(null,p2__3003_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3004__3005 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3004__3005))
{var G__3007__3009 = cljs.core.first.call(null,G__3004__3005);
var vec__3008__3010 = G__3007__3009;
var key_name__3011 = cljs.core.nth.call(null,vec__3008__3010,0,null);
var f__3012 = cljs.core.nth.call(null,vec__3008__3010,1,null);
var G__3004__3013 = G__3004__3005;

var G__3007__3014 = G__3007__3009;
var G__3004__3015 = G__3004__3013;

while(true){
var vec__3016__3017 = G__3007__3014;
var key_name__3018 = cljs.core.nth.call(null,vec__3016__3017,0,null);
var f__3019 = cljs.core.nth.call(null,vec__3016__3017,1,null);
var G__3004__3020 = G__3004__3015;

var str_name__3021 = cljs.core.name.call(null,key_name__3018);

obj[str_name__3021] = f__3019;
var temp__3698__auto____3022 = cljs.core.next.call(null,G__3004__3020);

if(cljs.core.truth_(temp__3698__auto____3022))
{var G__3004__3023 = temp__3698__auto____3022;

{
var G__3024 = cljs.core.first.call(null,G__3004__3023);
var G__3025 = G__3004__3023;
G__3007__3014 = G__3024;
G__3004__3015 = G__3025;
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
var this__3026 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3027 = this;
return (new cljs.core.List(this__3027.meta,o,coll,(this__3027.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3028 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3029 = this;
return this__3029.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3030 = this;
return this__3030.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3031 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3032 = this;
return this__3032.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3033 = this;
return this__3033.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3034 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3035 = this;
return (new cljs.core.List(meta,this__3035.first,this__3035.rest,this__3035.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3036 = this;
return this__3036.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3037 = this;
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
var this__3038 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3039 = this;
return (new cljs.core.List(this__3039.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3040 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3041 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3042 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3043 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3044 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3045 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3046 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3047 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3048 = this;
return this__3048.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3049 = this;
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
list.cljs$lang$applyTo = (function (arglist__3050){
var items = cljs.core.seq( arglist__3050 );;
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
var this__3051 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3052 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3053 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3054 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3054.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3055 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3056 = this;
return this__3056.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3057 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3057.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3057.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3058 = this;
return this__3058.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3059 = this;
return (new cljs.core.Cons(meta,this__3059.first,this__3059.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__3060 = null;
var G__3060__3061 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3060__3062 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3060 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3060__3061.call(this,string,f);
case  3 :
return G__3060__3062.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3060;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3064 = null;
var G__3064__3065 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3064__3066 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3064 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3064__3065.call(this,string,k);
case  3 :
return G__3064__3066.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3064;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3068 = null;
var G__3068__3069 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3068__3070 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3068 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3068__3069.call(this,string,n);
case  3 :
return G__3068__3070.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3068;
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
var G__3072 = null;
var G__3072__3073 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__3072__3074 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__3072 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__3072__3073.call(this,_,coll);
case  3 :
return G__3072__3074.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3072;
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
var x__3076 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3076;
} else
{lazy_seq.x = x__3076.call(null);
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
var this__3077 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3078 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3079 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3080 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3080.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3081 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3082 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3083 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3084 = this;
return this__3084.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3085 = this;
return (new cljs.core.LazySeq(meta,this__3085.realized,this__3085.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3086 = cljs.core.array.call(null);

var s__3087 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3087)))
{ary__3086.push(cljs.core.first.call(null,s__3087));
{
var G__3088 = cljs.core.next.call(null,s__3087);
s__3087 = G__3088;
continue;
}
} else
{return ary__3086;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3089 = s;
var i__3090 = n;
var sum__3091 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3092 = (i__3090 > 0);

if(cljs.core.truth_(and__3546__auto____3092))
{return cljs.core.seq.call(null,s__3089);
} else
{return and__3546__auto____3092;
}
})()))
{{
var G__3093 = cljs.core.next.call(null,s__3089);
var G__3094 = (i__3090 - 1);
var G__3095 = (sum__3091 + 1);
s__3089 = G__3093;
i__3090 = G__3094;
sum__3091 = G__3095;
continue;
}
} else
{return sum__3091;
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
var concat__3099 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3100 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3101 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3096 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3096))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3096),concat.call(null,cljs.core.rest.call(null,s__3096),y));
} else
{return y;
}
})));
});
var concat__3102 = (function() { 
var G__3104__delegate = function (x,y,zs){
var cat__3098 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3097 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3097))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3097),cat.call(null,cljs.core.rest.call(null,xys__3097),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3098.call(null,concat.call(null,x,y),zs);
};
var G__3104 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3104__delegate.call(this, x, y, zs);
};
G__3104.cljs$lang$maxFixedArity = 2;
G__3104.cljs$lang$applyTo = (function (arglist__3105){
var x = cljs.core.first(arglist__3105);
var y = cljs.core.first(cljs.core.next(arglist__3105));
var zs = cljs.core.rest(cljs.core.next(arglist__3105));
return G__3104__delegate.call(this, x, y, zs);
});
return G__3104;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3099.call(this);
case  1 :
return concat__3100.call(this,x);
case  2 :
return concat__3101.call(this,x,y);
default:
return concat__3102.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3102.cljs$lang$applyTo;
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
var list_STAR___3106 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3107 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3108 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3109 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3110 = (function() { 
var G__3112__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3112 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3112__delegate.call(this, a, b, c, d, more);
};
G__3112.cljs$lang$maxFixedArity = 4;
G__3112.cljs$lang$applyTo = (function (arglist__3113){
var a = cljs.core.first(arglist__3113);
var b = cljs.core.first(cljs.core.next(arglist__3113));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3113)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3113))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3113))));
return G__3112__delegate.call(this, a, b, c, d, more);
});
return G__3112;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3106.call(this,a);
case  2 :
return list_STAR___3107.call(this,a,b);
case  3 :
return list_STAR___3108.call(this,a,b,c);
case  4 :
return list_STAR___3109.call(this,a,b,c,d);
default:
return list_STAR___3110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3110.cljs$lang$applyTo;
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
var apply__3123 = (function (f,args){
var fixed_arity__3114 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3114 + 1)) <= fixed_arity__3114)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3124 = (function (f,x,args){
var arglist__3115 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3116 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3115,fixed_arity__3116) <= fixed_arity__3116)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3115));
} else
{return f.cljs$lang$applyTo(arglist__3115);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3115));
}
});
var apply__3125 = (function (f,x,y,args){
var arglist__3117 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3118 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3117,fixed_arity__3118) <= fixed_arity__3118)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3117));
} else
{return f.cljs$lang$applyTo(arglist__3117);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3117));
}
});
var apply__3126 = (function (f,x,y,z,args){
var arglist__3119 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3120 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3119,fixed_arity__3120) <= fixed_arity__3120)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3119));
} else
{return f.cljs$lang$applyTo(arglist__3119);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3119));
}
});
var apply__3127 = (function() { 
var G__3129__delegate = function (f,a,b,c,d,args){
var arglist__3121 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3122 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3121,fixed_arity__3122) <= fixed_arity__3122)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3121));
} else
{return f.cljs$lang$applyTo(arglist__3121);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3121));
}
};
var G__3129 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3129__delegate.call(this, f, a, b, c, d, args);
};
G__3129.cljs$lang$maxFixedArity = 5;
G__3129.cljs$lang$applyTo = (function (arglist__3130){
var f = cljs.core.first(arglist__3130);
var a = cljs.core.first(cljs.core.next(arglist__3130));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3130)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3130))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3130)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3130)))));
return G__3129__delegate.call(this, f, a, b, c, d, args);
});
return G__3129;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3123.call(this,f,a);
case  3 :
return apply__3124.call(this,f,a,b);
case  4 :
return apply__3125.call(this,f,a,b,c);
case  5 :
return apply__3126.call(this,f,a,b,c,d);
default:
return apply__3127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3127.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3131){
var obj = cljs.core.first(arglist__3131);
var f = cljs.core.first(cljs.core.next(arglist__3131));
var args = cljs.core.rest(cljs.core.next(arglist__3131));
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
var not_EQ___3132 = (function (x){
return false;
});
var not_EQ___3133 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3134 = (function() { 
var G__3136__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3136 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3136__delegate.call(this, x, y, more);
};
G__3136.cljs$lang$maxFixedArity = 2;
G__3136.cljs$lang$applyTo = (function (arglist__3137){
var x = cljs.core.first(arglist__3137);
var y = cljs.core.first(cljs.core.next(arglist__3137));
var more = cljs.core.rest(cljs.core.next(arglist__3137));
return G__3136__delegate.call(this, x, y, more);
});
return G__3136;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3132.call(this,x);
case  2 :
return not_EQ___3133.call(this,x,y);
default:
return not_EQ___3134.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3134.cljs$lang$applyTo;
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
var G__3138 = pred;
var G__3139 = cljs.core.next.call(null,coll);
pred = G__3138;
coll = G__3139;
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
{var or__3548__auto____3140 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3140))
{return or__3548__auto____3140;
} else
{{
var G__3141 = pred;
var G__3142 = cljs.core.next.call(null,coll);
pred = G__3141;
coll = G__3142;
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
var G__3143 = null;
var G__3143__3144 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3143__3145 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3143__3146 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3143__3147 = (function() { 
var G__3149__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3149 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3149__delegate.call(this, x, y, zs);
};
G__3149.cljs$lang$maxFixedArity = 2;
G__3149.cljs$lang$applyTo = (function (arglist__3150){
var x = cljs.core.first(arglist__3150);
var y = cljs.core.first(cljs.core.next(arglist__3150));
var zs = cljs.core.rest(cljs.core.next(arglist__3150));
return G__3149__delegate.call(this, x, y, zs);
});
return G__3149;
})()
;
G__3143 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3143__3144.call(this);
case  1 :
return G__3143__3145.call(this,x);
case  2 :
return G__3143__3146.call(this,x,y);
default:
return G__3143__3147.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3143.cljs$lang$maxFixedArity = 2;
G__3143.cljs$lang$applyTo = G__3143__3147.cljs$lang$applyTo;
return G__3143;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3151__delegate = function (args){
return x;
};
var G__3151 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3151__delegate.call(this, args);
};
G__3151.cljs$lang$maxFixedArity = 0;
G__3151.cljs$lang$applyTo = (function (arglist__3152){
var args = cljs.core.seq( arglist__3152 );;
return G__3151__delegate.call(this, args);
});
return G__3151;
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
var comp__3156 = (function (){
return cljs.core.identity;
});
var comp__3157 = (function (f){
return f;
});
var comp__3158 = (function (f,g){
return (function() {
var G__3162 = null;
var G__3162__3163 = (function (){
return f.call(null,g.call(null));
});
var G__3162__3164 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3162__3165 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3162__3166 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3162__3167 = (function() { 
var G__3169__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3169 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3169__delegate.call(this, x, y, z, args);
};
G__3169.cljs$lang$maxFixedArity = 3;
G__3169.cljs$lang$applyTo = (function (arglist__3170){
var x = cljs.core.first(arglist__3170);
var y = cljs.core.first(cljs.core.next(arglist__3170));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3170)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3170)));
return G__3169__delegate.call(this, x, y, z, args);
});
return G__3169;
})()
;
G__3162 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3162__3163.call(this);
case  1 :
return G__3162__3164.call(this,x);
case  2 :
return G__3162__3165.call(this,x,y);
case  3 :
return G__3162__3166.call(this,x,y,z);
default:
return G__3162__3167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3162.cljs$lang$maxFixedArity = 3;
G__3162.cljs$lang$applyTo = G__3162__3167.cljs$lang$applyTo;
return G__3162;
})()
});
var comp__3159 = (function (f,g,h){
return (function() {
var G__3171 = null;
var G__3171__3172 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3171__3173 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3171__3174 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3171__3175 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3171__3176 = (function() { 
var G__3178__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3178 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3178__delegate.call(this, x, y, z, args);
};
G__3178.cljs$lang$maxFixedArity = 3;
G__3178.cljs$lang$applyTo = (function (arglist__3179){
var x = cljs.core.first(arglist__3179);
var y = cljs.core.first(cljs.core.next(arglist__3179));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3179)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3179)));
return G__3178__delegate.call(this, x, y, z, args);
});
return G__3178;
})()
;
G__3171 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3171__3172.call(this);
case  1 :
return G__3171__3173.call(this,x);
case  2 :
return G__3171__3174.call(this,x,y);
case  3 :
return G__3171__3175.call(this,x,y,z);
default:
return G__3171__3176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3171.cljs$lang$maxFixedArity = 3;
G__3171.cljs$lang$applyTo = G__3171__3176.cljs$lang$applyTo;
return G__3171;
})()
});
var comp__3160 = (function() { 
var G__3180__delegate = function (f1,f2,f3,fs){
var fs__3153 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3181__delegate = function (args){
var ret__3154 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3153),args);
var fs__3155 = cljs.core.next.call(null,fs__3153);

while(true){
if(cljs.core.truth_(fs__3155))
{{
var G__3182 = cljs.core.first.call(null,fs__3155).call(null,ret__3154);
var G__3183 = cljs.core.next.call(null,fs__3155);
ret__3154 = G__3182;
fs__3155 = G__3183;
continue;
}
} else
{return ret__3154;
}
break;
}
};
var G__3181 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3181__delegate.call(this, args);
};
G__3181.cljs$lang$maxFixedArity = 0;
G__3181.cljs$lang$applyTo = (function (arglist__3184){
var args = cljs.core.seq( arglist__3184 );;
return G__3181__delegate.call(this, args);
});
return G__3181;
})()
;
};
var G__3180 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3180__delegate.call(this, f1, f2, f3, fs);
};
G__3180.cljs$lang$maxFixedArity = 3;
G__3180.cljs$lang$applyTo = (function (arglist__3185){
var f1 = cljs.core.first(arglist__3185);
var f2 = cljs.core.first(cljs.core.next(arglist__3185));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3185)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3185)));
return G__3180__delegate.call(this, f1, f2, f3, fs);
});
return G__3180;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3156.call(this);
case  1 :
return comp__3157.call(this,f1);
case  2 :
return comp__3158.call(this,f1,f2);
case  3 :
return comp__3159.call(this,f1,f2,f3);
default:
return comp__3160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3160.cljs$lang$applyTo;
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
var partial__3186 = (function (f,arg1){
return (function() { 
var G__3191__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3191 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3191__delegate.call(this, args);
};
G__3191.cljs$lang$maxFixedArity = 0;
G__3191.cljs$lang$applyTo = (function (arglist__3192){
var args = cljs.core.seq( arglist__3192 );;
return G__3191__delegate.call(this, args);
});
return G__3191;
})()
;
});
var partial__3187 = (function (f,arg1,arg2){
return (function() { 
var G__3193__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3193 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3193__delegate.call(this, args);
};
G__3193.cljs$lang$maxFixedArity = 0;
G__3193.cljs$lang$applyTo = (function (arglist__3194){
var args = cljs.core.seq( arglist__3194 );;
return G__3193__delegate.call(this, args);
});
return G__3193;
})()
;
});
var partial__3188 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3195__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3195 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3195__delegate.call(this, args);
};
G__3195.cljs$lang$maxFixedArity = 0;
G__3195.cljs$lang$applyTo = (function (arglist__3196){
var args = cljs.core.seq( arglist__3196 );;
return G__3195__delegate.call(this, args);
});
return G__3195;
})()
;
});
var partial__3189 = (function() { 
var G__3197__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3198__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3198 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3198__delegate.call(this, args);
};
G__3198.cljs$lang$maxFixedArity = 0;
G__3198.cljs$lang$applyTo = (function (arglist__3199){
var args = cljs.core.seq( arglist__3199 );;
return G__3198__delegate.call(this, args);
});
return G__3198;
})()
;
};
var G__3197 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3197__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3197.cljs$lang$maxFixedArity = 4;
G__3197.cljs$lang$applyTo = (function (arglist__3200){
var f = cljs.core.first(arglist__3200);
var arg1 = cljs.core.first(cljs.core.next(arglist__3200));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3200)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3200))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3200))));
return G__3197__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3197;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3186.call(this,f,arg1);
case  3 :
return partial__3187.call(this,f,arg1,arg2);
case  4 :
return partial__3188.call(this,f,arg1,arg2,arg3);
default:
return partial__3189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3189.cljs$lang$applyTo;
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
var fnil__3201 = (function (f,x){
return (function() {
var G__3205 = null;
var G__3205__3206 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3205__3207 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3205__3208 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3205__3209 = (function() { 
var G__3211__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3211 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3211__delegate.call(this, a, b, c, ds);
};
G__3211.cljs$lang$maxFixedArity = 3;
G__3211.cljs$lang$applyTo = (function (arglist__3212){
var a = cljs.core.first(arglist__3212);
var b = cljs.core.first(cljs.core.next(arglist__3212));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3212)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3212)));
return G__3211__delegate.call(this, a, b, c, ds);
});
return G__3211;
})()
;
G__3205 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3205__3206.call(this,a);
case  2 :
return G__3205__3207.call(this,a,b);
case  3 :
return G__3205__3208.call(this,a,b,c);
default:
return G__3205__3209.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3205.cljs$lang$maxFixedArity = 3;
G__3205.cljs$lang$applyTo = G__3205__3209.cljs$lang$applyTo;
return G__3205;
})()
});
var fnil__3202 = (function (f,x,y){
return (function() {
var G__3213 = null;
var G__3213__3214 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3213__3215 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3213__3216 = (function() { 
var G__3218__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3218 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3218__delegate.call(this, a, b, c, ds);
};
G__3218.cljs$lang$maxFixedArity = 3;
G__3218.cljs$lang$applyTo = (function (arglist__3219){
var a = cljs.core.first(arglist__3219);
var b = cljs.core.first(cljs.core.next(arglist__3219));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3219)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3219)));
return G__3218__delegate.call(this, a, b, c, ds);
});
return G__3218;
})()
;
G__3213 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3213__3214.call(this,a,b);
case  3 :
return G__3213__3215.call(this,a,b,c);
default:
return G__3213__3216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3213.cljs$lang$maxFixedArity = 3;
G__3213.cljs$lang$applyTo = G__3213__3216.cljs$lang$applyTo;
return G__3213;
})()
});
var fnil__3203 = (function (f,x,y,z){
return (function() {
var G__3220 = null;
var G__3220__3221 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3220__3222 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3220__3223 = (function() { 
var G__3225__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3225 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3225__delegate.call(this, a, b, c, ds);
};
G__3225.cljs$lang$maxFixedArity = 3;
G__3225.cljs$lang$applyTo = (function (arglist__3226){
var a = cljs.core.first(arglist__3226);
var b = cljs.core.first(cljs.core.next(arglist__3226));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3226)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3226)));
return G__3225__delegate.call(this, a, b, c, ds);
});
return G__3225;
})()
;
G__3220 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3220__3221.call(this,a,b);
case  3 :
return G__3220__3222.call(this,a,b,c);
default:
return G__3220__3223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3220.cljs$lang$maxFixedArity = 3;
G__3220.cljs$lang$applyTo = G__3220__3223.cljs$lang$applyTo;
return G__3220;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3201.call(this,f,x);
case  3 :
return fnil__3202.call(this,f,x,y);
case  4 :
return fnil__3203.call(this,f,x,y,z);
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
var mapi__3229 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3227 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3227))
{var s__3228 = temp__3698__auto____3227;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3228)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3228)));
} else
{return null;
}
})));
});

return mapi__3229.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3230 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3230))
{var s__3231 = temp__3698__auto____3230;

var x__3232 = f.call(null,cljs.core.first.call(null,s__3231));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3232)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3231));
} else
{return cljs.core.cons.call(null,x__3232,keep.call(null,f,cljs.core.rest.call(null,s__3231)));
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
var keepi__3242 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3239 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3239))
{var s__3240 = temp__3698__auto____3239;

var x__3241 = f.call(null,idx,cljs.core.first.call(null,s__3240));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3241)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3240));
} else
{return cljs.core.cons.call(null,x__3241,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3240)));
}
} else
{return null;
}
})));
});

return keepi__3242.call(null,0,coll);
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
var every_pred__3287 = (function (p){
return (function() {
var ep1 = null;
var ep1__3292 = (function (){
return true;
});
var ep1__3293 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3294 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3249 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3249))
{return p.call(null,y);
} else
{return and__3546__auto____3249;
}
})());
});
var ep1__3295 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3250 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3250))
{var and__3546__auto____3251 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3251))
{return p.call(null,z);
} else
{return and__3546__auto____3251;
}
} else
{return and__3546__auto____3250;
}
})());
});
var ep1__3296 = (function() { 
var G__3298__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3252 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3252))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3252;
}
})());
};
var G__3298 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3298__delegate.call(this, x, y, z, args);
};
G__3298.cljs$lang$maxFixedArity = 3;
G__3298.cljs$lang$applyTo = (function (arglist__3299){
var x = cljs.core.first(arglist__3299);
var y = cljs.core.first(cljs.core.next(arglist__3299));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3299)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3299)));
return G__3298__delegate.call(this, x, y, z, args);
});
return G__3298;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3292.call(this);
case  1 :
return ep1__3293.call(this,x);
case  2 :
return ep1__3294.call(this,x,y);
case  3 :
return ep1__3295.call(this,x,y,z);
default:
return ep1__3296.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3296.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3288 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3300 = (function (){
return true;
});
var ep2__3301 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3253 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3253))
{return p2.call(null,x);
} else
{return and__3546__auto____3253;
}
})());
});
var ep2__3302 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3254 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3254))
{var and__3546__auto____3255 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3255))
{var and__3546__auto____3256 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3256))
{return p2.call(null,y);
} else
{return and__3546__auto____3256;
}
} else
{return and__3546__auto____3255;
}
} else
{return and__3546__auto____3254;
}
})());
});
var ep2__3303 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3257 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3257))
{var and__3546__auto____3258 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3258))
{var and__3546__auto____3259 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3259))
{var and__3546__auto____3260 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3260))
{var and__3546__auto____3261 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3261))
{return p2.call(null,z);
} else
{return and__3546__auto____3261;
}
} else
{return and__3546__auto____3260;
}
} else
{return and__3546__auto____3259;
}
} else
{return and__3546__auto____3258;
}
} else
{return and__3546__auto____3257;
}
})());
});
var ep2__3304 = (function() { 
var G__3306__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3262 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3262))
{return cljs.core.every_QMARK_.call(null,(function (p1__3233_SHARP_){
var and__3546__auto____3263 = p1.call(null,p1__3233_SHARP_);

if(cljs.core.truth_(and__3546__auto____3263))
{return p2.call(null,p1__3233_SHARP_);
} else
{return and__3546__auto____3263;
}
}),args);
} else
{return and__3546__auto____3262;
}
})());
};
var G__3306 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3306__delegate.call(this, x, y, z, args);
};
G__3306.cljs$lang$maxFixedArity = 3;
G__3306.cljs$lang$applyTo = (function (arglist__3307){
var x = cljs.core.first(arglist__3307);
var y = cljs.core.first(cljs.core.next(arglist__3307));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3307)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3307)));
return G__3306__delegate.call(this, x, y, z, args);
});
return G__3306;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3300.call(this);
case  1 :
return ep2__3301.call(this,x);
case  2 :
return ep2__3302.call(this,x,y);
case  3 :
return ep2__3303.call(this,x,y,z);
default:
return ep2__3304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3304.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3289 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3308 = (function (){
return true;
});
var ep3__3309 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3264 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3264))
{var and__3546__auto____3265 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3265))
{return p3.call(null,x);
} else
{return and__3546__auto____3265;
}
} else
{return and__3546__auto____3264;
}
})());
});
var ep3__3310 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3266 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3266))
{var and__3546__auto____3267 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3267))
{var and__3546__auto____3268 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3268))
{var and__3546__auto____3269 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3269))
{var and__3546__auto____3270 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3270))
{return p3.call(null,y);
} else
{return and__3546__auto____3270;
}
} else
{return and__3546__auto____3269;
}
} else
{return and__3546__auto____3268;
}
} else
{return and__3546__auto____3267;
}
} else
{return and__3546__auto____3266;
}
})());
});
var ep3__3311 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3271 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3271))
{var and__3546__auto____3272 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3272))
{var and__3546__auto____3273 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3273))
{var and__3546__auto____3274 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3274))
{var and__3546__auto____3275 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3275))
{var and__3546__auto____3276 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3276))
{var and__3546__auto____3277 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3277))
{var and__3546__auto____3278 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3278))
{return p3.call(null,z);
} else
{return and__3546__auto____3278;
}
} else
{return and__3546__auto____3277;
}
} else
{return and__3546__auto____3276;
}
} else
{return and__3546__auto____3275;
}
} else
{return and__3546__auto____3274;
}
} else
{return and__3546__auto____3273;
}
} else
{return and__3546__auto____3272;
}
} else
{return and__3546__auto____3271;
}
})());
});
var ep3__3312 = (function() { 
var G__3314__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3279 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3279))
{return cljs.core.every_QMARK_.call(null,(function (p1__3234_SHARP_){
var and__3546__auto____3280 = p1.call(null,p1__3234_SHARP_);

if(cljs.core.truth_(and__3546__auto____3280))
{var and__3546__auto____3281 = p2.call(null,p1__3234_SHARP_);

if(cljs.core.truth_(and__3546__auto____3281))
{return p3.call(null,p1__3234_SHARP_);
} else
{return and__3546__auto____3281;
}
} else
{return and__3546__auto____3280;
}
}),args);
} else
{return and__3546__auto____3279;
}
})());
};
var G__3314 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3314__delegate.call(this, x, y, z, args);
};
G__3314.cljs$lang$maxFixedArity = 3;
G__3314.cljs$lang$applyTo = (function (arglist__3315){
var x = cljs.core.first(arglist__3315);
var y = cljs.core.first(cljs.core.next(arglist__3315));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3315)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3315)));
return G__3314__delegate.call(this, x, y, z, args);
});
return G__3314;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3308.call(this);
case  1 :
return ep3__3309.call(this,x);
case  2 :
return ep3__3310.call(this,x,y);
case  3 :
return ep3__3311.call(this,x,y,z);
default:
return ep3__3312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3312.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3290 = (function() { 
var G__3316__delegate = function (p1,p2,p3,ps){
var ps__3282 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3317 = (function (){
return true;
});
var epn__3318 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3235_SHARP_){
return p1__3235_SHARP_.call(null,x);
}),ps__3282);
});
var epn__3319 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3236_SHARP_){
var and__3546__auto____3283 = p1__3236_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3283))
{return p1__3236_SHARP_.call(null,y);
} else
{return and__3546__auto____3283;
}
}),ps__3282);
});
var epn__3320 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3237_SHARP_){
var and__3546__auto____3284 = p1__3237_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3284))
{var and__3546__auto____3285 = p1__3237_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3285))
{return p1__3237_SHARP_.call(null,z);
} else
{return and__3546__auto____3285;
}
} else
{return and__3546__auto____3284;
}
}),ps__3282);
});
var epn__3321 = (function() { 
var G__3323__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3286 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3286))
{return cljs.core.every_QMARK_.call(null,(function (p1__3238_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3238_SHARP_,args);
}),ps__3282);
} else
{return and__3546__auto____3286;
}
})());
};
var G__3323 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3323__delegate.call(this, x, y, z, args);
};
G__3323.cljs$lang$maxFixedArity = 3;
G__3323.cljs$lang$applyTo = (function (arglist__3324){
var x = cljs.core.first(arglist__3324);
var y = cljs.core.first(cljs.core.next(arglist__3324));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3324)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3324)));
return G__3323__delegate.call(this, x, y, z, args);
});
return G__3323;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3317.call(this);
case  1 :
return epn__3318.call(this,x);
case  2 :
return epn__3319.call(this,x,y);
case  3 :
return epn__3320.call(this,x,y,z);
default:
return epn__3321.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3321.cljs$lang$applyTo;
return epn;
})()
};
var G__3316 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3316__delegate.call(this, p1, p2, p3, ps);
};
G__3316.cljs$lang$maxFixedArity = 3;
G__3316.cljs$lang$applyTo = (function (arglist__3325){
var p1 = cljs.core.first(arglist__3325);
var p2 = cljs.core.first(cljs.core.next(arglist__3325));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3325)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3325)));
return G__3316__delegate.call(this, p1, p2, p3, ps);
});
return G__3316;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3287.call(this,p1);
case  2 :
return every_pred__3288.call(this,p1,p2);
case  3 :
return every_pred__3289.call(this,p1,p2,p3);
default:
return every_pred__3290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3290.cljs$lang$applyTo;
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
var some_fn__3365 = (function (p){
return (function() {
var sp1 = null;
var sp1__3370 = (function (){
return null;
});
var sp1__3371 = (function (x){
return p.call(null,x);
});
var sp1__3372 = (function (x,y){
var or__3548__auto____3327 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3327))
{return or__3548__auto____3327;
} else
{return p.call(null,y);
}
});
var sp1__3373 = (function (x,y,z){
var or__3548__auto____3328 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3328))
{return or__3548__auto____3328;
} else
{var or__3548__auto____3329 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3329))
{return or__3548__auto____3329;
} else
{return p.call(null,z);
}
}
});
var sp1__3374 = (function() { 
var G__3376__delegate = function (x,y,z,args){
var or__3548__auto____3330 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3330))
{return or__3548__auto____3330;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3376 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3376__delegate.call(this, x, y, z, args);
};
G__3376.cljs$lang$maxFixedArity = 3;
G__3376.cljs$lang$applyTo = (function (arglist__3377){
var x = cljs.core.first(arglist__3377);
var y = cljs.core.first(cljs.core.next(arglist__3377));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3377)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3377)));
return G__3376__delegate.call(this, x, y, z, args);
});
return G__3376;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3370.call(this);
case  1 :
return sp1__3371.call(this,x);
case  2 :
return sp1__3372.call(this,x,y);
case  3 :
return sp1__3373.call(this,x,y,z);
default:
return sp1__3374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3374.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3366 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3378 = (function (){
return null;
});
var sp2__3379 = (function (x){
var or__3548__auto____3331 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3331))
{return or__3548__auto____3331;
} else
{return p2.call(null,x);
}
});
var sp2__3380 = (function (x,y){
var or__3548__auto____3332 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3332))
{return or__3548__auto____3332;
} else
{var or__3548__auto____3333 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3333))
{return or__3548__auto____3333;
} else
{var or__3548__auto____3334 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3334))
{return or__3548__auto____3334;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3381 = (function (x,y,z){
var or__3548__auto____3335 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3335))
{return or__3548__auto____3335;
} else
{var or__3548__auto____3336 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3336))
{return or__3548__auto____3336;
} else
{var or__3548__auto____3337 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3337))
{return or__3548__auto____3337;
} else
{var or__3548__auto____3338 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3338))
{return or__3548__auto____3338;
} else
{var or__3548__auto____3339 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3339))
{return or__3548__auto____3339;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3382 = (function() { 
var G__3384__delegate = function (x,y,z,args){
var or__3548__auto____3340 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3340))
{return or__3548__auto____3340;
} else
{return cljs.core.some.call(null,(function (p1__3243_SHARP_){
var or__3548__auto____3341 = p1.call(null,p1__3243_SHARP_);

if(cljs.core.truth_(or__3548__auto____3341))
{return or__3548__auto____3341;
} else
{return p2.call(null,p1__3243_SHARP_);
}
}),args);
}
};
var G__3384 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3384__delegate.call(this, x, y, z, args);
};
G__3384.cljs$lang$maxFixedArity = 3;
G__3384.cljs$lang$applyTo = (function (arglist__3385){
var x = cljs.core.first(arglist__3385);
var y = cljs.core.first(cljs.core.next(arglist__3385));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3385)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3385)));
return G__3384__delegate.call(this, x, y, z, args);
});
return G__3384;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3378.call(this);
case  1 :
return sp2__3379.call(this,x);
case  2 :
return sp2__3380.call(this,x,y);
case  3 :
return sp2__3381.call(this,x,y,z);
default:
return sp2__3382.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3382.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3367 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3386 = (function (){
return null;
});
var sp3__3387 = (function (x){
var or__3548__auto____3342 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3342))
{return or__3548__auto____3342;
} else
{var or__3548__auto____3343 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3343))
{return or__3548__auto____3343;
} else
{return p3.call(null,x);
}
}
});
var sp3__3388 = (function (x,y){
var or__3548__auto____3344 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3344))
{return or__3548__auto____3344;
} else
{var or__3548__auto____3345 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3345))
{return or__3548__auto____3345;
} else
{var or__3548__auto____3346 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3346))
{return or__3548__auto____3346;
} else
{var or__3548__auto____3347 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3347))
{return or__3548__auto____3347;
} else
{var or__3548__auto____3348 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3348))
{return or__3548__auto____3348;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3389 = (function (x,y,z){
var or__3548__auto____3349 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3349))
{return or__3548__auto____3349;
} else
{var or__3548__auto____3350 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3350))
{return or__3548__auto____3350;
} else
{var or__3548__auto____3351 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3351))
{return or__3548__auto____3351;
} else
{var or__3548__auto____3352 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3352))
{return or__3548__auto____3352;
} else
{var or__3548__auto____3353 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3353))
{return or__3548__auto____3353;
} else
{var or__3548__auto____3354 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3354))
{return or__3548__auto____3354;
} else
{var or__3548__auto____3355 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3355))
{return or__3548__auto____3355;
} else
{var or__3548__auto____3356 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3356))
{return or__3548__auto____3356;
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
var sp3__3390 = (function() { 
var G__3392__delegate = function (x,y,z,args){
var or__3548__auto____3357 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3357))
{return or__3548__auto____3357;
} else
{return cljs.core.some.call(null,(function (p1__3244_SHARP_){
var or__3548__auto____3358 = p1.call(null,p1__3244_SHARP_);

if(cljs.core.truth_(or__3548__auto____3358))
{return or__3548__auto____3358;
} else
{var or__3548__auto____3359 = p2.call(null,p1__3244_SHARP_);

if(cljs.core.truth_(or__3548__auto____3359))
{return or__3548__auto____3359;
} else
{return p3.call(null,p1__3244_SHARP_);
}
}
}),args);
}
};
var G__3392 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3392__delegate.call(this, x, y, z, args);
};
G__3392.cljs$lang$maxFixedArity = 3;
G__3392.cljs$lang$applyTo = (function (arglist__3393){
var x = cljs.core.first(arglist__3393);
var y = cljs.core.first(cljs.core.next(arglist__3393));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3393)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3393)));
return G__3392__delegate.call(this, x, y, z, args);
});
return G__3392;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3386.call(this);
case  1 :
return sp3__3387.call(this,x);
case  2 :
return sp3__3388.call(this,x,y);
case  3 :
return sp3__3389.call(this,x,y,z);
default:
return sp3__3390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3390.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3368 = (function() { 
var G__3394__delegate = function (p1,p2,p3,ps){
var ps__3360 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3395 = (function (){
return null;
});
var spn__3396 = (function (x){
return cljs.core.some.call(null,(function (p1__3245_SHARP_){
return p1__3245_SHARP_.call(null,x);
}),ps__3360);
});
var spn__3397 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3246_SHARP_){
var or__3548__auto____3361 = p1__3246_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3361))
{return or__3548__auto____3361;
} else
{return p1__3246_SHARP_.call(null,y);
}
}),ps__3360);
});
var spn__3398 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3247_SHARP_){
var or__3548__auto____3362 = p1__3247_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3362))
{return or__3548__auto____3362;
} else
{var or__3548__auto____3363 = p1__3247_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3363))
{return or__3548__auto____3363;
} else
{return p1__3247_SHARP_.call(null,z);
}
}
}),ps__3360);
});
var spn__3399 = (function() { 
var G__3401__delegate = function (x,y,z,args){
var or__3548__auto____3364 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3364))
{return or__3548__auto____3364;
} else
{return cljs.core.some.call(null,(function (p1__3248_SHARP_){
return cljs.core.some.call(null,p1__3248_SHARP_,args);
}),ps__3360);
}
};
var G__3401 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3401__delegate.call(this, x, y, z, args);
};
G__3401.cljs$lang$maxFixedArity = 3;
G__3401.cljs$lang$applyTo = (function (arglist__3402){
var x = cljs.core.first(arglist__3402);
var y = cljs.core.first(cljs.core.next(arglist__3402));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3402)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3402)));
return G__3401__delegate.call(this, x, y, z, args);
});
return G__3401;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3395.call(this);
case  1 :
return spn__3396.call(this,x);
case  2 :
return spn__3397.call(this,x,y);
case  3 :
return spn__3398.call(this,x,y,z);
default:
return spn__3399.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3399.cljs$lang$applyTo;
return spn;
})()
};
var G__3394 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3394__delegate.call(this, p1, p2, p3, ps);
};
G__3394.cljs$lang$maxFixedArity = 3;
G__3394.cljs$lang$applyTo = (function (arglist__3403){
var p1 = cljs.core.first(arglist__3403);
var p2 = cljs.core.first(cljs.core.next(arglist__3403));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3403)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3403)));
return G__3394__delegate.call(this, p1, p2, p3, ps);
});
return G__3394;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3365.call(this,p1);
case  2 :
return some_fn__3366.call(this,p1,p2);
case  3 :
return some_fn__3367.call(this,p1,p2,p3);
default:
return some_fn__3368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3368.cljs$lang$applyTo;
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
var map__3416 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3404 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3404))
{var s__3405 = temp__3698__auto____3404;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3405)),map.call(null,f,cljs.core.rest.call(null,s__3405)));
} else
{return null;
}
})));
});
var map__3417 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3406 = cljs.core.seq.call(null,c1);
var s2__3407 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3408 = s1__3406;

if(cljs.core.truth_(and__3546__auto____3408))
{return s2__3407;
} else
{return and__3546__auto____3408;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3406),cljs.core.first.call(null,s2__3407)),map.call(null,f,cljs.core.rest.call(null,s1__3406),cljs.core.rest.call(null,s2__3407)));
} else
{return null;
}
})));
});
var map__3418 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3409 = cljs.core.seq.call(null,c1);
var s2__3410 = cljs.core.seq.call(null,c2);
var s3__3411 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3412 = s1__3409;

if(cljs.core.truth_(and__3546__auto____3412))
{var and__3546__auto____3413 = s2__3410;

if(cljs.core.truth_(and__3546__auto____3413))
{return s3__3411;
} else
{return and__3546__auto____3413;
}
} else
{return and__3546__auto____3412;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3409),cljs.core.first.call(null,s2__3410),cljs.core.first.call(null,s3__3411)),map.call(null,f,cljs.core.rest.call(null,s1__3409),cljs.core.rest.call(null,s2__3410),cljs.core.rest.call(null,s3__3411)));
} else
{return null;
}
})));
});
var map__3419 = (function() { 
var G__3421__delegate = function (f,c1,c2,c3,colls){
var step__3415 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3414 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3414)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3414),step.call(null,map.call(null,cljs.core.rest,ss__3414)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3326_SHARP_){
return cljs.core.apply.call(null,f,p1__3326_SHARP_);
}),step__3415.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3421 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3421__delegate.call(this, f, c1, c2, c3, colls);
};
G__3421.cljs$lang$maxFixedArity = 4;
G__3421.cljs$lang$applyTo = (function (arglist__3422){
var f = cljs.core.first(arglist__3422);
var c1 = cljs.core.first(cljs.core.next(arglist__3422));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3422)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3422))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3422))));
return G__3421__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3421;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3416.call(this,f,c1);
case  3 :
return map__3417.call(this,f,c1,c2);
case  4 :
return map__3418.call(this,f,c1,c2,c3);
default:
return map__3419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3419.cljs$lang$applyTo;
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
{var temp__3698__auto____3423 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3423))
{var s__3424 = temp__3698__auto____3423;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3424),take.call(null,(n - 1),cljs.core.rest.call(null,s__3424)));
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
var step__3427 = (function (n,coll){
while(true){
var s__3425 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3426 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3426))
{return s__3425;
} else
{return and__3546__auto____3426;
}
})()))
{{
var G__3428 = (n - 1);
var G__3429 = cljs.core.rest.call(null,s__3425);
n = G__3428;
coll = G__3429;
continue;
}
} else
{return s__3425;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3427.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3430 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3431 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3430.call(this,n);
case  2 :
return drop_last__3431.call(this,n,s);
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
var s__3433 = cljs.core.seq.call(null,coll);
var lead__3434 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3434))
{{
var G__3435 = cljs.core.next.call(null,s__3433);
var G__3436 = cljs.core.next.call(null,lead__3434);
s__3433 = G__3435;
lead__3434 = G__3436;
continue;
}
} else
{return s__3433;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3439 = (function (pred,coll){
while(true){
var s__3437 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3438 = s__3437;

if(cljs.core.truth_(and__3546__auto____3438))
{return pred.call(null,cljs.core.first.call(null,s__3437));
} else
{return and__3546__auto____3438;
}
})()))
{{
var G__3440 = pred;
var G__3441 = cljs.core.rest.call(null,s__3437);
pred = G__3440;
coll = G__3441;
continue;
}
} else
{return s__3437;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3439.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3442 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3442))
{var s__3443 = temp__3698__auto____3442;

return cljs.core.concat.call(null,s__3443,cycle.call(null,s__3443));
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
var repeat__3444 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3445 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3444.call(this,n);
case  2 :
return repeat__3445.call(this,n,x);
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
var repeatedly__3447 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3448 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3447.call(this,n);
case  2 :
return repeatedly__3448.call(this,n,f);
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
var interleave__3454 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3450 = cljs.core.seq.call(null,c1);
var s2__3451 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3452 = s1__3450;

if(cljs.core.truth_(and__3546__auto____3452))
{return s2__3451;
} else
{return and__3546__auto____3452;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3450),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3451),interleave.call(null,cljs.core.rest.call(null,s1__3450),cljs.core.rest.call(null,s2__3451))));
} else
{return null;
}
})));
});
var interleave__3455 = (function() { 
var G__3457__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3453 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3453)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3453),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3453)));
} else
{return null;
}
})));
};
var G__3457 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3457__delegate.call(this, c1, c2, colls);
};
G__3457.cljs$lang$maxFixedArity = 2;
G__3457.cljs$lang$applyTo = (function (arglist__3458){
var c1 = cljs.core.first(arglist__3458);
var c2 = cljs.core.first(cljs.core.next(arglist__3458));
var colls = cljs.core.rest(cljs.core.next(arglist__3458));
return G__3457__delegate.call(this, c1, c2, colls);
});
return G__3457;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3454.call(this,c1,c2);
default:
return interleave__3455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3455.cljs$lang$applyTo;
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
var cat__3461 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3459 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3459))
{var coll__3460 = temp__3695__auto____3459;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3460),cat.call(null,cljs.core.rest.call(null,coll__3460),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3461.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3462 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3463 = (function() { 
var G__3465__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3465 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3465__delegate.call(this, f, coll, colls);
};
G__3465.cljs$lang$maxFixedArity = 2;
G__3465.cljs$lang$applyTo = (function (arglist__3466){
var f = cljs.core.first(arglist__3466);
var coll = cljs.core.first(cljs.core.next(arglist__3466));
var colls = cljs.core.rest(cljs.core.next(arglist__3466));
return G__3465__delegate.call(this, f, coll, colls);
});
return G__3465;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3462.call(this,f,coll);
default:
return mapcat__3463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3463.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3467 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3467))
{var s__3468 = temp__3698__auto____3467;

var f__3469 = cljs.core.first.call(null,s__3468);
var r__3470 = cljs.core.rest.call(null,s__3468);

if(cljs.core.truth_(pred.call(null,f__3469)))
{return cljs.core.cons.call(null,f__3469,filter.call(null,pred,r__3470));
} else
{return filter.call(null,pred,r__3470);
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
var walk__3472 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3472.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3471_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3471_SHARP_));
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
var partition__3479 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3480 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3473 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3473))
{var s__3474 = temp__3698__auto____3473;

var p__3475 = cljs.core.take.call(null,n,s__3474);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3475))))
{return cljs.core.cons.call(null,p__3475,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3474)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3481 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3476 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3476))
{var s__3477 = temp__3698__auto____3476;

var p__3478 = cljs.core.take.call(null,n,s__3477);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3478))))
{return cljs.core.cons.call(null,p__3478,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3477)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3478,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3479.call(this,n,step);
case  3 :
return partition__3480.call(this,n,step,pad);
case  4 :
return partition__3481.call(this,n,step,pad,coll);
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
var get_in__3487 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3488 = (function (m,ks,not_found){
var sentinel__3483 = cljs.core.lookup_sentinel;
var m__3484 = m;
var ks__3485 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3485))
{var m__3486 = cljs.core.get.call(null,m__3484,cljs.core.first.call(null,ks__3485),sentinel__3483);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3483,m__3486)))
{return not_found;
} else
{{
var G__3490 = sentinel__3483;
var G__3491 = m__3486;
var G__3492 = cljs.core.next.call(null,ks__3485);
sentinel__3483 = G__3490;
m__3484 = G__3491;
ks__3485 = G__3492;
continue;
}
}
} else
{return m__3484;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3487.call(this,m,ks);
case  3 :
return get_in__3488.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__3493,v){
var vec__3494__3495 = p__3493;
var k__3496 = cljs.core.nth.call(null,vec__3494__3495,0,null);
var ks__3497 = cljs.core.nthnext.call(null,vec__3494__3495,1);

if(cljs.core.truth_(ks__3497))
{return cljs.core.assoc.call(null,m,k__3496,assoc_in.call(null,cljs.core.get.call(null,m,k__3496),ks__3497,v));
} else
{return cljs.core.assoc.call(null,m,k__3496,v);
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
var update_in__delegate = function (m,p__3498,f,args){
var vec__3499__3500 = p__3498;
var k__3501 = cljs.core.nth.call(null,vec__3499__3500,0,null);
var ks__3502 = cljs.core.nthnext.call(null,vec__3499__3500,1);

if(cljs.core.truth_(ks__3502))
{return cljs.core.assoc.call(null,m,k__3501,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3501),ks__3502,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3501,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3501),args));
}
};
var update_in = function (m,p__3498,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3498, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3503){
var m = cljs.core.first(arglist__3503);
var p__3498 = cljs.core.first(cljs.core.next(arglist__3503));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3503)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3503)));
return update_in__delegate.call(this, m, p__3498, f, args);
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
var this__3504 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3529 = null;
var G__3529__3530 = (function (coll,k){
var this__3505 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3529__3531 = (function (coll,k,not_found){
var this__3506 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3529 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3529__3530.call(this,coll,k);
case  3 :
return G__3529__3531.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3529;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3507 = this;
var new_array__3508 = cljs.core.aclone.call(null,this__3507.array);

(new_array__3508[k] = v);
return (new cljs.core.Vector(this__3507.meta,new_array__3508));
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3509 = this;
var new_array__3510 = cljs.core.aclone.call(null,this__3509.array);

new_array__3510.push(o);
return (new cljs.core.Vector(this__3509.meta,new_array__3510));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3533 = null;
var G__3533__3534 = (function (v,f){
var this__3511 = this;
return cljs.core.ci_reduce.call(null,this__3511.array,f);
});
var G__3533__3535 = (function (v,f,start){
var this__3512 = this;
return cljs.core.ci_reduce.call(null,this__3512.array,f,start);
});
G__3533 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3533__3534.call(this,v,f);
case  3 :
return G__3533__3535.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3533;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3513 = this;
if(cljs.core.truth_((this__3513.array.length > 0)))
{var vector_seq__3514 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__3513.array.length)))
{return cljs.core.cons.call(null,(this__3513.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__3514.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3515 = this;
return this__3515.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3516 = this;
var count__3517 = this__3516.array.length;

if(cljs.core.truth_((count__3517 > 0)))
{return (this__3516.array[(count__3517 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3518 = this;
if(cljs.core.truth_((this__3518.array.length > 0)))
{var new_array__3519 = cljs.core.aclone.call(null,this__3518.array);

new_array__3519.pop();
return (new cljs.core.Vector(this__3518.meta,new_array__3519));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3520 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3521 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3522 = this;
return (new cljs.core.Vector(meta,this__3522.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3523 = this;
return this__3523.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3537 = null;
var G__3537__3538 = (function (coll,n){
var this__3524 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3525 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3525))
{return (n < this__3524.array.length);
} else
{return and__3546__auto____3525;
}
})()))
{return (this__3524.array[n]);
} else
{return null;
}
});
var G__3537__3539 = (function (coll,n,not_found){
var this__3526 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3527 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____3527))
{return (n < this__3526.array.length);
} else
{return and__3546__auto____3527;
}
})()))
{return (this__3526.array[n]);
} else
{return not_found;
}
});
G__3537 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3537__3538.call(this,coll,n);
case  3 :
return G__3537__3539.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3537;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3528 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3528.meta);
});
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3541 = null;
var G__3541__3542 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3541__3543 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3541 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3541__3542.call(this,_,k);
case  3 :
return G__3541__3543.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3541;
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
vector.cljs$lang$applyTo = (function (arglist__3545){
var args = cljs.core.seq( arglist__3545 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3546 = this;
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
var len__3547 = array.length;

var i__3548 = 0;

while(true){
if(cljs.core.truth_((i__3548 < len__3547)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3548]))))
{return i__3548;
} else
{{
var G__3549 = (i__3548 + incr);
i__3548 = G__3549;
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
var obj_map_contains_key_QMARK___3551 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3552 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____3550 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3550))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3550;
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
return obj_map_contains_key_QMARK___3551.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3552.call(this,k,strobj,true_val,false_val);
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
var this__3555 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3574 = null;
var G__3574__3575 = (function (coll,k){
var this__3556 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3574__3576 = (function (coll,k,not_found){
var this__3557 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3557.strobj,(this__3557.strobj[k]),not_found);
});
G__3574 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3574__3575.call(this,coll,k);
case  3 :
return G__3574__3576.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3574;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3558 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3559 = goog.object.clone.call(null,this__3558.strobj);
var overwrite_QMARK___3560 = new_strobj__3559.hasOwnProperty(k);

(new_strobj__3559[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3560))
{return (new cljs.core.ObjMap(this__3558.meta,this__3558.keys,new_strobj__3559));
} else
{var new_keys__3561 = cljs.core.aclone.call(null,this__3558.keys);

new_keys__3561.push(k);
return (new cljs.core.ObjMap(this__3558.meta,new_keys__3561,new_strobj__3559));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3558.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3562 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3562.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3563 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3564 = this;
if(cljs.core.truth_((this__3564.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__3554_SHARP_){
return cljs.core.vector.call(null,p1__3554_SHARP_,(this__3564.strobj[p1__3554_SHARP_]));
}),this__3564.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3565 = this;
return this__3565.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3566 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3567 = this;
return (new cljs.core.ObjMap(meta,this__3567.keys,this__3567.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3568 = this;
return this__3568.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3569 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3569.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3570 = this;
if(cljs.core.truth_((function (){var and__3546__auto____3571 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____3571))
{return this__3570.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____3571;
}
})()))
{var new_keys__3572 = cljs.core.aclone.call(null,this__3570.keys);
var new_strobj__3573 = goog.object.clone.call(null,this__3570.strobj);

new_keys__3572.splice(cljs.core.scan_array.call(null,1,k,new_keys__3572),1);
cljs.core.js_delete.call(null,new_strobj__3573,k);
return (new cljs.core.ObjMap(this__3570.meta,new_keys__3572,new_strobj__3573));
} else
{return coll;
}
});
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3579 = null;
var G__3579__3580 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3579__3581 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3579 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3579__3580.call(this,_,k);
case  3 :
return G__3579__3581.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3579;
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
var this__3583 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3613 = null;
var G__3613__3614 = (function (coll,k){
var this__3584 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3613__3615 = (function (coll,k,not_found){
var this__3585 = this;
var bucket__3586 = (this__3585.hashobj[cljs.core.hash.call(null,k)]);
var i__3587 = (cljs.core.truth_(bucket__3586)?cljs.core.scan_array.call(null,2,k,bucket__3586):null);

if(cljs.core.truth_(i__3587))
{return (bucket__3586[(i__3587 + 1)]);
} else
{return not_found;
}
});
G__3613 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3613__3614.call(this,coll,k);
case  3 :
return G__3613__3615.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3613;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3588 = this;
var h__3589 = cljs.core.hash.call(null,k);
var bucket__3590 = (this__3588.hashobj[h__3589]);

if(cljs.core.truth_(bucket__3590))
{var new_bucket__3591 = cljs.core.aclone.call(null,bucket__3590);
var new_hashobj__3592 = goog.object.clone.call(null,this__3588.hashobj);

(new_hashobj__3592[h__3589] = new_bucket__3591);
var temp__3695__auto____3593 = cljs.core.scan_array.call(null,2,k,new_bucket__3591);

if(cljs.core.truth_(temp__3695__auto____3593))
{var i__3594 = temp__3695__auto____3593;

(new_bucket__3591[(i__3594 + 1)] = v);
return (new cljs.core.HashMap(this__3588.meta,this__3588.count,new_hashobj__3592));
} else
{new_bucket__3591.push(k,v);
return (new cljs.core.HashMap(this__3588.meta,(this__3588.count + 1),new_hashobj__3592));
}
} else
{var new_hashobj__3595 = goog.object.clone.call(null,this__3588.hashobj);

(new_hashobj__3595[h__3589] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3588.meta,(this__3588.count + 1),new_hashobj__3595));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3596 = this;
var bucket__3597 = (this__3596.hashobj[cljs.core.hash.call(null,k)]);
var i__3598 = (cljs.core.truth_(bucket__3597)?cljs.core.scan_array.call(null,2,k,bucket__3597):null);

if(cljs.core.truth_(i__3598))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3599 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3600 = this;
if(cljs.core.truth_((this__3600.count > 0)))
{var hashes__3601 = cljs.core.js_keys.call(null,this__3600.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3578_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3600.hashobj[p1__3578_SHARP_])));
}),hashes__3601);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3602 = this;
return this__3602.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3603 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3604 = this;
return (new cljs.core.HashMap(meta,this__3604.count,this__3604.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3605 = this;
return this__3605.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3606 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3606.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3607 = this;
var h__3608 = cljs.core.hash.call(null,k);
var bucket__3609 = (this__3607.hashobj[h__3608]);
var i__3610 = (cljs.core.truth_(bucket__3609)?cljs.core.scan_array.call(null,2,k,bucket__3609):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3610)))
{return coll;
} else
{var new_hashobj__3611 = goog.object.clone.call(null,this__3607.hashobj);

if(cljs.core.truth_((3 > bucket__3609.length)))
{cljs.core.js_delete.call(null,new_hashobj__3611,h__3608);
} else
{var new_bucket__3612 = cljs.core.aclone.call(null,bucket__3609);

new_bucket__3612.splice(i__3610,2);
(new_hashobj__3611[h__3608] = new_bucket__3612);
}
return (new cljs.core.HashMap(this__3607.meta,(this__3607.count - 1),new_hashobj__3611));
}
});
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3617 = ks.length;

var i__3618 = 0;
var out__3619 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__3618 < len__3617)))
{{
var G__3620 = (i__3618 + 1);
var G__3621 = cljs.core.assoc.call(null,out__3619,(ks[i__3618]),(vs[i__3618]));
i__3618 = G__3620;
out__3619 = G__3621;
continue;
}
} else
{return out__3619;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3622 = null;
var G__3622__3623 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3622__3624 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3622 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3622__3623.call(this,_,k);
case  3 :
return G__3622__3624.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3622;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3626 = cljs.core.seq.call(null,keyvals);
var out__3627 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3626))
{{
var G__3628 = cljs.core.nnext.call(null,in$__3626);
var G__3629 = cljs.core.assoc.call(null,out__3627,cljs.core.first.call(null,in$__3626),cljs.core.second.call(null,in$__3626));
in$__3626 = G__3628;
out__3627 = G__3629;
continue;
}
} else
{return out__3627;
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
hash_map.cljs$lang$applyTo = (function (arglist__3630){
var keyvals = cljs.core.seq( arglist__3630 );;
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
{return cljs.core.reduce.call(null,(function (p1__3631_SHARP_,p2__3632_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____3633 = p1__3631_SHARP_;

if(cljs.core.truth_(or__3548__auto____3633))
{return or__3548__auto____3633;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3632_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3634){
var maps = cljs.core.seq( arglist__3634 );;
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
{var merge_entry__3637 = (function (m,e){
var k__3635 = cljs.core.first.call(null,e);
var v__3636 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3635)))
{return cljs.core.assoc.call(null,m,k__3635,f.call(null,cljs.core.get.call(null,m,k__3635),v__3636));
} else
{return cljs.core.assoc.call(null,m,k__3635,v__3636);
}
});
var merge2__3639 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3637,(function (){var or__3548__auto____3638 = m1;

if(cljs.core.truth_(or__3548__auto____3638))
{return or__3548__auto____3638;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3639,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3640){
var f = cljs.core.first(arglist__3640);
var maps = cljs.core.rest(arglist__3640);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3642 = cljs.core.ObjMap.fromObject([],{});
var keys__3643 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3643))
{var key__3644 = cljs.core.first.call(null,keys__3643);
var entry__3645 = cljs.core.get.call(null,map,key__3644,"﷐'user/not-found");

{
var G__3646 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__3645,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__3642,key__3644,entry__3645):ret__3642);
var G__3647 = cljs.core.next.call(null,keys__3643);
ret__3642 = G__3646;
keys__3643 = G__3647;
continue;
}
} else
{return ret__3642;
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
var this__3648 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3661 = null;
var G__3661__3662 = (function (coll,v){
var this__3649 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3661__3663 = (function (coll,v,not_found){
var this__3650 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3650.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3661 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3661__3662.call(this,coll,v);
case  3 :
return G__3661__3663.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3661;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3651 = this;
return (new cljs.core.Set(this__3651.meta,cljs.core.assoc.call(null,this__3651.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3652 = this;
return cljs.core.keys.call(null,this__3652.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3653 = this;
return (new cljs.core.Set(this__3653.meta,cljs.core.dissoc.call(null,this__3653.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3654 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3655 = this;
var and__3546__auto____3656 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____3656))
{var and__3546__auto____3657 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____3657))
{return cljs.core.every_QMARK_.call(null,(function (p1__3641_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3641_SHARP_);
}),other);
} else
{return and__3546__auto____3657;
}
} else
{return and__3546__auto____3656;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3658 = this;
return (new cljs.core.Set(meta,this__3658.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3659 = this;
return this__3659.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3660 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3660.meta);
});
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3665 = null;
var G__3665__3666 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3665__3667 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3665 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3665__3666.call(this,_,k);
case  3 :
return G__3665__3667.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3665;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3670 = cljs.core.seq.call(null,coll);
var out__3671 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3670))))
{{
var G__3672 = cljs.core.rest.call(null,in$__3670);
var G__3673 = cljs.core.conj.call(null,out__3671,cljs.core.first.call(null,in$__3670));
in$__3670 = G__3672;
out__3671 = G__3673;
continue;
}
} else
{return out__3671;
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
{var n__3674 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____3675 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____3675))
{var e__3676 = temp__3695__auto____3675;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3676));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3674,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3669_SHARP_){
var temp__3695__auto____3677 = cljs.core.find.call(null,smap,p1__3669_SHARP_);

if(cljs.core.truth_(temp__3695__auto____3677))
{var e__3678 = temp__3695__auto____3677;

return cljs.core.second.call(null,e__3678);
} else
{return p1__3669_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3686 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3679,seen){
while(true){
var vec__3680__3681 = p__3679;
var f__3682 = cljs.core.nth.call(null,vec__3680__3681,0,null);
var xs__3683 = vec__3680__3681;

var temp__3698__auto____3684 = cljs.core.seq.call(null,xs__3683);

if(cljs.core.truth_(temp__3698__auto____3684))
{var s__3685 = temp__3698__auto____3684;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3682)))
{{
var G__3687 = cljs.core.rest.call(null,s__3685);
var G__3688 = seen;
p__3679 = G__3687;
seen = G__3688;
continue;
}
} else
{return cljs.core.cons.call(null,f__3682,step.call(null,cljs.core.rest.call(null,s__3685),cljs.core.conj.call(null,seen,f__3682)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3686.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3689 = cljs.core.Vector.fromArray([]);
var s__3690 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3690)))
{{
var G__3691 = cljs.core.conj.call(null,ret__3689,cljs.core.first.call(null,s__3690));
var G__3692 = cljs.core.next.call(null,s__3690);
ret__3689 = G__3691;
s__3690 = G__3692;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3689);
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
{if(cljs.core.truth_((function (){var or__3548__auto____3693 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3693))
{return or__3548__auto____3693;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3694 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3694 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__3694 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____3695 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3695))
{return or__3548__auto____3695;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3696 = x.lastIndexOf("/");

if(cljs.core.truth_((i__3696 > -1)))
{return cljs.core.subs.call(null,x,2,i__3696);
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
var map__3699 = cljs.core.ObjMap.fromObject([],{});
var ks__3700 = cljs.core.seq.call(null,keys);
var vs__3701 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3702 = ks__3700;

if(cljs.core.truth_(and__3546__auto____3702))
{return vs__3701;
} else
{return and__3546__auto____3702;
}
})()))
{{
var G__3703 = cljs.core.assoc.call(null,map__3699,cljs.core.first.call(null,ks__3700),cljs.core.first.call(null,vs__3701));
var G__3704 = cljs.core.next.call(null,ks__3700);
var G__3705 = cljs.core.next.call(null,vs__3701);
map__3699 = G__3703;
ks__3700 = G__3704;
vs__3701 = G__3705;
continue;
}
} else
{return map__3699;
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
var max_key__3708 = (function (k,x){
return x;
});
var max_key__3709 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3710 = (function() { 
var G__3712__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3697_SHARP_,p2__3698_SHARP_){
return max_key.call(null,k,p1__3697_SHARP_,p2__3698_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3712 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3712__delegate.call(this, k, x, y, more);
};
G__3712.cljs$lang$maxFixedArity = 3;
G__3712.cljs$lang$applyTo = (function (arglist__3713){
var k = cljs.core.first(arglist__3713);
var x = cljs.core.first(cljs.core.next(arglist__3713));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3713)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3713)));
return G__3712__delegate.call(this, k, x, y, more);
});
return G__3712;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3708.call(this,k,x);
case  3 :
return max_key__3709.call(this,k,x,y);
default:
return max_key__3710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3710.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3714 = (function (k,x){
return x;
});
var min_key__3715 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3716 = (function() { 
var G__3718__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3706_SHARP_,p2__3707_SHARP_){
return min_key.call(null,k,p1__3706_SHARP_,p2__3707_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3718 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3718__delegate.call(this, k, x, y, more);
};
G__3718.cljs$lang$maxFixedArity = 3;
G__3718.cljs$lang$applyTo = (function (arglist__3719){
var k = cljs.core.first(arglist__3719);
var x = cljs.core.first(cljs.core.next(arglist__3719));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3719)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3719)));
return G__3718__delegate.call(this, k, x, y, more);
});
return G__3718;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3714.call(this,k,x);
case  3 :
return min_key__3715.call(this,k,x,y);
default:
return min_key__3716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3716.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3722 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3723 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3720 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3720))
{var s__3721 = temp__3698__auto____3720;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3721),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3721)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3722.call(this,n,step);
case  3 :
return partition_all__3723.call(this,n,step,coll);
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
var temp__3698__auto____3725 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3725))
{var s__3726 = temp__3698__auto____3725;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3726))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3726),take_while.call(null,pred,cljs.core.rest.call(null,s__3726)));
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
var this__3727 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3728 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3744 = null;
var G__3744__3745 = (function (rng,f){
var this__3729 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3744__3746 = (function (rng,f,s){
var this__3730 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3744 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3744__3745.call(this,rng,f);
case  3 :
return G__3744__3746.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3744;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3731 = this;
var comp__3732 = (cljs.core.truth_((this__3731.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3732.call(null,this__3731.start,this__3731.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3733 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__3733.end - this__3733.start) / this__3733.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3734 = this;
return this__3734.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3735 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__3735.meta,(this__3735.start + this__3735.step),this__3735.end,this__3735.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3736 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3737 = this;
return (new cljs.core.Range(meta,this__3737.start,this__3737.end,this__3737.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3738 = this;
return this__3738.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3748 = null;
var G__3748__3749 = (function (rng,n){
var this__3739 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3739.start + (n * this__3739.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3740 = (this__3739.start > this__3739.end);

if(cljs.core.truth_(and__3546__auto____3740))
{return cljs.core._EQ_.call(null,this__3739.step,0);
} else
{return and__3546__auto____3740;
}
})()))
{return this__3739.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__3748__3750 = (function (rng,n,not_found){
var this__3741 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__3741.start + (n * this__3741.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____3742 = (this__3741.start > this__3741.end);

if(cljs.core.truth_(and__3546__auto____3742))
{return cljs.core._EQ_.call(null,this__3741.step,0);
} else
{return and__3546__auto____3742;
}
})()))
{return this__3741.start;
} else
{return not_found;
}
}
});
G__3748 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3748__3749.call(this,rng,n);
case  3 :
return G__3748__3750.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3748;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3743 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3743.meta);
});
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3752 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3753 = (function (end){
return range.call(null,0,end,1);
});
var range__3754 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3755 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3752.call(this);
case  1 :
return range__3753.call(this,start);
case  2 :
return range__3754.call(this,start,end);
case  3 :
return range__3755.call(this,start,end,step);
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
var temp__3698__auto____3757 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3757))
{var s__3758 = temp__3698__auto____3757;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3758),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3758)));
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
var temp__3698__auto____3760 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3760))
{var s__3761 = temp__3698__auto____3760;

var fst__3762 = cljs.core.first.call(null,s__3761);
var fv__3763 = f.call(null,fst__3762);
var run__3764 = cljs.core.cons.call(null,fst__3762,cljs.core.take_while.call(null,(function (p1__3759_SHARP_){
return cljs.core._EQ_.call(null,fv__3763,f.call(null,p1__3759_SHARP_));
}),cljs.core.next.call(null,s__3761)));

return cljs.core.cons.call(null,run__3764,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3764),s__3761))));
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
var reductions__3779 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3775 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3775))
{var s__3776 = temp__3695__auto____3775;

return reductions.call(null,f,cljs.core.first.call(null,s__3776),cljs.core.rest.call(null,s__3776));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3780 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3777 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3777))
{var s__3778 = temp__3698__auto____3777;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3778)),cljs.core.rest.call(null,s__3778));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3779.call(this,f,init);
case  3 :
return reductions__3780.call(this,f,init,coll);
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
var juxt__3783 = (function (f){
return (function() {
var G__3788 = null;
var G__3788__3789 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3788__3790 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3788__3791 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3788__3792 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3788__3793 = (function() { 
var G__3795__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3795 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3795__delegate.call(this, x, y, z, args);
};
G__3795.cljs$lang$maxFixedArity = 3;
G__3795.cljs$lang$applyTo = (function (arglist__3796){
var x = cljs.core.first(arglist__3796);
var y = cljs.core.first(cljs.core.next(arglist__3796));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3796)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3796)));
return G__3795__delegate.call(this, x, y, z, args);
});
return G__3795;
})()
;
G__3788 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3788__3789.call(this);
case  1 :
return G__3788__3790.call(this,x);
case  2 :
return G__3788__3791.call(this,x,y);
case  3 :
return G__3788__3792.call(this,x,y,z);
default:
return G__3788__3793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3788.cljs$lang$maxFixedArity = 3;
G__3788.cljs$lang$applyTo = G__3788__3793.cljs$lang$applyTo;
return G__3788;
})()
});
var juxt__3784 = (function (f,g){
return (function() {
var G__3797 = null;
var G__3797__3798 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3797__3799 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3797__3800 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3797__3801 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3797__3802 = (function() { 
var G__3804__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3804 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3804__delegate.call(this, x, y, z, args);
};
G__3804.cljs$lang$maxFixedArity = 3;
G__3804.cljs$lang$applyTo = (function (arglist__3805){
var x = cljs.core.first(arglist__3805);
var y = cljs.core.first(cljs.core.next(arglist__3805));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3805)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3805)));
return G__3804__delegate.call(this, x, y, z, args);
});
return G__3804;
})()
;
G__3797 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3797__3798.call(this);
case  1 :
return G__3797__3799.call(this,x);
case  2 :
return G__3797__3800.call(this,x,y);
case  3 :
return G__3797__3801.call(this,x,y,z);
default:
return G__3797__3802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3797.cljs$lang$maxFixedArity = 3;
G__3797.cljs$lang$applyTo = G__3797__3802.cljs$lang$applyTo;
return G__3797;
})()
});
var juxt__3785 = (function (f,g,h){
return (function() {
var G__3806 = null;
var G__3806__3807 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3806__3808 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3806__3809 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3806__3810 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3806__3811 = (function() { 
var G__3813__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3813 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3813__delegate.call(this, x, y, z, args);
};
G__3813.cljs$lang$maxFixedArity = 3;
G__3813.cljs$lang$applyTo = (function (arglist__3814){
var x = cljs.core.first(arglist__3814);
var y = cljs.core.first(cljs.core.next(arglist__3814));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3814)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3814)));
return G__3813__delegate.call(this, x, y, z, args);
});
return G__3813;
})()
;
G__3806 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3806__3807.call(this);
case  1 :
return G__3806__3808.call(this,x);
case  2 :
return G__3806__3809.call(this,x,y);
case  3 :
return G__3806__3810.call(this,x,y,z);
default:
return G__3806__3811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3806.cljs$lang$maxFixedArity = 3;
G__3806.cljs$lang$applyTo = G__3806__3811.cljs$lang$applyTo;
return G__3806;
})()
});
var juxt__3786 = (function() { 
var G__3815__delegate = function (f,g,h,fs){
var fs__3782 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3816 = null;
var G__3816__3817 = (function (){
return cljs.core.reduce.call(null,(function (p1__3765_SHARP_,p2__3766_SHARP_){
return cljs.core.conj.call(null,p1__3765_SHARP_,p2__3766_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3782);
});
var G__3816__3818 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3767_SHARP_,p2__3768_SHARP_){
return cljs.core.conj.call(null,p1__3767_SHARP_,p2__3768_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3782);
});
var G__3816__3819 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3769_SHARP_,p2__3770_SHARP_){
return cljs.core.conj.call(null,p1__3769_SHARP_,p2__3770_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3782);
});
var G__3816__3820 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3771_SHARP_,p2__3772_SHARP_){
return cljs.core.conj.call(null,p1__3771_SHARP_,p2__3772_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3782);
});
var G__3816__3821 = (function() { 
var G__3823__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3773_SHARP_,p2__3774_SHARP_){
return cljs.core.conj.call(null,p1__3773_SHARP_,cljs.core.apply.call(null,p2__3774_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3782);
};
var G__3823 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3823__delegate.call(this, x, y, z, args);
};
G__3823.cljs$lang$maxFixedArity = 3;
G__3823.cljs$lang$applyTo = (function (arglist__3824){
var x = cljs.core.first(arglist__3824);
var y = cljs.core.first(cljs.core.next(arglist__3824));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3824)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3824)));
return G__3823__delegate.call(this, x, y, z, args);
});
return G__3823;
})()
;
G__3816 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3816__3817.call(this);
case  1 :
return G__3816__3818.call(this,x);
case  2 :
return G__3816__3819.call(this,x,y);
case  3 :
return G__3816__3820.call(this,x,y,z);
default:
return G__3816__3821.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3816.cljs$lang$maxFixedArity = 3;
G__3816.cljs$lang$applyTo = G__3816__3821.cljs$lang$applyTo;
return G__3816;
})()
};
var G__3815 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3815__delegate.call(this, f, g, h, fs);
};
G__3815.cljs$lang$maxFixedArity = 3;
G__3815.cljs$lang$applyTo = (function (arglist__3825){
var f = cljs.core.first(arglist__3825);
var g = cljs.core.first(cljs.core.next(arglist__3825));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3825)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3825)));
return G__3815__delegate.call(this, f, g, h, fs);
});
return G__3815;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3783.call(this,f);
case  2 :
return juxt__3784.call(this,f,g);
case  3 :
return juxt__3785.call(this,f,g,h);
default:
return juxt__3786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3786.cljs$lang$applyTo;
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
var dorun__3827 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3830 = cljs.core.next.call(null,coll);
coll = G__3830;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3828 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3826 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3826))
{return (n > 0);
} else
{return and__3546__auto____3826;
}
})()))
{{
var G__3831 = (n - 1);
var G__3832 = cljs.core.next.call(null,coll);
n = G__3831;
coll = G__3832;
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
return dorun__3827.call(this,n);
case  2 :
return dorun__3828.call(this,n,coll);
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
var doall__3833 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3834 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3833.call(this,n);
case  2 :
return doall__3834.call(this,n,coll);
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
var matches__3836 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3836),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3836),1)))
{return cljs.core.first.call(null,matches__3836);
} else
{return cljs.core.vec.call(null,matches__3836);
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
var matches__3837 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3837)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3837),1)))
{return cljs.core.first.call(null,matches__3837);
} else
{return cljs.core.vec.call(null,matches__3837);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3838 = cljs.core.re_find.call(null,re,s);
var match_idx__3839 = s.search(re);
var match_str__3840 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3838))?cljs.core.first.call(null,match_data__3838):match_data__3838);
var post_match__3841 = cljs.core.subs.call(null,s,(match_idx__3839 + cljs.core.count.call(null,match_str__3840)));

if(cljs.core.truth_(match_data__3838))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3838,re_seq.call(null,re,post_match__3841));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3842_SHARP_){
return print_one.call(null,p1__3842_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____3843 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____3843))
{var and__3546__auto____3847 = (function (){var x__314__auto____3844 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3845 = x__314__auto____3844;

if(cljs.core.truth_(and__3546__auto____3845))
{var and__3546__auto____3846 = x__314__auto____3844.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3846))
{return cljs.core.not.call(null,x__314__auto____3844.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3846;
}
} else
{return and__3546__auto____3845;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__314__auto____3844);
}
})();

if(cljs.core.truth_(and__3546__auto____3847))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____3847;
}
} else
{return and__3546__auto____3843;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__314__auto____3848 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____3849 = x__314__auto____3848;

if(cljs.core.truth_(and__3546__auto____3849))
{var and__3546__auto____3850 = x__314__auto____3848.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____3850))
{return cljs.core.not.call(null,x__314__auto____3848.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____3850;
}
} else
{return and__3546__auto____3849;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__314__auto____3848);
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
var first_obj__3851 = cljs.core.first.call(null,objs);
var sb__3852 = (new goog.string.StringBuffer());

var G__3853__3854 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3853__3854))
{var obj__3855 = cljs.core.first.call(null,G__3853__3854);
var G__3853__3856 = G__3853__3854;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3855,first_obj__3851)))
{} else
{sb__3852.append(" ");
}
var G__3857__3858 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3855,opts));

if(cljs.core.truth_(G__3857__3858))
{var string__3859 = cljs.core.first.call(null,G__3857__3858);
var G__3857__3860 = G__3857__3858;

while(true){
sb__3852.append(string__3859);
var temp__3698__auto____3861 = cljs.core.next.call(null,G__3857__3860);

if(cljs.core.truth_(temp__3698__auto____3861))
{var G__3857__3862 = temp__3698__auto____3861;

{
var G__3865 = cljs.core.first.call(null,G__3857__3862);
var G__3866 = G__3857__3862;
string__3859 = G__3865;
G__3857__3860 = G__3866;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3863 = cljs.core.next.call(null,G__3853__3856);

if(cljs.core.truth_(temp__3698__auto____3863))
{var G__3853__3864 = temp__3698__auto____3863;

{
var G__3867 = cljs.core.first.call(null,G__3853__3864);
var G__3868 = G__3853__3864;
obj__3855 = G__3867;
G__3853__3856 = G__3868;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__3852);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3869 = cljs.core.first.call(null,objs);

var G__3870__3871 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__3870__3871))
{var obj__3872 = cljs.core.first.call(null,G__3870__3871);
var G__3870__3873 = G__3870__3871;

while(true){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3872,first_obj__3869)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3874__3875 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3872,opts));

if(cljs.core.truth_(G__3874__3875))
{var string__3876 = cljs.core.first.call(null,G__3874__3875);
var G__3874__3877 = G__3874__3875;

while(true){
cljs.core.string_print.call(null,string__3876);
var temp__3698__auto____3878 = cljs.core.next.call(null,G__3874__3877);

if(cljs.core.truth_(temp__3698__auto____3878))
{var G__3874__3879 = temp__3698__auto____3878;

{
var G__3882 = cljs.core.first.call(null,G__3874__3879);
var G__3883 = G__3874__3879;
string__3876 = G__3882;
G__3874__3877 = G__3883;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____3880 = cljs.core.next.call(null,G__3870__3873);

if(cljs.core.truth_(temp__3698__auto____3880))
{var G__3870__3881 = temp__3698__auto____3880;

{
var G__3884 = cljs.core.first.call(null,G__3870__3881);
var G__3885 = G__3870__3881;
obj__3872 = G__3884;
G__3870__3873 = G__3885;
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
pr_str.cljs$lang$applyTo = (function (arglist__3886){
var objs = cljs.core.seq( arglist__3886 );;
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
pr.cljs$lang$applyTo = (function (arglist__3887){
var objs = cljs.core.seq( arglist__3887 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3888){
var objs = cljs.core.seq( arglist__3888 );;
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
println.cljs$lang$applyTo = (function (arglist__3889){
var objs = cljs.core.seq( arglist__3889 );;
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
prn.cljs$lang$applyTo = (function (arglist__3890){
var objs = cljs.core.seq( arglist__3890 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3891 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3891,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____3892 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3892))
{var nspc__3893 = temp__3698__auto____3892;

return cljs.core.str.call(null,nspc__3893,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____3894 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____3894))
{var nspc__3895 = temp__3698__auto____3894;

return cljs.core.str.call(null,nspc__3895,"/");
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
var pr_pair__3896 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3896,"{",", ","}",opts,coll);
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
var this__3897 = this;
var G__3898__3899 = cljs.core.seq.call(null,this__3897.watches);

if(cljs.core.truth_(G__3898__3899))
{var G__3901__3903 = cljs.core.first.call(null,G__3898__3899);
var vec__3902__3904 = G__3901__3903;
var key__3905 = cljs.core.nth.call(null,vec__3902__3904,0,null);
var f__3906 = cljs.core.nth.call(null,vec__3902__3904,1,null);
var G__3898__3907 = G__3898__3899;

var G__3901__3908 = G__3901__3903;
var G__3898__3909 = G__3898__3907;

while(true){
var vec__3910__3911 = G__3901__3908;
var key__3912 = cljs.core.nth.call(null,vec__3910__3911,0,null);
var f__3913 = cljs.core.nth.call(null,vec__3910__3911,1,null);
var G__3898__3914 = G__3898__3909;

f__3913.call(null,key__3912,this$,oldval,newval);
var temp__3698__auto____3915 = cljs.core.next.call(null,G__3898__3914);

if(cljs.core.truth_(temp__3698__auto____3915))
{var G__3898__3916 = temp__3698__auto____3915;

{
var G__3923 = cljs.core.first.call(null,G__3898__3916);
var G__3924 = G__3898__3916;
G__3901__3908 = G__3923;
G__3898__3909 = G__3924;
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
var this__3917 = this;
return this$.watches = cljs.core.assoc.call(null,this__3917.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__3918 = this;
return this$.watches = cljs.core.dissoc.call(null,this__3918.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3919 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3919.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3920 = this;
return this__3920.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3921 = this;
return this__3921.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3922 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
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
var atom__3931 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__3932 = (function() { 
var G__3934__delegate = function (x,p__3925){
var map__3926__3927 = p__3925;
var map__3926__3928 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3926__3927))?cljs.core.apply.call(null,cljs.core.hash_map,map__3926__3927):map__3926__3927);
var validator__3929 = cljs.core.get.call(null,map__3926__3928,"﷐'validator");
var meta__3930 = cljs.core.get.call(null,map__3926__3928,"﷐'meta");

return (new cljs.core.Atom(x,meta__3930,validator__3929,null));
};
var G__3934 = function (x,var_args){
var p__3925 = null;
if (goog.isDef(var_args)) {
  p__3925 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3934__delegate.call(this, x, p__3925);
};
G__3934.cljs$lang$maxFixedArity = 1;
G__3934.cljs$lang$applyTo = (function (arglist__3935){
var x = cljs.core.first(arglist__3935);
var p__3925 = cljs.core.rest(arglist__3935);
return G__3934__delegate.call(this, x, p__3925);
});
return G__3934;
})()
;
atom = function(x,var_args){
var p__3925 = var_args;
switch(arguments.length){
case  1 :
return atom__3931.call(this,x);
default:
return atom__3932.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3932.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____3936 = a.validator;

if(cljs.core.truth_(temp__3698__auto____3936))
{var validate__3937 = temp__3698__auto____3936;

if(cljs.core.truth_(validate__3937.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.list("﷑'validate","﷑'new-value")))));
}
} else
{}
var old_value__3938 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__3938,new_value);
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
var swap_BANG___3939 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3940 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3941 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3942 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3943 = (function() { 
var G__3945__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3945 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3945__delegate.call(this, a, f, x, y, z, more);
};
G__3945.cljs$lang$maxFixedArity = 5;
G__3945.cljs$lang$applyTo = (function (arglist__3946){
var a = cljs.core.first(arglist__3946);
var f = cljs.core.first(cljs.core.next(arglist__3946));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3946)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3946))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3946)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3946)))));
return G__3945__delegate.call(this, a, f, x, y, z, more);
});
return G__3945;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3939.call(this,a,f);
case  3 :
return swap_BANG___3940.call(this,a,f,x);
case  4 :
return swap_BANG___3941.call(this,a,f,x,y);
case  5 :
return swap_BANG___3942.call(this,a,f,x,y,z);
default:
return swap_BANG___3943.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3943.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3947){
var iref = cljs.core.first(arglist__3947);
var f = cljs.core.first(cljs.core.next(arglist__3947));
var args = cljs.core.rest(cljs.core.next(arglist__3947));
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
var gensym__3948 = (function (){
return gensym.call(null,"G__");
});
var gensym__3949 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3948.call(this);
case  1 :
return gensym__3949.call(this,prefix_string);
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
var this__3951 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3951.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3952 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3952.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3952.state,this__3952.f);
}
return cljs.core.deref.call(null,this__3952.state);
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
delay.cljs$lang$applyTo = (function (arglist__3953){
var body = cljs.core.seq( arglist__3953 );;
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
var map__3954__3955 = options;
var map__3954__3956 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3954__3955))?cljs.core.apply.call(null,cljs.core.hash_map,map__3954__3955):map__3954__3955);
var keywordize_keys__3957 = cljs.core.get.call(null,map__3954__3956,"﷐'keywordize-keys");
var keyfn__3958 = (cljs.core.truth_(keywordize_keys__3957)?cljs.core.keyword:cljs.core.str);
var f__3964 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__378__auto____3963 = (function iter__3959(s__3960){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3960__3961 = s__3960;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3960__3961)))
{var k__3962 = cljs.core.first.call(null,s__3960__3961);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3958.call(null,k__3962),thisfn.call(null,(x[k__3962]))]),iter__3959.call(null,cljs.core.rest.call(null,s__3960__3961)));
} else
{return null;
}
break;
}
})));
});

return iter__378__auto____3963.call(null,cljs.core.js_keys.call(null,x));
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

return f__3964.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3965){
var x = cljs.core.first(arglist__3965);
var options = cljs.core.rest(arglist__3965);
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
var mem__3966 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3970__delegate = function (args){
var temp__3695__auto____3967 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3966),args);

if(cljs.core.truth_(temp__3695__auto____3967))
{var v__3968 = temp__3695__auto____3967;

return v__3968;
} else
{var ret__3969 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3966,cljs.core.assoc,args,ret__3969);
return ret__3969;
}
};
var G__3970 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3970__delegate.call(this, args);
};
G__3970.cljs$lang$maxFixedArity = 0;
G__3970.cljs$lang$applyTo = (function (arglist__3971){
var args = cljs.core.seq( arglist__3971 );;
return G__3970__delegate.call(this, args);
});
return G__3970;
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
var trampoline__3973 = (function (f){
while(true){
var ret__3972 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3972)))
{{
var G__3976 = ret__3972;
f = G__3976;
continue;
}
} else
{return ret__3972;
}
break;
}
});
var trampoline__3974 = (function() { 
var G__3977__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3977 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3977__delegate.call(this, f, args);
};
G__3977.cljs$lang$maxFixedArity = 1;
G__3977.cljs$lang$applyTo = (function (arglist__3978){
var f = cljs.core.first(arglist__3978);
var args = cljs.core.rest(arglist__3978);
return G__3977__delegate.call(this, f, args);
});
return G__3977;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3973.call(this,f);
default:
return trampoline__3974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3974.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3979 = (function (){
return rand.call(null,1);
});
var rand__3980 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3979.call(this);
case  1 :
return rand__3980.call(this,n);
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
var k__3982 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3982,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3982,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3991 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3992 = (function (h,child,parent){
var or__3548__auto____3983 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____3983))
{return or__3548__auto____3983;
} else
{var or__3548__auto____3984 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____3984))
{return or__3548__auto____3984;
} else
{var and__3546__auto____3985 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____3985))
{var and__3546__auto____3986 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____3986))
{var and__3546__auto____3987 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____3987))
{var ret__3988 = true;
var i__3989 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____3990 = cljs.core.not.call(null,ret__3988);

if(cljs.core.truth_(or__3548__auto____3990))
{return or__3548__auto____3990;
} else
{return cljs.core._EQ_.call(null,i__3989,cljs.core.count.call(null,parent));
}
})()))
{return ret__3988;
} else
{{
var G__3994 = isa_QMARK_.call(null,h,child.call(null,i__3989),parent.call(null,i__3989));
var G__3995 = (i__3989 + 1);
ret__3988 = G__3994;
i__3989 = G__3995;
continue;
}
}
break;
}
} else
{return and__3546__auto____3987;
}
} else
{return and__3546__auto____3986;
}
} else
{return and__3546__auto____3985;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3991.call(this,h,child);
case  3 :
return isa_QMARK___3992.call(this,h,child,parent);
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
var parents__3996 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3997 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3996.call(this,h);
case  2 :
return parents__3997.call(this,h,tag);
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
var ancestors__3999 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4000 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3999.call(this,h);
case  2 :
return ancestors__4000.call(this,h,tag);
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
var descendants__4002 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4003 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4002.call(this,h);
case  2 :
return descendants__4003.call(this,h,tag);
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
var derive__4013 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4014 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")))));
}
var tp__4008 = "﷐'parents".call(null,h);
var td__4009 = "﷐'descendants".call(null,h);
var ta__4010 = "﷐'ancestors".call(null,h);
var tf__4011 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4012 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4008.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4010.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4010.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4008,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4011.call(null,"﷐'ancestors".call(null,h),tag,td__4009,parent,ta__4010),"﷐'descendants":tf__4011.call(null,"﷐'descendants".call(null,h),parent,ta__4010,tag,td__4009)});
})());

if(cljs.core.truth_(or__3548__auto____4012))
{return or__3548__auto____4012;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4013.call(this,h,tag);
case  3 :
return derive__4014.call(this,h,tag,parent);
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
var underive__4020 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4021 = (function (h,tag,parent){
var parentMap__4016 = "﷐'parents".call(null,h);
var childsParents__4017 = (cljs.core.truth_(parentMap__4016.call(null,tag))?cljs.core.disj.call(null,parentMap__4016.call(null,tag),parent):cljs.core.set([]));
var newParents__4018 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4017))?cljs.core.assoc.call(null,parentMap__4016,tag,childsParents__4017):cljs.core.dissoc.call(null,parentMap__4016,tag));
var deriv_seq__4019 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4005_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4005_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4005_SHARP_),cljs.core.second.call(null,p1__4005_SHARP_)));
}),cljs.core.seq.call(null,newParents__4018)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4016.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4006_SHARP_,p2__4007_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4006_SHARP_,p2__4007_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4019));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4020.call(this,h,tag);
case  3 :
return underive__4021.call(this,h,tag,parent);
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
var xprefs__4023 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4025 = (cljs.core.truth_((function (){var and__3546__auto____4024 = xprefs__4023;

if(cljs.core.truth_(and__3546__auto____4024))
{return xprefs__4023.call(null,y);
} else
{return and__3546__auto____4024;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4025))
{return or__3548__auto____4025;
} else
{var or__3548__auto____4027 = (function (){var ps__4026 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4026) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4026),prefer_table)))
{} else
{}
{
var G__4030 = cljs.core.rest.call(null,ps__4026);
ps__4026 = G__4030;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4027))
{return or__3548__auto____4027;
} else
{var or__3548__auto____4029 = (function (){var ps__4028 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4028) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4028),y,prefer_table)))
{} else
{}
{
var G__4031 = cljs.core.rest.call(null,ps__4028);
ps__4028 = G__4031;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4029))
{return or__3548__auto____4029;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4032 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4032))
{return or__3548__auto____4032;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4041 = cljs.core.reduce.call(null,(function (be,p__4033){
var vec__4034__4035 = p__4033;
var k__4036 = cljs.core.nth.call(null,vec__4034__4035,0,null);
var ___4037 = cljs.core.nth.call(null,vec__4034__4035,1,null);
var e__4038 = vec__4034__4035;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4036)))
{var be2__4040 = (cljs.core.truth_((function (){var or__3548__auto____4039 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4039))
{return or__3548__auto____4039;
} else
{return cljs.core.dominates.call(null,k__4036,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4038:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4040),k__4036,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4036," and ",cljs.core.first.call(null,be2__4040),", and neither is preferred")));
}
return be2__4040;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4041))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4041));
return cljs.core.second.call(null,best_entry__4041);
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
if(cljs.core.truth_((function (){var and__3546__auto____4042 = mf;

if(cljs.core.truth_(and__3546__auto____4042))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4042;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4043 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4043))
{return or__3548__auto____4043;
} else
{var or__3548__auto____4044 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4044))
{return or__3548__auto____4044;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4045 = mf;

if(cljs.core.truth_(and__3546__auto____4045))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4045;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4046 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4046))
{return or__3548__auto____4046;
} else
{var or__3548__auto____4047 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4047))
{return or__3548__auto____4047;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4048 = mf;

if(cljs.core.truth_(and__3546__auto____4048))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4048;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4049 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4049))
{return or__3548__auto____4049;
} else
{var or__3548__auto____4050 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4050))
{return or__3548__auto____4050;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4051 = mf;

if(cljs.core.truth_(and__3546__auto____4051))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4051;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4052 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4052))
{return or__3548__auto____4052;
} else
{var or__3548__auto____4053 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4053))
{return or__3548__auto____4053;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4054 = mf;

if(cljs.core.truth_(and__3546__auto____4054))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4054;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4055 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4055))
{return or__3548__auto____4055;
} else
{var or__3548__auto____4056 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4056))
{return or__3548__auto____4056;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4057 = mf;

if(cljs.core.truth_(and__3546__auto____4057))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4057;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4058 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4058))
{return or__3548__auto____4058;
} else
{var or__3548__auto____4059 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4059))
{return or__3548__auto____4059;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4060 = mf;

if(cljs.core.truth_(and__3546__auto____4060))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4060;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4061 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4061))
{return or__3548__auto____4061;
} else
{var or__3548__auto____4062 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4062))
{return or__3548__auto____4062;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4063 = mf;

if(cljs.core.truth_(and__3546__auto____4063))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3546__auto____4063;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3548__auto____4064 = (cljs.core._invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4064))
{return or__3548__auto____4064;
} else
{var or__3548__auto____4065 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____4065))
{return or__3548__auto____4065;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__4066 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4067 = cljs.core._get_method.call(null,mf,dispatch_val__4066);

if(cljs.core.truth_(target_fn__4067))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4066)));
}
return cljs.core.apply.call(null,target_fn__4067,args);
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
var this__4068 = this;
cljs.core.swap_BANG_.call(null,this__4068.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4068.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4068.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4068.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4069 = this;
cljs.core.swap_BANG_.call(null,this__4069.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4069.method_cache,this__4069.method_table,this__4069.cached_hierarchy,this__4069.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4070 = this;
cljs.core.swap_BANG_.call(null,this__4070.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4070.method_cache,this__4070.method_table,this__4070.cached_hierarchy,this__4070.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4071 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4071.cached_hierarchy),cljs.core.deref.call(null,this__4071.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4071.method_cache,this__4071.method_table,this__4071.cached_hierarchy,this__4071.hierarchy);
}
var temp__3695__auto____4072 = cljs.core.deref.call(null,this__4071.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4072))
{var target_fn__4073 = temp__3695__auto____4072;

return target_fn__4073;
} else
{var temp__3695__auto____4074 = cljs.core.find_and_cache_best_method.call(null,this__4071.name,dispatch_val,this__4071.hierarchy,this__4071.method_table,this__4071.prefer_table,this__4071.method_cache,this__4071.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4074))
{var target_fn__4075 = temp__3695__auto____4074;

return target_fn__4075;
} else
{return cljs.core.deref.call(null,this__4071.method_table).call(null,this__4071.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4076 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4076.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4076.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4076.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4076.method_cache,this__4076.method_table,this__4076.cached_hierarchy,this__4076.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4077 = this;
return cljs.core.deref.call(null,this__4077.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4078 = this;
return cljs.core.deref.call(null,this__4078.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__4079 = this;
return cljs.core.do_invoke.call(null,mf,this__4079.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__4080__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__4080 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4080__delegate.call(this, _, args);
};
G__4080.cljs$lang$maxFixedArity = 1;
G__4080.cljs$lang$applyTo = (function (arglist__4081){
var _ = cljs.core.first(arglist__4081);
var args = cljs.core.rest(arglist__4081);
return G__4080__delegate.call(this, _, args);
});
return G__4080;
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
