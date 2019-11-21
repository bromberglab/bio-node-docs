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
  plugins: [
    ["vuepress-plugin-mathjax", {}],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ]
  ]
};
