// 二维数组就是数组里面套数组.


var arr=[[1,2,3],[4,5,6],[7,8,9],[10,11,12]]
// 二维数组的遍历

for(var i =0;i<arr.length;i++){
    // console.log(arr[i])
    //[1,2,3]
    //[4,5,6]
    //[7,8,9]
    //[10,11,12]
    for(var j=0;j<arr[i].length;j++){
        console.log(arr[i][j])
    }
}
