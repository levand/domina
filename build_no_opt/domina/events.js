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
var G__15550 = parent;
var G__15551 = child.parentNode;
parent = G__15550;
child = G__15551;
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
var re__15552 = e.relatedTarget;
var this$__15553 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15556 = cljs.core.not.call(null,(re__15552 === this$__15553));

if(cljs.core.truth_(and__3546__auto____15556))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15553,re__15552));
} else
{return and__3546__auto____15556;
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
var obj__15565 = (new Object());
var wevent__15566 = cljs.core.name.call(null,wrapped_key);
var event__15567 = cljs.core.name.call(null,event_key);

obj__15565.wrapped_event = wevent__15566;
obj__15565.event = event__15567;
obj__15565.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15568 = wrapper_func.call(null,func);

callback__15568.listen = func;
callback__15568.scope = opt_scope;
callback__15568.event = event__15567;
callback__15568.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15566,callback__15568,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15566,callback__15568,capture);
}
});
obj__15565.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15572 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15566,false),goog.events.getListeners.call(null,elm,wevent__15566,true)):goog.events.getListeners.call(null,elm,wevent__15566,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15575 = obj.listener;
var lfunc__15576 = listener__15575.listen;
var scope__15577 = listener__15575.scope;
var capture__15579 = listener__15575.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15581 = (function (){var or__3548__auto____15580 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15580))
{return or__3548__auto____15580;
} else
{return cljs.core._EQ_.call(null,lfunc__15576,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15581))
{var or__3548__auto____15582 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15582))
{return or__3548__auto____15582;
} else
{return cljs.core._EQ_.call(null,scope__15577,opt_scope);
}
} else
{return and__3546__auto____15581;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15566,listener__15575,capture__15579);
} else
{return goog.events.unlisten.call(null,elm,wevent__15566,listener__15575,capture__15579);
}
} else
{return null;
}
}),listeners__15572));
});
return obj__15565;
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
var listen_BANG___15612 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15613 = (function (nds,event,func,capture){
var wrapper__15583 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15584__15585 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15584__15585))
{var node__15586 = cljs.core.first.call(null,G__15584__15585);
var G__15584__15587 = G__15584__15585;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15583)))
{goog.events.listen.call(null,node__15586,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15586,wrapper__15583,func,capture);
}
var temp__3698__auto____15590 = cljs.core.next.call(null,G__15584__15587);

if(cljs.core.truth_(temp__3698__auto____15590))
{var G__15584__15604 = temp__3698__auto____15590;

{
var G__15619 = cljs.core.first.call(null,G__15584__15604);
var G__15620 = G__15584__15604;
node__15586 = G__15619;
G__15584__15587 = G__15620;
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
return listen_BANG___15612.call(this,nds,event,func);
case  4 :
return listen_BANG___15613.call(this,nds,event,func,capture);
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
var unlisten_BANG___15646 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15647 = (function (nds,event,func,capture){
var wrapper__15627 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15628__15632 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15628__15632))
{var node__15635 = cljs.core.first.call(null,G__15628__15632);
var G__15628__15636 = G__15628__15632;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15627)))
{goog.events.unlisten.call(null,node__15635,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15627.unlisten(node__15635,func,capture);
}
var temp__3698__auto____15640 = cljs.core.next.call(null,G__15628__15636);

if(cljs.core.truth_(temp__3698__auto____15640))
{var G__15628__15643 = temp__3698__auto____15640;

{
var G__15655 = cljs.core.first.call(null,G__15628__15643);
var G__15656 = G__15628__15643;
node__15635 = G__15655;
G__15628__15636 = G__15656;
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
return unlisten_BANG___15646.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15647.call(this,nds,event,func,capture);
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
var G__15659__15662 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15659__15662))
{var node__15666 = cljs.core.first.call(null,G__15659__15662);
var G__15659__15668 = G__15659__15662;

while(true){
var map_func__15676 = ((function (node__15666,G__15659__15668){
return (function (p1__15622_SHARP_){
var wrapper__15672 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15622_SHARP_);

if(cljs.core.truth_(wrapper__15672))
{return wrapper__15672.unlisten(node__15666);
} else
{return goog.events.removeAll.call(null,node__15666,cljs.core.name.call(null,p1__15622_SHARP_));
}
});})(node__15666,G__15659__15668))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15676,event_list));
var temp__3698__auto____15681 = cljs.core.next.call(null,G__15659__15668);

if(cljs.core.truth_(temp__3698__auto____15681))
{var G__15659__15682 = temp__3698__auto____15681;

{
var G__15687 = cljs.core.first.call(null,G__15659__15682);
var G__15688 = G__15659__15682;
node__15666 = G__15687;
G__15659__15668 = G__15688;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15690){
var nds = cljs.core.first(arglist__15690);
var event_list = cljs.core.rest(arglist__15690);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15692 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15708 = (cljs.core.truth_(wrapper__15692)?wrapper__15692.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15709 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15709.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15711__15712 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15711__15712))
{var node__15713 = cljs.core.first.call(null,G__15711__15712);
var G__15711__15714 = G__15711__15712;

while(true){
goog.events.fireListeners.call(null,node__15713,nevent__15708,capture,event_obj__15709);
var temp__3698__auto____15715 = cljs.core.next.call(null,G__15711__15714);

if(cljs.core.truth_(temp__3698__auto____15715))
{var G__15711__15718 = temp__3698__auto____15715;

{
var G__15719 = cljs.core.first.call(null,G__15711__15718);
var G__15720 = G__15711__15718;
node__15713 = G__15719;
G__15711__15714 = G__15720;
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
