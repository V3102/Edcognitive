const User = require("../models/user-model");
const bcryptjs = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send('vaibhav by router HOME');
    } catch (error) {
        console.log("error");
    }
} 

const register = async (req, res) => {
    try {
        
        const { username, email, phone, password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "email exist"});
        }
        const userCreated = await User.create({username, email, phone, password});
        
    } catch (error) {
        console.log("error");
    }
};

const login = async (req, res) => {
    try {
        res.status(200).send('vaibhav by router LOGIN');
    } catch (error) {
        console.log("error");
    }
};

module.exports = {home, register, login};
