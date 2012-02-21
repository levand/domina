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
var G__15501 = parent;
var G__15502 = child.parentNode;
parent = G__15501;
child = G__15502;
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
var re__15506 = e.relatedTarget;
var this$__15507 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15509 = cljs.core.not.call(null,(re__15506 === this$__15507));

if(cljs.core.truth_(and__3546__auto____15509))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15507,re__15506));
} else
{return and__3546__auto____15509;
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
var obj__15516 = (new Object());
var wevent__15517 = cljs.core.name.call(null,wrapped_key);
var event__15518 = cljs.core.name.call(null,event_key);

obj__15516.wrapped_event = wevent__15517;
obj__15516.event = event__15518;
obj__15516.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15524 = wrapper_func.call(null,func);

callback__15524.listen = func;
callback__15524.scope = opt_scope;
callback__15524.event = event__15518;
callback__15524.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15517,callback__15524,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15517,callback__15524,capture);
}
});
obj__15516.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15571 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15517,false),goog.events.getListeners.call(null,elm,wevent__15517,true)):goog.events.getListeners.call(null,elm,wevent__15517,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15572 = obj.listener;
var lfunc__15573 = listener__15572.listen;
var scope__15575 = listener__15572.scope;
var capture__15576 = listener__15572.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15580 = (function (){var or__3548__auto____15579 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15579))
{return or__3548__auto____15579;
} else
{return cljs.core._EQ_.call(null,lfunc__15573,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15580))
{var or__3548__auto____15582 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15582))
{return or__3548__auto____15582;
} else
{return cljs.core._EQ_.call(null,scope__15575,opt_scope);
}
} else
{return and__3546__auto____15580;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15517,listener__15572,capture__15576);
} else
{return goog.events.unlisten.call(null,elm,wevent__15517,listener__15572,capture__15576);
}
} else
{return null;
}
}),listeners__15571));
});
return obj__15516;
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
var listen_BANG___15646 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15647 = (function (nds,event,func,capture){
var wrapper__15630 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15631__15632 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15631__15632))
{var node__15634 = cljs.core.first.call(null,G__15631__15632);
var G__15631__15635 = G__15631__15632;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15630)))
{goog.events.listen.call(null,node__15634,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15634,wrapper__15630,func,capture);
}
var temp__3698__auto____15637 = cljs.core.next.call(null,G__15631__15635);

if(cljs.core.truth_(temp__3698__auto____15637))
{var G__15631__15638 = temp__3698__auto____15637;

{
var G__15655 = cljs.core.first.call(null,G__15631__15638);
var G__15656 = G__15631__15638;
node__15634 = G__15655;
G__15631__15635 = G__15656;
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
return listen_BANG___15646.call(this,nds,event,func);
case  4 :
return listen_BANG___15647.call(this,nds,event,func,capture);
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
var unlisten_BANG___15736 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15737 = (function (nds,event,func,capture){
var wrapper__15713 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15726__15727 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15726__15727))
{var node__15728 = cljs.core.first.call(null,G__15726__15727);
var G__15726__15729 = G__15726__15727;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15713)))
{goog.events.unlisten.call(null,node__15728,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15713.unlisten(node__15728,func,capture);
}
var temp__3698__auto____15733 = cljs.core.next.call(null,G__15726__15729);

if(cljs.core.truth_(temp__3698__auto____15733))
{var G__15726__15734 = temp__3698__auto____15733;

{
var G__15741 = cljs.core.first.call(null,G__15726__15734);
var G__15742 = G__15726__15734;
node__15728 = G__15741;
G__15726__15729 = G__15742;
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
return unlisten_BANG___15736.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15737.call(this,nds,event,func,capture);
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
var G__15746__15747 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15746__15747))
{var node__15748 = cljs.core.first.call(null,G__15746__15747);
var G__15746__15749 = G__15746__15747;

while(true){
var map_func__15751 = ((function (node__15748,G__15746__15749){
return (function (p1__15659_SHARP_){
var wrapper__15750 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15659_SHARP_);

if(cljs.core.truth_(wrapper__15750))
{return wrapper__15750.unlisten(node__15748);
} else
{return goog.events.removeAll.call(null,node__15748,cljs.core.name.call(null,p1__15659_SHARP_));
}
});})(node__15748,G__15746__15749))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15751,event_list));
var temp__3698__auto____15752 = cljs.core.next.call(null,G__15746__15749);

if(cljs.core.truth_(temp__3698__auto____15752))
{var G__15746__15754 = temp__3698__auto____15752;

{
var G__15756 = cljs.core.first.call(null,G__15746__15754);
var G__15757 = G__15746__15754;
node__15748 = G__15756;
G__15746__15749 = G__15757;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15758){
var nds = cljs.core.first(arglist__15758);
var event_list = cljs.core.rest(arglist__15758);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15759 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15760 = (cljs.core.truth_(wrapper__15759)?wrapper__15759.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15761 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15761.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15762__15764 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15762__15764))
{var node__15765 = cljs.core.first.call(null,G__15762__15764);
var G__15762__15766 = G__15762__15764;

while(true){
goog.events.fireListeners.call(null,node__15765,nevent__15760,capture,event_obj__15761);
var temp__3698__auto____15767 = cljs.core.next.call(null,G__15762__15766);

if(cljs.core.truth_(temp__3698__auto____15767))
{var G__15762__15768 = temp__3698__auto____15767;

{
var G__15773 = cljs.core.first.call(null,G__15762__15768);
var G__15774 = G__15762__15768;
node__15765 = G__15773;
G__15762__15766 = G__15774;
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
