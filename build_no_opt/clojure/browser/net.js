goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16575){
var vec__16576__16577 = p__16575;
var k__16578 = cljs.core.nth.call(null,vec__16576__16577,0,null);
var v__16579 = cljs.core.nth.call(null,vec__16576__16577,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16578.toLowerCase()),v__16579]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__16691 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____16585 = this$;

if(cljs.core.truth_(and__3546__auto____16585))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16585;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____16586 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16586))
{return or__3548__auto____16586;
} else
{var or__3548__auto____16587 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16587))
{return or__3548__auto____16587;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__16692 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____16588 = this$;

if(cljs.core.truth_(and__3546__auto____16588))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16588;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____16590 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16590))
{return or__3548__auto____16590;
} else
{var or__3548__auto____16592 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16592))
{return or__3548__auto____16592;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__16693 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16594 = this$;

if(cljs.core.truth_(and__3546__auto____16594))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16594;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____16596 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16596))
{return or__3548__auto____16596;
} else
{var or__3548__auto____16598 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16598))
{return or__3548__auto____16598;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__16694 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16600 = this$;

if(cljs.core.truth_(and__3546__auto____16600))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16600;
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
return connect__16691.call(this,this$);
case  2 :
return connect__16692.call(this,this$,opt1);
case  3 :
return connect__16693.call(this,this$,opt1,opt2);
case  4 :
return connect__16694.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__16703 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____16659 = this$;

if(cljs.core.truth_(and__3546__auto____16659))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16659;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____16669 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16669))
{return or__3548__auto____16669;
} else
{var or__3548__auto____16670 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16670))
{return or__3548__auto____16670;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__16704 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16671 = this$;

if(cljs.core.truth_(and__3546__auto____16671))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16671;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____16672 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16672))
{return or__3548__auto____16672;
} else
{var or__3548__auto____16673 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16673))
{return or__3548__auto____16673;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__16705 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16674 = this$;

if(cljs.core.truth_(and__3546__auto____16674))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16674;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____16675 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16675))
{return or__3548__auto____16675;
} else
{var or__3548__auto____16676 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16676))
{return or__3548__auto____16676;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__16707 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____16677 = this$;

if(cljs.core.truth_(and__3546__auto____16677))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16677;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____16679 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16679))
{return or__3548__auto____16679;
} else
{var or__3548__auto____16682 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16682))
{return or__3548__auto____16682;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__16708 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____16685 = this$;

if(cljs.core.truth_(and__3546__auto____16685))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16685;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____16686 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16686))
{return or__3548__auto____16686;
} else
{var or__3548__auto____16687 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16687))
{return or__3548__auto____16687;
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
return transmit__16703.call(this,this$,opt);
case  3 :
return transmit__16704.call(this,this$,opt,opt2);
case  4 :
return transmit__16705.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__16707.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__16708.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____16688 = this$;

if(cljs.core.truth_(and__3546__auto____16688))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____16688;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____16689 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16689))
{return or__3548__auto____16689;
} else
{var or__3548__auto____16690 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____16690))
{return or__3548__auto____16690;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16723){
var vec__16724__16725 = p__16723;
var k__16726 = cljs.core.nth.call(null,vec__16724__16725,0,null);
var v__16727 = cljs.core.nth.call(null,vec__16724__16725,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16726.toLowerCase()),v__16727]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__16728 = null;
var G__16728__16729 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16728__16730 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16728__16731 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16728__16732 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16728__16733 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__16728 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__16728__16729.call(this,this$,uri);
case  3 :
return G__16728__16730.call(this,this$,uri,method);
case  4 :
return G__16728__16731.call(this,this$,uri,method,content);
case  5 :
return G__16728__16732.call(this,this$,uri,method,content,headers);
case  6 :
return G__16728__16733.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16728;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16735){
var vec__16736__16737 = p__16735;
var k__16738 = cljs.core.nth.call(null,vec__16736__16737,0,null);
var v__16739 = cljs.core.nth.call(null,vec__16736__16737,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16738.toLowerCase()),v__16739]);
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
var register_service__16757 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____16750 = this$;

if(cljs.core.truth_(and__3546__auto____16750))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16750;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____16751 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16751))
{return or__3548__auto____16751;
} else
{var or__3548__auto____16752 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16752))
{return or__3548__auto____16752;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__16758 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____16753 = this$;

if(cljs.core.truth_(and__3546__auto____16753))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16753;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____16754 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16754))
{return or__3548__auto____16754;
} else
{var or__3548__auto____16755 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16755))
{return or__3548__auto____16755;
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
return register_service__16757.call(this,this$,service_name,fn);
case  4 :
return register_service__16758.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__16769 = null;
var G__16769__16770 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__16769__16771 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__16769__16772 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__16769__16773 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__16769 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__16769__16770.call(this,this$);
case  2 :
return G__16769__16771.call(this,this$,on_connect_fn);
case  3 :
return G__16769__16772.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__16769__16773.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16769;
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
var G__16775 = null;
var G__16775__16776 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__16775__16777 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__16775 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__16775__16776.call(this,this$,service_name,fn);
case  4 :
return G__16775__16777.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16775;
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
var xpc_connection__16789 = (function (){
var temp__3698__auto____16780 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____16780))
{var config__16781 = temp__3698__auto____16780;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__16781)));
} else
{return null;
}
});
var xpc_connection__16790 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__16782){
var vec__16783__16784 = p__16782;
var k__16785 = cljs.core.nth.call(null,vec__16783__16784,0,null);
var v__16786 = cljs.core.nth.call(null,vec__16783__16784,1,null);

var temp__3695__auto____16787 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__16785);

if(cljs.core.truth_(temp__3695__auto____16787))
{var field__16788 = temp__3695__auto____16787;

return cljs.core.assoc.call(null,sum,field__16788,v__16786);
} else
{return sum;
}
}),cljs.core.ObjMap.fromObject([],{}),config).strobj));
});
xpc_connection = function(config){
switch(arguments.length){
case  0 :
return xpc_connection__16789.call(this);
case  1 :
return xpc_connection__16790.call(this,config);
}
throw('Invalid arity: ' + arguments.length);
};
return xpc_connection;
})()
;
