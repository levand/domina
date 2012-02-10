goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16573){
var vec__16575__16576 = p__16573;
var k__16578 = cljs.core.nth.call(null,vec__16575__16576,0,null);
var v__16579 = cljs.core.nth.call(null,vec__16575__16576,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16578.toLowerCase()),v__16579]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__16722 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____16586 = this$;

if(cljs.core.truth_(and__3546__auto____16586))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16586;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____16589 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16589))
{return or__3548__auto____16589;
} else
{var or__3548__auto____16592 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16592))
{return or__3548__auto____16592;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__16723 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____16595 = this$;

if(cljs.core.truth_(and__3546__auto____16595))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16595;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____16597 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16597))
{return or__3548__auto____16597;
} else
{var or__3548__auto____16600 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16600))
{return or__3548__auto____16600;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__16724 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16602 = this$;

if(cljs.core.truth_(and__3546__auto____16602))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16602;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____16603 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16603))
{return or__3548__auto____16603;
} else
{var or__3548__auto____16605 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16605))
{return or__3548__auto____16605;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__16725 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16608 = this$;

if(cljs.core.truth_(and__3546__auto____16608))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16608;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____16656 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16656))
{return or__3548__auto____16656;
} else
{var or__3548__auto____16658 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16658))
{return or__3548__auto____16658;
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
return connect__16722.call(this,this$);
case  2 :
return connect__16723.call(this,this$,opt1);
case  3 :
return connect__16724.call(this,this$,opt1,opt2);
case  4 :
return connect__16725.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__16734 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____16661 = this$;

if(cljs.core.truth_(and__3546__auto____16661))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16661;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
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
})().call(null,this$,opt);
}
});
var transmit__16750 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16665 = this$;

if(cljs.core.truth_(and__3546__auto____16665))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16665;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____16668 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16668))
{return or__3548__auto____16668;
} else
{var or__3548__auto____16669 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16669))
{return or__3548__auto____16669;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__16751 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16671 = this$;

if(cljs.core.truth_(and__3546__auto____16671))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16671;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____16673 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16673))
{return or__3548__auto____16673;
} else
{var or__3548__auto____16675 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16675))
{return or__3548__auto____16675;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__16752 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____16698 = this$;

if(cljs.core.truth_(and__3546__auto____16698))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16698;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____16701 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16701))
{return or__3548__auto____16701;
} else
{var or__3548__auto____16702 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16702))
{return or__3548__auto____16702;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__16753 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____16704 = this$;

if(cljs.core.truth_(and__3546__auto____16704))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16704;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____16707 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16707))
{return or__3548__auto____16707;
} else
{var or__3548__auto____16708 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16708))
{return or__3548__auto____16708;
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
return transmit__16734.call(this,this$,opt);
case  3 :
return transmit__16750.call(this,this$,opt,opt2);
case  4 :
return transmit__16751.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__16752.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__16753.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____16712 = this$;

if(cljs.core.truth_(and__3546__auto____16712))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____16712;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____16714 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16714))
{return or__3548__auto____16714;
} else
{var or__3548__auto____16715 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____16715))
{return or__3548__auto____16715;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16801){
var vec__16802__16803 = p__16801;
var k__16804 = cljs.core.nth.call(null,vec__16802__16803,0,null);
var v__16805 = cljs.core.nth.call(null,vec__16802__16803,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16804.toLowerCase()),v__16805]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__16815 = null;
var G__16815__16816 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16815__16817 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16815__16818 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16815__16819 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16815__16820 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__16815 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__16815__16816.call(this,this$,uri);
case  3 :
return G__16815__16817.call(this,this$,uri,method);
case  4 :
return G__16815__16818.call(this,this$,uri,method,content);
case  5 :
return G__16815__16819.call(this,this$,uri,method,content,headers);
case  6 :
return G__16815__16820.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16815;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16822){
var vec__16823__16824 = p__16822;
var k__16825 = cljs.core.nth.call(null,vec__16823__16824,0,null);
var v__16826 = cljs.core.nth.call(null,vec__16823__16824,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16825.toLowerCase()),v__16826]);
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
var register_service__16864 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____16837 = this$;

if(cljs.core.truth_(and__3546__auto____16837))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16837;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____16838 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16838))
{return or__3548__auto____16838;
} else
{var or__3548__auto____16840 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16840))
{return or__3548__auto____16840;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__16865 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____16842 = this$;

if(cljs.core.truth_(and__3546__auto____16842))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16842;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____16844 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16844))
{return or__3548__auto____16844;
} else
{var or__3548__auto____16845 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16845))
{return or__3548__auto____16845;
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
return register_service__16864.call(this,this$,service_name,fn);
case  4 :
return register_service__16865.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__16879 = null;
var G__16879__16880 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__16879__16881 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__16879__16882 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__16879__16883 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__16879 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__16879__16880.call(this,this$);
case  2 :
return G__16879__16881.call(this,this$,on_connect_fn);
case  3 :
return G__16879__16882.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__16879__16883.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16879;
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
var G__16886 = null;
var G__16886__16887 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__16886__16888 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__16886 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__16886__16887.call(this,this$,service_name,fn);
case  4 :
return G__16886__16888.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16886;
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
var xpc_connection__16920 = (function (){
var temp__3698__auto____16892 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____16892))
{var config__16898 = temp__3698__auto____16892;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__16898)));
} else
{return null;
}
});
var xpc_connection__16921 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__16899){
var vec__16900__16901 = p__16899;
var k__16902 = cljs.core.nth.call(null,vec__16900__16901,0,null);
var v__16904 = cljs.core.nth.call(null,vec__16900__16901,1,null);

var temp__3695__auto____16908 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__16902);

if(cljs.core.truth_(temp__3695__auto____16908))
{var field__16910 = temp__3695__auto____16908;

return cljs.core.assoc.call(null,sum,field__16910,v__16904);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__16920.call(this);
case  1 :
return xpc_connection__16921.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
