// 2.求1-100之间所有偶数的和，以及偶数的个数
// 定义两个变量 一个用于计算个数  一个用于计算和
var count = 0;
var sum = 0;
// 循环1-100
for (var i = 1; i <= 100; i++) {
  //判断找出偶数
  if (i % 2 == 0) {
    //如果是偶数  就加一个
    count++;
    //并把数字加起来
    sum += i;
  }
}
//输出个数
console.log(count);
//输出和
console.log(sum);
