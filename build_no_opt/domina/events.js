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
var G__15369 = parent;
var G__15370 = child.parentNode;
parent = G__15369;
child = G__15370;
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
var re__15381 = e.relatedTarget;
var this$__15382 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15383 = cljs.core.not.call(null,(re__15381 === this$__15382));

if(cljs.core.truth_(and__3546__auto____15383))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15382,re__15381));
} else
{return and__3546__auto____15383;
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
var obj__15396 = (new Object());
var wevent__15397 = cljs.core.name.call(null,wrapped_key);
var event__15398 = cljs.core.name.call(null,event_key);

obj__15396.wrapped_event = wevent__15397;
obj__15396.event = event__15398;
obj__15396.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15403 = wrapper_func.call(null,func);

callback__15403.listen = func;
callback__15403.scope = opt_scope;
callback__15403.event = event__15398;
callback__15403.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15397,callback__15403,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15397,callback__15403,capture);
}
});
obj__15396.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15410 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15397,false),goog.events.getListeners.call(null,elm,wevent__15397,true)):goog.events.getListeners.call(null,elm,wevent__15397,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15411 = obj.listener;
var lfunc__15412 = listener__15411.listen;
var scope__15414 = listener__15411.scope;
var capture__15415 = listener__15411.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15419 = (function (){var or__3548__auto____15418 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15418))
{return or__3548__auto____15418;
} else
{return cljs.core._EQ_.call(null,lfunc__15412,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15419))
{var or__3548__auto____15422 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15422))
{return or__3548__auto____15422;
} else
{return cljs.core._EQ_.call(null,scope__15414,opt_scope);
}
} else
{return and__3546__auto____15419;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15397,listener__15411,capture__15415);
} else
{return goog.events.unlisten.call(null,elm,wevent__15397,listener__15411,capture__15415);
}
} else
{return null;
}
}),listeners__15410));
});
return obj__15396;
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
var listen_BANG___15495 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15496 = (function (nds,event,func,capture){
var wrapper__15479 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15480__15482 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15480__15482))
{var node__15483 = cljs.core.first.call(null,G__15480__15482);
var G__15480__15484 = G__15480__15482;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15479)))
{goog.events.listen.call(null,node__15483,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15483,wrapper__15479,func,capture);
}
var temp__3698__auto____15487 = cljs.core.next.call(null,G__15480__15484);

if(cljs.core.truth_(temp__3698__auto____15487))
{var G__15480__15489 = temp__3698__auto____15487;

{
var G__15502 = cljs.core.first.call(null,G__15480__15489);
var G__15503 = G__15480__15489;
node__15483 = G__15502;
G__15480__15484 = G__15503;
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
return listen_BANG___15495.call(this,nds,event,func);
case  4 :
return listen_BANG___15496.call(this,nds,event,func,capture);
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
var unlisten_BANG___15538 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15539 = (function (nds,event,func,capture){
var wrapper__15527 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15528__15530 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15528__15530))
{var node__15532 = cljs.core.first.call(null,G__15528__15530);
var G__15528__15533 = G__15528__15530;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15527)))
{goog.events.unlisten.call(null,node__15532,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15527.unlisten(node__15532,func,capture);
}
var temp__3698__auto____15536 = cljs.core.next.call(null,G__15528__15533);

if(cljs.core.truth_(temp__3698__auto____15536))
{var G__15528__15537 = temp__3698__auto____15536;

{
var G__15543 = cljs.core.first.call(null,G__15528__15537);
var G__15544 = G__15528__15537;
node__15532 = G__15543;
G__15528__15533 = G__15544;
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
return unlisten_BANG___15538.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15539.call(this,nds,event,func,capture);
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
var G__15545__15546 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15545__15546))
{var node__15547 = cljs.core.first.call(null,G__15545__15546);
var G__15545__15548 = G__15545__15546;

while(true){
var map_func__15550 = ((function (node__15547,G__15545__15548){
return (function (p1__15523_SHARP_){
var wrapper__15549 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15523_SHARP_);

if(cljs.core.truth_(wrapper__15549))
{return wrapper__15549.unlisten(node__15547);
} else
{return goog.events.removeAll.call(null,node__15547,cljs.core.name.call(null,p1__15523_SHARP_));
}
});})(node__15547,G__15545__15548))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15550,event_list));
var temp__3698__auto____15551 = cljs.core.next.call(null,G__15545__15548);

if(cljs.core.truth_(temp__3698__auto____15551))
{var G__15545__15552 = temp__3698__auto____15551;

{
var G__15553 = cljs.core.first.call(null,G__15545__15552);
var G__15554 = G__15545__15552;
node__15547 = G__15553;
G__15545__15548 = G__15554;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15555){
var nds = cljs.core.first(arglist__15555);
var event_list = cljs.core.rest(arglist__15555);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15556 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15557 = (cljs.core.truth_(wrapper__15556)?wrapper__15556.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15558 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15558.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15559__15560 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15559__15560))
{var node__15561 = cljs.core.first.call(null,G__15559__15560);
var G__15559__15562 = G__15559__15560;

while(true){
goog.events.fireListeners.call(null,node__15561,nevent__15557,capture,event_obj__15558);
var temp__3698__auto____15563 = cljs.core.next.call(null,G__15559__15562);

if(cljs.core.truth_(temp__3698__auto____15563))
{var G__15559__15564 = temp__3698__auto____15563;

{
var G__15569 = cljs.core.first.call(null,G__15559__15564);
var G__15570 = G__15559__15564;
node__15561 = G__15569;
G__15559__15562 = G__15570;
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
