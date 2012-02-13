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
var G__16107 = parent;
var G__16108 = child.parentNode;
parent = G__16107;
child = G__16108;
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
var re__16113 = e.relatedTarget;
var this$__16114 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____16115 = cljs.core.not.call(null,(re__16113 === this$__16114));

if(cljs.core.truth_(and__3546__auto____16115))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__16114,re__16113));
} else
{return and__3546__auto____16115;
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
var obj__16122 = (new Object());
var wevent__16123 = cljs.core.name.call(null,wrapped_key);
var event__16124 = cljs.core.name.call(null,event_key);

obj__16122.wrapped_event = wevent__16123;
obj__16122.event = event__16124;
obj__16122.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__16129 = wrapper_func.call(null,func);

callback__16129.listen = func;
callback__16129.scope = opt_scope;
callback__16129.event = event__16124;
callback__16129.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__16123,callback__16129,capture);
} else
{return goog.events.listen.call(null,elm,wevent__16123,callback__16129,capture);
}
});
obj__16122.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__16133 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__16123,false),goog.events.getListeners.call(null,elm,wevent__16123,true)):goog.events.getListeners.call(null,elm,wevent__16123,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__16136 = obj.listener;
var lfunc__16137 = listener__16136.listen;
var scope__16140 = listener__16136.scope;
var capture__16141 = listener__16136.capture;

if(cljs.core.truth_((function (){var and__3546__auto____16145 = (function (){var or__3548__auto____16142 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____16142))
{return or__3548__auto____16142;
} else
{return cljs.core._EQ_.call(null,lfunc__16137,func);
}
})();

if(cljs.core.truth_(and__3546__auto____16145))
{var or__3548__auto____16148 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____16148))
{return or__3548__auto____16148;
} else
{return cljs.core._EQ_.call(null,scope__16140,opt_scope);
}
} else
{return and__3546__auto____16145;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__16123,listener__16136,capture__16141);
} else
{return goog.events.unlisten.call(null,elm,wevent__16123,listener__16136,capture__16141);
}
} else
{return null;
}
}),listeners__16133));
});
return obj__16122;
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
var listen_BANG___16199 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___16200 = (function (nds,event,func,capture){
var wrapper__16182 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__16184__16186 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__16184__16186))
{var node__16187 = cljs.core.first.call(null,G__16184__16186);
var G__16184__16188 = G__16184__16186;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__16182)))
{goog.events.listen.call(null,node__16187,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__16187,wrapper__16182,func,capture);
}
var temp__3698__auto____16191 = cljs.core.next.call(null,G__16184__16188);

if(cljs.core.truth_(temp__3698__auto____16191))
{var G__16184__16194 = temp__3698__auto____16191;

{
var G__16207 = cljs.core.first.call(null,G__16184__16194);
var G__16208 = G__16184__16194;
node__16187 = G__16207;
G__16184__16188 = G__16208;
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
return listen_BANG___16199.call(this,nds,event,func);
case  4 :
return listen_BANG___16200.call(this,nds,event,func,capture);
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
var unlisten_BANG___16227 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___16228 = (function (nds,event,func,capture){
var wrapper__16214 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__16216__16219 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__16216__16219))
{var node__16223 = cljs.core.first.call(null,G__16216__16219);
var G__16216__16224 = G__16216__16219;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__16214)))
{goog.events.unlisten.call(null,node__16223,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__16214.unlisten(node__16223,func,capture);
}
var temp__3698__auto____16225 = cljs.core.next.call(null,G__16216__16224);

if(cljs.core.truth_(temp__3698__auto____16225))
{var G__16216__16226 = temp__3698__auto____16225;

{
var G__16237 = cljs.core.first.call(null,G__16216__16226);
var G__16238 = G__16216__16226;
node__16223 = G__16237;
G__16216__16224 = G__16238;
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
return unlisten_BANG___16227.call(this,nds,event,func);
case  4 :
return unlisten_BANG___16228.call(this,nds,event,func,capture);
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
var G__16252__16254 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__16252__16254))
{var node__16256 = cljs.core.first.call(null,G__16252__16254);
var G__16252__16257 = G__16252__16254;

while(true){
var map_func__16259 = ((function (node__16256,G__16252__16257){
return (function (p1__16211_SHARP_){
var wrapper__16258 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__16211_SHARP_);

if(cljs.core.truth_(wrapper__16258))
{return wrapper__16258.unlisten(node__16256);
} else
{return goog.events.removeAll.call(null,node__16256,cljs.core.name.call(null,p1__16211_SHARP_));
}
});})(node__16256,G__16252__16257))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__16259,event_list));
var temp__3698__auto____16260 = cljs.core.next.call(null,G__16252__16257);

if(cljs.core.truth_(temp__3698__auto____16260))
{var G__16252__16264 = temp__3698__auto____16260;

{
var G__16272 = cljs.core.first.call(null,G__16252__16264);
var G__16274 = G__16252__16264;
node__16256 = G__16272;
G__16252__16257 = G__16274;
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
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__16281){
var nds = cljs.core.first(arglist__16281);
var event_list = cljs.core.rest(arglist__16281);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__16288 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__16290 = (cljs.core.truth_(wrapper__16288)?wrapper__16288.wrapped_event:cljs.core.name.call(null,event));
var event_obj__16292 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__16292.relatedTarget = event_map.call(null,"﷐'related-target");
var G__16294__16296 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__16294__16296))
{var node__16298 = cljs.core.first.call(null,G__16294__16296);
var G__16294__16299 = G__16294__16296;

while(true){
goog.events.fireListeners.call(null,node__16298,nevent__16290,capture,event_obj__16292);
var temp__3698__auto____16300 = cljs.core.next.call(null,G__16294__16299);

if(cljs.core.truth_(temp__3698__auto____16300))
{var G__16294__16301 = temp__3698__auto____16300;

{
var G__16304 = cljs.core.first.call(null,G__16294__16301);
var G__16305 = G__16294__16301;
node__16298 = G__16304;
G__16294__16299 = G__16305;
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
