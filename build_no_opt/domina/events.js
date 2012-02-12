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
var G__15546 = parent;
var G__15547 = child.parentNode;
parent = G__15546;
child = G__15547;
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
var re__15553 = e.relatedTarget;
var this$__15555 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15558 = cljs.core.not.call(null,(re__15553 === this$__15555));

if(cljs.core.truth_(and__3546__auto____15558))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15555,re__15553));
} else
{return and__3546__auto____15558;
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
var obj__15566 = (new Object());
var wevent__15567 = cljs.core.name.call(null,wrapped_key);
var event__15568 = cljs.core.name.call(null,event_key);

obj__15566.wrapped_event = wevent__15567;
obj__15566.event = event__15568;
obj__15566.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15571 = wrapper_func.call(null,func);

callback__15571.listen = func;
callback__15571.scope = opt_scope;
callback__15571.event = event__15568;
callback__15571.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15567,callback__15571,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15567,callback__15571,capture);
}
});
obj__15566.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15580 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15567,false),goog.events.getListeners.call(null,elm,wevent__15567,true)):goog.events.getListeners.call(null,elm,wevent__15567,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15581 = obj.listener;
var lfunc__15582 = listener__15581.listen;
var scope__15583 = listener__15581.scope;
var capture__15586 = listener__15581.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15590 = (function (){var or__3548__auto____15588 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15588))
{return or__3548__auto____15588;
} else
{return cljs.core._EQ_.call(null,lfunc__15582,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15590))
{var or__3548__auto____15594 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15594))
{return or__3548__auto____15594;
} else
{return cljs.core._EQ_.call(null,scope__15583,opt_scope);
}
} else
{return and__3546__auto____15590;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15567,listener__15581,capture__15586);
} else
{return goog.events.unlisten.call(null,elm,wevent__15567,listener__15581,capture__15586);
}
} else
{return null;
}
}),listeners__15580));
});
return obj__15566;
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
var listen_BANG___15651 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15652 = (function (nds,event,func,capture){
var wrapper__15633 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15637__15640 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15637__15640))
{var node__15642 = cljs.core.first.call(null,G__15637__15640);
var G__15637__15644 = G__15637__15640;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15633)))
{goog.events.listen.call(null,node__15642,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15642,wrapper__15633,func,capture);
}
var temp__3698__auto____15645 = cljs.core.next.call(null,G__15637__15644);

if(cljs.core.truth_(temp__3698__auto____15645))
{var G__15637__15649 = temp__3698__auto____15645;

{
var G__15661 = cljs.core.first.call(null,G__15637__15649);
var G__15662 = G__15637__15649;
node__15642 = G__15661;
G__15637__15644 = G__15662;
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
return listen_BANG___15651.call(this,nds,event,func);
case  4 :
return listen_BANG___15652.call(this,nds,event,func,capture);
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
var unlisten_BANG___15689 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15690 = (function (nds,event,func,capture){
var wrapper__15672 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15674__15677 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15674__15677))
{var node__15679 = cljs.core.first.call(null,G__15674__15677);
var G__15674__15680 = G__15674__15677;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15672)))
{goog.events.unlisten.call(null,node__15679,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15672.unlisten(node__15679,func,capture);
}
var temp__3698__auto____15682 = cljs.core.next.call(null,G__15674__15680);

if(cljs.core.truth_(temp__3698__auto____15682))
{var G__15674__15683 = temp__3698__auto____15682;

{
var G__15697 = cljs.core.first.call(null,G__15674__15683);
var G__15698 = G__15674__15683;
node__15679 = G__15697;
G__15674__15680 = G__15698;
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
return unlisten_BANG___15689.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15690.call(this,nds,event,func,capture);
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
var G__15706__15708 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15706__15708))
{var node__15709 = cljs.core.first.call(null,G__15706__15708);
var G__15706__15710 = G__15706__15708;

while(true){
var map_func__15715 = ((function (node__15709,G__15706__15710){
return (function (p1__15667_SHARP_){
var wrapper__15712 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15667_SHARP_);

if(cljs.core.truth_(wrapper__15712))
{return wrapper__15712.unlisten(node__15709);
} else
{return goog.events.removeAll.call(null,node__15709,cljs.core.name.call(null,p1__15667_SHARP_));
}
});})(node__15709,G__15706__15710))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15715,event_list));
var temp__3698__auto____15716 = cljs.core.next.call(null,G__15706__15710);

if(cljs.core.truth_(temp__3698__auto____15716))
{var G__15706__15719 = temp__3698__auto____15716;

{
var G__15720 = cljs.core.first.call(null,G__15706__15719);
var G__15721 = G__15706__15719;
node__15709 = G__15720;
G__15706__15710 = G__15721;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15722){
var nds = cljs.core.first(arglist__15722);
var event_list = cljs.core.rest(arglist__15722);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15723 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15724 = (cljs.core.truth_(wrapper__15723)?wrapper__15723.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15725 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15725.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15726__15727 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15726__15727))
{var node__15728 = cljs.core.first.call(null,G__15726__15727);
var G__15726__15729 = G__15726__15727;

while(true){
goog.events.fireListeners.call(null,node__15728,nevent__15724,capture,event_obj__15725);
var temp__3698__auto____15730 = cljs.core.next.call(null,G__15726__15729);

if(cljs.core.truth_(temp__3698__auto____15730))
{var G__15726__15731 = temp__3698__auto____15730;

{
var G__15732 = cljs.core.first.call(null,G__15726__15731);
var G__15733 = G__15726__15731;
node__15728 = G__15732;
G__15726__15729 = G__15733;
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
