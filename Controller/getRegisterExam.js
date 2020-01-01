var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  get: (req, res) => {
    let studentID = req.params.studentID
    let sql = 'select * from registerexam '+
    'join user on registerexam.studentID = user.studentID '+
    'join exam on exam.courseID = registerexam.courseID and exam.scheduleID = registerexam.scheduleID and exam.examID = registerexam.examID and exam.courseName = registerexam.courseName '+
    'where user.studentID = ? group by registerexam.courseName;' 

    db.query(sql, studentID, (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(401).json({ message: 'No subject exists' })
        }
      }
    })
  }
}