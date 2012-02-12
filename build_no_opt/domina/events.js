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
var G__14701 = parent;
var G__14702 = child.parentNode;
parent = G__14701;
child = G__14702;
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
var re__14711 = e.relatedTarget;
var this$__14712 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____14713 = cljs.core.not.call(null,(re__14711 === this$__14712));

if(cljs.core.truth_(and__3546__auto____14713))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__14712,re__14711));
} else
{return and__3546__auto____14713;
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
var obj__14716 = (new Object());
var wevent__14717 = cljs.core.name.call(null,wrapped_key);
var event__14718 = cljs.core.name.call(null,event_key);

obj__14716.wrapped_event = wevent__14717;
obj__14716.event = event__14718;
obj__14716.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__14719 = wrapper_func.call(null,func);

callback__14719.listen = func;
callback__14719.scope = opt_scope;
callback__14719.event = event__14718;
callback__14719.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__14717,callback__14719,capture);
} else
{return goog.events.listen.call(null,elm,wevent__14717,callback__14719,capture);
}
});
obj__14716.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__14720 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__14717,false),goog.events.getListeners.call(null,elm,wevent__14717,true)):goog.events.getListeners.call(null,elm,wevent__14717,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__14721 = obj.listener;
var lfunc__14722 = listener__14721.listen;
var scope__14723 = listener__14721.scope;
var capture__14724 = listener__14721.capture;

if(cljs.core.truth_((function (){var and__3546__auto____14728 = (function (){var or__3548__auto____14726 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____14726))
{return or__3548__auto____14726;
} else
{return cljs.core._EQ_.call(null,lfunc__14722,func);
}
})();

if(cljs.core.truth_(and__3546__auto____14728))
{var or__3548__auto____14730 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____14730))
{return or__3548__auto____14730;
} else
{return cljs.core._EQ_.call(null,scope__14723,opt_scope);
}
} else
{return and__3546__auto____14728;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__14717,listener__14721,capture__14724);
} else
{return goog.events.unlisten.call(null,elm,wevent__14717,listener__14721,capture__14724);
}
} else
{return null;
}
}),listeners__14720));
});
return obj__14716;
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
var listen_BANG___14785 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___14786 = (function (nds,event,func,capture){
var wrapper__14760 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__14763__14765 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14763__14765))
{var node__14768 = cljs.core.first.call(null,G__14763__14765);
var G__14763__14769 = G__14763__14765;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__14760)))
{goog.events.listen.call(null,node__14768,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__14768,wrapper__14760,func,capture);
}
var temp__3698__auto____14774 = cljs.core.next.call(null,G__14763__14769);

if(cljs.core.truth_(temp__3698__auto____14774))
{var G__14763__14776 = temp__3698__auto____14774;

{
var G__14796 = cljs.core.first.call(null,G__14763__14776);
var G__14797 = G__14763__14776;
node__14768 = G__14796;
G__14763__14769 = G__14797;
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
return listen_BANG___14785.call(this,nds,event,func);
case  4 :
return listen_BANG___14786.call(this,nds,event,func,capture);
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
var unlisten_BANG___14821 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___14822 = (function (nds,event,func,capture){
var wrapper__14803 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__14804__14807 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14804__14807))
{var node__14809 = cljs.core.first.call(null,G__14804__14807);
var G__14804__14810 = G__14804__14807;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__14803)))
{goog.events.unlisten.call(null,node__14809,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__14803.unlisten(node__14809,func,capture);
}
var temp__3698__auto____14814 = cljs.core.next.call(null,G__14804__14810);

if(cljs.core.truth_(temp__3698__auto____14814))
{var G__14804__14817 = temp__3698__auto____14814;

{
var G__14831 = cljs.core.first.call(null,G__14804__14817);
var G__14832 = G__14804__14817;
node__14809 = G__14831;
G__14804__14810 = G__14832;
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
return unlisten_BANG___14821.call(this,nds,event,func);
case  4 :
return unlisten_BANG___14822.call(this,nds,event,func,capture);
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
var G__14833__14836 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14833__14836))
{var node__14837 = cljs.core.first.call(null,G__14833__14836);
var G__14833__14838 = G__14833__14836;

while(true){
var map_func__14842 = ((function (node__14837,G__14833__14838){
return (function (p1__14798_SHARP_){
var wrapper__14840 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__14798_SHARP_);

if(cljs.core.truth_(wrapper__14840))
{return wrapper__14840.unlisten(node__14837);
} else
{return goog.events.removeAll.call(null,node__14837,cljs.core.name.call(null,p1__14798_SHARP_));
}
});})(node__14837,G__14833__14838))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__14842,event_list));
var temp__3698__auto____14844 = cljs.core.next.call(null,G__14833__14838);

if(cljs.core.truth_(temp__3698__auto____14844))
{var G__14833__14845 = temp__3698__auto____14844;

{
var G__14848 = cljs.core.first.call(null,G__14833__14845);
var G__14849 = G__14833__14845;
node__14837 = G__14848;
G__14833__14838 = G__14849;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14850){
var nds = cljs.core.first(arglist__14850);
var event_list = cljs.core.rest(arglist__14850);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__14854 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__14856 = (cljs.core.truth_(wrapper__14854)?wrapper__14854.wrapped_event:cljs.core.name.call(null,event));
var event_obj__14858 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__14858.relatedTarget = event_map.call(null,"﷐'related-target");
var G__14860__14862 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14860__14862))
{var node__14865 = cljs.core.first.call(null,G__14860__14862);
var G__14860__14867 = G__14860__14862;

while(true){
goog.events.fireListeners.call(null,node__14865,nevent__14856,capture,event_obj__14858);
var temp__3698__auto____14874 = cljs.core.next.call(null,G__14860__14867);

if(cljs.core.truth_(temp__3698__auto____14874))
{var G__14860__14875 = temp__3698__auto____14874;

{
var G__14884 = cljs.core.first.call(null,G__14860__14875);
var G__14885 = G__14860__14875;
node__14865 = G__14884;
G__14860__14867 = G__14885;
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
