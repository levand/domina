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
var G__15693 = parent;
var G__15694 = child.parentNode;
parent = G__15693;
child = G__15694;
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
var re__15702 = e.relatedTarget;
var this$__15704 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15736 = cljs.core.not.call(null,(re__15702 === this$__15704));

if(cljs.core.truth_(and__3546__auto____15736))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15704,re__15702));
} else
{return and__3546__auto____15736;
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
var obj__15744 = (new Object());
var wevent__15746 = cljs.core.name.call(null,wrapped_key);
var event__15747 = cljs.core.name.call(null,event_key);

obj__15744.wrapped_event = wevent__15746;
obj__15744.event = event__15747;
obj__15744.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15749 = wrapper_func.call(null,func);

callback__15749.listen = func;
callback__15749.scope = opt_scope;
callback__15749.event = event__15747;
callback__15749.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15746,callback__15749,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15746,callback__15749,capture);
}
});
obj__15744.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15755 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15746,false),goog.events.getListeners.call(null,elm,wevent__15746,true)):goog.events.getListeners.call(null,elm,wevent__15746,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15756 = obj.listener;
var lfunc__15757 = listener__15756.listen;
var scope__15759 = listener__15756.scope;
var capture__15760 = listener__15756.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15762 = (function (){var or__3548__auto____15761 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15761))
{return or__3548__auto____15761;
} else
{return cljs.core._EQ_.call(null,lfunc__15757,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15762))
{var or__3548__auto____15765 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15765))
{return or__3548__auto____15765;
} else
{return cljs.core._EQ_.call(null,scope__15759,opt_scope);
}
} else
{return and__3546__auto____15762;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15746,listener__15756,capture__15760);
} else
{return goog.events.unlisten.call(null,elm,wevent__15746,listener__15756,capture__15760);
}
} else
{return null;
}
}),listeners__15755));
});
return obj__15744;
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
var listen_BANG___15807 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15808 = (function (nds,event,func,capture){
var wrapper__15791 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15792__15795 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15792__15795))
{var node__15797 = cljs.core.first.call(null,G__15792__15795);
var G__15792__15798 = G__15792__15795;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15791)))
{goog.events.listen.call(null,node__15797,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15797,wrapper__15791,func,capture);
}
var temp__3698__auto____15801 = cljs.core.next.call(null,G__15792__15798);

if(cljs.core.truth_(temp__3698__auto____15801))
{var G__15792__15803 = temp__3698__auto____15801;

{
var G__15818 = cljs.core.first.call(null,G__15792__15803);
var G__15819 = G__15792__15803;
node__15797 = G__15818;
G__15792__15798 = G__15819;
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
return listen_BANG___15807.call(this,nds,event,func);
case  4 :
return listen_BANG___15808.call(this,nds,event,func,capture);
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
var unlisten_BANG___15852 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15853 = (function (nds,event,func,capture){
var wrapper__15827 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15830__15839 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15830__15839))
{var node__15843 = cljs.core.first.call(null,G__15830__15839);
var G__15830__15844 = G__15830__15839;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15827)))
{goog.events.unlisten.call(null,node__15843,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15827.unlisten(node__15843,func,capture);
}
var temp__3698__auto____15846 = cljs.core.next.call(null,G__15830__15844);

if(cljs.core.truth_(temp__3698__auto____15846))
{var G__15830__15847 = temp__3698__auto____15846;

{
var G__15860 = cljs.core.first.call(null,G__15830__15847);
var G__15861 = G__15830__15847;
node__15843 = G__15860;
G__15830__15844 = G__15861;
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
return unlisten_BANG___15852.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15853.call(this,nds,event,func,capture);
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
var G__15862__15865 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15862__15865))
{var node__15866 = cljs.core.first.call(null,G__15862__15865);
var G__15862__15867 = G__15862__15865;

while(true){
var map_func__15870 = ((function (node__15866,G__15862__15867){
return (function (p1__15823_SHARP_){
var wrapper__15868 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15823_SHARP_);

if(cljs.core.truth_(wrapper__15868))
{return wrapper__15868.unlisten(node__15866);
} else
{return goog.events.removeAll.call(null,node__15866,cljs.core.name.call(null,p1__15823_SHARP_));
}
});})(node__15866,G__15862__15867))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15870,event_list));
var temp__3698__auto____15872 = cljs.core.next.call(null,G__15862__15867);

if(cljs.core.truth_(temp__3698__auto____15872))
{var G__15862__15873 = temp__3698__auto____15872;

{
var G__15875 = cljs.core.first.call(null,G__15862__15873);
var G__15877 = G__15862__15873;
node__15866 = G__15875;
G__15862__15867 = G__15877;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15879){
var nds = cljs.core.first(arglist__15879);
var event_list = cljs.core.rest(arglist__15879);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15880 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15882 = (cljs.core.truth_(wrapper__15880)?wrapper__15880.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15884 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15884.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15887__15888 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15887__15888))
{var node__15889 = cljs.core.first.call(null,G__15887__15888);
var G__15887__15890 = G__15887__15888;

while(true){
goog.events.fireListeners.call(null,node__15889,nevent__15882,capture,event_obj__15884);
var temp__3698__auto____15891 = cljs.core.next.call(null,G__15887__15890);

if(cljs.core.truth_(temp__3698__auto____15891))
{var G__15887__15894 = temp__3698__auto____15891;

{
var G__15897 = cljs.core.first.call(null,G__15887__15894);
var G__15898 = G__15887__15894;
node__15889 = G__15897;
G__15887__15890 = G__15898;
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
