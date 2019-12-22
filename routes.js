let userLogin = require('./Controller/userLogin')

module.exports = (app) => {
  app.route('/')
    .post(userLogin.post)
}