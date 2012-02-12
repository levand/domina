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
var G__15509 = parent;
var G__15510 = child.parentNode;
parent = G__15509;
child = G__15510;
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
var this$__15517 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15519 = cljs.core.not.call(null,(re__15515 === this$__15517));

if(cljs.core.truth_(and__3546__auto____15519))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15517,re__15515));
} else
{return and__3546__auto____15519;
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
var callback__15524 = wrapper_func.call(null,func);

callback__15524.listen = func;
callback__15524.scope = opt_scope;
callback__15524.event = event__15523;
callback__15524.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15522,callback__15524,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15522,callback__15524,capture);
}
});
obj__15521.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15527 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15522,false),goog.events.getListeners.call(null,elm,wevent__15522,true)):goog.events.getListeners.call(null,elm,wevent__15522,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15528 = obj.listener;
var lfunc__15529 = listener__15528.listen;
var scope__15530 = listener__15528.scope;
var capture__15532 = listener__15528.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15536 = (function (){var or__3548__auto____15534 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15534))
{return or__3548__auto____15534;
} else
{return cljs.core._EQ_.call(null,lfunc__15529,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15536))
{var or__3548__auto____15537 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15537))
{return or__3548__auto____15537;
} else
{return cljs.core._EQ_.call(null,scope__15530,opt_scope);
}
} else
{return and__3546__auto____15536;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15522,listener__15528,capture__15532);
} else
{return goog.events.unlisten.call(null,elm,wevent__15522,listener__15528,capture__15532);
}
} else
{return null;
}
}),listeners__15527));
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
var listen_BANG___15589 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15590 = (function (nds,event,func,capture){
var wrapper__15580 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15582__15583 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15582__15583))
{var node__15585 = cljs.core.first.call(null,G__15582__15583);
var G__15582__15586 = G__15582__15583;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15580)))
{goog.events.listen.call(null,node__15585,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15585,wrapper__15580,func,capture);
}
var temp__3698__auto____15587 = cljs.core.next.call(null,G__15582__15586);

if(cljs.core.truth_(temp__3698__auto____15587))
{var G__15582__15588 = temp__3698__auto____15587;

{
var G__15594 = cljs.core.first.call(null,G__15582__15588);
var G__15595 = G__15582__15588;
node__15585 = G__15594;
G__15582__15586 = G__15595;
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
return listen_BANG___15589.call(this,nds,event,func);
case  4 :
return listen_BANG___15590.call(this,nds,event,func,capture);
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
var unlisten_BANG___15620 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15621 = (function (nds,event,func,capture){
var wrapper__15602 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15603__15604 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15603__15604))
{var node__15607 = cljs.core.first.call(null,G__15603__15604);
var G__15603__15609 = G__15603__15604;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15602)))
{goog.events.unlisten.call(null,node__15607,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15602.unlisten(node__15607,func,capture);
}
var temp__3698__auto____15612 = cljs.core.next.call(null,G__15603__15609);

if(cljs.core.truth_(temp__3698__auto____15612))
{var G__15603__15614 = temp__3698__auto____15612;

{
var G__15630 = cljs.core.first.call(null,G__15603__15614);
var G__15631 = G__15603__15614;
node__15607 = G__15630;
G__15603__15609 = G__15631;
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
return unlisten_BANG___15620.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15621.call(this,nds,event,func,capture);
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
var G__15638__15640 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15638__15640))
{var node__15642 = cljs.core.first.call(null,G__15638__15640);
var G__15638__15643 = G__15638__15640;

while(true){
var map_func__15648 = ((function (node__15642,G__15638__15643){
return (function (p1__15599_SHARP_){
var wrapper__15644 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15599_SHARP_);

if(cljs.core.truth_(wrapper__15644))
{return wrapper__15644.unlisten(node__15642);
} else
{return goog.events.removeAll.call(null,node__15642,cljs.core.name.call(null,p1__15599_SHARP_));
}
});})(node__15642,G__15638__15643))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15648,event_list));
var temp__3698__auto____15651 = cljs.core.next.call(null,G__15638__15643);

if(cljs.core.truth_(temp__3698__auto____15651))
{var G__15638__15653 = temp__3698__auto____15651;

{
var G__15661 = cljs.core.first.call(null,G__15638__15653);
var G__15662 = G__15638__15653;
node__15642 = G__15661;
G__15638__15643 = G__15662;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15669){
var nds = cljs.core.first(arglist__15669);
var event_list = cljs.core.rest(arglist__15669);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15672 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15674 = (cljs.core.truth_(wrapper__15672)?wrapper__15672.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15677 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15677.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15679__15680 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15679__15680))
{var node__15681 = cljs.core.first.call(null,G__15679__15680);
var G__15679__15682 = G__15679__15680;

while(true){
goog.events.fireListeners.call(null,node__15681,nevent__15674,capture,event_obj__15677);
var temp__3698__auto____15684 = cljs.core.next.call(null,G__15679__15682);

if(cljs.core.truth_(temp__3698__auto____15684))
{var G__15679__15686 = temp__3698__auto____15684;

{
var G__15696 = cljs.core.first.call(null,G__15679__15686);
var G__15697 = G__15679__15686;
node__15681 = G__15696;
G__15679__15682 = G__15697;
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
