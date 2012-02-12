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
var G__15291 = parent;
var G__15292 = child.parentNode;
parent = G__15291;
child = G__15292;
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
var re__15295 = e.relatedTarget;
var this$__15297 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15298 = cljs.core.not.call(null,(re__15295 === this$__15297));

if(cljs.core.truth_(and__3546__auto____15298))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15297,re__15295));
} else
{return and__3546__auto____15298;
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
var obj__15309 = (new Object());
var wevent__15312 = cljs.core.name.call(null,wrapped_key);
var event__15313 = cljs.core.name.call(null,event_key);

obj__15309.wrapped_event = wevent__15312;
obj__15309.event = event__15313;
obj__15309.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15314 = wrapper_func.call(null,func);

callback__15314.listen = func;
callback__15314.scope = opt_scope;
callback__15314.event = event__15313;
callback__15314.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15312,callback__15314,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15312,callback__15314,capture);
}
});
obj__15309.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15319 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15312,false),goog.events.getListeners.call(null,elm,wevent__15312,true)):goog.events.getListeners.call(null,elm,wevent__15312,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15320 = obj.listener;
var lfunc__15321 = listener__15320.listen;
var scope__15323 = listener__15320.scope;
var capture__15326 = listener__15320.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15329 = (function (){var or__3548__auto____15327 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15327))
{return or__3548__auto____15327;
} else
{return cljs.core._EQ_.call(null,lfunc__15321,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15329))
{var or__3548__auto____15330 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15330))
{return or__3548__auto____15330;
} else
{return cljs.core._EQ_.call(null,scope__15323,opt_scope);
}
} else
{return and__3546__auto____15329;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15312,listener__15320,capture__15326);
} else
{return goog.events.unlisten.call(null,elm,wevent__15312,listener__15320,capture__15326);
}
} else
{return null;
}
}),listeners__15319));
});
return obj__15309;
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
var listen_BANG___15351 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15352 = (function (nds,event,func,capture){
var wrapper__15342 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15344__15346 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15344__15346))
{var node__15347 = cljs.core.first.call(null,G__15344__15346);
var G__15344__15348 = G__15344__15346;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15342)))
{goog.events.listen.call(null,node__15347,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15347,wrapper__15342,func,capture);
}
var temp__3698__auto____15349 = cljs.core.next.call(null,G__15344__15348);

if(cljs.core.truth_(temp__3698__auto____15349))
{var G__15344__15350 = temp__3698__auto____15349;

{
var G__15356 = cljs.core.first.call(null,G__15344__15350);
var G__15357 = G__15344__15350;
node__15347 = G__15356;
G__15344__15348 = G__15357;
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
return listen_BANG___15351.call(this,nds,event,func);
case  4 :
return listen_BANG___15352.call(this,nds,event,func,capture);
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
var unlisten_BANG___15444 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15445 = (function (nds,event,func,capture){
var wrapper__15434 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15435__15436 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15435__15436))
{var node__15437 = cljs.core.first.call(null,G__15435__15436);
var G__15435__15439 = G__15435__15436;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15434)))
{goog.events.unlisten.call(null,node__15437,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15434.unlisten(node__15437,func,capture);
}
var temp__3698__auto____15441 = cljs.core.next.call(null,G__15435__15439);

if(cljs.core.truth_(temp__3698__auto____15441))
{var G__15435__15442 = temp__3698__auto____15441;

{
var G__15448 = cljs.core.first.call(null,G__15435__15442);
var G__15449 = G__15435__15442;
node__15437 = G__15448;
G__15435__15439 = G__15449;
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
return unlisten_BANG___15444.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15445.call(this,nds,event,func,capture);
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
var G__15452__15453 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15452__15453))
{var node__15455 = cljs.core.first.call(null,G__15452__15453);
var G__15452__15456 = G__15452__15453;

while(true){
var map_func__15461 = ((function (node__15455,G__15452__15456){
return (function (p1__15421_SHARP_){
var wrapper__15458 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15421_SHARP_);

if(cljs.core.truth_(wrapper__15458))
{return wrapper__15458.unlisten(node__15455);
} else
{return goog.events.removeAll.call(null,node__15455,cljs.core.name.call(null,p1__15421_SHARP_));
}
});})(node__15455,G__15452__15456))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15461,event_list));
var temp__3698__auto____15463 = cljs.core.next.call(null,G__15452__15456);

if(cljs.core.truth_(temp__3698__auto____15463))
{var G__15452__15464 = temp__3698__auto____15463;

{
var G__15468 = cljs.core.first.call(null,G__15452__15464);
var G__15469 = G__15452__15464;
node__15455 = G__15468;
G__15452__15456 = G__15469;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15471){
var nds = cljs.core.first(arglist__15471);
var event_list = cljs.core.rest(arglist__15471);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15474 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15475 = (cljs.core.truth_(wrapper__15474)?wrapper__15474.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15476 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15476.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15477__15478 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15477__15478))
{var node__15479 = cljs.core.first.call(null,G__15477__15478);
var G__15477__15480 = G__15477__15478;

while(true){
goog.events.fireListeners.call(null,node__15479,nevent__15475,capture,event_obj__15476);
var temp__3698__auto____15481 = cljs.core.next.call(null,G__15477__15480);

if(cljs.core.truth_(temp__3698__auto____15481))
{var G__15477__15482 = temp__3698__auto____15481;

{
var G__15485 = cljs.core.first.call(null,G__15477__15482);
var G__15486 = G__15477__15482;
node__15479 = G__15485;
G__15477__15480 = G__15486;
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
