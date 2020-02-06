var express = require('express')
var mysql = require('mysql')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var db = require('./../Database/database')

module.exports = {
    post: (req, res) => {
        let studentID = req.body.studentID
        let email = req.body.studentID + '@uet.vnu.edu.vn'
        let studentName = req.body.studentName
        let classStudent = req.body.classStudent
        let sql = 'INSERT into user (studentID, userName, passWord, email, studentName, classStudent) values (?, ?, ?, ?, ?, ?);'
        db.query(sql, [studentID, studentID, studentID, email, studentName, classStudent], (err, result) => {
            if (err) res.json(err)
            else {
                if (result) {
                    res.status(200).json({ message: 'Create sucessed' })
                }
            }
        })
    }
}