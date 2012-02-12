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
var G__13803 = parent;
var G__13805 = child.parentNode;
parent = G__13803;
child = G__13805;
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
var re__13813 = e.relatedTarget;
var this$__13814 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____13815 = cljs.core.not.call(null,(re__13813 === this$__13814));

if(cljs.core.truth_(and__3546__auto____13815))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__13814,re__13813));
} else
{return and__3546__auto____13815;
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
var obj__13818 = (new Object());
var wevent__13819 = cljs.core.name.call(null,wrapped_key);
var event__13820 = cljs.core.name.call(null,event_key);

obj__13818.wrapped_event = wevent__13819;
obj__13818.event = event__13820;
obj__13818.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__13822 = wrapper_func.call(null,func);

callback__13822.listen = func;
callback__13822.scope = opt_scope;
callback__13822.event = event__13820;
callback__13822.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__13819,callback__13822,capture);
} else
{return goog.events.listen.call(null,elm,wevent__13819,callback__13822,capture);
}
});
obj__13818.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__13824 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__13819,false),goog.events.getListeners.call(null,elm,wevent__13819,true)):goog.events.getListeners.call(null,elm,wevent__13819,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__13825 = obj.listener;
var lfunc__13826 = listener__13825.listen;
var scope__13827 = listener__13825.scope;
var capture__13828 = listener__13825.capture;

if(cljs.core.truth_((function (){var and__3546__auto____13870 = (function (){var or__3548__auto____13830 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____13830))
{return or__3548__auto____13830;
} else
{return cljs.core._EQ_.call(null,lfunc__13826,func);
}
})();

if(cljs.core.truth_(and__3546__auto____13870))
{var or__3548__auto____13871 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____13871))
{return or__3548__auto____13871;
} else
{return cljs.core._EQ_.call(null,scope__13827,opt_scope);
}
} else
{return and__3546__auto____13870;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__13819,listener__13825,capture__13828);
} else
{return goog.events.unlisten.call(null,elm,wevent__13819,listener__13825,capture__13828);
}
} else
{return null;
}
}),listeners__13824));
});
return obj__13818;
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
var listen_BANG___13879 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___13880 = (function (nds,event,func,capture){
var wrapper__13872 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__13873__13874 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__13873__13874))
{var node__13875 = cljs.core.first.call(null,G__13873__13874);
var G__13873__13876 = G__13873__13874;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__13872)))
{goog.events.listen.call(null,node__13875,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__13875,wrapper__13872,func,capture);
}
var temp__3698__auto____13877 = cljs.core.next.call(null,G__13873__13876);

if(cljs.core.truth_(temp__3698__auto____13877))
{var G__13873__13878 = temp__3698__auto____13877;

{
var G__13883 = cljs.core.first.call(null,G__13873__13878);
var G__13884 = G__13873__13878;
node__13875 = G__13883;
G__13873__13876 = G__13884;
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
return listen_BANG___13879.call(this,nds,event,func);
case  4 :
return listen_BANG___13880.call(this,nds,event,func,capture);
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
var unlisten_BANG___13900 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___13901 = (function (nds,event,func,capture){
var wrapper__13889 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__13890__13891 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__13890__13891))
{var node__13893 = cljs.core.first.call(null,G__13890__13891);
var G__13890__13894 = G__13890__13891;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__13889)))
{goog.events.unlisten.call(null,node__13893,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__13889.unlisten(node__13893,func,capture);
}
var temp__3698__auto____13896 = cljs.core.next.call(null,G__13890__13894);

if(cljs.core.truth_(temp__3698__auto____13896))
{var G__13890__13897 = temp__3698__auto____13896;

{
var G__13905 = cljs.core.first.call(null,G__13890__13897);
var G__13906 = G__13890__13897;
node__13893 = G__13905;
G__13890__13894 = G__13906;
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
return unlisten_BANG___13900.call(this,nds,event,func);
case  4 :
return unlisten_BANG___13901.call(this,nds,event,func,capture);
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
var G__13912__13913 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__13912__13913))
{var node__13915 = cljs.core.first.call(null,G__13912__13913);
var G__13912__13916 = G__13912__13913;

while(true){
var map_func__13920 = ((function (node__13915,G__13912__13916){
return (function (p1__13887_SHARP_){
var wrapper__13918 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__13887_SHARP_);

if(cljs.core.truth_(wrapper__13918))
{return wrapper__13918.unlisten(node__13915);
} else
{return goog.events.removeAll.call(null,node__13915,cljs.core.name.call(null,p1__13887_SHARP_));
}
});})(node__13915,G__13912__13916))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__13920,event_list));
var temp__3698__auto____13921 = cljs.core.next.call(null,G__13912__13916);

if(cljs.core.truth_(temp__3698__auto____13921))
{var G__13912__13923 = temp__3698__auto____13921;

{
var G__13971 = cljs.core.first.call(null,G__13912__13923);
var G__13972 = G__13912__13923;
node__13915 = G__13971;
G__13912__13916 = G__13972;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__13974){
var nds = cljs.core.first(arglist__13974);
var event_list = cljs.core.rest(arglist__13974);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__13977 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__13978 = (cljs.core.truth_(wrapper__13977)?wrapper__13977.wrapped_event:cljs.core.name.call(null,event));
var event_obj__13979 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__13979.relatedTarget = event_map.call(null,"﷐'related-target");
var G__13980__13981 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__13980__13981))
{var node__13982 = cljs.core.first.call(null,G__13980__13981);
var G__13980__13983 = G__13980__13981;

while(true){
goog.events.fireListeners.call(null,node__13982,nevent__13978,capture,event_obj__13979);
var temp__3698__auto____13984 = cljs.core.next.call(null,G__13980__13983);

if(cljs.core.truth_(temp__3698__auto____13984))
{var G__13980__13985 = temp__3698__auto____13984;

{
var G__13986 = cljs.core.first.call(null,G__13980__13985);
var G__13987 = G__13980__13985;
node__13982 = G__13986;
G__13980__13983 = G__13987;
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
