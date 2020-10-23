// 9.	输入某年，某月，某日，判断这一天是一年中的第几天？


var years=1999;
var month=1;
var day=1;
var days=0;
if (month == 1) {
    days=day;
}
var months=[31,28,31,30,31,30,31,31,30,31,30,31];
for (var i=0;i<month-1;i++) {  
    days += months[i];
}
if ((years % 4 == 0 && years % 100 != 0 || years % 400 == 0)  && month>2) {  
    days++;     
}
console.log('今天是今年的第'+days+'天');