var express = require('express')
var mysql = require('mysql')
var db = require('../Database/database')

module.exports = {
  get: (req, res) => {
    let courseChar = req.params.courseChar
    sql = 'Select * from exam where courseChar = ?;'

    db.query(sql, [courseChar], (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(401).json({ message: 'This exam is non-exist any term' })
        }
      }
    })
  }
}