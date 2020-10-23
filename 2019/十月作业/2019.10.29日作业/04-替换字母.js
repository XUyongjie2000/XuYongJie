// 4. var str= 'qweqweoeqweroqweqweodfsfdo'
//   1)查找字符串中所有字母 'o'出现的位置
//   2)把字符串中的所有字母'o'替换成 '-';
var str = "qweqweoeqweroqweqweodfsfdo";
var newStr = "";
for (var i = 0; i < str.length; i++) {
  if (str[i] == "o") {
    console.log(i);
    newStr += "-";
  } else {
    newStr += str[i];
  }
}
console.log(newStr);
