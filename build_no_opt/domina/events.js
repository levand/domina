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
var G__15510 = parent;
var G__15511 = child.parentNode;
parent = G__15510;
child = G__15511;
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
var re__15515 = e.relatedTarget;
var this$__15516 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15517 = cljs.core.not.call(null,(re__15515 === this$__15516));

if(cljs.core.truth_(and__3546__auto____15517))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15516,re__15515));
} else
{return and__3546__auto____15517;
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
var obj__15527 = (new Object());
var wevent__15528 = cljs.core.name.call(null,wrapped_key);
var event__15529 = cljs.core.name.call(null,event_key);

obj__15527.wrapped_event = wevent__15528;
obj__15527.event = event__15529;
obj__15527.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15530 = wrapper_func.call(null,func);

callback__15530.listen = func;
callback__15530.scope = opt_scope;
callback__15530.event = event__15529;
callback__15530.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15528,callback__15530,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15528,callback__15530,capture);
}
});
obj__15527.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15533 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15528,false),goog.events.getListeners.call(null,elm,wevent__15528,true)):goog.events.getListeners.call(null,elm,wevent__15528,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15534 = obj.listener;
var lfunc__15535 = listener__15534.listen;
var scope__15536 = listener__15534.scope;
var capture__15537 = listener__15534.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15539 = (function (){var or__3548__auto____15538 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15538))
{return or__3548__auto____15538;
} else
{return cljs.core._EQ_.call(null,lfunc__15535,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15539))
{var or__3548__auto____15556 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15556))
{return or__3548__auto____15556;
} else
{return cljs.core._EQ_.call(null,scope__15536,opt_scope);
}
} else
{return and__3546__auto____15539;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15528,listener__15534,capture__15537);
} else
{return goog.events.unlisten.call(null,elm,wevent__15528,listener__15534,capture__15537);
}
} else
{return null;
}
}),listeners__15533));
});
return obj__15527;
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
var listen_BANG___15622 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15623 = (function (nds,event,func,capture){
var wrapper__15609 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15610__15612 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15610__15612))
{var node__15615 = cljs.core.first.call(null,G__15610__15612);
var G__15610__15617 = G__15610__15612;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15609)))
{goog.events.listen.call(null,node__15615,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15615,wrapper__15609,func,capture);
}
var temp__3698__auto____15620 = cljs.core.next.call(null,G__15610__15617);

if(cljs.core.truth_(temp__3698__auto____15620))
{var G__15610__15621 = temp__3698__auto____15620;

{
var G__15629 = cljs.core.first.call(null,G__15610__15621);
var G__15631 = G__15610__15621;
node__15615 = G__15629;
G__15610__15617 = G__15631;
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
return listen_BANG___15622.call(this,nds,event,func);
case  4 :
return listen_BANG___15623.call(this,nds,event,func,capture);
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
var unlisten_BANG___15654 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15655 = (function (nds,event,func,capture){
var wrapper__15641 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15642__15644 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15642__15644))
{var node__15646 = cljs.core.first.call(null,G__15642__15644);
var G__15642__15648 = G__15642__15644;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15641)))
{goog.events.unlisten.call(null,node__15646,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15641.unlisten(node__15646,func,capture);
}
var temp__3698__auto____15651 = cljs.core.next.call(null,G__15642__15648);

if(cljs.core.truth_(temp__3698__auto____15651))
{var G__15642__15653 = temp__3698__auto____15651;

{
var G__15659 = cljs.core.first.call(null,G__15642__15653);
var G__15660 = G__15642__15653;
node__15646 = G__15659;
G__15642__15648 = G__15660;
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
return unlisten_BANG___15654.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15655.call(this,nds,event,func,capture);
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
var G__15661__15662 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15661__15662))
{var node__15663 = cljs.core.first.call(null,G__15661__15662);
var G__15661__15664 = G__15661__15662;

while(true){
var map_func__15666 = ((function (node__15663,G__15661__15664){
return (function (p1__15638_SHARP_){
var wrapper__15665 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15638_SHARP_);

if(cljs.core.truth_(wrapper__15665))
{return wrapper__15665.unlisten(node__15663);
} else
{return goog.events.removeAll.call(null,node__15663,cljs.core.name.call(null,p1__15638_SHARP_));
}
});})(node__15663,G__15661__15664))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15666,event_list));
var temp__3698__auto____15667 = cljs.core.next.call(null,G__15661__15664);

if(cljs.core.truth_(temp__3698__auto____15667))
{var G__15661__15668 = temp__3698__auto____15667;

{
var G__15669 = cljs.core.first.call(null,G__15661__15668);
var G__15670 = G__15661__15668;
node__15663 = G__15669;
G__15661__15664 = G__15670;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15671){
var nds = cljs.core.first(arglist__15671);
var event_list = cljs.core.rest(arglist__15671);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15674 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15675 = (cljs.core.truth_(wrapper__15674)?wrapper__15674.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15677 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15677.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15679__15680 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15679__15680))
{var node__15681 = cljs.core.first.call(null,G__15679__15680);
var G__15679__15682 = G__15679__15680;

while(true){
goog.events.fireListeners.call(null,node__15681,nevent__15675,capture,event_obj__15677);
var temp__3698__auto____15683 = cljs.core.next.call(null,G__15679__15682);

if(cljs.core.truth_(temp__3698__auto____15683))
{var G__15679__15684 = temp__3698__auto____15683;

{
var G__15687 = cljs.core.first.call(null,G__15679__15684);
var G__15699 = G__15679__15684;
node__15681 = G__15687;
G__15679__15682 = G__15699;
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
