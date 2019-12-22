var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')



module.exports = {
  post: (req, res) => {
    let userName = req.body.userName
    let passWord = req.body.passWord
    let sql = 'Select * from sv where msv = ? and mk = ?;'

    db.query(sql, [userName, passWord], (err, result)  => {
      if (err) throw err
      else {
        if (result[0] != null) {
          res.status(200).json({message: 'Success'})
        }
        else {
          res.status(401).json({message: 'Authenticated failed. Unable to connect'})
        }
      }
    })
  }
}


