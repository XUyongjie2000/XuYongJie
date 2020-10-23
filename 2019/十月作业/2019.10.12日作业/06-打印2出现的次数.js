// 6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。

var count=0
var arr = [1,1,2,2,3,4,5,4,3,2,1]
for(var i=0;i<arr.length;i++){
    if(arr[i]===2){
        count++
    }
}
console.log(count)