module.exports = {
  title: "srcrs",
  description: "A whole place about me",
   head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.svg' }],//站点图标
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/assets/img/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/assets/img/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/assets/img/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
	['meta', { name: 'viewport', 'content': 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
   // 使用的主题
  theme: 'meteorlxy',
  themeConfig: {

    // 个人信息（可删除）
    personalInfo: {
      // 昵称
      nickname: 'srcrs',

      // 个人简介
      description: 'Happy Coding<br/>Happy Life',

      // 电子邮箱
      email: 'srcrs@foxmail.com',

      // 所在地
      location: 'XinYang City, China',

      // 组织
      // organization: 'Xi\'an Jiao Tong University',

      // 头像
      avatar: '/assets/img/head.svg',

      // 社交平台帐号信息
      sns: {
        // Github 帐号和链接
        github: {
          account: 'srcrs',
          link: 'https://github.com/srcrs',
        },
      },
    },

    // 上方 header 的相关设置
    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        url: '/assets/img/background.svg',
        // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
         useGeo: false,
      },

      // 是否在 header 显示标题
      showTitle: true,
    },

    // 是否显示文章的最近更新时间
    lastUpdated: true,

    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2019-present <br/><a href="https://github.com/srcrs" target="_blank">srcrs</a> | MIT',
    },

    // 顶部导航栏内容
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false },
      { text: 'Share', link: '/share/', exact: false },
      { text: 'Github', link: 'https://github.com/srcrs' },
    ],

    // 评论配置，参考下方 [页面评论] 章节
    comments: {
      platform: 'github',
      owner: 'srcrs',
      repo: 'comment',
      clientId: '9601fd4196d77c044a86',
      clientSecret: 'cb29c9a4d3e4e6f65718f416ac8ed1df81dec3de',
    },

    // 分页配置
    pagination: {
      perPage: 9,
    },

    // 默认页面（可选，默认全为 true）
    defaultPages: {
      // 是否允许主题自动添加 Home 页面 (url: /)
      home: true,
      // 是否允许主题自动添加 Posts 页面 (url: /posts/)
      posts: true,
    },
  },
  "plugins": [
    "vuepress-theme-meteorlxy",
    "flowchart",
	["sitemap", { 
		hostname: 'https://srcrs.top'
	}],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
	['vuepress-plugin-goatcounter',{
		'user': 'srcrs'
	}]
  ]
}