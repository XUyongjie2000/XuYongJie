const http = require("http");
const url = require("url");

let app = http.createServer();

app.on("request", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8",
  });
  // console.log(req.url);
  let params = url.parse(req.url, true);
  // console.log(params.query.username, params.query.password);

  if (
    params.query.username == "胥永杰" &&
    params.query.password == "88888888"
  ) {
    res.write("欢迎您" + params.query.username);
  } else {
    res.write("账号或密码错误");
  }
  res.end();
});
app.listen(80, () => {
  console.log("http://localhost");
});

