// 2. 写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)
function add(num){
    for(var i=1;i<=num;i++){
        for(var j=2;j<num;j++){
            if(num%j==0){
                return false
            }else{
                return true
            }
        }
    }
}
console.log(add(6))