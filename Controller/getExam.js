var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  get: (req, res) => {
    let scheduleID = req.params.scheduleID
    sql = 'Select * from exam where scheduleID = ?;'

    db.query(sql, [scheduleID], (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(401).json({ message: 'No exam exists' })
        }
      }
    })
  }
}