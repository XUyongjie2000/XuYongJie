// 4.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
//     1.去除数组中重复的内容，只保留唯一的元素。
//     2.以下列格式打印数组：[9,10,6,1,3,5,4]

//方法1
var arr=[9,10,6,6,1,9,3,5,6,4]
var arr1=[]
for(var i=0;i<arr.length;i++){
    //如果当前数组的第 i 项在当前数组中第一次出现的位置不是 i，
    //那么表示第 i 项是重复的，忽略掉。否则存入结果数组
    if(arr.indexOf(arr[i])==i){
           arr1.push(arr[i])
    }
}
console.log(arr1)


//方法2 
var arr=[9,10,6,6,1,9,3,5,6,4]
var arr1=[]
for(var i=0;i<arr.length;i++){
    // 新建一个数组，遍历去要重的数组，当值不在新数组的时候（indexOf为-1）就加入该新数组中；
    if(arr1.indexOf(arr[i])==-1){
        arr1.push(arr[i])
    }

}
console.log(arr1)