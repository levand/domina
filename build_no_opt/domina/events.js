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
var G__15602 = parent;
var G__15603 = child.parentNode;
parent = G__15602;
child = G__15603;
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
var re__15610 = e.relatedTarget;
var this$__15612 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15615 = cljs.core.not.call(null,(re__15610 === this$__15612));

if(cljs.core.truth_(and__3546__auto____15615))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15612,re__15610));
} else
{return and__3546__auto____15615;
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
var obj__15633 = (new Object());
var wevent__15635 = cljs.core.name.call(null,wrapped_key);
var event__15636 = cljs.core.name.call(null,event_key);

obj__15633.wrapped_event = wevent__15635;
obj__15633.event = event__15636;
obj__15633.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15640 = wrapper_func.call(null,func);

callback__15640.listen = func;
callback__15640.scope = opt_scope;
callback__15640.event = event__15636;
callback__15640.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15635,callback__15640,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15635,callback__15640,capture);
}
});
obj__15633.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15644 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15635,false),goog.events.getListeners.call(null,elm,wevent__15635,true)):goog.events.getListeners.call(null,elm,wevent__15635,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15646 = obj.listener;
var lfunc__15649 = listener__15646.listen;
var scope__15650 = listener__15646.scope;
var capture__15651 = listener__15646.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15654 = (function (){var or__3548__auto____15653 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15653))
{return or__3548__auto____15653;
} else
{return cljs.core._EQ_.call(null,lfunc__15649,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15654))
{var or__3548__auto____15655 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15655))
{return or__3548__auto____15655;
} else
{return cljs.core._EQ_.call(null,scope__15650,opt_scope);
}
} else
{return and__3546__auto____15654;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15635,listener__15646,capture__15651);
} else
{return goog.events.unlisten.call(null,elm,wevent__15635,listener__15646,capture__15651);
}
} else
{return null;
}
}),listeners__15644));
});
return obj__15633;
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
var listen_BANG___15671 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15672 = (function (nds,event,func,capture){
var wrapper__15664 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15665__15666 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15665__15666))
{var node__15667 = cljs.core.first.call(null,G__15665__15666);
var G__15665__15668 = G__15665__15666;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15664)))
{goog.events.listen.call(null,node__15667,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15667,wrapper__15664,func,capture);
}
var temp__3698__auto____15669 = cljs.core.next.call(null,G__15665__15668);

if(cljs.core.truth_(temp__3698__auto____15669))
{var G__15665__15670 = temp__3698__auto____15669;

{
var G__15679 = cljs.core.first.call(null,G__15665__15670);
var G__15680 = G__15665__15670;
node__15667 = G__15679;
G__15665__15668 = G__15680;
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
return listen_BANG___15671.call(this,nds,event,func);
case  4 :
return listen_BANG___15672.call(this,nds,event,func,capture);
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
var unlisten_BANG___15697 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15698 = (function (nds,event,func,capture){
var wrapper__15688 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15689__15691 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15689__15691))
{var node__15692 = cljs.core.first.call(null,G__15689__15691);
var G__15689__15693 = G__15689__15691;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15688)))
{goog.events.unlisten.call(null,node__15692,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15688.unlisten(node__15692,func,capture);
}
var temp__3698__auto____15694 = cljs.core.next.call(null,G__15689__15693);

if(cljs.core.truth_(temp__3698__auto____15694))
{var G__15689__15695 = temp__3698__auto____15694;

{
var G__15710 = cljs.core.first.call(null,G__15689__15695);
var G__15711 = G__15689__15695;
node__15692 = G__15710;
G__15689__15693 = G__15711;
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
return unlisten_BANG___15697.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15698.call(this,nds,event,func,capture);
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
var G__15712__15713 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15712__15713))
{var node__15714 = cljs.core.first.call(null,G__15712__15713);
var G__15712__15715 = G__15712__15713;

while(true){
var map_func__15717 = ((function (node__15714,G__15712__15715){
return (function (p1__15681_SHARP_){
var wrapper__15716 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15681_SHARP_);

if(cljs.core.truth_(wrapper__15716))
{return wrapper__15716.unlisten(node__15714);
} else
{return goog.events.removeAll.call(null,node__15714,cljs.core.name.call(null,p1__15681_SHARP_));
}
});})(node__15714,G__15712__15715))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15717,event_list));
var temp__3698__auto____15718 = cljs.core.next.call(null,G__15712__15715);

if(cljs.core.truth_(temp__3698__auto____15718))
{var G__15712__15719 = temp__3698__auto____15718;

{
var G__15720 = cljs.core.first.call(null,G__15712__15719);
var G__15721 = G__15712__15719;
node__15714 = G__15720;
G__15712__15715 = G__15721;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15723){
var nds = cljs.core.first(arglist__15723);
var event_list = cljs.core.rest(arglist__15723);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15726 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15727 = (cljs.core.truth_(wrapper__15726)?wrapper__15726.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15728 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15728.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15729__15731 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15729__15731))
{var node__15732 = cljs.core.first.call(null,G__15729__15731);
var G__15729__15733 = G__15729__15731;

while(true){
goog.events.fireListeners.call(null,node__15732,nevent__15727,capture,event_obj__15728);
var temp__3698__auto____15736 = cljs.core.next.call(null,G__15729__15733);

if(cljs.core.truth_(temp__3698__auto____15736))
{var G__15729__15737 = temp__3698__auto____15736;

{
var G__15738 = cljs.core.first.call(null,G__15729__15737);
var G__15739 = G__15729__15737;
node__15732 = G__15738;
G__15729__15733 = G__15739;
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
