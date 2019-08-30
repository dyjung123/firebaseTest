import * as express from 'express'
import * as firebaseRouter from './routes/firebase'

const app = express()
const port = 3000

app.use
app.use(express.json())
app.use(express.static('public')) // 기본 호스팅 경로.
app.use('/firebase',firebaseRouter)

app.listen(port, ()=>{
    console.log("Server "+port+"is start....")
})
