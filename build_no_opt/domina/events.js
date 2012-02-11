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
var G__14612 = parent;
var G__14613 = child.parentNode;
parent = G__14612;
child = G__14613;
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
var re__14617 = e.relatedTarget;
var this$__14618 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____14619 = cljs.core.not.call(null,(re__14617 === this$__14618));

if(cljs.core.truth_(and__3546__auto____14619))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__14618,re__14617));
} else
{return and__3546__auto____14619;
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
var obj__14624 = (new Object());
var wevent__14625 = cljs.core.name.call(null,wrapped_key);
var event__14626 = cljs.core.name.call(null,event_key);

obj__14624.wrapped_event = wevent__14625;
obj__14624.event = event__14626;
obj__14624.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__14641 = wrapper_func.call(null,func);

callback__14641.listen = func;
callback__14641.scope = opt_scope;
callback__14641.event = event__14626;
callback__14641.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__14625,callback__14641,capture);
} else
{return goog.events.listen.call(null,elm,wevent__14625,callback__14641,capture);
}
});
obj__14624.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__14647 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__14625,false),goog.events.getListeners.call(null,elm,wevent__14625,true)):goog.events.getListeners.call(null,elm,wevent__14625,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__14649 = obj.listener;
var lfunc__14650 = listener__14649.listen;
var scope__14652 = listener__14649.scope;
var capture__14653 = listener__14649.capture;

if(cljs.core.truth_((function (){var and__3546__auto____14655 = (function (){var or__3548__auto____14654 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____14654))
{return or__3548__auto____14654;
} else
{return cljs.core._EQ_.call(null,lfunc__14650,func);
}
})();

if(cljs.core.truth_(and__3546__auto____14655))
{var or__3548__auto____14659 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____14659))
{return or__3548__auto____14659;
} else
{return cljs.core._EQ_.call(null,scope__14652,opt_scope);
}
} else
{return and__3546__auto____14655;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__14625,listener__14649,capture__14653);
} else
{return goog.events.unlisten.call(null,elm,wevent__14625,listener__14649,capture__14653);
}
} else
{return null;
}
}),listeners__14647));
});
return obj__14624;
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
var listen_BANG___14667 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___14668 = (function (nds,event,func,capture){
var wrapper__14660 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__14661__14662 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14661__14662))
{var node__14663 = cljs.core.first.call(null,G__14661__14662);
var G__14661__14664 = G__14661__14662;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__14660)))
{goog.events.listen.call(null,node__14663,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__14663,wrapper__14660,func,capture);
}
var temp__3698__auto____14665 = cljs.core.next.call(null,G__14661__14664);

if(cljs.core.truth_(temp__3698__auto____14665))
{var G__14661__14666 = temp__3698__auto____14665;

{
var G__14670 = cljs.core.first.call(null,G__14661__14666);
var G__14671 = G__14661__14666;
node__14663 = G__14670;
G__14661__14664 = G__14671;
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
return listen_BANG___14667.call(this,nds,event,func);
case  4 :
return listen_BANG___14668.call(this,nds,event,func,capture);
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
var unlisten_BANG___14680 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___14681 = (function (nds,event,func,capture){
var wrapper__14673 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__14674__14675 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14674__14675))
{var node__14676 = cljs.core.first.call(null,G__14674__14675);
var G__14674__14677 = G__14674__14675;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__14673)))
{goog.events.unlisten.call(null,node__14676,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__14673.unlisten(node__14676,func,capture);
}
var temp__3698__auto____14678 = cljs.core.next.call(null,G__14674__14677);

if(cljs.core.truth_(temp__3698__auto____14678))
{var G__14674__14679 = temp__3698__auto____14678;

{
var G__14683 = cljs.core.first.call(null,G__14674__14679);
var G__14684 = G__14674__14679;
node__14676 = G__14683;
G__14674__14677 = G__14684;
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
return unlisten_BANG___14680.call(this,nds,event,func);
case  4 :
return unlisten_BANG___14681.call(this,nds,event,func,capture);
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
var G__14686__14689 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14686__14689))
{var node__14694 = cljs.core.first.call(null,G__14686__14689);
var G__14686__14695 = G__14686__14689;

while(true){
var map_func__14697 = ((function (node__14694,G__14686__14695){
return (function (p1__14672_SHARP_){
var wrapper__14696 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__14672_SHARP_);

if(cljs.core.truth_(wrapper__14696))
{return wrapper__14696.unlisten(node__14694);
} else
{return goog.events.removeAll.call(null,node__14694,cljs.core.name.call(null,p1__14672_SHARP_));
}
});})(node__14694,G__14686__14695))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__14697,event_list));
var temp__3698__auto____14698 = cljs.core.next.call(null,G__14686__14695);

if(cljs.core.truth_(temp__3698__auto____14698))
{var G__14686__14699 = temp__3698__auto____14698;

{
var G__14700 = cljs.core.first.call(null,G__14686__14699);
var G__14701 = G__14686__14699;
node__14694 = G__14700;
G__14686__14695 = G__14701;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__14702){
var nds = cljs.core.first(arglist__14702);
var event_list = cljs.core.rest(arglist__14702);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__14703 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__14704 = (cljs.core.truth_(wrapper__14703)?wrapper__14703.wrapped_event:cljs.core.name.call(null,event));
var event_obj__14705 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__14705.relatedTarget = event_map.call(null,"﷐'related-target");
var G__14706__14707 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__14706__14707))
{var node__14708 = cljs.core.first.call(null,G__14706__14707);
var G__14706__14709 = G__14706__14707;

while(true){
goog.events.fireListeners.call(null,node__14708,nevent__14704,capture,event_obj__14705);
var temp__3698__auto____14711 = cljs.core.next.call(null,G__14706__14709);

if(cljs.core.truth_(temp__3698__auto____14711))
{var G__14706__14712 = temp__3698__auto____14711;

{
var G__14713 = cljs.core.first.call(null,G__14706__14712);
var G__14714 = G__14706__14712;
node__14708 = G__14713;
G__14706__14709 = G__14714;
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
