let userLogin = require('./Controller/userLogin')
let userRegister = require('./Controller/userRegister')
let createPassword = require('./Controller/createPassword')
let selectSubject = require('./Controller/selectSubject')

module.exports = (app) => {
  app.route('/')
    .post(userLogin.post)
  
  app.route('/Login')
    .post(userRegister.post)

  app.route('/createPass')
    .post(createPassword.post)

  app.route('/selectSub')
    .get(selectSubject.get)
}
