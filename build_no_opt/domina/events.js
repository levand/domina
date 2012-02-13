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
var G__15730 = parent;
var G__15731 = child.parentNode;
parent = G__15730;
child = G__15731;
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
var re__15736 = e.relatedTarget;
var this$__15737 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15738 = cljs.core.not.call(null,(re__15736 === this$__15737));

if(cljs.core.truth_(and__3546__auto____15738))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15737,re__15736));
} else
{return and__3546__auto____15738;
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
var obj__15741 = (new Object());
var wevent__15742 = cljs.core.name.call(null,wrapped_key);
var event__15743 = cljs.core.name.call(null,event_key);

obj__15741.wrapped_event = wevent__15742;
obj__15741.event = event__15743;
obj__15741.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15744 = wrapper_func.call(null,func);

callback__15744.listen = func;
callback__15744.scope = opt_scope;
callback__15744.event = event__15743;
callback__15744.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15742,callback__15744,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15742,callback__15744,capture);
}
});
obj__15741.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15766 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15742,false),goog.events.getListeners.call(null,elm,wevent__15742,true)):goog.events.getListeners.call(null,elm,wevent__15742,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15768 = obj.listener;
var lfunc__15770 = listener__15768.listen;
var scope__15771 = listener__15768.scope;
var capture__15774 = listener__15768.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15777 = (function (){var or__3548__auto____15776 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15776))
{return or__3548__auto____15776;
} else
{return cljs.core._EQ_.call(null,lfunc__15770,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15777))
{var or__3548__auto____15779 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15779))
{return or__3548__auto____15779;
} else
{return cljs.core._EQ_.call(null,scope__15771,opt_scope);
}
} else
{return and__3546__auto____15777;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15742,listener__15768,capture__15774);
} else
{return goog.events.unlisten.call(null,elm,wevent__15742,listener__15768,capture__15774);
}
} else
{return null;
}
}),listeners__15766));
});
return obj__15741;
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
var listen_BANG___15842 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15843 = (function (nds,event,func,capture){
var wrapper__15834 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15835__15836 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15835__15836))
{var node__15838 = cljs.core.first.call(null,G__15835__15836);
var G__15835__15839 = G__15835__15836;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15834)))
{goog.events.listen.call(null,node__15838,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15838,wrapper__15834,func,capture);
}
var temp__3698__auto____15840 = cljs.core.next.call(null,G__15835__15839);

if(cljs.core.truth_(temp__3698__auto____15840))
{var G__15835__15841 = temp__3698__auto____15840;

{
var G__15849 = cljs.core.first.call(null,G__15835__15841);
var G__15850 = G__15835__15841;
node__15838 = G__15849;
G__15835__15839 = G__15850;
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
return listen_BANG___15842.call(this,nds,event,func);
case  4 :
return listen_BANG___15843.call(this,nds,event,func,capture);
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
var unlisten_BANG___15870 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15871 = (function (nds,event,func,capture){
var wrapper__15856 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15857__15858 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15857__15858))
{var node__15860 = cljs.core.first.call(null,G__15857__15858);
var G__15857__15861 = G__15857__15858;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15856)))
{goog.events.unlisten.call(null,node__15860,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15856.unlisten(node__15860,func,capture);
}
var temp__3698__auto____15864 = cljs.core.next.call(null,G__15857__15861);

if(cljs.core.truth_(temp__3698__auto____15864))
{var G__15857__15865 = temp__3698__auto____15864;

{
var G__15876 = cljs.core.first.call(null,G__15857__15865);
var G__15877 = G__15857__15865;
node__15860 = G__15876;
G__15857__15861 = G__15877;
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
return unlisten_BANG___15870.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15871.call(this,nds,event,func,capture);
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
var G__15882__15883 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15882__15883))
{var node__15885 = cljs.core.first.call(null,G__15882__15883);
var G__15882__15886 = G__15882__15883;

while(true){
var map_func__15893 = ((function (node__15885,G__15882__15886){
return (function (p1__15853_SHARP_){
var wrapper__15891 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15853_SHARP_);

if(cljs.core.truth_(wrapper__15891))
{return wrapper__15891.unlisten(node__15885);
} else
{return goog.events.removeAll.call(null,node__15885,cljs.core.name.call(null,p1__15853_SHARP_));
}
});})(node__15885,G__15882__15886))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15893,event_list));
var temp__3698__auto____15920 = cljs.core.next.call(null,G__15882__15886);

if(cljs.core.truth_(temp__3698__auto____15920))
{var G__15882__15924 = temp__3698__auto____15920;

{
var G__15935 = cljs.core.first.call(null,G__15882__15924);
var G__15936 = G__15882__15924;
node__15885 = G__15935;
G__15882__15886 = G__15936;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15937){
var nds = cljs.core.first(arglist__15937);
var event_list = cljs.core.rest(arglist__15937);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15940 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15941 = (cljs.core.truth_(wrapper__15940)?wrapper__15940.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15944 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15944.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15947__15957 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15947__15957))
{var node__15959 = cljs.core.first.call(null,G__15947__15957);
var G__15947__15961 = G__15947__15957;

while(true){
goog.events.fireListeners.call(null,node__15959,nevent__15941,capture,event_obj__15944);
var temp__3698__auto____15964 = cljs.core.next.call(null,G__15947__15961);

if(cljs.core.truth_(temp__3698__auto____15964))
{var G__15947__15965 = temp__3698__auto____15964;

{
var G__15977 = cljs.core.first.call(null,G__15947__15965);
var G__15978 = G__15947__15965;
node__15959 = G__15977;
G__15947__15961 = G__15978;
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
