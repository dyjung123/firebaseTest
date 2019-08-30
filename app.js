const express = require('express')

const app = express()
const port = 3000

const {firebaseRouter} = require('./routes/firebase')

app.use(express.json())
app.use(express.static('public')) // 기본 호스팅 경로.
app.use('/firebase',firebaseRouter)

app.listen(port, ()=>{
    console.log("Server "+port+"is start....")
})
