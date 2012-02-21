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
var G__15543 = parent;
var G__15544 = child.parentNode;
parent = G__15543;
child = G__15544;
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
var re__15558 = e.relatedTarget;
var this$__15560 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15583 = cljs.core.not.call(null,(re__15558 === this$__15560));

if(cljs.core.truth_(and__3546__auto____15583))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15560,re__15558));
} else
{return and__3546__auto____15583;
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
var obj__15601 = (new Object());
var wevent__15605 = cljs.core.name.call(null,wrapped_key);
var event__15606 = cljs.core.name.call(null,event_key);

obj__15601.wrapped_event = wevent__15605;
obj__15601.event = event__15606;
obj__15601.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15609 = wrapper_func.call(null,func);

callback__15609.listen = func;
callback__15609.scope = opt_scope;
callback__15609.event = event__15606;
callback__15609.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15605,callback__15609,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15605,callback__15609,capture);
}
});
obj__15601.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15615 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15605,false),goog.events.getListeners.call(null,elm,wevent__15605,true)):goog.events.getListeners.call(null,elm,wevent__15605,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15618 = obj.listener;
var lfunc__15620 = listener__15618.listen;
var scope__15623 = listener__15618.scope;
var capture__15624 = listener__15618.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15629 = (function (){var or__3548__auto____15627 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15627))
{return or__3548__auto____15627;
} else
{return cljs.core._EQ_.call(null,lfunc__15620,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15629))
{var or__3548__auto____15630 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15630))
{return or__3548__auto____15630;
} else
{return cljs.core._EQ_.call(null,scope__15623,opt_scope);
}
} else
{return and__3546__auto____15629;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15605,listener__15618,capture__15624);
} else
{return goog.events.unlisten.call(null,elm,wevent__15605,listener__15618,capture__15624);
}
} else
{return null;
}
}),listeners__15615));
});
return obj__15601;
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
var listen_BANG___15670 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15671 = (function (nds,event,func,capture){
var wrapper__15651 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15652__15655 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15652__15655))
{var node__15656 = cljs.core.first.call(null,G__15652__15655);
var G__15652__15657 = G__15652__15655;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15651)))
{goog.events.listen.call(null,node__15656,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15656,wrapper__15651,func,capture);
}
var temp__3698__auto____15662 = cljs.core.next.call(null,G__15652__15657);

if(cljs.core.truth_(temp__3698__auto____15662))
{var G__15652__15663 = temp__3698__auto____15662;

{
var G__15685 = cljs.core.first.call(null,G__15652__15663);
var G__15686 = G__15652__15663;
node__15656 = G__15685;
G__15652__15657 = G__15686;
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
return listen_BANG___15670.call(this,nds,event,func);
case  4 :
return listen_BANG___15671.call(this,nds,event,func,capture);
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
var unlisten_BANG___15705 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15706 = (function (nds,event,func,capture){
var wrapper__15694 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15695__15697 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15695__15697))
{var node__15698 = cljs.core.first.call(null,G__15695__15697);
var G__15695__15699 = G__15695__15697;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15694)))
{goog.events.unlisten.call(null,node__15698,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15694.unlisten(node__15698,func,capture);
}
var temp__3698__auto____15703 = cljs.core.next.call(null,G__15695__15699);

if(cljs.core.truth_(temp__3698__auto____15703))
{var G__15695__15704 = temp__3698__auto____15703;

{
var G__15712 = cljs.core.first.call(null,G__15695__15704);
var G__15714 = G__15695__15704;
node__15698 = G__15712;
G__15695__15699 = G__15714;
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
return unlisten_BANG___15705.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15706.call(this,nds,event,func,capture);
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
var G__15718__15719 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15718__15719))
{var node__15720 = cljs.core.first.call(null,G__15718__15719);
var G__15718__15721 = G__15718__15719;

while(true){
var map_func__15725 = ((function (node__15720,G__15718__15721){
return (function (p1__15690_SHARP_){
var wrapper__15723 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15690_SHARP_);

if(cljs.core.truth_(wrapper__15723))
{return wrapper__15723.unlisten(node__15720);
} else
{return goog.events.removeAll.call(null,node__15720,cljs.core.name.call(null,p1__15690_SHARP_));
}
});})(node__15720,G__15718__15721))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15725,event_list));
var temp__3698__auto____15726 = cljs.core.next.call(null,G__15718__15721);

if(cljs.core.truth_(temp__3698__auto____15726))
{var G__15718__15728 = temp__3698__auto____15726;

{
var G__15733 = cljs.core.first.call(null,G__15718__15728);
var G__15734 = G__15718__15728;
node__15720 = G__15733;
G__15718__15721 = G__15734;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15738){
var nds = cljs.core.first(arglist__15738);
var event_list = cljs.core.rest(arglist__15738);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15742 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15744 = (cljs.core.truth_(wrapper__15742)?wrapper__15742.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15746 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15746.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15749__15750 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15749__15750))
{var node__15751 = cljs.core.first.call(null,G__15749__15750);
var G__15749__15752 = G__15749__15750;

while(true){
goog.events.fireListeners.call(null,node__15751,nevent__15744,capture,event_obj__15746);
var temp__3698__auto____15754 = cljs.core.next.call(null,G__15749__15752);

if(cljs.core.truth_(temp__3698__auto____15754))
{var G__15749__15756 = temp__3698__auto____15754;

{
var G__15763 = cljs.core.first.call(null,G__15749__15756);
var G__15764 = G__15749__15756;
node__15751 = G__15763;
G__15749__15752 = G__15764;
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
