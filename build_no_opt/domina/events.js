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
var G__15793 = parent;
var G__15794 = child.parentNode;
parent = G__15793;
child = G__15794;
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
var re__15798 = e.relatedTarget;
var this$__15800 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15801 = cljs.core.not.call(null,(re__15798 === this$__15800));

if(cljs.core.truth_(and__3546__auto____15801))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15800,re__15798));
} else
{return and__3546__auto____15801;
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
var obj__15812 = (new Object());
var wevent__15813 = cljs.core.name.call(null,wrapped_key);
var event__15814 = cljs.core.name.call(null,event_key);

obj__15812.wrapped_event = wevent__15813;
obj__15812.event = event__15814;
obj__15812.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15817 = wrapper_func.call(null,func);

callback__15817.listen = func;
callback__15817.scope = opt_scope;
callback__15817.event = event__15814;
callback__15817.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15813,callback__15817,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15813,callback__15817,capture);
}
});
obj__15812.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15822 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15813,false),goog.events.getListeners.call(null,elm,wevent__15813,true)):goog.events.getListeners.call(null,elm,wevent__15813,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15825 = obj.listener;
var lfunc__15826 = listener__15825.listen;
var scope__15827 = listener__15825.scope;
var capture__15830 = listener__15825.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15833 = (function (){var or__3548__auto____15832 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15832))
{return or__3548__auto____15832;
} else
{return cljs.core._EQ_.call(null,lfunc__15826,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15833))
{var or__3548__auto____15835 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15835))
{return or__3548__auto____15835;
} else
{return cljs.core._EQ_.call(null,scope__15827,opt_scope);
}
} else
{return and__3546__auto____15833;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15813,listener__15825,capture__15830);
} else
{return goog.events.unlisten.call(null,elm,wevent__15813,listener__15825,capture__15830);
}
} else
{return null;
}
}),listeners__15822));
});
return obj__15812;
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
var listen_BANG___15908 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15909 = (function (nds,event,func,capture){
var wrapper__15878 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15879__15882 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15879__15882))
{var node__15885 = cljs.core.first.call(null,G__15879__15882);
var G__15879__15886 = G__15879__15882;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15878)))
{goog.events.listen.call(null,node__15885,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15885,wrapper__15878,func,capture);
}
var temp__3698__auto____15896 = cljs.core.next.call(null,G__15879__15886);

if(cljs.core.truth_(temp__3698__auto____15896))
{var G__15879__15899 = temp__3698__auto____15896;

{
var G__15916 = cljs.core.first.call(null,G__15879__15899);
var G__15917 = G__15879__15899;
node__15885 = G__15916;
G__15879__15886 = G__15917;
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
return listen_BANG___15908.call(this,nds,event,func);
case  4 :
return listen_BANG___15909.call(this,nds,event,func,capture);
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
var unlisten_BANG___15949 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15950 = (function (nds,event,func,capture){
var wrapper__15925 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15926__15931 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15926__15931))
{var node__15935 = cljs.core.first.call(null,G__15926__15931);
var G__15926__15936 = G__15926__15931;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15925)))
{goog.events.unlisten.call(null,node__15935,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15925.unlisten(node__15935,func,capture);
}
var temp__3698__auto____15942 = cljs.core.next.call(null,G__15926__15936);

if(cljs.core.truth_(temp__3698__auto____15942))
{var G__15926__15943 = temp__3698__auto____15942;

{
var G__15961 = cljs.core.first.call(null,G__15926__15943);
var G__15962 = G__15926__15943;
node__15935 = G__15961;
G__15926__15936 = G__15962;
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
return unlisten_BANG___15949.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15950.call(this,nds,event,func,capture);
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
var G__15965__15968 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15965__15968))
{var node__15970 = cljs.core.first.call(null,G__15965__15968);
var G__15965__15972 = G__15965__15968;

while(true){
var map_func__15982 = ((function (node__15970,G__15965__15972){
return (function (p1__15919_SHARP_){
var wrapper__15976 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15919_SHARP_);

if(cljs.core.truth_(wrapper__15976))
{return wrapper__15976.unlisten(node__15970);
} else
{return goog.events.removeAll.call(null,node__15970,cljs.core.name.call(null,p1__15919_SHARP_));
}
});})(node__15970,G__15965__15972))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15982,event_list));
var temp__3698__auto____15988 = cljs.core.next.call(null,G__15965__15972);

if(cljs.core.truth_(temp__3698__auto____15988))
{var G__15965__15991 = temp__3698__auto____15988;

{
var G__15994 = cljs.core.first.call(null,G__15965__15991);
var G__15995 = G__15965__15991;
node__15970 = G__15994;
G__15965__15972 = G__15995;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15996){
var nds = cljs.core.first(arglist__15996);
var event_list = cljs.core.rest(arglist__15996);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15997 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15998 = (cljs.core.truth_(wrapper__15997)?wrapper__15997.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15999 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15999.relatedTarget = event_map.call(null,"﷐'related-target");
var G__16000__16002 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__16000__16002))
{var node__16004 = cljs.core.first.call(null,G__16000__16002);
var G__16000__16005 = G__16000__16002;

while(true){
goog.events.fireListeners.call(null,node__16004,nevent__15998,capture,event_obj__15999);
var temp__3698__auto____16006 = cljs.core.next.call(null,G__16000__16005);

if(cljs.core.truth_(temp__3698__auto____16006))
{var G__16000__16007 = temp__3698__auto____16006;

{
var G__16008 = cljs.core.first.call(null,G__16000__16007);
var G__16009 = G__16000__16007;
node__16004 = G__16008;
G__16000__16005 = G__16009;
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
