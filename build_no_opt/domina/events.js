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
var G__15619 = parent;
var G__15620 = child.parentNode;
parent = G__15619;
child = G__15620;
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
var re__15627 = e.relatedTarget;
var this$__15629 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15630 = cljs.core.not.call(null,(re__15627 === this$__15629));

if(cljs.core.truth_(and__3546__auto____15630))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15629,re__15627));
} else
{return and__3546__auto____15630;
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
var obj__15713 = (new Object());
var wevent__15714 = cljs.core.name.call(null,wrapped_key);
var event__15715 = cljs.core.name.call(null,event_key);

obj__15713.wrapped_event = wevent__15714;
obj__15713.event = event__15715;
obj__15713.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15716 = wrapper_func.call(null,func);

callback__15716.listen = func;
callback__15716.scope = opt_scope;
callback__15716.event = event__15715;
callback__15716.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15714,callback__15716,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15714,callback__15716,capture);
}
});
obj__15713.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15731 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15714,false),goog.events.getListeners.call(null,elm,wevent__15714,true)):goog.events.getListeners.call(null,elm,wevent__15714,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15733 = obj.listener;
var lfunc__15734 = listener__15733.listen;
var scope__15735 = listener__15733.scope;
var capture__15736 = listener__15733.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15738 = (function (){var or__3548__auto____15737 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15737))
{return or__3548__auto____15737;
} else
{return cljs.core._EQ_.call(null,lfunc__15734,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15738))
{var or__3548__auto____15739 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15739))
{return or__3548__auto____15739;
} else
{return cljs.core._EQ_.call(null,scope__15735,opt_scope);
}
} else
{return and__3546__auto____15738;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15714,listener__15733,capture__15736);
} else
{return goog.events.unlisten.call(null,elm,wevent__15714,listener__15733,capture__15736);
}
} else
{return null;
}
}),listeners__15731));
});
return obj__15713;
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
var listen_BANG___15758 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15759 = (function (nds,event,func,capture){
var wrapper__15750 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15751__15753 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15751__15753))
{var node__15754 = cljs.core.first.call(null,G__15751__15753);
var G__15751__15755 = G__15751__15753;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15750)))
{goog.events.listen.call(null,node__15754,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15754,wrapper__15750,func,capture);
}
var temp__3698__auto____15756 = cljs.core.next.call(null,G__15751__15755);

if(cljs.core.truth_(temp__3698__auto____15756))
{var G__15751__15757 = temp__3698__auto____15756;

{
var G__15766 = cljs.core.first.call(null,G__15751__15757);
var G__15767 = G__15751__15757;
node__15754 = G__15766;
G__15751__15755 = G__15767;
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
return listen_BANG___15758.call(this,nds,event,func);
case  4 :
return listen_BANG___15759.call(this,nds,event,func,capture);
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
var unlisten_BANG___15839 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15840 = (function (nds,event,func,capture){
var wrapper__15782 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15785__15786 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15785__15786))
{var node__15787 = cljs.core.first.call(null,G__15785__15786);
var G__15785__15788 = G__15785__15786;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15782)))
{goog.events.unlisten.call(null,node__15787,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15782.unlisten(node__15787,func,capture);
}
var temp__3698__auto____15789 = cljs.core.next.call(null,G__15785__15788);

if(cljs.core.truth_(temp__3698__auto____15789))
{var G__15785__15790 = temp__3698__auto____15789;

{
var G__15844 = cljs.core.first.call(null,G__15785__15790);
var G__15845 = G__15785__15790;
node__15787 = G__15844;
G__15785__15788 = G__15845;
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
return unlisten_BANG___15839.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15840.call(this,nds,event,func,capture);
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
var G__15849__15850 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15849__15850))
{var node__15852 = cljs.core.first.call(null,G__15849__15850);
var G__15849__15854 = G__15849__15850;

while(true){
var map_func__15860 = ((function (node__15852,G__15849__15854){
return (function (p1__15775_SHARP_){
var wrapper__15857 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15775_SHARP_);

if(cljs.core.truth_(wrapper__15857))
{return wrapper__15857.unlisten(node__15852);
} else
{return goog.events.removeAll.call(null,node__15852,cljs.core.name.call(null,p1__15775_SHARP_));
}
});})(node__15852,G__15849__15854))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15860,event_list));
var temp__3698__auto____15861 = cljs.core.next.call(null,G__15849__15854);

if(cljs.core.truth_(temp__3698__auto____15861))
{var G__15849__15862 = temp__3698__auto____15861;

{
var G__15865 = cljs.core.first.call(null,G__15849__15862);
var G__15866 = G__15849__15862;
node__15852 = G__15865;
G__15849__15854 = G__15866;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15867){
var nds = cljs.core.first(arglist__15867);
var event_list = cljs.core.rest(arglist__15867);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15872 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15874 = (cljs.core.truth_(wrapper__15872)?wrapper__15872.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15876 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15876.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15877__15878 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15877__15878))
{var node__15879 = cljs.core.first.call(null,G__15877__15878);
var G__15877__15880 = G__15877__15878;

while(true){
goog.events.fireListeners.call(null,node__15879,nevent__15874,capture,event_obj__15876);
var temp__3698__auto____15881 = cljs.core.next.call(null,G__15877__15880);

if(cljs.core.truth_(temp__3698__auto____15881))
{var G__15877__15884 = temp__3698__auto____15881;

{
var G__15886 = cljs.core.first.call(null,G__15877__15884);
var G__15887 = G__15877__15884;
node__15879 = G__15886;
G__15877__15880 = G__15887;
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
