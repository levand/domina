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
var G__15617 = parent;
var G__15618 = child.parentNode;
parent = G__15617;
child = G__15618;
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
var re__15622 = e.relatedTarget;
var this$__15623 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15624 = cljs.core.not.call(null,(re__15622 === this$__15623));

if(cljs.core.truth_(and__3546__auto____15624))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15623,re__15622));
} else
{return and__3546__auto____15624;
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
var obj__15628 = (new Object());
var wevent__15629 = cljs.core.name.call(null,wrapped_key);
var event__15630 = cljs.core.name.call(null,event_key);

obj__15628.wrapped_event = wevent__15629;
obj__15628.event = event__15630;
obj__15628.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15631 = wrapper_func.call(null,func);

callback__15631.listen = func;
callback__15631.scope = opt_scope;
callback__15631.event = event__15630;
callback__15631.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15629,callback__15631,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15629,callback__15631,capture);
}
});
obj__15628.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15632 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15629,false),goog.events.getListeners.call(null,elm,wevent__15629,true)):goog.events.getListeners.call(null,elm,wevent__15629,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15633 = obj.listener;
var lfunc__15634 = listener__15633.listen;
var scope__15635 = listener__15633.scope;
var capture__15636 = listener__15633.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15638 = (function (){var or__3548__auto____15637 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15637))
{return or__3548__auto____15637;
} else
{return cljs.core._EQ_.call(null,lfunc__15634,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15638))
{var or__3548__auto____15639 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15639))
{return or__3548__auto____15639;
} else
{return cljs.core._EQ_.call(null,scope__15635,opt_scope);
}
} else
{return and__3546__auto____15638;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15629,listener__15633,capture__15636);
} else
{return goog.events.unlisten.call(null,elm,wevent__15629,listener__15633,capture__15636);
}
} else
{return null;
}
}),listeners__15632));
});
return obj__15628;
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
var listen_BANG___15649 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15650 = (function (nds,event,func,capture){
var wrapper__15642 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15643__15644 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15643__15644))
{var node__15645 = cljs.core.first.call(null,G__15643__15644);
var G__15643__15646 = G__15643__15644;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15642)))
{goog.events.listen.call(null,node__15645,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15645,wrapper__15642,func,capture);
}
var temp__3698__auto____15647 = cljs.core.next.call(null,G__15643__15646);

if(cljs.core.truth_(temp__3698__auto____15647))
{var G__15643__15648 = temp__3698__auto____15647;

{
var G__15652 = cljs.core.first.call(null,G__15643__15648);
var G__15653 = G__15643__15648;
node__15645 = G__15652;
G__15643__15646 = G__15653;
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
return listen_BANG___15649.call(this,nds,event,func);
case  4 :
return listen_BANG___15650.call(this,nds,event,func,capture);
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
var unlisten_BANG___15780 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15781 = (function (nds,event,func,capture){
var wrapper__15655 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15656__15657 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15656__15657))
{var node__15658 = cljs.core.first.call(null,G__15656__15657);
var G__15656__15659 = G__15656__15657;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15655)))
{goog.events.unlisten.call(null,node__15658,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15655.unlisten(node__15658,func,capture);
}
var temp__3698__auto____15660 = cljs.core.next.call(null,G__15656__15659);

if(cljs.core.truth_(temp__3698__auto____15660))
{var G__15656__15661 = temp__3698__auto____15660;

{
var G__15788 = cljs.core.first.call(null,G__15656__15661);
var G__15789 = G__15656__15661;
node__15658 = G__15788;
G__15656__15659 = G__15789;
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
return unlisten_BANG___15780.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15781.call(this,nds,event,func,capture);
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
var G__15795__15796 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15795__15796))
{var node__15798 = cljs.core.first.call(null,G__15795__15796);
var G__15795__15799 = G__15795__15796;

while(true){
var map_func__15808 = ((function (node__15798,G__15795__15799){
return (function (p1__15654_SHARP_){
var wrapper__15806 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15654_SHARP_);

if(cljs.core.truth_(wrapper__15806))
{return wrapper__15806.unlisten(node__15798);
} else
{return goog.events.removeAll.call(null,node__15798,cljs.core.name.call(null,p1__15654_SHARP_));
}
});})(node__15798,G__15795__15799))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15808,event_list));
var temp__3698__auto____15810 = cljs.core.next.call(null,G__15795__15799);

if(cljs.core.truth_(temp__3698__auto____15810))
{var G__15795__15811 = temp__3698__auto____15810;

{
var G__15821 = cljs.core.first.call(null,G__15795__15811);
var G__15822 = G__15795__15811;
node__15798 = G__15821;
G__15795__15799 = G__15822;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15827){
var nds = cljs.core.first(arglist__15827);
var event_list = cljs.core.rest(arglist__15827);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15833 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15836 = (cljs.core.truth_(wrapper__15833)?wrapper__15833.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15838 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15838.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15839__15840 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15839__15840))
{var node__15841 = cljs.core.first.call(null,G__15839__15840);
var G__15839__15842 = G__15839__15840;

while(true){
goog.events.fireListeners.call(null,node__15841,nevent__15836,capture,event_obj__15838);
var temp__3698__auto____15843 = cljs.core.next.call(null,G__15839__15842);

if(cljs.core.truth_(temp__3698__auto____15843))
{var G__15839__15844 = temp__3698__auto____15843;

{
var G__15851 = cljs.core.first.call(null,G__15839__15844);
var G__15852 = G__15839__15844;
node__15841 = G__15851;
G__15839__15842 = G__15852;
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
