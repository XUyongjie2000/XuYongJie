/*34.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，
然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]*/
//声明数组
var arr = [1, 2, 4, 5, 7, 7, 666, 0, -1, -2, -3]
//声明一个空数组
var a = arr[0]
//声明一个空数组
var b = arr[0]
//遍历
for (var i = 0; i < arr.length; i++) {
    //判断arr数组是否大于a
    if (arr[i] > a) {
        //给数组a赋值
        a = arr[i]
    }
} console.log(a)
for (var i = 0; i < arr.length; i++) {
    //判断arr数组是否小于b
    if (arr[i] < b) {
        //给数组b赋值
        b = arr[i]
    }//输出
} console.log(b)
var index = arr.indexOf(a)
console.log(index)
var index = arr.indexOf(b)
console.log(index)
arr [6]=1
arr[0]=666
console.log(arr)