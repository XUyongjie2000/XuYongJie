// 7. 一小和尚挑水，要把水缸装满，而且每次只能挑5升水，水缸能容纳80升水。问：小和尚要挑几次才能把水缸挑满？

var count = 0;//挑水次数 
var  num = 0;//已经挑了多少水
 while(num <80){
      num += 5; 
      count ++;
     } 
console.log("挑水" + count+ "次");