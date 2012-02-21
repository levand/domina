goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
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
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
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
var join__16848 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__16849 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__16848.call(this,separator);
case  2 :
return join__16849.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
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
if(cljs.core.truth_((cljs.core.count.call(null,s) < 2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__16868 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__16869 = (function (s,re,limit){
if(cljs.core.truth_((limit < 1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__16861 = s;
var limit__16862 = limit;
var parts__16863 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__16862,1)))
{return cljs.core.conj.call(null,parts__16863,s__16861);
} else
{var temp__3695__auto____16864 = cljs.core.re_find.call(null,re,s__16861);

if(cljs.core.truth_(temp__3695__auto____16864))
{var m__16865 = temp__3695__auto____16864;

var index__16867 = s__16861.indexOf(m__16865);

{
var G__16871 = s__16861.substring((index__16867 + cljs.core.count.call(null,m__16865)));
var G__16872 = (limit__16862 - 1);
var G__16873 = cljs.core.conj.call(null,parts__16863,s__16861.substring(0,index__16867));
s__16861 = G__16871;
limit__16862 = G__16872;
parts__16863 = G__16873;
continue;
}
} else
{return cljs.core.conj.call(null,parts__16863,s__16861);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__16868.call(this,s,re);
case  3 :
return split__16869.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
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
var index__16888 = s.length;

while(true){
if(cljs.core.truth_((index__16888 === 0)))
{return "";
} else
{var ch__16889 = cljs.core.get.call(null,s,(index__16888 - 1));

if(cljs.core.truth_((function (){var or__3548__auto____16893 = cljs.core._EQ_.call(null,ch__16889,"\n");

if(cljs.core.truth_(or__3548__auto____16893))
{return or__3548__auto____16893;
} else
{return cljs.core._EQ_.call(null,ch__16889,"\r");
}
})()))
{{
var G__16895 = (index__16888 - 1);
index__16888 = G__16895;
continue;
}
} else
{return s.substring(0,index__16888);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__16897 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3548__auto____16899 = cljs.core.not.call(null,s__16897);

if(cljs.core.truth_(or__3548__auto____16899))
{return or__3548__auto____16899;
} else
{var or__3548__auto____16909 = cljs.core._EQ_.call(null,"",s__16897);

if(cljs.core.truth_(or__3548__auto____16909))
{return or__3548__auto____16909;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__16897);
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
var buffer__16915 = (new goog.string.StringBuffer());
var length__16917 = s.length;

var index__16918 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__16917,index__16918)))
{return buffer__16915.toString();
} else
{var ch__16921 = s.charAt(index__16918);

var temp__3695__auto____16922 = cljs.core.get.call(null,cmap,ch__16921);

if(cljs.core.truth_(temp__3695__auto____16922))
{var replacement__16923 = temp__3695__auto____16922;

buffer__16915.append(cljs.core.str.call(null,replacement__16923));
} else
{buffer__16915.append(ch__16921);
}
{
var G__16926 = (index__16918 + 1);
index__16918 = G__16926;
continue;
}
}
break;
}
});
