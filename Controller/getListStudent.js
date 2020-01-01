var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  get: (req, res) => {
    let courseID = req.params.courseID
    let courseChar = req.params.courseChar
    sql = 'Select * from studentcourse where courseID = ? and courseChar = ?;'

    db.query(sql, [courseID, courseChar], (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(401).json({ message: 'No student exists' })
        }
      }
    })
  }
}