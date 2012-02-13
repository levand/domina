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
var G__15663 = parent;
var G__15664 = child.parentNode;
parent = G__15663;
child = G__15664;
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
var re__15668 = e.relatedTarget;
var this$__15669 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15670 = cljs.core.not.call(null,(re__15668 === this$__15669));

if(cljs.core.truth_(and__3546__auto____15670))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15669,re__15668));
} else
{return and__3546__auto____15670;
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
var obj__15676 = (new Object());
var wevent__15678 = cljs.core.name.call(null,wrapped_key);
var event__15679 = cljs.core.name.call(null,event_key);

obj__15676.wrapped_event = wevent__15678;
obj__15676.event = event__15679;
obj__15676.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15682 = wrapper_func.call(null,func);

callback__15682.listen = func;
callback__15682.scope = opt_scope;
callback__15682.event = event__15679;
callback__15682.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15678,callback__15682,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15678,callback__15682,capture);
}
});
obj__15676.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15687 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15678,false),goog.events.getListeners.call(null,elm,wevent__15678,true)):goog.events.getListeners.call(null,elm,wevent__15678,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15688 = obj.listener;
var lfunc__15689 = listener__15688.listen;
var scope__15690 = listener__15688.scope;
var capture__15691 = listener__15688.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15695 = (function (){var or__3548__auto____15692 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15692))
{return or__3548__auto____15692;
} else
{return cljs.core._EQ_.call(null,lfunc__15689,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15695))
{var or__3548__auto____15696 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15696))
{return or__3548__auto____15696;
} else
{return cljs.core._EQ_.call(null,scope__15690,opt_scope);
}
} else
{return and__3546__auto____15695;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15678,listener__15688,capture__15691);
} else
{return goog.events.unlisten.call(null,elm,wevent__15678,listener__15688,capture__15691);
}
} else
{return null;
}
}),listeners__15687));
});
return obj__15676;
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
var listen_BANG___15717 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15718 = (function (nds,event,func,capture){
var wrapper__15707 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15708__15709 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15708__15709))
{var node__15710 = cljs.core.first.call(null,G__15708__15709);
var G__15708__15711 = G__15708__15709;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15707)))
{goog.events.listen.call(null,node__15710,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15710,wrapper__15707,func,capture);
}
var temp__3698__auto____15712 = cljs.core.next.call(null,G__15708__15711);

if(cljs.core.truth_(temp__3698__auto____15712))
{var G__15708__15713 = temp__3698__auto____15712;

{
var G__15721 = cljs.core.first.call(null,G__15708__15713);
var G__15722 = G__15708__15713;
node__15710 = G__15721;
G__15708__15711 = G__15722;
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
return listen_BANG___15717.call(this,nds,event,func);
case  4 :
return listen_BANG___15718.call(this,nds,event,func,capture);
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
var unlisten_BANG___15732 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15733 = (function (nds,event,func,capture){
var wrapper__15724 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15725__15726 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15725__15726))
{var node__15728 = cljs.core.first.call(null,G__15725__15726);
var G__15725__15729 = G__15725__15726;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15724)))
{goog.events.unlisten.call(null,node__15728,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15724.unlisten(node__15728,func,capture);
}
var temp__3698__auto____15730 = cljs.core.next.call(null,G__15725__15729);

if(cljs.core.truth_(temp__3698__auto____15730))
{var G__15725__15731 = temp__3698__auto____15730;

{
var G__15735 = cljs.core.first.call(null,G__15725__15731);
var G__15736 = G__15725__15731;
node__15728 = G__15735;
G__15725__15729 = G__15736;
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
return unlisten_BANG___15732.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15733.call(this,nds,event,func,capture);
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
var G__15738__15739 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15738__15739))
{var node__15740 = cljs.core.first.call(null,G__15738__15739);
var G__15738__15741 = G__15738__15739;

while(true){
var map_func__15745 = ((function (node__15740,G__15738__15741){
return (function (p1__15723_SHARP_){
var wrapper__15743 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15723_SHARP_);

if(cljs.core.truth_(wrapper__15743))
{return wrapper__15743.unlisten(node__15740);
} else
{return goog.events.removeAll.call(null,node__15740,cljs.core.name.call(null,p1__15723_SHARP_));
}
});})(node__15740,G__15738__15741))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15745,event_list));
var temp__3698__auto____15748 = cljs.core.next.call(null,G__15738__15741);

if(cljs.core.truth_(temp__3698__auto____15748))
{var G__15738__15751 = temp__3698__auto____15748;

{
var G__15767 = cljs.core.first.call(null,G__15738__15751);
var G__15768 = G__15738__15751;
node__15740 = G__15767;
G__15738__15741 = G__15768;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15771){
var nds = cljs.core.first(arglist__15771);
var event_list = cljs.core.rest(arglist__15771);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15774 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15776 = (cljs.core.truth_(wrapper__15774)?wrapper__15774.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15778 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15778.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15780__15782 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15780__15782))
{var node__15783 = cljs.core.first.call(null,G__15780__15782);
var G__15780__15784 = G__15780__15782;

while(true){
goog.events.fireListeners.call(null,node__15783,nevent__15776,capture,event_obj__15778);
var temp__3698__auto____15788 = cljs.core.next.call(null,G__15780__15784);

if(cljs.core.truth_(temp__3698__auto____15788))
{var G__15780__15789 = temp__3698__auto____15788;

{
var G__15818 = cljs.core.first.call(null,G__15780__15789);
var G__15819 = G__15780__15789;
node__15783 = G__15818;
G__15780__15784 = G__15819;
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
