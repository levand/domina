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
var G__15464 = parent;
var G__15465 = child.parentNode;
parent = G__15464;
child = G__15465;
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
var re__15485 = e.relatedTarget;
var this$__15486 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15487 = cljs.core.not.call(null,(re__15485 === this$__15486));

if(cljs.core.truth_(and__3546__auto____15487))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15486,re__15485));
} else
{return and__3546__auto____15487;
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
var obj__15489 = (new Object());
var wevent__15490 = cljs.core.name.call(null,wrapped_key);
var event__15491 = cljs.core.name.call(null,event_key);

obj__15489.wrapped_event = wevent__15490;
obj__15489.event = event__15491;
obj__15489.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15492 = wrapper_func.call(null,func);

callback__15492.listen = func;
callback__15492.scope = opt_scope;
callback__15492.event = event__15491;
callback__15492.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15490,callback__15492,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15490,callback__15492,capture);
}
});
obj__15489.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15493 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15490,false),goog.events.getListeners.call(null,elm,wevent__15490,true)):goog.events.getListeners.call(null,elm,wevent__15490,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15495 = obj.listener;
var lfunc__15497 = listener__15495.listen;
var scope__15498 = listener__15495.scope;
var capture__15499 = listener__15495.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15501 = (function (){var or__3548__auto____15500 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15500))
{return or__3548__auto____15500;
} else
{return cljs.core._EQ_.call(null,lfunc__15497,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15501))
{var or__3548__auto____15503 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15503))
{return or__3548__auto____15503;
} else
{return cljs.core._EQ_.call(null,scope__15498,opt_scope);
}
} else
{return and__3546__auto____15501;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15490,listener__15495,capture__15499);
} else
{return goog.events.unlisten.call(null,elm,wevent__15490,listener__15495,capture__15499);
}
} else
{return null;
}
}),listeners__15493));
});
return obj__15489;
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
var listen_BANG___15525 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15526 = (function (nds,event,func,capture){
var wrapper__15518 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15519__15520 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15519__15520))
{var node__15521 = cljs.core.first.call(null,G__15519__15520);
var G__15519__15522 = G__15519__15520;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15518)))
{goog.events.listen.call(null,node__15521,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15521,wrapper__15518,func,capture);
}
var temp__3698__auto____15523 = cljs.core.next.call(null,G__15519__15522);

if(cljs.core.truth_(temp__3698__auto____15523))
{var G__15519__15524 = temp__3698__auto____15523;

{
var G__15531 = cljs.core.first.call(null,G__15519__15524);
var G__15532 = G__15519__15524;
node__15521 = G__15531;
G__15519__15522 = G__15532;
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
return listen_BANG___15525.call(this,nds,event,func);
case  4 :
return listen_BANG___15526.call(this,nds,event,func,capture);
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
var unlisten_BANG___15552 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15553 = (function (nds,event,func,capture){
var wrapper__15540 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15541__15542 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15541__15542))
{var node__15544 = cljs.core.first.call(null,G__15541__15542);
var G__15541__15545 = G__15541__15542;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15540)))
{goog.events.unlisten.call(null,node__15544,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15540.unlisten(node__15544,func,capture);
}
var temp__3698__auto____15548 = cljs.core.next.call(null,G__15541__15545);

if(cljs.core.truth_(temp__3698__auto____15548))
{var G__15541__15549 = temp__3698__auto____15548;

{
var G__15563 = cljs.core.first.call(null,G__15541__15549);
var G__15564 = G__15541__15549;
node__15544 = G__15563;
G__15541__15545 = G__15564;
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
return unlisten_BANG___15552.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15553.call(this,nds,event,func,capture);
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
var G__15576__15577 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15576__15577))
{var node__15580 = cljs.core.first.call(null,G__15576__15577);
var G__15576__15581 = G__15576__15577;

while(true){
var map_func__15588 = ((function (node__15580,G__15576__15581){
return (function (p1__15535_SHARP_){
var wrapper__15584 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15535_SHARP_);

if(cljs.core.truth_(wrapper__15584))
{return wrapper__15584.unlisten(node__15580);
} else
{return goog.events.removeAll.call(null,node__15580,cljs.core.name.call(null,p1__15535_SHARP_));
}
});})(node__15580,G__15576__15581))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15588,event_list));
var temp__3698__auto____15590 = cljs.core.next.call(null,G__15576__15581);

if(cljs.core.truth_(temp__3698__auto____15590))
{var G__15576__15593 = temp__3698__auto____15590;

{
var G__15604 = cljs.core.first.call(null,G__15576__15593);
var G__15605 = G__15576__15593;
node__15580 = G__15604;
G__15576__15581 = G__15605;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15606){
var nds = cljs.core.first(arglist__15606);
var event_list = cljs.core.rest(arglist__15606);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15610 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15611 = (cljs.core.truth_(wrapper__15610)?wrapper__15610.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15612 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15612.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15615__15616 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15615__15616))
{var node__15617 = cljs.core.first.call(null,G__15615__15616);
var G__15615__15618 = G__15615__15616;

while(true){
goog.events.fireListeners.call(null,node__15617,nevent__15611,capture,event_obj__15612);
var temp__3698__auto____15619 = cljs.core.next.call(null,G__15615__15618);

if(cljs.core.truth_(temp__3698__auto____15619))
{var G__15615__15621 = temp__3698__auto____15619;

{
var G__15725 = cljs.core.first.call(null,G__15615__15621);
var G__15727 = G__15615__15621;
node__15617 = G__15725;
G__15615__15618 = G__15727;
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
