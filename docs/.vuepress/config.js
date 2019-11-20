const getConfig = require("vuepress-bar");
const barConfig = getConfig("docs", {
  addReadMeToFirstGroup: false
});

module.exports = {
  base: "/docs/",

  themeConfig: {
    sidebar: barConfig.sidebar,
    displayAllHeaders: true,

    repo: "bromberglab/bio-node",
    docsRepo: "bromberglab/bio-node-docs",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true
  },
  markdown: {
    anchor: { permalink: false, permalinkBefore: false, permalinkSymbol: "§" }
  },
  plugins: [["vuepress-plugin-mathjax", {}]]
};
