goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4172){
var vec__4173__4174 = p__4172;
var k__4175 = cljs.core.nth.call(null,vec__4173__4174,0,null);
var v__4176 = cljs.core.nth.call(null,vec__4173__4174,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4175.toLowerCase()),v__4176]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__4207 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____4177 = this$;

if(cljs.core.truth_(and__3546__auto____4177))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4177;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____4178 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4178))
{return or__3548__auto____4178;
} else
{var or__3548__auto____4179 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4179))
{return or__3548__auto____4179;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__4208 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____4180 = this$;

if(cljs.core.truth_(and__3546__auto____4180))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4180;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____4181 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4181))
{return or__3548__auto____4181;
} else
{var or__3548__auto____4182 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4182))
{return or__3548__auto____4182;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__4209 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4183 = this$;

if(cljs.core.truth_(and__3546__auto____4183))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4183;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____4184 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4184))
{return or__3548__auto____4184;
} else
{var or__3548__auto____4185 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4185))
{return or__3548__auto____4185;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__4210 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4186 = this$;

if(cljs.core.truth_(and__3546__auto____4186))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____4186;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____4187 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4187))
{return or__3548__auto____4187;
} else
{var or__3548__auto____4188 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____4188))
{return or__3548__auto____4188;
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
return connect__4207.call(this,this$);
case  2 :
return connect__4208.call(this,this$,opt1);
case  3 :
return connect__4209.call(this,this$,opt1,opt2);
case  4 :
return connect__4210.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__4212 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____4189 = this$;

if(cljs.core.truth_(and__3546__auto____4189))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4189;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____4190 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4190))
{return or__3548__auto____4190;
} else
{var or__3548__auto____4191 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4191))
{return or__3548__auto____4191;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__4213 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____4192 = this$;

if(cljs.core.truth_(and__3546__auto____4192))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4192;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____4193 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4193))
{return or__3548__auto____4193;
} else
{var or__3548__auto____4194 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4194))
{return or__3548__auto____4194;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__4214 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____4195 = this$;

if(cljs.core.truth_(and__3546__auto____4195))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4195;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____4196 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4196))
{return or__3548__auto____4196;
} else
{var or__3548__auto____4197 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4197))
{return or__3548__auto____4197;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__4215 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____4198 = this$;

if(cljs.core.truth_(and__3546__auto____4198))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4198;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____4199 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4199))
{return or__3548__auto____4199;
} else
{var or__3548__auto____4200 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4200))
{return or__3548__auto____4200;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__4216 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____4201 = this$;

if(cljs.core.truth_(and__3546__auto____4201))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____4201;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____4202 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4202))
{return or__3548__auto____4202;
} else
{var or__3548__auto____4203 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____4203))
{return or__3548__auto____4203;
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
return transmit__4212.call(this,this$,opt);
case  3 :
return transmit__4213.call(this,this$,opt,opt2);
case  4 :
return transmit__4214.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__4215.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__4216.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____4204 = this$;

if(cljs.core.truth_(and__3546__auto____4204))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____4204;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____4205 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4205))
{return or__3548__auto____4205;
} else
{var or__3548__auto____4206 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____4206))
{return or__3548__auto____4206;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4218){
var vec__4219__4220 = p__4218;
var k__4221 = cljs.core.nth.call(null,vec__4219__4220,0,null);
var v__4222 = cljs.core.nth.call(null,vec__4219__4220,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4221.toLowerCase()),v__4222]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__4223 = null;
var G__4223__4224 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4223__4225 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4223__4226 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4223__4227 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__4223__4228 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__4223 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__4223__4224.call(this,this$,uri);
case  3 :
return G__4223__4225.call(this,this$,uri,method);
case  4 :
return G__4223__4226.call(this,this$,uri,method,content);
case  5 :
return G__4223__4227.call(this,this$,uri,method,content,headers);
case  6 :
return G__4223__4228.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4223;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__4230){
var vec__4231__4232 = p__4230;
var k__4233 = cljs.core.nth.call(null,vec__4231__4232,0,null);
var v__4234 = cljs.core.nth.call(null,vec__4231__4232,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__4233.toLowerCase()),v__4234]);
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
var register_service__4241 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____4235 = this$;

if(cljs.core.truth_(and__3546__auto____4235))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4235;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____4236 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4236))
{return or__3548__auto____4236;
} else
{var or__3548__auto____4237 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4237))
{return or__3548__auto____4237;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__4242 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____4238 = this$;

if(cljs.core.truth_(and__3546__auto____4238))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____4238;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____4239 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____4239))
{return or__3548__auto____4239;
} else
{var or__3548__auto____4240 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____4240))
{return or__3548__auto____4240;
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
return register_service__4241.call(this,this$,service_name,fn);
case  4 :
return register_service__4242.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__4244 = null;
var G__4244__4245 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__4244__4246 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__4244__4247 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__4244__4248 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__4244 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__4244__4245.call(this,this$);
case  2 :
return G__4244__4246.call(this,this$,on_connect_fn);
case  3 :
return G__4244__4247.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__4244__4248.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4244;
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
var G__4250 = null;
var G__4250__4251 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__4250__4252 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__4250 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__4250__4251.call(this,this$,service_name,fn);
case  4 :
return G__4250__4252.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4250;
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
var xpc_connection__4263 = (function (){
var temp__3698__auto____4254 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____4254))
{var config__4255 = temp__3698__auto____4254;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__4255)));
} else
{return null;
}
});
var xpc_connection__4264 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__4256){
var vec__4257__4258 = p__4256;
var k__4259 = cljs.core.nth.call(null,vec__4257__4258,0,null);
var v__4260 = cljs.core.nth.call(null,vec__4257__4258,1,null);

var temp__3698__auto____4261 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__4259);

if(cljs.core.truth_(temp__3698__auto____4261))
{var field__4262 = temp__3698__auto____4261;

return cljs.core.assoc.call(null,sum,field__4262,v__4260);
} else
{return null;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__4263.call(this);
case  1 :
return xpc_connection__4264.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
