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
var re__15422 = e.relatedTarget;
var this$__15423 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15425 = cljs.core.not.call(null,(re__15422 === this$__15423));

if(cljs.core.truth_(and__3546__auto____15425))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15423,re__15422));
} else
{return and__3546__auto____15425;
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
var obj__15432 = (new Object());
var wevent__15433 = cljs.core.name.call(null,wrapped_key);
var event__15435 = cljs.core.name.call(null,event_key);

obj__15432.wrapped_event = wevent__15433;
obj__15432.event = event__15435;
obj__15432.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15436 = wrapper_func.call(null,func);

callback__15436.listen = func;
callback__15436.scope = opt_scope;
callback__15436.event = event__15435;
callback__15436.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15433,callback__15436,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15433,callback__15436,capture);
}
});
obj__15432.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15446 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15433,false),goog.events.getListeners.call(null,elm,wevent__15433,true)):goog.events.getListeners.call(null,elm,wevent__15433,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15449 = obj.listener;
var lfunc__15450 = listener__15449.listen;
var scope__15451 = listener__15449.scope;
var capture__15453 = listener__15449.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15461 = (function (){var or__3548__auto____15458 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{return cljs.core._EQ_.call(null,lfunc__15450,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15461))
{var or__3548__auto____15463 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15463))
{return or__3548__auto____15463;
} else
{return cljs.core._EQ_.call(null,scope__15451,opt_scope);
}
} else
{return and__3546__auto____15461;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15433,listener__15449,capture__15453);
} else
{return goog.events.unlisten.call(null,elm,wevent__15433,listener__15449,capture__15453);
}
} else
{return null;
}
}),listeners__15446));
});
return obj__15432;
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
var listen_BANG___15493 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15494 = (function (nds,event,func,capture){
var wrapper__15478 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15480__15482 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15480__15482))
{var node__15484 = cljs.core.first.call(null,G__15480__15482);
var G__15480__15485 = G__15480__15482;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15478)))
{goog.events.listen.call(null,node__15484,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15484,wrapper__15478,func,capture);
}
var temp__3698__auto____15489 = cljs.core.next.call(null,G__15480__15485);

if(cljs.core.truth_(temp__3698__auto____15489))
{var G__15480__15490 = temp__3698__auto____15489;

{
var G__15521 = cljs.core.first.call(null,G__15480__15490);
var G__15522 = G__15480__15490;
node__15484 = G__15521;
G__15480__15485 = G__15522;
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
return listen_BANG___15493.call(this,nds,event,func);
case  4 :
return listen_BANG___15494.call(this,nds,event,func,capture);
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
var unlisten_BANG___15577 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15578 = (function (nds,event,func,capture){
var wrapper__15524 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15527__15565 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15527__15565))
{var node__15567 = cljs.core.first.call(null,G__15527__15565);
var G__15527__15568 = G__15527__15565;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15524)))
{goog.events.unlisten.call(null,node__15567,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15524.unlisten(node__15567,func,capture);
}
var temp__3698__auto____15572 = cljs.core.next.call(null,G__15527__15568);

if(cljs.core.truth_(temp__3698__auto____15572))
{var G__15527__15576 = temp__3698__auto____15572;

{
var G__15588 = cljs.core.first.call(null,G__15527__15576);
var G__15589 = G__15527__15576;
node__15567 = G__15588;
G__15527__15568 = G__15589;
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
return unlisten_BANG___15577.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15578.call(this,nds,event,func,capture);
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
var G__15598__15599 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15598__15599))
{var node__15601 = cljs.core.first.call(null,G__15598__15599);
var G__15598__15602 = G__15598__15599;

while(true){
var map_func__15607 = ((function (node__15601,G__15598__15602){
return (function (p1__15523_SHARP_){
var wrapper__15606 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15523_SHARP_);

if(cljs.core.truth_(wrapper__15606))
{return wrapper__15606.unlisten(node__15601);
} else
{return goog.events.removeAll.call(null,node__15601,cljs.core.name.call(null,p1__15523_SHARP_));
}
});})(node__15601,G__15598__15602))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15607,event_list));
var temp__3698__auto____15608 = cljs.core.next.call(null,G__15598__15602);

if(cljs.core.truth_(temp__3698__auto____15608))
{var G__15598__15610 = temp__3698__auto____15608;

{
var G__15624 = cljs.core.first.call(null,G__15598__15610);
var G__15625 = G__15598__15610;
node__15601 = G__15624;
G__15598__15602 = G__15625;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15628){
var nds = cljs.core.first(arglist__15628);
var event_list = cljs.core.rest(arglist__15628);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15631 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15633 = (cljs.core.truth_(wrapper__15631)?wrapper__15631.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15635 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15635.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15636__15637 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15636__15637))
{var node__15638 = cljs.core.first.call(null,G__15636__15637);
var G__15636__15639 = G__15636__15637;

while(true){
goog.events.fireListeners.call(null,node__15638,nevent__15633,capture,event_obj__15635);
var temp__3698__auto____15640 = cljs.core.next.call(null,G__15636__15639);

if(cljs.core.truth_(temp__3698__auto____15640))
{var G__15636__15641 = temp__3698__auto____15640;

{
var G__15647 = cljs.core.first.call(null,G__15636__15641);
var G__15649 = G__15636__15641;
node__15638 = G__15647;
G__15636__15639 = G__15649;
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
