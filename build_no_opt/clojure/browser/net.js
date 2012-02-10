goog.provide('clojure.browser.net');
goog.require('cljs.core');
goog.require('clojure.browser.event');
goog.require('goog.net.XhrIo');
goog.require('goog.net.EventType');
goog.require('goog.net.xpc.CfgFields');
goog.require('goog.net.xpc.CrossPageChannel');
goog.require('goog.json');
clojure.browser.net._STAR_timeout_STAR_ = 10000;
clojure.browser.net.event_types = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16677){
var vec__16678__16679 = p__16677;
var k__16680 = cljs.core.nth.call(null,vec__16678__16679,0,null);
var v__16681 = cljs.core.nth.call(null,vec__16678__16679,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16680.toLowerCase()),v__16681]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
clojure.browser.net.IConnection = {};
clojure.browser.net.connect = (function() {
var connect = null;
var connect__16728 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____16687 = this$;

if(cljs.core.truth_(and__3546__auto____16687))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16687;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$);
} else
{return (function (){var or__3548__auto____16688 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16688))
{return or__3548__auto____16688;
} else
{var or__3548__auto____16689 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16689))
{return or__3548__auto____16689;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$);
}
});
var connect__16729 = (function (this$,opt1){
if(cljs.core.truth_((function (){var and__3546__auto____16690 = this$;

if(cljs.core.truth_(and__3546__auto____16690))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16690;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1);
} else
{return (function (){var or__3548__auto____16693 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16693))
{return or__3548__auto____16693;
} else
{var or__3548__auto____16698 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16698))
{return or__3548__auto____16698;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1);
}
});
var connect__16730 = (function (this$,opt1,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16699 = this$;

if(cljs.core.truth_(and__3546__auto____16699))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16699;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2);
} else
{return (function (){var or__3548__auto____16700 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16700))
{return or__3548__auto____16700;
} else
{var or__3548__auto____16701 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16701))
{return or__3548__auto____16701;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.connect",this$);
}
}
})().call(null,this$,opt1,opt2);
}
});
var connect__16731 = (function (this$,opt1,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16702 = this$;

if(cljs.core.truth_(and__3546__auto____16702))
{return this$.clojure$browser$net$IConnection$connect;
} else
{return and__3546__auto____16702;
}
})()))
{return this$.clojure$browser$net$IConnection$connect(this$,opt1,opt2,opt3);
} else
{return (function (){var or__3548__auto____16703 = (clojure.browser.net.connect[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16703))
{return or__3548__auto____16703;
} else
{var or__3548__auto____16704 = (clojure.browser.net.connect["_"]);

if(cljs.core.truth_(or__3548__auto____16704))
{return or__3548__auto____16704;
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
return connect__16728.call(this,this$);
case  2 :
return connect__16729.call(this,this$,opt1);
case  3 :
return connect__16730.call(this,this$,opt1,opt2);
case  4 :
return connect__16731.call(this,this$,opt1,opt2,opt3);
}
throw('Invalid arity: ' + arguments.length);
};
return connect;
})()
;
clojure.browser.net.transmit = (function() {
var transmit = null;
var transmit__16740 = (function (this$,opt){
if(cljs.core.truth_((function (){var and__3546__auto____16705 = this$;

if(cljs.core.truth_(and__3546__auto____16705))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16705;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt);
} else
{return (function (){var or__3548__auto____16706 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16706))
{return or__3548__auto____16706;
} else
{var or__3548__auto____16707 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16707))
{return or__3548__auto____16707;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt);
}
});
var transmit__16741 = (function (this$,opt,opt2){
if(cljs.core.truth_((function (){var and__3546__auto____16708 = this$;

if(cljs.core.truth_(and__3546__auto____16708))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16708;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2);
} else
{return (function (){var or__3548__auto____16709 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16709))
{return or__3548__auto____16709;
} else
{var or__3548__auto____16710 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16710))
{return or__3548__auto____16710;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2);
}
});
var transmit__16742 = (function (this$,opt,opt2,opt3){
if(cljs.core.truth_((function (){var and__3546__auto____16711 = this$;

if(cljs.core.truth_(and__3546__auto____16711))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16711;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3);
} else
{return (function (){var or__3548__auto____16712 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16712))
{return or__3548__auto____16712;
} else
{var or__3548__auto____16713 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16713))
{return or__3548__auto____16713;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3);
}
});
var transmit__16743 = (function (this$,opt,opt2,opt3,opt4){
if(cljs.core.truth_((function (){var and__3546__auto____16714 = this$;

if(cljs.core.truth_(and__3546__auto____16714))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16714;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4);
} else
{return (function (){var or__3548__auto____16715 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16715))
{return or__3548__auto____16715;
} else
{var or__3548__auto____16716 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16716))
{return or__3548__auto____16716;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.transmit",this$);
}
}
})().call(null,this$,opt,opt2,opt3,opt4);
}
});
var transmit__16744 = (function (this$,opt,opt2,opt3,opt4,opt5){
if(cljs.core.truth_((function (){var and__3546__auto____16717 = this$;

if(cljs.core.truth_(and__3546__auto____16717))
{return this$.clojure$browser$net$IConnection$transmit;
} else
{return and__3546__auto____16717;
}
})()))
{return this$.clojure$browser$net$IConnection$transmit(this$,opt,opt2,opt3,opt4,opt5);
} else
{return (function (){var or__3548__auto____16718 = (clojure.browser.net.transmit[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16718))
{return or__3548__auto____16718;
} else
{var or__3548__auto____16719 = (clojure.browser.net.transmit["_"]);

if(cljs.core.truth_(or__3548__auto____16719))
{return or__3548__auto____16719;
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
return transmit__16740.call(this,this$,opt);
case  3 :
return transmit__16741.call(this,this$,opt,opt2);
case  4 :
return transmit__16742.call(this,this$,opt,opt2,opt3);
case  5 :
return transmit__16743.call(this,this$,opt,opt2,opt3,opt4);
case  6 :
return transmit__16744.call(this,this$,opt,opt2,opt3,opt4,opt5);
}
throw('Invalid arity: ' + arguments.length);
};
return transmit;
})()
;
clojure.browser.net.close = (function close(this$){
if(cljs.core.truth_((function (){var and__3546__auto____16720 = this$;

if(cljs.core.truth_(and__3546__auto____16720))
{return this$.clojure$browser$net$IConnection$close;
} else
{return and__3546__auto____16720;
}
})()))
{return this$.clojure$browser$net$IConnection$close(this$);
} else
{return (function (){var or__3548__auto____16721 = (clojure.browser.net.close[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16721))
{return or__3548__auto____16721;
} else
{var or__3548__auto____16724 = (clojure.browser.net.close["_"]);

if(cljs.core.truth_(or__3548__auto____16724))
{return or__3548__auto____16724;
} else
{throw cljs.core.missing_protocol.call(null,"IConnection.close",this$);
}
}
})().call(null,this$);
}
});
goog.net.XhrIo.prototype.clojure$browser$event$EventType$ = true;
goog.net.XhrIo.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16805){
var vec__16818__16819 = p__16805;
var k__16820 = cljs.core.nth.call(null,vec__16818__16819,0,null);
var v__16821 = cljs.core.nth.call(null,vec__16818__16819,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16820.toLowerCase()),v__16821]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.net.EventType))));
});
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$ = true;
goog.net.XhrIo.prototype.clojure$browser$net$IConnection$transmit = (function() {
var G__16822 = null;
var G__16822__16823 = (function (this$,uri){
return clojure.browser.net.transmit.call(null,this$,uri,"GET",null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16822__16824 = (function (this$,uri,method){
return clojure.browser.net.transmit.call(null,this$,uri,method,null,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16822__16825 = (function (this$,uri,method,content){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,null,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16822__16826 = (function (this$,uri,method,content,headers){
return clojure.browser.net.transmit.call(null,this$,uri,method,content,headers,clojure.browser.net._STAR_timeout_STAR_);
});
var G__16822__16827 = (function (this$,uri,method,content,headers,timeout){
this$.setTimeoutInterval(timeout);
return this$.send(uri,method,content,headers);
});
G__16822 = function(this$,uri,method,content,headers,timeout){
switch(arguments.length){
case  2 :
return G__16822__16823.call(this,this$,uri);
case  3 :
return G__16822__16824.call(this,this$,uri,method);
case  4 :
return G__16822__16825.call(this,this$,uri,method,content);
case  5 :
return G__16822__16826.call(this,this$,uri,method,content,headers);
case  6 :
return G__16822__16827.call(this,this$,uri,method,content,headers,timeout);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16822;
})()
;
clojure.browser.net.xpc_config_fields = cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16829){
var vec__16830__16831 = p__16829;
var k__16832 = cljs.core.nth.call(null,vec__16830__16831,0,null);
var v__16833 = cljs.core.nth.call(null,vec__16830__16831,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16832.toLowerCase()),v__16833]);
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
var register_service__16840 = (function (this$,service_name,fn){
if(cljs.core.truth_((function (){var and__3546__auto____16834 = this$;

if(cljs.core.truth_(and__3546__auto____16834))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16834;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn);
} else
{return (function (){var or__3548__auto____16835 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16835))
{return or__3548__auto____16835;
} else
{var or__3548__auto____16836 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16836))
{return or__3548__auto____16836;
} else
{throw cljs.core.missing_protocol.call(null,"ICrossPageChannel.register-service",this$);
}
}
})().call(null,this$,service_name,fn);
}
});
var register_service__16841 = (function (this$,service_name,fn,encode_json_QMARK_){
if(cljs.core.truth_((function (){var and__3546__auto____16837 = this$;

if(cljs.core.truth_(and__3546__auto____16837))
{return this$.clojure$browser$net$ICrossPageChannel$register_service;
} else
{return and__3546__auto____16837;
}
})()))
{return this$.clojure$browser$net$ICrossPageChannel$register_service(this$,service_name,fn,encode_json_QMARK_);
} else
{return (function (){var or__3548__auto____16838 = (clojure.browser.net.register_service[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16838))
{return or__3548__auto____16838;
} else
{var or__3548__auto____16839 = (clojure.browser.net.register_service["_"]);

if(cljs.core.truth_(or__3548__auto____16839))
{return or__3548__auto____16839;
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
return register_service__16840.call(this,this$,service_name,fn);
case  4 :
return register_service__16841.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return register_service;
})()
;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$ = true;
goog.net.xpc.CrossPageChannel.prototype.clojure$browser$net$IConnection$connect = (function() {
var G__16853 = null;
var G__16853__16855 = (function (this$){
return clojure.browser.net.connect.call(null,this$,null);
});
var G__16853__16856 = (function (this$,on_connect_fn){
return this$.connect(on_connect_fn);
});
var G__16853__16857 = (function (this$,on_connect_fn,config_iframe_fn){
return clojure.browser.net.connect.call(null,this$,on_connect_fn,config_iframe_fn,document.body);
});
var G__16853__16858 = (function (this$,on_connect_fn,config_iframe_fn,iframe_parent){
this$.createPeerIframe(iframe_parent,config_iframe_fn);
return this$.connect(on_connect_fn);
});
G__16853 = function(this$,on_connect_fn,config_iframe_fn,iframe_parent){
switch(arguments.length){
case  1 :
return G__16853__16855.call(this,this$);
case  2 :
return G__16853__16856.call(this,this$,on_connect_fn);
case  3 :
return G__16853__16857.call(this,this$,on_connect_fn,config_iframe_fn);
case  4 :
return G__16853__16858.call(this,this$,on_connect_fn,config_iframe_fn,iframe_parent);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16853;
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
var G__16885 = null;
var G__16885__16886 = (function (this$,service_name,fn){
return clojure.browser.net.register_service.call(null,this$,service_name,fn,false);
});
var G__16885__16887 = (function (this$,service_name,fn,encode_json_QMARK_){
return this$.registerService(cljs.core.name.call(null,service_name),fn,encode_json_QMARK_);
});
G__16885 = function(this$,service_name,fn,encode_json_QMARK_){
switch(arguments.length){
case  3 :
return G__16885__16886.call(this,this$,service_name,fn);
case  4 :
return G__16885__16887.call(this,this$,service_name,fn,encode_json_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16885;
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
var temp__3698__auto____16889 = (new goog.Uri(window.location.href)).getParameterValue("xpc");

if(cljs.core.truth_(temp__3698__auto____16889))
{var config__16890 = temp__3698__auto____16889;

return (new goog.net.xpc.CrossPageChannel(goog.json.parse.call(null,config__16890)));
} else
{return null;
}
});
var xpc_connection__16921 = (function (config){
return (new goog.net.xpc.CrossPageChannel(cljs.core.reduce.call(null,(function (sum,p__16891){
var vec__16892__16894 = p__16891;
var k__16896 = cljs.core.nth.call(null,vec__16892__16894,0,null);
var v__16917 = cljs.core.nth.call(null,vec__16892__16894,1,null);

var temp__3695__auto____16918 = cljs.core.get.call(null,clojure.browser.net.xpc_config_fields,k__16896);

if(cljs.core.truth_(temp__3695__auto____16918))
{var field__16919 = temp__3695__auto____16918;

return cljs.core.assoc.call(null,sum,field__16919,v__16917);
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
