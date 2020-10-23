// 1.将字符串 var str="abcdefgh"进行反转，结果是 "hgfedcba"
var str = "abcdefgh";
var newstr = "";
for (var i = str.length - 1; i >= 0; i--) {
  newstr += str[i];
}
console.log(newstr);
