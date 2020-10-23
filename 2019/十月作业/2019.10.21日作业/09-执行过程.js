// 9.下列代码控制台打印出的值是多少？把执行过程写出来
function a() {
  console.log("a");
  c();
}
function b() {
  console.log("b");
  a();
}
function c() {
  console.log("c");
}
a(); // ac
b(); // bac
c(); // c
//先走a()  进入第一个函数  输出a  然后进去c  输出c
// 第一个a()输出ac
//进入b() 进入第二个函数 输出b  进入第一个函数 输出a 进入第三个函数
//输出c
//第二个b()  输出为bac
//进入c() 进入第三个函数  输出c    解析完毕
//  输出结果为  acbacc
