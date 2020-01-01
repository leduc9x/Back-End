var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {

    let studentID = req.body.studentID
    let courseName = req.body.courseName
    sql = 'delete from registerexam where studentID = ? and courseName = ?;'

    db.query(sql,[studentID, courseName], (err, result) => {
      if (err) res.json(err)
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