goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16515){
var vec__16516__16517 = p__16515;
var k__16518 = cljs.core.nth.call(null,vec__16516__16517,0,null);
var v__16519 = cljs.core.nth.call(null,vec__16516__16517,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16518.toLowerCase()),v__16519]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__16606 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____16524 = this$;

if(cljs.core.truth_(and__3546__auto____16524))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16524;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____16525 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16525))
{return or__3548__auto____16525;
} else
{var or__3548__auto____16526 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16526))
{return or__3548__auto____16526;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__16607 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____16527 = this$;

if(cljs.core.truth_(and__3546__auto____16527))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16527;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____16528 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16528))
{return or__3548__auto____16528;
} else
{var or__3548__auto____16529 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16529))
{return or__3548__auto____16529;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__16608 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16530 = this$;

if(cljs.core.truth_(and__3546__auto____16530))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16530;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____16531 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16531))
{return or__3548__auto____16531;
} else
{var or__3548__auto____16532 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16532))
{return or__3548__auto____16532;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__16609 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16534 = this$;

if(cljs.core.truth_(and__3546__auto____16534))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16534;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____16537 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16537))
{return or__3548__auto____16537;
} else
{var or__3548__auto____16539 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16539))
{return or__3548__auto____16539;
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
return connect__16606.call(this,this$);
case  2 :
return connect__16607.call(this,this$,opt1);
case  3 :
return connect__16608.call(this,this$,opt1,opt2);
case  4 :
return connect__16609.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__16612 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____16542 = this$;

if(cljs.core.truth_(and__3546__auto____16542))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16542;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____16575 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16575))
{return or__3548__auto____16575;
} else
{var or__3548__auto____16576 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16576))
{return or__3548__auto____16576;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__16613 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16582 = this$;

if(cljs.core.truth_(and__3546__auto____16582))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16582;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____16583 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16583))
{return or__3548__auto____16583;
} else
{var or__3548__auto____16584 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16584))
{return or__3548__auto____16584;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__16614 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16585 = this$;

if(cljs.core.truth_(and__3546__auto____16585))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16585;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____16594 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16594))
{return or__3548__auto____16594;
} else
{var or__3548__auto____16595 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16595))
{return or__3548__auto____16595;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__16615 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____16596 = this$;

if(cljs.core.truth_(and__3546__auto____16596))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16596;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____16597 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16597))
{return or__3548__auto____16597;
} else
{var or__3548__auto____16598 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16598))
{return or__3548__auto____16598;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__16616 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____16599 = this$;

if(cljs.core.truth_(and__3546__auto____16599))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16599;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____16601 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16601))
{return or__3548__auto____16601;
} else
{var or__3548__auto____16602 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16602))
{return or__3548__auto____16602;
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
return transmit__16612.call(this,this$,opt);
case  3 :
return transmit__16613.call(this,this$,opt,opt2);
case  4 :
return transmit__16614.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__16615.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__16616.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____16603 = this$;

if(cljs.core.truth_(and__3546__auto____16603))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____16603;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____16604 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16604))
{return or__3548__auto____16604;
} else
{var or__3548__auto____16605 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____16605))
{return or__3548__auto____16605;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16623){
var vec__16625__16627 = p__16623;
var k__16633 = cljs.core.nth.call(null,vec__16625__16627,0,null);
var v__16634 = cljs.core.nth.call(null,vec__16625__16627,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16633.toLowerCase()),v__16634]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__16640 = null;
var G__16640__16641 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16640__16642 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16640__16643 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16640__16644 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16640__16645 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__16640 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__16640__16641.call(this,this$,uri);
case  3 :
return G__16640__16642.call(this,this$,uri,method);
case  4 :
return G__16640__16643.call(this,this$,uri,method,content);
case  5 :
return G__16640__16644.call(this,this$,uri,method,content,headers);
case  6 :
return G__16640__16645.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16640;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16647){
var vec__16648__16649 = p__16647;
var k__16650 = cljs.core.nth.call(null,vec__16648__16649,0,null);
var v__16651 = cljs.core.nth.call(null,vec__16648__16649,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16650.toLowerCase()),v__16651]);
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
var register_service__16667 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____16661 = this$;

if(cljs.core.truth_(and__3546__auto____16661))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16661;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____16662 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16662))
{return or__3548__auto____16662;
} else
{var or__3548__auto____16663 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16663))
{return or__3548__auto____16663;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__16668 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____16664 = this$;

if(cljs.core.truth_(and__3546__auto____16664))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16664;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____16665 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16665))
{return or__3548__auto____16665;
} else
{var or__3548__auto____16666 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16666))
{return or__3548__auto____16666;
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
return register_service__16667.call(this,this$,service_name,fn);
case  4 :
return register_service__16668.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__16670 = null;
var G__16670__16671 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__16670__16672 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__16670__16673 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__16670__16674 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__16670 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__16670__16671.call(this,this$);
case  2 :
return G__16670__16672.call(this,this$,on_connect_fn);
case  3 :
return G__16670__16673.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__16670__16674.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16670;
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
var G__16680 = null;
var G__16680__16681 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__16680__16682 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__16680 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__16680__16681.call(this,this$,service_name,fn);
case  4 :
return G__16680__16682.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16680;
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
var xpc_connection__16734 = (function (){
var temp__3698__auto____16688 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____16688))
{var config__16689 = temp__3698__auto____16688;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__16689)));
} else
{return null;
}
});
var xpc_connection__16735 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__16724){
var vec__16725__16726 = p__16724;
var k__16728 = cljs.core.nth.call(null,vec__16725__16726,0,null);
var v__16731 = cljs.core.nth.call(null,vec__16725__16726,1,null);

var temp__3695__auto____16732 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__16728);

if(cljs.core.truth_(temp__3695__auto____16732))
{var field__16733 = temp__3695__auto____16732;

return cljs.core.assoc.call(null,sum,field__16733,v__16731);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__16734.call(this);
case  1 :
return xpc_connection__16735.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
