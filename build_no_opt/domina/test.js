goog.provide('domina.test');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('domina');
goog.require('clojure.browser.repl');

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
return cljs.core.map.call(null,(function (p__2379){
var vec__2380__2381 = p__2379;
var name__2382 = cljs.core.nth.call(null,vec__2380__2381,0,null);
var testfn__2383 = cljs.core.nth.call(null,vec__2380__2381,1,null);

return cljs.core.Vector.fromArray([name__2382,domina.test.run_test.call(null,testfn__2383)]);
}),cljs.core.deref.call(null,domina.test.tests));
});
/**
* resets the page
*/
domina.test.reset = (function reset(){
return domina.destroy_BANG_.call(null,domina.xpath.call(null,"//body/*"));
});
/**
* Standard fixture html
*/
domina.test.standard_fixture = (function standard_fixture(){
return domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>\n<p id='id1' class='p3'>P3</p>");
});
domina.test.add_test.call(null,"basic xpath selection",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p"))))))));
}
}));
domina.test.add_test.call(null,"basic xpath selection (single node)",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Element,domina.single_node.call(null,domina.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'instance?","﷑'js/Element",cljs.core.list("﷑'single-node",cljs.core.list("﷑'xpath","//p")))))));
}
}));
domina.test.add_test.call(null,"xpath selection with class specification",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@class='d1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@class='d1']"))))))));
}
}));
domina.test.add_test.call(null,"a relative xpath expression",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,domina.xpath.call(null,"//body/div[@class='d1']"),"p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'->",cljs.core.list("﷑'xpath","//body/div[@class='d1']"),cljs.core.list("﷑'xpath","p")))))))));
}
}));
domina.test.add_test.call(null,"extended selection chaining",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div><p><span>some text</span></p><p><span>more text</span></p></div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,domina.xpath.call(null,domina.xpath.call(null,domina.xpath.call(null,"//body"),"div"),"p"),"span"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'->",cljs.core.list("﷑'xpath","//body"),cljs.core.list("﷑'xpath","div"),cljs.core.list("﷑'xpath","p"),cljs.core.list("﷑'xpath","span")))))))));
}
}));
domina.test.add_test.call(null,"advanced xpath",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[following-sibling::p[@class='p3']]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[following-sibling::p[@class='p3']]"))))))));
}
}));
domina.test.add_test.call(null,"look up node by id",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.by_id.call(null,"id1"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'by-id","id1"))))))));
}
}));
domina.test.add_test.call(null,"look up nodes by class",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.by_class.call(null,"p3"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'by-class","p3"))))))));
}
}));
domina.test.add_test.call(null,"child selection",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.children.call(null,domina.xpath.call(null,"//div[@class='d1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'children",cljs.core.list("﷑'xpath","//div[@class='d1']"))))))));
}
}));
domina.test.add_test.call(null,"clone a single node",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.clone.call(null,domina.single_node.call(null,domina.xpath.call(null,"//p")))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'clone",cljs.core.list("﷑'single-node",cljs.core.list("﷑'xpath","//p")))))))));
}
}));
domina.test.add_test.call(null,"clone multiple nodes",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.clone.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p")))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'clone",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p")))))))));
}
}));
domina.test.add_test.call(null,"append a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<p class='appended1'>test</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/p[@class='appended1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/p[@class='appended1']"))))))));
}
}));
domina.test.add_test.call(null,"append multiple children to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/p[@class='appended2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/p[@class='appended2']"))))))));
}
}));
domina.test.add_test.call(null,"append a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body/div/p"),"<span>!!</span>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div/p/span"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div/p/span"))))))));
}
}));
domina.test.add_test.call(null,"append multiple children to multiple parents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body/div/p"),"some <span class='foo'>more</span> text");
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div/p/span[@class='foo']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div/p/span[@class='foo']"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,9,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div/p/text()"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",9,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div/p/text()"))))))));
}
}));
domina.test.add_test.call(null,"prepend a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>2</div><div>3</div>");
domina.prepend_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"1",domina.text.call(null,domina.xpath.call(null,"//body/div[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","1",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//body/div[1]")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"2",domina.text.call(null,domina.xpath.call(null,"//body/div[2]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","2",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//body/div[2]")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"3",domina.text.call(null,domina.xpath.call(null,"//body/div[3]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","3",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//body/div[3]")))))));
}
}));
domina.test.add_test.call(null,"prepend a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div><p>2</p></div><div><p>2</p></div>");
domina.prepend_BANG_.call(null,domina.xpath.call(null,"//body/div"),"<p>1</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/div/p[text()='2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/div/p[text()='2']"))))))));
}
}));
domina.test.add_test.call(null,"Insert a single child to a single parent",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='testInserts'></div>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//div[@class='testInserts']"),"<p class='i1'></p>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//div[@class='testInserts']"),"<p class='i3'></p>");
domina.insert_BANG_.call(null,domina.xpath.call(null,"//div[@class='testInserts']"),"<p class='i2'></p>",1);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@class='testInserts']/p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@class='testInserts']/p"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@class='i2']/preceding-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@class='i2']/preceding-sibling::*"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@class='i2']/following-sibling::*"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@class='i2']/following-sibling::*"))))))));
}
}));
domina.test.add_test.call(null,"Insert a single child to multiple parents",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='testInserts' id='testInsert1'></div>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='testInserts' id='testInsert2'></div>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//div[@class='testInserts']"),"<p class='i1'></p>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//div[@class='testInserts']"),"<p class='i3'></p>");
domina.insert_BANG_.call(null,domina.xpath.call(null,"//div[@class='testInserts']"),"<p class='i2'></p>",1);
var G__2384__2385 = cljs.core.seq.call(null,cljs.core.Vector.fromArray([domina.xpath.call(null,"//div[@id='testInsert1']"),domina.xpath.call(null,"//div[@id='testInsert2']")]));

if(cljs.core.truth_(G__2384__2385))
{var children__2386 = cljs.core.first.call(null,G__2384__2385);
var G__2384__2387 = G__2384__2385;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,children__2386,"p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","﷑'children","p"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,children__2386,"p[@class='i2']/preceding-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","﷑'children","p[@class='i2']/preceding-sibling::*"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,children__2386,"p[@class='i2']/following-sibling::*"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","﷑'children","p[@class='i2']/following-sibling::*"))))))));
}
var temp__3698__auto____2388 = cljs.core.next.call(null,G__2384__2387);

if(cljs.core.truth_(temp__3698__auto____2388))
{var G__2384__2389 = temp__3698__auto____2388;

{
var G__2390 = cljs.core.first.call(null,G__2384__2389);
var G__2391 = G__2384__2389;
children__2386 = G__2390;
G__2384__2387 = G__2391;
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
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<p class='appended1'>app1</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/p[@class='appended1']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/p[@class='appended1']"))))))));
}
domina.destroy_BANG_.call(null,domina.xpath.call(null,"//body/p[@class='appended1']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/p[@class='appended1']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/p[@class='appended1']"))))))));
}
}));
domina.test.add_test.call(null,"destroy multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<p class='appended2'>app1</p><p class='appended2'>app2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/p[@class='appended2']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/p[@class='appended2']"))))))));
}
domina.destroy_BANG_.call(null,domina.xpath.call(null,"//body/p[@class='appended2']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/p[@class='appended2']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/p[@class='appended2']"))))))));
}
}));
domina.test.add_test.call(null,"detach and reattach a single node",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
var n__2392 = domina.detach_BANG_.call(null,domina.xpath.call(null,"//p[@class='p3']"));

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@class='p3']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@class='p3']"))))))));
}
domina.append_BANG_.call(null,domina.xpath.call(null,"//div[@class='d1']"),n__2392);
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@class='p3']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@class='p3']"))))))));
}
}));
domina.test.add_test.call(null,"detach and reattach multiple nodes",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
var n__2393 = domina.detach_BANG_.call(null,domina.xpath.call(null,"//div[@class='d1']/p"));

if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@class='d1']/p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@class='d1']/p"))))))));
}
domina.append_BANG_.call(null,domina.xpath.call(null,"//div[@class='d1']"),n__2393);
if(cljs.core.truth_(cljs.core._EQ_.call(null,3,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@class='d1']/p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",3,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@class='d1']/p"))))))));
}
}));
domina.test.add_test.call(null,"clear a node's contents",(function (){
domina.test.reset.call(null);
domina.test.standard_fixture.call(null);
domina.destroy_children_BANG_.call(null,domina.xpath.call(null,"//div[@class='d1']"));
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@class='d1']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@class='d1']"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@class='d1']/*"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@class='d1']/*"))))))));
}
}));
domina.test.add_test.call(null,"insert-before! with a single reference and single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>before</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before']"))))))));
}
}));
domina.test.add_test.call(null,"insert-before! with a single reference and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>before1</p><p>before2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"))))))));
}
}));
domina.test.add_test.call(null,"insert-before! with multiple reference nodes and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='ref' id='ref1'>content1</div>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='ref' id='ref2'>content2</div>");
domina.insert_before_BANG_.call(null,domina.nodes.call(null,domina.by_class.call(null,"ref")),"<p>before</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref1']/preceding-sibling::p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref1']/preceding-sibling::p"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref2']/preceding-sibling::p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref2']/preceding-sibling::p"))))))));
}
}));
domina.test.add_test.call(null,"insert-after! with a single reference and single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>after</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after']"))))))));
}
}));
domina.test.add_test.call(null,"insert-after! with a single reference and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div id='ref'>Some content</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_id.call(null,"ref")),"<p>after1</p><p>after2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]"))))))));
}
}));
domina.test.add_test.call(null,"insert-after! with multiple reference nodes and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='ref' id='ref1'>content1</div>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='ref' id='ref2'>content2</div>");
domina.insert_after_BANG_.call(null,domina.nodes.call(null,domina.by_class.call(null,"ref")),"<p>after</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref1']/following-sibling::p"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref1']/following-sibling::p"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//div[@id='ref2']/following-sibling::p"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//div[@id='ref2']/following-sibling::p"))))))));
}
}));
domina.test.add_test.call(null,"swap-content! with a single reference node and a single new node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div><p id='before'>TYPO</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.call(null,"//p[@id='before']"),"<p id='after'>fixed</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@id='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@id='before']"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@id='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@id='after']"))))))));
}
}));
domina.test.add_test.call(null,"swap-content! with a single reference node and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div><p id='before'>TYPO</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.call(null,"//p[@id='before']"),"<p class='after'>fixed1</p><p class='after'>fixed2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@id='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@id='before']"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@class='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@class='after']"))))))));
}
}));
domina.test.add_test.call(null,"swap-content! with multiple reference nodes and multiple new nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div><p class='before'>TYPO-1</p></div>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div><p class='before'>TYPO-2</p></div>");
domina.swap_content_BANG_.call(null,domina.xpath.call(null,"//p[@class='before']"),"<p class='after'>fixed1</p><p class='after'>fixed2</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@class='before']"))))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",0,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@class='before']"))))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,4,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//p[@class='after']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",4,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//p[@class='after']"))))))));
}
}));
domina.test.add_test.call(null,"can retrieve a css property value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div style=\"background-color: maroon;\">Test</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"maroon",domina.style.call(null,domina.xpath.call(null,"//div"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","maroon",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div"),"background-color"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"maroon",domina.style.call(null,domina.xpath.call(null,"//div"),"﷐'background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","maroon",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div"),"﷐'background-color"))))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,domina.style.call(null,domina.xpath.call(null,"//div"),"﷐'no-such-style"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div"),"﷐'no-such-style"))))));
}
}));
domina.test.add_test.call(null,"can retrieve an HTML attribute value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div height=\"42\">Content!</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div"),"height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div"),"height"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div"),"﷐'height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div"),"﷐'height"))))));
}
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,domina.attr.call(null,domina.xpath.call(null,"//div"),"﷐'no-such-attr:c"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'nil?",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div"),"﷐'no-such-attr:c"))))));
}
}));
domina.test.add_test.call(null,"can set a css property on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_style_BANG_.call(null,domina.xpath.call(null,"//div[1]"),"background-color","red");
domina.set_style_BANG_.call(null,domina.xpath.call(null,"//div[2]"),"﷐'background-color","green");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.call(null,"//div[1]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","red",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div[1]"),"background-color"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"green",domina.style.call(null,domina.xpath.call(null,"//div[2]"),"background-color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","green",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div[2]"),"background-color"))))));
}
}));
domina.test.add_test.call(null,"can set a css property on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_style_BANG_.call(null,domina.xpath.call(null,"//div"),"color","red");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.call(null,"//div[1]"),"color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","red",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div[1]"),"color"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.call(null,"//div[2]"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","red",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div[2]"),"color"))))));
}
}));
domina.test.add_test.call(null,"can set a html attribute on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_attr_BANG_.call(null,domina.xpath.call(null,"//div[1]"),"width",42);
domina.set_attr_BANG_.call(null,domina.xpath.call(null,"//div[2]"),"﷐'width",42);
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div[1]"),"width"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div[2]"),"width"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div[2]"),"width"))))));
}
}));
domina.test.add_test.call(null,"can set a html attribute on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_attr_BANG_.call(null,domina.xpath.call(null,"//div"),"width",42);
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div[1]"),"width"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div[2]"),"width"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div[2]"),"width"))))));
}
}));
domina.test.add_test.call(null,"can get multiple CSS styles from a single node.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div>");
domina.set_style_BANG_.call(null,domina.xpath.call(null,"//div"),"color","red");
domina.set_style_BANG_.call(null,domina.xpath.call(null,"//div"),"background-color","black");
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}),domina.styles.call(null,domina.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'color","red","﷐'background-color","black"),cljs.core.list("﷑'styles",cljs.core.list("﷑'xpath","//div")))))));
}
}));
domina.test.add_test.call(null,"can get multiple HTML attributes from a single node.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div>");
domina.set_attr_BANG_.call(null,domina.xpath.call(null,"//div"),"width",42);
domina.set_attr_BANG_.call(null,domina.xpath.call(null,"//div"),"height",24);
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.ObjMap.fromObject(["﷐'width","﷐'height"],{"﷐'width":"42","﷐'height":"24"}),domina.attrs.call(null,domina.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",cljs.core.hash_map("﷐'width","42","﷐'height","24"),cljs.core.list("﷑'attrs",cljs.core.list("﷑'xpath","//div")))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div>");
domina.set_styles_BANG_.call(null,domina.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.call(null,"//div"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","black",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div"),"background-color"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.call(null,"//div"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","red",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div"),"color"))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_styles_BANG_.call(null,domina.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'color","﷐'background-color"],{"﷐'color":"red","﷐'background-color":"black"}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.call(null,"//div[1]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","black",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div[1]"),"background-color"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.call(null,"//div[1]"),"color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","red",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div[1]"),"color"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"black",domina.style.call(null,domina.xpath.call(null,"//div[2]"),"background-color"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","black",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div[2]"),"background-color"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"red",domina.style.call(null,domina.xpath.call(null,"//div[2]"),"color"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","red",cljs.core.list("﷑'style",cljs.core.list("﷑'xpath","//div[2]"),"color"))))));
}
}));
domina.test.add_test.call(null,"can set multiple HTML attributes on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div>");
domina.set_attrs_BANG_.call(null,domina.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'width","﷐'height"],{"﷐'width":42,"﷐'height":24}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div"),"width"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.call(null,"//div"),"height"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","24",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div"),"height"))))));
}
}));
domina.test.add_test.call(null,"can set multiple CSS styles on multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.set_attrs_BANG_.call(null,domina.xpath.call(null,"//div"),cljs.core.ObjMap.fromObject(["﷐'width","﷐'height"],{"﷐'width":42,"﷐'height":24}));
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div[1]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div[1]"),"width"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.call(null,"//div[1]"),"height"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","24",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div[1]"),"height"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"42",domina.attr.call(null,domina.xpath.call(null,"//div[2]"),"width"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","42",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div[2]"),"width"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"24",domina.attr.call(null,domina.xpath.call(null,"//div[2]"),"height"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","24",cljs.core.list("﷑'attr",cljs.core.list("﷑'xpath","//div[2]"),"height"))))));
}
}));
domina.test.add_test.call(null,"test the has-class? function",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='class1'>1</div>");
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='class2'>2</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[1]"),"class1"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[2]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[2]"),"class2"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[1]"),"class2"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[2]"),"class1"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[2]"),"class1"))))));
}
}));
domina.test.add_test.call(null,"can add a CSS class to a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div>");
domina.add_class_BANG_.call(null,domina.xpath.call(null,"//div"),"class1");
domina.add_class_BANG_.call(null,domina.xpath.call(null,"//div"),"class2");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div"),"class1"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div"),"class2"))))));
}
}));
domina.test.add_test.call(null,"can add a CSS class to multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div>1</div><div>2</div>");
domina.add_class_BANG_.call(null,domina.xpath.call(null,"//div"),"class1");
domina.add_class_BANG_.call(null,domina.xpath.call(null,"//div"),"class2");
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[1]"),"class1"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[2]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[2]"),"class1"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[1]"),"class2"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[2]"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[2]"),"class2"))))));
}
}));
domina.test.add_test.call(null,"can remove a CSS class from a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='class1 class2'>1</div>");
domina.remove_class_BANG_.call(null,domina.xpath.call(null,"//div"),"class1");
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div"),"class1"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div"),"class2"))))));
}
}));
domina.test.add_test.call(null,"can remove a CSS class from a multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='class1 class2'>1</div><div class='class1 class2'>2</div>");
domina.remove_class_BANG_.call(null,domina.xpath.call(null,"//div"),"class1");
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[1]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[1]"),"class1"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[1]"),"class2"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[1]"),"class2"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,false,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[2]"),"class1"))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",false,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[2]"),"class1"))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,true,domina.has_class_QMARK_.call(null,domina.xpath.call(null,"//div[2]"),"class2"))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",true,cljs.core.list("﷑'has-class?",cljs.core.list("﷑'xpath","//div[2]"),"class2"))))));
}
}));
domina.test.add_test.call(null,"can get a list of all css classes for a node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div class='class1 class2 class3'>1</div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.Vector.fromArray(["class1","class2","class3"]),domina.classes.call(null,domina.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",(new cljs.core.Vector(null, ["class1","class2","class3"])),cljs.core.list("﷑'classes",cljs.core.list("﷑'xpath","//div")))))));
}
}));
domina.test.add_test.call(null,"can retrieve the text value of a node with normalization.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<p>\n\n   Some text.  \n  </p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some text. ",domina.text.call(null,domina.xpath.call(null,"//p")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Some text. ",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//p")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Some text. ",domina.text.call(null,domina.xpath.call(null,"//p"),true))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Some text. ",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//p"),true))))));
}
}));
domina.test.add_test.call(null,"can retrieve the text value of a node without normalization.",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<p>\n\n   Some text.  \n  </p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"\n\n   Some text.  \n  ",domina.text.call(null,domina.xpath.call(null,"//p"),false))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","\n\n   Some text.  \n  ",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//p"),false))))));
}
}));
domina.test.add_test.call(null,"can set text on a single node",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<p></p>");
domina.set_text_BANG_.call(null,domina.xpath.call(null,"//p"),"Hello world!");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.call(null,"//p")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Hello world!",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//p")))))));
}
}));
domina.test.add_test.call(null,"can set text on a multiple nodes",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<p></p><p></p>");
domina.set_text_BANG_.call(null,domina.xpath.call(null,"//p"),"Hello world!");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.call(null,"//p[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Hello world!",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//p[1]")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Hello world!",domina.text.call(null,domina.xpath.call(null,"//p[2]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Hello world!",cljs.core.list("﷑'text",cljs.core.list("﷑'xpath","//p[2]")))))));
}
}));
domina.test.add_test.call(null,"can get a form field value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<form><input type='text' name='test' value='Test Value'></input></form>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.call(null,"//input")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Test Value",cljs.core.list("﷑'value",cljs.core.list("﷑'xpath","//input")))))));
}
}));
domina.test.add_test.call(null,"can set a form field value",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<form><input type='text' name='test'></input></form>");
domina.set_value_BANG_.call(null,domina.xpath.call(null,"//input"),"Test Value");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.call(null,"//input")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Test Value",cljs.core.list("﷑'value",cljs.core.list("﷑'xpath","//input")))))));
}
}));
domina.test.add_test.call(null,"can set multiple form field values",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<form><input type='text' name='test'></input><input type='text' name='test'></input></form>");
domina.set_value_BANG_.call(null,domina.xpath.call(null,"//input"),"Test Value");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.call(null,"//input[1]")))))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Test Value",cljs.core.list("﷑'value",cljs.core.list("﷑'xpath","//input[1]")))))));
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,"Test Value",domina.value.call(null,domina.xpath.call(null,"//input[2]")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","Test Value",cljs.core.list("﷑'value",cljs.core.list("﷑'xpath","//input[2]")))))));
}
}));
domina.test.add_test.call(null,"can get a node's innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div><p class='foobar'>some text</p></div>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,"<p class=\"foobar\">some text</p>",domina.html.call(null,domina.xpath.call(null,"//div")))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=","<p class=\"foobar\">some text</p>",cljs.core.list("﷑'html",cljs.core.list("﷑'xpath","//div")))))));
}
}));
domina.test.add_test.call(null,"can set a node's innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div></div>");
domina.set_html_BANG_.call(null,domina.xpath.call(null,"//div"),"<p class='foobar'>some text</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,1,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",1,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/div/p[@class='foobar']"))))))));
}
}));
domina.test.add_test.call(null,"can set multiple node's innerHTML",(function (){
domina.test.reset.call(null);
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),"<div></div><div></div>");
domina.set_html_BANG_.call(null,domina.xpath.call(null,"//div"),"<p class='foobar'>some text</p>");
if(cljs.core.truth_(cljs.core._EQ_.call(null,2,cljs.core.count.call(null,domina.nodes.call(null,domina.xpath.call(null,"//body/div/p[@class='foobar']"))))))
{return null;
} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'=",2,cljs.core.list("﷑'count",cljs.core.list("﷑'nodes",cljs.core.list("﷑'xpath","//body/div/p[@class='foobar']"))))))));
}
}));
domina.test.report = (function report(test_results){
domina.test.reset.call(null);
var G__2394__2395 = cljs.core.seq.call(null,test_results);

if(cljs.core.truth_(G__2394__2395))
{var G__2397__2399 = cljs.core.first.call(null,G__2394__2395);
var vec__2398__2400 = G__2397__2399;
var name__2401 = cljs.core.nth.call(null,vec__2398__2400,0,null);
var result__2402 = cljs.core.nth.call(null,vec__2398__2400,1,null);
var G__2394__2403 = G__2394__2395;

var G__2397__2404 = G__2397__2399;
var G__2394__2405 = G__2394__2403;

while(true){
var vec__2406__2407 = G__2397__2404;
var name__2408 = cljs.core.nth.call(null,vec__2406__2407,0,null);
var result__2409 = cljs.core.nth.call(null,vec__2406__2407,1,null);
var G__2394__2410 = G__2394__2405;

var result_div__2411 = domina.single_node.call(null,"<div class='test-result'></div>");

domina.set_text_BANG_.call(null,result_div__2411,name__2408);
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,result__2409,null))))
{domina.add_class_BANG_.call(null,result_div__2411,"failed");
domina.append_BANG_.call(null,result_div__2411,cljs.core.str.call(null,"<div class='message'>",result__2409,"</div>"));
} else
{domina.add_class_BANG_.call(null,result_div__2411,"passed");
}
domina.append_BANG_.call(null,domina.xpath.call(null,"//body"),result_div__2411);
var temp__3698__auto____2412 = cljs.core.next.call(null,G__2394__2410);

if(cljs.core.truth_(temp__3698__auto____2412))
{var G__2394__2413 = temp__3698__auto____2412;

{
var G__2415 = cljs.core.first.call(null,G__2394__2413);
var G__2416 = G__2394__2413;
G__2397__2404 = G__2415;
G__2394__2405 = G__2416;
continue;
}
} else
{}
break;
}
} else
{}
domina.prepend_BANG_.call(null,domina.xpath.call(null,"//body"),"<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures");
domina.set_text_BANG_.call(null,domina.by_id.call(null,"total-tests"),cljs.core.count.call(null,test_results));
var failure_count__2414 = cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.second,test_results)));

domina.set_text_BANG_.call(null,domina.by_id.call(null,"total-failures"),failure_count__2414);
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,failure_count__2414)))
{return domina.add_class_BANG_.call(null,domina.by_id.call(null,"test-summary"),"passed");
} else
{return domina.add_class_BANG_.call(null,domina.by_id.call(null,"test-summary"),"failed");
}
});
domina.test.test_results = cljs.core.doall.call(null,domina.test.run_tests.call(null));
domina.test.report.call(null,domina.test.test_results);
