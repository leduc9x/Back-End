var express = require('express')
var mysql = require('mysql')
var jwt = require('jsonwebtoken')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let userName = req.body.userName
    let passWord = req.body.passWord
    let sql = 'select * from sinhvien where msv = ? and matkhau = ?;'
    let token = jwt.sign({userName: userName, passWord: passWord}, 'WebProject')

    db.query(sql, [userName, passWord], (err, result) => {
      if (err) throw err
      else {
        if (result.length == 1) {
          res.status(200).json(token)
        }
        else {
          res.status(400).json({message: 'Failed to load'})
        }
      }
    })
  }
}