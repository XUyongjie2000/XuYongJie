// 2. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数
// 定义一个变量
var num = 4.19;
// 在定义一个变量将第一个变量取整
var num1 = parseInt(num);
// 如果取整后的数字和原来对比相等  说明是整数
if (num == num1) {
  console.log("整数");
} else {
  console.log("小数");
}
// 反之就是小数
