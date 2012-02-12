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
var G__15410 = parent;
var G__15411 = child.parentNode;
parent = G__15410;
child = G__15411;
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
var re__15414 = e.relatedTarget;
var this$__15415 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15416 = cljs.core.not.call(null,(re__15414 === this$__15415));

if(cljs.core.truth_(and__3546__auto____15416))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15415,re__15414));
} else
{return and__3546__auto____15416;
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
var obj__15417 = (new Object());
var wevent__15418 = cljs.core.name.call(null,wrapped_key);
var event__15419 = cljs.core.name.call(null,event_key);

obj__15417.wrapped_event = wevent__15418;
obj__15417.event = event__15419;
obj__15417.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15420 = wrapper_func.call(null,func);

callback__15420.listen = func;
callback__15420.scope = opt_scope;
callback__15420.event = event__15419;
callback__15420.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15418,callback__15420,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15418,callback__15420,capture);
}
});
obj__15417.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15515 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15418,false),goog.events.getListeners.call(null,elm,wevent__15418,true)):goog.events.getListeners.call(null,elm,wevent__15418,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15519 = obj.listener;
var lfunc__15520 = listener__15519.listen;
var scope__15521 = listener__15519.scope;
var capture__15523 = listener__15519.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15526 = (function (){var or__3548__auto____15525 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15525))
{return or__3548__auto____15525;
} else
{return cljs.core._EQ_.call(null,lfunc__15520,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15526))
{var or__3548__auto____15527 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15527))
{return or__3548__auto____15527;
} else
{return cljs.core._EQ_.call(null,scope__15521,opt_scope);
}
} else
{return and__3546__auto____15526;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15418,listener__15519,capture__15523);
} else
{return goog.events.unlisten.call(null,elm,wevent__15418,listener__15519,capture__15523);
}
} else
{return null;
}
}),listeners__15515));
});
return obj__15417;
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
var listen_BANG___15537 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15538 = (function (nds,event,func,capture){
var wrapper__15530 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15531__15532 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15531__15532))
{var node__15533 = cljs.core.first.call(null,G__15531__15532);
var G__15531__15534 = G__15531__15532;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15530)))
{goog.events.listen.call(null,node__15533,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15533,wrapper__15530,func,capture);
}
var temp__3698__auto____15535 = cljs.core.next.call(null,G__15531__15534);

if(cljs.core.truth_(temp__3698__auto____15535))
{var G__15531__15536 = temp__3698__auto____15535;

{
var G__15540 = cljs.core.first.call(null,G__15531__15536);
var G__15541 = G__15531__15536;
node__15533 = G__15540;
G__15531__15534 = G__15541;
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
return listen_BANG___15537.call(this,nds,event,func);
case  4 :
return listen_BANG___15538.call(this,nds,event,func,capture);
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
var unlisten_BANG___15592 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15593 = (function (nds,event,func,capture){
var wrapper__15545 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15546__15585 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15546__15585))
{var node__15586 = cljs.core.first.call(null,G__15546__15585);
var G__15546__15587 = G__15546__15585;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15545)))
{goog.events.unlisten.call(null,node__15586,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15545.unlisten(node__15586,func,capture);
}
var temp__3698__auto____15588 = cljs.core.next.call(null,G__15546__15587);

if(cljs.core.truth_(temp__3698__auto____15588))
{var G__15546__15589 = temp__3698__auto____15588;

{
var G__15597 = cljs.core.first.call(null,G__15546__15589);
var G__15598 = G__15546__15589;
node__15586 = G__15597;
G__15546__15587 = G__15598;
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
return unlisten_BANG___15592.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15593.call(this,nds,event,func,capture);
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
var G__15601__15603 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15601__15603))
{var node__15605 = cljs.core.first.call(null,G__15601__15603);
var G__15601__15606 = G__15601__15603;

while(true){
var map_func__15612 = ((function (node__15605,G__15601__15606){
return (function (p1__15542_SHARP_){
var wrapper__15609 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15542_SHARP_);

if(cljs.core.truth_(wrapper__15609))
{return wrapper__15609.unlisten(node__15605);
} else
{return goog.events.removeAll.call(null,node__15605,cljs.core.name.call(null,p1__15542_SHARP_));
}
});})(node__15605,G__15601__15606))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15612,event_list));
var temp__3698__auto____15615 = cljs.core.next.call(null,G__15601__15606);

if(cljs.core.truth_(temp__3698__auto____15615))
{var G__15601__15620 = temp__3698__auto____15615;

{
var G__15621 = cljs.core.first.call(null,G__15601__15620);
var G__15622 = G__15601__15620;
node__15605 = G__15621;
G__15601__15606 = G__15622;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15623){
var nds = cljs.core.first(arglist__15623);
var event_list = cljs.core.rest(arglist__15623);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15624 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15625 = (cljs.core.truth_(wrapper__15624)?wrapper__15624.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15626 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15626.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15627__15629 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15627__15629))
{var node__15631 = cljs.core.first.call(null,G__15627__15629);
var G__15627__15633 = G__15627__15629;

while(true){
goog.events.fireListeners.call(null,node__15631,nevent__15625,capture,event_obj__15626);
var temp__3698__auto____15634 = cljs.core.next.call(null,G__15627__15633);

if(cljs.core.truth_(temp__3698__auto____15634))
{var G__15627__15635 = temp__3698__auto____15634;

{
var G__15638 = cljs.core.first.call(null,G__15627__15635);
var G__15639 = G__15627__15635;
node__15631 = G__15638;
G__15627__15633 = G__15639;
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
