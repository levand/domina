goog.provide('clojure.browser.event');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
clojure.browser.event.EventType = {};
clojure.browser.event.event_types = (function event_types(this$){
if(cljs.core.truth_((function (){var and__3546__auto____16794 = this$;

if(cljs.core.truth_(and__3546__auto____16794))
{return this$.clojure$browser$event$EventType$event_types;
} else
{return and__3546__auto____16794;
}
})()))
{return this$.clojure$browser$event$EventType$event_types(this$);
} else
{return (function (){var or__3548__auto____16798 = (clojure.browser.event.event_types[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____16798))
{return or__3548__auto____16798;
} else
{var or__3548__auto____16799 = (clojure.browser.event.event_types["_"]);

if(cljs.core.truth_(or__3548__auto____16799))
{return or__3548__auto____16799;
} else
{throw cljs.core.missing_protocol.call(null,"EventType.event-types",this$);
}
}
})().call(null,this$);
}
});
Element.prototype.clojure$browser$event$EventType$ = true;
Element.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16829){
var vec__16830__16831 = p__16829;
var k__16832 = cljs.core.nth.call(null,vec__16830__16831,0,null);
var v__16833 = cljs.core.nth.call(null,vec__16830__16831,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16832.toLowerCase()),v__16833]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
goog.events.EventTarget.prototype.clojure$browser$event$EventType$ = true;
goog.events.EventTarget.prototype.clojure$browser$event$EventType$event_types = (function (this$){
return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),cljs.core.map.call(null,(function (p__16836){
var vec__16837__16838 = p__16836;
var k__16839 = cljs.core.nth.call(null,vec__16837__16838,0,null);
var v__16841 = cljs.core.nth.call(null,vec__16837__16838,1,null);

return cljs.core.Vector.fromArray([cljs.core.keyword.call(null,k__16839.toLowerCase()),v__16841]);
}),cljs.core.merge.call(null,cljs.core.js__GT_clj.call(null,goog.events.EventType))));
});
clojure.browser.event.listen = (function() {
var listen = null;
var listen__16848 = (function (src,type,fn){
return listen.call(null,src,type,fn,false);
});
var listen__16849 = (function (src,type,fn,capture_QMARK_){
return goog.events.listen.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return listen__16848.call(this,src,type,fn);
case  4 :
return listen__16849.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return listen;
})()
;
clojure.browser.event.listen_once = (function() {
var listen_once = null;
var listen_once__16855 = (function (src,type,fn){
return listen_once.call(null,src,type,fn,false);
});
var listen_once__16856 = (function (src,type,fn,capture_QMARK_){
return goog.events.listenOnce.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
listen_once = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return listen_once__16855.call(this,src,type,fn);
case  4 :
return listen_once__16856.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return listen_once;
})()
;
clojure.browser.event.unlisten = (function() {
var unlisten = null;
var unlisten__16861 = (function (src,type,fn){
return unlisten.call(null,src,type,fn,false);
});
var unlisten__16862 = (function (src,type,fn,capture_QMARK_){
return goog.events.unlisten.call(null,src,cljs.core.get.call(null,clojure.browser.event.event_types.call(null,src),type,type),fn,capture_QMARK_);
});
unlisten = function(src,type,fn,capture_QMARK_){
switch(arguments.length){
case  3 :
return unlisten__16861.call(this,src,type,fn);
case  4 :
return unlisten__16862.call(this,src,type,fn,capture_QMARK_);
}
throw('Invalid arity: ' + arguments.length);
};
return unlisten;
})()
;
clojure.browser.event.unlisten_by_key = (function unlisten_by_key(key){
return goog.events.unlistenByKey.call(null,key);
});
clojure.browser.event.dispatch_event = (function dispatch_event(src,event){
return goog.events.dispatchEvent.call(null,src,event);
});
clojure.browser.event.expose = (function expose(e){
return goog.events.expose.call(null,e);
});
clojure.browser.event.fire_listeners = (function fire_listeners(obj,type,capture,event){
return null;
});
clojure.browser.event.total_listener_count = (function total_listener_count(){
return goog.events.getTotalListenerCount.call(null);
});
clojure.browser.event.get_listener = (function get_listener(src,type,listener,opt_capt,opt_handler){
return null;
});
clojure.browser.event.all_listeners = (function all_listeners(obj,type,capture){
return null;
});
clojure.browser.event.unique_event_id = (function unique_event_id(event_type){
return null;
});
clojure.browser.event.has_listener = (function has_listener(obj,opt_type,opt_capture){
return null;
});
clojure.browser.event.remove_all = (function remove_all(opt_obj,opt_type,opt_capt){
return null;
});
