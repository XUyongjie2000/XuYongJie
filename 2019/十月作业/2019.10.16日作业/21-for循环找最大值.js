//21.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?

//声明变量
var arr = [10, 5, 34, 59, 98]
//声明新数组
var arr1 = []
//for循环
for (var i = 0; i < arr.length; i++) {
    //判断arr数组是否大于a
    if (arr[i] > arr1) {
        //给数组a赋值
        arr1 = arr[i]
    }
}
//输出a
console.log(arr1)
//定义一个变量
var a = 0
//while循环
while (a < arr.length) {
    //判断a是否小于arr
    if (a < arr[i]) {
        //给变量a赋值
        a = arr[i + 1]
    }
    //步进
    a++
    //输出最小值
} console.log(a)