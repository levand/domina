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
var re__15449 = e.relatedTarget;
var this$__15450 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15452 = cljs.core.not.call(null,(re__15449 === this$__15450));

if(cljs.core.truth_(and__3546__auto____15452))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15450,re__15449));
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
var obj__15458 = (new Object());
var wevent__15459 = cljs.core.name.call(null,wrapped_key);
var event__15461 = cljs.core.name.call(null,event_key);

obj__15458.wrapped_event = wevent__15459;
obj__15458.event = event__15461;
obj__15458.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15463 = wrapper_func.call(null,func);

callback__15463.listen = func;
callback__15463.scope = opt_scope;
callback__15463.event = event__15461;
callback__15463.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15459,callback__15463,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15459,callback__15463,capture);
}
});
obj__15458.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15469 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15459,false),goog.events.getListeners.call(null,elm,wevent__15459,true)):goog.events.getListeners.call(null,elm,wevent__15459,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15472 = obj.listener;
var lfunc__15473 = listener__15472.listen;
var scope__15474 = listener__15472.scope;
var capture__15479 = listener__15472.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15483 = (function (){var or__3548__auto____15481 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15481))
{return or__3548__auto____15481;
} else
{return cljs.core._EQ_.call(null,lfunc__15473,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15483))
{var or__3548__auto____15484 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15484))
{return or__3548__auto____15484;
} else
{return cljs.core._EQ_.call(null,scope__15474,opt_scope);
}
} else
{return and__3546__auto____15483;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15459,listener__15472,capture__15479);
} else
{return goog.events.unlisten.call(null,elm,wevent__15459,listener__15472,capture__15479);
}
} else
{return null;
}
}),listeners__15469));
});
return obj__15458;
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
var listen_BANG___15546 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15547 = (function (nds,event,func,capture){
var wrapper__15534 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15535__15536 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15535__15536))
{var node__15537 = cljs.core.first.call(null,G__15535__15536);
var G__15535__15538 = G__15535__15536;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15534)))
{goog.events.listen.call(null,node__15537,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15537,wrapper__15534,func,capture);
}
var temp__3698__auto____15540 = cljs.core.next.call(null,G__15535__15538);

if(cljs.core.truth_(temp__3698__auto____15540))
{var G__15535__15542 = temp__3698__auto____15540;

{
var G__15554 = cljs.core.first.call(null,G__15535__15542);
var G__15555 = G__15535__15542;
node__15537 = G__15554;
G__15535__15538 = G__15555;
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
return listen_BANG___15546.call(this,nds,event,func);
case  4 :
return listen_BANG___15547.call(this,nds,event,func,capture);
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
var unlisten_BANG___15580 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15581 = (function (nds,event,func,capture){
var wrapper__15558 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15574__15575 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15574__15575))
{var node__15576 = cljs.core.first.call(null,G__15574__15575);
var G__15574__15577 = G__15574__15575;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15558)))
{goog.events.unlisten.call(null,node__15576,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15558.unlisten(node__15576,func,capture);
}
var temp__3698__auto____15578 = cljs.core.next.call(null,G__15574__15577);

if(cljs.core.truth_(temp__3698__auto____15578))
{var G__15574__15579 = temp__3698__auto____15578;

{
var G__15588 = cljs.core.first.call(null,G__15574__15579);
var G__15589 = G__15574__15579;
node__15576 = G__15588;
G__15574__15577 = G__15589;
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
return unlisten_BANG___15580.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15581.call(this,nds,event,func,capture);
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
var G__15613__15615 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15613__15615))
{var node__15617 = cljs.core.first.call(null,G__15613__15615);
var G__15613__15618 = G__15613__15615;

while(true){
var map_func__15625 = ((function (node__15617,G__15613__15618){
return (function (p1__15556_SHARP_){
var wrapper__15621 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15556_SHARP_);

if(cljs.core.truth_(wrapper__15621))
{return wrapper__15621.unlisten(node__15617);
} else
{return goog.events.removeAll.call(null,node__15617,cljs.core.name.call(null,p1__15556_SHARP_));
}
});})(node__15617,G__15613__15618))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15625,event_list));
var temp__3698__auto____15630 = cljs.core.next.call(null,G__15613__15618);

if(cljs.core.truth_(temp__3698__auto____15630))
{var G__15613__15631 = temp__3698__auto____15630;

{
var G__15712 = cljs.core.first.call(null,G__15613__15631);
var G__15713 = G__15613__15631;
node__15617 = G__15712;
G__15613__15618 = G__15713;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15715){
var nds = cljs.core.first(arglist__15715);
var event_list = cljs.core.rest(arglist__15715);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15718 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15719 = (cljs.core.truth_(wrapper__15718)?wrapper__15718.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15721 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15721.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15722__15724 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15722__15724))
{var node__15725 = cljs.core.first.call(null,G__15722__15724);
var G__15722__15726 = G__15722__15724;

while(true){
goog.events.fireListeners.call(null,node__15725,nevent__15719,capture,event_obj__15721);
var temp__3698__auto____15730 = cljs.core.next.call(null,G__15722__15726);

if(cljs.core.truth_(temp__3698__auto____15730))
{var G__15722__15731 = temp__3698__auto____15730;

{
var G__15742 = cljs.core.first.call(null,G__15722__15731);
var G__15745 = G__15722__15731;
node__15725 = G__15742;
G__15722__15726 = G__15745;
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
