// 需求: 利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//     *********
//    *******
//   *****
//  ***      
// *  




1.
var str = "";
for (var i = 0; i < 5; i++) {
    str += " ";
}

for (var j = 0; j < 9; j++) {
    str += "*";
}
console.log(str);

// 以此类推

2.
var str = "";
for (var i = 0; i < 4; i++) {
    str += " ";
}

for (var j = 0; j < 7; j++) {
    str += "*";
}
console.log(str);



//总结


// 空格 5 4 3 2 1 
// 星号 9 7 5 3 1

for (var k = 0; k < 5; k++) {
    var str = "";
    // i: 5 4 3 2 1
    for (var i = 0; i < 5 - k; i++) {
        str += " ";
    }
    // j: 9 7 5 3 1    (1 3 5 7 9  2n+1)  -(2n+1)+9
    for (var j = 0; j <= -(2 * k + 1) + 9; j++) {
        str += "*";
    }
    console.log(str);
}

