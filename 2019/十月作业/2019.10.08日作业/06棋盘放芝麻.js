//需求：6.	有一个棋盘，有64个方格，在第一个方格里面放1粒芝麻重量是0.00001kg，第二个里面放2粒，
// 第三个里面放4，求棋盘上放的所有芝麻的重量

// 一粒芝麻的质量
var num = 0.00001;

//总重量

var count = num;



// 64个 格子

for (var i = 2; i <= 64; i++) {

console.log("第" + i + "个格子里的重量是" + Math.pow(2, i - 1) * num);

console.log(2 ** (i))

count += Math.pow(2, i - 1) * num;

}

//定义每一个格子里的重量

var temp = 1;

for (var i = 2; i <= 53; i++) {

//当前格子里的芝麻的个数

temp *= 2;

//求当前格子里的重量

count += temp * num;

}

console.log("整个棋盘的总承载重量是" + count + "kg");