// 6. 写一个函数，输入某年某月某日，判断这一天是一年中的第几天   1998  3   1
function add(){

var year =1998


var month =3


var day =1

var isRun;

if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {

    isRun = true;

} else {

    isRun = false;

}




var count = 0;

for (var i = 0; i < month; i++) {

    // 循环的过程就是累加之前每一个月的总天数的过程

    switch (i) {

        case 1:

        case 3:

        case 5:

        case 7:

        case 8:

        case 10:

        case 12:

            count += 31;

        break;

        case 4:

        case 6:

        case 9:

        case 11:

            count += 30;

        break;

        case 2:

            if (isRun) {

                // 说明是闰年

                count += 29;

            } else {

                // 说明是平年

                count += 28;

            }

    }

}

count += day;
console.log("今天是今年的第" + count + "天")
}
add()