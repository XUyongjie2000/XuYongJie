// 8.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
var n = 0;
function a() {
  var n = 10;
  function b() {
    n++;
    console.log(n);
  }
  b();
  return b;
}
var c = a(); //?
c(); //?
console.log(n); // ?
// 把给赋值给c
// c()进入a  n=10  n++
// 输出值为11
// 进入b  返回值b  n++
// 输出值12
// c()循环完毕
// 输出n   n为全局作用域
// 输出值为0
