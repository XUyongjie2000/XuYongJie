// 13. 求任意2个正数的最大公约数和最小公倍数。

    //辗转相除法求解两个数的最大公约数和最小公倍数
    var num1=4
    var num2=19
		var x= num1
		var y= num2
		//如果两个数前者<后者，则互换两个数
		if(num1 < num2) {
			var r = num1;
			num1 = num2;
			num2 = r;
		}
		while(num2 != 0) {   //逐次用后一个数去除前一个余数
			r = num1;
			num1 = num2;
			num2 = r%num2;
		}
		console.log("最大公约数为:"+num1);
		console.log("最小公倍数为:"+ x*y/num1);
	