// 5. 求整数1～100的累加值，但要求跳过所有个位为3的数【用continue实现】
//定义一个变量计算
var sum = 0;
//循环1-100之间的所有数字
for (var i = 1; i <= 100; i++) {
  // 获取数字个位的数值
  var gw = i % 10;
  //如果个位是三 则跳过
  if (gw == 3) {
    continue;
    ///反之 加起来
  } else {
    sum += i;
  }
}
//输出
console.log(sum);
