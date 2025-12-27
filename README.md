# Big Event 项目

这是一个基于Vue 3和Vite构建的前端项目，用于管理大型活动相关的功能。

## 项目介绍

Big Event 是一个现代化的前端项目，采用Vue 3框架构建，提供活动管理功能，包括用户管理、文章管理等功能模块。

## 技术栈

- Vue 3
- Vite 7
- Pinia (状态管理)
- Element Plus (UI组件库)
- Axios (HTTP请求)
- Vue Router (路由管理)

## 功能特性

- 用户注册与登录
- 个人信息管理
- 文章分类管理
- 文章发布与管理

## 开发环境配置

### 安装依赖

```sh
npm install
```

### 启动开发服务器

```sh
npm run dev
```

### 构建生产版本

```sh
npm run build
```

### 预览生产构建

```sh
npm run preview
```

## API配置

开发环境下的API代理配置在 [vite.config.js](./vite.config.js) 中设置，所有 `/api` 开头的请求将被代理到 `http://localhost:8080`。

## 项目结构

```
src/
├── api/              # API接口定义
├── assets/           # 静态资源
├── router/           # 路由配置
├── stores/           # Pinia状态管理
├── utils/            # 工具函数
└── views/            # 页面组件
```

## 环境要求

- Node.js: ^20.19.0 || >=22.12.0

## 推荐IDE配置

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并禁用 Vetur)

## 推荐浏览器设置

- 基于Chromium的浏览器 (Chrome, Edge, Brave等):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [在Chrome DevTools中启用自定义对象格式化](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [在Firefox DevTools中启用自定义对象格式化](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## 项目配置

参考 [Vite 配置文档](https://vite.dev/config/)。