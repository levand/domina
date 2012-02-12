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
var G__15397 = parent;
var G__15398 = child.parentNode;
parent = G__15397;
child = G__15398;
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
var re__15401 = e.relatedTarget;
var this$__15402 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15403 = cljs.core.not.call(null,(re__15401 === this$__15402));

if(cljs.core.truth_(and__3546__auto____15403))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15402,re__15401));
} else
{return and__3546__auto____15403;
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
var obj__15411 = (new Object());
var wevent__15412 = cljs.core.name.call(null,wrapped_key);
var event__15413 = cljs.core.name.call(null,event_key);

obj__15411.wrapped_event = wevent__15412;
obj__15411.event = event__15413;
obj__15411.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15462 = wrapper_func.call(null,func);

callback__15462.listen = func;
callback__15462.scope = opt_scope;
callback__15462.event = event__15413;
callback__15462.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15412,callback__15462,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15412,callback__15462,capture);
}
});
obj__15411.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15468 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15412,false),goog.events.getListeners.call(null,elm,wevent__15412,true)):goog.events.getListeners.call(null,elm,wevent__15412,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15471 = obj.listener;
var lfunc__15472 = listener__15471.listen;
var scope__15473 = listener__15471.scope;
var capture__15474 = listener__15471.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15477 = (function (){var or__3548__auto____15476 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15476))
{return or__3548__auto____15476;
} else
{return cljs.core._EQ_.call(null,lfunc__15472,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15477))
{var or__3548__auto____15479 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15479))
{return or__3548__auto____15479;
} else
{return cljs.core._EQ_.call(null,scope__15473,opt_scope);
}
} else
{return and__3546__auto____15477;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15412,listener__15471,capture__15474);
} else
{return goog.events.unlisten.call(null,elm,wevent__15412,listener__15471,capture__15474);
}
} else
{return null;
}
}),listeners__15468));
});
return obj__15411;
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
var listen_BANG___15508 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15509 = (function (nds,event,func,capture){
var wrapper__15501 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15502__15503 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15502__15503))
{var node__15504 = cljs.core.first.call(null,G__15502__15503);
var G__15502__15505 = G__15502__15503;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15501)))
{goog.events.listen.call(null,node__15504,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15504,wrapper__15501,func,capture);
}
var temp__3698__auto____15506 = cljs.core.next.call(null,G__15502__15505);

if(cljs.core.truth_(temp__3698__auto____15506))
{var G__15502__15507 = temp__3698__auto____15506;

{
var G__15511 = cljs.core.first.call(null,G__15502__15507);
var G__15512 = G__15502__15507;
node__15504 = G__15511;
G__15502__15505 = G__15512;
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
return listen_BANG___15508.call(this,nds,event,func);
case  4 :
return listen_BANG___15509.call(this,nds,event,func,capture);
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
var unlisten_BANG___15529 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15530 = (function (nds,event,func,capture){
var wrapper__15516 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15517__15518 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15517__15518))
{var node__15521 = cljs.core.first.call(null,G__15517__15518);
var G__15517__15522 = G__15517__15518;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15516)))
{goog.events.unlisten.call(null,node__15521,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15516.unlisten(node__15521,func,capture);
}
var temp__3698__auto____15524 = cljs.core.next.call(null,G__15517__15522);

if(cljs.core.truth_(temp__3698__auto____15524))
{var G__15517__15525 = temp__3698__auto____15524;

{
var G__15584 = cljs.core.first.call(null,G__15517__15525);
var G__15585 = G__15517__15525;
node__15521 = G__15584;
G__15517__15522 = G__15585;
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
return unlisten_BANG___15529.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15530.call(this,nds,event,func,capture);
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
var G__15586__15587 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15586__15587))
{var node__15588 = cljs.core.first.call(null,G__15586__15587);
var G__15586__15589 = G__15586__15587;

while(true){
var map_func__15591 = ((function (node__15588,G__15586__15589){
return (function (p1__15515_SHARP_){
var wrapper__15590 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15515_SHARP_);

if(cljs.core.truth_(wrapper__15590))
{return wrapper__15590.unlisten(node__15588);
} else
{return goog.events.removeAll.call(null,node__15588,cljs.core.name.call(null,p1__15515_SHARP_));
}
});})(node__15588,G__15586__15589))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15591,event_list));
var temp__3698__auto____15592 = cljs.core.next.call(null,G__15586__15589);

if(cljs.core.truth_(temp__3698__auto____15592))
{var G__15586__15595 = temp__3698__auto____15592;

{
var G__15602 = cljs.core.first.call(null,G__15586__15595);
var G__15603 = G__15586__15595;
node__15588 = G__15602;
G__15586__15589 = G__15603;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15606){
var nds = cljs.core.first(arglist__15606);
var event_list = cljs.core.rest(arglist__15606);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15610 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15611 = (cljs.core.truth_(wrapper__15610)?wrapper__15610.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15612 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15612.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15613__15614 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15613__15614))
{var node__15615 = cljs.core.first.call(null,G__15613__15614);
var G__15613__15616 = G__15613__15614;

while(true){
goog.events.fireListeners.call(null,node__15615,nevent__15611,capture,event_obj__15612);
var temp__3698__auto____15617 = cljs.core.next.call(null,G__15613__15616);

if(cljs.core.truth_(temp__3698__auto____15617))
{var G__15613__15620 = temp__3698__auto____15617;

{
var G__15627 = cljs.core.first.call(null,G__15613__15620);
var G__15628 = G__15613__15620;
node__15615 = G__15627;
G__15613__15616 = G__15628;
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
