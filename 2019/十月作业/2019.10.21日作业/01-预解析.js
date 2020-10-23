//1. 输出下列代码a的值分别是多少？并且把预解析的过程写出来
var a = 25;
function abc() {
  console.log(a); //undefined
  var a = 10;
}
abc();
console.log(a); //25

// 将局部作用域往上提  var =a
//前面只不执行  直接看abc()   返回第三行 因为a没有赋值 所以输出为undefined
// 继续往下执行 a被赋值为10  abc() 执行完毕 继续往下   第二个输出的a为全局作用域
// 所以输出a为25
// var a = 25;
// function abc() {
//   var a;
//   console.log(a); // undefined
//   a = 10;
// }
// abc();
// console.log(a); //25
