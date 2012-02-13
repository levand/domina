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
var G__13698 = parent;
var G__13699 = child.parentNode;
parent = G__13698;
child = G__13699;
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
var re__13700 = e.relatedTarget;
var this$__13701 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____13702 = cljs.core.not.call(null,(re__13700 === this$__13701));

if(cljs.core.truth_(and__3546__auto____13702))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__13701,re__13700));
} else
{return and__3546__auto____13702;
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
var obj__13732 = (new Object());
var wevent__13733 = cljs.core.name.call(null,wrapped_key);
var event__13734 = cljs.core.name.call(null,event_key);

obj__13732.wrapped_event = wevent__13733;
obj__13732.event = event__13734;
obj__13732.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__13735 = wrapper_func.call(null,func);

callback__13735.listen = func;
callback__13735.scope = opt_scope;
callback__13735.event = event__13734;
callback__13735.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__13733,callback__13735,capture);
} else
{return goog.events.listen.call(null,elm,wevent__13733,callback__13735,capture);
}
});
obj__13732.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__13738 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__13733,false),goog.events.getListeners.call(null,elm,wevent__13733,true)):goog.events.getListeners.call(null,elm,wevent__13733,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__13741 = obj.listener;
var lfunc__13743 = listener__13741.listen;
var scope__13744 = listener__13741.scope;
var capture__13745 = listener__13741.capture;

if(cljs.core.truth_((function (){var and__3546__auto____13749 = (function (){var or__3548__auto____13747 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____13747))
{return or__3548__auto____13747;
} else
{return cljs.core._EQ_.call(null,lfunc__13743,func);
}
})();

if(cljs.core.truth_(and__3546__auto____13749))
{var or__3548__auto____13752 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____13752))
{return or__3548__auto____13752;
} else
{return cljs.core._EQ_.call(null,scope__13744,opt_scope);
}
} else
{return and__3546__auto____13749;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__13733,listener__13741,capture__13745);
} else
{return goog.events.unlisten.call(null,elm,wevent__13733,listener__13741,capture__13745);
}
} else
{return null;
}
}),listeners__13738));
});
return obj__13732;
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
var listen_BANG___13874 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___13875 = (function (nds,event,func,capture){
var wrapper__13860 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__13861__13864 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__13861__13864))
{var node__13870 = cljs.core.first.call(null,G__13861__13864);
var G__13861__13871 = G__13861__13864;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__13860)))
{goog.events.listen.call(null,node__13870,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__13870,wrapper__13860,func,capture);
}
var temp__3698__auto____13872 = cljs.core.next.call(null,G__13861__13871);

if(cljs.core.truth_(temp__3698__auto____13872))
{var G__13861__13873 = temp__3698__auto____13872;

{
var G__13880 = cljs.core.first.call(null,G__13861__13873);
var G__13881 = G__13861__13873;
node__13870 = G__13880;
G__13861__13871 = G__13881;
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
return listen_BANG___13874.call(this,nds,event,func);
case  4 :
return listen_BANG___13875.call(this,nds,event,func,capture);
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
var unlisten_BANG___13897 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___13898 = (function (nds,event,func,capture){
var wrapper__13883 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__13884__13885 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__13884__13885))
{var node__13886 = cljs.core.first.call(null,G__13884__13885);
var G__13884__13887 = G__13884__13885;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__13883)))
{goog.events.unlisten.call(null,node__13886,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__13883.unlisten(node__13886,func,capture);
}
var temp__3698__auto____13893 = cljs.core.next.call(null,G__13884__13887);

if(cljs.core.truth_(temp__3698__auto____13893))
{var G__13884__13894 = temp__3698__auto____13893;

{
var G__13903 = cljs.core.first.call(null,G__13884__13894);
var G__13904 = G__13884__13894;
node__13886 = G__13903;
G__13884__13887 = G__13904;
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
return unlisten_BANG___13897.call(this,nds,event,func);
case  4 :
return unlisten_BANG___13898.call(this,nds,event,func,capture);
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
var G__13910__13913 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__13910__13913))
{var node__13917 = cljs.core.first.call(null,G__13910__13913);
var G__13910__13920 = G__13910__13913;

while(true){
var map_func__13924 = ((function (node__13917,G__13910__13920){
return (function (p1__13882_SHARP_){
var wrapper__13923 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__13882_SHARP_);

if(cljs.core.truth_(wrapper__13923))
{return wrapper__13923.unlisten(node__13917);
} else
{return goog.events.removeAll.call(null,node__13917,cljs.core.name.call(null,p1__13882_SHARP_));
}
});})(node__13917,G__13910__13920))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__13924,event_list));
var temp__3698__auto____13925 = cljs.core.next.call(null,G__13910__13920);

if(cljs.core.truth_(temp__3698__auto____13925))
{var G__13910__13926 = temp__3698__auto____13925;

{
var G__13927 = cljs.core.first.call(null,G__13910__13926);
var G__13928 = G__13910__13926;
node__13917 = G__13927;
G__13910__13920 = G__13928;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__13929){
var nds = cljs.core.first(arglist__13929);
var event_list = cljs.core.rest(arglist__13929);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__13951 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__13954 = (cljs.core.truth_(wrapper__13951)?wrapper__13951.wrapped_event:cljs.core.name.call(null,event));
var event_obj__13955 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__13955.relatedTarget = event_map.call(null,"﷐'related-target");
var G__13957__13959 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__13957__13959))
{var node__13960 = cljs.core.first.call(null,G__13957__13959);
var G__13957__13961 = G__13957__13959;

while(true){
goog.events.fireListeners.call(null,node__13960,nevent__13954,capture,event_obj__13955);
var temp__3698__auto____13962 = cljs.core.next.call(null,G__13957__13961);

if(cljs.core.truth_(temp__3698__auto____13962))
{var G__13957__13963 = temp__3698__auto____13962;

{
var G__13968 = cljs.core.first.call(null,G__13957__13963);
var G__13969 = G__13957__13963;
node__13960 = G__13968;
G__13957__13961 = G__13969;
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
