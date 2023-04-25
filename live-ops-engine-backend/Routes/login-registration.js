const express = require('express');
const userInfo = require('../Schemas/userInfo');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const secret = "random-string"
// middleware bodyparser
router.use(bodyparser.urlencoded({ extended: false }))
router.use(bodyparser.json());

router.post('/registration', async (req, res) => {
    try {
        const isValidemail = await userInfo.findOne({ email: req.body.email })
        if (isValidemail) {
            res.status(400).json({
                status: "failed",
                message: "user is already registered"
            })
        }
        else {
            bcrypt.genSalt(saltRounds, (err, value) => {
                if (err) {
                    console.log(err);
                } else {
                    let data
                    bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
                        // Store hash in your password DB.
                        data = await userInfo.create(
                            {
                                name: req.body.name,
                                email: req.body.email,
                                password: hash
                            }
                        )
                    })
                    res.status(201).json({
                        status: "created successfully",
                        createdData: data
                    })
                }
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "failed",
            error
        })
    }
})

router.post('/login', async (req, res) => {
    try {
      
      const data = await userInfo.findOne({email : req.body.email}) ;

      bcrypt.compare(req.body.password,data.password).then(async(result)=>{
        if(result){

           const token =  await jwt.sign({id:data._id ,  username: data.name},secret) ;

            res.status(200).json({
                status: "success",
                name : data.name,
                message : "Login successfully",
                token : token
            })
        }else{
            res.status(400).json({
                status: "failed",
                message : "Invalid Password"
            })
        }
      })
    } catch (error) {
        res.status(500).json({
            status: "failed ",
            error
        })
    }
})

module.exports = router