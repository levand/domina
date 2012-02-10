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
var G__15739 = parent;
var G__15740 = child.parentNode;
parent = G__15739;
child = G__15740;
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
var re__15743 = e.relatedTarget;
var this$__15744 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15745 = cljs.core.not.call(null,(re__15743 === this$__15744));

if(cljs.core.truth_(and__3546__auto____15745))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15744,re__15743));
} else
{return and__3546__auto____15745;
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
var obj__15752 = (new Object());
var wevent__15753 = cljs.core.name.call(null,wrapped_key);
var event__15755 = cljs.core.name.call(null,event_key);

obj__15752.wrapped_event = wevent__15753;
obj__15752.event = event__15755;
obj__15752.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15757 = wrapper_func.call(null,func);

callback__15757.listen = func;
callback__15757.scope = opt_scope;
callback__15757.event = event__15755;
callback__15757.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15753,callback__15757,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15753,callback__15757,capture);
}
});
obj__15752.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15760 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15753,false),goog.events.getListeners.call(null,elm,wevent__15753,true)):goog.events.getListeners.call(null,elm,wevent__15753,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15762 = obj.listener;
var lfunc__15764 = listener__15762.listen;
var scope__15765 = listener__15762.scope;
var capture__15768 = listener__15762.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15771 = (function (){var or__3548__auto____15769 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15769))
{return or__3548__auto____15769;
} else
{return cljs.core._EQ_.call(null,lfunc__15764,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15771))
{var or__3548__auto____15773 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15773))
{return or__3548__auto____15773;
} else
{return cljs.core._EQ_.call(null,scope__15765,opt_scope);
}
} else
{return and__3546__auto____15771;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15753,listener__15762,capture__15768);
} else
{return goog.events.unlisten.call(null,elm,wevent__15753,listener__15762,capture__15768);
}
} else
{return null;
}
}),listeners__15760));
});
return obj__15752;
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
var listen_BANG___15797 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15798 = (function (nds,event,func,capture){
var wrapper__15785 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15786__15788 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15786__15788))
{var node__15789 = cljs.core.first.call(null,G__15786__15788);
var G__15786__15790 = G__15786__15788;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15785)))
{goog.events.listen.call(null,node__15789,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15789,wrapper__15785,func,capture);
}
var temp__3698__auto____15792 = cljs.core.next.call(null,G__15786__15790);

if(cljs.core.truth_(temp__3698__auto____15792))
{var G__15786__15793 = temp__3698__auto____15792;

{
var G__15800 = cljs.core.first.call(null,G__15786__15793);
var G__15801 = G__15786__15793;
node__15789 = G__15800;
G__15786__15790 = G__15801;
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
return listen_BANG___15797.call(this,nds,event,func);
case  4 :
return listen_BANG___15798.call(this,nds,event,func,capture);
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
var unlisten_BANG___15813 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15814 = (function (nds,event,func,capture){
var wrapper__15803 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15804__15805 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15804__15805))
{var node__15807 = cljs.core.first.call(null,G__15804__15805);
var G__15804__15808 = G__15804__15805;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15803)))
{goog.events.unlisten.call(null,node__15807,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15803.unlisten(node__15807,func,capture);
}
var temp__3698__auto____15810 = cljs.core.next.call(null,G__15804__15808);

if(cljs.core.truth_(temp__3698__auto____15810))
{var G__15804__15811 = temp__3698__auto____15810;

{
var G__15822 = cljs.core.first.call(null,G__15804__15811);
var G__15823 = G__15804__15811;
node__15807 = G__15822;
G__15804__15808 = G__15823;
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
return unlisten_BANG___15813.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15814.call(this,nds,event,func,capture);
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
var G__15828__15830 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15828__15830))
{var node__15831 = cljs.core.first.call(null,G__15828__15830);
var G__15828__15832 = G__15828__15830;

while(true){
var map_func__15834 = ((function (node__15831,G__15828__15832){
return (function (p1__15802_SHARP_){
var wrapper__15833 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15802_SHARP_);

if(cljs.core.truth_(wrapper__15833))
{return wrapper__15833.unlisten(node__15831);
} else
{return goog.events.removeAll.call(null,node__15831,cljs.core.name.call(null,p1__15802_SHARP_));
}
});})(node__15831,G__15828__15832))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15834,event_list));
var temp__3698__auto____15837 = cljs.core.next.call(null,G__15828__15832);

if(cljs.core.truth_(temp__3698__auto____15837))
{var G__15828__15839 = temp__3698__auto____15837;

{
var G__15858 = cljs.core.first.call(null,G__15828__15839);
var G__15859 = G__15828__15839;
node__15831 = G__15858;
G__15828__15832 = G__15859;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15860){
var nds = cljs.core.first(arglist__15860);
var event_list = cljs.core.rest(arglist__15860);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15863 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15864 = (cljs.core.truth_(wrapper__15863)?wrapper__15863.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15865 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15865.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15868__15870 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15868__15870))
{var node__15873 = cljs.core.first.call(null,G__15868__15870);
var G__15868__15875 = G__15868__15870;

while(true){
goog.events.fireListeners.call(null,node__15873,nevent__15864,capture,event_obj__15865);
var temp__3698__auto____15879 = cljs.core.next.call(null,G__15868__15875);

if(cljs.core.truth_(temp__3698__auto____15879))
{var G__15868__15883 = temp__3698__auto____15879;

{
var G__15897 = cljs.core.first.call(null,G__15868__15883);
var G__15898 = G__15868__15883;
node__15873 = G__15897;
G__15868__15875 = G__15898;
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
