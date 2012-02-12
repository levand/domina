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
var G__15647 = parent;
var G__15648 = child.parentNode;
parent = G__15647;
child = G__15648;
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
var re__15649 = e.relatedTarget;
var this$__15650 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15651 = cljs.core.not.call(null,(re__15649 === this$__15650));

if(cljs.core.truth_(and__3546__auto____15651))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15650,re__15649));
} else
{return and__3546__auto____15651;
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
var obj__15661 = (new Object());
var wevent__15663 = cljs.core.name.call(null,wrapped_key);
var event__15665 = cljs.core.name.call(null,event_key);

obj__15661.wrapped_event = wevent__15663;
obj__15661.event = event__15665;
obj__15661.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15666 = wrapper_func.call(null,func);

callback__15666.listen = func;
callback__15666.scope = opt_scope;
callback__15666.event = event__15665;
callback__15666.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15663,callback__15666,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15663,callback__15666,capture);
}
});
obj__15661.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15669 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15663,false),goog.events.getListeners.call(null,elm,wevent__15663,true)):goog.events.getListeners.call(null,elm,wevent__15663,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15671 = obj.listener;
var lfunc__15672 = listener__15671.listen;
var scope__15673 = listener__15671.scope;
var capture__15674 = listener__15671.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15676 = (function (){var or__3548__auto____15675 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15675))
{return or__3548__auto____15675;
} else
{return cljs.core._EQ_.call(null,lfunc__15672,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15676))
{var or__3548__auto____15677 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15677))
{return or__3548__auto____15677;
} else
{return cljs.core._EQ_.call(null,scope__15673,opt_scope);
}
} else
{return and__3546__auto____15676;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15663,listener__15671,capture__15674);
} else
{return goog.events.unlisten.call(null,elm,wevent__15663,listener__15671,capture__15674);
}
} else
{return null;
}
}),listeners__15669));
});
return obj__15661;
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
var listen_BANG___15702 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15703 = (function (nds,event,func,capture){
var wrapper__15687 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15688__15689 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15688__15689))
{var node__15691 = cljs.core.first.call(null,G__15688__15689);
var G__15688__15692 = G__15688__15689;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15687)))
{goog.events.listen.call(null,node__15691,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15691,wrapper__15687,func,capture);
}
var temp__3698__auto____15695 = cljs.core.next.call(null,G__15688__15692);

if(cljs.core.truth_(temp__3698__auto____15695))
{var G__15688__15698 = temp__3698__auto____15695;

{
var G__15705 = cljs.core.first.call(null,G__15688__15698);
var G__15706 = G__15688__15698;
node__15691 = G__15705;
G__15688__15692 = G__15706;
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
return listen_BANG___15702.call(this,nds,event,func);
case  4 :
return listen_BANG___15703.call(this,nds,event,func,capture);
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
var unlisten_BANG___15722 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15723 = (function (nds,event,func,capture){
var wrapper__15713 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15714__15715 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15714__15715))
{var node__15716 = cljs.core.first.call(null,G__15714__15715);
var G__15714__15717 = G__15714__15715;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15713)))
{goog.events.unlisten.call(null,node__15716,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15713.unlisten(node__15716,func,capture);
}
var temp__3698__auto____15718 = cljs.core.next.call(null,G__15714__15717);

if(cljs.core.truth_(temp__3698__auto____15718))
{var G__15714__15719 = temp__3698__auto____15718;

{
var G__15727 = cljs.core.first.call(null,G__15714__15719);
var G__15728 = G__15714__15719;
node__15716 = G__15727;
G__15714__15717 = G__15728;
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
return unlisten_BANG___15722.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15723.call(this,nds,event,func,capture);
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
var G__15792__15794 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15792__15794))
{var node__15795 = cljs.core.first.call(null,G__15792__15794);
var G__15792__15796 = G__15792__15794;

while(true){
var map_func__15800 = ((function (node__15795,G__15792__15796){
return (function (p1__15710_SHARP_){
var wrapper__15797 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15710_SHARP_);

if(cljs.core.truth_(wrapper__15797))
{return wrapper__15797.unlisten(node__15795);
} else
{return goog.events.removeAll.call(null,node__15795,cljs.core.name.call(null,p1__15710_SHARP_));
}
});})(node__15795,G__15792__15796))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15800,event_list));
var temp__3698__auto____15801 = cljs.core.next.call(null,G__15792__15796);

if(cljs.core.truth_(temp__3698__auto____15801))
{var G__15792__15804 = temp__3698__auto____15801;

{
var G__15814 = cljs.core.first.call(null,G__15792__15804);
var G__15815 = G__15792__15804;
node__15795 = G__15814;
G__15792__15796 = G__15815;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15818){
var nds = cljs.core.first(arglist__15818);
var event_list = cljs.core.rest(arglist__15818);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15819 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15820 = (cljs.core.truth_(wrapper__15819)?wrapper__15819.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15822 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15822.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15824__15825 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15824__15825))
{var node__15826 = cljs.core.first.call(null,G__15824__15825);
var G__15824__15827 = G__15824__15825;

while(true){
goog.events.fireListeners.call(null,node__15826,nevent__15820,capture,event_obj__15822);
var temp__3698__auto____15828 = cljs.core.next.call(null,G__15824__15827);

if(cljs.core.truth_(temp__3698__auto____15828))
{var G__15824__15829 = temp__3698__auto____15828;

{
var G__15830 = cljs.core.first.call(null,G__15824__15829);
var G__15831 = G__15824__15829;
node__15826 = G__15830;
G__15824__15827 = G__15831;
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
