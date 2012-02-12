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
var G__15328 = parent;
var G__15329 = child.parentNode;
parent = G__15328;
child = G__15329;
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
var re__15335 = e.relatedTarget;
var this$__15336 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15338 = cljs.core.not.call(null,(re__15335 === this$__15336));

if(cljs.core.truth_(and__3546__auto____15338))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15336,re__15335));
} else
{return and__3546__auto____15338;
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
var obj__15347 = (new Object());
var wevent__15348 = cljs.core.name.call(null,wrapped_key);
var event__15349 = cljs.core.name.call(null,event_key);

obj__15347.wrapped_event = wevent__15348;
obj__15347.event = event__15349;
obj__15347.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15352 = wrapper_func.call(null,func);

callback__15352.listen = func;
callback__15352.scope = opt_scope;
callback__15352.event = event__15349;
callback__15352.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15348,callback__15352,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15348,callback__15352,capture);
}
});
obj__15347.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15360 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15348,false),goog.events.getListeners.call(null,elm,wevent__15348,true)):goog.events.getListeners.call(null,elm,wevent__15348,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15366 = obj.listener;
var lfunc__15368 = listener__15366.listen;
var scope__15370 = listener__15366.scope;
var capture__15371 = listener__15366.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15375 = (function (){var or__3548__auto____15374 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15374))
{return or__3548__auto____15374;
} else
{return cljs.core._EQ_.call(null,lfunc__15368,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15375))
{var or__3548__auto____15377 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15377))
{return or__3548__auto____15377;
} else
{return cljs.core._EQ_.call(null,scope__15370,opt_scope);
}
} else
{return and__3546__auto____15375;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15348,listener__15366,capture__15371);
} else
{return goog.events.unlisten.call(null,elm,wevent__15348,listener__15366,capture__15371);
}
} else
{return null;
}
}),listeners__15360));
});
return obj__15347;
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
var listen_BANG___15521 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15522 = (function (nds,event,func,capture){
var wrapper__15469 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15470__15471 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15470__15471))
{var node__15473 = cljs.core.first.call(null,G__15470__15471);
var G__15470__15474 = G__15470__15471;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15469)))
{goog.events.listen.call(null,node__15473,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15473,wrapper__15469,func,capture);
}
var temp__3698__auto____15477 = cljs.core.next.call(null,G__15470__15474);

if(cljs.core.truth_(temp__3698__auto____15477))
{var G__15470__15479 = temp__3698__auto____15477;

{
var G__15527 = cljs.core.first.call(null,G__15470__15479);
var G__15528 = G__15470__15479;
node__15473 = G__15527;
G__15470__15474 = G__15528;
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
return listen_BANG___15521.call(this,nds,event,func);
case  4 :
return listen_BANG___15522.call(this,nds,event,func,capture);
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
var unlisten_BANG___15548 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15549 = (function (nds,event,func,capture){
var wrapper__15536 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15537__15539 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15537__15539))
{var node__15541 = cljs.core.first.call(null,G__15537__15539);
var G__15537__15542 = G__15537__15539;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15536)))
{goog.events.unlisten.call(null,node__15541,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15536.unlisten(node__15541,func,capture);
}
var temp__3698__auto____15544 = cljs.core.next.call(null,G__15537__15542);

if(cljs.core.truth_(temp__3698__auto____15544))
{var G__15537__15545 = temp__3698__auto____15544;

{
var G__15554 = cljs.core.first.call(null,G__15537__15545);
var G__15555 = G__15537__15545;
node__15541 = G__15554;
G__15537__15542 = G__15555;
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
return unlisten_BANG___15548.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15549.call(this,nds,event,func,capture);
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
var G__15558__15560 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15558__15560))
{var node__15561 = cljs.core.first.call(null,G__15558__15560);
var G__15558__15562 = G__15558__15560;

while(true){
var map_func__15564 = ((function (node__15561,G__15558__15562){
return (function (p1__15531_SHARP_){
var wrapper__15563 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15531_SHARP_);

if(cljs.core.truth_(wrapper__15563))
{return wrapper__15563.unlisten(node__15561);
} else
{return goog.events.removeAll.call(null,node__15561,cljs.core.name.call(null,p1__15531_SHARP_));
}
});})(node__15561,G__15558__15562))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15564,event_list));
var temp__3698__auto____15565 = cljs.core.next.call(null,G__15558__15562);

if(cljs.core.truth_(temp__3698__auto____15565))
{var G__15558__15566 = temp__3698__auto____15565;

{
var G__15567 = cljs.core.first.call(null,G__15558__15566);
var G__15568 = G__15558__15566;
node__15561 = G__15567;
G__15558__15562 = G__15568;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15569){
var nds = cljs.core.first(arglist__15569);
var event_list = cljs.core.rest(arglist__15569);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15570 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15572 = (cljs.core.truth_(wrapper__15570)?wrapper__15570.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15573 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15573.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15574__15575 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15574__15575))
{var node__15576 = cljs.core.first.call(null,G__15574__15575);
var G__15574__15577 = G__15574__15575;

while(true){
goog.events.fireListeners.call(null,node__15576,nevent__15572,capture,event_obj__15573);
var temp__3698__auto____15578 = cljs.core.next.call(null,G__15574__15577);

if(cljs.core.truth_(temp__3698__auto____15578))
{var G__15574__15579 = temp__3698__auto____15578;

{
var G__15582 = cljs.core.first.call(null,G__15574__15579);
var G__15583 = G__15574__15579;
node__15576 = G__15582;
G__15574__15577 = G__15583;
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
