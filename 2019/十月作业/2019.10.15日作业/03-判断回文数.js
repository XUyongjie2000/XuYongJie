// 3、定义一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样

var a =12345
num1=a%10 //个位
num2=parseInt(a/10%10)// 十位
num3=parseInt(a/100%10)//百位
num4=parseInt(a/1000%10)//千位
num5=parseInt(a/10000)//万位
if(num1==num5&&num2==num4){
    console.log(a+'为回文数')
}else{
    console.log(a+'不是回文数')
}

