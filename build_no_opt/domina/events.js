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
var G__15220 = parent;
var G__15221 = child.parentNode;
parent = G__15220;
child = G__15221;
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
var re__15228 = e.relatedTarget;
var this$__15229 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15231 = cljs.core.not.call(null,(re__15228 === this$__15229));

if(cljs.core.truth_(and__3546__auto____15231))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15229,re__15228));
} else
{return and__3546__auto____15231;
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
var obj__15239 = (new Object());
var wevent__15240 = cljs.core.name.call(null,wrapped_key);
var event__15241 = cljs.core.name.call(null,event_key);

obj__15239.wrapped_event = wevent__15240;
obj__15239.event = event__15241;
obj__15239.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15242 = wrapper_func.call(null,func);

callback__15242.listen = func;
callback__15242.scope = opt_scope;
callback__15242.event = event__15241;
callback__15242.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15240,callback__15242,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15240,callback__15242,capture);
}
});
obj__15239.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15244 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15240,false),goog.events.getListeners.call(null,elm,wevent__15240,true)):goog.events.getListeners.call(null,elm,wevent__15240,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15245 = obj.listener;
var lfunc__15246 = listener__15245.listen;
var scope__15247 = listener__15245.scope;
var capture__15249 = listener__15245.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15256 = (function (){var or__3548__auto____15252 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15252))
{return or__3548__auto____15252;
} else
{return cljs.core._EQ_.call(null,lfunc__15246,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15256))
{var or__3548__auto____15257 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15257))
{return or__3548__auto____15257;
} else
{return cljs.core._EQ_.call(null,scope__15247,opt_scope);
}
} else
{return and__3546__auto____15256;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15240,listener__15245,capture__15249);
} else
{return goog.events.unlisten.call(null,elm,wevent__15240,listener__15245,capture__15249);
}
} else
{return null;
}
}),listeners__15244));
});
return obj__15239;
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
var listen_BANG___15339 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15340 = (function (nds,event,func,capture){
var wrapper__15319 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15320__15322 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15320__15322))
{var node__15324 = cljs.core.first.call(null,G__15320__15322);
var G__15320__15325 = G__15320__15322;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15319)))
{goog.events.listen.call(null,node__15324,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15324,wrapper__15319,func,capture);
}
var temp__3698__auto____15328 = cljs.core.next.call(null,G__15320__15325);

if(cljs.core.truth_(temp__3698__auto____15328))
{var G__15320__15331 = temp__3698__auto____15328;

{
var G__15352 = cljs.core.first.call(null,G__15320__15331);
var G__15353 = G__15320__15331;
node__15324 = G__15352;
G__15320__15325 = G__15353;
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
return listen_BANG___15339.call(this,nds,event,func);
case  4 :
return listen_BANG___15340.call(this,nds,event,func,capture);
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
var unlisten_BANG___15375 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15376 = (function (nds,event,func,capture){
var wrapper__15361 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15362__15363 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15362__15363))
{var node__15365 = cljs.core.first.call(null,G__15362__15363);
var G__15362__15366 = G__15362__15363;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15361)))
{goog.events.unlisten.call(null,node__15365,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15361.unlisten(node__15365,func,capture);
}
var temp__3698__auto____15370 = cljs.core.next.call(null,G__15362__15366);

if(cljs.core.truth_(temp__3698__auto____15370))
{var G__15362__15372 = temp__3698__auto____15370;

{
var G__15382 = cljs.core.first.call(null,G__15362__15372);
var G__15384 = G__15362__15372;
node__15365 = G__15382;
G__15362__15366 = G__15384;
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
return unlisten_BANG___15375.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15376.call(this,nds,event,func,capture);
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
var G__15408__15411 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15408__15411))
{var node__15413 = cljs.core.first.call(null,G__15408__15411);
var G__15408__15415 = G__15408__15411;

while(true){
var map_func__15417 = ((function (node__15413,G__15408__15415){
return (function (p1__15355_SHARP_){
var wrapper__15416 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15355_SHARP_);

if(cljs.core.truth_(wrapper__15416))
{return wrapper__15416.unlisten(node__15413);
} else
{return goog.events.removeAll.call(null,node__15413,cljs.core.name.call(null,p1__15355_SHARP_));
}
});})(node__15413,G__15408__15415))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15417,event_list));
var temp__3698__auto____15418 = cljs.core.next.call(null,G__15408__15415);

if(cljs.core.truth_(temp__3698__auto____15418))
{var G__15408__15422 = temp__3698__auto____15418;

{
var G__15430 = cljs.core.first.call(null,G__15408__15422);
var G__15431 = G__15408__15422;
node__15413 = G__15430;
G__15408__15415 = G__15431;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15433){
var nds = cljs.core.first(arglist__15433);
var event_list = cljs.core.rest(arglist__15433);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15435 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15442 = (cljs.core.truth_(wrapper__15435)?wrapper__15435.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15443 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15443.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15444__15445 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15444__15445))
{var node__15447 = cljs.core.first.call(null,G__15444__15445);
var G__15444__15448 = G__15444__15445;

while(true){
goog.events.fireListeners.call(null,node__15447,nevent__15442,capture,event_obj__15443);
var temp__3698__auto____15450 = cljs.core.next.call(null,G__15444__15448);

if(cljs.core.truth_(temp__3698__auto____15450))
{var G__15444__15452 = temp__3698__auto____15450;

{
var G__15461 = cljs.core.first.call(null,G__15444__15452);
var G__15462 = G__15444__15452;
node__15447 = G__15461;
G__15444__15448 = G__15462;
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
