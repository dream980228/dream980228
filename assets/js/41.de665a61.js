(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{566:function(t,s,a){"use strict";a.r(s);var n=a(3),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("前几天在用"),a("code",[t._v("Prim")]),t._v("算法建最小生成树的时候，一直都没有实现，今天上实验课的时候，突发灵感，又去尝试了一下，可能是因为之前在解决单源最短路径的时候，觉得这两种算法有一些相似，也确实是如此。")])]),t._v(" "),a("h2",{attrs:{id:"prim算法历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prim算法历史"}},[t._v("#")]),t._v(" Prim算法历史")]),t._v(" "),a("p",[t._v("Prim算法(普里姆算法)，用于构造最小生成树，该算法与1930年由捷克数学家沃伊捷赫·亚尔尼克发现的，在1957年由美国计算机科学家罗伯特·普里姆独立发现，1959年艾兹格·迪科斯彻再次发现了该算法。所以普里姆又被叫做DJP算法、亚尔尼克算法或普里姆-亚尔尼克算法。")]),t._v(" "),a("h2",{attrs:{id:"prim算法思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prim算法思想"}},[t._v("#")]),t._v(" Prim算法思想")]),t._v(" "),a("p",[a("code",[t._v("Prim")]),t._v("算法是典型的以点建树，需要有两个集合，一个是边集合，一个是点集合。点集合保存已经连接它最短路径的点，以后每次从未在点集合中的点找距离已经在点集合中最近的点，直到所有的点都在点集合中结束。边集合就用于保存选中的那些边，两点成线，当选中一个点，也就选中了一条边。")]),t._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),a("p",[t._v("问题：有一无向图，给出其中的一些边，问，其中哪几条边可以构成最小生成树。")]),t._v(" "),a("h3",{attrs:{id:"输入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入"}},[t._v("#")]),t._v(" 输入")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("4 6\n1 2 2\n2 3 2\n2 4 1\n1 3 5\n3 4 3\n1 4 4\n")])])]),a("h3",{attrs:{id:"输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[t._v("#")]),t._v(" 输出")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[t._v("1 2 2\n2 4 1\n2 3 2\n")])])]),a("h2",{attrs:{id:"代码如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码如下"}},[t._v("#")]),t._v(" 代码如下")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("<bits/stdc++.h>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1e4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//保存已选中的点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EdgeNode")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//边的存储")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Node")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//已选中的边的存储")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" form"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//起始点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//终止点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//权值")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nvector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("EdgeNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bool")]),t._v(" vis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代表此点是否已加入到集合中")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("vis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("Max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sddr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    vis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//标记此点已在集合中")]),t._v("\n    q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//先将点1加入到集合中")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" Min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Max"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代表选中距离最近点的权值")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" v1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代表起始点")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" v2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代表选中点的编号")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//寻找一个最近的点")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" it"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                EdgeNode E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                E"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("vis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    Min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    v1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    v2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("E"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        vis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//标记选中的点在集合中")]),t._v("\n        q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加入到集合中")]),t._v("\n        Node g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将选择的边存储下来")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tcin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("k"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tcin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\tEdgeNode e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\te"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\ts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push_back")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sddr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tcout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" it"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("begin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v("G"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Node g"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("it"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("form "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("to "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" g"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("w "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" endl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=p.exports}}]);