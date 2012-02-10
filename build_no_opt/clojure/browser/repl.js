goog.provide('clojure.browser.repl');
goog.require('cljs.core');
goog.require('clojure.browser.net');
goog.require('clojure.browser.event');
clojure.browser.repl.xpc_connection = cljs.core.atom.call(null,null);
clojure.browser.repl.repl_print = (function repl_print(data){
var temp__3695__auto____16538 = cljs.core.deref.call(null,clojure.browser.repl.xpc_connection);

if(cljs.core.truth_(temp__3695__auto____16538))
{var conn__16539 = temp__3695__auto____16538;

return clojure.browser.net.transmit.call(null,conn__16539,"﷐'print",cljs.core.pr_str.call(null,data));
} else
{return null;
}
});
/**
* Process a single block of JavaScript received from the server
*/
clojure.browser.repl.evaluate_javascript = (function evaluate_javascript(conn,block){
var result__16542 = (function (){try{return cljs.core.ObjMap.fromObject(["﷐'status","﷐'value"],{"﷐'status":"﷐'success","﷐'value":cljs.core.str.call(null,eval(block))});
}catch (e16540){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e16540)))
{var e__16541 = e16540;

return cljs.core.ObjMap.fromObject(["﷐'status","﷐'value","﷐'stacktrace"],{"﷐'status":"﷐'exception","﷐'value":cljs.core.pr_str.call(null,e__16541),"﷐'stacktrace":(cljs.core.truth_(e__16541.hasOwnProperty("stack"))?e__16541.stack:"No stacktrace available.")});
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16540;
} else
{return null;
}
}
}})();

return cljs.core.pr_str.call(null,result__16542);
});
clojure.browser.repl.send_result = (function send_result(connection,url,data){
return clojure.browser.net.transmit.call(null,connection,url,"POST",data,null,0);
});
/**
* Send data to be printed in the REPL. If there is an error, try again
* up to 10 times.
*/
clojure.browser.repl.send_print = (function() {
var send_print = null;
var send_print__16547 = (function (url,data){
return send_print.call(null,url,data,0);
});
var send_print__16548 = (function (url,data,n){
var conn__16546 = clojure.browser.net.xhr_connection.call(null);

clojure.browser.event.listen.call(null,conn__16546,"﷐'error",(function (_){
if(cljs.core.truth_((n < 10)))
{return send_print.call(null,url,data,(n + 1));
} else
{return console.log(cljs.core.str.call(null,"Could not send ",data," after ",n," attempts."));
}
}));
return clojure.browser.net.transmit.call(null,conn__16546,url,"POST",data,null,0);
});
send_print = function(url,data,n){
switch(arguments.length){
case  2 :
return send_print__16547.call(this,url,data);
case  3 :
return send_print__16548.call(this,url,data,n);
}
throw('Invalid arity: ' + arguments.length);
};
return send_print;
})()
;
clojure.browser.repl.order = cljs.core.atom.call(null,0);
clojure.browser.repl.wrap_message = (function wrap_message(t,data){
return cljs.core.pr_str.call(null,cljs.core.ObjMap.fromObject(["﷐'type","﷐'content","﷐'order"],{"﷐'type":t,"﷐'content":data,"﷐'order":cljs.core.swap_BANG_.call(null,clojure.browser.repl.order,cljs.core.inc)}));
});
/**
* Start the REPL server connection.
*/
clojure.browser.repl.start_evaluator = (function start_evaluator(url){
var temp__3695__auto____16550 = clojure.browser.net.xpc_connection.call(null);

if(cljs.core.truth_(temp__3695__auto____16550))
{var repl_connection__16551 = temp__3695__auto____16550;

var connection__16552 = clojure.browser.net.xhr_connection.call(null);

clojure.browser.event.listen.call(null,connection__16552,"﷐'success",(function (e){
return clojure.browser.net.transmit.call(null,repl_connection__16551,"﷐'evaluate-javascript",e.currentTarget.getResponseText(cljs.core.List.EMPTY));
}));
clojure.browser.net.register_service.call(null,repl_connection__16551,"﷐'send-result",(function (data){
return clojure.browser.repl.send_result.call(null,connection__16552,url,clojure.browser.repl.wrap_message.call(null,"﷐'result",data));
}));
clojure.browser.net.register_service.call(null,repl_connection__16551,"﷐'print",(function (data){
return clojure.browser.repl.send_print.call(null,url,clojure.browser.repl.wrap_message.call(null,"﷐'print",data));
}));
clojure.browser.net.connect.call(null,repl_connection__16551,cljs.core.constantly.call(null,null));
return setTimeout.call(null,(function (){
return clojure.browser.repl.send_result.call(null,connection__16552,url,clojure.browser.repl.wrap_message.call(null,"﷐'ready","ready"));
}),50);
} else
{return alert.call(null,"No 'xpc' param provided to child iframe.");
}
});
/**
* Connects to a REPL server from an HTML document. After the
* connection is made, the REPL will evaluate forms in the context of
* the document that called this function.
*/
clojure.browser.repl.connect = (function connect(repl_server_url){
var repl_connection__16554 = clojure.browser.net.xpc_connection.call(null,cljs.core.ObjMap.fromObject(["﷐'peer_uri"],{"﷐'peer_uri":repl_server_url}));

cljs.core.swap_BANG_.call(null,clojure.browser.repl.xpc_connection,cljs.core.constantly.call(null,repl_connection__16554));
clojure.browser.net.register_service.call(null,repl_connection__16554,"﷐'evaluate-javascript",(function (js){
return clojure.browser.net.transmit.call(null,repl_connection__16554,"﷐'send-result",clojure.browser.repl.evaluate_javascript.call(null,repl_connection__16554,js));
}));
return clojure.browser.net.connect.call(null,repl_connection__16554,cljs.core.constantly.call(null,null),(function (iframe){
return iframe.style.display = "none";
}));
});
