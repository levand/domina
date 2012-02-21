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
var G__15633 = parent;
var G__15634 = child.parentNode;
parent = G__15633;
child = G__15634;
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
var re__15660 = e.relatedTarget;
var this$__15662 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15664 = cljs.core.not.call(null,(re__15660 === this$__15662));

if(cljs.core.truth_(and__3546__auto____15664))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15662,re__15660));
} else
{return and__3546__auto____15664;
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
var obj__15671 = (new Object());
var wevent__15672 = cljs.core.name.call(null,wrapped_key);
var event__15673 = cljs.core.name.call(null,event_key);

obj__15671.wrapped_event = wevent__15672;
obj__15671.event = event__15673;
obj__15671.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15674 = wrapper_func.call(null,func);

callback__15674.listen = func;
callback__15674.scope = opt_scope;
callback__15674.event = event__15673;
callback__15674.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15672,callback__15674,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15672,callback__15674,capture);
}
});
obj__15671.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15677 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15672,false),goog.events.getListeners.call(null,elm,wevent__15672,true)):goog.events.getListeners.call(null,elm,wevent__15672,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15678 = obj.listener;
var lfunc__15679 = listener__15678.listen;
var scope__15680 = listener__15678.scope;
var capture__15681 = listener__15678.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15683 = (function (){var or__3548__auto____15682 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15682))
{return or__3548__auto____15682;
} else
{return cljs.core._EQ_.call(null,lfunc__15679,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15683))
{var or__3548__auto____15684 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15684))
{return or__3548__auto____15684;
} else
{return cljs.core._EQ_.call(null,scope__15680,opt_scope);
}
} else
{return and__3546__auto____15683;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15672,listener__15678,capture__15681);
} else
{return goog.events.unlisten.call(null,elm,wevent__15672,listener__15678,capture__15681);
}
} else
{return null;
}
}),listeners__15677));
});
return obj__15671;
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
var listen_BANG___15754 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15755 = (function (nds,event,func,capture){
var wrapper__15745 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15746__15747 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15746__15747))
{var node__15748 = cljs.core.first.call(null,G__15746__15747);
var G__15746__15749 = G__15746__15747;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15745)))
{goog.events.listen.call(null,node__15748,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15748,wrapper__15745,func,capture);
}
var temp__3698__auto____15752 = cljs.core.next.call(null,G__15746__15749);

if(cljs.core.truth_(temp__3698__auto____15752))
{var G__15746__15753 = temp__3698__auto____15752;

{
var G__15757 = cljs.core.first.call(null,G__15746__15753);
var G__15758 = G__15746__15753;
node__15748 = G__15757;
G__15746__15749 = G__15758;
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
return listen_BANG___15754.call(this,nds,event,func);
case  4 :
return listen_BANG___15755.call(this,nds,event,func,capture);
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
var unlisten_BANG___15767 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15768 = (function (nds,event,func,capture){
var wrapper__15760 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15761__15762 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15761__15762))
{var node__15763 = cljs.core.first.call(null,G__15761__15762);
var G__15761__15764 = G__15761__15762;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15760)))
{goog.events.unlisten.call(null,node__15763,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15760.unlisten(node__15763,func,capture);
}
var temp__3698__auto____15765 = cljs.core.next.call(null,G__15761__15764);

if(cljs.core.truth_(temp__3698__auto____15765))
{var G__15761__15766 = temp__3698__auto____15765;

{
var G__15772 = cljs.core.first.call(null,G__15761__15766);
var G__15773 = G__15761__15766;
node__15763 = G__15772;
G__15761__15764 = G__15773;
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
return unlisten_BANG___15767.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15768.call(this,nds,event,func,capture);
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
var G__15774__15775 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15774__15775))
{var node__15776 = cljs.core.first.call(null,G__15774__15775);
var G__15774__15777 = G__15774__15775;

while(true){
var map_func__15779 = ((function (node__15776,G__15774__15777){
return (function (p1__15759_SHARP_){
var wrapper__15778 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15759_SHARP_);

if(cljs.core.truth_(wrapper__15778))
{return wrapper__15778.unlisten(node__15776);
} else
{return goog.events.removeAll.call(null,node__15776,cljs.core.name.call(null,p1__15759_SHARP_));
}
});})(node__15776,G__15774__15777))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15779,event_list));
var temp__3698__auto____15780 = cljs.core.next.call(null,G__15774__15777);

if(cljs.core.truth_(temp__3698__auto____15780))
{var G__15774__15782 = temp__3698__auto____15780;

{
var G__15783 = cljs.core.first.call(null,G__15774__15782);
var G__15784 = G__15774__15782;
node__15776 = G__15783;
G__15774__15777 = G__15784;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15786){
var nds = cljs.core.first(arglist__15786);
var event_list = cljs.core.rest(arglist__15786);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15790 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15791 = (cljs.core.truth_(wrapper__15790)?wrapper__15790.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15792 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15792.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15793__15794 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15793__15794))
{var node__15796 = cljs.core.first.call(null,G__15793__15794);
var G__15793__15798 = G__15793__15794;

while(true){
goog.events.fireListeners.call(null,node__15796,nevent__15791,capture,event_obj__15792);
var temp__3698__auto____15821 = cljs.core.next.call(null,G__15793__15798);

if(cljs.core.truth_(temp__3698__auto____15821))
{var G__15793__15822 = temp__3698__auto____15821;

{
var G__15828 = cljs.core.first.call(null,G__15793__15822);
var G__15829 = G__15793__15822;
node__15796 = G__15828;
G__15793__15798 = G__15829;
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
