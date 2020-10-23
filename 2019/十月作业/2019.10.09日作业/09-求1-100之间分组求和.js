// 需求:把1 - 100之间的数字，10个数字为一组，在控制台打印出每组的和，例如，1 - 10的和为一组，输出来，
// 11 - 20的和为一组输出来，依次类推


1.
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
// 以此类推
2.
var sum = 0;
for (var i = 11; i <= 20; i++) {
    sum += i;
}
console.log(sum);



// 总结 
for(var j=1;j<=10;j++){
    //j:1 2 3 4 5 6 7 8 9 10 
    //i:1  11   21 31 41 51 61 71 81 91 
    //声明计算变量
    var sum=0
for(var i=(j-1)*10+1;i<=10*j;i++){
    sum+=i
}
console.log(sum)
}