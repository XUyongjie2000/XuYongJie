//20.将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序

//步骤：
//声明数组
var arr = [1, 3, 2, 8, 6, 11, 9]
//遍历
for (var i = 0; i < arr.length - i; i++) {
    //内循环遍历
    for (var j = 0; j < arr.length - 1 - i; j++) {
        //判断某个元素的大小
        if (arr[j] > arr[j + 1]) {
            //改变元素在数组中的位置
            var a = arr[j]
            //赋值
            arr[j] = arr[j + 1]
            //赋值
            arr[j + 1] = a
        }

    }//输出
} console.log(arr)