---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: MercurySQL 官方文档
titleTemplate: 以更Python的方式操作SQL数据库

hero:
  name: "MercurySQL 官方文档"
  text: "更 Python 地操作 SQL 数据库"
  tagline: 快速、简单、安全地操作SQL
  actions:
    - theme: brand
      text: 快速上手
      link: /initall
    - theme: alt
      text: 简介
      link: /intro
  image:
        src: /cover2.webp
        alt: MercurySQL logo

features:
  - icon: 🚀
    title: 更Python的操作方式
    details: 提供与Python风格更一致的API，使SQL数据库操作更简洁易懂
  - icon: 😃
    title: 避免复杂SQL
    details: 减少编写复杂SQL语句的负担，易于学习和理解
  - icon: 🛡️
    title: 安全的数据库
    details: 使用安全查询，自动提交，保护数据库安全，防止数据丢失
  - icon: ⌛️
    title: Python调试
    details: 直接在Python中调试和检查数据库，无需复杂的SQL终端调试
  - icon: 🌈
    title: 功能丰富
    details: 提供创建、删除表格、添加记录等功能
  - icon: ⚙️
    title: 无依赖
    details: 仅依赖于Python自带的库（比如sqlite3），无额外依赖，**开箱即用**
---