// 需求: for循环嵌套打印一个直角三角形,如果所示
// *
// **
// ***
// ****
// *****



1.
var str = "";
for (var j = 0; j < 1; j++) {
    str += "*";
}
console.log(str);
//以此类推

2.
var str = "";
for (var j = 0; j < 2; j++) {
    str += "*";
}
console.log(str);




//总结
for (var i = 0; i < 5; i++) {
    var str = "";
    for (var j = 0; j <= i; j++) {
        str += "*";
    }
    console.log(str);
}