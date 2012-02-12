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
var G__15536 = parent;
var G__15537 = child.parentNode;
parent = G__15536;
child = G__15537;
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
var re__15539 = e.relatedTarget;
var this$__15540 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15543 = cljs.core.not.call(null,(re__15539 === this$__15540));

if(cljs.core.truth_(and__3546__auto____15543))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15540,re__15539));
} else
{return and__3546__auto____15543;
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
var obj__15547 = (new Object());
var wevent__15548 = cljs.core.name.call(null,wrapped_key);
var event__15549 = cljs.core.name.call(null,event_key);

obj__15547.wrapped_event = wevent__15548;
obj__15547.event = event__15549;
obj__15547.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15550 = wrapper_func.call(null,func);

callback__15550.listen = func;
callback__15550.scope = opt_scope;
callback__15550.event = event__15549;
callback__15550.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15548,callback__15550,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15548,callback__15550,capture);
}
});
obj__15547.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15554 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15548,false),goog.events.getListeners.call(null,elm,wevent__15548,true)):goog.events.getListeners.call(null,elm,wevent__15548,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15556 = obj.listener;
var lfunc__15558 = listener__15556.listen;
var scope__15559 = listener__15556.scope;
var capture__15561 = listener__15556.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15565 = (function (){var or__3548__auto____15563 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15563))
{return or__3548__auto____15563;
} else
{return cljs.core._EQ_.call(null,lfunc__15558,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15565))
{var or__3548__auto____15567 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15567))
{return or__3548__auto____15567;
} else
{return cljs.core._EQ_.call(null,scope__15559,opt_scope);
}
} else
{return and__3546__auto____15565;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15548,listener__15556,capture__15561);
} else
{return goog.events.unlisten.call(null,elm,wevent__15548,listener__15556,capture__15561);
}
} else
{return null;
}
}),listeners__15554));
});
return obj__15547;
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
var listen_BANG___15602 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15603 = (function (nds,event,func,capture){
var wrapper__15592 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15593__15596 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15593__15596))
{var node__15597 = cljs.core.first.call(null,G__15593__15596);
var G__15593__15598 = G__15593__15596;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15592)))
{goog.events.listen.call(null,node__15597,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15597,wrapper__15592,func,capture);
}
var temp__3698__auto____15600 = cljs.core.next.call(null,G__15593__15598);

if(cljs.core.truth_(temp__3698__auto____15600))
{var G__15593__15601 = temp__3698__auto____15600;

{
var G__15613 = cljs.core.first.call(null,G__15593__15601);
var G__15614 = G__15593__15601;
node__15597 = G__15613;
G__15593__15598 = G__15614;
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
return listen_BANG___15602.call(this,nds,event,func);
case  4 :
return listen_BANG___15603.call(this,nds,event,func,capture);
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
var unlisten_BANG___15652 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15653 = (function (nds,event,func,capture){
var wrapper__15619 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15620__15623 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15620__15623))
{var node__15626 = cljs.core.first.call(null,G__15620__15623);
var G__15620__15627 = G__15620__15623;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15619)))
{goog.events.unlisten.call(null,node__15626,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15619.unlisten(node__15626,func,capture);
}
var temp__3698__auto____15640 = cljs.core.next.call(null,G__15620__15627);

if(cljs.core.truth_(temp__3698__auto____15640))
{var G__15620__15644 = temp__3698__auto____15640;

{
var G__15656 = cljs.core.first.call(null,G__15620__15644);
var G__15657 = G__15620__15644;
node__15626 = G__15656;
G__15620__15627 = G__15657;
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
return unlisten_BANG___15652.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15653.call(this,nds,event,func,capture);
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
var G__15661__15664 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15661__15664))
{var node__15667 = cljs.core.first.call(null,G__15661__15664);
var G__15661__15669 = G__15661__15664;

while(true){
var map_func__15681 = ((function (node__15667,G__15661__15669){
return (function (p1__15618_SHARP_){
var wrapper__15675 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15618_SHARP_);

if(cljs.core.truth_(wrapper__15675))
{return wrapper__15675.unlisten(node__15667);
} else
{return goog.events.removeAll.call(null,node__15667,cljs.core.name.call(null,p1__15618_SHARP_));
}
});})(node__15667,G__15661__15669))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15681,event_list));
var temp__3698__auto____15687 = cljs.core.next.call(null,G__15661__15669);

if(cljs.core.truth_(temp__3698__auto____15687))
{var G__15661__15688 = temp__3698__auto____15687;

{
var G__15692 = cljs.core.first.call(null,G__15661__15688);
var G__15693 = G__15661__15688;
node__15667 = G__15692;
G__15661__15669 = G__15693;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15695){
var nds = cljs.core.first(arglist__15695);
var event_list = cljs.core.rest(arglist__15695);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15696 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15697 = (cljs.core.truth_(wrapper__15696)?wrapper__15696.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15699 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15699.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15700__15701 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15700__15701))
{var node__15706 = cljs.core.first.call(null,G__15700__15701);
var G__15700__15707 = G__15700__15701;

while(true){
goog.events.fireListeners.call(null,node__15706,nevent__15697,capture,event_obj__15699);
var temp__3698__auto____15708 = cljs.core.next.call(null,G__15700__15707);

if(cljs.core.truth_(temp__3698__auto____15708))
{var G__15700__15709 = temp__3698__auto____15708;

{
var G__15711 = cljs.core.first.call(null,G__15700__15709);
var G__15712 = G__15700__15709;
node__15706 = G__15711;
G__15700__15707 = G__15712;
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
