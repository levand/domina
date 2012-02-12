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
var G__15507 = parent;
var G__15508 = child.parentNode;
parent = G__15507;
child = G__15508;
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
var re__15509 = e.relatedTarget;
var this$__15510 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15546 = cljs.core.not.call(null,(re__15509 === this$__15510));

if(cljs.core.truth_(and__3546__auto____15546))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15510,re__15509));
} else
{return and__3546__auto____15546;
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
var obj__15551 = (new Object());
var wevent__15552 = cljs.core.name.call(null,wrapped_key);
var event__15553 = cljs.core.name.call(null,event_key);

obj__15551.wrapped_event = wevent__15552;
obj__15551.event = event__15553;
obj__15551.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15555 = wrapper_func.call(null,func);

callback__15555.listen = func;
callback__15555.scope = opt_scope;
callback__15555.event = event__15553;
callback__15555.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15552,callback__15555,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15552,callback__15555,capture);
}
});
obj__15551.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15559 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15552,false),goog.events.getListeners.call(null,elm,wevent__15552,true)):goog.events.getListeners.call(null,elm,wevent__15552,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15562 = obj.listener;
var lfunc__15563 = listener__15562.listen;
var scope__15566 = listener__15562.scope;
var capture__15567 = listener__15562.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15573 = (function (){var or__3548__auto____15571 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15571))
{return or__3548__auto____15571;
} else
{return cljs.core._EQ_.call(null,lfunc__15563,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15573))
{var or__3548__auto____15609 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15609))
{return or__3548__auto____15609;
} else
{return cljs.core._EQ_.call(null,scope__15566,opt_scope);
}
} else
{return and__3546__auto____15573;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15552,listener__15562,capture__15567);
} else
{return goog.events.unlisten.call(null,elm,wevent__15552,listener__15562,capture__15567);
}
} else
{return null;
}
}),listeners__15559));
});
return obj__15551;
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
var listen_BANG___15636 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15637 = (function (nds,event,func,capture){
var wrapper__15621 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15622__15623 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15622__15623))
{var node__15625 = cljs.core.first.call(null,G__15622__15623);
var G__15622__15630 = G__15622__15623;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15621)))
{goog.events.listen.call(null,node__15625,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15625,wrapper__15621,func,capture);
}
var temp__3698__auto____15632 = cljs.core.next.call(null,G__15622__15630);

if(cljs.core.truth_(temp__3698__auto____15632))
{var G__15622__15633 = temp__3698__auto____15632;

{
var G__15643 = cljs.core.first.call(null,G__15622__15633);
var G__15644 = G__15622__15633;
node__15625 = G__15643;
G__15622__15630 = G__15644;
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
return listen_BANG___15636.call(this,nds,event,func);
case  4 :
return listen_BANG___15637.call(this,nds,event,func,capture);
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
var unlisten_BANG___15662 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15663 = (function (nds,event,func,capture){
var wrapper__15649 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15650__15651 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15650__15651))
{var node__15652 = cljs.core.first.call(null,G__15650__15651);
var G__15650__15653 = G__15650__15651;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15649)))
{goog.events.unlisten.call(null,node__15652,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15649.unlisten(node__15652,func,capture);
}
var temp__3698__auto____15658 = cljs.core.next.call(null,G__15650__15653);

if(cljs.core.truth_(temp__3698__auto____15658))
{var G__15650__15659 = temp__3698__auto____15658;

{
var G__15667 = cljs.core.first.call(null,G__15650__15659);
var G__15669 = G__15650__15659;
node__15652 = G__15667;
G__15650__15653 = G__15669;
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
return unlisten_BANG___15662.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15663.call(this,nds,event,func,capture);
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
var G__15671__15673 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15671__15673))
{var node__15675 = cljs.core.first.call(null,G__15671__15673);
var G__15671__15677 = G__15671__15673;

while(true){
var map_func__15681 = ((function (node__15675,G__15671__15677){
return (function (p1__15645_SHARP_){
var wrapper__15680 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15645_SHARP_);

if(cljs.core.truth_(wrapper__15680))
{return wrapper__15680.unlisten(node__15675);
} else
{return goog.events.removeAll.call(null,node__15675,cljs.core.name.call(null,p1__15645_SHARP_));
}
});})(node__15675,G__15671__15677))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15681,event_list));
var temp__3698__auto____15682 = cljs.core.next.call(null,G__15671__15677);

if(cljs.core.truth_(temp__3698__auto____15682))
{var G__15671__15683 = temp__3698__auto____15682;

{
var G__15686 = cljs.core.first.call(null,G__15671__15683);
var G__15687 = G__15671__15683;
node__15675 = G__15686;
G__15671__15677 = G__15687;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15690){
var nds = cljs.core.first(arglist__15690);
var event_list = cljs.core.rest(arglist__15690);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15693 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15696 = (cljs.core.truth_(wrapper__15693)?wrapper__15693.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15697 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15697.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15699__15702 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15699__15702))
{var node__15703 = cljs.core.first.call(null,G__15699__15702);
var G__15699__15705 = G__15699__15702;

while(true){
goog.events.fireListeners.call(null,node__15703,nevent__15696,capture,event_obj__15697);
var temp__3698__auto____15706 = cljs.core.next.call(null,G__15699__15705);

if(cljs.core.truth_(temp__3698__auto____15706))
{var G__15699__15708 = temp__3698__auto____15706;

{
var G__15712 = cljs.core.first.call(null,G__15699__15708);
var G__15713 = G__15699__15708;
node__15703 = G__15712;
G__15699__15705 = G__15713;
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
