// console.log('Hello Word')
// console.log(100)
// console.log('舒磊大傻逼')
// console.log('舒磊我儿子')
// // 这行是注释
// var name = '傻逼舒磊'
// var age ='20'
// age =50
// console.log(age)
// const NAME = '大傻逼舒磊'
// const SCHOOL = '传智'
// /*
// console.log('Hellow Word')
// console.log(100)
// console.log('舒磊傻逼')
// console.log('舒磊是我儿子')
// // 这行是注释啊
// var name ='傻逼大舒磊'
// var age ='20'
// age = 50
// console.log(age)
// const NAME ='傻逼大舒磊'
// const SCHOOL = '传智'

// console.log（'Hello Word'）
// console.log(100)
// console.log('舒磊傻逼')
// console.log('舒磊是我儿子')
// // 这行是注释
// var name = （'傻逼大舒磊’）
// var age = '20'
// age = 50
// console.log(age)
// const NAME ='大傻逼是舒磊'
// const SHOOLE ='传智'
// */

var count = 0;
var sum = 0;
for (var i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
    count++;
  }
}
console.log(sum);
console.log(count);

var year = 2019;
if ((year % 4 == 0 && i % 100 !== 0) || i % 400 == 0) {
  console.log("闰年");
} else {
  console.log("平年");
}

var count = 0;
for (var i = 2000; i <= 3000; i++) {
  if ((i % 4 == 0 && i % 100 !== 0) || i % 400 == 0) {
    count++;
  }
}
console.log(count);

for (var i = 200; i <= 300; i++) {
  if (i % 5 == 0 && i % 6 !== 0) {
    console.log(i);
  }
}
