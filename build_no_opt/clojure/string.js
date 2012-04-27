goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.__3(cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
return s.split("").reverse().join("");
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if((cljs.core.string_QMARK_(match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(("\uFDD0'else"))
{throw cljs.core.str("Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__1 = (function (coll){
return cljs.core.apply.__2(cljs.core.str,coll);
});
var join__2 = (function (separator,coll){
return cljs.core.apply.__2(cljs.core.str,cljs.core.interpose(separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__1.call(this,separator);
case  2 :
return join__2.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
join.__1 = join__1;
join.__2 = join__2;
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(((cljs.core.count(s) < 2)))
{return clojure.string.upper_case(s);
} else
{return cljs.core.str(clojure.string.upper_case(cljs.core.subs.__3(s,0,1)),clojure.string.lower_case(cljs.core.subs.__2(s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__2 = (function (s,re){
return cljs.core.vec(cljs.core.str.__1(s).split(re));
});
var split__3 = (function (s,re,limit){
if(((limit < 1)))
{return cljs.core.vec(cljs.core.str.__1(s).split(re));
} else
{var s__21462 = s;
var limit__21463 = limit;
var parts__21464 = cljs.core.PersistentVector.fromArray([]);

while(true){
if((cljs.core._EQ_.__2(limit__21463,1)))
{return cljs.core.conj.__2(parts__21464,s__21462);
} else
{var temp__3695__auto____21465 = cljs.core.re_find(re,s__21462);

if(cljs.core.truth_(temp__3695__auto____21465))
{var m__21466 = temp__3695__auto____21465;

var index__21467 = s__21462.indexOf(m__21466);

{
var G__21471 = s__21462.substring((index__21467 + cljs.core.count(m__21466)));
var G__21472 = (limit__21463 - 1);
var G__21473 = cljs.core.conj.__2(parts__21464,s__21462.substring(0,index__21467));
s__21462 = G__21471;
limit__21463 = G__21472;
parts__21464 = G__21473;
continue;
}
} else
{return cljs.core.conj.__2(parts__21464,s__21462);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__2.call(this,s,re);
case  3 :
return split__3.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
split.__2 = split__2;
split.__3 = split__3;
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.__2(s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__21474 = s.length;

while(true){
if(((index__21474 === 0)))
{return "";
} else
{var ch__21475 = cljs.core.get.__2(s,(index__21474 - 1));

if(((function (){var or__3548__auto____21476 = cljs.core._EQ_.__2(ch__21475,"\n");

if((or__3548__auto____21476))
{return or__3548__auto____21476;
} else
{return cljs.core._EQ_.__2(ch__21475,"\r");
}
})()))
{{
var G__21480 = (index__21474 - 1);
index__21474 = G__21480;
continue;
}
} else
{return s.substring(0,index__21474);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__21481 = cljs.core.str.__1(s);

if(cljs.core.truth_((function (){var or__3548__auto____21482 = cljs.core.not(s__21481);

if((or__3548__auto____21482))
{return or__3548__auto____21482;
} else
{var or__3548__auto____21483 = cljs.core._EQ_.__2("",s__21481);

if((or__3548__auto____21483))
{return or__3548__auto____21483;
} else
{return cljs.core.re_matches(/\s+/,s__21481);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__21487 = (new goog.string.StringBuffer());
var length__21488 = s.length;

var index__21489 = 0;

while(true){
if((cljs.core._EQ_.__2(length__21488,index__21489)))
{return buffer__21487.toString();
} else
{var ch__21490 = s.charAt(index__21489);

var temp__3695__auto____21491 = cljs.core.get.__2(cmap,ch__21490);

if(cljs.core.truth_(temp__3695__auto____21491))
{var replacement__21492 = temp__3695__auto____21491;

buffer__21487.append(cljs.core.str.__1(replacement__21492));
} else
{buffer__21487.append(ch__21490);
}
{
var G__21495 = (index__21489 + 1);
index__21489 = G__21495;
continue;
}
}
break;
}
});
