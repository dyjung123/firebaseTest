import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as firebaseApi from '../api/firebase'

const firebaseRouter = express.Router()
firebaseRouter.use(bodyParser.urlencoded({ extended: true }))

firebaseRouter.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next() // next: 다음 로직 수행을 위한 함수명
})

firebaseRouter.post('/create',firebaseApi.create)
firebaseRouter.get('/findall',firebaseApi.findall)
firebaseRouter.delete('/deleteone',firebaseApi.deleteone)

module.exports = {
    firebaseRouter
}