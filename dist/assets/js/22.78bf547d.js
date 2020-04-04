(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{367:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("实现数据库的动态完整性，能够避免一些不必要的错误。例如当一个人的学号修改了，则相应的选课表等基本表的学号也要修改。")])]),s._v(" "),a("h2",{attrs:{id:"示例1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例1"}},[s._v("#")]),s._v(" 示例1")]),s._v(" "),a("p",[s._v("设计一个触发器当进行Teacher表更新元组时，使其工资只能升不能降。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" teacher_chgsal\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义触发器的名字")]),s._v("\nbefore updata "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" salary\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#触发条件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" teacher\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对应的表")]),s._v("\nreferencing new x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" old y\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("salary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v(" \nraise_application_reeor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20003")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'invalid salary on updata'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Oracle报错函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"示例2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例2"}},[s._v("#")]),s._v(" 示例2")]),s._v(" "),a("p",[s._v("假设student(S#,Sname,SumCourse),SumCourse为该同学已学习的课程的门数，初始值为0，以后没选秀一门课都要对其增1。设计一个触发器自动完成上述功能。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" sumc \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#触发条件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" sc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对应的表")]),s._v("\nreferencing new newi\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" student "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" SumCourse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SumCourse "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = :newi.S#;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#相应动作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"示例3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例3"}},[s._v("#")]),s._v(" 示例3")]),s._v(" "),a("p",[s._v("假设student(S#,Sname,Sage,Ssex,Sclass)中某一学生药变更其主码S#的值，如使其原来的98030101变更为99030101，此时sc表中该同学已选课的S#也需要随其改变。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" updS"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#触发器名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#触发条件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" student\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#相应的表")]),s._v("\nreferencing old oldi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new newi\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" sc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = newi.S# where S# = :oldi.S#;")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#动作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n")])])]),a("h2",{attrs:{id:"示例4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例4"}},[s._v("#")]),s._v(" 示例4")]),s._v(" "),a("p",[s._v("假设student(S#,Sname,SumCouse)，当删除某一同学S#时，该同学的所有选课也都要删除。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" delS"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" Student\nreferncing old oldi\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" sc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = :oldi.S#;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"示例5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例5"}},[s._v("#")]),s._v(" 示例5")]),s._v(" "),a("p",[s._v("假设student(S#,Sname,SumCourse)，当删除某一同学S#时，该同学的所有选课中的S#都要置为空值。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" delS"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("after")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" Student\nreferencing old oldi\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" sc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = Null where S# = :oldi.S#;")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"示例6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例6"}},[s._v("#")]),s._v(" 示例6")]),s._v(" "),a("p",[s._v("假设Dept(D#,Dname,Dean)，而Dean一定是该系教师Teacher(T#,Tname,D#,Salary)中工资最高的教师。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("trigger")]),s._v(" upddean \nbefore "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("of")]),s._v(" Dean\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" Dept\nreferencing old oldi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("new newi\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for each row")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("when")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dean "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Tname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Teacher "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" D"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = :newi.D#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" salary "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" salary "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Teacher "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" D"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = :newi.D#)))")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  raise_application_error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20003")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'invalid Dean on update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);