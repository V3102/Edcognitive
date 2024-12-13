const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send('vaibhav by router HOME');
    } catch (error) {
        console.log("error");
    }
} 

const register = async (req, res) => {
    try {

        const { username, email, phone, password, isAdmin} = req.body;

        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "email exist"});
        }
        const userCreated = await User.create({username, email, phone, password, isAdmin});

        res.status(201).json({
            msg: "registration successful", 
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } 

    catch (error) {
        res.status(500).json("internal server error");
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            returnres.status(400).json({message: "Invalid Credentials"});
        }

        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({
                msg: "Login successful", 
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        }
        else{
            res.status(401).json({message: "Invalid email or password"});
        }
    } 
    catch (error) {
        res.status(500).json("internal server error")
        console.log("error");
    }
};

module.exports = {home, register, login};
