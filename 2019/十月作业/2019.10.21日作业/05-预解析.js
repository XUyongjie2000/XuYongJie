// 5. 下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
var a = 25;
function f1() {
  var a = (b = c = 9);
  console.log(a); //?
  console.log(b); // ?
  console.log(c); // ?
}
f1();
console.log(a); //?
console.log(b); // ?
console.log(c); // ？
//直接看f1()  进入函数  a=b=c =9
// 输出abc 数值都为9
// f1输出完毕
// 继续输出
// a是全局作用域  a=25
// 第一个console输出值为25
// 剩下bc输出都为9
// 结果为  9 9 9 25 9 9
