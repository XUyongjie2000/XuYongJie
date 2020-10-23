const express = require('express')
const getPage = express.Router()
const DB = require('../data')
getPage.get('/api/getPage', (req, res) => {
  // console.log(req.query)
  DB.findPage(parseInt(req.query.pageNum), parseInt(req.query.pageSize), function (data) {
    // console.log(data);
    if (data) {
      res.status(200).send({
        code: 200,
        msg: '数据查询成功',
        data: data
      });
    }
  })
})

module.exports = getPage