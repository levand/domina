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
var G__15525 = parent;
var G__15526 = child.parentNode;
parent = G__15525;
child = G__15526;
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
var re__15567 = e.relatedTarget;
var this$__15569 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15572 = cljs.core.not.call(null,(re__15567 === this$__15569));

if(cljs.core.truth_(and__3546__auto____15572))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15569,re__15567));
} else
{return and__3546__auto____15572;
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
var obj__15583 = (new Object());
var wevent__15584 = cljs.core.name.call(null,wrapped_key);
var event__15586 = cljs.core.name.call(null,event_key);

obj__15583.wrapped_event = wevent__15584;
obj__15583.event = event__15586;
obj__15583.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15591 = wrapper_func.call(null,func);

callback__15591.listen = func;
callback__15591.scope = opt_scope;
callback__15591.event = event__15586;
callback__15591.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15584,callback__15591,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15584,callback__15591,capture);
}
});
obj__15583.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15604 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15584,false),goog.events.getListeners.call(null,elm,wevent__15584,true)):goog.events.getListeners.call(null,elm,wevent__15584,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15606 = obj.listener;
var lfunc__15607 = listener__15606.listen;
var scope__15608 = listener__15606.scope;
var capture__15609 = listener__15606.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15617 = (function (){var or__3548__auto____15616 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15616))
{return or__3548__auto____15616;
} else
{return cljs.core._EQ_.call(null,lfunc__15607,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15617))
{var or__3548__auto____15618 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15618))
{return or__3548__auto____15618;
} else
{return cljs.core._EQ_.call(null,scope__15608,opt_scope);
}
} else
{return and__3546__auto____15617;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15584,listener__15606,capture__15609);
} else
{return goog.events.unlisten.call(null,elm,wevent__15584,listener__15606,capture__15609);
}
} else
{return null;
}
}),listeners__15604));
});
return obj__15583;
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
var listen_BANG___15669 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15670 = (function (nds,event,func,capture){
var wrapper__15655 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15656__15658 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15656__15658))
{var node__15660 = cljs.core.first.call(null,G__15656__15658);
var G__15656__15662 = G__15656__15658;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15655)))
{goog.events.listen.call(null,node__15660,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15660,wrapper__15655,func,capture);
}
var temp__3698__auto____15665 = cljs.core.next.call(null,G__15656__15662);

if(cljs.core.truth_(temp__3698__auto____15665))
{var G__15656__15666 = temp__3698__auto____15665;

{
var G__15675 = cljs.core.first.call(null,G__15656__15666);
var G__15676 = G__15656__15666;
node__15660 = G__15675;
G__15656__15662 = G__15676;
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
return listen_BANG___15669.call(this,nds,event,func);
case  4 :
return listen_BANG___15670.call(this,nds,event,func,capture);
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
var unlisten_BANG___15704 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15705 = (function (nds,event,func,capture){
var wrapper__15681 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15684__15688 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15684__15688))
{var node__15691 = cljs.core.first.call(null,G__15684__15688);
var G__15684__15695 = G__15684__15688;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15681)))
{goog.events.unlisten.call(null,node__15691,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15681.unlisten(node__15691,func,capture);
}
var temp__3698__auto____15698 = cljs.core.next.call(null,G__15684__15695);

if(cljs.core.truth_(temp__3698__auto____15698))
{var G__15684__15700 = temp__3698__auto____15698;

{
var G__15709 = cljs.core.first.call(null,G__15684__15700);
var G__15710 = G__15684__15700;
node__15691 = G__15709;
G__15684__15695 = G__15710;
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
return unlisten_BANG___15704.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15705.call(this,nds,event,func,capture);
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
var G__15713__15716 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15713__15716))
{var node__15718 = cljs.core.first.call(null,G__15713__15716);
var G__15713__15719 = G__15713__15716;

while(true){
var map_func__15724 = ((function (node__15718,G__15713__15719){
return (function (p1__15679_SHARP_){
var wrapper__15722 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15679_SHARP_);

if(cljs.core.truth_(wrapper__15722))
{return wrapper__15722.unlisten(node__15718);
} else
{return goog.events.removeAll.call(null,node__15718,cljs.core.name.call(null,p1__15679_SHARP_));
}
});})(node__15718,G__15713__15719))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15724,event_list));
var temp__3698__auto____15726 = cljs.core.next.call(null,G__15713__15719);

if(cljs.core.truth_(temp__3698__auto____15726))
{var G__15713__15727 = temp__3698__auto____15726;

{
var G__15737 = cljs.core.first.call(null,G__15713__15727);
var G__15738 = G__15713__15727;
node__15718 = G__15737;
G__15713__15719 = G__15738;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15739){
var nds = cljs.core.first(arglist__15739);
var event_list = cljs.core.rest(arglist__15739);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15743 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15745 = (cljs.core.truth_(wrapper__15743)?wrapper__15743.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15748 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15748.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15749__15751 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15749__15751))
{var node__15752 = cljs.core.first.call(null,G__15749__15751);
var G__15749__15754 = G__15749__15751;

while(true){
goog.events.fireListeners.call(null,node__15752,nevent__15745,capture,event_obj__15748);
var temp__3698__auto____15755 = cljs.core.next.call(null,G__15749__15754);

if(cljs.core.truth_(temp__3698__auto____15755))
{var G__15749__15757 = temp__3698__auto____15755;

{
var G__15760 = cljs.core.first.call(null,G__15749__15757);
var G__15762 = G__15749__15757;
node__15752 = G__15760;
G__15749__15754 = G__15762;
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
