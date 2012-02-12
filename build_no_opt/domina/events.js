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
var G__15665 = parent;
var G__15666 = child.parentNode;
parent = G__15665;
child = G__15666;
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
var re__15682 = e.relatedTarget;
var this$__15683 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15685 = cljs.core.not.call(null,(re__15682 === this$__15683));

if(cljs.core.truth_(and__3546__auto____15685))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15683,re__15682));
} else
{return and__3546__auto____15685;
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
var obj__15691 = (new Object());
var wevent__15692 = cljs.core.name.call(null,wrapped_key);
var event__15693 = cljs.core.name.call(null,event_key);

obj__15691.wrapped_event = wevent__15692;
obj__15691.event = event__15693;
obj__15691.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15698 = wrapper_func.call(null,func);

callback__15698.listen = func;
callback__15698.scope = opt_scope;
callback__15698.event = event__15693;
callback__15698.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15692,callback__15698,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15692,callback__15698,capture);
}
});
obj__15691.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15705 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15692,false),goog.events.getListeners.call(null,elm,wevent__15692,true)):goog.events.getListeners.call(null,elm,wevent__15692,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15706 = obj.listener;
var lfunc__15707 = listener__15706.listen;
var scope__15708 = listener__15706.scope;
var capture__15709 = listener__15706.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15713 = (function (){var or__3548__auto____15712 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15712))
{return or__3548__auto____15712;
} else
{return cljs.core._EQ_.call(null,lfunc__15707,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15713))
{var or__3548__auto____15714 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15714))
{return or__3548__auto____15714;
} else
{return cljs.core._EQ_.call(null,scope__15708,opt_scope);
}
} else
{return and__3546__auto____15713;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15692,listener__15706,capture__15709);
} else
{return goog.events.unlisten.call(null,elm,wevent__15692,listener__15706,capture__15709);
}
} else
{return null;
}
}),listeners__15705));
});
return obj__15691;
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
var listen_BANG___15758 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15759 = (function (nds,event,func,capture){
var wrapper__15747 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15748__15749 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15748__15749))
{var node__15752 = cljs.core.first.call(null,G__15748__15749);
var G__15748__15753 = G__15748__15749;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15747)))
{goog.events.listen.call(null,node__15752,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15752,wrapper__15747,func,capture);
}
var temp__3698__auto____15754 = cljs.core.next.call(null,G__15748__15753);

if(cljs.core.truth_(temp__3698__auto____15754))
{var G__15748__15755 = temp__3698__auto____15754;

{
var G__15764 = cljs.core.first.call(null,G__15748__15755);
var G__15765 = G__15748__15755;
node__15752 = G__15764;
G__15748__15753 = G__15765;
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
return listen_BANG___15758.call(this,nds,event,func);
case  4 :
return listen_BANG___15759.call(this,nds,event,func,capture);
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
var unlisten_BANG___15794 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15795 = (function (nds,event,func,capture){
var wrapper__15781 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15782__15783 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15782__15783))
{var node__15784 = cljs.core.first.call(null,G__15782__15783);
var G__15782__15785 = G__15782__15783;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15781)))
{goog.events.unlisten.call(null,node__15784,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15781.unlisten(node__15784,func,capture);
}
var temp__3698__auto____15787 = cljs.core.next.call(null,G__15782__15785);

if(cljs.core.truth_(temp__3698__auto____15787))
{var G__15782__15790 = temp__3698__auto____15787;

{
var G__15798 = cljs.core.first.call(null,G__15782__15790);
var G__15801 = G__15782__15790;
node__15784 = G__15798;
G__15782__15785 = G__15801;
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
return unlisten_BANG___15794.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15795.call(this,nds,event,func,capture);
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
var G__15805__15806 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15805__15806))
{var node__15807 = cljs.core.first.call(null,G__15805__15806);
var G__15805__15808 = G__15805__15806;

while(true){
var map_func__15813 = ((function (node__15807,G__15805__15808){
return (function (p1__15780_SHARP_){
var wrapper__15810 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15780_SHARP_);

if(cljs.core.truth_(wrapper__15810))
{return wrapper__15810.unlisten(node__15807);
} else
{return goog.events.removeAll.call(null,node__15807,cljs.core.name.call(null,p1__15780_SHARP_));
}
});})(node__15807,G__15805__15808))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15813,event_list));
var temp__3698__auto____15815 = cljs.core.next.call(null,G__15805__15808);

if(cljs.core.truth_(temp__3698__auto____15815))
{var G__15805__15818 = temp__3698__auto____15815;

{
var G__15827 = cljs.core.first.call(null,G__15805__15818);
var G__15828 = G__15805__15818;
node__15807 = G__15827;
G__15805__15808 = G__15828;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15831){
var nds = cljs.core.first(arglist__15831);
var event_list = cljs.core.rest(arglist__15831);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15837 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15838 = (cljs.core.truth_(wrapper__15837)?wrapper__15837.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15839 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15839.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15840__15841 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15840__15841))
{var node__15842 = cljs.core.first.call(null,G__15840__15841);
var G__15840__15843 = G__15840__15841;

while(true){
goog.events.fireListeners.call(null,node__15842,nevent__15838,capture,event_obj__15839);
var temp__3698__auto____15846 = cljs.core.next.call(null,G__15840__15843);

if(cljs.core.truth_(temp__3698__auto____15846))
{var G__15840__15847 = temp__3698__auto____15846;

{
var G__15849 = cljs.core.first.call(null,G__15840__15847);
var G__15850 = G__15840__15847;
node__15842 = G__15849;
G__15840__15843 = G__15850;
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
