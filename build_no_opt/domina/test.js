goog.provide('domina.test');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('domina.css');
goog.require('domina');
goog.require('domina.events');
goog.require('goog.events');

  window['tryfn'] = function(f) {
    try {
      return f.call();
    } catch (e) {
      if(e == "fail hard") {
          throw e;
      } else {
          return e;
      }
    }
  };;
domina.test.tests = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([]));
domina.test.add_test = (function add_test(name,testfn){
return cljs.core.swap_BANG_.__3(domina.test.tests,cljs.core.conj,cljs.core.PersistentVector.fromArray([name,testfn]));
});
domina.test.run_test = (function run_test(testfn){
return tryfn(testfn);
});
domina.test.run_named = (function run_named(n){
return cljs.core.map.__2((function (p__7702){
var vec__7703__7704 = p__7702;
var name__7705 = cljs.core.nth.__3(vec__7703__7704,0,null);
var testfn__7706 = cljs.core.nth.__3(vec__7703__7704,1,null);

return cljs.core.PersistentVector.fromArray([name__7705,domina.test.run_test(testfn__7706)]);
}),cljs.core.filter((function (p__7707){
var vec__7708__7709 = p__7707;
var name__7710 = cljs.core.nth.__3(vec__7708__7709,0,null);
var ___7711 = cljs.core.nth.__3(vec__7708__7709,1,null);

return cljs.core._EQ_.__2(name__7710,n);
}),cljs.core.deref(domina.test.tests)));
});
domina.test.run_tests = (function run_tests(){
return cljs.core.map.__2((function (p__7713){
var vec__7714__7715 = p__7713;
var name__7716 = cljs.core.nth.__3(vec__7714__7715,0,null);
var testfn__7717 = cljs.core.nth.__3(vec__7714__7715,1,null);

return cljs.core.PersistentVector.fromArray([name__7716,domina.test.run_test(testfn__7717)]);
}),cljs.core.deref(domina.test.tests));
});
/**
* resets the page
*/
domina.test.reset = (function reset(){
domina.destroy_BANG_.call(null,domina.xpath.xpath.call(null,"//body/*"));
return domina.events.unlisten_BANG_.call(null,domina.xpath.xpath.call(null,"//*"));
});
/**
* Standard fixture html
*/
domina.test.standard_fixture = (function standard_fixture(){
return domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>\n<p id='id1' class='p3'>P3</p>");
});
domina.test.add_test("basic CSS selection",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes.call(null,domina.css.sel.__1("p"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'sel","p"),cljs.core.hash_map("\uFDD0'line",70))),cljs.core.hash_map("\uFDD0'line",70))),cljs.core.hash_map("\uFDD0'line",70))),cljs.core.hash_map("\uFDD0'line",70))))));
}
}));
domina.test.add_test("basic CSS selection (single node)",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core.not((domina.single_node.call(null,domina.css.sel.__1("p")) === null))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'not",cljs.core.with_meta(cljs.core.list("\uFDD1'nil?",cljs.core.with_meta(cljs.core.list("\uFDD1'single-node",cljs.core.with_meta(cljs.core.list("\uFDD1'sel","p"),cljs.core.hash_map("\uFDD0'line",75))),cljs.core.hash_map("\uFDD0'line",75))),cljs.core.hash_map("\uFDD0'line",75))),cljs.core.hash_map("\uFDD0'line",75))))));
}
}));
domina.test.add_test("CSS selection with class specification",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.css.sel.__1(".d1"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'sel",".d1"),cljs.core.hash_map("\uFDD0'line",80))),cljs.core.hash_map("\uFDD0'line",80))),cljs.core.hash_map("\uFDD0'line",80))),cljs.core.hash_map("\uFDD0'line",80))))));
}
}));
domina.test.add_test("a relative CSS selector",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes.call(null,domina.css.sel.__2(domina.css.sel.__1(".d1"),"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'->",cljs.core.with_meta(cljs.core.list("\uFDD1'sel",".d1"),cljs.core.hash_map("\uFDD0'line",85)),cljs.core.with_meta(cljs.core.list("\uFDD1'sel","p"),cljs.core.hash_map("\uFDD0'line",86))),cljs.core.hash_map("\uFDD0'line",85))),cljs.core.hash_map("\uFDD0'line",85))),cljs.core.hash_map("\uFDD0'line",85))),cljs.core.hash_map("\uFDD0'line",85))))));
}
}));
domina.test.add_test("extended CSS chaining",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.css.sel.__1("body"),"<div><p><span>some text</span></p><p><span>more text</span></p></div>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes.call(null,domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__1("body"),"div"),"p"),"span"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'->",cljs.core.with_meta(cljs.core.list("\uFDD1'sel","body"),cljs.core.hash_map("\uFDD0'line",92)),cljs.core.with_meta(cljs.core.list("\uFDD1'sel","div"),cljs.core.hash_map("\uFDD0'line",93)),cljs.core.with_meta(cljs.core.list("\uFDD1'sel","p"),cljs.core.hash_map("\uFDD0'line",94)),cljs.core.with_meta(cljs.core.list("\uFDD1'sel","span"),cljs.core.hash_map("\uFDD0'line",95))),cljs.core.hash_map("\uFDD0'line",92))),cljs.core.hash_map("\uFDD0'line",92))),cljs.core.hash_map("\uFDD0'line",92))),cljs.core.hash_map("\uFDD0'line",92))))));
}
}));
domina.test.add_test("basic xpath selection",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.call(null,"//p"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",102))),cljs.core.hash_map("\uFDD0'line",102))),cljs.core.hash_map("\uFDD0'line",102))),cljs.core.hash_map("\uFDD0'line",102))))));
}
}));
domina.test.add_test("basic xpath selection (single node)",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core.not((domina.single_node.call(null,domina.xpath.xpath.call(null,"//p")) === null))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'not",cljs.core.with_meta(cljs.core.list("\uFDD1'nil?",cljs.core.with_meta(cljs.core.list("\uFDD1'single-node",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",107))),cljs.core.hash_map("\uFDD0'line",107))),cljs.core.hash_map("\uFDD0'line",107))),cljs.core.hash_map("\uFDD0'line",107))))));
}
}));
domina.test.add_test("xpath selection with class specification",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@class='d1']"),cljs.core.hash_map("\uFDD0'line",112))),cljs.core.hash_map("\uFDD0'line",112))),cljs.core.hash_map("\uFDD0'line",112))),cljs.core.hash_map("\uFDD0'line",112))))));
}
}));
domina.test.add_test("a relative xpath expression",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,"//body/div[@class='d1']"),"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'->",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div[@class='d1']"),cljs.core.hash_map("\uFDD0'line",117)),cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","p"),cljs.core.hash_map("\uFDD0'line",118))),cljs.core.hash_map("\uFDD0'line",117))),cljs.core.hash_map("\uFDD0'line",117))),cljs.core.hash_map("\uFDD0'line",117))),cljs.core.hash_map("\uFDD0'line",117))))));
}
}));
domina.test.add_test("extended selection chaining",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p><span>some text</span></p><p><span>more text</span></p></div>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,"//body"),"./div"),"./p"),"./span"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'->",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body"),cljs.core.hash_map("\uFDD0'line",124)),cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","./div"),cljs.core.hash_map("\uFDD0'line",125)),cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","./p"),cljs.core.hash_map("\uFDD0'line",126)),cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","./span"),cljs.core.hash_map("\uFDD0'line",127))),cljs.core.hash_map("\uFDD0'line",124))),cljs.core.hash_map("\uFDD0'line",124))),cljs.core.hash_map("\uFDD0'line",124))),cljs.core.hash_map("\uFDD0'line",124))))));
}
}));
domina.test.add_test("advanced xpath",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[following-sibling::p[@class='p3']]"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[following-sibling::p[@class='p3']]"),cljs.core.hash_map("\uFDD0'line",131))),cljs.core.hash_map("\uFDD0'line",131))),cljs.core.hash_map("\uFDD0'line",131))),cljs.core.hash_map("\uFDD0'line",131))))));
}
}));
domina.test.add_test("look up node by id",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.by_id.call(null,"id1"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'by-id","id1"),cljs.core.hash_map("\uFDD0'line",136))),cljs.core.hash_map("\uFDD0'line",136))),cljs.core.hash_map("\uFDD0'line",136))),cljs.core.hash_map("\uFDD0'line",136))))));
}
}));
domina.test.add_test("look up node by id with context",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.css.sel.__1("body"),"<div><p><span>some text</span></p><p><span>more text</span></p></div>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes.call(null,domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__2(domina.css.sel.__1("body"),"div"),"p"),"span"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'->",cljs.core.with_meta(cljs.core.list("\uFDD1'sel","body"),cljs.core.hash_map("\uFDD0'line",142)),cljs.core.with_meta(cljs.core.list("\uFDD1'sel","div"),cljs.core.hash_map("\uFDD0'line",143)),cljs.core.with_meta(cljs.core.list("\uFDD1'sel","p"),cljs.core.hash_map("\uFDD0'line",144)),cljs.core.with_meta(cljs.core.list("\uFDD1'sel","span"),cljs.core.hash_map("\uFDD0'line",145))),cljs.core.hash_map("\uFDD0'line",142))),cljs.core.hash_map("\uFDD0'line",142))),cljs.core.hash_map("\uFDD0'line",142))),cljs.core.hash_map("\uFDD0'line",142))))));
}
}));
domina.test.add_test("look up nodes by class",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.by_class.call(null,"p3"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'by-class","p3"),cljs.core.hash_map("\uFDD0'line",150))),cljs.core.hash_map("\uFDD0'line",150))),cljs.core.hash_map("\uFDD0'line",150))),cljs.core.hash_map("\uFDD0'line",150))))));
}
}));
domina.test.add_test("child selection",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.children.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'children",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@class='d1']"),cljs.core.hash_map("\uFDD0'line",155))),cljs.core.hash_map("\uFDD0'line",155))),cljs.core.hash_map("\uFDD0'line",155))),cljs.core.hash_map("\uFDD0'line",155))))));
}
}));
domina.test.add_test("clone a single node",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.clone.call(null,domina.single_node.call(null,domina.xpath.xpath.call(null,"//p")))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'clone",cljs.core.with_meta(cljs.core.list("\uFDD1'single-node",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",160))),cljs.core.hash_map("\uFDD0'line",160))),cljs.core.hash_map("\uFDD0'line",160))),cljs.core.hash_map("\uFDD0'line",160))),cljs.core.hash_map("\uFDD0'line",160))))));
}
}));
domina.test.add_test("clone multiple nodes",(function (){
domina.test.reset();
domina.test.standard_fixture();
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.clone.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p")))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'clone",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",165))),cljs.core.hash_map("\uFDD0'line",165))),cljs.core.hash_map("\uFDD0'line",165))),cljs.core.hash_map("\uFDD0'line",165))),cljs.core.hash_map("\uFDD0'line",165))))));
}
}));
domina.test.add_test("append a single child to a single parent",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended1'>test</p>");
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("\uFDD0'line",171))),cljs.core.hash_map("\uFDD0'line",171))),cljs.core.hash_map("\uFDD0'line",171))),cljs.core.hash_map("\uFDD0'line",171))))));
}
}));
domina.test.add_test("append multiple children to a single parent",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("\uFDD0'line",177))),cljs.core.hash_map("\uFDD0'line",177))),cljs.core.hash_map("\uFDD0'line",177))),cljs.core.hash_map("\uFDD0'line",177))))));
}
}));
domina.test.add_test("append a single child to multiple parents",(function (){
domina.test.reset();
domina.test.standard_fixture();
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body/div/p"),"<span>!!</span>");
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.call(null,"//div/p/span"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div/p/span"),cljs.core.hash_map("\uFDD0'line",184))),cljs.core.hash_map("\uFDD0'line",184))),cljs.core.hash_map("\uFDD0'line",184))),cljs.core.hash_map("\uFDD0'line",184))))));
}
}));
domina.test.add_test("append multiple children to multiple parents",(function (){
domina.test.reset();
domina.test.standard_fixture();
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//body/div/p"),"some <span class='foo'>more</span> text");
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__1("//div/p/span[@class='foo']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div/p/span[@class='foo']"),cljs.core.hash_map("\uFDD0'line",191))),cljs.core.hash_map("\uFDD0'line",191))),cljs.core.hash_map("\uFDD0'line",191))),cljs.core.hash_map("\uFDD0'line",191))))));
}
}));
domina.test.add_test("prepend a single child to a single parent",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//body"),"<div>2</div><div>3</div>");
domina.prepend_BANG_.call(null,domina.xpath.xpath.__1("//body"),"<div>1</div>");
if((cljs.core._EQ_.__2("1",domina.text.call(null,domina.xpath.xpath.__1("//body/div[1]")))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","1",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div[1]"),cljs.core.hash_map("\uFDD0'line",197))),cljs.core.hash_map("\uFDD0'line",197))),cljs.core.hash_map("\uFDD0'line",197))))));
}
if((cljs.core._EQ_.__2("2",domina.text.call(null,domina.xpath.xpath.__1("//body/div[2]")))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","2",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div[2]"),cljs.core.hash_map("\uFDD0'line",198))),cljs.core.hash_map("\uFDD0'line",198))),cljs.core.hash_map("\uFDD0'line",198))))));
}
if((cljs.core._EQ_.__2("3",domina.text.call(null,domina.xpath.xpath.__1("//body/div[3]")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","3",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div[3]"),cljs.core.hash_map("\uFDD0'line",199))),cljs.core.hash_map("\uFDD0'line",199))),cljs.core.hash_map("\uFDD0'line",199))))));
}
}));
domina.test.add_test("prepend a single child to multiple parents",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//body"),"<div><p>2</p></div><div><p>2</p></div>");
domina.prepend_BANG_.call(null,domina.xpath.xpath.__1("//body/div"),"<p>1</p>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__1("//body/div/p[text()='2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div/p[text()='2']"),cljs.core.hash_map("\uFDD0'line",205))),cljs.core.hash_map("\uFDD0'line",205))),cljs.core.hash_map("\uFDD0'line",205))),cljs.core.hash_map("\uFDD0'line",205))))));
}
}));
domina.test.add_test("Insert a single child to a single parent",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//body"),"<div class='testInserts'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='testInserts']"),"<p class='i1'></p>");
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='testInserts']"),"<p class='i3'></p>");
domina.insert_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='testInserts']"),"<p class='i2'></p>",1);
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__1("//div[@class='testInserts']/p"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@class='testInserts']/p"),cljs.core.hash_map("\uFDD0'line",217))),cljs.core.hash_map("\uFDD0'line",217))),cljs.core.hash_map("\uFDD0'line",217))),cljs.core.hash_map("\uFDD0'line",217))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__1("//p[@class='i2']/preceding-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@class='i2']/preceding-sibling::*"),cljs.core.hash_map("\uFDD0'line",218))),cljs.core.hash_map("\uFDD0'line",218))),cljs.core.hash_map("\uFDD0'line",218))),cljs.core.hash_map("\uFDD0'line",218))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__1("//p[@class='i2']/following-sibling::*"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@class='i2']/following-sibling::*"),cljs.core.hash_map("\uFDD0'line",219))),cljs.core.hash_map("\uFDD0'line",219))),cljs.core.hash_map("\uFDD0'line",219))),cljs.core.hash_map("\uFDD0'line",219))))));
}
}));
domina.test.add_test("Insert a single child to multiple parents",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//body"),"<div class='testInserts' id='testInsert1'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//body"),"<div class='testInserts' id='testInsert2'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='testInserts']"),"<p class='i1'></p>");
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='testInserts']"),"<p class='i3'></p>");
domina.insert_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='testInserts']"),"<p class='i2'></p>",1);
var G__7992__7993 = cljs.core.seq(cljs.core.PersistentVector.fromArray([domina.xpath.xpath.__1("//div[@id='testInsert1']"),domina.xpath.xpath.__1("//div[@id='testInsert2']")]));

if(cljs.core.truth_(G__7992__7993))
{var children__7994 = cljs.core.first(G__7992__7993);
var G__7992__8001 = G__7992__7993;

while(true){
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__2(children__7994,"p"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","\uFDD1'children","p"),cljs.core.hash_map("\uFDD0'line",235))),cljs.core.hash_map("\uFDD0'line",235))),cljs.core.hash_map("\uFDD0'line",235))),cljs.core.hash_map("\uFDD0'line",235))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__2(children__7994,"p[@class='i2']/preceding-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","\uFDD1'children","p[@class='i2']/preceding-sibling::*"),cljs.core.hash_map("\uFDD0'line",236))),cljs.core.hash_map("\uFDD0'line",236))),cljs.core.hash_map("\uFDD0'line",236))),cljs.core.hash_map("\uFDD0'line",236))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__2(children__7994,"p[@class='i2']/following-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","\uFDD1'children","p[@class='i2']/following-sibling::*"),cljs.core.hash_map("\uFDD0'line",238))),cljs.core.hash_map("\uFDD0'line",238))),cljs.core.hash_map("\uFDD0'line",238))),cljs.core.hash_map("\uFDD0'line",238))))));
}
var temp__3698__auto____8002 = cljs.core.next(G__7992__8001);

if(cljs.core.truth_(temp__3698__auto____8002))
{var G__7992__8003 = temp__3698__auto____8002;

{
var G__8024 = cljs.core.first(G__7992__8003);
var G__8025 = G__7992__8003;
children__7994 = G__8024;
G__7992__8001 = G__8025;
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
}));
domina.test.add_test("destroy a single node",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//body"),"<p class='appended1'>app1</p>");
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__1("//body/p[@class='appended1']"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("\uFDD0'line",244))),cljs.core.hash_map("\uFDD0'line",244))),cljs.core.hash_map("\uFDD0'line",244))),cljs.core.hash_map("\uFDD0'line",244))))));
}
domina.destroy_BANG_.call(null,domina.xpath.xpath.__1("//body/p[@class='appended1']"));
if((cljs.core._EQ_.__2(0,cljs.core.count(domina.nodes.call(null,domina.xpath.xpath.__1("//body/p[@class='appended1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",0,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("\uFDD0'line",246))),cljs.core.hash_map("\uFDD0'line",246))),cljs.core.hash_map("\uFDD0'line",246))),cljs.core.hash_map("\uFDD0'line",246))))));
}
}));
domina.test.add_test("destroy multiple nodes",(function (){
domina.test.reset();
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//body"),"<p class='appended2'>app1</p><p class='appended2'>app2</p>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/p[@class='appended2']"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("\uFDD0'line",252))),cljs.core.hash_map("\uFDD0'line",252))),cljs.core.hash_map("\uFDD0'line",252))),cljs.core.hash_map("\uFDD0'line",252))))));
}
domina.destroy_BANG_.call(null,domina.xpath.xpath.__1("//body/p[@class='appended2']"));
if((cljs.core._EQ_.__2(0,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/p[@class='appended2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",0,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("\uFDD0'line",254))),cljs.core.hash_map("\uFDD0'line",254))),cljs.core.hash_map("\uFDD0'line",254))),cljs.core.hash_map("\uFDD0'line",254))))));
}
}));
domina.test.add_test("detach and reattach a single node",(function (){
domina.test.reset();
domina.test.standard_fixture();
var n__8097 = domina.detach_BANG_.call(null,domina.xpath.xpath.__1("//p[@class='p3']"));

if((cljs.core._EQ_.__2(0,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='p3']"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",0,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@class='p3']"),cljs.core.hash_map("\uFDD0'line",260))),cljs.core.hash_map("\uFDD0'line",260))),cljs.core.hash_map("\uFDD0'line",260))),cljs.core.hash_map("\uFDD0'line",260))))));
}
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='d1']"),n__8097);
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='p3']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@class='p3']"),cljs.core.hash_map("\uFDD0'line",262))),cljs.core.hash_map("\uFDD0'line",262))),cljs.core.hash_map("\uFDD0'line",262))),cljs.core.hash_map("\uFDD0'line",262))))));
}
}));
domina.test.add_test("detach and reattach multiple nodes",(function (){
domina.test.reset();
domina.test.standard_fixture();
var n__8111 = domina.detach_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='d1']/p"));

if((cljs.core._EQ_.__2(0,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@class='d1']/p"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",0,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@class='d1']/p"),cljs.core.hash_map("\uFDD0'line",268))),cljs.core.hash_map("\uFDD0'line",268))),cljs.core.hash_map("\uFDD0'line",268))),cljs.core.hash_map("\uFDD0'line",268))))));
}
domina.append_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='d1']"),n__8111);
if((cljs.core._EQ_.__2(3,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@class='d1']/p"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",3,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@class='d1']/p"),cljs.core.hash_map("\uFDD0'line",270))),cljs.core.hash_map("\uFDD0'line",270))),cljs.core.hash_map("\uFDD0'line",270))),cljs.core.hash_map("\uFDD0'line",270))))));
}
}));
domina.test.add_test("clear a node's contents",(function (){
domina.test.reset();
domina.test.standard_fixture();
domina.destroy_children_BANG_.call(null,domina.xpath.xpath.__1("//div[@class='d1']"));
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@class='d1']"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@class='d1']"),cljs.core.hash_map("\uFDD0'line",276))),cljs.core.hash_map("\uFDD0'line",276))),cljs.core.hash_map("\uFDD0'line",276))),cljs.core.hash_map("\uFDD0'line",276))))));
}
if((cljs.core._EQ_.__2(0,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@class='d1']/*"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",0,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@class='d1']/*"),cljs.core.hash_map("\uFDD0'line",277))),cljs.core.hash_map("\uFDD0'line",277))),cljs.core.hash_map("\uFDD0'line",277))),cljs.core.hash_map("\uFDD0'line",277))))));
}
}));
domina.test.add_test("insert-before! with a single reference and single new node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div id='ref'>Some content</div>");
domina.insert_before_BANG_(domina.nodes(domina.by_id("ref")),"<p>before</p>");
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref']/preceding-sibling::*[text()='before']"),cljs.core.hash_map("\uFDD0'line",283))),cljs.core.hash_map("\uFDD0'line",283))),cljs.core.hash_map("\uFDD0'line",283))),cljs.core.hash_map("\uFDD0'line",283))))));
}
}));
domina.test.add_test("insert-before! with a single reference and multiple new nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div id='ref'>Some content</div>");
domina.insert_before_BANG_(domina.nodes(domina.by_id("ref")),"<p>before1</p><p>before2</p>");
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"),cljs.core.hash_map("\uFDD0'line",289))),cljs.core.hash_map("\uFDD0'line",289))),cljs.core.hash_map("\uFDD0'line",289))),cljs.core.hash_map("\uFDD0'line",289))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"),cljs.core.hash_map("\uFDD0'line",290))),cljs.core.hash_map("\uFDD0'line",290))),cljs.core.hash_map("\uFDD0'line",290))),cljs.core.hash_map("\uFDD0'line",290))))));
}
}));
domina.test.add_test("insert-before! with multiple reference nodes and a single new node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='ref' id='ref1'>content1</div>");
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='ref' id='ref2'>content2</div>");
domina.insert_before_BANG_(domina.nodes(domina.by_class("ref")),"<p>before</p>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",297))),cljs.core.hash_map("\uFDD0'line",297))),cljs.core.hash_map("\uFDD0'line",297))),cljs.core.hash_map("\uFDD0'line",297))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref1']/preceding-sibling::p"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref1']/preceding-sibling::p"),cljs.core.hash_map("\uFDD0'line",298))),cljs.core.hash_map("\uFDD0'line",298))),cljs.core.hash_map("\uFDD0'line",298))),cljs.core.hash_map("\uFDD0'line",298))))));
}
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref2']/preceding-sibling::p"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref2']/preceding-sibling::p"),cljs.core.hash_map("\uFDD0'line",299))),cljs.core.hash_map("\uFDD0'line",299))),cljs.core.hash_map("\uFDD0'line",299))),cljs.core.hash_map("\uFDD0'line",299))))));
}
}));
domina.test.add_test("insert-after! with a single reference and single new node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div id='ref'>Some content</div>");
domina.insert_after_BANG_(domina.nodes(domina.by_id("ref")),"<p>after</p>");
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref']/following-sibling::*[text()='after']"),cljs.core.hash_map("\uFDD0'line",305))),cljs.core.hash_map("\uFDD0'line",305))),cljs.core.hash_map("\uFDD0'line",305))),cljs.core.hash_map("\uFDD0'line",305))))));
}
}));
domina.test.add_test("insert-after! with a single reference and multiple new nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div id='ref'>Some content</div>");
domina.insert_after_BANG_(domina.nodes(domina.by_id("ref")),"<p>after1</p><p>after2</p>");
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"),cljs.core.hash_map("\uFDD0'line",311))),cljs.core.hash_map("\uFDD0'line",311))),cljs.core.hash_map("\uFDD0'line",311))),cljs.core.hash_map("\uFDD0'line",311))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"),cljs.core.hash_map("\uFDD0'line",312))),cljs.core.hash_map("\uFDD0'line",312))),cljs.core.hash_map("\uFDD0'line",312))),cljs.core.hash_map("\uFDD0'line",312))))));
}
}));
domina.test.add_test("insert-after! with multiple reference nodes and a single new node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='ref' id='ref1'>content1</div>");
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='ref' id='ref2'>content2</div>");
domina.insert_after_BANG_(domina.nodes(domina.by_class("ref")),"<p>after</p>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",319))),cljs.core.hash_map("\uFDD0'line",319))),cljs.core.hash_map("\uFDD0'line",319))),cljs.core.hash_map("\uFDD0'line",319))))));
}
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref1']/following-sibling::p"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref1']/following-sibling::p"),cljs.core.hash_map("\uFDD0'line",320))),cljs.core.hash_map("\uFDD0'line",320))),cljs.core.hash_map("\uFDD0'line",320))),cljs.core.hash_map("\uFDD0'line",320))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//div[@id='ref2']/following-sibling::p"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[@id='ref2']/following-sibling::p"),cljs.core.hash_map("\uFDD0'line",321))),cljs.core.hash_map("\uFDD0'line",321))),cljs.core.hash_map("\uFDD0'line",321))),cljs.core.hash_map("\uFDD0'line",321))))));
}
}));
domina.test.add_test("swap-content! with a single reference node and a single new node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><p id='before'>TYPO</p></div>");
domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@id='before']"),"<p id='after'>fixed</p>");
if((cljs.core._EQ_.__2(0,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='before']"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",0,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@id='before']"),cljs.core.hash_map("\uFDD0'line",327))),cljs.core.hash_map("\uFDD0'line",327))),cljs.core.hash_map("\uFDD0'line",327))),cljs.core.hash_map("\uFDD0'line",327))))));
}
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@id='after']"),cljs.core.hash_map("\uFDD0'line",328))),cljs.core.hash_map("\uFDD0'line",328))),cljs.core.hash_map("\uFDD0'line",328))),cljs.core.hash_map("\uFDD0'line",328))))));
}
}));
domina.test.add_test("swap-content! with a single reference node and multiple new nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><p id='before'>TYPO</p></div>");
domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@id='before']"),"<p class='after'>fixed1</p><p class='after'>fixed2</p>");
if((cljs.core._EQ_.__2(0,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@id='before']"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",0,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@id='before']"),cljs.core.hash_map("\uFDD0'line",334))),cljs.core.hash_map("\uFDD0'line",334))),cljs.core.hash_map("\uFDD0'line",334))),cljs.core.hash_map("\uFDD0'line",334))))));
}
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@class='after']"),cljs.core.hash_map("\uFDD0'line",335))),cljs.core.hash_map("\uFDD0'line",335))),cljs.core.hash_map("\uFDD0'line",335))),cljs.core.hash_map("\uFDD0'line",335))))));
}
}));
domina.test.add_test("swap-content! with multiple reference nodes and multiple new nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><p class='before'>TYPO-1</p></div>");
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><p class='before'>TYPO-2</p></div>");
domina.swap_content_BANG_(domina.xpath.xpath.__1("//p[@class='before']"),"<p class='after'>fixed1</p><p class='after'>fixed2</p>");
if((cljs.core._EQ_.__2(0,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='before']"))))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",0,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@class='before']"),cljs.core.hash_map("\uFDD0'line",342))),cljs.core.hash_map("\uFDD0'line",342))),cljs.core.hash_map("\uFDD0'line",342))),cljs.core.hash_map("\uFDD0'line",342))))));
}
if((cljs.core._EQ_.__2(4,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//p[@class='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",4,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[@class='after']"),cljs.core.hash_map("\uFDD0'line",343))),cljs.core.hash_map("\uFDD0'line",343))),cljs.core.hash_map("\uFDD0'line",343))),cljs.core.hash_map("\uFDD0'line",343))))));
}
}));
domina.test.add_test("can retrieve a css property value",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div style=\"background-color: maroon;\">Test</div>");
if((cljs.core._EQ_.__2("maroon",domina.style(domina.xpath.xpath.__1("//div"),"background-color"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","maroon",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",350)),"background-color"),cljs.core.hash_map("\uFDD0'line",350))),cljs.core.hash_map("\uFDD0'line",350))))));
}
if((cljs.core._EQ_.__2("maroon",domina.style(domina.xpath.xpath.__1("//div"),"\uFDD0'background-color"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","maroon",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",351)),"\uFDD0'background-color"),cljs.core.hash_map("\uFDD0'line",351))),cljs.core.hash_map("\uFDD0'line",351))))));
}
if(((domina.style(domina.xpath.xpath.__1("//div"),"\uFDD0'no-such-style") === null)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'nil?",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",352)),"\uFDD0'no-such-style"),cljs.core.hash_map("\uFDD0'line",352))),cljs.core.hash_map("\uFDD0'line",352))))));
}
}));
domina.test.add_test("can retrieve an HTML attribute value",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div height=\"42\">Content!</div>");
if((cljs.core._EQ_.__2("42",domina.attr(domina.xpath.xpath.__1("//div"),"height"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","42",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",357)),"height"),cljs.core.hash_map("\uFDD0'line",357))),cljs.core.hash_map("\uFDD0'line",357))))));
}
if((cljs.core._EQ_.__2("42",domina.attr(domina.xpath.xpath.__1("//div"),"\uFDD0'height"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","42",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",358)),"\uFDD0'height"),cljs.core.hash_map("\uFDD0'line",358))),cljs.core.hash_map("\uFDD0'line",358))))));
}
if(((domina.attr(domina.xpath.xpath.__1("//div"),"\uFDD0'no-such-attr:c") === null)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'nil?",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",359)),"\uFDD0'no-such-attr:c"),cljs.core.hash_map("\uFDD0'line",359))),cljs.core.hash_map("\uFDD0'line",359))))));
}
}));
domina.test.add_test("can set a css property on a single node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div><div>2</div>");
domina.set_style_BANG_(domina.xpath.xpath.__1("//div[1]"),"background-color","red");
domina.set_style_BANG_(domina.xpath.xpath.__1("//div[2]"),"\uFDD0'background-color","green");
if((cljs.core._EQ_.__2("red",domina.style(domina.xpath.xpath.__1("//div[1]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","red",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",366)),"background-color"),cljs.core.hash_map("\uFDD0'line",366))),cljs.core.hash_map("\uFDD0'line",366))))));
}
if((cljs.core._EQ_.__2("green",domina.style(domina.xpath.xpath.__1("//div[2]"),"background-color"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","green",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",367)),"background-color"),cljs.core.hash_map("\uFDD0'line",367))),cljs.core.hash_map("\uFDD0'line",367))))));
}
}));
domina.test.add_test("can set a css property on multiple nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div><div>2</div>");
domina.set_style_BANG_(domina.xpath.xpath.__1("//div"),"color","red");
if((cljs.core._EQ_.__2("red",domina.style(domina.xpath.xpath.__1("//div[1]"),"color"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","red",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",373)),"color"),cljs.core.hash_map("\uFDD0'line",373))),cljs.core.hash_map("\uFDD0'line",373))))));
}
if((cljs.core._EQ_.__2("red",domina.style(domina.xpath.xpath.__1("//div[2]"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","red",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",374)),"color"),cljs.core.hash_map("\uFDD0'line",374))),cljs.core.hash_map("\uFDD0'line",374))))));
}
}));
domina.test.add_test("can set a html attribute on a single node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div><div>2</div>");
domina.set_attr_BANG_(domina.xpath.xpath.__1("//div[1]"),"width",42);
domina.set_attr_BANG_(domina.xpath.xpath.__1("//div[2]"),"\uFDD0'width",42);
if((cljs.core._EQ_.__2("42",domina.attr(domina.xpath.xpath.__1("//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","42",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",381)),"width"),cljs.core.hash_map("\uFDD0'line",381))),cljs.core.hash_map("\uFDD0'line",381))))));
}
if((cljs.core._EQ_.__2("42",domina.attr(domina.xpath.xpath.__1("//div[2]"),"width"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","42",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",382)),"width"),cljs.core.hash_map("\uFDD0'line",382))),cljs.core.hash_map("\uFDD0'line",382))))));
}
}));
domina.test.add_test("can remove an html attribute from a single node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div width='42'>1</div><div width='42'>2</div>");
domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div[1]"),"width");
domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div[2]"),"\uFDD0'width");
if(((domina.attr(domina.xpath.xpath.__1("//div[1]"),"width") === null)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'nil?",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",389)),"width"),cljs.core.hash_map("\uFDD0'line",389))),cljs.core.hash_map("\uFDD0'line",389))))));
}
if(((domina.attr(domina.xpath.xpath.__1("//div[2]"),"width") === null)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'nil?",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",390)),"width"),cljs.core.hash_map("\uFDD0'line",390))),cljs.core.hash_map("\uFDD0'line",390))))));
}
}));
domina.test.add_test("can remove an html attribute from multiple nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div width='42'>1</div><div width='42'>2</div>");
domina.remove_attr_BANG_(domina.xpath.xpath.__1("//div"),"width");
if(((domina.attr(domina.xpath.xpath.__1("//div[1]"),"width") === null)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'nil?",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",396)),"width"),cljs.core.hash_map("\uFDD0'line",396))),cljs.core.hash_map("\uFDD0'line",396))))));
}
if(((domina.attr(domina.xpath.xpath.__1("//div[2]"),"width") === null)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'nil?",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",397)),"width"),cljs.core.hash_map("\uFDD0'line",397))),cljs.core.hash_map("\uFDD0'line",397))))));
}
}));
domina.test.add_test("can get multiple CSS styles from a single node.",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div>");
domina.set_style_BANG_(domina.xpath.xpath.__1("//div"),"color","red");
domina.set_style_BANG_(domina.xpath.xpath.__1("//div"),"background-color","black");
if((cljs.core._EQ_.__2(cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'background-color"],{"\uFDD0'color":"red","\uFDD0'background-color":"black"}),domina.styles(domina.xpath.xpath.__1("//div")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.hash_map("\uFDD0'color","red","\uFDD0'background-color","black"),cljs.core.with_meta(cljs.core.list("\uFDD1'styles",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",405))),cljs.core.hash_map("\uFDD0'line",405))),cljs.core.hash_map("\uFDD0'line",404))))));
}
}));
domina.test.add_test("can get multiple HTML attributes from a single node.",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div>");
domina.set_attr_BANG_(domina.xpath.xpath.__1("//div"),"width",42);
domina.set_attr_BANG_(domina.xpath.xpath.__1("//div"),"height",24);
var attributes__8565 = domina.attrs(domina.xpath.xpath.__1("//div"));

if((cljs.core._EQ_.__2("42","\uFDD0'width".call(null,attributes__8565))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","42",cljs.core.with_meta(cljs.core.list("\uFDD0'width","\uFDD1'attributes"),cljs.core.hash_map("\uFDD0'line",413))),cljs.core.hash_map("\uFDD0'line",413))))));
}
if((cljs.core._EQ_.__2("24","\uFDD0'height".call(null,attributes__8565))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","24",cljs.core.with_meta(cljs.core.list("\uFDD0'height","\uFDD1'attributes"),cljs.core.hash_map("\uFDD0'line",414))),cljs.core.hash_map("\uFDD0'line",414))))));
}
}));
domina.test.add_test("can set multiple CSS styles on a single node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div>");
domina.set_styles_BANG_(domina.xpath.xpath.__1("//div"),cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'background-color"],{"\uFDD0'color":"red","\uFDD0'background-color":"black"}));
if((cljs.core._EQ_.__2("black",domina.style(domina.xpath.xpath.__1("//div"),"background-color"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","black",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",421)),"background-color"),cljs.core.hash_map("\uFDD0'line",421))),cljs.core.hash_map("\uFDD0'line",421))))));
}
if((cljs.core._EQ_.__2("red",domina.style(domina.xpath.xpath.__1("//div"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","red",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",422)),"color"),cljs.core.hash_map("\uFDD0'line",422))),cljs.core.hash_map("\uFDD0'line",422))))));
}
}));
domina.test.add_test("can set multiple CSS styles on multiple nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div><div>2</div>");
domina.set_styles_BANG_(domina.xpath.xpath.__1("//div"),cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'background-color"],{"\uFDD0'color":"red","\uFDD0'background-color":"black"}));
if((cljs.core._EQ_.__2("black",domina.style(domina.xpath.xpath.__1("//div[1]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","black",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",429)),"background-color"),cljs.core.hash_map("\uFDD0'line",429))),cljs.core.hash_map("\uFDD0'line",429))))));
}
if((cljs.core._EQ_.__2("red",domina.style(domina.xpath.xpath.__1("//div[1]"),"color"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","red",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",430)),"color"),cljs.core.hash_map("\uFDD0'line",430))),cljs.core.hash_map("\uFDD0'line",430))))));
}
if((cljs.core._EQ_.__2("black",domina.style(domina.xpath.xpath.__1("//div[2]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","black",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",431)),"background-color"),cljs.core.hash_map("\uFDD0'line",431))),cljs.core.hash_map("\uFDD0'line",431))))));
}
if((cljs.core._EQ_.__2("red",domina.style(domina.xpath.xpath.__1("//div[2]"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","red",cljs.core.with_meta(cljs.core.list("\uFDD1'style",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",432)),"color"),cljs.core.hash_map("\uFDD0'line",432))),cljs.core.hash_map("\uFDD0'line",432))))));
}
}));
domina.test.add_test("can set multiple HTML attributes on a single node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div>");
domina.set_attrs_BANG_(domina.xpath.xpath.__1("//div"),cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'height"],{"\uFDD0'width":42,"\uFDD0'height":24}));
if((cljs.core._EQ_.__2("42",domina.attr(domina.xpath.xpath.__1("//div"),"width"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","42",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",439)),"width"),cljs.core.hash_map("\uFDD0'line",439))),cljs.core.hash_map("\uFDD0'line",439))))));
}
if((cljs.core._EQ_.__2("24",domina.attr(domina.xpath.xpath.__1("//div"),"height"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","24",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",440)),"height"),cljs.core.hash_map("\uFDD0'line",440))),cljs.core.hash_map("\uFDD0'line",440))))));
}
}));
domina.test.add_test("can set multiple CSS styles on multiple nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div><div>2</div>");
domina.set_attrs_BANG_(domina.xpath.xpath.__1("//div"),cljs.core.ObjMap.fromObject(["\uFDD0'width","\uFDD0'height"],{"\uFDD0'width":42,"\uFDD0'height":24}));
if((cljs.core._EQ_.__2("42",domina.attr(domina.xpath.xpath.__1("//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","42",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",447)),"width"),cljs.core.hash_map("\uFDD0'line",447))),cljs.core.hash_map("\uFDD0'line",447))))));
}
if((cljs.core._EQ_.__2("24",domina.attr(domina.xpath.xpath.__1("//div[1]"),"height"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","24",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",448)),"height"),cljs.core.hash_map("\uFDD0'line",448))),cljs.core.hash_map("\uFDD0'line",448))))));
}
if((cljs.core._EQ_.__2("42",domina.attr(domina.xpath.xpath.__1("//div[2]"),"width"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","42",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",449)),"width"),cljs.core.hash_map("\uFDD0'line",449))),cljs.core.hash_map("\uFDD0'line",449))))));
}
if((cljs.core._EQ_.__2("24",domina.attr(domina.xpath.xpath.__1("//div[2]"),"height"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","24",cljs.core.with_meta(cljs.core.list("\uFDD1'attr",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",450)),"height"),cljs.core.hash_map("\uFDD0'line",450))),cljs.core.hash_map("\uFDD0'line",450))))));
}
}));
domina.test.add_test("test the has-class? function",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='class1'>1</div>");
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='class2'>2</div>");
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",456)),"class1"),cljs.core.hash_map("\uFDD0'line",456))),cljs.core.hash_map("\uFDD0'line",456))))));
}
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"),"class2"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",457)),"class2"),cljs.core.hash_map("\uFDD0'line",457))),cljs.core.hash_map("\uFDD0'line",457))))));
}
if((cljs.core._EQ_.__2(false,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",false,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",458)),"class2"),cljs.core.hash_map("\uFDD0'line",458))),cljs.core.hash_map("\uFDD0'line",458))))));
}
if((cljs.core._EQ_.__2(false,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"),"class1"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",false,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",459)),"class1"),cljs.core.hash_map("\uFDD0'line",459))),cljs.core.hash_map("\uFDD0'line",459))))));
}
}));
domina.test.add_test("can add a CSS class to a single node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div>");
domina.add_class_BANG_(domina.xpath.xpath.__1("//div"),"class1");
domina.add_class_BANG_(domina.xpath.xpath.__1("//div"),"class2");
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"),"class1"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",466)),"class1"),cljs.core.hash_map("\uFDD0'line",466))),cljs.core.hash_map("\uFDD0'line",466))))));
}
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",467)),"class2"),cljs.core.hash_map("\uFDD0'line",467))),cljs.core.hash_map("\uFDD0'line",467))))));
}
}));
domina.test.add_test("can add a CSS class to multiple nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div>1</div><div>2</div>");
domina.add_class_BANG_(domina.xpath.xpath.__1("//div"),"class1");
domina.add_class_BANG_(domina.xpath.xpath.__1("//div"),"class2");
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",474)),"class1"),cljs.core.hash_map("\uFDD0'line",474))),cljs.core.hash_map("\uFDD0'line",474))))));
}
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"),"class1"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",475)),"class1"),cljs.core.hash_map("\uFDD0'line",475))),cljs.core.hash_map("\uFDD0'line",475))))));
}
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",476)),"class2"),cljs.core.hash_map("\uFDD0'line",476))),cljs.core.hash_map("\uFDD0'line",476))))));
}
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",477)),"class2"),cljs.core.hash_map("\uFDD0'line",477))),cljs.core.hash_map("\uFDD0'line",477))))));
}
}));
domina.test.add_test("can remove a CSS class from a single node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='class1 class2'>1</div>");
domina.remove_class_BANG_(domina.xpath.xpath.__1("//div"),"class1");
if((cljs.core._EQ_.__2(false,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"),"class1"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",false,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",483)),"class1"),cljs.core.hash_map("\uFDD0'line",483))),cljs.core.hash_map("\uFDD0'line",483))))));
}
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",484)),"class2"),cljs.core.hash_map("\uFDD0'line",484))),cljs.core.hash_map("\uFDD0'line",484))))));
}
}));
domina.test.add_test("can remove a CSS class from a multiple nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='class1 class2'>1</div><div class='class1 class2'>2</div>");
domina.remove_class_BANG_(domina.xpath.xpath.__1("//div"),"class1");
if((cljs.core._EQ_.__2(false,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",false,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",490)),"class1"),cljs.core.hash_map("\uFDD0'line",490))),cljs.core.hash_map("\uFDD0'line",490))))));
}
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[1]"),cljs.core.hash_map("\uFDD0'line",491)),"class2"),cljs.core.hash_map("\uFDD0'line",491))),cljs.core.hash_map("\uFDD0'line",491))))));
}
if((cljs.core._EQ_.__2(false,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"),"class1"))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",false,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",492)),"class1"),cljs.core.hash_map("\uFDD0'line",492))),cljs.core.hash_map("\uFDD0'line",492))))));
}
if((cljs.core._EQ_.__2(true,domina.has_class_QMARK_(domina.xpath.xpath.__1("//div[2]"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",true,cljs.core.with_meta(cljs.core.list("\uFDD1'has-class?",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div[2]"),cljs.core.hash_map("\uFDD0'line",493)),"class2"),cljs.core.hash_map("\uFDD0'line",493))),cljs.core.hash_map("\uFDD0'line",493))))));
}
}));
domina.test.add_test("can get a list of all css classes for a node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div class='class1 class2 class3'>1</div>");
if((cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray(["class1","class2","class3"]),domina.classes(domina.xpath.xpath.__1("//div")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.vec(["class1","class2","class3"]),cljs.core.with_meta(cljs.core.list("\uFDD1'classes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",498))),cljs.core.hash_map("\uFDD0'line",498))),cljs.core.hash_map("\uFDD0'line",498))))));
}
}));
domina.test.add_test("can retrieve the text value of a node with normalization.",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<p>\n\n   Some text.  \n  </p>");
if((cljs.core._EQ_.__2("Some text.",domina.text.__1(domina.xpath.xpath.__1("//p")))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Some text.",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",503))),cljs.core.hash_map("\uFDD0'line",503))),cljs.core.hash_map("\uFDD0'line",503))))));
}
if((cljs.core._EQ_.__2("Some text.",domina.text.__2(domina.xpath.xpath.__1("//p"),true))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Some text.",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",504)),true),cljs.core.hash_map("\uFDD0'line",504))),cljs.core.hash_map("\uFDD0'line",504))))));
}
}));
domina.test.add_test("can retrieve the text value of a node without normalization.",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<p>\n\n   Some text.  \n  </p>");
if((cljs.core._EQ_.__2("\n\n   Some text.  \n  ",domina.text.__2(domina.xpath.xpath.__1("//p"),false))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","\n\n   Some text.  \n  ",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",510)),false),cljs.core.hash_map("\uFDD0'line",510))),cljs.core.hash_map("\uFDD0'line",510))))));
}
}));
domina.test.add_test("can set text on a single node",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<p></p>");
domina.set_text_BANG_(domina.xpath.xpath.__1("//p"),"Hello world!");
if((cljs.core._EQ_.__2("Hello world!",domina.text.__1(domina.xpath.xpath.__1("//p")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Hello world!",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p"),cljs.core.hash_map("\uFDD0'line",516))),cljs.core.hash_map("\uFDD0'line",516))),cljs.core.hash_map("\uFDD0'line",516))))));
}
}));
domina.test.add_test("can set text on a multiple nodes",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<p></p><p></p>");
domina.set_text_BANG_(domina.xpath.xpath.__1("//p"),"Hello world!");
if((cljs.core._EQ_.__2("Hello world!",domina.text.__1(domina.xpath.xpath.__1("//p[1]")))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Hello world!",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[1]"),cljs.core.hash_map("\uFDD0'line",522))),cljs.core.hash_map("\uFDD0'line",522))),cljs.core.hash_map("\uFDD0'line",522))))));
}
if((cljs.core._EQ_.__2("Hello world!",domina.text.__1(domina.xpath.xpath.__1("//p[2]")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Hello world!",cljs.core.with_meta(cljs.core.list("\uFDD1'text",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//p[2]"),cljs.core.hash_map("\uFDD0'line",523))),cljs.core.hash_map("\uFDD0'line",523))),cljs.core.hash_map("\uFDD0'line",523))))));
}
}));
domina.test.add_test("can get a form field value",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<form><input type='text' name='test' value='Test Value'></input></form>");
if((cljs.core._EQ_.__2("Test Value",domina.value(domina.xpath.xpath.__1("//input")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Test Value",cljs.core.with_meta(cljs.core.list("\uFDD1'value",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//input"),cljs.core.hash_map("\uFDD0'line",528))),cljs.core.hash_map("\uFDD0'line",528))),cljs.core.hash_map("\uFDD0'line",528))))));
}
}));
domina.test.add_test("can set a form field value",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<form><input type='text' name='test'></input></form>");
domina.set_value_BANG_(domina.xpath.xpath.__1("//input"),"Test Value");
if((cljs.core._EQ_.__2("Test Value",domina.value(domina.xpath.xpath.__1("//input")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Test Value",cljs.core.with_meta(cljs.core.list("\uFDD1'value",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//input"),cljs.core.hash_map("\uFDD0'line",534))),cljs.core.hash_map("\uFDD0'line",534))),cljs.core.hash_map("\uFDD0'line",534))))));
}
}));
domina.test.add_test("can set multiple form field values",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<form><input type='text' name='test'></input><input type='text' name='test'></input></form>");
domina.set_value_BANG_(domina.xpath.xpath.__1("//input"),"Test Value");
if((cljs.core._EQ_.__2("Test Value",domina.value(domina.xpath.xpath.__1("//input[1]")))))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Test Value",cljs.core.with_meta(cljs.core.list("\uFDD1'value",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//input[1]"),cljs.core.hash_map("\uFDD0'line",540))),cljs.core.hash_map("\uFDD0'line",540))),cljs.core.hash_map("\uFDD0'line",540))))));
}
if((cljs.core._EQ_.__2("Test Value",domina.value(domina.xpath.xpath.__1("//input[2]")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","Test Value",cljs.core.with_meta(cljs.core.list("\uFDD1'value",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//input[2]"),cljs.core.hash_map("\uFDD0'line",541))),cljs.core.hash_map("\uFDD0'line",541))),cljs.core.hash_map("\uFDD0'line",541))))));
}
}));
domina.test.add_test("can get a node's innerHTML",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><p class='foobar'>some text</p></div>");
if(((function (){var or__3548__auto____8718 = cljs.core._EQ_.__2("<p class=\"foobar\">some text</p>",domina.html(domina.xpath.xpath.__1("//div")));

if((or__3548__auto____8718))
{return or__3548__auto____8718;
} else
{return cljs.core._EQ_.__2("<P class=foobar>some text</P>",domina.html(domina.xpath.xpath.__1("//div")));
}
})()))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'or",cljs.core.with_meta(cljs.core.list("\uFDD1'=","<p class=\"foobar\">some text</p>",cljs.core.with_meta(cljs.core.list("\uFDD1'html",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",547))),cljs.core.hash_map("\uFDD0'line",547))),cljs.core.hash_map("\uFDD0'line",547)),cljs.core.with_meta(cljs.core.list("\uFDD1'=","<P class=foobar>some text</P>",cljs.core.with_meta(cljs.core.list("\uFDD1'html",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//div"),cljs.core.hash_map("\uFDD0'line",548))),cljs.core.hash_map("\uFDD0'line",548))),cljs.core.hash_map("\uFDD0'line",548))),cljs.core.hash_map("\uFDD0'line",547))))));
}
}));
domina.test.add_test("can set a node's innerHTML",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div></div>");
domina.set_html_BANG_(domina.xpath.xpath.__1("//div"),"<p class='foobar'>some text</p>");
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div/p[@class='foobar']"),cljs.core.hash_map("\uFDD0'line",554))),cljs.core.hash_map("\uFDD0'line",554))),cljs.core.hash_map("\uFDD0'line",554))),cljs.core.hash_map("\uFDD0'line",554))))));
}
}));
domina.test.add_test("can set a node's innerHTML to non-string content",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div></div>");
domina.set_html_BANG_(domina.xpath.xpath.__1("//div"),domina.nodes("<p class='foobar'>some text</p>"));
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div/p[@class='foobar']"),cljs.core.hash_map("\uFDD0'line",560))),cljs.core.hash_map("\uFDD0'line",560))),cljs.core.hash_map("\uFDD0'line",560))),cljs.core.hash_map("\uFDD0'line",560))))));
}
}));
domina.test.add_test("can set multiple nodes' innerHTML",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div></div><div></div>");
domina.set_html_BANG_(domina.xpath.xpath.__1("//div"),"<p class='foobar'>some text</p>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div/p[@class='foobar']"),cljs.core.hash_map("\uFDD0'line",566))),cljs.core.hash_map("\uFDD0'line",566))),cljs.core.hash_map("\uFDD0'line",566))),cljs.core.hash_map("\uFDD0'line",566))))));
}
}));
domina.test.add_test("can set multiple nodes' innerHTML to non-string content",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div></div><div></div>");
domina.set_html_BANG_(domina.xpath.xpath.__1("//div"),domina.nodes("<p class='foobar'>some text</p>"));
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div/p[@class='foobar']"),cljs.core.hash_map("\uFDD0'line",572))),cljs.core.hash_map("\uFDD0'line",572))),cljs.core.hash_map("\uFDD0'line",572))),cljs.core.hash_map("\uFDD0'line",572))))));
}
}));
domina.test.add_test("can set a table's innerHTML",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<table></table>");
domina.set_html_BANG_(domina.xpath.xpath.__1("//table"),"<tr class='foobar'><th>some</th><td>text</td></tr>");
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/table/tr[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/table/tr[@class='foobar']"),cljs.core.hash_map("\uFDD0'line",578))),cljs.core.hash_map("\uFDD0'line",578))),cljs.core.hash_map("\uFDD0'line",578))),cljs.core.hash_map("\uFDD0'line",578))))));
}
}));
domina.test.add_test("can set multiple tables' innerHTML",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<table></table><table></table>");
domina.set_html_BANG_(domina.xpath.xpath.__1("//table"),"<tr class='foobar'><th>some</th><td>text</td></tr>");
if((cljs.core._EQ_.__2(2,cljs.core.count(domina.nodes(domina.xpath.xpath.__1("//body/table/tr[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'nodes",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/table/tr[@class='foobar']"),cljs.core.hash_map("\uFDD0'line",584))),cljs.core.hash_map("\uFDD0'line",584))),cljs.core.hash_map("\uFDD0'line",584))),cljs.core.hash_map("\uFDD0'line",584))))));
}
}));
domina.test.add_test("can get nodes from strings containing cell-level table fragments",(function (){
domina.test.reset();
var n__8785 = domina.nodes("<td>Cell</td><th>Header</th>");

if((cljs.core._EQ_.__2(cljs.core.count(n__8785),2)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",589)),2),cljs.core.hash_map("\uFDD0'line",589))))));
}
if((cljs.core._EQ_.__2("TD",cljs.core.first(n__8785).tagName)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","TD",cljs.core.with_meta(cljs.core.list("\uFDD1'.",cljs.core.with_meta(cljs.core.list("\uFDD1'first","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",590)),"\uFDD1'-tagName"),cljs.core.hash_map("\uFDD0'line",590))),cljs.core.hash_map("\uFDD0'line",590))))));
}
if((cljs.core._EQ_.__2("TH",cljs.core.second(n__8785).tagName)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","TH",cljs.core.with_meta(cljs.core.list("\uFDD1'.",cljs.core.with_meta(cljs.core.list("\uFDD1'second","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",591)),"\uFDD1'-tagName"),cljs.core.hash_map("\uFDD0'line",591))),cljs.core.hash_map("\uFDD0'line",591))))));
}
}));
domina.test.add_test("can get nodes from strings containing row-level table fragments",(function (){
domina.test.reset();
var n__8789 = domina.nodes("<tr><td>Cell</td><th>Header</th></tr><tr><td>Another</td><th>Row</th></tr>");

if((cljs.core._EQ_.__2(cljs.core.count(n__8789),2)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",596)),2),cljs.core.hash_map("\uFDD0'line",596))))));
}
if((cljs.core._EQ_.__2("TR",cljs.core.first(n__8789).tagName)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","TR",cljs.core.with_meta(cljs.core.list("\uFDD1'.",cljs.core.with_meta(cljs.core.list("\uFDD1'first","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",597)),"\uFDD1'-tagName"),cljs.core.hash_map("\uFDD0'line",597))),cljs.core.hash_map("\uFDD0'line",597))))));
}
if((cljs.core._EQ_.__2("TR",cljs.core.second(n__8789).tagName)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","TR",cljs.core.with_meta(cljs.core.list("\uFDD1'.",cljs.core.with_meta(cljs.core.list("\uFDD1'second","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",598)),"\uFDD1'-tagName"),cljs.core.hash_map("\uFDD0'line",598))),cljs.core.hash_map("\uFDD0'line",598))))));
}
}));
domina.test.add_test("can get nodes from strings containing section-level table fragments",(function (){
domina.test.reset();
var n__8811 = domina.nodes("<thead><tr><td>Cell</td><th>Header</th></tr></thead><tbody><tr><td>Another</td><th>Row</th></tr></tbody>");

if((cljs.core._EQ_.__2(cljs.core.count(n__8811),2)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.with_meta(cljs.core.list("\uFDD1'count","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",603)),2),cljs.core.hash_map("\uFDD0'line",603))))));
}
if((cljs.core._EQ_.__2("THEAD",cljs.core.first(n__8811).tagName)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","THEAD",cljs.core.with_meta(cljs.core.list("\uFDD1'.",cljs.core.with_meta(cljs.core.list("\uFDD1'first","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",604)),"\uFDD1'-tagName"),cljs.core.hash_map("\uFDD0'line",604))),cljs.core.hash_map("\uFDD0'line",604))))));
}
if((cljs.core._EQ_.__2("TBODY",cljs.core.second(n__8811).tagName)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","TBODY",cljs.core.with_meta(cljs.core.list("\uFDD1'.",cljs.core.with_meta(cljs.core.list("\uFDD1'second","\uFDD1'n"),cljs.core.hash_map("\uFDD0'line",605)),"\uFDD1'-tagName"),cljs.core.hash_map("\uFDD0'line",605))),cljs.core.hash_map("\uFDD0'line",605))))));
}
}));
domina.test.add_test("can add and retrieve a listener",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<button id='mybutton'>Text</button>");
domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'click",(function (e){
return cljs.core.reset_BANG_(domina.test.clicked,true);
}));
if((cljs.core._EQ_.__2(1,cljs.core.count(domina.events.get_listeners(domina.css.sel.__1("#mybutton"),"\uFDD0'click")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.with_meta(cljs.core.list("\uFDD1'count",cljs.core.with_meta(cljs.core.list("\uFDD1'get-listeners",cljs.core.with_meta(cljs.core.list("\uFDD1'sel","#mybutton"),cljs.core.hash_map("\uFDD0'line",615)),"\uFDD0'click"),cljs.core.hash_map("\uFDD0'line",615))),cljs.core.hash_map("\uFDD0'line",615))),cljs.core.hash_map("\uFDD0'line",615))))));
}
}));
/**
* Doesn't use GClosure, to be more realistic
*/
domina.test.simulate_click_event = (function simulate_click_event(el){
var el__8821 = domina.single_node(el);
var document__8822 = window.document;

if(cljs.core.truth_(el__8821.click))
{return el__8821.click();
} else
{if(cljs.core.truth_(document__8822.createEvent))
{var e__8824 = document__8822.createEvent("MouseEvents");

e__8824.initMouseEvent("click",true,true,window,0,0,0,0,0,false,false,false,false,0,null);
return el__8821.dispatchEvent(e__8824);
} else
{if(("\uFDD0'default"))
{throw "Unable to simulate click event";
} else
{return null;
}
}
}
});
domina.test.add_test("can listen for a browser event",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<button id='mybutton'>Text</button>");
var clicked__8830 = cljs.core.atom.__1(false);

domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'click",(function (e){
return cljs.core.reset_BANG_(clicked__8830,true);
}));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if(cljs.core.truth_(cljs.core.deref(clicked__8830)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")))));
}
}));
domina.test.add_test("can extract string keys from an event using keyword accessors",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<button id='mybutton'>Text</button>");
var coords__8832 = cljs.core.atom.__1(null);

domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'foobar",(function (e){
return cljs.core.reset_BANG_(coords__8832,cljs.core.PersistentVector.fromArray(["\uFDD0'clientX".call(null,e),"\uFDD0'clientY".call(null,e)]));
}));
domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'foobar",cljs.core.ObjMap.fromObject(["clientX","clientY"],{"clientX":42,"clientY":42}));
if((cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray([42,42]),cljs.core.deref(coords__8832))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.vec([42,42]),cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'coords")),cljs.core.hash_map("\uFDD0'line",652))))));
}
}));
domina.test.add_test("can dispatch an event, execute default action is true",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<button id='mybutton'>Text</button>");
var clicked__8835 = cljs.core.atom.__1(false);

domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'click",(function (e){
return cljs.core.reset_BANG_(clicked__8835,true);
}));
var default$__8837 = domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"),"click",cljs.core.ObjMap.fromObject([],{}));

if(cljs.core.truth_(cljs.core.deref(clicked__8835)))
{} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")))));
}
if(cljs.core.truth_(default$__8837))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str("\uFDD1'default"))));
}
}));
domina.test.add_test("can prevent the default action on an event",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<button id='mybutton'>Text</button>");
domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'click",(function (e){
return domina.events.prevent_default(e);
}));
if((cljs.core.not(domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"),"click",cljs.core.ObjMap.fromObject([],{})))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'not",cljs.core.with_meta(cljs.core.list("\uFDD1'dispatch!",cljs.core.with_meta(cljs.core.list("\uFDD1'sel","#mybutton"),cljs.core.hash_map("\uFDD0'line",672)),"click",cljs.core.hash_map()),cljs.core.hash_map("\uFDD0'line",672))),cljs.core.hash_map("\uFDD0'line",672))))));
}
}));
domina.test.add_test("capture and bubble listeners are triggered in the correct order.",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var clicked__8883 = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([]));

domina.events.listen_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'click",(function (){
return cljs.core.swap_BANG_.__3(clicked__8883,cljs.core.conj,"\uFDD0'listened");
}));
domina.events.capture_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'click",(function (){
return cljs.core.swap_BANG_.__3(clicked__8883,cljs.core.conj,"\uFDD0'captured");
}));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if((cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray(["\uFDD0'captured","\uFDD0'listened"]),cljs.core.deref(clicked__8883))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.vec(["\uFDD0'captured","\uFDD0'listened"]),cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")),cljs.core.hash_map("\uFDD0'line",683))))));
}
}));
domina.test.add_test("current-target is correct when capturing custom events",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var actual_elements__8900 = cljs.core.atom.__1(cljs.core.PersistentVector.fromArray([]));
var body__8902 = domina.single_node(domina.css.sel.__1("body"));
var button__8903 = domina.single_node(domina.css.sel.__1("button"));

domina.events.listen_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'foobar",(function (p1__8880_SHARP_){
return cljs.core.swap_BANG_.__3(actual_elements__8900,cljs.core.conj,domina.events.current_target(p1__8880_SHARP_));
}));
domina.events.listen_BANG_.__3(domina.css.sel.__1("button"),"\uFDD0'foobar",(function (p1__8882_SHARP_){
return cljs.core.swap_BANG_.__3(actual_elements__8900,cljs.core.conj,domina.events.current_target(p1__8882_SHARP_));
}));
domina.events.dispatch_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'foobar",cljs.core.ObjMap.fromObject(["\uFDD0'some"],{"\uFDD0'some":"data"}));
if((cljs.core._EQ_.__2(cljs.core.PersistentVector.fromArray([button__8903,body__8902]),cljs.core.deref(actual_elements__8900))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",cljs.core.vec(["\uFDD1'button","\uFDD1'body"]),cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'actual-elements")),cljs.core.hash_map("\uFDD0'line",698))))));
}
}));
domina.test.add_test("can stop event propagation in the capture phase.",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var clicked__8907 = cljs.core.atom.__1(false);

domina.events.capture_BANG_.__3(domina.css.sel.__1("div"),"\uFDD0'click",(function (p1__8899_SHARP_){
return domina.events.stop_propagation(p1__8899_SHARP_);
}));
domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'click",(function (){
return cljs.core.reset_BANG_(clicked__8907,true);
}));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if((cljs.core.not(cljs.core.deref(clicked__8907))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'not",cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")),cljs.core.hash_map("\uFDD0'line",709))))));
}
}));
domina.test.add_test("can stop event propagation in the bubble phase.",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var clicked__8921 = cljs.core.atom.__1(false);

domina.events.listen_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'click",(function (e){
return cljs.core.reset_BANG_(clicked__8921,true);
}));
domina.events.listen_BANG_.__3(domina.css.sel.__1("#mybutton"),"\uFDD0'click",(function (e){
return domina.events.stop_propagation(e);
}));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if((cljs.core.not(cljs.core.deref(clicked__8921))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'not",cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")),cljs.core.hash_map("\uFDD0'line",722))))));
}
}));
domina.test.add_test("listen-once triggers only once",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var clicked__8942 = cljs.core.atom.__1(0);

domina.events.listen_once_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'click",(function (){
return cljs.core.swap_BANG_.__2(clicked__8942,cljs.core.inc);
}));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if((cljs.core._EQ_.__2(1,cljs.core.deref(clicked__8942))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")),cljs.core.hash_map("\uFDD0'line",733))))));
}
}));
domina.test.add_test("listen-once triggers only once",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var clicked__8947 = cljs.core.atom.__1(0);

domina.events.listen_once_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'click",(function (){
return cljs.core.swap_BANG_.__2(clicked__8947,cljs.core.inc);
}));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if((cljs.core._EQ_.__2(1,cljs.core.deref(clicked__8947))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")),cljs.core.hash_map("\uFDD0'line",744))))));
}
}));
domina.test.add_test("can unlisten generically",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var clicked__8973 = cljs.core.atom.__1(0);

domina.events.listen_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'click",(function (){
return cljs.core.swap_BANG_.__2(clicked__8973,cljs.core.inc);
}));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
domina.events.unlisten_BANG_.__1(domina.css.sel.__1("body"));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if((cljs.core._EQ_.__2(1,cljs.core.deref(clicked__8973))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")),cljs.core.hash_map("\uFDD0'line",756))))));
}
}));
domina.test.add_test("can unlisten narrowed by type",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var clicked__8995 = cljs.core.atom.__1(0);

domina.events.listen_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'click",(function (){
return cljs.core.swap_BANG_.__2(clicked__8995,cljs.core.inc);
}));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
domina.events.unlisten_BANG_.__2(domina.css.sel.__1("body"),"\uFDD0'foobar");
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
domina.events.unlisten_BANG_.__2(domina.css.sel.__1("body"),"\uFDD0'click");
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if((cljs.core._EQ_.__2(2,cljs.core.deref(clicked__8995))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",2,cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")),cljs.core.hash_map("\uFDD0'line",770))))));
}
}));
domina.test.add_test("can unlisten by key",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div><button id='mybutton'>Text</button></div>");
var clicked__8997 = cljs.core.atom.__1(0);
var keys__8998 = domina.events.listen_BANG_.__3(domina.css.sel.__1("body"),"\uFDD0'click",(function (){
return cljs.core.swap_BANG_.__2(clicked__8997,cljs.core.inc);
}));

domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
domina.events.unlisten_by_key_BANG_(cljs.core.first(keys__8998));
domina.test.simulate_click_event(domina.css.sel.__1("#mybutton"));
if((cljs.core._EQ_.__2(1,cljs.core.deref(clicked__8997))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=",1,cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'clicked")),cljs.core.hash_map("\uFDD0'line",782))))));
}
}));
domina.test.add_test("can send and listen for custom events with custom data",(function (){
domina.test.reset();
var worked__9000 = cljs.core.atom.__1(false);

domina.events.listen_BANG_.__2("\uFDD0'foobar",(function (evt){
if((cljs.core._EQ_.__2("data","\uFDD0'some".call(null,evt))))
{return cljs.core.reset_BANG_(worked__9000,true);
} else
{return null;
}
}));
domina.events.dispatch_BANG_.__2("\uFDD0'foobar",cljs.core.ObjMap.fromObject(["\uFDD0'some"],{"\uFDD0'some":"data"}));
if(cljs.core.truth_(cljs.core.deref(worked__9000)))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.list("\uFDD1'clojure.core/deref","\uFDD1'worked")))));
}
}));
domina.test.add_test("doesn't clone unless necessary",(function (){
domina.test.reset();
var child__9003 = domina.single_node("<div>hello</div>");

domina.append_BANG_(domina.xpath.xpath.__1("//body"),child__9003);
if((cljs.core._EQ_.__2(child__9003,domina.single_node(domina.xpath.xpath.__1("//body/div")))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","\uFDD1'child",cljs.core.with_meta(cljs.core.list("\uFDD1'single-node",cljs.core.with_meta(cljs.core.list("\uFDD1'xpath","//body/div"),cljs.core.hash_map("\uFDD0'line",799))),cljs.core.hash_map("\uFDD0'line",799))),cljs.core.hash_map("\uFDD0'line",799))))));
}
}));
domina.test.add_test("test that data works",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div id='testingdata'>hello</div>");
var data__9027 = cljs.core.ObjMap.fromObject(["\uFDD0'some"],{"\uFDD0'some":"complex data"});

domina.set_data_BANG_(domina.by_id("testingdata"),"\uFDD0'my-impeccable-data",data__9027);
if((cljs.core._EQ_.__2(data__9027,domina.get_data.__2(domina.by_id("testingdata"),"\uFDD0'my-impeccable-data"))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","\uFDD1'data",cljs.core.with_meta(cljs.core.list("\uFDD1'get-data",cljs.core.with_meta(cljs.core.list("\uFDD1'by-id","testingdata"),cljs.core.hash_map("\uFDD0'line",807)),"\uFDD0'my-impeccable-data"),cljs.core.hash_map("\uFDD0'line",807))),cljs.core.hash_map("\uFDD0'line",807))))));
}
}));
domina.test.add_test("test that data works with bubbling",(function (){
domina.test.reset();
domina.append_BANG_(domina.xpath.xpath.__1("//body"),"<div id='outerdata'><div id='innerdata'>hello</div></div>");
var data__9033 = cljs.core.ObjMap.fromObject(["\uFDD0'some"],{"\uFDD0'some":"complex data"});

domina.set_data_BANG_(domina.by_id("outerdata"),"\uFDD0'my-impeccable-data",data__9033);
if((cljs.core._EQ_.__2(data__9033,domina.get_data.__3(domina.by_id("innerdata"),"\uFDD0'my-impeccable-data",true))))
{return null;
} else
{throw (new Error(cljs.core.str("Assert failed: ",cljs.core.pr_str(cljs.core.with_meta(cljs.core.list("\uFDD1'=","\uFDD1'data",cljs.core.with_meta(cljs.core.list("\uFDD1'get-data",cljs.core.with_meta(cljs.core.list("\uFDD1'by-id","innerdata"),cljs.core.hash_map("\uFDD0'line",816)),"\uFDD0'my-impeccable-data",true),cljs.core.hash_map("\uFDD0'line",816))),cljs.core.hash_map("\uFDD0'line",816))))));
}
}));
domina.test.report = (function report(test_results){
domina.test.reset();
var G__9035__9036 = cljs.core.seq(test_results);

if(cljs.core.truth_(G__9035__9036))
{var G__9038__9040 = cljs.core.first(G__9035__9036);
var vec__9039__9041 = G__9038__9040;
var name__9042 = cljs.core.nth.__3(vec__9039__9041,0,null);
var result__9043 = cljs.core.nth.__3(vec__9039__9041,1,null);
var G__9035__9044 = G__9035__9036;

var G__9038__9045 = G__9038__9040;
var G__9035__9046 = G__9035__9044;

while(true){
var vec__9047__9048 = G__9038__9045;
var name__9049 = cljs.core.nth.__3(vec__9047__9048,0,null);
var result__9050 = cljs.core.nth.__3(vec__9047__9048,1,null);
var G__9035__9051 = G__9035__9046;

var result_div__9052 = domina.single_node("<div class='test-result'></div>");

domina.set_text_BANG_(result_div__9052,name__9049);
if((cljs.core.not(cljs.core._EQ_.__2(result__9050,null))))
{domina.add_class_BANG_(result_div__9052,"failed");
domina.append_BANG_(result_div__9052,cljs.core.str("<div class='message'>",result__9050,"</div>"));
} else
{domina.add_class_BANG_(result_div__9052,"passed");
}
domina.append_BANG_(domina.xpath.xpath.__1("//body"),result_div__9052);
var temp__3698__auto____9053 = cljs.core.next(G__9035__9051);

if(cljs.core.truth_(temp__3698__auto____9053))
{var G__9035__9054 = temp__3698__auto____9053;

{
var G__9059 = cljs.core.first(G__9035__9054);
var G__9060 = G__9035__9054;
G__9038__9045 = G__9059;
G__9035__9046 = G__9060;
continue;
}
} else
{}
break;
}
} else
{}
domina.prepend_BANG_(domina.xpath.xpath.__1("//body"),"<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures");
domina.set_text_BANG_(domina.by_id("total-tests"),cljs.core.count(test_results));
var failure_count__9055 = cljs.core.count(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.__2(cljs.core.second,test_results)));

domina.set_text_BANG_(domina.by_id("total-failures"),failure_count__9055);
if((cljs.core._EQ_.__2(0,failure_count__9055)))
{return domina.add_class_BANG_(domina.by_id("test-summary"),"passed");
} else
{return domina.add_class_BANG_(domina.by_id("test-summary"),"failed");
}
});
domina.test.test_results = cljs.core.doall.__1(domina.test.run_tests());
domina.test.report(domina.test.test_results);
