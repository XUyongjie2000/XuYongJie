// 需求: 求1!+2!+3!+...+10!的和

//阶乘
//步骤   使用for循环输出1的阶乘
var jie=1
for(var i=1;i<=1;i++){
    jie=jie*i
}
console.log(jie)
//同理输出2的阶乘
var jie=1
for(var i=1;i<=2;i++){
    jie=jie*i
}
console.log(jie)
//3的阶乘
var jie=1
for(var i=1;i<=3;i++){
    jie=jie*i
}
console.log(jie)


//总结
//1.声明一个变量
var sum=0
//2.使用for循环嵌套
for(var i=1;i<=10;i++){
    var jie=1
    for(var j=1;j<=i;j++){
        jie=jie*j
    }
    sum+=jie
}
console.log(sum)

