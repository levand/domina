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
var G__15618 = parent;
var G__15619 = child.parentNode;
parent = G__15618;
child = G__15619;
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
var re__15622 = e.relatedTarget;
var this$__15623 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15625 = cljs.core.not.call(null,(re__15622 === this$__15623));

if(cljs.core.truth_(and__3546__auto____15625))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15623,re__15622));
} else
{return and__3546__auto____15625;
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
var obj__15630 = (new Object());
var wevent__15631 = cljs.core.name.call(null,wrapped_key);
var event__15632 = cljs.core.name.call(null,event_key);

obj__15630.wrapped_event = wevent__15631;
obj__15630.event = event__15632;
obj__15630.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15656 = wrapper_func.call(null,func);

callback__15656.listen = func;
callback__15656.scope = opt_scope;
callback__15656.event = event__15632;
callback__15656.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15631,callback__15656,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15631,callback__15656,capture);
}
});
obj__15630.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15658 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15631,false),goog.events.getListeners.call(null,elm,wevent__15631,true)):goog.events.getListeners.call(null,elm,wevent__15631,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15660 = obj.listener;
var lfunc__15662 = listener__15660.listen;
var scope__15663 = listener__15660.scope;
var capture__15665 = listener__15660.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15667 = (function (){var or__3548__auto____15666 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15666))
{return or__3548__auto____15666;
} else
{return cljs.core._EQ_.call(null,lfunc__15662,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15667))
{var or__3548__auto____15669 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15669))
{return or__3548__auto____15669;
} else
{return cljs.core._EQ_.call(null,scope__15663,opt_scope);
}
} else
{return and__3546__auto____15667;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15631,listener__15660,capture__15665);
} else
{return goog.events.unlisten.call(null,elm,wevent__15631,listener__15660,capture__15665);
}
} else
{return null;
}
}),listeners__15658));
});
return obj__15630;
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
var listen_BANG___15686 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15687 = (function (nds,event,func,capture){
var wrapper__15672 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15673__15676 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15673__15676))
{var node__15678 = cljs.core.first.call(null,G__15673__15676);
var G__15673__15680 = G__15673__15676;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15672)))
{goog.events.listen.call(null,node__15678,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15678,wrapper__15672,func,capture);
}
var temp__3698__auto____15682 = cljs.core.next.call(null,G__15673__15680);

if(cljs.core.truth_(temp__3698__auto____15682))
{var G__15673__15684 = temp__3698__auto____15682;

{
var G__15692 = cljs.core.first.call(null,G__15673__15684);
var G__15693 = G__15673__15684;
node__15678 = G__15692;
G__15673__15680 = G__15693;
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
return listen_BANG___15686.call(this,nds,event,func);
case  4 :
return listen_BANG___15687.call(this,nds,event,func,capture);
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
var unlisten_BANG___15712 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15713 = (function (nds,event,func,capture){
var wrapper__15698 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15699__15701 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15699__15701))
{var node__15703 = cljs.core.first.call(null,G__15699__15701);
var G__15699__15704 = G__15699__15701;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15698)))
{goog.events.unlisten.call(null,node__15703,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15698.unlisten(node__15703,func,capture);
}
var temp__3698__auto____15708 = cljs.core.next.call(null,G__15699__15704);

if(cljs.core.truth_(temp__3698__auto____15708))
{var G__15699__15709 = temp__3698__auto____15708;

{
var G__15718 = cljs.core.first.call(null,G__15699__15709);
var G__15719 = G__15699__15709;
node__15703 = G__15718;
G__15699__15704 = G__15719;
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
return unlisten_BANG___15712.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15713.call(this,nds,event,func,capture);
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
var G__15722__15724 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15722__15724))
{var node__15726 = cljs.core.first.call(null,G__15722__15724);
var G__15722__15728 = G__15722__15724;

while(true){
var map_func__15762 = ((function (node__15726,G__15722__15728){
return (function (p1__15696_SHARP_){
var wrapper__15730 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15696_SHARP_);

if(cljs.core.truth_(wrapper__15730))
{return wrapper__15730.unlisten(node__15726);
} else
{return goog.events.removeAll.call(null,node__15726,cljs.core.name.call(null,p1__15696_SHARP_));
}
});})(node__15726,G__15722__15728))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15762,event_list));
var temp__3698__auto____15764 = cljs.core.next.call(null,G__15722__15728);

if(cljs.core.truth_(temp__3698__auto____15764))
{var G__15722__15767 = temp__3698__auto____15764;

{
var G__15776 = cljs.core.first.call(null,G__15722__15767);
var G__15777 = G__15722__15767;
node__15726 = G__15776;
G__15722__15728 = G__15777;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15781){
var nds = cljs.core.first(arglist__15781);
var event_list = cljs.core.rest(arglist__15781);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15782 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15784 = (cljs.core.truth_(wrapper__15782)?wrapper__15782.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15786 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15786.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15789__15810 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15789__15810))
{var node__15811 = cljs.core.first.call(null,G__15789__15810);
var G__15789__15812 = G__15789__15810;

while(true){
goog.events.fireListeners.call(null,node__15811,nevent__15784,capture,event_obj__15786);
var temp__3698__auto____15815 = cljs.core.next.call(null,G__15789__15812);

if(cljs.core.truth_(temp__3698__auto____15815))
{var G__15789__15816 = temp__3698__auto____15815;

{
var G__15821 = cljs.core.first.call(null,G__15789__15816);
var G__15822 = G__15789__15816;
node__15811 = G__15821;
G__15789__15812 = G__15822;
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
