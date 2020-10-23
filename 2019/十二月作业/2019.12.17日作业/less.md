# Less

## 快速入门

Less是一门CSS预处理语言，它扩展了CSS语言，增加了变量、Mixin、函数等特性，使CSS更易维护和扩展。

Less可以运行在Node或浏览器端

例子：

![image-20191216145022883](C:\Users\99706\AppData\Roaming\Typora\typora-user-images\image-20191216145022883.png)

输出：
![image-20191216145043094](C:\Users\99706\AppData\Roaming\Typora\typora-user-images\image-20191216145043094.png)



# 使用方法

1.Less可以在node.js环境下运行

2.Less可以在浏览器中直接运行

3.构建工具配置loader自动编译

（2.1）浏览器中运行方式一：
步骤：
1.编写less文件
2.引入less文件
3.引入less.js
4.运行
（2.2）浏览器中运行方式二：
步骤：
1.编写less文件
2.利用工具转换为css文件   （vscode下载插件  或者在线转换网页）
3.引入css文件

# 安装

在服务器端最容易的安装方式就是通过 npm （[node.js](http://nodejs.org/) 的包管理器），方法如下：

```bash
$ npm install -g less
```

# 命令行用法

安装 Less 后，就可以在命令行上调用 Less 编译器了，如下：

```bash
$ lessc styles.less
```

这将输出编译之后的 CSS 代码到 `stdout`，你可以将输出重定向到一个文件：

```bash
$ lessc styles.less > styles.css
```

若要输出压缩过的 CSS，只需添加 `-x` 选项。如果希望获得更好的压缩效果，还可以通过 `--clean-css` 选项启用 [Clean CSS](https://github.com/GoalSmashers/clean-css) 进行压缩。

执行 lessc 且不带任何参数，就会在命令行上输出所有可用选项的列表。

# 配置

可以给编译器传递多个参数：

```js
var parser = new(less.Parser)({
  paths: ['.', './lib'], // Specify search paths for @import directives
  filename: 'style.less' // Specify a filename, for better error messages
});

parser.parse('.class { width: (1 + 1) }', function (e, tree) {
  tree.toCSS({
    // Minify CSS output
    compress: true
  });
});
```

# 客户端用法

> 在浏览器上跑 less.js 非常方便开发，但是不推荐用于生产环境。

在客户端使用 Less.js 是最容易的方式，并且在开发阶段很方便，但是，在生产环境中，性能和可靠性非常重要，*我们建议最好使用 node.js 或其它第三方工具进行预编译*。

那就开始吧，在页面中加入 `.less` 样式表的链接，并将 `rel` 属性设置为 "`stylesheet/less`"：

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

接下来，[下载 less.js](https://github.com/less/less.js/archive/master.zip) 并通过 `` 标签将其引入，放置于页面的 `` 元素内：

```html
<script src="less.js" type="text/javascript"></script>
```

### 提示

- 务必确保在 less.js 之前加载你的样式表。
- 如果加载多个 `.less` 样式表文件，每个文件都会被单独编译。因此，一个文件中所定义的任何变量、mixin 或命名空间都无法在其它文件中访问。

## 客户端设置参数

在<script src="kess.js"></script>之前定义全局的 `less` 对象就可以为 Less.js 设置参数：

```html
<!-- set options before less.js script -->
<script>
  less = {
    env: "development",
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    rootpath: ":/a.com/"
  };
</script>
<script src="less.js"></script>
```

# 函数手册

## 函数

Less支持的所有内置的函数

# 杂项函数

#### color

解析颜色，将代表颜色的字符串转换为颜色值

参数： `string`: a string of the specified color.

返回值： `color`

实例： `color("#aaa");`

输出结果： `#aaa`

#### convert

将数字从一种单位转换到另一种单位

第一个参数为单位的数值，第二个参数为单位。如果两个参数的单位是兼容的，则数字的单位被转换，如果两个参数的单位不兼容，则原样返回第一个参数


*兼容的单位是*：

- 长度： `m`, `cm`, `mm`, `in`, `pt` and `pc`,
- 时间：`s` and `ms`,
- 角度： `rad`, `deg`, `grad` and `turn`.

参数：

- `number`: a floating point number with units.
- `identifier`, `string` or `escaped value`: units

返回值： `number`

实例：

```less
convert(9s, "ms")
convert(14cm, mm)
convert(8, mm) // incompatible unit types
```

输出结果：

```
9000ms
140mm
8
```