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
var re__15512 = e.relatedTarget;
var this$__15513 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15514 = cljs.core.not.call(null,(re__15512 === this$__15513));

if(cljs.core.truth_(and__3546__auto____15514))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15513,re__15512));
} else
{return and__3546__auto____15514;
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
var obj__15521 = (new Object());
var wevent__15522 = cljs.core.name.call(null,wrapped_key);
var event__15523 = cljs.core.name.call(null,event_key);

obj__15521.wrapped_event = wevent__15522;
obj__15521.event = event__15523;
obj__15521.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15526 = wrapper_func.call(null,func);

callback__15526.listen = func;
callback__15526.scope = opt_scope;
callback__15526.event = event__15523;
callback__15526.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15522,callback__15526,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15522,callback__15526,capture);
}
});
obj__15521.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15529 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15522,false),goog.events.getListeners.call(null,elm,wevent__15522,true)):goog.events.getListeners.call(null,elm,wevent__15522,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15531 = obj.listener;
var lfunc__15532 = listener__15531.listen;
var scope__15533 = listener__15531.scope;
var capture__15535 = listener__15531.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15539 = (function (){var or__3548__auto____15537 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15537))
{return or__3548__auto____15537;
} else
{return cljs.core._EQ_.call(null,lfunc__15532,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15539))
{var or__3548__auto____15540 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15540))
{return or__3548__auto____15540;
} else
{return cljs.core._EQ_.call(null,scope__15533,opt_scope);
}
} else
{return and__3546__auto____15539;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15522,listener__15531,capture__15535);
} else
{return goog.events.unlisten.call(null,elm,wevent__15522,listener__15531,capture__15535);
}
} else
{return null;
}
}),listeners__15529));
});
return obj__15521;
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
var listen_BANG___15568 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15570 = (function (nds,event,func,capture){
var wrapper__15544 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15545__15546 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15545__15546))
{var node__15547 = cljs.core.first.call(null,G__15545__15546);
var G__15545__15548 = G__15545__15546;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15544)))
{goog.events.listen.call(null,node__15547,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15547,wrapper__15544,func,capture);
}
var temp__3698__auto____15550 = cljs.core.next.call(null,G__15545__15548);

if(cljs.core.truth_(temp__3698__auto____15550))
{var G__15545__15552 = temp__3698__auto____15550;

{
var G__15575 = cljs.core.first.call(null,G__15545__15552);
var G__15576 = G__15545__15552;
node__15547 = G__15575;
G__15545__15548 = G__15576;
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
return listen_BANG___15568.call(this,nds,event,func);
case  4 :
return listen_BANG___15570.call(this,nds,event,func,capture);
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
var unlisten_BANG___15608 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15609 = (function (nds,event,func,capture){
var wrapper__15590 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15591__15595 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15591__15595))
{var node__15597 = cljs.core.first.call(null,G__15591__15595);
var G__15591__15598 = G__15591__15595;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15590)))
{goog.events.unlisten.call(null,node__15597,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15590.unlisten(node__15597,func,capture);
}
var temp__3698__auto____15602 = cljs.core.next.call(null,G__15591__15598);

if(cljs.core.truth_(temp__3698__auto____15602))
{var G__15591__15605 = temp__3698__auto____15602;

{
var G__15618 = cljs.core.first.call(null,G__15591__15605);
var G__15619 = G__15591__15605;
node__15597 = G__15618;
G__15591__15598 = G__15619;
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
return unlisten_BANG___15608.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15609.call(this,nds,event,func,capture);
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
var G__15623__15625 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15623__15625))
{var node__15628 = cljs.core.first.call(null,G__15623__15625);
var G__15623__15630 = G__15623__15625;

while(true){
var map_func__15634 = ((function (node__15628,G__15623__15630){
return (function (p1__15583_SHARP_){
var wrapper__15632 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15583_SHARP_);

if(cljs.core.truth_(wrapper__15632))
{return wrapper__15632.unlisten(node__15628);
} else
{return goog.events.removeAll.call(null,node__15628,cljs.core.name.call(null,p1__15583_SHARP_));
}
});})(node__15628,G__15623__15630))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15634,event_list));
var temp__3698__auto____15637 = cljs.core.next.call(null,G__15623__15630);

if(cljs.core.truth_(temp__3698__auto____15637))
{var G__15623__15640 = temp__3698__auto____15637;

{
var G__15643 = cljs.core.first.call(null,G__15623__15640);
var G__15645 = G__15623__15640;
node__15628 = G__15643;
G__15623__15630 = G__15645;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15647){
var nds = cljs.core.first(arglist__15647);
var event_list = cljs.core.rest(arglist__15647);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15651 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15654 = (cljs.core.truth_(wrapper__15651)?wrapper__15651.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15655 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15655.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15656__15659 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15656__15659))
{var node__15660 = cljs.core.first.call(null,G__15656__15659);
var G__15656__15661 = G__15656__15659;

while(true){
goog.events.fireListeners.call(null,node__15660,nevent__15654,capture,event_obj__15655);
var temp__3698__auto____15662 = cljs.core.next.call(null,G__15656__15661);

if(cljs.core.truth_(temp__3698__auto____15662))
{var G__15656__15694 = temp__3698__auto____15662;

{
var G__15695 = cljs.core.first.call(null,G__15656__15694);
var G__15696 = G__15656__15694;
node__15660 = G__15695;
G__15656__15661 = G__15696;
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
