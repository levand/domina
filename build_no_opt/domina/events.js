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
var G__15541 = parent;
var G__15542 = child.parentNode;
parent = G__15541;
child = G__15542;
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
var re__15543 = e.relatedTarget;
var this$__15544 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15545 = cljs.core.not.call(null,(re__15543 === this$__15544));

if(cljs.core.truth_(and__3546__auto____15545))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15544,re__15543));
} else
{return and__3546__auto____15545;
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
var obj__15546 = (new Object());
var wevent__15547 = cljs.core.name.call(null,wrapped_key);
var event__15548 = cljs.core.name.call(null,event_key);

obj__15546.wrapped_event = wevent__15547;
obj__15546.event = event__15548;
obj__15546.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15549 = wrapper_func.call(null,func);

callback__15549.listen = func;
callback__15549.scope = opt_scope;
callback__15549.event = event__15548;
callback__15549.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15547,callback__15549,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15547,callback__15549,capture);
}
});
obj__15546.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15550 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15547,false),goog.events.getListeners.call(null,elm,wevent__15547,true)):goog.events.getListeners.call(null,elm,wevent__15547,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15551 = obj.listener;
var lfunc__15552 = listener__15551.listen;
var scope__15553 = listener__15551.scope;
var capture__15554 = listener__15551.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15556 = (function (){var or__3548__auto____15555 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15555))
{return or__3548__auto____15555;
} else
{return cljs.core._EQ_.call(null,lfunc__15552,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15556))
{var or__3548__auto____15557 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15557))
{return or__3548__auto____15557;
} else
{return cljs.core._EQ_.call(null,scope__15553,opt_scope);
}
} else
{return and__3546__auto____15556;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15547,listener__15551,capture__15554);
} else
{return goog.events.unlisten.call(null,elm,wevent__15547,listener__15551,capture__15554);
}
} else
{return null;
}
}),listeners__15550));
});
return obj__15546;
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
var listen_BANG___15588 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15589 = (function (nds,event,func,capture){
var wrapper__15581 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15582__15583 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15582__15583))
{var node__15584 = cljs.core.first.call(null,G__15582__15583);
var G__15582__15585 = G__15582__15583;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15581)))
{goog.events.listen.call(null,node__15584,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15584,wrapper__15581,func,capture);
}
var temp__3698__auto____15586 = cljs.core.next.call(null,G__15582__15585);

if(cljs.core.truth_(temp__3698__auto____15586))
{var G__15582__15587 = temp__3698__auto____15586;

{
var G__15591 = cljs.core.first.call(null,G__15582__15587);
var G__15592 = G__15582__15587;
node__15584 = G__15591;
G__15582__15585 = G__15592;
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
return listen_BANG___15588.call(this,nds,event,func);
case  4 :
return listen_BANG___15589.call(this,nds,event,func,capture);
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
var unlisten_BANG___15679 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15680 = (function (nds,event,func,capture){
var wrapper__15596 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15597__15598 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15597__15598))
{var node__15599 = cljs.core.first.call(null,G__15597__15598);
var G__15597__15674 = G__15597__15598;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15596)))
{goog.events.unlisten.call(null,node__15599,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15596.unlisten(node__15599,func,capture);
}
var temp__3698__auto____15675 = cljs.core.next.call(null,G__15597__15674);

if(cljs.core.truth_(temp__3698__auto____15675))
{var G__15597__15676 = temp__3698__auto____15675;

{
var G__15684 = cljs.core.first.call(null,G__15597__15676);
var G__15685 = G__15597__15676;
node__15599 = G__15684;
G__15597__15674 = G__15685;
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
return unlisten_BANG___15679.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15680.call(this,nds,event,func,capture);
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
var G__15689__15691 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15689__15691))
{var node__15692 = cljs.core.first.call(null,G__15689__15691);
var G__15689__15693 = G__15689__15691;

while(true){
var map_func__15695 = ((function (node__15692,G__15689__15693){
return (function (p1__15595_SHARP_){
var wrapper__15694 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15595_SHARP_);

if(cljs.core.truth_(wrapper__15694))
{return wrapper__15694.unlisten(node__15692);
} else
{return goog.events.removeAll.call(null,node__15692,cljs.core.name.call(null,p1__15595_SHARP_));
}
});})(node__15692,G__15689__15693))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15695,event_list));
var temp__3698__auto____15698 = cljs.core.next.call(null,G__15689__15693);

if(cljs.core.truth_(temp__3698__auto____15698))
{var G__15689__15699 = temp__3698__auto____15698;

{
var G__15707 = cljs.core.first.call(null,G__15689__15699);
var G__15708 = G__15689__15699;
node__15692 = G__15707;
G__15689__15693 = G__15708;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15712){
var nds = cljs.core.first(arglist__15712);
var event_list = cljs.core.rest(arglist__15712);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15714 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15715 = (cljs.core.truth_(wrapper__15714)?wrapper__15714.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15716 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15716.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15717__15720 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15717__15720))
{var node__15721 = cljs.core.first.call(null,G__15717__15720);
var G__15717__15722 = G__15717__15720;

while(true){
goog.events.fireListeners.call(null,node__15721,nevent__15715,capture,event_obj__15716);
var temp__3698__auto____15723 = cljs.core.next.call(null,G__15717__15722);

if(cljs.core.truth_(temp__3698__auto____15723))
{var G__15717__15724 = temp__3698__auto____15723;

{
var G__15726 = cljs.core.first.call(null,G__15717__15724);
var G__15727 = G__15717__15724;
node__15721 = G__15726;
G__15717__15722 = G__15727;
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
