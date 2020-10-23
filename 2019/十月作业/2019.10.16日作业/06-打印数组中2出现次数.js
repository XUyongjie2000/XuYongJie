//6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。
//声明一个数组
var arr = [1, 1, 2, 2, 3, 4, 5, 4, 3, 2, 1]
//声明一个变量
var sum = 0
//遍历
for (var i = 0; i < arr.length; i++) {
    //如果数组中出现2则计数
    if (arr[i] == 2) {
        //步进
        sum++

    }
}//打印sum
console.log(sum)