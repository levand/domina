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
var G__15779 = parent;
var G__15780 = child.parentNode;
parent = G__15779;
child = G__15780;
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
var re__15781 = e.relatedTarget;
var this$__15782 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15783 = cljs.core.not.call(null,(re__15781 === this$__15782));

if(cljs.core.truth_(and__3546__auto____15783))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15782,re__15781));
} else
{return and__3546__auto____15783;
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
var callback__15790 = wrapper_func.call(null,func);

callback__15790.listen = func;
callback__15790.scope = opt_scope;
callback__15790.event = event__15789;
callback__15790.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15787,callback__15790,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15787,callback__15790,capture);
}
});
obj__15786.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15795 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15787,false),goog.events.getListeners.call(null,elm,wevent__15787,true)):goog.events.getListeners.call(null,elm,wevent__15787,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15796 = obj.listener;
var lfunc__15797 = listener__15796.listen;
var scope__15798 = listener__15796.scope;
var capture__15799 = listener__15796.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15801 = (function (){var or__3548__auto____15800 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15800))
{return or__3548__auto____15800;
} else
{return cljs.core._EQ_.call(null,lfunc__15797,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15801))
{var or__3548__auto____15804 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15804))
{return or__3548__auto____15804;
} else
{return cljs.core._EQ_.call(null,scope__15798,opt_scope);
}
} else
{return and__3546__auto____15801;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15787,listener__15796,capture__15799);
} else
{return goog.events.unlisten.call(null,elm,wevent__15787,listener__15796,capture__15799);
}
} else
{return null;
}
}),listeners__15795));
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
var listen_BANG___15827 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15828 = (function (nds,event,func,capture){
var wrapper__15819 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15820__15822 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15820__15822))
{var node__15823 = cljs.core.first.call(null,G__15820__15822);
var G__15820__15824 = G__15820__15822;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15819)))
{goog.events.listen.call(null,node__15823,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15823,wrapper__15819,func,capture);
}
var temp__3698__auto____15825 = cljs.core.next.call(null,G__15820__15824);

if(cljs.core.truth_(temp__3698__auto____15825))
{var G__15820__15826 = temp__3698__auto____15825;

{
var G__15832 = cljs.core.first.call(null,G__15820__15826);
var G__15833 = G__15820__15826;
node__15823 = G__15832;
G__15820__15824 = G__15833;
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
return listen_BANG___15827.call(this,nds,event,func);
case  4 :
return listen_BANG___15828.call(this,nds,event,func,capture);
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
var unlisten_BANG___15849 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15850 = (function (nds,event,func,capture){
var wrapper__15835 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15836__15837 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15836__15837))
{var node__15838 = cljs.core.first.call(null,G__15836__15837);
var G__15836__15839 = G__15836__15837;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15835)))
{goog.events.unlisten.call(null,node__15838,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15835.unlisten(node__15838,func,capture);
}
var temp__3698__auto____15840 = cljs.core.next.call(null,G__15836__15839);

if(cljs.core.truth_(temp__3698__auto____15840))
{var G__15836__15841 = temp__3698__auto____15840;

{
var G__15854 = cljs.core.first.call(null,G__15836__15841);
var G__15855 = G__15836__15841;
node__15838 = G__15854;
G__15836__15839 = G__15855;
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
return unlisten_BANG___15849.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15850.call(this,nds,event,func,capture);
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
var G__15856__15863 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15856__15863))
{var node__15864 = cljs.core.first.call(null,G__15856__15863);
var G__15856__15865 = G__15856__15863;

while(true){
var map_func__15867 = ((function (node__15864,G__15856__15865){
return (function (p1__15834_SHARP_){
var wrapper__15866 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15834_SHARP_);

if(cljs.core.truth_(wrapper__15866))
{return wrapper__15866.unlisten(node__15864);
} else
{return goog.events.removeAll.call(null,node__15864,cljs.core.name.call(null,p1__15834_SHARP_));
}
});})(node__15864,G__15856__15865))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15867,event_list));
var temp__3698__auto____15868 = cljs.core.next.call(null,G__15856__15865);

if(cljs.core.truth_(temp__3698__auto____15868))
{var G__15856__15869 = temp__3698__auto____15868;

{
var G__15875 = cljs.core.first.call(null,G__15856__15869);
var G__15876 = G__15856__15869;
node__15864 = G__15875;
G__15856__15865 = G__15876;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15879){
var nds = cljs.core.first(arglist__15879);
var event_list = cljs.core.rest(arglist__15879);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15882 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15884 = (cljs.core.truth_(wrapper__15882)?wrapper__15882.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15886 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15886.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15887__15890 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15887__15890))
{var node__15900 = cljs.core.first.call(null,G__15887__15890);
var G__15887__15901 = G__15887__15890;

while(true){
goog.events.fireListeners.call(null,node__15900,nevent__15884,capture,event_obj__15886);
var temp__3698__auto____15903 = cljs.core.next.call(null,G__15887__15901);

if(cljs.core.truth_(temp__3698__auto____15903))
{var G__15887__15904 = temp__3698__auto____15903;

{
var G__15910 = cljs.core.first.call(null,G__15887__15904);
var G__15911 = G__15887__15904;
node__15900 = G__15910;
G__15887__15901 = G__15911;
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
