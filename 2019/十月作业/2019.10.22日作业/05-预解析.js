// 5.下列代码控制台打印出的值是多少？写出执行过程
console.log(a); // [Function: a]
var a = "666";
function a() {
  console.log("我是函数");
}
console.log(a); // 666
//  当函数名和变量名相同时 先提升函数名  在提升变量名
// 所以先提升函数a  再提升变量a
//先输出函数a   得[Function: a]
//然后继续运行  a被赋值666
//最后输出a 得值为666
