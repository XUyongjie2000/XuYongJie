// 4.下列代码控制台打印出的值是多少？写出执行过程
var foo = function() {
  console.log(2);
};
function foo() {
  console.log(1);
}
foo(); // 2

// 先将函数foo提到最上面  再把var foo 提升
// 然后进入foo()   因为foo函数是调用  所以只能执行最后一个代码
// 输出的结果为2
