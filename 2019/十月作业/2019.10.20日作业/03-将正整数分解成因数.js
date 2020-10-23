// 3.写一个函数，将一个正整数分解质因数。例如：输入90,打印出90=2*3*3*5
// function add(num) {
//   var i=2;
//   while(i<=num){
//     if(num%i==0){
//       console.log(i)
//       num/=i
//     }else{
//       i++
//     }
//   }
// }
// add(90)



//声明一个函数  设置一个形参
function add(num) {
  //   创建字符串
  var str =num+'='
  //   最小的质数为2
  var i = 2;
  // 如果i<=num  就进入循环里面
  while (i <= num) {
    // 判断如果num能被i整除
    if (num % i == 0) {
      // 字符串拼接
      str += i
      // 如果不是最后一步  就加上*号
      if(num!=i){
        str +='*'
      }
      num /= i;
      // 否则 i++
    } else {
      i++;
    }
  }
  return str
}

console.log(add(90));;