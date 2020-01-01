var express = require('express')
var mysql = require('mysql')
var jwt = require('jsonwebtoken')
var db = require('./../Database/database')

module.exports = {
  post: (req, res) => {
    let token = req.body.token
    let decode = jwt.decode(token)
    let scheduleID = req.body.scheduleID
    let schoolYear = req.body.schoolYear
    let sql = 'INSERT INTO schedule (scheduleID, schoolYear) VALUES (?, ?);'

    if (decode.userName === 'admin') {
      db.query(sql, [scheduleID, schoolYear], (err, result) => {
        if (err) throw err
        else {
          if (result) {
            res.status(200).json({message: 'Create success'})
          }
          else {
            res.status(401).json({ message: 'No subject exists' })
          }
        }
      })
    }
    
  }
}