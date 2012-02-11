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
var G__15446 = parent;
var G__15447 = child.parentNode;
parent = G__15446;
child = G__15447;
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
var re__15477 = e.relatedTarget;
var this$__15479 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15481 = cljs.core.not.call(null,(re__15477 === this$__15479));

if(cljs.core.truth_(and__3546__auto____15481))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15479,re__15477));
} else
{return and__3546__auto____15481;
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
var obj__15501 = (new Object());
var wevent__15504 = cljs.core.name.call(null,wrapped_key);
var event__15505 = cljs.core.name.call(null,event_key);

obj__15501.wrapped_event = wevent__15504;
obj__15501.event = event__15505;
obj__15501.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15507 = wrapper_func.call(null,func);

callback__15507.listen = func;
callback__15507.scope = opt_scope;
callback__15507.event = event__15505;
callback__15507.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15504,callback__15507,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15504,callback__15507,capture);
}
});
obj__15501.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15513 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15504,false),goog.events.getListeners.call(null,elm,wevent__15504,true)):goog.events.getListeners.call(null,elm,wevent__15504,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15516 = obj.listener;
var lfunc__15517 = listener__15516.listen;
var scope__15519 = listener__15516.scope;
var capture__15520 = listener__15516.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15523 = (function (){var or__3548__auto____15522 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15522))
{return or__3548__auto____15522;
} else
{return cljs.core._EQ_.call(null,lfunc__15517,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15523))
{var or__3548__auto____15524 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15524))
{return or__3548__auto____15524;
} else
{return cljs.core._EQ_.call(null,scope__15519,opt_scope);
}
} else
{return and__3546__auto____15523;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15504,listener__15516,capture__15520);
} else
{return goog.events.unlisten.call(null,elm,wevent__15504,listener__15516,capture__15520);
}
} else
{return null;
}
}),listeners__15513));
});
return obj__15501;
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
var listen_BANG___15560 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15561 = (function (nds,event,func,capture){
var wrapper__15553 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15554__15555 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15554__15555))
{var node__15556 = cljs.core.first.call(null,G__15554__15555);
var G__15554__15557 = G__15554__15555;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15553)))
{goog.events.listen.call(null,node__15556,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15556,wrapper__15553,func,capture);
}
var temp__3698__auto____15558 = cljs.core.next.call(null,G__15554__15557);

if(cljs.core.truth_(temp__3698__auto____15558))
{var G__15554__15559 = temp__3698__auto____15558;

{
var G__15563 = cljs.core.first.call(null,G__15554__15559);
var G__15564 = G__15554__15559;
node__15556 = G__15563;
G__15554__15557 = G__15564;
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
return listen_BANG___15560.call(this,nds,event,func);
case  4 :
return listen_BANG___15561.call(this,nds,event,func,capture);
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
var unlisten_BANG___15578 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15579 = (function (nds,event,func,capture){
var wrapper__15567 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15568__15569 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15568__15569))
{var node__15570 = cljs.core.first.call(null,G__15568__15569);
var G__15568__15571 = G__15568__15569;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15567)))
{goog.events.unlisten.call(null,node__15570,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15567.unlisten(node__15570,func,capture);
}
var temp__3698__auto____15573 = cljs.core.next.call(null,G__15568__15571);

if(cljs.core.truth_(temp__3698__auto____15573))
{var G__15568__15576 = temp__3698__auto____15573;

{
var G__15585 = cljs.core.first.call(null,G__15568__15576);
var G__15586 = G__15568__15576;
node__15570 = G__15585;
G__15568__15571 = G__15586;
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
return unlisten_BANG___15578.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15579.call(this,nds,event,func,capture);
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
var G__15590__15591 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15590__15591))
{var node__15593 = cljs.core.first.call(null,G__15590__15591);
var G__15590__15594 = G__15590__15591;

while(true){
var map_func__15598 = ((function (node__15593,G__15590__15594){
return (function (p1__15566_SHARP_){
var wrapper__15597 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15566_SHARP_);

if(cljs.core.truth_(wrapper__15597))
{return wrapper__15597.unlisten(node__15593);
} else
{return goog.events.removeAll.call(null,node__15593,cljs.core.name.call(null,p1__15566_SHARP_));
}
});})(node__15593,G__15590__15594))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15598,event_list));
var temp__3698__auto____15600 = cljs.core.next.call(null,G__15590__15594);

if(cljs.core.truth_(temp__3698__auto____15600))
{var G__15590__15601 = temp__3698__auto____15600;

{
var G__15606 = cljs.core.first.call(null,G__15590__15601);
var G__15607 = G__15590__15601;
node__15593 = G__15606;
G__15590__15594 = G__15607;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15608){
var nds = cljs.core.first(arglist__15608);
var event_list = cljs.core.rest(arglist__15608);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15611 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15612 = (cljs.core.truth_(wrapper__15611)?wrapper__15611.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15613 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15613.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15614__15617 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15614__15617))
{var node__15618 = cljs.core.first.call(null,G__15614__15617);
var G__15614__15620 = G__15614__15617;

while(true){
goog.events.fireListeners.call(null,node__15618,nevent__15612,capture,event_obj__15613);
var temp__3698__auto____15622 = cljs.core.next.call(null,G__15614__15620);

if(cljs.core.truth_(temp__3698__auto____15622))
{var G__15614__15624 = temp__3698__auto____15622;

{
var G__15627 = cljs.core.first.call(null,G__15614__15624);
var G__15628 = G__15614__15624;
node__15618 = G__15627;
G__15614__15620 = G__15628;
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
