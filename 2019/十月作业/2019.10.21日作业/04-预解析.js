// 4.下列代码控制台打印出的值分别是多少？并且把预解析的过程写出来
var color = "red";
function outer() {
  var anotherColor = "blue";
  function inner() {
    var tmpColor = color;
    color = anotherColor;
    anotherColor = tmpColor;
    console.log(anotherColor); // ?
  }
  inner();
}
outer();
console.log(color); // ?

// 首先进入inner  color赋值给tmpColor   tmpColor值为red
// anotherColor赋值给color  color为blue
// tmpColor 赋值给anotherColor   anotherColor为red
// 输出anotherColor   输出结果为red
// 最后输出color  输出值为blue
