// 7. 随机产生一个十六进制的颜色值 ,格式：#90E353

var colors = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E"
];
var str = "#";
for (var i = 0; i < 6; i++) {
  str += colors[parseInt(Math.random() * 16 - 1)];
}
console.log(str);
