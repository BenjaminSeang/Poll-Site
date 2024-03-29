const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports = {

    register: (req, res)=>{
        const user = new User(req.body);
        
            user.save()
            .then((newUser)=>{
                console.log(newUser);
                console.log("Registration Successful");
                res.json({
                    successMessage: "Registration Successful",
                    user: newUser
                });
            })
            .catch((err)=>{
                console.log("Registration Failed")
                res.status(400).json(err);
            })

    },

    login: (req, res)=>{
        User.findOne({email: req.body.email})
            .then((userRecord)=>{
                //username not found
                if(userRecord === null){
                res.status(400).json({message: "Invlaid Email/Password"})
                }
                //username is found
                else{
                    bcrypt.compare(req.body.password, userRecord.password) 
                        .then((isPasswordValid)=>{
                            if(isPasswordValid){
                                console.log("password is valid");
                                //if valid password
                                //set and encrypt cookie
                                res.cookie(
                                    "usertoken",
                                    jwt.sign(
                                        {
                                            //remember these variable names, you'll need them
                                            userid: userRecord._id,
                                            email: userRecord.email,
                                            username: userRecord.username,
                                        },
                                        process.env.JWT_SECRET
                                    ),
                                    //make the cookie can only be read by server, security
                                    //expire after 9000000 ms
                                    {
                                        httpOnly: true,
                                        expires: new Date(Date.now() + 9000000)
                                    },
                                ).json({
                                    message: "Succesfully",
                                    userLoggedIn: userRecord.username,
                                    userid: userRecord._id,
                                });
                            }
                            else{
                                res.status(400).json({
                                    message: "Invlaid Email/Password"
                                })
                            }
                            
                        })
                        .catch((err)=>{
                            console.log(err);
                            res.status(400).json({ message: "Invlaid Email/Password" });
                        })
                }
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json({ message: "Invlaid Email/Password" });
            })

    },

    logout: (req, res) => {
        console.log("logging out");
        res.clearCookie("usertoken");
        res.json({
            message: "You have successfully logged out",
        });
    },


    getLoggedInUser: (req, res) => {
        User.findOne({ _id: req.jwtpayload.userid })
            .then(user => res.json(user))
            .catch(err => res.json(err))
    },

    findAllUsers: (req, res) => {
        User.find()
            .then((allUsers) => {
                res.json(allUsers);
            })
            .catch((err) => {
                console.log("Find All Users failed");
                res.json({ message: "Error in findAllUsers", error: err });
            })
    },

    deleteUser:(req, res) => {
        User.deleteOne({_id: req.params.userid})
        .then((deleteConfirm) => {
            console.log(deleteConfirm);
            res.json(deleteConfirm);
        })
        .catch((err) => {
            console.log("Delete user failed");
            res.json({message: "Error in deleteUser", error: err});
        })
    }


}
