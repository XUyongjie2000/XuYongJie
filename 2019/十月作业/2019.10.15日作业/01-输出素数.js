// 1、输出2-100之间的所有素数（素数就是只能被1和其本身整除的数）

// 方法1
for (var i = 2; i < 100; i++) {
    for (var j = 2; j < i; j++) {
        if (i%j==0)
            {
                break;
            }	
        else if(j==i-1){
            console.log(i);
        }
    }
}



// 方法2
var flag;
for(var i = 2; i<100; i++){
    flag = true;
    for(var j = 2; j<i; j++){
        if(i % j == 0){
            flag = false;
        }
    }
    if(flag){
        console.log(i);
    }
}