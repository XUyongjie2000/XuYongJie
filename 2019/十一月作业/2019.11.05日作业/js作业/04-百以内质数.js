// 4. 利用JavaScript的for循环输出1-100之间所有的质数（只能被1和自身整除的数，不包括1）
//循环1-100之间的数字
for (var i = 2; i < 100; i++) {
  //假设该数字是质数
  var falg = true;
  //循环判断该数字是否满足质数条件
  for (var j = 2; j < i; j++) {
    //如满足则标记该数不是质数
    if (i % j == 0) {
      falg = false;
    }
  }
  //falg为真输出质数
  if (falg) {
    console.log(i);
  }
}
