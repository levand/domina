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
var G__15158 = parent;
var G__15159 = child.parentNode;
parent = G__15158;
child = G__15159;
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
var re__15162 = e.relatedTarget;
var this$__15164 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15165 = cljs.core.not.call(null,(re__15162 === this$__15164));

if(cljs.core.truth_(and__3546__auto____15165))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15164,re__15162));
} else
{return and__3546__auto____15165;
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
var obj__15167 = (new Object());
var wevent__15168 = cljs.core.name.call(null,wrapped_key);
var event__15169 = cljs.core.name.call(null,event_key);

obj__15167.wrapped_event = wevent__15168;
obj__15167.event = event__15169;
obj__15167.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15170 = wrapper_func.call(null,func);

callback__15170.listen = func;
callback__15170.scope = opt_scope;
callback__15170.event = event__15169;
callback__15170.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15168,callback__15170,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15168,callback__15170,capture);
}
});
obj__15167.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15172 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15168,false),goog.events.getListeners.call(null,elm,wevent__15168,true)):goog.events.getListeners.call(null,elm,wevent__15168,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15175 = obj.listener;
var lfunc__15177 = listener__15175.listen;
var scope__15178 = listener__15175.scope;
var capture__15180 = listener__15175.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15182 = (function (){var or__3548__auto____15181 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15181))
{return or__3548__auto____15181;
} else
{return cljs.core._EQ_.call(null,lfunc__15177,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15182))
{var or__3548__auto____15184 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15184))
{return or__3548__auto____15184;
} else
{return cljs.core._EQ_.call(null,scope__15178,opt_scope);
}
} else
{return and__3546__auto____15182;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15168,listener__15175,capture__15180);
} else
{return goog.events.unlisten.call(null,elm,wevent__15168,listener__15175,capture__15180);
}
} else
{return null;
}
}),listeners__15172));
});
return obj__15167;
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
var listen_BANG___15252 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15253 = (function (nds,event,func,capture){
var wrapper__15231 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15232__15236 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15232__15236))
{var node__15240 = cljs.core.first.call(null,G__15232__15236);
var G__15232__15245 = G__15232__15236;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15231)))
{goog.events.listen.call(null,node__15240,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15240,wrapper__15231,func,capture);
}
var temp__3698__auto____15250 = cljs.core.next.call(null,G__15232__15245);

if(cljs.core.truth_(temp__3698__auto____15250))
{var G__15232__15251 = temp__3698__auto____15250;

{
var G__15269 = cljs.core.first.call(null,G__15232__15251);
var G__15270 = G__15232__15251;
node__15240 = G__15269;
G__15232__15245 = G__15270;
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
return listen_BANG___15252.call(this,nds,event,func);
case  4 :
return listen_BANG___15253.call(this,nds,event,func,capture);
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
var unlisten_BANG___15306 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15307 = (function (nds,event,func,capture){
var wrapper__15293 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15294__15297 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15294__15297))
{var node__15299 = cljs.core.first.call(null,G__15294__15297);
var G__15294__15300 = G__15294__15297;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15293)))
{goog.events.unlisten.call(null,node__15299,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15293.unlisten(node__15299,func,capture);
}
var temp__3698__auto____15302 = cljs.core.next.call(null,G__15294__15300);

if(cljs.core.truth_(temp__3698__auto____15302))
{var G__15294__15303 = temp__3698__auto____15302;

{
var G__15314 = cljs.core.first.call(null,G__15294__15303);
var G__15315 = G__15294__15303;
node__15299 = G__15314;
G__15294__15300 = G__15315;
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
return unlisten_BANG___15306.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15307.call(this,nds,event,func,capture);
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
var G__15319__15320 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15319__15320))
{var node__15327 = cljs.core.first.call(null,G__15319__15320);
var G__15319__15328 = G__15319__15320;

while(true){
var map_func__15330 = ((function (node__15327,G__15319__15328){
return (function (p1__15272_SHARP_){
var wrapper__15329 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15272_SHARP_);

if(cljs.core.truth_(wrapper__15329))
{return wrapper__15329.unlisten(node__15327);
} else
{return goog.events.removeAll.call(null,node__15327,cljs.core.name.call(null,p1__15272_SHARP_));
}
});})(node__15327,G__15319__15328))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15330,event_list));
var temp__3698__auto____15331 = cljs.core.next.call(null,G__15319__15328);

if(cljs.core.truth_(temp__3698__auto____15331))
{var G__15319__15332 = temp__3698__auto____15331;

{
var G__15339 = cljs.core.first.call(null,G__15319__15332);
var G__15340 = G__15319__15332;
node__15327 = G__15339;
G__15319__15328 = G__15340;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15341){
var nds = cljs.core.first(arglist__15341);
var event_list = cljs.core.rest(arglist__15341);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15345 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15346 = (cljs.core.truth_(wrapper__15345)?wrapper__15345.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15347 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15347.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15348__15352 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15348__15352))
{var node__15353 = cljs.core.first.call(null,G__15348__15352);
var G__15348__15354 = G__15348__15352;

while(true){
goog.events.fireListeners.call(null,node__15353,nevent__15346,capture,event_obj__15347);
var temp__3698__auto____15358 = cljs.core.next.call(null,G__15348__15354);

if(cljs.core.truth_(temp__3698__auto____15358))
{var G__15348__15359 = temp__3698__auto____15358;

{
var G__15366 = cljs.core.first.call(null,G__15348__15359);
var G__15368 = G__15348__15359;
node__15353 = G__15366;
G__15348__15354 = G__15368;
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
