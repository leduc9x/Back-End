var express = require('express')
var mysql = require('mysql')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let userName = req.body.userName
    let passWord = req.body.passWord
    let sql = 'Select * from user where userName = ?;'

    db.query(sql, userName, (err, result)  => {
      if (err) throw err
      else {
        if (result[0] !== null) {
          let token = jwt.sign({ userName: userName, passWord: result[0].passWord }, 'Web')
          bcrypt.compare(passWord, result[0].passWord, (err, respond) => {
            if (err) throw err
            else if (respond) {
              res.status(200).json({ token, userName })
            }
            else {
              res.status(401).json({ message: 'Wrong password. Please try again' })
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


