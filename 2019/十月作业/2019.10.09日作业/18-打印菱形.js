//需求  利用JavaScript，使用循环语句 输出菱形图案
// 分析：
// 菱形 总共三部分
// 上部分 
//1.
var str=''
for(var i=0;i<3;i++){
    str+='-'
}
for(var j=0;j<1;j++){
    str+='*'
}
console.log(str)

//2.
var str=''
for(var i=0;i<2;i++){
    str+='-'
}
for(var j=0;j<3;j++){
    str+='*'
}
console.log(str)

//3.
var str=''
for(var i=0;i<1;i++){
    str+='-'
}
for(var j=0;j<5;j++){
    str+='*'
}
console.log(str)

// 中间
var str=''
for(var k=0;k<7;k++){
    str+='*'
}
console.log(str)
// 下部分
//1.
var str=''
for(var i=0;i<1;i++){
    str+='-'
}
for(var j=0;j<5;j++){
    str+='*'
}
console.log(str)



//2.
var str=''
for(var i=0;i<2;i++){
    str+='-'
}
for(var j=0;j<3;j++){
    str+='*'
}
console.log(str)

//3.
var str=''
for(var i=0;i<3;i++){
    str+='-'
}
for(var j=0;j<1;j++){
    str+='*'
}
console.log(str)


//总结代码
//上
for(var s=0;s<3;s++){
    var str=''
    //i: 3  2  1
for(var i=0;i<3-s;i++){
    str+='-'
}
//j: 1  3  5
for(var j=0;j<2*s+1;j++){
    str+='*'
}
console.log(str)

}
//中
console.log('*******')
//下
for(var s=0;s<3;s++){
    var str=''
    //i: 1  2  3 
for(var i=0;i<=s;i++){
    str+='-'
}
//j: 5  3  1
for(var j=0;j<=-(2*s+1)+5;j++){
    str+='*'
}
console.log(str)

}
