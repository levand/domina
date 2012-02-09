goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16401){
var vec__16407__16408 = p__16401;
var k__16409 = cljs.core.nth.call(null,vec__16407__16408,0,null);
var v__16410 = cljs.core.nth.call(null,vec__16407__16408,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16409.toLowerCase()),v__16410]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__16482 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____16414 = this$;

if(cljs.core.truth_(and__3546__auto____16414))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16414;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____16415 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16415))
{return or__3548__auto____16415;
} else
{var or__3548__auto____16416 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16416))
{return or__3548__auto____16416;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__16483 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____16417 = this$;

if(cljs.core.truth_(and__3546__auto____16417))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16417;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____16418 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16418))
{return or__3548__auto____16418;
} else
{var or__3548__auto____16419 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16419))
{return or__3548__auto____16419;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__16484 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16420 = this$;

if(cljs.core.truth_(and__3546__auto____16420))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16420;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____16421 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16421))
{return or__3548__auto____16421;
} else
{var or__3548__auto____16422 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16422))
{return or__3548__auto____16422;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__16485 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16425 = this$;

if(cljs.core.truth_(and__3546__auto____16425))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16425;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____16426 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16426))
{return or__3548__auto____16426;
} else
{var or__3548__auto____16427 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16427))
{return or__3548__auto____16427;
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
return connect__16482.call(this,this$);
case  2 :
return connect__16483.call(this,this$,opt1);
case  3 :
return connect__16484.call(this,this$,opt1,opt2);
case  4 :
return connect__16485.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__16490 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____16434 = this$;

if(cljs.core.truth_(and__3546__auto____16434))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16434;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____16443 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16443))
{return or__3548__auto____16443;
} else
{var or__3548__auto____16446 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16446))
{return or__3548__auto____16446;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__16491 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16447 = this$;

if(cljs.core.truth_(and__3546__auto____16447))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16447;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____16448 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16448))
{return or__3548__auto____16448;
} else
{var or__3548__auto____16449 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16449))
{return or__3548__auto____16449;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__16492 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16452 = this$;

if(cljs.core.truth_(and__3546__auto____16452))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16452;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____16454 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16454))
{return or__3548__auto____16454;
} else
{var or__3548__auto____16456 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16456))
{return or__3548__auto____16456;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__16493 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____16459 = this$;

if(cljs.core.truth_(and__3546__auto____16459))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16459;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____16462 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16462))
{return or__3548__auto____16462;
} else
{var or__3548__auto____16463 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16463))
{return or__3548__auto____16463;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__16494 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____16464 = this$;

if(cljs.core.truth_(and__3546__auto____16464))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16464;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____16467 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16467))
{return or__3548__auto____16467;
} else
{var or__3548__auto____16468 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16468))
{return or__3548__auto____16468;
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
return transmit__16490.call(this,this$,opt);
case  3 :
return transmit__16491.call(this,this$,opt,opt2);
case  4 :
return transmit__16492.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__16493.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__16494.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____16473 = this$;

if(cljs.core.truth_(and__3546__auto____16473))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____16473;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____16477 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16477))
{return or__3548__auto____16477;
} else
{var or__3548__auto____16479 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____16479))
{return or__3548__auto____16479;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16502){
var vec__16503__16504 = p__16502;
var k__16505 = cljs.core.nth.call(null,vec__16503__16504,0,null);
var v__16506 = cljs.core.nth.call(null,vec__16503__16504,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16505.toLowerCase()),v__16506]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__16511 = null;
var G__16511__16512 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16511__16513 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16511__16514 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16511__16515 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16511__16516 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__16511 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__16511__16512.call(this,this$,uri);
case  3 :
return G__16511__16513.call(this,this$,uri,method);
case  4 :
return G__16511__16514.call(this,this$,uri,method,content);
case  5 :
return G__16511__16515.call(this,this$,uri,method,content,headers);
case  6 :
return G__16511__16516.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16511;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16522){
var vec__16523__16524 = p__16522;
var k__16525 = cljs.core.nth.call(null,vec__16523__16524,0,null);
var v__16526 = cljs.core.nth.call(null,vec__16523__16524,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16525.toLowerCase()),v__16526]);
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
var register_service__16542 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____16531 = this$;

if(cljs.core.truth_(and__3546__auto____16531))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16531;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____16532 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16532))
{return or__3548__auto____16532;
} else
{var or__3548__auto____16535 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16535))
{return or__3548__auto____16535;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__16543 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____16539 = this$;

if(cljs.core.truth_(and__3546__auto____16539))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16539;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____16540 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16540))
{return or__3548__auto____16540;
} else
{var or__3548__auto____16541 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16541))
{return or__3548__auto____16541;
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
return register_service__16542.call(this,this$,service_name,fn);
case  4 :
return register_service__16543.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__16557 = null;
var G__16557__16558 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__16557__16559 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__16557__16560 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__16557__16561 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__16557 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__16557__16558.call(this,this$);
case  2 :
return G__16557__16559.call(this,this$,on_connect_fn);
case  3 :
return G__16557__16560.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__16557__16561.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16557;
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
var G__16643 = null;
var G__16643__16644 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__16643__16645 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__16643 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__16643__16644.call(this,this$,service_name,fn);
case  4 :
return G__16643__16645.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16643;
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
var xpc_connection__16662 = (function (){
var temp__3698__auto____16650 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____16650))
{var config__16651 = temp__3698__auto____16650;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__16651)));
} else
{return null;
}
});
var xpc_connection__16663 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__16652){
var vec__16653__16654 = p__16652;
var k__16655 = cljs.core.nth.call(null,vec__16653__16654,0,null);
var v__16656 = cljs.core.nth.call(null,vec__16653__16654,1,null);

var temp__3695__auto____16657 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__16655);

if(cljs.core.truth_(temp__3695__auto____16657))
{var field__16659 = temp__3695__auto____16657;

return cljs.core.assoc.call(null,sum,field__16659,v__16656);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__16662.call(this);
case  1 :
return xpc_connection__16663.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
