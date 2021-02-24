module.exports = {
  title: "L3gacy03-Blog",
  description: "L3gacy03的前端博客",
    base: '/L3gacy03-blog/',
  head: [
    ["link", { rel: "icon", href: "/onepunch.jpeg" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "L3gacy的前端博客",
      },
    ]
  ],
  themeConfig: {
    repo: "L3gacy03/blog",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "L3gacy03/blog",
    docsDir: "docs",
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "Edit this page",
    // displayAllHeaders: true,
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // 页面滚动效果
    smoothScroll: true,
    sidebar: [
      // {
      //   title: "Vue系列  ( 已完结..)",
      //   collapsable: false,
      //   children: [
      //     ["vue/vue", "说说你对vue的理解?"],
      //     ["vue/spa", "说说你对SPA（单页应用）的理解?"],
      //     ["vue/show_if", "Vue中的v-show和v-if怎么理解？"]
      //   ]
      // }
    ],
  },
  markdown: {
    lineNumbers: true,
  },
};
