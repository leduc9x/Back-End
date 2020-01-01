let userLogin = require('./Controller/userLogin')
let createPassword = require('./Controller/createPassword')
let getStudentID = require('./Controller/getStudentID')
let getListCourse = require('./Controller/getListCourse')
let getListRoom = require('./Controller/getListRoom')
let getCourse = require('./Controller/getCourses')
let getListStudent = require('./Controller/getListStudent')
let getListAllStudent = require('./Controller/getListAllStudent')
let getSchedule = require('./Controller/getSchedule')
let getExam = require('./Controller/getExam')
let getRoom = require('./Controller/getRoom')
let getRegisterExam = require('./Controller/getRegisterExam')
let registerRoom = require('./Controller/registerRoom')
let createCourse = require('./Controller/createCourse')
let createStudent = require('./Controller/createStudent')
let changeBanStatus = require('./Controller/changeBanStatus')
let createSchedule = require('./Controller/createSchedule')
let createExam = require('./Controller/createExam')
let unregisterRoom = require('./Controller/unRegisterRoom')

module.exports = (app) => {
  app.route('/')
    .post(userLogin.post)

  app.route('/createPass')
    .post(createPassword.post)

  app.route('/getStudentID/:studentID')
    .get(getStudentID.get)

  app.route('/getListCourses/:studentID')
    .get(getListCourse.get)

  app.route('/getListRoom/:courseChar')
    .get(getListRoom.get)

  app.route('/getCourse')
    .get(getCourse.get)

  app.route('/getListStudent/:courseID/:courseChar')
    .get(getListStudent.get)

  app.route('/getAllStudent')
    .get(getListAllStudent.get)

  app.route('/getSchedule')
    .get(getSchedule.get)

  app.route('/getExam/:scheduleID')
    .get(getExam.get)

  app.route('/getRoom/:examID/:scheduleID')
    .get(getRoom.get)

  app.route('/getRegisterExam/:studentID')
    .get(getRegisterExam.get)

  app.route('/registerRoom')
    .post(registerRoom.post)

  app.route('/createCourse')
    .post(createCourse.post)

  app.route('/createStudent')
    .post(createStudent.post)

  app.route('/changeBan')
    .post(changeBanStatus.post)

  app.route('/createSchedule')
    .post(createSchedule.post)

  app.route('/createExam')
    .post(createExam.post)

  app.route('/unregisterRoom')
    .post(unregisterRoom.post)
}
