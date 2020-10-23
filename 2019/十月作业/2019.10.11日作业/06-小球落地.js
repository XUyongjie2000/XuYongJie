// 6. 一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下，编程实现获取它在 第10次落地时，
//共经过多少米？第10次反弹多高？
var num=100
var i=1
while(i<=10){
  if(num=num/2){
      console.log(num)
      
  }if(i==9){
      num1=num
  }if(i==10){
      num2=num
  }
i++
}
console.log('第十次落地时共经过'+num1+'米','第十次反弹'+num2+'米')