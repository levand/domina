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
var G__15759 = parent;
var G__15760 = child.parentNode;
parent = G__15759;
child = G__15760;
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
var re__15771 = e.relatedTarget;
var this$__15772 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15775 = cljs.core.not.call(null,(re__15771 === this$__15772));

if(cljs.core.truth_(and__3546__auto____15775))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15772,re__15771));
} else
{return and__3546__auto____15775;
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
var obj__15786 = (new Object());
var wevent__15787 = cljs.core.name.call(null,wrapped_key);
var event__15789 = cljs.core.name.call(null,event_key);

obj__15786.wrapped_event = wevent__15787;
obj__15786.event = event__15789;
obj__15786.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15794 = wrapper_func.call(null,func);

callback__15794.listen = func;
callback__15794.scope = opt_scope;
callback__15794.event = event__15789;
callback__15794.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15787,callback__15794,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15787,callback__15794,capture);
}
});
obj__15786.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15803 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15787,false),goog.events.getListeners.call(null,elm,wevent__15787,true)):goog.events.getListeners.call(null,elm,wevent__15787,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15806 = obj.listener;
var lfunc__15809 = listener__15806.listen;
var scope__15811 = listener__15806.scope;
var capture__15814 = listener__15806.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15819 = (function (){var or__3548__auto____15818 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15818))
{return or__3548__auto____15818;
} else
{return cljs.core._EQ_.call(null,lfunc__15809,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15819))
{var or__3548__auto____15820 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15820))
{return or__3548__auto____15820;
} else
{return cljs.core._EQ_.call(null,scope__15811,opt_scope);
}
} else
{return and__3546__auto____15819;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15787,listener__15806,capture__15814);
} else
{return goog.events.unlisten.call(null,elm,wevent__15787,listener__15806,capture__15814);
}
} else
{return null;
}
}),listeners__15803));
});
return obj__15786;
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
var listen_BANG___15892 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15894 = (function (nds,event,func,capture){
var wrapper__15865 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15866__15871 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15866__15871))
{var node__15875 = cljs.core.first.call(null,G__15866__15871);
var G__15866__15876 = G__15866__15871;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15865)))
{goog.events.listen.call(null,node__15875,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15875,wrapper__15865,func,capture);
}
var temp__3698__auto____15888 = cljs.core.next.call(null,G__15866__15876);

if(cljs.core.truth_(temp__3698__auto____15888))
{var G__15866__15890 = temp__3698__auto____15888;

{
var G__15901 = cljs.core.first.call(null,G__15866__15890);
var G__15902 = G__15866__15890;
node__15875 = G__15901;
G__15866__15876 = G__15902;
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
return listen_BANG___15892.call(this,nds,event,func);
case  4 :
return listen_BANG___15894.call(this,nds,event,func,capture);
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
var unlisten_BANG___15932 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15933 = (function (nds,event,func,capture){
var wrapper__15921 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15922__15924 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15922__15924))
{var node__15928 = cljs.core.first.call(null,G__15922__15924);
var G__15922__15929 = G__15922__15924;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15921)))
{goog.events.unlisten.call(null,node__15928,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15921.unlisten(node__15928,func,capture);
}
var temp__3698__auto____15930 = cljs.core.next.call(null,G__15922__15929);

if(cljs.core.truth_(temp__3698__auto____15930))
{var G__15922__15931 = temp__3698__auto____15930;

{
var G__15937 = cljs.core.first.call(null,G__15922__15931);
var G__15938 = G__15922__15931;
node__15928 = G__15937;
G__15922__15929 = G__15938;
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
return unlisten_BANG___15932.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15933.call(this,nds,event,func,capture);
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
var G__15939__15941 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15939__15941))
{var node__15943 = cljs.core.first.call(null,G__15939__15941);
var G__15939__15944 = G__15939__15941;

while(true){
var map_func__15948 = ((function (node__15943,G__15939__15944){
return (function (p1__15912_SHARP_){
var wrapper__15947 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15912_SHARP_);

if(cljs.core.truth_(wrapper__15947))
{return wrapper__15947.unlisten(node__15943);
} else
{return goog.events.removeAll.call(null,node__15943,cljs.core.name.call(null,p1__15912_SHARP_));
}
});})(node__15943,G__15939__15944))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15948,event_list));
var temp__3698__auto____15951 = cljs.core.next.call(null,G__15939__15944);

if(cljs.core.truth_(temp__3698__auto____15951))
{var G__15939__15953 = temp__3698__auto____15951;

{
var G__15957 = cljs.core.first.call(null,G__15939__15953);
var G__15958 = G__15939__15953;
node__15943 = G__15957;
G__15939__15944 = G__15958;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15960){
var nds = cljs.core.first(arglist__15960);
var event_list = cljs.core.rest(arglist__15960);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15965 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15967 = (cljs.core.truth_(wrapper__15965)?wrapper__15965.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15968 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15968.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15970__15971 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15970__15971))
{var node__15972 = cljs.core.first.call(null,G__15970__15971);
var G__15970__15973 = G__15970__15971;

while(true){
goog.events.fireListeners.call(null,node__15972,nevent__15967,capture,event_obj__15968);
var temp__3698__auto____15974 = cljs.core.next.call(null,G__15970__15973);

if(cljs.core.truth_(temp__3698__auto____15974))
{var G__15970__15975 = temp__3698__auto____15974;

{
var G__15982 = cljs.core.first.call(null,G__15970__15975);
var G__15983 = G__15970__15975;
node__15972 = G__15982;
G__15970__15973 = G__15983;
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
