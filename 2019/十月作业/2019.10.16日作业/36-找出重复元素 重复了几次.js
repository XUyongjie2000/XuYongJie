//36.找出一个数组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]
//声明数组
var arr = [0, 1, 3, 1, 1, 5, 5, 8, 8, 8, 0, 9, 5];
//遍历
for (var i = 0; i < arr.length - 1; i++) {
    //内循环遍历
    for (var j = 0; j < arr.length - 1 - i; j++) {
        //判断
        if (arr[j] > arr[j + 1]) {
            //赋值
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
//声明一个字符串
var str ='';
//遍历
for (var i = 0; i < arr.length;) {
    //声明一个变量
    var count = 0;
    //内循环遍历
    for (var j = i; j < arr.length; j++) {
        //判断是否相等
        if (arr[i] == arr[j]) {
            //步进
            count++;
        }
    }//判断
    if (count > 1) {
        //输出拼接
       console.log('重复元素'+ arr[i]+', 重复次数'+ count);
    }//赋值
    i += count
}