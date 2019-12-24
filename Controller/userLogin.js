var express = require('express')
var mysql = require('mysql')
var bcrypt = require('bcrypt')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let userName = req.body.userName
    let passWord = req.body.passWord
    let sql = 'Select * from sinhvien where msv = ?;'

    db.query(sql, userName, (err, result)  => {
      if (err) throw err
      else {
        if (result[0] != null) {
          bcrypt.compare(passWord, result[0].matkhau, (err, respond) => {
            if (err) throw err
            else if (!respond) {
              res.status(401).json({ message: 'Wrong password. Please try again' })
            }
            else {
              res.status(200).json({message: 'Successed'})
            }
          })
        }
        else {
          res.status(401).json({message: 'Authenticated failed. Unable to connect'})
        }
      }
    })
  }
}


