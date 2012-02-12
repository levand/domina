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
var G__15350 = parent;
var G__15351 = child.parentNode;
parent = G__15350;
child = G__15351;
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
var re__15352 = e.relatedTarget;
var this$__15353 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15354 = cljs.core.not.call(null,(re__15352 === this$__15353));

if(cljs.core.truth_(and__3546__auto____15354))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15353,re__15352));
} else
{return and__3546__auto____15354;
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
var obj__15394 = (new Object());
var wevent__15395 = cljs.core.name.call(null,wrapped_key);
var event__15396 = cljs.core.name.call(null,event_key);

obj__15394.wrapped_event = wevent__15395;
obj__15394.event = event__15396;
obj__15394.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15397 = wrapper_func.call(null,func);

callback__15397.listen = func;
callback__15397.scope = opt_scope;
callback__15397.event = event__15396;
callback__15397.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15395,callback__15397,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15395,callback__15397,capture);
}
});
obj__15394.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15402 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15395,false),goog.events.getListeners.call(null,elm,wevent__15395,true)):goog.events.getListeners.call(null,elm,wevent__15395,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15403 = obj.listener;
var lfunc__15404 = listener__15403.listen;
var scope__15405 = listener__15403.scope;
var capture__15407 = listener__15403.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15411 = (function (){var or__3548__auto____15410 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15410))
{return or__3548__auto____15410;
} else
{return cljs.core._EQ_.call(null,lfunc__15404,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15411))
{var or__3548__auto____15412 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15412))
{return or__3548__auto____15412;
} else
{return cljs.core._EQ_.call(null,scope__15405,opt_scope);
}
} else
{return and__3546__auto____15411;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15395,listener__15403,capture__15407);
} else
{return goog.events.unlisten.call(null,elm,wevent__15395,listener__15403,capture__15407);
}
} else
{return null;
}
}),listeners__15402));
});
return obj__15394;
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
var listen_BANG___15448 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15449 = (function (nds,event,func,capture){
var wrapper__15435 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15436__15440 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15436__15440))
{var node__15441 = cljs.core.first.call(null,G__15436__15440);
var G__15436__15442 = G__15436__15440;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15435)))
{goog.events.listen.call(null,node__15441,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15441,wrapper__15435,func,capture);
}
var temp__3698__auto____15444 = cljs.core.next.call(null,G__15436__15442);

if(cljs.core.truth_(temp__3698__auto____15444))
{var G__15436__15445 = temp__3698__auto____15444;

{
var G__15458 = cljs.core.first.call(null,G__15436__15445);
var G__15459 = G__15436__15445;
node__15441 = G__15458;
G__15436__15442 = G__15459;
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
return listen_BANG___15448.call(this,nds,event,func);
case  4 :
return listen_BANG___15449.call(this,nds,event,func,capture);
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
var unlisten_BANG___15480 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15481 = (function (nds,event,func,capture){
var wrapper__15465 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15466__15467 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15466__15467))
{var node__15468 = cljs.core.first.call(null,G__15466__15467);
var G__15466__15469 = G__15466__15467;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15465)))
{goog.events.unlisten.call(null,node__15468,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15465.unlisten(node__15468,func,capture);
}
var temp__3698__auto____15470 = cljs.core.next.call(null,G__15466__15469);

if(cljs.core.truth_(temp__3698__auto____15470))
{var G__15466__15471 = temp__3698__auto____15470;

{
var G__15489 = cljs.core.first.call(null,G__15466__15471);
var G__15490 = G__15466__15471;
node__15468 = G__15489;
G__15466__15469 = G__15490;
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
return unlisten_BANG___15480.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15481.call(this,nds,event,func,capture);
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
var G__15496__15498 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15496__15498))
{var node__15499 = cljs.core.first.call(null,G__15496__15498);
var G__15496__15500 = G__15496__15498;

while(true){
var map_func__15505 = ((function (node__15499,G__15496__15500){
return (function (p1__15464_SHARP_){
var wrapper__15501 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15464_SHARP_);

if(cljs.core.truth_(wrapper__15501))
{return wrapper__15501.unlisten(node__15499);
} else
{return goog.events.removeAll.call(null,node__15499,cljs.core.name.call(null,p1__15464_SHARP_));
}
});})(node__15499,G__15496__15500))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15505,event_list));
var temp__3698__auto____15508 = cljs.core.next.call(null,G__15496__15500);

if(cljs.core.truth_(temp__3698__auto____15508))
{var G__15496__15673 = temp__3698__auto____15508;

{
var G__15676 = cljs.core.first.call(null,G__15496__15673);
var G__15677 = G__15496__15673;
node__15499 = G__15676;
G__15496__15500 = G__15677;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15678){
var nds = cljs.core.first(arglist__15678);
var event_list = cljs.core.rest(arglist__15678);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15679 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15680 = (cljs.core.truth_(wrapper__15679)?wrapper__15679.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15681 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15681.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15682__15683 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15682__15683))
{var node__15684 = cljs.core.first.call(null,G__15682__15683);
var G__15682__15685 = G__15682__15683;

while(true){
goog.events.fireListeners.call(null,node__15684,nevent__15680,capture,event_obj__15681);
var temp__3698__auto____15686 = cljs.core.next.call(null,G__15682__15685);

if(cljs.core.truth_(temp__3698__auto____15686))
{var G__15682__15687 = temp__3698__auto____15686;

{
var G__15691 = cljs.core.first.call(null,G__15682__15687);
var G__15692 = G__15682__15687;
node__15684 = G__15691;
G__15682__15685 = G__15692;
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
