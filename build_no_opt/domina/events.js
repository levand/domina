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
var G__15652 = parent;
var G__15653 = child.parentNode;
parent = G__15652;
child = G__15653;
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
var re__15659 = e.relatedTarget;
var this$__15662 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15663 = cljs.core.not.call(null,(re__15659 === this$__15662));

if(cljs.core.truth_(and__3546__auto____15663))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15662,re__15659));
} else
{return and__3546__auto____15663;
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
var obj__15674 = (new Object());
var wevent__15675 = cljs.core.name.call(null,wrapped_key);
var event__15677 = cljs.core.name.call(null,event_key);

obj__15674.wrapped_event = wevent__15675;
obj__15674.event = event__15677;
obj__15674.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15678 = wrapper_func.call(null,func);

callback__15678.listen = func;
callback__15678.scope = opt_scope;
callback__15678.event = event__15677;
callback__15678.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15675,callback__15678,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15675,callback__15678,capture);
}
});
obj__15674.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15682 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15675,false),goog.events.getListeners.call(null,elm,wevent__15675,true)):goog.events.getListeners.call(null,elm,wevent__15675,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15684 = obj.listener;
var lfunc__15685 = listener__15684.listen;
var scope__15686 = listener__15684.scope;
var capture__15687 = listener__15684.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15689 = (function (){var or__3548__auto____15688 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15688))
{return or__3548__auto____15688;
} else
{return cljs.core._EQ_.call(null,lfunc__15685,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15689))
{var or__3548__auto____15694 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15694))
{return or__3548__auto____15694;
} else
{return cljs.core._EQ_.call(null,scope__15686,opt_scope);
}
} else
{return and__3546__auto____15689;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15675,listener__15684,capture__15687);
} else
{return goog.events.unlisten.call(null,elm,wevent__15675,listener__15684,capture__15687);
}
} else
{return null;
}
}),listeners__15682));
});
return obj__15674;
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
var listen_BANG___15720 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15721 = (function (nds,event,func,capture){
var wrapper__15713 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15714__15715 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15714__15715))
{var node__15716 = cljs.core.first.call(null,G__15714__15715);
var G__15714__15717 = G__15714__15715;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15713)))
{goog.events.listen.call(null,node__15716,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15716,wrapper__15713,func,capture);
}
var temp__3698__auto____15718 = cljs.core.next.call(null,G__15714__15717);

if(cljs.core.truth_(temp__3698__auto____15718))
{var G__15714__15719 = temp__3698__auto____15718;

{
var G__15725 = cljs.core.first.call(null,G__15714__15719);
var G__15726 = G__15714__15719;
node__15716 = G__15725;
G__15714__15717 = G__15726;
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
return listen_BANG___15720.call(this,nds,event,func);
case  4 :
return listen_BANG___15721.call(this,nds,event,func,capture);
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
var unlisten_BANG___15748 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15749 = (function (nds,event,func,capture){
var wrapper__15728 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15729__15731 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15729__15731))
{var node__15732 = cljs.core.first.call(null,G__15729__15731);
var G__15729__15744 = G__15729__15731;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15728)))
{goog.events.unlisten.call(null,node__15732,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15728.unlisten(node__15732,func,capture);
}
var temp__3698__auto____15745 = cljs.core.next.call(null,G__15729__15744);

if(cljs.core.truth_(temp__3698__auto____15745))
{var G__15729__15746 = temp__3698__auto____15745;

{
var G__15752 = cljs.core.first.call(null,G__15729__15746);
var G__15753 = G__15729__15746;
node__15732 = G__15752;
G__15729__15744 = G__15753;
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
return unlisten_BANG___15748.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15749.call(this,nds,event,func,capture);
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
var G__15754__15756 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15754__15756))
{var node__15759 = cljs.core.first.call(null,G__15754__15756);
var G__15754__15760 = G__15754__15756;

while(true){
var map_func__15766 = ((function (node__15759,G__15754__15760){
return (function (p1__15727_SHARP_){
var wrapper__15763 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15727_SHARP_);

if(cljs.core.truth_(wrapper__15763))
{return wrapper__15763.unlisten(node__15759);
} else
{return goog.events.removeAll.call(null,node__15759,cljs.core.name.call(null,p1__15727_SHARP_));
}
});})(node__15759,G__15754__15760))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15766,event_list));
var temp__3698__auto____15767 = cljs.core.next.call(null,G__15754__15760);

if(cljs.core.truth_(temp__3698__auto____15767))
{var G__15754__15770 = temp__3698__auto____15767;

{
var G__15775 = cljs.core.first.call(null,G__15754__15770);
var G__15776 = G__15754__15770;
node__15759 = G__15775;
G__15754__15760 = G__15776;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15779){
var nds = cljs.core.first(arglist__15779);
var event_list = cljs.core.rest(arglist__15779);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15781 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15783 = (cljs.core.truth_(wrapper__15781)?wrapper__15781.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15784 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15784.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15787__15790 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15787__15790))
{var node__15825 = cljs.core.first.call(null,G__15787__15790);
var G__15787__15826 = G__15787__15790;

while(true){
goog.events.fireListeners.call(null,node__15825,nevent__15783,capture,event_obj__15784);
var temp__3698__auto____15827 = cljs.core.next.call(null,G__15787__15826);

if(cljs.core.truth_(temp__3698__auto____15827))
{var G__15787__15829 = temp__3698__auto____15827;

{
var G__15830 = cljs.core.first.call(null,G__15787__15829);
var G__15831 = G__15787__15829;
node__15825 = G__15830;
G__15787__15826 = G__15831;
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
