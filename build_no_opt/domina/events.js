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
var G__15508 = parent;
var G__15509 = child.parentNode;
parent = G__15508;
child = G__15509;
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
var re__15510 = e.relatedTarget;
var this$__15512 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15513 = cljs.core.not.call(null,(re__15510 === this$__15512));

if(cljs.core.truth_(and__3546__auto____15513))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15512,re__15510));
} else
{return and__3546__auto____15513;
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
var obj__15516 = (new Object());
var wevent__15518 = cljs.core.name.call(null,wrapped_key);
var event__15519 = cljs.core.name.call(null,event_key);

obj__15516.wrapped_event = wevent__15518;
obj__15516.event = event__15519;
obj__15516.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15521 = wrapper_func.call(null,func);

callback__15521.listen = func;
callback__15521.scope = opt_scope;
callback__15521.event = event__15519;
callback__15521.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15518,callback__15521,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15518,callback__15521,capture);
}
});
obj__15516.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15527 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15518,false),goog.events.getListeners.call(null,elm,wevent__15518,true)):goog.events.getListeners.call(null,elm,wevent__15518,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15528 = obj.listener;
var lfunc__15529 = listener__15528.listen;
var scope__15530 = listener__15528.scope;
var capture__15531 = listener__15528.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15534 = (function (){var or__3548__auto____15533 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15533))
{return or__3548__auto____15533;
} else
{return cljs.core._EQ_.call(null,lfunc__15529,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15534))
{var or__3548__auto____15535 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15535))
{return or__3548__auto____15535;
} else
{return cljs.core._EQ_.call(null,scope__15530,opt_scope);
}
} else
{return and__3546__auto____15534;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15518,listener__15528,capture__15531);
} else
{return goog.events.unlisten.call(null,elm,wevent__15518,listener__15528,capture__15531);
}
} else
{return null;
}
}),listeners__15527));
});
return obj__15516;
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
var listen_BANG___15568 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15569 = (function (nds,event,func,capture){
var wrapper__15545 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15546__15547 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15546__15547))
{var node__15548 = cljs.core.first.call(null,G__15546__15547);
var G__15546__15549 = G__15546__15547;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15545)))
{goog.events.listen.call(null,node__15548,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15548,wrapper__15545,func,capture);
}
var temp__3698__auto____15550 = cljs.core.next.call(null,G__15546__15549);

if(cljs.core.truth_(temp__3698__auto____15550))
{var G__15546__15551 = temp__3698__auto____15550;

{
var G__15571 = cljs.core.first.call(null,G__15546__15551);
var G__15572 = G__15546__15551;
node__15548 = G__15571;
G__15546__15549 = G__15572;
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
return listen_BANG___15568.call(this,nds,event,func);
case  4 :
return listen_BANG___15569.call(this,nds,event,func,capture);
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
var unlisten_BANG___15588 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15589 = (function (nds,event,func,capture){
var wrapper__15576 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15577__15578 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15577__15578))
{var node__15579 = cljs.core.first.call(null,G__15577__15578);
var G__15577__15580 = G__15577__15578;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15576)))
{goog.events.unlisten.call(null,node__15579,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15576.unlisten(node__15579,func,capture);
}
var temp__3698__auto____15583 = cljs.core.next.call(null,G__15577__15580);

if(cljs.core.truth_(temp__3698__auto____15583))
{var G__15577__15584 = temp__3698__auto____15583;

{
var G__15591 = cljs.core.first.call(null,G__15577__15584);
var G__15592 = G__15577__15584;
node__15579 = G__15591;
G__15577__15580 = G__15592;
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
return unlisten_BANG___15588.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15589.call(this,nds,event,func,capture);
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
var G__15593__15594 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15593__15594))
{var node__15595 = cljs.core.first.call(null,G__15593__15594);
var G__15593__15596 = G__15593__15594;

while(true){
var map_func__15598 = ((function (node__15595,G__15593__15596){
return (function (p1__15574_SHARP_){
var wrapper__15597 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15574_SHARP_);

if(cljs.core.truth_(wrapper__15597))
{return wrapper__15597.unlisten(node__15595);
} else
{return goog.events.removeAll.call(null,node__15595,cljs.core.name.call(null,p1__15574_SHARP_));
}
});})(node__15595,G__15593__15596))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15598,event_list));
var temp__3698__auto____15600 = cljs.core.next.call(null,G__15593__15596);

if(cljs.core.truth_(temp__3698__auto____15600))
{var G__15593__15602 = temp__3698__auto____15600;

{
var G__15603 = cljs.core.first.call(null,G__15593__15602);
var G__15604 = G__15593__15602;
node__15595 = G__15603;
G__15593__15596 = G__15604;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15605){
var nds = cljs.core.first(arglist__15605);
var event_list = cljs.core.rest(arglist__15605);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15606 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15607 = (cljs.core.truth_(wrapper__15606)?wrapper__15606.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15608 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15608.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15609__15610 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15609__15610))
{var node__15611 = cljs.core.first.call(null,G__15609__15610);
var G__15609__15612 = G__15609__15610;

while(true){
goog.events.fireListeners.call(null,node__15611,nevent__15607,capture,event_obj__15608);
var temp__3698__auto____15613 = cljs.core.next.call(null,G__15609__15612);

if(cljs.core.truth_(temp__3698__auto____15613))
{var G__15609__15614 = temp__3698__auto____15613;

{
var G__15616 = cljs.core.first.call(null,G__15609__15614);
var G__15617 = G__15609__15614;
node__15611 = G__15616;
G__15609__15612 = G__15617;
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
