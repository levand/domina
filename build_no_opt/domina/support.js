goog.provide('domina.support');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.events');
var div__16734 = document.createElement("div");
var test_html__16735 = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";

div__16734.innerHTML = test_html__16735;
domina.support.leading_whitespace_QMARK_ = cljs.core._EQ_.call(null,div__16734.firstChild.nodeType,3);
domina.support.extraneous_tbody_QMARK_ = cljs.core._EQ_.call(null,div__16734.getElementsByTagName("tbody").length,0);
domina.support.unscoped_html_elements_QMARK_ = cljs.core._EQ_.call(null,div__16734.getElementsByTagName("link").length,0);
