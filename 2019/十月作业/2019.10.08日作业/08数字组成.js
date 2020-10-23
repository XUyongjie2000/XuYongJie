//需求：8.	有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？有多少个，有哪些三位数？

var sum=0
for(var i = 1; i < 5; i ++){
    for(var j = 1; j < 5; j ++){
        for(var k = 1; k < 5; k ++){
            if(i != j && j != k && k != i){
                sum+=i;
                console.log("1、2、3、4个数字能组成的三位数有" + i + j + k );
            }
        }
    }
}
console.log('有'+sum+'个');