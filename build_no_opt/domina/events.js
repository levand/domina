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
var G__15476 = parent;
var G__15477 = child.parentNode;
parent = G__15476;
child = G__15477;
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
var re__15483 = e.relatedTarget;
var this$__15485 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15488 = cljs.core.not.call(null,(re__15483 === this$__15485));

if(cljs.core.truth_(and__3546__auto____15488))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15485,re__15483));
} else
{return and__3546__auto____15488;
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
var obj__15491 = (new Object());
var wevent__15492 = cljs.core.name.call(null,wrapped_key);
var event__15493 = cljs.core.name.call(null,event_key);

obj__15491.wrapped_event = wevent__15492;
obj__15491.event = event__15493;
obj__15491.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15494 = wrapper_func.call(null,func);

callback__15494.listen = func;
callback__15494.scope = opt_scope;
callback__15494.event = event__15493;
callback__15494.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15492,callback__15494,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15492,callback__15494,capture);
}
});
obj__15491.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15498 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15492,false),goog.events.getListeners.call(null,elm,wevent__15492,true)):goog.events.getListeners.call(null,elm,wevent__15492,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15500 = obj.listener;
var lfunc__15501 = listener__15500.listen;
var scope__15503 = listener__15500.scope;
var capture__15504 = listener__15500.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15506 = (function (){var or__3548__auto____15505 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15505))
{return or__3548__auto____15505;
} else
{return cljs.core._EQ_.call(null,lfunc__15501,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15506))
{var or__3548__auto____15507 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15507))
{return or__3548__auto____15507;
} else
{return cljs.core._EQ_.call(null,scope__15503,opt_scope);
}
} else
{return and__3546__auto____15506;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15492,listener__15500,capture__15504);
} else
{return goog.events.unlisten.call(null,elm,wevent__15492,listener__15500,capture__15504);
}
} else
{return null;
}
}),listeners__15498));
});
return obj__15491;
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
var listen_BANG___15528 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15529 = (function (nds,event,func,capture){
var wrapper__15512 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15514__15518 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15514__15518))
{var node__15521 = cljs.core.first.call(null,G__15514__15518);
var G__15514__15522 = G__15514__15518;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15512)))
{goog.events.listen.call(null,node__15521,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15521,wrapper__15512,func,capture);
}
var temp__3698__auto____15525 = cljs.core.next.call(null,G__15514__15522);

if(cljs.core.truth_(temp__3698__auto____15525))
{var G__15514__15527 = temp__3698__auto____15525;

{
var G__15536 = cljs.core.first.call(null,G__15514__15527);
var G__15537 = G__15514__15527;
node__15521 = G__15536;
G__15514__15522 = G__15537;
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
return listen_BANG___15528.call(this,nds,event,func);
case  4 :
return listen_BANG___15529.call(this,nds,event,func,capture);
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
var unlisten_BANG___15556 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15557 = (function (nds,event,func,capture){
var wrapper__15544 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15545__15546 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15545__15546))
{var node__15547 = cljs.core.first.call(null,G__15545__15546);
var G__15545__15548 = G__15545__15546;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15544)))
{goog.events.unlisten.call(null,node__15547,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15544.unlisten(node__15547,func,capture);
}
var temp__3698__auto____15551 = cljs.core.next.call(null,G__15545__15548);

if(cljs.core.truth_(temp__3698__auto____15551))
{var G__15545__15552 = temp__3698__auto____15551;

{
var G__15564 = cljs.core.first.call(null,G__15545__15552);
var G__15565 = G__15545__15552;
node__15547 = G__15564;
G__15545__15548 = G__15565;
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
return unlisten_BANG___15556.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15557.call(this,nds,event,func,capture);
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
var G__15571__15575 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15571__15575))
{var node__15576 = cljs.core.first.call(null,G__15571__15575);
var G__15571__15577 = G__15571__15575;

while(true){
var map_func__15580 = ((function (node__15576,G__15571__15577){
return (function (p1__15540_SHARP_){
var wrapper__15578 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15540_SHARP_);

if(cljs.core.truth_(wrapper__15578))
{return wrapper__15578.unlisten(node__15576);
} else
{return goog.events.removeAll.call(null,node__15576,cljs.core.name.call(null,p1__15540_SHARP_));
}
});})(node__15576,G__15571__15577))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15580,event_list));
var temp__3698__auto____15582 = cljs.core.next.call(null,G__15571__15577);

if(cljs.core.truth_(temp__3698__auto____15582))
{var G__15571__15584 = temp__3698__auto____15582;

{
var G__15596 = cljs.core.first.call(null,G__15571__15584);
var G__15597 = G__15571__15584;
node__15576 = G__15596;
G__15571__15577 = G__15597;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15599){
var nds = cljs.core.first(arglist__15599);
var event_list = cljs.core.rest(arglist__15599);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15605 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15607 = (cljs.core.truth_(wrapper__15605)?wrapper__15605.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15611 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15611.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15613__15616 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15613__15616))
{var node__15617 = cljs.core.first.call(null,G__15613__15616);
var G__15613__15618 = G__15613__15616;

while(true){
goog.events.fireListeners.call(null,node__15617,nevent__15607,capture,event_obj__15611);
var temp__3698__auto____15619 = cljs.core.next.call(null,G__15613__15618);

if(cljs.core.truth_(temp__3698__auto____15619))
{var G__15613__15620 = temp__3698__auto____15619;

{
var G__15624 = cljs.core.first.call(null,G__15613__15620);
var G__15625 = G__15613__15620;
node__15617 = G__15624;
G__15613__15618 = G__15625;
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
