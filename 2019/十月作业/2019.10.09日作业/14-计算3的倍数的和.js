// 需求: 使用for循环语句计算3+6+9+12+……+99的结果

// 分析: 
//   使用for循环找出1-100所有数字
//  使用if选出3的倍数
//   输出


var sum = 0;
for (var i = 1; i < 100; i++) {
    if (i % 3 === 0) {
        sum += i;
    }
}

console.log(sum);