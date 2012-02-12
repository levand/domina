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
var G__15529 = parent;
var G__15532 = child.parentNode;
parent = G__15529;
child = G__15532;
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
var re__15536 = e.relatedTarget;
var this$__15537 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15538 = cljs.core.not.call(null,(re__15536 === this$__15537));

if(cljs.core.truth_(and__3546__auto____15538))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15537,re__15536));
} else
{return and__3546__auto____15538;
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
var obj__15540 = (new Object());
var wevent__15541 = cljs.core.name.call(null,wrapped_key);
var event__15542 = cljs.core.name.call(null,event_key);

obj__15540.wrapped_event = wevent__15541;
obj__15540.event = event__15542;
obj__15540.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15543 = wrapper_func.call(null,func);

callback__15543.listen = func;
callback__15543.scope = opt_scope;
callback__15543.event = event__15542;
callback__15543.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15541,callback__15543,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15541,callback__15543,capture);
}
});
obj__15540.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15552 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15541,false),goog.events.getListeners.call(null,elm,wevent__15541,true)):goog.events.getListeners.call(null,elm,wevent__15541,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15554 = obj.listener;
var lfunc__15555 = listener__15554.listen;
var scope__15556 = listener__15554.scope;
var capture__15557 = listener__15554.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15559 = (function (){var or__3548__auto____15558 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15558))
{return or__3548__auto____15558;
} else
{return cljs.core._EQ_.call(null,lfunc__15555,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15559))
{var or__3548__auto____15560 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15560))
{return or__3548__auto____15560;
} else
{return cljs.core._EQ_.call(null,scope__15556,opt_scope);
}
} else
{return and__3546__auto____15559;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15541,listener__15554,capture__15557);
} else
{return goog.events.unlisten.call(null,elm,wevent__15541,listener__15554,capture__15557);
}
} else
{return null;
}
}),listeners__15552));
});
return obj__15540;
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
var listen_BANG___15597 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15599 = (function (nds,event,func,capture){
var wrapper__15584 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15585__15587 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15585__15587))
{var node__15588 = cljs.core.first.call(null,G__15585__15587);
var G__15585__15589 = G__15585__15587;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15584)))
{goog.events.listen.call(null,node__15588,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15588,wrapper__15584,func,capture);
}
var temp__3698__auto____15593 = cljs.core.next.call(null,G__15585__15589);

if(cljs.core.truth_(temp__3698__auto____15593))
{var G__15585__15595 = temp__3698__auto____15593;

{
var G__15607 = cljs.core.first.call(null,G__15585__15595);
var G__15608 = G__15585__15595;
node__15588 = G__15607;
G__15585__15589 = G__15608;
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
return listen_BANG___15597.call(this,nds,event,func);
case  4 :
return listen_BANG___15599.call(this,nds,event,func,capture);
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
var unlisten_BANG___15620 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15621 = (function (nds,event,func,capture){
var wrapper__15610 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15611__15612 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15611__15612))
{var node__15614 = cljs.core.first.call(null,G__15611__15612);
var G__15611__15615 = G__15611__15612;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15610)))
{goog.events.unlisten.call(null,node__15614,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15610.unlisten(node__15614,func,capture);
}
var temp__3698__auto____15616 = cljs.core.next.call(null,G__15611__15615);

if(cljs.core.truth_(temp__3698__auto____15616))
{var G__15611__15617 = temp__3698__auto____15616;

{
var G__15625 = cljs.core.first.call(null,G__15611__15617);
var G__15626 = G__15611__15617;
node__15614 = G__15625;
G__15611__15615 = G__15626;
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
return unlisten_BANG___15620.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15621.call(this,nds,event,func,capture);
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
var G__15630__15635 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15630__15635))
{var node__15637 = cljs.core.first.call(null,G__15630__15635);
var G__15630__15638 = G__15630__15635;

while(true){
var map_func__15645 = ((function (node__15637,G__15630__15638){
return (function (p1__15609_SHARP_){
var wrapper__15643 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15609_SHARP_);

if(cljs.core.truth_(wrapper__15643))
{return wrapper__15643.unlisten(node__15637);
} else
{return goog.events.removeAll.call(null,node__15637,cljs.core.name.call(null,p1__15609_SHARP_));
}
});})(node__15637,G__15630__15638))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15645,event_list));
var temp__3698__auto____15647 = cljs.core.next.call(null,G__15630__15638);

if(cljs.core.truth_(temp__3698__auto____15647))
{var G__15630__15651 = temp__3698__auto____15647;

{
var G__15657 = cljs.core.first.call(null,G__15630__15651);
var G__15658 = G__15630__15651;
node__15637 = G__15657;
G__15630__15638 = G__15658;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15660){
var nds = cljs.core.first(arglist__15660);
var event_list = cljs.core.rest(arglist__15660);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15662 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15664 = (cljs.core.truth_(wrapper__15662)?wrapper__15662.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15666 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15666.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15669__15670 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15669__15670))
{var node__15671 = cljs.core.first.call(null,G__15669__15670);
var G__15669__15672 = G__15669__15670;

while(true){
goog.events.fireListeners.call(null,node__15671,nevent__15664,capture,event_obj__15666);
var temp__3698__auto____15675 = cljs.core.next.call(null,G__15669__15672);

if(cljs.core.truth_(temp__3698__auto____15675))
{var G__15669__15676 = temp__3698__auto____15675;

{
var G__15682 = cljs.core.first.call(null,G__15669__15676);
var G__15683 = G__15669__15676;
node__15671 = G__15682;
G__15669__15672 = G__15683;
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
