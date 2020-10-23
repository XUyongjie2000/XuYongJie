// 4.写一个函数，假设你正在爬楼梯。需要 n 阶你才能到达楼顶，每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢
function add(n) {
    if(n<=0)
       return 0;
   if(n == 1)
       return 1;
   if(n == 2)
       return 2;
   var  a= 1;
   var  b= 2;
   var  c= 0;
   while(n>=3) {
        c=a+b;
        a=b;
        b=c;
        n--;
   }
   return c;
}
console.log(add(4)+'种方法到达楼顶')