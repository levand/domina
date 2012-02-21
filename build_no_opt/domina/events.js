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
var G__15406 = parent;
var G__15407 = child.parentNode;
parent = G__15406;
child = G__15407;
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
var re__15418 = e.relatedTarget;
var this$__15420 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15423 = cljs.core.not.call(null,(re__15418 === this$__15420));

if(cljs.core.truth_(and__3546__auto____15423))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15420,re__15418));
} else
{return and__3546__auto____15423;
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
var obj__15430 = (new Object());
var wevent__15432 = cljs.core.name.call(null,wrapped_key);
var event__15433 = cljs.core.name.call(null,event_key);

obj__15430.wrapped_event = wevent__15432;
obj__15430.event = event__15433;
obj__15430.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15436 = wrapper_func.call(null,func);

callback__15436.listen = func;
callback__15436.scope = opt_scope;
callback__15436.event = event__15433;
callback__15436.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15432,callback__15436,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15432,callback__15436,capture);
}
});
obj__15430.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15441 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15432,false),goog.events.getListeners.call(null,elm,wevent__15432,true)):goog.events.getListeners.call(null,elm,wevent__15432,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15443 = obj.listener;
var lfunc__15444 = listener__15443.listen;
var scope__15445 = listener__15443.scope;
var capture__15446 = listener__15443.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15452 = (function (){var or__3548__auto____15448 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15448))
{return or__3548__auto____15448;
} else
{return cljs.core._EQ_.call(null,lfunc__15444,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15452))
{var or__3548__auto____15456 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15456))
{return or__3548__auto____15456;
} else
{return cljs.core._EQ_.call(null,scope__15445,opt_scope);
}
} else
{return and__3546__auto____15452;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15432,listener__15443,capture__15446);
} else
{return goog.events.unlisten.call(null,elm,wevent__15432,listener__15443,capture__15446);
}
} else
{return null;
}
}),listeners__15441));
});
return obj__15430;
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
var listen_BANG___15541 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15542 = (function (nds,event,func,capture){
var wrapper__15521 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15522__15524 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15522__15524))
{var node__15527 = cljs.core.first.call(null,G__15522__15524);
var G__15522__15528 = G__15522__15524;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15521)))
{goog.events.listen.call(null,node__15527,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15527,wrapper__15521,func,capture);
}
var temp__3698__auto____15536 = cljs.core.next.call(null,G__15522__15528);

if(cljs.core.truth_(temp__3698__auto____15536))
{var G__15522__15537 = temp__3698__auto____15536;

{
var G__15550 = cljs.core.first.call(null,G__15522__15537);
var G__15551 = G__15522__15537;
node__15527 = G__15550;
G__15522__15528 = G__15551;
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
return listen_BANG___15541.call(this,nds,event,func);
case  4 :
return listen_BANG___15542.call(this,nds,event,func,capture);
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
var unlisten_BANG___15567 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15568 = (function (nds,event,func,capture){
var wrapper__15556 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15557__15559 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15557__15559))
{var node__15560 = cljs.core.first.call(null,G__15557__15559);
var G__15557__15561 = G__15557__15559;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15556)))
{goog.events.unlisten.call(null,node__15560,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15556.unlisten(node__15560,func,capture);
}
var temp__3698__auto____15564 = cljs.core.next.call(null,G__15557__15561);

if(cljs.core.truth_(temp__3698__auto____15564))
{var G__15557__15565 = temp__3698__auto____15564;

{
var G__15572 = cljs.core.first.call(null,G__15557__15565);
var G__15573 = G__15557__15565;
node__15560 = G__15572;
G__15557__15561 = G__15573;
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
return unlisten_BANG___15567.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15568.call(this,nds,event,func,capture);
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
var G__15576__15577 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15576__15577))
{var node__15579 = cljs.core.first.call(null,G__15576__15577);
var G__15576__15580 = G__15576__15577;

while(true){
var map_func__15582 = ((function (node__15579,G__15576__15580){
return (function (p1__15553_SHARP_){
var wrapper__15581 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15553_SHARP_);

if(cljs.core.truth_(wrapper__15581))
{return wrapper__15581.unlisten(node__15579);
} else
{return goog.events.removeAll.call(null,node__15579,cljs.core.name.call(null,p1__15553_SHARP_));
}
});})(node__15579,G__15576__15580))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15582,event_list));
var temp__3698__auto____15583 = cljs.core.next.call(null,G__15576__15580);

if(cljs.core.truth_(temp__3698__auto____15583))
{var G__15576__15584 = temp__3698__auto____15583;

{
var G__15585 = cljs.core.first.call(null,G__15576__15584);
var G__15586 = G__15576__15584;
node__15579 = G__15585;
G__15576__15580 = G__15586;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15587){
var nds = cljs.core.first(arglist__15587);
var event_list = cljs.core.rest(arglist__15587);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15590 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15591 = (cljs.core.truth_(wrapper__15590)?wrapper__15590.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15592 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15592.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15593__15594 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15593__15594))
{var node__15595 = cljs.core.first.call(null,G__15593__15594);
var G__15593__15596 = G__15593__15594;

while(true){
goog.events.fireListeners.call(null,node__15595,nevent__15591,capture,event_obj__15592);
var temp__3698__auto____15597 = cljs.core.next.call(null,G__15593__15596);

if(cljs.core.truth_(temp__3698__auto____15597))
{var G__15593__15598 = temp__3698__auto____15597;

{
var G__15624 = cljs.core.first.call(null,G__15593__15598);
var G__15625 = G__15593__15598;
node__15595 = G__15624;
G__15593__15596 = G__15625;
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
