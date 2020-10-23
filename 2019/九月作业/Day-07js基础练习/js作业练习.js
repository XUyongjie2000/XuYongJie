//1.字符串连接用什么符号？
//+  加号

//2.如何把一个数字转换成字符串？如何把字符串转换成整数？
//    String                        parseInt


//3. i++ 和 ++i 有什么区别
// a++称为后置++，先使用值，再自增1
// ++a称为前置，先自增1，再使用值


//4.*=是干什么用的 什么意思
// 乘后赋值 *=   

//5.求余用哪个符号
// %

//6.==和 ===的区别
// ==  相当于  数值相等
// === 绝对等于 （值和类型均相等）


//7.NaN是什么？
// 不是一个数字。


//8. NaN==NaN 结果是？
// false  NaN与自身不相等，NaN 属性是代表非数字值的特殊值。


//9. 如何输出a对象中的name属性？
// var a={name:'胥永杰',
// age:19}
// console.log(a.name)


//10.如何删除一个对象中的属性
// var a={name:'胥永杰',
// age:19}
// delete a.age
// console.log(a)



//11.a是一个二维数组，如何打印第二个元素的第四个元素？
// var a=[1,[2,3,4,5,6,7,],8,9,10,11,12]
// console.log(a[1][3])



//12.什么时候使用.?
// 对象取值赋值

//13.编程：计算1~100之间所有能后整除5的数的和？
// var num=0
// for(i=1;i<=100;i++){
//     num+=i
// }console.log(num)


//14.分支有几种结构？ 都是什么？
//三种  if分支 switch分支 三元运算符


//15.如何查看一个变量的类型
// typeof



//16.1=='1'是否相等  0=='0'是否相等

// 相等 都是true




//17.并且用什么符号表示
//&&

//定义一个对象表村姓名和年龄？然后判断如果年龄大于18就显示xxx已成年  小于18就显示xxx未成年
// var people={
//     name:'胥永杰',
//     age:19
// }
// if (people.age>=18){
//     console.log(`${people.name}已成年`)
// }else {
//     console.log(`${people.name}未成年`)
// }


//18.与 或 非得特点  用哪个符号表示？
//与有一个假就是假  %%
// 或有一个真就是真 ||
// 非  真的就是假  假得就是真 ！
 

//19.至少说出三种执行js代码方法
//网页中执行   node中执行  vscode中调试运行


//20.如何定义一个对象

// var people={
//     name:'胥永杰',
//     age:19
// }


//21.如何打印对象中的一个属性
// var people={
//     name:'胥永杰',
//     age:19
// }
// console.log(people.age)

//22.如何定义一个数组？如何的打印数组中的一个元素？
// var a=[1,[2,3,4,5,6,7,],8,9,10,11,12]
// console.log(a[1][3])



//23.计算1~100之间所有奇数得和


// var num=0
// for(i=1;i<=100;i++)
// if(i%2==1){
//     num+=i
// }console.log(num)



//24.定义变量保存学生成绩 根基分类打印 优秀，良好 及格  不及格
// var age=80
// if(age>90){
//     console.log('优秀')
// }else if(age>=80){
//     console.log('良好')
// }else if(age>70){
//     console.log('一般')
// }else if(age>=60){
//     console.log('及格')
// }else if(age<60){
//     console.log('差')
// }


// 25.true&&false&&true&false得结果是？
// 假



//26.false||false||false||true 得结果是？
// 真


//28.! false&&!true&&!false 得结果？
// 

//29.如何把一个数字转换成布尔
// Boolean
