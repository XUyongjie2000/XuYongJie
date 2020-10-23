// 需求  如果是周末打印休息  否则上班



var flag=true  // 表周末

if(flag==true){
    console.log('休息')
}else{
    console.log('上班')
}




// 简化
 var flag=true  //表示周末
 flag==true ? console.log('休息') : console.log('上班')










// 需求  有两个数字  a  b  定义的的数字a 必须大于b  三元运算符 判断
// 如果a大于b  打印a大于b  否则错误
var a=19
var b=4
a>b ? console.log('a大于b') : console.log('错误')

// 年满18去网吧  否则打印错误
var age=19
age>18 ? console.log('已成年欢迎'): console.log('禁止未成年进入')






//while循环


var sum=0
 var i=1
 while(i<=5){
    sum+=i
    i++
 }
 console.log(sum)





 // do.....while 循环

 // 应用场景 ： 用在至少执行一次的情况下  且不知道循环次数
 //语法
//  1.初始化表达式
//  do{
//      3.循环体
//      4.步进表达式
//  }while{2.布尔表达式}



//需求  某一个同学代码没写三遍 晚上罚跑10圈

// 1.开始跑步  
var circle =1 //circle 圈
do{
    console.log(circle)
    circle++
}while(circle<=10)


//   打印星星

for(i=0;i<5;i++){
    str=''
    for(j=0;j<5;j++){
        str+='*'
    }
    console.log(str)
}
