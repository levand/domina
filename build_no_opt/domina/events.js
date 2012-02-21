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
var G__15566 = parent;
var G__15567 = child.parentNode;
parent = G__15566;
child = G__15567;
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
var re__15568 = e.relatedTarget;
var this$__15570 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15571 = cljs.core.not.call(null,(re__15568 === this$__15570));

if(cljs.core.truth_(and__3546__auto____15571))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15570,re__15568));
} else
{return and__3546__auto____15571;
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
var obj__15574 = (new Object());
var wevent__15576 = cljs.core.name.call(null,wrapped_key);
var event__15577 = cljs.core.name.call(null,event_key);

obj__15574.wrapped_event = wevent__15576;
obj__15574.event = event__15577;
obj__15574.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15581 = wrapper_func.call(null,func);

callback__15581.listen = func;
callback__15581.scope = opt_scope;
callback__15581.event = event__15577;
callback__15581.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15576,callback__15581,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15576,callback__15581,capture);
}
});
obj__15574.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15586 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15576,false),goog.events.getListeners.call(null,elm,wevent__15576,true)):goog.events.getListeners.call(null,elm,wevent__15576,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15588 = obj.listener;
var lfunc__15589 = listener__15588.listen;
var scope__15590 = listener__15588.scope;
var capture__15591 = listener__15588.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15593 = (function (){var or__3548__auto____15592 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15592))
{return or__3548__auto____15592;
} else
{return cljs.core._EQ_.call(null,lfunc__15589,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15593))
{var or__3548__auto____15595 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15595))
{return or__3548__auto____15595;
} else
{return cljs.core._EQ_.call(null,scope__15590,opt_scope);
}
} else
{return and__3546__auto____15593;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15576,listener__15588,capture__15591);
} else
{return goog.events.unlisten.call(null,elm,wevent__15576,listener__15588,capture__15591);
}
} else
{return null;
}
}),listeners__15586));
});
return obj__15574;
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
var listen_BANG___15624 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15625 = (function (nds,event,func,capture){
var wrapper__15611 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15613__15614 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15613__15614))
{var node__15616 = cljs.core.first.call(null,G__15613__15614);
var G__15613__15618 = G__15613__15614;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15611)))
{goog.events.listen.call(null,node__15616,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15616,wrapper__15611,func,capture);
}
var temp__3698__auto____15622 = cljs.core.next.call(null,G__15613__15618);

if(cljs.core.truth_(temp__3698__auto____15622))
{var G__15613__15623 = temp__3698__auto____15622;

{
var G__15628 = cljs.core.first.call(null,G__15613__15623);
var G__15629 = G__15613__15623;
node__15616 = G__15628;
G__15613__15618 = G__15629;
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
return listen_BANG___15624.call(this,nds,event,func);
case  4 :
return listen_BANG___15625.call(this,nds,event,func,capture);
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
var unlisten_BANG___15638 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15639 = (function (nds,event,func,capture){
var wrapper__15631 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15632__15633 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15632__15633))
{var node__15634 = cljs.core.first.call(null,G__15632__15633);
var G__15632__15635 = G__15632__15633;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15631)))
{goog.events.unlisten.call(null,node__15634,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15631.unlisten(node__15634,func,capture);
}
var temp__3698__auto____15636 = cljs.core.next.call(null,G__15632__15635);

if(cljs.core.truth_(temp__3698__auto____15636))
{var G__15632__15637 = temp__3698__auto____15636;

{
var G__15649 = cljs.core.first.call(null,G__15632__15637);
var G__15650 = G__15632__15637;
node__15634 = G__15649;
G__15632__15635 = G__15650;
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
return unlisten_BANG___15638.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15639.call(this,nds,event,func,capture);
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
var G__15651__15653 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15651__15653))
{var node__15655 = cljs.core.first.call(null,G__15651__15653);
var G__15651__15656 = G__15651__15653;

while(true){
var map_func__15659 = ((function (node__15655,G__15651__15656){
return (function (p1__15630_SHARP_){
var wrapper__15658 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15630_SHARP_);

if(cljs.core.truth_(wrapper__15658))
{return wrapper__15658.unlisten(node__15655);
} else
{return goog.events.removeAll.call(null,node__15655,cljs.core.name.call(null,p1__15630_SHARP_));
}
});})(node__15655,G__15651__15656))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15659,event_list));
var temp__3698__auto____15660 = cljs.core.next.call(null,G__15651__15656);

if(cljs.core.truth_(temp__3698__auto____15660))
{var G__15651__15661 = temp__3698__auto____15660;

{
var G__15666 = cljs.core.first.call(null,G__15651__15661);
var G__15667 = G__15651__15661;
node__15655 = G__15666;
G__15651__15656 = G__15667;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15668){
var nds = cljs.core.first(arglist__15668);
var event_list = cljs.core.rest(arglist__15668);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15670 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15671 = (cljs.core.truth_(wrapper__15670)?wrapper__15670.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15673 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15673.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15676__15678 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15676__15678))
{var node__15680 = cljs.core.first.call(null,G__15676__15678);
var G__15676__15681 = G__15676__15678;

while(true){
goog.events.fireListeners.call(null,node__15680,nevent__15671,capture,event_obj__15673);
var temp__3698__auto____15684 = cljs.core.next.call(null,G__15676__15681);

if(cljs.core.truth_(temp__3698__auto____15684))
{var G__15676__15685 = temp__3698__auto____15684;

{
var G__15686 = cljs.core.first.call(null,G__15676__15685);
var G__15687 = G__15676__15685;
node__15680 = G__15686;
G__15676__15681 = G__15687;
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
