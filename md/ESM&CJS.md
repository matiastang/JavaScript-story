# ESM&CJS

[ES6 模块与 CommonJS 模块的差异](https://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82)

## Node.js 的模块加载方法

JavaScript 现在有两种模块。一种是 ES6 模块，简称 ESM；另一种是 CommonJS 模块，简称 CJS。

CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。语法上面，两者最明显的差异是，CommonJS 模块使用require()和module.exports，ES6 模块使用import和export。

它们采用不同的加载方案。从 Node.js v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持。

Node.js 要求 ES6 模块采用.mjs后缀文件名。也就是说，只要脚本文件里面使用import或者export命令，那么就必须采用.mjs后缀名。Node.js 遇到.mjs文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定"use strict"。

如果不希望将后缀名改成.mjs，可以在项目的package.json文件中，指定type字段为module。
```
{
   "type": "module"
}
```
一旦设置了以后，该目录里面的 JS 脚本，就被解释用 ES6 模块。
```
# 解释成 ES6 模块
$ node my-app.js
```
如果这时还要使用 CommonJS 模块，那么需要将 CommonJS 脚本的后缀名都改成.cjs。如果没有type字段，或者type字段为commonjs，则.js脚本会被解释成 CommonJS 模块。

总结为一句话：.mjs文件总是以 ES6 模块加载，.cjs文件总是以 CommonJS 模块加载，.js文件的加载取决于package.json里面type字段的设置。

注意，ES6 模块与 CommonJS 模块尽量不要混用。require命令不能加载.mjs文件，会报错，只有import命令才可以加载.mjs文件。反过来，.mjs文件里面也不能使用require命令，必须使用import。

## CJS

`CJS` 采用的是动态同步加载，也就是说运行的时候确定加载的文件，很明显这样做有一个好处就是灵活，但是缺点就是无法很好的处理循环引用的问题。而且是同步加载，这会导致加载速度过慢。

## ESM

`ESM` 采用的是静态异步加载，最大的区别便是采用了静态分析。大家都知道 `import` 必须要写在文件的顶层，这也就是为了能够静态分析你需要加载的模块。首先他能很好的解决循环依赖的问题。
其次是异步加载。在 `CJS` 中，`JS` 的加载是同步进行的，也就是说我必须要等待上一个 `JS` 加载完成，才能够加载下一个 `JS`，大家也懂得，这样很明显浪费了 `Node` 异步的有点。这也就会导致如果 `JS` 文件过多，系统的启动时间会被大大加长。