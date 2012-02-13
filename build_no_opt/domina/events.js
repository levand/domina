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
var G__14974 = parent;
var G__14975 = child.parentNode;
parent = G__14974;
child = G__14975;
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
var re__15056 = e.relatedTarget;
var this$__15058 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15061 = cljs.core.not.call(null,(re__15056 === this$__15058));

if(cljs.core.truth_(and__3546__auto____15061))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15058,re__15056));
} else
{return and__3546__auto____15061;
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
var obj__15067 = (new Object());
var wevent__15068 = cljs.core.name.call(null,wrapped_key);
var event__15070 = cljs.core.name.call(null,event_key);

obj__15067.wrapped_event = wevent__15068;
obj__15067.event = event__15070;
obj__15067.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15073 = wrapper_func.call(null,func);

callback__15073.listen = func;
callback__15073.scope = opt_scope;
callback__15073.event = event__15070;
callback__15073.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15068,callback__15073,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15068,callback__15073,capture);
}
});
obj__15067.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15078 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15068,false),goog.events.getListeners.call(null,elm,wevent__15068,true)):goog.events.getListeners.call(null,elm,wevent__15068,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15080 = obj.listener;
var lfunc__15081 = listener__15080.listen;
var scope__15082 = listener__15080.scope;
var capture__15084 = listener__15080.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15087 = (function (){var or__3548__auto____15086 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15086))
{return or__3548__auto____15086;
} else
{return cljs.core._EQ_.call(null,lfunc__15081,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15087))
{var or__3548__auto____15088 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15088))
{return or__3548__auto____15088;
} else
{return cljs.core._EQ_.call(null,scope__15082,opt_scope);
}
} else
{return and__3546__auto____15087;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15068,listener__15080,capture__15084);
} else
{return goog.events.unlisten.call(null,elm,wevent__15068,listener__15080,capture__15084);
}
} else
{return null;
}
}),listeners__15078));
});
return obj__15067;
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
var listen_BANG___15137 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15142 = (function (nds,event,func,capture){
var wrapper__15128 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15130__15132 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15130__15132))
{var node__15133 = cljs.core.first.call(null,G__15130__15132);
var G__15130__15134 = G__15130__15132;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15128)))
{goog.events.listen.call(null,node__15133,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15133,wrapper__15128,func,capture);
}
var temp__3698__auto____15135 = cljs.core.next.call(null,G__15130__15134);

if(cljs.core.truth_(temp__3698__auto____15135))
{var G__15130__15136 = temp__3698__auto____15135;

{
var G__15149 = cljs.core.first.call(null,G__15130__15136);
var G__15150 = G__15130__15136;
node__15133 = G__15149;
G__15130__15134 = G__15150;
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
return listen_BANG___15137.call(this,nds,event,func);
case  4 :
return listen_BANG___15142.call(this,nds,event,func,capture);
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
var unlisten_BANG___15171 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15172 = (function (nds,event,func,capture){
var wrapper__15160 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15162__15163 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15162__15163))
{var node__15164 = cljs.core.first.call(null,G__15162__15163);
var G__15162__15165 = G__15162__15163;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15160)))
{goog.events.unlisten.call(null,node__15164,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15160.unlisten(node__15164,func,capture);
}
var temp__3698__auto____15166 = cljs.core.next.call(null,G__15162__15165);

if(cljs.core.truth_(temp__3698__auto____15166))
{var G__15162__15169 = temp__3698__auto____15166;

{
var G__15193 = cljs.core.first.call(null,G__15162__15169);
var G__15194 = G__15162__15169;
node__15164 = G__15193;
G__15162__15165 = G__15194;
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
return unlisten_BANG___15171.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15172.call(this,nds,event,func,capture);
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
var G__15203__15204 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15203__15204))
{var node__15207 = cljs.core.first.call(null,G__15203__15204);
var G__15203__15208 = G__15203__15204;

while(true){
var map_func__15213 = ((function (node__15207,G__15203__15208){
return (function (p1__15156_SHARP_){
var wrapper__15212 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15156_SHARP_);

if(cljs.core.truth_(wrapper__15212))
{return wrapper__15212.unlisten(node__15207);
} else
{return goog.events.removeAll.call(null,node__15207,cljs.core.name.call(null,p1__15156_SHARP_));
}
});})(node__15207,G__15203__15208))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15213,event_list));
var temp__3698__auto____15214 = cljs.core.next.call(null,G__15203__15208);

if(cljs.core.truth_(temp__3698__auto____15214))
{var G__15203__15215 = temp__3698__auto____15214;

{
var G__15223 = cljs.core.first.call(null,G__15203__15215);
var G__15224 = G__15203__15215;
node__15207 = G__15223;
G__15203__15208 = G__15224;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15226){
var nds = cljs.core.first(arglist__15226);
var event_list = cljs.core.rest(arglist__15226);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15231 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15232 = (cljs.core.truth_(wrapper__15231)?wrapper__15231.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15233 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15233.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15234__15237 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15234__15237))
{var node__15238 = cljs.core.first.call(null,G__15234__15237);
var G__15234__15240 = G__15234__15237;

while(true){
goog.events.fireListeners.call(null,node__15238,nevent__15232,capture,event_obj__15233);
var temp__3698__auto____15241 = cljs.core.next.call(null,G__15234__15240);

if(cljs.core.truth_(temp__3698__auto____15241))
{var G__15234__15242 = temp__3698__auto____15241;

{
var G__15251 = cljs.core.first.call(null,G__15234__15242);
var G__15252 = G__15234__15242;
node__15238 = G__15251;
G__15234__15240 = G__15252;
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
