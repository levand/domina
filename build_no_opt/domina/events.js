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
var G__15877 = parent;
var G__15878 = child.parentNode;
parent = G__15877;
child = G__15878;
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
var re__15880 = e.relatedTarget;
var this$__15881 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15882 = cljs.core.not.call(null,(re__15880 === this$__15881));

if(cljs.core.truth_(and__3546__auto____15882))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15881,re__15880));
} else
{return and__3546__auto____15882;
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
var obj__15888 = (new Object());
var wevent__15889 = cljs.core.name.call(null,wrapped_key);
var event__15890 = cljs.core.name.call(null,event_key);

obj__15888.wrapped_event = wevent__15889;
obj__15888.event = event__15890;
obj__15888.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15892 = wrapper_func.call(null,func);

callback__15892.listen = func;
callback__15892.scope = opt_scope;
callback__15892.event = event__15890;
callback__15892.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15889,callback__15892,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15889,callback__15892,capture);
}
});
obj__15888.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15893 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15889,false),goog.events.getListeners.call(null,elm,wevent__15889,true)):goog.events.getListeners.call(null,elm,wevent__15889,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15898 = obj.listener;
var lfunc__15899 = listener__15898.listen;
var scope__15901 = listener__15898.scope;
var capture__15902 = listener__15898.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15904 = (function (){var or__3548__auto____15903 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15903))
{return or__3548__auto____15903;
} else
{return cljs.core._EQ_.call(null,lfunc__15899,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15904))
{var or__3548__auto____15905 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15905))
{return or__3548__auto____15905;
} else
{return cljs.core._EQ_.call(null,scope__15901,opt_scope);
}
} else
{return and__3546__auto____15904;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15889,listener__15898,capture__15902);
} else
{return goog.events.unlisten.call(null,elm,wevent__15889,listener__15898,capture__15902);
}
} else
{return null;
}
}),listeners__15893));
});
return obj__15888;
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
var listen_BANG___15940 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15941 = (function (nds,event,func,capture){
var wrapper__15932 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15933__15934 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15933__15934))
{var node__15935 = cljs.core.first.call(null,G__15933__15934);
var G__15933__15936 = G__15933__15934;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15932)))
{goog.events.listen.call(null,node__15935,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15935,wrapper__15932,func,capture);
}
var temp__3698__auto____15937 = cljs.core.next.call(null,G__15933__15936);

if(cljs.core.truth_(temp__3698__auto____15937))
{var G__15933__15938 = temp__3698__auto____15937;

{
var G__15950 = cljs.core.first.call(null,G__15933__15938);
var G__15951 = G__15933__15938;
node__15935 = G__15950;
G__15933__15936 = G__15951;
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
return listen_BANG___15940.call(this,nds,event,func);
case  4 :
return listen_BANG___15941.call(this,nds,event,func,capture);
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
var unlisten_BANG___15970 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15971 = (function (nds,event,func,capture){
var wrapper__15958 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15959__15961 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15959__15961))
{var node__15962 = cljs.core.first.call(null,G__15959__15961);
var G__15959__15963 = G__15959__15961;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15958)))
{goog.events.unlisten.call(null,node__15962,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15958.unlisten(node__15962,func,capture);
}
var temp__3698__auto____15965 = cljs.core.next.call(null,G__15959__15963);

if(cljs.core.truth_(temp__3698__auto____15965))
{var G__15959__15966 = temp__3698__auto____15965;

{
var G__15975 = cljs.core.first.call(null,G__15959__15966);
var G__15976 = G__15959__15966;
node__15962 = G__15975;
G__15959__15963 = G__15976;
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
return unlisten_BANG___15970.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15971.call(this,nds,event,func,capture);
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
var G__15981__15984 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15981__15984))
{var node__15986 = cljs.core.first.call(null,G__15981__15984);
var G__15981__15987 = G__15981__15984;

while(true){
var map_func__15996 = ((function (node__15986,G__15981__15987){
return (function (p1__15955_SHARP_){
var wrapper__15993 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15955_SHARP_);

if(cljs.core.truth_(wrapper__15993))
{return wrapper__15993.unlisten(node__15986);
} else
{return goog.events.removeAll.call(null,node__15986,cljs.core.name.call(null,p1__15955_SHARP_));
}
});})(node__15986,G__15981__15987))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15996,event_list));
var temp__3698__auto____15997 = cljs.core.next.call(null,G__15981__15987);

if(cljs.core.truth_(temp__3698__auto____15997))
{var G__15981__16008 = temp__3698__auto____15997;

{
var G__16015 = cljs.core.first.call(null,G__15981__16008);
var G__16016 = G__15981__16008;
node__15986 = G__16015;
G__15981__15987 = G__16016;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16017){
var nds = cljs.core.first(arglist__16017);
var event_list = cljs.core.rest(arglist__16017);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__16023 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__16024 = (cljs.core.truth_(wrapper__16023)?wrapper__16023.wrapped_event:cljs.core.name.call(null,event));
var event_obj__16026 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__16026.relatedTarget = event_map.call(null,"﷐'related-target");
var G__16027__16028 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__16027__16028))
{var node__16029 = cljs.core.first.call(null,G__16027__16028);
var G__16027__16030 = G__16027__16028;

while(true){
goog.events.fireListeners.call(null,node__16029,nevent__16024,capture,event_obj__16026);
var temp__3698__auto____16036 = cljs.core.next.call(null,G__16027__16030);

if(cljs.core.truth_(temp__3698__auto____16036))
{var G__16027__16037 = temp__3698__auto____16036;

{
var G__16040 = cljs.core.first.call(null,G__16027__16037);
var G__16041 = G__16027__16037;
node__16029 = G__16040;
G__16027__16030 = G__16041;
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
