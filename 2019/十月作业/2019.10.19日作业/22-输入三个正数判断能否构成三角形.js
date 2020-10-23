// 22.写一个函数， 传入3 个正数，判断能否构成一个三角形
function judge(num1,num2,num3){
    if(num1+num2>num3 && num1+num3>num2 && num2+num3>num1){
      return true
    }else{
      return false
    }
  }
  console.log(judge(3,4,5));