goog.provide('domina.test');
goog.require('cljs.core');
goog.require('domina.xpath');
goog.require('domina.css');
goog.require('domina.events');
goog.require('domina');
goog.require('goog.events');

  window['tryfn'] = function(f) {
    try {
      return f.call();
    } catch (e) {
      return e;
    }
  };;
domina.test.tests = cljs.core.atom.call(null,cljs.core.Vector.fromArray([]));
domina.test.add_test = (function add_test(name,testfn){
return cljs.core.swap_BANG_.call(null,domina.test.tests,cljs.core.conj,cljs.core.Vector.fromArray([name,testfn]));
});
domina.test.run_test = (function run_test(testfn){
return tryfn.call(null,testfn);
});
domina.test.run_tests = (function run_tests(){
return cljs.core.map.call(null,(function (p__6598){
var vec__6599__6600 = p__6598;
var name__6601 = cljs.core.nth.call(null,vec__6599__6600,0,null);
var testfn__6602 = cljs.core.nth.call(null,vec__6599__6600,1,null);

return cljs.core.Vector.fromArray([name__6601,domina.test.run_test.call(null,testfn__6602)]);
}),cljs.core.deref.call(null,domina.test.tests));
});
/**
* resets the page
*/
domina.test.reset = (function reset(){
return domina.destroy_BANG_.call(null,domina.xpath.xpath.call(null,"//body/*"));
});
/**
* Standard fixture html
*/
domina.test.standard_fixture = (function standard_fixture(){
return domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>\n<p id='id1' class='p3'>P3</p>");
});
domina.test.add_test.call(null,"basic CSS selection",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.css.sel.call(null,"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'sel","p"),cljs.core.hash_map("﷐'line",56))),cljs.core.hash_map("﷐'line",56))),cljs.core.hash_map("﷐'line",56))),cljs.core.hash_map("﷐'line",56))))));
}
}));
domina.test.add_test.call(null,"basic CSS selection (single node)",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Element,domina.single_node.call(null,domina.css.sel.call(null,"p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'instance?","﷑'js/Element",cljs.core.with_meta(cljs.core.list("﷑'single-node",cljs.core.with_meta(cljs.core.list("﷑'sel","p"),cljs.core.hash_map("﷐'line",61))),cljs.core.hash_map("﷐'line",61))),cljs.core.hash_map("﷐'line",61))))));
}
}));
domina.test.add_test.call(null,"CSS selection with class specification",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.css.sel.call(null,".d1"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'sel",".d1"),cljs.core.hash_map("﷐'line",66))),cljs.core.hash_map("﷐'line",66))),cljs.core.hash_map("﷐'line",66))),cljs.core.hash_map("﷐'line",66))))));
}
}));
domina.test.add_test.call(null,"a relative CSS selector",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.css.sel.call(null,domina.css.sel.call(null,".d1"),"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'->",cljs.core.with_meta(cljs.core.list("﷑'sel",".d1"),cljs.core.hash_map("﷐'line",71)),cljs.core.with_meta(cljs.core.list("﷑'sel","p"),cljs.core.hash_map("﷐'line",72))),cljs.core.hash_map("﷐'line",71))),cljs.core.hash_map("﷐'line",71))),cljs.core.hash_map("﷐'line",71))),cljs.core.hash_map("﷐'line",71))))));
}
}));
domina.test.add_test.call(null,"extended CSS chaining",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.css.sel.call(null,"body"),"<div><p><span>some text</span></p><p><span>more text</span></p></div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.css.sel.call(null,domina.css.sel.call(null,domina.css.sel.call(null,domina.css.sel.call(null,"body"),"div"),"p"),"span"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'->",cljs.core.with_meta(cljs.core.list("﷑'sel","body"),cljs.core.hash_map("﷐'line",78)),cljs.core.with_meta(cljs.core.list("﷑'sel","div"),cljs.core.hash_map("﷐'line",79)),cljs.core.with_meta(cljs.core.list("﷑'sel","p"),cljs.core.hash_map("﷐'line",80)),cljs.core.with_meta(cljs.core.list("﷑'sel","span"),cljs.core.hash_map("﷐'line",81))),cljs.core.hash_map("﷐'line",78))),cljs.core.hash_map("﷐'line",78))),cljs.core.hash_map("﷐'line",78))),cljs.core.hash_map("﷐'line",78))))));
}
}));
domina.test.add_test.call(null,"basic xpath selection",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",88))),cljs.core.hash_map("﷐'line",88))),cljs.core.hash_map("﷐'line",88))),cljs.core.hash_map("﷐'line",88))))));
}
}));
domina.test.add_test.call(null,"basic xpath selection (single node)",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Element,domina.single_node.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'instance?","﷑'js/Element",cljs.core.with_meta(cljs.core.list("﷑'single-node",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",93))),cljs.core.hash_map("﷐'line",93))),cljs.core.hash_map("﷐'line",93))))));
}
}));
domina.test.add_test.call(null,"xpath selection with class specification",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']"),cljs.core.hash_map("﷐'line",98))),cljs.core.hash_map("﷐'line",98))),cljs.core.hash_map("﷐'line",98))),cljs.core.hash_map("﷐'line",98))))));
}
}));
domina.test.add_test.call(null,"a relative xpath expression",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,"//body/div[@class='d1']"),"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'->",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div[@class='d1']"),cljs.core.hash_map("﷐'line",103)),cljs.core.with_meta(cljs.core.list("﷑'xpath","p"),cljs.core.hash_map("﷐'line",104))),cljs.core.hash_map("﷐'line",103))),cljs.core.hash_map("﷐'line",103))),cljs.core.hash_map("﷐'line",103))),cljs.core.hash_map("﷐'line",103))))));
}
}));
domina.test.add_test.call(null,"extended selection chaining",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p><span>some text</span></p><p><span>more text</span></p></div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,domina.xpath.xpath.call(null,"//body"),"div"),"p"),"span"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'->",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body"),cljs.core.hash_map("﷐'line",110)),cljs.core.with_meta(cljs.core.list("﷑'xpath","div"),cljs.core.hash_map("﷐'line",111)),cljs.core.with_meta(cljs.core.list("﷑'xpath","p"),cljs.core.hash_map("﷐'line",112)),cljs.core.with_meta(cljs.core.list("﷑'xpath","span"),cljs.core.hash_map("﷐'line",113))),cljs.core.hash_map("﷐'line",110))),cljs.core.hash_map("﷐'line",110))),cljs.core.hash_map("﷐'line",110))),cljs.core.hash_map("﷐'line",110))))));
}
}));
domina.test.add_test.call(null,"advanced xpath",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[following-sibling::p[@class='p3']]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[following-sibling::p[@class='p3']]"),cljs.core.hash_map("﷐'line",117))),cljs.core.hash_map("﷐'line",117))),cljs.core.hash_map("﷐'line",117))),cljs.core.hash_map("﷐'line",117))))));
}
}));
domina.test.add_test.call(null,"look up node by id",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.by_id.call(null,"id1"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'by-id","id1"),cljs.core.hash_map("﷐'line",122))),cljs.core.hash_map("﷐'line",122))),cljs.core.hash_map("﷐'line",122))),cljs.core.hash_map("﷐'line",122))))));
}
}));
domina.test.add_test.call(null,"look up nodes by class",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.by_class.call(null,"p3"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'by-class","p3"),cljs.core.hash_map("﷐'line",127))),cljs.core.hash_map("﷐'line",127))),cljs.core.hash_map("﷐'line",127))),cljs.core.hash_map("﷐'line",127))))));
}
}));
domina.test.add_test.call(null,"child selection",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.children.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'children",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']"),cljs.core.hash_map("﷐'line",132))),cljs.core.hash_map("﷐'line",132))),cljs.core.hash_map("﷐'line",132))),cljs.core.hash_map("﷐'line",132))))));
}
}));
domina.test.add_test.call(null,"clone a single node",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.clone.call(null,domina.single_node.call(null,domina.xpath.xpath.call(null,"//p")))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'clone",cljs.core.with_meta(cljs.core.list("﷑'single-node",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",137))),cljs.core.hash_map("﷐'line",137))),cljs.core.hash_map("﷐'line",137))),cljs.core.hash_map("﷐'line",137))),cljs.core.hash_map("﷐'line",137))))));
}
}));
domina.test.add_test.call(null,"clone multiple nodes",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.clone.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p")))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'clone",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",142))),cljs.core.hash_map("﷐'line",142))),cljs.core.hash_map("﷐'line",142))),cljs.core.hash_map("﷐'line",142))),cljs.core.hash_map("﷐'line",142))))));
}
}));
domina.test.add_test.call(null,"append a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended1'>test</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("﷐'line",148))),cljs.core.hash_map("﷐'line",148))),cljs.core.hash_map("﷐'line",148))),cljs.core.hash_map("﷐'line",148))))));
}
}));
domina.test.add_test.call(null,"append multiple children to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("﷐'line",154))),cljs.core.hash_map("﷐'line",154))),cljs.core.hash_map("﷐'line",154))),cljs.core.hash_map("﷐'line",154))))));
}
}));
domina.test.add_test.call(null,"append a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body/div/p"),"<span>!!</span>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div/p/span"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div/p/span"),cljs.core.hash_map("﷐'line",161))),cljs.core.hash_map("﷐'line",161))),cljs.core.hash_map("﷐'line",161))),cljs.core.hash_map("﷐'line",161))))));
}
}));
domina.test.add_test.call(null,"append multiple children to multiple parents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body/div/p"),"some <span class='foo'>more</span> text");
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div/p/span[@class='foo']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div/p/span[@class='foo']"),cljs.core.hash_map("﷐'line",168))),cljs.core.hash_map("﷐'line",168))),cljs.core.hash_map("﷐'line",168))),cljs.core.hash_map("﷐'line",168))))));
}
}));
domina.test.add_test.call(null,"prepend a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>2</div><div>3</div>");
domina.prepend_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"1",domina.text.call(null,domina.xpath.xpath.call(null,"//body/div[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","1",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div[1]"),cljs.core.hash_map("﷐'line",174))),cljs.core.hash_map("﷐'line",174))),cljs.core.hash_map("﷐'line",174))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"2",domina.text.call(null,domina.xpath.xpath.call(null,"//body/div[2]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","2",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div[2]"),cljs.core.hash_map("﷐'line",175))),cljs.core.hash_map("﷐'line",175))),cljs.core.hash_map("﷐'line",175))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"3",domina.text.call(null,domina.xpath.xpath.call(null,"//body/div[3]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","3",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div[3]"),cljs.core.hash_map("﷐'line",176))),cljs.core.hash_map("﷐'line",176))),cljs.core.hash_map("﷐'line",176))))));
}
}));
domina.test.add_test.call(null,"prepend a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p>2</p></div><div><p>2</p></div>");
domina.prepend_BANG_.call(null,domina.xpath.xpath.call(null,"//body/div"),"<p>1</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/div/p[text()='2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div/p[text()='2']"),cljs.core.hash_map("﷐'line",182))),cljs.core.hash_map("﷐'line",182))),cljs.core.hash_map("﷐'line",182))),cljs.core.hash_map("﷐'line",182))))));
}
}));
domina.test.add_test.call(null,"Insert a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='testInserts'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i1'></p>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i3'></p>");
domina.insert_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i2'></p>",1);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']/p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='testInserts']/p"),cljs.core.hash_map("﷐'line",194))),cljs.core.hash_map("﷐'line",194))),cljs.core.hash_map("﷐'line",194))),cljs.core.hash_map("﷐'line",194))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='i2']/preceding-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='i2']/preceding-sibling::*"),cljs.core.hash_map("﷐'line",195))),cljs.core.hash_map("﷐'line",195))),cljs.core.hash_map("﷐'line",195))),cljs.core.hash_map("﷐'line",195))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='i2']/following-sibling::*"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='i2']/following-sibling::*"),cljs.core.hash_map("﷐'line",196))),cljs.core.hash_map("﷐'line",196))),cljs.core.hash_map("﷐'line",196))),cljs.core.hash_map("﷐'line",196))))));
}
}));
domina.test.add_test.call(null,"Insert a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='testInserts' id='testInsert1'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='testInserts' id='testInsert2'></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i1'></p>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i3'></p>");
domina.insert_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='testInserts']"),"<p class='i2'></p>",1);
var G__6741__6742 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([domina.xpath.xpath.call(null,"//div[@id='testInsert1']"),domina.xpath.xpath.call(null,"//div[@id='testInsert2']")]));

if(cljs.core.truth_(G__6741__6742))
{var children__6743 = cljs.core.first.call(null,G__6741__6742);
var G__6741__6744 = G__6741__6742;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,children__6743,"p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","﷑'children","p"),cljs.core.hash_map("﷐'line",212))),cljs.core.hash_map("﷐'line",212))),cljs.core.hash_map("﷐'line",212))),cljs.core.hash_map("﷐'line",212))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,children__6743,"p[@class='i2']/preceding-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","﷑'children","p[@class='i2']/preceding-sibling::*"),cljs.core.hash_map("﷐'line",213))),cljs.core.hash_map("﷐'line",213))),cljs.core.hash_map("﷐'line",213))),cljs.core.hash_map("﷐'line",213))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,children__6743,"p[@class='i2']/following-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","﷑'children","p[@class='i2']/following-sibling::*"),cljs.core.hash_map("﷐'line",215))),cljs.core.hash_map("﷐'line",215))),cljs.core.hash_map("﷐'line",215))),cljs.core.hash_map("﷐'line",215))))));
}
var temp__3698__auto____6745 = cljs.core.next.call(null,G__6741__6744);

if(cljs.core.truth_(temp__3698__auto____6745))
{var G__6741__6747 = temp__3698__auto____6745;

{
var G__6761 = cljs.core.first.call(null,G__6741__6747);
var G__6762 = G__6741__6747;
children__6743 = G__6761;
G__6741__6744 = G__6762;
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
domina.test.add_test.call(null,"destroy a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended1'>app1</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("﷐'line",221))),cljs.core.hash_map("﷐'line",221))),cljs.core.hash_map("﷐'line",221))),cljs.core.hash_map("﷐'line",221))))));
}
domina.destroy_BANG_.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended1']"),cljs.core.hash_map("﷐'line",223))),cljs.core.hash_map("﷐'line",223))),cljs.core.hash_map("﷐'line",223))),cljs.core.hash_map("﷐'line",223))))));
}
}));
domina.test.add_test.call(null,"destroy multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p class='appended2'>app1</p><p class='appended2'>app2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("﷐'line",229))),cljs.core.hash_map("﷐'line",229))),cljs.core.hash_map("﷐'line",229))),cljs.core.hash_map("﷐'line",229))))));
}
domina.destroy_BANG_.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/p[@class='appended2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/p[@class='appended2']"),cljs.core.hash_map("﷐'line",231))),cljs.core.hash_map("﷐'line",231))),cljs.core.hash_map("﷐'line",231))),cljs.core.hash_map("﷐'line",231))))));
}
}));
domina.test.add_test.call(null,"detach and reattach a single node",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
var n__6777 = domina.detach_BANG_.call(null,domina.xpath.xpath.call(null,"//p[@class='p3']"));

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='p3']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='p3']"),cljs.core.hash_map("﷐'line",237))),cljs.core.hash_map("﷐'line",237))),cljs.core.hash_map("﷐'line",237))),cljs.core.hash_map("﷐'line",237))))));
}
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"),n__6777);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='p3']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='p3']"),cljs.core.hash_map("﷐'line",239))),cljs.core.hash_map("﷐'line",239))),cljs.core.hash_map("﷐'line",239))),cljs.core.hash_map("﷐'line",239))))));
}
}));
domina.test.add_test.call(null,"detach and reattach multiple nodes",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
var n__6784 = domina.detach_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']/p"));

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']/p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']/p"),cljs.core.hash_map("﷐'line",245))),cljs.core.hash_map("﷐'line",245))),cljs.core.hash_map("﷐'line",245))),cljs.core.hash_map("﷐'line",245))))));
}
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"),n__6784);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']/p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",3,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']/p"),cljs.core.hash_map("﷐'line",247))),cljs.core.hash_map("﷐'line",247))),cljs.core.hash_map("﷐'line",247))),cljs.core.hash_map("﷐'line",247))))));
}
}));
domina.test.add_test.call(null,"clear a node's contents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.destroy_children_BANG_.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']"),cljs.core.hash_map("﷐'line",253))),cljs.core.hash_map("﷐'line",253))),cljs.core.hash_map("﷐'line",253))),cljs.core.hash_map("﷐'line",253))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@class='d1']/*"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@class='d1']/*"),cljs.core.hash_map("﷐'line",254))),cljs.core.hash_map("﷐'line",254))),cljs.core.hash_map("﷐'line",254))),cljs.core.hash_map("﷐'line",254))))));
}
}));
domina.test.add_test.call(null,"insert-before! with a single reference and single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>before</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before']"),cljs.core.hash_map("﷐'line",260))),cljs.core.hash_map("﷐'line",260))),cljs.core.hash_map("﷐'line",260))),cljs.core.hash_map("﷐'line",260))))));
}
}));
domina.test.add_test.call(null,"insert-before! with a single reference and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>before1</p><p>before2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"),cljs.core.hash_map("﷐'line",266))),cljs.core.hash_map("﷐'line",266))),cljs.core.hash_map("﷐'line",266))),cljs.core.hash_map("﷐'line",266))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"),cljs.core.hash_map("﷐'line",267))),cljs.core.hash_map("﷐'line",267))),cljs.core.hash_map("﷐'line",267))),cljs.core.hash_map("﷐'line",267))))));
}
}));
domina.test.add_test.call(null,"insert-before! with multiple reference nodes and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='ref' id='ref1'>content1</div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='ref' id='ref2'>content2</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_class.call(null,"ref")),"<p>before</p>");
var num_refs__6821 = cljs.core.count.call(null,domina.nodes.call(null,domina.by_class.call(null,"ref")));
var num_ps__6822 = cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p")));

alert('refs: num_refs__6821');
alert('refs: num_ps__6822');
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",278))),cljs.core.hash_map("﷐'line",278))),cljs.core.hash_map("﷐'line",278))),cljs.core.hash_map("﷐'line",278))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref1']/preceding-sibling::p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref1']/preceding-sibling::p"),cljs.core.hash_map("﷐'line",279))),cljs.core.hash_map("﷐'line",279))),cljs.core.hash_map("﷐'line",279))),cljs.core.hash_map("﷐'line",279))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref2']/preceding-sibling::p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref2']/preceding-sibling::p"),cljs.core.hash_map("﷐'line",280))),cljs.core.hash_map("﷐'line",280))),cljs.core.hash_map("﷐'line",280))),cljs.core.hash_map("﷐'line",280))))));
}
}));
domina.test.add_test.call(null,"insert-after! with a single reference and single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>after</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after']"),cljs.core.hash_map("﷐'line",287))),cljs.core.hash_map("﷐'line",287))),cljs.core.hash_map("﷐'line",287))),cljs.core.hash_map("﷐'line",287))))));
}
}));
domina.test.add_test.call(null,"insert-after! with a single reference and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>after1</p><p>after2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"),cljs.core.hash_map("﷐'line",293))),cljs.core.hash_map("﷐'line",293))),cljs.core.hash_map("﷐'line",293))),cljs.core.hash_map("﷐'line",293))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"),cljs.core.hash_map("﷐'line",294))),cljs.core.hash_map("﷐'line",294))),cljs.core.hash_map("﷐'line",294))),cljs.core.hash_map("﷐'line",294))))));
}
}));
domina.test.add_test.call(null,"insert-after! with multiple reference nodes and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='ref' id='ref1'>content1</div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='ref' id='ref2'>content2</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_class.call(null,"ref")),"<p>after</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",301))),cljs.core.hash_map("﷐'line",301))),cljs.core.hash_map("﷐'line",301))),cljs.core.hash_map("﷐'line",301))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref1']/following-sibling::p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref1']/following-sibling::p"),cljs.core.hash_map("﷐'line",302))),cljs.core.hash_map("﷐'line",302))),cljs.core.hash_map("﷐'line",302))),cljs.core.hash_map("﷐'line",302))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//div[@id='ref2']/following-sibling::p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[@id='ref2']/following-sibling::p"),cljs.core.hash_map("﷐'line",303))),cljs.core.hash_map("﷐'line",303))),cljs.core.hash_map("﷐'line",303))),cljs.core.hash_map("﷐'line",303))))));
}
}));
domina.test.add_test.call(null,"swap-content! with a single reference node and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p id='before'>TYPO</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.xpath.call(null,"//p[@id='before']"),"<p id='after'>fixed</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@id='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@id='before']"),cljs.core.hash_map("﷐'line",309))),cljs.core.hash_map("﷐'line",309))),cljs.core.hash_map("﷐'line",309))),cljs.core.hash_map("﷐'line",309))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@id='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@id='after']"),cljs.core.hash_map("﷐'line",310))),cljs.core.hash_map("﷐'line",310))),cljs.core.hash_map("﷐'line",310))),cljs.core.hash_map("﷐'line",310))))));
}
}));
domina.test.add_test.call(null,"swap-content! with a single reference node and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p id='before'>TYPO</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.xpath.call(null,"//p[@id='before']"),"<p class='after'>fixed1</p><p class='after'>fixed2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@id='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@id='before']"),cljs.core.hash_map("﷐'line",316))),cljs.core.hash_map("﷐'line",316))),cljs.core.hash_map("﷐'line",316))),cljs.core.hash_map("﷐'line",316))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='after']"),cljs.core.hash_map("﷐'line",317))),cljs.core.hash_map("﷐'line",317))),cljs.core.hash_map("﷐'line",317))),cljs.core.hash_map("﷐'line",317))))));
}
}));
domina.test.add_test.call(null,"swap-content! with multiple reference nodes and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p class='before'>TYPO-1</p></div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p class='before'>TYPO-2</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.xpath.call(null,"//p[@class='before']"),"<p class='after'>fixed1</p><p class='after'>fixed2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",0,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='before']"),cljs.core.hash_map("﷐'line",324))),cljs.core.hash_map("﷐'line",324))),cljs.core.hash_map("﷐'line",324))),cljs.core.hash_map("﷐'line",324))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//p[@class='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",4,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[@class='after']"),cljs.core.hash_map("﷐'line",325))),cljs.core.hash_map("﷐'line",325))),cljs.core.hash_map("﷐'line",325))),cljs.core.hash_map("﷐'line",325))))));
}
}));
domina.test.add_test.call(null,"can retrieve a css property value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div style=\"background-color: maroon;\">Test</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"maroon",domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","maroon",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",332)),"background-color"),cljs.core.hash_map("﷐'line",332))),cljs.core.hash_map("﷐'line",332))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"maroon",domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"﷐'background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","maroon",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",333)),"﷐'background-color"),cljs.core.hash_map("﷐'line",333))),cljs.core.hash_map("﷐'line",333))))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"﷐'no-such-style"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'nil?",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",334)),"﷐'no-such-style"),cljs.core.hash_map("﷐'line",334))),cljs.core.hash_map("﷐'line",334))))));
}
}));
domina.test.add_test.call(null,"can retrieve an HTML attribute value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div height=\"42\">Content!</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",339)),"height"),cljs.core.hash_map("﷐'line",339))),cljs.core.hash_map("﷐'line",339))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"﷐'height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",340)),"﷐'height"),cljs.core.hash_map("﷐'line",340))),cljs.core.hash_map("﷐'line",340))))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"﷐'no-such-attr:c"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'nil?",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",341)),"﷐'no-such-attr:c"),cljs.core.hash_map("﷐'line",341))),cljs.core.hash_map("﷐'line",341))))));
}
}));
domina.test.add_test.call(null,"can set a css property on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"background-color","red");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"﷐'background-color","green");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[1]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",348)),"background-color"),cljs.core.hash_map("﷐'line",348))),cljs.core.hash_map("﷐'line",348))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"green",domina.style.call(null,domina.xpath.xpath.call(null,"//div[2]"),"background-color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","green",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",349)),"background-color"),cljs.core.hash_map("﷐'line",349))),cljs.core.hash_map("﷐'line",349))))));
}
}));
domina.test.add_test.call(null,"can set a css property on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"color","red");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[1]"),"color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",355)),"color"),cljs.core.hash_map("﷐'line",355))),cljs.core.hash_map("﷐'line",355))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[2]"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",356)),"color"),cljs.core.hash_map("﷐'line",356))),cljs.core.hash_map("﷐'line",356))))));
}
}));
domina.test.add_test.call(null,"can set a html attribute on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"width",42);
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"﷐'width",42);
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",363)),"width"),cljs.core.hash_map("﷐'line",363))),cljs.core.hash_map("﷐'line",363))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[2]"),"width"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",364)),"width"),cljs.core.hash_map("﷐'line",364))),cljs.core.hash_map("﷐'line",364))))));
}
}));
domina.test.add_test.call(null,"can set a html attribute on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"width",42);
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",370)),"width"),cljs.core.hash_map("﷐'line",370))),cljs.core.hash_map("﷐'line",370))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[2]"),"width"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",371)),"width"),cljs.core.hash_map("﷐'line",371))),cljs.core.hash_map("﷐'line",371))))));
}
}));
domina.test.add_test.call(null,"can get multiple CSS styles from a single node.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"color","red");
domina.set_style_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"background-color","black");
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}),domina.styles.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.hash_map("﷐'color","red","﷐'background-color","black"),cljs.core.with_meta(cljs.core.list("﷑'styles",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",379))),cljs.core.hash_map("﷐'line",379))),cljs.core.hash_map("﷐'line",378))))));
}
}));
domina.test.add_test.call(null,"can get multiple HTML attributes from a single node.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"width",42);
domina.set_attr_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"height",24);
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'width","﷐'height"],{"﷐'width":"42","﷐'height":"24"}),domina.attrs.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.hash_map("﷐'width","42","﷐'height","24"),cljs.core.with_meta(cljs.core.list("﷑'attrs",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",387))),cljs.core.hash_map("﷐'line",387))),cljs.core.hash_map("﷐'line",386))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.set_styles_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","black",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",394)),"background-color"),cljs.core.hash_map("﷐'line",394))),cljs.core.hash_map("﷐'line",394))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",395)),"color"),cljs.core.hash_map("﷐'line",395))),cljs.core.hash_map("﷐'line",395))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_styles_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.xpath.call(null,"//div[1]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","black",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",402)),"background-color"),cljs.core.hash_map("﷐'line",402))),cljs.core.hash_map("﷐'line",402))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[1]"),"color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",403)),"color"),cljs.core.hash_map("﷐'line",403))),cljs.core.hash_map("﷐'line",403))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.xpath.call(null,"//div[2]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","black",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",404)),"background-color"),cljs.core.hash_map("﷐'line",404))),cljs.core.hash_map("﷐'line",404))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.xpath.call(null,"//div[2]"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","red",cljs.core.with_meta(cljs.core.list("﷑'style",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",405)),"color"),cljs.core.hash_map("﷐'line",405))),cljs.core.hash_map("﷐'line",405))))));
}
}));
domina.test.add_test.call(null,"can set multiple HTML attributes on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.set_attrs_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'width","﷐'height"],{"﷐'width":42,"﷐'height":24}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",412)),"width"),cljs.core.hash_map("﷐'line",412))),cljs.core.hash_map("﷐'line",412))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.xpath.call(null,"//div"),"height"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","24",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",413)),"height"),cljs.core.hash_map("﷐'line",413))),cljs.core.hash_map("﷐'line",413))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_attrs_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'width","﷐'height"],{"﷐'width":42,"﷐'height":24}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",420)),"width"),cljs.core.hash_map("﷐'line",420))),cljs.core.hash_map("﷐'line",420))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[1]"),"height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","24",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",421)),"height"),cljs.core.hash_map("﷐'line",421))),cljs.core.hash_map("﷐'line",421))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[2]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","42",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",422)),"width"),cljs.core.hash_map("﷐'line",422))),cljs.core.hash_map("﷐'line",422))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.xpath.call(null,"//div[2]"),"height"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","24",cljs.core.with_meta(cljs.core.list("﷑'attr",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",423)),"height"),cljs.core.hash_map("﷐'line",423))),cljs.core.hash_map("﷐'line",423))))));
}
}));
domina.test.add_test.call(null,"test the has-class? function",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class1'>1</div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class2'>2</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",429)),"class1"),cljs.core.hash_map("﷐'line",429))),cljs.core.hash_map("﷐'line",429))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",430)),"class2"),cljs.core.hash_map("﷐'line",430))),cljs.core.hash_map("﷐'line",430))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",431)),"class2"),cljs.core.hash_map("﷐'line",431))),cljs.core.hash_map("﷐'line",431))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class1"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",432)),"class1"),cljs.core.hash_map("﷐'line",432))),cljs.core.hash_map("﷐'line",432))))));
}
}));
domina.test.add_test.call(null,"can add a CSS class to a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div>");
domina.add_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class1");
domina.add_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class2");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",439)),"class1"),cljs.core.hash_map("﷐'line",439))),cljs.core.hash_map("﷐'line",439))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",440)),"class2"),cljs.core.hash_map("﷐'line",440))),cljs.core.hash_map("﷐'line",440))))));
}
}));
domina.test.add_test.call(null,"can add a CSS class to multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.add_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class1");
domina.add_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class2");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",447)),"class1"),cljs.core.hash_map("﷐'line",447))),cljs.core.hash_map("﷐'line",447))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",448)),"class1"),cljs.core.hash_map("﷐'line",448))),cljs.core.hash_map("﷐'line",448))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",449)),"class2"),cljs.core.hash_map("﷐'line",449))),cljs.core.hash_map("﷐'line",449))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",450)),"class2"),cljs.core.hash_map("﷐'line",450))),cljs.core.hash_map("﷐'line",450))))));
}
}));
domina.test.add_test.call(null,"can remove a CSS class from a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class1 class2'>1</div>");
domina.remove_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class1");
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",456)),"class1"),cljs.core.hash_map("﷐'line",456))),cljs.core.hash_map("﷐'line",456))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",457)),"class2"),cljs.core.hash_map("﷐'line",457))),cljs.core.hash_map("﷐'line",457))))));
}
}));
domina.test.add_test.call(null,"can remove a CSS class from a multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class1 class2'>1</div><div class='class1 class2'>2</div>");
domina.remove_class_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"class1");
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",463)),"class1"),cljs.core.hash_map("﷐'line",463))),cljs.core.hash_map("﷐'line",463))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[1]"),cljs.core.hash_map("﷐'line",464)),"class2"),cljs.core.hash_map("﷐'line",464))),cljs.core.hash_map("﷐'line",464))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",false,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",465)),"class1"),cljs.core.hash_map("﷐'line",465))),cljs.core.hash_map("﷐'line",465))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.xpath.call(null,"//div[2]"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",true,cljs.core.with_meta(cljs.core.list("﷑'has-class?",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div[2]"),cljs.core.hash_map("﷐'line",466)),"class2"),cljs.core.hash_map("﷐'line",466))),cljs.core.hash_map("﷐'line",466))))));
}
}));
domina.test.add_test.call(null,"can get a list of all css classes for a node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div class='class1 class2 class3'>1</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["class1","class2","class3"]),domina.classes.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["class1","class2","class3"])),cljs.core.with_meta(cljs.core.list("﷑'classes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",471))),cljs.core.hash_map("﷐'line",471))),cljs.core.hash_map("﷐'line",471))))));
}
}));
domina.test.add_test.call(null,"can retrieve the text value of a node with normalization.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p>\n\n   Some text.  \n  </p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some text.",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some text.",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",476))),cljs.core.hash_map("﷐'line",476))),cljs.core.hash_map("﷐'line",476))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some text.",domina.text.call(null,domina.xpath.xpath.call(null,"//p"),true))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some text.",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",477)),true),cljs.core.hash_map("﷐'line",477))),cljs.core.hash_map("﷐'line",477))))));
}
}));
domina.test.add_test.call(null,"can set text on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p></p>");
domina.set_text_BANG_.call(null,domina.xpath.xpath.call(null,"//p"),"Hello world!");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",490))),cljs.core.hash_map("﷐'line",490))),cljs.core.hash_map("﷐'line",490))))));
}
}));
domina.test.add_test.call(null,"can set text on a multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<p></p><p></p>");
domina.set_text_BANG_.call(null,domina.xpath.xpath.call(null,"//p"),"Hello world!");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[1]"),cljs.core.hash_map("﷐'line",496))),cljs.core.hash_map("﷐'line",496))),cljs.core.hash_map("﷐'line",496))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p[2]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p[2]"),cljs.core.hash_map("﷐'line",497))),cljs.core.hash_map("﷐'line",497))),cljs.core.hash_map("﷐'line",497))))));
}
}));
domina.test.add_test.call(null,"can get a form field value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<form><input type='text' name='test' value='Test Value'></input></form>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.xpath.call(null,"//input")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Test Value",cljs.core.with_meta(cljs.core.list("﷑'value",cljs.core.with_meta(cljs.core.list("﷑'xpath","//input"),cljs.core.hash_map("﷐'line",502))),cljs.core.hash_map("﷐'line",502))),cljs.core.hash_map("﷐'line",502))))));
}
}));
domina.test.add_test.call(null,"can set a form field value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<form><input type='text' name='test'></input></form>");
domina.set_value_BANG_.call(null,domina.xpath.xpath.call(null,"//input"),"Test Value");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.xpath.call(null,"//input")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Test Value",cljs.core.with_meta(cljs.core.list("﷑'value",cljs.core.with_meta(cljs.core.list("﷑'xpath","//input"),cljs.core.hash_map("﷐'line",508))),cljs.core.hash_map("﷐'line",508))),cljs.core.hash_map("﷐'line",508))))));
}
}));
domina.test.add_test.call(null,"can set multiple form field values",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<form><input type='text' name='test'></input><input type='text' name='test'></input></form>");
domina.set_value_BANG_.call(null,domina.xpath.xpath.call(null,"//input"),"Test Value");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.xpath.call(null,"//input[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Test Value",cljs.core.with_meta(cljs.core.list("﷑'value",cljs.core.with_meta(cljs.core.list("﷑'xpath","//input[1]"),cljs.core.hash_map("﷐'line",514))),cljs.core.hash_map("﷐'line",514))),cljs.core.hash_map("﷐'line",514))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.xpath.call(null,"//input[2]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Test Value",cljs.core.with_meta(cljs.core.list("﷑'value",cljs.core.with_meta(cljs.core.list("﷑'xpath","//input[2]"),cljs.core.hash_map("﷐'line",515))),cljs.core.hash_map("﷐'line",515))),cljs.core.hash_map("﷐'line",515))))));
}
}));
domina.test.add_test.call(null,"can get a node's innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div><p class='foobar'>some text</p></div>");
if(cljs.core.truth_((function (){var or__3548__auto____6945 = cljs.core._EQ_.call(null,"<p class=\"foobar\">some text</p>",domina.html.call(null,domina.xpath.xpath.call(null,"//div")));

if(cljs.core.truth_(or__3548__auto____6945))
{return or__3548__auto____6945;
} else
{return cljs.core._EQ_.call(null,"<P class=foobar>some text</P>",domina.html.call(null,domina.xpath.xpath.call(null,"//div")));
}
})()))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'or",cljs.core.with_meta(cljs.core.list("﷑'=","<p class=\"foobar\">some text</p>",cljs.core.with_meta(cljs.core.list("﷑'html",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",521))),cljs.core.hash_map("﷐'line",521))),cljs.core.hash_map("﷐'line",521)),cljs.core.with_meta(cljs.core.list("﷑'=","<P class=foobar>some text</P>",cljs.core.with_meta(cljs.core.list("﷑'html",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",522))),cljs.core.hash_map("﷐'line",522))),cljs.core.hash_map("﷐'line",522))),cljs.core.hash_map("﷐'line",521))))));
}
}));
domina.test.add_test.call(null,"can set a node's innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div></div>");
domina.set_html_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"<p class='foobar'>some text</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",1,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div/p[@class='foobar']"),cljs.core.hash_map("﷐'line",528))),cljs.core.hash_map("﷐'line",528))),cljs.core.hash_map("﷐'line",528))),cljs.core.hash_map("﷐'line",528))))));
}
}));
domina.test.add_test.call(null,"can set multiple nodes' innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div></div><div></div>");
domina.set_html_BANG_.call(null,domina.xpath.xpath.call(null,"//div"),"<p class='foobar'>some text</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.xpath.call(null,"//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",2,cljs.core.with_meta(cljs.core.list("﷑'count",cljs.core.with_meta(cljs.core.list("﷑'nodes",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div/p[@class='foobar']"),cljs.core.hash_map("﷐'line",534))),cljs.core.hash_map("﷐'line",534))),cljs.core.hash_map("﷐'line",534))),cljs.core.hash_map("﷐'line",534))))));
}
}));
domina.test.add_test.call(null,"can get nodes from strings containing cell-level table fragments",(function (){
domina.test.reset.call(null);
var n__6960 = domina.nodes.call(null,"<td>Cell</td><th>Header</th>");

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,n__6960),2)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.with_meta(cljs.core.list("﷑'count","﷑'n"),cljs.core.hash_map("﷐'line",539)),2),cljs.core.hash_map("﷐'line",539))))));
}
var G__6961__6962 = cljs.core.seq.call(null,n__6960);

if(cljs.core.truth_(G__6961__6962))
{var h__6965 = cljs.core.first.call(null,G__6961__6962);
var G__6961__6966 = G__6961__6962;

while(true){
if(cljs.core.truth_(cljs.core.re_find.call(null,/TableCell/,cljs.core.pr_str.call(null,h__6965))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'re-find",/TableCell/,cljs.core.with_meta(cljs.core.list("﷑'pr-str","﷑'h"),cljs.core.hash_map("﷐'line",541))),cljs.core.hash_map("﷐'line",541))))));
}
var temp__3698__auto____6968 = cljs.core.next.call(null,G__6961__6966);

if(cljs.core.truth_(temp__3698__auto____6968))
{var G__6961__6969 = temp__3698__auto____6968;

{
var G__6985 = cljs.core.first.call(null,G__6961__6969);
var G__6986 = G__6961__6969;
h__6965 = G__6985;
G__6961__6966 = G__6986;
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
domina.test.add_test.call(null,"can get nodes from strings containing row-level table fragments",(function (){
domina.test.reset.call(null);
var n__6989 = domina.nodes.call(null,"<tr><td>Cell</td><th>Header</th></tr><tr><td>Another</td><th>Row</th></tr>");

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,n__6989),2)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.with_meta(cljs.core.list("﷑'count","﷑'n"),cljs.core.hash_map("﷐'line",546)),2),cljs.core.hash_map("﷐'line",546))))));
}
var G__6990__6991 = cljs.core.seq.call(null,n__6989);

if(cljs.core.truth_(G__6990__6991))
{var h__6992 = cljs.core.first.call(null,G__6990__6991);
var G__6990__6993 = G__6990__6991;

while(true){
if(cljs.core.truth_(cljs.core.re_find.call(null,/TableRow/,cljs.core.pr_str.call(null,h__6992))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'re-find",/TableRow/,cljs.core.with_meta(cljs.core.list("﷑'pr-str","﷑'h"),cljs.core.hash_map("﷐'line",548))),cljs.core.hash_map("﷐'line",548))))));
}
var temp__3698__auto____6994 = cljs.core.next.call(null,G__6990__6993);

if(cljs.core.truth_(temp__3698__auto____6994))
{var G__6990__6996 = temp__3698__auto____6994;

{
var G__7003 = cljs.core.first.call(null,G__6990__6996);
var G__7004 = G__6990__6996;
h__6992 = G__7003;
G__6990__6993 = G__7004;
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
domina.test.add_test.call(null,"can get nodes from strings containing section-level table fragments",(function (){
domina.test.reset.call(null);
var n__7026 = domina.nodes.call(null,"<thead><tr><td>Cell</td><th>Header</th></tr></thead><tbody><tr><td>Another</td><th>Row</th></tr></tbody>");

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,n__7026),2)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=",cljs.core.with_meta(cljs.core.list("﷑'count","﷑'n"),cljs.core.hash_map("﷐'line",553)),2),cljs.core.hash_map("﷐'line",553))))));
}
var G__7027__7028 = cljs.core.seq.call(null,n__7026);

if(cljs.core.truth_(G__7027__7028))
{var h__7029 = cljs.core.first.call(null,G__7027__7028);
var G__7027__7030 = G__7027__7028;

while(true){
if(cljs.core.truth_(cljs.core.re_find.call(null,/TableSection/,cljs.core.pr_str.call(null,h__7029))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'re-find",/TableSection/,cljs.core.with_meta(cljs.core.list("﷑'pr-str","﷑'h"),cljs.core.hash_map("﷐'line",555))),cljs.core.hash_map("﷐'line",555))))));
}
var temp__3698__auto____7032 = cljs.core.next.call(null,G__7027__7030);

if(cljs.core.truth_(temp__3698__auto____7032))
{var G__7027__7033 = temp__3698__auto____7032;

{
var G__7046 = cljs.core.first.call(null,G__7027__7033);
var G__7047 = G__7027__7033;
h__7029 = G__7046;
G__7027__7030 = G__7047;
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
domina.test.add_test.call(null,"can trigger a handler on a :mouseover event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseover",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var target__7048 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7048,"﷐'mouseover",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'mouseover","﷐'target":target__7048}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",563))),cljs.core.hash_map("﷐'line",563))),cljs.core.hash_map("﷐'line",563))))));
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :mouseout event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseout",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var target__7054 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7054,"﷐'mouseout",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'mouseout","﷐'target":target__7054}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",571))),cljs.core.hash_map("﷐'line",571))),cljs.core.hash_map("﷐'line",571))))));
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :click event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var target__7067 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7067,"﷐'click",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'click","﷐'target":target__7067}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",579))),cljs.core.hash_map("﷐'line",579))),cljs.core.hash_map("﷐'line",579))))));
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :mouseenter event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='parent'><div id='ref'></div></div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var rtarget__7071 = domina.by_id.call(null,"parent");
var target__7072 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7072,"﷐'mouseenter",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'related-target","﷐'target"],{"﷐'type":"﷐'mouseenter","﷐'related-target":rtarget__7071,"﷐'target":target__7072}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",589))),cljs.core.hash_map("﷐'line",589))),cljs.core.hash_map("﷐'line",589))))));
}
}));
domina.test.add_test.call(null,"can trigger a handler on a :mouseleave event",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='parent'><div id='ref'></div></div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseleave",(function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
}));
var rtarget__7092 = domina.by_id.call(null,"parent");
var target__7093 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7093,"﷐'mouseleave",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'related-target","﷐'target"],{"﷐'type":"﷐'mouseleave","﷐'related-target":rtarget__7092,"﷐'target":target__7093}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Hello world!",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//p"),cljs.core.hash_map("﷐'line",599))),cljs.core.hash_map("﷐'line",599))),cljs.core.hash_map("﷐'line",599))))));
}
}));
domina.test.add_test.call(null,"can remove-listeners on a :click event",(function (){
var handler__7097 = (function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
});

domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click",handler__7097);
domina.events.remove_listeners_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click");
var target__7098 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7098,"﷐'click",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'click","﷐'target":target__7098}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some content",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some content",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",609))),cljs.core.hash_map("﷐'line",609))),cljs.core.hash_map("﷐'line",609))))));
}
}));
domina.test.add_test.call(null,"can remove-listeners on a :mouseenter event",(function (){
var handler__7100 = (function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
});

domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='parent'><div id='ref'>Some content</div></div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter",handler__7100);
domina.events.remove_listeners_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter");
var rtarget__7105 = domina.by_id.call(null,"parent");
var target__7106 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7106,"﷐'mouseenter",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'related-target","﷐'target"],{"﷐'type":"﷐'mouseenter","﷐'related-target":rtarget__7105,"﷐'target":target__7106}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some content",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some content",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",620))),cljs.core.hash_map("﷐'line",620))),cljs.core.hash_map("﷐'line",620))))));
}
}));
domina.test.add_test.call(null,"can unlisten! on a :click event",(function (){
var handler__7109 = (function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
});

domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click",handler__7109);
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'click",handler__7109);
var target__7110 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7110,"﷐'click",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'target"],{"﷐'type":"﷐'click","﷐'target":target__7110}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some content",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some content",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",630))),cljs.core.hash_map("﷐'line",630))),cljs.core.hash_map("﷐'line",630))))));
}
}));
domina.test.add_test.call(null,"can unlisten! on a :mouseenter event",(function (){
var handler__7114 = (function (){
return domina.append_BANG_.call(null,domina.by_id.call(null,"ref"),"<p>Hello world!</p>");
});

domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='parent'><div id='ref'>Some content</div></div>");
domina.events.listen_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter",handler__7114);
domina.events.unlisten_BANG_.call(null,domina.by_id.call(null,"ref"),"﷐'mouseenter",handler__7114);
var rtarget__7115 = domina.by_id.call(null,"parent");
var target__7116 = domina.by_id.call(null,"ref");

domina.events.fire_listeners_BANG_.call(null,target__7116,"﷐'mouseenter",false,cljs.core.ObjMap.fromObject(["﷐'type","﷐'related-target","﷐'target"],{"﷐'type":"﷐'mouseenter","﷐'related-target":rtarget__7115,"﷐'target":target__7116}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some content",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","Some content",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",641))),cljs.core.hash_map("﷐'line",641))),cljs.core.hash_map("﷐'line",641))))));
}
}));
domina.test.add_test.call(null,"can append to a document fragment",(function (){
domina.test.reset.call(null);
var frag__7119 = document.createDocumentFragment();

domina.append_BANG_.call(null,frag__7119,"<div>testing</div>");
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),frag__7119);
if(cljs.core.truth_(cljs.core._EQ_.call(null,"testing",domina.text.call(null,domina.xpath.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","testing",cljs.core.with_meta(cljs.core.list("﷑'text",cljs.core.with_meta(cljs.core.list("﷑'xpath","//div"),cljs.core.hash_map("﷐'line",649))),cljs.core.hash_map("﷐'line",649))),cljs.core.hash_map("﷐'line",649))))));
}
}));
domina.test.add_test.call(null,"doesn't clone unless necessary",(function (){
domina.test.reset.call(null);
var child__7168 = domina.single_node.call(null,"<div>hello</div>");

domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),child__7168);
if(cljs.core.truth_(cljs.core._EQ_.call(null,child__7168,domina.single_node.call(null,domina.xpath.xpath.call(null,"//body/div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'=","﷑'child",cljs.core.with_meta(cljs.core.list("﷑'single-node",cljs.core.with_meta(cljs.core.list("﷑'xpath","//body/div"),cljs.core.hash_map("﷐'line",656))),cljs.core.hash_map("﷐'line",656))),cljs.core.hash_map("﷐'line",656))))));
}
}));
domina.test.report = (function report(test_results){
domina.test.reset.call(null);
var G__7169__7171 = cljs.core.seq.call(null,test_results);

if(cljs.core.truth_(G__7169__7171))
{var G__7176__7180 = cljs.core.first.call(null,G__7169__7171);
var vec__7178__7182 = G__7176__7180;
var name__7184 = cljs.core.nth.call(null,vec__7178__7182,0,null);
var result__7185 = cljs.core.nth.call(null,vec__7178__7182,1,null);
var G__7169__7186 = G__7169__7171;

var G__7176__7187 = G__7176__7180;
var G__7169__7188 = G__7169__7186;

while(true){
var vec__7189__7190 = G__7176__7187;
var name__7191 = cljs.core.nth.call(null,vec__7189__7190,0,null);
var result__7192 = cljs.core.nth.call(null,vec__7189__7190,1,null);
var G__7169__7193 = G__7169__7188;

var result_div__7194 = domina.single_node.call(null,"<div class='test-result'></div>");

domina.set_text_BANG_.call(null,result_div__7194,name__7191);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,result__7192,null))))
{domina.add_class_BANG_.call(null,result_div__7194,"failed");
domina.append_BANG_.call(null,result_div__7194,cljs.core.str.call(null,"<div class='message'>",result__7192,"</div>"));
} else
{domina.add_class_BANG_.call(null,result_div__7194,"passed");
}
domina.append_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),result_div__7194);
var temp__3698__auto____7204 = cljs.core.next.call(null,G__7169__7193);

if(cljs.core.truth_(temp__3698__auto____7204))
{var G__7169__7209 = temp__3698__auto____7204;

{
var G__7213 = cljs.core.first.call(null,G__7169__7209);
var G__7214 = G__7169__7209;
G__7176__7187 = G__7213;
G__7169__7188 = G__7214;
continue;
}
} else
{}
break;
}
} else
{}
domina.prepend_BANG_.call(null,domina.xpath.xpath.call(null,"//body"),"<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures");
domina.set_text_BANG_.call(null,domina.by_id.call(null,"total-tests"),cljs.core.count.call(null,test_results));
var failure_count__7210 = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.second,test_results)));

domina.set_text_BANG_.call(null,domina.by_id.call(null,"total-failures"),failure_count__7210);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,failure_count__7210)))
{return domina.add_class_BANG_.call(null,domina.by_id.call(null,"test-summary"),"passed");
} else
{return domina.add_class_BANG_.call(null,domina.by_id.call(null,"test-summary"),"failed");
}
});
domina.test.test_results = cljs.core.doall.call(null,domina.test.run_tests.call(null));
domina.test.report.call(null,domina.test.test_results);
