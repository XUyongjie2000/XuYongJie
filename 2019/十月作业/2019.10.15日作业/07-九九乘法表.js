// 7、利用JavaScript完成如下九九乘法表


for(var i=1;i<=9;i++){
    var str=''
    for(var j =1;j<=i;j++){
        str+=j+'x'+i+'='+i*j+' '
    }
    console.log(str)
}