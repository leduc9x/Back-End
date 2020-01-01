var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let studentID = req.body.studentID
    //using excel file
    let sql = 'Select * from registerExam where studentID = ?;'

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