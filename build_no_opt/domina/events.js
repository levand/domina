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
var G__15703 = parent;
var G__15704 = child.parentNode;
parent = G__15703;
child = G__15704;
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
var re__15714 = e.relatedTarget;
var this$__15716 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15718 = cljs.core.not.call(null,(re__15714 === this$__15716));

if(cljs.core.truth_(and__3546__auto____15718))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15716,re__15714));
} else
{return and__3546__auto____15718;
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
var obj__15724 = (new Object());
var wevent__15725 = cljs.core.name.call(null,wrapped_key);
var event__15726 = cljs.core.name.call(null,event_key);

obj__15724.wrapped_event = wevent__15725;
obj__15724.event = event__15726;
obj__15724.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15762 = wrapper_func.call(null,func);

callback__15762.listen = func;
callback__15762.scope = opt_scope;
callback__15762.event = event__15726;
callback__15762.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15725,callback__15762,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15725,callback__15762,capture);
}
});
obj__15724.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15772 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15725,false),goog.events.getListeners.call(null,elm,wevent__15725,true)):goog.events.getListeners.call(null,elm,wevent__15725,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15777 = obj.listener;
var lfunc__15778 = listener__15777.listen;
var scope__15779 = listener__15777.scope;
var capture__15780 = listener__15777.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15782 = (function (){var or__3548__auto____15781 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15781))
{return or__3548__auto____15781;
} else
{return cljs.core._EQ_.call(null,lfunc__15778,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15782))
{var or__3548__auto____15783 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15783))
{return or__3548__auto____15783;
} else
{return cljs.core._EQ_.call(null,scope__15779,opt_scope);
}
} else
{return and__3546__auto____15782;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15725,listener__15777,capture__15780);
} else
{return goog.events.unlisten.call(null,elm,wevent__15725,listener__15777,capture__15780);
}
} else
{return null;
}
}),listeners__15772));
});
return obj__15724;
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
var listen_BANG___15812 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15813 = (function (nds,event,func,capture){
var wrapper__15801 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15802__15803 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15802__15803))
{var node__15804 = cljs.core.first.call(null,G__15802__15803);
var G__15802__15805 = G__15802__15803;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15801)))
{goog.events.listen.call(null,node__15804,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15804,wrapper__15801,func,capture);
}
var temp__3698__auto____15807 = cljs.core.next.call(null,G__15802__15805);

if(cljs.core.truth_(temp__3698__auto____15807))
{var G__15802__15809 = temp__3698__auto____15807;

{
var G__15815 = cljs.core.first.call(null,G__15802__15809);
var G__15816 = G__15802__15809;
node__15804 = G__15815;
G__15802__15805 = G__15816;
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
return listen_BANG___15812.call(this,nds,event,func);
case  4 :
return listen_BANG___15813.call(this,nds,event,func,capture);
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
var unlisten_BANG___15830 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15831 = (function (nds,event,func,capture){
var wrapper__15819 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15820__15822 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15820__15822))
{var node__15823 = cljs.core.first.call(null,G__15820__15822);
var G__15820__15824 = G__15820__15822;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15819)))
{goog.events.unlisten.call(null,node__15823,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15819.unlisten(node__15823,func,capture);
}
var temp__3698__auto____15827 = cljs.core.next.call(null,G__15820__15824);

if(cljs.core.truth_(temp__3698__auto____15827))
{var G__15820__15828 = temp__3698__auto____15827;

{
var G__15838 = cljs.core.first.call(null,G__15820__15828);
var G__15839 = G__15820__15828;
node__15823 = G__15838;
G__15820__15824 = G__15839;
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
return unlisten_BANG___15830.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15831.call(this,nds,event,func,capture);
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
var G__15842__15843 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15842__15843))
{var node__15847 = cljs.core.first.call(null,G__15842__15843);
var G__15842__15848 = G__15842__15843;

while(true){
var map_func__15853 = ((function (node__15847,G__15842__15848){
return (function (p1__15817_SHARP_){
var wrapper__15850 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15817_SHARP_);

if(cljs.core.truth_(wrapper__15850))
{return wrapper__15850.unlisten(node__15847);
} else
{return goog.events.removeAll.call(null,node__15847,cljs.core.name.call(null,p1__15817_SHARP_));
}
});})(node__15847,G__15842__15848))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15853,event_list));
var temp__3698__auto____15856 = cljs.core.next.call(null,G__15842__15848);

if(cljs.core.truth_(temp__3698__auto____15856))
{var G__15842__15857 = temp__3698__auto____15856;

{
var G__15861 = cljs.core.first.call(null,G__15842__15857);
var G__15862 = G__15842__15857;
node__15847 = G__15861;
G__15842__15848 = G__15862;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15864){
var nds = cljs.core.first(arglist__15864);
var event_list = cljs.core.rest(arglist__15864);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15865 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15866 = (cljs.core.truth_(wrapper__15865)?wrapper__15865.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15867 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15867.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15869__15870 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15869__15870))
{var node__15872 = cljs.core.first.call(null,G__15869__15870);
var G__15869__15873 = G__15869__15870;

while(true){
goog.events.fireListeners.call(null,node__15872,nevent__15866,capture,event_obj__15867);
var temp__3698__auto____15875 = cljs.core.next.call(null,G__15869__15873);

if(cljs.core.truth_(temp__3698__auto____15875))
{var G__15869__15877 = temp__3698__auto____15875;

{
var G__15880 = cljs.core.first.call(null,G__15869__15877);
var G__15881 = G__15869__15877;
node__15872 = G__15880;
G__15869__15873 = G__15881;
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
