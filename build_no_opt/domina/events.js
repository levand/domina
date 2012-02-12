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
var G__15526 = parent;
var G__15527 = child.parentNode;
parent = G__15526;
child = G__15527;
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
var re__15531 = e.relatedTarget;
var this$__15532 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15533 = cljs.core.not.call(null,(re__15531 === this$__15532));

if(cljs.core.truth_(and__3546__auto____15533))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15532,re__15531));
} else
{return and__3546__auto____15533;
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
var obj__15537 = (new Object());
var wevent__15539 = cljs.core.name.call(null,wrapped_key);
var event__15541 = cljs.core.name.call(null,event_key);

obj__15537.wrapped_event = wevent__15539;
obj__15537.event = event__15541;
obj__15537.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15545 = wrapper_func.call(null,func);

callback__15545.listen = func;
callback__15545.scope = opt_scope;
callback__15545.event = event__15541;
callback__15545.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15539,callback__15545,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15539,callback__15545,capture);
}
});
obj__15537.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15548 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15539,false),goog.events.getListeners.call(null,elm,wevent__15539,true)):goog.events.getListeners.call(null,elm,wevent__15539,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15549 = obj.listener;
var lfunc__15550 = listener__15549.listen;
var scope__15551 = listener__15549.scope;
var capture__15552 = listener__15549.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15554 = (function (){var or__3548__auto____15553 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15553))
{return or__3548__auto____15553;
} else
{return cljs.core._EQ_.call(null,lfunc__15550,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15554))
{var or__3548__auto____15555 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15555))
{return or__3548__auto____15555;
} else
{return cljs.core._EQ_.call(null,scope__15551,opt_scope);
}
} else
{return and__3546__auto____15554;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15539,listener__15549,capture__15552);
} else
{return goog.events.unlisten.call(null,elm,wevent__15539,listener__15549,capture__15552);
}
} else
{return null;
}
}),listeners__15548));
});
return obj__15537;
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
var listen_BANG___15576 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15577 = (function (nds,event,func,capture){
var wrapper__15566 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15567__15568 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15567__15568))
{var node__15569 = cljs.core.first.call(null,G__15567__15568);
var G__15567__15570 = G__15567__15568;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15566)))
{goog.events.listen.call(null,node__15569,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15569,wrapper__15566,func,capture);
}
var temp__3698__auto____15573 = cljs.core.next.call(null,G__15567__15570);

if(cljs.core.truth_(temp__3698__auto____15573))
{var G__15567__15574 = temp__3698__auto____15573;

{
var G__15584 = cljs.core.first.call(null,G__15567__15574);
var G__15585 = G__15567__15574;
node__15569 = G__15584;
G__15567__15570 = G__15585;
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
return listen_BANG___15576.call(this,nds,event,func);
case  4 :
return listen_BANG___15577.call(this,nds,event,func,capture);
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
var unlisten_BANG___15599 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15600 = (function (nds,event,func,capture){
var wrapper__15592 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15593__15594 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15593__15594))
{var node__15595 = cljs.core.first.call(null,G__15593__15594);
var G__15593__15596 = G__15593__15594;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15592)))
{goog.events.unlisten.call(null,node__15595,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15592.unlisten(node__15595,func,capture);
}
var temp__3698__auto____15597 = cljs.core.next.call(null,G__15593__15596);

if(cljs.core.truth_(temp__3698__auto____15597))
{var G__15593__15598 = temp__3698__auto____15597;

{
var G__15602 = cljs.core.first.call(null,G__15593__15598);
var G__15603 = G__15593__15598;
node__15595 = G__15602;
G__15593__15596 = G__15603;
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
return unlisten_BANG___15599.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15600.call(this,nds,event,func,capture);
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
var G__15604__15605 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15604__15605))
{var node__15606 = cljs.core.first.call(null,G__15604__15605);
var G__15604__15607 = G__15604__15605;

while(true){
var map_func__15609 = ((function (node__15606,G__15604__15607){
return (function (p1__15588_SHARP_){
var wrapper__15608 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15588_SHARP_);

if(cljs.core.truth_(wrapper__15608))
{return wrapper__15608.unlisten(node__15606);
} else
{return goog.events.removeAll.call(null,node__15606,cljs.core.name.call(null,p1__15588_SHARP_));
}
});})(node__15606,G__15604__15607))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15609,event_list));
var temp__3698__auto____15610 = cljs.core.next.call(null,G__15604__15607);

if(cljs.core.truth_(temp__3698__auto____15610))
{var G__15604__15611 = temp__3698__auto____15610;

{
var G__15614 = cljs.core.first.call(null,G__15604__15611);
var G__15615 = G__15604__15611;
node__15606 = G__15614;
G__15604__15607 = G__15615;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15616){
var nds = cljs.core.first(arglist__15616);
var event_list = cljs.core.rest(arglist__15616);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15618 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15620 = (cljs.core.truth_(wrapper__15618)?wrapper__15618.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15621 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15621.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15623__15624 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15623__15624))
{var node__15625 = cljs.core.first.call(null,G__15623__15624);
var G__15623__15626 = G__15623__15624;

while(true){
goog.events.fireListeners.call(null,node__15625,nevent__15620,capture,event_obj__15621);
var temp__3698__auto____15627 = cljs.core.next.call(null,G__15623__15626);

if(cljs.core.truth_(temp__3698__auto____15627))
{var G__15623__15628 = temp__3698__auto____15627;

{
var G__15633 = cljs.core.first.call(null,G__15623__15628);
var G__15634 = G__15623__15628;
node__15625 = G__15633;
G__15623__15626 = G__15634;
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
