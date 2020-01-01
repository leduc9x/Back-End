var express = require('express')
var mysql = require('mysql')
var jwt = require('jsonwebtoken')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let token = req.body.token
    let decode = jwt.decode(token)
    let scheduleID = req.body.scheduleID
    let examID = req.body.examID
    let room = req.body.room
    let dateTime = req.body.dateTime
    let startTime = req.body.startTime
    let endTime = req.body.endTime
    let slot = 0
    let totalSlot = req.body.totalSlot
    let courseID = req.body.courseID
    let courseName = req.body.courseName
    let courseChar = req.body.courseChar
    let sql = 'INSERT INTO exam (examID, scheduleID, courseID, courseName, courseChar, room, startTime, endTime, slot, totalSlot, dateTime) VALUES ' + 
    '(?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?);'
    let sqlCheckStudent = 'Select * from course where courseID = ? and courseChar = ? and courseName = ?;'

    if (decode.userName === 'admin') {
      db.query(sqlCheckStudent, [courseID, courseChar, courseName], (err, resCheck) => {
        if (err) {
          res.json(err)
        }
        else {
          db.query(sql, [examID, scheduleID, courseID, courseName, courseChar, room, startTime, endTime, slot, totalSlot, dateTime], (err, result) => {
            if (err) throw err
            else {
              if (result) {
                res.status(200).json({ message: 'Create success' })
              }
              else {
                res.status(401).json({ message: 'No subject exists' })
              }
            }
          })
        }
      })
      
    }

  }
}