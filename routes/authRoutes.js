const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const UserController = require('./controller/UserController');
const User = require("C:/Users/werka/OneDrive/Pulpit/Apka/ReminderMedApp/models/User");
//const User = mongoose.model('User');

router.post('/Sign_Up_Zar_Screen',(req,res)=>{
    res.send('rejestracja?')
    const { login, name, password } = req.body;
    if (!login || !name || !password) {
        
        return res.status(422).send({error:'fill gaps'});
      }

})
module.exports=router;