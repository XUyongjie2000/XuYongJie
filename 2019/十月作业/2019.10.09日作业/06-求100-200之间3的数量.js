// 需求: 你要做的是统计出100到200之间的整数一共有多少个3。 解释：例如101中没有3；103中有一个3；133中有两个3。

//分析 
//找出100-200之间所有的数字
 //  个位3   十位3  
 // 输出个数


 //步骤
 //1。声明变量
 var count=0
//2.使用for循环找出100-200之间的所有数字
for(var i=100;i<=200;i++){
    //3. 找出每一位的数字
    var gw=i%10
    var sw=parseInt(i/10%10)
    var bw=parseInt(i/100)
     //4. 判断每一位是不是3 
     if (gw===3){
         count++
     }
     if(sw===3){
         count++
     }
     if(bw===3){
         count++
     }
}
console.log(count)
