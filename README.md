# vue-interview-demo

## 开发环境要求

- `WebStorm`
- `webpack`
- `eslint`

## 语言要求

- 熟悉 `js` `css` `html5`
- 了解 `es6`

## 框架、库要求

- 熟悉 `vue` `vuex` `vue router`
- 熟悉 `axios`
- 了解 `vuetify`

## 说说你的思路

1. 使用 vuex 如何布置 API 接口。
1. 结合 vuex 如何实现跨组件刷新列表。

## 实现对添加、修改、删除地址

#### 需求

1. 添加、修改、删除地址
1. 地址添加后刷新 `AddrList` 组件
1. 列表中，详细地址超过10个字，隐藏多余的，显示 ...，使用 tooltip 显示完整详细地址
1. 地址可批量删除

#### 字段

Table Field | Description
----------- | -----------
addrid      | 必填，地址ID
consignee   | 必填，收件人
mobile      | 必填，手机
desc        | 必填，详细地址
memo        | 选填，备注

#### API

- `https://api.jyb.com.tw/demo-address/index` 列表
  - GET
- `https://api.jyb.com.tw/demo-address/create` 添加
  - POST
  - `consignee`
  - `mobile`
  - `desc`
  - `memo`
- `https://api.jyb.com.tw/demo-address/view` 查看
  - GET
  - `addrid` 
- `https://api.jyb.com.tw/demo-address/update` 修改
  - POST
  - `addrid`
  - `consignee`
  - `mobile`
  - `desc`
  - `memo`
- `https://api.jyb.com.tw/demo-address/delete` 删除
  - POST
  - `addrids` 多个地址ID使用半角逗号隔开

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8889
npm run dev

# build for production with minification
npm run build
```
