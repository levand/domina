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
var re__15546 = e.relatedTarget;
var this$__15547 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15562 = cljs.core.not.call(null,(re__15546 === this$__15547));

if(cljs.core.truth_(and__3546__auto____15562))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15547,re__15546));
} else
{return and__3546__auto____15562;
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
var obj__15629 = (new Object());
var wevent__15630 = cljs.core.name.call(null,wrapped_key);
var event__15631 = cljs.core.name.call(null,event_key);

obj__15629.wrapped_event = wevent__15630;
obj__15629.event = event__15631;
obj__15629.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15632 = wrapper_func.call(null,func);

callback__15632.listen = func;
callback__15632.scope = opt_scope;
callback__15632.event = event__15631;
callback__15632.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15630,callback__15632,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15630,callback__15632,capture);
}
});
obj__15629.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15633 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15630,false),goog.events.getListeners.call(null,elm,wevent__15630,true)):goog.events.getListeners.call(null,elm,wevent__15630,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15634 = obj.listener;
var lfunc__15636 = listener__15634.listen;
var scope__15637 = listener__15634.scope;
var capture__15638 = listener__15634.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15681 = (function (){var or__3548__auto____15677 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15677))
{return or__3548__auto____15677;
} else
{return cljs.core._EQ_.call(null,lfunc__15636,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15681))
{var or__3548__auto____15684 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15684))
{return or__3548__auto____15684;
} else
{return cljs.core._EQ_.call(null,scope__15637,opt_scope);
}
} else
{return and__3546__auto____15681;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15630,listener__15634,capture__15638);
} else
{return goog.events.unlisten.call(null,elm,wevent__15630,listener__15634,capture__15638);
}
} else
{return null;
}
}),listeners__15633));
});
return obj__15629;
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
var listen_BANG___15733 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15735 = (function (nds,event,func,capture){
var wrapper__15716 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15717__15720 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15717__15720))
{var node__15721 = cljs.core.first.call(null,G__15717__15720);
var G__15717__15722 = G__15717__15720;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15716)))
{goog.events.listen.call(null,node__15721,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15721,wrapper__15716,func,capture);
}
var temp__3698__auto____15726 = cljs.core.next.call(null,G__15717__15722);

if(cljs.core.truth_(temp__3698__auto____15726))
{var G__15717__15727 = temp__3698__auto____15726;

{
var G__15741 = cljs.core.first.call(null,G__15717__15727);
var G__15742 = G__15717__15727;
node__15721 = G__15741;
G__15717__15722 = G__15742;
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
return listen_BANG___15733.call(this,nds,event,func);
case  4 :
return listen_BANG___15735.call(this,nds,event,func,capture);
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
var unlisten_BANG___15761 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15762 = (function (nds,event,func,capture){
var wrapper__15750 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15751__15753 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15751__15753))
{var node__15756 = cljs.core.first.call(null,G__15751__15753);
var G__15751__15758 = G__15751__15753;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15750)))
{goog.events.unlisten.call(null,node__15756,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15750.unlisten(node__15756,func,capture);
}
var temp__3698__auto____15759 = cljs.core.next.call(null,G__15751__15758);

if(cljs.core.truth_(temp__3698__auto____15759))
{var G__15751__15760 = temp__3698__auto____15759;

{
var G__15764 = cljs.core.first.call(null,G__15751__15760);
var G__15765 = G__15751__15760;
node__15756 = G__15764;
G__15751__15758 = G__15765;
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
return unlisten_BANG___15761.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15762.call(this,nds,event,func,capture);
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
var G__15766__15774 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15766__15774))
{var node__15782 = cljs.core.first.call(null,G__15766__15774);
var G__15766__15783 = G__15766__15774;

while(true){
var map_func__15785 = ((function (node__15782,G__15766__15783){
return (function (p1__15746_SHARP_){
var wrapper__15784 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15746_SHARP_);

if(cljs.core.truth_(wrapper__15784))
{return wrapper__15784.unlisten(node__15782);
} else
{return goog.events.removeAll.call(null,node__15782,cljs.core.name.call(null,p1__15746_SHARP_));
}
});})(node__15782,G__15766__15783))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15785,event_list));
var temp__3698__auto____15788 = cljs.core.next.call(null,G__15766__15783);

if(cljs.core.truth_(temp__3698__auto____15788))
{var G__15766__15789 = temp__3698__auto____15788;

{
var G__15790 = cljs.core.first.call(null,G__15766__15789);
var G__15791 = G__15766__15789;
node__15782 = G__15790;
G__15766__15783 = G__15791;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15792){
var nds = cljs.core.first(arglist__15792);
var event_list = cljs.core.rest(arglist__15792);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15793 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15794 = (cljs.core.truth_(wrapper__15793)?wrapper__15793.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15795 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15795.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15799__15800 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15799__15800))
{var node__15801 = cljs.core.first.call(null,G__15799__15800);
var G__15799__15802 = G__15799__15800;

while(true){
goog.events.fireListeners.call(null,node__15801,nevent__15794,capture,event_obj__15795);
var temp__3698__auto____15803 = cljs.core.next.call(null,G__15799__15802);

if(cljs.core.truth_(temp__3698__auto____15803))
{var G__15799__15804 = temp__3698__auto____15803;

{
var G__15816 = cljs.core.first.call(null,G__15799__15804);
var G__15817 = G__15799__15804;
node__15801 = G__15816;
G__15799__15802 = G__15817;
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
