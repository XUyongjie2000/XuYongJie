/*24.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
      1.去除数组中重复的内容，只保留唯一的元素。
      2.以下列格式打印数组：[9,10,6,1,3,5,4]*/

//声明数组
var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4]
//声明一个空数组
var arr1 = []
//遍历
for (var i = 0; i < arr.length; i++) {
    //判断运用语法过滤重复的值
    if (arr1.indexOf(arr[i]) == -1) {
        //运用push将过滤好的元素添加到数组末尾
        arr1.push(arr[i]);
    }
}//打印新数组
console.log(arr1)