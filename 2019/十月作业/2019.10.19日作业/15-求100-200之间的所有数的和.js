// 15.写一个函数，求100 - 200 之间所有数的和

function sum(n,m) {
    sum=0;
    for(var i=n;i<=m;i++){
        sum+=i;
    }
    return sum;
}

console.log(sum(100,200));