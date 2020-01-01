var express = require('express')
var mysql = require('mysql')
var jwt = require('jsonwebtoken')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let courseID = req.body.courseID
    let courseChar = req.body.courseChar
    let courseName = req.body.courseName
    let token = req.body.token
    let decode = jwt.decode(token)
    let sql = 'INSERT INTO course (courseChar, courseID, courseName) VALUES (?, ?, ?);'

    if (decode.userName == 'admin') {
      db.query(sql, [courseChar, courseID, courseName], (err, result) => {
        if (err) throw err
        else {
          if (result) {
            res.status(200).json({message: 'Create sucessed.'})
          }
          else {
            res.status(401).json({ message: 'Failed to create' })
          }
        }
      })
    }
    else {
      res.json({message: 'Authenticate failed. Unable to create course.'})
    }

  }
}