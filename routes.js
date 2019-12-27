let userLogin = require('./Controller/userLogin')
let createPassword = require('./Controller/createPassword')
let selectSubject = require('./Controller/selectSubject')
let getStudentInfor = require('./Controller/getInforStu')
let getRoom = require('./Controller/getRoom')

module.exports = (app) => {
  app.route('/')
    .post(userLogin.post)

  app.route('/createPass')
    .post(createPassword.post)

  app.route('/selectSub')
    .get(selectSubject.get)

  app.route('/getStudentInfo')
    .get(getStudentInfor.get)

  app.route('/getRoomInfo')
    .get(getRoom.get)
}
