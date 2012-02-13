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
var G__15410 = parent;
var G__15411 = child.parentNode;
parent = G__15410;
child = G__15411;
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
var re__15428 = e.relatedTarget;
var this$__15432 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15435 = cljs.core.not.call(null,(re__15428 === this$__15432));

if(cljs.core.truth_(and__3546__auto____15435))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15432,re__15428));
} else
{return and__3546__auto____15435;
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
var obj__15437 = (new Object());
var wevent__15438 = cljs.core.name.call(null,wrapped_key);
var event__15439 = cljs.core.name.call(null,event_key);

obj__15437.wrapped_event = wevent__15438;
obj__15437.event = event__15439;
obj__15437.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15441 = wrapper_func.call(null,func);

callback__15441.listen = func;
callback__15441.scope = opt_scope;
callback__15441.event = event__15439;
callback__15441.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15438,callback__15441,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15438,callback__15441,capture);
}
});
obj__15437.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15449 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15438,false),goog.events.getListeners.call(null,elm,wevent__15438,true)):goog.events.getListeners.call(null,elm,wevent__15438,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15451 = obj.listener;
var lfunc__15452 = listener__15451.listen;
var scope__15453 = listener__15451.scope;
var capture__15454 = listener__15451.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15456 = (function (){var or__3548__auto____15455 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15455))
{return or__3548__auto____15455;
} else
{return cljs.core._EQ_.call(null,lfunc__15452,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15456))
{var or__3548__auto____15457 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15457))
{return or__3548__auto____15457;
} else
{return cljs.core._EQ_.call(null,scope__15453,opt_scope);
}
} else
{return and__3546__auto____15456;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15438,listener__15451,capture__15454);
} else
{return goog.events.unlisten.call(null,elm,wevent__15438,listener__15451,capture__15454);
}
} else
{return null;
}
}),listeners__15449));
});
return obj__15437;
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
var listen_BANG___15484 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15485 = (function (nds,event,func,capture){
var wrapper__15472 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15474__15476 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15474__15476))
{var node__15477 = cljs.core.first.call(null,G__15474__15476);
var G__15474__15478 = G__15474__15476;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15472)))
{goog.events.listen.call(null,node__15477,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15477,wrapper__15472,func,capture);
}
var temp__3698__auto____15480 = cljs.core.next.call(null,G__15474__15478);

if(cljs.core.truth_(temp__3698__auto____15480))
{var G__15474__15481 = temp__3698__auto____15480;

{
var G__15489 = cljs.core.first.call(null,G__15474__15481);
var G__15490 = G__15474__15481;
node__15477 = G__15489;
G__15474__15478 = G__15490;
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
return listen_BANG___15484.call(this,nds,event,func);
case  4 :
return listen_BANG___15485.call(this,nds,event,func,capture);
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
var unlisten_BANG___15507 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15508 = (function (nds,event,func,capture){
var wrapper__15500 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15501__15502 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15501__15502))
{var node__15503 = cljs.core.first.call(null,G__15501__15502);
var G__15501__15504 = G__15501__15502;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15500)))
{goog.events.unlisten.call(null,node__15503,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15500.unlisten(node__15503,func,capture);
}
var temp__3698__auto____15505 = cljs.core.next.call(null,G__15501__15504);

if(cljs.core.truth_(temp__3698__auto____15505))
{var G__15501__15506 = temp__3698__auto____15505;

{
var G__15510 = cljs.core.first.call(null,G__15501__15506);
var G__15511 = G__15501__15506;
node__15503 = G__15510;
G__15501__15504 = G__15511;
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
return unlisten_BANG___15507.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15508.call(this,nds,event,func,capture);
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
var G__15512__15513 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15512__15513))
{var node__15514 = cljs.core.first.call(null,G__15512__15513);
var G__15512__15515 = G__15512__15513;

while(true){
var map_func__15517 = ((function (node__15514,G__15512__15515){
return (function (p1__15491_SHARP_){
var wrapper__15516 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15491_SHARP_);

if(cljs.core.truth_(wrapper__15516))
{return wrapper__15516.unlisten(node__15514);
} else
{return goog.events.removeAll.call(null,node__15514,cljs.core.name.call(null,p1__15491_SHARP_));
}
});})(node__15514,G__15512__15515))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15517,event_list));
var temp__3698__auto____15518 = cljs.core.next.call(null,G__15512__15515);

if(cljs.core.truth_(temp__3698__auto____15518))
{var G__15512__15519 = temp__3698__auto____15518;

{
var G__15520 = cljs.core.first.call(null,G__15512__15519);
var G__15521 = G__15512__15519;
node__15514 = G__15520;
G__15512__15515 = G__15521;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15522){
var nds = cljs.core.first(arglist__15522);
var event_list = cljs.core.rest(arglist__15522);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15523 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15524 = (cljs.core.truth_(wrapper__15523)?wrapper__15523.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15525 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15525.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15526__15527 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15526__15527))
{var node__15528 = cljs.core.first.call(null,G__15526__15527);
var G__15526__15529 = G__15526__15527;

while(true){
goog.events.fireListeners.call(null,node__15528,nevent__15524,capture,event_obj__15525);
var temp__3698__auto____15530 = cljs.core.next.call(null,G__15526__15529);

if(cljs.core.truth_(temp__3698__auto____15530))
{var G__15526__15531 = temp__3698__auto____15530;

{
var G__15532 = cljs.core.first.call(null,G__15526__15531);
var G__15533 = G__15526__15531;
node__15528 = G__15532;
G__15526__15529 = G__15533;
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
