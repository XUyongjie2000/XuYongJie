// 4. 利用JavaScript完成如下功能：给出一个数判断是属于小数还是整数，如：var a= 3.14输出：3.14是小数
var num = 4.19;
var num1 = parseInt(num);
if (num == num1) {
  console.log("整数");
} else {
  console.log("小数");
}
