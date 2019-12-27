var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  get: (req, res) => {
    let msv = req.body.msv
    let sql = 'select * from sinhvien where msv = ?;'

    db.query(sql, msv, (err, result) => {
      if (err) throw err
      else if (result) {
        res.status(200).json(result)
      }
      else {
        res.status(400).json({message: 'Student not exist'})
      }
    })
  }
}