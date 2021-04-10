const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user')
const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/userRegistration"

mongoose.connect(db, err => {
if(err){
    console.error('Error!' + err)
}else{
    console.log('Connected to mongodb')
}
})

router.get('/', (req, res) =>{
    res.send("From Api Route")
})

router.post('/register', (req, res) =>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registedUser) => {
        if(error){
            console.log(error)
        }else{
            let payload = { subject: registedUser._id}
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res)=>{
    let userData = req.body

    User.findOne({email: userData.email},(error, user) =>{
        if(error){
            console.log(error);
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else
            if(user.password !== userData.password){
                res.status(401).send('Invalid password')


            }else{
                let payload = { subject: user._id}
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
}) 



module.exports= router