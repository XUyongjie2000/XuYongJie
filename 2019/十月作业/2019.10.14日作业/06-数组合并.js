// 6.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列

var arr1 = [1,7,9,11,8,15,10,19]
var arr2 =[2,1,6,8,10]
var arr3 = arr1.concat(arr2)
var arr4=[]
// console.log(arr3)
for(var i=0;i<arr3.length;i++){
    if(arr4.indexOf (arr3[i])==-1){
        arr4.push(arr3[i])
    }
}
console.log(arr4)

for(var i=0;i<arr4.length;i++){
    for(var j=0;j<arr4.length-i-1;j++){
        if(arr4[j]>arr4[j+1]){
            var temp=arr4[j]
            arr4[j]=arr4[j+1]
            arr4[j+1]=temp
        }
    }
}

console.log(arr4)
