/*32.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列*/

//声明需要合并的两个数组
var arr1 = [1, 7, 9, 11, 8, 15, 10, 19]
var arr2 = [2, 1, 6, 8, 10]
//运用语法concat()合并为第三个数组
var arr3 = [].concat(arr1, arr2)
//打印arr3
// console.log(arr3)
//运用语法sort()打印arr3
arr3.sort((a, b) => {
    return a - b
})//打印arr3
// console.log(arr3)
//声明一个空数组
var arr4 = []
//遍历
for (var i = 0; i < arr3.length; i++) {
    //判断运用语法过滤重复的值
    if (arr4.indexOf(arr3[i]) == -1) {
        //运用push将过滤好的元素添加到数组末尾
        arr4.push(arr3[i]);
    }
}//打印新数组
console.log(arr4)