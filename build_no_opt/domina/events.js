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
var G__15409 = parent;
var G__15410 = child.parentNode;
parent = G__15409;
child = G__15410;
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
var re__15413 = e.relatedTarget;
var this$__15414 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15415 = cljs.core.not.call(null,(re__15413 === this$__15414));

if(cljs.core.truth_(and__3546__auto____15415))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15414,re__15413));
} else
{return and__3546__auto____15415;
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
var obj__15421 = (new Object());
var wevent__15422 = cljs.core.name.call(null,wrapped_key);
var event__15423 = cljs.core.name.call(null,event_key);

obj__15421.wrapped_event = wevent__15422;
obj__15421.event = event__15423;
obj__15421.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15424 = wrapper_func.call(null,func);

callback__15424.listen = func;
callback__15424.scope = opt_scope;
callback__15424.event = event__15423;
callback__15424.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15422,callback__15424,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15422,callback__15424,capture);
}
});
obj__15421.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15429 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15422,false),goog.events.getListeners.call(null,elm,wevent__15422,true)):goog.events.getListeners.call(null,elm,wevent__15422,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15432 = obj.listener;
var lfunc__15433 = listener__15432.listen;
var scope__15434 = listener__15432.scope;
var capture__15436 = listener__15432.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15438 = (function (){var or__3548__auto____15437 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15437))
{return or__3548__auto____15437;
} else
{return cljs.core._EQ_.call(null,lfunc__15433,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15438))
{var or__3548__auto____15439 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15439))
{return or__3548__auto____15439;
} else
{return cljs.core._EQ_.call(null,scope__15434,opt_scope);
}
} else
{return and__3546__auto____15438;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15422,listener__15432,capture__15436);
} else
{return goog.events.unlisten.call(null,elm,wevent__15422,listener__15432,capture__15436);
}
} else
{return null;
}
}),listeners__15429));
});
return obj__15421;
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
var listen_BANG___15477 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15478 = (function (nds,event,func,capture){
var wrapper__15460 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15462__15464 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15462__15464))
{var node__15467 = cljs.core.first.call(null,G__15462__15464);
var G__15462__15469 = G__15462__15464;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15460)))
{goog.events.listen.call(null,node__15467,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15467,wrapper__15460,func,capture);
}
var temp__3698__auto____15474 = cljs.core.next.call(null,G__15462__15469);

if(cljs.core.truth_(temp__3698__auto____15474))
{var G__15462__15476 = temp__3698__auto____15474;

{
var G__15487 = cljs.core.first.call(null,G__15462__15476);
var G__15488 = G__15462__15476;
node__15467 = G__15487;
G__15462__15469 = G__15488;
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
return listen_BANG___15477.call(this,nds,event,func);
case  4 :
return listen_BANG___15478.call(this,nds,event,func,capture);
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
var unlisten_BANG___15506 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15507 = (function (nds,event,func,capture){
var wrapper__15498 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15499__15500 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15499__15500))
{var node__15501 = cljs.core.first.call(null,G__15499__15500);
var G__15499__15502 = G__15499__15500;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15498)))
{goog.events.unlisten.call(null,node__15501,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15498.unlisten(node__15501,func,capture);
}
var temp__3698__auto____15504 = cljs.core.next.call(null,G__15499__15502);

if(cljs.core.truth_(temp__3698__auto____15504))
{var G__15499__15505 = temp__3698__auto____15504;

{
var G__15510 = cljs.core.first.call(null,G__15499__15505);
var G__15511 = G__15499__15505;
node__15501 = G__15510;
G__15499__15502 = G__15511;
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
return unlisten_BANG___15506.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15507.call(this,nds,event,func,capture);
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
var G__15513__15516 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15513__15516))
{var node__15519 = cljs.core.first.call(null,G__15513__15516);
var G__15513__15520 = G__15513__15516;

while(true){
var map_func__15525 = ((function (node__15519,G__15513__15520){
return (function (p1__15493_SHARP_){
var wrapper__15521 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15493_SHARP_);

if(cljs.core.truth_(wrapper__15521))
{return wrapper__15521.unlisten(node__15519);
} else
{return goog.events.removeAll.call(null,node__15519,cljs.core.name.call(null,p1__15493_SHARP_));
}
});})(node__15519,G__15513__15520))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15525,event_list));
var temp__3698__auto____15527 = cljs.core.next.call(null,G__15513__15520);

if(cljs.core.truth_(temp__3698__auto____15527))
{var G__15513__15530 = temp__3698__auto____15527;

{
var G__15543 = cljs.core.first.call(null,G__15513__15530);
var G__15544 = G__15513__15530;
node__15519 = G__15543;
G__15513__15520 = G__15544;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15545){
var nds = cljs.core.first(arglist__15545);
var event_list = cljs.core.rest(arglist__15545);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15549 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15550 = (cljs.core.truth_(wrapper__15549)?wrapper__15549.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15553 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15553.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15554__15557 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15554__15557))
{var node__15559 = cljs.core.first.call(null,G__15554__15557);
var G__15554__15560 = G__15554__15557;

while(true){
goog.events.fireListeners.call(null,node__15559,nevent__15550,capture,event_obj__15553);
var temp__3698__auto____15563 = cljs.core.next.call(null,G__15554__15560);

if(cljs.core.truth_(temp__3698__auto____15563))
{var G__15554__15565 = temp__3698__auto____15563;

{
var G__15587 = cljs.core.first.call(null,G__15554__15565);
var G__15588 = G__15554__15565;
node__15559 = G__15587;
G__15554__15560 = G__15588;
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
