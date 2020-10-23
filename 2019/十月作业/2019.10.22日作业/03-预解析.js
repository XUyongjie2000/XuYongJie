// 3.下列代码控制台打印出的值是多少？写出执行过程
function test() {
  b();
  var a = 1;
  function b() {
    console.log(a); // undefined
    var a = 2;
  }
}
test();
// 先看test() 进入函数test   将函数b提到最上面
//  然后将var a 提上去  然后再进行输出
//  因为var a  只是定义 没有赋值  所以输出a为undefined
