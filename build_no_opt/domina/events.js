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
var G__15724 = parent;
var G__15725 = child.parentNode;
parent = G__15724;
child = G__15725;
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
var re__15801 = e.relatedTarget;
var this$__15802 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15803 = cljs.core.not.call(null,(re__15801 === this$__15802));

if(cljs.core.truth_(and__3546__auto____15803))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15802,re__15801));
} else
{return and__3546__auto____15803;
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
var obj__15807 = (new Object());
var wevent__15808 = cljs.core.name.call(null,wrapped_key);
var event__15809 = cljs.core.name.call(null,event_key);

obj__15807.wrapped_event = wevent__15808;
obj__15807.event = event__15809;
obj__15807.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15810 = wrapper_func.call(null,func);

callback__15810.listen = func;
callback__15810.scope = opt_scope;
callback__15810.event = event__15809;
callback__15810.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15808,callback__15810,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15808,callback__15810,capture);
}
});
obj__15807.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15813 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15808,false),goog.events.getListeners.call(null,elm,wevent__15808,true)):goog.events.getListeners.call(null,elm,wevent__15808,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15815 = obj.listener;
var lfunc__15816 = listener__15815.listen;
var scope__15818 = listener__15815.scope;
var capture__15819 = listener__15815.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15821 = (function (){var or__3548__auto____15820 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15820))
{return or__3548__auto____15820;
} else
{return cljs.core._EQ_.call(null,lfunc__15816,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15821))
{var or__3548__auto____15822 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15822))
{return or__3548__auto____15822;
} else
{return cljs.core._EQ_.call(null,scope__15818,opt_scope);
}
} else
{return and__3546__auto____15821;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15808,listener__15815,capture__15819);
} else
{return goog.events.unlisten.call(null,elm,wevent__15808,listener__15815,capture__15819);
}
} else
{return null;
}
}),listeners__15813));
});
return obj__15807;
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
var listen_BANG___15844 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15845 = (function (nds,event,func,capture){
var wrapper__15837 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15838__15839 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15838__15839))
{var node__15840 = cljs.core.first.call(null,G__15838__15839);
var G__15838__15841 = G__15838__15839;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15837)))
{goog.events.listen.call(null,node__15840,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15840,wrapper__15837,func,capture);
}
var temp__3698__auto____15842 = cljs.core.next.call(null,G__15838__15841);

if(cljs.core.truth_(temp__3698__auto____15842))
{var G__15838__15843 = temp__3698__auto____15842;

{
var G__15847 = cljs.core.first.call(null,G__15838__15843);
var G__15848 = G__15838__15843;
node__15840 = G__15847;
G__15838__15841 = G__15848;
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
return listen_BANG___15844.call(this,nds,event,func);
case  4 :
return listen_BANG___15845.call(this,nds,event,func,capture);
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
var unlisten_BANG___15920 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15921 = (function (nds,event,func,capture){
var wrapper__15850 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15851__15852 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15851__15852))
{var node__15853 = cljs.core.first.call(null,G__15851__15852);
var G__15851__15854 = G__15851__15852;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15850)))
{goog.events.unlisten.call(null,node__15853,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15850.unlisten(node__15853,func,capture);
}
var temp__3698__auto____15855 = cljs.core.next.call(null,G__15851__15854);

if(cljs.core.truth_(temp__3698__auto____15855))
{var G__15851__15856 = temp__3698__auto____15855;

{
var G__15923 = cljs.core.first.call(null,G__15851__15856);
var G__15924 = G__15851__15856;
node__15853 = G__15923;
G__15851__15854 = G__15924;
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
return unlisten_BANG___15920.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15921.call(this,nds,event,func,capture);
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
var G__15927__15928 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15927__15928))
{var node__15929 = cljs.core.first.call(null,G__15927__15928);
var G__15927__15930 = G__15927__15928;

while(true){
var map_func__15932 = ((function (node__15929,G__15927__15930){
return (function (p1__15849_SHARP_){
var wrapper__15931 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15849_SHARP_);

if(cljs.core.truth_(wrapper__15931))
{return wrapper__15931.unlisten(node__15929);
} else
{return goog.events.removeAll.call(null,node__15929,cljs.core.name.call(null,p1__15849_SHARP_));
}
});})(node__15929,G__15927__15930))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15932,event_list));
var temp__3698__auto____15933 = cljs.core.next.call(null,G__15927__15930);

if(cljs.core.truth_(temp__3698__auto____15933))
{var G__15927__15934 = temp__3698__auto____15933;

{
var G__15937 = cljs.core.first.call(null,G__15927__15934);
var G__15938 = G__15927__15934;
node__15929 = G__15937;
G__15927__15930 = G__15938;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15939){
var nds = cljs.core.first(arglist__15939);
var event_list = cljs.core.rest(arglist__15939);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15942 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15945 = (cljs.core.truth_(wrapper__15942)?wrapper__15942.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15946 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15946.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15948__15964 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15948__15964))
{var node__15965 = cljs.core.first.call(null,G__15948__15964);
var G__15948__15966 = G__15948__15964;

while(true){
goog.events.fireListeners.call(null,node__15965,nevent__15945,capture,event_obj__15946);
var temp__3698__auto____15968 = cljs.core.next.call(null,G__15948__15966);

if(cljs.core.truth_(temp__3698__auto____15968))
{var G__15948__15970 = temp__3698__auto____15968;

{
var G__15978 = cljs.core.first.call(null,G__15948__15970);
var G__15979 = G__15948__15970;
node__15965 = G__15978;
G__15948__15966 = G__15979;
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
