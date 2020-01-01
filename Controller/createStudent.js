var express = require('express')
var mysql = require('mysql')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let studentID = req.body.studentID
    let token = req.body.token
    let decode = jwt.decode(token)
    let secretNumber = '1234'
    let email = req.body.studentID + '@uet.vnu.edu.vn'
    // let image = req.body.image
    let saltRounds = 14
    let studentName = req.body.studentName
    let classStudent = req.body.classStudent
    let sql = 'INSERT into user (studentID, userName, passWord, email, studentName, classStudent) values (?, ?, ?, ?, ?, ?);'

    if (decode.userName == 'admin') {
      bcrypt.hash(secretNumber, saltRounds, (err, hash) => {
        if (err) res.json(err)
        else {
          db.query(sql, [studentID, studentID, hash, email, studentName, classStudent], (err, result) => {
            if (err) res.json(err)
            else {
              if (result) {
                res.status(200).json({ message: 'Create sucessed' })
              }
            }
          })
        }
      })
    }
  }
}