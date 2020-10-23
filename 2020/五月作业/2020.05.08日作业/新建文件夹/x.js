const http = require("http");

let app = http.createServer();

app.on("request", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8",
  });
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("首页");
  }
  if (req.url == "/list") {
    res.end("列表页");
  }
  if (req.url == "/article") {
    res.end("文章页");
  }
});
app.listen(80, () => {
  console.log("http://localhost");
});
