// 5. 分析以下需求并实现
//    1.定义一个用于存放班级分数的数组var score = [80,90,85,90,78,88,89,93,98,75];
//    2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
//    3.求出班级的平均分
//    4.求出班级的总分数

var sum=0
var score = [80,90,85,90,78,88,89,93,98,75];
for(var i=0;i<score.length;i++){
    if(score[i]<60){
        console.log(score[i])
       
    }
    sum+=score[i]

}
console.log('平均分'+sum/score.length)
console.log('总分'+sum)