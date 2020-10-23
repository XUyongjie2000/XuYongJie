// 17.写一个函数，实现无论用户传入几个数字，都可以求和，例如，console.log(add(1,2,3)); //6   console.log(add(1,2,3,4,5,6)); //21
//  function sum(){
//      //定义一个变量用来计算和
//      var num=0
//      // 输出所有参数
//      if(arguments){
//          for(var i=0;i<arguments.length;i++){
//              // 把数值加到一起
//              num+=arguments[i]
//          }
//      }
//      //返回sum
//      return num
//  }
//  console.log(sum(1,2,3))
// 18.给定一个整数，写一个函数来判断它是否是 3 的幂次方
// function sum(n){
//     //数值循环除3
//     while(n%3==0){
//         n=n/3
//     // 一直除3可以除开  说明是3的幂次方 输出ture
//     }if(n==1){
//         return true
//         //否则 不是3的幂次方
//     }else{
//         return false
//     }
// }
// console.log(sum(2))
// 19.给定两个数组，编写一个函数来计算它们的交集。
// function same(arr1,arr2){
//     // 定义空数组
//     var arr3=[]
//     //循环数组
//     for(var i=0;i<arr1.length;i++){
//         //数组元素相同时 indexOf返回值为-1 
//        if(arr2.indexOf(arr1[i])!=-1&&arr3.indexOf(arr1[i])==-1){
//            // 添加到arr3
//            arr3[arr3.length]=arr1[i]
//        }
//     }
//     //返回值arr3
//     return arr3
// }
// console.log(same([1,2,3,4,5,67,8],[1,2,3,4,5,8,9,]))
// 20.写一个函数，打印九九乘法表
// function jj(){
//     //for循环1-9
//     for(var i=1;i<=9;i++){
//         //  空字符串连接
//         var str=''
//         //循环j  j小于i  限制到几
//         for(var j=1;j<=i;j++){
//             // 使用字符串和加号连接等式 用j*i算出数值
//          str+=j+'*'+i+'='+j*i+' '
//         }
//         //输出str
//         console.log(str)
//     }
// }
// jj()

// 21.写一个函数，实现n的阶层的和求1+2!+3!+...+n!的和
// function jcSum(n){
//     //设置基数  
//     var num=1
//     //声明变量用于计算和
//     var sum=0
//     // 循环计算阶乘相乘  并限制数值 最大到n
//     for(var i=1;i<=n;i++){
//         // num相乘  计算每个阶乘的数值
//         num*=i
//         //  将每个阶乘相加起来
//         sum+=num
//     }
//     return sum
// }
// console.log(jcSum(3))