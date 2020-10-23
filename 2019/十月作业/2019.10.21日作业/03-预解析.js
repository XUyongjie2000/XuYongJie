// 3. 输出下列代码name3的值分别是多少？并且把预解析的过程写出来
var name3 = "zs";
function f3() {
  var name3 = "ls";
  function f4() {
    name3 = "ww";
  }
  f4();
  console.log(name3); // ?
}
f3();
console.log(name3); // ?
//  前面不用看  直接进入f4()  name3为ww  输出ww
// f4()结束  输出值为ww
//进入f3()
// 最后输出为全局作用域   输出最上面的name3    zs
// 最后结果为ww  zs
