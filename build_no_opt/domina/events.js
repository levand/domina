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
var G__15511 = parent;
var G__15512 = child.parentNode;
parent = G__15511;
child = G__15512;
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
var re__15516 = e.relatedTarget;
var this$__15517 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15518 = cljs.core.not.call(null,(re__15516 === this$__15517));

if(cljs.core.truth_(and__3546__auto____15518))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15517,re__15516));
} else
{return and__3546__auto____15518;
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
var obj__15519 = (new Object());
var wevent__15520 = cljs.core.name.call(null,wrapped_key);
var event__15521 = cljs.core.name.call(null,event_key);

obj__15519.wrapped_event = wevent__15520;
obj__15519.event = event__15521;
obj__15519.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15522 = wrapper_func.call(null,func);

callback__15522.listen = func;
callback__15522.scope = opt_scope;
callback__15522.event = event__15521;
callback__15522.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15520,callback__15522,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15520,callback__15522,capture);
}
});
obj__15519.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15525 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15520,false),goog.events.getListeners.call(null,elm,wevent__15520,true)):goog.events.getListeners.call(null,elm,wevent__15520,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15526 = obj.listener;
var lfunc__15527 = listener__15526.listen;
var scope__15528 = listener__15526.scope;
var capture__15529 = listener__15526.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15531 = (function (){var or__3548__auto____15530 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15530))
{return or__3548__auto____15530;
} else
{return cljs.core._EQ_.call(null,lfunc__15527,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15531))
{var or__3548__auto____15534 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15534))
{return or__3548__auto____15534;
} else
{return cljs.core._EQ_.call(null,scope__15528,opt_scope);
}
} else
{return and__3546__auto____15531;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15520,listener__15526,capture__15529);
} else
{return goog.events.unlisten.call(null,elm,wevent__15520,listener__15526,capture__15529);
}
} else
{return null;
}
}),listeners__15525));
});
return obj__15519;
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
var listen_BANG___15549 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15550 = (function (nds,event,func,capture){
var wrapper__15540 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15541__15542 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15541__15542))
{var node__15544 = cljs.core.first.call(null,G__15541__15542);
var G__15541__15545 = G__15541__15542;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15540)))
{goog.events.listen.call(null,node__15544,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15544,wrapper__15540,func,capture);
}
var temp__3698__auto____15546 = cljs.core.next.call(null,G__15541__15545);

if(cljs.core.truth_(temp__3698__auto____15546))
{var G__15541__15548 = temp__3698__auto____15546;

{
var G__15553 = cljs.core.first.call(null,G__15541__15548);
var G__15554 = G__15541__15548;
node__15544 = G__15553;
G__15541__15545 = G__15554;
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
return listen_BANG___15549.call(this,nds,event,func);
case  4 :
return listen_BANG___15550.call(this,nds,event,func,capture);
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
var unlisten_BANG___15569 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15570 = (function (nds,event,func,capture){
var wrapper__15559 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15560__15561 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15560__15561))
{var node__15562 = cljs.core.first.call(null,G__15560__15561);
var G__15560__15563 = G__15560__15561;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15559)))
{goog.events.unlisten.call(null,node__15562,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15559.unlisten(node__15562,func,capture);
}
var temp__3698__auto____15566 = cljs.core.next.call(null,G__15560__15563);

if(cljs.core.truth_(temp__3698__auto____15566))
{var G__15560__15567 = temp__3698__auto____15566;

{
var G__15572 = cljs.core.first.call(null,G__15560__15567);
var G__15573 = G__15560__15567;
node__15562 = G__15572;
G__15560__15563 = G__15573;
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
return unlisten_BANG___15569.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15570.call(this,nds,event,func,capture);
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
var G__15574__15575 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15574__15575))
{var node__15576 = cljs.core.first.call(null,G__15574__15575);
var G__15574__15577 = G__15574__15575;

while(true){
var map_func__15623 = ((function (node__15576,G__15574__15577){
return (function (p1__15557_SHARP_){
var wrapper__15621 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15557_SHARP_);

if(cljs.core.truth_(wrapper__15621))
{return wrapper__15621.unlisten(node__15576);
} else
{return goog.events.removeAll.call(null,node__15576,cljs.core.name.call(null,p1__15557_SHARP_));
}
});})(node__15576,G__15574__15577))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15623,event_list));
var temp__3698__auto____15624 = cljs.core.next.call(null,G__15574__15577);

if(cljs.core.truth_(temp__3698__auto____15624))
{var G__15574__15625 = temp__3698__auto____15624;

{
var G__15632 = cljs.core.first.call(null,G__15574__15625);
var G__15633 = G__15574__15625;
node__15576 = G__15632;
G__15574__15577 = G__15633;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15636){
var nds = cljs.core.first(arglist__15636);
var event_list = cljs.core.rest(arglist__15636);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15642 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15645 = (cljs.core.truth_(wrapper__15642)?wrapper__15642.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15646 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15646.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15647__15648 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15647__15648))
{var node__15652 = cljs.core.first.call(null,G__15647__15648);
var G__15647__15653 = G__15647__15648;

while(true){
goog.events.fireListeners.call(null,node__15652,nevent__15645,capture,event_obj__15646);
var temp__3698__auto____15654 = cljs.core.next.call(null,G__15647__15653);

if(cljs.core.truth_(temp__3698__auto____15654))
{var G__15647__15655 = temp__3698__auto____15654;

{
var G__15666 = cljs.core.first.call(null,G__15647__15655);
var G__15667 = G__15647__15655;
node__15652 = G__15666;
G__15647__15653 = G__15667;
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
