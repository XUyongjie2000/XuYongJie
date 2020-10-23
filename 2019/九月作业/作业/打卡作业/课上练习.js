// //需求 例如101中没有3；103中有一个3；133中有两个3；统计出100到200之间的整数共有多少个三


// //分析：
// //找出100到200之间所有的数字
// // 103 133  取出该数字每一位上的数字看一看  是不是3 是3就让个数＋1
// // 输出 个数




// // 步骤
// // 0.声明计数变量
// var count=0
// // 1. 使用for循环 找出100-200之间的所有数字
// for(i=100;i<=200;i++){


// // 2.找出每一个三位数上的每一个数字
// var gw=1%10
// var sw=parseInt(i/10%10)
// var bw=parseInt(i/100)
// //3. 判断每一位上的数字是不是3 如果是 就让计数变量+1
// if(gw===3){
//     count++
// }

// if(sw===3){
//     count++
// }
// if(bw===3){
//     count++
// }
// //4.输出计数变量的值
// }
// console.log(count)



// // 使用for循环计算3+6+9.。。。+99的结果
// // var sum=0
// // for(var i=3;i<100;i++){
// //     if(i%3==0){
// //         sum+=i
// //     }
// // }console.log(sum)
// //第二种方法；
// // var sum=0
// // for(var i=3;i<100;i+=3){
// //     sum+=i
    
// // }console.log(sum)


// // 需求 使用for循环  打印一行星号
// // for(var i=0;i<1;i++){
// //     console.log('*')
// // }
// // for(var i=0;i<2;i++){
// //     console.log('*')
// // }


// //  使用for循环  打印长方形  五行五列*

// // for(var j=0;j<5;j++){
// //   var sum=''
// // for(var i=0;i<5;i++){
// //     sum+='*'
// // }
// // console.log(sum)
// // }





// //需求  计算1+1/4+1/9.。。。。。1/400

// // var sum=0
// // for(i=1;i<=20;i++){
// //     sum+=1/(i*i)
// // }
// // console.log(sum)





//  鸡兔同笼  共35只   94只脚

// // 步骤：
// // 1.定义一个变量  表示一只鸡有几只脚。
// var ji=2
// // 2.定义一个变量 表示一只兔子有几只脚。
// var tu=4
// // 3.使用for循环来试一试  能不能达到35只鸡.
// for(var i =0;i<35;i++){//i代表某一种动物的个数。
// // 4.使用for循环再来试一试 能不能达到35只兔子（3，4两步使用for循环嵌套）
// for (var j=0;j<35;j++){//j代表某一种动物的个数
// // 5.进行判断 鸡的个数*2+兔子的个数*4 ===94  &&鸡的个数+兔子的个数===35
// // 用i这个变量表示鸡的个数   用j这个变量表示兔子的个数
// if(i*ji+tu*j===94 && i+j===35){
// // 6.把鸡的个数 和兔子的个数  打印出来就可以了.
// console.log(i,j)
// }
// }
// }



// 需求：利用JavaScript完成输出如下图形 有空格和* 两种符号组成.
//：分析
//1. 
// var str=''
// for(var i=0;i<4;i++){
//     str+=' '
// }
// for(var j=0;j<1;j++){
//     str+='*'
// }
// console.log(str)
// //2.

// var str=''
// for(var i=0;i<3;i++){
//     str+=' '
// }
// for(var j=0;j<2;j++){
//     str+='* '
// }
// console.log(str)

// //3. 
// var str=''
// for(var i=0;i<2;i++){
//     str+=' '
// }
// for(var j=0;j<3;j++){
//     str+='* '
// }
// console.log(str)


// 打印星号  等腰三角形.


// for(var k=0;k<5;k++){
//     var str=''
//     for(var i=0;i<5-k;i++){
//         str+=' '
//     }
//     for(var j=0;j<=k;j++){
//         str+='* '
//     }
//     console.log(str)

// }





// 需求： 利用JavaScript完成输出如下图形
//      *********
//     *******
//    *****
//   ***
//  *




// 分析 5个空格
// //1.
// var str=''
// for(var i=0;i<5;i++){
//     str+=' '
// }

// for(var j=0;j<9;j++){
//     str+='*'
// }
// console.log(str)



// for(var k=0;k<5;k++){
//     var str=''
// for(var i=0;i<5-k;i++){
//     str+=' '
// }
// // j:9 7 5 3 1  (1 3 5 7 9 2n+1 )   -(2n+1)+9
// for(var j=0;j<=-(2*k+1)+9;j++){
//     str+='*'
// }
// console.log(str)
// }




//需求  利用JavaScript，使用循环语句 输出菱形图案
// 分析：
// 菱形 总共三部分
// 上部分 
//1.
// var str=''
// for(var i=0;i<3;i++){
//     str+='-'
// }
// for(var j=0;j<1;j++){
//     str+='*'
// }
// console.log(str)

// //2.
// var str=''
// for(var i=0;i<2;i++){
//     str+='-'
// }
// for(var j=0;j<3;j++){
//     str+='*'
// }
// console.log(str)

// //3.
// var str=''
// for(var i=0;i<1;i++){
//     str+='-'
// }
// for(var j=0;j<5;j++){
//     str+='*'
// }
// console.log(str)

// // 中间
// var str=''
// for(var k=0;k<7;k++){
//     str+='*'
// }
// console.log(str)
// // 下部分
// //1.
// var str=''
// for(var i=0;i<1;i++){
//     str+='-'
// }
// for(var j=0;j<5;j++){
//     str+='*'
// }
// console.log(str)



// //2.
// var str=''
// for(var i=0;i<2;i++){
//     str+='-'
// }
// for(var j=0;j<3;j++){
//     str+='*'
// }
// console.log(str)

// //3.
// var str=''
// for(var i=0;i<3;i++){
//     str+='-'
// }
// for(var j=0;j<1;j++){
//     str+='*'
// }
// console.log(str)


//总结代码
//上
// for(var s=0;s<3;s++){
//     var str=''
//     //i: 3  2  1
// for(var i=0;i<3-s;i++){
//     str+='-'
// }
// //j: 1  3  5
// for(var j=0;j<2*s+1;j++){
//     str+='*'
// }
// console.log(str)

// }
// //中
// console.log('*******')
// //下
// for(var s=0;s<3;s++){
//     var str=''
//     //i: 1  2  3 
// for(var i=0;i<=s;i++){
//     str+='-'
// }
// //j: 5  3  1
// for(var j=0;j<=-(2*s+1)+5;j++){
//     str+='*'
// }
// console.log(str)

// }








//需求： JavaScript斐波那契数列


// var m1=1
// var m2=1
// var m3=0
// for(var i =2;i<12;i++){
// m3=m1+m2
// m1=m2
// m2=m3
// console.log(m3)
// }
// // 放在外面等于总数
// console.log(m3)








//需求 求出1-1/2+1/3-1/4.。。。。-1/100
// 分析
// 不要去计算减法  直接全部按照加法计算
//  1/1+1/2+1/3+。。。。1/100


//声明一个常数1
//循环从1-100
// 用1/循环的i

//步骤
//1.声明变量
// var num=1
// //2.声明累加和
// var sum=0
// //3.循环1-100
// for(var i=1;i<100;i++){
// //4.累加
// sum+=num/i
// num=-num
// }
// //5.打印
// console.log(sum)










//需求   ： 用for循环  求2+22+222+2222+22222的和
//分析
//1.定义一个数
// var n=2
// //2.定义一个sum
// var sum=0
// //3. 循环 累加4次
// for(var i=0;i<5;i++){
//     n=n*10+2
//   //4.让n进行变化  //5.累加
//   sum+=n
// }
// console.log(sum)







//需求 :控制台输出： 计算1+1/2！+1/3！+1/4+。。。。1/20！的和


//步骤
//1.定义一个累加变量sum
// var sum=0
// //2.定义一个阶乘基数1
// var jie=1
// //3.使用循环 求1-20的阶乘
// for(var i =1;i<20;i++){
//     //4.求阶乘
//     jie=jie*i
//     //5.累加
//     sum+=1/jie
// }
// console.log(sum)
// //6.打印









// 需求  ： 计算从1到100临近两个整数的和  并一次输出3（1+2）  第二次输出5（2+3）
// 最后一次是199（99+100）



//  var s=0
//  for(var i =1;i<=99;i++){
//      s=i+(i+1)
//      console.log(`${s}(${i}+${i+1})`)
//  }










