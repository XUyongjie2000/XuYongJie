// 1. 打印1-100中前三个是17的整数倍的数。

for(var i=1;i<=100;i++){
    if(i%17==0){
        if(i>51){
            break
        }
        console.log(i)
    }
}  