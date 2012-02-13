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
var G__15596 = parent;
var G__15597 = child.parentNode;
parent = G__15596;
child = G__15597;
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
var re__15603 = e.relatedTarget;
var this$__15604 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15607 = cljs.core.not.call(null,(re__15603 === this$__15604));

if(cljs.core.truth_(and__3546__auto____15607))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15604,re__15603));
} else
{return and__3546__auto____15607;
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
var obj__15618 = (new Object());
var wevent__15619 = cljs.core.name.call(null,wrapped_key);
var event__15620 = cljs.core.name.call(null,event_key);

obj__15618.wrapped_event = wevent__15619;
obj__15618.event = event__15620;
obj__15618.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15621 = wrapper_func.call(null,func);

callback__15621.listen = func;
callback__15621.scope = opt_scope;
callback__15621.event = event__15620;
callback__15621.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15619,callback__15621,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15619,callback__15621,capture);
}
});
obj__15618.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15625 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15619,false),goog.events.getListeners.call(null,elm,wevent__15619,true)):goog.events.getListeners.call(null,elm,wevent__15619,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15630 = obj.listener;
var lfunc__15631 = listener__15630.listen;
var scope__15633 = listener__15630.scope;
var capture__15634 = listener__15630.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15638 = (function (){var or__3548__auto____15637 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15637))
{return or__3548__auto____15637;
} else
{return cljs.core._EQ_.call(null,lfunc__15631,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15638))
{var or__3548__auto____15688 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15688))
{return or__3548__auto____15688;
} else
{return cljs.core._EQ_.call(null,scope__15633,opt_scope);
}
} else
{return and__3546__auto____15638;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15619,listener__15630,capture__15634);
} else
{return goog.events.unlisten.call(null,elm,wevent__15619,listener__15630,capture__15634);
}
} else
{return null;
}
}),listeners__15625));
});
return obj__15618;
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
var listen_BANG___15705 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15706 = (function (nds,event,func,capture){
var wrapper__15695 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15696__15697 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15696__15697))
{var node__15698 = cljs.core.first.call(null,G__15696__15697);
var G__15696__15699 = G__15696__15697;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15695)))
{goog.events.listen.call(null,node__15698,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15698,wrapper__15695,func,capture);
}
var temp__3698__auto____15701 = cljs.core.next.call(null,G__15696__15699);

if(cljs.core.truth_(temp__3698__auto____15701))
{var G__15696__15704 = temp__3698__auto____15701;

{
var G__15712 = cljs.core.first.call(null,G__15696__15704);
var G__15713 = G__15696__15704;
node__15698 = G__15712;
G__15696__15699 = G__15713;
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
return listen_BANG___15705.call(this,nds,event,func);
case  4 :
return listen_BANG___15706.call(this,nds,event,func,capture);
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
var unlisten_BANG___15739 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15740 = (function (nds,event,func,capture){
var wrapper__15716 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15719__15720 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15719__15720))
{var node__15721 = cljs.core.first.call(null,G__15719__15720);
var G__15719__15722 = G__15719__15720;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15716)))
{goog.events.unlisten.call(null,node__15721,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15716.unlisten(node__15721,func,capture);
}
var temp__3698__auto____15725 = cljs.core.next.call(null,G__15719__15722);

if(cljs.core.truth_(temp__3698__auto____15725))
{var G__15719__15728 = temp__3698__auto____15725;

{
var G__15744 = cljs.core.first.call(null,G__15719__15728);
var G__15745 = G__15719__15728;
node__15721 = G__15744;
G__15719__15722 = G__15745;
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
return unlisten_BANG___15739.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15740.call(this,nds,event,func,capture);
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
var G__15751__15752 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15751__15752))
{var node__15754 = cljs.core.first.call(null,G__15751__15752);
var G__15751__15755 = G__15751__15752;

while(true){
var map_func__15758 = ((function (node__15754,G__15751__15755){
return (function (p1__15715_SHARP_){
var wrapper__15757 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15715_SHARP_);

if(cljs.core.truth_(wrapper__15757))
{return wrapper__15757.unlisten(node__15754);
} else
{return goog.events.removeAll.call(null,node__15754,cljs.core.name.call(null,p1__15715_SHARP_));
}
});})(node__15754,G__15751__15755))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15758,event_list));
var temp__3698__auto____15760 = cljs.core.next.call(null,G__15751__15755);

if(cljs.core.truth_(temp__3698__auto____15760))
{var G__15751__15761 = temp__3698__auto____15760;

{
var G__15769 = cljs.core.first.call(null,G__15751__15761);
var G__15770 = G__15751__15761;
node__15754 = G__15769;
G__15751__15755 = G__15770;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15773){
var nds = cljs.core.first(arglist__15773);
var event_list = cljs.core.rest(arglist__15773);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15776 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15777 = (cljs.core.truth_(wrapper__15776)?wrapper__15776.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15778 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15778.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15782__15783 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15782__15783))
{var node__15784 = cljs.core.first.call(null,G__15782__15783);
var G__15782__15785 = G__15782__15783;

while(true){
goog.events.fireListeners.call(null,node__15784,nevent__15777,capture,event_obj__15778);
var temp__3698__auto____15786 = cljs.core.next.call(null,G__15782__15785);

if(cljs.core.truth_(temp__3698__auto____15786))
{var G__15782__15789 = temp__3698__auto____15786;

{
var G__15799 = cljs.core.first.call(null,G__15782__15789);
var G__15800 = G__15782__15789;
node__15784 = G__15799;
G__15782__15785 = G__15800;
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
