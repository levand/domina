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
var G__15463 = parent;
var G__15464 = child.parentNode;
parent = G__15463;
child = G__15464;
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
var re__15467 = e.relatedTarget;
var this$__15468 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15469 = cljs.core.not.call(null,(re__15467 === this$__15468));

if(cljs.core.truth_(and__3546__auto____15469))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15468,re__15467));
} else
{return and__3546__auto____15469;
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
var obj__15471 = (new Object());
var wevent__15472 = cljs.core.name.call(null,wrapped_key);
var event__15474 = cljs.core.name.call(null,event_key);

obj__15471.wrapped_event = wevent__15472;
obj__15471.event = event__15474;
obj__15471.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15477 = wrapper_func.call(null,func);

callback__15477.listen = func;
callback__15477.scope = opt_scope;
callback__15477.event = event__15474;
callback__15477.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15472,callback__15477,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15472,callback__15477,capture);
}
});
obj__15471.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15481 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15472,false),goog.events.getListeners.call(null,elm,wevent__15472,true)):goog.events.getListeners.call(null,elm,wevent__15472,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15482 = obj.listener;
var lfunc__15483 = listener__15482.listen;
var scope__15484 = listener__15482.scope;
var capture__15485 = listener__15482.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15488 = (function (){var or__3548__auto____15487 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15487))
{return or__3548__auto____15487;
} else
{return cljs.core._EQ_.call(null,lfunc__15483,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15488))
{var or__3548__auto____15489 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15489))
{return or__3548__auto____15489;
} else
{return cljs.core._EQ_.call(null,scope__15484,opt_scope);
}
} else
{return and__3546__auto____15488;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15472,listener__15482,capture__15485);
} else
{return goog.events.unlisten.call(null,elm,wevent__15472,listener__15482,capture__15485);
}
} else
{return null;
}
}),listeners__15481));
});
return obj__15471;
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
var listen_BANG___15524 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15525 = (function (nds,event,func,capture){
var wrapper__15507 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15508__15511 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15508__15511))
{var node__15512 = cljs.core.first.call(null,G__15508__15511);
var G__15508__15513 = G__15508__15511;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15507)))
{goog.events.listen.call(null,node__15512,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15512,wrapper__15507,func,capture);
}
var temp__3698__auto____15517 = cljs.core.next.call(null,G__15508__15513);

if(cljs.core.truth_(temp__3698__auto____15517))
{var G__15508__15519 = temp__3698__auto____15517;

{
var G__15531 = cljs.core.first.call(null,G__15508__15519);
var G__15532 = G__15508__15519;
node__15512 = G__15531;
G__15508__15513 = G__15532;
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
return listen_BANG___15524.call(this,nds,event,func);
case  4 :
return listen_BANG___15525.call(this,nds,event,func,capture);
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
var unlisten_BANG___15573 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15574 = (function (nds,event,func,capture){
var wrapper__15541 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15542__15546 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15542__15546))
{var node__15548 = cljs.core.first.call(null,G__15542__15546);
var G__15542__15549 = G__15542__15546;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15541)))
{goog.events.unlisten.call(null,node__15548,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15541.unlisten(node__15548,func,capture);
}
var temp__3698__auto____15551 = cljs.core.next.call(null,G__15542__15549);

if(cljs.core.truth_(temp__3698__auto____15551))
{var G__15542__15552 = temp__3698__auto____15551;

{
var G__15576 = cljs.core.first.call(null,G__15542__15552);
var G__15577 = G__15542__15552;
node__15548 = G__15576;
G__15542__15549 = G__15577;
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
return unlisten_BANG___15573.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15574.call(this,nds,event,func,capture);
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
var G__15578__15579 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15578__15579))
{var node__15580 = cljs.core.first.call(null,G__15578__15579);
var G__15578__15581 = G__15578__15579;

while(true){
var map_func__15583 = ((function (node__15580,G__15578__15581){
return (function (p1__15536_SHARP_){
var wrapper__15582 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15536_SHARP_);

if(cljs.core.truth_(wrapper__15582))
{return wrapper__15582.unlisten(node__15580);
} else
{return goog.events.removeAll.call(null,node__15580,cljs.core.name.call(null,p1__15536_SHARP_));
}
});})(node__15580,G__15578__15581))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15583,event_list));
var temp__3698__auto____15586 = cljs.core.next.call(null,G__15578__15581);

if(cljs.core.truth_(temp__3698__auto____15586))
{var G__15578__15588 = temp__3698__auto____15586;

{
var G__15597 = cljs.core.first.call(null,G__15578__15588);
var G__15598 = G__15578__15588;
node__15580 = G__15597;
G__15578__15581 = G__15598;
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
var wrapper__15603 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15604 = (cljs.core.truth_(wrapper__15603)?wrapper__15603.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15606 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15606.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15607__15611 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15607__15611))
{var node__15612 = cljs.core.first.call(null,G__15607__15611);
var G__15607__15613 = G__15607__15611;

while(true){
goog.events.fireListeners.call(null,node__15612,nevent__15604,capture,event_obj__15606);
var temp__3698__auto____15614 = cljs.core.next.call(null,G__15607__15613);

if(cljs.core.truth_(temp__3698__auto____15614))
{var G__15607__15616 = temp__3698__auto____15614;

{
var G__15625 = cljs.core.first.call(null,G__15607__15616);
var G__15626 = G__15607__15616;
node__15612 = G__15625;
G__15607__15613 = G__15626;
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
