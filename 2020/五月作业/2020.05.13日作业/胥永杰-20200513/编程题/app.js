const express = require('express')
const path = require('path')
const app = express()
app.use(express.urlencoded())
// 静态目录
app.use( express.static(path.join(__dirname, 'public')))
console.log(path.join(__dirname, 'public'));

// app.get('/https://autumnfish.cn/api/joke', (req, res) => {
//     console.log(req.query);
// })

app.listen(80, function () {
    console.log('请打开http://localhost');
})