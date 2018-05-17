const Sequilize = require('sequelize')
const db = require('./_db')

const User = db.define('User', {
  email: {
    type: Sequilize.STRING(100)
  },
  password: {
    type: Sequilize.STRING(200)
  },
  nickname: {
    type: Sequilize.STRING
  },
  gender: {
    type: Sequilize.INTEGER
  }
})

module.exports = User;