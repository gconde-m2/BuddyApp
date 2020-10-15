const express = require("express")
const router = express.Router()
const passport = require("passport")
const bcrypt = require("bcrypt")
const transporter = require('../configs/nodemailer.config')

const User = require("../models/user.model")


router.post('/signup', (req, res, next) => {

     const username = req.body.username;
     const password = req.body.password;
     const email = req.body.email
     const cif = req.body.cif
     const associationName = req.body.associationName
     const imageUrl = req.body.imageUrl

    if (!username || !password || !email) {
        res.status(400).json({
            message: 'Empty fields'
        });
        return;
    }

    if (password.length < 2) {
        res.status(400).json({
            message: 'Weak password'
        });
        return;
    }
   
   
    
 
//    User.findOne({associationName})
//     .then((elm)=>{
//         console.log(elm)
//         if (elm) {
//             console.log("jaja")
//             paco = 1
//             res.status(405).json({
//                 message: 'assoc taken'
                
//             });
//             return 
//         }
//     })
    

        User.findOne({username}, (err, foundUser) => {
            
        if (err) {
            res.status(500).json({
                message: "Username check error"
            });
            return;
        }
  
        if (foundUser) {
            res.status(400).json({
                message: 'Username taken'
            });
            return;
        }
       
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(password, salt);
        if (req.body.cif) {
            aNewUser = new User({ //
                username: username,
                password: hashPass,
                cif: cif,
                email: email,
                associationName: associationName,
                imageUrl: imageUrl

            });
        } else {
            aNewUser = new User({ //
                username: username,
                password: hashPass,
                email: email,

            });
        }

        aNewUser.save(err => {
            if (err) {
                res.status(500).json({
                    message: 'Error saving user to DB'
                });
                return;
            }

            
            req.login(aNewUser, (err) => {

                if (err) {
                    res.status(500).json({
                        message: 'Login error'
                    });
                    return;
                }

                
                res.status(200).json(aNewUser);
            });
        });
    });
});


router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, theUser, failureDetails) => {
        if (err) {
            res.status(500).json({
                message: 'Error authenticating user'
            });
            return;
        }

        if (!theUser) {
           
            res.status(401).json(failureDetails);
            return;
        }

     
        req.login(theUser, (err) => {
            if (err) {
                res.status(500).json({
                    message: 'Session error'
                });
                return;
            }

            res.status(200).json(theUser);
        });
    })(req, res, next);
});



router.post('/logout', (req, res, next) => {
    req.logout();
    res.status(200).json({
        message: 'Log out success!'
    });
});


router.get('/loggedin', (req, res, next) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
        return;
    }
    res.status(403).json({
        message: 'Unauthorized'
    });
});

router.post('/sendEmail', (req, res) => {

    let {
        emailUser,
        emailOwner,
        subject,
        message
    } = req.body

    let mail = {
        from: emailUser,
        to: emailOwner,
        subject: subject,
        text: message,
        html: `<b>${message}</b>`
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            
            res.status(500).send({ status: 'FAIL', msg: 'Internal error: email not sent' })

        } else {
            
            res.status(200).json({ status: 'OK', msg: 'Email sent' })
        }
    })


})



module.exports = router