// 7.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
function a(b) {
  console.log(b); //?
  var s = b();
  console.log(s); // ?
}
a(c);
function c() {
  return 123;
}
//直接看a(c)  括号为c  赋值给b  输出打印
// 结果为[Function: c]
// b后面有小括号  调用值 returen123   s就等于123
// 输出s 结果为123
