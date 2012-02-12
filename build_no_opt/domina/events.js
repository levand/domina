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
var G__15511 = parent;
var G__15512 = child.parentNode;
parent = G__15511;
child = G__15512;
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
var re__15515 = e.relatedTarget;
var this$__15516 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15519 = cljs.core.not.call(null,(re__15515 === this$__15516));

if(cljs.core.truth_(and__3546__auto____15519))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15516,re__15515));
} else
{return and__3546__auto____15519;
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
var obj__15522 = (new Object());
var wevent__15523 = cljs.core.name.call(null,wrapped_key);
var event__15524 = cljs.core.name.call(null,event_key);

obj__15522.wrapped_event = wevent__15523;
obj__15522.event = event__15524;
obj__15522.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15525 = wrapper_func.call(null,func);

callback__15525.listen = func;
callback__15525.scope = opt_scope;
callback__15525.event = event__15524;
callback__15525.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15523,callback__15525,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15523,callback__15525,capture);
}
});
obj__15522.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15526 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15523,false),goog.events.getListeners.call(null,elm,wevent__15523,true)):goog.events.getListeners.call(null,elm,wevent__15523,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15527 = obj.listener;
var lfunc__15528 = listener__15527.listen;
var scope__15538 = listener__15527.scope;
var capture__15539 = listener__15527.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15544 = (function (){var or__3548__auto____15543 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15543))
{return or__3548__auto____15543;
} else
{return cljs.core._EQ_.call(null,lfunc__15528,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15544))
{var or__3548__auto____15547 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15547))
{return or__3548__auto____15547;
} else
{return cljs.core._EQ_.call(null,scope__15538,opt_scope);
}
} else
{return and__3546__auto____15544;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15523,listener__15527,capture__15539);
} else
{return goog.events.unlisten.call(null,elm,wevent__15523,listener__15527,capture__15539);
}
} else
{return null;
}
}),listeners__15526));
});
return obj__15522;
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
var listen_BANG___15630 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15631 = (function (nds,event,func,capture){
var wrapper__15615 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15617__15618 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15617__15618))
{var node__15619 = cljs.core.first.call(null,G__15617__15618);
var G__15617__15620 = G__15617__15618;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15615)))
{goog.events.listen.call(null,node__15619,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15619,wrapper__15615,func,capture);
}
var temp__3698__auto____15623 = cljs.core.next.call(null,G__15617__15620);

if(cljs.core.truth_(temp__3698__auto____15623))
{var G__15617__15625 = temp__3698__auto____15623;

{
var G__15635 = cljs.core.first.call(null,G__15617__15625);
var G__15636 = G__15617__15625;
node__15619 = G__15635;
G__15617__15620 = G__15636;
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
return listen_BANG___15630.call(this,nds,event,func);
case  4 :
return listen_BANG___15631.call(this,nds,event,func,capture);
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
var unlisten_BANG___15688 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15689 = (function (nds,event,func,capture){
var wrapper__15646 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15647__15649 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15647__15649))
{var node__15650 = cljs.core.first.call(null,G__15647__15649);
var G__15647__15685 = G__15647__15649;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15646)))
{goog.events.unlisten.call(null,node__15650,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15646.unlisten(node__15650,func,capture);
}
var temp__3698__auto____15686 = cljs.core.next.call(null,G__15647__15685);

if(cljs.core.truth_(temp__3698__auto____15686))
{var G__15647__15687 = temp__3698__auto____15686;

{
var G__15693 = cljs.core.first.call(null,G__15647__15687);
var G__15694 = G__15647__15687;
node__15650 = G__15693;
G__15647__15685 = G__15694;
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
return unlisten_BANG___15688.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15689.call(this,nds,event,func,capture);
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
var G__15695__15696 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15695__15696))
{var node__15697 = cljs.core.first.call(null,G__15695__15696);
var G__15695__15699 = G__15695__15696;

while(true){
var map_func__15702 = ((function (node__15697,G__15695__15699){
return (function (p1__15640_SHARP_){
var wrapper__15700 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15640_SHARP_);

if(cljs.core.truth_(wrapper__15700))
{return wrapper__15700.unlisten(node__15697);
} else
{return goog.events.removeAll.call(null,node__15697,cljs.core.name.call(null,p1__15640_SHARP_));
}
});})(node__15697,G__15695__15699))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15702,event_list));
var temp__3698__auto____15703 = cljs.core.next.call(null,G__15695__15699);

if(cljs.core.truth_(temp__3698__auto____15703))
{var G__15695__15704 = temp__3698__auto____15703;

{
var G__15708 = cljs.core.first.call(null,G__15695__15704);
var G__15709 = G__15695__15704;
node__15697 = G__15708;
G__15695__15699 = G__15709;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15710){
var nds = cljs.core.first(arglist__15710);
var event_list = cljs.core.rest(arglist__15710);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15715 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15717 = (cljs.core.truth_(wrapper__15715)?wrapper__15715.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15718 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15718.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15719__15720 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15719__15720))
{var node__15721 = cljs.core.first.call(null,G__15719__15720);
var G__15719__15722 = G__15719__15720;

while(true){
goog.events.fireListeners.call(null,node__15721,nevent__15717,capture,event_obj__15718);
var temp__3698__auto____15723 = cljs.core.next.call(null,G__15719__15722);

if(cljs.core.truth_(temp__3698__auto____15723))
{var G__15719__15724 = temp__3698__auto____15723;

{
var G__15725 = cljs.core.first.call(null,G__15719__15724);
var G__15726 = G__15719__15724;
node__15721 = G__15725;
G__15719__15722 = G__15726;
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
