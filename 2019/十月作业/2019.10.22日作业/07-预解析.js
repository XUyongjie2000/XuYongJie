// 7.下列代码控制台打印出的值是多少？写出执行过程
function test() {
  var x = 31;
  if (true) {
    var x = 71;
    console.log(x); // 71
  }
  console.log(x); // 71
}
test();

// 第一个console 就近原则  输出最近的值  为71
// 第二个输出 要往上找值   因为是var 不是let  所以可以访问里面
// 第二个也是输出71
