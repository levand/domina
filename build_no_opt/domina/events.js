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
var G__14599 = parent;
var G__14600 = child.parentNode;
parent = G__14599;
child = G__14600;
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
var re__14606 = e.relatedTarget;
var this$__14608 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____14609 = cljs.core.not.call(null,(re__14606 === this$__14608));

if(cljs.core.truth_(and__3546__auto____14609))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__14608,re__14606));
} else
{return and__3546__auto____14609;
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
var obj__14613 = (new Object());
var wevent__14614 = cljs.core.name.call(null,wrapped_key);
var event__14615 = cljs.core.name.call(null,event_key);

obj__14613.wrapped_event = wevent__14614;
obj__14613.event = event__14615;
obj__14613.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__14616 = wrapper_func.call(null,func);

callback__14616.listen = func;
callback__14616.scope = opt_scope;
callback__14616.event = event__14615;
callback__14616.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__14614,callback__14616,capture);
} else
{return goog.events.listen.call(null,elm,wevent__14614,callback__14616,capture);
}
});
obj__14613.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__14617 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__14614,false),goog.events.getListeners.call(null,elm,wevent__14614,true)):goog.events.getListeners.call(null,elm,wevent__14614,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__14618 = obj.listener;
var lfunc__14619 = listener__14618.listen;
var scope__14620 = listener__14618.scope;
var capture__14621 = listener__14618.capture;

if(cljs.core.truth_((function (){var and__3546__auto____14623 = (function (){var or__3548__auto____14622 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____14622))
{return or__3548__auto____14622;
} else
{return cljs.core._EQ_.call(null,lfunc__14619,func);
}
})();

if(cljs.core.truth_(and__3546__auto____14623))
{var or__3548__auto____14624 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____14624))
{return or__3548__auto____14624;
} else
{return cljs.core._EQ_.call(null,scope__14620,opt_scope);
}
} else
{return and__3546__auto____14623;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__14614,listener__14618,capture__14621);
} else
{return goog.events.unlisten.call(null,elm,wevent__14614,listener__14618,capture__14621);
}
} else
{return null;
}
}),listeners__14617));
});
return obj__14613;
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
var listen_BANG___14635 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___14636 = (function (nds,event,func,capture){
var wrapper__14628 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__14629__14630 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14629__14630))
{var node__14631 = cljs.core.first.call(null,G__14629__14630);
var G__14629__14632 = G__14629__14630;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__14628)))
{goog.events.listen.call(null,node__14631,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__14631,wrapper__14628,func,capture);
}
var temp__3698__auto____14633 = cljs.core.next.call(null,G__14629__14632);

if(cljs.core.truth_(temp__3698__auto____14633))
{var G__14629__14634 = temp__3698__auto____14633;

{
var G__14638 = cljs.core.first.call(null,G__14629__14634);
var G__14639 = G__14629__14634;
node__14631 = G__14638;
G__14629__14632 = G__14639;
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
return listen_BANG___14635.call(this,nds,event,func);
case  4 :
return listen_BANG___14636.call(this,nds,event,func,capture);
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
var unlisten_BANG___14666 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___14667 = (function (nds,event,func,capture){
var wrapper__14646 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__14648__14649 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14648__14649))
{var node__14650 = cljs.core.first.call(null,G__14648__14649);
var G__14648__14651 = G__14648__14649;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__14646)))
{goog.events.unlisten.call(null,node__14650,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__14646.unlisten(node__14650,func,capture);
}
var temp__3698__auto____14661 = cljs.core.next.call(null,G__14648__14651);

if(cljs.core.truth_(temp__3698__auto____14661))
{var G__14648__14663 = temp__3698__auto____14661;

{
var G__14669 = cljs.core.first.call(null,G__14648__14663);
var G__14670 = G__14648__14663;
node__14650 = G__14669;
G__14648__14651 = G__14670;
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
return unlisten_BANG___14666.call(this,nds,event,func);
case  4 :
return unlisten_BANG___14667.call(this,nds,event,func,capture);
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
var G__14676__14677 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14676__14677))
{var node__14679 = cljs.core.first.call(null,G__14676__14677);
var G__14676__14680 = G__14676__14677;

while(true){
var map_func__14683 = ((function (node__14679,G__14676__14680){
return (function (p1__14641_SHARP_){
var wrapper__14682 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__14641_SHARP_);

if(cljs.core.truth_(wrapper__14682))
{return wrapper__14682.unlisten(node__14679);
} else
{return goog.events.removeAll.call(null,node__14679,cljs.core.name.call(null,p1__14641_SHARP_));
}
});})(node__14679,G__14676__14680))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__14683,event_list));
var temp__3698__auto____14687 = cljs.core.next.call(null,G__14676__14680);

if(cljs.core.truth_(temp__3698__auto____14687))
{var G__14676__14688 = temp__3698__auto____14687;

{
var G__14742 = cljs.core.first.call(null,G__14676__14688);
var G__14743 = G__14676__14688;
node__14679 = G__14742;
G__14676__14680 = G__14743;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14746){
var nds = cljs.core.first(arglist__14746);
var event_list = cljs.core.rest(arglist__14746);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__14757 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__14758 = (cljs.core.truth_(wrapper__14757)?wrapper__14757.wrapped_event:cljs.core.name.call(null,event));
var event_obj__14761 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__14761.relatedTarget = event_map.call(null,"﷐'related-target");
var G__14762__14764 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14762__14764))
{var node__14765 = cljs.core.first.call(null,G__14762__14764);
var G__14762__14766 = G__14762__14764;

while(true){
goog.events.fireListeners.call(null,node__14765,nevent__14758,capture,event_obj__14761);
var temp__3698__auto____14767 = cljs.core.next.call(null,G__14762__14766);

if(cljs.core.truth_(temp__3698__auto____14767))
{var G__14762__14768 = temp__3698__auto____14767;

{
var G__14774 = cljs.core.first.call(null,G__14762__14768);
var G__14775 = G__14762__14768;
node__14765 = G__14774;
G__14762__14766 = G__14775;
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
