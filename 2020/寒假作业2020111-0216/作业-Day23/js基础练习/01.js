// `* ====`
// `** ===`
// `*** ==`
// `**** =`

for (var i = 1; i <= 4; i++) {
  var str = "";
  for (var j = 1; j <= i; j++) {
    str += "*";
  }
  for (var k = 0; k <= 4 - i; k++) {
    str += "=";
  }
  console.log(str);
}

