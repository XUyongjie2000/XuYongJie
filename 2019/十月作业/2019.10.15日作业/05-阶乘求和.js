
// 5、求1!+2!+3!+...+20!的和
var sum = 0;
for(var i=1;i<=20;i++){
    var jie = 1;
    for(var j=1;j<=i;j++){
        jie *= j;
    }
    console.log("第"+i+"个阶乘："+jie)
    sum += jie;
}
console.log("和："+sum)