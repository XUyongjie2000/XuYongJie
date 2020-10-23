// 21.写一个函数，实现n的阶层的和求1+2!+3!+...+n!的和
//方法1 
// function getJc(n){

//     for(var i=1,ride=1;i<=n;i++){
//     ride*=i;
//     }
//     return ride;
//     }
//     function getSum(n){
//     for(var i=1,sum=0;i<=n;i++){
//     sum+=getJc(i);
//     }
//     return sum;
//     }
//     var res=getSum(20);
//     console.log(res);



function jcSum(n){
    var num = 1
    var sum = 0
    for(var i=1;i<=n;i++){
      num*=i
      sum+=num
    }
    return sum
  }
  console.log(jcSum(10));