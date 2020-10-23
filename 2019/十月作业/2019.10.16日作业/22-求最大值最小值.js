//22. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]

//声明数组
var arr = [11, 32, 55, 47, 79, 23]
//声明变量
var a = arr[0]
//声明变量
var b = arr[0]
//遍历
for (var i = 0; i < arr.length; i++) {
    //判断arr数组是否大于a
    if (arr[i] > a) {
        //给数组a赋值
        a = arr[i]
    }
}
//输出a
console.log(a)
//遍历
for (var i = 0; i < arr.length; i++) {
    //判断arr数组是否小于b
    if (arr[i] < b) {
        //给数组b赋值
        b = arr[i]
    }//输出
} console.log(b)
