// 4.  求整数1～100的累加值，但要求跳过所有个位为3的数(while实现)
var sum=0
var i=1
while(i<=100){
    num=i%10
    if(num!=3){
        sum+=i
    } 
    i++
}
console.log(sum)







// 使用continue
 var i=1
 var sum=0
 while(i<=100){
     
     if(i%10===3){
        i++      // 补充跳过的i递增
         continue
     }
     sum+=i
     i++
 }
 console.log(sum)