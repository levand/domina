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
var G__14950 = parent;
var G__14952 = child.parentNode;
parent = G__14950;
child = G__14952;
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
var re__14958 = e.relatedTarget;
var this$__14959 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____14961 = cljs.core.not.call(null,(re__14958 === this$__14959));

if(cljs.core.truth_(and__3546__auto____14961))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__14959,re__14958));
} else
{return and__3546__auto____14961;
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
var obj__14966 = (new Object());
var wevent__14967 = cljs.core.name.call(null,wrapped_key);
var event__14968 = cljs.core.name.call(null,event_key);

obj__14966.wrapped_event = wevent__14967;
obj__14966.event = event__14968;
obj__14966.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__14970 = wrapper_func.call(null,func);

callback__14970.listen = func;
callback__14970.scope = opt_scope;
callback__14970.event = event__14968;
callback__14970.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__14967,callback__14970,capture);
} else
{return goog.events.listen.call(null,elm,wevent__14967,callback__14970,capture);
}
});
obj__14966.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__14976 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__14967,false),goog.events.getListeners.call(null,elm,wevent__14967,true)):goog.events.getListeners.call(null,elm,wevent__14967,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__14978 = obj.listener;
var lfunc__14979 = listener__14978.listen;
var scope__14981 = listener__14978.scope;
var capture__14983 = listener__14978.capture;

if(cljs.core.truth_((function (){var and__3546__auto____14985 = (function (){var or__3548__auto____14984 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____14984))
{return or__3548__auto____14984;
} else
{return cljs.core._EQ_.call(null,lfunc__14979,func);
}
})();

if(cljs.core.truth_(and__3546__auto____14985))
{var or__3548__auto____14987 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____14987))
{return or__3548__auto____14987;
} else
{return cljs.core._EQ_.call(null,scope__14981,opt_scope);
}
} else
{return and__3546__auto____14985;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__14967,listener__14978,capture__14983);
} else
{return goog.events.unlisten.call(null,elm,wevent__14967,listener__14978,capture__14983);
}
} else
{return null;
}
}),listeners__14976));
});
return obj__14966;
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
var listen_BANG___15021 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15022 = (function (nds,event,func,capture){
var wrapper__15012 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15013__15014 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15013__15014))
{var node__15015 = cljs.core.first.call(null,G__15013__15014);
var G__15013__15016 = G__15013__15014;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15012)))
{goog.events.listen.call(null,node__15015,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15015,wrapper__15012,func,capture);
}
var temp__3698__auto____15017 = cljs.core.next.call(null,G__15013__15016);

if(cljs.core.truth_(temp__3698__auto____15017))
{var G__15013__15018 = temp__3698__auto____15017;

{
var G__15024 = cljs.core.first.call(null,G__15013__15018);
var G__15025 = G__15013__15018;
node__15015 = G__15024;
G__15013__15016 = G__15025;
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
return listen_BANG___15021.call(this,nds,event,func);
case  4 :
return listen_BANG___15022.call(this,nds,event,func,capture);
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
var unlisten_BANG___15036 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15037 = (function (nds,event,func,capture){
var wrapper__15027 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15028__15029 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15028__15029))
{var node__15030 = cljs.core.first.call(null,G__15028__15029);
var G__15028__15031 = G__15028__15029;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15027)))
{goog.events.unlisten.call(null,node__15030,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15027.unlisten(node__15030,func,capture);
}
var temp__3698__auto____15032 = cljs.core.next.call(null,G__15028__15031);

if(cljs.core.truth_(temp__3698__auto____15032))
{var G__15028__15033 = temp__3698__auto____15032;

{
var G__15043 = cljs.core.first.call(null,G__15028__15033);
var G__15044 = G__15028__15033;
node__15030 = G__15043;
G__15028__15031 = G__15044;
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
return unlisten_BANG___15036.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15037.call(this,nds,event,func,capture);
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
var G__15045__15048 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15045__15048))
{var node__15049 = cljs.core.first.call(null,G__15045__15048);
var G__15045__15050 = G__15045__15048;

while(true){
var map_func__15054 = ((function (node__15049,G__15045__15050){
return (function (p1__15026_SHARP_){
var wrapper__15051 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15026_SHARP_);

if(cljs.core.truth_(wrapper__15051))
{return wrapper__15051.unlisten(node__15049);
} else
{return goog.events.removeAll.call(null,node__15049,cljs.core.name.call(null,p1__15026_SHARP_));
}
});})(node__15049,G__15045__15050))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15054,event_list));
var temp__3698__auto____15056 = cljs.core.next.call(null,G__15045__15050);

if(cljs.core.truth_(temp__3698__auto____15056))
{var G__15045__15057 = temp__3698__auto____15056;

{
var G__15059 = cljs.core.first.call(null,G__15045__15057);
var G__15069 = G__15045__15057;
node__15049 = G__15059;
G__15045__15050 = G__15069;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15072){
var nds = cljs.core.first(arglist__15072);
var event_list = cljs.core.rest(arglist__15072);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15076 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15077 = (cljs.core.truth_(wrapper__15076)?wrapper__15076.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15079 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15079.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15080__15083 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15080__15083))
{var node__15084 = cljs.core.first.call(null,G__15080__15083);
var G__15080__15085 = G__15080__15083;

while(true){
goog.events.fireListeners.call(null,node__15084,nevent__15077,capture,event_obj__15079);
var temp__3698__auto____15086 = cljs.core.next.call(null,G__15080__15085);

if(cljs.core.truth_(temp__3698__auto____15086))
{var G__15080__15087 = temp__3698__auto____15086;

{
var G__15091 = cljs.core.first.call(null,G__15080__15087);
var G__15092 = G__15080__15087;
node__15084 = G__15091;
G__15080__15085 = G__15092;
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
