// 9.已知字符串："this is a test of java"
// (1) 取出子字符串"test"
// (2) 将'java'替换为'JAVASE'
var str = "this is a test of java";
var arr = str.split(" ");
console.log(arr[3]);
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == "java") {
    arr[i] = "JAVASE";
  }
}
var str = arr.join(" ");
console.log(str);
