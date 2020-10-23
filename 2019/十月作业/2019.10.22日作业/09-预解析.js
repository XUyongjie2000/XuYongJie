// 9.下列代码控制台打印出的值是多少？
(function f(num) {
  function num() {}
  console.log(num); // [Function: num]
  var num = 10;
  console.log(num); // 10
})(100);
//  当函数名和变量名相同时 先提升函数名  在提升变量名
// 先提升函数num 再将变量num提升
// 第一个打印  function num () {}
// 继续往下运行  num被赋值为10
// 第二个打印10
