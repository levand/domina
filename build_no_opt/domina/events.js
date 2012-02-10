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
var G__15395 = parent;
var G__15396 = child.parentNode;
parent = G__15395;
child = G__15396;
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
var re__15404 = e.relatedTarget;
var this$__15406 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15407 = cljs.core.not.call(null,(re__15404 === this$__15406));

if(cljs.core.truth_(and__3546__auto____15407))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15406,re__15404));
} else
{return and__3546__auto____15407;
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
var obj__15410 = (new Object());
var wevent__15412 = cljs.core.name.call(null,wrapped_key);
var event__15413 = cljs.core.name.call(null,event_key);

obj__15410.wrapped_event = wevent__15412;
obj__15410.event = event__15413;
obj__15410.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15414 = wrapper_func.call(null,func);

callback__15414.listen = func;
callback__15414.scope = opt_scope;
callback__15414.event = event__15413;
callback__15414.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15412,callback__15414,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15412,callback__15414,capture);
}
});
obj__15410.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15423 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15412,false),goog.events.getListeners.call(null,elm,wevent__15412,true)):goog.events.getListeners.call(null,elm,wevent__15412,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15425 = obj.listener;
var lfunc__15426 = listener__15425.listen;
var scope__15428 = listener__15425.scope;
var capture__15429 = listener__15425.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15448 = (function (){var or__3548__auto____15446 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15446))
{return or__3548__auto____15446;
} else
{return cljs.core._EQ_.call(null,lfunc__15426,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15448))
{var or__3548__auto____15449 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15449))
{return or__3548__auto____15449;
} else
{return cljs.core._EQ_.call(null,scope__15428,opt_scope);
}
} else
{return and__3546__auto____15448;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15412,listener__15425,capture__15429);
} else
{return goog.events.unlisten.call(null,elm,wevent__15412,listener__15425,capture__15429);
}
} else
{return null;
}
}),listeners__15423));
});
return obj__15410;
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
var listen_BANG___15489 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15490 = (function (nds,event,func,capture){
var wrapper__15474 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15475__15478 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15475__15478))
{var node__15479 = cljs.core.first.call(null,G__15475__15478);
var G__15475__15480 = G__15475__15478;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15474)))
{goog.events.listen.call(null,node__15479,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15479,wrapper__15474,func,capture);
}
var temp__3698__auto____15483 = cljs.core.next.call(null,G__15475__15480);

if(cljs.core.truth_(temp__3698__auto____15483))
{var G__15475__15484 = temp__3698__auto____15483;

{
var G__15496 = cljs.core.first.call(null,G__15475__15484);
var G__15497 = G__15475__15484;
node__15479 = G__15496;
G__15475__15480 = G__15497;
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
return listen_BANG___15489.call(this,nds,event,func);
case  4 :
return listen_BANG___15490.call(this,nds,event,func,capture);
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
var unlisten_BANG___15513 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15515 = (function (nds,event,func,capture){
var wrapper__15500 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15502__15503 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15502__15503))
{var node__15504 = cljs.core.first.call(null,G__15502__15503);
var G__15502__15505 = G__15502__15503;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15500)))
{goog.events.unlisten.call(null,node__15504,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15500.unlisten(node__15504,func,capture);
}
var temp__3698__auto____15507 = cljs.core.next.call(null,G__15502__15505);

if(cljs.core.truth_(temp__3698__auto____15507))
{var G__15502__15509 = temp__3698__auto____15507;

{
var G__15521 = cljs.core.first.call(null,G__15502__15509);
var G__15522 = G__15502__15509;
node__15504 = G__15521;
G__15502__15505 = G__15522;
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
return unlisten_BANG___15513.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15515.call(this,nds,event,func,capture);
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
var G__15524__15526 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15524__15526))
{var node__15530 = cljs.core.first.call(null,G__15524__15526);
var G__15524__15531 = G__15524__15526;

while(true){
var map_func__15535 = ((function (node__15530,G__15524__15531){
return (function (p1__15499_SHARP_){
var wrapper__15533 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15499_SHARP_);

if(cljs.core.truth_(wrapper__15533))
{return wrapper__15533.unlisten(node__15530);
} else
{return goog.events.removeAll.call(null,node__15530,cljs.core.name.call(null,p1__15499_SHARP_));
}
});})(node__15530,G__15524__15531))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15535,event_list));
var temp__3698__auto____15536 = cljs.core.next.call(null,G__15524__15531);

if(cljs.core.truth_(temp__3698__auto____15536))
{var G__15524__15537 = temp__3698__auto____15536;

{
var G__15572 = cljs.core.first.call(null,G__15524__15537);
var G__15573 = G__15524__15537;
node__15530 = G__15572;
G__15524__15531 = G__15573;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15574){
var nds = cljs.core.first(arglist__15574);
var event_list = cljs.core.rest(arglist__15574);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15576 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15580 = (cljs.core.truth_(wrapper__15576)?wrapper__15576.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15583 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15583.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15584__15587 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15584__15587))
{var node__15588 = cljs.core.first.call(null,G__15584__15587);
var G__15584__15589 = G__15584__15587;

while(true){
goog.events.fireListeners.call(null,node__15588,nevent__15580,capture,event_obj__15583);
var temp__3698__auto____15592 = cljs.core.next.call(null,G__15584__15589);

if(cljs.core.truth_(temp__3698__auto____15592))
{var G__15584__15593 = temp__3698__auto____15592;

{
var G__15617 = cljs.core.first.call(null,G__15584__15593);
var G__15618 = G__15584__15593;
node__15588 = G__15617;
G__15584__15589 = G__15618;
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
