(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{606:function(t,e,n){"use strict";n.r(e);var d=n(3),c=Object(d.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"简述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简述"}},[t._v("#")]),t._v(" 简述")]),t._v(" "),n("p",[t._v("今天终于把填空题弄上去了，其实早就可以弄上去的，但是一直在纠结能够智能识别题目类型的问题。")]),t._v(" "),n("p",[t._v("起初都是用答案来判断一道题是哪种类型的题，像判断，选择，它们的答案都是有限的，只需要判断答案是不是属于这个集合里的就行了，但是填空题就不一样了，答案的类型没有什么特别的特征，很有可能与别的类型的题混合到一起，所以这次就改变了一下思路，用户必须要带一个大标题，用特定的文字标明是什么类型的题，这样就减少一道题分错类的可能性。在写填空题的时候我就在想，除了判断选择那就是填空了，但是这样是不对的，假如说有其他的题型加入，就没法了。")]),t._v(" "),n("p",[t._v("现在遇到的问题也挺多的，有很多的bug我都感觉是不可避免的，以后还是要慢慢想想咋解决。")]),t._v(" "),n("p",[t._v("填空题现在未解决的问题")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("题目中包含括号，将会默认当成答案。")])]),t._v(" "),n("li",[n("p",[t._v("答案的类型数目多，可能以后还要添加。")])])]),t._v(" "),n("p",[t._v("我觉得现在按照这样的方式，用户也并不会多增加什么麻烦，以前直接导入进去就行了，现在可能得把像"),n("code",[t._v("一、填空")]),t._v("这样类似的大标题得和我预定的改成一样的，还可以吧。现在得话，缺少这个大标题是识别不了题目是什么类型的，思路就是遇到大标题就，就判断属于哪一种类型，然后创建对象，到遇到下一个大标题开始，都是这种类型的题。")]),t._v(" "),n("p",[t._v("也得好好弄一个怎么使用的说明，毕竟只是一个命令行界面，其实也可以搞一个图形界面，但是我觉得没必要，能用不就行了。")]),t._v(" "),n("p",[t._v("仓库地址：https://github.com/srcrs/ItemBank\n说明：")]),t._v(" "),n("ol",[n("li",[t._v("现在只支持单选题，多选题，判断题和填空题。")]),t._v(" "),n("li",[t._v("必须包含大标题，否则将无法运行。关于大标题写法可参考仓库地址。")]),t._v(" "),n("li",[t._v("答案必须在括号中。")]),t._v(" "),n("li",[t._v("题号不可缺少(一般下载的题都包括题号，应该不是大问题)。")]),t._v(" "),n("li",[t._v("若对格式还有疑问请参考仓库地址，有例子。")])]),t._v(" "),n("p",[t._v("样例：")]),t._v(" "),n("div",{staticClass:"language-md extra-class"},[n("pre",{pre:!0,attrs:{class:"language-md"}},[n("code",[t._v("一、填空\n1．数据库系统一般由（数据库）、应用系统、（数据库管理系统）、（数据库管理员）和用户构成。\n2．数据模型通常由（数据结构）、（数据操作）、（数据的约束条件）三部分组成。\n3．实体之间的联系可抽象为三类，它们是（一对一）、（一对多）、（多对多）。\n4．在数据库设计中，（数据字典）是系统中各类数据描述的集合，是进行详细的数据收集和数据分析所获得的主要成果。\n")])])]),n("h2",{attrs:{id:"一、填空"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、填空"}},[t._v("#")]),t._v(" 一、填空")]),t._v(" "),n("form",{attrs:{id:"4-1"}},[t._v("\n1．数据库系统一般由[1]、应用系统、[2]、[3]和用户构成。\n"),n("br"),t._v("\n[1]:"),n("input",{attrs:{type:"text",id:"4-1-1",name:"xxx"}}),t._v(" "),n("br"),t._v("\n[2]:"),n("input",{attrs:{type:"text",id:"4-1-2",name:"xxx"}}),t._v(" "),n("br"),t._v("\n[3]:"),n("input",{attrs:{type:"text",id:"4-1-3",name:"xxx"}}),t._v(" "),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('4-1-1').value=='数据库'&&document.getElementById('4-1-2').value=='数据库管理系统'&&document.getElementById('4-1-3').value=='数据库管理员'){document.getElementById('4-1').style.color='#3eaf7c'}else{document.getElementById('4-1').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"4-2"}},[t._v("\n2．数据模型通常由[1]、[2]、[3]三部分组成。\n"),n("br"),t._v("\n[1]:"),n("input",{attrs:{type:"text",id:"4-2-1",name:"xxx"}}),t._v(" "),n("br"),t._v("\n[2]:"),n("input",{attrs:{type:"text",id:"4-2-2",name:"xxx"}}),t._v(" "),n("br"),t._v("\n[3]:"),n("input",{attrs:{type:"text",id:"4-2-3",name:"xxx"}}),t._v(" "),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('4-2-1').value=='数据结构'&&document.getElementById('4-2-2').value=='数据操作'&&document.getElementById('4-2-3').value=='数据的约束条件'){document.getElementById('4-2').style.color='#3eaf7c'}else{document.getElementById('4-2').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"4-3"}},[t._v("\n3．实体之间的联系可抽象为三类，它们是[1]、[2]、[3]。\n"),n("br"),t._v("\n[1]:"),n("input",{attrs:{type:"text",id:"4-3-1",name:"xxx"}}),t._v(" "),n("br"),t._v("\n[2]:"),n("input",{attrs:{type:"text",id:"4-3-2",name:"xxx"}}),t._v(" "),n("br"),t._v("\n[3]:"),n("input",{attrs:{type:"text",id:"4-3-3",name:"xxx"}}),t._v(" "),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('4-3-1').value=='一对一'&&document.getElementById('4-3-2').value=='一对多'&&document.getElementById('4-3-3').value=='多对多'){document.getElementById('4-3').style.color='#3eaf7c'}else{document.getElementById('4-3').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"4-4"}},[t._v("\n4．在数据库设计中，[1]是系统中各类数据描述的集合，是进行详细的数据收集和数据分析所获得的主要成果。\n"),n("br"),t._v("\n[1]:"),n("input",{attrs:{type:"text",id:"4-4-1",name:"xxx"}}),t._v(" "),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('4-4-1').value=='数据字典'){document.getElementById('4-4').style.color='#3eaf7c'}else{document.getElementById('4-4').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("h2",{attrs:{id:"二、单选择"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、单选择"}},[t._v("#")]),t._v(" 二、单选择")]),t._v(" "),n("form",{attrs:{id:"2-1"}},[t._v("\n1.数据库管理系统的英文缩写是。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-1-A",name:"xxx"}}),t._v("A.DB\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-1-B",name:"xxx"}}),t._v("B.DBS\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-1-C",name:"xxx"}}),t._v("C.DBMS\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-1-D",name:"xxx"}}),t._v("D.DBSS\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('2-1-C').checked){document.getElementById('2-1').style.color='#3eaf7c'}else{document.getElementById('2-1').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"2-2"}},[t._v("\n2.是按照一定的数据模型组织的，长期储存在计算机内，可为多个用户共享的数据的集合。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-2-A",name:"xxx"}}),t._v("A.数据库系统\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-2-B",name:"xxx"}}),t._v("B.数据库\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-2-C",name:"xxx"}}),t._v("C.关系数据库\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-2-D",name:"xxx"}}),t._v("D.数据库管理系统\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('2-2-B').checked){document.getElementById('2-2').style.color='#3eaf7c'}else{document.getElementById('2-2').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"2-3"}},[t._v("\n3.关系数据模型的三个组成部分中，不包括\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-3-A",name:"xxx"}}),t._v("A.完整性规则\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-3-B",name:"xxx"}}),t._v("B.数据结构\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-3-C",name:"xxx"}}),t._v("C.数据操作\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-3-D",name:"xxx"}}),t._v("D.并发控制\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('2-3-D').checked){document.getElementById('2-3').style.color='#3eaf7c'}else{document.getElementById('2-3').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"2-4"}},[t._v("\n4.关系代数表达式的优化策略中，首先要做的是\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-4-A",name:"xxx"}}),t._v("A.对文件进行预处理\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-4-B",name:"xxx"}}),t._v("B.尽早执行选择运算\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-4-C",name:"xxx"}}),t._v("C.执行笛卡儿积运算\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-4-D",name:"xxx"}}),t._v("D.投影运算\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('2-4-B').checked){document.getElementById('2-4').style.color='#3eaf7c'}else{document.getElementById('2-4').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"2-5"}},[t._v("\n5.事务有多个性质，其中不包括\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-5-A",name:"xxx"}}),t._v("A.一致性\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-5-B",name:"xxx"}}),t._v("B.惟一性\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-5-C",name:"xxx"}}),t._v("C.原子性\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"2-5-D",name:"xxx"}}),t._v("D.隔离性\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('2-5-B').checked){document.getElementById('2-5').style.color='#3eaf7c'}else{document.getElementById('2-5').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("h2",{attrs:{id:"三、多选择"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、多选择"}},[t._v("#")]),t._v(" 三、多选择")]),t._v(" "),n("form",{attrs:{id:"3-6"}},[t._v("\n6.SQL语言通常称为。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-6-A",name:"xxx"}}),t._v("A.结构化查询语言\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-6-B",name:"xxx"}}),t._v("B.结构化控制语言\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-6-C",name:"xxx"}}),t._v("C.结构化定义语言\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-6-D",name:"xxx"}}),t._v("D.结构化操纵语言\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('3-6-A').checked&&document.getElementById('3-6-B').checked&&!document.getElementById('3-6-C').checked&&!document.getElementById('3-6-D').checked){document.getElementById('3-6').style.color='#3eaf7c'}else{document.getElementById('3-6').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"3-7"}},[t._v("\n7.如何构造出一个合适的数据逻辑结构是主要解决的问题。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-7-A",name:"xxx"}}),t._v("A.关系数据库优化\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-7-B",name:"xxx"}}),t._v("B.数据字典\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-7-C",name:"xxx"}}),t._v("C.关系数据库规范化理论\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-7-D",name:"xxx"}}),t._v("D.关系数据库查询\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('3-7-A').checked&&document.getElementById('3-7-C').checked&&!document.getElementById('3-7-D').checked&&!document.getElementById('3-7-B').checked&&!document.getElementById('3-7-D').checked){document.getElementById('3-7').style.color='#3eaf7c'}else{document.getElementById('3-7').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"3-8"}},[t._v("\n8.要保证数据库逻辑数据独立性，需要修改的是。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-8-A",name:"xxx"}}),t._v("A.模式\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-8-B",name:"xxx"}}),t._v("B.模式与内模式的映射\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-8-C",name:"xxx"}}),t._v("C.模式与外模式的映射\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-8-D",name:"xxx"}}),t._v("D.内模式\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('3-8-A').checked&&document.getElementById('3-8-C').checked&&!document.getElementById('3-8-D').checked&&!document.getElementById('3-8-B').checked&&!document.getElementById('3-8-D').checked&&!document.getElementById('3-8-B').checked&&!document.getElementById('3-8-D').checked){document.getElementById('3-8').style.color='#3eaf7c'}else{document.getElementById('3-8').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"3-9"}},[t._v("\n9.下列四项中，不属于数据库特点的是。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-9-A",name:"xxx"}}),t._v("A.数据共享\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-9-B",name:"xxx"}}),t._v("B.数据完整性\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-9-C",name:"xxx"}}),t._v("C.数据冗余很高\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-9-D",name:"xxx"}}),t._v("D.数据独立性高\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('3-9-A').checked&&document.getElementById('3-9-C').checked&&!document.getElementById('3-9-D').checked&&!document.getElementById('3-9-B').checked&&!document.getElementById('3-9-D').checked&&!document.getElementById('3-9-B').checked&&!document.getElementById('3-9-D').checked&&!document.getElementById('3-9-B').checked&&!document.getElementById('3-9-D').checked){document.getElementById('3-9').style.color='#3eaf7c'}else{document.getElementById('3-9').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"3-10"}},[t._v("\n10.学生社团可以接纳多名学生参加，但每个学生只能参加一个社团，从社团到学生之间的联系类型是。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-10-A",name:"xxx"}}),t._v("A.多对多\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-10-B",name:"xxx"}}),t._v("B.一对一\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-10-C",name:"xxx"}}),t._v("C.多对一\n"),n("br"),t._v(" "),n("input",{attrs:{type:"checkbox",id:"3-10-D",name:"xxx"}}),t._v("D.一对多\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('3-10-A').checked&&document.getElementById('3-10-D').checked&&!document.getElementById('3-10-B').checked&&!document.getElementById('3-10-B').checked&&!document.getElementById('3-10-B').checked&&!document.getElementById('3-10-B').checked&&!document.getElementById('3-10-C').checked){document.getElementById('3-10').style.color='#3eaf7c'}else{document.getElementById('3-10').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("h2",{attrs:{id:"四、判断"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、判断"}},[t._v("#")]),t._v(" 四、判断")]),t._v(" "),n("form",{attrs:{id:"1-1"}},[t._v("\n1.数据库安全控制的目的是防止非法对数据库的使用和对数据库的恶意破坏。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-1-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-1-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-1-T').checked){document.getElementById('1-1').style.color='#3eaf7c'}else{document.getElementById('1-1').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-2"}},[t._v("\n2.面向集合的操作方式是SQL语言的特点之一。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-2-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-2-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-2-T').checked){document.getElementById('1-2').style.color='#3eaf7c'}else{document.getElementById('1-2').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-3"}},[t._v("\n3.面向对象的操作方式是SQL语言的特点之一。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-3-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-3-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-3-F').checked){document.getElementById('1-3').style.color='#3eaf7c'}else{document.getElementById('1-3').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-4"}},[t._v("\n4.日志文件是用于数据库恢复的重要文件。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-4-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-4-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-4-T').checked){document.getElementById('1-4').style.color='#3eaf7c'}else{document.getElementById('1-4').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-5"}},[t._v("\n5.在登录日志文件时，应该先更新数据库，后登录日志文件。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-5-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-5-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-5-F').checked){document.getElementById('1-5').style.color='#3eaf7c'}else{document.getElementById('1-5').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-6"}},[t._v("\n6.飞机的座位与乘客之间的联系是一对一联系。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-6-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-6-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-6-T').checked){document.getElementById('1-6').style.color='#3eaf7c'}else{document.getElementById('1-6').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-7"}},[t._v("\n7.判断一个并发调度是否正确，可以用“可串行化”概念来解决。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-7-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-7-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-7-T').checked){document.getElementById('1-7').style.color='#3eaf7c'}else{document.getElementById('1-7').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-8"}},[t._v("\n8.对关系模型来说，范式级别越高，实际应用效果越好。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-8-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-8-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-8-T').checked){document.getElementById('1-8').style.color='#3eaf7c'}else{document.getElementById('1-8').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-9"}},[t._v("\n9.视图是关系数据库系统提供给用户以多种角度观察数据库中的数据的重要机制。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-9-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-9-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-9-T').checked){document.getElementById('1-9').style.color='#3eaf7c'}else{document.getElementById('1-9').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-10"}},[t._v("\n10.索引有助于提高数据检索的速度，因此建立索引的数量越多越好。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-10-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-10-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-10-F').checked){document.getElementById('1-10').style.color='#3eaf7c'}else{document.getElementById('1-10').style.color='#F4606C'}"}},[t._v("确定")])]),t._v(" "),n("form",{attrs:{id:"1-11"}},[t._v("\n11.一个基本表最多只能有一个索引。\n"),n("br"),t._v(" "),n("input",{attrs:{type:"radio",id:"1-11-T",name:"xxx"}}),t._v("T\n"),n("input",{attrs:{type:"radio",id:"1-11-F",name:"xxx"}}),t._v("F\n"),n("br")]),t._v(" "),n("p",[n("button",{attrs:{onClick:"javascript:if(document.getElementById('1-11-F').checked){document.getElementById('1-11').style.color='#3eaf7c'}else{document.getElementById('1-11').style.color='#F4606C'}"}},[t._v("确定")])])])}),[],!1,null,null,null);e.default=c.exports}}]);