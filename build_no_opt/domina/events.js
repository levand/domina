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
var re__15403 = e.relatedTarget;
var this$__15404 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15406 = cljs.core.not.call(null,(re__15403 === this$__15404));

if(cljs.core.truth_(and__3546__auto____15406))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15404,re__15403));
} else
{return and__3546__auto____15406;
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
var obj__15416 = (new Object());
var wevent__15418 = cljs.core.name.call(null,wrapped_key);
var event__15419 = cljs.core.name.call(null,event_key);

obj__15416.wrapped_event = wevent__15418;
obj__15416.event = event__15419;
obj__15416.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15422 = wrapper_func.call(null,func);

callback__15422.listen = func;
callback__15422.scope = opt_scope;
callback__15422.event = event__15419;
callback__15422.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15418,callback__15422,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15418,callback__15422,capture);
}
});
obj__15416.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15463 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15418,false),goog.events.getListeners.call(null,elm,wevent__15418,true)):goog.events.getListeners.call(null,elm,wevent__15418,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15466 = obj.listener;
var lfunc__15467 = listener__15466.listen;
var scope__15468 = listener__15466.scope;
var capture__15469 = listener__15466.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15471 = (function (){var or__3548__auto____15470 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15470))
{return or__3548__auto____15470;
} else
{return cljs.core._EQ_.call(null,lfunc__15467,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15471))
{var or__3548__auto____15473 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15473))
{return or__3548__auto____15473;
} else
{return cljs.core._EQ_.call(null,scope__15468,opt_scope);
}
} else
{return and__3546__auto____15471;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15418,listener__15466,capture__15469);
} else
{return goog.events.unlisten.call(null,elm,wevent__15418,listener__15466,capture__15469);
}
} else
{return null;
}
}),listeners__15463));
});
return obj__15416;
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
var listen_BANG___15511 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15512 = (function (nds,event,func,capture){
var wrapper__15489 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15490__15499 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15490__15499))
{var node__15501 = cljs.core.first.call(null,G__15490__15499);
var G__15490__15502 = G__15490__15499;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15489)))
{goog.events.listen.call(null,node__15501,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15501,wrapper__15489,func,capture);
}
var temp__3698__auto____15506 = cljs.core.next.call(null,G__15490__15502);

if(cljs.core.truth_(temp__3698__auto____15506))
{var G__15490__15507 = temp__3698__auto____15506;

{
var G__15559 = cljs.core.first.call(null,G__15490__15507);
var G__15560 = G__15490__15507;
node__15501 = G__15559;
G__15490__15502 = G__15560;
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
return listen_BANG___15511.call(this,nds,event,func);
case  4 :
return listen_BANG___15512.call(this,nds,event,func,capture);
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
var unlisten_BANG___15577 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15578 = (function (nds,event,func,capture){
var wrapper__15565 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15567__15568 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15567__15568))
{var node__15570 = cljs.core.first.call(null,G__15567__15568);
var G__15567__15571 = G__15567__15568;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15565)))
{goog.events.unlisten.call(null,node__15570,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15565.unlisten(node__15570,func,capture);
}
var temp__3698__auto____15573 = cljs.core.next.call(null,G__15567__15571);

if(cljs.core.truth_(temp__3698__auto____15573))
{var G__15567__15574 = temp__3698__auto____15573;

{
var G__15582 = cljs.core.first.call(null,G__15567__15574);
var G__15583 = G__15567__15574;
node__15570 = G__15582;
G__15567__15571 = G__15583;
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
return unlisten_BANG___15577.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15578.call(this,nds,event,func,capture);
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
var G__15586__15588 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15586__15588))
{var node__15589 = cljs.core.first.call(null,G__15586__15588);
var G__15586__15590 = G__15586__15588;

while(true){
var map_func__15594 = ((function (node__15589,G__15586__15590){
return (function (p1__15563_SHARP_){
var wrapper__15593 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15563_SHARP_);

if(cljs.core.truth_(wrapper__15593))
{return wrapper__15593.unlisten(node__15589);
} else
{return goog.events.removeAll.call(null,node__15589,cljs.core.name.call(null,p1__15563_SHARP_));
}
});})(node__15589,G__15586__15590))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15594,event_list));
var temp__3698__auto____15596 = cljs.core.next.call(null,G__15586__15590);

if(cljs.core.truth_(temp__3698__auto____15596))
{var G__15586__15597 = temp__3698__auto____15596;

{
var G__15632 = cljs.core.first.call(null,G__15586__15597);
var G__15633 = G__15586__15597;
node__15589 = G__15632;
G__15586__15590 = G__15633;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15637){
var nds = cljs.core.first(arglist__15637);
var event_list = cljs.core.rest(arglist__15637);
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
var nevent__15643 = (cljs.core.truth_(wrapper__15642)?wrapper__15642.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15645 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15645.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15647__15648 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15647__15648))
{var node__15649 = cljs.core.first.call(null,G__15647__15648);
var G__15647__15650 = G__15647__15648;

while(true){
goog.events.fireListeners.call(null,node__15649,nevent__15643,capture,event_obj__15645);
var temp__3698__auto____15654 = cljs.core.next.call(null,G__15647__15650);

if(cljs.core.truth_(temp__3698__auto____15654))
{var G__15647__15656 = temp__3698__auto____15654;

{
var G__15666 = cljs.core.first.call(null,G__15647__15656);
var G__15667 = G__15647__15656;
node__15649 = G__15666;
G__15647__15650 = G__15667;
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
