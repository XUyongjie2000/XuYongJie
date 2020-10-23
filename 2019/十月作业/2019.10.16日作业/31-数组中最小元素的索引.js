//31.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引
//声明数组
var arr = [1, 2, 4, 5, 10, 100, 2, -22]
//声明新数组
var a = 0
//遍历
for (var i = 0; i < arr.length; i++) {
    //判断arr数组是否小于a
    if (arr[i] < a) {
        //给数组b赋值
        a = arr[i]
    }//输出
} console.log(a)
//运用算法找到-22在数组arr中的索引
var index = arr.indexOf(a)
console.log(index) 