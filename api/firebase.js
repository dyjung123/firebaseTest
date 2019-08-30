import * as firebase from 'firebase'
import * as firebaseConfig from '../config/config'

firebase.initializeApp(firebaseConfig)

const create = async (req,res,next)=>{
    const {userid,username,userpassword} = req.body
    
    
}

module.exports = {
    create,
    findall,
    deleteone
}