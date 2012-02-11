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
var G__15448 = parent;
var G__15449 = child.parentNode;
parent = G__15448;
child = G__15449;
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
var re__15450 = e.relatedTarget;
var this$__15451 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15452 = cljs.core.not.call(null,(re__15450 === this$__15451));

if(cljs.core.truth_(and__3546__auto____15452))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15451,re__15450));
} else
{return and__3546__auto____15452;
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
var obj__15455 = (new Object());
var wevent__15456 = cljs.core.name.call(null,wrapped_key);
var event__15457 = cljs.core.name.call(null,event_key);

obj__15455.wrapped_event = wevent__15456;
obj__15455.event = event__15457;
obj__15455.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15461 = wrapper_func.call(null,func);

callback__15461.listen = func;
callback__15461.scope = opt_scope;
callback__15461.event = event__15457;
callback__15461.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15456,callback__15461,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15456,callback__15461,capture);
}
});
obj__15455.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15462 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15456,false),goog.events.getListeners.call(null,elm,wevent__15456,true)):goog.events.getListeners.call(null,elm,wevent__15456,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15463 = obj.listener;
var lfunc__15467 = listener__15463.listen;
var scope__15468 = listener__15463.scope;
var capture__15469 = listener__15463.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15474 = (function (){var or__3548__auto____15473 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15473))
{return or__3548__auto____15473;
} else
{return cljs.core._EQ_.call(null,lfunc__15467,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15474))
{var or__3548__auto____15477 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15477))
{return or__3548__auto____15477;
} else
{return cljs.core._EQ_.call(null,scope__15468,opt_scope);
}
} else
{return and__3546__auto____15474;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15456,listener__15463,capture__15469);
} else
{return goog.events.unlisten.call(null,elm,wevent__15456,listener__15463,capture__15469);
}
} else
{return null;
}
}),listeners__15462));
});
return obj__15455;
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
var listen_BANG___15504 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15505 = (function (nds,event,func,capture){
var wrapper__15496 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15497__15498 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15497__15498))
{var node__15499 = cljs.core.first.call(null,G__15497__15498);
var G__15497__15500 = G__15497__15498;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15496)))
{goog.events.listen.call(null,node__15499,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15499,wrapper__15496,func,capture);
}
var temp__3698__auto____15501 = cljs.core.next.call(null,G__15497__15500);

if(cljs.core.truth_(temp__3698__auto____15501))
{var G__15497__15503 = temp__3698__auto____15501;

{
var G__15538 = cljs.core.first.call(null,G__15497__15503);
var G__15539 = G__15497__15503;
node__15499 = G__15538;
G__15497__15500 = G__15539;
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
return listen_BANG___15504.call(this,nds,event,func);
case  4 :
return listen_BANG___15505.call(this,nds,event,func,capture);
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
var unlisten_BANG___15642 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15643 = (function (nds,event,func,capture){
var wrapper__15631 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15632__15634 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15632__15634))
{var node__15635 = cljs.core.first.call(null,G__15632__15634);
var G__15632__15636 = G__15632__15634;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15631)))
{goog.events.unlisten.call(null,node__15635,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15631.unlisten(node__15635,func,capture);
}
var temp__3698__auto____15639 = cljs.core.next.call(null,G__15632__15636);

if(cljs.core.truth_(temp__3698__auto____15639))
{var G__15632__15641 = temp__3698__auto____15639;

{
var G__15647 = cljs.core.first.call(null,G__15632__15641);
var G__15648 = G__15632__15641;
node__15635 = G__15647;
G__15632__15636 = G__15648;
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
return unlisten_BANG___15642.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15643.call(this,nds,event,func,capture);
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
var G__15650__15652 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15650__15652))
{var node__15655 = cljs.core.first.call(null,G__15650__15652);
var G__15650__15656 = G__15650__15652;

while(true){
var map_func__15664 = ((function (node__15655,G__15650__15656){
return (function (p1__15626_SHARP_){
var wrapper__15658 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15626_SHARP_);

if(cljs.core.truth_(wrapper__15658))
{return wrapper__15658.unlisten(node__15655);
} else
{return goog.events.removeAll.call(null,node__15655,cljs.core.name.call(null,p1__15626_SHARP_));
}
});})(node__15655,G__15650__15656))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15664,event_list));
var temp__3698__auto____15666 = cljs.core.next.call(null,G__15650__15656);

if(cljs.core.truth_(temp__3698__auto____15666))
{var G__15650__15668 = temp__3698__auto____15666;

{
var G__15669 = cljs.core.first.call(null,G__15650__15668);
var G__15670 = G__15650__15668;
node__15655 = G__15669;
G__15650__15656 = G__15670;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15673){
var nds = cljs.core.first(arglist__15673);
var event_list = cljs.core.rest(arglist__15673);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15677 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15681 = (cljs.core.truth_(wrapper__15677)?wrapper__15677.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15683 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15683.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15684__15687 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15684__15687))
{var node__15689 = cljs.core.first.call(null,G__15684__15687);
var G__15684__15690 = G__15684__15687;

while(true){
goog.events.fireListeners.call(null,node__15689,nevent__15681,capture,event_obj__15683);
var temp__3698__auto____15692 = cljs.core.next.call(null,G__15684__15690);

if(cljs.core.truth_(temp__3698__auto____15692))
{var G__15684__15693 = temp__3698__auto____15692;

{
var G__15728 = cljs.core.first.call(null,G__15684__15693);
var G__15729 = G__15684__15693;
node__15689 = G__15728;
G__15684__15690 = G__15729;
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
