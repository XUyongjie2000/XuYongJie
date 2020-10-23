// 8、利用JavaScript完成输出如下图形（由“空格”和“*”这两种符号组成）
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

for(var i=1;i<=5;i++){
    var str=''
    for(var j=1;j<= 5-i;j++){
        str+=' '
    }
      for(var j=1;j<=i;j++){
        str+='* '
    }
    console.log(str)
}











for(var i=1;i<=5;i++){
    var str=''
    for(var j=1;j<=5-i;j++){
        str+= ' '
    }
    for(var j=1;j<=i;j++){
        str+='* '
    }
    console.log(str)
}
