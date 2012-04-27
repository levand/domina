goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');
void 0;
domina.events.Event = {};
domina.events.prevent_default = (function prevent_default(evt){
if(((function (){var and__3546__auto____19942 = evt;

if((and__3546__auto____19942))
{return evt.domina$events$Event$prevent_default__1;
} else
{return and__3546__auto____19942;
}
})()))
{return evt.domina$events$Event$prevent_default__1(evt);
} else
{return (function (){var or__3548__auto____19943 = (domina.events.prevent_default[goog.typeOf.call(null,evt)]);

if((or__3548__auto____19943))
{return or__3548__auto____19943;
} else
{var or__3548__auto____19945 = (domina.events.prevent_default["_"]);

if((or__3548__auto____19945))
{return or__3548__auto____19945;
} else
{throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){
if(((function (){var and__3546__auto____19947 = evt;

if((and__3546__auto____19947))
{return evt.domina$events$Event$stop_propagation__1;
} else
{return and__3546__auto____19947;
}
})()))
{return evt.domina$events$Event$stop_propagation__1(evt);
} else
{return (function (){var or__3548__auto____19948 = (domina.events.stop_propagation[goog.typeOf.call(null,evt)]);

if((or__3548__auto____19948))
{return or__3548__auto____19948;
} else
{var or__3548__auto____19950 = (domina.events.stop_propagation["_"]);

if((or__3548__auto____19950))
{return or__3548__auto____19950;
} else
{throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){
if(((function (){var and__3546__auto____19952 = evt;

if((and__3546__auto____19952))
{return evt.domina$events$Event$target__1;
} else
{return and__3546__auto____19952;
}
})()))
{return evt.domina$events$Event$target__1(evt);
} else
{return (function (){var or__3548__auto____19956 = (domina.events.target[goog.typeOf.call(null,evt)]);

if((or__3548__auto____19956))
{return or__3548__auto____19956;
} else
{var or__3548__auto____19957 = (domina.events.target["_"]);

if((or__3548__auto____19957))
{return or__3548__auto____19957;
} else
{throw cljs.core.missing_protocol("Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){
if(((function (){var and__3546__auto____19958 = evt;

if((and__3546__auto____19958))
{return evt.domina$events$Event$current_target__1;
} else
{return and__3546__auto____19958;
}
})()))
{return evt.domina$events$Event$current_target__1(evt);
} else
{return (function (){var or__3548__auto____19960 = (domina.events.current_target[goog.typeOf.call(null,evt)]);

if((or__3548__auto____19960))
{return or__3548__auto____19960;
} else
{var or__3548__auto____19962 = (domina.events.current_target["_"]);

if((or__3548__auto____19962))
{return or__3548__auto____19962;
} else
{throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){
if(((function (){var and__3546__auto____19966 = evt;

if((and__3546__auto____19966))
{return evt.domina$events$Event$event_type__1;
} else
{return and__3546__auto____19966;
}
})()))
{return evt.domina$events$Event$event_type__1(evt);
} else
{return (function (){var or__3548__auto____19970 = (domina.events.event_type[goog.typeOf.call(null,evt)]);

if((or__3548__auto____19970))
{return or__3548__auto____19970;
} else
{var or__3548__auto____19972 = (domina.events.event_type["_"]);

if((or__3548__auto____19972))
{return or__3548__auto____19972;
} else
{throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){
if(((function (){var and__3546__auto____19980 = evt;

if((and__3546__auto____19980))
{return evt.domina$events$Event$raw_event__1;
} else
{return and__3546__auto____19980;
}
})()))
{return evt.domina$events$Event$raw_event__1(evt);
} else
{return (function (){var or__3548__auto____19985 = (domina.events.raw_event[goog.typeOf.call(null,evt)]);

if((or__3548__auto____19985))
{return or__3548__auto____19985;
} else
{var or__3548__auto____19987 = (domina.events.raw_event["_"]);

if((or__3548__auto____19987))
{return or__3548__auto____19987;
} else
{throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
void 0;
domina.events.builtin_events = cljs.core.set(cljs.core.map.__2(cljs.core.keyword,goog.object.getValues.call(null,goog.events.EventType)));
domina.events.root_element = window.document.documentElement;
domina.events.find_builtin_type = (function find_builtin_type(evt_type){
if((cljs.core.contains_QMARK_(domina.events.builtin_events,evt_type)))
{return cljs.core.name(evt_type);
} else
{return evt_type;
}
});
domina.events.create_listener_function = (function create_listener_function(f){
return (function (evt){
f.call(null,(function (){if(((void 0 === domina.events.t20168)))
{
/**
* @constructor
*/
domina.events.t20168 = (function (evt,f,create_listener_function,__meta__321__auto__){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.__meta__321__auto__ = __meta__321__auto__;
})
domina.events.t20168.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("domina.events.t20168");
});
domina.events.t20168.prototype.cljs$core$ILookup$ = true;
domina.events.t20168.prototype.cljs$core$ILookup$_lookup__2 = (function (o,k){
var this__20172 = this;
var temp__3695__auto____20174 = (this__20172.evt[k]);

if((temp__3695__auto____20174))
{var val__20175 = temp__3695__auto____20174;

return val__20175;
} else
{return (this__20172.evt[cljs.core.name(k)]);
}
});
domina.events.t20168.prototype.cljs$core$ILookup$_lookup__3 = (function (o,k,not_found){
var this__20176 = this;
var or__3548__auto____20177 = cljs.core._lookup.__2(o,k);

if((or__3548__auto____20177))
{return or__3548__auto____20177;
} else
{return not_found;
}
});
domina.events.t20168.prototype.domina$events$Event$ = true;
domina.events.t20168.prototype.domina$events$Event$prevent_default__1 = (function (_){
var this__20179 = this;
return this__20179.evt.preventDefault();
});
domina.events.t20168.prototype.domina$events$Event$stop_propagation__1 = (function (_){
var this__20180 = this;
return this__20180.evt.stopPropagation();
});
domina.events.t20168.prototype.domina$events$Event$target__1 = (function (_){
var this__20181 = this;
return this__20181.evt.target;
});
domina.events.t20168.prototype.domina$events$Event$current_target__1 = (function (_){
var this__20183 = this;
return this__20183.evt.currentTarget;
});
domina.events.t20168.prototype.domina$events$Event$event_type__1 = (function (_){
var this__20185 = this;
return this__20185.evt.type;
});
domina.events.t20168.prototype.domina$events$Event$raw_event__1 = (function (_){
var this__20186 = this;
return this__20186.evt;
});
domina.events.t20168.prototype.cljs$core$IMeta$ = true;
domina.events.t20168.prototype.cljs$core$IMeta$_meta__1 = (function (___322__auto__){
var this__20187 = this;
return this__20187.__meta__321__auto__;
});
domina.events.t20168.prototype.cljs$core$IWithMeta$ = true;
domina.events.t20168.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (___322__auto__,__meta__321__auto__){
var this__20188 = this;
return (new domina.events.t20168(this__20188.evt,this__20188.f,this__20188.create_listener_function,__meta__321__auto__));
});
domina.events.t20168;
} else
{}
return (new domina.events.t20168(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){
var f__20206 = domina.events.create_listener_function(listener);
var t__20209 = domina.events.find_builtin_type(type);

return cljs.core.doall.__1((function (){var iter__536__auto____20234 = (function iter__20229(s__20230){
return (new cljs.core.LazySeq(null,false,(function (){
var s__20230__20231 = s__20230;

while(true){
if(cljs.core.truth_(cljs.core.seq(s__20230__20231)))
{var node__20232 = cljs.core.first(s__20230__20231);

return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce.call(null,node__20232,t__20209,f__20206,capture):goog.events.listen.call(null,node__20232,t__20209,f__20206,capture)),iter__20229.call(null,cljs.core.rest(s__20230__20231)));
} else
{return null;
}
break;
}
})));
});

return iter__536__auto____20234.call(null,domina.nodes(content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){
return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case  2 :
return listen_BANG___2.call(this,content,type);
case  3 :
return listen_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
listen_BANG_.__2 = listen_BANG___2;
listen_BANG_.__3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){
return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case  2 :
return capture_BANG___2.call(this,content,type);
case  3 :
return capture_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
capture_BANG_.__2 = capture_BANG___2;
capture_BANG_.__3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){
return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case  2 :
return listen_once_BANG___2.call(this,content,type);
case  3 :
return listen_once_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
listen_once_BANG_.__2 = listen_once_BANG___2;
listen_once_BANG_.__3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){
return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case  2 :
return capture_once_BANG___2.call(this,content,type);
case  3 :
return capture_once_BANG___3.call(this,content,type,listener);
}
throw('Invalid arity: ' + arguments.length);
};
capture_once_BANG_.__2 = capture_once_BANG___2;
capture_once_BANG_.__3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){
return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){
var G__20271__20272 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__20271__20272))
{var node__20273 = cljs.core.first(G__20271__20272);
var G__20271__20274 = G__20271__20272;

while(true){
goog.events.removeAll.call(null,node__20273);
var temp__3698__auto____20275 = cljs.core.next(G__20271__20274);

if(cljs.core.truth_(temp__3698__auto____20275))
{var G__20271__20276 = temp__3698__auto____20275;

{
var G__20302 = cljs.core.first(G__20271__20276);
var G__20303 = G__20271__20276;
node__20273 = G__20302;
G__20271__20274 = G__20303;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
var unlisten_BANG___2 = (function (content,type){
var type__20278 = domina.events.find_builtin_type(type);

return goog.events.removeAll.call(null,domina.events.node,type__20278);
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case  0 :
return unlisten_BANG___0.call(this);
case  1 :
return unlisten_BANG___1.call(this,content);
case  2 :
return unlisten_BANG___2.call(this,content,type);
}
throw('Invalid arity: ' + arguments.length);
};
unlisten_BANG_.__0 = unlisten_BANG___0;
unlisten_BANG_.__1 = unlisten_BANG___1;
unlisten_BANG_.__2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){
return ancestor_nodes.call(null,n,cljs.core.cons(n));
});
var ancestor_nodes__2 = (function (n,so_far){
while(true){
var temp__3695__auto____20311 = n.parentNode;

if(cljs.core.truth_(temp__3695__auto____20311))
{var parent__20312 = temp__3695__auto____20311;

{
var G__20318 = parent__20312;
var G__20319 = cljs.core.cons(parent__20312,so_far);
n = G__20318;
so_far = G__20319;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case  1 :
return ancestor_nodes__1.call(this,n);
case  2 :
return ancestor_nodes__2.call(this,n,so_far);
}
throw('Invalid arity: ' + arguments.length);
};
ancestor_nodes.__1 = ancestor_nodes__1;
ancestor_nodes.__2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){
var ancestors__20327 = domina.events.ancestor_nodes.__1(domina.single_node(source));

var G__20328__20449 = cljs.core.seq(ancestors__20327);

if(cljs.core.truth_(G__20328__20449))
{var n__20450 = cljs.core.first(G__20328__20449);
var G__20328__20451 = G__20328__20449;

while(true){
if(cljs.core.truth_(n__20450.propagationStopped))
{} else
{evt.currentTarget = n__20450;
goog.events.fireListeners.call(null,n__20450,evt.type,true,evt);
}
var temp__3698__auto____20452 = cljs.core.next(G__20328__20451);

if(cljs.core.truth_(temp__3698__auto____20452))
{var G__20328__20453 = temp__3698__auto____20452;

{
var G__20480 = cljs.core.first(G__20328__20453);
var G__20481 = G__20328__20453;
n__20450 = G__20480;
G__20328__20451 = G__20481;
continue;
}
} else
{}
break;
}
} else
{}
var G__20456__20459 = cljs.core.seq(cljs.core.reverse(ancestors__20327));

if(cljs.core.truth_(G__20456__20459))
{var n__20461 = cljs.core.first(G__20456__20459);
var G__20456__20462 = G__20456__20459;

while(true){
if(cljs.core.truth_(n__20461.propagationStopped))
{} else
{evt.currentTarget = n__20461;
goog.events.fireListeners.call(null,n__20461,evt.type,false,evt);
}
var temp__3698__auto____20465 = cljs.core.next(G__20456__20462);

if(cljs.core.truth_(temp__3698__auto____20465))
{var G__20456__20466 = temp__3698__auto____20465;

{
var G__20490 = cljs.core.first(G__20456__20466);
var G__20492 = G__20456__20466;
n__20461 = G__20490;
G__20456__20462 = G__20492;
continue;
}
} else
{}
break;
}
} else
{}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent.call(null,source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){
var and__3546__auto____20496 = o.getParentEventTarget;

if(cljs.core.truth_(and__3546__auto____20496))
{return o.dispatchEvent;
} else
{return and__3546__auto____20496;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){
return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){
var evt__20501 = (new goog.events.Event(domina.events.find_builtin_type(type)));

var G__20502__20503 = cljs.core.seq(evt_map);

if(cljs.core.truth_(G__20502__20503))
{var G__20505__20509 = cljs.core.first(G__20502__20503);
var vec__20507__20510 = G__20505__20509;
var k__20511 = cljs.core.nth.__3(vec__20507__20510,0,null);
var v__20512 = cljs.core.nth.__3(vec__20507__20510,1,null);
var G__20502__20513 = G__20502__20503;

var G__20505__20514 = G__20505__20509;
var G__20502__20515 = G__20502__20513;

while(true){
var vec__20516__20520 = G__20505__20514;
var k__20522 = cljs.core.nth.__3(vec__20516__20520,0,null);
var v__20523 = cljs.core.nth.__3(vec__20516__20520,1,null);
var G__20502__20525 = G__20502__20515;

(evt__20501[k__20522] = v__20523);
var temp__3698__auto____20528 = cljs.core.next(G__20502__20525);

if(cljs.core.truth_(temp__3698__auto____20528))
{var G__20502__20529 = temp__3698__auto____20528;

{
var G__20543 = cljs.core.first(G__20502__20529);
var G__20544 = G__20502__20529;
G__20505__20514 = G__20543;
G__20502__20515 = G__20544;
continue;
}
} else
{}
break;
}
} else
{}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source)))
{return domina.events.dispatch_event_target_BANG_(source,evt__20501);
} else
{return domina.events.dispatch_browser_BANG_(source,evt__20501);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case  2 :
return dispatch_BANG___2.call(this,source,type);
case  3 :
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw('Invalid arity: ' + arguments.length);
};
dispatch_BANG_.__2 = dispatch_BANG___2;
dispatch_BANG_.__3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey.call(null,key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){
var type__20556 = domina.events.find_builtin_type(type);

return cljs.core.mapcat.__2((function (p1__20548_SHARP_){
return goog.events.getListeners.call(null,p1__20548_SHARP_,type__20556,false);
}),domina.nodes(content));
});
