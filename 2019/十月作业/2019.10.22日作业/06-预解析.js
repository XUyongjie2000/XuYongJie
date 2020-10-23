// 6.下列代码控制台打印出的值是多少？写出执行过程
function test() {
  let x = 31;
  if (true) {
    let x = 71;
    console.log(x); // 71
  }
  console.log(x); // 31
}
test();
//  因为是let
//  所以第一个输出  就近原则  输出最近得值  结果为71
//第二个 输出为31
// 因为外面得不能访问里面的
