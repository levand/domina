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
var G__15609 = parent;
var G__15610 = child.parentNode;
parent = G__15609;
child = G__15610;
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
var re__15615 = e.relatedTarget;
var this$__15616 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15617 = cljs.core.not.call(null,(re__15615 === this$__15616));

if(cljs.core.truth_(and__3546__auto____15617))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15616,re__15615));
} else
{return and__3546__auto____15617;
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
var obj__15621 = (new Object());
var wevent__15622 = cljs.core.name.call(null,wrapped_key);
var event__15623 = cljs.core.name.call(null,event_key);

obj__15621.wrapped_event = wevent__15622;
obj__15621.event = event__15623;
obj__15621.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15627 = wrapper_func.call(null,func);

callback__15627.listen = func;
callback__15627.scope = opt_scope;
callback__15627.event = event__15623;
callback__15627.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15622,callback__15627,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15622,callback__15627,capture);
}
});
obj__15621.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15638 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15622,false),goog.events.getListeners.call(null,elm,wevent__15622,true)):goog.events.getListeners.call(null,elm,wevent__15622,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15640 = obj.listener;
var lfunc__15641 = listener__15640.listen;
var scope__15643 = listener__15640.scope;
var capture__15644 = listener__15640.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15647 = (function (){var or__3548__auto____15646 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15646))
{return or__3548__auto____15646;
} else
{return cljs.core._EQ_.call(null,lfunc__15641,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15647))
{var or__3548__auto____15649 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15649))
{return or__3548__auto____15649;
} else
{return cljs.core._EQ_.call(null,scope__15643,opt_scope);
}
} else
{return and__3546__auto____15647;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15622,listener__15640,capture__15644);
} else
{return goog.events.unlisten.call(null,elm,wevent__15622,listener__15640,capture__15644);
}
} else
{return null;
}
}),listeners__15638));
});
return obj__15621;
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
var listen_BANG___15726 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15727 = (function (nds,event,func,capture){
var wrapper__15711 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15712__15713 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15712__15713))
{var node__15714 = cljs.core.first.call(null,G__15712__15713);
var G__15712__15715 = G__15712__15713;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15711)))
{goog.events.listen.call(null,node__15714,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15714,wrapper__15711,func,capture);
}
var temp__3698__auto____15719 = cljs.core.next.call(null,G__15712__15715);

if(cljs.core.truth_(temp__3698__auto____15719))
{var G__15712__15721 = temp__3698__auto____15719;

{
var G__15737 = cljs.core.first.call(null,G__15712__15721);
var G__15738 = G__15712__15721;
node__15714 = G__15737;
G__15712__15715 = G__15738;
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
return listen_BANG___15726.call(this,nds,event,func);
case  4 :
return listen_BANG___15727.call(this,nds,event,func,capture);
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
var unlisten_BANG___15755 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15756 = (function (nds,event,func,capture){
var wrapper__15744 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15745__15747 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15745__15747))
{var node__15748 = cljs.core.first.call(null,G__15745__15747);
var G__15745__15749 = G__15745__15747;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15744)))
{goog.events.unlisten.call(null,node__15748,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15744.unlisten(node__15748,func,capture);
}
var temp__3698__auto____15752 = cljs.core.next.call(null,G__15745__15749);

if(cljs.core.truth_(temp__3698__auto____15752))
{var G__15745__15753 = temp__3698__auto____15752;

{
var G__15760 = cljs.core.first.call(null,G__15745__15753);
var G__15761 = G__15745__15753;
node__15748 = G__15760;
G__15745__15749 = G__15761;
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
return unlisten_BANG___15755.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15756.call(this,nds,event,func,capture);
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
var G__15766__15770 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15766__15770))
{var node__15771 = cljs.core.first.call(null,G__15766__15770);
var G__15766__15772 = G__15766__15770;

while(true){
var map_func__15774 = ((function (node__15771,G__15766__15772){
return (function (p1__15742_SHARP_){
var wrapper__15773 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15742_SHARP_);

if(cljs.core.truth_(wrapper__15773))
{return wrapper__15773.unlisten(node__15771);
} else
{return goog.events.removeAll.call(null,node__15771,cljs.core.name.call(null,p1__15742_SHARP_));
}
});})(node__15771,G__15766__15772))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15774,event_list));
var temp__3698__auto____15775 = cljs.core.next.call(null,G__15766__15772);

if(cljs.core.truth_(temp__3698__auto____15775))
{var G__15766__15776 = temp__3698__auto____15775;

{
var G__15782 = cljs.core.first.call(null,G__15766__15776);
var G__15783 = G__15766__15776;
node__15771 = G__15782;
G__15766__15772 = G__15783;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15786){
var nds = cljs.core.first(arglist__15786);
var event_list = cljs.core.rest(arglist__15786);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15791 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15792 = (cljs.core.truth_(wrapper__15791)?wrapper__15791.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15793 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15793.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15794__15795 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15794__15795))
{var node__15797 = cljs.core.first.call(null,G__15794__15795);
var G__15794__15798 = G__15794__15795;

while(true){
goog.events.fireListeners.call(null,node__15797,nevent__15792,capture,event_obj__15793);
var temp__3698__auto____15799 = cljs.core.next.call(null,G__15794__15798);

if(cljs.core.truth_(temp__3698__auto____15799))
{var G__15794__15800 = temp__3698__auto____15799;

{
var G__15804 = cljs.core.first.call(null,G__15794__15800);
var G__15805 = G__15794__15800;
node__15797 = G__15804;
G__15794__15798 = G__15805;
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
