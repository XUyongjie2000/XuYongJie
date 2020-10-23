//需求 打印九九乘法表  正一遍反一遍
// 分析  正常输出一遍  在把数值调换

for(var i=1;i<=9;i++){
 var str=''
 for(var j=1;j<=i;j++){
     str+=j+'x'+i+'='+j*i+' '
 }
 console.log(str)
}
for(var i=9;i>=1;i--){
    var str=''
    for(var j=1;j<=i;j++){
    str+=j+'x'+i+'='+i*j+' '
}
console.log(str)
}