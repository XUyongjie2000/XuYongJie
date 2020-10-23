//需求：打印出下列图形
//     *********
//    *******
//   *****
//  ***
// *

for(var i =9;i >= 1;i-=2){
    var str=''
    for(var k =i;k >= 1;k-=2){
        str+=' '
    }
    for(var j = 1;j <= i;j++){
        str+='*'
    }
    console.log(str)
}