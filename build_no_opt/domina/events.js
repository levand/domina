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
var G__15444 = parent;
var G__15445 = child.parentNode;
parent = G__15444;
child = G__15445;
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
var re__15452 = e.relatedTarget;
var this$__15454 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15456 = cljs.core.not.call(null,(re__15452 === this$__15454));

if(cljs.core.truth_(and__3546__auto____15456))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15454,re__15452));
} else
{return and__3546__auto____15456;
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
var wevent__15468 = cljs.core.name.call(null,wrapped_key);
var event__15469 = cljs.core.name.call(null,event_key);

obj__15466.wrapped_event = wevent__15468;
obj__15466.event = event__15469;
obj__15466.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15471 = wrapper_func.call(null,func);

callback__15471.listen = func;
callback__15471.scope = opt_scope;
callback__15471.event = event__15469;
callback__15471.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15468,callback__15471,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15468,callback__15471,capture);
}
});
obj__15466.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15476 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15468,false),goog.events.getListeners.call(null,elm,wevent__15468,true)):goog.events.getListeners.call(null,elm,wevent__15468,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15478 = obj.listener;
var lfunc__15479 = listener__15478.listen;
var scope__15480 = listener__15478.scope;
var capture__15481 = listener__15478.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15484 = (function (){var or__3548__auto____15483 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15483))
{return or__3548__auto____15483;
} else
{return cljs.core._EQ_.call(null,lfunc__15479,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15484))
{var or__3548__auto____15486 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15486))
{return or__3548__auto____15486;
} else
{return cljs.core._EQ_.call(null,scope__15480,opt_scope);
}
} else
{return and__3546__auto____15484;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15468,listener__15478,capture__15481);
} else
{return goog.events.unlisten.call(null,elm,wevent__15468,listener__15478,capture__15481);
}
} else
{return null;
}
}),listeners__15476));
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
var listen_BANG___15516 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15517 = (function (nds,event,func,capture){
var wrapper__15493 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15494__15497 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15494__15497))
{var node__15508 = cljs.core.first.call(null,G__15494__15497);
var G__15494__15509 = G__15494__15497;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15493)))
{goog.events.listen.call(null,node__15508,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15508,wrapper__15493,func,capture);
}
var temp__3698__auto____15511 = cljs.core.next.call(null,G__15494__15509);

if(cljs.core.truth_(temp__3698__auto____15511))
{var G__15494__15513 = temp__3698__auto____15511;

{
var G__15523 = cljs.core.first.call(null,G__15494__15513);
var G__15524 = G__15494__15513;
node__15508 = G__15523;
G__15494__15509 = G__15524;
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
return listen_BANG___15516.call(this,nds,event,func);
case  4 :
return listen_BANG___15517.call(this,nds,event,func,capture);
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
var unlisten_BANG___15595 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15596 = (function (nds,event,func,capture){
var wrapper__15588 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15589__15590 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15589__15590))
{var node__15591 = cljs.core.first.call(null,G__15589__15590);
var G__15589__15592 = G__15589__15590;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15588)))
{goog.events.unlisten.call(null,node__15591,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15588.unlisten(node__15591,func,capture);
}
var temp__3698__auto____15593 = cljs.core.next.call(null,G__15589__15592);

if(cljs.core.truth_(temp__3698__auto____15593))
{var G__15589__15594 = temp__3698__auto____15593;

{
var G__15627 = cljs.core.first.call(null,G__15589__15594);
var G__15628 = G__15589__15594;
node__15591 = G__15627;
G__15589__15592 = G__15628;
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
return unlisten_BANG___15595.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15596.call(this,nds,event,func,capture);
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
var G__15632__15633 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15632__15633))
{var node__15635 = cljs.core.first.call(null,G__15632__15633);
var G__15632__15636 = G__15632__15633;

while(true){
var map_func__15642 = ((function (node__15635,G__15632__15636){
return (function (p1__15584_SHARP_){
var wrapper__15639 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15584_SHARP_);

if(cljs.core.truth_(wrapper__15639))
{return wrapper__15639.unlisten(node__15635);
} else
{return goog.events.removeAll.call(null,node__15635,cljs.core.name.call(null,p1__15584_SHARP_));
}
});})(node__15635,G__15632__15636))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15642,event_list));
var temp__3698__auto____15643 = cljs.core.next.call(null,G__15632__15636);

if(cljs.core.truth_(temp__3698__auto____15643))
{var G__15632__15644 = temp__3698__auto____15643;

{
var G__15653 = cljs.core.first.call(null,G__15632__15644);
var G__15654 = G__15632__15644;
node__15635 = G__15653;
G__15632__15636 = G__15654;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15658){
var nds = cljs.core.first(arglist__15658);
var event_list = cljs.core.rest(arglist__15658);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15667 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15670 = (cljs.core.truth_(wrapper__15667)?wrapper__15667.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15673 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15673.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15674__15676 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15674__15676))
{var node__15678 = cljs.core.first.call(null,G__15674__15676);
var G__15674__15679 = G__15674__15676;

while(true){
goog.events.fireListeners.call(null,node__15678,nevent__15670,capture,event_obj__15673);
var temp__3698__auto____15682 = cljs.core.next.call(null,G__15674__15679);

if(cljs.core.truth_(temp__3698__auto____15682))
{var G__15674__15684 = temp__3698__auto____15682;

{
var G__15702 = cljs.core.first.call(null,G__15674__15684);
var G__15703 = G__15674__15684;
node__15678 = G__15702;
G__15674__15679 = G__15703;
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
