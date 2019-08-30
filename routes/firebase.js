const express = require('express')
const bodyParser = require('body-parser')
const firebaseRouter = express.Router()

const firebaseApi = require('../api/firebase')
userRouter.use(bodyParser.urlencoded({ extended: true }))

// middleware that is specific to this userRouter
userRouter.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next() // next: 다음 로직 수행을 위한 함수명
})



module.exports = {
    firebaseRouter
}