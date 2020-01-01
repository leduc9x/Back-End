var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  get: (req, res) => {
    let studentID = req.params.studentID
    sql = 'Select * from user where studentID = ?;'

    db.query(sql, studentID, (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(401).json({message: 'Student doesn\'t exist'})
        }
      }
    })
  }
}