/*
 * @Description:
 * @Author: 安知鱼
 * @Email: anzhiyu-c@qq.com
 * @Date: 2023-08-22 11:34:10
 * @LastEditTime: 2023-09-02 21:53:30
 * @LastEditors: 安知鱼
 */
import { defineConfig } from "vitepress";
import { tabsMarkdownPlugin } from "vitepress-plugin-tabs";

const commitRef = process.env.COMMIT_REF?.slice(0, 8) || "dev";

const ogDescription = "快速、简单、安全地操作SQL";
const ogImage = "/cover2.jpg";
const ogTitle = "MercuySQL 官方文档";
const ogUrl = "";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MercurySQL 官方文档",
  description: "Pythonic SQL数据库操作",
  lang: "zh",
  base: "/",
  head: [
    ["link", { rel: "icon", type: "image/png", href: "/logo.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@anzhiyu" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
    // 添加百度统计代码
    [
      "script",
      {},
      `
      !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"KH2tRRaQoZps3uvA",ck:"KH2tRRaQoZps3uvA"});
       `,
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "PyPI", link: "https://pypi.org/project/MercurySQL" }],

    sidebar: [
      {
        text: "Mercury SQL简介",
        link: "/intro",
      },
      {
        text: "快速上手",
        items: [
          { text: "安装MercurySQL 💻", link: "/initall" },
          {
            text: "常见问题 📖",
            link: "/FAQ",
          },
        ],
      },
      {
        text: "进阶开发手册 📝",
        // collapsed: false,
        items: [
          { text: "API速查", link: "/advanced/API速查" },
        ],
      },

    ],

    socialLinks: [{ icon: "github", link: "https://github.com/BernieHuang2008/MercurySQL" }],

    algolia: {
      appId: "MRUHRUYDDD",
      apiKey: "b00081ef4943a1c8d937f20649632543",
      indexName: "anheyu",
      // searchParameters: {
      //   facetFilters: ["tags:en"],
      // },
      locales: {
        zh: {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    },

    footer: {
      message: `Released under the MIT License. (${commitRef})`,
      copyright: "Copyright © 2023 OpenTeens",
    },

    editLink: {
      pattern: "https://github.com/OpenTeens/MercurySQL_web/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
    config(md) {
      md.use(tabsMarkdownPlugin);
    },
  },
  locales: {
    root: { label: "简体中文", lang: "zh" },
  },
});
