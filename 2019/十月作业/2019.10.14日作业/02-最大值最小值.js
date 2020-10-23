// 2.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?


//最大值
// var arr=[10, 5, 34, 59, 98]
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length-i-1;j++){
//         if(arr[j]<arr[j+1]){
//             var temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr[0])

//最小值
var arr=[10, 5, 34, 59, 98]
var i=0
var j=0
while(i<arr.length){
    while(j<arr.length-i-1){
                if(arr[j]<arr[j+1]){
            var temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
            console.log(arr.length)
        }
        i++
        j++
    }
}
