var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')


module.exports = {
  get: (req, res) => {
    let sql = 'Select * from monthi group by tenmonthi'

    db.query(sql, (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
      }
    })
  }
  

}
