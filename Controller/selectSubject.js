var express = require('express')
var mysql = require('mysql')
var jwt = require('jsonwebtoken')
var bcrypt = require ('bcrypt')
var db = require('./../Database/database')


module.exports = {
  get: (req, res) => {
    let token = req.body.token
    let decode = jwt.decode(token)
    let sql = 'Select * from monthi group by tenmonthi'
    let sqlToken = 'Select * from sinhvien where msv = ? and matkhau = ?;'

    db.query(sqlToken, [decode.userName, decode.passWord], (err, result) => {
      if (err) throw err
      else {
        if (result) {
          db.query(sql, (err, respond) => {
            if (err) throw err
            else {
              if (respond) {
                res.status(200).json(respond)
              }
              else {
                res.status(400).json({message: 'Failed'})
              }
            }
          })
        }
      }
    })
    
  }
  

}
