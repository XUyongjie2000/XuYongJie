// 需求: 求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.

//分析
//使用for循环找出1-100所有数字
//判断能不能被3和5整除


// 步骤
//1. 声明一个变量表示和
var sum=0
//2.使用for循环找出1-100所有数字
for(var i=1;i<=100;i++){
    //3.使用if判断是可以整除
    if(i%3==0&&i%5==0){
        sum+=i
    }
}
console.log(sum)