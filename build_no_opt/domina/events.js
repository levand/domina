goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.events');
/**
* returns true if the node(child) is a child of parent
*/
domina.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__15455 = parent;
var G__15456 = child.parentNode;
parent = G__15455;
child = G__15456;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
domina.events.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__15458 = e.relatedTarget;
var this$__15459 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15460 = cljs.core.not.call(null,(re__15458 === this$__15459));

if(cljs.core.truth_(and__3546__auto____15460))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15459,re__15458));
} else
{return and__3546__auto____15460;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
/**
* Generic event wrapper that handles listening and cleanup of wrapped events
*/
domina.events.gen_wrapper = (function gen_wrapper(event_key,wrapped_key,wrapper_func){
var obj__15466 = (new Object());
var wevent__15467 = cljs.core.name.call(null,wrapped_key);
var event__15468 = cljs.core.name.call(null,event_key);

obj__15466.wrapped_event = wevent__15467;
obj__15466.event = event__15468;
obj__15466.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15470 = wrapper_func.call(null,func);

callback__15470.listen = func;
callback__15470.scope = opt_scope;
callback__15470.event = event__15468;
callback__15470.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15467,callback__15470,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15467,callback__15470,capture);
}
});
obj__15466.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15479 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15467,false),goog.events.getListeners.call(null,elm,wevent__15467,true)):goog.events.getListeners.call(null,elm,wevent__15467,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15480 = obj.listener;
var lfunc__15482 = listener__15480.listen;
var scope__15483 = listener__15480.scope;
var capture__15484 = listener__15480.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15486 = (function (){var or__3548__auto____15485 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15485))
{return or__3548__auto____15485;
} else
{return cljs.core._EQ_.call(null,lfunc__15482,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15486))
{var or__3548__auto____15487 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15487))
{return or__3548__auto____15487;
} else
{return cljs.core._EQ_.call(null,scope__15483,opt_scope);
}
} else
{return and__3546__auto____15486;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15467,listener__15480,capture__15484);
} else
{return goog.events.unlisten.call(null,elm,wevent__15467,listener__15480,capture__15484);
}
} else
{return null;
}
}),listeners__15479));
});
return obj__15466;
});
domina.events.wrapper_register = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
domina.events.reg_event_wrapper_BANG_ = (function reg_event_wrapper_BANG_(event_key,wrapped_key,wrapper_func){
return cljs.core.swap_BANG_.call(null,domina.events.wrapper_register,cljs.core.assoc,event_key,domina.events.gen_wrapper.call(null,event_key,wrapped_key,wrapper_func));
});
/**
* adding an event to the selected nodes
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___15513 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15514 = (function (nds,event,func,capture){
var wrapper__15501 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15502__15503 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15502__15503))
{var node__15506 = cljs.core.first.call(null,G__15502__15503);
var G__15502__15507 = G__15502__15503;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15501)))
{goog.events.listen.call(null,node__15506,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15506,wrapper__15501,func,capture);
}
var temp__3698__auto____15510 = cljs.core.next.call(null,G__15502__15507);

if(cljs.core.truth_(temp__3698__auto____15510))
{var G__15502__15511 = temp__3698__auto____15510;

{
var G__15523 = cljs.core.first.call(null,G__15502__15511);
var G__15524 = G__15502__15511;
node__15506 = G__15523;
G__15502__15507 = G__15524;
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
listen_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return listen_BANG___15513.call(this,nds,event,func);
case  4 :
return listen_BANG___15514.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return listen_BANG_;
})()
;
/**
* removing a specific event from the selected nodes
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___15544 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15545 = (function (nds,event,func,capture){
var wrapper__15532 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15533__15535 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15533__15535))
{var node__15538 = cljs.core.first.call(null,G__15533__15535);
var G__15533__15539 = G__15533__15535;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15532)))
{goog.events.unlisten.call(null,node__15538,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15532.unlisten(node__15538,func,capture);
}
var temp__3698__auto____15542 = cljs.core.next.call(null,G__15533__15539);

if(cljs.core.truth_(temp__3698__auto____15542))
{var G__15533__15543 = temp__3698__auto____15542;

{
var G__15549 = cljs.core.first.call(null,G__15533__15543);
var G__15550 = G__15533__15543;
node__15538 = G__15549;
G__15533__15539 = G__15550;
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
unlisten_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return unlisten_BANG___15544.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15545.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return unlisten_BANG_;
})()
;
/**
* removes all listeners for a given set of events on the selected nodes
* @param {...*} var_args
*/
domina.events.remove_listeners_BANG_ = (function() { 
var remove_listeners_BANG___delegate = function (nds,event_list){
var G__15552__15553 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15552__15553))
{var node__15554 = cljs.core.first.call(null,G__15552__15553);
var G__15552__15555 = G__15552__15553;

while(true){
var map_func__15566 = ((function (node__15554,G__15552__15555){
return (function (p1__15526_SHARP_){
var wrapper__15563 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15526_SHARP_);

if(cljs.core.truth_(wrapper__15563))
{return wrapper__15563.unlisten(node__15554);
} else
{return goog.events.removeAll.call(null,node__15554,cljs.core.name.call(null,p1__15526_SHARP_));
}
});})(node__15554,G__15552__15555))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15566,event_list));
var temp__3698__auto____15569 = cljs.core.next.call(null,G__15552__15555);

if(cljs.core.truth_(temp__3698__auto____15569))
{var G__15552__15570 = temp__3698__auto____15569;

{
var G__15582 = cljs.core.first.call(null,G__15552__15570);
var G__15583 = G__15552__15570;
node__15554 = G__15582;
G__15552__15555 = G__15583;
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
};
var remove_listeners_BANG_ = function (nds,var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return remove_listeners_BANG___delegate.call(this, nds, event_list);
};
remove_listeners_BANG_.cljs$lang$maxFixedArity = 1;
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15589){
var nds = cljs.core.first(arglist__15589);
var event_list = cljs.core.rest(arglist__15589);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15592 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15593 = (cljs.core.truth_(wrapper__15592)?wrapper__15592.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15596 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15596.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15597__15599 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15597__15599))
{var node__15602 = cljs.core.first.call(null,G__15597__15599);
var G__15597__15603 = G__15597__15599;

while(true){
goog.events.fireListeners.call(null,node__15602,nevent__15593,capture,event_obj__15596);
var temp__3698__auto____15604 = cljs.core.next.call(null,G__15597__15603);

if(cljs.core.truth_(temp__3698__auto____15604))
{var G__15597__15607 = temp__3698__auto____15604;

{
var G__15609 = cljs.core.first.call(null,G__15597__15607);
var G__15610 = G__15597__15607;
node__15602 = G__15609;
G__15597__15603 = G__15610;
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
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseenter","﷐'mouseover",domina.events.mouse_enter_leave);
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseleave","﷐'mouseout",domina.events.mouse_enter_leave);
