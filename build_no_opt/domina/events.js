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
var G__15334 = parent;
var G__15335 = child.parentNode;
parent = G__15334;
child = G__15335;
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
var re__15341 = e.relatedTarget;
var this$__15342 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15344 = cljs.core.not.call(null,(re__15341 === this$__15342));

if(cljs.core.truth_(and__3546__auto____15344))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15342,re__15341));
} else
{return and__3546__auto____15344;
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
var obj__15354 = (new Object());
var wevent__15355 = cljs.core.name.call(null,wrapped_key);
var event__15356 = cljs.core.name.call(null,event_key);

obj__15354.wrapped_event = wevent__15355;
obj__15354.event = event__15356;
obj__15354.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15360 = wrapper_func.call(null,func);

callback__15360.listen = func;
callback__15360.scope = opt_scope;
callback__15360.event = event__15356;
callback__15360.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15355,callback__15360,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15355,callback__15360,capture);
}
});
obj__15354.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15364 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15355,false),goog.events.getListeners.call(null,elm,wevent__15355,true)):goog.events.getListeners.call(null,elm,wevent__15355,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15365 = obj.listener;
var lfunc__15366 = listener__15365.listen;
var scope__15367 = listener__15365.scope;
var capture__15368 = listener__15365.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15370 = (function (){var or__3548__auto____15369 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15369))
{return or__3548__auto____15369;
} else
{return cljs.core._EQ_.call(null,lfunc__15366,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15370))
{var or__3548__auto____15371 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15371))
{return or__3548__auto____15371;
} else
{return cljs.core._EQ_.call(null,scope__15367,opt_scope);
}
} else
{return and__3546__auto____15370;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15355,listener__15365,capture__15368);
} else
{return goog.events.unlisten.call(null,elm,wevent__15355,listener__15365,capture__15368);
}
} else
{return null;
}
}),listeners__15364));
});
return obj__15354;
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
var listen_BANG___15393 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15394 = (function (nds,event,func,capture){
var wrapper__15385 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15386__15387 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15386__15387))
{var node__15388 = cljs.core.first.call(null,G__15386__15387);
var G__15386__15389 = G__15386__15387;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15385)))
{goog.events.listen.call(null,node__15388,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15388,wrapper__15385,func,capture);
}
var temp__3698__auto____15390 = cljs.core.next.call(null,G__15386__15389);

if(cljs.core.truth_(temp__3698__auto____15390))
{var G__15386__15391 = temp__3698__auto____15390;

{
var G__15400 = cljs.core.first.call(null,G__15386__15391);
var G__15402 = G__15386__15391;
node__15388 = G__15400;
G__15386__15389 = G__15402;
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
return listen_BANG___15393.call(this,nds,event,func);
case  4 :
return listen_BANG___15394.call(this,nds,event,func,capture);
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
var unlisten_BANG___15427 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15428 = (function (nds,event,func,capture){
var wrapper__15414 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15415__15421 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15415__15421))
{var node__15423 = cljs.core.first.call(null,G__15415__15421);
var G__15415__15424 = G__15415__15421;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15414)))
{goog.events.unlisten.call(null,node__15423,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15414.unlisten(node__15423,func,capture);
}
var temp__3698__auto____15425 = cljs.core.next.call(null,G__15415__15424);

if(cljs.core.truth_(temp__3698__auto____15425))
{var G__15415__15426 = temp__3698__auto____15425;

{
var G__15431 = cljs.core.first.call(null,G__15415__15426);
var G__15432 = G__15415__15426;
node__15423 = G__15431;
G__15415__15424 = G__15432;
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
return unlisten_BANG___15427.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15428.call(this,nds,event,func,capture);
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
var G__15440__15442 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15440__15442))
{var node__15443 = cljs.core.first.call(null,G__15440__15442);
var G__15440__15444 = G__15440__15442;

while(true){
var map_func__15450 = ((function (node__15443,G__15440__15444){
return (function (p1__15405_SHARP_){
var wrapper__15448 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15405_SHARP_);

if(cljs.core.truth_(wrapper__15448))
{return wrapper__15448.unlisten(node__15443);
} else
{return goog.events.removeAll.call(null,node__15443,cljs.core.name.call(null,p1__15405_SHARP_));
}
});})(node__15443,G__15440__15444))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15450,event_list));
var temp__3698__auto____15452 = cljs.core.next.call(null,G__15440__15444);

if(cljs.core.truth_(temp__3698__auto____15452))
{var G__15440__15454 = temp__3698__auto____15452;

{
var G__15465 = cljs.core.first.call(null,G__15440__15454);
var G__15466 = G__15440__15454;
node__15443 = G__15465;
G__15440__15444 = G__15466;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15471){
var nds = cljs.core.first(arglist__15471);
var event_list = cljs.core.rest(arglist__15471);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15477 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15479 = (cljs.core.truth_(wrapper__15477)?wrapper__15477.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15481 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15481.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15484__15485 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15484__15485))
{var node__15486 = cljs.core.first.call(null,G__15484__15485);
var G__15484__15487 = G__15484__15485;

while(true){
goog.events.fireListeners.call(null,node__15486,nevent__15479,capture,event_obj__15481);
var temp__3698__auto____15489 = cljs.core.next.call(null,G__15484__15487);

if(cljs.core.truth_(temp__3698__auto____15489))
{var G__15484__15490 = temp__3698__auto____15489;

{
var G__15498 = cljs.core.first.call(null,G__15484__15490);
var G__15499 = G__15484__15490;
node__15486 = G__15498;
G__15484__15487 = G__15499;
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
