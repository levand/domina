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
var G__15493 = parent;
var G__15494 = child.parentNode;
parent = G__15493;
child = G__15494;
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
var re__15540 = e.relatedTarget;
var this$__15541 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15543 = cljs.core.not.call(null,(re__15540 === this$__15541));

if(cljs.core.truth_(and__3546__auto____15543))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15541,re__15540));
} else
{return and__3546__auto____15543;
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
var obj__15552 = (new Object());
var wevent__15553 = cljs.core.name.call(null,wrapped_key);
var event__15554 = cljs.core.name.call(null,event_key);

obj__15552.wrapped_event = wevent__15553;
obj__15552.event = event__15554;
obj__15552.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15555 = wrapper_func.call(null,func);

callback__15555.listen = func;
callback__15555.scope = opt_scope;
callback__15555.event = event__15554;
callback__15555.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15553,callback__15555,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15553,callback__15555,capture);
}
});
obj__15552.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15558 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15553,false),goog.events.getListeners.call(null,elm,wevent__15553,true)):goog.events.getListeners.call(null,elm,wevent__15553,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15559 = obj.listener;
var lfunc__15560 = listener__15559.listen;
var scope__15561 = listener__15559.scope;
var capture__15562 = listener__15559.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15565 = (function (){var or__3548__auto____15564 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15564))
{return or__3548__auto____15564;
} else
{return cljs.core._EQ_.call(null,lfunc__15560,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15565))
{var or__3548__auto____15566 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15566))
{return or__3548__auto____15566;
} else
{return cljs.core._EQ_.call(null,scope__15561,opt_scope);
}
} else
{return and__3546__auto____15565;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15553,listener__15559,capture__15562);
} else
{return goog.events.unlisten.call(null,elm,wevent__15553,listener__15559,capture__15562);
}
} else
{return null;
}
}),listeners__15558));
});
return obj__15552;
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
var listen_BANG___15594 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15596 = (function (nds,event,func,capture){
var wrapper__15581 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15582__15584 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15582__15584))
{var node__15585 = cljs.core.first.call(null,G__15582__15584);
var G__15582__15586 = G__15582__15584;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15581)))
{goog.events.listen.call(null,node__15585,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15585,wrapper__15581,func,capture);
}
var temp__3698__auto____15589 = cljs.core.next.call(null,G__15582__15586);

if(cljs.core.truth_(temp__3698__auto____15589))
{var G__15582__15590 = temp__3698__auto____15589;

{
var G__15601 = cljs.core.first.call(null,G__15582__15590);
var G__15602 = G__15582__15590;
node__15585 = G__15601;
G__15582__15586 = G__15602;
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
return listen_BANG___15594.call(this,nds,event,func);
case  4 :
return listen_BANG___15596.call(this,nds,event,func,capture);
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
var unlisten_BANG___15611 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15612 = (function (nds,event,func,capture){
var wrapper__15604 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15605__15606 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15605__15606))
{var node__15607 = cljs.core.first.call(null,G__15605__15606);
var G__15605__15608 = G__15605__15606;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15604)))
{goog.events.unlisten.call(null,node__15607,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15604.unlisten(node__15607,func,capture);
}
var temp__3698__auto____15609 = cljs.core.next.call(null,G__15605__15608);

if(cljs.core.truth_(temp__3698__auto____15609))
{var G__15605__15610 = temp__3698__auto____15609;

{
var G__15614 = cljs.core.first.call(null,G__15605__15610);
var G__15615 = G__15605__15610;
node__15607 = G__15614;
G__15605__15608 = G__15615;
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
return unlisten_BANG___15611.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15612.call(this,nds,event,func,capture);
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
var G__15616__15617 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15616__15617))
{var node__15618 = cljs.core.first.call(null,G__15616__15617);
var G__15616__15619 = G__15616__15617;

while(true){
var map_func__15625 = ((function (node__15618,G__15616__15619){
return (function (p1__15603_SHARP_){
var wrapper__15620 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15603_SHARP_);

if(cljs.core.truth_(wrapper__15620))
{return wrapper__15620.unlisten(node__15618);
} else
{return goog.events.removeAll.call(null,node__15618,cljs.core.name.call(null,p1__15603_SHARP_));
}
});})(node__15618,G__15616__15619))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15625,event_list));
var temp__3698__auto____15627 = cljs.core.next.call(null,G__15616__15619);

if(cljs.core.truth_(temp__3698__auto____15627))
{var G__15616__15630 = temp__3698__auto____15627;

{
var G__15633 = cljs.core.first.call(null,G__15616__15630);
var G__15635 = G__15616__15630;
node__15618 = G__15633;
G__15616__15619 = G__15635;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15638){
var nds = cljs.core.first(arglist__15638);
var event_list = cljs.core.rest(arglist__15638);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15639 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15641 = (cljs.core.truth_(wrapper__15639)?wrapper__15639.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15642 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15642.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15645__15647 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15645__15647))
{var node__15648 = cljs.core.first.call(null,G__15645__15647);
var G__15645__15649 = G__15645__15647;

while(true){
goog.events.fireListeners.call(null,node__15648,nevent__15641,capture,event_obj__15642);
var temp__3698__auto____15650 = cljs.core.next.call(null,G__15645__15649);

if(cljs.core.truth_(temp__3698__auto____15650))
{var G__15645__15651 = temp__3698__auto____15650;

{
var G__15656 = cljs.core.first.call(null,G__15645__15651);
var G__15657 = G__15645__15651;
node__15648 = G__15656;
G__15645__15649 = G__15657;
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
