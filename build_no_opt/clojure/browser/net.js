goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16597){
var vec__16598__16599 = p__16597;
var k__16601 = cljs.core.nth.call(null,vec__16598__16599,0,null);
var v__16602 = cljs.core.nth.call(null,vec__16598__16599,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16601.toLowerCase()),v__16602]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__16826 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____16609 = this$;

if(cljs.core.truth_(and__3546__auto____16609))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16609;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____16610 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16610))
{return or__3548__auto____16610;
} else
{var or__3548__auto____16611 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16611))
{return or__3548__auto____16611;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__16827 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____16612 = this$;

if(cljs.core.truth_(and__3546__auto____16612))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16612;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____16613 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16613))
{return or__3548__auto____16613;
} else
{var or__3548__auto____16615 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16615))
{return or__3548__auto____16615;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__16828 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16649 = this$;

if(cljs.core.truth_(and__3546__auto____16649))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16649;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____16653 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16653))
{return or__3548__auto____16653;
} else
{var or__3548__auto____16654 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16654))
{return or__3548__auto____16654;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__16829 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16655 = this$;

if(cljs.core.truth_(and__3546__auto____16655))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16655;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____16656 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16656))
{return or__3548__auto____16656;
} else
{var or__3548__auto____16657 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16657))
{return or__3548__auto____16657;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2,opt3);
}
});
connect = function(this$,opt1,opt2,opt3){
switch(arguments.length){
case  1 :
return connect__16826.call(this,this$);
case  2 :
return connect__16827.call(this,this$,opt1);
case  3 :
return connect__16828.call(this,this$,opt1,opt2);
case  4 :
return connect__16829.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__16841 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____16658 = this$;

if(cljs.core.truth_(and__3546__auto____16658))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16658;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____16659 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16659))
{return or__3548__auto____16659;
} else
{var or__3548__auto____16660 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16660))
{return or__3548__auto____16660;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__16843 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16661 = this$;

if(cljs.core.truth_(and__3546__auto____16661))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16661;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____16662 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16662))
{return or__3548__auto____16662;
} else
{var or__3548__auto____16663 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16663))
{return or__3548__auto____16663;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__16844 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16664 = this$;

if(cljs.core.truth_(and__3546__auto____16664))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16664;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____16665 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16665))
{return or__3548__auto____16665;
} else
{var or__3548__auto____16666 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16666))
{return or__3548__auto____16666;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__16845 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____16810 = this$;

if(cljs.core.truth_(and__3546__auto____16810))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16810;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____16813 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16813))
{return or__3548__auto____16813;
} else
{var or__3548__auto____16816 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16816))
{return or__3548__auto____16816;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__16846 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____16818 = this$;

if(cljs.core.truth_(and__3546__auto____16818))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16818;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____16819 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16819))
{return or__3548__auto____16819;
} else
{var or__3548__auto____16821 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16821))
{return or__3548__auto____16821;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4,opt5);
}
});
transmit = function(this$,opt,opt2,opt3,opt4,opt5){
switch(arguments.length){
case  2 :
return transmit__16841.call(this,this$,opt);
case  3 :
return transmit__16843.call(this,this$,opt,opt2);
case  4 :
return transmit__16844.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__16845.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__16846.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____16823 = this$;

if(cljs.core.truth_(and__3546__auto____16823))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____16823;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____16824 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16824))
{return or__3548__auto____16824;
} else
{var or__3548__auto____16825 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____16825))
{return or__3548__auto____16825;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16860){
var vec__16861__16862 = p__16860;
var k__16863 = cljs.core.nth.call(null,vec__16861__16862,0,null);
var v__16864 = cljs.core.nth.call(null,vec__16861__16862,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16863.toLowerCase()),v__16864]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__16871 = null;
var G__16871__16875 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16871__16876 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16871__16877 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16871__16878 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16871__16879 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__16871 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__16871__16875.call(this,this$,uri);
case  3 :
return G__16871__16876.call(this,this$,uri,method);
case  4 :
return G__16871__16877.call(this,this$,uri,method,content);
case  5 :
return G__16871__16878.call(this,this$,uri,method,content,headers);
case  6 :
return G__16871__16879.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16871;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16883){
var vec__16884__16886 = p__16883;
var k__16887 = cljs.core.nth.call(null,vec__16884__16886,0,null);
var v__16888 = cljs.core.nth.call(null,vec__16884__16886,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16887.toLowerCase()),v__16888]);
}),cljs.core.js__GT_clj.call(null,goog.net.xpc.CfgFields)));
/**
* Returns an XhrIo connection
*/
clojure.browser.net.xhr_connection = (function xhr_connection(){
return (new goog.net.XhrIo());
});
clojure.browser.net.ICrossPageChannel = {};
clojure.browser.net.register_service = (function() {
var register_service = null;
var register_service__16905 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____16894 = this$;

if(cljs.core.truth_(and__3546__auto____16894))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16894;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____16897 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16897))
{return or__3548__auto____16897;
} else
{var or__3548__auto____16900 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16900))
{return or__3548__auto____16900;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__16907 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____16902 = this$;

if(cljs.core.truth_(and__3546__auto____16902))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16902;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____16903 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16903))
{return or__3548__auto____16903;
} else
{var or__3548__auto____16904 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16904))
{return or__3548__auto____16904;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn,encode_json_QMARK_);
}
});
register_service = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return register_service__16905.call(this,this$,service_name,fn);
case  4 :
return register_service__16907.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__16920 = null;
var G__16920__16922 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__16920__16924 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__16920__16926 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__16920__16927 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__16920 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__16920__16922.call(this,this$);
case  2 :
return G__16920__16924.call(this,this$,on_connect_fn);
case  3 :
return G__16920__16926.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__16920__16927.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16920;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$transmit = (function (this$,service_name,payload){
return this$.send(cljs.core.name.call(null,service_name),payload);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$close = (function (this$){
return this$.close(cljs.core.List.EMPTY);
});
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$ICrossPageChannel$register_service = (function() {
var G__16929 = null;
var G__16929__16930 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__16929__16931 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__16929 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__16929__16930.call(this,this$,service_name,fn);
case  4 :
return G__16929__16931.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16929;
})()
;
/**
* When passed with a config hash-map, returns a parent
* CrossPageChannel object. Keys in the config hash map are downcased
* versions of the goog.net.xpc.CfgFields enum keys,
* e.g. goog.net.xpc.CfgFields.PEER_URI becomes :peer_uri in the config
* hash.
* 
* When passed with no args, creates a child CrossPageChannel object,
* and the config is automatically taken from the URL param 'xpc', as
* per the CrossPageChannel API.
*/
clojure.browser.net.xpc_connection = (function() {
var xpc_connection = null;
var xpc_connection__16948 = (function (){
var temp__3698__auto____16933 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____16933))
{var config__16934 = temp__3698__auto____16933;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__16934)));
} else
{return null;
}
});
var xpc_connection__16949 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__16935){
var vec__16936__16937 = p__16935;
var k__16938 = cljs.core.nth.call(null,vec__16936__16937,0,null);
var v__16939 = cljs.core.nth.call(null,vec__16936__16937,1,null);

var temp__3695__auto____16946 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__16938);

if(cljs.core.truth_(temp__3695__auto____16946))
{var field__16947 = temp__3695__auto____16946;

return cljs.core.assoc.call(null,sum,field__16947,v__16939);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__16948.call(this);
case  1 :
return xpc_connection__16949.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
