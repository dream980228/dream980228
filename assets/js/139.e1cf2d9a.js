(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{662:function(t,r,s){"use strict";s.r(r);var e=s(3),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("Web应用程序[root]注册了JDBC驱动程序，但在Web应用程序停止时未能注销它。为了防止内存泄漏，jdbc驱动程序被强制注销")])]),t._v(" "),s("p",[t._v("这个应该就是jdbc驱动版本的问题，我当时mysql数据库版本是5.几，用的8.几的驱动包就报这个错误，然后换成了5.几驱动包就没有这个错误了，但是现在又换回8.几的包又不报这个错误了，也有可能是c3p0的原因。")]),t._v(" "),s("p",[s("strong",[t._v("c3p0让我吃了不少苦头")])]),t._v(" "),s("p",[t._v("开始使用的是2010的老版本，使用率比较高，但是我一访问就会报500的错误，查有的说是jar报冲突问题，我心想这个可麻烦了，最后又把c3p0升级版本，换到15年出的版本，也是同样的问题，最后清空target文件目录，再次重新运行就没有这样的问题了。")]),t._v(" "),s("p",[s("strong",[t._v("外部引入文件配置数据源")])]),t._v(" "),s("p",[t._v("如果数据库的数据源在外部文件中，需要引入到spring配置文件中。")]),t._v(" "),s("p",[t._v("但是需要注意命名")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("jdbc.driver"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("com.mysql.cj.jdbc.Driver\njdbc.url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("jdbc:mysql://localhost:3306/srcrs?useSSL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("amp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("serverTimezone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("UTC\njdbc.username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\njdbc.password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v("\n")])])]),s("p",[t._v("前面最好都加上一个jdbc，要不然就会出现一个错误，username是读取电脑主机名，我也不知道为啥。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/xysn/p/12720827.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("springboot启动报错：Handler dispatch failed; nested exception is java.lang.AbstractMethodError"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_32448811/article/details/93385974",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于spring通过外部引入文件配置数据源"),s("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);