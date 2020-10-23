// 5、用for循环求1+11+111+1111+11111+111111的和
var n = 1;
var sum = 0;
for (var i = 0; i <= 5; i++) {
  sum += n;
  n = n * 10 + 1;
}
console.log(sum);
