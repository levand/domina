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
var G__15637 = parent;
var G__15638 = child.parentNode;
parent = G__15637;
child = G__15638;
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
var re__15655 = e.relatedTarget;
var this$__15656 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15658 = cljs.core.not.call(null,(re__15655 === this$__15656));

if(cljs.core.truth_(and__3546__auto____15658))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15656,re__15655));
} else
{return and__3546__auto____15658;
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
var obj__15661 = (new Object());
var wevent__15662 = cljs.core.name.call(null,wrapped_key);
var event__15663 = cljs.core.name.call(null,event_key);

obj__15661.wrapped_event = wevent__15662;
obj__15661.event = event__15663;
obj__15661.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15675 = wrapper_func.call(null,func);

callback__15675.listen = func;
callback__15675.scope = opt_scope;
callback__15675.event = event__15663;
callback__15675.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15662,callback__15675,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15662,callback__15675,capture);
}
});
obj__15661.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15677 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15662,false),goog.events.getListeners.call(null,elm,wevent__15662,true)):goog.events.getListeners.call(null,elm,wevent__15662,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15678 = obj.listener;
var lfunc__15680 = listener__15678.listen;
var scope__15682 = listener__15678.scope;
var capture__15686 = listener__15678.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15690 = (function (){var or__3548__auto____15687 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15687))
{return or__3548__auto____15687;
} else
{return cljs.core._EQ_.call(null,lfunc__15680,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15690))
{var or__3548__auto____15692 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15692))
{return or__3548__auto____15692;
} else
{return cljs.core._EQ_.call(null,scope__15682,opt_scope);
}
} else
{return and__3546__auto____15690;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15662,listener__15678,capture__15686);
} else
{return goog.events.unlisten.call(null,elm,wevent__15662,listener__15678,capture__15686);
}
} else
{return null;
}
}),listeners__15677));
});
return obj__15661;
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
var listen_BANG___15726 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15727 = (function (nds,event,func,capture){
var wrapper__15702 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15715__15719 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15715__15719))
{var node__15720 = cljs.core.first.call(null,G__15715__15719);
var G__15715__15721 = G__15715__15719;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15702)))
{goog.events.listen.call(null,node__15720,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15720,wrapper__15702,func,capture);
}
var temp__3698__auto____15722 = cljs.core.next.call(null,G__15715__15721);

if(cljs.core.truth_(temp__3698__auto____15722))
{var G__15715__15723 = temp__3698__auto____15722;

{
var G__15730 = cljs.core.first.call(null,G__15715__15723);
var G__15731 = G__15715__15723;
node__15720 = G__15730;
G__15715__15721 = G__15731;
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
return listen_BANG___15726.call(this,nds,event,func);
case  4 :
return listen_BANG___15727.call(this,nds,event,func,capture);
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
var unlisten_BANG___15752 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15753 = (function (nds,event,func,capture){
var wrapper__15739 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15741__15742 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15741__15742))
{var node__15743 = cljs.core.first.call(null,G__15741__15742);
var G__15741__15744 = G__15741__15742;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15739)))
{goog.events.unlisten.call(null,node__15743,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15739.unlisten(node__15743,func,capture);
}
var temp__3698__auto____15748 = cljs.core.next.call(null,G__15741__15744);

if(cljs.core.truth_(temp__3698__auto____15748))
{var G__15741__15749 = temp__3698__auto____15748;

{
var G__15757 = cljs.core.first.call(null,G__15741__15749);
var G__15758 = G__15741__15749;
node__15743 = G__15757;
G__15741__15744 = G__15758;
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
return unlisten_BANG___15752.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15753.call(this,nds,event,func,capture);
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
var G__15765__15767 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15765__15767))
{var node__15769 = cljs.core.first.call(null,G__15765__15767);
var G__15765__15770 = G__15765__15767;

while(true){
var map_func__15774 = ((function (node__15769,G__15765__15770){
return (function (p1__15735_SHARP_){
var wrapper__15773 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15735_SHARP_);

if(cljs.core.truth_(wrapper__15773))
{return wrapper__15773.unlisten(node__15769);
} else
{return goog.events.removeAll.call(null,node__15769,cljs.core.name.call(null,p1__15735_SHARP_));
}
});})(node__15769,G__15765__15770))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15774,event_list));
var temp__3698__auto____15775 = cljs.core.next.call(null,G__15765__15770);

if(cljs.core.truth_(temp__3698__auto____15775))
{var G__15765__15776 = temp__3698__auto____15775;

{
var G__15781 = cljs.core.first.call(null,G__15765__15776);
var G__15782 = G__15765__15776;
node__15769 = G__15781;
G__15765__15770 = G__15782;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15785){
var nds = cljs.core.first(arglist__15785);
var event_list = cljs.core.rest(arglist__15785);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15788 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15791 = (cljs.core.truth_(wrapper__15788)?wrapper__15788.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15792 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15792.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15794__15796 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15794__15796))
{var node__15797 = cljs.core.first.call(null,G__15794__15796);
var G__15794__15798 = G__15794__15796;

while(true){
goog.events.fireListeners.call(null,node__15797,nevent__15791,capture,event_obj__15792);
var temp__3698__auto____15799 = cljs.core.next.call(null,G__15794__15798);

if(cljs.core.truth_(temp__3698__auto____15799))
{var G__15794__15800 = temp__3698__auto____15799;

{
var G__15805 = cljs.core.first.call(null,G__15794__15800);
var G__15806 = G__15794__15800;
node__15797 = G__15805;
G__15794__15798 = G__15806;
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
