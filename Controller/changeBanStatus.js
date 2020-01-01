var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let studentID = req.body.studentID
    let courseChar = req.body.courseChar
    let courseID = req.body.courseID
    let sqlCheckBan = 'select * from studentcourse where studentID = ? and courseChar = ? and courseID = ?;'
    let sql = 'UPDATE studentcourse SET banStatus = ? WHERE studentID = ? and courseChar = ? and courseID = ?;'

    db.query(sqlCheckBan, [studentID, courseChar, courseID], (err, resCheck) => {
      if (err) res.json(err)
      else {
        if (resCheck[0].banStatus === 0) {
          let checkBan = 1
          db.query(sql, [checkBan, studentID, courseChar, courseID], (err, result) => {
            if (err) throw err
            else {
              if (result) {
                res.status(200).json({message: 'Sucessed'})
              }
              else {
                res.status(401).json({ message: 'This student doesnt exists' })
              }
            }
          })
        }
        else if (resCheck[0].banStatus === 1){
          let checkBan = 0
          db.query(sql, [checkBan, studentID, courseChar, courseID], (err, result) => {
            if (err) throw err
            else {
              if (result) {
                res.status(200).json(result)
              }
              else {
                res.status(401).json({ message: 'This student doesnt exists' })
              }
            }
          })
        }
        else {
          res.json({message: 'failed'})
        }
      }
    })
    
  }
}