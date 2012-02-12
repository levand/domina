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
var G__15715 = parent;
var G__15719 = child.parentNode;
parent = G__15715;
child = G__15719;
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
var re__15725 = e.relatedTarget;
var this$__15726 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15727 = cljs.core.not.call(null,(re__15725 === this$__15726));

if(cljs.core.truth_(and__3546__auto____15727))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15726,re__15725));
} else
{return and__3546__auto____15727;
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
var obj__15736 = (new Object());
var wevent__15739 = cljs.core.name.call(null,wrapped_key);
var event__15742 = cljs.core.name.call(null,event_key);

obj__15736.wrapped_event = wevent__15739;
obj__15736.event = event__15742;
obj__15736.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15745 = wrapper_func.call(null,func);

callback__15745.listen = func;
callback__15745.scope = opt_scope;
callback__15745.event = event__15742;
callback__15745.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15739,callback__15745,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15739,callback__15745,capture);
}
});
obj__15736.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15758 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15739,false),goog.events.getListeners.call(null,elm,wevent__15739,true)):goog.events.getListeners.call(null,elm,wevent__15739,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15759 = obj.listener;
var lfunc__15761 = listener__15759.listen;
var scope__15763 = listener__15759.scope;
var capture__15764 = listener__15759.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15766 = (function (){var or__3548__auto____15765 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15765))
{return or__3548__auto____15765;
} else
{return cljs.core._EQ_.call(null,lfunc__15761,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15766))
{var or__3548__auto____15770 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15770))
{return or__3548__auto____15770;
} else
{return cljs.core._EQ_.call(null,scope__15763,opt_scope);
}
} else
{return and__3546__auto____15766;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15739,listener__15759,capture__15764);
} else
{return goog.events.unlisten.call(null,elm,wevent__15739,listener__15759,capture__15764);
}
} else
{return null;
}
}),listeners__15758));
});
return obj__15736;
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
var listen_BANG___15816 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15817 = (function (nds,event,func,capture){
var wrapper__15792 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15793__15795 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15793__15795))
{var node__15799 = cljs.core.first.call(null,G__15793__15795);
var G__15793__15800 = G__15793__15795;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15792)))
{goog.events.listen.call(null,node__15799,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15799,wrapper__15792,func,capture);
}
var temp__3698__auto____15812 = cljs.core.next.call(null,G__15793__15800);

if(cljs.core.truth_(temp__3698__auto____15812))
{var G__15793__15814 = temp__3698__auto____15812;

{
var G__15819 = cljs.core.first.call(null,G__15793__15814);
var G__15821 = G__15793__15814;
node__15799 = G__15819;
G__15793__15800 = G__15821;
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
return listen_BANG___15816.call(this,nds,event,func);
case  4 :
return listen_BANG___15817.call(this,nds,event,func,capture);
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
var unlisten_BANG___15841 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15842 = (function (nds,event,func,capture){
var wrapper__15826 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15827__15828 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15827__15828))
{var node__15831 = cljs.core.first.call(null,G__15827__15828);
var G__15827__15832 = G__15827__15828;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15826)))
{goog.events.unlisten.call(null,node__15831,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15826.unlisten(node__15831,func,capture);
}
var temp__3698__auto____15836 = cljs.core.next.call(null,G__15827__15832);

if(cljs.core.truth_(temp__3698__auto____15836))
{var G__15827__15837 = temp__3698__auto____15836;

{
var G__15844 = cljs.core.first.call(null,G__15827__15837);
var G__15845 = G__15827__15837;
node__15831 = G__15844;
G__15827__15832 = G__15845;
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
return unlisten_BANG___15841.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15842.call(this,nds,event,func,capture);
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
var G__15850__15851 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15850__15851))
{var node__15852 = cljs.core.first.call(null,G__15850__15851);
var G__15850__15853 = G__15850__15851;

while(true){
var map_func__15866 = ((function (node__15852,G__15850__15853){
return (function (p1__15824_SHARP_){
var wrapper__15860 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15824_SHARP_);

if(cljs.core.truth_(wrapper__15860))
{return wrapper__15860.unlisten(node__15852);
} else
{return goog.events.removeAll.call(null,node__15852,cljs.core.name.call(null,p1__15824_SHARP_));
}
});})(node__15852,G__15850__15853))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15866,event_list));
var temp__3698__auto____15868 = cljs.core.next.call(null,G__15850__15853);

if(cljs.core.truth_(temp__3698__auto____15868))
{var G__15850__15869 = temp__3698__auto____15868;

{
var G__15873 = cljs.core.first.call(null,G__15850__15869);
var G__15874 = G__15850__15869;
node__15852 = G__15873;
G__15850__15853 = G__15874;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15875){
var nds = cljs.core.first(arglist__15875);
var event_list = cljs.core.rest(arglist__15875);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15879 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15880 = (cljs.core.truth_(wrapper__15879)?wrapper__15879.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15881 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15881.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15882__15883 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15882__15883))
{var node__15884 = cljs.core.first.call(null,G__15882__15883);
var G__15882__15885 = G__15882__15883;

while(true){
goog.events.fireListeners.call(null,node__15884,nevent__15880,capture,event_obj__15881);
var temp__3698__auto____15886 = cljs.core.next.call(null,G__15882__15885);

if(cljs.core.truth_(temp__3698__auto____15886))
{var G__15882__15887 = temp__3698__auto____15886;

{
var G__15890 = cljs.core.first.call(null,G__15882__15887);
var G__15891 = G__15882__15887;
node__15884 = G__15890;
G__15882__15885 = G__15891;
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
