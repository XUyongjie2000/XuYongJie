// 13.写一个函数,求任意数组中的最大值,  


function arrMax(arr) {
    var max=arr[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
console.log(arrMax([19,22,4,5,45]));