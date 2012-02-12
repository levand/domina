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
var G__15682 = parent;
var G__15684 = child.parentNode;
parent = G__15682;
child = G__15684;
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
var re__15701 = e.relatedTarget;
var this$__15702 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15704 = cljs.core.not.call(null,(re__15701 === this$__15702));

if(cljs.core.truth_(and__3546__auto____15704))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15702,re__15701));
} else
{return and__3546__auto____15704;
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
var obj__15713 = (new Object());
var wevent__15714 = cljs.core.name.call(null,wrapped_key);
var event__15715 = cljs.core.name.call(null,event_key);

obj__15713.wrapped_event = wevent__15714;
obj__15713.event = event__15715;
obj__15713.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15717 = wrapper_func.call(null,func);

callback__15717.listen = func;
callback__15717.scope = opt_scope;
callback__15717.event = event__15715;
callback__15717.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15714,callback__15717,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15714,callback__15717,capture);
}
});
obj__15713.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15722 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15714,false),goog.events.getListeners.call(null,elm,wevent__15714,true)):goog.events.getListeners.call(null,elm,wevent__15714,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15726 = obj.listener;
var lfunc__15728 = listener__15726.listen;
var scope__15730 = listener__15726.scope;
var capture__15731 = listener__15726.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15737 = (function (){var or__3548__auto____15735 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15735))
{return or__3548__auto____15735;
} else
{return cljs.core._EQ_.call(null,lfunc__15728,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15737))
{var or__3548__auto____15740 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15740))
{return or__3548__auto____15740;
} else
{return cljs.core._EQ_.call(null,scope__15730,opt_scope);
}
} else
{return and__3546__auto____15737;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15714,listener__15726,capture__15731);
} else
{return goog.events.unlisten.call(null,elm,wevent__15714,listener__15726,capture__15731);
}
} else
{return null;
}
}),listeners__15722));
});
return obj__15713;
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
var listen_BANG___15775 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15776 = (function (nds,event,func,capture){
var wrapper__15766 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15768__15769 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15768__15769))
{var node__15770 = cljs.core.first.call(null,G__15768__15769);
var G__15768__15771 = G__15768__15769;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15766)))
{goog.events.listen.call(null,node__15770,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15770,wrapper__15766,func,capture);
}
var temp__3698__auto____15772 = cljs.core.next.call(null,G__15768__15771);

if(cljs.core.truth_(temp__3698__auto____15772))
{var G__15768__15773 = temp__3698__auto____15772;

{
var G__15780 = cljs.core.first.call(null,G__15768__15773);
var G__15781 = G__15768__15773;
node__15770 = G__15780;
G__15768__15771 = G__15781;
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
return listen_BANG___15775.call(this,nds,event,func);
case  4 :
return listen_BANG___15776.call(this,nds,event,func,capture);
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
var unlisten_BANG___15798 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15799 = (function (nds,event,func,capture){
var wrapper__15783 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15786__15787 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15786__15787))
{var node__15788 = cljs.core.first.call(null,G__15786__15787);
var G__15786__15791 = G__15786__15787;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15783)))
{goog.events.unlisten.call(null,node__15788,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15783.unlisten(node__15788,func,capture);
}
var temp__3698__auto____15794 = cljs.core.next.call(null,G__15786__15791);

if(cljs.core.truth_(temp__3698__auto____15794))
{var G__15786__15795 = temp__3698__auto____15794;

{
var G__15807 = cljs.core.first.call(null,G__15786__15795);
var G__15808 = G__15786__15795;
node__15788 = G__15807;
G__15786__15791 = G__15808;
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
return unlisten_BANG___15798.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15799.call(this,nds,event,func,capture);
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
var G__15810__15811 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15810__15811))
{var node__15812 = cljs.core.first.call(null,G__15810__15811);
var G__15810__15813 = G__15810__15811;

while(true){
var map_func__15815 = ((function (node__15812,G__15810__15813){
return (function (p1__15782_SHARP_){
var wrapper__15814 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15782_SHARP_);

if(cljs.core.truth_(wrapper__15814))
{return wrapper__15814.unlisten(node__15812);
} else
{return goog.events.removeAll.call(null,node__15812,cljs.core.name.call(null,p1__15782_SHARP_));
}
});})(node__15812,G__15810__15813))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15815,event_list));
var temp__3698__auto____15816 = cljs.core.next.call(null,G__15810__15813);

if(cljs.core.truth_(temp__3698__auto____15816))
{var G__15810__15818 = temp__3698__auto____15816;

{
var G__15825 = cljs.core.first.call(null,G__15810__15818);
var G__15826 = G__15810__15818;
node__15812 = G__15825;
G__15810__15813 = G__15826;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15827){
var nds = cljs.core.first(arglist__15827);
var event_list = cljs.core.rest(arglist__15827);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15828 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15830 = (cljs.core.truth_(wrapper__15828)?wrapper__15828.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15831 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15831.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15832__15833 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15832__15833))
{var node__15834 = cljs.core.first.call(null,G__15832__15833);
var G__15832__15836 = G__15832__15833;

while(true){
goog.events.fireListeners.call(null,node__15834,nevent__15830,capture,event_obj__15831);
var temp__3698__auto____15838 = cljs.core.next.call(null,G__15832__15836);

if(cljs.core.truth_(temp__3698__auto____15838))
{var G__15832__15839 = temp__3698__auto____15838;

{
var G__15869 = cljs.core.first.call(null,G__15832__15839);
var G__15870 = G__15832__15839;
node__15834 = G__15869;
G__15832__15836 = G__15870;
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
