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
var G__14806 = parent;
var G__14807 = child.parentNode;
parent = G__14806;
child = G__14807;
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
var re__14812 = e.relatedTarget;
var this$__14813 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____14814 = cljs.core.not.call(null,(re__14812 === this$__14813));

if(cljs.core.truth_(and__3546__auto____14814))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__14813,re__14812));
} else
{return and__3546__auto____14814;
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
var obj__14817 = (new Object());
var wevent__14818 = cljs.core.name.call(null,wrapped_key);
var event__14829 = cljs.core.name.call(null,event_key);

obj__14817.wrapped_event = wevent__14818;
obj__14817.event = event__14829;
obj__14817.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__14835 = wrapper_func.call(null,func);

callback__14835.listen = func;
callback__14835.scope = opt_scope;
callback__14835.event = event__14829;
callback__14835.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__14818,callback__14835,capture);
} else
{return goog.events.listen.call(null,elm,wevent__14818,callback__14835,capture);
}
});
obj__14817.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__14838 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__14818,false),goog.events.getListeners.call(null,elm,wevent__14818,true)):goog.events.getListeners.call(null,elm,wevent__14818,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__14841 = obj.listener;
var lfunc__14847 = listener__14841.listen;
var scope__14848 = listener__14841.scope;
var capture__14850 = listener__14841.capture;

if(cljs.core.truth_((function (){var and__3546__auto____14853 = (function (){var or__3548__auto____14852 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____14852))
{return or__3548__auto____14852;
} else
{return cljs.core._EQ_.call(null,lfunc__14847,func);
}
})();

if(cljs.core.truth_(and__3546__auto____14853))
{var or__3548__auto____14855 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____14855))
{return or__3548__auto____14855;
} else
{return cljs.core._EQ_.call(null,scope__14848,opt_scope);
}
} else
{return and__3546__auto____14853;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__14818,listener__14841,capture__14850);
} else
{return goog.events.unlisten.call(null,elm,wevent__14818,listener__14841,capture__14850);
}
} else
{return null;
}
}),listeners__14838));
});
return obj__14817;
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
var listen_BANG___14891 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___14892 = (function (nds,event,func,capture){
var wrapper__14884 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__14885__14886 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14885__14886))
{var node__14887 = cljs.core.first.call(null,G__14885__14886);
var G__14885__14888 = G__14885__14886;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__14884)))
{goog.events.listen.call(null,node__14887,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__14887,wrapper__14884,func,capture);
}
var temp__3698__auto____14889 = cljs.core.next.call(null,G__14885__14888);

if(cljs.core.truth_(temp__3698__auto____14889))
{var G__14885__14890 = temp__3698__auto____14889;

{
var G__14895 = cljs.core.first.call(null,G__14885__14890);
var G__14897 = G__14885__14890;
node__14887 = G__14895;
G__14885__14888 = G__14897;
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
return listen_BANG___14891.call(this,nds,event,func);
case  4 :
return listen_BANG___14892.call(this,nds,event,func,capture);
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
var unlisten_BANG___14926 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___14927 = (function (nds,event,func,capture){
var wrapper__14905 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__14906__14908 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14906__14908))
{var node__14910 = cljs.core.first.call(null,G__14906__14908);
var G__14906__14911 = G__14906__14908;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__14905)))
{goog.events.unlisten.call(null,node__14910,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__14905.unlisten(node__14910,func,capture);
}
var temp__3698__auto____14915 = cljs.core.next.call(null,G__14906__14911);

if(cljs.core.truth_(temp__3698__auto____14915))
{var G__14906__14919 = temp__3698__auto____14915;

{
var G__14933 = cljs.core.first.call(null,G__14906__14919);
var G__14934 = G__14906__14919;
node__14910 = G__14933;
G__14906__14911 = G__14934;
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
return unlisten_BANG___14926.call(this,nds,event,func);
case  4 :
return unlisten_BANG___14927.call(this,nds,event,func,capture);
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
var G__14941__14942 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14941__14942))
{var node__14943 = cljs.core.first.call(null,G__14941__14942);
var G__14941__14944 = G__14941__14942;

while(true){
var map_func__14946 = ((function (node__14943,G__14941__14944){
return (function (p1__14901_SHARP_){
var wrapper__14945 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__14901_SHARP_);

if(cljs.core.truth_(wrapper__14945))
{return wrapper__14945.unlisten(node__14943);
} else
{return goog.events.removeAll.call(null,node__14943,cljs.core.name.call(null,p1__14901_SHARP_));
}
});})(node__14943,G__14941__14944))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__14946,event_list));
var temp__3698__auto____14947 = cljs.core.next.call(null,G__14941__14944);

if(cljs.core.truth_(temp__3698__auto____14947))
{var G__14941__14948 = temp__3698__auto____14947;

{
var G__14950 = cljs.core.first.call(null,G__14941__14948);
var G__14951 = G__14941__14948;
node__14943 = G__14950;
G__14941__14944 = G__14951;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14955){
var nds = cljs.core.first(arglist__14955);
var event_list = cljs.core.rest(arglist__14955);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__14957 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__14958 = (cljs.core.truth_(wrapper__14957)?wrapper__14957.wrapped_event:cljs.core.name.call(null,event));
var event_obj__14959 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__14959.relatedTarget = event_map.call(null,"﷐'related-target");
var G__14960__14961 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14960__14961))
{var node__14963 = cljs.core.first.call(null,G__14960__14961);
var G__14960__14964 = G__14960__14961;

while(true){
goog.events.fireListeners.call(null,node__14963,nevent__14958,capture,event_obj__14959);
var temp__3698__auto____14966 = cljs.core.next.call(null,G__14960__14964);

if(cljs.core.truth_(temp__3698__auto____14966))
{var G__14960__14968 = temp__3698__auto____14966;

{
var G__14984 = cljs.core.first.call(null,G__14960__14968);
var G__14985 = G__14960__14968;
node__14963 = G__14984;
G__14960__14964 = G__14985;
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
