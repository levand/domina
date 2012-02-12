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
var G__15361 = parent;
var G__15362 = child.parentNode;
parent = G__15361;
child = G__15362;
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
var re__15369 = e.relatedTarget;
var this$__15370 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15371 = cljs.core.not.call(null,(re__15369 === this$__15370));

if(cljs.core.truth_(and__3546__auto____15371))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15370,re__15369));
} else
{return and__3546__auto____15371;
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
var obj__15379 = (new Object());
var wevent__15380 = cljs.core.name.call(null,wrapped_key);
var event__15381 = cljs.core.name.call(null,event_key);

obj__15379.wrapped_event = wevent__15380;
obj__15379.event = event__15381;
obj__15379.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15384 = wrapper_func.call(null,func);

callback__15384.listen = func;
callback__15384.scope = opt_scope;
callback__15384.event = event__15381;
callback__15384.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15380,callback__15384,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15380,callback__15384,capture);
}
});
obj__15379.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15392 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15380,false),goog.events.getListeners.call(null,elm,wevent__15380,true)):goog.events.getListeners.call(null,elm,wevent__15380,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15395 = obj.listener;
var lfunc__15396 = listener__15395.listen;
var scope__15397 = listener__15395.scope;
var capture__15398 = listener__15395.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15405 = (function (){var or__3548__auto____15403 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15403))
{return or__3548__auto____15403;
} else
{return cljs.core._EQ_.call(null,lfunc__15396,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15405))
{var or__3548__auto____15407 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15407))
{return or__3548__auto____15407;
} else
{return cljs.core._EQ_.call(null,scope__15397,opt_scope);
}
} else
{return and__3546__auto____15405;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15380,listener__15395,capture__15398);
} else
{return goog.events.unlisten.call(null,elm,wevent__15380,listener__15395,capture__15398);
}
} else
{return null;
}
}),listeners__15392));
});
return obj__15379;
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
var listen_BANG___15464 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15465 = (function (nds,event,func,capture){
var wrapper__15445 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15447__15449 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15447__15449))
{var node__15451 = cljs.core.first.call(null,G__15447__15449);
var G__15447__15452 = G__15447__15449;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15445)))
{goog.events.listen.call(null,node__15451,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15451,wrapper__15445,func,capture);
}
var temp__3698__auto____15460 = cljs.core.next.call(null,G__15447__15452);

if(cljs.core.truth_(temp__3698__auto____15460))
{var G__15447__15462 = temp__3698__auto____15460;

{
var G__15471 = cljs.core.first.call(null,G__15447__15462);
var G__15472 = G__15447__15462;
node__15451 = G__15471;
G__15447__15452 = G__15472;
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
return listen_BANG___15464.call(this,nds,event,func);
case  4 :
return listen_BANG___15465.call(this,nds,event,func,capture);
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
var unlisten_BANG___15495 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15496 = (function (nds,event,func,capture){
var wrapper__15480 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15481__15482 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15481__15482))
{var node__15485 = cljs.core.first.call(null,G__15481__15482);
var G__15481__15486 = G__15481__15482;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15480)))
{goog.events.unlisten.call(null,node__15485,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15480.unlisten(node__15485,func,capture);
}
var temp__3698__auto____15487 = cljs.core.next.call(null,G__15481__15486);

if(cljs.core.truth_(temp__3698__auto____15487))
{var G__15481__15490 = temp__3698__auto____15487;

{
var G__15507 = cljs.core.first.call(null,G__15481__15490);
var G__15508 = G__15481__15490;
node__15485 = G__15507;
G__15481__15486 = G__15508;
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
return unlisten_BANG___15495.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15496.call(this,nds,event,func,capture);
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
var G__15518__15519 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15518__15519))
{var node__15521 = cljs.core.first.call(null,G__15518__15519);
var G__15518__15522 = G__15518__15519;

while(true){
var map_func__15526 = ((function (node__15521,G__15518__15522){
return (function (p1__15476_SHARP_){
var wrapper__15524 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15476_SHARP_);

if(cljs.core.truth_(wrapper__15524))
{return wrapper__15524.unlisten(node__15521);
} else
{return goog.events.removeAll.call(null,node__15521,cljs.core.name.call(null,p1__15476_SHARP_));
}
});})(node__15521,G__15518__15522))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15526,event_list));
var temp__3698__auto____15528 = cljs.core.next.call(null,G__15518__15522);

if(cljs.core.truth_(temp__3698__auto____15528))
{var G__15518__15529 = temp__3698__auto____15528;

{
var G__15534 = cljs.core.first.call(null,G__15518__15529);
var G__15535 = G__15518__15529;
node__15521 = G__15534;
G__15518__15522 = G__15535;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15537){
var nds = cljs.core.first(arglist__15537);
var event_list = cljs.core.rest(arglist__15537);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15541 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15543 = (cljs.core.truth_(wrapper__15541)?wrapper__15541.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15545 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15545.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15548__15551 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15548__15551))
{var node__15555 = cljs.core.first.call(null,G__15548__15551);
var G__15548__15556 = G__15548__15551;

while(true){
goog.events.fireListeners.call(null,node__15555,nevent__15543,capture,event_obj__15545);
var temp__3698__auto____15559 = cljs.core.next.call(null,G__15548__15556);

if(cljs.core.truth_(temp__3698__auto____15559))
{var G__15548__15562 = temp__3698__auto____15559;

{
var G__15569 = cljs.core.first.call(null,G__15548__15562);
var G__15572 = G__15548__15562;
node__15555 = G__15569;
G__15548__15556 = G__15572;
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
