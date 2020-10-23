/*29. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
      var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组*/

//声明数组
var arr1 = [1, 2, 3, "aaa", "hello", 999, -1]
//声明第二个数组
var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"]
//声明第三个数组
var arr3 = []
//第一个数组遍历
for (var i = 0; i < arr1.length; i++){
//第二个数组遍历
for (var j = 0; j < arr2.length; j++){
    //判断是否前两个数组有相同的元素
    if(arr1[i]==arr2[j]){
        //把相同的数组放入新的数组中
        arr3.push(arr1[i])
    }
}
}//打印
console.log(arr3)