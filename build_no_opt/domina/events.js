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
var G__15534 = parent;
var G__15535 = child.parentNode;
parent = G__15534;
child = G__15535;
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

if(cljs.core.truth_((function (){var and__3546__auto____15541 = cljs.core.not.call(null,(re__15539 === this$__15540));

if(cljs.core.truth_(and__3546__auto____15541))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15540,re__15539));
} else
{return and__3546__auto____15541;
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
var obj__15552 = (new Object());
var wevent__15553 = cljs.core.name.call(null,wrapped_key);
var event__15554 = cljs.core.name.call(null,event_key);

obj__15552.wrapped_event = wevent__15553;
obj__15552.event = event__15554;
obj__15552.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15555 = wrapper_func.call(null,func);

callback__15555.listen = func;
callback__15555.scope = opt_scope;
callback__15555.event = event__15554;
callback__15555.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15553,callback__15555,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15553,callback__15555,capture);
}
});
obj__15552.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15556 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15553,false),goog.events.getListeners.call(null,elm,wevent__15553,true)):goog.events.getListeners.call(null,elm,wevent__15553,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15557 = obj.listener;
var lfunc__15558 = listener__15557.listen;
var scope__15559 = listener__15557.scope;
var capture__15560 = listener__15557.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15562 = (function (){var or__3548__auto____15561 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15561))
{return or__3548__auto____15561;
} else
{return cljs.core._EQ_.call(null,lfunc__15558,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15562))
{var or__3548__auto____15563 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15563))
{return or__3548__auto____15563;
} else
{return cljs.core._EQ_.call(null,scope__15559,opt_scope);
}
} else
{return and__3546__auto____15562;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15553,listener__15557,capture__15560);
} else
{return goog.events.unlisten.call(null,elm,wevent__15553,listener__15557,capture__15560);
}
} else
{return null;
}
}),listeners__15556));
});
return obj__15552;
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
var listen_BANG___15588 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15589 = (function (nds,event,func,capture){
var wrapper__15581 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15582__15583 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15582__15583))
{var node__15584 = cljs.core.first.call(null,G__15582__15583);
var G__15582__15585 = G__15582__15583;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15581)))
{goog.events.listen.call(null,node__15584,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15584,wrapper__15581,func,capture);
}
var temp__3698__auto____15586 = cljs.core.next.call(null,G__15582__15585);

if(cljs.core.truth_(temp__3698__auto____15586))
{var G__15582__15587 = temp__3698__auto____15586;

{
var G__15591 = cljs.core.first.call(null,G__15582__15587);
var G__15592 = G__15582__15587;
node__15584 = G__15591;
G__15582__15585 = G__15592;
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
return listen_BANG___15588.call(this,nds,event,func);
case  4 :
return listen_BANG___15589.call(this,nds,event,func,capture);
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
var unlisten_BANG___15624 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15625 = (function (nds,event,func,capture){
var wrapper__15595 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15596__15599 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15596__15599))
{var node__15601 = cljs.core.first.call(null,G__15596__15599);
var G__15596__15602 = G__15596__15599;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15595)))
{goog.events.unlisten.call(null,node__15601,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15595.unlisten(node__15601,func,capture);
}
var temp__3698__auto____15622 = cljs.core.next.call(null,G__15596__15602);

if(cljs.core.truth_(temp__3698__auto____15622))
{var G__15596__15623 = temp__3698__auto____15622;

{
var G__15627 = cljs.core.first.call(null,G__15596__15623);
var G__15628 = G__15596__15623;
node__15601 = G__15627;
G__15596__15602 = G__15628;
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
return unlisten_BANG___15624.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15625.call(this,nds,event,func,capture);
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
var G__15629__15630 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15629__15630))
{var node__15631 = cljs.core.first.call(null,G__15629__15630);
var G__15629__15632 = G__15629__15630;

while(true){
var map_func__15634 = ((function (node__15631,G__15629__15632){
return (function (p1__15593_SHARP_){
var wrapper__15633 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15593_SHARP_);

if(cljs.core.truth_(wrapper__15633))
{return wrapper__15633.unlisten(node__15631);
} else
{return goog.events.removeAll.call(null,node__15631,cljs.core.name.call(null,p1__15593_SHARP_));
}
});})(node__15631,G__15629__15632))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15634,event_list));
var temp__3698__auto____15635 = cljs.core.next.call(null,G__15629__15632);

if(cljs.core.truth_(temp__3698__auto____15635))
{var G__15629__15636 = temp__3698__auto____15635;

{
var G__15640 = cljs.core.first.call(null,G__15629__15636);
var G__15642 = G__15629__15636;
node__15631 = G__15640;
G__15629__15632 = G__15642;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15643){
var nds = cljs.core.first(arglist__15643);
var event_list = cljs.core.rest(arglist__15643);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15647 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15648 = (cljs.core.truth_(wrapper__15647)?wrapper__15647.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15649 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15649.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15650__15651 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15650__15651))
{var node__15654 = cljs.core.first.call(null,G__15650__15651);
var G__15650__15712 = G__15650__15651;

while(true){
goog.events.fireListeners.call(null,node__15654,nevent__15648,capture,event_obj__15649);
var temp__3698__auto____15713 = cljs.core.next.call(null,G__15650__15712);

if(cljs.core.truth_(temp__3698__auto____15713))
{var G__15650__15714 = temp__3698__auto____15713;

{
var G__15715 = cljs.core.first.call(null,G__15650__15714);
var G__15716 = G__15650__15714;
node__15654 = G__15715;
G__15650__15712 = G__15716;
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
