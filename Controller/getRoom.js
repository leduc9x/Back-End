var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
  get: (req, res) => {
    let subName = req.body.subName
    let sql = 'select * from cathi ' +
    'join monthi on cathi.macathi = monthi.macathi ' +
    'join phongthi on cathi.macathi = phongthi.macathi and monthi.maphongthi = phongthi.maphongthi ' +
    'where monthi.tenmonthi = ?;'

    db.query(sql, subName, (err, result) => {
      if (err) throw err
      else {
        if (result) {
          res.status(200).json(result)
        }
        else {
          res.status(400).json({message: 'Sai ten mon hoc'})
        }
      }
    })
  }
}