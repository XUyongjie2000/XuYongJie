// 2.输出下列代码a的值分别是多少？并且把预解析的过程写出来
var a = 25;
function abc() {
  console.log(a); // 25
  a = 10;
}
abc();
console.log(a); // 10
// 直接看abc()  进入函数 输出a  a没有赋值 往上找
// 输出a等于25  往下走  a赋值等于10
// abc()完毕  全局作用域输出a  a被赋值10  输出值为10
