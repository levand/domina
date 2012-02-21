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
var G__15627 = parent;
var G__15628 = child.parentNode;
parent = G__15627;
child = G__15628;
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
var re__15630 = e.relatedTarget;
var this$__15640 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15641 = cljs.core.not.call(null,(re__15630 === this$__15640));

if(cljs.core.truth_(and__3546__auto____15641))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15640,re__15630));
} else
{return and__3546__auto____15641;
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
var obj__15642 = (new Object());
var wevent__15643 = cljs.core.name.call(null,wrapped_key);
var event__15644 = cljs.core.name.call(null,event_key);

obj__15642.wrapped_event = wevent__15643;
obj__15642.event = event__15644;
obj__15642.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15645 = wrapper_func.call(null,func);

callback__15645.listen = func;
callback__15645.scope = opt_scope;
callback__15645.event = event__15644;
callback__15645.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15643,callback__15645,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15643,callback__15645,capture);
}
});
obj__15642.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15646 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15643,false),goog.events.getListeners.call(null,elm,wevent__15643,true)):goog.events.getListeners.call(null,elm,wevent__15643,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15647 = obj.listener;
var lfunc__15648 = listener__15647.listen;
var scope__15649 = listener__15647.scope;
var capture__15650 = listener__15647.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15652 = (function (){var or__3548__auto____15651 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15651))
{return or__3548__auto____15651;
} else
{return cljs.core._EQ_.call(null,lfunc__15648,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15652))
{var or__3548__auto____15653 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15653))
{return or__3548__auto____15653;
} else
{return cljs.core._EQ_.call(null,scope__15649,opt_scope);
}
} else
{return and__3546__auto____15652;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15643,listener__15647,capture__15650);
} else
{return goog.events.unlisten.call(null,elm,wevent__15643,listener__15647,capture__15650);
}
} else
{return null;
}
}),listeners__15646));
});
return obj__15642;
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
var listen_BANG___15675 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15676 = (function (nds,event,func,capture){
var wrapper__15663 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15664__15666 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15664__15666))
{var node__15668 = cljs.core.first.call(null,G__15664__15666);
var G__15664__15669 = G__15664__15666;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15663)))
{goog.events.listen.call(null,node__15668,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15668,wrapper__15663,func,capture);
}
var temp__3698__auto____15672 = cljs.core.next.call(null,G__15664__15669);

if(cljs.core.truth_(temp__3698__auto____15672))
{var G__15664__15673 = temp__3698__auto____15672;

{
var G__15690 = cljs.core.first.call(null,G__15664__15673);
var G__15691 = G__15664__15673;
node__15668 = G__15690;
G__15664__15669 = G__15691;
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
return listen_BANG___15675.call(this,nds,event,func);
case  4 :
return listen_BANG___15676.call(this,nds,event,func,capture);
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
var unlisten_BANG___15716 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15717 = (function (nds,event,func,capture){
var wrapper__15703 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15707__15708 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15707__15708))
{var node__15709 = cljs.core.first.call(null,G__15707__15708);
var G__15707__15710 = G__15707__15708;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15703)))
{goog.events.unlisten.call(null,node__15709,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15703.unlisten(node__15709,func,capture);
}
var temp__3698__auto____15713 = cljs.core.next.call(null,G__15707__15710);

if(cljs.core.truth_(temp__3698__auto____15713))
{var G__15707__15715 = temp__3698__auto____15713;

{
var G__15719 = cljs.core.first.call(null,G__15707__15715);
var G__15720 = G__15707__15715;
node__15709 = G__15719;
G__15707__15710 = G__15720;
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
return unlisten_BANG___15716.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15717.call(this,nds,event,func,capture);
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
var G__15724__15725 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15724__15725))
{var node__15726 = cljs.core.first.call(null,G__15724__15725);
var G__15724__15727 = G__15724__15725;

while(true){
var map_func__15729 = ((function (node__15726,G__15724__15727){
return (function (p1__15694_SHARP_){
var wrapper__15728 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15694_SHARP_);

if(cljs.core.truth_(wrapper__15728))
{return wrapper__15728.unlisten(node__15726);
} else
{return goog.events.removeAll.call(null,node__15726,cljs.core.name.call(null,p1__15694_SHARP_));
}
});})(node__15726,G__15724__15727))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15729,event_list));
var temp__3698__auto____15730 = cljs.core.next.call(null,G__15724__15727);

if(cljs.core.truth_(temp__3698__auto____15730))
{var G__15724__15731 = temp__3698__auto____15730;

{
var G__15732 = cljs.core.first.call(null,G__15724__15731);
var G__15733 = G__15724__15731;
node__15726 = G__15732;
G__15724__15727 = G__15733;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15734){
var nds = cljs.core.first(arglist__15734);
var event_list = cljs.core.rest(arglist__15734);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15735 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15738 = (cljs.core.truth_(wrapper__15735)?wrapper__15735.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15739 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15739.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15740__15741 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15740__15741))
{var node__15742 = cljs.core.first.call(null,G__15740__15741);
var G__15740__15743 = G__15740__15741;

while(true){
goog.events.fireListeners.call(null,node__15742,nevent__15738,capture,event_obj__15739);
var temp__3698__auto____15744 = cljs.core.next.call(null,G__15740__15743);

if(cljs.core.truth_(temp__3698__auto____15744))
{var G__15740__15745 = temp__3698__auto____15744;

{
var G__15814 = cljs.core.first.call(null,G__15740__15745);
var G__15815 = G__15740__15745;
node__15742 = G__15814;
G__15740__15743 = G__15815;
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
