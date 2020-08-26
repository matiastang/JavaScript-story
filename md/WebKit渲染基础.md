# WebKit渲染基础

[图灵社区](https://www.ituring.com.cn/)
[理解WebKit和Chromium](https://www.ituring.com.cn/book/1210)
[WebKit渲染基础](https://www.ituring.com.cn/book/miniarticle/40625)

## 介绍

`WebKit`是一个渲染引擎，而不是一个浏览器，它专注于网页内容展示，其中渲染是其中核心的部分之一。

那么什么是`DOM`？简单来说，`DOM`是对`HTML`或者`XML`等文档的一种结构化表示方法，通过这种方式，用户可以通过提供标准的接口来访问`HTML`页面中的任何元素的相关属性，并可对`DOM`进行相应的添加、删除和更新操作等。

基于`DOM`树的一些可视`（visual）`的节点，`WebKit`来根据需要来创建相应的`RenderObject`节点，这些节点也构成了一颗树，称之为`Render`树。基于`Render`树，`WebKit`也会根据需要来为它们中的某些节点创建新的`RenderLayer`节点，从而形成一棵`RenderLayer`树。

`Render`树和`RenderLayer`树是`WebKit`支持渲染所提供的基础但是却非常重要的设施。这是因为`WebKit`的布局计算依赖它们，浏览器的渲染和`GPU`硬件加速也都依赖于它们。幸运地是，得益于它们接口定义的灵活性，不同的浏览器可以很方便地来实现自己的渲染和加速机制。

为了直观了解这三种树，下图给出了这三种树及其它们之间的对应关系
![rander](./images/rander.gif)

## DOM 树

## Rander树

## RanderLayer树