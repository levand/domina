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
var G__15593 = parent;
var G__15594 = child.parentNode;
parent = G__15593;
child = G__15594;
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
var re__15599 = e.relatedTarget;
var this$__15600 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15601 = cljs.core.not.call(null,(re__15599 === this$__15600));

if(cljs.core.truth_(and__3546__auto____15601))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15600,re__15599));
} else
{return and__3546__auto____15601;
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
var obj__15605 = (new Object());
var wevent__15606 = cljs.core.name.call(null,wrapped_key);
var event__15607 = cljs.core.name.call(null,event_key);

obj__15605.wrapped_event = wevent__15606;
obj__15605.event = event__15607;
obj__15605.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15615 = wrapper_func.call(null,func);

callback__15615.listen = func;
callback__15615.scope = opt_scope;
callback__15615.event = event__15607;
callback__15615.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15606,callback__15615,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15606,callback__15615,capture);
}
});
obj__15605.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15623 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15606,false),goog.events.getListeners.call(null,elm,wevent__15606,true)):goog.events.getListeners.call(null,elm,wevent__15606,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15624 = obj.listener;
var lfunc__15625 = listener__15624.listen;
var scope__15626 = listener__15624.scope;
var capture__15628 = listener__15624.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15632 = (function (){var or__3548__auto____15631 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15631))
{return or__3548__auto____15631;
} else
{return cljs.core._EQ_.call(null,lfunc__15625,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15632))
{var or__3548__auto____15633 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15633))
{return or__3548__auto____15633;
} else
{return cljs.core._EQ_.call(null,scope__15626,opt_scope);
}
} else
{return and__3546__auto____15632;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15606,listener__15624,capture__15628);
} else
{return goog.events.unlisten.call(null,elm,wevent__15606,listener__15624,capture__15628);
}
} else
{return null;
}
}),listeners__15623));
});
return obj__15605;
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
var listen_BANG___15657 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15658 = (function (nds,event,func,capture){
var wrapper__15642 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15646__15647 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15646__15647))
{var node__15648 = cljs.core.first.call(null,G__15646__15647);
var G__15646__15649 = G__15646__15647;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15642)))
{goog.events.listen.call(null,node__15648,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15648,wrapper__15642,func,capture);
}
var temp__3698__auto____15652 = cljs.core.next.call(null,G__15646__15649);

if(cljs.core.truth_(temp__3698__auto____15652))
{var G__15646__15653 = temp__3698__auto____15652;

{
var G__15662 = cljs.core.first.call(null,G__15646__15653);
var G__15663 = G__15646__15653;
node__15648 = G__15662;
G__15646__15649 = G__15663;
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
return listen_BANG___15657.call(this,nds,event,func);
case  4 :
return listen_BANG___15658.call(this,nds,event,func,capture);
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
var unlisten_BANG___15688 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15689 = (function (nds,event,func,capture){
var wrapper__15669 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15670__15672 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15670__15672))
{var node__15675 = cljs.core.first.call(null,G__15670__15672);
var G__15670__15676 = G__15670__15672;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15669)))
{goog.events.unlisten.call(null,node__15675,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15669.unlisten(node__15675,func,capture);
}
var temp__3698__auto____15678 = cljs.core.next.call(null,G__15670__15676);

if(cljs.core.truth_(temp__3698__auto____15678))
{var G__15670__15681 = temp__3698__auto____15678;

{
var G__15695 = cljs.core.first.call(null,G__15670__15681);
var G__15696 = G__15670__15681;
node__15675 = G__15695;
G__15670__15676 = G__15696;
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
return unlisten_BANG___15688.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15689.call(this,nds,event,func,capture);
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
var G__15700__15701 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15700__15701))
{var node__15702 = cljs.core.first.call(null,G__15700__15701);
var G__15700__15703 = G__15700__15701;

while(true){
var map_func__15705 = ((function (node__15702,G__15700__15703){
return (function (p1__15665_SHARP_){
var wrapper__15704 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15665_SHARP_);

if(cljs.core.truth_(wrapper__15704))
{return wrapper__15704.unlisten(node__15702);
} else
{return goog.events.removeAll.call(null,node__15702,cljs.core.name.call(null,p1__15665_SHARP_));
}
});})(node__15702,G__15700__15703))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15705,event_list));
var temp__3698__auto____15706 = cljs.core.next.call(null,G__15700__15703);

if(cljs.core.truth_(temp__3698__auto____15706))
{var G__15700__15707 = temp__3698__auto____15706;

{
var G__15715 = cljs.core.first.call(null,G__15700__15707);
var G__15716 = G__15700__15707;
node__15702 = G__15715;
G__15700__15703 = G__15716;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15718){
var nds = cljs.core.first(arglist__15718);
var event_list = cljs.core.rest(arglist__15718);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15724 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15726 = (cljs.core.truth_(wrapper__15724)?wrapper__15724.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15761 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15761.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15762__15764 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15762__15764))
{var node__15766 = cljs.core.first.call(null,G__15762__15764);
var G__15762__15767 = G__15762__15764;

while(true){
goog.events.fireListeners.call(null,node__15766,nevent__15726,capture,event_obj__15761);
var temp__3698__auto____15769 = cljs.core.next.call(null,G__15762__15767);

if(cljs.core.truth_(temp__3698__auto____15769))
{var G__15762__15770 = temp__3698__auto____15769;

{
var G__15778 = cljs.core.first.call(null,G__15762__15770);
var G__15779 = G__15762__15770;
node__15766 = G__15778;
G__15762__15767 = G__15779;
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
