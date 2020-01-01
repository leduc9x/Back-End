var express = require('express')
var mysql = require('mysql')
var jwt = require('jsonwebtoken')
var db = require('./../Database/database')


module.exports = {
  post: (req, res) => {
    let examID = req.body.examID
    let scheduleID = req.body.scheduleID
    let room = req.body.room
    let courseID = req.body.courseID
    let courseName = req.body.courseName
    let token = req.body.token
    let decode = jwt.decode(token)
    let sql = 'INSERT INTO registerexam (studentID, courseID, examID, scheduleID, courseName, room)  VALUES (?, ?, ?, ?, ?, ?);'
    let sqlCheckBan = 'Select banStatus from studentcourse where studentID = ? and courseID = ? and courseName = ?;'
    let sqlCheck = 'Select slot, totalSlot from exam where examID = ? and scheduleID = ? and courseID = ? and room = ? and courseName = ?;'
    let insertSlot = 'UPDATE exam SET slot = ? WHERE (examID = ?) and (scheduleID = ?) and (courseID = ?) and (room = ?);'

    db.query(sqlCheckBan, [decode.userName, courseID, courseName], (err, resBan) => {
      if (err) res.json(err)
      else {
        if (resBan !== '0') {
          db.query(sql, [decode.userName, courseID, examID, scheduleID, courseName, room], (err, result) => {
            if (err) {
              res.json(err)
            }
            else {
              db.query(sqlCheck, [examID, scheduleID, courseID, room, courseName], (err, resCheck) => {
                if (err) {
                  res.json(err)
                }
                else {
                  db.query(insertSlot, [resCheck[0].slot + 1, examID, scheduleID, courseID, room], (err, resInsert) => {
                    if (result && resInsert) {
                      res.status(200).json({ message: 'Register success.' })
                    }
                    else if (result && !resCheck) {
                      res.status(401).json(resCheck.slot)
                    }
                    else if (!result && resInsert) {
                      res.status(402).json(result)
                    }
                  })
                }
              })
            }
          })
        }
      }
    })
  }
}