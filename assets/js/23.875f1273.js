(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{549:function(s,t,a){"use strict";a.r(t);var e=a(3),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"某一元素是否包含某一集合成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#某一元素是否包含某一集合成员"}},[s._v("#")]),s._v(" 某一元素是否包含某一集合成员")]),s._v(" "),a("ul",[a("li",[s._v("基本语法")])]),s._v(" "),a("p",[s._v("[not] in")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("列出选修了001号课程的学生的学号和姓名")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,Sname From Student")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# in ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC Where C# = '001');")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例2")])]),s._v(" "),a("p",[s._v("求既学过001号课程，又学过002号课程的学生的学号。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = '001' and S# in")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC Where C# = '002');")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例3")])]),s._v(" "),a("p",[s._v("列出没学过李明老师讲授课程的所有同学姓名。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Sname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Student\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# not in")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC,Course C,Teacher T")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李明'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" SC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = C.C# and T.T# = C.T#);")]),s._v("\n")])])]),a("h2",{attrs:{id:"某一个集合是否包含另一个集合"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#某一个集合是否包含另一个集合"}},[s._v("#")]),s._v(" 某一个集合是否包含另一个集合")]),s._v(" "),a("ul",[a("li",[s._v("基本语法")])]),s._v(" "),a("p",[s._v("some,all")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("找出工资最低的教师姓名")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Tname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Teacher \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Salary "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Salary "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Teacher"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例2")])]),s._v(" "),a("p",[s._v("找出001号课程成绩不是最高的所有学生的学号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = '001' and Score < some (select Score From SC Where C# = '001');")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例3")])]),s._v(" "),a("p",[s._v("找出所有课程都不及格的学生姓名")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Sname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Student\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SC\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = Student.S#);")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例4")])]),s._v(" "),a("p",[s._v("找出001号课程成绩最高的所有学生的学号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = '001' and Score >= all")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = '001');")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例5")])]),s._v(" "),a("p",[s._v("找出98030101号同学成绩最低的课程号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = '98030101' and Score <= all")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = '98030101');")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例6")])]),s._v(" "),a("p",[s._v("找出张三同学成绩最低的课程号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC,Student S")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Sname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = SC.S# and")]),s._v("\nScore "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = S.S#);")]),s._v("\n")])])]),a("h2",{attrs:{id:"测试集合存在和不存在"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试集合存在和不存在"}},[s._v("#")]),s._v(" 测试集合存在和不存在")]),s._v(" "),a("ul",[a("li",[s._v("基本语法")])]),s._v(" "),a("p",[s._v("[not] Exists")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("检索选修了赵三老师主讲课程的所有同学姓名。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" Sname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Student\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Teacher \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" SC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = Course.C# and SC.S# = Student.S# and Course.T# = Teacher.T# and Tname = '赵三');")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例2")])]),s._v(" "),a("p",[s._v("检索学过001号教师主讲的所有课程的所有同学姓名。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Sname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Student \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Course \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = '001' and ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" SC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = Student.S# and SC.C# = Course.C#));")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例3")])]),s._v(" "),a("p",[s._v("列出没学过李明老师讲授任何一门课程的所有同学姓名")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Sname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Student\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("SC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Teacher \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Tname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李明'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" Course"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = Teacher.T# and Course.C# = SC.C# and S# = Student.S#)")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例4")])]),s._v(" "),a("p",[s._v("列出至少学过98030101号同学学过所有课程的同学的学号。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC SC1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SC SC2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" SC2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = '98030101' and ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SC \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = SC2.C# and S# = SC1.S#));")]),s._v("\n")])])]),a("p",[s._v("元组演算表达（特征：全称量词和存在量词）")]),s._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#]|t∈SC∧∀(u∈SC∧u[S#]='98030101')(∃(w∈SC)(w[S#]=t[S#]∧w[C#]=u[C#]))}")]),s._v("\n")])])]),a("p",[s._v("关系代数表达（选择，投影，乘除）")]),s._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[s._v("Πs"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,c#(SC) ÷ Πc#(σs#='98030101'(SC))")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例5")])]),s._v(" "),a("p",[s._v("已知SPJ(Sno,Pno,Jno,Qty)，其中Sno供应商号，Pno零件号，Jno工程号，Qty数量，列出至少用了供应商S1供应的全部零件的工程号。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" Jno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SPJ SPJ1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SPJ SPJ2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" SPJ2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Sno "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'S1'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" SPJ SPJ3\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" PSJ3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Pno "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SPJ2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Pno "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" SPJ3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Jno "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SPJ1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Jno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"五个基本聚集函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五个基本聚集函数"}},[s._v("#")]),s._v(" 五个基本聚集函数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("COUNT求个数")])]),s._v(" "),a("li",[a("p",[s._v("SUM求和")])]),s._v(" "),a("li",[a("p",[s._v("AVG求平均")])]),s._v(" "),a("li",[a("p",[s._v("MAX求最大")])]),s._v(" "),a("li",[a("p",[s._v("MIN求最小")])])]),s._v(" "),a("h2",{attrs:{id:"分组查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组查询"}},[s._v("#")]),s._v(" 分组查询")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("求每一学生的平均成绩")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,AVG(Score) From SC Group by S#;")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例2")])]),s._v(" "),a("p",[s._v("求每一门课程的平均成绩")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,AVG(Score) From SC Group by C#;")]),s._v("\n")])])]),a("h2",{attrs:{id:"分组过滤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组过滤"}},[s._v("#")]),s._v(" 分组过滤")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("求不及格课程超过两门的同学的学号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Having Count(*) > 2;")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例2")])]),s._v(" "),a("p",[s._v("求有10人以上不及格的课程号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From From SC ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" C"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Having Count(*) > 10;")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例3")])]),s._v(" "),a("p",[s._v("求有两门课以上不及格课程同学的学号及其平均成绩")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,AVG(Score) From SC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# in")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Having Count(*) > 2)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#;")]),s._v("\n")])])]),a("h2",{attrs:{id:"并运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并运算"}},[s._v("#")]),s._v(" 并运算")]),s._v(" "),a("ul",[a("li",[s._v("基本语句")])]),s._v(" "),a("p",[s._v("UNION")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("求学过002号课的同学或学过003号课的同学学号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC Where C# = '002'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC Where C# = '003';")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例2")])]),s._v(" "),a("p",[s._v("已知两个表")]),s._v(" "),a("p",[s._v("Customers(CID,Cname,City,Discnt)\nAgents(AID,Aname,City,Percent)")]),s._v(" "),a("p",[s._v("求客户所在的或者代理商所在的城市")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" City "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Customers\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNION")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" City "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Agents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"交运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交运算"}},[s._v("#")]),s._v(" 交运算")]),s._v(" "),a("ul",[a("li",[s._v("基本语句")])]),s._v(" "),a("p",[s._v("INTERSECT")]),s._v(" "),a("p",[s._v("求既学过002号课，又学过003号课的同学学号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC Where C# = '002'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTERSECT")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC Where C# = '003';")]),s._v("\n")])])]),a("h2",{attrs:{id:"差运算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#差运算"}},[s._v("#")]),s._v(" 差运算")]),s._v(" "),a("ul",[a("li",[s._v("基本语句")])]),s._v(" "),a("p",[s._v("EXCEPT")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("假定所有学生都有选课，求没学过002号课程的学生学号")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXCEPT")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# From SC Where C# = '002';")]),s._v("\n")])])]),a("h2",{attrs:{id:"视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图"}},[s._v("#")]),s._v(" 视图")]),s._v(" "),a("h3",{attrs:{id:"创建视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建视图"}},[s._v("#")]),s._v(" 创建视图")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("定义一个视图CompStud为计算机系的学生，通过该视图可以将Student表中其他系的学生屏蔽掉")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("View")]),s._v(" CompStud "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("As")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Student\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" D"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# in(select D# From Dept")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Dname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'计算机'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例2")])]),s._v(" "),a("p",[s._v("定义一个视图Teach为教师任课的情况，把Teacher表中的个人隐私方面的信息，如工资等信息屏蔽掉，仅反映其教哪门课及其学分等。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("View")]),s._v(" Teach "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("C"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Credit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Teacher T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Course C\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("T"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = C.T#);")]),s._v("\n")])])]),a("h3",{attrs:{id:"使用视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用视图"}},[s._v("#")]),s._v(" 使用视图")]),s._v(" "),a("p",[s._v("可以像使用table一样使用视图。")]),s._v(" "),a("ul",[a("li",[s._v("示例1")])]),s._v(" "),a("p",[s._v("检索主讲数据库的教师姓名，可使用Teach")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Teach T\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" T"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Cname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'数据库'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例2")])]),s._v(" "),a("p",[s._v("检索计算机系的所有学生，可使用CompStud")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" CompStud"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例3")])]),s._v(" "),a("p",[s._v("检索计算机系的年龄小于20的所有学生，我们可使用CompStud")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" CompStud \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" Sage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例4")])]),s._v(" "),a("p",[s._v("定义视图StudStat，描述学生的平均成绩、最高成绩，最低成绩等。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("View")]),s._v(" StudStat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,Sname,Avgs,MinS,MaxS,CNT)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#,Sname,AVG(Score),MIN(Score),MAX(Score),Count(*)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" Student S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("SC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# = SC.S#")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Group")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#);")]),s._v("\n")])])]),a("ul",[a("li",[s._v("示例5")])]),s._v(" "),a("p",[s._v("基于视图StudStat检索某一学生平均成绩")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" Sname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("Avgs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("From")]),s._v(" StudStat "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Where")]),s._v(" \nSname "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"视图的更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视图的更新"}},[s._v("#")]),s._v(" 视图的更新")]),s._v(" "),a("p",[s._v("对于视图的更新最终要反映到基本表中，因此更新操作需要好好思考一下，什么数据可以更新，什么不可以更新。")]),s._v(" "),a("p",[s._v("总结以下几点")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("如果视图的select目标列包含聚集函数，则不能更新。")])]),s._v(" "),a("li",[a("p",[s._v("如果视图的select子句中使用了unique或distinct，则不能更新。")])]),s._v(" "),a("li",[a("p",[s._v("如果视图包括了group by子句，则不能更新。")])]),s._v(" "),a("li",[a("p",[s._v("如果视图中包括了经过算术表达式计算出来的列，则不能更新。")])]),s._v(" "),a("li",[a("p",[s._v("如果视图是由单个表的列构成，但并没有包括主键，则不能更新。")])])]),s._v(" "),a("h2",{attrs:{id:"撤销视图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤销视图"}},[s._v("#")]),s._v(" 撤销视图")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Drop")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("View")]),s._v(" view_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"delete和drop的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete和drop的使用"}},[s._v("#")]),s._v(" delete和drop的使用")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("create对应drop")])]),s._v(" "),a("li",[a("p",[s._v("insert对应delete")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);