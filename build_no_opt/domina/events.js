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
var G__15340 = parent;
var G__15341 = child.parentNode;
parent = G__15340;
child = G__15341;
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
var re__15344 = e.relatedTarget;
var this$__15346 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15348 = cljs.core.not.call(null,(re__15344 === this$__15346));

if(cljs.core.truth_(and__3546__auto____15348))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15346,re__15344));
} else
{return and__3546__auto____15348;
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
var obj__15404 = (new Object());
var wevent__15405 = cljs.core.name.call(null,wrapped_key);
var event__15406 = cljs.core.name.call(null,event_key);

obj__15404.wrapped_event = wevent__15405;
obj__15404.event = event__15406;
obj__15404.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15407 = wrapper_func.call(null,func);

callback__15407.listen = func;
callback__15407.scope = opt_scope;
callback__15407.event = event__15406;
callback__15407.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15405,callback__15407,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15405,callback__15407,capture);
}
});
obj__15404.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15413 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15405,false),goog.events.getListeners.call(null,elm,wevent__15405,true)):goog.events.getListeners.call(null,elm,wevent__15405,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15417 = obj.listener;
var lfunc__15419 = listener__15417.listen;
var scope__15420 = listener__15417.scope;
var capture__15422 = listener__15417.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15424 = (function (){var or__3548__auto____15423 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15423))
{return or__3548__auto____15423;
} else
{return cljs.core._EQ_.call(null,lfunc__15419,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15424))
{var or__3548__auto____15425 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15425))
{return or__3548__auto____15425;
} else
{return cljs.core._EQ_.call(null,scope__15420,opt_scope);
}
} else
{return and__3546__auto____15424;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15405,listener__15417,capture__15422);
} else
{return goog.events.unlisten.call(null,elm,wevent__15405,listener__15417,capture__15422);
}
} else
{return null;
}
}),listeners__15413));
});
return obj__15404;
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
var listen_BANG___15551 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15552 = (function (nds,event,func,capture){
var wrapper__15542 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15543__15544 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15543__15544))
{var node__15547 = cljs.core.first.call(null,G__15543__15544);
var G__15543__15548 = G__15543__15544;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15542)))
{goog.events.listen.call(null,node__15547,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15547,wrapper__15542,func,capture);
}
var temp__3698__auto____15549 = cljs.core.next.call(null,G__15543__15548);

if(cljs.core.truth_(temp__3698__auto____15549))
{var G__15543__15550 = temp__3698__auto____15549;

{
var G__15556 = cljs.core.first.call(null,G__15543__15550);
var G__15557 = G__15543__15550;
node__15547 = G__15556;
G__15543__15548 = G__15557;
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
return listen_BANG___15551.call(this,nds,event,func);
case  4 :
return listen_BANG___15552.call(this,nds,event,func,capture);
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
var unlisten_BANG___15575 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15577 = (function (nds,event,func,capture){
var wrapper__15561 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15562__15563 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15562__15563))
{var node__15565 = cljs.core.first.call(null,G__15562__15563);
var G__15562__15566 = G__15562__15563;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15561)))
{goog.events.unlisten.call(null,node__15565,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15561.unlisten(node__15565,func,capture);
}
var temp__3698__auto____15569 = cljs.core.next.call(null,G__15562__15566);

if(cljs.core.truth_(temp__3698__auto____15569))
{var G__15562__15571 = temp__3698__auto____15569;

{
var G__15586 = cljs.core.first.call(null,G__15562__15571);
var G__15587 = G__15562__15571;
node__15565 = G__15586;
G__15562__15566 = G__15587;
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
return unlisten_BANG___15575.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15577.call(this,nds,event,func,capture);
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
var G__15591__15592 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15591__15592))
{var node__15595 = cljs.core.first.call(null,G__15591__15592);
var G__15591__15598 = G__15591__15592;

while(true){
var map_func__15602 = ((function (node__15595,G__15591__15598){
return (function (p1__15558_SHARP_){
var wrapper__15601 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15558_SHARP_);

if(cljs.core.truth_(wrapper__15601))
{return wrapper__15601.unlisten(node__15595);
} else
{return goog.events.removeAll.call(null,node__15595,cljs.core.name.call(null,p1__15558_SHARP_));
}
});})(node__15595,G__15591__15598))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15602,event_list));
var temp__3698__auto____15606 = cljs.core.next.call(null,G__15591__15598);

if(cljs.core.truth_(temp__3698__auto____15606))
{var G__15591__15607 = temp__3698__auto____15606;

{
var G__15612 = cljs.core.first.call(null,G__15591__15607);
var G__15613 = G__15591__15607;
node__15595 = G__15612;
G__15591__15598 = G__15613;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15614){
var nds = cljs.core.first(arglist__15614);
var event_list = cljs.core.rest(arglist__15614);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15620 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15621 = (cljs.core.truth_(wrapper__15620)?wrapper__15620.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15622 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15622.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15624__15626 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15624__15626))
{var node__15627 = cljs.core.first.call(null,G__15624__15626);
var G__15624__15628 = G__15624__15626;

while(true){
goog.events.fireListeners.call(null,node__15627,nevent__15621,capture,event_obj__15622);
var temp__3698__auto____15640 = cljs.core.next.call(null,G__15624__15628);

if(cljs.core.truth_(temp__3698__auto____15640))
{var G__15624__15642 = temp__3698__auto____15640;

{
var G__15651 = cljs.core.first.call(null,G__15624__15642);
var G__15653 = G__15624__15642;
node__15627 = G__15651;
G__15624__15628 = G__15653;
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
