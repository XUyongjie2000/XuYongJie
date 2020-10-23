// //条件语句：if(if..else  if ..else  if ..else ) switch
// // if else if else if else ... else 多个脚尖

// 总结  在多分支条件语句中  switch比if else 好的就是 清晰 但是要等值 不能进行逻辑判断

// switch
//  switch(key){
//      case value :

//       break

//       default:

//       break
//  }

var num = 7; //  周一
switch (num) {
  case 1:
    console.log("今天是周一");
    break; // 打断 停止的意思
  case 2:
    console.log("今天是周二");
    break;
  case 3:
    console.log("今天是周三");
    break;
  case 4:
    console.log("今天是周四");
    break;
  case 5:
    console.log("今天是周五");
    break;
  case 6:
    console.log("今天是周六");
    break;
  case 7:
    console.log("今天是周日");
    break;
}

var num = 4;
switch (num) {
  case 1:
    console.log("一帆风顺");
    break;
  case 2:
    console.log("二龙戏珠");
    break;
  case 3:
    console.log("三羊开泰");
    break;
  case 4:
    console.log("四季平安");
    break;
  case 5:
    console.log("五福临门");
    break;
  case 6:
    console.log("六六大顺");
    break;
  case 7:
    console.log("七星高照");
    break;
  case 8:
    console.log("八仙过海");
    break;
  case 9:
    console.log("九九归一");
    break;
  case 10:
    console.log("十全十美");
    break;
    default:
        console.log('您输入有错误')
}
