var express = require('express')
var mysql = require('mysql')
var db = require('./../Database/database')

module.exports = {
    post: (req, res) => {
        let studentID = req.body.studentID
        let sql = "DELETE from user WHERE (studentID = ?);"
        db.query(sql, [studentID], (err, result) => {
            if (err) throw err
            else {
                if (result) {
                    res.status(200).json({message: 'delete success'})
                  }
                  else {
                    res.status(401).json({ message: 'No student delete' })
                  }
            }
        })
    }
}