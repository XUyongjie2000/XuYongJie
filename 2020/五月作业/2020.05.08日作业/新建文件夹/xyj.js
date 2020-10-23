const http = require("http");
const querystring = require("querystring");
let xyj = http.createServer();
xyj.on("request", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html;charset=utf8",
  });
  let postData = "";
  req.on("data", (chunk) => {
    postData += chunk;
  });
  req.on("end", () => {
    console.log(postData);
    let finalData = querystring.parse(postData);
    console.log(finalData);
  });
});
xyj.listen(3000, () => {
  console.log("http://localhost");
});



