// 需求: 本金10000元存入银行，年利率是千分之三，每过1年，
//将本金和利息相加作为新的本金。计算5年后，获得的本金是多少？
 //分析   
//  第一年后的本金=10000+利息（10000）


//1.声明一个变量   10000元
var money=10000
//2.声明一个变量  年利率
var rate=0.003
//3.使用for循环来计算
for(var i=0;i<5;i++){
    //本金=10000+利息（10000）
    money=money+money*rate
}
console.log(money)