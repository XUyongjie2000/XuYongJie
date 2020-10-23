// 一、编程题
// 61.计算从1到100临近两个整数的合并依次输出3(1+2),第二次输出5(2+3),最后一次输出199(99+100)
// var sum=0;
// for (var i = 1; i <= 100; i++) {
// sum=i+i+1
// console.log(sum);
// console.log(`${sum}(${i}+${i+1})`);
// }
// 62.把1-100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1-10的和为一组，输出来，11-20的和为一组输出来，依次类推
// var sum1=0;
// var sum2=0;
// var sum3=0;
// var sum4=0;
// var sum5=0;
// var sum6=0;
// var sum7=0;
// var sum8=0;
// var sum9=0;
// var sum10=0;
// for (var i=1;i<=100;i++){
//     if (i<=10) {
//         sum1+=i
//     } else if (i<=20) {
//         sum2+=i
//     }else if (i<=30) {
//         sum3+=i
//     }else if (i<=40) {
//         sum4+=i
//     }else if (i<=50) {
//         sum5+=i
//     }else if (i<=60) {
//         sum6+=i
//     }else if (i<=70) {
//         sum7+=i
//     }else if (i<=80) {
//         sum8+=i
//     }else if (i<=90) {
//         sum9+=i
//     }else if (i<=100) {
//         sum10+=i
//     }
// }
// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// console.log(sum5);
// console.log(sum6);
// console.log(sum7);
// console.log(sum8);
// console.log(sum9);
// console.log(sum10);
// 63.开发一个标题为“ FlipFlop”的游戏应用程序。它从 1 计数到100 ，遇到3的倍数输出单词“ Flip”，遇到5的倍数就输出单词“Flop”，遇到即使 3 又是 5 的倍数时则输出单词“ FlipFlop” ，其余情况下输出当前数字
// for (var i=1;i<=100;i++){
//     if (i%3==0&&i%5==0) {
//         console.log('FlipFlop');
//     }else if (i%3==0) {
//         console.log('Flip');
//     }else if (i%5==0) {
//         console.log('Flop');
//     }else {
//         console.log(i);
//     }
// }
// 64. 将下列文字分成多行显示, 春眠不觉晓，处处闻啼鸟。 夜来风雨声，花落知多少。
// var a = `
//         春眠不觉晓，
//         处处闻啼鸟。 
//         夜来风雨声，
//         花落知多少。
//         `
// console.log(a);
// 65. 定义一个四位数，按逆序打印出各位数字。例如原数字为4321，应输出1234
// var num = 1234;
// var num1 = num % 10;
// var num2 = parseInt(num / 10 % 10);
// var num3 = parseInt(num / 100 % 10);
// var num4 = parseInt(num / 1000 % 10);
// console.log(num+'的逆顺序的结果是'+num1+num2+num3+num4);
// 66.定义一个三位数，求各位数的总和是多少，在控制台输出
// var num = 234;
// var num1 = num % 10;
// var num2 = parseInt(num / 10 % 10);
// var num3 = parseInt(num / 100 % 10);
// var sum=num1+num2+num3;
// console.log(num+'各位数的总和是'+sum);
// 67.计算1+1/4+1/9+….+1/400，并且在控制台输出结果
// a=0,b=1;
// for(i=1;i<=400;i++) {
//     a= a+b;
//     b = b*(1/i^a-1);
// }
// console.log(a)
// 68. 计算1-100能被3整除，但是不能被5整除的数，在控制台打印出来，并且统计出个数
// var sum=0;
// for (var i=1;i<=100;i++){
//     if (i%3==0&&i%5!=0) {
//         console.log(i);
//         sum+=1
//     }
// }
// console.log('1-100能被3整除，但是不能被5整除的数一共有'+sum+'个');
// 69.输出从2000年（含）到3000年（含）间的所有闰年
// for (var i=2000;i<=3000;i++){
//     if (i%400==0||i%4==0&&i%100!=0) {
//         console.log(i);
//     }
// }
// 70.计算下列表达式的结果：，并写出详细步骤
//  var a = 10;
//  var b = 2;
//  a %=b;
// console.log(a);
// console.log(b++);   //后++是先打印在赋值，打印的结果是2，打印后b变成了3。
// 二、简答题
// 1. console.log(0.1+.03)结果是什么，为什么
// 结果为0.13    算式.03自动补全  就等于console.log(0.1+0.03)   所以结果是0.13
// 2. 怎么将一个小数，取小数点的后2位
// (0.1111).toFixed(2)
// 3. 什么是隐式类型转换，什么时候发生
// 当俩个不同类型的数据进行计算时,JS会自动转换为同样的类型后再计算
// 4. 类型转换时，Number和parseInt的区别是什么
// Number 转换时  如果有非数字字符  就会转换成NaN
// parseInt  转换时 如果有非数字字符  就只会截取非数字字符前面的结果
// console.log(Number('12.3-4'));

