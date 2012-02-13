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
var G__15557 = parent;
var G__15558 = child.parentNode;
parent = G__15557;
child = G__15558;
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
var re__15584 = e.relatedTarget;
var this$__15586 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15591 = cljs.core.not.call(null,(re__15584 === this$__15586));

if(cljs.core.truth_(and__3546__auto____15591))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15586,re__15584));
} else
{return and__3546__auto____15591;
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
var obj__15609 = (new Object());
var wevent__15610 = cljs.core.name.call(null,wrapped_key);
var event__15611 = cljs.core.name.call(null,event_key);

obj__15609.wrapped_event = wevent__15610;
obj__15609.event = event__15611;
obj__15609.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15612 = wrapper_func.call(null,func);

callback__15612.listen = func;
callback__15612.scope = opt_scope;
callback__15612.event = event__15611;
callback__15612.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15610,callback__15612,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15610,callback__15612,capture);
}
});
obj__15609.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15618 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15610,false),goog.events.getListeners.call(null,elm,wevent__15610,true)):goog.events.getListeners.call(null,elm,wevent__15610,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15621 = obj.listener;
var lfunc__15622 = listener__15621.listen;
var scope__15625 = listener__15621.scope;
var capture__15627 = listener__15621.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15634 = (function (){var or__3548__auto____15631 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15631))
{return or__3548__auto____15631;
} else
{return cljs.core._EQ_.call(null,lfunc__15622,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15634))
{var or__3548__auto____15637 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15637))
{return or__3548__auto____15637;
} else
{return cljs.core._EQ_.call(null,scope__15625,opt_scope);
}
} else
{return and__3546__auto____15634;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15610,listener__15621,capture__15627);
} else
{return goog.events.unlisten.call(null,elm,wevent__15610,listener__15621,capture__15627);
}
} else
{return null;
}
}),listeners__15618));
});
return obj__15609;
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
var listen_BANG___15660 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15661 = (function (nds,event,func,capture){
var wrapper__15650 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15651__15652 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15651__15652))
{var node__15654 = cljs.core.first.call(null,G__15651__15652);
var G__15651__15655 = G__15651__15652;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15650)))
{goog.events.listen.call(null,node__15654,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15654,wrapper__15650,func,capture);
}
var temp__3698__auto____15657 = cljs.core.next.call(null,G__15651__15655);

if(cljs.core.truth_(temp__3698__auto____15657))
{var G__15651__15658 = temp__3698__auto____15657;

{
var G__15666 = cljs.core.first.call(null,G__15651__15658);
var G__15668 = G__15651__15658;
node__15654 = G__15666;
G__15651__15655 = G__15668;
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
return listen_BANG___15660.call(this,nds,event,func);
case  4 :
return listen_BANG___15661.call(this,nds,event,func,capture);
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
var unlisten_BANG___15687 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15688 = (function (nds,event,func,capture){
var wrapper__15672 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15673__15674 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15673__15674))
{var node__15675 = cljs.core.first.call(null,G__15673__15674);
var G__15673__15676 = G__15673__15674;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15672)))
{goog.events.unlisten.call(null,node__15675,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15672.unlisten(node__15675,func,capture);
}
var temp__3698__auto____15677 = cljs.core.next.call(null,G__15673__15676);

if(cljs.core.truth_(temp__3698__auto____15677))
{var G__15673__15678 = temp__3698__auto____15677;

{
var G__15701 = cljs.core.first.call(null,G__15673__15678);
var G__15702 = G__15673__15678;
node__15675 = G__15701;
G__15673__15676 = G__15702;
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
return unlisten_BANG___15687.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15688.call(this,nds,event,func,capture);
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
var G__15706__15707 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15706__15707))
{var node__15709 = cljs.core.first.call(null,G__15706__15707);
var G__15706__15711 = G__15706__15707;

while(true){
var map_func__15715 = ((function (node__15709,G__15706__15711){
return (function (p1__15669_SHARP_){
var wrapper__15713 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15669_SHARP_);

if(cljs.core.truth_(wrapper__15713))
{return wrapper__15713.unlisten(node__15709);
} else
{return goog.events.removeAll.call(null,node__15709,cljs.core.name.call(null,p1__15669_SHARP_));
}
});})(node__15709,G__15706__15711))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15715,event_list));
var temp__3698__auto____15718 = cljs.core.next.call(null,G__15706__15711);

if(cljs.core.truth_(temp__3698__auto____15718))
{var G__15706__15720 = temp__3698__auto____15718;

{
var G__15726 = cljs.core.first.call(null,G__15706__15720);
var G__15728 = G__15706__15720;
node__15709 = G__15726;
G__15706__15711 = G__15728;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15729){
var nds = cljs.core.first(arglist__15729);
var event_list = cljs.core.rest(arglist__15729);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15734 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15735 = (cljs.core.truth_(wrapper__15734)?wrapper__15734.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15736 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15736.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15737__15741 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15737__15741))
{var node__15742 = cljs.core.first.call(null,G__15737__15741);
var G__15737__15743 = G__15737__15741;

while(true){
goog.events.fireListeners.call(null,node__15742,nevent__15735,capture,event_obj__15736);
var temp__3698__auto____15744 = cljs.core.next.call(null,G__15737__15743);

if(cljs.core.truth_(temp__3698__auto____15744))
{var G__15737__15746 = temp__3698__auto____15744;

{
var G__15750 = cljs.core.first.call(null,G__15737__15746);
var G__15751 = G__15737__15746;
node__15742 = G__15750;
G__15737__15743 = G__15751;
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
