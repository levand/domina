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
var G__15778 = parent;
var G__15779 = child.parentNode;
parent = G__15778;
child = G__15779;
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
var re__15780 = e.relatedTarget;
var this$__15782 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15786 = cljs.core.not.call(null,(re__15780 === this$__15782));

if(cljs.core.truth_(and__3546__auto____15786))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15782,re__15780));
} else
{return and__3546__auto____15786;
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
var obj__15790 = (new Object());
var wevent__15791 = cljs.core.name.call(null,wrapped_key);
var event__15792 = cljs.core.name.call(null,event_key);

obj__15790.wrapped_event = wevent__15791;
obj__15790.event = event__15792;
obj__15790.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15794 = wrapper_func.call(null,func);

callback__15794.listen = func;
callback__15794.scope = opt_scope;
callback__15794.event = event__15792;
callback__15794.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15791,callback__15794,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15791,callback__15794,capture);
}
});
obj__15790.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15799 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15791,false),goog.events.getListeners.call(null,elm,wevent__15791,true)):goog.events.getListeners.call(null,elm,wevent__15791,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15800 = obj.listener;
var lfunc__15801 = listener__15800.listen;
var scope__15802 = listener__15800.scope;
var capture__15803 = listener__15800.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15806 = (function (){var or__3548__auto____15804 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15804))
{return or__3548__auto____15804;
} else
{return cljs.core._EQ_.call(null,lfunc__15801,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15806))
{var or__3548__auto____15808 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15808))
{return or__3548__auto____15808;
} else
{return cljs.core._EQ_.call(null,scope__15802,opt_scope);
}
} else
{return and__3546__auto____15806;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15791,listener__15800,capture__15803);
} else
{return goog.events.unlisten.call(null,elm,wevent__15791,listener__15800,capture__15803);
}
} else
{return null;
}
}),listeners__15799));
});
return obj__15790;
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
var listen_BANG___15844 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15845 = (function (nds,event,func,capture){
var wrapper__15834 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15836__15838 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15836__15838))
{var node__15839 = cljs.core.first.call(null,G__15836__15838);
var G__15836__15840 = G__15836__15838;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15834)))
{goog.events.listen.call(null,node__15839,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15839,wrapper__15834,func,capture);
}
var temp__3698__auto____15841 = cljs.core.next.call(null,G__15836__15840);

if(cljs.core.truth_(temp__3698__auto____15841))
{var G__15836__15842 = temp__3698__auto____15841;

{
var G__15851 = cljs.core.first.call(null,G__15836__15842);
var G__15852 = G__15836__15842;
node__15839 = G__15851;
G__15836__15840 = G__15852;
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
return listen_BANG___15844.call(this,nds,event,func);
case  4 :
return listen_BANG___15845.call(this,nds,event,func,capture);
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
var unlisten_BANG___15865 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15866 = (function (nds,event,func,capture){
var wrapper__15854 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15855__15856 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15855__15856))
{var node__15858 = cljs.core.first.call(null,G__15855__15856);
var G__15855__15859 = G__15855__15856;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15854)))
{goog.events.unlisten.call(null,node__15858,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15854.unlisten(node__15858,func,capture);
}
var temp__3698__auto____15861 = cljs.core.next.call(null,G__15855__15859);

if(cljs.core.truth_(temp__3698__auto____15861))
{var G__15855__15862 = temp__3698__auto____15861;

{
var G__15870 = cljs.core.first.call(null,G__15855__15862);
var G__15871 = G__15855__15862;
node__15858 = G__15870;
G__15855__15859 = G__15871;
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
return unlisten_BANG___15865.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15866.call(this,nds,event,func,capture);
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
var G__15874__15878 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15874__15878))
{var node__15881 = cljs.core.first.call(null,G__15874__15878);
var G__15874__15882 = G__15874__15878;

while(true){
var map_func__15894 = ((function (node__15881,G__15874__15882){
return (function (p1__15853_SHARP_){
var wrapper__15888 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15853_SHARP_);

if(cljs.core.truth_(wrapper__15888))
{return wrapper__15888.unlisten(node__15881);
} else
{return goog.events.removeAll.call(null,node__15881,cljs.core.name.call(null,p1__15853_SHARP_));
}
});})(node__15881,G__15874__15882))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15894,event_list));
var temp__3698__auto____15898 = cljs.core.next.call(null,G__15874__15882);

if(cljs.core.truth_(temp__3698__auto____15898))
{var G__15874__15901 = temp__3698__auto____15898;

{
var G__15904 = cljs.core.first.call(null,G__15874__15901);
var G__15905 = G__15874__15901;
node__15881 = G__15904;
G__15874__15882 = G__15905;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15908){
var nds = cljs.core.first(arglist__15908);
var event_list = cljs.core.rest(arglist__15908);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15911 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15914 = (cljs.core.truth_(wrapper__15911)?wrapper__15911.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15917 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15917.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15918__15919 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15918__15919))
{var node__15920 = cljs.core.first.call(null,G__15918__15919);
var G__15918__15923 = G__15918__15919;

while(true){
goog.events.fireListeners.call(null,node__15920,nevent__15914,capture,event_obj__15917);
var temp__3698__auto____15929 = cljs.core.next.call(null,G__15918__15923);

if(cljs.core.truth_(temp__3698__auto____15929))
{var G__15918__15933 = temp__3698__auto____15929;

{
var G__15942 = cljs.core.first.call(null,G__15918__15933);
var G__15943 = G__15918__15933;
node__15920 = G__15942;
G__15918__15923 = G__15943;
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
