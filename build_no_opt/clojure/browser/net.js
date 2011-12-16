goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4095){
var vec__4096__4097 = p__4095;
var k__4098 = cljs.core.nth.call(null,vec__4096__4097,0,null);
var v__4099 = cljs.core.nth.call(null,vec__4096__4097,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4098.toLowerCase()),v__4099]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__4130 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4100 = this$;

if(cljs.core.truth_(and__3546__auto____4100))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4100;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____4101 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4101))
{return or__3548__auto____4101;
} else
{var or__3548__auto____4102 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4102))
{return or__3548__auto____4102;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__4131 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____4103 = this$;

if(cljs.core.truth_(and__3546__auto____4103))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4103;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____4104 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4104))
{return or__3548__auto____4104;
} else
{var or__3548__auto____4105 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4105))
{return or__3548__auto____4105;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__4132 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4106 = this$;

if(cljs.core.truth_(and__3546__auto____4106))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4106;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____4107 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4107))
{return or__3548__auto____4107;
} else
{var or__3548__auto____4108 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4108))
{return or__3548__auto____4108;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4133 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4109 = this$;

if(cljs.core.truth_(and__3546__auto____4109))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4109;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____4110 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4110))
{return or__3548__auto____4110;
} else
{var or__3548__auto____4111 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4111))
{return or__3548__auto____4111;
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
return connect__4130.call(this,this$);
case  2 :
return connect__4131.call(this,this$,opt1);
case  3 :
return connect__4132.call(this,this$,opt1,opt2);
case  4 :
return connect__4133.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__4135 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____4112 = this$;

if(cljs.core.truth_(and__3546__auto____4112))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4112;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____4113 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4113))
{return or__3548__auto____4113;
} else
{var or__3548__auto____4114 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4114))
{return or__3548__auto____4114;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__4136 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4115 = this$;

if(cljs.core.truth_(and__3546__auto____4115))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4115;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____4116 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4116))
{return or__3548__auto____4116;
} else
{var or__3548__auto____4117 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4117))
{return or__3548__auto____4117;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4137 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4118 = this$;

if(cljs.core.truth_(and__3546__auto____4118))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4118;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____4119 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4119))
{return or__3548__auto____4119;
} else
{var or__3548__auto____4120 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4120))
{return or__3548__auto____4120;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__4138 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____4121 = this$;

if(cljs.core.truth_(and__3546__auto____4121))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4121;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____4122 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4122))
{return or__3548__auto____4122;
} else
{var or__3548__auto____4123 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4123))
{return or__3548__auto____4123;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__4139 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____4124 = this$;

if(cljs.core.truth_(and__3546__auto____4124))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4124;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____4125 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4125))
{return or__3548__auto____4125;
} else
{var or__3548__auto____4126 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4126))
{return or__3548__auto____4126;
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
return transmit__4135.call(this,this$,opt);
case  3 :
return transmit__4136.call(this,this$,opt,opt2);
case  4 :
return transmit__4137.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__4138.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__4139.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4127 = this$;

if(cljs.core.truth_(and__3546__auto____4127))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____4127;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____4128 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4128))
{return or__3548__auto____4128;
} else
{var or__3548__auto____4129 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____4129))
{return or__3548__auto____4129;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4141){
var vec__4142__4143 = p__4141;
var k__4144 = cljs.core.nth.call(null,vec__4142__4143,0,null);
var v__4145 = cljs.core.nth.call(null,vec__4142__4143,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4144.toLowerCase()),v__4145]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__4146 = null;
var G__4146__4147 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4146__4148 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4146__4149 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4146__4150 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4146__4151 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__4146 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__4146__4147.call(this,this$,uri);
case  3 :
return G__4146__4148.call(this,this$,uri,method);
case  4 :
return G__4146__4149.call(this,this$,uri,method,content);
case  5 :
return G__4146__4150.call(this,this$,uri,method,content,headers);
case  6 :
return G__4146__4151.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4146;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4153){
var vec__4154__4155 = p__4153;
var k__4156 = cljs.core.nth.call(null,vec__4154__4155,0,null);
var v__4157 = cljs.core.nth.call(null,vec__4154__4155,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4156.toLowerCase()),v__4157]);
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
var register_service__4164 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____4158 = this$;

if(cljs.core.truth_(and__3546__auto____4158))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4158;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____4159 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4159))
{return or__3548__auto____4159;
} else
{var or__3548__auto____4160 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4160))
{return or__3548__auto____4160;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4165 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____4161 = this$;

if(cljs.core.truth_(and__3546__auto____4161))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4161;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____4162 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4162))
{return or__3548__auto____4162;
} else
{var or__3548__auto____4163 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4163))
{return or__3548__auto____4163;
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
return register_service__4164.call(this,this$,service_name,fn);
case  4 :
return register_service__4165.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__4167 = null;
var G__4167__4168 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__4167__4169 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__4167__4170 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__4167__4171 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__4167 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__4167__4168.call(this,this$);
case  2 :
return G__4167__4169.call(this,this$,on_connect_fn);
case  3 :
return G__4167__4170.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__4167__4171.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4167;
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
var G__4173 = null;
var G__4173__4174 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__4173__4175 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__4173 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__4173__4174.call(this,this$,service_name,fn);
case  4 :
return G__4173__4175.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4173;
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
var xpc_connection__4186 = (function (){
var temp__3698__auto____4177 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____4177))
{var config__4178 = temp__3698__auto____4177;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__4178)));
} else
{return null;
}
});
var xpc_connection__4187 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__4179){
var vec__4180__4181 = p__4179;
var k__4182 = cljs.core.nth.call(null,vec__4180__4181,0,null);
var v__4183 = cljs.core.nth.call(null,vec__4180__4181,1,null);

var temp__3698__auto____4184 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__4182);

if(cljs.core.truth_(temp__3698__auto____4184))
{var field__4185 = temp__3698__auto____4184;

return cljs.core.assoc.call(null,sum,field__4185,v__4183);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__4186.call(this);
case  1 :
return xpc_connection__4187.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
